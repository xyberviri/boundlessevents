var calendartz = 'America/New_York'; 

var hash = window.location.hash.substr(1);
var result = hash.split('&').reduce(function (res, item) {
    var parts = item.split('=');
    res[parts[0]] = parts[1];
    return res;
}, {});
if (typeof result.timezone !== 'undefined') {
    calendartz = result.timezone;     
}


var googleDataUrl='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&color=%239E69AF&showPrint=0&ctz=';
function setCalendarUrl(t) {
  if (t === undefined) {
    t = calendartz;
  }
  var x,calendarString = '';
	
  for (x in calendars){
    calendarString += '&src=' + calendars[x] ;
  }
  var newurl= googleDataUrl + t +  calendarString
  $("#change").prop("data",newurl); 
}

function setTime(t){    
  if (t === undefined) {    
    t = calendartz;
  }
  
	var time = new Date();
	document.getElementById('clock').innerHTML = "Current " + t + " time: " + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: t });
}

$(document).ready(function() {
    $("a").click(function(){
    var me = $(this),
    data = me.data('key');    
    setCalendarUrl(data.timezone);    
    setTime(data.timezone);        
    });    
setCalendarUrl();
setTime();
});