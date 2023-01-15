// This code is what kicks of the program by allow promts to the user
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./assets/generateMarkdown.js");

// This is the start of the prompts

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("You need to enter a title to continue!");
        return false;
      }
    },
  },
  // This is for the Description of project
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You need to provide a project description!");
        return false;
      }
    },
  },
  // This is for the Installation Instructions
  {
    type: "input",
    name: "installation",
    message: "How do you install your project? (Required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("You need to provide installation info to continue!");
        return false;
      }
    },
  },
  // This is for the Usage Information
  {
    type: "input",
    name: "usage",
    message: "How do you use this project? (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("You need to provide information on how to use project!");
        return false;
      }
    },
  },
  // This is for the Contribution Guidlines
  {
    type: "input",
    name: "contribution",
    message: "How should people contribute to this project? (Required)",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log(
          "You need to provide information on how to contribute to the project!"
        );
        return false;
      }
    },
  },
  // This is for the Test Instructions
  {
    type: "input",
    name: "testing",
    message: "How do you test this project? (Required)",
    validate: (testingInput) => {
      if (testingInput) {
        return true;
      } else {
        console.log("You need to describe how to test this project!");
        return false;
      }
    },
  },
  // This is for the License Options
  {
    type: "checkbox",
    name: "licensing",
    message: "Choose a license for your project (Required)",
    choices: [
      "Apache",
      "MIT",
      "GNU-General-Public",
      "Common-Development-and Distribution",
      "None",
    ],
    validate: (licensingInput) => {
      if (licensingInput) {
        return true;
      } else {
        console.log("You must pick a license for the project!");
        return false;
      }
    },
  },
  // This is for your Github Username
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  // this is for your Email Address
  {
    type: "input",
    name: "email",
    message: "Would you like to include your email?",
  },
];

// This function creates the ream me based on the answers provided

function generateREADME(filename, data) {
    fs.writeFile(filename, data, (err) => {
        err? console.log(err) : console.log("success!");
    });
}

function init() {
    inquirer.prompt(questions)
       .then(function (userData) {
        console.log(userData)
        generateREADME('README.md', generateMarkdown(userData));
    })
}

init();