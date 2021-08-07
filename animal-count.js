function animalCount(miles){
    let animalDensityFirst10Miles=10;
    let animalDensitySecond10Miles=50;
    let animalDensityRestMiles=100;
    if(typeof miles!='number'){
        return 'Please Provide a number'
    }
    else if(miles<0){
        return 'Please Provide a positive value'
    }
    else if(miles<=10){
        let count=animalDensityFirst10Miles*miles;
        return count;
    }
    else if(miles<=20){
        let firstDenseAnimals=10*animalDensityFirst10Miles;
        let restOfMiles=miles-10;
        let secondDenseAnimals=animalDensitySecond10Miles*restOfMiles;
        let count=firstDenseAnimals+secondDenseAnimals;
        return count;
    }
    else{
        let firstDenseAnimals=100;
        let secondDenseAnimals=10*animalDensitySecond10Miles;
        let restOfMiles=miles-20;
        let restDensityAnimals=restOfMiles*animalDensityRestMiles;
        let count=firstDenseAnimals+secondDenseAnimals+restDensityAnimals;
        return count;

    }

}
console.log(animalCount(40));
