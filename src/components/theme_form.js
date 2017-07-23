import React, { Component } from 'react';
import axios from 'axios';

class ThemeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'motivational'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var self = this;
    console.log("this.props.login");
    console.log(this.props.login);
    axios.patch(`http://localhost:3000/users/${this.props.login}`, {
      params: {
        token: this.props.token,
        theme_choice: this.state.value
      }
    })
    .then(function (response) {
      self.setState({
        dailyQuote: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Change Your Theme:
          <select value={this.state.value} onChange={this.handleChange}>
            <option defaultValue="motivational">Motivational</option>
            <option value="creativity">Creativity</option>
            <option value="adies_in_internship">Adies in Internship</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ThemeForm;
