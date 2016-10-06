// Constructors

// Constructors start with a capital letter
// this is part the style guide
// function Taco(cheese, protein, beans, tortilla, onions, greens, salsa){
//   this.cheese = cheese;
//   this.protein = protein;
//   this.beans = beans;
//   this.tortilla = tortilla;
//   this.onions = onions;
//   this.greens = greens;
//   this.salse = salsa;
// }
// function Enemies(name, health, weapon){
//   this.name = name;
//   this.health = health;
//   this.weapon = weapon;
//   this.attack = function(){
//     console.log(this.name + ' attacked you with ' + this.weapon)
//   }
// }

// function Question(question, correctAnswer, answers){
//   this.question = question;
//   this.correctAnswer = correctAnswer;
//   this.answers = answers;
// }





function Question(question, correctAnswer, answers){
  this.question = question;
  this.correctAnswer = correctAnswer;
  this.answers = answers;
}

var questionOne = new Question('How do you invoke an instructo', 'new', ["taco", 'new', 'burrito', 'speedo'])


$('#startQuestion').on('click', function(){
  console.log('click works ')

  $('#questionDiv').text(questionOne.question)

  displayAnswersOnTheButton(questionOne.answers)
})


function displayAnswersOnTheButton(questionArray){

  $('#a').text(questionArray[0])
  $('#b').text(questionArray[1])
  $('#c').text(questionArray[2])
  $('#d').text(questionArray[3])
}




$('#a').on('click', function(){
  console.log($(this), ' <----- this is $(this)', this, "<--------")

  if($(this).html() === questionOne.correctAnswer){
    console.log('you got it right')
  }
  else {
    console.log('wrong')
  }

})

$('#b').on('click', function(){
  var answerOnTheButton = $(this).html()
  compareAnswer(answerOnTheButton, questionOne.correctAnswer)
})


function compareAnswer(answerOnTheButton, correctAnswer){
   if(answerOnTheButton === correctAnswer){
    console.log('you got it right')
  }
  else{
    console.log('wrong')
  }
}





// $('#a')
// $('#a')
// $('#a')


// Have a start button
// when it is clicked you will put onto the page a question with
// div that contains the question, and each answer can be a button
// its answers, you can use jquery

// when the user clicks an answer
// you will have to find the value or text value of whatever
// they clicked and compare it the right answer















