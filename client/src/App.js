import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [userActive, setUserActive] = useState(false);

  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route
        path="/login"
        element={
          <LogIn
            onLogin={setCurrentUser}
            setUserActive={setUserActive}
          />
        }
      ></Route>

      <Route
        path='/signup'
        element={
          <SignUp/>
        }
      ></Route>

      

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
