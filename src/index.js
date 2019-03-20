// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let solution = {};
    if (currency == 0){
        return {};
    }
    if (currency < 10000){
        let s1 = (currency - (currency % 50)) / 50;
        if (s1 > 0){
            solution.H = s1;
        }
        let s2 = ((currency - solution.H * 50) - ((currency - solution.H * 50) % 25)) / 25;
        if(s2 > 0){
            solution.Q = s2;
        }
        let s3 = ((currency - solution.H * 50 - solution.Q * 25) - ((currency - solution.H * 50 - solution.Q * 25) % 10)) / 10;
        if(s3 > 0){
            solution.D = s3;
        }
        let s4 = ((currency - solution.H * 50 - solution.Q * 25 - solution.D * 10) - ((currency - solution.H * 50 - solution.Q * 25 - solution.D * 10) % 5)) / 5;
        if(s4 >0){
            solution.N = s4;
        }
        let s5 = currency % 5;
        if(s5 > 0){
            solution.P = s5;
        }
    //solution.H = (currency - (currency % 50)) / 50;
    //solution.Q = ((currency - solution.H * 50) - ((currency - solution.H * 50) % 25)) / 25; 
    //solution.D = ((currency - solution.H * 50 - solution.Q * 25) - ((currency - solution.H * 50 - solution.Q * 25) % 10)) / 10;
    //solution.N = Math.floor(((currency - solution.H * 50 - solution.Q * 25 - solution.D * 10) - ((currency - solution.H * 50 - solution.Q * 25 - solution.D * 10) % 5)) / 10);
    //solution.P = Math.floor(currency - solution.H * 50 - solution.Q * 25 - solution.D * 10 - solution.N * 5);

    //(1000 - 20 - ((1000 - 20) % 25))/25;
    // solution.D = (currency - solution.Q - solution.H - ((currency - solution.Q - solution.H) % 10))/10;
    // solution.N = (currency - solution.Q - solution.H - solution.D - ((currency - solution.D - solution.H  - solution.Q) % 5))/5;
    // solution.P = currency - solution.Q - solution.H -solution.D - solution.N;
        return solution;
    }
    else{
        return solution.error = "You are rich, my friend! We don't have so much coins for exchange";
    }



    // worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the strings 
           //H, Q, D, N and P.

    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
