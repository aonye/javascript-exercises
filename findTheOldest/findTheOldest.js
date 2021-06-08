const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear(); //store currentyear in var
    let newObj = {};

    for (let i = 0; i < people.length; i++){ //iterate and store current as death if false.
        if ("yearOfDeath" in people[i]===false){
            people[i]["yearOfDeath"]=currentYear;
        } 
    }
    let largestIndex;
    let sorted = people.reduce((largest, person, index) => {
        if (index===0){ //first iteration, need default values to test
            largest.yearOfDeath = 0;
            largest.yearOfBirth = 0;
        }
        if (person.yearOfDeath-person.yearOfBirth>largest.yearOfDeath-largest.yearOfBirth){
            return largest = person;
        }
        else {
            return largest;
        }
    },{});
    return sorted;
};

//if death date is empty, use currentYear

//npm test findTheOldest.spec.js

module.exports = findTheOldest;
