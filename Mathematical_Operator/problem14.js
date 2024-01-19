function twoSumsOneNumberII(one, two, three, four, five) {
    let sum1=one+two;
    let sum2=three+four;
    if((sum1 > five) ||  (sum2> five)){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}