$( document ).ready( readyNow );
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

 function rating (employee){
    // loop through employee objects
    for (let i = 0; i < employee.length; i++) {
      let bBonus = callFunction(employee[i]);
      console.log(bBonus);
  }

    function callFunction(array){
      let object = {name: '', bonusPercentage: 0, totalCompensation: 0, totalBonus: 0};
      object.name = array.name;

      if (array.reviewRating <= 2){
        object.totalBonus = 0;
      }
      else if (array.reviewRating === 3){
        object.totalBonus = array.annualSalary * .04;
        object.bonusPercentage = .04;
      }
      else if (array.reviewRating === 4){
        object.totalBonus = array.annualSalary * .06;
        object.bonusPercentage = .06;
      }
      else if (array.reviewRating === 5){
        object.totalBonus = array.annualSalary * .1;
        object.bonusPercentage = .1;
      }
      // if employee has 4 digit employee number add 5% bonus
      if (array.employeeNumber > 999 && array.employeeNumber < 10000){
        object.totalBonus += array.annualSalary * .05;
        object.bonusPercentage += .05;
      }
      // if income is greater than $65k adjust bonus down 1%
      if (array.annualSalary > 65000){
        object.totalBonus += object.totalBonus - array.annualSalary * .01;
        object.bonusPercentage -= .01;
      }
      // no bonus can be above 13% or below 0%
      if (object.totalBonus > array.annualSalary * .13){
        object.totalBonus = array.annualSalary * .13;
        object.bonusPercentage = .13;
      } 
      if ( object.totalBonus < 0){
        object.totalBonus = 0;
        object.bonusPercentage = 0;
      }  
      object.totalCompensation = Number(array.annualSalary) + object.totalBonus;
      object.bonusPercentage = `${object.bonusPercentage}` * 100;
      return object;
    }
  }
  rating(employees);

  console.log(employees);

function displayBonus(){
//Take input value

//loop through objects
//find match
// take values of properties & and display them
  console.log( 'in displayBonus' );
  let person = $( '#employeeNameIn' ).val();
  // target output by ID
  let el = $( '#bonusPercentageOut' );
  // empty
  el.empty();
  // loop through employees array
  for (person of employees ){
  el.append( `<h3>`+ `${person.bonusPercentage}`+ `</h3>`)
  }
};  

function readyNow (){
  console.log( 'JQ' );
  $( '#addEmployeeButton' ).on( 'click', displayBonus );
  let el = $( '#bonusPercentageOut' );
  el.empty();
}