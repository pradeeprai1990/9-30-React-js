import axios from 'axios'
import React from 'react'

export default function Home() {
  axios.post(`https://apiservices.ashapurna.com/api/web/home/properties`)
  return (
    <div>
      
    </div>
  )
}
