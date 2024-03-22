
alert ("hello");

const option = document.getElementById("options")

const questionsOnCom = [ 
        "What does it mean to pay attention?",
        // "Pick three cards that can help you communicate better",
        //  "3 things to make someone interested in what you have to say.",
        // "Best Ideas On How to Move A discussion forward",
        // "Get in the shoes of your listener. What does that mean?", 
        // "You have been invited to address a group on their grievances. What are the best approaches?"


]


const correctAnsOnCom = [
            "Listen to them attentively",            
            "Understand where they are coming from by asking questions!",
            "Prepare some important questions about random things",
            "Call them out when they are wrong",
            "Tell them about yourself",
            "Ask them about something personal"
        ];

const questionTwoAnswer = [
            "Read about the things the person love",            
            "Focus on yourself",
            "Ask them to teach something they enjoy talking about",
            "Lift the burden of the conversation off them when you share your own short experience",
            "Go for serious questions as soon as the conversation starts",
            "When they say something dishonest, pretend you're judge and give them a honest verdict"
        ];

const questionThreeAnswer = [
            "Read about the things the person love",            
            "Focus on yourself",
            "Ask them to teach something they enjoy talking about",
            "Lift the burden of the conversation off them when you share your own short experience",
            "Go for serious questions as soon as the conversation starts",
            "When they say something dishonest, pretend you're judge and give them a honest verdict"
        ];


// const  wrongAnswers = [
//             "Tell them about yourself",
//             "Prepare some important questions about random things",
//             "Call them out when they are wrong",
//             "Tell a joke about their culture",
//             "Speak to them about their mistakes",
//             "Ask them to listen to you by raising your voice",
//             "Use analogies from conversations that are unrelated",
//             "Ask ChatGPT for advice before you answer",
//         ]

// how to make the cards display fully

const startBtn = document.getElementById ("start-btn");
const cardArray = document.querySelector(".card-array");
const cardSpread = document.querySelector("#cards-spread");
const cards = document.getElementsByClassName("cards");
const questionLine = document.querySelector("#question-line");
const instruction = document.querySelector("#instruction");
const textAnswer = document.querySelectorAll(".text-answer");

const question = document.querySelector("#question");



// creating a random number
 randomQuestionNumber = Math.floor(Math.random () * questionsOnCom.length);


function start () {
    cardArray.style.display = "none";
    cardSpread.style.display = "grid";

    // change background color of cards
    function reset() {
        for(var i = 0; i < cards.length; i++){
            cards[i].style.backgroundColor = "greenyellow";
        }
    }
    reset();

    // setting up the question and instruction

    questionLine.style.display = "block";
    instruction.style.display = "block";
    question.innerHTML = questionsOnCom[randomQuestionNumber];
    
    
    // trying to add the right answer on the cards

   
    if (0 === randomQuestionNumber) {
        function changeInnerText () {
            let y = 6;
            
            for(var i = 0; i <= textAnswer.length; i++){
                var randomNumber = i;
                textAnswer[i].innerHTML = correctAnsOnCom[randomNumber];
            }
        }
        changeInnerText();
    };

    }

startBtn.addEventListener("click", start);

// time to append the green cards into the lower box 

