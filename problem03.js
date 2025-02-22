// # Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana ) 
// # Problem 03 solve : 
function electionResult(votes) {
    
    let mangoParty = 0;
    let bananaParty = 0;
    for(let i= 0; i < votes.length; i++){
        if( typeof votes[i] === "string" && votes[i] === "mango" ){
            mangoParty++;

        }
        else if( typeof votes[i] === "string" && votes[i] === "banana" ){
            bananaParty++;
        }
    }

    if(!Array.isArray(votes)){
        return "Invalid";
    } else if(mangoParty > bananaParty){
        return "Mango" ;
    } else if(bananaParty > mangoParty){
        return "Bnanan";
    } else{
        return "Draw" ;
    }
}

electionResult(["mango", "banana", "mango", "banana", "mango"]); // "Mango"
electionResult([]); // "Draw"
electionResult(["mango", "banana", "jaker party" , "no"]); // "Draw"
electionResult(["mango"]); // "Mango"
electionResult(["banana", "banana", "age e valo chilam" , "no"]); // // "Banana"
electionResult({result: "mango , banana ,  mango"}); // "Invalid"
electionResult("mango , banana");// "Invalid"
electionResult(["mango", "BananA", "na vote", "na vote"]); // "Mango"