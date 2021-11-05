const slide = document.getElementById("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.onclick = () =>{
    slide.style.transform = "translateX(0)";
    slide.style.transition = ".5s";
}
next.onclick = () =>{
    slide.style.transform = "translateX(-600px)";
    slide.style.transition = ".5s";
}