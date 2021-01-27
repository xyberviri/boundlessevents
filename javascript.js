var googleDataUrl='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&color=%239E69AF&showPrint=0&ctz=';
function setCalendarUrl(t) {
  if (t === undefined) {
    t = 'America%2FNew_York';
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
    t = 'UTC';
  }
	var time = new Date();
	document.getElementById('clock').innerHTML = "Current <b>"+t+"</b> time: " + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: t });
}
	
$(document).ready(function() {
    $("a").click(function(){
    var me = $(this),
    data = me.data('key');
    setCalendarUrl(data.timezone);
    setTime(data.code);
    });    
setCalendarUrl();
setTime();
});