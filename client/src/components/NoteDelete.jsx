import React from 'react'
import api from '../api'

import styled from 'styled-components'

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const NoteDelete = (props) => {
    const deleteUser = event => {
        console.log(event);
        
        event.preventDefault()

        if(
            window.confirm(
                `Do you want to delete the note ${props.id} permanently?`,
            )
        ) {
            api.deleteNoteById(props.id)
            window.location.reload()
        }
    }
    
    return <Delete onClick={deleteUser}>Delete</Delete>
}

export default NoteDelete