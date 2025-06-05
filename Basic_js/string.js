// templated string or string interpolation

console.log("hello this is template string");
console.log('helo this is string in signle quote');
console.log(`hello this is stirng ins backtick`);
console.log("hello this 'this is in sigle inside dobult' and ");
console.log('hello this "this is double inside sible" and ');
console.log(`hell this 'single ' and "double" inside backtick`);
console.log('this is \'single\' and \"double\" inside single quote and \`literal\`');
// this is possible becauseo f escape secquence ...
let name="bingiii";
console.log(`the value of varaible is : ${10+20} and varible is ${name}`);  // thsi is called templated string and embeding the expression isnide the string is called string interpolation. // very much helpful in regx.

// methods of string ...
let str="bingolive";
console.log("concat : ",str.concat(" ","Heloo"," ","world"));

// Keep in mind string are immutabe in js so if we do any operation on string then it will not change the original string instead it will return a new string.

console.log("trim :","   love   ".trim());

console.log("toUpperCase : " , "love".toUpperCase());
console.log("toLowerCase :","LOVE".toLowerCase());

// indexOf -- return the index of first mathching charcter or substrting that we apssed... if there are multiple then first mathcing index will be returned if nothing found then -1 will be returned.
console.log("index of : ","love".indexOf("v")); 

// slice --->  stringName.slice(startIndex,endIndex); // return new string ..
// (a) when only start index is passed.
console.log("only strt index in slice : ","love".slice(2)); // ice

// (b) when both start and end index are passed 
console.log("bot hstart and end are apssed : ","love".slice(1,"love".length)); // lice

// (c) when nothing is passed .
console.log("no index is apspsed : ","love".slice()); // love

// (d) when -ve start index is passed ---
console.log("-ve start index : ","love".slice(-3)); // string.length - -veIndex -> 5-2 -> 3 index..
// (e) both -ve insex are passed 
console.log("both -ve","love".slice(-1,-4));

// stringName.replace() method .... 

console.log("replace : ","lovelive".replace("love","bingo")); // bingolive
console.log("repalceAll : ","lovelivelovelive".replaceAll("love","new")); //newlivenewlive


// split
console.log("love".split("")); // only if emtpy string is passed as seprateor... // [ 'l', 'o', 'v', 'e' ]

// 