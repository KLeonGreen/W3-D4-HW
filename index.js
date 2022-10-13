window.onload = function () {
  const generateBoardNbrs = function () {
    for (let i = 0; i < 76; i++) {
      const numbersSection = document.getElementById("numbers");
      const div = document.createElement("div");
      div.innerText = i + 1;
      numbersSection.append(div);
      div.classList.add("digits");
      console.log(div);
    }
  };
  generateBoardNbrs();
};

const randomNumber = function () {
  const randomDigit = Math.floor(Math.random() * (76 - 1 + 1) + 1);
  console.log(randomDigit);
  const display = document.getElementById("display-number");
  display.value = display.value + randomDigit + ",";
  console.log(randomDigit);

  const digitsHighlight = document.getElementsByClassName("digits");
  for (let digit of digitsHighlight) {
    const digitnbr = parseInt(digit.innerText);
    if (digitnbr === randomDigit) {
      digit.style.backgroundColor = "#f18e00";
      digit.style.color = "white";
      digit.style.fontWeight = "500";
      digit.style.transition = ".5s";
    }
  }
};

const button = document.getElementById("random");
button.addEventListener("click", randomNumber);

const displayValue = event.target;
display.innerText = randomDigit;
