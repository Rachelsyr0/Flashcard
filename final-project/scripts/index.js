

let myInstruction = [ {
        "objective":"Starting the game",
        "count": 1 ,
        "instruction1" : "1-1 Basic setting",
        "instructionContent1" : "As soon as you start the game, you'll be greeted by Timmy and Tommy, the Nook Twins, who are here to prepare you for desert island life. First, they'll ask your name and birthday. This doesn't effect much, except for what other characters call you, and when you'll receive birthday presents from them.After this, you'll get to customize what your character looks like. Unlike other games in the series, you have full control of your character's appearance, so pick the hairstyle, eyes, makeup, and more that appeal to you. And if you find yourself unsure of your design, don't worry — you'll be able to change it whenever you like later in the game.",
        "image1" :'images/1-1.jpeg',
        "instruction2" : "1-2 Choose your island size",
        "instructionContent2" : "Every island is about the same size, and has the same amount of resources. You really can't make a wrong choice, but I'd recommend looking for the section of the island that has a small white leaf symbol, and picking the island that has the most shoreline connected to this section. In the early game, you'll be stuck in this section, so you'll want a lot of room to fish.",
        "image2" :'images/1-2.jpeg',
        "assessment": [
            {
                "Question":"1. What could you change later in the game?",
                "Option":[
                    {
                        "Answer":"Name",
                        "Right": false
                    },
                    {
                        "Answer":"Birthday",
                        "Right": false
                    },
                    {
                        "Answer":"Character appearance",
                        "Right": true
                    }
                ]
            },
            {
                "Question":"2. What shape of the island is good for users to fish later?",
                "Option":[
                    {
                        "Answer":"the most shoreline",
                        "Right": true
                    },
                    {
                        "Answer":"round shape",
                        "Right": false
                    },
                    {
                        "Answer":"Any shape",
                        "Right": false
                    }
                ]
            }
        ]
    },
    {
        "objective":" Founding your island",
        "count": 2 ,
        "instruction1" : "2-1 Pitching your tent",
        "instructionContent1" : "Tom Nook will welcome you to the island before telling you to pick a spot to set up your tent. You can get a tent from either Timmy or Tommy.Your tent will be your base of operations for a good while — it's where you'll start the game when you turn it on and likely store your stuff — so this is an important decision.Remember that placing your tent over a tree or rock will destroy that resource. Rocks will reappear somewhere else on the island in a few days, and trees will disappear unless you replant them later. When setting your tent, you can 'imagine' what it'll look like before you make your decision, which is a great way to see what resources will be displaced.",
        "image1" :'images/2-1.jpeg',
        "instruction2" : "2-2 Exploring your island and get first day started",
        "instructionContent2" : "This is a great chance to meet your neighbors. Find each of them (they won't be far) and talk to them. They'll introduce themselves and offer to let you place their tents. If you have strong opinions about where your neighbors should live, tell them you'll find them a spot — otherwise, just say 'Looks good to me.'After you help your neighbors, you'll be brought back to the plaza and given a new task: gather 10 tree branches. Tree branches are the tiny sticks you've seen scattered around. While you're standing on one, press Y to pick it up.",
        "image2" :'images/2-2.jpeg',
        "assessment": [
            {
                "Question":"1. What happens if you place your tent over a tree?",
                "Option":[
                    {
                        "Answer":"Destroy the tree",
                        "Right": true
                    },
                    {
                        "Answer":"Collect tree seeds in your bag",
                        "Right": false
                    },
                    {
                        "Answer":"Fail to place the tent",
                        "Right": false
                    }
                ]
            },
            {
                "Question":"2. If you have strong opinions about where your neighbors should live, what should you tell them?",
                "Option":[
                    {
                        "Answer":"'Looks good to me.'",
                        "Right": false
                    },
                    {
                        "Answer":"'I will find a spot to you.'",
                        "Right": true
                    },
                    {
                        "Answer":"Say nothing",
                        "Right": false
                    }
                ]
            }
        ]
    },
    {
        "objective":"Earn to pay the rent for new raccoon landlord",
        "count": 3 ,
        "instruction1" : "3-1 Talk to new raccoon landlord",
        "instructionContent1" : "When you wake up, Tom Nook will be outside your tent. He's ready to give you your NookPhone, and give you your first long-term goal of the game. Moving to a deserted island isn't free, it seems, and now you owe Tom Nook about 50,000 bells (this game's form of currency). Luckily, Tom is considerate enough to let you pay your debt back in miles, like a sort of indentured credit card reward program. As he explains, you'll earn Nook Miles for performing tasks around the island, like catching fish and bugs, or decorating your house.",
        "image1" :'images/3-1.jpeg',
        "instruction2" : "3-2 Catch and Earn",
        "instructionContent2" : "You'll need to earn 5,000 Nook Miles to pay off your first loan. Whenever you perform a task that earns you miles, a phone icon will appear in the top-left corner and start beeping. Head south to the coastline. On the way, use your new bug net to catch any butterflies, beetles, or other bugs that you see. Catching just ten bugs will earn you miles, and catching ten unique species will earn you even more. The same goes for fish.",
        "image2" :'images/3-2.jpeg',
        "assessment": [
            {
                "Question":"1. How much bells you owe the racoon landlords?",
                "Option":[
                    {
                        "Answer":"1000 bells",
                        "Right": false
                    },
                    {
                        "Answer":"10000 bells",
                        "Right": false
                    },
                    {
                        "Answer":"50000 bells",
                        "Right": true
                    }
                ]
            },
            {
                "Question":"2. How to earn Nook miles?",
                "Option":[
                    {
                        "Answer":"catch butterflies, beetles, or other bugs",
                        "Right": true
                    },
                    {
                        "Answer":"cook for racoon landlords",
                        "Right": false
                    },
                    {
                        "Answer":"decorate your house",
                        "Right": false
                    }
                ]
            }
        ]
    }
]
    
    
let counter = 0;
let correct = 0;
var myAnswer1=null;
let questionAsked = false;
//let myQuiz1Correct = false;
//let myQuiz2Correct = false;
var myQuiz1 = [];
var myQuiz1Counter = 0;
var myQuiz1Answer = ["No answer yet","No answer yet","No answer yet"];
var myQuiz2Answer = ["No answer yet","No answer yet","No answer yet"];
var myResult1 = false;
var myResult2 = false;
var myQuiz1Value = [];
var myQuiz2Value = [];


function displayContent(){
    document.querySelector("#myInstruction").innerHTML = myInstruction[counter].objective;
    document.querySelector("#myInstruction1").innerHTML = myInstruction[counter].instruction1;
    document.querySelector("#myInstruction2").innerHTML = myInstruction[counter].instruction2;
    document.querySelector("#myInstructionContent1").innerHTML = myInstruction[counter].instructionContent1;
    document.querySelector("#myInstructionContent2").innerHTML = myInstruction[counter].instructionContent2;
    document.querySelector("#myInstructionPic1").src = myInstruction[counter].image1;
    document.querySelector("#myInstructionPic2").src = myInstruction[counter].image2;
    document.querySelector("#myQuiz1").innerHTML = myInstruction[counter].assessment[0].Question;
    document.querySelector("#quiz1Answer1").innerHTML = myInstruction[counter].assessment[0].Option[0].Answer;
    document.querySelector("#quiz1Answer2").innerHTML = myInstruction[counter].assessment[0].Option[1].Answer;
    document.querySelector("#quiz1Answer3").innerHTML = myInstruction[counter].assessment[0].Option[2].Answer;
    document.querySelector("#myQuiz2").innerHTML = myInstruction[counter].assessment[1].Question;
    document.querySelector("#quiz2Answer1").innerHTML = myInstruction[counter].assessment[1].Option[0].Answer;
    document.querySelector("#quiz2Answer2").innerHTML = myInstruction[counter].assessment[1].Option[1].Answer;
    document.querySelector("#quiz2Answer3").innerHTML = myInstruction[counter].assessment[1].Option[2].Answer;
}

function checkAnswer(){
    myQuiz1Value = document.getElementsByName("myQuiz1")
    for (var i=0;i<myQuiz1Value.length;i++){ //遍历Radio
        if(myQuiz1Value[i].checked){
            myAnswer1=myQuiz1Value[i].value;
            myQuiz1Correct = myInstruction[counter].assessment[0].Option[i].Right;
            if(myQuiz1Correct === false){
                document.querySelector("#quiz1Wrong").innerHTML = "Try it again.";
                document.querySelector("#quiz1Correct").innerHTML = "";
                myQuiz1Answer[counter]="Wrong";
            }else{
                document.querySelector("#quiz1Correct").innerHTML = "Congratulations!";
                document.querySelector("#quiz1Wrong").innerHTML = "";
                myQuiz1Answer[counter]="Right";
            }
        }
    }
    myQuiz2Value = document.getElementsByName("myQuiz2")
    for (var i=0;i<myQuiz2Value.length;i++){ //遍历Radio
        if(myQuiz2Value[i].checked){
            myAnswer2=myQuiz2Value[i].value;
            myQuiz2Correct = myInstruction[counter].assessment[1].Option[i].Right;
            if(myQuiz2Correct === false){
                document.querySelector("#quiz2Wrong").innerHTML = "Try it again.";
                document.querySelector("#quiz2Correct").innerHTML = "";
                myQuiz2Answer[counter]="Wrong";
            }else{
                document.querySelector("#quiz2Correct").innerHTML = "Congratulations!";
                document.querySelector("#quiz2Wrong").innerHTML = "";
                myQuiz2Answer[counter]="Right";
            }
        }
    }
}

function resetRadio(){
    document.querySelector("#quiz1Answer1_radio").checked = false;
    document.querySelector("#quiz1Answer2_radio").checked = false;
    document.querySelector("#quiz1Answer3_radio").checked = false;
    document.querySelector("#quiz2Answer1_radio").checked = false;
    document.querySelector("#quiz2Answer2_radio").checked = false;
    document.querySelector("#quiz2Answer3_radio").checked = false;

    for (var k=0;k<myQuiz1Value.length;k++){
        if(myQuiz1Value[k].checked){
            myResult1 = true;
        }
    }
    for (var l=0;l<myQuiz1Value.length;l++){
        if(myQuiz1Value[l].checked){
            myResult2 = true;
        }
    }
    if(!myResult1){
        document.querySelector("#quiz1Correct").innerHTML = "";
        document.querySelector("#quiz1Wrong").innerHTML = "";
    }
    if(!myResult2){
        document.querySelector("#quiz2Correct").innerHTML = "";
        document.querySelector("#quiz2Wrong").innerHTML = "";
    }
}



function displayDashboard(){

    document.querySelector("#myObjective1").innerHTML = "Module1 | " + myInstruction[0].objective;
    document.querySelector("#myQuiz1-1").innerHTML = myInstruction[0].assessment[0].Question;
    document.querySelector("#myQuiz1-2").innerHTML = myInstruction[0].assessment[1].Question;
    document.querySelector("#myObjective2").innerHTML = "Module2 | "+ myInstruction[1].objective;
    document.querySelector("#myQuiz2-1").innerHTML = myInstruction[1].assessment[0].Question;
    document.querySelector("#myQuiz2-2").innerHTML = myInstruction[1].assessment[1].Question;
    document.querySelector("#myObjective3").innerHTML = "Module3 | " + myInstruction[2].objective;
    document.querySelector("#myQuiz3-1").innerHTML = myInstruction[2].assessment[0].Question;
    document.querySelector("#myQuiz3-2").innerHTML = myInstruction[2].assessment[1].Question;

    
    document.querySelector("#quizScore1-1").innerHTML = myQuiz1Answer[0];
    document.querySelector("#quizScore1-2").innerHTML = myQuiz1Answer[1];
    document.querySelector("#quizScore2-1").innerHTML = myQuiz1Answer[2];
    document.querySelector("#quizScore2-2").innerHTML = myQuiz2Answer[0];
    document.querySelector("#quizScore3-1").innerHTML = myQuiz2Answer[1];
    document.querySelector("#quizScore3-2").innerHTML = myQuiz2Answer[2];


    document.querySelector("#Objective1").innerHTML = "Module1 | " + myInstruction[0].objective;
    document.querySelector("#Quiz1-1").innerHTML = myInstruction[0].assessment[0].Question;
    document.querySelector("#Quiz1-2").innerHTML = myInstruction[0].assessment[1].Question;
    document.querySelector("#Objective2").innerHTML = "Module2 | " + myInstruction[1].objective;
    document.querySelector("#Quiz2-1").innerHTML = myInstruction[1].assessment[0].Question;
    document.querySelector("#Quiz2-2").innerHTML = myInstruction[1].assessment[1].Question;
    document.querySelector("#Objective3").innerHTML = "Module3 | " + myInstruction[2].objective;
    document.querySelector("#Quiz3-1").innerHTML = myInstruction[2].assessment[0].Question;
    document.querySelector("#Quiz3-2").innerHTML = myInstruction[2].assessment[1].Question;


    document.querySelector("#classScore1-1").innerHTML = "50%";
    document.querySelector("#classScore1-2").innerHTML = "50%";
    document.querySelector("#classScore2-1").innerHTML = "50%";
    document.querySelector("#classScore2-2").innerHTML = "50%";
    document.querySelector("#classScore3-1").innerHTML = "50%";
    document.querySelector("#classScore3-2").innerHTML = "50%";
}




//run the function for each page


if(location.href.includes("step.html")){
    document.querySelector('#nextBtn').innerHTML = "Next";
    displayContent();
    checkAnswer();
    document.querySelector('#nextBtn').onclick= function(){
        if(counter < myInstruction.length - 1){
            if(counter < myInstruction.length - 2){
                document.querySelector('#nextBtn').innerHTML = "Next";
            }else{
                document.querySelector('#nextBtn').innerHTML = "Submit";
            }
            counter += 1;
            if(location.href.includes("step.html")){
                displayContent();
                checkAnswer();
                resetRadio();
            }
        }else if(counter = myInstruction.length - 1){
            window.location.href='dashboard.html';
            displayDashboard();  
        }
    }
    
    document.querySelector('#previousBtn').onclick= function(){
        if(counter > 0){
            counter -= 1;
            if(location.href.includes("step.html")){
                displayContent();
                checkAnswer();
                resetRadio();
            }  
        }    
    }

}else if(location.href.includes("dashboard.html")){
    displayDashboard();
}else if(location.href.includes("index.html")){
    
    document.querySelector('#startBtn').onclick= function(){
        window.location.href='step.html';
    }


}







