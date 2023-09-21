import { useReducer } from 'react';
import { elementsReduer } from './elementsReducer.js';
import { useContext } from 'react';
import { ElementContext } from './elementContext.js';

const [elements, dispatch] = useReducer(elementsReducer, initialElement);

export default function List() {
// export default function List({ children }) {

    // const element = useContext(ElementContext);

    function handleViewElement(element) {
        dispatch ({
            type: 'GetElement',
            id: display,
            text: text,
        });
    }

    function handleChangeElement(element) {
        dispatch({
            type: 'ChangeElement',
            element: element,
        });
    }

    function handleRemoveElement(element) {
        dispatch({
            type: 'RemoveElement',
            id: remove,
        });
    }
    return (
        <>
            <h1>Elements</h1>
            <GetElement onAddTask={handleViewElement} />
            <List
                elements={elements}
                onChangeElement={handleChangeElement}
                onRemoveElement={handleRemoveElement}
            />
        </>
    );

}
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
    { id: 0, text: 'Hydrogen', done: true },
    { id: 1, text: 'Helium', done: false },
    { id: 2, text: 'Lithium', done: false },
];

/*

// CHAT.JS

import { useState } from 'react';

export default function Chat({contact, message, dispatch}) {
    return (
      <section className="chat">
        <textarea
          value={message}
          placeholder={'Chat to ' + contact.name}
          onChange={(e) => {
            // TODO: dispatch edited_message
            // (Read the input value from e.target.value)
            dispatch({
              type: 'edited-message',
              message: e.target.value,
            });
          }}
        />
        <br />
        <button onClick={() => {
            alert(`${message} sent to: ${contact.email}`)
            dispatch({
                type: 'sent_message',
            });
        }}>
        Send to {contact.email}
        </button>
      </section>
    );
}
// CONTACTLIST.JS
import { messengerReducer } from './messengerReducer.js';

export default function ContactList({contacts, selectedId, dispatch}) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                // TODO: dispatch changed_selection
                dispatch({
                  type: 'changed_selection',
                  contactID: contact.id,
                });
                
              }}>
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

// MESSENGERREDUCER.JS

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
        case 'sent_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
export const initialState = {
  selectedId: 0,
  message: 'Hello',
};


// APP.JS
import { useReducer } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';
import { initialState, messengerReducer } from './messengerReducer';

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId]; 
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];

// When the input is edited
case 'edited_message': {
  return {
    // Keep other state like selection
    ...state,
    messages: {
      // Keep messages for other contacts
      ...state.messages,
      // But change the selected contact's message
      [state.selectedId]: action.message
    }
  };
}

// challenge 4, create useReducer hook from scratch:
import { useState } from 'react';

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
    }
    return [state, dispatch];
}


*/