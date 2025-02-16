import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssBreakpoints = `
@media (max-width: 360px) { /* Small phones (Galaxy Fold, etc.) */ }
@media (max-width: 375px) { /* iPhone SE, iPhone 6/7/8 */ }
@media (max-width: 390px) { /* iPhone 12/13/14 */ }
@media (max-width: 414px) { /* iPhone 14 Pro Max, larger phones */ }
@media (max-width: 480px) { /* Large phones / Small tablets */ }
@media (max-width: 720px) { /* Small tablets / Large phones landscape */ }
@media (max-width: 768px) { /* iPads / Medium tablets */ }
@media (max-width: 1024px) { /* iPad Pro / Small laptops */ }
@media (max-width: 1280px) { /* Laptops / Desktops */ }
@media (max-width: 1366px) { /* Widescreen laptops */ }
@media (max-width: 1440px) { /* High-res laptops */ }
@media (max-width: 1536px) { /* Larger desktops */ }
@media (max-width: 1920px) { /* Full HD screens */ }
@media (max-width: 2560px) { /* 2K & 4K monitors */ }
@media (max-width: 3840px) { /* 4K & 8K monitors */ }
;
`;

export const createBreakPoints = async (fileName, dirName = __dirname) => {
  let resolvedPath = path.join(__dirname, dirName);
  let output;

  try {
    // Check if the directory exists
    const stat = await fs.promises.stat(resolvedPath);

    if (stat.isDirectory()) {
      console.log("Directory exists");

      // Set output path for the CSS file
      output = path.join(resolvedPath, fileName);

      // Write to file
      await fs.promises.writeFile(output, cssBreakpoints);
      console.log("File created");
    } else {
      console.log("Directory does not exist");
    }
  } catch (error) {
    console.error("Error checking directory:", error);
  }
};
