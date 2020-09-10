import styled from 'styled-components'

import ReactImageAppear from 'react-image-appear'

const Image = styled(ReactImageAppear)`
  position: relative;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 50.3rem;
  height: 50.3rem;
  max-height: 80vh;
  @media (max-width: 559px) {
    width: 100%;
    height: 20rem;
  }
  @media (min-width: 560px) and (max-width: 659px) {
    width: 26rem;
    height: 26rem;
  }
  @media (min-width: 660px) and (max-width: 779px) {
    width: 35rem;
    height: 35rem;
  }
  @media (min-width: 780px) and (max-width: 839px) {
    width: 40rem;
    height: 40rem;
  }
  @media (min-width: 840px) and (max-width: 960px) {
    width: 45rem;
    height: 45rem;
  }
`

export default Image
