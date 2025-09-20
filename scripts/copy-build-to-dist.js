const fs = require('fs');
const path = require('path');

const from = path.resolve(__dirname, '..', 'build');
const to = path.resolve(__dirname, '..', 'dist');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

if (!fs.existsSync(from)) {
  console.error('Source build/ directory not found, nothing to copy.');
  process.exit(0);
}

try {
  // Remove existing dist if present
  if (fs.existsSync(to)) {
    fs.rmSync(to, { recursive: true, force: true });
  }
  copyRecursive(from, to);
  console.log('Copied build/ -> dist/');
  process.exit(0);
} catch (err) {
  console.error('Failed to copy build to dist:', err);
  process.exit(1);
}
