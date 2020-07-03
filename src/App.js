import React          from 'react'
import Axios          from 'axios'
import Cookies        from 'universal-cookie'
import LoadingBar     from 'react-top-loading-bar'
import Helmet         from 'react-helmet'

// Components
import CardLogin      from './components/cardLogin'
import LogoFull       from './components/logo'
import FullPageLoader from './components/fullPageLoader'

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

let isPendingAuthValidtn   = true
let authTokenObject
let loadingBarRef


// eslint-disable-next-line
function getJsonPOST (path, paramsObject, token){
  authTokenObject = {
    headers: { Authorization: `Bearer ${token}` }
  }

  return Axios.post(
    UrlAPI + path,
    paramsObject,
    authTokenObject
  )
}

// eslint-disable-next-line
function getJsonGET (path, token){
  authTokenObject = {
    headers: { Authorization: `Bearer ${token}` }
  }
  
  return Axios.get(
    UrlAPI + path,
    authTokenObject
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

            <div className={ this.props.loginMessageClass }>
              <p id='message-login'>{ this.props.loginMessage }</p>
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
      <div className='in-animation-faster'>
        <LoginCenterCard
          loginMessage={ this.props.loginMessage }
          loginMessageClass={ this.props.loginMessageClass }
          login={ this.props.login }
        />
      </div>
    )
  }
}


class Home extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render(){
    return (
      <div className='in-animation'>
        <div>Home - Test string</div>
        <Helmet>
          <title>{ homeDOMTitle }</title>
        </Helmet>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)

    function setCookie () {
      let getCookie = cookies.get('sessionAuth')
      if (getCookie === undefined){
        getCookie = 'undefined'
      }
      return getCookie
    }

    this.state = {
      loginMessage: '',
      loginMessageClass: 'no-show',

      authToken: setCookie(),
      authentication: {
        isAuthTokenValid: false
      },
      indexContent: {}
    }

    this.login = this.login.bind(this)
    this.loginMessageSetState = this.loginMessageSetState.bind(this)
    this.setAuthToken = this.setAuthToken.bind(this)
    this.validateCookie = this.validateCookie.bind(this)
    this.resolveRender = this.resolveRender.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
  }

  loginMessageSetState(message){
    this.setState({
      loginMessageClass: 'show',
      loginMessage: message
    })
  }

  login(email, password){
    let bodyParams
    let loginMessage = this.loginMessageSetState
    let setToken = this.setAuthToken
    let thisInside = this

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
          thisInside.setState({
            authentication: {
              isAuthTokenValid: true
            }
          })
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

  validateCookie(){
    let thisInside = this
    getJsonGET(
      pathAPIListNavers,
      thisInside.state.authToken
    ).then(
      function (response){
        isPendingAuthValidtn = false
        thisInside.setState({
          authentication: {
            isAuthTokenValid: true
          },
          indexContent: response
        })
      }
    ).catch(
      function () {
        isPendingAuthValidtn = false
        thisInside.setState({
          authentication: {
            isAuthTokenValid: false
          }
        })
      }
    )
  }

  componentDidMount(){
    if(isPendingAuthValidtn){
      if(this.state.authToken !== 'undefined'){
        this.validateCookie()
        isPendingAuthValidtn = false
      } else {
        isPendingAuthValidtn = false
      }
    }
  }

  resolveRender(){
    let loginPageWithProps = (
      <LoginPage
        loginMessage={ this.state.loginMessage }
        loginMessageClass={ this.state.loginMessageClass }
        login={ this.login }
      />
    )

    let LoadPage = (
      <FullPageLoader />
    )

    if(this.state.authToken !== 'undefined'){
      if(this.state.authentication.isAuthTokenValid){
        return (
          <Home
            indexContent={ null }
          />
        )
      } else {
        if(isPendingAuthValidtn){
          return LoadPage
        } else {
          return loginPageWithProps
        }
      }
    } else {
      return loginPageWithProps
    }
  }

  render(){
    return (
      <main>
        {this.resolveRender()}
      </main>
    )
  }
}


export default {App, LoadBar}
