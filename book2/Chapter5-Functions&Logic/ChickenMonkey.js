console.log("HERE!");

for(let i = 1; i <= 100; i++){
    if(i % 35 === 0){
        console.log("ChickenMonkey")
    }
    else if(i % 5 ===0){
        console.log("Chicken")
    }else if(i % 7===0){
        console.log("Monkey")
    }else{
        console.log(i)
    }

    // TERINARY OPERATOR
    // i % 35 === 0 ? console.log("ChickenMonkey") : i % 5 === 0 ? console.log("Chicken") : i%7===0 ? console.log("Monkey") : console.log(i)
}