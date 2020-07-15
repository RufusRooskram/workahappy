var questions = [{
	"question": " Imposibilidad de conciliar el sueño:",
	"option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",

}, {
	"question": " Jaquecas y dolores de cabeza:",
  "option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",

}, {
	"question": " Indigestiones o molestias gastrointestinales:",
  "option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",
}, {
	"question": " Sensación de cansancio extremo o agotamiento:",
  "option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",
}, {
	"question": " Tendencia de comer, beber o fumar más de lo habitual:",
  "option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",
}, {
	"question": " Disminución del interés sexual:",
  "option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",
}, {
	"question": " Respiración entrecortada o sensación de ahogo:",
  "option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",
}, {
	"question": " Disminución del apetito:",
  "option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",
}, {
	"question": " Temblores musculares (por ejemplo tics nerviosos o parpadeos):",
  "option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",
}, {
	"question": " Pinchazos o sensaciones dolorosas en distintas partes del cuerpo:",
  "option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",
}, {
  "question": " Tentaciones fuertes de no levantarse por la mañana:",
  "option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",
}, {
  "question": " Tendencias a sudar o palpitaciones:",
  "option1": " Nunca",
	"option2":" Casi nunca",
	"option3":" Pocas veces",
	"option4":" Algunas veces",
  "option5":" Relativamente frecuente",
  "option6":" Muy frecuente",
}
];

var currentQuestion = 0;
var score = 0;
var totQuestions= questions.length;
var container = document.getElementById('quizContainer');
var questionexample = document.getElementById('question');
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var opt4 = document.getElementById('option4');
var opt5 = document.getElementById('option5');
var opt6 = document.getElementById('option6');
var nextButton = document.getElementById('nextButtons');

var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionexample.textContent = (questionIndex + 1) + '.' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent= q.option4;
  	opt5.textContent= q.option5;
    	opt6.textContent= q.option6;
	document.getElementById('nextButton').disabled=true;
}

//setting event listeners for the radio buttons
var radd = document.getElementsByClassName('rad');
for(var i=0; i<radd.length; i++){
radd[i].addEventListener("change",function(){
  document.getElementById('nextButton').disabled=false;


});


}

function loadNextQuestion(){

	var selectedOption = document.querySelector('input[type=radio]:checked');

	//content value of radio button
	var ans = selectedOption.value;
	if(questions[currentQuestion].answer==ans){
		score+=1;
	}

	//uncheck radio
	selectedOption.checked = false;


	if((currentQuestion+1)<totQuestions-1){
	currentQuestion++;
	loadQuestion(currentQuestion);
	}
	else if((currentQuestion+1)==totQuestions-1){
		currentQuestion++;
		document.getElementById('nextButton').innerHTML= 'Submit';
		loadQuestion(currentQuestion);
}else {

		document.getElementById("quizContainer").style.display = 'none';
		resultCont.style.display="block";
		resultCont.innerHTML = 'Resultado: ' + score;
}

	}

loadQuestion(currentQuestion);
