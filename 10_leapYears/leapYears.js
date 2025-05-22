const leapYears = function(year) {
    //Assesses if divisible by 4
     //IF yes;
    if (year % 4 === 0) {
        //If can be divided by 100
        if (year % 100 === 0) {
            //IF yes;
            //IF divisible by 400
            if (year % 400 === 0) {
                return true;
            } else {
                //returns falsSe
                return false;
            }

        } else {
            return true;
        }
    } else {
        //IF no;
        //returns false;
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
