import inquirer from 'inquirer';
import fs from 'fs';

console.log(`Welcome to the Portfolio Generator!\n`);
console.log(`You will be prompted with a series of questions, \nfrom which a Portoflio HTML page will be generated.\n\n`);


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
            <p class="has-text-centered">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid natus maiores temporibus mollitia nisi accusamus nemo, fuga tenetur incidunt ut suscipit atque reprehenderit, dolorem dolor vero, explicabo aperiam quia porro?</p>
        </div>
    </body>
    </html>`;
    return htmlStr;
}


(async ()=>{
    const userObj = {
        name: await promptInput('What is your name?'),
        location: await promptInput('Where do you live?'),
        linkedInUrl: await promptInput('What is your LinkedIn Url?'),
        gitHubUrl: await promptInput('What is your GitHub Url?'),
    }
    fs.writeFile('index.html',buildHtmlStr(userObj),err => err ? console.log(err.message) : console.log(userObj));
})();    





// (async ()=>{

//     // let answer = await promptInput('What is your name?')
//     // while(answer.val.length===0)  answer = await promptInput('What is your name?');
//     // let answer = {};
   
//     let answer;
//     // make it manadatory
//     do answer = await promptInput('What is your name?')
//     while(answer.length===0);
//     const name = answer.val

//     // const answer = await promptInput('What is your name?').val;





//     console.log(answer);
    
// })();

// const name = promptInput('What is your name?', true);
// console.log(name);
// console.log(userName);

// async ()=>{
//     await inquirer
//     .prompt([
//         {
//             name: "name",
//             type: "input",
//             message: message,
//         }])
//     .then((answer) => {
//         console.log(answer);
//         if (answer.name === 0){
//             console.log('This field is required. Please try again...');
//             getUserInput();
//         } else return answer.name;        
//     });


// }






// const getUserInput = () => {
//     (async ()=>{
//         await inquirer
//             .prompt([
//                 {
//                     name: "userName",
//                     type: "input",
//                     message: "What is your name?",
//                 }])
//             .then((answers) => {
//                 if (answers.userName.length === 0){
//                         getUserInput();
                        
//                 }        
//             });
        
//         await inquirer
//             .prompt([
//                 {
//                     name: "userLocation",
//                     type: "input",
//                     message: "Where do you live?",
//                 }])
//             .then((answers) => {
//                 if (answers.userName.length === 0)
//                         getUserInput();
//             });
//     })();
// }


    //     {
    //         name: "userLocation",
    //         type: "input",
    //         message: "Where do you live?",
    //         when: answers => {if (answers.userName.length === 0) getUserInput()},
    //     },
    //     {
    //         name: "userLinkedInUrl",
    //         type: "input",
    //         message: "What is your LinkedIn Url?",
    //     },
    //     {
    //         name: "userGitHubUrl",
    //         type: "input",
    //         message: "What is your GitHub Url?",
    //     },
    // ])
    // .then((answers) => {
    //     // console.log(answers);
    //     if (answers.userName.length === 0)
    //         getUserInput();
    //     else if(answers.userLocation.length === 0) 
    //         getUserInput();
    //     else if(answers.userLocation.length === 0) 
    //         getUserInput();
    //     else if(answers.userLinkedInUrl.length === 0) 
    //         getUserInput();
    //     else if(answers.userGitHubUrl.length === 0) 
    //         getUserInput();
    //  });
    // inquirer
    //     .prompt([
    //         {
    //             name: "userName",
    //             type: "input",
    //             message: "What is your name?",
    //         },
    //         {
    //             name: "userLocation",
    //             type: "input",
    //             message: "Where do you live?",
    //             when: answers => {if (answers.userName.length === 0) getUserInput()},
    //         },
    //         {
    //             name: "userLinkedInUrl",
    //             type: "input",
    //             message: "What is your LinkedIn Url?",
    //         },
    //         {
    //             name: "userGitHubUrl",
    //             type: "input",
    //             message: "What is your GitHub Url?",
    //         },
    //     ])
    //     .then((answers) => {
    //         // console.log(answers);
    //         if (answers.userName.length === 0)
    //             getUserInput();
    //         else if(answers.userLocation.length === 0) 
    //             getUserInput();
    //         else if(answers.userLocation.length === 0) 
    //             getUserInput();
    //         else if(answers.userLinkedInUrl.length === 0) 
    //             getUserInput();
    //         else if(answers.userGitHubUrl.length === 0) 
    //             getUserInput();
    //      });
// }       

// console.log(getUserInput());
// getUserInput();

