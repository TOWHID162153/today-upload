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

calculateWatchTime([100, 99, 119, 300]) ; // { hour: 0, minute: 10, second: 18 }
calculateWatchTime([1000, 2000, 725]) ; // { hour: 1, minute: 2, second:5 }
calculateWatchTime([100, 3800]) ; // { hour: 1, minute: 5, second: 0 }
calculateWatchTime([]) ; // { hour: 0, minute: 0, second: 0 }
calculateWatchTime([5600]) ; // { hour: 1, minute: 33, second: 20 }
calculateWatchTime([100, 3800, "90" ]) ; // "Invalid"

 // ---- Done ---- //