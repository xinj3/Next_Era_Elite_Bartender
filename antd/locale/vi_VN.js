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

// components/locale/vi_VN.tsx
var vi_VN_exports = {};
__export(vi_VN_exports, {
  default: () => vi_VN_default4
});
module.exports = __toCommonJS(vi_VN_exports);
var import_vi_VN4 = __toESM(require("rc-pagination/lib/locale/vi_VN"));

// components/date-picker/locale/vi_VN.tsx
var import_vi_VN = __toESM(require("rc-picker/lib/locale/vi_VN"));

// components/time-picker/locale/vi_VN.tsx
var locale = {
  placeholder: "Chọn thời gian"
};
var vi_VN_default = locale;

// components/date-picker/locale/vi_VN.tsx
var locale2 = {
  lang: __spreadValues({
    placeholder: "Chọn thời điểm",
    rangePlaceholder: ["Ngày bắt đầu", "Ngày kết thúc"]
  }, import_vi_VN.default),
  timePickerLocale: __spreadValues({}, vi_VN_default)
};
var vi_VN_default2 = locale2;

// components/calendar/locale/vi_VN.tsx
var vi_VN_default3 = vi_VN_default2;

// components/locale/vi_VN.tsx
var localeValues = {
  locale: "vi",
  Pagination: import_vi_VN4.default,
  DatePicker: vi_VN_default2,
  TimePicker: vi_VN_default,
  Calendar: vi_VN_default3,
  Table: {
    filterTitle: "Bộ ",
    filterConfirm: "OK",
    filterReset: "Tạo Lại",
    selectAll: "Chọn Tất Cả",
    selectInvert: "Chọn Ngược Lại"
  },
  Modal: {
    okText: "OK",
    cancelText: "Huỷ",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Huỷ"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Tìm ở đây",
    itemUnit: "mục",
    itemsUnit: "mục"
  },
  Upload: {
    uploading: "Đang tải lên...",
    removeFile: "Gỡ bỏ tập tin",
    uploadError: "Lỗi tải lên",
    previewFile: "Xem thử tập tin",
    downloadFile: "Tải tập tin"
  },
  Empty: {
    description: "Trống"
  }
};
var vi_VN_default4 = localeValues;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
