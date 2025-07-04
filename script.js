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

function onMod( num1, num2 ) {
    console.log("MOD: num1: " + num1 + " num2: " + num2);
    return num1 % num2;
}

function operate( num1, num2, operator ) {
    // IF num1 is NAN OR num2 is NAN THEN
    if ( typeof( num1 ) != "number" || typeof( num2 ) != "number" ) {
        // RETURN error
        return "You did not enter a number!";
    }
    // IF operator is not valid THEN
    if ( operator != "plus" && operator != "subtract" && operator != "multiply" && operator != "divide" && operator != "mod") {
        // RETURN error
        return "You did not enter a valid operator!";
    }
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
    } else if ( operator == "mod" ) {
        result = onMod( num1, num2 );
    }
    return result;
}

function updateHistory( input ) {
    historyDisp.textContent = input;
}

function updateDisplay( input ) {
    if ( input == "allClear" ) {
        display.textContent = "";
        updateHistory("");
        num1 = null;
        num2 = null;
        operator = null;
        number = "";
    } else if ( input == "clear" ) {
        console.log("Starting: num1: " + num1 + " num2: " + num2 + " operator: " + operator);
        let deleted = display.textContent.slice(display.textContent.length - 1);
        console.log("Deleted: " + deleted);
        if ( deleted == "" ) {
            updateHistory("");
        } else if ( numbers.includes(deleted) && operator == null) {
            num1 = Math.floor( num1 / 10 );
            number = Math.floor( number / 10 );
            if ( num1 == 0 ) {
                num1 = null;
            }
            if ( number == 0 ) {
                number = "";
            }
        } else if (numbers.includes(deleted)) {
            num2 = Math.floor( num2 / 10 );
            number = Math.floor( number / 10 );
            if ( num2 == 0 ) {
                num2 = null;
            }
            if ( number == 0 ) {
                number = "";
            }
        } else {
            operator = null;
        }
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
        console.log("Ending: num1: " + num1 + " num2: " + num2 + " operator: " + operator);
    } else if ( input == "=" ) {
        console.log("First: " + num1 + " Second: " + num2 + " Operator: " + operator);
        if (operator == "divide" && num2 == 0) {
            alert("You tried to divide by 0!");
            updateDisplay("clear");
            updateDisplay("clear");
        } else {
            let result = operate( Number(num1), Number(num2), operator );
            updateHistory(display.textContent + "=");
            result = Math.round( result * Math.pow( 10, 3 )) / Math.pow( 10, 3 );
            if ( result < 0 ) {
                display.textContent = "(" + result + ")";
            } else {
                display.textContent = result;
            }
        }
    } else if ( input == "sign" ) { 
        if ( number == "" ) {
            display.textContent += "(-";
        } else if ( number < 0 ) {
            display.textContent = display.textContent.replace("(-", "");
        } else {
            display.textContent = display.textContent.slice(0, num1.toString().length) + "(-" + number;
        }
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
let result = "";
let historyDisp = document.querySelector(".history");
let display = document.querySelector(".input");

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
    if ( operator != null && num2 == null ) {
        updateDisplay("clear");
    }
    operator = "mod";
    if (num1 == null && result != "") {
        num1 = result;
        result = "";
    } else if (num1 == null) {
        num1 = number;
    } else if (number != "") {
        num2 = number;
        updateDisplay("=");
        num2 == null;
    }
    if (number < 0) {
        updateDisplay(")");
    }
    number = "";
    updateDisplay("%");
})

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => {
    if ( operator != null && num2 == null ) {
        updateDisplay("clear");
    }
    operator = "divide";
    
    if (num1 == null && result != "") {
        num1 = result;
        result = "";
    } else if (num1 == null) {
        num1 = number;
    } else if (number != "") {
        num2 = number;
        updateDisplay("=");
        num2 == null;
    }
    if (number < 0) {
        updateDisplay(")");
    }
    number = "";
    updateDisplay("÷");
})

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener("click", () => {
    if (result != "") {
        updateHistory( historyDisp.textContent + result );
        for (let i = 0; i < display.textContent.length; i++) {
            updateDisplay("clear");
        }
        result = "";
    } 
    updateDisplay("7");
    number += "7";
})

const eightButton = document.querySelector("#eight");
eightButton.addEventListener("click", () => {
    if (result != "") {
        updateHistory( historyDisp.textContent + result );
        for (let i = 0; i < display.textContent.length; i++) {
            updateDisplay("clear");
        }
        result = "";
    } 
    updateDisplay("8");
    number += "8";
})

const nineButton = document.querySelector("#nine");
nineButton.addEventListener("click", () => {
    if (result != "") {
        updateHistory( historyDisp.textContent + result );
        for (let i = 0; i < display.textContent.length; i++) {
            updateDisplay("clear");
        }
        result = "";
    } 
    updateDisplay("9");
    number += "9";
})

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => {
    if ( operator != null && num2 == null ) {
        updateDisplay("clear");
    }
    operator = "multiply";
    
    if (num1 == null && result != "") {
        num1 = result;
        result = "";
    } else if (num1 == null) {
        num1 = number;
    } else if (number != "") {
        num2 = number;
        updateDisplay("=");
        num2 == null;
    }

    if ( number < 0 ) {
        updateDisplay(")")
    }
    number = "";
    updateDisplay("x");
})

const fourButton = document.querySelector("#four");
fourButton.addEventListener("click", () => {
    if (result != "") {
        updateHistory( historyDisp.textContent + result );
        for (let i = 0; i < display.textContent.length; i++) {
            updateDisplay("clear");
        }
        result = "";
    } 
    updateDisplay("4");
    number += "4";
})

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener("click", () => {
    if (result != "") {
        updateHistory( historyDisp.textContent + result );
        for (let i = 0; i < display.textContent.length; i++) {
            updateDisplay("clear");
        }
        result = "";
    } 
    updateDisplay("5");
    number += "5";
})

const sixButton = document.querySelector("#six");
sixButton.addEventListener("click", () => {
    if (result != "") {
        updateHistory( historyDisp.textContent + result );
        for (let i = 0; i < display.textContent.length; i++) {
            updateDisplay("clear");
        }
        result = "";
    } 
    updateDisplay("6");
    number += "6";
})

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", () => {
    if ( operator != null && num2 == null ) {
        updateDisplay("clear");
    }
    operator = "subtract";
    if (num1 == null && result != "") {
        num1 = result;
        result = "";
    } else if (num1 == null) {
        num1 = number;
    } else if (number != "") {
        num2 = number;
        updateDisplay("=");
        num2 == null;
    }

    if ( number < 0 ) {
        updateDisplay(")")
    }
    number = "";
    updateDisplay("-");
})

const oneButton = document.querySelector("#one");
oneButton.addEventListener("click", () => {
    if (result != "") {
        updateHistory( historyDisp.textContent + result );
        for (let i = 0; i < display.textContent.length; i++) {
            updateDisplay("clear");
        }
        result = "";
    } 
    updateDisplay("1");
    number += "1";
})

const twoButton = document.querySelector("#two");
twoButton.addEventListener("click", () => {
    if (result != "") {
        updateHistory( historyDisp.textContent + result );
        for (let i = 0; i < display.textContent.length; i++) {
            updateDisplay("clear");
        }
        result = "";
    } 
    updateDisplay("2");
    number += "2";
})

const threeButton = document.querySelector("#three");
threeButton.addEventListener("click", () => {
    if (result != "") {
        updateHistory( historyDisp.textContent + result );
        for (let i = 0; i < display.textContent.length; i++) {
            updateDisplay("clear");
        }
        result = "";
    } 
    updateDisplay("3");
    number += "3";
})

const plusButton = document.querySelector("#plus");
plusButton.addEventListener("click", () => {
    if ( operator != null && num2 == null ) {
        updateDisplay("clear");
    }
    operator = "plus";
    if (num1 == null && result != "") {
        num1 = result;
        result = "";
    } else if (num1 == null) {
        num1 = number;
    } else if (number != "") {
        num2 = number;
        updateDisplay("=");
        num2 == null;
    }
    if ( number < 0 ){
        updateDisplay(")");
    }
    number = "";
    updateDisplay("+");
})

const signButton = document.querySelector("#sign");
signButton.addEventListener("click", () => {
    if ( result != "" ) {
        number = result;
        result = "";
    }
    updateDisplay("sign");
    if ( number == "" ) {
        number = "-";
    } else {
        number = 0 - number;
    }
})

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", () => {
    if (result != "") {
        updateHistory( historyDisp.textContent + result );
        for (let i = 0; i < display.textContent.length; i++) {
            updateDisplay("clear");
        }
        result = "";
    } 
    updateDisplay("0");
    number += "0";
})

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => {
    if (result != "") {
        updateHistory( historyDisp.textContent + result );
        for (let i = 0; i < display.textContent.length; i++) {
            updateDisplay("clear");
        }
        result = "";
    }
    
    if ( !(number.includes(".")) ) {
        if (number == "") {
            updateDisplay("0.");
            number += "0."
        } else {
            updateDisplay(".");
            number += ".";
        }
    }
})

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    console.log("num1: " + num1 + " operator: " + operator + " number: " + number + " num2: " + num2);
    if (num1 == null || operator == null || number == "" ) {
        // Do nothing
    } else {
        if ( number < 0 ) {
            updateDisplay(")");
        }
        num2 = number;
        updateDisplay("=");
        num1 = null;
        num2 = null;
        operator = null;
        number = "";
    }
})