import React from 'react'
import { Link } from 'react-router-dom'
export default function Curso() {
  return (
    <div className="card m-2">
    <div className="card-body">
      <h5 className="card-title text-center mb-5">Course Name</h5>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
      </div>
      <div className="mt-4 d-flex justify-content-between">
        <a href="#" className="btn btn-light" style={{width: '48%'}}>See summary</a>
        <Link to='/curso'>
          <a href="#" className="btn btn-light" style={{width: '100%'}}>Go to the course</a>
        </Link>
      </div>
      <img className="card-img-top" src="../img/illustration-teacher-students.jpeg" alt="Card image cap" />
    </div>
    <Link to='/evaProfe'>
      <span className='small'>Review your teacher</span>
    </Link>

  </div>


  )
}
