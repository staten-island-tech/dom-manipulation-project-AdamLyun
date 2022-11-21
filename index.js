const DOMSelectors = {
  button: document.getElementById("btn"),
  input1: document.querySelector("#input1"),
  input2: document.querySelector("#input2"),
  input3: document.querySelector("#input3"),
  box: document.getElementById("container-box"),
};

DOMSelectors.button.addEventListener("click", function (card) {
  card.preventDefault();
  let input1 = DOMSelectors.input1.value;
  let input2 = DOMSelectors.input2.value;
  let input3 = DOMSelectors.input3.value;
  function makeCard(){
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="output">
    <h3>${input1}</h3>
    <img src="${input3}.png" alt="No Image???">
     <h3>${input2}</h3>
    <button class="remove">Remove</button>
    </div>`
  );
  DOMSelectors.input1.value="";
  DOMSelectors.input2.value="";
  DOMSelectors.input3.value="";
}
function erase(){
  let removes = document.querySelectorAll(".remove");
  removes.forEach((eachRemove) => {
    eachRemove.addEventListener("click", (event => {
   event.target.parentElement.remove();
    }));
  });
};

makeCard();
erase();
});
