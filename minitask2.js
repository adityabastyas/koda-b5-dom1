const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

//recursive
const changeColorTraffic = () => {
  red.style.backgroundColor = "red";
  yellow.style.backgroundColor = "grey";
  green.style.backgroundColor = "grey";

  setTimeout(() => {
    red.style.backgroundColor = "grey";
    yellow.style.backgroundColor = "yellow";

    setTimeout(() => {
      yellow.style.backgroundColor = "grey";
      green.style.backgroundColor = "green";

      setTimeout(() => {
        green.style.backgroundColor = "green";
        changeColorTraffic();
      }, 3000);
    }, 2000);
  }, 3000);
};
changeColorTraffic();
