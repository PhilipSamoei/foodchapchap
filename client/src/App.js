import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ContactUs from './components/ContactUs';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import SignUp from './components/SignUp';
import LogIn from './components/Login';
// import Restaurant from '/components/Restaurant';
// import Category from '/components/Category';



function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [userActive, setUserActive] = useState(false);

  return (
    <div className="App">

      <div className='landing-page'>
         <h1>food ChapChap</h1>
      </div>
     
      <BrowserRouter>
     
      


      <NavBar/>
      <Home/>
      <HomePage/>

      <Routes>

         <Route 
         path='/' 
         element={
          <Home/>
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
          {/* <Route 
         path='/Restaurant' 

         <Route
         path='/' element={<Home/>}/>
          {/* <Route
         path='/Restaurant'

         element={
          <Restaurant/>
         }/>

        <Route 
         path='/Category' 
         element={
          <Category/>
         }/> */}
          <Route 
         path='/ContactUs' 
         element={
          <ContactUs/>
         }/>

       
          <Route path='/ContactUs'element={<ContactUs/>}/>


      </Routes>

      </BrowserRouter>
    </div>
    );
}

export default App;