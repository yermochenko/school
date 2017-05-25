window.onload = function() {
	var output = document.getElementById("output");
	var s = new String();
	s += "<table>";
	for(var i = 1; i <= 6; i++) {
		s += "<tr>";
		for(var j = 1; j <= 6; j++) {
			s += "<td>";
			s += "<div id='o" + i + j + "' class='empty'></div>";
			s += "<div id='c" + i + j + "' class='closed'></div>";
			s += "</td>";
		}
		s += "</tr>";
	}
	s += "</table>";
	output.innerHTML = s;
	for(var i = 1; i <= 18; i++) {
		for(var j = 1; j <= 2; j++) {
			var isEmpty = true;
			var counter = 0;
			while(isEmpty) {
				var n = Math.floor(Math.random() * 6) + 1;
				var k = Math.floor(Math.random() * 6) + 1;
				counter++;
				var element = document.getElementById("o" + n + k);
				if(element.className == "empty") {
					element.className = "img" + i;
					isEmpty = false;
					console.log(counter);
				}
			}
		}
	}
	for(var i = 1; i <= 6; i++) {
		for(var j = 1; j <= 6; j++) {
			var div = document.getElementById("o" + i + j);
			div.onclick = divClick;
			var div = document.getElementById("c" + i + j);
			div.onclick = divClick;
		}
	}
}

var card1 = null, card2 = null;
var score = 0;

function divClick() {
	if(this.id.charAt(0) == "c") {
		score++;
		document.getElementById("score").innerHTML = score;
		this.style.display = "none";
		var opened = document.getElementById("o" + this.id.substr(1));
		opened.style.display = "block";
		if(card1 == null) {
			card1 = opened;
		} else if(card2 == null) {
			if(card1.className == opened.className) {
				card1 = null;
			} else {
				card2 = opened;
			}
		} else {
			card1.style.display = "none";
			document.getElementById("c" + card1.id.substr(1)).style.display = "block";
			card2.style.display = "none";
			document.getElementById("c" + card2.id.substr(1)).style.display = "block";
			card1 = opened;
			card2 = null;
		}
	}
}