var timer;
var number = 5;
var intervalId;
var miliseconds=6000;
var selection="";
var right=$(".right");
var wrong=$(".wrong");
var wrong;

$(".question1").hide();
$(".question2").hide();
$(".question3").hide();
$(".question4").hide();
$("#score").hide();
$("#wrongAnswer").hide();
$("#rightAnswer").hide();
$("#newZealand").hide();


$(".timer").html("You have : " + number + " seconds!");
$("#start").click(function(){

$("#start").hide();



//countdown begins to answer question #1

timer();
$(".question1").show()//timer function will hide first question and show answer page

//when game button is clicked.....
$(".game").click(function(){
				//if game button equals right answer
				selection=$(this);
				console.log(selection);
				//show div that confirms right answer 
				if(selection.hasClass("right")){
				$("#rightAnswer").show();
				//$("#newZealand").show()//giphy
				$(".question1").hide();
				}
				//if the user selects the wrong button
				 else if (selection.hasClass("wrongAnswer"))
				{	
					$(".question1").hide();
					$("#wrongAnswer").show();
				}
				else{
					console.log("You run out of time!");
					$("#rightAnswer").show();
					stop();
				}	
					
			})

// **********countdown begins to answer question #2
var hide1=setTimeout(q1countDown,miliseconds);

function q1countDown(){
	
	$(".question1").hide()
	number =6;
	timer();
	$(".question2").show()//show question for 90 seconds
//users pick answer

			// $(".game").click(function(){
			// 	console.log("this button works!");
			// 	selection=$(this);

			// 	if(selection===right){
			// 	$("#rightAnswer").show();

			// 	}
			
			// })




	// **********countdown begins to answer question #3
	var hide2=setTimeout(q2countDown,miliseconds);
		function q2countDown(){
			 number =6;
			timer();
			$(".question2").hide();
			$(".question3").show();

			//***********countdown begins to answer question #3
			var hide3=setTimeout(q3countDown,miliseconds);
				function q3countDown(){
					number =6;
					timer();
					$(".question3").hide();
					$(".question4").show();
					//countdown begins to answer question #4
					var hide3=setTimeout(q4countDown,miliseconds);
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



});





//this is the timer function
  function timer() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
    
      number--;

      $(".timer").html("You have : " + number + " seconds!");

      if (number === 0) {
      	$(".timer").html("Times up!");

        stop();

      //  alert("Time Up!");
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    




