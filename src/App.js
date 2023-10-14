import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from "./Components/Counter";
function App() {
  return (
    <div className="App">
      {/*<Greet name='Trang' heroName='Thor'>
        <h1>This is the children</h1>
      </Greet>
      <Greet name='Thanh' heroName='Superman'><button>Action</button></Greet>
      <Greet name='Tuan' heroName='Aquaman' />
      <Welcome heroName="Flash" />*/}
      {/*<Hello />*/}
      {/* <Message/> */}
      <Counter/>
    </div>
  );
}

export default App;
