import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5xp;
`

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
    margin: 15px 15px 15px 5px;
`

class NotesUpdate extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            desciption: '',
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({
            title
        })
    }

    handleChangeInputDesciption = async event => {
        const desciption = event.target.value
        this.setState({
            desciption
        })
    }

    handleUpdateNote = async () => {
        const {id, title, desciption } = this.state
        const payload = { title, desciption }

        await api.updateNoteById(id, payload).then(res => {
            window.alert('Note update successfully')

            this.setState({
                title: '',
                desciption: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const note = await api.getNoteById(id)

        this.setState({
            title: note.data.data.title,
            desciption: note.data.data.desciption
        })
    }

    render(){
        const { title, desciption } = this.state

        return(
            <Wrapper>
                <Title>Update Note</Title>
                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />
                <Label>Description: </Label>
                <div style={{padding:5}}>
                    <textarea
                        name="textarea"
                        value={desciption}
                        onChange={this.handleChangeInputDesciption}
                        row={50}
                        cols={60}
                    />
                </div>

                <Button onClick={this.handleUpdateNote}>Update Note</Button>
                <CancelButton href={'/notes/list'}>Cancel</CancelButton>

            </Wrapper>
        )
    }
}

export default NotesUpdate