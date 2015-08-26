$(document).ready(function(){

	$("#closeBtn").click( function(){

		$("#lightbox").fadeOut();
	
	});


	$("#noBtn").click( function(){

		alert("Please come back when you're 21!")
	
	});

	 $(".circle").hover(function(){
		  $(this).css("width","70px")
		  
		 },function(){
		 	$(this).css("width","60px")
		 })

});

