/* 
readFileSync(0, 'utf8') waits for standard input to finish. In a normal terminal, pressing Enter may not finish the input; the program can continue waiting until you send EOF.
- Windows: Press Ctrl + Z, then Enter.
- Mac/Linux: Press Ctrl + D.
If you want to enter a number and press Enter just once, use the readline
*/

console.log ("Enter Number");
const input = require('fs').readFileSync(0, 'utf8').trim();
const n = Number(input);

if (n > 0 && n < 11) 
    {
        for (let i = 1; i <= 10; i++) 
            {
                console.log(`${n} x ${i} = ${n * i}`);
            }
    }    
else 
{
    console.log("Please enter a number between 1 and 10.");
}
