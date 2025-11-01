let user_Score = 0;
let comp_Score = 0;

const choices = document.querySelectorAll(".choose");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score")

// play_Game function print the user choice.
const play_Game = (user_Choice) => {
    console.log("user choice =",user_Choice);
    // Print computer choice.
    const compChoice = genComChoice();
    console.log("comp choice =",compChoice);
    console.log("______________________");
    
    if(user_Choice === compChoice){  // user and comp options check.
        drawGame(); // function call Draw game. 
    } else{
        let user_Win = true;
        
        if(user_Choice === "rock"){
            // paper,scissors
            user_Win = compChoice === "paper" ? false : true;
        } else if(user_Choice === "paper"){
            // rock,scissors
            user_Win = compChoice === "scissors" ? false : true;
        } else{
            // rock,paper
            user_Win = compChoice === "rock" ? false : true;
        }
        showWinner(user_Win,user_Choice,compChoice); 
    }   
};

// user choose a rock, paper,scissors and get id.
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_Choice = choice.getAttribute("id");
        play_Game(user_Choice); // function 
    });
});

// Generate comp choice.
const genComChoice = () => {
    const options = ["rock","paper","scissors"]; 
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; // return the generate random options comp choice.  
}
// Draw-Game 
const drawGame = () => {
    console.log("←-Game Was Draw-→");
    msg.innerText = "←Game Was Draw. Play again→";
    msg.style.background = "#081b31";
}
// This function will be show winner.
const showWinner = (user_Win, user_Choice, compChoice) => {
    if(user_Win){
        console.log("You Win!");
        msg.innerText = `You Win! Your ${user_Choice} beats ${compChoice}🎉`;
        msg.style.background = "darkgreen";
        user_Score++;
        userScore.innerText = user_Score;
    }else{
        comp_Score++;
        compScore.innerText = comp_Score;
        console.log("You Lose");
        msg.innerText = `You Lose.${compChoice} beats your ${user_Choice}🫵`;
        msg.style.background = "darkred";
    }
}