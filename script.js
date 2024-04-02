let copyButton = document.querySelector(".svg");
copyButton.addEventListener("click", () => {
  let text = document.querySelector(".top-password");
  text.select();
  document.execCommand("copy");
  alert("Copied the text: " + text.value);
});

const firstDiv = document.querySelector(".light-one");
const secondDiv = document.querySelector(".light-two");
const thirdDiv = document.querySelector(".light-three");
const fourthDiv = document.querySelector(".light-four");
const firstBtn = document.querySelector(".input-first");
const secondBtn = document.querySelector(".input-second");
const thirdBtn = document.querySelector(".input-third");
const fourhtBtn = document.querySelector(".input-fourth");
const buttons = document.querySelectorAll(".input");
const divs = Array.from(document.querySelectorAll(".light"));
const generate = document.querySelector(".btn");
const slider = document.querySelector(".range");
const span = document.querySelector(".ten");

let value = 10;
slider.addEventListener("change", () => {
  span.textContent = slider.value;
  value = slider.value;
});

slider.oninput = function () {
  value = (this.value - this.min) / (this.max - this.min);
  let percent = value * 100;
  this.style.background = `linear-gradient(
    to right,
    #a4f3eb 0%,
    #a4f3eb ${percent}%,
    #18171f ${percent}%,
    #18171f 100%
  )`;
};

let count = 0;
firstBtn.addEventListener("click", () => {
  if (firstBtn.checked) {
    console.log(count);
    count++;
  } else {
    count--;
  }
  console.log(count);
});
secondBtn.addEventListener("change", () => {
  if (secondBtn.checked) {
    count++;
    console.log(count);
  } else {
    count--;
  }
  console.log(count);
});
thirdBtn.addEventListener("change", () => {
  if (thirdBtn.checked) {
    count++;
    console.log(count);
  } else {
    count--;
  }
  console.log(count);
});
fourhtBtn.addEventListener("change", () => {
  if (fourhtBtn.checked) {
    count++;
    console.log(count);
  } else {
    count--;
  }
  console.log(count);
});

generate.addEventListener("click", () => {
  if (value <= 8) {
    alert("password must contain minimum 8 symbols");
  }
  if (count === 1 && value > 8) {
    firstDiv.style.backgroundColor = "#F64A4A";
    secondDiv.style.backgroundColor = "#18171F";
    thirdDiv.style.backgroundColor = "#18171F";
    fourthDiv.style.backgroundColor = "#18171F";
  }
  if (count === 2 && value > 8) {
    firstDiv.style.backgroundColor = "#FB7C58";
    secondDiv.style.backgroundColor = "#FB7C58";
    thirdDiv.style.backgroundColor = "#18171F";
    fourthDiv.style.backgroundColor = "#18171F";
  }
  if (count === 3 && value > 8) {
    firstDiv.style.backgroundColor = "#F8CD65";
    secondDiv.style.backgroundColor = "#F8CD65";
    thirdDiv.style.backgroundColor = "#F8CD65";
    fourthDiv.style.backgroundColor = "#18171F";
  }
  if (count === 4 && value > 8) {
    firstDiv.style.backgroundColor = "#A4FFAF";
    secondDiv.style.backgroundColor = "#A4FFAF";
    thirdDiv.style.backgroundColor = "#A4FFAF";
    fourthDiv.style.backgroundColor = "#A4FFAF";
  }
});
