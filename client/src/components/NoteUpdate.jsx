import React from 'react'
import styled from 'styled-components'

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const NoteUpdate = (props) => {
    const updateUser = event => {
        console.log(event);
        
        event.preventDefault()

        window.location.href = `/notes/update/${props.id}`
    }

    return <Update onClick={updateUser}>Update</Update>
}

export default NoteUpdate