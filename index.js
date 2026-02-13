function calculateAward(points){
    if (points > 99){
        return "First Place";
    } 
    if (points > 49 && points < 100){
        return "Second Place";
    } else {
        return "Participation Award";
    }
}


//should create a function named calculateAward that 
// takes one parameter points and returns the string "First Place" 
// when points are over 99

//should return the string "Second Place" when points are 
// over 49 and under 100

//should return the string "Participation Award" for everything else

