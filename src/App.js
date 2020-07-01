import React from 'react'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import LoadingBar from 'react-top-loading-bar'

import CardLogin from './components/cardLogin'
import LogoFull from './components/logo'

import './styles/login_components.css'


const cookies = new Cookies()

const UrlAPI = 'https://navedex-api.herokuapp.com/v1'

// let authToken
// authToken = {
//   headers: { Authorization: `Bearer ${null}` }
// }


class LoginCenterCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.emailChange = this.emailChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  emailChange(event) { 
    this.setState({email: event.target.value})
  }

  passwordChange(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }


  render(){
    return (
      <div className='flexbox-center-x-y height-100'>
        <CardLogin>
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
        </CardLogin>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordMessage: '',
      authToken: cookies.get('sessionAuth'),
      passwordMessageClass: 'no-show'
    }

    this.login = this.login.bind(this)
    this.loginMessageSetState = this.loginMessageSetState.bind(this)
    this.setAuthToken = this.setAuthToken.bind(this)
  }

  loginMessageSetState(message){
    this.setState({
      passwordMessageClass: 'show',
      passwordMessage: message
    })
  }

  login(email, password){
    let bodyParams
    let loginMessage = this.loginMessageSetState
    let LoadingBar = this.LoadingBar
    let setToken = this.setAuthToken

    if(email !== ''){
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
          setToken(undefined)
          if(data.response){
            console.log('RESPONSE KARAI')
            loginMessage('Senha invália')
          } else {
            loginMessage('Oops! Verifique sua conexão.')
          }
          LoadingBar.complete()
        }
      )
    } else {
      LoadingBar.complete()
      loginMessage('Email inválido.')
    }
  }

  setAuthToken(token){
    cookies.set('sessionAuth', token)
    this.setState({
      authToken: token
    })
    console.log(this.state.authToken)
  }

  render(){
    if(this.state.authToken !== 'undefined' && this.state.authToken !== undefined){
      return <p>OOOOOI</p>
    } else {
      return (
        <main>
          <LoginCenterCard
            passwordMessage={this.state.passwordMessage}
            passwordMessageClass={this.state.passwordMessageClass}
            login={this.login}
          />
          <LoadingBar
            height={3}
            color='#212121'
            onRef={ref => (this.LoadingBar = ref)}
          />
        </main>
      )
    }
  }
}

export default App
