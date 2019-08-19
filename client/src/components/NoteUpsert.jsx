import React, {useState, useEffect} from 'react'

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

const Spacing = styled.div`
    padding:5px;
`

/**
 * NoteUpsert - Add new note if note does not exist 
 *      or Update note is exist
 */
const NoteUpsert = (props) => {
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
        const intitle = event.target.value
        setTitleState(intitle)
    }

    const handleChangeInputDesciption = async event => {
        const indesciption = event.target.value
        setDesciptionState(indesciption)
    }

    const onClick = () => {
        props.onTitleChange(title)
        props.onDescriptionChange(desciption)

        const payload = {title,desciption}

        props.onPayloadChange(payload)

        setTitleState('')
        setDesciptionState('')
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

            <Button onClick={ onClick }>{props.btnAccept}</Button>
            <CancelButton href={'/notes/list'}>Cancel</CancelButton>
        </Wrapper>
    )
}

export default NoteUpsert;
