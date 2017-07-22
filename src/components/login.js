import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import axios from 'axios';
import DailyQuoteDetail from './daily_quote_detail';


const dotenv = require('dotenv');
// import GithubIcon from './GithubIcon';

dotenv.config();
// dotenv.load({ path: './env'})

const authorizedUrl = 'https://github.com/login/oauth/authorize'
const clientId = 
// const clientId = process.env.CLIENT_ID
// const clientId = ENV['CLIENT_ID']
const scope = 'user'

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      dailyQuote: null,
      theme: 'motivational',
    };

    this.openingQuoteCall();

  }

    openingQuoteCall() {
      var self = this;
      axios.get(`http://localhost:3000/dailyquotes/motivational`, {
        params: {
          token: this.props.token
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

      <div className="daily-quote">
        <h1>Quote of the Day</h1>
        <DailyQuoteDetail dailyQuote={this.state.dailyQuote} />
        <h2>Theme: {this.state.theme}</h2>
        <Button raised primary
        href={`${authorizedUrl}?client_id=${clientId}&scope=${scope}`}
         >
          Login with Github
          </Button>
      </div>
    );
  }
}

export default Login;
