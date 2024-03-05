console.log("here we are")

stylesheet = localStorage.getItem("stylesheet");
bounce = localStorage.getItem("bounce");
username = localStorage.getItem("username");

swapStyle(stylesheet ??= "lightstyle.css");

console.log("bounce: ", bounce)
if (bounce == 1) {
    console.log("bounce on: ", bounce)
    bounceOn();
} else {
    console.log("bounce off: ", bounce)
    bounceOff();
}

console.log("username " + username)
document.getElementById("username").textContent = username ??= "unknown user";

function swapStyle(sheet) {
    localStorage.setItem("stylesheet", sheet);
    document.getElementById("pagestyle").setAttribute("href", sheet); 
}

function bounceOff() {
    localStorage.setItem("bounce", 0);
    document.getElementById("logo").style.animationDuration = "0s";
}

function bounceOn() {
    localStorage.setItem("bounce", 1);
    document.getElementById("logo").style.animationDuration = "0.5s";
}

function login(username, password) {
    const nameEl = document.querySelector("#username_input");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("username", nameEl.value);
    window.location.href = "schedule.html";
    console.log("Log in");
}

function logout() {
    localStorage.setItem("username", "unknown user")
}

function secureTextOff() {
    document.querySelector("#password").type = "text";
}

function secureTextOn() {
    document.querySelector("#password").type = "password";
}