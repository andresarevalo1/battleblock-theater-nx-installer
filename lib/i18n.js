// GPL-3.0. Port and installer by DashX - Andres Arevalo (https://github.com/andresarevalo1).
// Third-party notices: see NOTICES.md in the repository root.


export const LANGUAGES = [
  { code: 'en', name: 'English', short: 'EN' },
  { code: 'es', name: 'Español', short: 'ES' },
  { code: 'pt-BR', name: 'Português (Brasil)', short: 'PT' },
];

const HB = '<a href="https://github.com/andresarevalo1/BattleBlockRecomp-NX#instalación-en-la-switch" target="_blank" rel="noopener">README</a>';

const TEXTS = {
  en: {
    lead:
      'Builds the <strong>Nintendo Switch</strong> package of <strong>BattleBlock Theater</strong> from your own ' +
      '<strong>Xbox 360</strong> copy. Everything runs in <strong>this browser</strong>: your game files are never uploaded.',
    languageBar: 'Language',
    step1: '1. Choose your game',
    formatIso: 'Game image (.iso)',
    formatXex: 'Game folder',
    formatHint:
      'For the <strong>game folder</strong>, select the folder that contains <code>default.xex</code> and the ' +
      'game\'s folders (<code>GameData</code>…).',
    nothingChosen: 'Nothing chosen yet.',
    chosenFile: '{name} ({size})',
    chosenFolder: '{name}: {count} files ({size})',
    chosenFolderOne: '{name}: 1 file ({size})',
    step2: '2. Create the package',
    step2First: 'Installing for the first time:',
    create: 'Create battleblock-theater-nx.zip',
    step2Update:
      'Already installed, and you only want the new version (<code>.nro</code>, <code>.toml</code> and the licences):',
    createUpdate: 'Create battleblock-theater-nx-update.zip',
    step3: '3. Copy it to the Switch',
    step3Extract: 'Extract the downloaded <code>.zip</code> into <code>sdmc:/switch/</code>.',
    step3Start:
      'Hold <strong>R</strong> while starting any installed game to open the <strong>Homebrew Menu</strong>, then start ' +
      `<code>battleblock_theater.nro</code>. Applet mode has not enough memory. With sys-clk the game runs at 30 FPS; ` +
      `you can try 60 by setting <code>gameplay_frame_rate = 60</code> in <code>battleblock.toml</code>. Updating replaces ` +
      `<code>battleblock.toml</code>: note any setting you changed first. More in the ${HB}.`,
    checking: 'Checking your game…',
    supported: 'Supported: the XBLA (World) release',
    executableOnly:
      'Supported, but the game\'s data folder (GameData) is missing: choose the whole game to create the full package. ' +
      'The update package only needs default.xex.',
    wrongRelease:
      'This is BattleBlock Theater, but not the release this port is made for, so it cannot run it. Only the XBLA ' +
      '(World) release is supported. If you think yours is that release, it may be damaged or modified; include this ' +
      'code in a report:',
    notGame: 'This does not look like BattleBlock Theater for Xbox 360.',
    gameName: 'BattleBlock Theater',
    notIso: 'Not an Xbox 360 game image',
    notComplete: 'Not a complete game',
    noExecutable: 'default.xex was not found: choose the game image, or the folder that contains default.xex and the game\'s folders.',
    incomplete: 'The game\'s data folder (GameData) was not found: choose the whole game (the game image, or the folder with default.xex and the game\'s folders).',
    notSupported: 'this copy of the game is not the supported release (code {hash}).',
    downloadingBuild: 'Downloading battleblock-theater-nx…',
    downloadFailed: 'could not download {url} (HTTP {status}). Check your connection and try again.',
    buildMismatch: 'the downloaded program is not the expected one. Reload the page and try again.',
    logRelease: 'Your copy: BattleBlock Theater, {edition}.',
    logUpdate: 'Update package: the game files are not copied.',
    readingFiles: 'Reading your game…',
    copied: 'Copied {path}',
    done: 'Package complete.',
    noStreaming: 'this browser window cannot save large downloads. Use a normal (not private) window of Chrome, Edge or Firefox.',
    downloadStarted: 'Download started ({size}). Keep this page open until it finishes.',
    finished: 'Finished in {seconds} s.',
    error: 'Error: {message}',
    cancelled: 'the download was cancelled',
    sourceCode: 'Source code',
    installerSource: 'Installer source',
    credits:
      'Port and installer by <a href="https://github.com/andresarevalo1" target="_blank" rel="noopener">DashX - Andres Arevalo</a>. ' +
      '<a href="https://github.com/andresarevalo1/BattleBlockRecomp-NX" target="_blank" rel="noopener">Source code of the port</a>. ' +
      'This page is distributed under the GPL-3.0: the notices of the third-party works are in the repository (NOTICES.md).',
    legal:
      'BattleBlock Theater and its marks belong to their respective owners. battleblock-theater-nx is an unofficial fan project and is not affiliated with, endorsed or sponsored by The Behemoth, Nintendo or Microsoft. Nintendo Switch is a trademark of Nintendo; Xbox 360 is a trademark of Microsoft. This site does not host or distribute game images, game data or the original game executable: your game image or folder is read only inside your browser, is never uploaded, and its files are copied straight into the zip saved on your computer. You need your own legally obtained copy of the game. The cover art belongs to its respective owners. Title font: Permanent Marker by Font Diner (Apache License 2.0).',
  },
  es: {
    lead:
      'Crea el paquete de <strong>Nintendo Switch</strong> de <strong>BattleBlock Theater</strong> a partir de tu ' +
      'propia copia de <strong>Xbox 360</strong>. Todo se ejecuta en <strong>este navegador</strong>: tus archivos del juego nunca se suben.',
    languageBar: 'Idioma',
    step1: '1. Elige tu juego',
    formatIso: 'Imagen del juego (.iso)',
    formatXex: 'Carpeta del juego',
    formatHint:
      'Para la <strong>carpeta del juego</strong>, selecciona la carpeta que contiene <code>default.xex</code> y las ' +
      'carpetas del juego (<code>GameData</code>…).',
    nothingChosen: 'Todavía no has elegido nada.',
    chosenFile: '{name} ({size})',
    chosenFolder: '{name}: {count} archivos ({size})',
    chosenFolderOne: '{name}: 1 archivo ({size})',
    step2: '2. Crea el paquete',
    step2First: 'Si lo instalas por primera vez:',
    create: 'Crear battleblock-theater-nx.zip',
    step2Update:
      'Si ya está instalado y solo quieres la versión nueva (<code>.nro</code>, <code>.toml</code> y las licencias):',
    createUpdate: 'Crear battleblock-theater-nx-update.zip',
    step3: '3. Cópialo a la Switch',
    step3Extract: 'Extrae el <code>.zip</code> descargado en <code>sdmc:/switch/</code>.',
    step3Start:
      'Mantén <strong>R</strong> pulsado al abrir cualquier juego instalado para abrir el <strong>Homebrew Menu</strong> y ' +
      `abre <code>battleblock_theater.nro</code>. El modo applet no tiene memoria suficiente. Con sys-clk el juego va a ` +
      `30 FPS; puedes probar 60 con <code>gameplay_frame_rate = 60</code> en <code>battleblock.toml</code>. Actualizar ` +
      `reemplaza <code>battleblock.toml</code>: apunta antes cualquier ajuste que hayas cambiado. Más en el ${HB}.`,
    checking: 'Comprobando tu juego…',
    supported: 'Compatible: la versión XBLA (World)',
    executableOnly:
      'Compatible, pero falta la carpeta de datos del juego (GameData): elige el juego completo para crear el paquete ' +
      'completo. El paquete de actualización solo necesita default.xex.',
    wrongRelease:
      'Esto es BattleBlock Theater, pero no la versión para la que está hecho este port, así que no puede ejecutarlo. ' +
      'Solo se admite la versión XBLA (World). Si crees que la tuya lo es, puede estar dañada o modificada; incluye este ' +
      'código en el reporte:',
    notGame: 'Esto no parece BattleBlock Theater para Xbox 360.',
    gameName: 'BattleBlock Theater',
    notIso: 'No es una imagen de juego de Xbox 360',
    notComplete: 'No es un juego completo',
    noExecutable: 'No se encontró default.xex: elige la imagen del juego o la carpeta que contiene default.xex y las carpetas del juego.',
    incomplete: 'No se encontró la carpeta de datos del juego (GameData): elige el juego completo (la imagen del juego o la carpeta con default.xex y las carpetas del juego).',
    notSupported: 'esta copia del juego no es la versión admitida (código {hash}).',
    downloadingBuild: 'Descargando battleblock-theater-nx…',
    downloadFailed: 'no se pudo descargar {url} (HTTP {status}). Revisa tu conexión e inténtalo otra vez.',
    buildMismatch: 'el programa descargado no es el esperado. Recarga la página e inténtalo de nuevo.',
    logRelease: 'Tu copia: BattleBlock Theater, {edition}.',
    logUpdate: 'Paquete de actualización: no se copian los archivos del juego.',
    readingFiles: 'Leyendo tu juego…',
    copied: 'Copiado {path}',
    done: 'Paquete completo.',
    noStreaming: 'esta ventana del navegador no puede guardar descargas grandes. Usa una ventana normal (no privada) de Chrome, Edge o Firefox.',
    downloadStarted: 'Descarga iniciada ({size}). Mantén la página abierta hasta que termine.',
    finished: 'Terminado en {seconds} s.',
    error: 'Error: {message}',
    cancelled: 'se canceló la descarga',
    sourceCode: 'Código fuente',
    installerSource: 'Código del instalador',
    credits:
      'Port e instalador de <a href="https://github.com/andresarevalo1" target="_blank" rel="noopener">DashX - Andres Arevalo</a>. ' +
      '<a href="https://github.com/andresarevalo1/BattleBlockRecomp-NX" target="_blank" rel="noopener">Código fuente del port</a>. ' +
      'Esta página se distribuye bajo la GPL-3.0: los avisos de las obras de terceros están en el repositorio (NOTICES.md).',
    legal:
      'BattleBlock Theater y sus marcas pertenecen a sus respectivos propietarios. battleblock-theater-nx es un proyecto no oficial hecho por fans y no está afiliado, respaldado ni patrocinado por The Behemoth, Nintendo ni Microsoft. Nintendo Switch es una marca de Nintendo; Xbox 360 es una marca de Microsoft. Este sitio no aloja ni distribuye imágenes del juego, datos del juego ni el ejecutable original: tu imagen o carpeta del juego solo se lee dentro de tu navegador, nunca se sube, y sus archivos se copian directamente al zip guardado en tu ordenador. Necesitas tu propia copia del juego obtenida legalmente. La portada pertenece a sus respectivos propietarios. Fuente del título: Permanent Marker de Font Diner (Apache License 2.0).',
  },
  'pt-BR': {
    lead:
      'Cria o pacote de <strong>Nintendo Switch</strong> de <strong>BattleBlock Theater</strong> a partir da sua ' +
      'própria cópia de <strong>Xbox 360</strong>. Tudo roda neste <strong>navegador</strong>: seus arquivos do jogo nunca são enviados.',
    languageBar: 'Idioma',
    step1: '1. Escolha seu jogo',
    formatIso: 'Imagem do jogo (.iso)',
    formatXex: 'Pasta do jogo',
    formatHint:
      'Para a <strong>pasta do jogo</strong>, selecione a pasta que contém <code>default.xex</code> e as ' +
      'pastas do jogo (<code>GameData</code>…).',
    nothingChosen: 'Você ainda não escolheu nada.',
    chosenFile: '{name} ({size})',
    chosenFolder: '{name}: {count} arquivos ({size})',
    chosenFolderOne: '{name}: 1 arquivo ({size})',
    step2: '2. Crie o pacote',
    step2First: 'Se você está instalando pela primeira vez:',
    create: 'Criar battleblock-theater-nx.zip',
    step2Update:
      'Se já está instalado e quer apenas a versão nova (<code>.nro</code>, <code>.toml</code> e as licenças):',
    createUpdate: 'Criar battleblock-theater-nx-update.zip',
    step3: '3. Copie para o Switch',
    step3Extract: 'Extraia o <code>.zip</code> baixado em <code>sdmc:/switch/</code>.',
    step3Start:
      'Segure <strong>R</strong> ao iniciar qualquer jogo instalado para abrir o <strong>Homebrew Menu</strong> e ' +
      `inicie <code>battleblock_theater.nro</code>. O modo applet não tem memória suficiente. Com sys-clk o jogo roda a ` +
      `30 FPS; você pode tentar 60 com <code>gameplay_frame_rate = 60</code> em <code>battleblock.toml</code>. ` +
      `A atualização substitui <code>battleblock.toml</code>: anote qualquer ajuste que você tenha mudado. Mais no ${HB}.`,
    checking: 'Verificando seu jogo…',
    supported: 'Compatível: a versão XBLA (World)',
    executableOnly:
      'Compatível, mas falta a pasta de dados do jogo (GameData): escolha o jogo inteiro para criar o pacote ' +
      'completo. O pacote de atualização só precisa do default.xex.',
    wrongRelease:
      'Isto é BattleBlock Theater, mas não a versão para a qual este port foi feito, então ele não consegue rodar. ' +
      'Só a versão XBLA (World) é suportada. Se a sua for essa, pode estar danificada ou modificada; inclua este ' +
      'código no relato:',
    notGame: 'Isto não parece BattleBlock Theater para Xbox 360.',
    gameName: 'BattleBlock Theater',
    notIso: 'Não é uma imagem de jogo de Xbox 360',
    notComplete: 'Não é um jogo completo',
    noExecutable: 'default.xex não foi encontrado: escolha a imagem do jogo ou a pasta que contém default.xex e as pastas do jogo.',
    incomplete: 'A pasta de dados do jogo (GameData) não foi encontrada: escolha o jogo inteiro (a imagem do jogo ou a pasta com default.xex e as pastas do jogo).',
    notSupported: 'esta cópia do jogo não é a versão suportada (código {hash}).',
    downloadingBuild: 'Baixando battleblock-theater-nx…',
    downloadFailed: 'não foi possível baixar {url} (HTTP {status}). Verifique sua conexão e tente de novo.',
    buildMismatch: 'o programa baixado não é o esperado. Recarregue a página e tente de novo.',
    logRelease: 'Sua cópia: BattleBlock Theater, {edition}.',
    logUpdate: 'Pacote de atualização: os arquivos do jogo não são copiados.',
    readingFiles: 'Lendo seu jogo…',
    copied: 'Copiado {path}',
    done: 'Pacote completo.',
    noStreaming: 'esta janela do navegador não consegue salvar downloads grandes. Use uma janela normal (não privada) do Chrome, Edge ou Firefox.',
    downloadStarted: 'Download iniciado ({size}). Mantenha a página aberta até terminar.',
    finished: 'Terminou em {seconds} s.',
    error: 'Erro: {message}',
    cancelled: 'o download foi cancelado',
    sourceCode: 'Código-fonte',
    installerSource: 'Código do instalador',
    credits:
      'Port e instalador por <a href="https://github.com/andresarevalo1" target="_blank" rel="noopener">DashX - Andres Arevalo</a>. ' +
      '<a href="https://github.com/andresarevalo1/BattleBlockRecomp-NX" target="_blank" rel="noopener">Código-fonte do port</a>. ' +
      'Esta página é distribuída sob a GPL-3.0: os avisos das obras de terceiros estão no repositório (NOTICES.md).',
    legal:
      'BattleBlock Theater e suas marcas pertencem aos seus respectivos donos. battleblock-theater-nx é um projeto não oficial feito por fãs e não é afiliado, endossado nem patrocinado pela The Behemoth, Nintendo ou Microsoft. Nintendo Switch é uma marca da Nintendo; Xbox 360 é uma marca da Microsoft. Este site não hospeda nem distribui imagens do jogo, dados do jogo ou o executável original: sua imagem ou pasta do jogo só é lida dentro do seu navegador, nunca é enviada, e seus arquivos são copiados direto para o zip salvo no seu computador. Você precisa da sua própria cópia do jogo, obtida legalmente. A arte da capa pertence aos seus respectivos donos. Fonte do título: Permanent Marker, de Font Diner (Apache License 2.0).',
  },
};

let current = 'en';

export function setLanguage(code) {
  current = TEXTS[code] ? code : 'en';
}

export function getLanguage() {
  return current;
}

// The saved choice, else the first browser language we have, else English.
export function preferredLanguage(saved) {
  if (saved && TEXTS[saved]) {
    return saved;
  }
  const wanted = (typeof navigator !== 'undefined' && navigator.languages) || [];
  for (const tag of wanted) {
    if (TEXTS[tag]) {
      return tag;
    }
    const base = tag.split('-')[0];
    if (base === 'pt') {
      return 'pt-BR';
    }
    if (TEXTS[base]) {
      return base;
    }
  }
  return 'en';
}

export function t(key, vars = {}) {
  const text = (TEXTS[current] && TEXTS[current][key]) ?? TEXTS.en[key] ?? key;
  return text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
}

export function formatSize(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${value.toFixed(unit ? 1 : 0)} ${units[unit]}`;
}

export const KEYS = Object.keys(TEXTS.en);
export const ALL_TEXTS = TEXTS;
