
function Circle(radius) {

// Instance members
    this.radius = radius;
    this.move = function() {
        console.log('Move')
    }
}

// Prototype members

Circle.prototype.draw = function() {
    console.log('Dibujo') // para no incluir el metodo en el constructor, sino en el protoypo, automaticamente heredea del prototype
}

const c1 = new Circle(1);
const c2 = new Circle(2);

c2.draw();
/// Returns instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1){
    console.log(key);
}
//(c1.hasOwnProperties('radius'));  // retorna true porque radius es una propiedad intrinseca del circu
//(c1.hasOwnProperties('draw'));  // retorna false porque draw no es del circulo sino del prototype


//// AVOID EXTENDING THE BUILT-IN OBJECTS

