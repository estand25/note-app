const Note = require('../models/note-model')

createNote = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a note',
        })
    }

    const note = new Note(body)

    if(!note){
        return res.status(400).json({
            success: false, error: err
        })
    }

    note
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: note._id,
                message: 'Note Created!',
            })
        })
}

updateNote = async (req,res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Note.findOne({ _id: req.params.id }, (err, note) => {
        if(err) {
            return res.status(404).json({
                err,
                message: 'Note not found!',
            })
        }

        note.title = body.title
        note.desciption = body.desciption

        note
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: note._id,
                    message: 'Note update!',
                })
            })
            .catch( error => {
                return res.status(404).json({
                    error,
                    message: 'Note note updated!'
                })
            })
    })
}

module.exports = {
    createNote,
    updateNote
}

