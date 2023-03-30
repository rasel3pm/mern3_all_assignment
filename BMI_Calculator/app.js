const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", calculateBMI);

function calculateBMI() {
  //find dom and store
  const weightInput = document.getElementById("weight").value;
  const heightInput = document.getElementById("height").value;

  //if user click calculate button without value than show a alart
  if (weightInput == "" && heightInput == "") {
    alert("please insart a value");
  } else {
    const BMI = weightInput / ((heightInput * heightInput) / 10000);

    //show result
    let resultDisplay = document.getElementById("showResult");
    resultDisplay.innerHTML = `BMI Result is :  ${BMI.toFixed(2)}`;
    resultDisplay.style.backgroundColor = "#dfdfe9";
  }
}
