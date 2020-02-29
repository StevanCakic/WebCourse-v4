//console.log(document);
//console.log(document.title);
//console.dir(document)

//document.title = "1333";
//console.log(document.body);
//console.log(document.all[11]);
//console.log(document.links);

const headerTitle = document.getElementById("header-title");
//console.log(headerTitle)
//console.log($("#header-title"));

function $(selector){
    return document.querySelector(selector);
}

console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
console.log(headerTitle.innerHTML);
headerTitle.innerHTML = "Novi naslov";
headerTitle.style.color = "red";

const items = document.querySelectorAll(".list-group-item")
console.log(items[0]);
for(let i =0; i < items.length;i++){
    items[i].style.backgroundColor = "yellow";
}

const submit = document.querySelector("input[type=submit]")
submit.value = "Prihvati";
console.log(items);
console.log(items[0].parentNode.parentNode);
console.log(items[0].parentNode.childNodes)
console.log(items[0].parentNode.children);

const newItem = document.createElement("li");
newItem.className = "list-group-item";
const textNode = document.createTextNode("Item 5");
newItem.appendChild(textNode);
items[0].parentNode.appendChild(newItem);

items[0].parentNode.removeChild(items[1]);