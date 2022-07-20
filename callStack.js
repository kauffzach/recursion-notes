/*

=========Call Stack=========

Call stack: A structure in JS runtime to keep strack of function calls
    a. Imagine a pile:
        1. new items must be placed on top of the pile - pushing
        2. at any point the only item that can be removed is the top of the pile - popping
    b. when a function is called, a new frame is pushed onto the stack
    c. when a function returns, the frame on the top of the stack is popped off the stack



*/

function foo() {
    console.log("a");
    bar();
    console.log("e");
}

function bar() {
    console.log("b");
    baz();
    console.log("d");
}                               //
//
function baz() {                //  baz()
    console.log("c");           //
}                               //  bar()      reads
//             bottom
foo();                          //  foo()      to top.
