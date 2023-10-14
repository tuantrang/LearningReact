import logo from './logo.svg';
import './App.css';
import FunctionClick from './Components/FunctionClick';
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
