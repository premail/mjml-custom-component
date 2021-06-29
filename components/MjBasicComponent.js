"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mjmlCore = require("mjml-core");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  Our component is a (useless) simple text tag, that adds colored stars around the text.
  It can take 3 attributes, to specify size and colors.
*/
var MjBasicComponent = /*#__PURE__*/function (_BodyComponent) {
  _inherits(MjBasicComponent, _BodyComponent);

  var _super = _createSuper(MjBasicComponent);

  function MjBasicComponent() {
    _classCallCheck(this, MjBasicComponent);

    return _super.apply(this, arguments);
  }

  _createClass(MjBasicComponent, [{
    key: "getStyles",
    value:
    /* 
      Tell the parser that our component won't contain other mjml tags.
      This means any html tag inside its content will be left as it is.
      Without this, it would be parsed as mjml content.
      Examples of endingTags are mj-text, mj-button, mj-raw, etc.
    */
    // Tells the validator which attributes are allowed for mj-layout
    // What the name suggests. Fallback value for this.getAttribute('attribute-name').
    // This functions allows to define styles that can be used when rendering (see render() below)
    function getStyles() {
      return {
        wrapperDiv: {
          color: this.getAttribute('stars-color'),
          // this.getAttribute(attrName) is the recommended way to access the attributes our component received in the mjml
          'font-size': this.getAttribute('font-size')
        },
        contentP: {
          'text-align': this.getAttribute('align'),
          'font-size': '20px'
        },
        contentSpan: {
          color: this.getAttribute('color')
        }
      };
    }
    /*
      Render is the only required function in a component.
      It must return an html string.
    */

  }, {
    key: "render",
    value: function render() {
      return "\n      <div\n        ".concat(this.htmlAttributes({
        // this.htmlAttributes() is the recommended way to pass attributes to html tags
        "class": this.getAttribute('css-class'),
        style: 'wrapperDiv' // This will add the 'wrapperDiv' attributes from getStyles() as inline style

      }), "\n      >\n      <p ").concat(this.htmlAttributes({
        style: 'contentP' // This will add the 'contentP' attributes from getStyles() as inline style

      }), ">\n        <span>\u2605</span>\n        <span\n          ").concat(this.htmlAttributes({
        style: 'contentSpan' // This will add the 'contentSpan' attributes from getStyles() as inline style

      }), "\n        >\n          ").concat(this.getContent(), "\n        </span>\n        <span>\u2605</span>\n      </p>\n      </div>\n\t\t");
    }
  }]);

  return MjBasicComponent;
}(_mjmlCore.BodyComponent);

exports["default"] = MjBasicComponent;

_defineProperty(MjBasicComponent, "endingTag", true);

_defineProperty(MjBasicComponent, "dependencies", {
  // Tell the validator which tags are allowed as our component's parent
  'mj-hero': ['mj-basic-component'],
  'mj-column': ['mj-basic-component'],
  // Tell the validator which tags are allowed as our component's children
  'mj-basic-component': []
});

_defineProperty(MjBasicComponent, "allowedAttributes", {
  'stars-color': 'color',
  'color': 'color',
  'font-size': 'unit(px)',
  'align': 'enum(left,right,center)'
});

_defineProperty(MjBasicComponent, "defaultAttributes", {
  'stars-color': 'yellow',
  color: 'black',
  'font-size': '12px',
  'align': 'center'
});