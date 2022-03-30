function oddarry(a,b){
    var arr= [];
    for (let index = a; index <=b; index++) {
        // const element = array[index];
        if (index%2!=0) {
            arr.push(index);
        }
    
    }
    
console.log(arr)
}
oddarry(10,20)