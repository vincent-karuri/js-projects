// Need to use objects as a type of Set
const arr = [1,2,3,4,5,2,2,1,3,3,3,5];
var set = {};
var deDuplicatedArr = [];
for (var i = 0; i < arr.length; i++) {
	var key = arr[i].toString();
	if (!set[key]) {
		deDuplicatedArr.push(arr[i]);
		set[key] = true;
	}
}

for (var i = 0; i < deDuplicatedArr.length; i++) {
	print(deDuplicatedArr[i]);
}


