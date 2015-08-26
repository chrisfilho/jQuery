$(document).click(function() {
    $('#bola1').click(function() {
    	$(this).effect('bounce', {times:5}, 2000);
    });

	$('#bola2').click(function() {
    	$(this).effect("explode");
    });
    
    $('#bola3').click(function() {
    	$(this).effect('slide', {times:2}, 3000);
    });

 	$('#bola4').click(function() {
    	$(this).effect("fade");
    }); 

    $('#bola5').click(function() {
    	$(this).addClass('bola-azul');
    }); 
    
});