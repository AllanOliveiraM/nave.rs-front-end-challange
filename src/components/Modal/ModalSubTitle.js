import styled from 'styled-components'

const ModalSubTitle = styled.p`
  margin-top: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-left: 32px;
  padding-right: 32px;
  display: flex;
  align-items: center;
  color: black;
  @media (min-width: 350px) and (max-width: 441px) {
    margin-top: 15px;
  }
  @media (min-width: 441px) and (max-width: 560px) {
    margin-top: 21px;
  }
  @media (min-width: 560px) {
    margin-top: 25px;
  }
`

export default ModalSubTitle
