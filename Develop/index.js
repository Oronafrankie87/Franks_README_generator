// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = ({title, gitHub, email, description, installation, usage, screenshot, features, credits, license, tests, contribute, quests}) =>
`# ${title}

## ${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot and Link](#screenshot)
- [Features](#features)
- [Credits](#credits)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#quests)


## Installation
${installation}

## Usage
${usage}

## Screenshot and Link
${screenshot}

## Features
${features}

## Credits
${credits}

## License
${license}

## Contribute
${contribute}

## Tests
${tests}

## Questions
${quests}

- For questions about my project you can contact me at my personal email
${email}, or view my GitHub profile for more information, ${gitHub}.
`;


inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    //GitHub username
    {
      type: "input",
      name: "gitHub",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    //Title
    //Table of contents

    //Description
    {
      type: "input",
      name: "description",
      message: "Write a description of your project...",
    },

    //Installation
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },

    //Usage
    {
      type: "input",
      name: "usage",
      message: "Provide instructions on how to use your app...",
    },
    //screenshotLink
    {
      type: "input",
      name: "screenshot",
      message: "Provide screenshots of your app and link below it.",
    },

    //Features
    {
      type: "input",
      name: "features",
      message: "List all of the features of your application?",
    },
    //Credits
    {
      type: "input",
      name: "credits",
      message: "List your collaborators and attributes?",
    },

    //License
    {
      type: "list",
      name: "license",
      message: "What license should your project have?",
      choices: [
        "Apache 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    //How to contribute
    {
      type: "input",
      name: "contribute",
      message: "How can developers contribute to your project?",
    },
    //Test
    {
      type: "input",
      name: "tests",
      message: "How can users test your project?",
    },
    //Questions
    {
      type: "input",
      name: "quests",
      message: "How can users contact you with questions about your project?",
    },
  ])
  .then((answers) => {
    const readMePageContent = questions(answers);

    // TODO: Create a function to write README file

    fs.writeFile("README.md", readMePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });



