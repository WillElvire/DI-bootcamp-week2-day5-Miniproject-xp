let userChance = 3 ;
let userResponse;
function playTheGame(){

    userResponse = confirm("Do you want to play the game ?");
    let computerNumber;

    if(!userResponse) {
        alert("No problem, Goodbye");
    }else{

        let userNumber =Number.parseInt(prompt("Please put a Number between 0 and 10"));

        if(typeof userNumber != "number") {
            return  alert("Sorry Not a number, Goodbye");
        }else{

            if(userNumber > 10  || userNumber < 0) {
                return  alert("Sorry it’s not a good number, Goodbye");
            }else{
                computerNumber  = Math.floor(Math.random()*10);
                console.log(computerNumber);
                return compareNumbers(userNumber,computerNumber);
            }
        }
      
    }
}



function compareNumbers(userNumber,computerNumber) {

    if(userChance > 0 ) {
        if(userNumber == computerNumber) {
            alert("WINNER");
        }else if(userNumber > computerNumber) {
            alert("Your number is bigger then the computer’s, guess again");
        }else{
            alert("Your number is smaller then the computer’s, guess again");
        }
       return  userChance -- ;
    }
    return alert("out of chances");
}


