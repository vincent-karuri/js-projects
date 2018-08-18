
function isAllCharacters(arr) {
	var regex = /^[a-z]+$/i;
	console.log("\n1. Test if a string contains only characters:\n");
	for (var i = 0; i < arr.length; i++) {
		if (regex.test(arr[i])) {
			console.log(arr[i] + ":" + true);
		} else {
			console.log(arr[i] + ":" + false);
		}
	}
	console.log("\n");
}

function containsSubString(str) {
	var result = [];
	var regex = /foo/g;
	var arr = str.split(" ");
	console.log("2. Test if a string contains 'foo':\n");
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].match(regex) != null) {
			console.log(arr[i] + ":" + true);
		} else {
			console.log(arr[i] + ":" + false);
		}
	}
}

isAllCharacters(["abcde", "0abcd", "^abcd", "ABCDE"]);
containsSubString("foobar coobar toobar barfoo bafoor foooo foot fobart");
    
