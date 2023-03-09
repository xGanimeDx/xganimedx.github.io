/**
 * ELEMENTS
 */
const generateBtn = document.querySelector(".generate-btn");
const resetBtn = document.querySelector(".reset-btn");
const outputContainer = document.querySelector(".output-container");
const firstValue = document.getElementById("fizz-value");
const secondValue = document.getElementById("buzz-value");
const startRange = document.getElementById("start-range");
const endRange = document.getElementById("end-range");
const inputs = document.querySelectorAll(".input");
/**
 * EVENT LISTENERS
 */
generateBtn.addEventListener("click", () => {
  const first = firstValue.value;
  const second = secondValue.value;
  const start = startRange.value;
  const end = endRange.value;
  let result;
  if (first === "" || second === "" || start === "" || end === "") {
    result = fizzBuzz();
  } else {
    result = fizzBuzz(first, second, start, end);
  }
  outputResultArray(result);
});

resetBtn.addEventListener("click", () => {
  outputContainer.innerHTML = "";
  inputs.forEach((input) => {
    input.value = "";
  });
});

/**
 * FUNCTIONS
 */
const fizzBuzz = (first = 3, second = 5, start = 1, end = 100) => {
  let result = [];
  for (i = start; i <= end; i++) {
    if (i % first === 0 && i % second === 0) {
      result.push("FizzBuzz");
    } else if (i % first === 0) {
      result.push("Fizz");
    } else if (i % second === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
};

const outputResultArray = (arr) => {
  outputContainer.innerHTML = "";
  arr.forEach((item) => {
    if (item === "FizzBuzz") {
      outputContainer.innerHTML += `<p class="element fizzbuzz">${item}</p>`;
    } else if (item === "Fizz") {
      outputContainer.innerHTML += `<p class="element fizz">${item}</p>`;
    } else if (item === "Buzz") {
      outputContainer.innerHTML += `<p class="element buzz">${item}</p>`;
    } else {
      outputContainer.innerHTML += `<p class="element">${item}</p>`;
    }
  });
};
