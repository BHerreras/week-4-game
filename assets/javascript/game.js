


var currentNumber = 0;
var randomNumber = 0;
var winCount = 0;
var lossCount = 0;



$(document).ready(function() {




$("#gem1").on("click", function() {
        
        currentNumber += 20;
        document.getElementById('currentNumberSpot').innerHTML = currentNumber;
        checkWinCondition();
    });
$("#gem2").on("click", function() {
        
        currentNumber += 10;
        document.getElementById('currentNumberSpot').innerHTML = currentNumber;
        checkWinCondition();
    });
$("#gem3").on("click", function() {
        
        currentNumber += 5;
        document.getElementById('currentNumberSpot').innerHTML = currentNumber;
        checkWinCondition();
    });
$("#gem4").on("click", function() {
        
        currentNumber += 1;
        document.getElementById('currentNumberSpot').innerHTML = currentNumber;
        checkWinCondition();
	});

randomNumber = Math.floor(Math.random()*100+1);
console.log(randomNumber);

document.getElementById('currentNumberSpot').innerHTML = currentNumber;
document.getElementById('targetNumber').innerHTML = randomNumber;
document.getElementById('lossCount').innerHTML = "Losses: " +lossCount;
document.getElementById('winCount').innerHTML = "Wins: " + winCount;


function checkWinCondition () {
	if (randomNumber == currentNumber) {

		alert("You Win!");
		winCount++;
		document.getElementById('winCount').innerHTML = "Wins: " + winCount;
	}

	if (currentNumber > randomNumber) {
		alert("You Lost!");
		lossCount++;
		document.getElementById('lossCount').innerHTML = "Losses: " + lossCount;
	}
}


  $("#resetButton").on("click", function() {
      currentNumber = 0;
      randomNumber = Math.floor(Math.random()*100+1);
      document.getElementById('currentNumberSpot').innerHTML = currentNumber;
		  document.getElementById('targetNumber').innerHTML = randomNumber;
		  document.getElementById('lossCounter').innerHTML = "Losses: " + lossCount;
		  document.getElementById('winCounter2').innerHTML = "Wins: " + winCount;
      
  });

        
        


});