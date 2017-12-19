
var timer;


$(".question1").hide();
$(".question2").hide();
$(".question3").hide();
$(".question4").hide();
$("#score").hide();



$("#start").click(function(){

$("#start").hide();


//timer function will hide first question and show answer page

$(".question1").show()
//countdown begins to answer question #1
var hide1=setTimeout(q1countDown,3000);

function q1countDown(){
	
	$(".question1").hide()
	$(".question2").show()
	// countdown begins to answer question #2
	var hide2=setTimeout(q2countDown,3000);
	function q2countDown(){
	$(".question2").hide();
	$(".question3").show();
	//countdown begins to answer question #3
	var hide3=setTimeout(q3countDown,3000);
	function q3countDown(){
	$(".question3").hide();
	$(".question4").show();
	//countdown begins to answer question #4
	var hide3=setTimeout(q4countDown,3000);
	function q4countDown(){
	$(".question4").hide();
	//code to display code
	$("#score").show();
	



}

}

}	

}


//this is the timer function
function timer(){

	var count =5;

	setTimeout(function(){

		count--;
	$(".timer").text(count);
	},5000)

}






})