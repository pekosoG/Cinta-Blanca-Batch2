console.time('test');

let Anagram1="RoMa";
let Anagram2="rOmA";

let estado= true;

// Omar  => OMAR
Anagram1 = Anagram1.toLocaleUpperCase();
Anagram2 = Anagram2.toLocaleUpperCase();

// OMAR => [O,M,A,R]
Anagram1 = Anagram1.split("");
Anagram2 = Anagram2.split("");

// [O,M,A,R] => [A,M,O,R]
Anagram1 = Anagram1.sort();
Anagram2 = Anagram2.sort();

if (Anagram1.length != Anagram2.length){
   console.log("No tienen el mismo numero de letras");
}
else{
   for(x=0;x<Anagram1.length;x++){
       if(estado === true){
           if(Anagram1[x] != Anagram2[x]){
               estado = false;
               break;
           }
       }
   }
   if (estado===false){
       console.log("No son Anagramas")
   }
   else{
       console.log("Son Anagramas")
   }
}

console.timeEnd('test');