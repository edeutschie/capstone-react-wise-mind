import React from 'react';
import './theme_form.css';

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
    event.preventDefault();
    this.props.onThemeInput(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h4>Change Your Theme:</h4>
          <div className="dropdown">
            <select value={this.state.value} onChange={this.handleChange}>
              <option defaultValue="motivational">motivational</option>
              <option value="creativity">creativity</option>
              <option value="adies_in_internship">adies in internship</option>
            </select>
          </div>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ThemeForm;
