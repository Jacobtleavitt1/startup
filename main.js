console.log("here we are")

stylesheet = localStorage.getItem("stylesheet");
bounce = localStorage.getItem("bounce");
username = localStorage.getItem("username");

swapStyle(stylesheet ??= "lightstyle.css");

if (bounce) {
    bounceOn();
}
else {
    bounceOff();
}

console.log("username " + username)
document.getElementById("username").textContent = username;

function swapStyle(sheet) {
    localStorage.setItem("stylesheet", sheet);
    document.getElementById("pagestyle").setAttribute("href", sheet); 
}

// FIXME
function bounceOff() {
    localStorage.setItem("bounce", 1);
    document.getElementById("logo").setAttribute("style", "animation-duration: 0s;");
}

function bounceOn() {
    localStorage.setItem("bounce", 0);
    document.getElementById("logo").setAttribute("style", "animation-duration: 0.5s;");
}

function login(username, password) {
    localStorage.setItem("username", username);
}