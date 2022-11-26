import React, { useState } from "react";


export default function Comentarios (props){
    const[comentario, setcomentario] = useState("");
    const[comenDisplay, setComenDisplay] = useState("");

    function handleChangeComentario(event){
        event.preventDefault();
        setComenDisplay(comentario);
        setcomentario("");
    }

    return (
        <div className="card mx-3 my-3">
            <div className="card-body ">
                <h5 className="card-title text-center mb-2 mt-3">{props.nombre}</h5>
                <div className="text-center my-4">{comenDisplay}</div>
                <div className="row">
                    <div className="col-9">
                        <input className="form-control" type="text" placeholder="Ingrese comentario" onChange={e => setcomentario(e.target.value)} value={comentario}></input>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-primary ml-2 align-items-center" onClick={e =>handleChangeComentario(e)}> Enviar </button>
                    </div>
                </div>
            </div>
        </div>
    )

}