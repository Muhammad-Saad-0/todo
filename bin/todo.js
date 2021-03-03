#!/usr/bin/env node
const streamLogger = require("stream-logger");
const program = require('commander');
const todo = require('../application/todo');

let logger = streamLogger();
logger.level = "debug";


program.version('1.0.0').description('its a todo api');

// get complete list of todo's
program.command('findAll').alias('fa').description('Get complete list of todo\'s').action(
    async () => {
        try {
            var condition =  null;
            const results = await todo.getAllTodo(condition);
            logger.info(results);
        } catch (error) {
            throw (error);
        }
    }
)

// get single todo
program.command('findOne <id>').alias('fo').description('Get single todo').action( 
    async(id) => {
        try {
            const results = await todo.getOneTodo(id);
            logger.info(results);
        } catch (error) {
            throw (error);
        }
    }
);

// create a todo
program.command('add <description> <startDate> <endDate>').alias('a').description('Add a todo').action(
    async (description, startDate, endDate) => {
        try {
            const results = await todo.addNewTodo(description, startDate, endDate);
            logger.info(results);
        } catch (error) {
            throw (error);
        }
    }
);

// update a todo 
program.command('update <id>').alias('u').description('Update a todo').action( 
    async (id) => {
        try{
            const results = await todo.updateTodo(data, id);
            logger.info(results)
        } catch(error) {
            throw (error);
        }
    }
);

// delete a todo
program.command('delete <id>').alias('d').description('Remove a todo').action( 
    async(id) => {
        try {
            const results = await todo.deleteTodo(id);
            logger.info(results);
        } catch (error) {
            throw (error);
        }
    }
);

program.parse(process.argv);