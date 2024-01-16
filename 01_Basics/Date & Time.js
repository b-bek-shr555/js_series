let today_Date = new Date();
// console.log(today_Date);
// console.log(today_Date.toString());
// console.log(today_Date.toDateString());
// console.log(today_Date.toISOString());
// console.log(today_Date.toJSON());
// console.log(today_Date.toLocaleDateString());
// console.log(today_Date.toLocaleString());
// console.log(today_Date.toLocaleTimeString());
// console.log(today_Date.toTimeString());
// console.log(today_Date.toUTCString());


let my_Date = new Date(2023,0,23,5,3,45);
// console.log(my_Date.toLocaleString());
// console.log(my_Date.getTime());

let myTimeStamp = Date.now(); 
// console.log(myTimeStamp); // It gives Millisecond From 1st Jan 1970 AD //
// console.log(Math.floor(myTimeStamp/1000)); // Turns Millisecond To Seconds //

/*
* getFullYear() : Returns the year (four digits) of the specified date according to local
* getMonth(): Returns the month (from 0 to 11) in the specified date
* getDate(): Returns the day (from 1 to 31) in the specified date
* */            
// console.log("Current Year: " + today_Date.getFullYear()) ;
// console.log("Current Month: " + (today_Date.getMonth()+1));
// console.log("Current Day: " + today_Date.getDate());


