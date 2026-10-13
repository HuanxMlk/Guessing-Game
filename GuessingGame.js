var secretNumber = 0;
var secretSet = false;
var timer = null;
var countdown = 10;
var guessCount = 0;
var maxNumber = 99;
var maxTime = 10;
function restartGame(){
    clearInterval(timer);
    timer = null;
    secretNumber = 0;
    secretSet = false;
    guessCount = 0;
    countdown = maxTime;
    document.getElementById("numbercount").innerHTML = maxTime;
    document.getElementById("history").innerHTML = "";
    document.getElementById("guesscount").innerHTML = "Guesses: 0";
    document.getElementById("title").innerHTML = "Input your S E C R E T number";
    document.getElementById("secretNum").value = "";
    document.querySelectorAll(".diff-btn").forEach(function(b){ b.disabled = false; });
}
function setDifficulty(level){
    if(!secretSet){
        var digits = level + 1;
        var max = "";
        var i = digits;
        while (i > 0) {
            max += "9";
            i--;
        }
        maxNumber = Number(max);
        maxTime = 20 - digits * 5;

        countdown = maxTime;
        document.getElementById("numbercount").innerHTML = maxTime;
        document.getElementById("secretNum").placeholder = "Enter 1-" + maxNumber;

        const buttons = document.querySelectorAll(".diff-btn");
        buttons.forEach(function(btn){ btn.classList.remove("active"); });
        buttons[level].classList.add("active");
    }
}
function setSecretNumber() {
    const number = Number(document.getElementById("secretNum").value);
    const numbercount = document.getElementById("numbercount");
    const history = document.getElementById("history");
    const title = document.getElementById("title");
    if (number > 0 && number <= maxNumber) {
        if (secretSet == false) {
            secretNumber = number;
            alert("Good Job");
            title.innerHTML = "Try to Guess the Number";
            secretSet = true;
            document.querySelectorAll(".diff-btn").forEach(function(b){ b.disabled = true; });
        } else {
            clearInterval(timer);
            timer = null;
            guessCount += 1;
            document.getElementById("guesscount").innerHTML = "Guesses: " + guessCount;
            if (secretNumber == number) {
                alert("Your guess is correct!! \n" + secretNumber +"\n"+"Guesses: "+guessCount);
                secretNumber = 0;
                secretSet = false;
                document.querySelectorAll(".diff-btn").forEach(function(b){ b.disabled = false; });
                history.innerHTML = "";
                countdown = maxTime;
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
                countdown = maxTime;
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
    }
    document.getElementById("secretNum").value = "";
}
