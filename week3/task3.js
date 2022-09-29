const day1 = new Date(2022, 11, 24, 0, 33, 30, 0);
console.log('the day1 is');
console.log(day1.toDateString());
console.log('the hour of day1 is');
console.log(day1.getUTCHours());

const day2 = new Date(2019, 11, 24, 10);
console.log('the day2 is');
console.log(day2.toDateString());

const day3 = new Date("October 13, 2014 11:13:00");
console.log('the day3 is');
console.log(day3.toDateString());
console.log('the day3 year is');
console.log(day3.getFullYear());
day3.setFullYear(2020);
console.log('now the day3 year is');
console.log(day3.getFullYear());