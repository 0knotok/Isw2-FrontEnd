import React from 'react'
import { Link } from 'react-router-dom'
export default function Curso(props) {

  return (
    <div className="card m-2">
    <div className="card-body">

      <h5 className="card-title text-center mb-5 mt-3">{props.nombre}</h5>
      <div className="progress">
      
        <div className="progress-bar" role="progressbar" style={{width: `${props.ptj}`}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>{props.ptj}</div>
      </div>
      <div className="mt-4 mb-2 d-flex justify-content-between">
        <a className="btn btn-light" style={{width: '48%'}}>See summary</a>
        <Link to={'/curso?id_curso='+ props.id+'&nombre_curso='+props.nombre}>
          <a className="btn btn-light" style={{width: '100%'}}>Go to the course</a>
        </Link>
      </div>
      <img className="card-img-top" src="../img/illustration-teacher-students.jpeg" alt="Card image cap" />
    </div>
  </div>
  )
}


