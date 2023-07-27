import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ContactUs from './ContactUs'
function NavBar(){
    return(
        <div className='nav'>
                  < NavBar/>
      <Routes>

          <Route exact path='/contact' element={
            <ContactUs/>
          }/>

      </Routes>

        </div>
    )
}

export default NavBar