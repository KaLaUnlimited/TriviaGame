
//var timer;
var number = 5;
var intervalId;
var miliseconds=5000;

$(".question1").hide();
$(".question2").hide();
$(".question3").hide();
$(".question4").hide();
$("#score").hide();
$("#wrongAnswer").hide();



$("#start").click(function(){

$("#start").hide();


//timer function will hide first question and show answer page
timer();
$(".question1").show()
//countdown begins to answer question #1

var hide1=setTimeout(q1countDown,6000);

function q1countDown(){
	
	$(".question1").hide()
	number =6;
	timer();
	$(".question2").show()
	// countdown begins to answer question #2
	var hide2=setTimeout(q2countDown,6000);
		function q2countDown(){
			 number =6;
			timer();
			$(".question2").hide();
			$(".question3").show();
			//countdown begins to answer question #3
			var hide3=setTimeout(q3countDown,6000);
				function q3countDown(){
					number =6;
					timer();
					$(".question3").hide();
					$(".question4").show();
					//countdown begins to answer question #4
					var hide3=setTimeout(q4countDown,6000);
						function q4countDown(){
							number =6;
							timer();
							$(".question4").hide();
							//code to display code
								$("#score").show();
	



}

}

}	

}


//this is the timer function
  function timer() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
    
      number--;

      $(".timer").html("You have : " + number + " seconds!");

      if (number === 0) {

        stop();

      //  alert("Time Up!");
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    






})