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


function submit_comment(event) {
  event.preventDefault();
  
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;
  
  if (!name || !comment) {
      alert("Please fill in both the name and comment fields.");
      return;
  }
  var newComment = {
      name: name,
      comment: comment
  };
  var comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.push(newComment);
  localStorage.setItem('comments', JSON.stringify(comments));
  displayComments();
  document.getElementById("name").value = '';
  document.getElementById("comment").value = '';
}

function displayComments() {
  var comments = JSON.parse(localStorage.getItem('comments')) || [];
  var savedCommentsElement = document.getElementById('savedComments');
  savedCommentsElement.innerHTML = ''; 

  comments.forEach(function(commentObj) {
      
      var commentSection = document.createElement('div');
      commentSection.className = 'comment-section';
      var nameElement = document.createElement('h4');
      nameElement.textContent = 'User: ' + commentObj.name;
      commentSection.appendChild(nameElement);
      var dottedLine = document.createElement('div');
      dottedLine.className = 'dotted-line';
      commentSection.appendChild(dottedLine);
      var commentElement = document.createElement('p');
      commentElement.textContent = 'Comment: ' + commentObj.comment;
      commentSection.appendChild(commentElement);
      savedCommentsElement.appendChild(commentSection);
  });
}

function clearComments() {
  localStorage.removeItem('comments'); 
  displayComments(); 
}
