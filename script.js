function onAdd( num1, num2 ) {
    // SET num1 to Number(num1)
    // SET num2 to Number(num2)
    // SET result to num1 + num2
    // RETURN result
    return num1 + num2;
}

function onSub( num1, num2 ) {
    // SET num1 to Number(num1)
    // SET num2 to Number(num2)
    // SET result to num1 - num2
    // RETURN result
    return num1 - num2;
}

function onMultiply( num1, num2 ) {
    // SET num1 to Number(num1)
    // SET num2 to Number(num2)
    // SET result to num1 * num2
    // RETURN result
    return num1 * num2;
}

function onDivide( num1, num2 ) {
    // SET num1 to Number(num1)
    // SET num2 to Number(num2)
    // SET result to num1 / num2
    // RETURN result
    return num1 / num2;
}

function onClear() {
    // CALL updateDisplay()
    // SET num1 to null
    // SET num2 to null
    // SET operator to null
}

function operate( num1, num2, operator ) {
    // IF num1 is NAN OR num2 is NAN THEN
    if ( typeof( num1 ) != "number" || typeof( num2 ) != "number" ) {
        // RETURN error
        return "You did not enter a number!";
    }
    // IF operator is not valid THEN
    if ( operator != "plus" && operator != "sub" && operator != "mult" && operator != "divide" ) {
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
    } else if ( operator == "sub" ) {
        // SET result to onSub( num1, num2 )
        result = onSub( num1, num2 );
        // ELSE IF operator is multiply THEN
    } else if ( operator == "mult" ) {
        // SET result to onMultiply( num1, num2 )
        result = onMultiply( num1, num2 );
        // ELSE IF operator is divide THEN
    } else if ( operator == "divide" ) {
        // SET result to onDivide( num1, num2 )
        result = onDivide( num1, num2 );
    }
    return result;
    // CALL updateDisplay( result )
}

// INITIALIZE num1
let num1 = null;
// INITIALIZE num2
let num2 = null;
// INITIALIZE operator
let operator = null;