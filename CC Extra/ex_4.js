console.log("Enter Number :``");
const input = require('fs').readFileSync(0, 'utf8').trim();
const n = Number(input);
if (n > 0)
{
    for (let i = 1; i < (n+1); i++) 
    {
        if (i%3 === 0 || i%5 ===0)
            {
                if (i%3 ===0 && i%5===0)
                {
                    console.log("FizzBuzz");
                }
                else if (i % 3 === 0)
                {
                    console.log("Fizz");
                   // break;
                }
            else if (i % 5 === 0) 
                {
                   console.log("Buzz")
                  // break;
                } 
                
            }  
        else
            { 
                console.log(i);  
            }
            
    }
    
}      
     else { console.log("Invalid Number pls Entried valid number"); }