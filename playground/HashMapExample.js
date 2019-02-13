// your code goes here
const arr = [1,2,3,4,5,2,2,1,3,3,3,5]; // can act as list or array with heterogeneous entries
var map = {};
for (var i = 0; i < arr.length; i++) {
	var key = arr[i].toString();
	if (key in map) {
		map[key] = map[key] + 1;
	} else {
		map[key] = 1;
	}
}

for (var key in map) {
	print(key + " : " + map[key]);
}


