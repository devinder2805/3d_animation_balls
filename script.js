let elements = document.getElementsByClassName("ball");
let lines = document.getElementsByClassName("lines");
let pos = 0
let time = 0;
for (let i = 0; i < elements.length; i++) {
    const val = elements[i];
    val.style.left = pos + "vw";

    // animation delay for balls
    val.style.animationDelay = time + "s";

    // animation delay for lines
    lines[i].style.animationDelay = time + "s";
    time += 0.25;
    pos += 8;
}
let container = document.getElementById("container");

// setting the width 
container.style.width = pos + "vw";
