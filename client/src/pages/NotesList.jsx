import React, { useState, useEffect } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import { UserConsumer }  from '../hooks/UserContext'
import { NoteDelete, NoteUpdate } from '../components'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const NotesListInner = (props) => {
    const [notes, setNotesState] = useState({})
    const [isLoading, setLoadingState] = useState(false)

    useEffect(
        () => {
            setLoadingState(true)

            api.getAllNote().then(notes => {
                console.log(props._id);
                var filterNotes = {}
                if(props._id !== ""){
                    filterNotes = notes.data.data.filter(i => i.user === props._id)
                }
                else {
                    filterNotes = notes.data.data
                }

                console.log(filterNotes);
                
                setNotesState(filterNotes)
                setLoadingState(false)
            })
        },[props._id]
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
                        <NoteDelete id={props.original._id} />
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
                        <NoteUpdate id={props.original._id} />
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

const NotesList = props => (
    <UserConsumer>
        {({data, handleChagne}) => (
            <NotesListInner
                {...props}
                username={data.username}
                password={data.password}
                email={data.email}
                _id={data._id}
                updateAccount={handleChagne}
            />
        )}
    </UserConsumer>
)

export default NotesList