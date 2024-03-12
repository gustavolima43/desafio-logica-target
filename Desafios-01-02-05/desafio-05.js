const string = "Olá Mundo!";

function inverterString(string) {
    let novaString = "";

    for (i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    console.log(novaString)
}

inverterString(string)