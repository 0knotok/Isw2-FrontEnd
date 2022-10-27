import React from 'react'
import { Link } from 'react-router-dom'

export default function Foro() {
  return (
    <div className="card m-2">
    <div className="card-body">
      <h5 className="card-title text-center mb-4">Forum</h5>
      <p className="card-title text-center"> <Link to='/foro'><button className='btn btn-success'>Go to the Forum</button></Link> </p>
    </div>
    <img className="card-img-top" src="../img/illustration-teacher-students.jpeg" alt="Card image cap" />
  </div>
  )
}
