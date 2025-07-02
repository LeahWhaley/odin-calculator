function onAdd( num1, num2 ) {
    // SET num1 to Number(num1)
    // SET num2 to Number(num2)
    // SET result to num1 + num2
    // RETURN result
}

function onSub( num1, num2 ) {
    // SET num1 to Number(num1)
    // SET num2 to Number(num2)
    // SET result to num1 - num2
    // RETURN result
}

function onMultiply( num1, num2 ) {
    // SET num1 to Number(num1)
    // SET num2 to Number(num2)
    // SET result to num1 * num2
    // RETURN result
}

function onDivide( num1, num2 ) {
    // SET num1 to Number(num1)
    // SET num2 to Number(num2)
    // SET result to num1 / num2
    // RETURN result
}

function onClear() {
    // CALL updateDisplay()
    // SET num1 to null
    // SET num2 to null
    // SET operator to null
}

function operate( num1, num2, operator ) {
    // IF num1 is NAN OR num2 is NAN THEN
    // RETURN error
    // IF operator is not valid THEN
    // RETURN error
    // SET result to 0
    // IF operator is add THEN
    // SET result to onAdd( num1, num2 )
    // ELSE IF operator is sub THEN
    // SET result to onSub( num1, num2 )
    // ELSE IF operator is multiply THEN
    // SET result to onMultiply( num1, num2 )
    // ELSE IF operator is divide THEN
    // SET result to onDivide( num1, num2 )
    // CALL updateDisplay( result )
}