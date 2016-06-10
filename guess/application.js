$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	$("#submit").click(function(){
		var user_guess = $("input[name=first_name]").val();
		if (user_guess==random_num) {
			alert("Congrats!");
		} else if (user_guess<random_num){
			alert("Guess Higher");
		} else {
			alert("Guess Lower");
		}
		$("input[name=first_name]").val("").focus();
	})
	$("#clear").click(function(){
	random_num = Math.floor((Math.random()*100) + 1);
	$("input[name=first_name]").val("").focus();
	


});
