import styled from 'styled-components'

import CloseIconComponent from 'components/CloseIcon'

const CloseIcon = styled(CloseIconComponent)`
  cursor: pointer;
  margin: 21px 21px 0 0;
  @media (max-width: 559px) {
    display: none;
  }
`

export default CloseIcon
