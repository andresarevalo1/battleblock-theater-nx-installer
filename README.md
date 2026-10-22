# Instalador de battleblock-theater-nx

**Español** · [English](README.en.md)

**Instalador por DashX - Andres Arevalo** — <https://github.com/andresarevalo1>

La página instaladora de [BattleBlockRecomp-NX](https://github.com/andresarevalo1/BattleBlockRecomp-NX), el port de
*BattleBlock Theater* para Nintendo Switch: **https://andresarevalo1.github.io/battleblock-theater-nx-installer/**

Le das tu propia copia del juego de Xbox 360 (una imagen `.iso` o la carpeta extraída con su `default.xex`) y te
devuelve un zip listo para extraer en `sdmc:/switch/`. Todo se ejecuta en tu navegador: los archivos del juego
**nunca salen de tu ordenador**.

El código de esta página se distribuye bajo la **GPL-3.0**: los avisos de las obras de terceros de las que deriva
están en [`NOTICES.md`](NOTICES.md), como exige la licencia.

## Qué hace

1. Busca `default.xex` (en la imagen o en la carpeta elegida, aunque esté un nivel más abajo) e lo identifica por su
   SHA-256 en `release/manifest.json`. El port está compilado a partir de un ejecutable exacto (la versión XBLA
   World), así que la página rechaza cualquier otro: distingue la misma versión del juego en otro formato (por el
   title ID `58410A30` de la cabecera del ejecutable) de un juego distinto.
2. Descarga `battleblock_theater.nro` y comprueba su SHA-256.
3. Escribe el zip: el programa, `battleblock.toml`, `LICENSES.txt` y, en una instalación nueva, los archivos del
   juego bajo `game/` (sin la partición `$SYSTEMUPDATE`), todo dentro de `battleblock_theater/`. El paquete de
   actualización no copia el juego y solo necesita `default.xex`.
4. Envía el zip a disco con el service worker, así que nunca tiene que caber en memoria.

Aquí no se fabrica nada a partir del juego: el port traduce los shaders del juego en la consola. Por eso la página no
necesita herramientas WebAssembly.

La página y el programa descargado los cachea el service worker: después de la primera visita también funciona sin
conexión.

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html`, `app.js` | La página y su interfaz (inglés, español, portugués de Brasil: `lib/i18n.js`) |
| `worker.js` | Construye el paquete fuera del hilo principal |
| `sw.js` | Cache sin conexión y el flujo de descarga |
| `lib/` | Lector de imágenes, identificación y empaquetado, escritor de zip |
| `release/` | La lista de builds, el archivo de configuración y las licencias que van en el zip |
| `test/` | Scripts de Node que ejecutan el mismo código que la página (un juego sintético y uno real) |

## Despliegue

El NRO no está aquí. Es el asset `battleblock_theater.nro` de una release de
[andresarevalo1/BattleBlockRecomp-NX](https://github.com/andresarevalo1/BattleBlockRecomp-NX/releases). El flujo de
trabajo en `.github/workflows/deploy.yml` prueba el código, descarga el NRO de la última release, comprueba su SHA-256
contra `release/manifest.json` y publica la página en GitHub Pages. Se ejecuta en cada push a `main`; tras publicar
una release nueva, ejecútalo a mano desde la pestaña Actions.

Para publicar una build nueva: actualiza `nro_sha256` en `release/manifest.json`, copia `release/battleblock.toml`
de la release de BattleBlockRecomp-NX y rehaz `release/LICENSES.txt` a partir de su `LICENSE` y `NOTICE`.

## Probarlo en local

```sh
node test/package_node.mjs [ruta/a/default.xex]
node test/real_folder.mjs [ruta/al/juego/extraido]
cp /ruta/a/battleblock_theater.nro release/
python3 serve.py           # http://127.0.0.1:8194/
```

Con la ruta a tu propio `default.xex`, los tests también comprueban que el manifest lo conoce y que una copia real se
empaqueta bien.

## Licencia

GPL-3.0 (`LICENSE`). Los componentes de terceros están en [NOTICES.md](NOTICES.md).

*BattleBlock Theater* es marca de The Behemoth. Esta página es un proyecto de fans no oficial y no está afiliado,
respaldado ni patrocinado por The Behemoth, Nintendo ni Microsoft.
