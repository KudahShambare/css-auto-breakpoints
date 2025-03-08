import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const createNodeFile = async (output) => {
  try {
    // Ensure the directory exists from the output path
    const resolvedPath = path.dirname(output); // Get the directory path from the output

    // Ensure the directory exists
    await fs.promises.mkdir(resolvedPath, { recursive: true });

    // Write to file
    await fs.promises.writeFile(output, cssBreakpoints);
    console.log(`File created at: ${output}`);
  } catch (error) {
    console.error("Error in Node.js environment:", error);
  }
};
