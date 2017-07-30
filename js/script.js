//custom js file

$(document).ready(function() {
	//parseInt(); is to convert the answer into an integer
	var age = parseInt(prompt("How old are you?"));

	if (age > 21) {
		$("#drinks").show();
	} else if (age === 21) {
		alert("Now don't go crazy!");
		$("#drinks").show();	
	} else {
		$("#under-21").show();
	}

	//alternative branch
  /*var over21 = confirm("Are you over 21? Click OK for yes or Cancel for no.");

    if (over21) {
          $('#drinks').show();
      } else {
          $('#under-21').show();
      }*/
           
    
});