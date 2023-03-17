// Code your solution in this file!
const  returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
    
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)//returns the last 2 values from the end
    
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]// basically an array

const  createFareMultiplier = function(multiplier) {
    return function(fare){
        return fare * multiplier
    }
    
} 

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers , selectingDrivers) {
    return selectingDrivers(arrayOfDrivers)

    
}
    

    
