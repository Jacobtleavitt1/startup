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

async function login(username, password) {
    const nameEl = document.querySelector("#username_input");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("username", nameEl.value);
    localStorage.setItem("password", passwordEl.value);
    let myschedule = await fetchSchedule(nameEl.value, passwordEl.value);
    localStorage.setItem("schedule", JSON.stringify(myschedule));
    window.location.href = "schedule.html";
    console.log("Log in");
}

function logout() {
    localStorage.setItem("username", "unknown user")
    localStorage.removeItem("password");
    localStorage.removeItem("schedule");
}

function secureTextOff() {
    document.querySelector("#password").type = "text";
}

function secureTextOn() {
    document.querySelector("#password").type = "password";
}

async function fetchSchedule(username, password) {
    console.log("fetch schedule");
    try {
        let response = await fetch('/api/schedule', {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
            "username": username,
            "password": password,
            },
        }); // parses JSON response into native JavaScript objects
        if (response.status === 401) {
            // new user
            await fetch('/api/user', {
                method: "POST",
                headers: {
                    "username": username,
                    "password": password,
                },
            });
            return null;
        }
        let myschedule = await response.json();
        console.log(myschedule);
        return myschedule;
    } catch {
        return null;
    }
}