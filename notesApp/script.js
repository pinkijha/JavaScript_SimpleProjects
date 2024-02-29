const btn = document.getElementById("btn");
const creatNotes = document.querySelector(".notes-container");
const notes = document.querySelectorAll(".input-box");
const i = document.querySelector(".fa-solid");


btn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let i = document.createElement("i");
    inputBox.className = "input-box";
    // i.classList.add("fa-solid ", "fa-trash");
    i.className = "fa-solid fa-trash";
    inputBox.setAttribute("contenteditable", "true");
    creatNotes.appendChild(inputBox).appendChild(i);
});

creatNotes.addEventListener("click",function(e) {
    if(e.target.tagName === 'I'){
        e.target.parentElement.remove();

    }
})