// Calculate the letter grade based on a numeric score. A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.

const input = require('fs').readFileSync(0, 'utf8').trim();
const grad = Number(input);
let examscore = grad;
switch (true) 
{
    case (examscore >= 90):
        {
            console.log("A");
            break;
        }
    case (examscore >= 80 && examscore < 90):
        {
            console.log("B");
            break;
        }
    case (examscore >= 70 && examscore < 80):
        {
            console.log("C");
            break;
        }
    case (examscore >= 60 && examscore < 70):
        {
            console.log("D");
            break;
        }
    case (examscore <60):
        {
            console.log("F");
            break;
        }
}
