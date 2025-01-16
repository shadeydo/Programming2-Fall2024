document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        login();
    }
});

function login() {
    // get username and password
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let fail = false;
    // find clearance level
    clearanceLevel = parseInt(password.charAt(password.length - 1));
    let alertText = [];
    // make sure password ends in a number from 0-4
    if (isNaN(clearanceLevel) || clearanceLevel > 5 || clearanceLevel < 1) {
        alertText.splice(1, 0, "Password must end in a number from 1-5");
        fail = true;
    }
    // if username is blank
    if (username == "") {
        fail = true;
        alertText.splice(1, 0, "Username must be existent");
    }
    // if user and password are valid, store variables and redirect
    if (fail == false) {
        localStorage.setItem("clearance", clearanceLevel);
        localStorage.setItem("username", username);
        window.location.href = "content.html";
    }

    //clear previous alerts
    document.getElementById("alert").innerHTML = "";
    // send password alerts
    for (i = 0; i < alertText.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = alertText[i];
        // insert alert text into DOM
        document.getElementById("alert").appendChild(listItem);
        document.getElementById("alertbox").style.display = "block";
    }
}

window.addEventListener("load", function () {
    ////temp for dev
    //let username = "Shade";
    //let clearanceLevel = 5;

    // display clearance level
    let clearanceLevel = parseInt(localStorage.getItem("clearance"));
    document.getElementById("clearance").innerText = clearanceLevel;
    // display username
    let username = localStorage.getItem("username");
    document.getElementById("usernamea").innerText = username;

    // define pyramid levels. [Title, description, percent pay cut] this isnt a dict because its kinda easier this way tbh
    pyramidLevels = [
        ["1. Hamster Novice", "Sell hamsters and accrue funds to level up", 1],
        ["2. Hamster Master", "Exchange hamsters to novices in return for modest cash", 2],
        ["3. Hamster Top Dawg", "Vend hamsters in bulk to Masters", 3],
        ["4. Hamster Kingpin", "Top level management and hamster deployment", 4],
        ["5. Hamster Overlord", "Recruit Kingpins and swim in $$$", 90]
    ];
    // decide how many stages of the pyramid to show
    let pyStages = 0;
    if (clearanceLevel == 5) {
        pyStages = clearanceLevel;
    } else {
        // +1 for starting at 0, +1 for showing one layer higher too
        pyStages = clearanceLevel + 1;
    }

    // get pyramid div
    let pyramid = document.getElementById("pyramid");

    // create nested html elements
    for (let i = pyStages; i > 0; i--) {
        let div = document.createElement("div");
        // set pyramid stage id
        div.setAttribute("id", "stage_" + Math.abs(pyStages - i + 1));
        div.classList.add("stage");
        // create header
        let header = document.createElement("h2");
        // you are here marker
        if (i == clearanceLevel) {
            header.innerText = "→  " + pyramidLevels[i - 1][0] + " ←";
        } else {
            header.innerText = pyramidLevels[i - 1][0];
        }

        // create description
        let description = document.createElement("p");
        description.innerText = pyramidLevels[i - 1][1];
        // create pay percent
        let pay = document.createElement("div");
        pay.classList.add("pay");
        pay.innerText = pyramidLevels[i - 1][2] + "% Earnings";

        // assign stage a width based on how many steps in pyramid so it always fill screen
        div.style.width = 20 + (75 / pyStages - 1) * Math.abs(pyStages - i + 1) + "vw";
        //append all to DOM
        pyramid.appendChild(div);
        div.appendChild(header);
        div.appendChild(description);
        div.appendChild(pay);
    }
});
