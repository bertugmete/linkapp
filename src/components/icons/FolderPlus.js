import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgFolderPlus() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-folder-plus"
      viewBox="0 0 24 24"
    >
      <Path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      <Path d="M12 11L12 17" />
      <Path d="M9 14L15 14" />
    </Svg>
  )
}

export default SvgFolderPlus
