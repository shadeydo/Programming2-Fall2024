const eyecolordict = {
    Brown: "basic-eye-colored",
    Blue: "blueberry-eyed",
    Green: "goose-poop",
    Gray: "silver-eyed",
    Hazel: "fantabulous",
    Red: "devil-eyed"
};

const numeyedict = {
    0: "blind",
    1: "cyclopean",
    2: "average-eyed",
    3: "tuatara-eyed"
};

const ninc = {
    yes: " nincompoop!",
    no: " non-nincompoop!"
};

function generate() {
    let eyeColor = document.getElementById("eye").value;
    let numEyes = document.getElementById("numEye").value;
    let nincompoop = document.getElementById("nincompoop").value;

    document.getElementById("response").innerText =
        "you are a " + eyecolordict[eyeColor] + " " + numeyedict[numEyes] + ninc[nincompoop];
    document.getElementById("response").style.color = "green";
}
