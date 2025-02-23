// # Problem-05: Let’s Calculate Video watch Time
// # Problem 05 solve : 
function  calculateWatchTime( times ) {
                let sum = 0;
            for (let time of times ) {
                if(typeof times === "number" ){
                    sum += times; 
                } else {
                    return "invalid";
                }
            }    
    
    let hours = Math.floor(sum / 3600);
    let remainSeconds = sum % 3600;
    let minutes = Math.floor(remainSeconds / 60);
    let seconds = remainSeconds % 60; 
     return { hour: hours, minute: minutes, second: seconds };
}
calculateWatchTime([100, 99, 119, 300]) ; // { hour: 0, minute: 10, second: 18 }
calculateWatchTime([1000, 2000, 725]) ; // { hour: 1, minute: 2, second:5 }
calculateWatchTime([100, 3800]) ; // { hour: 1, minute: 5, second: 0 }
calculateWatchTime([]) ; // { hour: 0, minute: 0, second: 0 }
calculateWatchTime([5600]) ; // { hour: 1, minute: 33, second: 20 }
calculateWatchTime([100, 3800, "90" ]) ; // "Invalid"

