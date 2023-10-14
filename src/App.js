import logo from './logo.svg';
import './App.css';
import Stylesheet from './Components/Stylesheet'
import Inline from './Components/Inline'
import './CSS/appStyles.css'
import styles from './CSS/appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
