/*

========Default Parameters==========

Default parameter: Is declared in a function signature like a regular parameter
                   but it's given a default value using an =.



function sum(nums, verbose = false) {
//Default param:   ^_____________^
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (verbose) {
            console.log(total + " + " + nums[i] + " = " + (total + nums[i]));
        }
        total += nums[i];
    }
    return total;
}

nums = [1, 2, 3, 4];

console.log("First:", sum(nums));
// 10


console.log("Second:", sum(nums, true));
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10





Default params can also be used to receive data from intermediate calculations.
This is useful to pass data between recursive function calls.


function allFactorials(n, factorials = [1]) {

    if (n > factorials.length) {
        factorials = allFactorials(n - 1, factorials)
    }

    factorials.push(n * factorials[n - 1])

    return factorials;
}

console.log(allFactorials(5));
// [ 1, 1, 2, 6, 24, 120 ]

*/
