// toggle() Method


var btn = document.querySelector("button");
function toggle() {
    document.getElementById("div").classList.toggle("newClass")
}
btn.addEventListener("click", toggle);