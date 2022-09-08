import React from 'react'
import { Link } from 'react-router-dom'
export default function Curso() {
  return (
    <div className="card m-2">
    <div className="card-body">
<<<<<<< HEAD
      <h5 className="card-title text-center mb-5">Course Name</h5>
=======
      <h5 className="card-title text-center mb-5">COURSE NAME</h5>
>>>>>>> 71d70beb582682cbde8f50aa34964f201aea1aac
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
      </div>
      <div className="mt-4 mb-2 d-flex justify-content-between">
        <a href="#" className="btn btn-light" style={{width: '48%'}}>See summary</a>
        <Link to='/curso'>
          <a href="#" className="btn btn-light" style={{width: '100%'}}>Go to the course</a>
        </Link>
      </div>
      <img className="card-img-top" src="../img/illustration-teacher-students.jpeg" alt="Card image cap" />
    </div>
<<<<<<< HEAD
    <Link to='/evaProfe'>
      <span className='small'>Review your teacher</span>
=======
    <Link className='mb-2 d-flex justify-content-center' to='/evaProfe'>
      <button className='btn btn-primary' type='button'>Rate your teacher</button>
>>>>>>> 71d70beb582682cbde8f50aa34964f201aea1aac
    </Link>

  </div>


  )
}
