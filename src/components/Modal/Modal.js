import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { toast } from 'react-toastify'
import { useLoadBar } from 'context/loadbar-context'
import { showNaver } from 'services/navers'

import ModalP from './ModalP'
import ModalSubTitle from './ModalSubTitle'
import CardTitle from './CardTitle'
import RelativeCloseIcon from './RelativeCloseIcon'
import CloseIcon from './CloseIcon'
import IconContainer from './IconContainer'
import BackgroundContainer from './BackgroundContainer'
import ContentContainer from './ContentContainer'
import Image from './Image'
import ModalMain from './ModalMain'
import StyledFullPageContainer from './StyledFullPageContainer'

import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const ModalComponent = ({ modalIsOpen, ...props }) => {
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

        loadBarComplete()
      } catch (e) {
        console.log(e)
        toast.error(lang.toasts.cantResolveDataFromServer)
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
          <RelativeCloseIcon
            onClick={() => {
              setModalIsOpen(false)
            }}
          />
          <BackgroundContainer>
            <Image animationDuration='0.5s' animation='fadeIn' src={modalData?.url} />
          </BackgroundContainer>
          <BackgroundContainer>
            <IconContainer>
              <CloseIcon
                onClick={() => {
                  setModalIsOpen(false)
                }}
              />
            </IconContainer>
            <ContentContainer>
              <CardTitle>{modalData?.name}</CardTitle>
              <ModalP>{modalData?.job_role}</ModalP>
              <ModalSubTitle>{lang.pageComposition.cards.yearsOld}</ModalSubTitle>
              <ModalP>{resolveDate(modalData?.birthdate)}</ModalP>
              <ModalSubTitle>{lang.pageComposition.cards.timeOfWork}</ModalSubTitle>
              <ModalP>{resolveDate(modalData?.admission_date)}</ModalP>
              <ModalSubTitle>{lang.pageComposition.cards.projects}</ModalSubTitle>
              <ModalP>{modalData?.project}</ModalP>
            </ContentContainer>
          </BackgroundContainer>
        </ModalMain>
      </StyledFullPageContainer>
    </>,
    document.body
  )
}

ModalComponent.propTypes = {
  naverId: PropTypes.string,
  setModalIsOpen: PropTypes.func
}

export default ModalComponent
