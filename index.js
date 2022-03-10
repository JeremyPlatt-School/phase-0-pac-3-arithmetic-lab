function add(){

}
function subtract(){
    
}
function multiply(){
    
}
function divide(){
    
}

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function increment(n){
    n++;
    return n;
}
function decrement(n){
    n--;
    return n;
}
function makeInt(n){ //assumes base 10 and returns NaN as appropriate
    n = parseInt(n, 10);

    if(n === NaN){
        return `${n} is not a number`;
    } else{
        return n;
    }
    
}

function preserveDecimal(n){ //return parced number as decimal and return Nan as appropriate
    n = parseFloat(n);
    return n;
}
