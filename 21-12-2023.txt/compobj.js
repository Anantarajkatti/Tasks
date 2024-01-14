var obj1={
    "name" : "person1",
    "age": 5
};

var obj2={
    "age": 5,
    "name": "person1"
};

if(obj1===obj2)
console.log("same")
else
console.log("not same")     // the o/p is shown not same

//

if(obj1.age===obj2.age)
console.log("same")
else
console.log("not same")    // the o?p is shown same

// one thing can be infered fron object comparision is that objects are order specific in keys
