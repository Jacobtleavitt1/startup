loadschedule = JSON.parse(localStorage.getItem("schedule"))
console.log(loadschedule);

function renderSchedule(myschedule) {
    document.getElementById("a1").textContent = myschedule.a1;
    document.getElementById("a2").textContent = myschedule.a2;
    document.getElementById("a3").textContent = myschedule.a3;
    document.getElementById("a4").textContent = myschedule.a4;
    document.getElementById("a5").textContent = myschedule.a5;
    document.getElementById("a6").textContent = myschedule.a6;
    document.getElementById("a7").textContent = myschedule.a7;

    document.getElementById("b1").textContent = myschedule.b1;
    document.getElementById("b2").textContent = myschedule.b2;
    document.getElementById("b3").textContent = myschedule.b3;
    document.getElementById("b4").textContent = myschedule.b4;
    document.getElementById("b5").textContent = myschedule.b5;
    document.getElementById("b6").textContent = myschedule.b6;
    document.getElementById("b7").textContent = myschedule.b7;

    document.getElementById("c1").textContent = myschedule.c1;
    document.getElementById("c2").textContent = myschedule.c2;
    document.getElementById("c3").textContent = myschedule.c3;
    document.getElementById("c4").textContent = myschedule.c4;
    document.getElementById("c5").textContent = myschedule.c5;
    document.getElementById("c6").textContent = myschedule.c6;
    document.getElementById("c7").textContent = myschedule.c7;

    document.getElementById("d1").textContent = myschedule.d1;
    document.getElementById("d2").textContent = myschedule.d2;
    document.getElementById("d3").textContent = myschedule.d3;
    document.getElementById("d4").textContent = myschedule.d4;
    document.getElementById("d5").textContent = myschedule.d5;
    document.getElementById("d6").textContent = myschedule.d6;
    document.getElementById("d7").textContent = myschedule.d7;

    document.getElementById("e1").textContent = myschedule.e1;
    document.getElementById("e2").textContent = myschedule.e2;
    document.getElementById("e3").textContent = myschedule.e3;
    document.getElementById("e4").textContent = myschedule.e4;
    document.getElementById("e5").textContent = myschedule.e5;
    document.getElementById("e6").textContent = myschedule.e6;
    document.getElementById("e7").textContent = myschedule.e7;
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

function addTask() {
    console.log("adding task")
    myschedule = JSON.parse(localStorage.getItem("schedule"));
    myschedule ??= new schedule();
    if (Object.keys(myschedule).length === 0) {
        myschedule = new schedule();
    }

    const day = document.querySelector("#task_day").value;
    const description = document.querySelector("#task_description").value;

    console.log(myschedule);
    console.log("day:", day);
    console.log("description:", description);

    if (day === "a") {
        if (myschedule.isa1 === undefined) {
            myschedule.a1 = description;
            myschedule.isa1 = 1;
        }
        else if (myschedule.isa2 === undefined) {
            myschedule.a2 = description;
            myschedule.isa2 = 1;
        }
        else if (myschedule.isa3 === undefined) {
            myschedule.a3 = description;
            myschedule.isa3 = 1;
        }
        else if (myschedule.isa4 === undefined) {
            myschedule.a4 = description;
            myschedule.isa4 = 1;
        }
        else if (myschedule.isa5 === undefined) {
            myschedule.a5 = description;
            myschedule.isa5 = 1;
        }
        else if (myschedule.isa6 === undefined) {
            myschedule.a6 = description;
            myschedule.isa6 = 1;
        }
        else if (myschedule.isa7 === undefined) {
            myschedule.a7 = description;
            myschedule.isa7 = 1;
        }
    }
    else if (day === "b") {
        if (myschedule.isb1 === undefined) {
            myschedule.b1 = description;
            myschedule.isb1 = 1;
        }
        else if (myschedule.isb2 === undefined) {
            myschedule.b2 = description;
            myschedule.isb2 = 1;
        }
        else if (myschedule.isb3 === undefined) {
            myschedule.b3 = description;
            myschedule.isb3 = 1;
        }
        else if (myschedule.isb4 === undefined) {
            myschedule.b4 = description;
            myschedule.isb4 = 1;
        }
        else if (myschedule.isb5 === undefined) {
            myschedule.b5 = description;
            myschedule.isb5 = 1;
        }
        else if (myschedule.isb6 === undefined) {
            myschedule.b6 = description;
            myschedule.isb6 = 1;
        }
        else if (myschedule.isb7 === undefined) {
            myschedule.b7 = description;
            myschedule.isb7 = 1;
        }
    }
    else if (day === "c") {
        if (myschedule.isc1 === undefined) {
            myschedule.c1 = description;
            myschedule.isc1 = 1;
        }
        else if (myschedule.isc2 === undefined) {
            myschedule.c2 = description;
            myschedule.isc2 = 1;
        }
        else if (myschedule.isc3 === undefined) {
            myschedule.c3 = description;
            myschedule.isc3 = 1;
        }
        else if (myschedule.isc4 === undefined) {
            myschedule.c4 = description;
            myschedule.isc4 = 1;
        }
        else if (myschedule.isc5 === undefined) {
            myschedule.c5 = description;
            myschedule.isc5 = 1;
        }
        else if (myschedule.isc6 === undefined) {
            myschedule.c6 = description;
            myschedule.isc6 = 1;
        }
        else if (myschedule.isc7 === undefined) {
            myschedule.c7 = description;
            myschedule.isc7 = 1;
        }
    }
    else if (day === "d") {
        if (myschedule.isd1 === undefined) {
            myschedule.d1 = description;
            myschedule.isd1 = 1;
        }
        else if (myschedule.isd2 === undefined) {
            myschedule.d2 = description;
            myschedule.isd2 = 1;
        }
        else if (myschedule.isd3 === undefined) {
            myschedule.d3 = description;
            myschedule.isd3 = 1;
        }
        else if (myschedule.isd4 === undefined) {
            myschedule.d4 = description;
            myschedule.isd4 = 1;
        }
        else if (myschedule.isd5 === undefined) {
            myschedule.d5 = description;
            myschedule.isd5 = 1;
        }
        else if (myschedule.isd6 === undefined) {
            myschedule.d6 = description;
            myschedule.isd6 = 1;
        }
        else if (myschedule.isd7 === undefined) {
            myschedule.d7 = description;
            myschedule.isd7 = 1;
        }
    }
    else if (day === "e") {
        if (myschedule.ise1 === undefined) {
            myschedule.e1 = description;
            myschedule.ise1 = 1;
        }
        else if (myschedule.ise2 === undefined) {
            myschedule.e2 = description;
            myschedule.ise2 = 1;
        }
        else if (myschedule.ise3 === undefined) {
            myschedule.e3 = description;
            myschedule.ise3 = 1;
        }
        else if (myschedule.ise4 === undefined) {
            myschedule.e4 = description;
            myschedule.ise4 = 1;
        }
        else if (myschedule.ise5 === undefined) {
            myschedule.e5 = description;
            myschedule.ise5 = 1;
        }
        else if (myschedule.ise6 === undefined) {
            myschedule.e6 = description;
            myschedule.ise6 = 1;
        }
        else if (myschedule.ise7 === undefined) {
            myschedule.e7 = description;
            myschedule.ise7 = 1;
        }
    }

    renderSchedule(myschedule);

    localStorage.setItem("schedule", JSON.stringify(myschedule))
}

