
var count = 0;


function decrease() {
    count -= 1;
    document.getElementById("value").textContent = count;
    document.getElementById("value").style.color = "red";
};

function reset() {
    count = 0;
    document.getElementById("value").textContent = count;
    document.getElementById("value").style.color = "black";
};

function increase() {
    count += 1;
    document.getElementById("value").textContent = count;
    document.getElementById("value").style.color = "green";
};
