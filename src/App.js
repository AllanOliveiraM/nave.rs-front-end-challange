import React      from 'react'
import Axios      from 'axios'
import Cookies    from 'universal-cookie'
import LoadingBar from 'react-top-loading-bar'
import Helmet     from 'react-helmet'

// Components
import CardLogin  from './components/cardLogin'
import LogoFull   from './components/logo'

// Styles
import './styles/login_components.css'

// Languages: String Mapping
import languagePackage from './languages/pt-br.js'
//
const homeDOMTitle         = languagePackage.homeDOMTitle
const stringEmail          = languagePackage.stringEmail
const stringPassword       = languagePackage.stringPassword
const stringSubmit         = languagePackage.stringSubmit
const stringLongData       = languagePackage.stringLongData
const stringBadConnection  = languagePackage.stringBadConnection
const stringWrongEmail     = languagePackage.stringWrongEmail


// Global Var's
const cookies              = new Cookies()

const UrlAPI               = 'https://navedex-api.herokuapp.com/v1'
const pathAPILogin         = '/users/login'
const pathAPIListNavers    = '/navers'

let   authTokenObject

let loadingBarRef


// eslint-disable-next-line
function getJsonPOST (path, paramsObject, token){
  authTokenObject = {
    headers: { Authorization: `Bearer ${token}` }
  }

  Axios.post(
    UrlAPI + path,
    paramsObject,
    authTokenObject
  ).then(
    function (response) {
      return response
    }
  ).catch(
    function (data) {
      return data
    }
  )
}

// eslint-disable-next-line
function getJsonGET (path, token){
  authTokenObject = {
    headers: { Authorization: `Bearer ${token}` }
  }
  
  Axios.get(
    UrlAPI + path,
    authTokenObject
  ).then(
    function (response) {
      return response
    }
  ).catch(
    function (data) {
      return data
    }
  )
}


class LoadBar extends React.Component {
  render(){
    return (
      <LoadingBar
        height={ 3 }
        color='#212121'
        onRef={ ref => (loadingBarRef = ref) }
      />
    )
  }
}


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
          <form onSubmit={ this.handleSubmit }>

            <div className='logo-full-container'>
              <LogoFull className='logo-full' />
            </div>

            <div className='card-input-container-m'>

              <label htmlFor='login-email'>
                { stringEmail }
              </label>
              <input
                value={ this.state.email }
                onChange={ this.emailChange }
                autoComplete='email'
                placeholder={ stringEmail }
                id='login-email'
                type='email'
                name='name'
              />

            </div>
            <div className='card-input-container'>

              <label htmlFor='login-password'>
                { stringPassword }
              </label>
              <input
                value={ this.state.password }
                onChange={ this.passwordChange }
                autoComplete='password'
                placeholder={ stringPassword }
                id='login-password'
                type='password'
                name='name'
                required
              />

            </div>

            <div className={ this.props.passwordMessageClass }>
              <p id='message-login'>{ this.props.passwordMessage }</p>
            </div>

            <button type="submit">{ stringSubmit }</button>

          </form>
        </CardLogin>
      </div>
    )
  }
}


class LoginPage extends React.Component {

  render(){
    return (
      <main>
        <LoginCenterCard
          passwordMessage={ this.props.passwordMessage }
          passwordMessageClass={ this.props.passwordMessageClass }
          login={ this.props.login }
        />
      </main>
    )
  }
}


class Home extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render(){
    return (
      <main>
        <div>Home - Test string</div>
        <Helmet>
          <title>{ homeDOMTitle }</title>
        </Helmet>
      </main>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)

    let getCookie = cookies.get('sessionAuth')
    if (getCookie === undefined){
      this.state = {
        passwordMessage: '',
        authToken: 'undefined',
        passwordMessageClass: 'no-show'
      }
    } else {
      this.state = {
        passwordMessage: '',
        authToken: getCookie,
        passwordMessageClass: 'no-show'
      }
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
    let setToken = this.setAuthToken

    if(email !== ''){
      loadingBarRef.continuousStart()

      bodyParams = {
        email: email,
        password: password
      }

      Axios.post(
        UrlAPI + pathAPILogin,
        bodyParams
      ).then(
        function (response) {
          setToken(response.data.token)
          loadingBarRef.complete()
        }
      ).catch(
        function (data) {
          setToken(undefined)
          if(data.response){
            loginMessage(stringLongData)
          } else {
            loginMessage(stringBadConnection)
          }
          loadingBarRef.complete()
        }
      )
    } else {
      loadingBarRef.complete()
      loginMessage(stringWrongEmail)
    }
  }

  setAuthToken(token){
    cookies.set('sessionAuth', token)
    this.setState({
      authToken: token
    })
  }


  render(){

    if(this.state.authToken !== 'undefined'){
      getJsonGET(pathAPIListNavers, this.state.authToken)
      return (
        <Home />
      )

    } else {
      return (
        <LoginPage
          passwordMessage={ this.state.passwordMessage }
          passwordMessageClass={ this.state.passwordMessageClass }
          login={ this.login }
        />
      )
    }
  }
}


export default {App, LoadBar}
