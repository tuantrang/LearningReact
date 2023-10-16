import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducerFnc = (state, action) => {
    switch (action.type) {
        case 'FETCHING_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCHING_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}
function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducerFnc, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'FETCHING_SUCCESS', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCHING_ERROR' })
            })
    }, [])
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo

/*
useReducer
userReducer is a hook that is used for state management
It is an alternative to useState
What's the difference?
useState is built using useReducer
When to useReducer vs useState

useState = state
useEffect = side effects
userContext = context API
userReducer = reducer

reduce in Javascript
	array.reduce(reducerFunction, initialValue)
	singleValue = reducerFunction(accumulator, itemValue)
	reduce method returns a single value
useReducer in React
	useReducer(reducerFnc, initialState)
	newState = reducer(currentState, action)
	useReducer returns a pair of values. [newState, dispatchMethod]
	
useState vs useReducer

	Scenario						useState				useReducer
Type of State				Number, String, Boolean		Object or Array					
# of state transitions		One or Two					Too many
Related state transitions?	No							Yes
Business Logic				No business logic			Complex business logic
Local vs Global				Local						Global
*/
