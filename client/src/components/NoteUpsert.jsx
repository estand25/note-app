import React, {useState, useEffect} from 'react'

import styled from 'styled-components'
import { UserConsumer } from '../hooks/UserContext'

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

const Spacing = styled.div`
    padding:5px;
`

/**
 * NoteUpsert - Add new note if note does not exist 
 *      or Update note is exist
 */
const NoteUpsertInner = (props) => {
    const [title, setTitleState] = useState('')
    const [desciption, setDesciptionState] = useState('')

    useEffect(
        () => {
            if(props.data !== 'null'){
                setTitleState(props.data.title)
                setDesciptionState(props.data.desciption)
            }
        },[props.data]
    )

    const handleChangeInputTitle = async event => {
        setTitleState(event.target.value)
    }

    const handleChangeInputDesciption = async event => {
        setDesciptionState(event.target.value)
    }

    const onClick = () => {        
        props.onTitleChange(title)
        props.onDescriptionChange(desciption)

        const payload = {
            title: title,
            desciption :desciption,
            user: props._id
        }

        props.onPayloadCreation(payload)

        setTitleState('')
        setDesciptionState('')

        window.location.href ='/notes/list'
    }

    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <Label>Title</Label>
            <InputText
                type="text"
                value={title}
                onChange={handleChangeInputTitle}
            />
            <Label>Description</Label>
            <Spacing>
                <textarea
                    name="textarea"
                    value={desciption}
                    onChange={handleChangeInputDesciption}
                    row={50}
                    cols={60}
                />
            </Spacing>

            <Button onClick={ onClick } >{props.btnAccept}</Button>
            <CancelButton href={'/notes/list'}>Cancel</CancelButton>
        </Wrapper>
    )
}

const NoteUpsert = props => (
    <UserConsumer>
        {({ data }) => (
            <NoteUpsertInner
                {...props}
                username={data.username}
                password={data.password}
                email={data.email}
                _id={data._id}
            />
        )}
    </UserConsumer>
)

export default NoteUpsert;
