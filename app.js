let lengthInput = document.querySelector("#length");

let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let lengthValue = document.querySelector("#lengthValue");
let strengthBar = document.querySelector("#strengthBar");
let strengthText = document.querySelector("#strengthText");

let generateBtn = document.querySelector("#generate");
let passwordInput = document.querySelector("#password");
let copyBtn = document.querySelector("#copy");

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*";


lengthInput.addEventListener("input", function () {
    lengthValue.innerText = lengthInput.value;
});
generateBtn.addEventListener("click", () => {
    let password = "";
    let characters = "";
    if (uppercase.checked) {
        characters += upperChars
    }
    if (lowercase.checked) {
        characters += lowerChars
    }
    if (numbers.checked) {
        characters += numberChars
    }
    if (symbols.checked) {
        characters += symbolChars
    }
    if (characters.length === 0) {
        passwordInput.value = "Select an option!";
        return;
    }
    for (let i = 0; i < Number(lengthInput.value); i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        let randomChar = characters[randomIndex]
        password += randomChar
        console.log(password)
    }
    passwordInput.value = password
    strengthMeter(password);
})
copyBtn.addEventListener("click", async () => {
    try {
        if (passwordInput.value === "" || passwordInput.value==="Select an option!") {
            alert("Please Generate Your Password First!")
            return;
        }
        await navigator.clipboard.writeText(passwordInput.value)
        copyBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    }
    catch (error) {
        alert("Copy failed:", error.message)
    }
})

const strengthMeter = (password) => {
    let points = 0;
    if (password.length >= 12) {
        points += 3;
    }
    if (uppercase.checked) {
        points += 2;
    }

    if (lowercase.checked) {
        points += 1;
    }

    if (numbers.checked) {
        points += 2;
    }

    if (symbols.checked) {
        points += 2;
    }
    let percentageWidht = (points/10)*100;
    if(points <5){
        strengthBar.style.width=percentageWidht+"%"
        strengthBar.style.backgroundColor="red"
        strengthText.innerHTML="Weak"
    }
    if (points >= 5 && points <=7 ){
        strengthBar.style.width=percentageWidht+"%"
        strengthBar.style.backgroundColor="orange"
        strengthText.innerHTML="Medium"
    }
    if(points >7){
        strengthBar.style.width=percentageWidht+"%"
        strengthBar.style.backgroundColor="green"
        strengthText.innerHTML="Strong"
    }
   
    
}
