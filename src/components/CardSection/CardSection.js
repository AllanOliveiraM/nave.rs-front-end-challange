import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FullPageContainer from 'components/FullPageContainer'
import Container from 'components/Container'
import Loader from 'components/Loader'
import Card from 'components/Card'
import Column from 'components/Column'
import Row from 'components/Row'

import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const CardSectionComponent = ({ cards, isLoading, ...props }) => {
  const CardContent = ({ ...props }) => {
    if (cards.length) {
      return cards.map(card => (
        <Column col={4} key={card.id}>
          <Card {...props} className='in-animation' card={card} />
        </Column>
      ))
    } else {
      return <CardMessage>{lang.pageComposition.messages.noCards}</CardMessage>
    }
  }

  if (isLoading) {
    return (
      <StyledFullPageContainer>
        <Loader useDefault={true} />
      </StyledFullPageContainer>
    )
  }

  return (
    <Container>
      <StyledRow>
        <CardContent {...props} />
      </StyledRow>
    </Container>
  )
}

const StyledRow = styled(Row)`
  text-align: left;
`

const CardMessage = styled.p`
  width: 100%;
  font-size: 2.4rem;
  margin-top: 12rem;
  color: #b7b7b7;
  text-align: center;
`

const StyledFullPageContainer = styled(FullPageContainer)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 100;
`

CardSectionComponent.defaultProps = {
  cards: [],
  isLoading: true
}

CardSectionComponent.propTypes = {
  cards: PropTypes.array,
  isLoading: PropTypes.bool
}

export default CardSectionComponent
