// Build equation string with trailing spaces
function evaluate(string) {
    let arr = string.split(" ");

    let a = parseInt(arr[0]);
    let b = parseInt(arr[2]);
    
    switch (arr[1]) {
        case '/':
            return a / b;
        case '*':
            return a * b;
        case '-':
            return a - b;
        case '+':
            return a + b;
        case '=':
            break;
    }
}

console.log(evaluate("5 + 6"))