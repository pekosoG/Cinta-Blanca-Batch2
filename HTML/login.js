function x(){
    //Aqui llamamos la funcion que valida
    if(y()){
        alert('eh que pedo, y el correo/pass=?');
        $('body').css({'background-color':'rgba(256,0,0,.5)'});
    }
    else{
        $('body').css({'background-color':'rgba(0,256,0,1)'});
    }
}

/*
    Funcion sin parametros que nos regresa true o false
*/
function y(){
    let _123=document.getElementById('elCorreo').value;
    let _321=document.getElementById('elPassword').value;

    //Aqui nos regresa true o false
    return (_123.length==0 ||_321.length==0);
}