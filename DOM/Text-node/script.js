// Create a function that takes text from one of the &lt;li&gt; elements and presents it on
// screen using alert.

// Create one more function.
// The function should take some text as an argument.
// The function should select the last &lt;li&gt; element in the list and replace its text with
// text passed as the function argument.

// function printAlert() {
//     var item = document.querySelector("ul");
//     var alertNode = item.firstElementChild;
//     window.alert(alertNode.textContent);
// }

function printAlert() {
    var alertNode = document.getElementsByTagName("li")[0];
    alert(alertNode.textContent);
}

printAlert();

// function replace(text) {
//     var item = document.querySelector("ul");
//     var textNode = item.lastElementChild;
//     textNode.textContent = text;
// }

function replace(text) {
    var textNode = document.getElementsByTagName("li")[2];
    textNode.textContent = text;
}

replace("Hello!")