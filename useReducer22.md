import React, {useReducer} from 'react';
import './App.css';
import ComponentA from './4useReducercomponents/ComponentA'
import ComponentB from './4useReducercomponents/ComponentB'
import ComponentC from './4useReducercomponents/ComponentC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
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
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      Count - {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
    </CountContext.Provider>
  );
}

export default App;