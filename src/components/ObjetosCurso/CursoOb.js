class Curso{
    //Recibe id, nombre y porcentaje.
    constructor(id,nombre,ptj){
        this.id = id;
        this.nombre = nombre;
        this.ptj = ptj;
    }

    get getid(){
        return this.id;
    }
    get getnombre(){
        return this.nombre;
    }
    get getptj(){
        return this.ptj;
    }
    set setid(id){
        this.id = id;
    }
    set setnombre(nombre){
        this.nombre = nombre;
    }
    set setptj(ptj){
        this.ptj = ptj;
    }

    verCurso(){
        return (
            <div className="card m-2">
            <div className="card-body">
        
              <h5 className="card-title text-center mb-5 mt-3">{this.nombre}</h5>
              <div className="progress">
              
                <div className="progress-bar" role="progressbar" style={{width: `${this.ptj}`}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>{this.ptj}</div>
              </div>
              <div className="mt-4 mb-2 d-flex justify-content-between text-center">
                <Link to={'/curso?id_curso='+ this.id+'&nombre_curso='+this.nombre}>
                  <a className="btn btn-light text-center" style={{width: '100%'}}>Go to the course</a>
                </Link>
              </div>
              <img className="card-img-top" src="../img/illustration-teacher-students.jpeg" alt="Card image cap" />
            </div>
            </div>
        )
    }
}
export {Curso};