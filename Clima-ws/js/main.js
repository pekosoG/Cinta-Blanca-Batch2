function buscale(){
    let ciudad=$('#input-ciudad').val();
    if(ciudad.trim().length>0){
        $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=0f40ca15b97954d021411d36147ac58b&units=metric`,(resp)=>{
            
            let tarjeta=$('.pre').clone()
            $(tarjeta).find('.ciudad').text(ciudad);
            $(tarjeta).find('.max').text(resp.main.temp_max+" C");
            $(tarjeta).find('.min').text(resp.main.temp_min+" C");
            $(tarjeta).removeClass('pre');
            $('.contenedor').prepend(tarjeta);
        });
    }
}