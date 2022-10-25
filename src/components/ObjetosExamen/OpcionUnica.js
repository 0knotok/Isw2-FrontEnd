import Pregunta from "./Pregunta";

class UnicaDos extends Pregunta {
    constructor(){
        super('Opcion Unica','Dos Opciones','')
        this._opcion1 = 'Opcion 1';
        this._opcion2 = 'Opcion 2';
        this._respuesta = '';
    }

    get getopcion1(){
        return this._opcion1;
    }

    get getopcion2(){
        return this._opcion2;
    }

    set setopcion1(opcion1){
        this._opcion1 = opcion1;
    }

    set setopcion2(opcion2){
        this._opcion2 = opcion2;
    }

    verEstructura(){
        return (
            <div>
                <form>
                    <div>
                        <input type="radio" id="opc1" name="unicados" value="opc1"></input>
                        <label for="opc1">&nbsp;&nbsp;&nbsp;{this.getopcion1}</label>
                    </div>

                    <div>
                        <input type="radio" id="opc2" name="unicados" value="opc2"></input>
                        <label for="opc2">&nbsp;&nbsp;&nbsp;{this.getopcion2}</label>
                    </div>
                </form>
            </div>
        )
    }

}

class UnicaTres extends Pregunta {
    constructor(){
        super('Opcion Unica','Tres Opciones',null)
        this._opcion1 = 'Opcion 1';
        this._opcion2 = 'Opcion 2';
        this._opcion3 = 'Opcion 3';
        this._respuesta = '';
    }

    get getopcion1(){
        return this._opcion1;
    }

    get getopcion2(){
        return this._opcion2;
    }

    get getopcion3(){
        return this._opcion3;
    }

    set setopcion1(opcion1){
        this._opcion1 = opcion1;
    }

    set setopcion2(opcion2){
        this._opcion2 = opcion2;
    }

    set setopcion3(opcion3){
        this._opcion3 = opcion3;
    }

    verEstructura(){
        return (
            <div>
                <form>
                    <div>
                        <input type="radio" id="opc1" name="unicatres" value="opc1"></input>
                        <label for="opc1">&nbsp;&nbsp;&nbsp;{this.getopcion1}</label>
                    </div>
                    <div>
                        <input type="radio" id="opc2" name="unicatres" value="opc2"></input>
                        <label for="opc2">&nbsp;&nbsp;&nbsp;{this.getopcion2}</label>
                    </div>
                    <div>
                        <input type="radio" id="opc3" name="unicatres" value="opc3"></input>
                        <label for="opc3">&nbsp;&nbsp;&nbsp;{this.getopcion3}</label>
                    </div>
                </form>
            </div>
        )
    }
}

class UnicaCuatro extends Pregunta {
    constructor(){
        super('Opcion Unica','Cuatro Opciones',null)
        this._opcion1 = 'Opcion 1';
        this._opcion2 = 'Opcion 2';
        this._opcion3 = 'Opcion 3';
        this._opcion4 = 'Opcion 4';
        this._respuesta = '';
    }

    get getopcion1(){
        return this._opcion1;
    }

    get getopcion2(){
        return this._opcion2;
    }

    get getopcion3(){
        return this._opcion3;
    }

    get getopcion4(){
        return this._opcion4;
    }

    set setopcion1(opcion1){
        this._opcion1 = opcion1;
    }

    set setopcion2(opcion2){
        this._opcion2 = opcion2;
    }

    set setopcion3(opcion3){
        this._opcion3 = opcion3;
    }
    
    set setopcion4(opcion4){
        this._opcion4 = opcion4;
    }

    verEstructura(){
        return (
            <div>
                <form>
                    <div>
                        <input type="radio" id="opc1" name="unicacuatro" value="opc1"></input>
                        <label for="opc1">&nbsp;&nbsp;&nbsp;{this.getopcion1}</label>
                    </div>
                    <div>
                        <input type="radio" id="opc2" name="unicacuatro" value="opc2"></input>
                        <label for="opc2">&nbsp;&nbsp;&nbsp;{this.getopcion2}</label>
                    </div>
                    <div>
                        <input type="radio" id="opc3" name="unicacuatro" value="opc3"></input>
                        <label for="opc3">&nbsp;&nbsp;&nbsp;{this.getopcion3}</label>
                    </div>
                    <div>
                        <input type="radio" id="opc4" name="unicacuatro" value="opc4"></input>
                        <label for="opc4">&nbsp;&nbsp;&nbsp;{this.getopcion4}</label>
                    </div>
                </form>
            </div>
        )
    }
}

class UnicaCinco extends Pregunta {
    constructor(){
        super('Opcion Unica','Cinco Opciones',null)
        this._opcion1 = 'Opcion 1';
        this._opcion2 = 'Opcion 2';
        this._opcion3 = 'Opcion 3';
        this._opcion4 = 'Opcion 4';
        this._opcion5 = 'Opcion 5';
        this._respuesta = '';
    }

    get getopcion1(){
        return this._opcion1;
    }

    get getopcion2(){
        return this._opcion2;
    }

    get getopcion3(){
        return this._opcion3;
    }

    get getopcion4(){
        return this._opcion4;
    }

    get getopcion5(){
        return this._opcion4;
    }

    set setopcion1(opcion1){
        this._opcion1 = opcion1;
    }

    set setopcion2(opcion2){
        this._opcion2 = opcion2;
    }

    set setopcion3(opcion3){
        this._opcion3 = opcion3;
    }
    
    set setopcion4(opcion4){
        this._opcion4 = opcion4;
    }

    set setopcion5(opcion5){
        this._opcion5 = opcion5;
    }

    verEstructura(){
        return (
            <div>
                <form>
                    <div>
                        <input type="radio" id="opc1" name="unicacinco" value="opc1"></input>
                        <label for="opc1">&nbsp;&nbsp;&nbsp;{this.getopcion1}</label>
                    </div>
                    <div>
                        <input type="radio" id="opc2" name="unicacinco" value="opc2"></input>
                        <label for="opc2">&nbsp;&nbsp;&nbsp;{this.getopcion2}</label>
                    </div>
                    <div>
                        <input type="radio" id="opc3" name="unicacinco" value="opc3"></input>
                        <label for="opc3">&nbsp;&nbsp;&nbsp;{this.getopcion3}</label>
                    </div>
                    <div>
                        <input type="radio" id="opc4" name="unicacinco" value="opc4"></input>
                        <label for="opc4">&nbsp;&nbsp;&nbsp;{this.getopcion4}</label>
                    </div>
                    <div>
                        <input type="radio" id="opc5" name="unicacinco" value="opc5"></input>
                        <label for="opc5">&nbsp;&nbsp;&nbsp;{this.getopcion5}</label>
                    </div>
                </form>
            </div>
        )
    }
}

export { UnicaDos, UnicaTres, UnicaCuatro, UnicaCinco };