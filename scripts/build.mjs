import { bundle, browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync, watch } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const ENTRY_FILE = path.join(rootDir, 'emmetify', 'emmetify.css');
const DIST_DIR = path.join(rootDir, 'dist');
const TARGETS = browserslistToTargets(browserslist());

async function buildCSS() {
  const startTime = performance.now();

  try {
    if (!existsSync(DIST_DIR)) {
      await mkdir(DIST_DIR, { recursive: true });
    }

    const devBundle = bundle({
      filename: ENTRY_FILE,
      minify: false,
      sourceMap: true,
      targets: TARGETS
    });

    await writeFile(
      path.join(DIST_DIR, 'emmetify.css'),
      `${devBundle.code}\n/*# sourceMappingURL=emmetify.css.map */`
    );
    if (devBundle.map) {
      await writeFile(path.join(DIST_DIR, 'emmetify.css.map'), devBundle.map);
    }

    const prodBundle = bundle({
      filename: ENTRY_FILE,
      minify: true,
      sourceMap: true,
      targets: TARGETS
    });

    await writeFile(
      path.join(DIST_DIR, 'emmetify.min.css'),
      `${prodBundle.code}\n/*# sourceMappingURL=emmetify.min.css.map */`
    );
    if (prodBundle.map) {
      await writeFile(path.join(DIST_DIR, 'emmetify.min.css.map'), prodBundle.map);
    }

    const duration = (performance.now() - startTime).toFixed(2);
    const sizeKb = (prodBundle.code.length / 1024).toFixed(2);
    console.log(`✔ Built dist/emmetify.css & dist/emmetify.min.css (${sizeKb} kB) in ${duration}ms`);
  } catch (err) {
    console.error('✖ Build failed:');
    console.error(err);
  }
}

await buildCSS();

if (process.argv.includes('--watch')) {
  console.log('👀 Watching emmetify/ for changes...');
  const watchDir = path.join(rootDir, 'emmetify');
  
  let debounceTimeout;
  watch(watchDir, { recursive: true }, (_eventType, filename) => {
    if (filename && filename.endsWith('.css')) {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        console.log(`↻ Change detected in ${filename}. Rebuilding...`);
        buildCSS();
      }, 50);
    }
  });
}
