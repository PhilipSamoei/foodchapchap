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
// import Category from '/components/Category';



function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [userActive, setUserActive] = useState(false);

  return (
    <div className="App">

      <div className='landing-page'>
         <h1 >food <span 
         style={{
          color:'#FFCB74',
         }}> ChapChap</span> </h1>
      </div>
     
      <BrowserRouter>
      <NavBar/>
      {/* <Home/> */}
      <HomePage/>
     
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
         }/>
  
           <Route
         path='/Restaurant'

         element={
          <Restaurant/>
         }/>
       
        {/* <Route 
         path='/Category' 
         element={
          <Category/>
         }/>  */}
          <Route 
         path='/ContactUs' 
         element={
          <ContactUs/>
         }/>
      </Routes>

      </BrowserRouter>
    </div>
    );
}

export default App;