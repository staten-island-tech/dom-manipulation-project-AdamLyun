const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.querySelector("#input"),
  box: document.getElementById("container-box"),
};

DOMSelectors.button.addEventListener("click", function () {
  const year = parseInt(document.getElementById('input').value);
  const age = (2022 - year );

  if(year < 1901){
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> You are ${age} years old. Congrats on being born before a classfied generation...</p> 
    ` );
}else if(year >=1901 && year < 1925){
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text"> You are ${age} years old. Congrats on being born in "The Greatest Generation" (1901-1924)</p> 
  ` );
}else if(year >=1925 && year < 1946){
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text">  You are ${age} years old. Congrats on being born in "The Silent Generation" (1925-1945)  </p> 
  ` );
}else if(year >=1946 && year < 1965){
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text"> You are ${age} years old. Congrats on being born in  "The Baby Boomer Generation" (1946-1964) </p> 
  ` );
}else if(year >=1965 && year < 1980){
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text"> You are ${age} years old. Congrats on being born in "Generation X" (1965-1979) </p> 
  ` );
}else if(year >=1980 && year < 1995){
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text"> You are ${age} years old. Congrats on being born in  "Millennials" (1980-1994) </p> 
  ` );
}else if(year >=1995 && year < 2013){
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text"> You are ${age} years old. Congrats on being born in  "Generation Z" (1995-2012)  </p> 
  ` );
}else if(year >=2013  && year < 2026){
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text"> You are ${age} years old. Congrats on being born in  "Gen Alpha" (2013–2025)  </p> 
  ` );
}else if(year > 2025) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text"> You are ${age} years old. You dont exist yet :) </p> 
  ` );
}

  DOMSelectors.input.value = ``;
});
;


const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  document.location.reload();
});
