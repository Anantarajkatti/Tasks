//Do the below programs in arrow functions.
//Print odd numbers in an array
var Array=[2,3,7,6,5,6,7,3,2]
// const odd= (Array)=> 
//             {
//                 var oddarr=[] ;
//                 for(i=0;i<Array.length;i++)
//                 {
//                     if(Array[i]%2!=0)
//                       oddarr=oddarr+' '+Array[i]
//                 }
//                 return oddarr

//             }
//     console.log('odd number in array  '+odd(Array))

//Sum of all numbers in an array
// const sum= (Array) =>
//             {
//                 var add=0 ;
//                 for(i=0;i<Array.length;i++)
//                 {
//                       add=add+Array[i]
//                 }
//                 return add

//             }
//     console.log('sum of array elements '+ sum(Array))

// Return all the prime numbers in an array
const prime= (Array)=>
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

// Return all the palindromes in an array

const Pali= (Array)=>
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

// Convert all the strings to title caps in a string array

var string= 'The Reserve Bank of India, abbreviated as RBI, is Indias central bank and regulatory body responsible for regulation of the Indian banking system. It is under the ownership of Ministry of Finance, Government of India. It is responsible for the control, issue and maintaining supply of the Indian rupee'
console.log(string.toUpperCase())
  

