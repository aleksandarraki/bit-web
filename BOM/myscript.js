function printExternal() {
    console.log("Cao još jednom!")
}
printExternal();

// BOM Window Object

console.log(window)
console.log(window.navigator)

// Window.navigator

function platform() {
    return navigator.geolocation;
}
console.log(platform())

function app() {
    return navigator.appVersion;
}
console.log(app())

function company() {
    console.log(navigator.appName)
}
company();

function isOnline() {
    if (navigator.onLine) {
        return "Online";
    }
}
console.log(isOnline());


// window.screen


console.log(window.screen)

function widthAndHeight() {
    console.log(window.screen.height, window.screen.width)
}
widthAndHeight();

function maxBrowserHeight() {
    console.log(window.screen.availHeight)
}
maxBrowserHeight();


// window.location


console.log(window.location)

function wLocation() {
    console.log(window.location.href, window.location.hostname, window.location.protocol, window.location.pathname);
}
wLocation();


function reload() {
    return window.location.reload;
}
console.log(reload());



// Window Methods

// Create a function that shows the user a greeting message using alert
// ● Then a question is presented to the user using prompt
// ● When the user provides the answer, that answer is used in the confirm
// dialog
// ● The format of the message in the dialog should be: &quot;We will submit this
// answer now! &quot; + the answer
// ● If the user clicks OK, show alert with success message
// ● If the user clicks Cancel, don&#39;t show anything


function greeting() {
    alert("Hello there!");
}
greeting();

function question() {
    prompt("Would you like to continue?")
}
question();

function dialog() {
    confirm('Are you sure you want to continue?')
    if (true) {
        alert("We will submit this answer");
        alert('Succes');
    }
    return;

}
dialog();





