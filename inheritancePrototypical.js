//2. definimos el constructor de shape

function Shape(){
    Shape.prototype.duplicate = function(){
    console.log ('Duplicar');
    }
}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype=Object.create(Shape.prototype) // returns a object que hereda a la shape base CREATE
// cuando heredamos el prototype, es como resetear el constructor, es por eso que el constructor
// del circulo es igual al del shape. Hay que resetear el constructor del circulo tambien

Circle.prototype.constructor = Circle; 


Circle.prototype.draw = function () {
    console.log('Dibujo');
}

// aplicamos herencia de un circulo a un cuadrado



const cuadrado = new Shape();
const circulo = new Circle(1);