import React from 'react'
import Loginform from './loginform'
import imgf from './source/loginimg.svg'

import './style.css'

function Loginpage() {
  return (
    <div className='logcnt'>
    <div class="card mb-3" >
    <div class="row g-0 cardlay">
      <div class="col-md-4 cardimg">
        <img src={imgf} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 className='taglog'>TAG</h2>
          <Loginform /> 
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Loginpage