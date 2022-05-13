
/*// Factory function

function createCircle (radius){
    return {
        radius, // No es necesarip poner radius:radius
        draw: function(){
            console.log('Dibujo');
        } 
    };
}


const circle1 = createCircle(3);
const circle2 = createCircle(4);

console.log(circle1);

/// Constructor function

function Circle(radius) {
    console.log('This' , this);
    this.radius = radius;
}   this.draw = function() {
    console.log('Dibujo constructor');
} 
const another = new Circle(10);

Circle.call({},1);
Circle.apply();

///// Value vs REference Types

let number = 10;
function increase(number) {
    number++;
}

increase(number);
console.log(number);

////// reference

let obj = {value:10}

function increases(obj){
    obj.value++;
}


increases(obj);
console.log(obj);
*/

//// Enumerating properties

function Circle(radius) {
    console.log('This' , this);
    this.radius = radius;
    this.draw = function() {
    console.log('Dibujo constructor');
    }
} 
const circle = new Circle(10);

for (let key in circle) // muestra un listado de las propiedades
    if (typeof circle[key] !== 'function') // [] notation, para ver los valores en la posici[on key]
    // para saber si un tipo de objeto estA en un objeto ponemos el typeof
    console.log(key, circle[key]);

const keys = Object.keys(circle);
console.log(keys);



if (`radius` in circle) // para saber si una propiedad estA en un objeto
    console.log(`Circle has a radius`);


function m


