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

for(i=0; i<cinta_blanca.length; i++){
    let h1=$('<h1>'+'Este wei se llama '+cinta_blanca[i].nombre+' y tiene '+cinta_blanca[i].edad+' años'+'</h1>');
    $('#elBody').append(h1);
}