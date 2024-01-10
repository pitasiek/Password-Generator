// Takes hold of all HTML elements
const userInput = document.getElementById("genPassword");
const selectedLength = document.getElementById("symbolsNumber");
const nPassword = document.getElementById("newPassword");
const genBtn = document.getElementById("generateBtn");

    // Makes a list of all small and big letters.
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetList = [...alphabet];
    let alphabetListUpperCase = alphabet.toUpperCase();
    alphabetListUpperCase = [...alphabetListUpperCase];
    // ready list
    let newList = [...alphabetList, ...alphabetListUpperCase];

// Listens to the button click
genBtn.addEventListener("click", () => {
    // Holds user's input
    const inputValue = userInput.value;
    
    // List of user's input letters 
    let inputList = [];

    // Loops to make the list of 3 symbols 
    for (let i = 0; i < 3; i++) {
        inputList.push(inputValue[i]);
    }

    // password length value
    const lengthValue = selectedLength.value;

    // if statement that allows the rule of 3 symbols or letters to be true
    if(inputValue.length === "" || inputValue.length != 3 
    || newList.includes(inputList[0]) || newList.includes(inputList[1]) || newList.includes(inputList[2])) {
        alert("Please enter a valid input with exactly 3 characters.");
    } else {
        buildPassword(inputList, lengthValue);
    }
})

// takes user input to build the password
function buildPassword(li, num) {
    //newList
    let fPassword = [...li];
    num -= 3;
    for(let i = 0; i < num; i++) {
        fPassword.push(newList[Math.floor(Math.random() * newList.length)]);
    }
    shuffle(fPassword);
    fPassword = fPassword.join('');
    nPassword.innerText = `Your new password is: ${fPassword}`;
}

// function that shuffles the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}