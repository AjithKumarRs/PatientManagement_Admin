namespace PatientManagement.PatientManagement {
    export class ThemeHelper {
        public static getCurrentTheme() {
            var skinClass = Q.first(($('body').attr('class') || '').split(' '), x => Q.startsWith(x, 'skin-'));
            if (skinClass) {
                return skinClass.substr(5);
            }

            return 'blue';
        }
    }
}