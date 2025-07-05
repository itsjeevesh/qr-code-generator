import inquirer from "inquirer";
import { image } from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {message: "Enter the url",
    name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    console.log("File created successfully");

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });