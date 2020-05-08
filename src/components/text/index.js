import { Text as T } from 'react-native'
import styled from 'styled-components'
import {
  color,
  compose,
  size,
  space,
  typography,
  fontSize
} from 'styled-system'

const Text = styled(T)(compose(color, size, space, typography, fontSize))

export default Text
