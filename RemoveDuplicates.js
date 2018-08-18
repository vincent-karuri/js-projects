function removeDuplicates(str) {
    var map = new Array();
    var duplicates = new Array();
    var duplicatesStr = "";

    // O(N) run time in length of string
    var result = deDuplicateStr(str, map, duplicates);
    console.log("String with duplicates removed is: " + result + "\n");

    duplicatesStr = printDuplicateCharsAndFreqs(str, duplicates, duplicatesStr, map);
    printStrsBackWardAndForward(duplicatesStr, result);
}

function deDuplicateStr(str, map, duplicates) {
    var result = "";
    // O(N) run time in length of string
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (!(char in map)) {
            result += str[i];
            map[char] = 0;
        } else {
            duplicates[char] = 1;
            map[char] = map[char] + 1;
        }
    }
    return result;
}

function printDuplicateCharsAndFreqs(str, duplicates, duplicatesStr, map) {
    console.log("Duplicate characters and their frequencies: ");
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char in duplicates) {
            console.log(char + " => " + map[char]);
            duplicatesStr += char;
            delete duplicates[char];
        }
    } 
    return duplicatesStr;
}

function printStrsBackWardAndForward(duplicatesStr, result) {
    function backwardCompare(char1, char2) {
     return char2.localeCompare(char1);
    }
     // sorting will take O(NlogN) which ends up being worst time complexity
    console.log("\nDuplicate string sorted forward: " + duplicatesStr.split("").sort().join("") + "\n");
    console.log("Duplicate string sorted backward: " + duplicatesStr.split("").sort(backwardCompare).join("") + "\n");
    console.log("\nDe-duplicated string sorted forward: " + result.split("").sort().join("") + "\n");
    console.log("De-duplicated string sorted backward: " + result.split("").sort(backwardCompare).join("") + "\n");
}

removeDuplicates("testertester");