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
 while (counter < myFlashcards.length ) {
     alert(myFlashcards[counter].question);
     alert(myFlashcards[counter].answer);
     ++counter;
 }
