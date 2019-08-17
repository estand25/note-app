import React, {Component} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
margin: 0 30px;
`
const Label = styled.label`
margin: 5px;
`

class NoteAppAbout extends Component {
    render(){
        return(
            <Wrapper>
                <Label>About</Label>
                <p>This is my second MERN app</p>
                <il>M - Mongo DB</il>
                <il>E - Express JS</il> 
                <il>R - React JS</il>
                <il>N - Node JS</il>
                <span />
                <p>This apps creats, deletes, and updates notes</p>
            </Wrapper>
        )
    }
}

export default NoteAppAbout