// # Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana ) 
// # Problem 03 solve : 
function  electionResult(votes) {
    let mangoParty = 0;
    let bananaParty = 0;
    for(const vote of votes) {
        if(vote === "mango") {
            mangoParty++;
            } 
        else if(vote === "banana") {
            bananaParty++;
            } 
        }
    if (mangoParty > bananaParty && typeof votes === "array") {
        return "Mango";
    }                
    else if(bananaParty > mangoParty && typeof votes === "array") {
        return "Banana";
    }      
    else if( typeof votes !== "array" || !Array.isArray(votes)) {
        return "Invalid";
    }  
    else {
        return "Draw";
    }

}