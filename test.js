function  isBestFriend( f1 , f2 ) {
    if(typeof (f1 && f2) ==="object" && f1.bestFriend === f2.roll && f2.bestFriend === f1.roll){
        if((f1.name && typeof f1.name === "string" && f1.roll && typeof f1.roll === "number" && f1.bestFriend && typeof f1.bestFriend === "number") && (f2.name && typeof f2.name === "string" && f2.roll && typeof f2.roll === "number" && f2.bestFriend && typeof f2.bestFriend === "number")){
            return true;
        } 
        return false;
    }
    else if( typeof f1 !== "object" || typeof f2 !== "object" || (typeof (f1 && f2) !=="object") && !typeof (f1 && f2) ==="object"){
        return "Invalid";
    }
    else{
        return false;
    }
}

// isBestFriend({ name: "hashem", roll: 1, bestFriend: 2 }, { name: "kashem", roll: 2, bestFriend: 1 }); // true
// isBestFriend({ name: "hashem", roll: 21, bestFriend: 1}, { name: "kashem", roll: 1, bestFriend: 2 }); //false
// isBestFriend({ name:"kashem", roll: 2, bestFriend: 11}, "Kashem er Kono Bondhu Nai"); // "Invalid"
// isBestFriend("hashem", { name:"kashem", roll: 2, bestFriend: 11}); // "Invalid"
// isBestFriend({ name: "hashem", roll: 1 , bestFriend: 1}, { name: "kashem" , roll: 1, bestFriend: 1 }); // true
// isBestFriend({ name: "hashem", roll: 1 , bestFriend: 1}, { name: "kashem" , roll: 1 }); // 