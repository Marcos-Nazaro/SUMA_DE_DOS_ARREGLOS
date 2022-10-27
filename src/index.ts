/*
Sumar los elementos de cada una de las posiciones de dos arreglos y guardar 
el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/

let Arr1: number[] = new Array(6);
let Arr2: number[] = new Array(6);
let ArrSuma: number[] = new Array(6);

for (let i: number = 0; i < Arr1.length; i++){
  Arr1[i] = Number(prompt(`Ingrese la posicion ${i + 1} de ${Arr1.length}`));
  }
  
for (let i: number = 0; i < Arr2.length; i++) {
  Arr2[i] = Number(prompt(`Ingrese la posicion ${i + 1} de ${Arr2.length}`));
    }
    
  for (let i: number = 0; i < ArrSuma.length; i++) {
    ArrSuma[i] = Arr1[i] + Arr2[i];
  }
  console.log(ArrSuma);