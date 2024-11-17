import {
  createBtn,
  firstNameInput,
  lastNameInput,
  firstNameOutput,
  lastNameOutput,
  emailInput,
  emailOutput,
  passwordInput,
  confirmPasswordInput,
  passwordOutput,
  confirmPasswordOutput,
  fileOutput,
  fileInput,
  ageOutput,
  ageInput,
} from "./constants.js";
import { Validator } from "./validator.js";

function calculateSum() {
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const x = document.getElementById("x");

  const sum = parseInt(a.value) || 0;
  const sumB = parseInt(b.value) || 0;
  console.log(a);
  return (x.value = sum + sumB);
}

createBtn.addEventListener("click", validateForm);

firstNameInput.addEventListener("input", checkFirstName);
lastNameInput.addEventListener("input", checkLastName);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkPassword);
fileInput.addEventListener("change", checkFile);
ageInput.addEventListener("change", checkAge);

function checkFirstName() {
  return Validator.validateName(firstNameOutput, firstNameInput.value);
}
// function checkFirstName() {
//   Validator.validateName(firstNameOutput, firstNameInput.value);
// }
function checkLastName() {
  return Validator.validateName(lastNameOutput, lastNameInput.value);
}
function checkEmail() {
  return Validator.validateEmail(emailOutput, emailInput.value);
}
function checkPassword() {
  return Validator.validatePasswordMatch(confirmPasswordInput, passwordOutput, confirmPasswordOutput, passwordInput.value);
}
function checkFile() {
  return Validator.validateFile(fileOutput, fileInput, fileInput.files[0]);
}

function checkAge() {
  return Validator.validateAge(ageOutput, ageInput, ageInput.value);
}

function validateForm() {
  const isFirstNameValid = checkFirstName();
  const isLastNameValid = checkLastName();
  const isEmailValid = checkEmail();
  const isPasswordValid = checkPassword();
  const isFileValid = checkFile();
  debugger;
  const isAgeValid = checkAge();

  if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isFileValid && isAgeValid) {
    // allow to create a form
    return true;
  } else {
    // will not let you go thru
    return false;
  }
}
