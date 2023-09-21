import './App.css';
import { ElementsList } from './elementsList.js';

const App = () => {

  let title = 'ChemicalsReact!';
  return (
    <header className="App-header">
      <body>
        <div className="title">
          <h3>{title}</h3>
        </div>

        <div>
          <ElementsList />
        </div>

        {/* <div className="App">
          <Dropdown
            isSearchable
            isMulti
            placeHolder="Select..."
            items={items}
            onChange={(name) => console.log(name)}
          /> */}

        {/* <Dropdown
            isSearchable
            isMulti
            placeHolder="Select..."
            items={items}
            onChange={(name) => console.log(name)}
          /> */}
        {/* </div> */}
        {/* <ElementsContext.Provider value={Elements}>
          <ElementsDispatchContext.Provider value={dispatch}>
            <h1>{Element.name}</h1>
            <AddElement />
            <ElementsList />
          </ElementsDispatchContext.Provider>
        </ElementsContext.Provider>
        <div>
          <ElementsList />
        </div> */}
      </body>
    </header >
  );
};

export default App;
