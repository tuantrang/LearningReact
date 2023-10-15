import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
