import fs from 'fs';
import path from 'path';
import process from 'node:process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');

function getFiles(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file, ext));
    } else if (file.endsWith(ext)) {
      results.push(file);
    }
  });
  return results;
}

async function findUnusedStyles() {
  const srcDir = path.join(projectRoot, 'src');
  
  const styleFiles = getFiles(srcDir, '.css');
  const jsxFiles = getFiles(srcDir, '.jsx');
  
  let allJsxContent = '';
  jsxFiles.forEach(file => {
    allJsxContent += fs.readFileSync(file, 'utf8') + '\n';
  });

  const unusedStyles = [];

  for (const styleFile of styleFiles) {
    const styleContent = fs.readFileSync(styleFile, 'utf8');
    
    // Extract class names from CSS (e.g. .my-class)
    // Avoids matching decimals in CSS values like .5rem by requiring a letter, hyphen or underscore first
    const classRegex = /\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g;
    let match;
    const classNames = new Set();
    while ((match = classRegex.exec(styleContent)) !== null) {
      classNames.add(match[1]);
    }

    const unusedInFile = [];
    for (const className of classNames) {
      // Check if className is used in any JSX file.
      // This is a simple substring check which is sufficient for most class names.
      if (!allJsxContent.includes(className)) {
        unusedInFile.push(className);
      }
    }

    if (unusedInFile.length > 0) {
      unusedStyles.push({
        file: styleFile.replace(projectRoot + '/', ''),
        unused: unusedInFile,
      });
    }
  }

  return unusedStyles;
}

findUnusedStyles()
  .then((results) => {
    if (results.length === 0) {
      console.log('✅ No unused styles found!');
    } else {
      console.log('🔍 Found unused styles:');
      results.forEach(({ file, unused }) => {
        console.log(`\n📁 ${file}:`);
        unused.forEach((style) => console.log(`  - ${style}`));
      });
      console.log('\n💡 Please remove unused styles before committing.');
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('❌ Error checking styles:', error);
    process.exit(1);
  });
