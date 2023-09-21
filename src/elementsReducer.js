function elementsReducer(elements, action) {
    if (action.type === 'GetElement') {
      return [
        ...elements,
        {
          id: action.id,
          text: action.element,
          done: false,
        },
      ];
    } else if (action.type === 'ChangeElement') {
      return elements.map((el) => {
        if (el.id === action.element.id) {
          return action.element;
        } else {
          return el;
        }
      });
    } else if (action.type === 'RemoveElement') {
      return elements.filter((el) => el.id !== action.id);
    } else {
      throw Error('Unknown action: ' + action.type);
    }
  }

  let nextId = 3;
const initialElements = [
  {id: 0, text: 'Hydrogen', done: true},
  {id: 1, text: 'Helium', done: false},
  {id: 2, text: 'Lithium', done: false},
];