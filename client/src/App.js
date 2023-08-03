import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ContactUs from './components/ContactUs';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import SignUp from './components/SignUp';
import LogIn from './components/Login';
import Foodcard from './pages/Foodcard';
import RestaurantCard from './components/Restaurant';
import Restaurant from '../src/components/Restaurant';
import BeverageCard from './pages/Beverage';



function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [userActive, setUserActive] = useState(false);

  return (
    <div className="App">

      {/* <div className='landing-page'>
         <h1 >food <span
         style={{
          color:'#FFCB74',
         }}> ChapChap</span> </h1>
      </div> */}

      <BrowserRouter>

      <NavBar userActive={userActive} />

      <Routes>

         <Route
         path='/'
         element={
          <HomePage/>
         }/>
         <Route
         path='/Restaurants'
         element={
         <RestaurantCard />
         }/>

         <Route
         path='/dishes'
         element={
          <Foodcard />
         }/> 

        <Route
         path='/signup'
         element={
          <SignUp/>
         }/>

        <Route
         path='/login'
         element={
          <LogIn
          setUserActive={setUserActive}
          onLogin={setCurrentUser}
          />
         }/>95696723b37da1b1242dab056d2b2df5e9c3b9
           <Route
         path='/Restaurant'

         element={
          <Restaurant/>
         }/>

       
        <Route 
         path='/Beverages' 
         element={
          <BeverageCard />
         }/> 

          <Route 
         path='/ContactUs' 
         element={
          <ContactUs />
         }/>
      </Routes>

      </BrowserRouter>
    </div>
    );
}

export default App;
