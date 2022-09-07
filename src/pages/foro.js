import React, { useState } from "react";

function Foro1(){

  const [pregunta1, setTextp1] = useState("");
  const [respuesta1, setTextr1] = useState("");
  const [pregunta2, setTextp2] = useState("");
  const [respuesta2, setTextr2] = useState("");
  const [pregunta3, setTextp3] = useState("");
  const [respuesta3, setTextr3] = useState("");

  const handleSubmitp1 = (event) => {
    event.preventDefault();
    setTextp1(event.target[0].value);
  };
  const handleSubmitr1 = (event) => {
    event.preventDefault();
    setTextr1(event.target[0].value);
    setIsShown1(current => !current);
  };

  const handleSubmitp2 = (event) => {
    event.preventDefault();
    setTextp2(event.target[0].value);
  };
  const handleSubmitr2 = (event) => {
    event.preventDefault();
    setTextr2(event.target[0].value);
    setIsShown2(current => !current);
  };

  const handleSubmitp3 = (event) => {
    event.preventDefault();
    setTextp3(event.target[0].value);
  };
  const handleSubmitr3 = (event) => {
    event.preventDefault();
    setTextr3(event.target[0].value);
    setIsShown3(current => !current);
  };

  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  const handleClick1 = event => {
    setIsShown1(current => !current);
  };
  const handleClick2 = event => {
    setIsShown2(current => !current);
  };
  const handleClick3 = event => {
    setIsShown3(current => !current);
  };

  function Preguntar1() {

    if (pregunta1 !== "") {
      return (
        <div>
          <div className="mt-4" id="respuesta">
            <form onSubmit={handleSubmitr1}>
              <label for="txtresp">Responde a una pregunta:</label><br></br>
              <input className="mt-2 form-control" id="txtresp" type="text"></input><br></br>
              <button className="btn btn-primary" type="submit">Responder</button>
            </form>
          </div>
        </div>
      );
    }
    
    else {
      return (
        <div>
          <div className="mt-4" id="pregunta">
            <form onSubmit={handleSubmitp1}>
              <label for="txtpreg">Ingresa una pregunta:</label><br></br>
              <input className="mt-2 form-control" id="txtpreg" type="text"></input><br></br>
              <button className="btn btn-primary" type="submit">Preguntar</button>
            </form>
          </div>
        </div>
      );
    }
  
  }

  function Preguntar2() {

    if (pregunta2 !== "") {
      return (
        <div>
          <div className="mt-4" id="respuesta">
            <form onSubmit={handleSubmitr2}>
              <label for="txtresp">Responde a una pregunta:</label><br></br>
              <input className="mt-2 form-control" id="txtresp" type="text"></input><br></br>
              <button className="btn btn-primary" type="submit">Responder</button>
            </form>
          </div>
        </div>
      );
    }
    
    else {
      return (
        <div>
          <div className="mt-4" id="pregunta">
            <form onSubmit={handleSubmitp2}>
              <label for="txtpreg">Ingresa una pregunta:</label><br></br>
              <input className="mt-2 form-control" id="txtpreg" type="text"></input><br></br>
              <button className="btn btn-primary" type="submit">Preguntar</button>
            </form>
          </div>
        </div>
      );
    }
  
  }

  function Preguntar3() {

    if (pregunta3 !== "") {
      return (
        <div>
          <div className="mt-4" id="respuesta">
            <form onSubmit={handleSubmitr3}>
              <label for="txtresp">Responde a una pregunta:</label><br></br>
              <input className="mt-2 form-control" id="txtresp" type="text"></input><br></br>
              <button className="btn btn-primary" type="submit">Responder</button>
            </form>
          </div>
        </div>
      );
    }
    
    else {
      return (
        <div>
          <div className="mt-4" id="pregunta">
            <form onSubmit={handleSubmitp3}>
              <label for="txtpreg">Ingresa una pregunta:</label><br></br>
              <input className="mt-2 form-control" id="txtpreg" type="text"></input><br></br>
              <button className="btn btn-primary" type="submit">Preguntar</button>
            </form>
          </div>
        </div>
      );
    }
  
  }

  return <div>
    
    <body>
      <div class="row bg-light">
        <nav className="navbar mt-2">
          <h3>E-Learn</h3>
        </nav>
      </div>

      <div className="card mt-4" id="foro">
        <div className="card-body">
          <h3>Foro 1: Gramática</h3><br></br>
          <h6>Selecciona un Slot vacío para realizar una Pregunta | Selecciona un Slot con una pregunta para subir una Respuesta</h6><br></br>
          <p>Pregunta 1: {pregunta1}</p>
          <p>Respuesta: {respuesta1}</p><br></br>
          <p>Pregunta 2: {pregunta2}</p>
          <p>Respuesta: {respuesta2}</p><br></br>
          <p>Pregunta 3: {pregunta3}</p>
          <p>Respuesta: {respuesta3}</p><br></br>
        </div>
      </div>

      <div>
        <button className="mt-4 btn-primary" onClick={handleClick1}>Slot 1</button>
        {isShown1 && <Preguntar1 />}
      </div>

      <div>
        <button className="mt-4 btn-primary" onClick={handleClick2}>Slot 2</button>
        {isShown2 && <Preguntar2 />}
      </div>

      <div>
        <button className="mt-4 btn-primary" onClick={handleClick3}>Slot 3</button>
        {isShown3 && <Preguntar3 />}
      </div>

      <br></br><br></br>
    </body>
    
  </div>

}

export default Foro1;
