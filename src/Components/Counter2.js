import React, {useReducer} from 'react'

const initialState = {firstCounter : 0, secondCounter: 10}
const reducerFnc = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state,firstCounter: state.firstCounter + action.value}
        case 'decrement':            
            return {...state,firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state,secondCounter: state.secondCounter + action.value}
        case 'decrement2':            
            return {...state,secondCounter: state.secondCounter - action.value}            
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter2() {
    const [count, dispatch] = useReducer(reducerFnc, initialState)
  return (
    <div>
       <div>First Counter = {count.firstCounter}</div>
       <div>Second Counter = {count.secondCounter}</div>
      <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
      <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
      <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <div>
        <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter2

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
*/