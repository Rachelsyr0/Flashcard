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
  flashcard.push(new questionObject('What is the smallest country in the world?', 'Vatican'));         
  


  // display the question and answer in order when button are clicked
  let countQuestion = 0;
  let countAnswer = 0;
  document.querySelector('#questionBtn').onclick = function(){
    if(countQuestion <= countAnswer){
      alert(flashcard[countQuestion].question);
      countQuestion += 1;
    }else{
       // If the user clicks the next question before clicking the answer
       alert("Please click on the answer.")
    }
  }
  document.querySelector('#answerBtn').onclick = function(){
    if(countAnswer < countQuestion){
      alert(flashcard[countAnswer].answer);
      countAnswer += 1;
    }else{
      // If the user clicks the answer before clicking the question
      alert("You need to click on the question first.")
    }
  }
