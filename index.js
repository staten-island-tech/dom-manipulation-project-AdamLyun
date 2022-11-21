const DOMSelectors = {
  button: document.getElementById("btn"),
  input1: document.querySelector("#input1"),
  input2: document.querySelector("#input2"),
  input3: document.querySelector("#input3"),
  box: document.getElementById("container-box"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input1 = DOMSelectors.input1.value;
  let input2 = DOMSelectors.input2.value;
  let input3 = DOMSelectors.input3.value;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<div class="output">
    <h3>${input1}</h3>
    <img src="${input3}.png" alt="a">
     <h3>${input2}</h3>
    <button class="remove">Remove</button>
    </div>`
  );


  const removes = document.querySelectorAll(".remove");
  const outputs = document.querySelector(".output");
  removes.forEach((eachRemove) => {
    eachRemove.addEventListener("click", () => {

      outputs.remove();
      
   
    });
  });
}); 
