function changeH1(text) {
	var elements = document.querySelectorAll("h1");

	for (var i = 0; i < elements.length; i++) {
		elements[i].textContent = text;
	}
}