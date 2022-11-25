class CursoOb{
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
}
export default CursoOb;