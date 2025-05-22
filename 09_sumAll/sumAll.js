const sumAll = function(a, b) {
//check for positive integar
let sum = 0;
if (a <= 0 || b <= 0 || !Number.isInteger(a)
|| !Number.isInteger(b)) {
    //if no, break;
    return "ERROR";
 //if yes, continue   
    } else if (a < b) {
    //start the sum counter at 0;
    //loop from the lowest number until the highest
        for (let i = a; a <= b; a++) {
        //addition assignment the counter til the last
        sum += a; 
        }
//return the final sum counter         
    } else if (a > b) {
        for (let i = b; b <= a; b++) {
            sum += b;
        }
    }
return sum;
    
        /*what values are needed for calc? Makes the parenthesis
        the lowest value, the highest value */
};

// Do not edit below this line
module.exports = sumAll;
