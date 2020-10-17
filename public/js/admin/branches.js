/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/admin/branches.js":
/*!****************************************!*\
  !*** ./resources/js/admin/branches.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

new Vue({
  el: "#greatITPackages",
  data: {
    branches: [],
    formData: {},
    errors: {},
    isLoading: false,
    csrf: null
  },
  methods: {
    createBranch: function createBranch(e) {
      var _this = this;

      if (this.formDataCheck()) {
        this.isLoading = true;

        var data = _objectSpread({
          _token: this.csrf
        }, this.formData),
            self = this;

        $.ajax({
          url: $(e.target).prop('action'),
          data: data,
          type: "POST",
          success: function success(d) {
            if (_typeof(d) === 'object') {
              if (_this.formData.id) {
                _this.branches = _this.branches.filter(function (v) {
                  return v.id === _this.formData.id ? d : v;
                });
              } else {
                _this.branches.push(d);
              }
            }

            _this.msg({
              title: "Success!",
              msg: "The Branch was saved.",
              type: "success"
            });

            $("#createBranch").find("button.close").trigger('click');

            _this.resetForm();
          },
          error: function error(err) {
            console.error(err);
            self.handleError(err);
          }
        }).always(function () {
          _this.isLoading = false;
        });
      }
    },
    editBranch: function editBranch(b) {
      this.formData = b;
    },
    formDataCheck: function formDataCheck() {
      var err = {},
          obj = this.formData;
      err['branch_name'] = obj['branch_name'] ? null : "Name is required.";
      err['branch_address'] = obj['branch_address'] ? null : "Address is required.";
      this.errors = err;
      return Object.keys(err).filter(function (v) {
        return err[v] != null;
      }).length === 0;
    },
    resetForm: function resetForm() {
      this.formData = {};
    },
    msg: function msg(_ref) {
      var title = _ref.title,
          msg = _ref.msg,
          type = _ref.type,
          icon = _ref.icon;
      $.toast({
        heading: title ? title : "",
        text: "".concat(icon ? '<i class="jq-toast-icon ti-' + icon + '"></i>' : '', "<p>").concat(msg, "</p>"),
        position: 'bottom-right',
        loaderBg: '#f68daf',
        "class": "jq-toast-".concat(type ? type : 'success'),
        hideAfter: 3500,
        stack: 6,
        showHideTransition: 'fade'
      });
    },
    handleError: function handleError(err) {
      var self = this;

      try {
        if (err.responseJSON) {
          Object.values(err.responseJSON.errors).map(function (v) {
            if (Array.isArray(v)) {
              v.map(function (vl) {
                return self.msg({
                  title: "Caution!",
                  msg: vl,
                  type: "warning"
                });
              });
            } else {
              self.msg({
                title: "Caution!",
                msg: v,
                type: "warning"
              });
            }
          });
        } else {
          self.msg({
            title: "Error!",
            msg: "Something wrong happen! Please try again.",
            type: "danger"
          });
        }
      } catch (error) {
        self.msg({
          title: "Error!",
          msg: "Something wrong happen! Please try again.",
          type: "danger"
        });
      }
    }
  },
  computed: {
    modelFormTitle: function modelFormTitle() {
      return this.formData.id ? "Edit Branch" : "Create Branch";
    }
  },
  created: function created() {
    this.branches = branches.data;
    this.csrf = $("meta[name=csrf-token]").prop('content');
  }
});

/***/ }),

/***/ 4:
/*!**********************************************!*\
  !*** multi ./resources/js/admin/branches.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Utpal\laragon\www\express\resources\js\admin\branches.js */"./resources/js/admin/branches.js");


/***/ })

/******/ });