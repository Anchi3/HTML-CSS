

let input = document.getElementById("inputForm");
let story = document.getElementById("mainStory");

story.style.display = "none";

function doneHandler() {

	story.style.display = block;
	input.style.display = none;

	let missing = document.querySelectorAll(".missingText");


	for(let i = 0; i < document.inputForm.elements.length; ++i) {

		words[i].innerHTML = document.inputForm.elements[i].value;

	}

}

function returnHandler() {
	
	story.style.display = none;
	input.style.display = block;
}

function resetHandler() {


}
