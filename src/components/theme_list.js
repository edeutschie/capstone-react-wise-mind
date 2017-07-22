import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
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

  changeTheme = (theme) => {
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
          <Button raised primary onClick={ this.handleClick }>Change Theme</Button>
        </li>
        <li>
          Creativity
          <input type="button" value="creativity" onClick={ this.changeTheme, this.value } />
          // <button onClick={ this.handleClick("creativity") }>Change Theme</button>
        </li>
        <li>
          Adies in Internship
          <Button raised primary onClick={ this.handleClick("adies_in_internship") }>Change Theme</Button>
        </li>
      </ul>
    );
  }
}

export default ThemeList;
