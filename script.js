const asset1 = "assets/flower2.png";
// const asset2 = "assets/flower1.png";

function greet() {
	window.alert("Hello everyone!");
}

function init() {
	//Task1
	document.getElementById("first").src = asset1;

	//Task2
	let images = document.getElementById("container").getElementsByTagName("img");
	images[1].src = asset1;
	images[3].src = asset1;

	//Task 3
	document.getElementById("task3").innerHTML = "Your are doing great!";

	//Task4
	let image = document.getElementById("new_element"), image_a = document.createElement("img");
	image.appendChild(image_a).src = asset1;
	

	//Task5
	let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange" , "yellow" , "green" , "blue" ,  "purple" , "pink"];

	for (var i = spans.length - 1; i >= 0; i--) {
	spans[i].style.color = colors[i];
	}

	//Task6
	var changeSrc = function(event) {
		if (event.target.src) {
			event.target.src = asset1;
		}
	};

	document.getElementById("event").addEventListener("mouseover", changeSrc);
}
