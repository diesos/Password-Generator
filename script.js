let pwdOneEl = document.getElementById("pwd-one")
let pwdTwoEl = document.getElementById("pwd-two")
let isAlive = true

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
	"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c",
	"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
	"u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~",
	"`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}",
	"]", ",", "|", ":", ";", "<", ">", ".", "?",
	"/"];

// TESTING MY FUNCTIONS
// let random = Math.floor(Math.random() * characters.length)
// let random2 = Math.floor(Math.random() * characters.length)
// console.log(random)
// console.log(random2)
// let password = []
// console.log(password)
// password.push(characters[random])
// console.log(password)

function generatePassword() {

	if (!isAlive) {
		pwdOneEl.textContent = ""
		pwdTwoEl.textContent = ""
	}
	for (let i = 0; i < 15; i++) {
		let random = Math.floor(Math.random() * characters.length)
		let random2 = Math.floor(Math.random() * characters.length)
		pwdOneEl.textContent += characters[random]
		pwdTwoEl.textContent += characters[random2]
	}
	isAlive = false
	toggleButtonVisibility()
}

function copyFirst(elementId) {
	var element = document.getElementById(elementId);
	selectText(element);
}

function selectText(element) {
	let range = document.createRange();
	range.selectNodeContents(element);
	let selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
}

function toggleButtonVisibility() {
	var buttons = document.getElementsByClassName("hidden");
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style.visibility = 'visible';
	}
}
