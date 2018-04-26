function elBotonazo(mensaje){
    alert(mensaje+","+mensaje.length);
}

function elDialogo(){
    let elNombre=document.getElementById('elNombre').value;
    elBotonazo('Que onda '+elNombre+', como andas?');
}