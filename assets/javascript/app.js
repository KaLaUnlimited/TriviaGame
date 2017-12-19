



$(".question1").hide();
$(".question2").hide();
$(".question3").hide();
$(".question4").hide();




$("#start").click(function(){

$("#start").hide();


//timer function will hide first question and show answer page

$(".question1").show();
var hide1=setTimeout(q1countDown,3000);

function q1countDown(){
	
	$(".question1").hide()
	$(".question2").show()
	// count down to question #3
var hide2=setTimeout(q2countDown,3000);
	function q2countDown(){
	$(".question2").hide();
	$(".question3").show();

	var hide3=setTimeout(q3countDown,3000);
	function q3countDown(){
	$(".question3").hide();
	$(".question4").show();


}

}	

}



// hide #question 2
// var hide2=setTimeout(q2countDown,3000);
// 	function q2countDown(){
// 	$(".question2").hide();
// 	//$(".question3").show();
// 		//alert("testing2");
// }	


// var hide3=setTimeout(q3countDown,3000);
// 	function q3countDown(){
		
// 	$(".question3").show();
// 	//$(".question4").show();
// 	alert("testing2");


// 	}







})