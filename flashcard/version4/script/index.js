class questionObject {
    constructor(question, answer, image){
        this.question = question;
        this.answer = answer;
        this.image = image;
    }
}

  let flashcard = [];
   
  // Create questions and push them onto the flashcards array
  flashcard.push(new questionObject('Which famous painting is it?', 'Starry Night Over the Rhone, painted by Vincent van Gogh', 'images/starrynight.jpeg'));
  flashcard.push(new questionObject('Which famous painting is it?', 'Impression, soleil levant, painted by Louis Leroy', 'images/impression.jpeg'));
  flashcard.push(new questionObject('Which famous painting is it?', 'Mona Lisa, painted by da Vinci', 'images/MonaLisa.jpeg'));         
  

  // display the question and answer in order when button are hovered
  let countQuestion = 0;
  let countAnswer = 0;
  document.querySelector('#questionBtn').onmouseover = function(){
    if(countQuestion <= countAnswer){
        document.querySelector("#myQuestion").innerHTML = flashcard[countQuestion].question;
        document.querySelector("#myQuestionImage").src = flashcard[countQuestion].image;
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
