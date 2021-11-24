// Assignment Code
const generateBtn = document.getElementById("generate");
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolsEl = document.getElementById('symbols')

// objects
const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol
}

// event listener of variables
generate.addEventListener("click", () =>{
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbols = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length);
});

// function generating the password
function generatePassword(lower, upper, number, symbols, length){
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbols;
  const typesArr=[{lower}, {upper}, {number}, {symbols}].filter(item => Object.values(item)[0]);
  // if the count 0 return nothing
  if(typesCount === 0){
    return '';
  }
  // choosing and randomizing between selected parameters
  for(let i=0; i<length; i+=typesCount){
    typesArr.forEach(type => {
      const functionName = Object.keys(type)[0];
      generatedPassword += randomFunction[functionName](); 
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;

}

// randomizer functions of each lower cases, upper cases, numbers and symbols
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol(){
  const symbols = '!@#$%^&*(){}[]+<>?,.|:;'
  return symbols[Math.floor(Math.random()*symbols.length)];
}