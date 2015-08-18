$(function(){
	$( "img" ).draggable();
	 $('img').mouseout(function() {
	      $(this).animate({marginLeft: '+=100'},2000);
   }); 
})	




