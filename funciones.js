function suma(){
    let total='';
    for (let value of arguments)
        total += value;
    return total;
    //console.log(arguments);
    
}

console.log(suma('a','b'));

///// Rest operator ...

function sum(descuento, ...precios){
    const total = precios.reduce((a,b)=>a+b);
    return total * (1 - descuento);

}

console.log(sum(0.50,2,3,4,5,10))

////// Default parameters

//function interest(principal, rate, years){
//    return principal * rate / 100 * years;

//}
//console.log(interest(10000,3.5,5));

function interest(principal, rate = 3.5, years=5){
   return principal * rate / 100 * years;
}

console.log(interest(10000,));

///// Getters and setters

// const person = {
//     firstName: 'Juan',
//     lastName: 'Perez',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     },

//     set fullName(value){
//         const parts = value.split(' ');
//         this.firstName = parts [0];
//         this.lastName = parts [1];
//     }
// }

// person.fullName = 'Luis Suarez';

// console.log(person);


///// Try and Catch

// const person = {
//     firstName: 'Juan',
//     lastName: 'Perez',
//     set fullName(value){
//         if (typeof value !== 'string') return;
//             throw new Error ("Valor no es un string");
//         const parts = value.split(' ');
//         this.firstName = parts [0];
//         this.lastName = parts [1];
//     }
// }

// try{
//     person.fullName=null;
// }
// catch (e){
//     alert(e);
// }

// person.fullName = 'Luis Suarez';

// console.log(person);

/////  Key word

const video = {
    title: 'a',
    tags:['a','b','c'],
    
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title,tag);
        });
    }
    }
;
video.showTags();

//// Exercise1

console.log(sum2([1,2,3,4,5]));



function sum2(...items ){
    if (items.length === 1 && Array.isArray(items[0]))
        items=[...items[0]];
    return items.reduce((a,b)=>a+b);
}

///// 
try{


const numbers5=[1,2,3,4,5,1,2,1];

const count=contarOcurrencias(null,1);

console.log(count);
}

catch (e){
    console.log(e.message);
}
function contarOcurrencias(array, searchElement){
    
    if (!Array.isArray(array))
        throw new Error('Invalid array');


    return array.reduce((accumulator, current)=>{
        const occurrence=(current==searchElement) ? 1 :0;
        console.log(accumulator,current,searchElement);
        return accumulator+occurrence;
    }, 0);
}















