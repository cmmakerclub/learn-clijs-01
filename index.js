#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
var figlet = require('figlet');
var pkt = require('./package.json')

program
  .option('-d, --debug', 'output extra debugging')
  .option('-c, --create <type>', 'create an application')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv); 
// if (program.debug) console.log(program.opt());

console.log(program.opts())
console.log(program.create); 

if (program.create) {
    inquirer
    .prompt([
        {
            name: 'name',
            message: 'What is yourname?',
            validate: function(s) { return true },
            default: program.create,
        },
        {
            validate: function(s) { 
                if (!s) {
                    return "this field is required."
                }
                else {
                    return true;
                }
            },
            name: 'surname',
            message: 'and surname?',
        },
        {
            name: 'age',
            message: 'age?',
        },
        {
            type: 'list',
            name: 'theme',
            validate: function(s) { return false },
            message: 'What do you want to do?',
            choices: [
              'Order a pizza',
              'Make a reservation',
              new inquirer.Separator(),
              'Ask for opening hours',
              {
                name: 'Contact support',
                disabled: 'Unavailable at this time'
              },
              'Talk to the receptionist'
            ]
          },
    ])
    .then(answers => {
        console.log(answers)
        // console.info('Answer:', answers.faveReptile);
    }); 
}

