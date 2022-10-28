import React, { Component } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

var ExamenCreado = [];

function Examen(){

    const location = useLocation();

    ExamenCreado = location.state;

    var Pregunta1 = ExamenCreado[0];

    const [Siguiente, setSiguiente] = useState(1);
    const [Tipo, setTipo] = useState('');
    const [Clase, setClase] = useState('');

    const [Pregunta, setPregunta] = useState("");
    const [OpcionUno, setUno] = useState("");
    const [OpcionDos, setDos] = useState("");
    const [OpcionTres, setTres] = useState("");
    const [OpcionCuatro, setCuatro] = useState("");
    const [OpcionCinco, setCinco] = useState("");
    const [OpcionSeis, setSeis] = useState("");
    const [OpcionSiete, setSiete] = useState("");

    function LeerActual(PreguntaLeer){
        var P =  PreguntaLeer;
        setTipo(P._tipo);
        setClase(P._clase);
        setPregunta(P._pregunta);
        setUno(P._opcion1);
        setDos(P._opcion2);
        setTres(P._opcion3);
        setCuatro(P._opcion4);
        setCinco(P._opcion5);
        setSeis(P._opcion6);
        setSiete(P._opcion7);
    }

    const [MostrarIniciar, setMostrarIniciar] = useState(true);
    const [MostrarPregunta, setMostrarPregunta] = useState(true);
    const [MostrarSiguiente, setMostrarSiguiente] = useState(false);
    const [MostrarFinalizar, setMostrarFinalizar] = useState(false);

    function IniciarExamen(){
        LeerActual(Pregunta1);
        setSiguiente(Siguiente + 1);
        setMostrarIniciar(current => !current);
        setMostrarSiguiente(current => !current);
    }

    function BotonIniciar(){
        return (
            <div>
                <button className="mt-2 mb-2 btn btn-primary" onClick={IniciarExamen}>Start Exam</button>
            </div>
        )
    }

    function BotonSiguiente(){
        return (
            <div>
                <button className="mt-2 mb-2 btn btn-primary" onClick={PasarSiguiente}>Next Question</button>
            </div>
        )
    }

    function BotonFinalizar(){
        return (
            <div>
                <a className="mt-2 mb-2 btn btn-secondary" onClick={FinalizarExamen}>Finish Exam</a>
            </div>
        )
    }

    var PreguntaActual = null;
    var PreguntaSiguiente = null;
    var PreguntaProxima = null;
    
    function PasarSiguiente(){
        var Next = Siguiente - 1;
        var Index = Siguiente - 2;

        PreguntaActual = ExamenCreado[Index];
        PreguntaSiguiente = ExamenCreado[Next];
        PreguntaProxima = ExamenCreado[Siguiente];

        if (Tipo == 'Opcion Unica'){
            PreguntaActual['_respuesta'] = RespuestaUnica;
        }
        if (Tipo == 'Opcion Multiple'){
            PreguntaActual['_respuesta'] = RespuestaMultiple;
        }
        ExamenCreado[Index] = PreguntaActual;
        if (PreguntaSiguiente != null){
            LeerActual(PreguntaSiguiente);
        }
        if (PreguntaProxima == null){
            setMostrarFinalizar(current => !current);
            setMostrarSiguiente(current => !current);
        }

        setSiguiente(Siguiente + 1);
        setRespuestaUnica(null);
        setRespuestaMultipleValor('');
        setEstadoUno(false);
        setEstadoDos(false);
        setEstadoTres(false);
        setEstadoCuatro(false);
        setEstadoCinco(false);
        setEstadoSeis(false);
        setEstadoSiete(false);
        console.log(ExamenCreado);
    }

    const [RespuestaUnica, setRespuestaUnica] = useState(null);
    const [RespuestaMultiple, setRespuestaMultiple] = useState(null);
    const [RespuestaMultipleValor, setRespuestaMultipleValor] = useState('');

    const [Opcion, setOpcion] = useState('');
    const [EstadoUno, setEstadoUno] = useState(false);
    const [EstadoDos, setEstadoDos] = useState(false);
    const [EstadoTres, setEstadoTres] = useState(false);
    const [EstadoCuatro, setEstadoCuatro] = useState(false);
    const [EstadoCinco, setEstadoCinco] = useState(false);
    const [EstadoSeis, setEstadoSeis] = useState(false);
    const [EstadoSiete, setEstadoSiete] = useState(false);

    const Checkbox = ({label, value, onChange}) => {
        return (
          <div>
            <input id="box" type="checkbox" checked={value} onChange={onChange}/>
            <label for="box">&nbsp;&nbsp;&nbsp;{label}</label>
          </div>
        );
    };

    const handleChangeUno = () => {
        setEstadoUno(!EstadoUno);
    };
    const handleChangeDos = () => {
        setEstadoDos(!EstadoDos);
    };
    const handleChangeTres = () => {
        setEstadoTres(!EstadoTres);
    };
    const handleChangeCuatro = () => {
        setEstadoCuatro(!EstadoCuatro);
    };
    const handleChangeCinco = () => {
        setEstadoCinco(!EstadoCinco);
    };
    const handleChangeSeis = () => {
        setEstadoSeis(!EstadoSeis);
    };
    const handleChangeSiete = () => {
        setEstadoSiete(!EstadoSiete);
    };

    function SubirRespuestaUnica(O){
        if (O == 'option1'){
            setRespuestaUnica(OpcionUno);
        }
        if (O == 'option2'){
            setRespuestaUnica(OpcionDos);
        }
        if (O == 'option3'){
            setRespuestaUnica(OpcionTres);
        }
        if (O == 'option4'){
            setRespuestaUnica(OpcionCuatro);
        }
        if (O == 'option5'){
            setRespuestaUnica(OpcionCinco);
        }
    }

    function SubirRespuestaMultiple(){
        var Multiple = [];
        var EstadoUnoValor = '';
        var EstadoDosValor = '';
        var EstadoTresValor = '';
        var EstadoCuatroValor = '';
        var EstadoCincoValor = '';
        var EstadoSeisValor = '';
        var EstadoSieteValor = '';
        var MultipleValor = '';

        if (Clase == 'Cuatro Opciones'){
            Multiple = [EstadoUno, EstadoDos, EstadoTres, EstadoCuatro];
        }
        if (Clase == 'Cinco Opciones'){
            Multiple = [EstadoUno, EstadoDos, EstadoTres, EstadoCuatro, EstadoCinco];
        }
        if (Clase == 'Seis Opciones'){
            Multiple = [EstadoUno, EstadoDos, EstadoTres, EstadoCuatro, EstadoCinco, EstadoSeis];
        }
        if (Clase == 'Siete Opciones'){
            Multiple = [EstadoUno, EstadoDos, EstadoTres, EstadoCuatro, EstadoCinco, EstadoSeis, EstadoSiete];
        }

        if (EstadoUno == true){
            EstadoUnoValor = OpcionUno;
        }
        if (EstadoDos == true){
            EstadoDosValor = OpcionDos;
        }
        if (EstadoTres == true){
            EstadoTresValor = OpcionTres;
        }
        if (EstadoCuatro == true){
            EstadoCuatroValor = OpcionCuatro;
        }
        if (EstadoCinco == true){
            EstadoCincoValor = OpcionCinco;
        }
        if (EstadoSeis == true){
            EstadoSeisValor = OpcionSeis;
        }
        if (EstadoSiete == true){
            EstadoSieteValor = OpcionSiete;
        }

        MultipleValor = MultipleValor.concat(EstadoUnoValor,' ',EstadoDosValor,' ',EstadoTresValor,' ',EstadoCuatroValor,' ',EstadoCincoValor,' ',EstadoSeisValor,' ',EstadoSieteValor);

        setRespuestaMultiple(Multiple);
        setRespuestaMultipleValor(MultipleValor);
    }

    function MostrarResolucion(){
        const SeleccionOpcion = event => {
            setOpcion(event.target.value);
        };
        const SubirOpcion = event => {
            event.preventDefault();
            SubirRespuestaUnica(Opcion);
        };

        if (Tipo == 'Opcion Unica'){
            if (Clase == 'Dos Opciones'){
                return (
                    <div>
                        <h3 className="mt-2 mb-4">Question {Siguiente - 1}: {Pregunta}</h3>
                        <form onSubmit={SubirOpcion}>
                        <div className="form-check">
                            <label for="opc1">{OpcionUno}</label>
                            <input id="opc1" type="radio" name="react-tips" value="option1" checked={Opcion === "option1"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-check">
                            <label for="opc2">{OpcionDos}</label>
                            <input id="opc2" type="radio" name="react-tips" value="option2" checked={Opcion === "option2"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-group">
                            <button className="mt-4" type="submit">Submit Answer</button>
                        </div>
                        <div className="mt-4">
                            <p>Submitted Answer: {RespuestaUnica}</p>
                        </div>
                        </form>
                    </div>
                );
            }
            if (Clase == 'Tres Opciones'){
                return (
                    <div>
                        <h3 className="mt-2 mb-4">Question {Siguiente - 1}: {Pregunta}</h3>
                        <form onSubmit={SubirOpcion}>
                        <div className="form-check">
                            <label for="opc1">{OpcionUno}</label>
                            <input id="opc1" type="radio" name="react-tips" value="option1" checked={Opcion === "option1"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-check">
                            <label for="opc2">{OpcionDos}</label>
                            <input id="opc2" type="radio" name="react-tips" value="option2" checked={Opcion === "option2"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-check">
                            <label for="opc3">{OpcionTres}</label>
                            <input id="opc3" type="radio" name="react-tips" value="option3" checked={Opcion === "option3"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-group">
                            <button className="mt-4" type="submit">Submit Answer</button>
                        </div>
                        <div className="mt-4">
                            <p>Submitted Answer: {RespuestaUnica}</p>
                        </div>
                        </form>
                    </div>
                );
            }
            if (Clase == 'Cuatro Opciones'){
                return (
                    <div>
                        <h3 className="mt-2 mb-4">Question {Siguiente - 1}: {Pregunta}</h3>
                        <form onSubmit={SubirOpcion}>
                        <div className="form-check">
                            <label for="opc1">{OpcionUno}</label>
                            <input id="opc1" type="radio" name="react-tips" value="option1" checked={Opcion === "option1"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-check">
                            <label for="opc2">{OpcionDos}</label>
                            <input id="opc2" type="radio" name="react-tips" value="option2" checked={Opcion === "option2"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-check">
                            <label for="opc3">{OpcionTres}</label>
                            <input id="opc3" type="radio" name="react-tips" value="option3" checked={Opcion === "option3"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-check">
                            <label for="opc4">{OpcionCuatro}</label>
                            <input id="opc4" type="radio" name="react-tips" value="option4" checked={Opcion === "option4"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-group">
                            <button className="mt-4" type="submit">Submit Answer</button>
                        </div>
                        <div className="mt-4">
                            <p>Submitted Answer: {RespuestaUnica}</p>
                        </div>
                        </form>
                    </div>
                );
            }
            if (Clase == 'Cinco Opciones'){
                return (
                    <div>
                        <h3 className="mt-2 mb-4">Question {Siguiente - 1}: {Pregunta}</h3>
                        <form onSubmit={SubirOpcion}>
                        <div className="form-check">
                            <label for="opc1">{OpcionUno}</label>
                            <input id="opc1" type="radio" name="react-tips" value="option1" checked={Opcion === "option1"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-check">
                            <label for="opc2">{OpcionDos}</label>
                            <input id="opc2" type="radio" name="react-tips" value="option2" checked={Opcion === "option2"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-check">
                            <label for="opc3">{OpcionTres}</label>
                            <input id="opc3" type="radio" name="react-tips" value="option3" checked={Opcion === "option3"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-check">
                            <label for="opc4">{OpcionCuatro}</label>
                            <input id="opc4" type="radio" name="react-tips" value="option4" checked={Opcion === "option4"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-check">
                            <label for="opc5">{OpcionCinco}</label>
                            <input id="opc5" type="radio" name="react-tips" value="option5" checked={Opcion === "option5"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-group">
                            <button className="mt-4" type="submit">Submit Answer</button>
                        </div>
                        <div className="mt-4">
                            <p>Submitted Answer: {RespuestaUnica}</p>
                        </div>
                        </form>
                    </div>
                );
            }
        }
        if (Tipo == 'Opcion Multiple'){
            if (Clase == 'Cuatro Opciones'){
                return (
                    <div>
                        <h3 className="mt-2 mb-4">Question {Siguiente - 1}: {Pregunta}</h3>
                        <Checkbox label={OpcionUno} value={EstadoUno} onChange={handleChangeUno}/>
                        <Checkbox label={OpcionDos} value={EstadoDos} onChange={handleChangeDos}/>
                        <Checkbox label={OpcionTres} value={EstadoTres} onChange={handleChangeTres}/>
                        <Checkbox label={OpcionCuatro} value={EstadoCuatro} onChange={handleChangeCuatro}/>
                        <div className="form-group">
                            <button className="mt-4" type="submit" onClick={SubirRespuestaMultiple}>Submit Answer</button>
                        </div>
                        <div className="mt-4">
                            <p>Submitted Answers: {RespuestaMultipleValor}</p>
                        </div>
                    </div>
                );
            }
            if (Clase == 'Cinco Opciones'){
                return (
                    <div>
                        <h3 className="mt-2 mb-4">Question {Siguiente - 1}: {Pregunta}</h3>
                        <Checkbox label={OpcionUno} value={EstadoUno} onChange={handleChangeUno}/>
                        <Checkbox label={OpcionDos} value={EstadoDos} onChange={handleChangeDos}/>
                        <Checkbox label={OpcionTres} value={EstadoTres} onChange={handleChangeTres}/>
                        <Checkbox label={OpcionCuatro} value={EstadoCuatro} onChange={handleChangeCuatro}/>
                        <Checkbox label={OpcionCinco} value={EstadoCinco} onChange={handleChangeCinco}/>
                        <div className="form-group">
                            <button className="mt-4" type="submit" onClick={SubirRespuestaMultiple}>Submit Answer</button>
                        </div>
                        <div className="mt-4">
                            <p>Submitted Answers: {RespuestaMultipleValor}</p>
                        </div>
                    </div>
                );
            }
            if (Clase == 'Seis Opciones'){
                return (
                    <div>
                        <h3 className="mt-2 mb-4">Question {Siguiente - 1}: {Pregunta}</h3>
                        <Checkbox label={OpcionUno} value={EstadoUno} onChange={handleChangeUno}/>
                        <Checkbox label={OpcionDos} value={EstadoDos} onChange={handleChangeDos}/>
                        <Checkbox label={OpcionTres} value={EstadoTres} onChange={handleChangeTres}/>
                        <Checkbox label={OpcionCuatro} value={EstadoCuatro} onChange={handleChangeCuatro}/>
                        <Checkbox label={OpcionCinco} value={EstadoCinco} onChange={handleChangeCinco}/>
                        <Checkbox label={OpcionSeis} value={EstadoSeis} onChange={handleChangeSeis}/>
                        <div className="form-group">
                            <button className="mt-4" type="submit" onClick={SubirRespuestaMultiple}>Submit Answer</button>
                        </div>
                        <div className="mt-4">
                            <p>Submitted Answers: {RespuestaMultipleValor}</p>
                        </div>
                    </div>
                );
            }
            if (Clase == 'Siete Opciones'){
                return (
                    <div>
                        <h3 className="mt-2 mb-4">Question {Siguiente - 1}: {Pregunta}</h3>
                        <Checkbox label={OpcionUno} value={EstadoUno} onChange={handleChangeUno}/>
                        <Checkbox label={OpcionDos} value={EstadoDos} onChange={handleChangeDos}/>
                        <Checkbox label={OpcionTres} value={EstadoTres} onChange={handleChangeTres}/>
                        <Checkbox label={OpcionCuatro} value={EstadoCuatro} onChange={handleChangeCuatro}/>
                        <Checkbox label={OpcionCinco} value={EstadoCinco} onChange={handleChangeCinco}/>
                        <Checkbox label={OpcionSeis} value={EstadoSeis} onChange={handleChangeSeis}/>
                        <Checkbox label={OpcionSiete} value={EstadoSiete} onChange={handleChangeSiete}/>
                        <div className="form-group">
                            <button className="mt-4" type="submit" onClick={SubirRespuestaMultiple}>Submit Answer</button>
                        </div>
                        <div className="mt-4">
                            <p>Submitted Answers: {RespuestaMultipleValor}</p>
                        </div>
                    </div>
                );
            }
        }
        
    }

    function FinalizarExamen(){   
        var Index = Siguiente - 2;

        PreguntaActual = ExamenCreado[Index];

        if (Tipo == 'Opcion Unica'){
            PreguntaActual['_respuesta'] = RespuestaUnica;
        }
        if (Tipo == 'Opcion Multiple'){
            PreguntaActual['_respuesta'] = RespuestaMultiple;
        }
        ExamenCreado[Index] = PreguntaActual;

        setRespuestaUnica(null);
        setRespuestaMultiple(null);
        setEstadoUno(false);
        setEstadoDos(false);
        setEstadoTres(false);
        setEstadoCuatro(false);
        setEstadoCinco(false);
        setEstadoSeis(false);
        setEstadoSiete(false);

        setMostrarPregunta(current => !current);
        EnviarExamen();

        console.log(ExamenCreado);
    }

    const Navigate = useNavigate();
    const EnviarExamen = () => {
        Navigate('/revisarexamen',{state:ExamenCreado});
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="w-75 p-3">
                <body>
                    <br></br>
                    <h1>Exam</h1>
                    <div className="card mt-4" id="darExamen">        
                        <div className="card-body">
                            <div>
                                {MostrarIniciar && BotonIniciar()}
                            </div>
                            <div>
                                {MostrarPregunta && MostrarResolucion()}
                            </div>
                            <div>
                                {MostrarSiguiente && BotonSiguiente()}
                            </div>
                            <div>
                                {MostrarFinalizar && BotonFinalizar()}
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    )
}

export default Examen;