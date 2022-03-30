function diffVariable(a){
var num1=a;
var diff= num1-19;
if (diff<0) {
    diff*=-1
}
if (a>19) {
    diff= diff*3
}
console.log(diff);
}
diffVariable(3);