const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;
let count;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))


let requestURL = 'https://rachelsyr0.github.io/Json/cats.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text'; 
request.send();


request.onload = function() {
  const catText = request.response; 
  // convert string to a JavaScript object
  const catObject = JSON.parse(catText); 
  displayCatInfo(catObject);
}



function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  
  // Add your code here

  // loop mother's name and add to the motherInfo
  for (let i = 0; i < catString.length; i++) {
    if (i < catString.length - 2){
        motherInfo += catString[i].name +', ';
    }else if(i === catString.length - 2){
        motherInfo += catString[i].name +', and ';
    }else{
        motherInfo += catString[i].name+'.';
    }


    // loop kitten and count their numbers
    const kitten = catString[i].kittens;
    for (let j = 0; j < kitten.length; j++) {
        if (kitten[j].gender === "m"){
            male += 1;
        }
        total += 1;
    }

  }

  let female = total - male;
  kittenInfo = "Total kittens: " + total + " | Males: " + male + " | Females: " + female;



// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    
