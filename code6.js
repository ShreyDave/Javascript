/*for( let i = 1 ; i<5 ; i++ ){
    console.log(i);
};*/
function factorial(n){
let sum =1;
// let n = prompt("Enter your Number")
// n=Number.parseInt(n);    
for(let i=0;i<n;i++){
    sum *= (i+1)
    console.log((i+1) + "*")
}
console.log(sum);
}

factorial(n=4)  