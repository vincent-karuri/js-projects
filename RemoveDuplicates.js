function removeDuplicates(str) {
    var set = new Array();
    var duplicates = new Array();
    var duplicatesStr = "";
    var result = "";
    // O(N) run time in length of string
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (!(char in set)) {
            result += str[i];
            set[char] = 0;
        } else {
            duplicates[char] = 1;
            set[char] = set[char] + 1;
        }
    }
    console.log("String with duplicates removed is: " + result + "\n");

    console.log("Duplicate characters and their frequencies: ");
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char in duplicates) {
            console.log(char + " => " + set[char]);
            duplicatesStr += char;
            delete duplicates[char];
        }
    } 

    // sorting will take O(NlogN) which ends up being worst time complexity
    console.log("\nDuplicate string sorted forward: " + duplicatesStr.split("").sort().join("") + "\n");
    console.log("Duplicate string sorted backward: " + duplicatesStr.split("").sort(backwardCompare).join("") + "\n");
    console.log("\nDe-duplicated string sorted forward: " + result.split("").sort().join("") + "\n");
    console.log("De-duplicate string sorted backward: " + result.split("").sort(backwardCompare).join("") + "\n");
}

function backwardCompare(char1, char2) {
    return char2.localeCompare(char1);
}

removeDuplicates("testertester");