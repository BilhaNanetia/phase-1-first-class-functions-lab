 // Code your solution in this file!
 const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);   //Extracts the first two elements 
 }
 const firstTwoDrivers = returnFirstTwoDrivers(['Antonia','Nuru','Amari','Mo']);
 console.log(firstTwoDrivers);  //Output: ['Antonia','Nuru']


 const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);   //Extracts the last two elements
 }
 const lastTwoDrivers = returnLastTwoDrivers(['Antonia','Nuru','Amari','Mo']);
 console.log(lastTwoDrivers);   //Output:['Amari','Mo']


 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 const driverList = ['Antonia','Nuru','Amari','Mo'];

 const firstTwo = selectingDrivers[0](driverList);  //Call returnFirstTwoDrivers
 const lastTwo = selectingDrivers[1](driverList);   //Call returnLastTwoDrivers

 console.log("First two drivers:", firstTwo);
 console.log("Last two drivers:", lastTwo);


 function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
        return fare * multiplier;
    }
 }
 //Create fare quintupler function
 const fareQuintupler = createFareMultiplier(5);

 const baseFare = 5;
 const multipliedFare = fareQuintupler(baseFare);

 console.log("Base fare:", baseFare);
 console.log("Multiplied fare:", multipliedFare);  //Output: Multiplied fare: 25

 //Create function for doubling fare
 const fareDoubler = createFareMultiplier(2);

 const BaseFare = 10;
 const doubledFare = fareDoubler(BaseFare);

 console.log("Base fare:", BaseFare);
 console.log("Doubled fare:", doubledFare);  //Output: Doubled fare:20

 //Create function for tripling fares
 const fareTripler = createFareMultiplier(3);

 const BASEFare = 12;
 const tripledFare = fareTripler(BASEFare);

 console.log("Base fare:", BASEFare);
 console.log("Tripled fare:", tripledFare);   //Output: Tripled fare: 36

 //Create function to select different drivers
 function selectDifferentDrivers(drivers, selectionFunction) {
    return selectionFunction(drivers);

 }
 const DriverList = ['Antonia', 'Nuru', 'Amari', 'Mo'];
 const FirstTwo = selectDifferentDrivers(DriverList, returnFirstTwoDrivers);
 const LastTwo =selectDifferentDrivers(DriverList, returnLastTwoDrivers);

 console.log("First two driver:", FirstTwo);  //Output:'Antonia', 'Nuru'
 console.log("Last two drivers:", LastTwo);   //Output: 'Amari', 'Mo'