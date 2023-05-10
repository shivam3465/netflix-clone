import React from 'react'
import './ComingSoon.scss'
import { WarningAmberOutlined } from '@mui/icons-material'

export default function ComingSoon() {
  return (
    <div id='coming-soon'>
        <WarningAmberOutlined/>
        <div>Coming Soon . . .</div>
        <div className='bottom'>Page Under Development</div>
    </div>
  )
}
