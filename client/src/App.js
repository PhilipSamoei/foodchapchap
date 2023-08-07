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
import BeverageCard from './pages/Beverage';
import Footercomp from './components/Footer';
import Dashboard from './components/Dashboard';
import FormTable from './components/RestaurantProd';
import DishesTableForm from './components/DishesProd';
import BeveragesTableForm from './components/BeveragesProd';
import RestaurantDetails from './components/RestaurantDetails';
import BlogList from './blog/BlogList';

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [userActive, setUserActive] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>

        <NavBar userActive={userActive} setUserActive={setUserActive} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Restaurants" element={<RestaurantCard />} />
          <Route path="/dishes" element={<Foodcard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={
              <LogIn
                setUserActive={setUserActive}
                onLogin={setCurrentUser}
              />
            }
          />
          <Route path="/Beverages" element={<BeverageCard />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          {/* Move this Route inside the Routes component */}
          <Route path="/Blog" element={<BlogList />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/restaurants-admin' element={<FormTable />} />
            <Route path='/beverages-admin' element={<BeveragesTableForm />} />
            <Route path='/food-admin' element={<DishesTableForm />} />
        </Routes>
      </BrowserRouter>
      <Footercomp />
    </div>
  );
}

export default App;
