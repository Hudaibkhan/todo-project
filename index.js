#! /usr/bin/env node
import inquirer from "inquirer";
// Import inquirer  - Done
// Array - Done
// Create function - Done
// Create Operators -Done
let todos = [];
async function makeTodo(todos) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Please select one option",
            choices: ["Add todo", "Update todo", "View todo", "Delete todo", "Exit"]
        });
        if (answer.select == "Add todo") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Enter your todo in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log("*** YOUR TO DO LIST ***");
            todos.forEach(todo => console.log(todo));
        }
        if (answer.select == "Update todo") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Update todo List",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Enter todo in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log("*** UPDATED TO DO LIST ***");
            todos.forEach(todo => console.log(todo));
        }
        if (answer.select == "View todo") {
            console.log("*** TO DO LIST ***");
            todos.forEach(todo => console.log(todo));
        }
        if (answer.select == "Delete todo") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Delete todo List",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log("*** DELETED TO DO ITEM ***");
            todos.forEach(todo => console.log(todo));
        }
        if (answer.select === "Exit") {
            console.log("*** Exiting Todo List ***");
            break; // Exit the loop
        }
    } while (true);
}
makeTodo(todos);
