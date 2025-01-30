const express = require("express");
const {createNote,getAllNotes,updateNote,deleteNote}= require("../controllers/noteController");
const auth = require("../middlewares/auth.middleware")

const noteRouter = express.Router();

noteRouter.post("/",auth,createNote);
noteRouter.get("/",auth,getAllNotes);
noteRouter.patch("/:noteId",auth,updateNote);
noteRouter.delete("/:noteId",auth,deleteNote);

module.exports = noteRouter;
