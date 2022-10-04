'use strict';
function solveEquation(a, b, c) {
  let arr = [];
  //  (a * (x**2)) + (b * x) + c = 0 
  
    let d = (b ** 2) - (4 * a * c);
    console.log(d, 4 * a * c, a, b, c, b ** 2 );
      if (d == 0) {
        let z = -b / (2*a);
        arr.push(z);
    console.log(z)
      }
    
    else if (d > 0) {
       let x = (-b + Math.sqrt(d) )/(2*a);
        let y = (-b - Math.sqrt(d) )/(2*a);
        arr.push(x,y);
    }
    
  // код для задачи №1 писать здесь
  return arr; // array
}
solveEquation(1,3,5)

'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
    let loanAmount;
    loanAmount = contribution - amount;
    
    //нужно из сегодняшней даты высчитать дату окончания
    date.getFullYear();
    date.getMonth();
    let term;
    let today = new Date;
    
    
    let payment;
    percent = 0.83;
    payment = loanAmount * (percent +(percent / (((1 + percent) ** term) - 1)))

  // код для задачи №2 писать здесь

  return totalAmount;
}
calculateTotalMortgage(10, 0, 50000, 12)