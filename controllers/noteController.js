const {NoteModel}= require("../models/note.model");
const auth = require("../middlewares/auth.middleware");


const createNote = async(req , res)=>{
    try {
        const newNote = new NoteModel(req.body)
        await newNote.save()
        res.status(200).json({msg:"Note created Successfully!"})
    } catch(error) {
        res.status(500).json({msg:"Internal server error", error})
    }
}

const getAllNotes = async(req,res)=>{
    try {
        const notes = await NoteModel.find({userId: req.body.userId})
        res.status(200).json({notes})
    } catch(error) {
        res.status(500).json({msg:"Internal server error", error})
    }
}

const updateNote = async(req,res)=>{
    const {noteId} = req.params
    try{
        const note = await NoteModel.findOne({_id:noteId})
        if(note.userId.toString() === req.body.userId) { 
            await NoteModel.findByIdAndUpdate({_id: noteId}, req.body)
            res.status(200).json({msg:`The note with ID: ${noteId} has been updated`})
        } else {
            res.status(400).json({msg:"You are not authorised to perform this task!"})
        }
    }catch(error){
        res.status(500).json({error})
    }
}

const deleteNote = async(req,res)=>{
    const {noteId} = req.params
    try{
        const note = await NoteModel.findOne({_id:noteId})
        if(note.userId.toString() === req.body.userId) { 
            await NoteModel.findByIdAndDelete({_id: noteId})
            res.status(200).json({msg:`The note with ID: ${noteId} has been deleted`})
        } else {
            res.status(400).json({msg:"You are not authorised to perform this task!"})
        }
    }catch(error){
        res.status(500).json({error})
    }
}

module.exports = {createNote,getAllNotes,updateNote,deleteNote}


