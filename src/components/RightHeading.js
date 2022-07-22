import React from 'react'
import { APP_SUBHEADING } from '../constantExports/globalConstants'
import BloodSucker from './BloodSucker'

function RightHeading() {
  return (
    <div className='rightHeading'>
        <BloodSucker />
        <p className='smallSpan'>{APP_SUBHEADING}</p>
    </div>
  )
}

export default RightHeading