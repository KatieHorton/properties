import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';

export class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like coffee</p>
        <img src="./coffee_0.jpg" alt="cup of joe" />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('app'));