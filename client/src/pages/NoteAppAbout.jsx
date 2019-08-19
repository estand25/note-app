import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Title = styled.h1.attrs({
    className: 'h1'
})``

const AboutText = styled.div`
    padding: 5px;
`

const AboutColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis:100;
    flex: 1;
`
const AboutLink = styled.a.attrs({
    className: 'navbar-brand'
})`
    padding :0px;
    margin:0px;
`

 const NoteAppAbout = () => {
    return(
        <Wrapper>
            <AboutText>
                <Title>About</Title>
                <p>This is my second MERN app</p>
                <AboutColumn>
                    <AboutLink href="https://www.mongodb.com/">M - Mongo DB (4.0.4+)</AboutLink>
                    <AboutLink href="https://expressjs.com/">E - Express JS (4.16.3+)</AboutLink>
                    <AboutLink href="https://reactjs.org/">R - React JS (16.5.0+)</AboutLink>
                    <AboutLink href="https://nodejs.org/en/">N - Node JS (11.4.0+ (It's recommended to use 10.15.1 LTS))</AboutLink>
                </AboutColumn>
                <span />
                <p>This apps creats, deletes, and updates notes</p>
            </AboutText>
        </Wrapper>
    )
}

export default NoteAppAbout