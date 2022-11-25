import React, { useState } from "react";
import FactoryHilo from "./ObjetosForo/FactoryHilo";
import { IoMdSend } from "react-icons/io";

function ConsultaForo(){
  
    const P = (event) => {
      event.preventDefault();
      setP(event.target[0].value);
    };

    const R = (event) => {
      event.preventDefault();
      setR(event.target[0].value);
      setIsShown(current => !current);
    };

    const [pregunta, setP] = useState("");
    const [respuesta, setR] = useState("");
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(current => !current);
    };
    
    function Preguntar() {
  
      if (pregunta !== "") {
        return (
          <div>
            <div className="mt-2" id="respuesta">
              <form onSubmit={R}>
                <label for="txtresp">Answer a question</label><br></br>
                <input className="mt-3 form-control" id="txtresp" type="text"></input><br></br>
                <button className="mb-3 btn btn-primary" type="submit">Your answer </button>
              </form>
            </div>
          </div>
        );
      }
      
      else {
        return (
          <div>
            <div className="mt-2" id="pregunta">
              <form onSubmit={P}>
                <label for="txtpreg">Make a question:</label><br></br>
                <div class="row">
                  <div class="col-11"><input className=" form-control" id="txtpreg" type="text"></input><br></br></div>
                  <div class="col-1 "><button className="mb-3 btn btn-primary " type="submit"><IoMdSend /></button></div>
                </div>
              </form>
            </div>
          </div>
        );
      }
    
    }

    const Factory = new FactoryHilo()
    const hilo = Factory.crearHilo('Consulta');
    const consulta = hilo.crearEstado('Pendiente');

    function CrearConsultaPendiente(){
      if (pregunta !== "") {
        consulta.setmensaje = pregunta;
        const renderPre = consulta.getmensaje;

        //Añadir a un Array

        return renderPre;
      }
    }

    const m = consulta.getmensaje
    const hilo2 = Factory.crearHilo('Consulta');
    const consulta2 = hilo2.crearEstado('Resuelta');

    function CrearConsultaResuelta() {
      if (respuesta !== "") {
        consulta2.setmensaje = m;
        consulta2.setrespuesta = respuesta;
        const renderRes = consulta2.getrespuesta;

        //Reemplazar en Array

        return renderRes;
      }
    }

    return (
        <div class="container border mb-3">
            <div className="mt-3">
                <p>Question: {CrearConsultaPendiente()}</p>
            </div>
            <div className="mt-2">
                <p>Answer: {CrearConsultaResuelta()}</p>
            </div>
            <button className="mb-3 btn btn-primary" onClick={handleClick}>Make a question</button>
            {isShown && <Preguntar />}
        </div>
    )
  }

export default ConsultaForo