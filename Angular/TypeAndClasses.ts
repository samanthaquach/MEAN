var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1, 2, 3, 4];
var myObj: object = { name: 'Bill' };
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne: boolean[] = [true, false, true, true];
var arrayTwo: any = [1, 'abc', true, 2];
var myObj: object = { x: 5, y: 10 };
// object constructor
class MyNode{
    val: number;

    constructor(val: number){
        this.val = 0;
        this.val = val;
    }
    doSomething(){
        this.val = 10;
        return MyNode;
    }
}

class myNodeInstance{
    val: number;

    constructor(valB: number){
        this.val = valB;
    }
    doThis(){
        console.log(myNodeInstance);
    }
}
let firstmyNodeInstance = new myNodeInstance(1);


function myFunction(message: string): void {
    console.log("Hello World");
    return;
}

function sendingErrors(message: string): never {
    throw new Error('Error message');
}
