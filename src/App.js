import React from 'react'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import LoadingBar from 'react-top-loading-bar'



import Card from './components/card'
import LogoFull from './components/logo'

import './styles/login_components.css'

const cookies = new Cookies()

const UrlAPI = 'https://navedex-api.herokuapp.com/v1'


let bodyParams
// let authToken
// authToken = {
//   headers: { Authorization: `Bearer ${null}` }
// }






class LoginCenterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(event) { 
    this.setState({email: event.target.value});
  }

  passwordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password)
  }


  render(){
    return (
      <div className='flexbox-center-x-y height-100'>
        <Card>
          <form onSubmit={this.handleSubmit}>

            <div className='logo-full-container'>
              <LogoFull className='logo-full' />
            </div>

            <div className='card-input-container-m'>

              <label htmlFor='login-email'>
                E-mail
              </label>
              <input
                value={this.state.email}
                onChange={this.emailChange}
                autoComplete='email'
                placeholder='E-mail'
                id='login-email'
                type='email'
                name='name'
              />

            </div>
            <div className='card-input-container'>

              <label htmlFor='login-password'>
                Senha
              </label>
              <input
                value={this.state.password}
                onChange={this.passwordChange}
                autoComplete='password'
                placeholder='Senha'
                id='login-password'
                type='password'
                name='name'
              />

            </div>

            <div className={this.props.passwordMessageClass}>
              <p id='password-invalid'>{this.props.passwordMessage}</p>
            </div>

            <button type="submit">Entrar</button>

          </form>
        </Card>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: cookies.get('sessionAuth'),
      passwordMessageClass: 'no-show'
    }

    this.login = this.login.bind(this)
    this.invalidPassword = this.invalidPassword.bind(this)
    this.setAuthToken = this.setAuthToken.bind(this)
  }

  invalidPassword(){
    this.setState({
      passwordMessageClass: 'show'
    })
  }

  login(email, password){
    let invalidPassword = this.invalidPassword
    let LoadingBar = this.LoadingBar
    let setToken = this.setAuthToken
    LoadingBar.continuousStart()

    bodyParams = {
      email: email,
      password: password
    }

    Axios.post( 
    UrlAPI + '/users/login',
    bodyParams
    ).then(
      function (response) {
        LoadingBar.complete()
        setToken(response.data.token)
      }
    ).catch(
      function (data) {
        if(data.response){
          console.log('RESPONSE KARAI')
        }
        LoadingBar.complete()
        invalidPassword()
        setToken('')
      }
    )
  }

  setAuthToken(token){
    cookies.set('sessionAuth', token)
    this.setState({
      authToken: token
    })
    console.log(this.state.authToken)
  }

  render(){
    return (
      <div>
        <LoginCenterCard
          passwordMessage='oi'
          passwordMessageClass={this.state.passwordMessageClass}
          login={this.login}
        />
        <LoadingBar
          height={3}
          color='#212121'
          onRef={ref => (this.LoadingBar = ref)}
        />
      </div>
    )
  }
}

export default App;
