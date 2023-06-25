/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qrImage from 'qr-image';
import { createWriteStream } from 'fs';

inquirer
  .prompt([
    {
      message: 'Type in URL here: ',
      name: 'URL',
    },
  ])
  .then((answers) => {
    console.log(answers);
    const qrSvg = qrImage.image(answers.URL, { type: 'png' });
    qrSvg.pipe(createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
