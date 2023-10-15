import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero'
import ClickCounterTwo from './Components/ClickCounterTwo'
import HoverCounter from './Components/HoverCounter'
import HoverCounterTwo from './Components/HoverCounterTwo'
import User from './Components/User'
import CounterTwo from './Components/CounterTwo'

function App() {
  return (
    <div className="App">
      <CounterTwo>
        {(count, incrementCount)=> (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )} 
      </CounterTwo>

      <CounterTwo>
        {(count, incrementCount)=> (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}       
      </CounterTwo>   
      {/*<User render={(isLoggedIn)=> isLoggedIn ? 'Tuan Trang':'Guest'} />
      <ClickCounterTwo />
      <HoverCounterTwo />*/}
    </div>
  );
}

export default App;
