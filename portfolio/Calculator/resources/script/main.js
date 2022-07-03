//Clear display
function clearScreen() {
    document.getElementById("result").value = "";
}


//display #

function display(value) {
    document.getElementById("result").value += value;
}

// calculate

function calculate() {
    var p = document.getElementById("result").value ;
    var q = eval(p);
    document.getElementById('result').value = q;
}

