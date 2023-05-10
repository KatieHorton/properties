import logo from './logo.svg';
import bears from './bearsdontsurf.jpeg';
import coffee from './coffee_0.jpg';
import './App.css';
import { Elements } from './PubChemElements.js';
import Dropdown from './dropdown.js';
// import Card from './elementCard.js';

const App = () => {
const elements = [...Elements];
  // const listItems = elements.map((element) => <li value={element}>{element.name}</li>);


  return (

    <header className="App-header">

      <body>
        <h1>
          ChemicalsReactApp
        </h1>

        <div className="dropdown-container">

          <Dropdown placeHolder='select...'elements={elements}/>

        </div>


        <div className="logoContainer">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Docs

        </a>


        <div className="imgContainer">
          <img src={bears} className="bears" alt="surfing bear" />
          <img src={coffee} className="coffee" alt="coffee" />
        </div>
      </body>
    </header>
  );
};

export default App;
