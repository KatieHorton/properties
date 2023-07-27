// import bears from './bearsdontsurf.jpeg';
import './App.css';
import Dropdown from './dropdown.js';
// import ElementsList from './elementsList.js';
// import NameForm from './nameForm.js';
// import OneElement from './oneElement.js';
// import CalcInputForm from './CalcInputForm.js'
import { Elements } from './PubChemElements.js';




const App = () => {
  const items = [...Elements];

  let title = 'ChemicalsReact!';
  return (
    <header className="App-header">
      <body>
        <div className="title">
          <h3>{title}</h3>
        </div>

        <div className="App">
          <Dropdown
            isSearchable
            isMulti
            placeHolder="Select..."
            items={items}
            onChange={(value) => console.log(value)}
          />

          <Dropdown
            isSearchable
            isMulti
            placeHolder="Select..."
            items={items}
            onChange={(value) => console.log(value)}
          />
        </div>

      </body>
    </header >
  );
};

export default App;
