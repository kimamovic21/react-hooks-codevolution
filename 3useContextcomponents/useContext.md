import React from 'react';
import './App.css';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Kerim'}>
        <ChannelContext.Provider value={'Code evolution'}>
        <ComponentC/>
        </ChannelContext.Provider>
     </UserContext.Provider>
    </div>
  );
}

export default App;
