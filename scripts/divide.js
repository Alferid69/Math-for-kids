var correct_answer;
var wrong_answer1;
var wrong_answer2;

var correct_answer_index;
var firstAnswer = document.getElementById("answer1");
var secondAnswer = document.getElementById("answer2");
var thirdAnswer = document.getElementById("answer3");

function getFirstNumber(){
  var firstNumber = Math.floor(Math.random() * 11)+5;
  return firstNumber;
}

function getSecondNumber(){
  do{
    var secondNumber = Math.floor(Math.random() * 11);
  }while(secondNumber == 0);
  return secondNumber;
}

function getWrongAnswer1(){
  do{
    wrong_answer1 = (Math.random() * 21).toFixed(1);
  }
  while(wrong_answer1 == correct_answer)
  return wrong_answer1;
}

function getWrongAnswer2(){
  do{
    wrong_answer2 = (Math.random() * 21).toFixed(1);
  }
  while(wrong_answer2 == correct_answer)
  return wrong_answer2;
}

function getStyle(){
  return "font-size: 90px;color: white;";
}

window.onload = generateQuestion();

function generateQuestion(){
  document.getElementById("firstNumber").textContent = getFirstNumber();
  document.getElementById("secondNumber").textContent = getSecondNumber();
  correct_answer = Number(document.getElementById("firstNumber").textContent) / Number(document.getElementById("secondNumber").textContent);
  correct_answer = correct_answer.toFixed(1);
  correct_answer_index = Math.floor(Math.random() * 3);
  if(correct_answer_index == 0){
    firstAnswer.textContent = correct_answer;
    secondAnswer.textContent = getWrongAnswer1();
    thirdAnswer.textContent = getWrongAnswer2();
  }
    
  else if(correct_answer_index == 1){
    secondAnswer.textContent = correct_answer;
    thirdAnswer.textContent = getWrongAnswer1();
    firstAnswer.textContent = getWrongAnswer2();
  }
    
  else if(correct_answer_index == 2){
    thirdAnswer.textContent = correct_answer;
    secondAnswer.textContent = getWrongAnswer1();
    firstAnswer.textContent = getWrongAnswer2();
  }
    
  firstAnswer.setAttribute("style", getStyle());
  secondAnswer.setAttribute("style", getStyle());
  thirdAnswer.setAttribute("style", getStyle());
}

thirdAnswer.addEventListener("click", () => {
  if(thirdAnswer.innerText == correct_answer){
    generateQuestion();
  }else{
    thirdAnswer.setAttribute("style", `animation: shake 0.3s linear; ${getStyle()}`);
  }
})

secondAnswer.addEventListener("click", () => {
  if(secondAnswer.innerText == correct_answer){
    console.log("you win")
    generateQuestion();
  }else{
    secondAnswer.setAttribute("style", `animation: shake 0.3s linear; ${getStyle()}`)
  }
})

firstAnswer.addEventListener("click", () => {
  if(firstAnswer.innerText == correct_answer){
    console.log("you win")
    generateQuestion();
  }else{
    firstAnswer.setAttribute("style", `animation: shake 0.3s linear; ${getStyle()}`)
  }
})