function generateFirstFiveHappyNumbers(num) {
	var result = [];
	var curr = 1;
	while (result.length < 5) {
		if(isHappyNumber(curr)) {
			result.push(curr)
		}
		curr++;
	}
	return result;
}

function isHappyNumber(num) {
	var visitedNums = [];
	while (!(num in visitedNums)) {
		var numStr = num.toString();
	    var newNum = 0;
		visitedNums.push(num);
		for (var i = 0; i < numStr.length; i++) {
	        digit = parseInt(numStr[i]);
			newNum += (digit * digit);
		}
		if (newNum == 1) {
			return true;
		}
		num = newNum;
	}
	return false;
}

console.log(generateFirstFiveHappyNumbers());