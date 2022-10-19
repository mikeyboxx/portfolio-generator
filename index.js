import inquirer from 'inquirer';

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


(async ()=>{
    const userObj = {
        name: await promptInput('What is your name?'),
        location: await promptInput('Where do you live?'),
        linkedInUrl: await promptInput('What is your LinkedIn Url?'),
        gitHubUrl: await promptInput('What is your GitHub Url?'),
    }
    console.log(userObj);
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

