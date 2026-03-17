let prueba1 = [1,2,3,4,5];

prueba1.push(6);

prueba1.unshift(0);

prueba1.pop();

prueba1.shift();
/* 
console.log(prueba1);

for (let elementos of prueba1){
    console.log(elementos);
} */

let arr = ["sal","tomate","arroz"];

arr.push("salsas");

for (let lemn of arr){
    console.log(lemn)
}

arr.shift("tomate");

console.log("-------------");
for (let lemn of arr){
    console.log(lemn)
}

console.log(arr.length)