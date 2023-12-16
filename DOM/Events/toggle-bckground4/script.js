// Toggle colors random!!


// svaka hexacolor može da neke od vrednosti u nizu "hexcolor"

var hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var btn = document.getElementById("btn");

function toggleBackground() {
    // svaka hexacolor počinje sa "#", to je fiksirana vrednost
    var newvColor = "#";

    // i može imati 6 vrednosti iz niza "hexa"
    for (var i = 0; i < 6; i++) {
        newvColor += hexColor[Math.floor(Math.random() * hexColor.length)];
    }


    document.getElementById("demo").textContent = "color: " + newvColor;
    document.querySelector("div").style.backgroundColor = newvColor;

}


btn.addEventListener("click", toggleBackground);
console.log(toggleBackground);




