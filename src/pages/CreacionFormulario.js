import Navbar from '../components/Navbar.js'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import FactoryPregunta from "../components/ObjetosExamen/FactoryPregunta"

const ExamenCreado = [];

function CrearExamen() {
  //Pregunta
  const [SubirPregunta, setPregunta] = useState("");

  //Opciones posibles
  const [OpcionUno, setUno] = useState("");
  const [OpcionDos, setDos] = useState("");
  const [OpcionTres, setTres] = useState("");
  const [OpcionCuatro, setCuatro] = useState("");
  const [OpcionCinco, setCinco] = useState("");
  const [OpcionSeis, setSeis] = useState("");
  const [OpcionSiete, setSiete] = useState("");

  //Estados de visualizacion de pasos
  const [MostrarTipo, setMostrarTipo] = useState(false);
  const [Mostrar, setMostrar] = useState(false);

  //Numero de opciones, numero de pregunta, y tipo de pregunta
  const [Opciones, setOpciones] = useState(0);
  const [Numero, setNumero] = useState(1);
  const [Tipo, setTipo] = useState(0);

  //Escribir variables sobre lectura de input singular
  const P = (event) => {
    event.preventDefault();
    setPregunta(event.target[0].value);
  };

  const O1 = (event) => {
    event.preventDefault();
    setUno(event.target[0].value);
  };
  const O2 = (event) => {
    event.preventDefault();
    setDos(event.target[0].value);
  };
  const O3 = (event) => {
    event.preventDefault();
    setTres(event.target[0].value);
  };
  const O4 = (event) => {
    event.preventDefault();
    setCuatro(event.target[0].value);
  };
  const O5 = (event) => {
    event.preventDefault();
    setCinco(event.target[0].value);
  };
  const O6 = (event) => {
    event.preventDefault();
    setSeis(event.target[0].value);
  };
  const O7 = (event) => {
    event.preventDefault();
    setSiete(event.target[0].value);
  };

  //Iniciar de primer boton a ingreso de numero
  const IniciarOpciones = (event) => {
    event.preventDefault();
    setOpciones(event.target[0].value);
    setMostrar(current => !current);
  };

  //Objetos para sobrescribir e ingresar al Array
  const Examen = new FactoryPregunta;

  const Pregunta = Examen.crearPregunta('Opcion Unica');
  const PreguntaUnicaDos = Pregunta.crearUnica(2);
  const PreguntaUnicaTres = Pregunta.crearUnica(3);
  const PreguntaUnicaCuatro = Pregunta.crearUnica(4);
  const PreguntaUnicaCinco = Pregunta.crearUnica(5);

  const Pregunta2 = Examen.crearPregunta('Opcion Multiple');
  const PreguntaMultipleCuatro = Pregunta2.crearMultiple(4);
  const PreguntaMultipleCinco = Pregunta2.crearMultiple(5);
  const PreguntaMultipleSeis = Pregunta2.crearMultiple(6);
  const PreguntaMultipleSiete = Pregunta2.crearMultiple(7);

  //Sobrescribir objetos segun tipo
  const SubirDos = () => {
    if (Tipo == 1) {
      PreguntaUnicaDos.setpregunta = SubirPregunta;
      PreguntaUnicaDos.setopcion1 = OpcionUno;
      PreguntaUnicaDos.setopcion2 = OpcionDos;
      setMostrar(current => !current);
      setMostrarTipo(current => !current);
      ExamenCreado.push(PreguntaUnicaDos);
      console.log(ExamenCreado);
      setNumero(Numero + 1);
    }
  }
  const SubirTres = () => {
    if (Tipo == 1) {
      PreguntaUnicaTres.setpregunta = SubirPregunta;
      PreguntaUnicaTres.setopcion1 = OpcionUno;
      PreguntaUnicaTres.setopcion2 = OpcionDos;
      PreguntaUnicaTres.setopcion3 = OpcionTres;
      setMostrar(current => !current);
      setMostrarTipo(current => !current);
      ExamenCreado.push(PreguntaUnicaTres);
      console.log(ExamenCreado);
      setNumero(Numero + 1);
    }
  }
  const SubirCuatro = () => {
    if (Tipo == 1) {
      PreguntaUnicaCuatro.setpregunta = SubirPregunta;
      PreguntaUnicaCuatro.setopcion1 = OpcionUno;
      PreguntaUnicaCuatro.setopcion2 = OpcionDos;
      PreguntaUnicaCuatro.setopcion3 = OpcionTres;
      PreguntaUnicaCuatro.setopcion4 = OpcionCuatro;
      setMostrar(current => !current);
      setMostrarTipo(current => !current);
      ExamenCreado.push(PreguntaUnicaCuatro);
      console.log(ExamenCreado);
      setNumero(Numero + 1);
    }
    if (Tipo == 2) {
      PreguntaMultipleCuatro.setpregunta = SubirPregunta;
      PreguntaMultipleCuatro.setopcion1 = OpcionUno;
      PreguntaMultipleCuatro.setopcion2 = OpcionDos;
      PreguntaMultipleCuatro.setopcion3 = OpcionTres;
      PreguntaMultipleCuatro.setopcion4 = OpcionCuatro;
      setMostrar(current => !current);
      setMostrarTipo(current => !current);
      ExamenCreado.push(PreguntaMultipleCuatro);
      console.log(ExamenCreado);
      setNumero(Numero + 1);
    }
  }
  const SubirCinco = () => {
    if (Tipo == 1) {
      PreguntaUnicaCinco.setpregunta = SubirPregunta;
      PreguntaUnicaCinco.setopcion1 = OpcionUno;
      PreguntaUnicaCinco.setopcion2 = OpcionDos;
      PreguntaUnicaCinco.setopcion3 = OpcionTres;
      PreguntaUnicaCinco.setopcion4 = OpcionCuatro;
      PreguntaUnicaCinco.setopcion5 = OpcionCinco;
      setMostrar(current => !current);
      setMostrarTipo(current => !current);
      ExamenCreado.push(PreguntaUnicaCinco);
      console.log(ExamenCreado);
      setNumero(Numero + 1);
    }
    if (Tipo == 2) {
      PreguntaMultipleCinco.setpregunta = SubirPregunta;
      PreguntaMultipleCinco.setopcion1 = OpcionUno;
      PreguntaMultipleCinco.setopcion2 = OpcionDos;
      PreguntaMultipleCinco.setopcion3 = OpcionTres;
      PreguntaMultipleCinco.setopcion4 = OpcionCuatro;
      PreguntaMultipleCinco.setopcion5 = OpcionCinco;
      setMostrar(current => !current);
      setMostrarTipo(current => !current);
      ExamenCreado.push(PreguntaMultipleCinco);
      console.log(ExamenCreado);
      setNumero(Numero + 1);
    }
  }
  const SubirSeis = () => {
    if (Tipo == 2) {
      PreguntaMultipleSeis.setpregunta = SubirPregunta;
      PreguntaMultipleSeis.setopcion1 = OpcionUno;
      PreguntaMultipleSeis.setopcion2 = OpcionDos;
      PreguntaMultipleSeis.setopcion3 = OpcionTres;
      PreguntaMultipleSeis.setopcion4 = OpcionCuatro;
      PreguntaMultipleSeis.setopcion5 = OpcionCinco;
      PreguntaMultipleSeis.setopcion6 = OpcionSeis;
      setMostrar(current => !current);
      setMostrarTipo(current => !current);
      ExamenCreado.push(PreguntaMultipleSeis);
      console.log(ExamenCreado);
      setNumero(Numero + 1);
    }
  }
  const SubirSiete = () => {
    if (Tipo == 2) {
      PreguntaMultipleSiete.setpregunta = SubirPregunta;
      PreguntaMultipleSiete.setopcion1 = OpcionUno;
      PreguntaMultipleSiete.setopcion2 = OpcionDos;
      PreguntaMultipleSiete.setopcion3 = OpcionTres;
      PreguntaMultipleSiete.setopcion4 = OpcionCuatro;
      PreguntaMultipleSiete.setopcion5 = OpcionCinco;
      PreguntaMultipleSiete.setopcion6 = OpcionSeis;
      PreguntaMultipleSiete.setopcion7 = OpcionSiete;
      setMostrar(current => !current);
      setMostrarTipo(current => !current);
      ExamenCreado.push(PreguntaMultipleSiete);
      console.log(ExamenCreado);
      setNumero(Numero + 1);
    }
  }

  //Desplegar numero de inputs por numero de opciones ingresado
  function LeerOpciones(n) {
    if (n == 2) {
      return (
        <div className="mt-2" id="crearpregunta">
          <form onSubmit={P}>
            <label for="pre">Enter the question:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="pre" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <br></br>
          <form onSubmit={O1}>
            <label for="opc1">Enter Option #1:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O2}>
            <label for="opc1">Enter Option #2:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <button className="mt-4 btn btn-primary" type="submit" onClick={SubirDos}>Upload Question</button>
          <div>
            <div>
              <br></br>
              <h5>Preview:</h5>
              <span>Question: {SubirPregunta}</span><br></br>
              <span>Option Uno: {OpcionUno}</span><br></br>
              <span>Option Dos: {OpcionDos}</span><br></br>
            </div>
          </div>
        </div>
      )
    }
    else if (n == 3) {
      return (
        <div className="mt-2" id="crearpregunta">
          <form onSubmit={P}>
            <label for="pre">Enter the question:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="pre" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <br></br>
          <form onSubmit={O1}>
            <label for="opc1">Enter Option #1:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O2}>
            <label for="opc1">Enter Option #2:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O3}>
            <label for="opc1">Enter Option #3:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <button className="mt-4 btn btn-primary" type="submit" onClick={SubirTres}>Upload Question</button>
          <div>
            <div>
              <br></br>
              <h5>Preview:</h5>
              <span>Question: {SubirPregunta}</span><br></br>
              <span>Option Uno: {OpcionUno}</span><br></br>
              <span>Option Dos: {OpcionDos}</span><br></br>
              <span>Option Tres: {OpcionTres}</span><br></br>
            </div>
          </div>
        </div>
      )
    }
    else if (n == 4) {
      return (
        <div className="mt-2" id="crearpregunta">
          <form onSubmit={P}>
            <label for="pre">Enter the question:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="pre" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <br></br>
          <form onSubmit={O1}>
            <label for="opc1">Enter Option #1:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O2}>
            <label for="opc1">Enter Option #2:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O3}>
            <label for="opc1">Enter Option #3:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O4}>
            <label for="opc1">Enter Option #4:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <button className="mt-4 btn btn-primary" type="submit" onClick={SubirCuatro}>Upload Question</button>
          <div>
            <div>
              <br></br>
              <h5>Preview:</h5>
              <span>Question: {SubirPregunta}</span><br></br>
              <span>Option Uno: {OpcionUno}</span><br></br>
              <span>Option Dos: {OpcionDos}</span><br></br>
              <span>Option Tres: {OpcionTres}</span><br></br>
              <span>Option Cuatro: {OpcionCuatro}</span><br></br>
            </div>
          </div>
        </div>
      )
    }
    else if (n == 5) {
      return (
        <div className="mt-2" id="crearpregunta">
          <form onSubmit={P}>
            <label for="pre">Enter the question:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="pre" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <br></br>
          <form onSubmit={O1}>
            <label for="opc1">Enter Option #1:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O2}>
            <label for="opc1">Enter Option #2:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O3}>
            <label for="opc1">Enter Option #3:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O4}>
            <label for="opc1">Enter Option #4:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O5}>
            <label for="opc1">Enter Option #5:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <button className="mt-4 btn btn-primary" type="submit" onClick={SubirCinco}>Upload Question</button>
          <div>
            <div>
              <br></br>
              <h5>Preview:</h5>
              <span>Question: {SubirPregunta}</span><br></br>
              <span>Option Uno: {OpcionUno}</span><br></br>
              <span>Option Dos: {OpcionDos}</span><br></br>
              <span>Option Tres: {OpcionTres}</span><br></br>
              <span>Option Cuatro: {OpcionCuatro}</span><br></br>
              <span>Option Cinco: {OpcionCinco}</span><br></br>
            </div>
          </div>
        </div>
      )
    }
    else if (n == 6) {
      return (
        <div className="mt-2" id="crearpregunta">
          <form onSubmit={P}>
            <label for="pre">Enter the question:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="pre" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <br></br>
          <form onSubmit={O1}>
            <label for="opc1">Enter Option #1:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O2}>
            <label for="opc1">Enter Option #2:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O3}>
            <label for="opc1">Enter Option #3:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O4}>
            <label for="opc1">Enter Option #4:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O5}>
            <label for="opc1">Enter Option #5:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O6}>
            <label for="opc1">Enter Option #6:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <button className="mt-4 btn btn-primary" type="submit" onClick={SubirSeis}>Upload Question</button>
          <div>
            <div>
              <br></br>
              <h5>Preview:</h5>
              <span>Question: {SubirPregunta}</span><br></br>
              <span>Option 1: {OpcionUno}</span><br></br>
              <span>Option 2: {OpcionDos}</span><br></br>
              <span>Option 3: {OpcionTres}</span><br></br>
              <span>Option 4: {OpcionCuatro}</span><br></br>
              <span>Option 5: {OpcionCinco}</span><br></br>
              <span>Option 6: {OpcionSeis}</span><br></br>
            </div>
          </div>
        </div>
      )
    }
    else if (n == 7) {
      return (
        <div className="mt-2" id="crearpregunta">
          <form onSubmit={P}>
            <label for="pre">Enter the question:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="pre" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <br></br>
          <form onSubmit={O1}>
            <label for="opc1">Enter Option #1:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O2}>
            <label for="opc1">Enter Option #2:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O3}>
            <label for="opc1">Enter Option #3:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O4}>
            <label for="opc1">Enter Option #4:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O5}>
            <label for="opc1">Enter Option #5:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O6}>
            <label for="opc1">Enter Option #6:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <form onSubmit={O7}>
            <label for="opc1">Enter Option #7:</label><span>&nbsp;&nbsp;&nbsp;</span>
            <input className="mt-1" id="opc1" type="text"></input><span>&nbsp;&nbsp;&nbsp;</span>
            <button className="mb-1 btn-primary" type="submit">Upload</button>
          </form>
          <button className="mt-4 btn btn-primary" type="submit" onClick={SubirSiete}>Upload Question</button>
          <div>
            <div>
              <br></br>
              <h5>Preview:</h5>
              <span>Question: {SubirPregunta}</span><br></br>
              <span>Option 1: {OpcionUno}</span><br></br>
              <span>Option 2: {OpcionDos}</span><br></br>
              <span>Option 3: {OpcionTres}</span><br></br>
              <span>Option 4: {OpcionCuatro}</span><br></br>
              <span>Option 5: {OpcionCinco}</span><br></br>
              <span>Option 6: {OpcionSeis}</span><br></br>
              <span>Option 7: {OpcionSiete}</span><br></br>
            </div>
          </div>
        </div>
      )
    }
    else if (n == 0) {
      window.alert('Error: No pueden no haber opciones')
    }
    else if (n == 1) {
      window.alert('Error: No se puede ingresar una única opción de respuesta')
    }
    else {
      window.alert('Error: No se pueden ingresar dichas opciones')
    }
  }

  //Desplegar numero de opciones por boton de tipo seleccionado
  function IniciarTipo(t) {
    if (t == 1) {
      return (
        <div className="mb-3">
          <form onSubmit={IniciarOpciones}>
            <label for="NumeroOpciones">Once option - Choose the number of options between 2 and 5:</label><br></br>
            <input className="mt-3 mb-3" type="number" id="NumeroOpciones"></input><br></br>
            <button className="mb-3 btn btn-primary">Start</button>
          </form>
        </div>
      )
    }
    if (t == 2) {
      return (
        <div className="mb-3">
          <form onSubmit={IniciarOpciones}>
            <label for="NumeroOpciones">Multiple choise - Choose the number of options from 4 to 7:</label><br></br>
            <input className="mt-3 mb-3" type="number" id="NumeroOpciones"></input><br></br>
            <button className="mb-3 btn btn-primary">Start</button>
          </form>
        </div>
      )
    }
    else {
      console.log("Error: No existe dicho tipo")
    }
  }

  //Mostrar ingreso de numuero de opciones segun tipo
  const IniciarTipoUnica = () => {
    setMostrarTipo(current => !current);
    setTipo(1);
  };
  const IniciarTipoMultiple = () => {
    setMostrarTipo(current => !current);
    setTipo(2);
  };
  
  return (
    <div className="container">
      <Navbar />
      <div className="container">
        <h1>Menu for creation of forms</h1>
        <div className="container text-center">
          <div className="card-body">
            <div className="mt-3 mb-3">
              <h3>Create your questions:</h3><br></br>
              <h5>Question {Numero}:</h5>
              <button className="mt-3 mb-3 btn btn-primary" onClick={IniciarTipoUnica}>Create unic option form</button>&nbsp;&nbsp;&nbsp;
              <button className="mt-3 mb-3 btn btn-primary" onClick={IniciarTipoMultiple}>Crear multiple choise form</button>
            </div>
            <div>
              {MostrarTipo && IniciarTipo(Tipo)}
            </div>
            <div>
              {Mostrar && LeerOpciones(Opciones)}
            </div>
            <br></br>
          </div>
            <button type="button" className="btn btn-success">Upload Formulario</button>
            <br></br>
            <br></br>
            <Link to='/PortalProfesor'>
              <button type="button" className="btn btn-danger">Return</button></Link>
        </div>
      </div>
    </div>
  )
} export default CrearExamen
