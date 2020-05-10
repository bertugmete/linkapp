import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Icon(props) {
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
      <Path d="M12 5L12 19" />
      <Path d="M5 12L19 12" />
    </Svg>
  )
}

export default Icon
