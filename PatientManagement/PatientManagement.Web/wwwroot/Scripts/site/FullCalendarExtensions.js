function GetCalendarDateRange() {
    var view = $('#calendar').fullCalendar('getView');
    var dates = { start: view.start._d, end: view.end._d };
    return dates;
}

function RefreshFullCalendar(startDate, endDate) {
    //Check if calendar exist
    if ($("#calendar").length) {
        var dates = GetCalendarDateRange();

        var start = new Date(startDate);
        var end = new Date(endDate);
        
        // Check if visit is visible in current calendar
        if (dates.start <= start && dates.end >= end) {
            $("#calendar").fullCalendar('refetchEvents');
        }
    }
}