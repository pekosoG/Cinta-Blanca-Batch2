function buscar(){
    if(validaInputs()){
        //Peticion al WS usando JQuery
        $.ajax({
            url:"https://maps.googleapis.com/maps/api/directions/json?origin="+$('#origen').val().trim()+"&destination="+$('#destino').val().trim(),
            dataType:'json',
            success:function(data){
                if(data.status=='OK'){
                    let resumen=$('<h5>'+data.routes[0].legs[0].duration.text+' ('+data.routes[0].legs[0].distance.text+')</h5>');
                    $('.contenedor').find('h5').remove();
                    $('.contenedor').append(resumen);

                    new google.maps.Marker({
                        position: data.routes[0].legs[0].start_location,
                        map: map
                    });

                    new google.maps.Marker({
                        position: data.routes[0].legs[0].end_location,
                        map: map
                    });

                    map.setZoom(8);
                    google.maps.event.trigger(map, 'resize');
                    map.setCenter(data.routes[0].legs[0].start_location);
                }
                else
                    alert('Error al hacer el request',data.status);
                
            },
            error:function(data){
                console.log('error',data);
            }
        });
    }
    else{
        alert('eh compa, te falta el origen/destino');
    }
}

/**
 * Funcion que me valida los inputs y me
 * regresa TRUE si ambos son mas largos que zero
 */
function validaInputs(){
    let origen=$('#origen').val().trim()
    let destino=$('#destino').val().trim();
    return origen.length>0 && destino.length>0;
}