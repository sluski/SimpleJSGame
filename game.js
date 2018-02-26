var sequence = "";
var correct = false;
var answer = "";
var isAnswer = false;
var level = 0;
var initial = ["How's it going?", "How do you do?", "Hello newbie", "What's up?", "Nice to meet you.", "Yo!"];
var bad_score = ["Next time will be better", "Not this time", "Could be better"];
var medium_score = ["Pretty good", "Not even bad"];
var good_score = ["You'r god", "Better than all"];
var colors = ["orange", "green", "lightblue", "lightgreen", "grey", "#e59866", "#a569bd", "#c0392b"];
var tt = 1;

function setNewSequence(){
	var random_number;
	level++;
	document.getElementById('output').innerHTML = "Level " + level;
	random_number = Math.floor(Math.random()*9)+1;
	sequence += random_number.toString();
	
	for(var i = 0; i < sequence.length; i++){
		setTimeout(setColor, i*550, i);
		setTimeout(removeColor, (i+1) * 500, i);
		
	}
}	

function addNumberToAnswer(num){
	answer += num.toString();
	check();
	
}

function check(){
	for(var i = 0; i < answer.length; i++){
		if(sequence[i] != answer[i] && sequence.length > 0){
			var square = document.getElementsByClassName('square');
			square[parseInt(answer[i]-1)].style.backgroundColor = "red";
			if(sequence != ""){
				square[parseInt(sequence[i]-1)].style.backgroundColor = "orange";	
			}
			lose();
			return 1;
		}
	}
	if(answer.length == sequence.length){
		nextLevel();
	}
}

function nextLevel(){
	document.getElementById('output').innerHTML = "You have passed level " + level.toString();
	answer = "";
	setTimeout(setNewSequence, 1500);
}

function lose(){
	document.getElementById('output').innerHTML = "You lose on level " + level.toString();
	document.getElementById('start_button').disabled = false;
	document.getElementById('start_button').value = "Try again";
	setTimeout(responseToLose, 1500, level);
	
	sequence = "";
	level = 0;
	answer = "";
	
}

function start(){
	setTimeout(setNewSequence, 800);
	document.getElementById('start_button').disabled = true;
	document.getElementById('output').innerHTML = "Level 1";
	removeAllColors();
	
}

function setColor(i){
		var square = document.getElementsByClassName('square')[parseInt(sequence[i])-1];
		square.style.backgroundColor = colors[Math.floor(Math.random()*8)];	
}

function removeColor(i){
	var square = document.getElementsByClassName('square')[parseInt(sequence[i])-1];
	square.style.backgroundColor = "";

}

function disableHover(){
	for(var i = 0; i < 9; i++){
		var square = document.getElementsByClassName('square')[i];
		square.style.backgroundColor = "#34495e";
	}
}

function removeAllColors(){
	for(var i =0; i < 9; i++){
		var square = document.getElementsByClassName('square')[i];
		square.style.backgroundColor = "";
	}
}

function start_things(){
	document.getElementById('output').innerHTML = initial[Math.floor(Math.random()*6)];
	display_instructions();
}

function responseToLose(level){
	if(level < 5) document.getElementById('output').innerHTML = bad_score[Math.floor(Math.random()*3)];
	else if(level <=5 && level > 10) document.getElementById('output').innerHTML = bad_score[Math.floor(Math.random()*2)];
	else document.getElementById('output').innerHTML = bad_score[Math.floor(Math.random()*2)];
}

function display_instructions(){
	var information = "Repeat sequence displayed on screen as short color changes. Good Luck!";
	window.alert(information);
}
