import {useState, useMemo} from 'react'

const useAppState = () => {
    const initialState = { _id: ''}

    const [state, setState] = useState(initialState)

    const actions = useMemo(() => getActions(setState), [setState])

    return { state, actions}
}

const getActions = setState => ({
    setId: (id) => {
        setState(state => ({ ...state, _id: id}))
    }
})

export default useAppState