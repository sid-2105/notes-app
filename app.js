const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs') 
const notes = require('./notes.js')


//fs.writeFileSync('noted.txt','This is created by nodejs')
//fs.appendFileSync('noted.txt', 'My name is Siddharth Mishra')

// const msg = getNotes()
// console.log(msg)

//console.log(validator.isEmail('siddhuji050'))
//console.log(validator.isURL('sid'))

/* FORCE_COLOR=1
const ctx = chalk.supportsColor
const msg = chalk.blue.inverse.bold('Hello World!!')
console.log(ctx)
console.log(msg)
console.log(process.argv[2])*/

//const command = process.argv[2]
//console.log(process.argv)


// customize yargs version
yargs.version('2.0.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Challenge Accepted',
            demandOption: true,
            type: 'string',
        }
    },
   
    handler: function(argv){
        // console.log('Title: '+ argv.title)
        // console.log('Body: '+ argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(argv){
        //console.log('removing the number')
        notes.removeNote(argv.title)
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){ //Es6 syntax which customize the length
        //console.log('reading the number')
        notes.readNotes(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function(){
        //console.log('listing the number')
        notes.listNotes()
    }

})
yargs.parse()

//add, remove, read, list

//console.log(yargs.argv)
/*if(command == 'add'){
    console.log('adding note!')
}
else if (command == 'remove'){
    console.log('removing note!')
}*/

