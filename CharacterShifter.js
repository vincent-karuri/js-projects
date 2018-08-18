function shiftCharaters(str) {
	var capitalZ = 90;
	var capitalA = 65;
	var lowerCaseZ = 122;
	var lowerCaseA = 97;
	result = "";
	for (var i = 0; i < str.length; i++) {
		var ascii = str[i].charCodeAt(0);
		if (ascii === capitalZ) {
			result += String.fromCharCode(capitalA);
		} else if (ascii === lowerCaseZ) {
			result += String.fromCharCode(lowerCaseA);
		} else {
			result += String.fromCharCode(ascii + 1);
		}
	}
	console.log(result);
}

shiftCharaters("tester");
shiftCharaters("ExamPLE");
shiftCharaters("zxamPLZ");