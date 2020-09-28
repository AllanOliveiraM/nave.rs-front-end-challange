import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import EditIcon from 'components/EditIcon'
import DeleteIcon from 'components/DeleteIcon'
import Text from 'components/Text'
import HeadingsText from 'components/HeadingsText'
import FullPageContainer from 'components/FullPageContainer'
import ReactImageAppear from 'react-image-appear'
import CloseIconComponent from 'components/CloseIcon'

import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useLoadBar } from 'context/loadbar-context'
import { showNaver } from 'services/navers'

import { MEDIATABLET, MEDIADESKTOP, CURRENT_LANGUAGE as lang } from 'helpers/constants'

const CardModalComponent = ({ modalIsOpen, ...props }) => {
  useEffect(() => {
    if (!modalIsOpen) {
      document.body.style.overflow = 'auto'
    }
  }, [modalIsOpen])

  return <>{modalIsOpen ? <Modal {...props} /> : null}</>
}

const Modal = ({ naverId, setModalIsOpen, ...props }) => {
  const [modalData, setModalData] = useState({})
  const { loadBarContinuousStart, loadBarComplete } = useLoadBar()
  const resolveDate = date => {
    return date.split('T')[0].split('-').reverse().join('/')
  }

  const history = useHistory()

  useEffect(() => {
    const fetchNaver = async () => {
      try {
        loadBarContinuousStart()

        const naverData = await showNaver(naverId)

        if (naverData?.id) {
          setModalData({ ...naverData, loaded: true })
          document.body.style.overflow = 'hidden'
        } else {
          setModalIsOpen(false)
          toast.error(lang.toasts.cantResolveDataFromServer)
        }
      } catch (e) {
        console.log(e)
        toast.error(lang.toasts.cantResolveDataFromServer)
      } finally {
        loadBarComplete()
      }
    }

    fetchNaver()
  }, [])

  if (!modalData?.loaded) {
    return <></>
  }

  return ReactDOM.createPortal(
    <>
      <StyledFullPageContainer className='in-animation'>
        <ModalMain {...props}>
          <RelativeStyledCloseIcon
            onClick={() => {
              setModalIsOpen(false)
            }}
          />
          <BackgroundContainer>
            <Image animationDuration='0.5s' animation='fadeIn' src={modalData?.url} />
          </BackgroundContainer>
          <BackgroundContainer>
            <IconContainer>
              <StyledCloseIcon
                onClick={() => {
                  setModalIsOpen(false)
                }}
              />
            </IconContainer>
            <ContentContainer>
              <ModalMainContainer>
                <StyledHeadingsText variant='title'>{modalData?.name}</StyledHeadingsText>
                <StyledText variant='regular'>{modalData?.job_role}</StyledText>
                <StyledHeadingsText variant='subtitle'>{lang.pageComposition.modal.subtitles.age}</StyledHeadingsText>
                <StyledText>{resolveDate(modalData?.birthdate)}</StyledText>
                <StyledHeadingsText variant='subtitle'>
                  {lang.pageComposition.modal.subtitles.admissionDate}
                </StyledHeadingsText>
                <StyledText>{resolveDate(modalData?.admission_date)}</StyledText>
                <StyledHeadingsText variant='subtitle'>
                  {lang.pageComposition.modal.subtitles.projects}
                </StyledHeadingsText>
                <StyledText>{modalData?.project}</StyledText>
              </ModalMainContainer>
              <ModalFooterContainer>
                <DeleteIcon />
                <StyledEditIcon onClick={() => history.push(`/details/${modalData?.id}`)} />
              </ModalFooterContainer>
            </ContentContainer>
          </BackgroundContainer>
        </ModalMain>
      </StyledFullPageContainer>
    </>,
    document.body
  )
}

const StyledFullPageContainer = styled(FullPageContainer)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`

const ModalMain = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 100.6rem;
  background-color: transparent;
  @media (min-width: ${MEDIATABLET}px) {
    flex-direction: row;
  }
`

const BackgroundContainer = styled.div`
  background-color: white;
  width: 100%;
`

const StyledCloseIcon = styled(CloseIconComponent)`
  margin: 21px 21px 0 0;
  display: none;
  @media (min-width: ${MEDIATABLET}px) {
    display: inline;
  }
`

const RelativeStyledCloseIcon = styled(CloseIconComponent)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;
  top: 27px;
  z-index: 200;
  margin-left: calc(100% - 27px);
  background-color: white;
  padding: 4px;
  border-radius: 50%;
  @media (min-width: ${MEDIATABLET}px) {
    display: none;
  }
`

const IconContainer = styled.div`
  width: 100%;
  text-align: right;
`

const Image = styled(ReactImageAppear)`
  position: relative;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 20rem;
  @media (min-width: ${MEDIATABLET - 250}px) {
    height: 26rem;
  }
  @media (min-width: ${MEDIATABLET}px) {
    height: 40rem;
  }
  @media (min-width: ${MEDIADESKTOP}px) {
    height: 48rem;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 35px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const ModalMainContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin: 0 3.2rem;
`

const ModalFooterContainer = styled.div`
  display: flex;
  justify-content: left;
  margin: 3.2rem 3.2rem 2.4rem 3.2rem;
`

const StyledText = styled(Text)`
  margin-top: 0.05rem;
  text-align: left;
  @media (min-width: ${MEDIATABLET}px) {
    margin-top: 0.7rem;
  }
  @media (min-width: ${MEDIADESKTOP}px) {
    margin-top: 1rem;
  }
  @media (max-width: 290px) {
    font-size: calc(4vw + 5px);
  }
`

const StyledHeadingsText = styled(HeadingsText)`
  margin-top: 0.6rem;
  text-align: left;
  @media (min-width: ${MEDIATABLET + 80}px) {
    margin-top: 1rem;
  }
  @media (min-width: ${MEDIADESKTOP}px) {
    margin-top: 1.6rem;
  }
  @media (max-width: 290px) {
    font-size: calc(5vw + 5px);
  }
`

const StyledEditIcon = styled(EditIcon)`
  margin-left: 0.8rem;
`

CardModalComponent.propTypes = {
  naverId: PropTypes.string,
  setModalIsOpen: PropTypes.func
}

export default CardModalComponent
