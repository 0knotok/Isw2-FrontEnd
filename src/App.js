import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './pages/Portal';
import LogIn from './pages/login';
import SignUpAl from './pages/signupAl';
import SignUpPr from './pages/signupPR';
import NotFound from './components/NotFound';
import './App.css';
import EvaProfe from './pages/evaProfe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
          <Route path='/portal' element={<Portal/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element= {<LogIn/>}/>
          <Route path='/signupA' element={<SignUpAl/>}/>
          <Route path='/signUpP' element={<SignUpPr/>}/>
          <Route path='/evaProfe' element={<EvaProfe/>}/>
      </Routes>
    </BrowserRouter>
    {/*<UserConfigModal/>*/}
    </div>
  );
}

export default App;