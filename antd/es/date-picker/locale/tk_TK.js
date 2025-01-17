import _extends from "@babel/runtime/helpers/esm/extends";
import CalendarLocale from "rc-picker/es/locale/tk_TK";
import TimePickerLocale from '../../time-picker/locale/tk_TK';
var locale = {
  lang: _extends({
    placeholder: 'Wagt saýlaň',
    rangePlaceholder: ['Başlanýan wagty', 'Gutarýan wagty'],
    yearPlaceholder: 'Ýyl saýlaň',
    quarterPlaceholder: 'Çärýek saýlaň',
    monthPlaceholder: 'Aý saýlaň',
    weekPlaceholder: 'Hepde saýlaň',
    rangeYearPlaceholder: ['Başlanýan ýyly', 'Gutarýan ýyly'],
    rangeQuarterPlaceholder: ['Başlanýan çärýegi', 'Gutarýan çärýegi'],
    rangeMonthPlaceholder: ['Başlanýan aýy', 'Gutarýan aýy'],
    rangeWeekPlaceholder: ['Başlanýan hepdesi', 'Gutarýan hepdesi']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
};
export default locale;