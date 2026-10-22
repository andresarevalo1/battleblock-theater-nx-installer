# battleblock-theater-nx installer

[Español](README.md) · **English**

**Installer by DashX - Andres Arevalo** — <https://github.com/andresarevalo1>

The installer page of [BattleBlockRecomp-NX](https://github.com/andresarevalo1/BattleBlockRecomp-NX), the Nintendo
Switch port of *BattleBlock Theater*: **https://andresarevalo1.github.io/battleblock-theater-nx-installer/**

You give it your own copy of the Xbox 360 game (a game image, or the extracted game with its `default.xex`) and it
gives you a zip ready to extract into `sdmc:/switch/`. Everything runs in your browser: the game files never leave
your computer.

The code of this page is distributed under the **GPL-3.0**: the notices of the third-party works it is derived from
are in [`NOTICES.md`](NOTICES.md), as the licence requires.

## What it does

1. Finds `default.xex` (in the game image, or in the chosen folder, even one level down) and identifies it by its
   SHA-256 in `release/manifest.json`. The port is compiled from one exact executable (the XBLA World release), so
   the page refuses any other: it tells the same game in another release (by the title ID `58410A30` in the
   executable's header) apart from a different game.
2. Downloads `battleblock_theater.nro` and checks its SHA-256.
3. Writes the zip: the program, `battleblock.toml`, `LICENSES.txt` and, for a first installation, the game's files
   under `game/` (without the `$SYSTEMUPDATE` partition), all in `battleblock_theater/`. The update package leaves the
   game out and needs only `default.xex`.
4. Streams the zip to disk through the service worker, so it never has to fit in memory.

Nothing is made from the game here: the port translates the game's shaders on the console. So the page needs no
WebAssembly tools.

The page and the downloaded program are cached by the service worker: after the first visit it also works without a
connection.

## Layout

| Path | Contents |
|---|---|
| `index.html`, `app.js` | The page and its interface (English, Spanish, Brazilian Portuguese: `lib/i18n.js`) |
| `worker.js` | Builds the package off the main thread |
| `sw.js` | Offline cache and the download stream |
| `lib/` | Image reader, identification and packaging, zip writer |
| `release/` | The list of builds, the settings file and the licences that go into the zip |
| `test/` | Node scripts that run the same code as the page (a synthetic game, and a real one) |

## Deployment

The NRO is not stored here. It is the `battleblock_theater.nro` asset of a release of
[andresarevalo1/BattleBlockRecomp-NX](https://github.com/andresarevalo1/BattleBlockRecomp-NX/releases). The workflow
in `.github/workflows/deploy.yml` tests the package code, downloads the NRO from the latest release, checks its
SHA-256 against `release/manifest.json`, and publishes the page on GitHub Pages. It runs on every push to `main`;
after publishing a new release, run it by hand from the Actions tab.

To publish a new build: update `nro_sha256` in `release/manifest.json`, copy `release/battleblock.toml` from the
BattleBlockRecomp-NX release, and rebuild `release/LICENSES.txt` from its `LICENSE` and `NOTICE`.

## Testing locally

```sh
node test/package_node.mjs [path/to/default.xex]
node test/real_folder.mjs [path/to/the/extracted/game]
cp /path/to/battleblock_theater.nro release/
python3 serve.py           # http://127.0.0.1:8194/
```

With a path to your own `default.xex`, the tests also check that the manifest knows it and that a real copy is
packaged correctly.

## Licence

GPL-3.0 (`LICENSE`). Third-party parts are listed in [NOTICES.md](NOTICES.md).

*BattleBlock Theater* is a trademark of The Behemoth. This page is an unofficial fan project and is not affiliated
with, endorsed or sponsored by The Behemoth, Nintendo or Microsoft.
