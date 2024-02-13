class circle{
    constructor(radius,color)
    {
        this.radius=radius
        this.color=color
    }
    get radiaa(){
        return this.radius
    }

    set radiaa(radi){
    this.radius=radi
    }
    get colorr(){
        return this.color
    }

    set colorr(colo){
    this.color=colo
    }

    toString(){
        return ( 'radius is ' + this.radius +', colour is '+ this.color )
    }

    get Area()
    {
        let Area
        Area= (22/7)*this.radius *this.radius
        return Area
    }

    get Circum()
    {
        let circum
        circum= 2 *(22/7) * this.radius
        return circum
    }
}

 const circle1= new circle(5,'red')
 console.log(circle1.radius)
 console.log(circle1.color)
 circle.radiaa= 6;
 console.log(circle.radiaa)
 circle.colorr='blue'
 console.log(circle.colorr)
 console.log(circle1.toString())
 console.log(circle1.Area)
 console.log(circle1.Circum)
 
