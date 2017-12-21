var timer;
var number = 5;
var intervalId;
var miliseconds=6000;
var selection=false;
var right=$(".right");
var wrong=$(".wrong");
var wrong;
var right;
var noAnswer;
var number2 =3;

$(".question1").hide();
$(".question2").hide();
$(".question3").hide();
$(".question4").hide();
$("#score").hide();
$("#wrongAnswer").hide();
$("#rightAnswer").hide();
$("#newZealand").hide();


////start button to start the game
$("#start").click(function(){
$(".timer").html("You have : " + number + " seconds!");

right=0;
wrong=0;
noAnswer=0;
$("#start").hide();



//countdown begins to answer question #1

timer();
$(".question1").show()//timer function will hide first question and show answer page

//when game button is clicked.....

$(".game").click(function(){
				//if game button equals right answer
				selection=$(this);
				console.log(typeof selection);

				console.log(selection);
				//show div that confirms right answer 
				if(selection.hasClass("right")){
				$("#rightAnswer").show();
				//$("#newZealand").show()//giphy
				$(".question1").hide();
				right++;
				//stop();
				}
				//if the user selects the wrong button
				if  (selection.hasClass("wrongAnswer"))
				{	
					$(".question1").hide();
					$("#wrongAnswer").show();
					wrong++;
				//stops the timer to go to the next question
					stop();
				}

				 	
		})
				
				

// // **********countdown begins to answer question #2
setTimeout(q1countDown,miliseconds);

function q1countDown(){
	$("#rightAnswer").hide();
	$(".question1").hide();
	number =6;
	timer();
	$(".question2").show();//show question for 90 seconds

$(".game").click(function(){
				//if game button equals right answer
				selection=$(this);
				console.log(typeof selection);

				console.log(selection);
				//show div that confirms right answer 
				if(selection.hasClass("right")){
				$("#rightAnswer").show();
				//$("#newZealand").show()//giphy
				$(".question2").hide();
				right++;
				stop();
				}
				//if the user selects the wrong button
				if  (selection.hasClass("wrongAnswer"))
				{	
					$(".question2").hide();
					$("#wrongAnswer").show();
					wrong++;
					stop();
				}

				 	
		})




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
								score();
								//$("#score").show();
	



}

}

}	

}


//////end of start button semi-colon
});





//this is the timer function
  function timer() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
    
      number--;

      $(".timer").html("You have : " + number + " seconds!");

      if (number === 0) {
      	//setTimeout(ShowAnswer,5000);
      	$("#rightAnswer").show();
      	$(".question1").hide();
      //	$(".timer").html("Times up!");
      noAnswer++;
        stop();

      //  alert("Time Up!");
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

  /////////////////////timer for confirmation of right and wrong answer  

function score(){

	$("#score").show()
	$("#score").text("Correct answers=(s): " + right + " Incorrect answer(s): "+ wrong+ " Unanswered answer(s): " + noAnswer );
}

function ShowAnswer(){
	

	$("#rightAnswer").show();
}


// function timer2() {
//       intervalId = setInterval(decrement2, 1000);
//     }
// function decrement2(){

// number2--;

//      // $(".timer").html("You have : " + number + " seconds!");

//       if (number2 === 0) {
//       	$(".timer").html("Times up!");

//         stop();

//       //  alert("Time Up!");
//       }

// }



