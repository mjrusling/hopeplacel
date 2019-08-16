// Reserved for custom JS

var savedText = "";
function showETA(e) {
	savedText = e.innerHTML;
	e.innerHTML = "Next page update: 8AM East Africa Time"
}
function hideETA(e) {
	e.innerHTML = savedText;
}