let calendarTable = document.getElementById('calendar');
let today = new Date();
let currentDay = today.getDate();
let currentDayOfWeek = today.getDay();
// 0 = Sun, 1 = Mon, 2 = Tues, 3 = Wed, 4 = Thurs, 5 = Fri, 6 = Sat //

//get all of the dates on the calendar to match with current date //
const days = calendarTable.getElementsByClassName('num');

//loop thru days//
for (let i = 0; i < days.length; i++) {
    let day = days[i];
    let dayNum = parseInt(day.textContent);
    
    //see if this day equals current day//
    if (dayNum === currentDay) {
        //change bg color//
        day.style.background = 'yellow';
    }
    
}


