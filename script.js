// Select the section with an id of container without using querySelector.
document.getElementById("container"); //id is container

//Select the section with an id of container using querySelector.
document.querySelector("#container");

//Select all of the list items with a class of "second".
document.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol li.third"); //in an ordered list, li (list) third

//Give the section with an id of container the text "Hello!".
document.getElementById("container").innerHTML = "Hello :3";
//innerHTML is used to treat hello and parse through html and not plain text 

//Add the class main to the div with a class of footer.
const footers = document.querySelector(".footer");
footers.classList.add("main");
//document.querySelector(".footer").classList.add("main"); <-- to make last question easier changed
//classList uses DOM and makes it a method to manipulate

//Remove the class main on the div with a class of footer.
document.querySelector(".footer").classList.remove("main");

//Create a new li element.
let newEl = document.createElement("li");

//Give the li the text "four".
newEl.innerText = "four"

//Append the li to the ul element.
document.querySelector("ul").appendChild(newEl);

//Loop over all of the lis inside the ol tag and give them a background color of "green".
const newOl = document.querySelector("ol");
const newLi = newOl.querySelectorAll("li");

for (let i = 0; i < newLi.length; i++) {
  newLi[i].style.backgroundColor = "green";
}

//Remove the div with a class of footer.
footers.remove();
