// # Problem-02 : Detect email  valid or not
// # Problem 02 solve : 
function  validEmail( email ) {

    if(typeof email === "string" && !/^[\.\-_+@]/.test(email) && !/\s/.test(email) && email.indexOf("@") !== -1 && email.indexOf("@") !== 0 && email.indexOf("@") !== email.length - 1 && email.endsWith(".com") ){
        return true;
    }
    else if(typeof email !== "string" ){
        return "Invalid";
    }
    else{
        return false;
    }
}

// validEmail("ferdous@gmail.com"); // true
// validEmail("1zihad@gmail.com"); // true
// validEmail("-king@yahoo.com"); // false
// validEmail(["jhankar@hero.com"]); // Invalid
// validEmail("Mewo@cat.com"); // true
// validEmail("programming-hero.com"); // false
// validEmail("chat420@gpt.net"); // false
// validEmail(true); // Invalid 
// validEmail("he ro@alom.com"); // false

// ---- Done ---- //