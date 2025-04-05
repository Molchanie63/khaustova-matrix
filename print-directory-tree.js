import { promises as fs } from "fs";
import { join } from "path";

// Папки, которые нужно игнорировать
const ignoreDirs = ["node_modules", ".git"];

async function printDirectoryTree(dirPath, indent = "") {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name);
      if (entry.isDirectory()) {
        if (ignoreDirs.includes(entry.name)) {
          console.log(`${indent}${entry.name}/ (ignored)`);
          continue;
        }
        console.log(`${indent}${entry.name}/`);
        await printDirectoryTree(fullPath, `${indent}  `);
      } else {
        console.log(`${indent}${entry.name}`);
      }
    }
  } catch (error) {
    console.error(`Ошибка при чтении директории ${dirPath}:`, error);
  }
}

(async () => {
  const rootDir = process.cwd();
  console.log(`Дерево файлов в ${rootDir}:`);
  await printDirectoryTree(rootDir);
})();