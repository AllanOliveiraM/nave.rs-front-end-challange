import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DeleteIcon from 'components/DeleteIcon'
import Modal from 'components/Modal'
import CardSubContainer from './CardSubContainer'
import StyledImage from './StyledImage'
import CardImageContainer from './CardImageContainer'
import CardName from './CardName'
import CardSubtitle from './CardSubtitle'
import CardFooter from './CardFooter'
import StyledEditIcon from './StyledEditIcon'

const CardComponetnt = ({ card, ...props }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleImageClick = () => {
    setModalIsOpen(true)
  }

  return (
    <>
      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} naverId={card?.id} />
      <CardSubContainer>
        <Card {...props}>
          <CardImageContainer>
            <StyledImage
              onClick={handleImageClick}
              animationDuration='0.5s'
              animation='fadeIn'
              className='zoom-in'
              src={card?.url}
            />
          </CardImageContainer>
          <CardName>{card?.name}</CardName>
          <CardSubtitle>{card?.job_role}</CardSubtitle>
          <CardFooter>
            <DeleteIcon />
            <StyledEditIcon />
          </CardFooter>
        </Card>
      </CardSubContainer>
    </>
  )
}

const Card = styled.div`
  max-width: 28rem;
  width: 100%;
  margin-bottom: 3.2rem;
`

CardComponetnt.defaultProps = {
  card: {}
}

CardComponetnt.propTypes = {
  card: PropTypes.object
}

export default CardComponetnt
