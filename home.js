// TopNavBar
function selectOption(id){
    clearStyleOfNav()
    document.getElementById(id).className = 'selected';
}
function clearStyleOfNav(){
    var elements = document.getElementsByClassName("selected")
    for (var index = 0; index < elements.length; index++) {
        elements[index].className = '';
    }
}