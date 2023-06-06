var name1 = "john doe";
var name2 = "Jane smith";
var name3 = "bob Johnson";

//  Name 1 //

var spaceOfFirst = name1.indexOf(" ");

var firstNameInt = name1[0];
var lastNameInt = name1[spaceOfFirst + 1];
console.log((firstNameInt + lastNameInt).toUpperCase());

// Name 2 //

var spaceOfsecond = name2.indexOf(" ");

var firstNameInt = name2[0];
var lastNameInt = name2[spaceOfsecond + 1];
console.log((firstNameInt + lastNameInt).toUpperCase());

// Name 3 //

var spaceOfThird = name1.indexOf(" ");

var firstNameInt = name3[0];
var lastNameInt = name3[spaceOfThird + 1];
console.log((firstNameInt + lastNameInt).toUpperCase());
