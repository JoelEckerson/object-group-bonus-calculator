const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// call a function on each employee object that calculates bonus
function employeeReviews (array){
  //loop over employees array
  for (let i = 0; i < array.length; i++) {
    let bBonus = callFunction(array[i]);
    // console.log each iteration
    console.log(bBonus);
  }
}


// write a function that takes an employee object and returns a new object
function callFunction(employee){
  em1 = {name: '', bonusPercentage: '', totalCompensation: '', totalBonus: ''};
  // if else assign bonus to employees based on rating
  if (employee.reviewRating <= 2){
    em1.totalBonus = 0;
  }
  else if (employee.reviewRating === 3){
    em1.totalBonus = employee.annualSalary * .04;
  }
  else if (employee.reviewRating === 4){
    em1.totalBonus = employee.annualSalary * .06;
  }
  else if (employee.reviewRating === 5){
    em1.totalBonus = employee.annualSalary * .1;
  }
  // if employee has 4 digit employee number add 5% bonus
  if (employee.employeeNumber > 999 && employee.employeeNumber < 10000){
    em1.totalBonus += em1.totalBonus * .05;
  }
  // if income is greater than $65k adjust bonus down 1%
  if(employee.annualSalary > 65000){
    em1.totalBonus += em1.totalBonus * -.01;
  }
  // no bonus can be above 13% or below 0%
  if (em1.totalBonus > employee.annualSalary * .13 ){
    em1.totalBonus = employee.annualSalary * .13;
  }
}














console.log( employees );
