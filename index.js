const DOMSelector = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  point: document.querySelector(".point"),
  box: document.getElementById("big-black-box"),
};

function backgroundandText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "This is now a bigger red Box";
  text.style.fontSize = "40px";
}
DOMSelector.button.addEventListener("click", function () {
  backgroundandText(DOMSelector.box, DOMSelector.text);
});

function changeLi() {
  DOMSelector.points.forEach((point) => {
    console.log(point);
  });
}
changeLi();
