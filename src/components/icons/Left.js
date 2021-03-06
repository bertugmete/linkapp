import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLeft(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <Path d="M15 18L9 12 15 6" />
    </Svg>
  )
}

export default SvgLeft
