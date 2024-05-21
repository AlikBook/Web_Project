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
        alert("Thank you for your submission!");
    }
    else
        alert("Please fill in all the fields!");
}