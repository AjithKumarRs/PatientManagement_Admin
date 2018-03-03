namespace PatientManagement.PatientManagement {
    export class ReportsCommon {

        public static animateAndFillNumbers(elem: JQuery, num: Number, dur: Number) {
            elem.animate({
                Counter: num
            }, {
                    duration: dur,
                    easing: 'swing',
                    step: function (now) {
                        $(elem).text(Math.ceil(now));
                    }
                });
        }


        public static animateAndFillDecimals(elem: JQuery, num: Number, dur: Number) {

            elem.prop('Counter', 0).animate({
                Counter: num
            }, {
                duration: dur,
                easing: 'swing',
                step: function (now) {
                    $(elem).text(this.Counter.toFixed(2));
                }
            });
        }
    }
}