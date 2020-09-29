import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TitleSectionComponent = ({ title, ...props }) => {
  return (
    <TitleSection {...props}>
      <Title>{title}</Title>
    </TitleSection>
  )
}

const TitleSection = ({ children, ...props }) => {
  return <Section {...props}>{children}</Section>
}

const Title = styled.h1`
  margin-left: 3.2rem;
`

const Section = styled.section`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

TitleSectionComponent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}

export default TitleSectionComponent
