function GetCalendarDateRange() {
    var view = $('#calendar').fullCalendar('getView');
    var dates = { start: view.start._d, end: view.end._d };
    return dates;
}

function RefreshFullCalendar(startDate, endDate, cabinetId) {
    //Check if calendar exist
    if ($("#calendar").length) {
        var dates = GetCalendarDateRange();

        var start = new Date(startDate);
        var end = new Date(endDate);
        if (!!$.cookie('CabinetPreference')) {
            // Check if visit is visible in current calendar
            var cookie = $.cookie("CabinetPreference");
            var cookieCabinet = cookie + "";

            if (dates.start <= start && dates.end >= end && cookieCabinet === cabinetId + "") {
                $("#calendar").fullCalendar('refetchEvents');
            }
        }
        
    }
}