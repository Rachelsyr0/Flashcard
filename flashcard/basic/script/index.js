class questionObject {
    constructor(question, answer){
        this.question = question;
        this.answer = answer;
    }
}

  let flashcard = [];
   
  // Create three questions and push them onto the quiz array
  flashcard.push(new questionObject('What is 3+5?', 'more than six?'));
  flashcard.push(new questionObject('What color is the sky?', 'blue'));
  flashcard.push(new questionObject('What color is the water?', 'blue'));         
  
  let counter = 0;
  while (counter < flashcard.length){
    console.log(flashcard[counter].question);
    console.log(flashcard[counter].answer);
    counter += 1 ;
  }
    
