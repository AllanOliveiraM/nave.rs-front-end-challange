import styled from 'styled-components'

import CloseIconComponent from 'components/CloseIcon'

const RelativeCloseIcon = styled(CloseIconComponent)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;
  top: 27px;
  z-index: 200;
  margin-left: calc(100% - 27px);
  background-color: white;
  padding: 4px;
  border-radius: 50%;
  @media (min-width: 560px) {
    display: none;
  }
`

export default RelativeCloseIcon
