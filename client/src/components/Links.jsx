import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const Links = () => {
    return (
        <React.Fragment>
            <Link to="/" className="navbar-brand">
                My Second MERN Application
            </Link>
            <Collapse>
                <List>
                    <Item>
                        <Link to="/notes/list" className="nav-link">
                            Notes
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/notes/create" className="nav-link">
                            Create Note
                        </Link>
                    </Item>
                    <Item>
                        <Link className="nav-link">
                            Notes Management
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/notes/about" className="nav-link">
                            About
                        </Link>
                    </Item>
                </List>
            </Collapse>
            <Link to="/user/signUp" className="nav-link">
                Sign-Up
            </Link>
            <Link to="/user/signIn" className="nav-link">
                Sign-In
            </Link>
            <Link to="/user/userProfile" className="nav-link">
                User Profile
            </Link>
        </React.Fragment>
    )
}

export default Links