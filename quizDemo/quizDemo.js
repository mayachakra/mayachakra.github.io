const nameForm = document.getElementById("name-form");
const nameEntered = document.getElementById("name-input");
let NAME = "";
const welcomeMessage = document.getElementById("welcome-container");
const welcomeTemplate = Handlebars.compile(document.getElementById("welcome-template").innerHTML);
var namecount = 0;
let selectedQuiz = '';
let selectedAnswer = 0;


const sessionStorage = window.sessionStorage;
sessionStorage.setItem("quizNameCheck","dummy");
//sessionStorage.getItem("variableName");

let quizNameCheck = '';
//let selectedQuiz = '';
let variable = 'maya';

var currentQuest=-1;
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const answerContainer = document.getElementById("answer-container");

const questionTemp = Handlebars.compile(document.getElementById("question-template").innerHTML);
const choiceTemp = Handlebars.compile(document.getElementById("choices-template").innerHTML);

//new code



//QUESTIONS
//1. next button not working in quiz, ref line 302 onward
//2. need to remove quiz selection but cant or no quizzes load
//3. need score display


let score = 0;
//const nextQuestButton = document.getElementById("answered");
const resultsMessage = document.getElementById("results-container");
const correctAnswer = document.getElementsByName("answer");

const quiz1HTML = document.getElementById('html'); 
const quiz2Java = document.getElementById('java'); 
//new code

const quizSelectButton = document.getElementById('next');
let userSelect = null;
const quizTitle = document.getElementById('quiz-title');

//java quiz
const javaQuest = [
    {
        question: "What is not a type of loop?",
        choice: ["For loop", "While loop", "If loop"],
        correctchoice: "If loop"
        //add explanation

    },

    {
        question: "What is the correct syntax to print 'Hello World' in Java?",
        choice: ["print('hello world');", "System.out.println('hello world');", "echo('hello world');"],
        correctchoice: "print('hello world');"
    },

    {
        question: "Which of these coding segments outputs a value of 2?",
        choice: ["img1", "img2", "img3"],
        correctchoice: "img2"
        //add images
        //add score count

    },

    {
        question: "What OOP mean in Java?",
        choice: ["Object Oriented Programming", "Object Oriented Processing", "Object Operations Programming"],
        correctchoice: "Object Oriented Programming"
    },  
    
    {
        question: "Riley is writing Java code but need to temporarily hide some code by commenting it out. How would Riley do this?",
        choice: ["//this", "/*this", "<!--"],
        correctchoice: "//this"
//make thiis narrative bases with text response
    }


];


//html quiz
const htmlQuest = [
    {
        question: "What can be used to write javascript in an html file?",
        choice: ["<src>", "<script>", "<br>"],
        correctchoice: "<script>"
        //add explanation

    },

    {
        question: "What does HTML stand for?",
        choice: ["Helpful Text Markup Language", "Hyper Text Markup Language", "Helpful Tools Machine Language"],
        correctchoice: "Hyper Text Markup Language"
    },

    {
        question: "Which of these is would be coded using the <form> tag?",
        choice: [
            {src: ".jpg", alt:"" },
            {src: ".jpg", alt:"" },
            {src: ".jpg", alt:"" }
        ],
        correctchoice: "img2"

    },

    {
        question: "What do you use to close out a tag?",
        choice: ["/", "'-", ";"],
        correctchoice: "/"
    },  
    
    {
        question: "Katie wants to make a navigation bar on her website. How can she do this?",
        choice: ["nav, ul, li", "div ul li", "div ol li"],
        correctchoice: "nav, ul, li"

    }


];


function ask_quiz(){
    welcomeMessage.remove();
    var data = {
        question: "Which quiz would you like to select?",
        list:[
            {choice: "Java"},
            {choice: "HTML"}
        ],

    };
    //put in fake api
    var template = Handlebars.compile(document.querySelector("#quizprompt").innerHTML);
    var filled = template(data);
    document.querySelector("#displaychoice").innerHTML = filled;
   
}


//make value to store quiz type value, will not read 156 after another run
//bc the form got removed
//to check for each type of quiz



function renderQuest(){
    if (namecount == 0){
        selectedQuiz = document.querySelector('input[type=radio]:checked');
        sessionStorage.setItem("quizNameCheck",selectedQuiz.value);
        namecount++
    }
    //console.log(sessionStorage.getItem("quizNameCheck"))
    //if getitem quiznamecheck = java, run java quiz else html
    //const currentQuiz = selectedQuiz[currentQuestion];
    /*how to check for certain quiz
    quizTitle.textContent = currentQuiz.question;
    questionContainer.innerHTML = questionTemp(question);
    choicesContainer.innerHTML = choiceTemp(question);
    */
   //check this
    //console.log("line 156:" + selectedQuiz.value)
    
    if (sessionStorage.getItem("quizNameCheck") == 'Java'){
        const question = javaQuest[currentQuest];
        //doesnt go to the javaquest
        questionContainer.innerHTML = questionTemp(question);
        choicesContainer.innerHTML = choiceTemp(question);

    }else{
        const question = htmlQuest[currentQuest];
        questionContainer.innerHTML = questionTemp(question);
        choicesContainer.innerHTML = choiceTemp(question);

    }
}


//make another answer check for html quiz

function answerCheck2(){
    //new code
    resultsMessage.style.display = 'block';

    correctAnswer.forEach(answer =>{
        if(answer.checked){
            selectedAnswer = answer.value;
        }
    });

//goes to next page but does not display score or check display wrong choice message

//check bc this is only for java quests NOT HTML so add HTML
   // console.log("line 190:" + javaQuest[currentQuest].correctchoice);
  //  console.log("line 200:" + htmlQuest[currentQuest].correctchoice);

    //for html quiz
    //console.log("CURRENT QUEST:"+ currentQuest)
    
    if (selectedAnswer === htmlQuest[currentQuest].correctchoice){
        score++;
        resultsMessage.textContent= 'Correct!'; //make red in css with results-container
        setTimeout(function(){
            resultsMessage.style.display = 'none';
        }, 1000);
        //result-container message .textContent = ''; //for correct
        

    }
    else{ 
        resultsMessage.textContent= 'Unfortunately, this is incorrect. The correct choice was ' + htmlQuest[currentQuest].correctchoice;
        //add explanation
        //check if you need to use
        //AWAIT/ASYNC
        setTimeout(function(){
            resultsMessage.style.display = 'none';
        }, 1000);
        //currentQuest++;
    }
    currentQuest++

//only goes to next question after #1
    
if(currentQuest < htmlQuest.length){
        renderQuest();
    }
    else{
        displayResult();
    }
}


//java quiz answer check
function answerCheck(){

    resultsMessage.style.display = 'block';

    //new code
    correctAnswer.forEach(answer =>{
        if(answer.checked){
            selectedAnswer = answer.value;
        }
    });
//goes to next page but does not display score or check display wrong choice message

//check bc this is only for java quests NOT HTML so add HTML
    //console.log("line 190:" + javaQuest[currentQuest].correctchoice);
   // console.log("line 200:" + htmlQuest[currentQuest].correctchoice);
    //for java quiz
    if (selectedAnswer === javaQuest[currentQuest].correctchoice){
        score++;
        resultsMessage.textContent= 'Correct!'; //make red in css with results-container
        setTimeout(function(){
            resultsMessage.style.display = 'none';
        }, 1000);
        //result-container message .textContent = ''; //for correct
    }
    else if(selectedAnswer != javaQuest[currentQuest].correctchoice){
        resultsMessage.textContent= 'Unfortunately, this is incorrect. The correct choice was ' + javaQuest[currentQuest].correctchoice;
        //add explanation
        //check if you need to use
        //AWAIT/ASYNC
        setTimeout(function(){
            resultsMessage.style.display = 'none';
        }, 1000);
    }
    currentQuest++;
//only goes to next question after #1
    if(currentQuest < javaQuest.length){
        renderQuest();
    }
    else{
        displayResult();
    }
}

function nextQuestion(){
   let selectedQuizCheck = '';
   selectedQuizCheck = document.querySelector('input[type=radio]:checked');
   //console.log("line 349:" + selectedQuizCheck)
   const answerButton = document.getElementById("answered")
   answerButton.addEventListener('click', function(){
   const buttonValue = this.value;  
   //   console.log("line 350:" + buttonValue)
     // currentQuest++;
      if (buttonValue.value = 'answered'){
          //currentQuest++
          //renderQuest();
      }else{
          displayResult();
          //display results
        } 
    })
      if (sessionStorage.getItem("quizNameCheck") == 'Java'){
          answerCheck(correctAnswer); //for java
          //currentQuest++
      }else{
          answerCheck2(correctAnswer); //for html
          //currentQuest++
        }
}

//new code
function displayResult(){
    questionContainer.innerHTML = "Congratulations! You completed the quiz!";
    choicesContainer.innerHTML = "";
    setTimeout(function(){
        resultsMessage.style.display = 'block'
    }, 1000);

    //document.getElementById("results-container").innerHTML = score;
    resultsMessage.textContent = "You scored a "+ score + "out of 5";
}

nameForm.addEventListener("submit", function(){
    event.preventDefault();
    nameForm.remove();
    NAME = nameEntered.value;
    const username = nameEntered.value;
    const nameInfo = {name: username};
    const welcomeHTML = welcomeTemplate(nameInfo);
    welcomeMessage.innerHTML = welcomeHTML;
    console.log("Line 370"+ quizNameCheck);
    selectedQuiz = document.querySelector('input[id="lang"]:checked');
    console.log("Selected Quiz;"+ selectedQuiz);

    document.getElementById("next").addEventListener("click",function(){
      alert("The Quiz will now begin");
      renderQuest();
      //saveQuizType();
         // if(currentQuest < javaQuest.length - 1){
            if(currentQuest < 4){
              currentQuest++;
              renderQuest();
              //with button click checks question
              //why does this only work with ONE question, not all??
              document.getElementById("answered").addEventListener("click", function(){
                nextQuestion();
              });
          }
          else if (currentQuest == 4){
              console.log(score)
              displayResult();
        }

    //to get rid of welcome template
        welcomeMessage.innerHTML = "";
    });

    

});
