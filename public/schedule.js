let messages = [];
let numMessages = 0;
const username = localStorage.getItem("username");
const password = localStorage.getItem("password");
renderMessages();

loadschedule = JSON.parse(localStorage.getItem("schedule"));
console.log(loadschedule);

function renderSchedule(myschedule) {
    document.getElementById("a1").textContent = myschedule.a1;
    document.getElementById("a2").textContent = myschedule.a2;
    document.getElementById("a3").textContent = myschedule.a3;
    document.getElementById("a4").textContent = myschedule.a4;
    document.getElementById("a5").textContent = myschedule.a5;
    document.getElementById("a6").textContent = myschedule.a6;
    document.getElementById("a7").textContent = myschedule.a7;
    if (!myschedule.isa1) {
        document.getElementById("a1").textContent = "No tasks to display";
    }

    document.getElementById("b1").textContent = myschedule.b1;
    document.getElementById("b2").textContent = myschedule.b2;
    document.getElementById("b3").textContent = myschedule.b3;
    document.getElementById("b4").textContent = myschedule.b4;
    document.getElementById("b5").textContent = myschedule.b5;
    document.getElementById("b6").textContent = myschedule.b6;
    document.getElementById("b7").textContent = myschedule.b7;
    if (!myschedule.isb1) {
        document.getElementById("b1").textContent = "No tasks to display";
    }

    document.getElementById("c1").textContent = myschedule.c1;
    document.getElementById("c2").textContent = myschedule.c2;
    document.getElementById("c3").textContent = myschedule.c3;
    document.getElementById("c4").textContent = myschedule.c4;
    document.getElementById("c5").textContent = myschedule.c5;
    document.getElementById("c6").textContent = myschedule.c6;
    document.getElementById("c7").textContent = myschedule.c7;
    if (!myschedule.isc1) {
        document.getElementById("c1").textContent = "No tasks to display";
    }

    document.getElementById("d1").textContent = myschedule.d1;
    document.getElementById("d2").textContent = myschedule.d2;
    document.getElementById("d3").textContent = myschedule.d3;
    document.getElementById("d4").textContent = myschedule.d4;
    document.getElementById("d5").textContent = myschedule.d5;
    document.getElementById("d6").textContent = myschedule.d6;
    document.getElementById("d7").textContent = myschedule.d7;
    if (!myschedule.isd1) {
        document.getElementById("d1").textContent = "No tasks to display";
    }

    document.getElementById("e1").textContent = myschedule.e1;
    document.getElementById("e2").textContent = myschedule.e2;
    document.getElementById("e3").textContent = myschedule.e3;
    document.getElementById("e4").textContent = myschedule.e4;
    document.getElementById("e5").textContent = myschedule.e5;
    document.getElementById("e6").textContent = myschedule.e6;
    document.getElementById("e7").textContent = myschedule.e7;
    if (!myschedule.ise1) {
        document.getElementById("e1").textContent = "No tasks to display";
    }

    if (!myschedule.isa1) {
        document.getElementById("a1c").style.opacity = "0";
    }
    if (myschedule.isa1 === 2) {
        document.getElementById("a1c").checked = true;
    }
    if (!myschedule.isa2) {
        document.getElementById("a2c").style.opacity = "0";
    }
    if (myschedule.isa2 === 2) {
        document.getElementById("a2c").checked = true;
    }
    if (!myschedule.isa3) {
        document.getElementById("a3c").style.opacity = "0";
    }
    if (myschedule.isa3 === 2) {
        document.getElementById("a3c").checked = true;
    }
    if (!myschedule.isa4) {
        document.getElementById("a4c").style.opacity = "0";
    }
    if (myschedule.isa4 === 2) {
        document.getElementById("a4c").checked = true;
    }
    if (!myschedule.isa5) {
        document.getElementById("a5c").style.opacity = "0";
    }
    if (myschedule.isa5 === 2) {
        document.getElementById("a5c").checked = true;
    }
    if (!myschedule.isa6) {
        document.getElementById("a6c").style.opacity = "0";
    }
    if (myschedule.isa6 === 2) {
        document.getElementById("a6c").checked = true;
    }
    if (!myschedule.isa7) {
        document.getElementById("a7c").style.opacity = "0";
    }
    if (myschedule.isa7 === 2) {
        document.getElementById("a7c").checked = true;
    }

    if (!myschedule.isb1) {
        document.getElementById("b1c").style.opacity = "0";
    }
    if (myschedule.isb1 === 2) {
        document.getElementById("b1c").checked = true;
    }
    if (!myschedule.isb2) {
        document.getElementById("b2c").style.opacity = "0";
    }
    if (myschedule.isb2 === 2) {
        document.getElementById("b2c").checked = true;
    }
    if (!myschedule.isb3) {
        document.getElementById("b3c").style.opacity = "0";
    }
    if (myschedule.isb3 === 2) {
        document.getElementById("b3c").checked = true;
    }
    if (!myschedule.isb4) {
        document.getElementById("b4c").style.opacity = "0";
    }
    if (myschedule.isb4 === 2) {
        document.getElementById("b4c").checked = true;
    }
    if (!myschedule.isb5) {
        document.getElementById("b5c").style.opacity = "0";
    }
    if (myschedule.isb5 === 2) {
        document.getElementById("b5c").checked = true;
    }
    if (!myschedule.isb6) {
        document.getElementById("b6c").style.opacity = "0";
    }
    if (myschedule.isb6 === 2) {
        document.getElementById("b6c").checked = true;
    }
    if (!myschedule.isb7) {
        document.getElementById("b7c").style.opacity = "0";
    }
    if (myschedule.isb7 === 2) {
        document.getElementById("b7c").checked = true;
    }

    if (!myschedule.isc1) {
        document.getElementById("c1c").style.opacity = "0";
    }
    if (myschedule.isc1 === 2) {
        document.getElementById("c1c").checked = true;
    }
    if (!myschedule.isc2) {
        document.getElementById("c2c").style.opacity = "0";
    }
    if (myschedule.isc2 === 2) {
        document.getElementById("c2c").checked = true;
    }
    if (!myschedule.isc3) {
        document.getElementById("c3c").style.opacity = "0";
    }
    if (myschedule.isc3 === 2) {
        document.getElementById("c3c").checked = true;
    }
    if (!myschedule.isc4) {
        document.getElementById("c4c").style.opacity = "0";
    }
    if (myschedule.isc4 === 2) {
        document.getElementById("c4c").checked = true;
    }
    if (!myschedule.isc5) {
        document.getElementById("c5c").style.opacity = "0";
    }
    if (myschedule.isc5 === 2) {
        document.getElementById("c5c").checked = true;
    }
    if (!myschedule.isc6) {
        document.getElementById("c6c").style.opacity = "0";
    }
    if (myschedule.isc6 === 2) {
        document.getElementById("c6c").checked = true;
    }
    if (!myschedule.isc7) {
        document.getElementById("c7c").style.opacity = "0";
    }
    if (myschedule.isc7 === 2) {
        document.getElementById("c7c").checked = true;
    }

    if (!myschedule.isd1) {
        document.getElementById("d1c").style.opacity = "0";
    }
    if (myschedule.isd1 === 2) {
        document.getElementById("d1c").checked = true;
    }
    if (!myschedule.isd2) {
        document.getElementById("d2c").style.opacity = "0";
    }
    if (myschedule.isd2 === 2) {
        document.getElementById("d2c").checked = true;
    }
    if (!myschedule.isd3) {
        document.getElementById("d3c").style.opacity = "0";
    }
    if (myschedule.isd3 === 2) {
        document.getElementById("d3c").checked = true;
    }
    if (!myschedule.isd4) {
        document.getElementById("d4c").style.opacity = "0";
    }
    if (myschedule.isd4 === 2) {
        document.getElementById("d4c").checked = true;
    }
    if (!myschedule.isd5) {
        document.getElementById("d5c").style.opacity = "0";
    }
    if (myschedule.isd5 === 2) {
        document.getElementById("d5c").checked = true;
    }
    if (!myschedule.isd6) {
        document.getElementById("d6c").style.opacity = "0";
    }
    if (myschedule.isd6 === 2) {
        document.getElementById("d6c").checked = true;
    }
    if (!myschedule.isd7) {
        document.getElementById("d7c").style.opacity = "0";
    }
    if (myschedule.isd7 === 2) {
        document.getElementById("d7c").checked = true;
    }

    if (!myschedule.ise1) {
        document.getElementById("e1c").style.opacity = "0";
    }
    if (myschedule.ise1 === 2) {
        document.getElementById("e1c").checked = true;
    }
    if (!myschedule.ise2) {
        document.getElementById("e2c").style.opacity = "0";
    }
    if (myschedule.ise2 === 2) {
        document.getElementById("e2c").checked = true;
    }
    if (!myschedule.ise3) {
        document.getElementById("e3c").style.opacity = "0";
    }
    if (myschedule.ise3 === 2) {
        document.getElementById("e3c").checked = true;
    }
    if (!myschedule.ise4) {
        document.getElementById("e4c").style.opacity = "0";
    }
    if (myschedule.ise4 === 2) {
        document.getElementById("e4c").checked = true;
    }
    if (!myschedule.ise5) {
        document.getElementById("e5c").style.opacity = "0";
    }
    if (myschedule.ise5 === 2) {
        document.getElementById("e5c").checked = true;
    }
    if (!myschedule.ise6) {
        document.getElementById("e6c").style.opacity = "0";
    }
    if (myschedule.ise6 === 2) {
        document.getElementById("e6c").checked = true;
    }
    if (!myschedule.ise7) {
        document.getElementById("e7c").style.opacity = "0";
    }
    if (myschedule.ise7 === 2) {
        document.getElementById("e7c").checked = true;
    }
}

class schedule {
    a1;
    isa1;
    a2;
    isa2;
    a3;
    isa3;
    a4;
    isa4;
    a5;
    isa5;
    a6;
    isa6;
    a7;
    isa7;

    b1;
    isb1;
    b2;
    isb2;
    b3;
    isb3;
    b4;
    isb4;
    b5;
    isb5;
    b6;
    isb6;
    b7;
    isb7;

    c1;
    isc1;
    c2;
    isc2;
    c3;
    isc3;
    c4;
    isc4;
    c5;
    isc5;
    c6;
    isc6;
    c7;
    isc7;

    d1;
    isd1;
    d2;
    isd2;
    d3;
    isd3;
    d4;
    isd4;
    d5;
    isd5;
    d6;
    isd6;
    d7;
    isd7;

    e1;
    ise1;
    e2;
    ise2;
    e3;
    ise3;
    e4;
    ise4;
    e5;
    ise5;
    e6;
    ise6;
    e7;
    ise7;

    constructor() {
        let a1 = 0;
        let isa1 = 0;
        let a2 = 0;
        let isa2 = 0;
        let a3 = 0;
        let isa3 = 0;
        let a4 = 0;
        let isa4 = 0;
        let a5 = 0;
        let isa5 = 0;
        let a6 = 0;
        let isa6 = 0;
        let a7 = 0;
        let isa7 = 0;

        let b1 = 0;
        let isb1 = 0;
        let b2 = 0;
        let isb2 = 0;
        let b3 = 0;
        let isb3 = 0;
        let b4 = 0;
        let isb4 = 0;
        let b5 = 0;
        let isb5 = 0;
        let b6 = 0;
        let isb6 = 0;
        let b7 = 0;
        let isb7 = 0;

        let c1 = 0;
        let isc1 = 0;
        let c2 = 0;
        let isc2 = 0;
        let c3 = 0;
        let isc3 = 0;
        let c4 = 0;
        let isc4 = 0;
        let c5 = 0;
        let isc5 = 0;
        let c6 = 0;
        let isc6 = 0;
        let c7 = 0;
        let isc7 = 0;

        let d1 = 0;
        let isd1 = 0;
        let d2 = 0;
        let isd2 = 0;
        let d3 = 0;
        let isd3 = 0;
        let d4 = 0;
        let isd4 = 0;
        let d5 = 0;
        let isd5 = 0;
        let d6 = 0;
        let isd6 = 0;
        let d7 = 0;
        let isd7 = 0;

        let e1 = 0;
        let ise1 = 0;
        let e2 = 0;
        let ise2 = 0;
        let e3 = 0;
        let ise3 = 0;
        let e4 = 0;
        let ise4 = 0;
        let e5 = 0;
        let ise5 = 0;
        let e6 = 0;
        let ise6 = 0;
        let e7 = 0;
        let ise7 = 0;
    }
}

loadschedule ??= new schedule();
console.log(loadschedule);
renderSchedule(loadschedule);

async function setSchedule(mySchedule) {
    let response = await fetch('/api/schedule', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "username": username,
            "password": password,
            "schedule": mySchedule,
        },
    });
    if (response.status != 200) {
        throw error;
    }
}

async function addTask() {
    console.log("adding task")
    myschedule = JSON.parse(localStorage.getItem("schedule"));
    myschedule ??= new schedule();
    if (Object.keys(myschedule).length === 0) {
        myschedule = new schedule();
    }

    const day = document.querySelector("#task_day").value;
    const description = document.querySelector("#task_description").value;

    if(!description) {
        alert("Cannot add blank task.\nPlease add task description and try again.");
        return;
    }

    console.log(myschedule);
    console.log("day:", day);
    console.log("description:", description);

    if (day === "a") {
        if (!myschedule.isa1) {
            myschedule.a1 = description;
            myschedule.isa1 = 1;
        }
        else if (!myschedule.isa2) {
            myschedule.a2 = description;
            myschedule.isa2 = 1;
        }
        else if (!myschedule.isa3) {
            myschedule.a3 = description;
            myschedule.isa3 = 1;
        }
        //HERE!!!!
        else if (!myschedule.isa4) {
            myschedule.a4 = description;
            myschedule.isa4 = 1;
        }
        else if (!myschedule.isa5) {
            myschedule.a5 = description;
            myschedule.isa5 = 1;
        }
        else if (!myschedule.isa6) {
            myschedule.a6 = description;
            myschedule.isa6 = 1;
        }
        else if (!myschedule.isa7) {
            myschedule.a7 = description;
            myschedule.isa7 = 1;
        }
    }
    else if (day === "b") {
        if (!myschedule.isb1) {
            myschedule.b1 = description;
            myschedule.isb1 = 1;
        }
        else if (!myschedule.isb2) {
            myschedule.b2 = description;
            myschedule.isb2 = 1;
        }
        else if (!myschedule.isb3) {
            myschedule.b3 = description;
            myschedule.isb3 = 1;
        }
        else if (!myschedule.isb4) {
            myschedule.b4 = description;
            myschedule.isb4 = 1;
        }
        else if (!myschedule.isb5) {
            myschedule.b5 = description;
            myschedule.isb5 = 1;
        }
        else if (!myschedule.isb6) {
            myschedule.b6 = description;
            myschedule.isb6 = 1;
        }
        else if (!myschedule.isb7) {
            myschedule.b7 = description;
            myschedule.isb7 = 1;
        }
    }
    else if (day === "c") {
        if (!myschedule.isc1) {
            myschedule.c1 = description;
            myschedule.isc1 = 1;
        }
        else if (!myschedule.isc2) {
            myschedule.c2 = description;
            myschedule.isc2 = 1;
        }
        else if (!myschedule.isc3) {
            myschedule.c3 = description;
            myschedule.isc3 = 1;
        }
        else if (!myschedule.isc4) {
            myschedule.c4 = description;
            myschedule.isc4 = 1;
        }
        else if (!myschedule.isc5) {
            myschedule.c5 = description;
            myschedule.isc5 = 1;
        }
        else if (!myschedule.isc6) {
            myschedule.c6 = description;
            myschedule.isc6 = 1;
        }
        else if (!myschedule.isc7) {
            myschedule.c7 = description;
            myschedule.isc7 = 1;
        }
    }
    else if (day === "d") {
        if (!myschedule.isd1) {
            myschedule.d1 = description;
            myschedule.isd1 = 1;
        }
        else if (!myschedule.isd2) {
            myschedule.d2 = description;
            myschedule.isd2 = 1;
        }
        else if (!myschedule.isd3) {
            myschedule.d3 = description;
            myschedule.isd3 = 1;
        }
        else if (!myschedule.isd4) {
            myschedule.d4 = description;
            myschedule.isd4 = 1;
        }
        else if (!myschedule.isd5) {
            myschedule.d5 = description;
            myschedule.isd5 = 1;
        }
        else if (!myschedule.isd6) {
            myschedule.d6 = description;
            myschedule.isd6 = 1;
        }
        else if (!myschedule.isd7) {
            myschedule.d7 = description;
            myschedule.isd7 = 1;
        }
    }
    else if (day === "e") {
        if (!myschedule.ise1) {
            myschedule.e1 = description;
            myschedule.ise1 = 1;
        }
        else if (!myschedule.ise2) {
            myschedule.e2 = description;
            myschedule.ise2 = 1;
        }
        else if (!myschedule.ise3) {
            myschedule.e3 = description;
            myschedule.ise3 = 1;
        }
        else if (!myschedule.ise4) {
            myschedule.e4 = description;
            myschedule.ise4 = 1;
        }
        else if (!myschedule.ise5) {
            myschedule.e5 = description;
            myschedule.ise5 = 1;
        }
        else if (!myschedule.ise6) {
            myschedule.e6 = description;
            myschedule.ise6 = 1;
        }
        else if (!myschedule.ise7) {
            myschedule.e7 = description;
            myschedule.ise7 = 1;
        }
    }

    renderSchedule(myschedule);
    localStorage.setItem("schedule", JSON.stringify(myschedule));
    await setSchedule(JSON.stringify(myschedule));
    loadschedule = JSON.parse(localStorage.getItem("schedule"));
    renderSchedule(loadschedule);
    window.location.href = "schedule.html";
}

async function updateChecks() {
    myschedule = JSON.parse(localStorage.getItem("schedule"));
    myschedule ??= new schedule();
    if (Object.keys(myschedule).length === 0) {
        myschedule = new schedule();
    }
    
    // a
    if (!myschedule.a1) {
        myschedule.isa1 = 0;
    } else if (document.getElementById('a1c').checked) {
        myschedule.isa1 = 2;
    } else {
        myschedule.isa1 = 1;
    }
    if (!myschedule.a2) {
        myschedule.isa2 = 0;
    } else if (document.getElementById('a2c').checked) {
        myschedule.isa2 = 2;
    } else {
        myschedule.isa2 = 1;
    }
    if (!myschedule.a3) {
        myschedule.isa3 = 0;
    } else if (document.getElementById('a3c').checked) {
        myschedule.isa3 = 2;
    } else {
        myschedule.isa3 = 1;
    }
    if (!myschedule.a4) {
        myschedule.isa4 = 0;
    } else if (document.getElementById('a4c').checked) {
        myschedule.isa4 = 2;
    } else {
        myschedule.isa4 = 1;
    }
    if (!myschedule.a5) {
        myschedule.isa5 = 0;
    } else if (document.getElementById('a5c').checked) {
        myschedule.isa5 = 2;
    } else {
        myschedule.isa5 = 1;
    }
    if (!myschedule.a6) {
        myschedule.isa6 = 0;
    } else if (document.getElementById('a6c').checked) {
        myschedule.isa6 = 2;
    } else {
        myschedule.isa6 = 1;
    }
    if (!myschedule.a7) {
        myschedule.isa7 = 0;
    } else if (document.getElementById('a7c').checked) {
        myschedule.isa7 = 2;
    } else {
        myschedule.isa7 = 1;
    }

    // b
    if (!myschedule.b1) {
        myschedule.isb1 = 0;
    } else if (document.getElementById('b1c').checked) {
        myschedule.isb1 = 2;
    } else {
        myschedule.isb1 = 1;
    }
    if (!myschedule.b2) {
        myschedule.isb2 = 0;
    } else if (document.getElementById('b2c').checked) {
        myschedule.isb2 = 2;
    } else {
        myschedule.isb2 = 1;
    }
    if (!myschedule.b3) {
        myschedule.isb3 = 0;
    } else if (document.getElementById('b3c').checked) {
        myschedule.isb3 = 2;
    } else {
        myschedule.isb3 = 1;
    }
    if (!myschedule.b4) {
        myschedule.isb4 = 0;
    } else if (document.getElementById('b4c').checked) {
        myschedule.isb4 = 2;
    } else {
        myschedule.isb4 = 1;
    }
    if (!myschedule.b5) {
        myschedule.isb5 = 0;
    } else if (document.getElementById('b5c').checked) {
        myschedule.isb5 = 2;
    } else {
        myschedule.isb5 = 1;
    }
    if (!myschedule.b6) {
        myschedule.isb6 = 0;
    } else if (document.getElementById('b6c').checked) {
        myschedule.isb6 = 2;
    } else {
        myschedule.isb6 = 1;
    }
    if (!myschedule.b7) {
        myschedule.isb7 = 0;
    } else if (document.getElementById('b7c').checked) {
        myschedule.isb7 = 2;
    } else {
        myschedule.isb7 = 1;
    }

    // c
    if (!myschedule.c1) {
        myschedule.isc1 = 0;
    } else if (document.getElementById('c1c').checked) {
        myschedule.isc1 = 2;
    } else {
        myschedule.isc1 = 1;
    }
    if (!myschedule.c2) {
        myschedule.isc2 = 0;
    } else if (document.getElementById('c2c').checked) {
        myschedule.isc2 = 2;
    } else {
        myschedule.isc2 = 1;
    }
    if (!myschedule.c3) {
        myschedule.isc3 = 0;
    } else if (document.getElementById('c3c').checked) {
        myschedule.isc3 = 2;
    } else {
        myschedule.isc3 = 1;
    }
    if (!myschedule.c4) {
        myschedule.isc4 = 0;
    } else if (document.getElementById('c4c').checked) {
        myschedule.isc4 = 2;
    } else {
        myschedule.isc4 = 1;
    }
    if (!myschedule.c5) {
        myschedule.isc5 = 0;
    } else if (document.getElementById('c5c').checked) {
        myschedule.isc5 = 2;
    } else {
        myschedule.isc5 = 1;
    }
    if (!myschedule.c6) {
        myschedule.isc6 = 0;
    } else if (document.getElementById('c6c').checked) {
        myschedule.isc6 = 2;
    } else {
        myschedule.isc6 = 1;
    }
    if (!myschedule.c7) {
        myschedule.isc7 = 0;
    } else if (document.getElementById('c7c').checked) {
        myschedule.isc7 = 2;
    } else {
        myschedule.isc7 = 1;
    }

    // d
    if (!myschedule.d1) {
        myschedule.isd1 = 0;
    } else if (document.getElementById('d1c').checked) {
        myschedule.isd1 = 2;
    } else {
        myschedule.isd1 = 1;
    }
    if (!myschedule.d2) {
        myschedule.isd2 = 0;
    } else if (document.getElementById('d2c').checked) {
        myschedule.isd2 = 2;
    } else {
        myschedule.isd2 = 1;
    }
    if (!myschedule.d3) {
        myschedule.isd3 = 0;
    } else if (document.getElementById('d3c').checked) {
        myschedule.isd3 = 2;
    } else {
        myschedule.isd3 = 1;
    }
    if (!myschedule.d4) {
        myschedule.isd4 = 0;
    } else if (document.getElementById('d4c').checked) {
        myschedule.isd4 = 2;
    } else {
        myschedule.isd4 = 1;
    }
    if (!myschedule.d5) {
        myschedule.isd5 = 0;
    } else if (document.getElementById('d5c').checked) {
        myschedule.isd5 = 2;
    } else {
        myschedule.isd5 = 1;
    }
    if (!myschedule.d6) {
        myschedule.isd6 = 0;
    } else if (document.getElementById('d6c').checked) {
        myschedule.isd6 = 2;
    } else {
        myschedule.isd6 = 1;
    }
    if (!myschedule.d7) {
        myschedule.isd7 = 0;
    } else if (document.getElementById('d7c').checked) {
        myschedule.isd7 = 2;
    } else {
        myschedule.isd7 = 1;
    }

    // e
    if (!myschedule.e1) {
        myschedule.ise1 = 0;
    } else if (document.getElementById('e1c').checked) {
        myschedule.ise1 = 2;
    } else {
        myschedule.ise1 = 1;
    }
    if (!myschedule.e2) {
        myschedule.ise2 = 0;
    } else if (document.getElementById('e2c').checked) {
        myschedule.ise2 = 2;
    } else {
        myschedule.ise2 = 1;
    }
    if (!myschedule.e3) {
        myschedule.ise3 = 0;
    } else if (document.getElementById('e3c').checked) {
        myschedule.ise3 = 2;
    } else {
        myschedule.ise3 = 1;
    }
    if (!myschedule.e4) {
        myschedule.ise4 = 0;
    } else if (document.getElementById('e4c').checked) {
        myschedule.ise4 = 2;
    } else {
        myschedule.ise4 = 1;
    }
    if (!myschedule.e5) {
        myschedule.ise5 = 0;
    } else if (document.getElementById('e5c').checked) {
        myschedule.ise5 = 2;
    } else {
        myschedule.ise5 = 1;
    }
    if (!myschedule.e6) {
        myschedule.ise6 = 0;
    } else if (document.getElementById('e6c').checked) {
        myschedule.ise6 = 2;
    } else {
        myschedule.ise6 = 1;
    }
    if (!myschedule.e7) {
        myschedule.ise7 = 0;
    } else if (document.getElementById('e7c').checked) {
        myschedule.ise7 = 2;
    } else {
        myschedule.ise7 = 1;
    }

    localStorage.setItem("schedule", JSON.stringify(myschedule));
    await setSchedule(JSON.stringify(myschedule));
}

function clearSchedule() {
    localStorage.removeItem("schedule");
    window.location.href = "schedule.html";
}

function recieveMessage(message) {
    numMessages++;
    messages[messages.length] = message;
    console.log(messages);
    renderMessages();
}

function renderMessages() {
    const list = document.getElementById("boss_messages");
    list.innerHTML = '';
    let i = 0;
    while (i < messages.length && i < 10) {
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(messages[messages.length - (i + 1)]));
        list.appendChild(entry);
        i++
    }
    if (!messages.length) {
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode("No messages yet"));
        list.appendChild(entry);
    }
}

async function send1Message() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // months start at 0
    let dd = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let mer = "am"
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    if (hours > 12) mer = "pm";
    hours = hours % 12;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    const timestamp = '\t\t\t(' + mm + '/' + dd + '/' + yyyy + ' ' + hours + ':' + minutes + ':' + seconds + mer + ')';

    setTimeout(function() {
        var MAX = 10;
        var rand = Math.floor((Math.random() * MAX) + 1);
        if (rand == 1) {
            recieveMessage("You suck!" + timestamp);
        }
        else if (rand == 2) {
            recieveMessage("You can't only do emails all day" + timestamp);
        }
        else if (rand == 3) {
            recieveMessage("I hate—so much—the person you chose to be." + timestamp);
        }
        else if (rand == 4) {
            recieveMessage("You're fired!" + timestamp);
        }
        else if (rand == 5) {
            recieveMessage("Great job!" + timestamp);
        }
        else if (rand == 6) {
            recieveMessage("You're the best" + timestamp);
        }
        else if (rand == 7) {
            recieveMessage("I secretley wish you were my child" + timestamp);
        }
        else if (rand == 8) {
            recieveMessage("I like the way you work it" + timestamp);
        }
        else if (rand == 9) {
            recieveMessage("You are our best employee" + timestamp);
        }
        else if (rand == 10) {
            recieveMessage("Will you marry me?" + timestamp);
        }
    }, 1000);
}

async function sendMessages() {
    var intervalID = window.setInterval(send1Message, 2700);
}

sendMessages();