function create() {
    var div = document.querySelectorAll("div")[0];
    div.innerHTML = "<select name='drop' id='drop1'><option value='1st option'>1st option</option><option value='2nd option'>2nd option</option><option value='3rd option'>3rd option</option></select>";

}
create();


function createTwo(array) {
    var divTwo = document.querySelectorAll("div")[1];
    var dropdown = document.createElement("select");
    divTwo.appendChild(dropdown);

    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        dropdown.appendChild(option);
    }
}
createTwo(["option 4", "option5", "opton6"]);