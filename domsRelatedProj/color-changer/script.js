const color = document.querySelectorAll(".color");
const para = document.getElementsByClassName("para");
const body = document.querySelector("body");


color.forEach(function(color){
    color.addEventListener("click", (e) =>{
    console.log("clicked");
    console.log(e);
    console.log(e.target);
    if(e.target.id === "grey"){
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
    }
    else if(e.target.id === "green"){
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
    }
    else if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
    }
    else if(e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id;
        body.style.color = "blue";
    }
    else if(e.target.id === "white"){
        body.style.backgroundColor = e.target.id;
        body.style.color = "blue";
    }
})})


