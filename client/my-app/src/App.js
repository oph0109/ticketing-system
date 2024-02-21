import logo from "./images/raygn.png";
import "./App.css";
import MainNav from "./Components/MainNav.js";

const HOME_PAGE = 'http://localhost:3000';

function App() {
  return (
    <>
    <MainNav homePage={HOME_PAGE}/>
    <div className="App">
      <header className="App-header">
        <p>Welcome to your Ticketing System.</p>
      </header>
    </div>
    </>
  );
}

export default App;
