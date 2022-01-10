const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const submitButton = document.querySelector("#submit");
const output = document.querySelector("#output");

const calculateSum = dob => {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

const submitHandler = () => {
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
