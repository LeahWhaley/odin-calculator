function onAdd( num1, num2 ) {
    return num1 + num2;
}

function onSub( num1, num2 ) {
    return num1 - num2;
}

function onMultiply( num1, num2 ) {
    return num1 * num2;
}

function onDivide( num1, num2 ) {
    return num1 / num2;
}

function operate( num1, num2, operator ) {
    // IF num1 is NAN OR num2 is NAN THEN
    if ( typeof( num1 ) != "number" || typeof( num2 ) != "number" ) {
        // RETURN error
        return "You did not enter a number!";
    }
    // IF operator is not valid THEN
    if ( operator != "plus" && operator != "subtract" && operator != "multiply" && operator != "divide" ) {
        // RETURN error
        return "You did not enter a valid operator!";
    }
    // SET result to 0
    let result = 0;
    // IF operator is add THEN
    if ( operator === "plus" ) {
        // SET result to onAdd( num1, num2 )
        result = onAdd( num1, num2 );
    // ELSE IF operator is sub THEN
    } else if ( operator == "subtract" ) {
        // SET result to onSub( num1, num2 )
        result = onSub( num1, num2 );
        // ELSE IF operator is multiply THEN
    } else if ( operator == "multiply" ) {
        // SET result to onMultiply( num1, num2 )
        result = onMultiply( num1, num2 );
        // ELSE IF operator is divide THEN
    } else if ( operator == "divide" ) {
        // SET result to onDivide( num1, num2 )
        result = onDivide( num1, num2 );
    }
    return result;
}

function updateDisplay( input ) {
    let display = document.querySelector(".input");
    let historyDisp = document.querySelector(".history");
    if ( input == "allClear" ) {
        display.textContent = "";
        historyDisp.textContent = "";
        num1 = null;
        num2 = null;
        operator = null;
        number = "";
    } else if ( input == "clear" ) {
        console.log("Starting: num1: " + num1 + " num2: " + num2 + " operator: " + operator);
        let deleted = display.textContent.slice(display.textContent.length - 1);
        if ( numbers.includes(deleted) && operator == null) {
            num1 = num1.toString().substring(0, num1.length - 1);
            number.substring(0, number.length - 1);
        } else if (numbers.includes(deleted)) {
            num2 = num2.toString().substring(0, num2.length - 1);
            number = number.toString().substring(0, number.length - 1);
        } else {
            operator = null;
        }
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
        console.log("Ending: num1: " + num1 + " num2: " + num2 + " operator: " + operator);
    } else if ( input == "=" ) {
        console.log("First: " + num1 + " Second: " + num2 + " Operator: " + operator);
        let result = operate( Number(num1), Number(num2), operator );
        historyDisp.textContent = display.textContent + "=";
        display.textContent = result;
        num1 = result;
    } else {
        if ( display.textContent == "0" && numbers.includes(input)) {
            display.textContent = input;
        } else {
            display.textContent += input;
        }
    }
}

// INITIALIZE num1
let num1 = null;
// INITIALIZE num2
let num2 = null;
// INITIALIZE operator
let operator = null;

let number = "";

const numbers = "123456789";

const allClearButton = document.querySelector("#allClear");
allClearButton.addEventListener("click", () => {
    updateDisplay("allClear");
    num1 = null;
    num2 == null;
    operator = null;
    number = "";
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    updateDisplay("clear");
})

const modButton = document.querySelector("#mod");
modButton.addEventListener("click", () => {
    updateDisplay("%");
})

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => {
    operator = "divide";
    if (num1 == null) {
        num1 = number;
        number = "";
    } else if (number != "") {
        num2 = number;
        updateDisplay("=");
        num2 == null;
        number = "";
    }
    updateDisplay("÷");
})

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener("click", () => {
    updateDisplay("7");
    number += "7";
})

const eightButton = document.querySelector("#eight");
eightButton.addEventListener("click", () => {
    updateDisplay("8");
    number += "8";
})

const nineButton = document.querySelector("#nine");
nineButton.addEventListener("click", () => {
    updateDisplay("9");
    number += "9";
})

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => {
    operator = "multiply";
    if (num1 == null) {
        num1 = number;
        number = "";
    } else if (number != "") {
        num2 = number;
        updateDisplay("=");
        num2 == null;
        number = "";
    }
    updateDisplay("x");
})

const fourButton = document.querySelector("#four");
fourButton.addEventListener("click", () => {
    updateDisplay("4");
    number += "4";
})

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener("click", () => {
    updateDisplay("5");
    number += "5";
})

const sixButton = document.querySelector("#six");
sixButton.addEventListener("click", () => {
    updateDisplay("6");
    number += "6";
})

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", () => {
    operator = "subtract";
    if (num1 == null) {
        num1 = number;
        number = "";
    } else if (number != "") {
        num2 = number;
        updateDisplay("=");
        num2 == null;
        number = "";
    }
    updateDisplay("-");
})

const oneButton = document.querySelector("#one");
oneButton.addEventListener("click", () => {
    updateDisplay("1");
    number += "1";
})

const twoButton = document.querySelector("#two");
twoButton.addEventListener("click", () => {
    updateDisplay("2");
    number += "2";
})

const threeButton = document.querySelector("#three");
threeButton.addEventListener("click", () => {
    updateDisplay("3");
    number += "3";
})

const plusButton = document.querySelector("#plus");
plusButton.addEventListener("click", () => {
    operator = "plus";
    if (num1 == null) {
        num1 = number;
        number = "";
    } else if (number != "") {
        num2 = number;
        updateDisplay("=");
        num2 == null;
        number = "";
    }
    updateDisplay("+");
})

const signButton = document.querySelector("#sign");
signButton.addEventListener("click", () => {
    // CALL updateDisplay()
})

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", () => {
    updateDisplay("0");
    number += "0";
})

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => {
    // CALL updateDisplay()
})
const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    if (num1 == null || operator == null || number == null) {
        // Do nothing
    } else {
        num2 = number;
        updateDisplay("=");
        num2 = null;
        operator = null;
        number = "";
    }
})