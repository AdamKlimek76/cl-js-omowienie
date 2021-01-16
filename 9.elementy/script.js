const myDiv = document.getElementById("my-div");
console.log(myDiv.id);
console.log(myDiv.innerText);
console.log(myDiv.className);
console.log(myDiv.classList);
console.log("Czy #my-div zawiera klasę class-1: " + myDiv.classList.contains("class-1"));
myDiv.classList.add("class-3");
myDiv.classList.remove("class-1");
myDiv.classList.toggle("class-4");
console.log(myDiv.dataset);
console.log(myDiv.dataset.attr1);
console.log(myDiv.tagName);

console.log(myDiv.getAttribute("xyz"));
myDiv.setAttribute("myAttribute", "myValue");

myDiv.style.backgroundColor = "cyan";
