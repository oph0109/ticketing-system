import logo from "./images/raygn.png";
import "./App.css";
import Button from "./UI Kit/Button.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to your Ticketing System.</p>
        <Button class="signup-button">Sign Up</Button>
      </header>
    </div>
  );
}

export default App;
