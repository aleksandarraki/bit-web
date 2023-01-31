

// var btn = document.getElementById("btn");
// btn.addEventListener("click", function onClick() {
//     document.querySelector("div").style.backgroundColor = "lightblue";
// })

function toggle() {
    var btn = document.getElementById('btn');
    // var div = document.querySelector('div');
    var isColor = true;

    btn.addEventListener('click', function change() {
        if (isColor) {
            document.querySelector("div").style.backgroundColor = 'lightblue';
        } else {
            document.querySelector("div").style.backgroundColor = 'white';
        }

        return isColor = !isColor;

    })
}
toggle();