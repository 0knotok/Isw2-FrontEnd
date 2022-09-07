import React from 'react'
import Curso from "../components/Curso";
import Foro from "../components/Foro";
import Zoom from "../components/Zoom";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';  
import {FiSearch} from 'react-icons/fi'
import { NavLink } from 'react-router-dom';

export default function Portal() {
  return (
    <div class="d-flex justify-content-center">
      
<section className="w-75 p-3 ">
<Navbar/>
  <div className="mb-7">

  </div>
  <div className="mb-6">
    <h2 className="text-center">
      <small className="text-muted">Your student portal, NOMBRE</small>    
    </h2>
  </div>
  
  
  <div className="d-flex mt-6 justify-content-between">
    <div>
      <h1 className="font-weight-normal">My courses</h1>
    </div>
    <div>
      <div className="d-flex justify-content-end">
        <input type="search" id="form1" className="form-control" placeholder="Search" />
        <button type="button" className="btn btn-light ml-2 d-flex align-items-center">
          <FiSearch/>
        </button>
      </div>
    </div>
  </div>
  <div className="mt-4">
    <div className="d-flex justify-content-between mt-2">
      <div>
        <p className="text-primary">More courses</p>
      </div>
      <div>
        <select className="border-white" aria-label=".form-select-sm example" name id>
          <option value>All</option>
          <option value>In progress</option>
          <option value>Finished</option>
          <option value>Expired</option>
        </select>
      </div>
    </div>
    <div className="cursosEstudiante">
      <Curso/>
      <Curso/>
      <Curso/>
    </div>
    <div className="d-flex justify-content-between mt-5">
      <div>
        <h1 className="font-weight-normal">My communities</h1>
      </div>
    </div>
    <div className="cursosEstudiante">
      <Foro/>
      <Foro/>
      <Foro/>
    </div>
  </div>
  <Zoom/>
</section>
</div>
  )
}
