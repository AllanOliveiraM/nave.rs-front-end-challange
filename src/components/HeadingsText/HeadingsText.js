import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, typography, color, variant, position } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const TITLE = 'title'
const SMALLTITLE = 'smalltitle'
const SUBTITLE = 'subtitle'

const HeadingsText = styled.p(
  variant({
    variants: {
      [TITLE]: {
        fontWeight: 600,
        fontSize: 24,
        lineHeight: '36px'
      },
      [SMALLTITLE]: {
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '18px'
      },
      [SUBTITLE]: {
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '24px'
      }
    }
  }),
  space,
  layout,
  typography,
  color,
  position
)

HeadingsText.propTypes = {
  variant: PropTypes.oneOf([TITLE, SUBTITLE]),
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.color,
  ...propTypes.position
}

HeadingsText.defaultProps = {
  variant: TITLE
}

export default HeadingsText
