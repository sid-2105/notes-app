const fs = require('fs')
const chalk = require('chalk');
const getNotes = () =>'Your notes....'


const addNote = function (title,body){
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>note.title === title)
    
    debugger
    
    if(!duplicateNote){
        notes.push({
                       title: title,
                         body: body
               })
               saveNotes(notes)
              console.log(chalk.green.inverse("New note added!"))
    }
    else{
        console.log(chalk.red.inverse("Title already taken"))
    }
//     const duplicateNotes = notes.filter(function(note){
//         return note.title === title
//     })
//     if(duplicateNotes.length === 0){
//         notes.push({
//             title: title,
//             body: body
//     })
//     saveNotes(notes)
//     console.log("New note added!")
// }
// else {
//     console.log("Title already taken")
// }

//     notes.push({
//         title: title,
//         body: body
//     })
//    saveNotes(notes)
}

const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e) {
        return []
    }
    
}

const removeNote = (title)=>{
    //console.log(title)
    const notes = loadNotes()
    const notestoKeep = notes.filter((note)=>note.title !== title)
    //     return note.title !== title
    
    // } )
    if ( notes.length > notestoKeep.length){
        console.log(chalk.green('Note removed'))
        saveNotes(notestoKeep)
    }
    else{
        console.log(chalk.red('Note not found!!'))
    }

}
const listNotes =()=>{
    console.log(chalk.blueBright.bold.inverse('Your notes'))
    const notes =loadNotes()
    notes.forEach(note=> {
        console.log(note.title)
    });
}
const readNotes=(title)=>{
    const notes=loadNotes()
    const findNotes = notes.find((note)=>note.title===title)
    if(!findNotes){
        console.log(chalk.red.inverse('No note found'))
    }
    else{
        console.log(chalk.red(findNotes.title))
        console.log(findNotes.body)
    }
}



module.exports = 
    {
         getNotes:  getNotes, 
         addNote: addNote,
         removeNote: removeNote,
         listNotes: listNotes,
         readNotes: readNotes
     }
