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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/admin/delivery.js":
/*!****************************************!*\
  !*** ./resources/js/admin/delivery.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

new Vue({
  el: "#greatIT",
  data: {
    merchant_query: null,
    customer_query: null,
    formData: {},
    isLoading: false,
    showSuggestions: false,
    showCustomerSuggestions: false,
    errors: {},
    merchants: [],
    customers: [],
    merchantSearchURL: null,
    customerSearchURL: null,
    selectedMerchant: {},
    selectedBranch: {},
    selectedCustomer: {},
    selectedAddress: {},
    deliveryFormData: {
      merchant_branch_id: 0,
      customer_address_id: 0,
      is_pickup: 1,
      package_type_id: 0,
      branch_id: 0
    },
    requesting: null,
    modelFormAction: "create_merchant",
    merchantFormData: {
      merchant_type_id: 0
    },
    commission_hint: null,
    customerFormData: {},
    merchantTypes: [],
    commission: null,
    csrf: null
  },
  watch: {
    merchant_query: function merchant_query(v) {
      var self = this;
      this.searchFormQuery({
        url: this.merchantSearchURL,
        value: v,
        callback: function callback(d) {
          if (Array.isArray(d)) {
            self.merchants = d;
          } else {
            console.error(d);
          }
        }
      });
    },
    "deliveryFormData.merchant_branch_id": function deliveryFormDataMerchant_branch_id(id) {
      this.selectedBranch = id > 0 && this.selectedMerchant.branches ? this.selectedMerchant.branches.filter(function (v) {
        return v.id === id;
      }).pop() : {};
    },
    "deliveryFormData.customer_address_id": function deliveryFormDataCustomer_address_id(id) {
      this.selectedAddress = id > 0 && this.selectedCustomer.addresses ? this.selectedCustomer.addresses.filter(function (v) {
        return v.id === id;
      }).pop() : {};
    },
    customer_query: function customer_query(v) {
      var self = this;
      this.searchFormQuery({
        url: this.customerSearchURL,
        value: v,
        callback: function callback(d) {
          if (Array.isArray(d)) {
            self.customers = d;
          } else {
            console.error(d);
          }
        }
      });
    }
  },
  methods: {
    inputShouldBlur: function inputShouldBlur() {
      var _this = this;

      setTimeout(function () {
        return _this.showSuggestions = false;
      }, 300);
    },
    shouldShowCustomerSuggestions: function shouldShowCustomerSuggestions() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.showCustomerSuggestions = false;
      }, 300);
    },
    searchFormQuery: function searchFormQuery(_ref) {
      var url = _ref.url,
          value = _ref.value,
          callback = _ref.callback;
      $.ajax({
        url: url,
        data: {
          q: value
        },
        success: callback,
        error: function error(err) {
          console.error(err);
        }
      }).always(function () {
        req = null;
      });
    },
    selectTheMerchant: function selectTheMerchant(m) {
      this.selectedMerchant = m;
      this.deliveryFormData.merchant_id = m.id;
      if (this.selectedMerchant.branches.length === 1) this.deliveryFormData.merchant_branch_id = this.selectedMerchant.branches[0].id;
    },
    selectTheCustomer: function selectTheCustomer(c) {
      this.selectedCustomer = c;
      this.deliveryFormData.customer_id = c.id;
      if (c.addresses.length === 1) this.deliveryFormData.customer_address_id = c.addresses[0].id;
    },
    removeSelectedMerchant: function removeSelectedMerchant() {
      this.selectedMerchant = {};
      this.selectedBranch = {};
      this.deliveryFormData.merchant_branch_id = 0;
      this.deliveryFormData.merchant_id = null;
    },
    removeSelectedBranch: function removeSelectedBranch() {
      this.selectedBranch = {};
      this.deliveryFormData.merchant_branch_id = 0;
    },
    removeSelectedCustomer: function removeSelectedCustomer() {
      this.selectedCustomer = {};
      this.selectedAddress = {};
      this.deliveryFormData.customer_address_id = 0;
      this.deliveryFormData.customer_id = null;
    },
    removeSelectedAddress: function removeSelectedAddress() {
      this.selectedAddress = {};
      this.deliveryFormData.customer_address_id = 0;
    },
    goCreateMerchantNext: function goCreateMerchantNext() {
      if (this.createMerchantInputCheck()) {
        this.modelFormAction = 'create_merchant_and_branch';
      }
    },
    createMerchantInputCheck: function createMerchantInputCheck() {
      var err = {},
          obj = this.merchantFormData;
      err['merchant_name'] = obj['merchant_name'] ? null : "The merchant name is required.";
      err['merchant_password'] = obj['merchant_password'] ? obj['merchant_password'].length < 6 ? "The password should be min 6 character." : null : "The merchant password is required.";
      err['merchant_password_confirmation'] = obj['merchant_password_confirmation'] ? obj['merchant_password_confirmation'] !== obj['merchant_password'] ? "The confirmation password not matching." : null : "The password confirmation is required.";
      err['merchant_type_id'] = obj['merchant_type_id'] > 0 ? null : "The merchant type is required.";
      err['merchant_phone'] = obj['merchant_phone'] ? obj['merchant_phone'].length === 11 ? null : "Phone no should be 11 digit" : "The merchant phone is required.";
      this.errors = err;
      return Object.keys(err).filter(function (v) {
        return err[v] != null;
      }).length === 0;
    },
    createMerchant: function createMerchant(e) {
      var _this3 = this;

      if (this.modelFormAction !== 'create_merchant_and_branch') return this.createMerchantBranch(e);

      if (this.createMerchantBranchInputCheck()) {
        this.isLoading = true;

        var data = _objectSpread({
          _token: this.csrf
        }, this.merchantFormData),
            self = this;

        $.ajax({
          url: $(e.target).data('action'),
          data: data,
          type: "POST",
          success: function success(d) {
            if (_typeof(d) === 'object') {
              _this3.selectTheMerchant(d);
            }

            _this3.msg({
              title: "Success!",
              msg: "The Merchant was created.",
              type: "success"
            });

            $("#createMerchant").find("button.close").trigger('click');
            _this3.modelFormAction = 'create_merchant';
            _this3.merchantFormData = {
              merchant_type_id: 0
            };
          },
          error: function error(err) {
            console.error(err);
            self.handleError(err);
          }
        }).always(function () {
          _this3.isLoading = false;
        });
      }
    },
    createMerchantBranchInputCheck: function createMerchantBranchInputCheck() {
      var err = {},
          obj = this.merchantFormData;
      err['branch_name'] = obj['branch_name'] ? null : "The branch name is required.";
      err['branch_address'] = obj['branch_address'] ? null : "The merchant address is required.";
      this.errors = err;
      return Object.keys(err).filter(function (v) {
        return err[v] != null;
      }).length === 0;
    },
    createMerchantBranch: function createMerchantBranch(e) {
      var _this4 = this;

      if (this.createMerchantBranchInputCheck()) {
        this.isLoading = true;

        var data = _objectSpread(_objectSpread({
          _token: this.csrf
        }, this.merchantFormData), {}, {
          merchant_id: this.selectedMerchant.id
        }),
            self = this;

        $.ajax({
          url: $(e.target).prop('action'),
          data: data,
          type: "POST",
          success: function success(d) {
            if (_typeof(d) === 'object') {
              _this4.selectedMerchant.branches.push(d);

              _this4.deliveryFormData.merchant_branch_id = d.id;
            }

            _this4.msg({
              title: "Success!",
              msg: "The Branch was created.",
              type: "success"
            });

            $("#createMerchant").find("button.close").trigger('click');
            _this4.modelFormAction = 'create_merchant';
            _this4.merchantFormData = {
              merchant_type_id: 0
            };
          },
          error: function error(err) {
            console.error(err);
            self.handleError(err);
          }
        }).always(function () {
          _this4.isLoading = false;
        });
      }
    },
    createCustomer: function createCustomer(e) {
      var _this5 = this;

      if (this.createCustomerInputCheck()) {
        this.isLoading = true;

        var data = _objectSpread({
          _token: this.csrf
        }, this.customerFormData),
            self = this;

        $.ajax({
          url: $(e.target).prop('action'),
          data: data,
          type: "POST",
          success: function success(d) {
            if (_typeof(d) === 'object') {
              _this5.selectedCustomer = d;
              console.log(d);
            }

            _this5.msg({
              title: "Success!",
              msg: "The Customer was created.",
              type: "success"
            });

            $("#createMerchant").find("button.close").trigger('click');
            _this5.modelFormAction = 'create_merchant';
            _this5.customerFormData = {};
          },
          error: function error(err) {
            console.error(err);
            self.handleError(err);
          }
        }).always(function () {
          _this5.isLoading = false;
        });
      }
    },
    createCustomerInputCheck: function createCustomerInputCheck() {
      var err = {},
          obj = this.customerFormData;
      err['address_name'] = obj['address_name'] ? null : "The address code is required.";
      err['customer_name'] = obj['name'] ? null : "The customer name is required.";
      err['customer_phone'] = obj['phone'] ? obj['phone'].length === 11 ? null : "Phone no should be 11 digit" : "The customer phone is required.";
      err['customer_address'] = obj['address'] ? null : "The address is required.";
      this.errors = err;
      return Object.keys(err).filter(function (v) {
        return err[v] != null;
      }).length === 0;
    },
    createCustomerAddress: function createCustomerAddress(e) {
      var _this6 = this;

      if (this.createCustomerAddressInputCheck()) {
        this.isLoading = true;

        var data = _objectSpread(_objectSpread({
          _token: this.csrf
        }, this.customerFormData), {}, {
          customer_id: this.selectedCustomer.id
        }),
            self = this;

        $.ajax({
          url: $(e.target).prop('action'),
          data: data,
          type: "POST",
          success: function success(d) {
            if (_typeof(d) === 'object') {
              _this6.selectedCustomer.addresses.push(d);

              _this6.deliveryFormData.customer_address_id = d.id;
            }

            _this6.msg({
              title: "Success!",
              msg: "The Address was created.",
              type: "success"
            });

            $("#createMerchant").find("button.close").trigger('click');
            _this6.modelFormAction = 'create_merchant';
            _this6.customerFormData = {};
          },
          error: function error(err) {
            console.error(err);
            self.handleError(err);
          }
        }).always(function () {
          _this6.isLoading = false;
        });
      }
    },
    createCustomerAddressInputCheck: function createCustomerAddressInputCheck() {
      var err = {},
          obj = this.customerFormData;
      err['address_name'] = obj['address_name'] ? null : "The address code is required.";
      err['customer_address'] = obj['address'] ? null : "The address is required.";
      this.errors = err;
      return Object.keys(err).filter(function (v) {
        return err[v] != null;
      }).length === 0;
    },
    msg: function msg(_ref2) {
      var title = _ref2.title,
          msg = _ref2.msg,
          type = _ref2.type,
          icon = _ref2.icon;
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
      switch (this.modelFormAction) {
        case "create_customer":
          return "Create Customer";

        case "create_merchant_branch":
          return "Create Merchant Branch";

        case "create_merchant_and_branch":
          return "Create Merchant Branch";

        case "create_customer_address":
          return "Create Customer Address";

        default:
          return "Create Merchant";
      }
    },
    calcTotalPrice: function calcTotalPrice() {
      var _this7 = this;

      var product_cost = this.deliveryFormData.product_cost || 0,
          shipping_cost = this.deliveryFormData.shipping_fee || 0,
          commission = 0;

      if (this.selectedMerchant.type_id > 0) {
        var type = this.merchantTypes.filter(function (t) {
          return t.id === _this7.selectedMerchant.type_id;
        }).shift();
        commission = type.commission_type === 'fixed' ? Number(type.commission) : product_cost * type.commission / 100;
        this.commission_hint = type.commission_type === 'fixed' ? "(Fixed price)" : "(".concat(type.commission, "% of product cost)");
      } else {
        this.commission_hint = null;
      }

      this.commission = commission;
      return Number(product_cost) + Number(shipping_cost) + commission;
    }
  },
  created: function created() {
    var _this8 = this;

    this.merchantSearchURL = $('#search-merchants').data('search-url');
    this.customerSearchURL = $('#search-customers').data('search-url');
    this.csrf = $("meta[name=csrf-token]").prop('content');
    this.deliveryFormData.delivery_date = moment().format("MM/DD/YYYY");
    $.ajax({
      url: $("#getMerchantTypesUrl").val(),
      success: function success(mt) {
        if (Array.isArray(mt)) _this8.merchantTypes = mt;
      },
      error: function error(err) {
        console.error(err);
      }
    });
  }
});

/***/ }),

/***/ 2:
/*!**********************************************!*\
  !*** multi ./resources/js/admin/delivery.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Utpal\laragon\www\express\resources\js\admin\delivery.js */"./resources/js/admin/delivery.js");


/***/ })

/******/ });