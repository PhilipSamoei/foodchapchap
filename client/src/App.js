import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ContactUs from './components/ContactUs';
// import Restaurant from '/components/Restaurant';
// import Category from '/components/Category';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <NavBar/>
      <Home/>

      <Routes>
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
          <Route path='/ContactUs'element={<ContactUs/>}/>

      </Routes>

      </BrowserRouter>
    </div>
    );
}

export default App;
