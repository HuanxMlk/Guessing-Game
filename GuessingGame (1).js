var secretNumber = 0;
var secretSet = false;
var timer = null;
var countdown = 10;
var guessCount = 0;
function setSecretNumber() {
    const number = Number(document.getElementById("secretNum").value);
    const numbercount = document.getElementById("numbercount");
    const history = document.getElementById("history");
    const title = document.getElementById("title");
    if (number > 0 && number <= 100) {
        if (secretSet == false) {
            secretNumber = number;
            alert("Good Job");
            title.innerHTML = "Try to Guess the Number";
            secretSet = true;
        } else {
            clearInterval(timer);
            timer = null;
            guessCount += 1;
            document.getElementById("guesscount").innerHTML = "Guesses: " + guessCount;
            if (secretNumber == number) {
                alert("Your guess is correct!! \n" + secretNumber +"\n"+"Guesses: "+guessCount);
                secretNumber = 0;
                secretSet = false;
                history.innerHTML = "";
                countdown = 10;
                numbercount.innerHTML = countdown;
                title.innerHTML = "Input your S E C R E T number";
                guessCount = 0;
                document.getElementById("guesscount").innerHTML = "Guesses: 0";
            } else {
                if (number > secretNumber) {
                    alert("Too high! Try a smaller number.");
                } 
                else {
                    alert("Too low! Try a larger number.");
                }
                history.innerHTML += number + " ";
                countdown = 10;
                numbercount.innerHTML = countdown;
                timer = setInterval(displaycountdown, 1000);
                function displaycountdown() {
                    countdown -= 1;
                    if (countdown <= 0) {
                        numbercount.innerHTML = "hurry up!!!";
                        clearInterval(timer);
                        timer = null;
                    } 
                    else {
                         numbercount.innerHTML = countdown;
                    }
                }
            }
        }
    } else {
        alert("Stop messing around!!!");
        countdown = 10;
    }
    document.getElementById("secretNum").value = "";
}