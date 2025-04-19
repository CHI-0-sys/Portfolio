import React from 'react'
import { WiMoonAltWaxingGibbous1 } from "react-icons/wi";


const Navbar = () => {
  return (
    <div className=''>
         <div>
            <h1>Oxmanua</h1>
         </div>

         <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact me</li>
            </ul>
         </div>
          
          <div>
             <h1>
                 <WiMoonAltWaxingGibbous1/>
             </h1>
          </div>

    </div>
  )
}

export default Navbar