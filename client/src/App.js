import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ContactUs from './components/ContactUs';
import HomePage from './pages/HomePage';
import SignUp from './components/SignUp';
import LogIn from './components/Login';
import Foodcard from './pages/Foodcard';
import RestaurantCard from './components/Restaurant';
import BeverageCard from './pages/Beverage';
import Footercomp from './components/Footer';
import CartPage from './pages/CartPage';
import Dashboard from './components/Dashboard';
import FormTable from './components/RestaurantProd';
import DishesTableForm from './components/DishesProd';
import BeveragesTableForm from './components/BeveragesProd';
import RestaurantDetails from './components/RestaurantDetails';
import BlogList from './blog/BlogList';
import LoginEntry from './components/LoginEntry';

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [userActive, setUserActive] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar userActive={userActive} setUserActive={setUserActive} />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={<LogIn setUserActive={setUserActive} onLogin={setCurrentUser} />}
          />
          {/* Protected route guard */}
          <Route
            path="/*"
            element={
              userActive ? (
                // If user is logged in, render the requested route
                <Routes>
                  <Route path="/Restaurants" element={<RestaurantCard />} />
                  <Route path="/dishes" element={<Foodcard />} />
                  <Route path="/Beverages" element={<BeverageCard />} />
                  {/* Add more protected routes here */}
                  <Route path="/restaurants/:id" element={<RestaurantDetails />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/restaurants-admin" element={<FormTable />} />
                  <Route path="/beverages-admin" element={<BeveragesTableForm />} />
                  <Route path="/food-admin" element={<DishesTableForm />} />
                  <Route path="/cart" element={<CartPage />} />
                </Routes>
              ) : (
                // If user is not logged in, navigate to the login page
                <Navigate to="/login" replace state={{ message: "Kindly log in to access this page" }} />
              )
            }
          />
          {/* Add more public routes here */}
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Blog" element={<BlogList />} />
        </Routes>
      </BrowserRouter>
      <Footercomp />
    </div>
  );
}

export default App;
