import React                 from 'react'
import styled, { keyframes } from 'styled-components'
import Helmet                from 'react-helmet'
import Axios                 from 'axios'

import DeleteIcon            from '../components/deleteIcon'
import EditIcon              from '../components/editIcon'
import Modal                 from '../components/modal'
import CloseIcon             from '../components/closeIcon'
import ReactImageAppearEmpty from '../components/reactImageAppearEmpty'
import LogoFull              from '../components/logo'

import '../styles/indexCards.css'
import '../tools/grid.css'


let ReactImageAppear

const customStylesModalShowMore = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '1007px',
    width: '95vw',
    height: '503px',
    borderRadius: 'none',
    padding: '0',
    border: 'none'
  }
}

const customStylesModalDelete = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  content: {
    borderRadius: 'none',
    maxWidth: '592px',
    minWidth: '288px',
    width: '90vw',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const customStylesModalErrorShow = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  content: {
    borderRadius: 'none',
    maxWidth: '592px',
    minWidth: '288px',
    width: '90vw',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const customStylesModalEdit = {
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

class IndexCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalShowMoreIsOpen: false,
      modalShowMoreContent: '',
      modalShowMoreContentBirthdate: '',
      modalShowMoreContentAdmissionDate: '',
      modalDeleteIsOpen: false,
      modalDeleteOkIsOpen: false,
      modalDeleteErrorIsOpen: false,
      modalShowErrorIsOpen: false,
      modalEditIsOpen: false
    }

    this.empty = false

    this.showMore = this.showMore.bind(this)
    this.showMoreClose = this.showMoreClose.bind(this)
    this.deleteThis = this.deleteThis.bind(this)
    this.deleteThisClose = this.deleteThisClose.bind(this)
    this.editThis = this.editThis.bind(this)
    this.editThisClose = this.editThisClose.bind(this)
    this.deleteThisOkClose = this.deleteThisOkClose.bind(this)
    this.deleteThisErrorClose = this.deleteThisErrorClose.bind(this)
    this.deleteNaver = this.deleteNaver.bind(this)
    this.showErrorOpen = this.showErrorOpen.bind(this)
    this.showErrorClose = this.showErrorClose.bind(this)
  }

  showMore(cardContentId) {
    this.props.loadingBarRef.continuousStart()

    let authTokenObject = {
      headers: { Authorization: `Bearer ${this.props.authToken}` }
    }
  
    Axios.get(
      this.props.UrlAPI + '/navers/'+ cardContentId,
      authTokenObject
    ).then((response)=>{

      let birthdate = response.data.birthdate.split('T')[0].split('-').reverse().join('/')
      let admissionDate = response.data.admission_date.split('T')[0].split('-').reverse().join('/')

      this.setState({
        modalShowMoreIsOpen: true,
        modalShowMoreContent: response.data,
        modalShowMoreContentBirthdate: birthdate,
        modalShowMoreContentAdmissionDate: admissionDate
      })
      this.props.loadingBarRef.complete()
    }).catch((data)=>{
      this.showErrorOpen()
    })
  }

  showMoreClose() {
    this.setState({
      modalShowMoreIsOpen: false
    })
  }

  deleteThis() {
    setTimeout(() => {
      this.setState({
        modalDeleteIsOpen: true,
        modalShowMoreIsOpen: false
      })
    }, 160)
  }

  deleteThisClose() {
    this.setState({
      modalDeleteIsOpen: false
    })
  }

  deleteThisOkClose() {
    this.props.refreshResolveIndex()
    this.setState({
      modalDeleteOkIsOpen: false
    })
  }

  deleteThisErrorClose() {
    this.props.refreshResolveIndex()
    this.setState({
      modalDeleteErrorIsOpen: false
    })
  }

  editThis() {
    this.props.loadingBarRef.continuousStart()
    setTimeout(() => {
      this.setState({
        modalEditIsOpen: true,
        modalShowMoreIsOpen: false
      })
    }, 160)
  }

  editThisClose() {
    this.setState({
      modalEditIsOpen: false
    })
  }


  deleteNaver(cardContentId) {
    this.props.loadingBarRef.continuousStart()
    Axios.delete(this.props.UrlAPI + '/navers/' + cardContentId, {
      headers: { Authorization: `Bearer ${this.props.authToken}` }
    }).then((response) => {
      if (response.status === 200) {
        this.props.loadingBarRef.complete()
        this.deleteThisClose()
        this.setState({
          modalDeleteOkIsOpen: true
        })
      } else {
        this.props.loadingBarRef.complete()
        this.deleteThisClose()
        this.setState({
          modalDeleteErrorIsOpen: true
        })
      }
    }).catch((data) => {
      this.props.loadingBarRef.complete()
      this.deleteThisClose()
      this.setState({
        modalDeleteErrorIsOpen: true
      })
    })
  }
  
  showErrorOpen(){
    this.props.loadingBarRef.complete()
    this.setState({
      modalShowErrorIsOpen: true
    })
  }

  showErrorClose(){
    this.setState({
      modalShowErrorIsOpen: false
    })
  }

  render() {

    let cardContentName = this.props.cardContent.name

    let cardContentJobRole = this.props.cardContent.job_role

    let cardContentUrl = this.props.cardContent.url

    let cardContentId = this.props.cardContent.id

    let slideRightKeyFrame = keyframes`
      0% {
          opacity: 0;
          transform: translateX(-30px);
      }
      85% {
          opacity: 1;
      }
      100% {
          opacity: 1;
          transform: translateX(0);
      }
    `

    let SlidedRight
    let animationDurationResolved = this.props.animationDuration

    if (!this.empty) {
      ReactImageAppear = this.props.ReactImageAppear
      SlidedRight = styled.div`
        opacity: 0;
        transform: translateX(-30px);
        animation: ${slideRightKeyFrame} 0.3s ease-in-out ${this.props.animationDuration}s both;
      `
    } else {
      ReactImageAppear = ReactImageAppearEmpty
      SlidedRight = styled.div`
        opacity: 1;
      `
    }

    this.empty = true

    let CardContentResolved = (
      <section className='col col-4 col-3 col-2'>

        {/* to do */}
        <Modal
          customStyles={customStylesModalShowMore}
          modalIsOpen={this.state.modalShowMoreIsOpen}
        >
          <Helmet>
            <style>{'body{overflow-y:hidden;}'}</style>
          </Helmet>
          <div className='container container-p-0'>
            <div className='row row-margin-0'>
              <div className='col col-2-large col-2-as-l col-p-0 image-show-row-mobile'>
                <div className='header-show-more-card-mobile'>
                  <button className='close-button zoom-in close-button-card-show-more' onClick={this.showMoreClose} type='button'>
                    <CloseIcon />
                  </button>
                </div>
                <div className='image-show-more-container'>
                <ReactImageAppear
                  src={cardContentUrl}
                  className='image-show-more'
                  />
                </div>
              </div>
              <div className='col col-2-large col-2-as-r col-p-0'>
                <div className='header-show-more-card'>
                  <button className='close-button zoom-in close-button-card-show-more' onClick={this.showMoreClose} type='button'>
                    <CloseIcon />
                  </button>
                </div>
                <div className='show-more-card-pre-container'>
                  <div className='show-more-card-body-container'>
                    <p className='show-more-name-card'>{this.state.modalShowMoreContent.name}</p>
                    <p className='show-more-office-card'>{this.state.modalShowMoreContent.job_role}</p>
                    <p className='show-more-subtitle-card'>Nascimento</p>
                    <p className='show-more-birthdate-card'>{this.state.modalShowMoreContentBirthdate}</p>
                    <p className='show-more-subtitle-card'>Data de Admissão</p>
                    <p className='show-more-admission-date-card'>{this.state.modalShowMoreContentAdmissionDate}</p>
                    <p className='show-more-subtitle-card'>Projetos que participou</p>
                    <p className='show-more-project-card'>{this.state.modalShowMoreContent.project}</p>
                  </div>
                  <div className='show-more-card-footer-container'>
                    <DeleteIcon
                    onClick={this.deleteThis}
                    />
                    <EditIcon
                      onClick={this.editThis}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        {/* ok */}
        <Modal
          customStyles={customStylesModalDelete}
          modalIsOpen={this.state.modalDeleteIsOpen}
        >
          <p className='delete-title' >{this.props.stringDeleteNaver}</p>
          <p className='delete-subtitle' >{this.props.stringDeleteNaverSubTitle}</p>
          <div className='delete-footer-container'>
            <button
              className='zoom-in cancel-delete-button'
              onClick={this.deleteThisClose}
              type='button'>{this.props.stringCancel}
            </button>
            <button
              className='zoom-in ok-delete-button'
              onClick={() => this.deleteNaver(cardContentId)}
              type='button'>{this.props.stringDelete}
            </button>
          </div>
        </Modal>

        <Modal
          customStyles={customStylesModalDelete}
          modalIsOpen={this.state.modalDeleteOkIsOpen}
        >
          <div className='delete-ok-header-container'>
            <p className='delete-ok-title' >{this.props.stringDeletedNaver}</p>
            <button className='close-button zoom-in' onClick={this.deleteThisOkClose} type='button'>
              <CloseIcon />
            </button>
          </div>
          <p className='delete-ok-subtitle' >{this.props.stringDeletedNaverOk}</p>
        </Modal>

        <Modal
          customStyles={customStylesModalDelete}
          modalIsOpen={this.state.modalDeleteErrorIsOpen}
        >
          <div className='delete-ok-header-container'>
            <p className='delete-ok-title' >{this.props.stringOops}</p>
            <button className='close-button zoom-in' onClick={this.deleteThisErrorClose} type='button'>
              <CloseIcon />
            </button>
          </div>
          <p className='delete-ok-subtitle' >{this.props.stringDeleteNaverError}</p>
        </Modal>

        <Modal
          customStyles={customStylesModalErrorShow}
          modalIsOpen={this.state.modalShowErrorIsOpen}
        >
          <div className='delete-ok-header-container'>
            <p className='delete-ok-title' >{this.props.stringOops}</p>
            <button className='close-button zoom-in' onClick={this.showErrorClose} type='button'>
              <CloseIcon />
            </button>
          </div>
          <p className='delete-ok-subtitle' >Não foi possível visualizar este Naver.</p>
        </Modal>




        {/* to do */}
        <Modal
          customStyles={customStylesModalEdit}
          modalIsOpen={this.state.modalEditIsOpen}
        >
          <Helmet>
            <title>{this.props.homeDOMEdit}</title>
            <style>{'body{overflow-y:hidden;}'}</style>
          </Helmet>
          <div className='header-modal-edit'>
            <div>
              <LogoFull className='logo-full-home margin-header-left' />
            </div>
            <div>
              <button
                onClick={this.props.logout}
                type='button'
                className='button-logout margin-header-right'>{this.props.stringExit}
              </button>
            </div>
          </div>
          <div className='container'>
            <p>OKOK Edit</p>
            <button className='close-button zoom-in' onClick={this.editThisClose} type='button'>
              <CloseIcon />
            </button>
          </div>
        </Modal>

        <SlidedRight>
          <div className='card-index-container'>
            <div className='image-card-container'>
              <ReactImageAppear
                src={cardContentUrl}
                onClick={()=>this.showMore(cardContentId)}
                animationDuration={`${animationDurationResolved}s`}
                className='zoom-in card-image-style'
              />
            </div>

            <div className='card-index-footer'>
              <p>{cardContentName}</p>
              <p>{cardContentJobRole}</p>
              <DeleteIcon
                onClick={this.deleteThis}
              />
              <EditIcon
                onClick={this.editThis}
              />
            </div>
          </div>
        </SlidedRight>
      </section>
    )

    return CardContentResolved
  }
}


export default IndexCard
