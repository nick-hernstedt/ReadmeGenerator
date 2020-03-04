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
                                        name: "badge",
                                        message: "Which badge would you like to add?"
                                      },
                                      {
                                        type: "input",
                                        name: "title",
                                        message: "What is the name of this project?"
                                      },
                                      {
                                        type: "input",
                                        name: "description",
                                        message: "Please enter a brief discription of your project."
                                      },
                                      {
                                        type: "input",
                                        name: "contents",
                                        message: "Enter your table of contents"
                                      },
                                      {
                                        type: "input",
                                        name: "installation",
                                        message: "How do you install this application?"
                                      },
                                      {
                                        type: "input",
                                        name: "usage",
                                        message: "What is this app used for?"
                                      },
                                      {
                                        type: "input",
                                        name: "license",
                                        message: "Which license would you like this to be under?"
                                      },
                                      {
                                        type: "input",
                                        name: "contributing",
                                        message: "Who contributed to this project?"
                                      },
                                      {
                                        type: "input",
                                        name: "tests",
                                        message: "Which tests were done on this project?"
                                      }
                    
                                    ])
                                    .then(function (response) {

                                      const info = `# ${response.title} ${response.badge} \n # ${response.discription} \n # Table of Contents \n ### ${response.contents} \n # Instructions \n ### ${response.instructions} n\ # Usage \n ### ${response.usage} \n # Licensing \n ### ${response.licence} \n # Contributors \n ### ${response.contributing} \n # Testing Methods \n ### ${response.tests} \n # Email \n ### ${email} \n ![profile image](${picture})`
                                    })
                                  