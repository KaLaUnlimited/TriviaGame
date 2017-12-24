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
var currentQuestion;

// $(".question1").hide();
// $(".question2").hide();
// $(".question3").hide();
// $(".question4").hide();
 $("#score").hide();
$(".wrongAnswer").hide();
 $(".rightAnswer").hide();
 $("#newZealand").hide();
 $(".questions").hide();


////start button to start the game
$("#start").click(function(){
$(".timer").html("You have : " + number + " seconds!");
currentQuestion=1;
right=0;
wrong=0;
noAnswer=0;
$("#start").hide();



//countdown begins to answer question #1

timer();//timer function will hide first question and show answer page
$(".questions").val('1').show()//Question #1 show

//when game button is clicked.....

$(".game").click(function(){
				//if game button equals right answer
				selection=$(this);
				console.log(typeof selection);

				console.log(selection);
				//show div that confirms right answer 
				if(selection.hasClass("right")){
				$(".rightAnswer").val('1').show();
				//$("#newZealand").show()//giphy
				$(".questions").val('1').hide();
				right++;
				//stop();
				}
				//if the user selects the wrong button
				if  (selection.hasClass("wrong"))
				{	
					$(".questions").val('1').hide();
					$(".wrongAnswer").val('1').show();
					//$(".wrongAnswer").prepend("Incorrect");
					//$(".wrongAnswer")
					wrong++;
				//stops the timer to go to the next question
					stop();
				}

				 	
		})
				
				

// // **********countdown begins to answer question #2
// setTimeout(q2countDown,miliseconds);

// function q2countDown(){
// 	$("#rightAnswer").hide();
// 	$(".question1").hide();
// 	number =6;
// 	timer();
// 	$(".question2").show();//show question #2 for 90 seconds
// //if use click any option
// $(".game").click(function(){
// 				//if game button equals right answer
// 				selection=$(this);
// 				console.log(typeof selection);

// 				console.log(selection);
// 				//show div that confirms right answer 
// 				if(selection.hasClass("right")){
// 				$("#rightAnswer").show();
// 				//$("#newZealand").show()//giphy
// 				$(".question2").hide();
// 				right++;
// 				stop();
// 				}
// 				//if the user selects the wrong button
// 				if  (selection.hasClass("wrongAnswer"))
// 				{	
// 					$(".question2").hide();
// 					$("#wrongAnswer").show();
// 					wrong++;
// 					stop();
// 				}

				 	
// 		})///endd of game click function


//	if(number===0){
	//	setTimeout(ShowAnswer,3000);}

//}
	// **********countdown begins to answer question #3
	// setTimeout(q3countDown,miliseconds);//starts timer for #3
	// 	function q3countDown(){
	// 		$("#rightAnswer").hide();
	// 		$(".question2").hide();
	// 		 number =6;
	// 		timer();
			
	// 		$(".question3").show();//show question #3

	// 		$(".game").click(function(){
	// 			//if game button equals right answer
	// 			selection=$(this);
	// 			console.log(typeof selection);

	// 			console.log(selection);
	// 			//show div that confirms right answer 
	// 			if(selection.hasClass("right")){
	// 			$("#rightAnswer").show();
	// 			//$("#newZealand").show()//giphy
	// 			$(".question3").hide();
	// 			right++;
	// 			stop();
	// 			}
	// 			//if the user selects the wrong button
	// 			if  (selection.hasClass("wrongAnswer"))
	// 			{	
	// 				$(".question3").hide();
	// 				$("#wrongAnswer").show();
	// 				wrong++;
	// 				stop();
	// 			}

				 	
	// 	})

	// 		timer();
	// }	
			
			

// 			//***********countdown begins to answer question #4
// 			setTimeout(q4countDown,miliseconds);
// 				function q4countDown(){
// 					number =6;
// 					timer();
// 					$(".question3").hide();
// 					$(".question4").show();

// 					$(".game").click(function(){
// 				//if game button equals right answer
// 				selection=$(this);
// 				console.log(typeof selection);

// 				console.log(selection);
// 				//show div that confirms right answer 
// 				if(selection.hasClass("right")){
// 				$("#rightAnswer").show();
// 				//$("#newZealand").show()//giphy
// 				$(".question4").hide();
// 				right++;
// 				stop();
// 				}
// 				//if the user selects the wrong button
// 				if  (selection.hasClass("wrongAnswer"))
// 				{	
// 					$(".question4").hide();
// 					$("#wrongAnswer").show();
// 					wrong++;
// 					stop();
// 				}
// 			});

// 					//countdown begins to answer question #5
// // 					var hide3=setTimeout(q4countDown,miliseconds);
// // 						function q4countDown(){
// // 							number =6;
// // 							timer();
// // 							$(".question4").hide();
// // 							//code to display code
// // 								score();
// // 								//$("#score").show();
	



// // }

// }






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
      	currentQuestion
      	strCurrentQuestion=String(currentQuestion);
      	$(".rightAnswer").val(strCurrentQuestion).show();
      	$(".questions").val(strCurrentQuestion).hide();
      //	$(".timer").html("Times up!");
      currentQuestion++;//increment to next question
           noAnswer++;// add to unanswered score
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

function ShowAnswer (question){
	
	question= $(".questions");
	$("#rightAnswer").show();
	$(this).hide();
}




function nextQuestion(){

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



