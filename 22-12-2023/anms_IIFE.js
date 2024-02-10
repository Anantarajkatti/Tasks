//Do the below programs in anonymous function & IIFE
//var Array=[2,3,7,6,5,6,7,3,2]
//console.log(Array)

//Print odd numbers in an array

//anonymous
 /*const odd= function(Array)
            {
                var oddarr=[] ;
                for(i=0;i<Array.length;i++)
                {
                    if(Array[i]%2!=0)
                      oddarr=oddarr+' '+Array[i]
                }
                return oddarr

            }
    console.log('odd number in array  '+odd(Array))
  
    //IIFE

   var oddiife=  ((function(Array)
    {
        var oddarr=[] ;
        for(i=0;i<Array.length;i++)
        {
            if(Array[i]%2!=0)
            oddarr=oddarr+' '+Array[i]
        }
        return oddarr

    })(Array))
console.log('odd numbers in array IIFE  funt'+ oddiife)





//Sum of all numbers in an array

const sum= function(Array)
            {
                var add=0 ;
                for(i=0;i<Array.length;i++)
                {
                      add=add+Array[i]
                }
                return add

            }
    console.log('sum of array elements '+ sum(Array))
  
 // IIFE
 const sumiife= ((function(Array)
            {
                var add=0 ;
                for(i=0;i<Array.length;i++)
                {
                      add=add+Array[i]
                }
                return add

            })(Array))

    console.log('sum of array in iife funct'+' '+sumiife)

 

//Return all the prime numbers in an array
const prime= function(Array)
            {
                var primee=[] ;
                for(var i=0;i<Array.length;i++)
                {
                    if(Array[i]===2)
                    primee= primee+' '+ Array[i]

                    else
                    {
                        for(var j=2;j<=Array[i];j++)
                        {
                            if(Array[i]%j==0)
                            {
                            break
                            }
                              
                        }
                        if(j===Array[i])
                        {
                          primee= primee+' ' + Array[i]  
                        }
                    }
                    


                }
                console.log(primee[10])
                return primee
            }
                console.log('prime numbers in array are'+ prime(Array))

//Return all the palindromes in an array

const Pali= function(Array)
{
    var count=0
    var mid
    var j=Array.length-1
        if(Array.length%2==0)
          mid=Array.length/2
        else
        mid= (Array.length+1)/2
            for( var i=0;i<mid;i++)
            {
                if(j>=mid)
                {
                    if(Array[i]==Array[j])
                    {
                        count++
                        j--
                    }
                    else
                    break
                }
            }
            if(count==mid-1)
            console.log("palindrome")
            else
            console.log("not palindrome")
}
Pali(Array)



//Return median of two sorted arrays of the same size.

const array1=[1,3,49,57,6]
const array2=[7,11,32,41,56,2]
var array3= [...array1,...array2]
console.log('two array to find median')
console.log( array1,array2)
array3= array3.sort(function(a,b){return a-b})
console.log('sorted array')
console.log(array3)
var length= (array3.length)
if(length%2==0)
 console.log('the median is ' + ((array3[length/2]+array3[(length/2)+1])/2))
else
 console.log(' the median is ' + array3[(length+1)/2])






//Remove duplicates from an array
for(var i=0;i<Array.length;i++)
{
    for(var j=i+1;j<Array.length;j++)
    {
        if(Array[i]===Array[j])
        {
           delete Array[j];
            break
        }
    }
}
console.log(Array)*/


//Rotate an array by k times
var arrayRT=[1,2,3,4,5]

var k=2
console.log(`the array elements ${arrayRT} rotate ${k} times`  )
for(var rotate=1;rotate<=k;rotate++)
{
    var zeroElmt=arrayRT[0]
    for(var i=0;i<arrayRT.length;i++)
    {
        if(i===arrayRT.length-1)
        {
            arrayRT[i]= zeroElmt
        }
        else
        arrayRT[i]=arrayRT[i+1]
    }
}
console.log(arrayRT)
 
//Convert all the strings to title caps in a string array

var string= 'The Reserve Bank of India, abbreviated as RBI, is Indias central bank and regulatory body responsible for regulation of the Indian banking system. It is under the ownership of Ministry of Finance, Government of India. It is responsible for the control, issue and maintaining supply of the Indian rupee'
console.log(string.toUpperCase())
  


