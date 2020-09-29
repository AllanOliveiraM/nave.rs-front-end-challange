import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, typography, color, variant, position } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const BIG = 'big'
const MEDIUM = 'medium'
const REGULAR = 'regular'
const SMALL = 'small'
const TINY = 'tiny'

const TextComponent = styled.p(
  variant({
    variants: {
      [BIG]: {
        fontSize: 24,
        lineHeight: '29px'
      },
      [MEDIUM]: {
        fontSize: 20,
        lineHeight: '24px'
      },
      [REGULAR]: {
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: '24px'
      },
      [SMALL]: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '17px'
      },
      [TINY]: {
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: '17px'
      }
    }
  }),
  space,
  layout,
  typography,
  color,
  position
)

TextComponent.propTypes = {
  variant: PropTypes.oneOf([BIG, MEDIUM, REGULAR, SMALL, TINY]),
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.color,
  ...propTypes.position
}

TextComponent.defaultProps = {
  variant: REGULAR
}

export default TextComponent
