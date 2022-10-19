import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './pages/Portal';
import LogIn from './pages/login';
import SignUpAl from './pages/signupAl';
import SignUpPr from './pages/signupPR';
import NotFound from './components/NotFound';
import Perfil from './pages/Perfil';
import Curso from './pages/ModuloCurso'
import Foro from './pages/foro';
import Disponibilidad from './pages/disponiblidad';
import RecContra from './pages/recuperacionContra'
import './App.css';
import EvaProfe from './pages/evaProfe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/portal' element={<Portal/>}/>
          <Route path='/curso' element={<Curso/>}/>
          <Route path='/foro' element={<Foro/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element= {<LogIn/>}/>
          <Route path='/signUpA' element={<SignUpAl/>}/>
          <Route path='/signUpP' element={<SignUpPr/>}/>
          <Route path='/evaProfe' element={<EvaProfe/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path='/disponibilidad' element={<Disponibilidad/>}/>
          <Route path='/recuperar' element={<RecContra/>}/>
      </Routes>
    </BrowserRouter>
    {/*<UserConfigModal/>*/}
    </div>
  );
}

export default App;
