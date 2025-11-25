const form = document.querySelector("form:nth-child(2)");
const farenheit = document.querySelector(".farenheit");
const kelvin = document.querySelector(".kelvin");
const reamur = document.querySelector(".reamur");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let c = event.target.angka.value;

  let f = (c * 9) / 5 + 32;
  let k = c + 273.15;
  let r = (c * 4) / 5;

  farenheit.textContent = f;
  kelvin.textContent = k;
  reamur.textContent = r;
  // farenheit.innerText = f;
  // kelvin.innerText = k;
  // reamur.innerText = r;
});
