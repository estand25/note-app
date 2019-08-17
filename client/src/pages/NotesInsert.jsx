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
    margin: 5px;
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
class NotesInsert extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            desciption: '',
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        
        this.setState({ title })
    }

    handleChangeInputDescription = async event => {
        const desciption = event.target.value

        this.setState({ desciption })
    }

    handleIncludeNote = async () => {
        const { title, desciption } = this.state
        const payload = { title, desciption }

        console.log(payload);
        

        await api.insertNote(payload).then(res => {
            window.alert('Note inserted successfully')

            this.setState({
                title: '',
                desciption: '',
            })
        })
    }

    render(){
        const { title, desciption } = this.state

        return (    
            <Wrapper>
                <Title>Create Note</Title>
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
                        onChange={this.handleChangeInputDescription}
                        row={50}
                        cols={60}
                    />
                </div>

                <Button onClick={this.handleIncludeNote}>Add Note</Button>
                <CancelButton href={'/notes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default NotesInsert