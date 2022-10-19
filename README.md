# Portfolio Generator

This is a mini application that allows you to use a command-line tool that generates an HTML portfolio page from user input.

---

## Description

This is a Node.js application which prompts the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. 
It then generates an HTML document containing the information collected from the prompts, and is written to a index.hmtl file. 
The index.html file can be used in other applications or as a stand alone web page.

The following tools and technologies are used to accomplish this:
* `fs` for writing to the file system

* `inquirer` version 9.1.4 for collecting user input

* String template literals for generating a string version of the HTML document before it is written to the file system

---

## Usage

Type `node index.js` from the command line, and follow the prompts.

