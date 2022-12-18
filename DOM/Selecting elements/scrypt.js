// Selecting One/Multiple Elements
// Create two unordered lists on the page.
// Create a function that selects the second list and applies a class that sets some
// background color to it.

function selectSecondList() {
    var secondList = document.getElementById("second");
    secondList.classList.add("added-class");
}
selectSecondList();

// Create a second function that, when triggered, selects all &lt;li&gt; elements on the
// page.
// The function also sets a class that sets some bg color to every &lt;li&gt; element.

function selectAll() {
    var lielements = document.getElementsByTagName("li");
    for (var i = 0; i < lielements.length; i++) {
        lielements[i].classList.add("new");
    }
}
selectAll();

// Create one more unordered list and one more function
// The function​ should select only &lt;li&gt; elements from that last list
// Each &lt;li&gt; element should get a class that sets some bg color and transforms the
// text to uppercase.

function thirdList() {
    var thirdList = document.getElementsByTagName("ul")[2];
    var thirdListItems = thirdList.children;
    for (i = 0; i < thirdListItems.length; i++) {
        thirdListItems[i].classList.add("treća-klasa");
    }

    console.log(thirdListItems);
}
var result = thirdList();
console.log(result);