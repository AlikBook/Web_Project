function quizConfirm() {
  var input = [
    "monument",
    "museum",
    "name",
    "email",
    "phone",
    "date1",
    "date2",
  ];
  for (var i = 0; i < input.length; i++) {
    var x = document.forms[0][input[i]].value;
    if (x == null || x == "") {
      return false;
    }
  }
  return true;
}

function quizSubmit(event) {
  event.preventDefault(); 

  if (quizConfirm()) {
    var res = confirm("Are you sure you want to continue?");
    if (res == true) {
      var timer = 3;
      var confirmation = document.createElement("p");
      confirmation.textContent = timer + " seconds";
      confirmation.style.fontSize = "1.5em";
      confirmation.style.fontWeight = "bold";
      confirmation.style.textAlign = "center";
      document.getElementById("information").appendChild(confirmation);

      var interval = setInterval(function () {
        timer--;
        console.log(timer);
        confirmation.textContent = timer + " seconds";
        if (timer == 0) {
          clearInterval(interval);
          confirmation.textContent = "Confirmation Order";

          var input = [
            "monument",
            "museum",
            "name",
            "email",
            "phone",
            "date1",
            "date2",
          ];
          var confirmationMessage = "<br>";
          for (var i = 0; i < input.length; i++) {
            var x = document.forms[0][input[i]].value;
            confirmationMessage += input[i] + ": " + x + "<br>";
          }

          var confirmationDiv = document.createElement("div");
          confirmationDiv.innerHTML = confirmationMessage;
          confirmation.appendChild(confirmationDiv);

          document.getElementsByClassName("form")[0].style.display = "none";
        }
      }, 1000);
    } else {
      alert("You will be redirected to the home page!");
      window.location.href = "../home.html";
    }
  } else {
    alert("Please fill in all the fields!");
  }
}
