import logo from './logo.svg';
import './App.css';
import FunctionClick from './Components/FunctionClick';
import EventBind from './Components/EventBind'
import Message from './Components/Message'
function App() {
  return (
    <div className="App">
      <EventBind />
      <Message/>
    </div>
  );
}

export default App;
