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
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
