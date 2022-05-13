let person = {name: "Luis", edad:25};


console.log(person);

for (let key in person)
console.log(Object.keys(person));


let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString'); 

console.log(descriptor)

Object.defineProperty(person, 'name',{
    writable: false,
    enumerable: false,
    configurable: false

});

person.name = 'Jhon';



/*
const printMyName = (name, id) => {
    console.log(name , id);

}

printMyName('Max','231231');

const mult = (number) => {
    return number * 2;
}


const mult2 = (number) => number * 2;

console.log(mult2(4));

/// Classes

class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        super();
        this.name = 'Max';
        this.gender='female';
    }
    printMyName() {
        console.log(this.name);
    }

}

const person = new Person();

person.printMyName();
person.printGender();

///// Spread and REst

const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person2 = {
    name: 'mAx'
};
const newPerson = {
    ...person2,
    age: 28
};

console.log(newPerson);

/////

const filter = (...args) => {
    return args.filter(element => element === 1);
}

console.log(filter(1,2,3, 1,2,3,1,2,1));


///// Destructuring

const numbers3 = [1,2,3,4,5];
///[num1, num2] = numbers3; obtenemos 1 y 2

[num1, ,num3] = numbers3; //obtenemos 1 y 3

console.log (num1, num3);


///// reference and primitive types

const number4 = 4;
const num2 = number4;

console.log(num2); /// por valor


const secondPerson=person;
console.log(secondPerson);

//person.name = 'Manuel'; // se copia el valor por referencia
                        // aun si el name se cambia, el valor
                        // sigue siendo el mismo


const thirdPerson = {
    ...person
};

person.name = 'Flash';

console.log(thirdPerson); // ahora no copia por referencia, sino
                            // copia exactamente el mismo valor del 
                            // objeto original



//// Map

const numbers4 = [1,2,3,4,5];

const doubleArray = numbers4.map((num) => {
    return num * 2;
})

console.log(numbers4);
console.log(doubleArray);

////// 


*/