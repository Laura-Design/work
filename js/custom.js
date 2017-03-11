$(document).ready(function(){
  $('.btn-scroll-down').click(function(){
   	$('html,body').animate({scrollTop:$('#page').offset().top}, 800,"easeInOutExpo");
  });
});