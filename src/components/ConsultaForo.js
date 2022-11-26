import React, { useState } from "react";
import FactoryHilo from "./ObjetosForo/FactoryHilo";
import { IoMdSend } from "react-icons/io";
import { AiOutlineConsoleSql, AiOutlinePaperClip } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ConsultaForo() {

  const P = (event) => {
    event.preventDefault();
    setP({ ...pregunta, texto: event.target[0].value, archivo: formFile, tipo: formType })
  };

  const R = (event) => {
    event.preventDefault();
    setR(event.target[0].value);
    setIsShown(current => !current);
  };

  const [pregunta, setP] = useState(
    {
      texto: "",
      archivo: "",
      tipo: ""
    }
  )
  const [respuesta, setR] = useState("");
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  // Subir archivos
  const [formFile, setFile] = useState();
  const [formType, setType] = useState();
  const [formName, setName] = useState();

  function handleChangeInput(event) {
    event.preventDefault();
    let files = event.target.files;
    let nameFile = files[0].name;
    setName(nameFile);

    //Obtener tipo de archivo
    let extImg = /(.jpg|.png|.jpeg)$/i;
    let extAud = /(.mp3|.wav|.ogg)$/i;
    let extGif = /(.gif|.apng)$/i;
    let extVid = /(.mp4|.mov|.wmv)$/i;

    if (extImg.exec(nameFile)) {
      setType('Imagen');
    }
    if (extAud.exec(nameFile)) {
      setType('Audio')
    }
    if (extGif.exec(nameFile)) {
      setType('Gif')
    }

    if (extVid.exec(nameFile)) {
      setType('Video')
    }

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      const pdf = e.target.result;
      setFile(pdf);
    }
  }
  function Preguntar() {

    if (pregunta.texto !== "") {
      //Responder pregunta
      return (
        <div>
          <div className="mt-2" id="respuesta">
            <form onSubmit={R}>
              <label htmlFor="txtresp">Answer a question</label><br></br>
              <div className="row mt-3">
                <div className="col-11">
                  <input className="form-control" id="txtresp" type="text"></input><br></br>
                </div>
                <div className="col-1">
                  <div className="col-1 "><button className="mb-3 btn btn-primary" type="submit"><IoMdSend /> </button></div>
                </div>
              </div>
              <input className="mb-4" type="file" name="uploadFile" onChange={(e) => handleChangeInput(e)} />
              {formFile && formType === 'Imagen' ? <img src={formFile} className="img-thumbnail mb-2 img-foro"></img> :
                formFile && formType === 'Gif' ? <img src={formFile} className="d-block mb-3 gif-foro"></img> 
                  : <p className="d-block mb-3">Seleccione un archivo</p>}
            </form>
          </div>
        </div>
      );
    }

    else {
      //Realizar una pregunta
      return (
        <div>

          <div className="mt-2" id="pregunta">
            <form onSubmit={P}>
              <div className="row mt-3">
                <div className="col-11">
                  <input name="txt" className="form-control" id="txtpreg" type="text" placeholder="Make a question" defaultValue={""}></input><br></br>
                </div>
                <div className="col-1 ">
                  <button className="mb-3 btn btn-primary " type="submit"><IoMdSend /></button>
                </div>
              </div>
              <input className="mb-4" type="file" name="uploadFile" onChange={(e) => handleChangeInput(e)} />
              {formFile && formType === 'Imagen' ? <img src={formFile} className="img-thumbnail mb-2 img-foro"></img> :
                 formFile && formType === 'Gif' ? <img src={formFile} className="d-block mb-3 gif-foro"></img> :
                formFile && formType === 'Audio' ? <audio controls src={formFile} className="d-block mb-3"></audio>
                  : <p className="d-block mb-3">Seleccione un archivo</p>}
            </form>
          </div>
        </div>
      );
    }

  }

  const Factory = new FactoryHilo()
  const hilo = Factory.crearHilo('Consulta');
  const consulta = hilo.crearEstado('Pendiente');

  function CrearConsultaPendiente() {
    if (pregunta.texto !== "") {
      consulta.setmensaje = pregunta.texto;
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
    <div className="container border mb-3">
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