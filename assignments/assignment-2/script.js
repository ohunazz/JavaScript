// Comparison Operators

5 == "5"; // true
5 === "5"; // false
5 != "5"; // false
5 !== "5"; // true
5 > 3; // true
5 < 3; // false
5 >= 5; // true
5 <= 6; // true

// Logical Operators

true && false; // false
true || false; // true
!true; // false
(true && false) || true; // true
(!false && true) || false; // true

// Combining Logical and Comparison Operators

5 > 3 && 2 == "2"; // true && true / true
5 !== "5" && 6 <= 10; // true && true / true
3 === "3" || 7 > 10; // false || false / false
4 < 2 || 3 !== "3"; // false || true / true
!(5 > 3 && 2 == "2"); // true && true /true // ! evaluates to false
!(3 === "3" || 7 > 10); // false || false / false // ! evaluates to true
(5 > 3 && !(2 === "2")) || 4 !== "4"; // true && (false || true / true) // true && false (! evaluates true to false) / false
7 >= "7" || (!(9 < 11) && 2 !== "2"); // true || (true && true / true ) // true || false (! evaluates true to false) / true

// More Complex Examples

5 > 3 && 2 == "2" && 7 < 10; // true && true && true / true
5 !== "5" && 6 <= 10 && 2 === 2; // true && true && true / true
3 === "3" || 7 > 10 || 4 !== 4; // false || false || false / false
4 < 2 || 3 !== "3" || 5 == "5"; // false || true || true / true
!((5 > 3 && 2 == "2") || 9 === "9"); // true && true || false / true // ! evaluates to false
!(3 === "3" || (7 > 10 && 5 !== 5)); // false( ! evaluates to true) / true  false && false / false   true || false = true
(5 > 3 && !(2 === "2")) || (4 !== "4" && 7 < 8); // true && (false || false = false -! evaluates to true) true && true =true
7 >= "7" || (!(9 < 11) && 2 !== "2") || 3 == "3"; // true || (true && false = false - ! evaluates to true) true || true || true = true
