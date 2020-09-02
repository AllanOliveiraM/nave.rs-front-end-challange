import React from 'react'

import Header from 'components/Header'
import HomeTitleSection from 'components/TitleSection'

import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const Home = () => {
  return (
    <>
      <Header />
      <HomeTitleSection title={lang.pageComposition.titleElements.navers} />
    </>
  )
}

export default Home
