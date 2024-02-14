import logo from './images/raygn.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to your Ticketing System.
        </p>
        <a
          className="App-link"
          href="http://pbs.twimg.com/media/BG48ENgCEAAIDl9.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to create an account
        </a>
      </header>
    </div>
  );
}

export default App;
