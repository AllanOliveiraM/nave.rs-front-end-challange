import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FullPageContainer from 'components/FullPageContainer'
import CloseIconComponent from 'components/CloseIcon'

const ModalComponent = ({ modalIsOpen, setModalIsOpen, children, ...props }) => {
  if (!modalIsOpen) {
    document.body.style.overflow = 'auto'
    return null
  }

  document.body.style.overflow = 'hidden'

  return ReactDOM.createPortal(
    <StyledFullPageContainer className='in-animation'>
      <ModalMain {...props}>
        <IconContainer>
          <StyledCloseIcon
            onClick={() => {
              setModalIsOpen(false)
            }}
          />
        </IconContainer>
        {children}
      </ModalMain>
    </StyledFullPageContainer>,
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
  width: 90vw;
  max-width: 59.2rem;
  background: white;
`

const IconContainer = styled.div`
  width: 100%;
  text-align: right;
`

const StyledCloseIcon = styled(CloseIconComponent)`
  margin: 21px 21px 0 0;
`

ModalComponent.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired
}

export default ModalComponent
