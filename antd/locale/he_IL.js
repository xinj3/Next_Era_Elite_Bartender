var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// components/locale/he_IL.tsx
var he_IL_exports = {};
__export(he_IL_exports, {
  default: () => he_IL_default4
});
module.exports = __toCommonJS(he_IL_exports);
var import_he_IL4 = __toESM(require("rc-pagination/lib/locale/he_IL"));

// components/date-picker/locale/he_IL.tsx
var import_he_IL = __toESM(require("rc-picker/lib/locale/he_IL"));

// components/time-picker/locale/he_IL.tsx
var locale = {
  placeholder: "בחר שעה"
};
var he_IL_default = locale;

// components/date-picker/locale/he_IL.tsx
var locale2 = {
  lang: __spreadValues({
    placeholder: "בחר תאריך",
    rangePlaceholder: ["תאריך התחלה", "תאריך סיום"]
  }, import_he_IL.default),
  timePickerLocale: __spreadValues({}, he_IL_default)
};
var he_IL_default2 = locale2;

// components/calendar/locale/he_IL.tsx
var he_IL_default3 = he_IL_default2;

// components/locale/he_IL.tsx
var typeTemplate = "${label} הוא לא ${type} תקין";
var localeValues = {
  locale: "he",
  Pagination: import_he_IL4.default,
  DatePicker: he_IL_default2,
  TimePicker: he_IL_default,
  Calendar: he_IL_default3,
  global: {
    placeholder: "אנא בחר"
  },
  Table: {
    filterTitle: "תפריט סינון",
    filterConfirm: "אישור",
    filterReset: "איפוס",
    selectAll: "בחר הכל",
    selectInvert: "הפוך בחירה",
    selectionAll: "בחר את כל הנתונים",
    sortTitle: "מיון",
    expand: "הרחב שורה",
    collapse: "צמצם שורהw",
    triggerDesc: "לחץ על מיון לפי סדר יורד",
    triggerAsc: "לחץ על מיון לפי סדר עולה",
    cancelSort: "לחץ כדי לבטל את המיון"
  },
  Modal: {
    okText: "אישור",
    cancelText: "ביטול",
    justOkText: "אישור"
  },
  Popconfirm: {
    okText: "אישור",
    cancelText: "ביטול"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "חפש כאן",
    itemUnit: "פריט",
    itemsUnit: "פריטים"
  },
  Upload: {
    uploading: "מעלה...",
    removeFile: "הסר קובץ",
    uploadError: "שגיאת העלאה",
    previewFile: "הצג קובץ",
    downloadFile: "הורד קובץ"
  },
  Empty: {
    description: "אין מידע"
  },
  Icon: {
    icon: "סמל"
  },
  Text: {
    edit: "ערוך",
    copy: "העתק",
    copied: "הועתק",
    expand: "הרחב"
  },
  PageHeader: {
    back: "חזרה"
  },
  Form: {
    defaultValidateMessages: {
      default: "ערך השדה שגוי ${label}",
      required: "בבקשה הזן ${label}",
      enum: "${label} חייב להיות אחד מערכים אלו [${enum}]",
      whitespace: "${label} לא יכול להיות ריק",
      date: {
        format: "${label} תאריך לא תקין",
        parse: "${label} לא ניתן להמיר לתאריך",
        invalid: "${label} הוא לא תאריך תקין"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} חייב להיות ${len} תווים",
        min: "${label} חייב להיות ${min} תווים",
        max: "${label} מקסימום ${max} תווים",
        range: "${label} חייב להיות בין ${min}-${max} תווים"
      },
      number: {
        len: "${label} חייב להיות שווה ל ${len}",
        min: "${label} ערך מינימלי הוא ${min}",
        max: "${label} ערך מקסימלי הוא ${max}",
        range: "${label} חייב להיות בין ${min}-${max}"
      },
      array: {
        len: "חייב להיות ${len} ${label}",
        min: "מינימום ${min} ${label}",
        max: "מקסימום ${max} ${label}",
        range: "הסכום של ${label} חייב להיות בין ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} לא תואם לתבנית ${pattern}"
      }
    }
  }
};
var he_IL_default4 = localeValues;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
