import React from 'react';
import './phone_num_form.css';

class PhoneNumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitPhone = this.handleSubmitPhone.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmitPhone(event) {
    event.preventDefault();
    alert('You entered: ' + this.state.value);
    this.props.onPhoneInput(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitPhone}>
      <h4 className="send-header">Send Someone the Quote:</h4>
        <label className="send-text">
          Enter Phone Number:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Send Text" />
      </form>
    );
  }
}

export default PhoneNumForm;
