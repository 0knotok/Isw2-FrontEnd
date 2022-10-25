import Pregunta from "./Pregunta";

class MultipleCuatro extends Pregunta {
    constructor(){
        super('Opcion Multiple','Cuatro Opciones',null)
        this._opcion1 = 'Opcion 1';
        this._opcion2 = 'Opcion 2';
        this._opcion3 = 'Opcion 3';
        this._opcion4 = 'Opcion 4';
        this._respuesta = [0,0,0,0];
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
        return this._opcion;
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
                        <input type="checkbox" id="opc1" name="multiplecuatro" value="opc1"></input>
                        <label for="opc1">&nbsp;&nbsp;&nbsp;{this.getopcion1}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc2" name="multiplecuatro" value="opc2"></input>
                        <label for="opc2">&nbsp;&nbsp;&nbsp;{this.getopcion2}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc3" name="multiplecuatro" value="opc3"></input>
                        <label for="opc3">&nbsp;&nbsp;&nbsp;{this.getopcion3}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc4" name="multiplecuatro" value="opc4"></input>
                        <label for="opc4">&nbsp;&nbsp;&nbsp;{this.getopcion4}</label>
                    </div>
                </form>
            </div>
        )
    }
}

class MultipleCinco extends Pregunta {
    constructor(){
        super('Opcion Multiple','Cinco Opciones',null)
        this._opcion1 = 'Opcion 1';
        this._opcion2 = 'Opcion 2';
        this._opcion3 = 'Opcion 3';
        this._opcion4 = 'Opcion 4';
        this._opcion5 = 'Opcion 5';
        this._respuesta = [0,0,0,0,0];
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
        return this._opcion;
    }
    get getopcion4(){
        return this._opcion4;
    }
    get getopcion5(){
        return this._opcion5;
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
                        <input type="checkbox" id="opc1" name="multiplecinco" value="opc1"></input>
                        <label for="opc1">&nbsp;&nbsp;&nbsp;{this.getopcion1}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc2" name="multiplecinco" value="opc2"></input>
                        <label for="opc2">&nbsp;&nbsp;&nbsp;{this.getopcion2}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc3" name="multiplecinco" value="opc3"></input>
                        <label for="opc3">&nbsp;&nbsp;&nbsp;{this.getopcion3}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc4" name="multiplecinco" value="opc4"></input>
                        <label for="opc4">&nbsp;&nbsp;&nbsp;{this.getopcion4}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc5" name="multiplecinco" value="opc5"></input>
                        <label for="opc5">&nbsp;&nbsp;&nbsp;{this.getopcion5}</label>
                    </div>
                </form>
            </div>
        )
    }
}

class MultipleSeis extends Pregunta {
    constructor(){
        super('Opcion Multiple','Seis Opciones',null)
        this._opcion1 = 'Opcion 1';
        this._opcion2 = 'Opcion 2';
        this._opcion3 = 'Opcion 3';
        this._opcion4 = 'Opcion 4';
        this._opcion5 = 'Opcion 5';
        this._opcion6 = 'Opcion 6';
        this._respuesta = [0,0,0,0,0,0];
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
        return this._opcion;
    }
    get getopcion4(){
        return this._opcion4;
    }
    get getopcion5(){
        return this._opcion5;
    }
    get getopcion6(){
        return this._opcion6;
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
    set setopcion6(opcion6){
        this._opcion6 = opcion6;
    }

    verEstructura(){
        return (
            <div>
                <form>
                    <div>
                        <input type="checkbox" id="opc1" name="multipleseis" value="opc1"></input>
                        <label for="opc1">&nbsp;&nbsp;&nbsp;{this.getopcion1}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc2" name="multipleseis" value="opc2"></input>
                        <label for="opc2">&nbsp;&nbsp;&nbsp;{this.getopcion2}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc3" name="multipleseis" value="opc3"></input>
                        <label for="opc3">&nbsp;&nbsp;&nbsp;{this.getopcion3}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc4" name="multipleseis" value="opc4"></input>
                        <label for="opc4">&nbsp;&nbsp;&nbsp;{this.getopcion4}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc5" name="multipleseis" value="opc5"></input>
                        <label for="opc5">&nbsp;&nbsp;&nbsp;{this.getopcion5}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc6" name="multipleseis" value="opc6"></input>
                        <label for="opc6">&nbsp;&nbsp;&nbsp;{this.getopcion6}</label>
                    </div>
                </form>
            </div>
        )
    }
}

class MultipleSiete extends Pregunta {
    constructor(){
        super('Opcion Multiple','Siete Opciones',null)
        this._opcion1 = 'Opcion 1';
        this._opcion2 = 'Opcion 2';
        this._opcion3 = 'Opcion 3';
        this._opcion4 = 'Opcion 4';
        this._opcion5 = 'Opcion 5';
        this._opcion6 = 'Opcion 6';
        this._opcion7 = 'Opcion 7';
        this._respuesta = [0,0,0,0,0,0,0];
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
        return this._opcion;
    }
    get getopcion4(){
        return this._opcion4;
    }
    get getopcion5(){
        return this._opcion5;
    }
    get getopcion6(){
        return this._opcion6;
    }
    get getopcion7(){
        return this._opcion7;
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
    set setopcion6(opcion6){
        this._opcion6 = opcion6;
    }
    set setopcion7(opcion7){
        this._opcion7 = opcion7;
    }

    verEstructura(){
        return (
            <div>
                <form>
                    <div>
                        <input type="checkbox" id="opc1" name="multiplesiete" value="opc1"></input>
                        <label for="opc1">&nbsp;&nbsp;&nbsp;{this.getopcion1}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc2" name="multiplesiete" value="opc2"></input>
                        <label for="opc2">&nbsp;&nbsp;&nbsp;{this.getopcion2}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc3" name="multiplesiete" value="opc3"></input>
                        <label for="opc3">&nbsp;&nbsp;&nbsp;{this.getopcion3}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc4" name="multiplesiete" value="opc4"></input>
                        <label for="opc4">&nbsp;&nbsp;&nbsp;{this.getopcion4}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc5" name="multiplesiete" value="opc5"></input>
                        <label for="opc5">&nbsp;&nbsp;&nbsp;{this.getopcion5}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc6" name="multiplesiete" value="opc6"></input>
                        <label for="opc6">&nbsp;&nbsp;&nbsp;{this.getopcion6}</label>
                    </div>

                    <div>
                        <input type="checkbox" id="opc7" name="multiplesiete" value="opc7"></input>
                        <label for="opc7">&nbsp;&nbsp;&nbsp;{this.getopcion7}</label>
                    </div>
                </form>
            </div>
        )
    }
}

export { MultipleCuatro, MultipleCinco, MultipleSeis, MultipleSiete };