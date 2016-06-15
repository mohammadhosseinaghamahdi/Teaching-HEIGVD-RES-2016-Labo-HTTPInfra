$(function() {
   console.log("Loading an aleatoire Number"); 
  
   function loadAleatoire(){ 
   $.getJSON( "/api/aleatoire/", function( aleatoire ) { 
      console.log( aleatoire); 
	     var message = aleatoire.randomNumber + " (" + aleatoire.lowerBound + "-" + aleatoire.upperBound + " )"; 
	  $( '#functionJQ' ).text(message);
	  
   });
 };
 loadAleatoire(); 
 setInterval( loadAleatoire, 500 ); 
});