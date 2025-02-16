import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssBreakpoints = `
@media (max-width: 360px) { /* Styles for screens up to 360px wide */ }
@media (max-width: 375px) { /* Styles for screens up to 375px wide */ }
@media (max-width: 390px) { /* Styles for screens up to 390px wide */ }
@media (max-width: 393px) { /* Styles for screens up to 393px wide */ }
@media (max-width: 412px) { /* Styles for screens up to 412px wide */ }
@media (max-width: 414px) { /* Styles for screens up to 414px wide */ }
@media (max-width: 720px) { /* Styles for screens up to 720px wide */ }
@media (max-width: 768px) { /* Styles for screens up to 768px wide */ }
@media (max-width: 780px) { /* Styles for screens up to 780px wide */ }
@media (max-width: 800px) { /* Styles for screens up to 800px wide */ }
@media (max-width: 812px) { /* Styles for screens up to 812px wide */ }
@media (max-width: 844px) { /* Styles for screens up to 844px wide */ }
@media (max-width: 864px) { /* Styles for screens up to 864px wide */ }
@media (max-width: 900px) { /* Styles for screens up to 900px wide */ }
@media (max-width: 1080px) { /* Styles for screens up to 1080px wide */ }
@media (max-width: 1280px) { /* Styles for screens up to 1280px wide */ }
@media (max-width: 1366px) { /* Styles for screens up to 1366px wide */ }
@media (max-width: 1440px) { /* Styles for screens up to 1440px wide */ }
@media (max-width: 1536px) { /* Styles for screens up to 1536px wide */ }
@media (max-width: 1600px) { /* Styles for screens up to 1600px wide */ }
@media (max-width: 1920px) { /* Styles for screens up to 1920px wide */ }
@media (max-width: 2560px) { /* Styles for screens up to 2560px wide */ }
`;

export default cssBreakpoints;


//parameters: dirName: the mame , fileName, breakpoints
 const createBreakPoints = ( fileName,dirName=__dirname) => {

    let output = "";
    if(dirName != __dirname){

        //validate path
        //set path as output
        console.log("here",dirName);
        
        dirName = path.basename(__dirname);
        console.log("here",dirName);
        
    }

    
    //create the css file
    output = path.join(dirName,fileName);
    fs.writeFile(output, cssBreakpoints, (err) => {
        if (err) throw err;
        console.log("File created");
    });
};

module.exports = createBreakPoints;