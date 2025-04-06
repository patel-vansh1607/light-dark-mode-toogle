import logo from './logo.svg';
import './App.css';
import LightDarkModeToogle from './components/mode';

function App() {
  return (
    <div className="App">
      <LightDarkModeToogle />
      <h1>Hello World</h1>
      <p>This is a simple dark/light mode toggle example.</p>
    </div>
  );
}

export default App;
