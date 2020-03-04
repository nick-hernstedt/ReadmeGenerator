const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Badge",
            message: "Which badge would you like to add?"
          },
          {
            type: "input",
            name: "Project Title",
            message: "What is the name of this project?"
          },
          {
            type: "input",
            name: "Description",
            message: "Please enter a brief discription of your project."
          },
          {
            type: "input",
            name: "Table of Contents",
            message: "Enter your table of contents"
          },
          {
            type: "input",
            name: "Installation",
            message: "How do you install this application?"
          },
          {
            type: "input",
            name: "Usage",
            message: "What is this app used for?"
          },
          {
            type: "input",
            name: "License",
            message: "Which license would you like this to be under?"
          },
          {
            type: "input",
            name: "Contributing",
            message: "Who contributed to this project?"
          },
          {
            type: "input",
            name: "Tests",
            message: "Which tests were done on this project?"
          },
          {
            type: "input",
            name: "Questions",
            message: "Which email would you like questions directed to?"
          },
    ])
}


At least one badge
Project title
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions

User GitHub profile picture
User GitHub email