import { Text as T } from 'react-native'
import styled from 'styled-components'
import {
  color,
  compose,
  size,
  space,
  typography,
  fontSize,
  flexbox,
  border
} from 'styled-system'

const Text = styled(T)(
  compose(color, size, space, typography, fontSize, flexbox, border)
)

export default Text
