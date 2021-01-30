class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = 'soy un ' + this.especie  + ' tengo ' + this.edad + ' años y soy de color ' + this.color;
    }
    verInfo() {
        document.write(this.info + '<br>');
    }

}

class Perro extends Animal{
    constructor(especie, edad, color, raza) {
     super(especie,edad, color);
     this.raza = raza;
}
    ladrar()
    {
        alert("Guau");
    }

}


let perro = new Perro("perro", 12,"negro");
let gato = new Animal('gato', 1, 'amarillo');
let ave = new  Animal('pajaro', 3, 'verde');

perro.verInfo();
gato.verInfo();
ave.verInfo();
perro.ladrar();