var commmission= 1

class Uber
{
    constructor(nama,origin,destination,distance)
    {
        this.name= nama
        this.origin= origin
        this.destination= destination
        this.distance= distance
    }

    price()
    {
       var Price= 12*this.distance
       return Price
    }

 }




let Booking1= new Uber('Aisha','mejesticBustop','whitefeild',23)
console.log(Booking1.price())