import React, { useState } from "react";
import FactoryHilo from "./ObjetosForo/FactoryHilo";
import { IoMdSend } from "react-icons/io";
import { AiOutlineConsoleSql, AiOutlinePaperClip } from "react-icons/ai";
import ReactPlayer from "react-player";


function ConsultaForo() {
  const P = (event) => {
    event.preventDefault();
    setP({ ...pregunta, texto: event.target[0].value, archivo: formFile, tipo: formType })
  };

  const R = (event) => {
    event.preventDefault();
    setR({ ...respuesta, texto: event.target[0].value, archivo: formFile, tipo: formType })
    setIsShown(current => !current);
  };

  const [pregunta, setP] = useState(
    {
      texto: "",
      archivo: "",
      tipo: ""
    }
  )
  const [respuesta, setR] = useState(
    {
      texto: "",
      archivo: "",
      tipo: ""
    }
  )

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
                 formFile && formType === 'Gif' ? <img src={formFile} className="d-block mb-3 gif-foro"></img> :
                formFile && formType === 'Audio' ? <audio controls src={formFile} className="d-block mb-3"></audio>
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

  function CrearConsultaPendiente(tipo) {
    if (pregunta.texto !== "") {
      consulta.setmensaje = pregunta.texto;
      consulta.settipo = pregunta.tipo;
      consulta.setarchivo = pregunta.archivo;
      const renderPre = [consulta.getmensaje, consulta.gettipo, consulta.getarchivo];

      if(tipo === "mensaje"){
        return renderPre[0];
      }
      if(tipo === "tipo"){
        return renderPre[1];
      }
      if(tipo === "archivo"){
        return renderPre[2];
      }
      //Añadir a un Array

      return renderPre;
    }
  }

  const m = consulta.getmensaje
  const hilo2 = Factory.crearHilo('Consulta');
  const consulta2 = hilo2.crearEstado('Resuelta');

  function CrearConsultaResuelta(tipo) {
    if (respuesta.texto !== "") {
      consulta2.setmensaje = m;
      consulta2.setrespuesta = respuesta.texto;
      consulta2.settipo = respuesta.tipo;
      consulta2.setarchivo = respuesta.archivo;
      const renderRes = [consulta2.getrespuesta, consulta2.gettipo, consulta2.getarchivo];

      if(tipo === "mensaje"){
        return renderRes[0];
      }
      if(tipo === "tipo"){
        return renderRes[1];
      }
      if(tipo === "archivo"){
        return renderRes[2];
      }

      //Reemplazar en Array

      return renderRes;
    }
  }

  return (
    <div className="container border mb-3">
      <div className="mt-3">
        <p>Question: {CrearConsultaPendiente("mensaje")}</p>
        {CrearConsultaPendiente("tipo") === 'Imagen' ? <img src={CrearConsultaPendiente("archivo")} className="img-thumbnail mb-2 img-foro"></img> :
        CrearConsultaPendiente("tipo") === 'Gif' ? <img src={CrearConsultaPendiente("archivo")} className="d-block mb-3 gif-foro"></img> :
        CrearConsultaPendiente("tipo") === 'Audio' ? <audio controls src={CrearConsultaPendiente("archivo")} className="d-block mb-3"></audio>
                  : <p className="d-block mb-3"></p>}
      </div>
      <div className="mt-2">
      <p>Answer: {CrearConsultaResuelta("mensaje")}</p>
        {CrearConsultaResuelta("tipo") === 'Imagen' ? <img src={CrearConsultaResuelta("archivo")} className="img-thumbnail mb-2 img-foro"></img> :
        CrearConsultaResuelta("tipo") === 'Gif' ? <img src={CrearConsultaResuelta("archivo")} className="d-block mb-3 gif-foro"></img> :
        CrearConsultaResuelta("tipo") === 'Audio' ? <audio controls src={CrearConsultaResuelta("archivo")} className="d-block mb-3"></audio>: 
        CrearConsultaResuelta("tipo") === 'Video'? <video width="750" height="500" controls><source src={CrearConsultaResuelta("archivo")}/></video>
        :<p className="d-block mb-3"></p>}
      </div>
      <button className="mb-3 btn btn-primary" onClick={handleClick}>Make a question</button>
      {isShown && <Preguntar />}
    </div>
  )
}

export default ConsultaForo