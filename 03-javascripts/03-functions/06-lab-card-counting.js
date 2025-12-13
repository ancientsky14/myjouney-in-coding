let count = 0;

function cc(card) {
    if (card >= 2 && card  <= 6 ) {
        count++;
    } else if (card >= 7 && card <=9 ){
        //no change
    } else if (
        card === 10 ||
        card === "J" ||
        card === "Q" ||
        card === "K" ||
        card === "A" ) {
        count--;
    }

if (count > 0)  {
    return count + " Bet";
    } else {
    return count + " Hold";
}
}
count = 0;
console.log(cc(2)); 
console.log(cc(3)); 
console.log(cc(4)); 
console.log(cc(5)); 
console.log(cc(6)); // "5 Bet"

count = 0;
console.log(cc(7));
console.log(cc(8));
console.log(cc(9)); // "0 Hold"

count = 0;
console.log(cc(10));
console.log(cc("J"));
console.log(cc("Q"));
console.log(cc("K"));
console.log(cc("A")); // "-5 Hold"

count = 0;
console.log(cc(3));
console.log(cc(7));
console.log(cc("Q"));
console.log(cc(8));
console.log(cc("A")); // "-1 Hold"

