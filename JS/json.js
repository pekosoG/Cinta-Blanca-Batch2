
let cinta_blanca = [
    {
        'nombre':'Omar',
        'edad':24
    },
    {
        'nombre':'Francisco',
        'edad':39
    },
    {
        'nombre':'Nora',
        'edad':24
    },
    {
        'nombre':'Carlos',
        'edad':24
    }
]

let sujeto={
    'nombre':'Israel',
    'edad':25
}
//console.log(cinta_blanca);
cinta_blanca.push(sujeto);

console.log(sujeto);

console.log('Este wei se llama '+cinta_blanca[1].nombre+
            ' y tiene '+cinta_blanca[1].edad+' años');
            

for(i=0;i<cinta_blanca.length;i++)
    console.log('Este wei se llama '+cinta_blanca[i].nombre+' y tiene '+cinta_blanca[i].edad+' años');

//console.log(cinta_blanca);