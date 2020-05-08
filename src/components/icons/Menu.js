import React from 'react'
import Svg, { Path } from 'react-native-svg'

function MenuIcon(props) {
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
      <Path d="M3 12L21 12" />
      <Path d="M3 6L21 6" />
      <Path d="M3 18L21 18" />
    </Svg>
  )
}

export default MenuIcon
