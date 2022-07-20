/*
============================================================================================

Learning objectives:
    1. With a recursive function, identify the base case and the recursive case
    2. Identify and use default params for functions
    3. Define "stack overflow"
    4. Identify what causes the error: RangeError: Maximum call stack
    5. Map a recursive call stack when running a test case through a recursive function
    6. solve problems using recursion
    7. Given a buggy recursive function, debug the function

============================================================================================

=========Recursion=========

Recursion: Calling a function from within itself.

function gentlyUnpackFruit(contents) {
    console.log("Your " + contents + " have been unpacked!");
}

function dump(crate) {
    if (crate.content_type === "crate") {
        dump(crate.contents); // Recursion happens Here
    } else if (crate.content_type === "fruit") {
        gentlyUnpackFruit(crate.contents);
    }
}

-----Two Cases-----

Base Case: When data getting passed into our function is processed without any additional recursion.
           Upon execution, the function runs once and ends. (Aka the terminating case).

Recursive Case: When the function recurses. Represents the data state causing a function to call itself.




------Recursion vs. Iteration------


Stack Overflow: Occurs when a function calls itself and there is no base case to work
towards closing the funcion, it will exceed the maximum stack size, which halts the
program, wipes the stack, resulting in a RangeError.

A good Base Case should include:
    1. A default instance that lets us end the recursion
    2. An action that moves towards the default instance




Direct recursion: when functions directly call themselves.
Indirect recursion: when multiple functions call each other
    ex.
function didYouDoTheThing() {
    ofCourseIDidTheThing();
}

function ofCourseIDidTheThing() {
    didYouDoTheThing();
}

didYouDoTheThing();

When to iterate, When to recur?

Iteration is calling a function for each member of a collection, rather than a function calling itself.
Less resource heavy than recursive code, requires less planning to get working. Usually easier to read
and understand.

Recursive solutions are sometimes better when problems can be subdivided into smaller problems with the same shape.
Think: If it's a problem that is no harder to do for 1000 things, just longer, than consider iteration.
But, if doing something 1000 times feels very difficult compared to just 1-5 things then consider recursion.

Functions like reduce, map, and filter are implemented very cleanly with recursion.
Problems that are recursive by nature like traversing nested arrays, objects, graphs or trees
are useful for recursive solutions

_____________________________
Writing a recursive function:
*****************************
step 1. The function has an end state (Base case)
step 2. The function moves closer to the base case with each call (recursive case)
step 3. The function calls itself (recursive step)

ex.
function printArray(arr, i = 0) {

    // Base Case: index has reached the end of the array
    if (i >= arr.length) return;

    // Print the value
    console.log(arr[i]);

    // Call the function recursively,
    // moving the index one step closer to the base case.
    printArray(arr, i+1);
}

Remember to follow the steps through and this makes sense

Iterative ex.
function printArrayIterative(arr) {
    for (let i = 0 ; i < arr.length ; i++) {
        console.log(arr[i]);
    }
}
note: i++ is step 2, i < arr.length is step 1


Example: Say you had to write a recursive function that multiplies num1 and num2.

Understanding the problem:
    * Cannot use *, for or while
    * multiplying is the same as adding num1 to itself num2 times

1. Multiplying anyting by 0 = 0, so if num2 is equal to zero, you return zero. Next if num2 = 1, you return num1.
   If num2 = 2, return num1 + num1


function multiply(num1, num2) {
    // base case
    if (num2 == 0) return 0;
    if (num2 == 1) return num1;
    if (num2 == 2) return num1 + num1;
    if (num2 == 3) return num1 + num1 + num1;
}


function multiply(num1, num2) {
    // base case
    if (num2 == 0) return 0;
    if (num2 == 1) return num1;

    return num1 + multiply(num1, num2 - 1);
}
multiply(5, 3)  // 15


function multiply(num1, num2) {
    // base case
    if (num2 == 0) return 0;

    return num1 + multiply(num1, num2 - 1);
}
multiply(5, 3)  // 15


Think of it like a helper function instead:

function alternateMultiply(num1, num2) {
    return num1 / (1 / num2);
}
alternateMultiply(5, 3); // 15

function multiply(num1, num2) {
    // base case
    if (num2 == 0) return 0;

    if (num2 > 0) {
        return num1 + alternateMultiply(num1, num2 - 1);
    }
}

multiply(4, 6)  // 24

*/
