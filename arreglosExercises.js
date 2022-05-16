const numbers=arrayFromRange(-10,4);

console.log(numbers);
function arrayFromRange(min, max){
    const arreglo=[];
    for(let i=0; i<=max-min;i++){
    arreglo[i]=min+i;
    //console.log(arreglo[i]);
    }
    return arreglo;
}

////

const numbers2=[1,2,3,4];
console.log(includes(numbers,4));

function includes(array, searchElement){
for (let element of array)
    if (element===searchElement)
    return true;
    return false;

}
//// Recibe dos arreglos, muestra el un arreglo menos los
//elementos del segundo arreglo

const numbers3=[1,2,3,4];
const output=except(numbers3,[1,2,3]);
console.log(output);

function except (arrayDeEntrada, excluded){
    const output=[];
    for (let cadaElemento of arrayDeEntrada)
        if (!excluded.includes(cadaElemento))
            output.push(cadaElemento);
        return output;
}
//// Moves an element of an array

const numbers4=[1,2,3,4,5];

const salida=move(numbers4,4,-2);

console.log(salida);

function move(array, index, offset){

    let position = index + offset;
    if (position >= array.length || position<0){
        console.error('Invalid offset')
        return; 
    }
    else{
        const output=[...array];
        const element=output.splice(index,1)[0];
        output.splice(position,0, element);
        return output;
    }
}

/// Contador de ocurrencias

const numbers5=[1,2,3,4,5,1,2,1];

const count=contarOcurrencias(numbers5,1);

console.log(count);

function contarOcurrencias(array, searchElement){
    
    return array.reduce((accumulator, current)=>{
        const occurrence=(current==searchElement) ? 1 :0;
        console.log(accumulator,current,searchElement);
        return accumulator+occurrence;
    }, 0);
}


//// Get max

const numbers6=[1,2,3,4,5,9];
const max = getMax (numbers6);
const max2 = getMax2 (numbers6);


console.log("maximo "+max);

console.log("maximo2 "+max2);

function getMax(array){
    let maximo=array[0];
    console.log(maximo);
    for (let i=1;i<=array.length; i++)
        if (array[i]>maximo)
         maximo=array[i];
    return maximo;
    }

// otra opcion con reduce

 function getMax2(array){
    /* if (array.length===0) 
        return undefined;
    array.reduce((accumulator,current)=>{
        if(current>accumulator) return current;
        return accumulator;
*/
    return array.reduce((a,b) => (a>b) ? a : b);
    
 }

 ///movies

 const movies=[
     {title: 'a', year:2018, rating:4.5},
     {title: 'b', year:2018, rating:4.7},
     {title: 'c', year:2018, rating:3},
     {title: 'd', year:2017, rating:4.5}
     
 ]

     // all  movies in 2018 with rating >4
     // Sort them by their rating
     // Descending order
     // Pick the title

const titulo=movies
    .filter(m => m.year === 2018 && m.rating >=4)
    .sort ((a,b) => a.rating - b.rating)
    .reverse()
    .map(m=>m.title)

console.log(titulo);