const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const username = ''
const email = ''
const picture = ''
const gitHub = `https://api.github.com/users/` + username


inquirer  
    .prompt([
      {
        type: 'input',
        name: 'username',
        name: 'username'
      }
    ])
      .then(function (response) {
        fs.writeFile('username.json', JSON.stringify(response), function (err) {
          
          if (err) {
            return console.log(err)
          }

          console.log("Success!");
          username = response.username
          gitHub = `https://api.github.com/users/` + username
          console.log(gitHub)
          axios.get(gitHub).then(function (userInfo) {
            console.log(userInfo)
            email = userInfo.data.email
            picture = userInfo.data.avatar_url
          



                                inquirer
                                  .prompt([
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
                                      }
                    
                                    ]);
                                  
