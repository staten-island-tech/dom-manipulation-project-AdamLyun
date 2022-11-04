const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.querySelector("#input"),
  box: document.getElementById("container-box"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    ` <p> Hello, ${input}, what is your weight?</p> 
  <input type="text" id="input">
  <button type="button" id="btn">Click Me!</button>`
  );
  DOMSelectors.input.value = ``;
});
