import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import {
  color,
  compose,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
  position,
  border
} from 'styled-system'

const Button = styled(TouchableOpacity)(
  compose(color, size, space, flexbox, layout, borderRadius, position, border)
)

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

export default Button
