let myFlashcards = [ {
    "question": "120*2",
    "answer": 240
    }, 
    {
     "question": "30-5",
     "answer": "25"
     },
     {
     "question": "11*4",
     "answer": 44
     }
     ];
    
    
 let counter = 0;
 let questionAsked = false;

function displayQuestion() {
     if (counter == myFlashcards.length)
         counter = 0;
     document.getElementById("myQuestion").innerHTML = myFlashcards[counter].question;
     //document.getElementById("myAnswer").innerHTML = "";
    questionAsked = true;
 }

function displayAnswer() {
     if ( questionAsked == true ) {
        document.getElementById("myAnswer").innerHTML = myFlashcards[counter].answer;
        questionAsked = false;
        ++counter;
     } else {
        document.getElementById("myAnswer").innerHTML = "Please click on the question first, then the answer.";
     }
 }

