import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
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
  render() {
    return (
      <Button raised primary
      href={`${authorizedUrl}?client_id=${clientId}&scope=${scope}`}
       >
        Login with Github
        </Button>
    );
  }
}

export default Login;
