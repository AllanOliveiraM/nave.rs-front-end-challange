import React from 'react'
import styled from 'styled-components'

const HomeTitleSectionComponent = ({ title, ...props }) => {
  return (
    <TitleSectionComponent {...props}>
      <Title>{title}</Title>
    </TitleSectionComponent>
  )
}

const Title = styled.h1`
  margin-left: 3.2rem;
`

const TitleSectionComponent = ({ children, ...props }) => {
  return <TitleSection {...props}>{children}</TitleSection>
}

const TitleSection = styled.section`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default HomeTitleSectionComponent
