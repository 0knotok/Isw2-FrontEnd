import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PortalAlumno from './pages/PortalAlumno';
import LogIn from './pages/login';
import SignUpAl from './pages/signupAl';
import SignUpPr from './pages/signupPR';
import NotFound from './components/NotFound';
import PerfilAlumno from './pages/PerfilAlumno';
import Curso from './pages/ModuloCurso'
import Foro from './pages/foro';
import Disponibilidad from './pages/disponiblidad';
import RecContra from './pages/recuperacionContra'
import SubirArchivo from './components/SubirArchivo';
import './App.css';
import EvaProfe from './pages/evaProfe';
import CrearEvaluacion from './pages/crearEvaluacion';
import CreacionFormulario from './pages/CreacionFormulario';
import FormularioEvaluacion from './pages/FormularioEvaluacion';
import PortalProfesor from './pages/PortalProfesor';
import PerfilProfesor from './pages/PerfilProfesor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/PortalAlumno' element={<PortalAlumno/>}/>
          <Route path='/PortalProfesor' element={<PortalProfesor/>}/>
          <Route path='/curso' element={<Curso/>}/>
          <Route path='/foro' element={<Foro/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element= {<LogIn/>}/>
          <Route path='/signUpA' element={<SignUpAl/>}/>
          <Route path='/signUpP' element={<SignUpPr/>}/>
          <Route path='/evaProfe' element={<EvaProfe/>}/>
          <Route path='/crearEvaluacion' element={<CrearEvaluacion/>}/>
          <Route path='/PerfilAlumno' element={<PerfilAlumno/>}/>
          <Route path='/PerfilProfesor' element={<PerfilProfesor/>}/>
          <Route path='/recuperar' element={<RecContra/>}/>
          <Route path='/disponibilidad' element={<Disponibilidad/>}/>
          <Route path='/subirArchivo' element={<SubirArchivo/>}/>
          <Route path='/CreacionFormulario' element={<CreacionFormulario/>}/>
          <Route path='/FormularioEvaluacion' element={<FormularioEvaluacion/>}/>
      </Routes>
    </BrowserRouter>
    {/*<UserConfigModal/>*/}
    </div>
  );
}

export default App;
