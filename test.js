// # Problem 01 - Done
// # Problem 02 - Done
// # Problem 03 - 
// # Problem 04 - Done
// # Problem 05 - 

function electionResult(votes) {
    
    // First mangoParty & bananaParty votes counts
    let mangoParty = 0;
    let bananaParty = 0;
    for(let i= 0; i < votes.length; i++){
        if( typeof votes[i] === "string" && votes[i] === "mango" ){
            mangoParty++;
        // console.log("Mango Count :" ,mangoParty);
        }
        else if( typeof votes[i] === "string" && votes[i] === "banana" ){
            bananaParty++;
            // console.log("Banana Count :" ,bananaParty);  
        }
    }
    // Second who is the Winner
    if(!Array.isArray(votes)){
        return "Invalid";
    }
    else if(mangoParty > bananaParty){
        return "Mango" ;
    }
    else if(bananaParty > mangoParty){
        return "Bnanan";
    }
    else{
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

