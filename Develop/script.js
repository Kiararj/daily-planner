// Date function that pulls the date with "st, nd, th" in number portion

function myDate() {
  var a = new Date();
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  var r = weekdays[a.getDay()];

  document.getElementById("currentDay").innerHTML = r;

  var b = new Date();
  var months = new Array(12);
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";
  var s = months[b.getMonth()];

  document.getElementById("currentMonth").innerHTML = s;

  var c = new Date();
  var days = new Array(31);
  days[1] = "1st";
  days[2] = "2nd";
  days[3] = "3rd";
  days[4] = "4th";
  days[5] = "5th";
  days[6] = "6th";
  days[7] = "7th";
  days[8] = "8th";
  days[9] = "9th";
  days[10] = "10th";
  days[11] = "11th";
  days[12] = "12th";
  days[13] = "13th";
  days[14] = "14th";
  days[15] = "15th";
  days[16] = "16th";
  days[17] = "17th";
  days[18] = "18th";
  days[19] = "19th";
  days[20] = "20th";
  days[21] = "21st";
  days[22] = "22nd";
  days[23] = "23rd";
  days[24] = "24th";
  days[25] = "25th";
  days[26] = "26th";
  days[27] = "27th";
  days[28] = "28th";
  days[29] = "29th";
  days[30] = "30th";
  days[31] = "31st";
  var t = days[c.getDate()];

  document.getElementById("currentDate").innerHTML = t;
}

myDate();

// Save button putting text in textarea in local storage
$(function () {
$(".saveBtn").on("click", function() {
  var description = $(this).siblings(".description").val()
  var time = $(this).parent().attr("id")
localStorage.setItem(time, description);
});
for(var i = 9; i <= 17; i++){
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}

// Function that updates time blocks based on past, present, and future times
function updateHourColor (){
var now = dayjs().hour()
$(".time-block").each(function(){
  var htmlHour = $(this).attr("id").split("-")[1]
  console.log(htmlHour, now);
  if(htmlHour < now){
$(this).addClass("past");
  } else if(htmlHour === now){
    $(this).addClass("present")
  } else{
    $(this).addClass("future")
  }
})
}
updateHourColor();
setInterval(updateHourColor, 15000);
});
