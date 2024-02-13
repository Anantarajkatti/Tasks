class PersonDetails
{
    constructor(name,occupation,qualification,age,address)
    {
        this.name=name
        this.occupation=occupation
        this.qual=qualification
        this.age=age
        this.address=address
    }

}

let person1=new PersonDetails('anna','Engineer','Be',25,'Banglore')
let person2=new PersonDetails('jack','lecturer','BSC',27,'Mysore')

console.log(person1.age)