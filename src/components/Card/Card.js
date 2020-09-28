import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ReactImageAppear from 'react-image-appear'
import HeadingsText from 'components/HeadingsText'
import Text from 'components/Text'
import CardModal from 'components/CardModal'
import DeleteIcon from 'components/DeleteIcon'
import EditIcon from 'components/EditIcon'

import { useHistory } from 'react-router-dom'

const CardComponetnt = ({ card, ...props }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleImageClick = () => {
    setModalIsOpen(true)
  }

  const history = useHistory()

  return (
    <>
      <CardModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} naverId={card?.id} />
      <CardContainer>
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
          <StyledCardTitle variant='smalltitle'>{card?.name}</StyledCardTitle>
          <StyledCardSubtitle>{card?.job_role}</StyledCardSubtitle>
          <CardFooter>
            <DeleteIcon />
            <StyledEditIcon onClick={() => history.push(`/details/${card?.id}`)} />
          </CardFooter>
        </Card>
      </CardContainer>
    </>
  )
}

const Card = styled.section`
  max-width: 28rem;
  width: 100%;
  margin-bottom: 3.2rem;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 0;
`

const CardImageContainer = styled.header`
  height: 28rem;
  display: block;
  overflow: hidden;
`

const CardFooter = styled.footer`
  text-align: left;
`

const StyledCardSubtitle = styled(Text)`
  text-align: left;
  margin-bottom: 1.25rem;
`

const StyledCardTitle = styled(HeadingsText)`
  text-align: left;
  margin: 1.25rem 0;
`

const StyledImage = styled(ReactImageAppear)`
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 28rem;
  height: 28rem;
`

const StyledEditIcon = styled(EditIcon)`
  margin-left: 0.8rem;
`

CardComponetnt.defaultProps = {
  card: {}
}

CardComponetnt.propTypes = {
  card: PropTypes.object
}

export default CardComponetnt
