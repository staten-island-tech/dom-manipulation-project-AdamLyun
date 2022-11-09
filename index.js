const DOMSelectors = {
  button: document.getElementById("btn"),
  input1: document.querySelector("#input1"),
  input2: document.querySelector("#input2"),
  input3: document.querySelector("#input3"),
  box: document.getElementById("container-box"),
};

DOMSelectors.button.addEventListener("click", function(){
  let input1 = DOMSelectors.input1.value;
  let input2 = DOMSelectors.input2.value; 
  let input3= DOMSelectors.input3.value;
  if (input3 ==="Aatrox"){
    DOMSelectors.box.insertAdjacentHTML("beforeend",
    `<p> - ${input1}  ${input2} bob <button onclick="removeParent(this.parentNode)">Finished</button </p>`)
    DOMSelectors.input1.value= ``
    DOMSelectors.input2.value= ``
    DOMSelectors.input3.value= ``
  }else if (input3 == "Ahri"){
    DOMSelectors.box.insertAdjacentHTML("beforeend",
    `<p> - ${input1}  ${input2} dad <button onclick="removeParent(this.parentNode)">Finished</button </p>`)
    DOMSelectors.input1.value= ``
    DOMSelectors.input2.value= ``
    DOMSelectors.input3.value= ``
  }else{
  DOMSelectors.box.insertAdjacentHTML("beforeend",
  `<p> - ${input1}  ${input2} die<button onclick="removeParent(this.parentNode)">Finished</button </p>`)
  DOMSelectors.input1.value= ``
  DOMSelectors.input2.value= ``
  DOMSelectors.input3.value= ``
  }
})


function removeParent(d){
 d.remove()
}

if (input3.value ==="Aatrox"){


}



const chacters= [
  {
 id: "aatrox",
 key: "266",
 name: "Aatrox",
 title: "the Darkin Blade",
 tags: [
   "Fighter",
   "Tank"
 ],
},
{
 id: "ahri",
 key: "103",
 name: "Ahri",
 title: "the Nine-Tailed Fox",
 tags: [
   "Mage",
   "Assassin"
 ],
},
{
 id: "akali",
 key: "84",
 name: "Akali",
 title: "the Rogue Assassin",
 tags: [
   "Assassin"
 ],
},
{
 id: "alistar",
 key: "12",
 name: "Alistar",
 title: "the Minotaur",
 tags: [
   "Tank",
   "Support"
 ],
},
{
 id: "amumu",
 key: "32",
 name: "Amumu",
 title: "the Sad Mummy",
 tags: [
   "Tank",
   "Mage"
 ],
},
]