#!/usr/bin/env node

const program = require('commander');
const todo = require('../application/todo');
program.version('1.0.0').description('its a todo api');


// get complete list of todo's
program.command('findall').alias('fa').description('Get complete list of todo\'s').action(
    async () => {
        try {
            var condition =  null;
            const results = await todo.getAllTodo(condition);
            console.log(results);
        } catch (error) {
            throw error
        }
    }
)
    
// create a todo
program.command('add <description> <startDate> <endDate>').alias('a').description('Add a todo').action(
    async (description, startDate, endDate) => {
        try {
            const results = await todo.addNewTodo(description, startDate, endDate);
            console.log(results);
        } catch (error) {
            throw error
        }
    }
);

// update a todo 
program.command('update <id>').alias('u').description('Update a todo').action( 
    async (id) => {
        try{
            const results = await todo.updateTodo(data, id);
            console.log(results)
        } catch(error) {
            throw error
        }
    }
);

// delete a todo
program.command('remove <id>').alias('r').description('Remove a todo').action( 
    async(id) => {
        try {
                const results = await todo.deleteTodo(id);
            console.log(results);
        } catch (error) {
            throw error
        }
    }
);

program.parse(process.argv);