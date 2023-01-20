const fs = require('fs')
const inquirer = require('inquirer')


inquirer
  .prompt([
    {
      type: 'input',
      name: 'filePath',
      message: 'Enter the file path where you want to create the file:',
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the name of the project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the description of the project:',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'Enter the instructions on how to use the project:',
    },
    {
      type: 'input',
      name: 'liscence',
      message: 'What is the liscense of your project?'
    }
  ])
  .then((answers) => {
    const filePath = answers.filePath;
    const projectName = answers.projectName;
    const description = answers.description;
    const instructions = answers.instructions;
    const liscence = answers.liscence;
    const fileContent = `# ${projectName}\n\n${description}\n\n## Instructions\n${instructions}\n\nThis project is liscensed under ${liscence}`;

    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`File created at ${filePath} with custom content`);
    });
  });