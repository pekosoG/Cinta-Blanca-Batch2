let colors=[
    '#9400D3',
    '#4B0082',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
]

function init(){
    for(let i=1;i<10;i++){
        $('body').prepend('<div class="follow square" style="background-color:'+colors[Math.floor(Math.random()*6)+1]+'"></div>');
    }
}

$(document).ready(()=>{
    init();
    $('body').click(()=>{
        $('.follow').remove();
        init();
    });
    $('body').on('mousemove', function(e) {
        $('body').css({
            'background-color':colors[Math.floor(Math.random()*6)+1]
        });
        let x = (e.pageX - this.offsetLeft);
        let y = (e.pageY - this.offsetTop);
        
        $('.follow').each(function(index,element){
            setTimeout(function(){
                $(element).css({
                    'left': x+Math.floor(Math.random() * Math.floor(100)),
                    'top': y+Math.floor(Math.random() * Math.floor(100))
                });
            },300);
        })
    });
});