//Morning exercise: Convert strings into morse code.

var morseCode = function(word){
    var splitWord = word.split(""); //["hello"]
    var arr = [];
    for (var i = 0; i < splitWord.length; i++){
        /*
        for (var j = 0; j < Object.keys(alphabet).length; j++){
            if (splitWord[i] === Object.keys(alphabet)[j]){
                arr.push(alphabet[Object.keys(alphabet)[j]]);
            }
        }
        */
        // splitWord[i] => ["h", "e", "l", "l", "o"]
        if (alphabet[ splitWord[i] ] !== undefined) {
            arr.push(alphabet[splitWord[i]]);
        }
    }
    console.log(arr);
}
/*
var firstWord = "hello world";
morseCode(firstWord);

var secondWord = "we love javascript";
morseCode(secondWord);
*/
//further: Write a function that accepts a user input and be able to output the encoded value.
var input = prompt("Insert your input: ");
var inputLowCase = input.toLowerCase();
if (typeof(inputLowCase) == "string"){
    morseCode(inputLowCase);
}
/*

//Bonus: Decode
var inp2 = prompt("Input your morse code: ");
var realWords = function(word){
    var arr2 =[];
    for(var i = 0; i< word.length;i++){
        if (word[i] === " "){
            if word[i] ===
        }
        for(var j = 0; j< Object.keys(alphabet).length; j++){
            if (word[i] === " "){
                word[i].join()
                if(word[i] === alphabet[Object.keys(alphabet)[j]]){

                    arr2.push(Object.keys(alphabet)[j]);
                 }
            }

        }
    }
    console.log(arr2);
}

realWords(inp2);
*/
