/*var x = 4;
let y = 7;
console.log(x + y);*/

var A = 6;
var B = 4;
var c = 30;

var sum = A + B + c;
console.log(sum);
var fisrtName = "sandra"
console.log(fisrtName);
console.clear()
var NUM1 = 4;
var Num2 = 7.7;

console.log(typeof(NUM1));
console.log(typeof(Num2));
var diff = A - c;
console.log(diff);
var mul = A * c;
console.log(mul)
var div = Num2 / NUM1;
console.log(div);
var divByZero = NUM1 / 0;
console.log(divByZero)
console.log(typeof(divByZero));
var mulByString = c * 'money';
console.log(mulByString);
console.log(typeof(mulByString));
console.log(Num2.toString());

console.log(B.toString());
var strNum3 = "5.9";
console.log(parseInt(strNum3));
console.log(parseFloat(strNum3));
console.log(Num2.toFixed());
var Pi = 3.14159265;
console.log(Pi.toFixed(3));
var myFirstString = 'my javascript string fuctions';
//this fuction gives the total length of the string//
console.log(myFirstString.length);
//this function gives the exact location or index of a sting inside another string//
console.log(myFirstString.indexOf("string"));
//finds the last index of a string in another string//
console.log(myFirstString.lastIndexOf('string'));
//this function gives a part of the string.(start, end)//
//question? in the video, he said strings start from zero. so this expresion is supposed to stop at "c"//
console.log(myFirstString.slice(0, 7));
// substr(startpostion, length)fuction//
//question? why is it cancelled/
console.log(myFirstString.substr(3, 10));
var sentence_2 = "Russia declared war on Ukrain to save its nation";
//this function converts the string to upper case//
console.log(sentence_2.toUpperCase());
console.log(sentence_2.toLowerCase());
var lastName = "this dosn 't make it right";
//this function merges string together , you can also use + sign to merge strings//
console.log(sentence_2.concat(' ', lastName));
console.log(sentence_2 + " " + lastName);
//trim removesextra space//
var middleNAME = "         Hassan"
console.log(middleNAME.trim());
//this function returns the postion of a character 
//Question? theirs outputed a sting i.e 'a'. mine didnt why?
console.log(middleNAME.charAt(10));
console.log(sentence_2.charAt(8));
//this function splits string based on argument
console.log(sentence_2.split(" "));
var P =
    console.log(P);
var S = null
console.log(S);
console.log(typeof(S));
if (10 < 30) {
    console.log(true)
};
if (100 > 1000) {
    console.log(true)
} else {
    console.log(false)
};
//this is the if else if function. I DONT UNDERSTAND IT
if (15 > 10) {
    console.log('10>15')
} else if (10 > 17) {
    console.log('10 >17')
} else {
    console.log('nothing ')
};

if (15 > 10) {
    console.log('10>15')
} else {
    console.log('nothing ')
};

//switch function can be used in place of if else
var currentday = 'mon'
switch (currentday) {
    case 'mon':
        console.log('timing: 10:00-6:00')
        break
    case 'tue':
        console.log('timing: 09:00 - 5:00')
        break
    case 'wed':
        console.log('timing:09:00-5:30')
        break
    case 'thurs':
        console.log('timing:10:15-5:15')
        break
    case 'sun':
        console.log('timing:09:00-04:00')
        break
}
if (5 == '5') { console.log(true) };
if (5 === '5 ') {
    console.log(true)
} else {
    console.log(false)
};
if (5 != 7) { console.log(true) } else {
    console.log(false)
};
if (5 !== '5') { console.log(true) } else { console.log(false) };
//AND operator states true true=true otherwise false
if (10 > 7 && 15 < 28) { console.log(true) } else { console.log(false) }
//OR operator states false,false=false otherwise true

if (10 > 22 || 5 < 3) { console.log(true) } else { console.log(false) };
//negation function
if (!(5 > 4)) { console.log(true) } else { console.log(false) }
//tenary operation
66 > 33 ? console.log(true) : console.log(false)
    //to convert a string to a number add the + or - sign to it
var Value = '30'
console.log(-Value);
//to convert string to bollean add operators
var Input = 20 == 20;
console.log(Input)
    //to convert datatype explicitly

var mNubr = 3;
console.log(typeof(String(mNubr)));
// Console.log(typeof(Number('7')));

var car = {
    name: 'Nissan',
    manufacturer: {
        name: 'nissan group',
        location: 'japan'
    },
    topspeed: 600,
    Color: 'white',
    spoilers: false,
    applybrakes: function() {
        // setTimeout(function() {
        console.log('car stopped')
            // }, 000)


    }


}
console.log(car.Color);
console.log(car.topspeed);
console.log(car.applybrakes());
var fruits = ['pineapple', 'watermelon', 'apple', 'strawberries', 'blueberries', 'raspberries', 'pawpaw']
console.log(fruits[3]);
//change value
fruits[6] = 'agbalumo'
console.log(fruits)
    //add more items
fruits[7] = 'mango'
console.log(fruits)
fruits.push('licky_licky')
console.log(fruits)
var mName = fruits.pop()
console.log(mName)
console.log(fruits)
var mName = fruits.pop()
console.log(mName)
console.log(fruits)

var mName = fruits.pop()
console.log(mName)
console.log(fruits)

var mName = fruits.pop()
console.log(mName)
console.log(fruits)

var mName = fruits.pop()
console.log(mName)
console.log(fruits)

var mName = fruits.pop()
console.log(mName)
var mName = fruits.pop()
console.log(mName)
console.log(fruits)
var fruits = ['pineapple', 'watermelon', 'apple', 'strawberries', 'blueberries', 'raspberries', 'pawpaw']
fruits.splice(1, 2, 'cashew', 'cocnut')
console.log(fruits)
    //SORT FUNCTION IS ACENDING ORDER WHILE REEVERSE FUNCTON IS IN DECENDING ORDER
fruits.sort()
console.log(fruits)
fruits.reverse()
console.log(fruits)
    //while loop executes or iterate a block of code until a condition fails or is met
var vaLue = 1
while (vaLue < 50) {
    vaLue++
}
console.log(vaLue)
var xValue = 20
var yValue = 15
var zValue = 19;

function tProduct() {
    var xValue = 20
    var yValue = 15
    var zValue = 19;
    var mul = xValue * yValue * zValue
    return mul
        // console.log(mul)
}
// console.log(tProduct())

var totalsum = tProduct() + 100
console.log(totalsum)

function greeting(personalname) {
    console.log('welcome' + ' ' + personalname)
}
greeting('sandra');

var arr = ["hassan", "olatade", "oluwafemi", "hassan"];
for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
}

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 == 0) {
        console.log(arr2[i]);
    }
}

var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var newArr2 = [20, 21, 22, 23];

GetEvenNumbers(newArr, "test1");


function GetEvenNumbers(newArr, name) {
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] % 2 == 0) {
            console.log(newArr[i]);
        }
    }
    console.log(name);
}

GetEvenNumbers(newArr2, "test2");


// console.log(`test ${arr[4]} has`);