import React from 'react'
import styled from 'styled-components'

import CardRow from 'components/Row'
import CardColumn from 'components/Column'
import Card from 'components/Card'
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

  const CardLoader = () => {
    return <CardMessage>{lang.pageComposition.messages.loading}</CardMessage>
  }

  return (
    <CardContainer {...props} className='container'>
      <CardRow className='row'>{isLoading ? <CardLoader /> : <CardContent />}</CardRow>
    </CardContainer>
  )
}

const CardContainer = styled.section`
  width: 100%;
  padding: 0 3.2rem;
`

const CardMessage = styled.p`
  width: 100%;
  font-size: 2.4rem;
  margin-top: 12rem;
  color: #b7b7b7;
  text-align: center;
`

export default CardContainerComponent
