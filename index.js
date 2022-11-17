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
  if (input3 === "") {
  } else if (input3 == "Monster") {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      ` <div id="center">
    <h2>${input1} </h2>
    <img src="monster.png" alt="monster">
    <p> By:${input2}  </p><button id="red" >Delete</button </div>
    `
    );
    DOMSelectors.input1.value = ``;
    DOMSelectors.input2.value = ``;
    DOMSelectors.input3.value = ``;
  } else if (input3 == "Shark") {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      ` <div id="center">
    <h2>${input1} </h2>
    <img src="shark.png" alt="shark">
    <p> By:${input2}  </p><button id="red">Delete</button </div>
    `
    );
    DOMSelectors.input1.value = ``;
    DOMSelectors.input2.value = ``;
    DOMSelectors.input3.value = ``;
  } else if (input3 == "Dude With A Gun") {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      ` <div id="center">
    <h2>${input1} </h2>
    <img src="dudewithagun.png" alt="dudewithagun">
    <p> By:${input2}  </p><button id="red" onclick="removeParent(this.parentNode)">Delete</button </div>
    `
    );
    DOMSelectors.input1.value = ``;
    DOMSelectors.input2.value = ``;
    DOMSelectors.input3.value = ``;
  } else if (input3 == "Person Sitting On A Bench") {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      ` <div id="center">
    <h2>${input1} </h2>
    <img src="PersonSittingonabench.png" alt="PersonSittingonabench">
    <p> By:${input2}  </p><button id="red" onclick="removeParent(this.parentNode)">Delete</button </div>
    `
    );
    DOMSelectors.input1.value = ``;
    DOMSelectors.input2.value = ``;
    DOMSelectors.input3.value = ``;
  } else {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      ` <div id="center">
    <h2>${input1} </h2>
    <img src="Couple.png" alt="couple">
    <p> By:${input2}  </p><button id="red" onclick="removeParent(this.parentNode)">Delete</button </div>
    `
    );
    DOMSelectors.input1.value = ``;
    DOMSelectors.input2.value = ``;
    DOMSelectors.input3.value = ``;
  }
});

function removeParent(d) {
  d.remove();
}
button;
