var submit = document.getElementById("submitmsg");
var user = document.getElementById("usermsg");
var chat = document.getElementById("chatbox");

function chatRoom() {
    var message = document.createElement("p");
    var text = document.createTextNode(user.value);
    message.appendChild(text);
    chat.appendChild(message);
    user.value = "";
    document.getElementById("usermsg").style.border = " 2px solid lightblue";


}

submit.addEventListener("click", chatRoom);