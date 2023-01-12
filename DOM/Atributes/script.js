

function validateForm() {
    var form = document.querySelector("form");
    var inputs = document.querySelectorAll("input");

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute("required") && inputs[i].value.length === 0) {
            inputs[i].classList.add("red");
        }
    }
    return inputs;
}
validateForm();