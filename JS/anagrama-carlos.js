console.time('test');
let array1 = ['o', 'm', 'a','r'];    
let array2 = ['r', 'a', 'm','o'];
perro=0;
gato=0;
array1.sort();
console.log(array1);
array2.sort();
console.log(array2);
perro=array1.join();
gato=array2.join();

if (perro.length==gato.length){
   console.log('tienen el mismo tamanio');
}
else{   
   console.log('No tienen el mismo tamanio');
}
if (perro==gato){
   console.log("es anagrama");
}
else {
   console.log('no es un anagrama');
}

console.timeEnd('test');