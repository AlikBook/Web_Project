function quizConfirm() {
    var input = ["monument", "museum", "name", "email", "phone", "date1", "date2"];
    for (var i = 0; i < input.length; i++) {
        var x = document.forms[0][input[i]].value;
        if (x == null || x == "") {
            return false;
        }
    }
    return true;
}

function quizSubmit() {
    if (quizConfirm()) {
        var input = ["monument", "museum", "name", "email", "phone", "date1", "date2"];
        var confirmationMessage = "Confirmation Order:\n\n";
        
        for (var i = 0; i < input.length; i++) {
            var x = document.forms[0][input[i]].value;
            confirmationMessage += input[i] + ": " + x + "<br>";
        }
        
        window.open("", "_blank").document.write("<h1>Confirmation Order</h1><p>" + confirmationMessage + "</p>");
    } else {
        alert("Please fill in all the fields!");
    }
}
