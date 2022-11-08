const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.querySelector("#input"),
  box: document.getElementById("container-box"),
  bnt: document.getElementById("bn")
};

DOMSelectors.button.addEventListener("click", function(){
  let input = DOMSelectors.input.value; 
  DOMSelectors.box.insertAdjacentHTML("beforeend",
  `<p> - ${input} <button onclick="removeParent(this.parentNode)">Finished</button </p>`)
  DOMSelectors.input.value= ``
})


function removeParent(d){
 d.remove()
}
