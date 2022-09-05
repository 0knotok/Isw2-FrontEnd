import React from 'react'

export default function Curso() {
  return (
    <div className="card m-2">
    <div className="card-body">
      <h5 className="card-title text-center mb-5">NOMBRE DEL CURSO</h5>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
      </div>
      <div className="mt-4 d-flex justify-content-between">
        <a href="#" className="btn btn-light" style={{width: '48%'}}>See summary</a>
        <a href="#" className="btn btn-light" style={{width: '48%'}}>Go to the course</a>
      </div>
    </div>
    <img className="card-img-top" src="../img/illustration-teacher-students.jpeg" alt="Card image cap" />
  </div>
  )
}
