var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var submitButton = document.querySelector("#submit");
var output = document.querySelector("#output");

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function submitHandler() {
  let dob = dateOfBirth.value;
  let sum = calculateSum(dob);
  if (sum && luckyNumber.value) {
    if (sum % luckyNumber.value === 0) {
      output.innerText = "Yayy Your Birthday is lucky 😎";
    } else {
      output.innerText = "OOPS! Your Birthday is not lucky";
    }
  } else {
    output.innerText = "Please Enter All the fields";
  }
}

submitButton.addEventListener("click", submitHandler);
