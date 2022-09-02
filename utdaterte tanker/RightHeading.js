import React from 'react'
import { TOPLINE_TEXT_OBJ } from '../constantExports/globalConstants'
import BloodSucker from '../grphcComponents/BloodSucker'

function RightHeading() {
  return (
    <div className='rightHeading'>
        <BloodSucker showIcon={true} />
        <p className='smallSpan'>{TOPLINE_TEXT_OBJ.iconHeading}</p>
    </div>
  )
}

export default RightHeading