import inquirer from 'inquirer';
import fs from 'fs';

const promptInput = (message, required = true) =>
    inquirer.prompt([{
        name: "val",
        type: "input",
        message: message,
        validate: input => (input.length > 0 || !required) ||  'This field is required. Please try again...' 
    }])
    .then(answer => answer.val);

  
const buildHtmlStr = user=>{
    const htmlStr = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <title>My Portfolio</title>
        <style>
    h1 {
        font-size: 2em;
        font-weight: bolder;
    }
    .navbar  {
        padding: 10px;
        font-size: 1.2em;
    }
    .navbar-item a {
        margin: 10px;
    }
    .box {
        background: linear-gradient(208.8deg, rgba(150, 245, 223, 0.2) 16.56%, rgba(91, 191, 249, 0.148) 94.74%);
        box-shadow: 12px 15px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        transition: 0.5s ease;
        height: 300px;
        width: 70%;
        margin: 0 auto;
    }
    .box:hover {
        box-shadow: 0px 0px 20px #b4b4b4;
        transform: scale(1.02);
    }
        </style>
    </head>
    <body>
        <nav class="navbar columns is-flex " role="navigation" aria-label="main navigation" id="top">
            <h1 class="column is-one-third">${user.name}</h1>

            <div class="navbar-menu column is-one-half">
                <div class="navbar-item is-hoverable navbar-end">
                    <a id="linkedInUrl" href="${user.linkedInUrl}">LinkedIn</a>
                    <a id="gitHubUrl" href="${user.gitHubUrl}">GitHub</a>
                </div>
            </div>
        </nav>
        <h2 style="text-align: center">${user.location}</h2>
        <div class="box middle-box">
            <h2 class="is-capitalized has-text-centered is-size-4 has-text-weight-bold">
                Biography
            </h2>
            <p class="has-text-centered">${user.bio}</p>
        </div>
    </body>
    </html>`;
    return htmlStr;
}


(async ()=>{
    console.log(`Welcome to the Portfolio Generator!\n`);
    console.log(`You will be prompted with a series of questions, \nfrom which a Portoflio HTML page will be generated.\n\n`);

    const userObj = {
        name: await promptInput('What is your name?'),
        location: await promptInput('Where do you live?'),
        linkedInUrl: await promptInput('What is your LinkedIn Url?'),
        gitHubUrl: await promptInput('What is your GitHub Url?'),
        bio: await promptInput('Tell me a little about yourself (bio):'),
    }

    fs.writeFile('index.html',buildHtmlStr(userObj),err => err ? console.log(err.message) : console.log(userObj));
})();    
