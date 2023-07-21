import bears from './bearsdontsurf.jpeg';
import './App.css';
import { Elements } from './PubChemElements.js';
import Dropdown from './Dropdown';
import ElementsList from './elementsList.js';
import NameForm from './nameForm.js';

const App = () => {
  const elements = [...Elements];

  return (
    <header className="App-header">
      <body>
      <div>
          <NameForm />
        </div>

        <div>
          <ElementsList />
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
