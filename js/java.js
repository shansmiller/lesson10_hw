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
		 });
	
	  	$("#item").hover(function(){
	  		$("#price").css("visibility", "visible");
	 		$(this).faddClass("hidden");


	 	 });
	  	$("#itemB").hover(function(){
	  		$("#priceB").css("visibility", "visible");
	 		$(this).addClass("hidden");


	 	 });

	  	$("#itemC").hover(function(){
	  		$("#priceC").css("visibility", "visible");
	 		$(this).addClass("hidden");

	 	 });
	  		$("#itemD").hover(function(){
	  		$("#priceD").css("visibility", "visible");
	 		$(this).addClass("hidden");

	 	 });


	  	$(".beerCircle").hover(function(){
	  		$(this).css("background-color", "black");
	 		$(this).css("background-color","#329406");
	 	});


}); //this should contain everything

