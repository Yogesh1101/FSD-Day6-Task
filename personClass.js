//Write Person Class to hold all the details.
class person{
    constructor(n, dob, phno, e, add){
        this.name = n;
        this.DoB = Number(dob);
        this.phNo = phno;
        this.email = e;
        this.address = add;
    }
    getName(){
        return this.name;
    }
    getDOB(){
        return this.DoB;
    }
    getPhNo(){
        return this.phNo;
    }
    getEmail(){
        return this.email;
    }
    getAddress(){
        return this.address;
    }
    setName(n){
        this.name = n;
    }
    setDOB(dob){
        this.DoB = dob;
    }
    setPhNo(phno){
        this.phNo = phno;
    }
    setEmail(e){
        this.email = e;
    }
    setAddress(add){
        this.address = add;
    }
    getAge(){
        return 2023 - this.DoB;
    }
}
const person1 = new person('Yogesh', 2002, 9468512648, 'jryogesh1121@gmail.com', 'Madurai');
console.log(person1);
console.log(person1.getAge());
console.log(person1.getName());
person1.setPhNo(8774175765);
console.log(person1.getPhNo());