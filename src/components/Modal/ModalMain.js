import styled from 'styled-components'

const ModalMain = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 100.6rem;
  background-color: transparent;
  @media (max-width: 559px) {
    flex-direction: column;
  }
`

export default ModalMain
