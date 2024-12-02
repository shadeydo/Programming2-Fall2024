let valUsername = "shadeydo";
let valPassword = "1234";

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == valUsername && password == valPassword) {
        document.getElementById("response").innerText = "Correct!!";
        document.getElementById("response").style.color = "green";
    } else if (username == valUsername) {
        document.getElementById("response").innerText = "Incorrect password";
        document.getElementById("response").style.color = "red";
    } else if (password == valPassword) {
        document.getElementById("response").innerText = "Incorrect username";
        document.getElementById("response").style.color = "red";
    } else {
        document.getElementById("response").innerText = "Incorrect :(";
        document.getElementById("response").style.color = "red";
    }
}
