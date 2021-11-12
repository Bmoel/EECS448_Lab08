function whenSubmitted() {
    borderStuff();
    backgroundStuff();
}

function borderStuff() {
    let red = document.getElementById('border_red_value').value;
    let green = document.getElementById('border_green_value').value;
    let blue = document.getElementById('border_blue_value').value;
    document.getElementById('paragraph').style.border = "3px solid rgb(" + red + ","+ green + "," + blue + ")";
}

function backgroundStuff() {
    let red = document.getElementById('back_red_value').value;
    let green = document.getElementById('back_green_value').value;
    let blue = document.getElementById('back_blue_value').value;
    document.getElementById('paragraph').style.backgroundColor = "rgb(" + red + ","+ green + "," + blue + ")";
}