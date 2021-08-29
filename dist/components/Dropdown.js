"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./styles/Select.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Select = _ref => {
  let {
    options,
    selectedOpt
  } = _ref;
  const [selected, setSelected] = (0, _react.useState)();
  const [open, setOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "select"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "select__wrap",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/_react.default.createElement("strong", null, (selected === null || selected === void 0 ? void 0 : selected.display) || "Select one")), open && /*#__PURE__*/_react.default.createElement("div", {
    className: "select__options"
  }, options.map(opt => /*#__PURE__*/_react.default.createElement("div", {
    key: opt.display,
    className: "single-option",
    onClick: () => {
      selectedOpt(opt); //sets selection in this component

      setSelected(opt); //set selection in parent component

      setOpen(false); //closes component
    }
  }, opt.display))));
};

exports.Select = Select;