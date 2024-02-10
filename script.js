const characterAmountNumber = document.getElementById("characterAmountNumber");
const characterAmountRange = document.getElementById("characterAmountRange");
const upperCaseEL = document.getElementById("upperCaseEL");
const lowerCaseEl = document.getElementById("lowerCaseEl");
const symbolsEL = document.getElementById("symbolsEL");
const numbersEL = document.getElementById("numbersEL");


const btn = document.getElementById("btn");
const result = document.getElementById("result");
const copyText = document.getElementById("copyText")

function generatePassword(
  length,
  includeLowercase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=*/";

  let allowedChar = "";
  let password = "";

  allowedChar += includeLowercase ? lowercaseChars : "";
  allowedChar += includeUpperCase ? uppercaseChars : "";
  allowedChar += includeNumbers ? numbers : "";
  allowedChar += includeSymbols ? symbols : "";

  if (length > 30) {
    return `(password length must be in the range of 7-30 characters)`;
  }
  if (allowedChar.length === 0) {
    return `(At least 1 set of characters needs to be selected)`;
  }
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * allowedChar.length);
    password += allowedChar[random];
  }

  return password;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

btn.addEventListener("click", () => {
  const hasUpper = upperCaseEL.checked;
  const hasLower = lowerCaseEl.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbols = symbolsEL.checked;

  result.textContent = generatePassword(
    characterAmountNumber.value,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbols
  );
});

copyText.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const password = result.innerText;

  if(!password){
    return 
  } 
  textArea.value = password
  document.body.appendChild(textArea)

  textArea.select();
  document.execCommand("copy")
  textArea.remove();
  alert("Copied!")
})
