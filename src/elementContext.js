import { createContext } from 'react';
import { Elements } from './PubChemElements.js';


export const ElementsContext = createContext(null);
export const ElementsDispatchContext = createContext(null);

/*
// NOW YOU CAN PUT STATE AND DISPATCH INTO CONTEST IN APP.js
import { Element
sContext, Element
sDispatchContext } from './ElementsContext.js';

export default function ElementApp() {
  const [Element
s, dispatch] = useReducer(Element
sReducer, initialElement
s);
  // ...
  return (
    <Element
sContext.Provider value={Element
    s}>
      <Element
    sDispatchContext.Provider value={dispatch}>
        ...
      </Element
    sDispatchContext.Provider>
    </Element
sContext.Provider>
  );
}
*/