document.getElementById("title").style.fontSize = "50px";
document.getElementById("title").onclick = function() {myFunction()};


function myFunction() {
  var x = document.getElementById("title");
  if (x.style.color === "green") {
    x.style.color = "red";
  } else {
    x.style.color = "green";
  }
}

function visible1() {
  var x = document.getElementById("show1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function visible2() {
  var x = document.getElementById("show2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function visible3() {
  var x = document.getElementById("show3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function visible4() {
  var x = document.getElementById("show4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

iframe1 = document.getElementById("iframe");
iframe1.innerHTML='<iframe src="https://giphy.com/embed/RMk1bVz5ubf5h4nqzO" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/8itapp-hungry-hangry-8it-RMk1bVz5ubf5h4nqzO">via GIPHY</a></p>';