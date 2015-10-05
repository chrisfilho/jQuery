$(document).ready(function() {
$("img").animate({marginLeft:"+=70px"},1000);
});

$(document).ready(function() {
$("#boll").animate({marginLeft:"+=200px"},1000);
});

$(document).ready(function() {
    $("#boll").ready(function() {
    	$(this).effect('bounce', {times:2}, 1000);
    });
      });