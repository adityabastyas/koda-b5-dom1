const display = document.createElement("div");
display.className = "display";
display.textContent = "0";
document.body.appendChild(display);

const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

const scientific = document.createElement("div");
scientific.className = "scientific";

const sciButtons = [
  "Rad | Deg",
  "x!",
  "Inv",
  "sin",
  "ln",
  "π",
  "cos",
  "log",
  "e",
  "tan",
  "√",
  "Ans",
  "EXP",
  "xʸ",
];

sciButtons.forEach((txt) => {
  const btn = document.createElement("button");
  btn.textContent = txt;
  scientific.appendChild(btn);
});

const basic = document.createElement("div");
basic.className = "basic";

const basicButtons = [
  "(",
  ")",
  "%",
  "AC",
  "7",
  "8",
  "9",
  "÷",
  "4",
  "5",
  "6",
  "×",
  "1",
  "2",
  "3",
  "−",
  "0",
  ".",
  "=",
  "+",
];

basicButtons.forEach((txt) => {
  const btn = document.createElement("button");
  btn.textContent = txt;

  if (txt === "=") {
    btn.classList.add("equal");
  }

  basic.appendChild(btn);
});

container.appendChild(scientific);
container.appendChild(basic);
