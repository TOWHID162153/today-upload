// # Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana ) 
// # Problem 03 solve : 
function  electionResult(votes) {
    
    let mango = "mango";
    let banana = "banana"; 
    let mangoParty = 0;
    let bananaParty = 0;
    for(let i= 0; 1 < votes.length; i++){
        if(votes[i] === mango){
            mangoParty++;
        } else if(votes[i] === banana){
            bananaParty++;
        }
    }

    if (mangoParty > bananaParty && typeof votes === "array") {
        return "Mango";
    }                
    else if(bananaParty > mangoParty && typeof votes === "array") {
        return "Banana";
    }      
    else if( typeof votes !== "array" && !typeof votes === "array" ) {
        return "Invalid";
    }  
    else {
        return "Draw";
    }

}

electionResult(["mango", "banana", "mango", "banana", "mango"]); // "Mango"
electionResult([]); // "Draw"
electionResult(["mango", "banana", "jaker party" , "no"]); // "Draw"
electionResult(["mango"]); // "Mango"
electionResult(["banana", "banana", "age e valo chilam" , "no"]); // "Banana"
electionResult({result: "mango , banana ,  mango"}); // "Invalid"
electionResult("mango , banana"); // "Invalid"
electionResult(["mango", "BananA", "na vote", "na vote"]); // "Banana"
