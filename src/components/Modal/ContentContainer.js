import styled from 'styled-components'

import BackgroundContainer from './BackgroundContainer'

const ContentContainer = styled(BackgroundContainer)`
  overflow: auto;
  height: calc(50.3rem - 35px);
  max-height: 80vh;
  @media (max-width: 341px) {
    height: 35rem;
  }
  @media (min-width: 341px) and (max-width: 559px) {
    height: 30rem;
  }
  @media (min-width: 560px) and (max-width: 659px) {
    height: calc(26rem - 35px);
  }
  @media (min-width: 660px) and (max-width: 779px) {
    height: calc(35rem - 35px);
  }
  @media (min-width: 780px) and (max-width: 839px) {
    height: calc(40rem - 35px);
  }
  @media (min-width: 840px) and (max-width: 960px) {
    height: calc(45rem - 35px);
  }
`

export default ContentContainer
