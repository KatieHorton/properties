import bears from './bearsdontsurf.jpeg';
import './App.css';
// import Dropdown from './Dropdown';
import ElementsList from './elementsList.js';
import NameForm from './nameForm.js';
import OneElement from './oneElement.js';
import CalcInputForm from './CalcInputForm.js'

const App = () => {
  let title = 'ChemicalsReact!';
  return (
    <header className="App-header">
      <body>
        <div className="title">
          <h3>{title}</h3>
        </div> 


         {/* <div>
          <ElementsList />
        </div> *

        <div className="window">
          <OneElement />
        </div> */}

    <div>
          <CalcInputForm />
        </div>


        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Docs
        </a>


        <div className="imgContainer">
          <img src={bears} className="bears" alt="surfing bear" />
        </div> */}

      </body>
    </header >
  );
};

export default App;
