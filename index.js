// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};

// Arrow Function version :const returnFirstTwoDrivers =(array)=>{ return array.slice(0, 2)};

console.log(returnFirstTwoDrivers(drivers));

// second function
const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
};
// Arrow Function:const returnLastTwoDrivers = (array)=> { return array.slice(-2);
console.log(returnLastTwoDrivers(drivers));

// Third Function

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));

// Fourth function
function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

console.log(fareDoubler(10));
console.log(fareTripler(12));
console.log(fareDoubler(8));
console.log(fareTripler(33));

// Last part

function selectDifferentDrivers(array, driversGroup) {
  return driversGroup(array);
}

const firstGroup = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
const secondGroup = selectDifferentDrivers(drivers, returnLastTwoDrivers);

console.log(firstGroup);
console.log(secondGroup);

// another way to do it using if conditional:

/*
function selectDifferentDrivers(array, group) {
  if (group === `first`) {
    return returnFirstTwoDrivers(array);
  } else if (group === `second`) {
    return returnLastTwoDrivers(array);
  }
}

console.log(selectDifferentDrivers(drivers, `first`));
console.log(selectDifferentDrivers(drivers, `second`));
*/
