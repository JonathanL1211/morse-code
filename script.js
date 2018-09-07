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

var firstWord = "hello world";
morse_code(firstWord);

var secondWord = "we love javascript";
morse_code(secondWord);