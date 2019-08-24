import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Auth from './Auth'

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
                        <Link to="/" className="nav-link">
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
            <Auth />
        </React.Fragment>
    )
}

export default Links