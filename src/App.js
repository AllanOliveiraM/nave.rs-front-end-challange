/*
NEEDS REFACTORING AND ORGANIZATION
*/


import React            from 'react'
import Axios            from 'axios'
import Cookies          from 'universal-cookie'
import LoadingBar       from 'react-top-loading-bar'
import Helmet           from 'react-helmet'


// Components
import CardLogin        from './components/cardLogin'
import LogoFull         from './components/logo'
import FullPageLoader   from './components/fullPageLoader'
import IndexCard        from './components/indexCard'
import Modal            from './components/modal'
import ArrowBack        from './components/arrowBack'


// Styles
import './styles/login_components.css'
import './styles/indexCards.css'
import './styles/index.css'



// Language Package
import languagePackage          from './languages/pt-br.js'


// Image Loader Option > Toggle comments bellow for testing
// import ReactImageAppearEmpty from './components/reactImageAppearEmpty'
import ReactImageAppear         from 'react-image-appear'
let ReactImageAppearComponent
// ReactImageAppearComponent = ReactImageAppearEmpty
ReactImageAppearComponent    = ReactImageAppear


// Language Mapping
const consoleSecurityMessage      = languagePackage.consoleSecurityMessage
const homeDOMTitle                = languagePackage.homeDOMTitle
const homeDOMLoginTitle           = languagePackage.homeDOMLoginTitle
const homeDOMEdit                 = languagePackage.homeDOMEdit
const stringDOMAddNaverTitle      = languagePackage.stringDOMAddNaverTitle
const stringExit                  = languagePackage.stringExit
const stringEmail                 = languagePackage.stringEmail
const stringPassword              = languagePackage.stringPassword
const stringSubmit                = languagePackage.stringSubmit
const stringLongData              = languagePackage.stringLongData
const stringBadConnection         = languagePackage.stringBadConnection
const stringWrongEmail            = languagePackage.stringWrongEmail
const stringErrorLoadIndexContent = languagePackage.stringErrorLoadIndexContent
const stringAddNaver              = languagePackage.stringAddNaver
const stringNaversTitle           = languagePackage.stringNaversTitle
const stringUserImageAlt          = languagePackage.stringUserImageAlt
const stringDeleteNaver           = languagePackage.stringDeleteNaver
const stringDeleteNaverSubTitle   = languagePackage.stringDeleteNaverSubTitle
const stringCancel                = languagePackage.stringCancel
const stringDelete                = languagePackage.stringDelete
const stringNoNavers              = languagePackage.stringNoNavers
const stringDeletedNaver          = languagePackage.stringDeletedNaver
const stringDeletedNaverOk        = languagePackage.stringDeletedNaverOk
const stringOops                  = languagePackage.stringOops
const stringDeleteNaverError      = languagePackage.stringDeleteNaverError
const stringName                  = languagePackage.stringName
const stringOffice                = languagePackage.stringOffice
const stringYears                 = languagePackage.stringYears
const stringCompanyTime           = languagePackage.stringCompanyTime
const stringProjects              = languagePackage.stringProjects
const stringImage                 = languagePackage.stringImage
const stringSave                  = languagePackage.stringSave


// Global Var's
const cookies             = new Cookies()

const UrlAPI              = 'https://navedex-api.herokuapp.com/v1'
const pathAPILogin        = '/users/login'
const pathAPIListNavers   = '/navers'

let isPendingAuthValidtn  = true
let authTokenObject
let loadingBarRef


// Console Security Message
console.log('%c' + consoleSecurityMessage, "background: rgb(205, 35, 35); color: yellow; font-size: large")


function getJsonGET(path, token) {
  authTokenObject = {
    headers: { Authorization: `Bearer ${token}` }
  }

  return Axios.get(
    UrlAPI + path,
    authTokenObject
  )
}


class LoadBar extends React.Component {
  render() {
    return (
      <LoadingBar
        height={3}
        color='#212121'
        onRef={ref => (loadingBarRef = ref)}
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
    this.setState({ email: event.target.value })
  }

  passwordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    return (
      <div className='flexbox-center-x-y height-100'>
        <CardLogin>
          <form onSubmit={this.handleSubmit}>

            <div className='logo-full-container'>
              <LogoFull className='logo-full' />
            </div>

            <div className='card-input-container-m'>

              <label htmlFor='login-email'>
                {stringEmail}
              </label>
              <input
                value={this.state.email}
                onChange={this.emailChange}
                autoComplete='email'
                placeholder={stringEmail}
                id='login-email'
                type='email'
                name='name'
              />

            </div>
            <div className='card-input-container'>

              <label htmlFor='login-password'>
                {stringPassword}
              </label>
              <input
                value={this.state.password}
                onChange={this.passwordChange}
                autoComplete='password'
                placeholder={stringPassword}
                id='login-password'
                type='password'
                name='name'
                required
              />

            </div>

            <div className={this.props.loginMessageClass}>
              <p id='message-login'>{this.props.loginMessage}</p>
            </div>

            <button id='button-submit-login' type="submit">{stringSubmit}</button>

          </form>
        </CardLogin>
      </div>
    )
  }
}


class LoginPage extends React.Component {

  render() {
    return (
      <div className='in-animation-faster'>
        <LoginCenterCard
          loginMessage={this.props.loginMessage}
          loginMessageClass={this.props.loginMessageClass}
          login={this.props.login}
        />
      </div>
    )
  }
}


class ModalAddNaver extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      office: '',
      years: '',
      companytime: '',
      projects: '',
      image: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleOfficeChange = this.handleOfficeChange.bind(this)
    this.handleYearsChange = this.handleYearsChange.bind(this)
    this.handleCompanyTimeChange = this.handleCompanyTimeChange.bind(this)
    this.handleProjectsTimeChange = this.handleProjectsTimeChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleOfficeChange(event) {
    this.setState({ office: event.target.value })
  }

  handleYearsChange(event) {
    this.setState({ years: event.target.value })
  }

  handleCompanyTimeChange(event) {
    this.setState({ companytime: event.target.value })
  }

  handleProjectsTimeChange(event) {
    this.setState({ projects: event.target.value })
  }

  handleImageChange(event) {
    this.setState({ image: event.target.value })
  }


  handleSubmit(event) {
    event.preventDefault()
    console.log('Enviou!!')
  }


  render(){
    return(
      <Modal
        customStyles={this.props.customStylesModalAdd}
        modalIsOpen={this.props.modalAddIsOpen}
      >
      <Helmet>
        <style>{'body{overflow-y:hidden;}'}</style>
        <title>{stringDOMAddNaverTitle}</title>
      </Helmet>
      <div className='header-modal-edit'>
        <div>
          <LogoFull className='logo-full-home margin-header-left' />
        </div>
        <div>
          <button
            onClick={this.props.logout}
            type='button'
            className='button-logout margin-header-right'
          >
            {stringExit}
          </button>
        </div>
      </div>
      <section className='container'>
        <section className='add-naver-container'>
          <section className='add-naver-sub-container'>
            <div className='add-naver-header'>
              <button className='close-button zoom-in' onClick={this.props.addNaverClose} type='button'>
                <ArrowBack />
              </button>
              <p className='add-naver-title'>{stringAddNaver}</p>
            </div>
            <div>
              <form>
                <div className='row'>
                  <div className='col col-2'>
                    <div className='center-media-inputs-add-navers'>
                      <div className='add-naver-input-container'>
                        <label className='add-naver-labels' htmlFor='name-naver-add' >{stringName}</label>
                        <input
                          className='add-naver-inputs'
                          id='name-naver-add'
                          type='text'
                          placeholder={stringName}
                          value={this.state.name}
                          onChange={this.handleNameChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col col-2'>
                    <div className='center-media-inputs-add-navers'>
                      <div className='add-naver-input-container'>
                        <label className='add-naver-labels-right' htmlFor='office-naver-add' >{stringOffice}</label>
                        <input
                          className='add-naver-inputs-right'
                          id='office-naver-add'
                          type='text'
                          placeholder={stringOffice}
                          value={this.state.office}
                          onChange={this.handleOfficeChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col col-2'>
                    <div className='center-media-inputs-add-navers'>
                      <div className='add-naver-input-container'>
                        <label className='add-naver-labels' htmlFor='years-naver-add' >{stringYears}</label>
                        <input
                          className='add-naver-inputs'
                          id='years-naver-add'
                          type='text'
                          placeholder={stringYears}
                          value={this.state.years}
                          onChange={this.handleYearsChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col col-2'>
                    <div className='center-media-inputs-add-navers'>
                      <div className='add-naver-input-container'>
                        <label className='add-naver-labels-right' htmlFor='companytime-naver-add' >{stringCompanyTime}</label>
                        <input
                          className='add-naver-inputs-right'
                          id='companytime-naver-add'
                          type='text'
                          placeholder={stringCompanyTime}
                          value={this.state.companytime}
                          onChange={this.handleCompanyTimeChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col col-2'>
                    <div className='center-media-inputs-add-navers'>
                      <div className='add-naver-input-container'>
                        <label className='add-naver-labels' htmlFor='projects-naver-add' >{stringProjects}</label>
                        <input
                          className='add-naver-inputs'
                          id='projects-naver-add'
                          type='text'
                          placeholder={stringProjects}
                          value={this.state.projects}
                          onChange={this.handleProjectsTimeChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col col-2'>
                    <div className='center-media-inputs-add-navers'>
                      <div className='add-naver-input-container'>
                        <label className='add-naver-labels-right' htmlFor='image-naver-add' >{stringImage}</label>
                        <input
                          className='add-naver-inputs-right'
                          id='image-naver-add'
                          type='text'
                          placeholder={stringImage}
                          value={this.state.image}
                          onChange={this.handleImageChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='add-naver-footer-container'>
                  <button
                    className='zoom-in save-add-naver-button'
                    onClick={this.handleSubmit}
                    type='submit'>{stringSave}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </section>
      </section>
    </Modal>
    )
  }
}


class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalAddIsOpen: false
    }

    this.refreshResolveIndex = this.refreshResolveIndex.bind(this)
    this.addNaver = this.addNaver.bind(this)
    this.addNaverClose = this.addNaverClose.bind(this)
    this.resolveIndexCards = this.resolveIndexCards.bind(this)
  }

  refreshResolveIndex() {
    this.props.resolveIndexValidateCookie()
  }

  addNaver() {
    this.setState({
      modalAddIsOpen: true
    })
  }

  addNaverClose() {
    this.setState({
      modalAddIsOpen: false
    })
  }

  resolveIndexCards(indexData) {
    try {
      let indexCards = [];
      let i
      let animDuration = 0.6
      if(indexData.length === 0){
        indexCards = <div className='no-naver in-animation'>{stringNoNavers}</div>
      } else {
        for (i = 0; i < indexData.length; i++) {
          indexCards.push(
            <IndexCard
              refreshResolveIndex={this.refreshResolveIndex}
              UrlAPI={UrlAPI}
              authToken={this.props.authToken}
              stringDeleteNaverError={stringDeleteNaverError}
              stringOops={stringOops}
              stringDeletedNaverOk={stringDeletedNaverOk}
              stringDeletedNaver={stringDeletedNaver}
              stringDeleteNaver={stringDeleteNaver}
              stringDeleteNaverSubTitle={stringDeleteNaverSubTitle}
              stringCancel={stringCancel}
              stringDelete={stringDelete}
              logout={this.props.logout}
              homeDOMEdit={homeDOMEdit}
              stringExit={stringExit}
              loadingBarRef={loadingBarRef}
              alt={stringUserImageAlt}
              key={i}
              cardContent={indexData[i]}
              animationDuration={animDuration}
              ReactImageAppear={ReactImageAppearComponent}
            />
          )
          animDuration = animDuration + 0.1
        }
      }
      return indexCards
    } catch (error) {
      this.props.resolveIndexValidateCookie()
      return (
        <p className='in-animation-delay'> {stringErrorLoadIndexContent}</p>
      )
    }
  }

  render() {
    const customStylesModalAdd = {
      overlay: {
        top: '0',
        backgroundColor: 'white'
      },
      content: {
        top: '3px',
        left: '0',
        right: '0',
        bottom: '0',
        border: 'none',
        padding: '0'
      }
    }
    let cardsResolved = this.resolveIndexCards(this.props.indexContent.data)

    return (
      <main className='in-animation'>
        <Helmet>
          <title>{homeDOMTitle}</title>
        </Helmet>

        <ModalAddNaver 
          customStylesModalAdd={customStylesModalAdd}
          modalAddIsOpen={this.state.modalAddIsOpen}
          logout={this.props.logout}
          addNaverClose={this.addNaverClose}
        />

        <section className='container-h'>
          <header>
            <div>
              <LogoFull className='logo-full-home margin-header-left' />
            </div>
            <div>
              <button
                onClick={this.props.logout}
                type='button'
                className='button-logout margin-header-right'>{stringExit}
              </button>
            </div>
          </header>
          <section id='title-subheader'>
            <p className='margin-header-left' id='navers-title'>{stringNaversTitle}</p>
            <button
              onClick={this.addNaver}
              id='add-naver'
              className='hoverable margin-header-right'
              type='button'
            >
              {stringAddNaver}
            </button>
          </section>
        </section>
        <section className='container'>
          <div className='row'>
            {cardsResolved}
          </div>
        </section>
      </main>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)

    function setCookie() {
      let getCookie = cookies.get('sessionAuth')
      if (getCookie === undefined) {
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
    this.resolveIndexValidateCookie = this.resolveIndexValidateCookie.bind(this)
    this.resolveRender = this.resolveRender.bind(this)
    this.logout = this.logout.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  loginMessageSetState(message) {
    this.setState({
      loginMessageClass: 'show',
      loginMessage: message
    })
  }

  login(email, password) {
    let bodyParams
    let loginMessage = this.loginMessageSetState
    let setToken = this.setAuthToken
    let thisInside = this

    if (email !== '') {
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
          if (data.response) {
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

  setAuthToken(token) {
    cookies.set('sessionAuth', token)
    this.setState({
      authToken: token
    })
  }

  logout() {
    loadingBarRef.complete()
    this.setAuthToken('undefined')
    this.setState({
      authentication: {
        isAuthTokenValid: false
      }
    })
  }

  resolveIndexValidateCookie() {
    let thisInside = this
    getJsonGET(
      pathAPIListNavers,
      thisInside.state.authToken
    ).then(
      function (response) {
        isPendingAuthValidtn = false
        thisInside.setState({
          authentication: {
            isAuthTokenValid: true
          },
          indexContent: response
        })
      }
    ).catch(
      function (data) {
        isPendingAuthValidtn = false
        thisInside.setState({
          authentication: {
            isAuthTokenValid: false
          }
        })
      }
    )
  }

  componentDidMount() {
    if (isPendingAuthValidtn) {
      if (this.state.authToken !== 'undefined') {
        this.resolveIndexValidateCookie()
        isPendingAuthValidtn = false
      } else {
        isPendingAuthValidtn = false
      }
    }
  }

  resolveRender() {
    let loginPageWithProps = (
      <div>
        <Helmet>
          <title>{homeDOMLoginTitle}</title>
        </Helmet>
        <LoginPage
          loginMessage={this.state.loginMessage}
          loginMessageClass={this.state.loginMessageClass}
          login={this.login}
        />
      </div>
    )

    let LoadPage = (
      <div>
        <FullPageLoader />
      </div>
    )

    if (this.state.authToken !== 'undefined') {
      if (this.state.authentication.isAuthTokenValid) {
        return (
          <div>
            <Home
              authToken={this.state.authToken}
              indexContent={this.state.indexContent}
              logout={this.logout}
              resolveIndexValidateCookie={this.resolveIndexValidateCookie}
            />
          </div>
        )
      } else {
        if (isPendingAuthValidtn) {
          return LoadPage
        } else {
          return loginPageWithProps
        }
      }
    } else {
      return loginPageWithProps
    }
  }

  render() {
    return (
      <div>
        {this.resolveRender()}
      </div>
    )
  }
}


export default { App, LoadBar }
