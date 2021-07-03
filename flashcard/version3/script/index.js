class questionObject {
    constructor(question, answer){
        this.question = question;
        this.answer = answer;
    }
}

  let flashcard = [];
   
  // Create questions and push them onto the flashcards array
  flashcard.push(new questionObject('What is the capital of china?', 'Beijing'));
  flashcard.push(new questionObject('What is the largest plain in the world?', 'Amazon Plain'));
  flashcard.push(new questionObject('What is the smallest country in the world?', 'blue'));         
  

  // display the question and answer in order when button are hovered
  let countQuestion = 0;
  let countAnswer = 0;
  document.querySelector('#questionBtn').onmouseover = function(){
    if(countQuestion <= countAnswer){
        document.querySelector("#myQuestion").innerHTML = flashcard[countQuestion].question;
        document.querySelector("#myAnswer").innerHTML = "--";
        document.querySelector("#answerWrong").innerHTML = " ";
        countQuestion += 1;
    }else{
       // If the user hovers the next question before hovering the answer
       document.querySelector("#questionWrong").innerHTML = "Please hover on the answer.";
    }
  }
  document.querySelector('#answerBtn').onmouseover = function(){
    if(countAnswer < countQuestion){
      document.querySelector("#myAnswer").innerHTML = flashcard[countAnswer].answer;
      document.querySelector("#questionWrong").innerHTML = " ";
      countAnswer += 1;
    }else{
      // If the user hovers the answer before hovering the question
      document.querySelector("#answerWrong").innerHTML = "You need to hover on the question first.";
    }
  }
