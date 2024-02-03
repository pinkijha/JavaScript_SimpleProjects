
// light on|off
let light = document.querySelector("#mode");

light.addEventListener("click", () => {


    let image = document.querySelector("#img");

    if (image.src.match('bulbon')) {
        image.src = "pic_bulboff.gif";
        light.innerHTML = "Switch Off";
    }
    else {
        image.src = "pic_bulbon.gif";
        light.innerHTML = "Switch On";
    }
})




