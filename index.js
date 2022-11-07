const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.querySelector("#input"),
  box: document.getElementById("container-box"),
};




  DOMSelectors.button.addEventListener("click", function(){
    let input = DOMSelectors.input.value; 
    DOMSelectors.box.insertAdjacentHTML("beforeend", 
    ` <p> ${input}</p>`)
    DOMSelectors.input.value= ``
   });
  


const characters = [
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
{
 id: "anivia",
 key: "34",
 name: "Anivia",
 title: "the Cryophoenix",
 tags: [
   "Mage",
   "Support"
 ],
},
{
 id: "annie",
 key: "1",
 name: "Annie",
 title: "the Dark Child",
 tags: [
   "Mage"
 ],
},
{
 id: "aphelios",
 key: "523",
 name: "Aphelios",
 title: "the Weapon of the Faithful",
 tags: [
   "Marksman"
 ],
},
{
 id: "ashe",
 key: "22",
 name: "Ashe",
 title: "the Frost Archer",
 tags: [
   "Marksman",
   "Support"
],
},
{
 id: "aurelionsol",
 key: "136",
 name: "Aurelion Sol",
 title: "The Star Forger",
 tags: [
   "Mage"
 ],
},
{
 id: "azir",
 key: "268",
 name: "Azir",
 title: "the Emperor of the Sands",
 tags: [
   "Mage",
   "Marksman"
 ],    
},
]