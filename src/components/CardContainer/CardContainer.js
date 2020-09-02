import React from 'react'
import styled from 'styled-components'

import CardRow from 'components/RowEmpty'
import CardColumn from 'components/ColumnEmpty'
import Card from 'components/Card'
import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const CardContainerComponent = ({ cards, loading, rowProps, columnProps, ...props }) => {
  const cardsRender = cards.map(card => (
    <CardColumn key={card?.id} {...columnProps} className='col col-2 col-3 col-4'>
      <Card className='in-animation' card={card} />
    </CardColumn>
  ))

  const CardContent = () => {
    if (cardsRender.length) {
      return cardsRender
    } else {
      return <CardMessage>{lang.pageComposition.messages.noCards}</CardMessage>
    }
  }

  const CardLoader = () => {
    return <CardMessage>{lang.pageComposition.messages.loading}</CardMessage>
  }

  return (
    <CardContainer {...props} className='container'>
      <CardRow {...rowProps} className='row'>
        {loading ? <CardLoader /> : <CardContent />}
      </CardRow>
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
