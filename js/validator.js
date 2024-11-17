import {
  firstNameInput,
  lastNameInput,
  firstNameOutput,
  lastNameOutput,
  confirmPasswordInput,
  fileInput,
  fileOutput,
  ageInput,
} from "./constants.js";

export class Validator {
  static validateName(outputElement, inputValue) {
    const containsOnlyLetters = /^[a-zA-Z]+$/.test(inputValue);
    const isTooShort = inputValue.length < 2;
    const isTooLong = inputValue.length > 9;

    if (isTooShort) {
      outputElement.innerHTML = "Must contain at least 2 characters";
      return false;
    }
    if (!containsOnlyLetters) {
      outputElement.innerHTML = "Cannot contain numbers or symbols";
      return false;
    }
    if (isTooLong) {
      outputElement.innerHTML = "Must contain less than 10 characters";
      return false;
    }
    outputElement.innerHTML = "";
    return true;
  }

  static validateEmail(outputElement, inputValue) {
    const emailPattern = /^(?!.*\.\.)(?!.*\.$)[^\s@]+(\.[^\s@]+)*@[^\s@]+\.[^\s@]{2,}$/;
    const isValid = emailPattern.test(inputValue);

    if (isValid) {
      outputElement.innerHTML = "";
      return true;
    } else {
      outputElement.innerHTML = "Please enter a valid email address (e.g., name@example.com).";
      return false;
    }
  }

  static validatePasswordMatch(confirmPasswordInput, passwordOutput, confirmPasswordOutput, inputValue) {
    const isValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(inputValue);

    if (isValid) {
      passwordOutput.innerHTML = "";
      if (inputValue !== confirmPasswordInput.value) {
        confirmPasswordOutput.innerHTML = "Passwords do not match";
        return false;
      } else {
        confirmPasswordOutput.innerHTML = "";
        return true;
      }
    } else {
      passwordOutput.innerHTML = ["- requires at least 6 characters", "- one number", "- one lowercase letter", "- one uppercase letter"].join(
        "<br>"
      );
      return false;
    }
  }

  static validateFile(outputElement, input, inputValue) {
    const maxSizeKB = 2000;
    const file = inputValue;
    if (!file) {
      outputElement.innerHTML = `0/${maxSizeKB}KB`;
      return false;
    }

    const fileSizeKB = (file.size / 1024).toFixed(0);
    const fileExtension = file.type;

    if (fileExtension !== "image/png") {
      input.value = "";
      outputElement.innerHTML = "Only PNG files are allowed.";
      return false;
    }
    if (fileSizeKB > maxSizeKB) {
      outputElement.style.color = "red";
      outputElement.innerHTML = `File is too large: ${fileSizeKB}/${maxSizeKB}KB`;
      return false;
    }
    outputElement.style.color = "green";
    outputElement.innerHTML = `${fileSizeKB}/${maxSizeKB}KB`;
    return true;
  }

  static validateAge(outputElement, input, inputValue) {
    const minAge = 16;
    const maxAge = 150;

    const isNumber = /^[0-9]+$/.test(inputValue);

    if (inputValue == "") {
      outputElement.innerHTML = "This field is important!";
      return false;
    }
    if (!isNumber) {
      input.value = "";
      outputElement.innerHTML = "Age cannot contain letters or symbols";
      return false;
    }
    if (inputValue < minAge) {
      outputElement.innerHTML = "First, bring your parents here";
      return false;
    }
    if (this.inputValue > maxAge) {
      outputElement.innerHTML = "Are you serious?!";
      return false;
    }
    outputElement.innerHTML = "";
    return true;
  }
}
