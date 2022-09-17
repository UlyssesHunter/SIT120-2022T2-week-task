var helloworld='Hello World';
//console.log(helloworld.charAt[0]);
//comparing strings
let a = 'a';
let b = 'b';
if(a<b){
    console.log(a+' is less then'+b)
}else if(a>b){
    console.log(a+' is greater than'+b)
}else{
    console.log(a+' and '+b+' are equal.')
}

let c = 'c';
let d = 'D';

console.log(c.toUpperCase());
console.log(d.toLowerCase());
console.log(c+d);

let longString = 
'This is a very long string which needs ' +
'to wrap across multiple lines because ' +
'otherwise me code is unreadable.';
console.log(longString);

longString = 
'This is a very long string which needs \
to wrap across multiple lines because \
otherwise me code is unreadable.';
console.log(longString);

let text = "Please visit Apple and Microsoft!";
let newText = text.replace("Microsoft", "Deakin University");

console.log(text);
console.log(newText);