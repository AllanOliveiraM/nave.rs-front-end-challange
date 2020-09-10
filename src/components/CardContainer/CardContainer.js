import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Loader from 'components/Loader'
import CardRow from 'components/Row'
import CardColumn from 'components/Column'
import Card from 'components/Card'
import StyledFullPageContainer from './StyledFullPageContainer'
import CardMessage from './CardMessage'

import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const CardContainerComponent = ({ cards, isLoading, ...props }) => {
  const CardContent = () => {
    if (cards.length) {
      return cards.map(card => (
        <CardColumn key={card.id} className='col col-2 col-3 col-4'>
          <Card className='in-animation' card={card} />
        </CardColumn>
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
    <CardContainer {...props} className='container'>
      <CardRow className='row'>
        <CardContent />
      </CardRow>
    </CardContainer>
  )
}

const CardContainer = styled.section`
  width: 100%;
  padding: 0 3.2rem;
`

CardContainerComponent.defaultProps = {
  cards: [],
  isLoading: true
}

CardContainerComponent.propTypes = {
  cards: PropTypes.array,
  isLoading: PropTypes.bool
}

export default CardContainerComponent
