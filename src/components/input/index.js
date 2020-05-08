import { TextInput } from 'react-native'
import styled from 'styled-components'
import {
  color,
  compose,
  size,
  space,
  typography,
  borderRadius,
  shadow
} from 'styled-system'

import theme from '../../utils/theme'

const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor:
    theme.colors[props.placeholderTextColor] || theme.colors.textLight
}))(compose(color, size, space, typography, borderRadius, shadow))

export default Input
