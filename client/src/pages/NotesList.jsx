import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`
const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateNote extends Component {
    updateUser = event => {
        console.log(event);
        
        event.preventDefault()

        window.location.href = `/notes/update/${this.props.id}`
    }

    render(){
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteNote extends Component {
    deleteUser = event => {
        console.log(event);
        
        event.preventDefault()

        if(
            window.confirm(
                `Do you want to delete the note ${this.props.id} permanently?`,
            )
        ) {
            api.deleteNoteById(this.props.id)
            window.location.reload()
        }
    }

    render(){
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class NotesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes: {},
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllNote().then( notes => {
            this.setState({
                notes: notes.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { notes, isLoading } = this.state
        console.log('TCL: NotesList -> render -> notes', notes)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Title',
                accessor: 'title',
                filterable: true,
            },
            {
                Header: 'Description',
                accessor: 'desciption',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteNote id={props.original._id} />
                        </span>
                    )
                }
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateNote id={props.original._id} />
                        </span>
                    )
                }
            }
        ]

        let showTable = true
        if(!notes.length){
            showTable = false
        }
        
        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={notes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default NotesList