/* Factorial of the number  */

function factorial(num){
    if(num<0){
        return "Factorial is not defined for negative numbers";
    }
    else if(num == 0 || num ==1){
        return 1;
    }
    else{
        let result = 1;
        for(let i =2;i <= num; i++){
            result *= i;
        }
        return result;
    }
    console.log(factorial(5)); // Output: 120
}