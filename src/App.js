import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './pages/Portal';
import LogIn from './pages/login';
import SignUpAl from './pages/signupAl';
import SignUpPr from './pages/signupPR';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portal/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/login' element= {<LogIn/>}/>
          <Route path='/signupA' element={<SignUpAl/>}/>
          <Route path='/signUpP' element={<SignUpPr/>}/>
      </Routes>
    </BrowserRouter>
    {/*<UserConfigModal/>*/}
    </div>
  );
}

export default App;
