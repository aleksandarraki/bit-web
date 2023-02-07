document.getElementById("button").addEventListener("click", loadPictures);

function loadPictures() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var pictures = JSON.parse(xhr.responseText);
            var imgURL = pictures.message;

            var image = document.createElement("img");
            image.src = imgURL;
            document.getElementById("pictures").appendChild(image);

        } else {
            console.log("Error" + xhr.status);
        }
    }

    xhr.send();
}


