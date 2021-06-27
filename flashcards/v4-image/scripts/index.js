let myFlashcards = [ {
    "question": "What is this flower language?",
    "image" : "images/lotus.jpeg",
    "answer": "Lotus: In many Eastern cultures, they signify rebirth, self-regeneration, purity, and enlightenment."
    }, 
    {
    "question": "What is this flower language?",
    "image" : "images/red-roses.jpeg",
    "answer": "Red roses: These are the perfect bloom for Valentine's Day, representing love and desire."
    }, 
    {
    "question": "What is this flower language?",
    "image" : "images/magnolia.jpeg",
    "answer": "Magnolia: They signify a love of nature."
    }
     ];
    
    
let counter = 0;
let questionAsked = false; 

function displayQuestion() {
     if (counter == myFlashcards.length)
         counter = 0;
     document.getElementById("myQuestion").innerHTML = myFlashcards[counter].question;

    // Replace the image if there is one.
    if (myFlashcards[counter].hasOwnProperty('image') == true)
        document.getElementById("myImage").src = myFlashcards[counter].image;
    else 
        document.getElementById("myImage").src = '';

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
