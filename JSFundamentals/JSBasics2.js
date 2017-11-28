function magic_multiply(x, y) {
    x * y
    return x;
}
// 1
let test1 = magic_multiply(5, 2);
console.log(test1*2);

//2

let test2 = magic_multiply(0, 0);
console.log(test2);

//3 

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

//4 

let test4 = magic_multiply(7, "three");
console.log(test4*"three");

//5 
let test5 = magic_multiply("Brendo", 4);
console.log(test5+"BrendoBrendoBrendo");