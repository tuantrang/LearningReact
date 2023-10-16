import React from 'react'
import logo from './logo.svg';
import './App.css';
import ComponentC from './Components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Tuan'}>
        <ChannelContext.Provider value={'TTTDesign'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
