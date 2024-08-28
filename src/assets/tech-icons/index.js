import { writeFileSync } from "node:fs";
import path from "node:path";

// add more icons to generate the js files with aliases for lazy loading

import icons from "./icons.json" with { type: "json" };

function generateFiles() {
  const iconsList = icons.map((icon) => icon.icon);
  const iconsListWitouthDuplicates = [...new Set(iconsList)];
  console.log(iconsList.length, iconsListWitouthDuplicates.length);

  for (let icon of iconsListWitouthDuplicates) {
    const fileData = `export { ${icon} as default } from "react-icons/ri";`;
    writeFileSync(path.resolve(`./${icon}.js`), fileData);
    console.log(`file ${icon} created`);
  }
}

generateFiles();
