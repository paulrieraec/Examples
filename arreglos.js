//remove elements

const numbers=[1,2,3,4,5,6,7,8,9];

//at the end
const last=numbers.pop();
console.log(last);

//at the beginning
const last2=numbers.shift();
console.log(last2);

// in the middle
const last3=numbers.splice(2,2);
console.log(last3);

let numbers2=[1,2,3,4];
console.log(numbers);

//solution 1
numbers2=[];
console.log(numbers2);
//solution 2

numbers2.length=0;

//////combining an array

const first=[1,2,3];
const second=[4,5,6,7];

const combined1=first.concat(second);
first[0].id=10;

console.log(combined1);

const slice=combined1.slice(1,5 );
console.log(slice);

///// spread
const combined2=[...first,'a',...second,'b,'];
console.log(combined2);
//pone todos los elementos de un array en un nuevo array
const copy=[...combined2];
console.log(copy);

//////iterating an array

const numbers3=[1,2,3];

for (let number of numbers3)
console.log(number);
/*
numbers3.forEach(function(number){
    number++;
    console.log(number);
});

// otra forma
*/

numbers3.forEach((number,index)=> console.log(index));


///// Joining arrays

const numbers4=[1,2,3,4];

const joined=numbers4.join('     '); //devuelve un string
console.log(joined);

//split

const message='This is a message';
const parts=message.split(' ');

console.log(parts);

const combinado=parts.join('-');
console.log(combinado);


//sorting arrays

const numbers5=[1,2,3,6,8,5];

numbers5.sort();
console.log(numbers5);

numbers5.reverse();
console.log(numbers5);

const cursos=[
    {id:1, name:"Node.js"},
    {id:1, name:"javascript.js"}
    
]

cursos.sort(function(a,b){
    // if a<b => -1
    // if a>b => 1
    // a === b =>0
    const nameA=a.name.toLowerCase();
    const nameB=b.name.toLowerCase();

    if (nameA<nameB) return -1;
    if (nameA>nameB) return 1;
    return 0;
      
})

console.log(cursos);

/////// Testing elements of an array

const numbers6=[1,2,3,4,5];
const allPositive=numbers6.every(function(value){
 return value>=0;
})


console.log(allPositive);

///Mapping an array

const numbers7=[1,-1,2,3,4,5];

const filtered=numbers7.filter((n,indice)=>n>=0&& indice>1);

//const items=filtered.map(n=> '<li>'+n+'</li>' )



// hacemos join

//const html= items.join('~');
//console.log(html);

/////// 

const items=filtered.map(n=>{
    return {value:n};
    
})

console.log(items);


/// Reducing an array

const numbers9=[1,-1,2,3];

let sum = 0;
for (let n of numbers9)
sum+=n;

/// En lugar de usar el for
console.log(sum);
const total= numbers9.reduce((accumulator,currentValue)=> {
    return accumulator + currentValue},0);
console.log(total);
//el cero es la inicialización del acumulador


