function buttonClicked(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    const header = document.getElementById("header-title");
    header.textContent = "Changed";
    header.style.color = "red";
}

function runMouseEvent(e){
    console.log("Event type:"+e.type);
    const output = document.getElementById("output");
    output.innerHTML = `<h3>MouseX: ${e.offsetX}</h3>`;
    const box = document.getElementById("box");
    box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

const button = document.querySelector("#button");
button.addEventListener("click", buttonClicked)
const box = document.getElementById("box");
box.addEventListener("mouseenter", runMouseEvent)
box.addEventListener("mouseleave", runMouseEvent)
box.addEventListener("mouseover", runMouseEvent)
box.addEventListener("mouseout", runMouseEvent)
box.addEventListener("mousemove", runMouseEvent)
