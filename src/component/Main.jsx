import React from 'react'
import './Main.css'
import Body from "../images/body-image.jpg"
function Main() {
  return (
    <div className='sahara'>
     <div className="cols">
     <h1>HONGKONG</h1>
     <p>Hong Kong is a special 
     administrative region (SAR)
      of the People's Republic of
       China. It comprises 200 islands
        located in Eastern Asia borderin
         the South China Sea and China.<br/>
          Much of Hong Kong's terrain is
           hilly to mountainous with 
           steep slopes.</p>
     </div>
     <div class="col1">
      <div class="card card1 animate-pulse">
      <h5>WINTER SEASON</h5>
      <p>THIS IS THE HONG KONG WINTER SEASON</p>     
      </div>
      <div class="card card2 animate-pulse">
            <h5>WESTRON DESERT</h5>
            <p>THIS IS THE SUMMER HONG KONG </p>     
      </div>
      <div class="card card3 animate-pulse">
            <h5>MARKET</h5>
            <p>AVALIABLE MARKET IN HONGKONG</p>     
     </div>
     <div class="card card4 animate-pulse">
      <h5>BUSSINESS</h5>
      <p>DIFFERENT TYPES OF BUSSINESS</p>     
      </div>
      </div>
    </div>
  )
}

export default Main