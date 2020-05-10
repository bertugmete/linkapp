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
    theme.colors[props.placeholderTextColor] || theme.colors.textLight,
  label: props.label
}))(compose(color, size, space, typography, borderRadius, shadow))

Input.defaultProps = {
  bg: 'white',
  height: 44,
  color: 'textDark',
  borderWidth: 1,
  borderColor: '#D1D1D1',
  pl: 16,
  borderRadius: 'normal'
}

export default Input
