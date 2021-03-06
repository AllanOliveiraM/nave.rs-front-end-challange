import React from 'react'
import styled from 'styled-components'
import ReactImageAppear from 'react-image-appear'

import DeleteIcon from 'components/DeleteIcon'
import EditIcon from 'components/EditIcon'

const CardComponetnt = ({ card, ...props }) => {
  const handleImageClick = () => {}

  return (
    <CardSubContainer>
      <Card {...props}>
        <CardImageContainer>
          <Image
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
  )
}

const CardSubContainer = styled.section`
  display: flex;
  justify-content: center;
`

const Card = styled.div`
  max-width: 28rem;
  width: 100%;
  margin-bottom: 3.2rem;
`

const Image = styled(ReactImageAppear)`
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 28rem;
  height: 28rem;
`

const CardImageContainer = styled.div`
  height: 28rem;
  display: block;
  overflow: hidden;
`

const CardName = styled.p`
  text-align: left;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.8rem;
  margin-top: 1.6rem;
  margin-bottom: 0.4rem;
`

const CardSubtitle = styled.p`
  text-align: left;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 1.25rem;
`

const CardFooter = styled.section`
  display: flex;
  justify-content: left;
`

const StyledEditIcon = styled(EditIcon)`
  margin-left: 0.8rem;
`

export default CardComponetnt
