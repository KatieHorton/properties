import { useState } from 'react';

export default function NameForm() {

  let [userName, setUserName] = useState('');
  let [email, setEmail] = useState('');

  function handleUserNameChange(e) {
    setUserName(userName = e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(email = e.target.value);
  }

  function handleReset() {
    setUserName(userName = '');
    setEmail(email = '');
  }

  return (
    <div className="name-form">
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="Name"
        value={userName}
        onChange={handleUserNameChange}
      />
      <input
        placeholder="email"
        value={email}
        onChange={handleEmailChange}
      />
      <h4>Hi, {userName}! Please select an element. </h4>
      <button onClick={handleReset}>Reset</button>
    </form>
    </div>
  );
}

// feedback message form
// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('');
  
//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   } else {    
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert(`Sending: "${message}"`);
//         setIsSent(true);
//       }}>
//         <textarea
//           placeholder="Feedback"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }


// We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a 
// form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by 
// React in this way is called a “controlled component”.

/* <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

// For example, if we want to make the previous example log the name when it is submitted, we can write the form as a 
// controlled component:

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

// In React, a <textarea> uses a value attribute
// Notice that this.state.value is initialized in the constructor, so that the text area starts off with some text in it.

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  // When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.

// For example:

class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      // Note how we used the ES6 computed property name syntax to update the state key corresponding to the given input name:
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  } */