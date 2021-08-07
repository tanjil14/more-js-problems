/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/


function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood=3
    const perTableWood=10
    const perBedWood=50;
    const chairWoodQuantity=perChairWood*chairQuantity;
    const tableWoodQuantity=perTableWood*tableQuantity;
    const bedWoodQuantity=perBedWood*bedQuantity;

    const totalWood=chairWoodQuantity+tableWoodQuantity+bedWoodQuantity;
    return totalWood;

}
const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);