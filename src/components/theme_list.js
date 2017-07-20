import React, { Component } from 'react';
// import axios from 'axios';
// import ThemeListItem from './theme_list_item';

class ThemeList extends Component {

  constructor(props) {
    console.log("props:");
    console.log(props);
    super(props);

    this.state = { theme: 'motivational' };
  };

  handleClick(theme) {
    console.log('the button was clicked');
    // var self = this;
    // axios.patch('http://localhost:3000/dailyquotes/motivational')
  }

  changeTheme = () => {
    this.setState({
      theme: this.value
    });
    console.log("this is the theme after the click");
    console.log(this.state.theme)

  };

  render() {
    return (
      <ul>
        <li>
          Motivational
          // <input type="button" value="motivational" onClick={ this.changeTheme } />
          <button onClick={ this.handleClick }>Change Theme</button>
        </li>
        <li>
          Creativity
          <input type="button" value="creativity" onClick={ this.changeTheme, this.value } />
          // <button onClick={ this.handleClick("creativity") }>Change Theme</button>
        </li>
        <li>
          Adies in Internship
          <button onClick={ this.handleClick("adies_in_internship") }>Change Theme</button>
        </li>
      </ul>
    );
  }
}

export default ThemeList;
