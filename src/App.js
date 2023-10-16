import React, {useReducer, useContext} from 'react'
import './App.css';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';

export const CountContext = React.createContext()

const initialState = 0
const reducerFnc = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':            
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducerFnc, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
          Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
