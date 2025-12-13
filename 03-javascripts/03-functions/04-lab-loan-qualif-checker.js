const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;
const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;
const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
    if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex){
        return "You qualify for a duplex, condo, and car loan."
    } else if(annualIncome>=minIncomeForCondo  && creditScore>=minCreditScoreForCondo) {
        return "You qualify for a condo and car loan."
    } else if(annualIncome>=minIncomeForCar&&creditScore>=minCreditScoreForCar) {
        return "You qualify for a car loan."
    } else {
        return "You don't qualify for any loans.";
    }
}
const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);

console.log(getLoanMessage(70000, 720)); // duplex, condo, car
console.log(getLoanMessage(50000, 690)); // condo, car
console.log(getLoanMessage(35000, 660)); // car
console.log(getLoanMessage(20000, 620)); // none


