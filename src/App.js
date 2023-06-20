import bears from './bearsdontsurf.jpeg';
import './App.css';
import { Elements } from './PubChemElements.js';
import Dropdown from './Dropdown.js';
import ElementList from './elementsList.js';


const App = () => {
  const elements = [...Elements];

  return (

    <header className="App-header">
      <body>
        <div className="title-search-bar">

          <div className='title'>
            <h1> Element Cards</h1>
          </div>

          <div className="dropdown-container">
            <Dropdown placeHolder='Search...' elements={elements} />
          </div>

        </div>


        <div className='Element-List'>
          <ElementList />
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
        </div>
      </body>
    </header >
  );
};

export default App;
