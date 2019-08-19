import React, { useState, useEffect } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import { DeleteNote, UpdateNote } from '../components'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const NotesList = () => {
    const [notes, setNotesState] = useState({})
    const [isLoading, setLoadingState] = useState(false)

    useEffect(
        () => {
            setLoadingState(true)

            api.getAllNote().then(notes => {
                setNotesState(notes.data.data)
                setLoadingState(false)
            })
        },[]
    )

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

export default NotesList