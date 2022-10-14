//from 1 t0 100
function rec(num){
    if(num<=100){
    if(num % 3 === 0 && num % 5 ===0){
            console.log("fizzbuzz")
    }
     else if(num % 3 ===0 ){
        console.log("fizz")
    }
    else if(num % 5 ===0){
        console.log("buzz")
    }
    else{
        console.log(num);
    }
    rec(num+1)
    }
}
rec(1)

//from 100 to 1

function rec(num){
    if(num>=1){
        if(num % 3=== 0 && num % 5===0){
            console.log("fizzbuzz")
        }
        else if(num %3 ===0){
            console.log("fizz")
        }
        else if(num % 5===0){
            console.log("buzz")
        }
        else{
            console.log(num);
        }
        rec(num-1)
    }
}
rec(100)