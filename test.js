// # Problem 01 - Done
// # Problem 02 - Done
// # Problem 03 - Done
// # Problem 04 - Done
// # Problem 05 - 



function calculateWatchTime(watchTimes) {
  // Check if all elements in the array are numbers
  for (let time of watchTimes) {
      if(!Array.isArray(times) || times.some(time => typeof time !== "number")) {
          return "Invalid";(!Array.isArray(times) || times.some(time => typeof time !== "number")) 
      }
  }

  // Calculate total seconds
  let totalSeconds = watchTimes.reduce((sum, time) => sum + time, 0);

  // Convert total seconds to hours, minutes, and seconds
  let hours = Math.floor(totalSeconds / 3600);
  let remainingSeconds = totalSeconds % 3600;
  let minutes = Math.floor(remainingSeconds / 60);
  let seconds = remainingSeconds % 60;

  // Return the result as an object
  return {
      hour: hours,
      minute: minutes,
      second: seconds
  };
}

// Sample Inputs and Outputs
console.log(calculateWatchTime([100, 99, 119, 300])); // { hour: 0, minute: 10, second: 18 }
console.log(calculateWatchTime([1000, 2000, 725])); // { hour: 1, minute: 2, second: 5 }
console.log(calculateWatchTime([100, 3800])); // { hour: 1, minute: 5, second: 0 }
console.log(calculateWatchTime([])); // { hour: 0, minute: 0, second: 0 }
console.log(calculateWatchTime([5600])); // { hour: 1, minute: 33, second: 20 }
console.log(calculateWatchTime([100, 3800, "90"])); // "Invalid"