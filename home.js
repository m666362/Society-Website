// TopNavBar
function gotoHome() {
    document.getElementById("aboutNav").style.backgroundColor = "black"
    document.getElementById("contactNav").style.backgroundColor = "black"
    document.getElementById("newsNav").style.backgroundColor = "black"
    document.getElementById("homeNav").style.backgroundColor = "green"
}
function gotoNews() {
    document.getElementById("aboutNav").style.backgroundColor = "black"
    document.getElementById("contactNav").style.backgroundColor = "black"
    document.getElementById("newsNav").style.backgroundColor = "green"
    document.getElementById("homeNav").style.backgroundColor = "black"
}
function gotoContact() {
    document.getElementById("aboutNav").style.backgroundColor = "black"
    document.getElementById("contactNav").style.backgroundColor = "green"
    document.getElementById("newsNav").style.backgroundColor = "black"
    document.getElementById("homeNav").style.backgroundColor = "black"
}
function gotoAbout() {
    document.getElementById("aboutNav").style.backgroundColor = "green"
    document.getElementById("contactNav").style.backgroundColor = "black"
    document.getElementById("newsNav").style.backgroundColor = "black"
    document.getElementById("homeNav").style.backgroundColor = "black"
}