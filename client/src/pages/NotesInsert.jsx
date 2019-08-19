import React, { Component } from 'react'
import api from '../api'
import { NoteUpsert } from '../components'

class NotesInsert extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            desciption: '',
        }
    }
    
    handleChangeInputTitle = (title) => {
        this.setState({
            title: title,
        })
    }

    handleChangeInputDescription = (desciption) =>{
        this.setState({
            desciption: desciption
        })
    }

    handleIncludeNote = async (payload) => {
        await api.insertNote(payload).then(res => {
            window.alert('Note inserted successfully')
        })
    }

    render(){
        return (    
            <NoteUpsert
                title={'Create Note'}
                data={'null'}
                btnAccept={'Add Note'}
                onTitleChange={this.handleChangeInputTitle}
                onDescriptionChange={this.handleChangeInputDescription}
                onPayloadChange={this.handleIncludeNote}
            />
        )
    }
}

export default NotesInsert