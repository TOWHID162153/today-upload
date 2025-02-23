// # Problem-05: Let’s Calculate Video watch Time
// # Problem 05 solve : 
function  calculateWatchTime( times ) {
    if (!Array.isArray(times) || !times.every(element => typeof element === 'number')){ 
        return "invalid";
    }
        let totalSeconds = 0;
        for ( let seconds of times ){
            totalSeconds += seconds; 
        }       
            const hours = 60 * 60 ;
            const totalHours= hours ;
            const hour = Math.floor( totalSeconds / totalHours );
            const remainHours = Math.floor( totalSeconds % totalHours );
            const minute = Math.floor( remainHours / 60 );
            const second = Math.floor( remainHours % 60 );
            const hourMinuteSecond = {
                hour : hour ,  
                minute : minute , 
                second : second,
        }
        return { hour : hour ,  
            minute : minute , 
            second : second,
         };
    }

// console.log(calculateWatchTime([100, 99, 119, 300]));
// console.log(calculateWatchTime([1000, 2000, 725]));
// console.log(calculateWatchTime([100, 3800]) );
// console.log(calculateWatchTime([]));
// console.log(calculateWatchTime([5600]));
// console.log(calculateWatchTime([100, 3800, "90" ]));

//  // ---- Done ---- //