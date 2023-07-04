//Write a Class to Calculate the Uber Price.
class uberPrice {
    constructor(d, t){
        this.distance = d;
        this.time = t;
        this.base = 3;
        this.costPerkilo = 2;
        this.costPerMin = 0.5;
    }
    calculatePrice(){
        const distanceCost = this.distance * this.costPerkilo;
        const timeCost = this.time * this.costPerMin;
        const totalCost = this.base + distanceCost + timeCost;
        return totalCost.toFixed(2);
    }
}
var uberRide = new uberPrice(10, 25);
console.log(uberRide.calculatePrice());