// var p = false
var i = prompt("Please enter Password:")

// if (i === "ch1pdude" || i === "password" || i === "pass" || i === "p") {
// 	p = true;
// } else {
// 	while ( p === false) {
// 		alert("Password invalid.");
// 		i = prompt("Please enter Password:");
// 	}
// }

while ( i !== "ch1pdude") {
	alert("Password invalid.");
	i = prompt("Please enter Password:");
}