import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

var ExamenCreado = [];

function RevisarExamen(){

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
    const [Respuesta, setRespuesta] = useState("");

    const [RespuestaUnica, setRespuestaUnica] = useState("");

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
        setRespuesta(P._respuesta);
    }

    const [MostrarIniciar, setMostrarIniciar] = useState(true);
    const [MostrarPregunta, setMostrarPregunta] = useState(false);
    const [MostrarSiguiente, setMostrarSiguiente] = useState(false);
    const [MostrarFinalizar, setMostrarFinalizar] = useState(false);
    const [MostrarResultado, setMostrarResultado] = useState(false);

    function IniciarExamen(){
        LeerActual(Pregunta1);
        setSiguiente(Siguiente + 1);
        setMostrarIniciar(current => !current);
        setMostrarPregunta(current => !current);
        setMostrarSiguiente(current => !current);
    }

    function BotonIniciar(){
        return (
            <div>
                <button className="mt-2 mb-2 btn btn-primary" onClick={IniciarExamen}>Start Review</button>
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
                <a className="mt-2 mb-2 btn btn-secondary" onClick={FinalizarExamen}>Finish Review</a>
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
        PreguntaActual['_revision'] = RespuestaUnica;

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
        console.log(ExamenCreado);
    }

    const [Opcion, setOpcion] = useState('');

    function SubirRespuestaUnica(O){
        if (O == 'option1'){
            setRespuestaUnica('Correct');
        }
        if (O == 'option2'){
            setRespuestaUnica('Incorrect');
        }
    }

    function MostrarResolucion(){
        const SeleccionOpcion = event => {
            setOpcion(event.target.value);
        };
        const SubirOpcion = event => {
            event.preventDefault();
            SubirRespuestaUnica(Opcion);
        };
        
        var RespuestaValor = '';

        if (Tipo == 'Opcion Unica'){
            RespuestaValor = Respuesta;
        }

        if (Tipo == 'Opcion Multiple'){
            var RespuestaArray = [];
            RespuestaArray = Respuesta;

            var EstadoUnoValor = '';
            var EstadoDosValor = '';
            var EstadoTresValor = '';
            var EstadoCuatroValor = '';
            var EstadoCincoValor = '';
            var EstadoSeisValor = '';
            var EstadoSieteValor = '';
            var MultipleValor = '';

            if (RespuestaArray[0] == true){
                EstadoUnoValor = OpcionUno;
            }
            if (RespuestaArray[1] == true){
                EstadoDosValor = OpcionDos;
            }
            if (RespuestaArray[2] == true){
                EstadoTresValor = OpcionTres;
            }
            if (RespuestaArray[3] == true){
                EstadoCuatroValor = OpcionCuatro;
            }
            if (RespuestaArray[4] == true){
                EstadoCincoValor = OpcionCinco;
            }
            if (RespuestaArray[5] == true){
                EstadoSeisValor = OpcionSeis;
            }
            if (RespuestaArray[6] == true){
                EstadoSieteValor = OpcionSiete;
            }

            MultipleValor = MultipleValor.concat(EstadoUnoValor,' ',EstadoDosValor,' ',EstadoTresValor,' ',EstadoCuatroValor,' ',EstadoCincoValor,' ',EstadoSeisValor,' ',EstadoSieteValor);
            RespuestaValor = MultipleValor;
        }

        return (
            <div>
                <h3 className="mt-2 mb-4">Question {Siguiente - 1}: {Pregunta}</h3>
                <div>
                    <p>Opciones:</p>                        
                    <p>{OpcionUno}</p>
                    <p>{OpcionDos}</p>
                    <p>{OpcionTres}</p>
                    <p>{OpcionCuatro}</p>
                    <p>{OpcionCinco}</p>
                </div>
                <div>
                    <br></br>
                    <h5>Submitted Answer: {RespuestaValor}</h5>
                </div>
                <div>
                    <br></br>
                    <form onSubmit={SubirOpcion}>
                        <div className="form-check">
                            <label for="opc1">Correct</label>
                            <input id="opc1" type="radio" name="react-tips" value="option1" checked={Opcion === "option1"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-check">
                            <label for="opc2">Incorrect</label>
                            <input id="opc2" type="radio" name="react-tips" value="option2" checked={Opcion === "option2"} onChange={SeleccionOpcion} className="form-check-input"/>
                        </div>
                        <div className="form-group">
                            <button className="mt-4" type="submit">Submit Review:</button>
                        </div>
                        <div className="mt-4">
                            <p>Submitted Review: {RespuestaUnica}</p>
                        </div>
                    </form>
                </div>
                <br></br>
            </div>
        );
    }

    function FinalizarExamen(){   
        var Index = Siguiente - 2;

        PreguntaActual = ExamenCreado[Index];

        PreguntaActual['_revision'] = RespuestaUnica;

        ExamenCreado[Index] = PreguntaActual;
        setMostrarPregunta(current => !current);

        console.log(ExamenCreado);
        setMostrarResultado(true);
    }

    function Resultado(){
        var ExamenCorregido = ExamenCreado;
        var Longitud = ExamenCorregido.length;
        var Aciertos = 0;

        for (var i = 0; i < Longitud; i++){
            var PreguntaCorregida = ExamenCorregido[i];
            if (PreguntaCorregida['_revision'] == 'Correct'){
                Aciertos = Aciertos + 1;
            }
        }

        var Nota = Aciertos / Longitud * 20;

        return (
            <div>
                <br></br>
                <h6>Student Grupo 5 has got {Aciertos} correct answers from {Longitud} questions.</h6>
                <br></br>
                <h4>Name: Nombre del Alumno</h4>
                <br></br>
                <h4>Course: Curso del Alumno</h4>
                <br></br>
                <h4>Correct Answers: {Aciertos} / {Longitud}</h4>
                <br></br>
                <h4>Score: {Nota} / 20</h4>
            </div>
        )
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="w-75 p-3">
                <body>
                    <Navbar/>
                    <br></br>
                    <h1>Exam Review</h1>
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
                            <div>
                                {MostrarResultado && Resultado()}
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    )
}

export default RevisarExamen;