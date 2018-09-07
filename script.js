//Morning exercise: Convert strings into morse code.

var morse_code = function(word){
    var split_word = word.split("");
    var arr = [];
    for (var i = 0; i < split_word.length; i++){
        for (var j = 0; j < Object.keys(alphabet).length; j++){
            if (split_word[i] === Object.keys(alphabet)[j]){
                arr.push(alphabet[Object.keys(alphabet)[j]]);
            }
        }
    }
    console.log(arr);
}
/*var firstWord = "hello world";
morse_code(firstWord);

var secondWord = "we love javascript";
morse_code(secondWord);
*/
//further: Write a function that accepts a user input and be able to output the encoded value.
var input = prompt("Insert your input: ");
var input_lowCase = input.toLowerCase();
if (typeof(input_lowCase) == "string"){
    morse_code(input_lowCase);
}
else {
    console.log("Please input a string!");
}