// Checks the page's code against a real extracted game: identifies the copy,
// confirms the manifest knows it and builds a package with a few of its real
// files. Usage: node test/real_folder.mjs [path to the extracted game]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createPackage, identifyGame, rootAtExecutable, sha256 } from '../lib/installer.js';

const root = process.argv[2] || 'E:/BattleBlockRecomp/bbt-recomp/extracted';

let failed = 0;
function expect(condition, what) {
  console.log(`${condition ? 'ok  ' : 'FAIL'} ${what}`);
  if (!condition) {
    failed++;
  }
}

// The files of the folder, with the same shape the page gives to the worker.
function list(dir, prefix = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      out.push(...list(full, rel));
    } else {
      const stat = fs.statSync(full);
      out.push({
        path: rel,
        size: stat.size,
        read: async (o, n) => {
          const fd = fs.openSync(full, 'r');
          try {
            const buffer = Buffer.alloc(n);
            fs.readSync(fd, buffer, 0, n, o);
            return new Uint8Array(buffer);
          } finally {
            fs.closeSync(fd);
          }
        },
      });
    }
  }
  return out;
}

const files = rootAtExecutable(list(root));
const manifest = JSON.parse(fs.readFileSync(new URL('../release/manifest.json', import.meta.url), 'utf8'));
const id = await identifyGame(files, manifest);
expect(Boolean(id.build), `the copy is known to the manifest (hash ${id.xexHash.slice(0, 12)}Ã¢â‚¬Â¦)`);
expect(id.complete, "the game's data folder (GameData) is there");
expect(id.titleId === 0x58410a30, `title ID 0x${(id.titleId >>> 0).toString(16)}`);

// A package with the executable and a handful of real files: enough to check
// that the real data goes into the zip as it should.
const sample = files.filter((f) =>
  f.path === 'default.xex' || f.path.endsWith('.png') || f.path.endsWith('.xml') || f.path.startsWith('GameData/Playlists/'));
const dataFiles = files.filter((f) => f.path.startsWith('GameData/Playlists/'));
expect(dataFiles.length > 0, 'the GameData folder has files to copy');
const release = {
  manifest,
  nro: new Uint8Array([0x4e, 0x52, 0x4f, 0x30]),
  toml: new TextEncoder().encode('nx_renderer = "native"\n'),
  licenses: new TextEncoder().encode('licences\n'),
};
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'bbtnx-real-'));
const zip = path.join(dir, 'battleblock-theater-nx.zip');
const fd = fs.openSync(zip, 'w');
await createPackage(sample, release, {
  async write(b) { fs.writeSync(fd, b); },
  async close() { fs.closeSync(fd); },
});
const python = process.platform === 'win32' ? 'python' : 'python3';
const out = execFileSync(python, ['-c', `
import sys, zipfile
z = zipfile.ZipFile(sys.argv[1])
print("CRC-OK" if not z.testzip() else "BAD")
print(len(z.infolist()))
`, zip]).toString().trim().split('\n');
expect(out[0].trim() === 'CRC-OK', 'package with real files: every CRC checks');
console.log(`     ${out[1]} entries in the package, ${sample.length} files copied`);
fs.rmSync(dir, { recursive: true, force: true });
console.log(failed ? `${failed} failed` : 'all passed');
process.exit(failed ? 1 : 0);
