import { saveAs } from "file-saver";

// Check user JS runtime environment
const isNode = typeof process !== 'undefined' && process.versions?.node;
const isBrowser = !isNode; // If it's not Node, it's likely a browser environment

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
`;

export const createBreakPoints = async (fileName, dirName = window.location.pathname) => {

  const fullPath = `${dirName.replace(/\/$/, '')}/${fileName}`;

  if (isNode) {
    // Node.js environment
    createNodeFile(fullPath);
  } else if (isBrowser) {
    // Browser environment
    try {
      const blob = new Blob([cssBreakpoints], { type: 'text/css' });
      // Save the file with the specified filename
      saveAs(blob, fileName);
    } catch (error) {
      console.log(error);
    }
  } else {
    throw new Error("Unsupported environment");
  }
};
