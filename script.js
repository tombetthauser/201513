var p = false

while (p === false) {
	var i = prompt ("Please enter Password:");
	if (i === "p" || i === "pass" || i === "password" || i === "ch1pdude") {
		p = true;
	} else {
		alert("Invalid Password.")
	}
}