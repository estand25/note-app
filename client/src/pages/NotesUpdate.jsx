import React, { Component } from 'react'
import api from '../api'
import { NoteUpsert } from '../components'

class NotesUpdate extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            desciption: '',
            data: '',
        }
    }

    componentDidMount = async () => {
        const { id } = this.state
        const note = await api.getNoteById(id)

        this.setState({
            data: note.data.data
        })
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

    handleUpdateNote = async (payload) => {
        const {id } = this.state
        await api.updateNoteById(id, payload).then(res => {
            window.alert('Note update successfully')
        })
    }

    render(){ 
        const { data } = this.state

        return(
            <NoteUpsert
                title={'Update Note'}
                data={data}
                btnAccept={'Update Note'}
                onTitleChange={this.handleChangeInputTitle}
                onDescriptionChange={this.handleChangeInputDescription}
                onPayloadCreation={this.handleUpdateNote}
            />
        )
    }
}

export default NotesUpdate