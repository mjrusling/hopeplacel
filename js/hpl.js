// Reserved for custom JS

var savedText = "";
function showETA(e) {
	savedText = e.innerHTML;
	e.innerHTML = "Next page update: 8AM EAT"
}
function hideETA(e) {
	e.innerHTML = savedText;
}