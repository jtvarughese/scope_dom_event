//Question 1
// button click event
function button1() {
document.getElementById('response').innerText = "I'm right!";
}

function button2() {
  document.getElementById('response').innerText = "No I'm right!"
}

// Question 2
// hover paragraph
document.getElementById("hoverParagraph").addEventListener("mouseenter", function() {
  alert("Hey, I told you not to hover over me!")
  }
)

// Question 3
// keypress
var yankees=document.getElementById("h1")

window.addEventListener("keypress",function(event){
yankees.innerHTML=event.key
})

Question 4

function checkTheForm() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var head = document.getElementById("headerForm");


	if (password == 12345678) {
		if (username.length < 14) {
			document.getElementById("headerForm") = "Congrats on using your username and password."
		} else {
			alert("Incorrect username");
		}
	} else {
		alert("Incorrect password");
	}
}
