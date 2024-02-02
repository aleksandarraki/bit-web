function create() {
    var div = document.getElementById("div-1");
    div.innerHTML = `
    <select name='drop' id='drop1'>
     <option value='1st option'>1st option</option>
     <option value='2nd option'>2nd option</option>
     <option value='3rd option'>3rd option</option>
    </select>
    `;

}
create();


function createTwo(array) {
    var divTwo = document.getElementById("div-2");
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