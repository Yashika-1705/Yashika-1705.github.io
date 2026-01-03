import { readFileSync, writeFileSync, cpSync, existsSync } from 'fs';
import { join } from 'path';

const distDir = 'dist';
const rootDir = '.';

// Read the built index.html
const distIndexPath = join(distDir, 'index.html');
if (!existsSync(distIndexPath)) {
  console.error('Error: dist/index.html not found. Run "npm run build" first.');
  process.exit(1);
}

let indexHtml = readFileSync(distIndexPath, 'utf-8');

// Fix the icon path to use images/logo.png instead of vite.svg or assets path
indexHtml = indexHtml.replace(
  /<link rel="icon"[^>]*href="[^"]*"/,
  '<link rel="icon" type="image/svg+xml" href="images/logo.png"'
);

// Add service worker cleanup script before closing body tag
if (!indexHtml.includes('serviceWorker')) {
  indexHtml = indexHtml.replace(
    '</body>',
    `    <script>
      // Unregister any existing service workers to prevent conflicts
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
          for(let registration of registrations) {
            registration.unregister();
          }
        });
      }
    </script>
  </body>`
  );
}

// Write to root
writeFileSync(join(rootDir, 'index.html'), indexHtml);

// Copy assets folder to root if it exists
const distAssetsPath = join(distDir, 'assets');
if (existsSync(distAssetsPath)) {
  const rootAssetsPath = join(rootDir, 'assets');
  cpSync(distAssetsPath, rootAssetsPath, { recursive: true, force: true });
  console.log('✓ Copied assets folder to root');
}

// Copy images folder from dist to root if it exists
const distImagesPath = join(distDir, 'images');
if (existsSync(distImagesPath)) {
  const rootImagesPath = join(rootDir, 'images');
  cpSync(distImagesPath, rootImagesPath, { recursive: true, force: true });
  console.log('✓ Copied images folder to root');
}

console.log('✓ Copied built files to root successfully!');

