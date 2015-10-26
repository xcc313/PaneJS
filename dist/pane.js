(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pane"] = factory();
	else
		root["pane"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var pane = {
	    utils: __webpack_require__(1),
	    Graph: __webpack_require__(9),
	    Model: __webpack_require__(12),
	    View: __webpack_require__(20)
	};
	
	module.exports = pane;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	var _utilsLang = __webpack_require__(2);
	
	_defaults(exports, _interopExportWildcard(_utilsLang, _defaults));
	
	var _utilsString = __webpack_require__(3);
	
	_defaults(exports, _interopExportWildcard(_utilsString, _defaults));
	
	var _utilsNumber = __webpack_require__(4);
	
	_defaults(exports, _interopExportWildcard(_utilsNumber, _defaults));
	
	var _utilsObject = __webpack_require__(5);
	
	_defaults(exports, _interopExportWildcard(_utilsObject, _defaults));
	
	var _utilsArray = __webpack_require__(6);
	
	_defaults(exports, _interopExportWildcard(_utilsArray, _defaults));
	
	var _utilsFunction = __webpack_require__(7);
	
	_defaults(exports, _interopExportWildcard(_utilsFunction, _defaults));
	
	var _utilsBow = __webpack_require__(8);
	
	_defaults(exports, _interopExportWildcard(_utilsBow, _defaults));

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var toString = Object.prototype.toString;
	
	function isNull(obj) {
	    return obj === null;
	}
	
	function isUndefined(obj) {
	    return typeof obj === 'undefined';
	}
	
	function isNullOrUndefined(obj) {
	    return isUndefined(obj) || isNull(obj);
	}
	
	function isType(obj, type) {
	    return toString.call(obj) === '[object ' + type + ']';
	}
	
	function isObject(obj) {
	    if (!obj) {
	        return false;
	    }
	
	    var type = typeof obj;
	
	    return type === 'function' || type === 'object';
	}
	
	function isFunction(obj) {
	    return isType(obj, 'Function');
	}
	
	function isWindow(obj) {
	    return obj && obj === obj.window;
	}
	
	var isArray = Array.isArray || function (obj) {
	    return isType(obj, 'Array');
	};
	
	function isArrayLike(obj) {
	    if (isArray(obj)) {
	        return true;
	    }
	
	    if (isFunction(obj) || isWindow(obj)) {
	        return false;
	    }
	
	    var length = !!obj && 'length' in obj && obj.length;
	
	    return length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj;
	}
	
	function isNumeric(obj) {
	    return !isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
	}
	
	exports.isNull = isNull;
	exports.isUndefined = isUndefined;
	exports.isNullOrUndefined = isNullOrUndefined;
	exports.isType = isType;
	exports.isObject = isObject;
	exports.isFunction = isFunction;
	exports.isWindow = isWindow;
	exports.isArray = isArray;
	exports.isArrayLike = isArrayLike;
	exports.isNumeric = isNumeric;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function toString(str) {
	    return '' + str;
	}
	
	function lcFirst(str) {
	    str = str + '';
	    return str.charAt(0).toLowerCase() + str.substr(1);
	}
	
	function ucFirst(str) {
	    str = str + '';
	    return str.charAt(0).toUpperCase() + str.substr(1);
	}
	
	function ltrim(str, chars) {
	    chars = chars || '\\s';
	
	    return str.replace(new RegExp('^[' + chars + ']+', 'g'), '');
	}
	
	function rtrim(str, chars) {
	    chars = chars || '\\s';
	
	    return str.replace(new RegExp('[' + chars + ']+$', 'g'), '');
	}
	
	function trim(str, chars) {
	    return ltrim(rtrim(str, chars), chars);
	}
	
	exports.toString = toString;
	exports.lcFirst = lcFirst;
	exports.ucFirst = ucFirst;
	exports.ltrim = ltrim;
	exports.rtrim = rtrim;
	exports.trim = trim;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function toFixed(value, precision) {
	    var power = Math.pow(10, precision);
	    return (Math.round(value * power) / power).toFixed(precision);
	}
	
	function mod(n, m) {
	    return (n % m + m) % m;
	}
	
	exports.toFixed = toFixed;
	exports.mod = mod;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _lang = __webpack_require__(2);
	
	var _array = __webpack_require__(6);
	
	var hasOwn = Object.prototype.hasOwnProperty;
	var slice = Array.prototype.slice;
	
	var hasKey = exports.hasKey = function hasKey(obj, key) {
	    return obj !== null && hasOwn.call(obj, key);
	};
	
	var keys = exports.keys = Object.keys || function (obj) {
	    // ie < 9 不考虑
	
	    var keys = [];
	
	    if (isObject(obj)) {
	        for (var key in obj) {
	            if (hasKey(obj, key)) {
	                keys.push(key);
	            }
	        }
	    }
	
	    return keys;
	};
	
	function forIn(list, iterator, context, deep) {
	    for (var key in list) {
	        if (deep || hasKey(list, key)) {
	            iterator.call(context, list[key], key, list);
	        }
	    }
	}
	
	function clone(obj, transients, shallow) {
	    shallow = !!shallow;
	
	    var cloned = null;
	
	    if (obj && (0, _lang.isFunction)(obj.constructor)) {
	        cloned = new obj.constructor();
	
	        for (var key in obj) {
	            if (key !== mxObjectIdentity.FIELD_NAME && (!transients || (0, _array.indexOf)(transients, key) < 0)) {
	                if (!shallow && typeof obj[key] === 'object') {
	                    cloned[key] = clone(obj[key]);
	                } else {
	                    cloned[key] = obj[key];
	                }
	            }
	        }
	    }
	
	    return cloned;
	}
	
	function extend(dist) {
	
	    if (!dist) {
	        dist = {};
	    }
	
	    var sources = slice.call(arguments, 1);
	
	    for (var i = 0, length = sources.length; i < length; i++) {
	        var source = sources[i];
	
	        forIn(source, function () {
	            dist[key] = source[key];
	        });
	    }
	
	    return dist;
	}
	
	function getValue(obj, key, defaultValue) {
	    var value = obj[key];
	
	    if ((0, _lang.isUndefined)(value)) {
	        value = defaultValue;
	    }
	
	    return value;
	}
	
	function getNumber(obj, key, defaultValue) {
	    var value = obj ? obj[key] : null;
	
	    if ((0, _lang.isUndefined)(value)) {
	        value = defaultValue || 0;
	    }
	
	    return Number(value);
	}
	
	exports.hasKey = hasKey;
	exports.keys = keys;
	exports.forIn = forIn;
	exports.clone = clone;
	exports.extend = extend;
	exports.getValue = getValue;
	exports.getNumber = getNumber;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _lang = __webpack_require__(2);
	
	var arrProto = Array.prototype;
	var slice = arrProto.slice;
	
	var indexOf = arrProto.indexOf ? function (arr, item) {
	    return arr.indexOf(item);
	} : function (arr, item) {
	    for (var i = 0, len = arr.length; i < len; i++) {
	        if (arr[i] === item) {
	            return i;
	        }
	    }
	    return -1;
	};
	
	function each(list, iteratee, context) {
	    for (var i = 0, l = list.length; i < l; i++) {
	        iteratee.call(context, list[i], i, list);
	    }
	
	    return list;
	}
	
	function toArray(obj) {
	    return (0, _lang.isArrayLike)(obj) ? slice.call(obj) : [];
	}
	
	exports.indexOf = indexOf;
	exports.each = each;
	exports.toArray = toArray;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function getFunctionName(fn) {
	    var str = fn && fn.name || '';
	
	    if (!str && fn) {
	        var tmp = fn.toString();
	        var idx1 = 9;
	
	        while (tmp.charAt(idx1) === ' ') {
	            idx1++;
	        }
	
	        var idx2 = tmp.indexOf('(', idx1);
	        str = tmp.substring(idx1, idx2);
	    }
	
	    return str;
	}
	
	exports.getFunctionName = getFunctionName;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _lang = __webpack_require__(2);
	
	function isNode(node, nodeName, attributeName, attributeValue) {
	    var ret = node && !isNaN(node.nodeType);
	
	    if (ret) {
	        ret = (0, _lang.isNullOrUndefined)(nodeName) || node.nodeName.toLowerCase() === nodeName.toLowerCase();
	    }
	
	    if (ret) {
	        ret = (0, _lang.isNullOrUndefined)(attributeName) || node.getAttribute(attributeName) === attributeValue;
	    }
	
	    return ret;
	}
	
	function getCurrentStyle(node) {
	    return node.currentStyle || window.getComputedStyle(node, null);
	}
	
	exports.isNode = isNode;
	exports.getCurrentStyle = getCurrentStyle;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libBase = __webpack_require__(10);
	
	var _libBase2 = _interopRequireDefault(_libBase);
	
	var _Model = __webpack_require__(12);
	
	var _Model2 = _interopRequireDefault(_Model);
	
	var _View = __webpack_require__(20);
	
	var _View2 = _interopRequireDefault(_View);
	
	exports['default'] = _libBase2['default'].extend({
	    constructor: function Graph(container, model, stylesheet) {
	
	        var that = this;
	
	        that.model = model || new _Model2['default']();
	        that.view = new _View2['default'](that);
	        //that.stylesheet = stylesheet || new Stylesheet();
	
	        if (container) {
	            that.init(container);
	        }
	
	        that.view.revalidate();
	    },
	
	    init: function init(container) {
	
	        var that = this;
	
	        that.container = container;
	        that.view.init();
	    },
	
	    insertNode: function insertNode() {},
	
	    createNode: function createNode() {},
	
	    insertLink: function insertLink() {},
	
	    createLink: function createLink() {}
	});
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonUtils = __webpack_require__(1);
	
	var _commonClass = __webpack_require__(11);
	
	var _commonClass2 = _interopRequireDefault(_commonClass);
	
	var Base = _commonClass2['default'].create({
	    constructor: function Base() {},
	
	    toString: function toString() {
	        return '[Class ' + (0, _commonUtils.getFunctionName)(this.constructor) + ']';
	    },
	
	    getValue: function getValue() {
	        return this.toString();
	    },
	
	    destroy: function destroy() {
	
	        var that = this;
	
	        (0, _commonUtils.forIn)(that, function (val, key) {
	            delete that[key];
	        });
	
	        that.destroyed = true;
	    }
	});
	
	exports['default'] = Base;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// ref: https://github.com/aralejs/class
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utils = __webpack_require__(1);
	
	function Class(fn) {
	    if (!(this instanceof Class) && (0, _utils.isFunction)(fn)) {
	        return classify(fn);
	    }
	}
	
	Class.create = function (parent, properties) {
	    if (!(0, _utils.isFunction)(parent)) {
	        properties = parent;
	        parent = null;
	    }
	
	    properties || (properties = {});
	    parent || (parent = properties.Extends || Class);
	    properties.Extends = parent;
	
	    // The created class constructor.
	    //function SubClass() {
	    //    // Call the parent constructor.
	    //    parent.apply(this, arguments);
	    //
	    //    // Only call initialize in self constructor.
	    //    if (this.constructor === SubClass && this.initialize) {
	    //        this.initialize.apply(this, arguments);
	    //    }
	    //}
	
	    var SubClass = properties.constructor;
	    // unspecified constructor
	    if (SubClass === Object.prototype.constructor) {
	        SubClass = function Class() {};
	    }
	
	    // Inherit class (static) properties from parent.
	    if (parent !== Class) {
	        mix(SubClass, parent, parent.StaticsWhiteList);
	    }
	
	    // Add instance properties to the subclass.
	    implement.call(SubClass, properties);
	
	    // Make subclass extendable.
	    return classify(SubClass);
	};
	
	// Create a sub Class based on `Class`.
	Class.extend = function (properties) {
	    properties || (properties = {});
	    properties.Extends = this;
	
	    return Class.create(properties);
	};
	
	// define special properties.
	Class.Mutators = {
	
	    'Extends': function Extends(parent) {
	        var existed = this.prototype;
	        var parentProto = parent.prototype;
	        var proto = createProto(parentProto);
	
	        // Keep existed properties.
	        mix(proto, existed);
	
	        // Enforce the constructor to be what we expect.
	        proto.constructor = this;
	
	        // Set the prototype chain to inherit from `parent`.
	        this.prototype = proto;
	
	        // Set a convenience property in case the parent's prototype is
	        // needed later.
	        this.superclass = parentProto;
	    },
	
	    'Implements': function Implements(items) {
	
	        if (!(0, _utils.isArray)(items)) {
	            items = [items];
	        }
	
	        var proto = this.prototype;
	        var item;
	
	        while (item = items.shift()) {
	            mix(proto, item.prototype || item);
	        }
	    },
	
	    'Statics': function Statics(staticProperties) {
	        mix(this, staticProperties);
	    }
	};
	
	function classify(cls) {
	    cls.extend = Class.extend;
	    cls.implement = implement;
	    return cls;
	}
	
	function implement(properties) {
	
	    var that = this;
	    var mutators = Class.Mutators;
	
	    (0, _utils.each)(properties, function (value, key) {
	        if ((0, _utils.hasKey)(mutators, key)) {
	            mutators[key].call(that, value);
	        } else {
	            that.prototype[key] = value;
	        }
	    });
	}
	
	// Helpers
	// -------
	
	var createProto = Object.__proto__ ? function (proto) {
	    return { __proto__: proto };
	} : function (proto) {
	    function Ctor() {}
	
	    Ctor.prototype = proto;
	    return new Ctor();
	};
	
	function mix(receiver, supplier, whiteList) {
	
	    (0, _utils.each)(supplier, function (value, key) {
	        if (whiteList && indexOf(whiteList, key) === -1) {
	            return;
	        }
	
	        receiver[key] = value;
	    });
	}
	
	exports['default'] = Class;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(10), __webpack_require__(13), __webpack_require__(17), __webpack_require__(18), __webpack_require__(15), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Base, Root, Layer, Group, Node, Link) {
	    'use strict';
	
	    return Base.extend({
	        constructor: function Model(root) {
	
	            var that = this;
	
	            if (root) {
	                that.setRoot(root);
	            } else {
	                that.clear();
	            }
	        },
	
	        clear: function clear() {
	            var that = this;
	            that.setRoot(that.createRoot());
	            return that;
	        },
	
	        createRoot: function createRoot() {
	            var root = new Root();
	
	            root.insert(new Layer());
	
	            return root;
	        },
	
	        getRoot: function getRoot() {},
	
	        setRoot: function setRoot(root) {
	            this.execute(new RootChange(this, root));
	
	            return root;
	        },
	
	        changeRoot: function changeRoot(root) {}
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Vessel) {
	    'use strict';
	
	    return Vessel.extend({
	        constructor: function Root(value) {
	
	            var that = this;
	
	            Root['super'].constructor.call(that, value);
	
	            that.isRoot = true;
	            that.connectAble = false;
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (utils, Node) {
	    'use strict';
	
	    var _each = utils.each;
	    var _indexOf = utils.indexOf;
	    var isNullOrUndefined = utils.isNullOrUndefined;
	
	    return Node.extend({
	        constructor: function Vessel(value, geometry, style) {
	
	            var that = this;
	
	            Vessel['super'].constructor.call(that, value, geometry, style);
	
	            that.parent = null;
	            that.children = [];
	        },
	
	        each: function each(iterator, context) {
	
	            var that = this;
	
	            _each(that.children, iterator, context);
	
	            return that;
	        },
	
	        indexOf: function indexOf(child) {
	            return _indexOf(this.children, child);
	        },
	
	        childAt: function childAt(index) {
	            return this.children[index];
	        },
	
	        insert: function insert(child, index) {
	            var that = this;
	            var children = that.children;
	
	            if (child && that.canInsert(child, index)) {
	
	                if (isNullOrUndefined(index)) {
	                    index = children.length;
	
	                    if (child.parent === that) {
	                        index--;
	                    }
	                }
	
	                // 从旧的 parent 移除
	                child.removeFromParent();
	                // 设置新的 parent
	                child.parent = that;
	
	                children.splice(index, 0, child);
	            }
	
	            return that;
	        },
	
	        remove: function remove(child) {
	            return this.removeAt(this.indexOf(child));
	        },
	
	        removeAt: function removeAt(index) {
	            var children = this.children;
	            var child = index >= 0 ? children[index] : null;
	
	            if (child) {
	                children.splice(index, 1);
	                child.parent = null;
	            }
	
	            return child;
	        },
	
	        canInsert: function canInsert() {
	            return true;
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonUtils = __webpack_require__(1);
	
	var _Cell = __webpack_require__(16);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	exports['default'] = _Cell2['default'].extend({
	    constructor: function Node(value, geometry, style) {
	
	        var that = this;
	
	        Node['super'].constructor.call(that, value, geometry, style);
	
	        that.isNode = true;
	        that.connectAble = true;
	
	        // lazy
	        // that.parent = null;
	        // that.children = [];
	        // that.links = [];
	    },
	
	    // children
	    // --------
	
	    getChildrenCount: function getChildrenCount() {
	        var children = this.children;
	        return children ? children.length : 0;
	    },
	
	    getChildIndex: function getChildIndex(child) {
	        return (0, _commonUtils.indexOf)(this.children || [], child);
	    },
	
	    getChildAt: function getChildAt(index) {
	        var children = this.children;
	        return children ? children[index] : null;
	    },
	
	    eachChild: function eachChild(iterator, context) {
	
	        var that = this;
	
	        (0, _commonUtils.each)(that.children || [], iterator, context);
	
	        return that;
	    },
	
	    insertChild: function insertChild(child, index) {
	        var that = this;
	
	        if (child) {
	
	            // fix index
	            if (isNullOrUndefined(index)) {
	                index = that.getChildrenCount();
	
	                if (child.parent === that) {
	                    index--;
	                }
	            }
	
	            child.removeFromParent();
	            child.parent = that;
	
	            var children = that.children;
	
	            if (children) {
	                children.splice(index, 0, child);
	            } else {
	                children = that.children = [];
	                children.push(child);
	            }
	        }
	
	        return that;
	    },
	
	    removeChild: function removeChild(child) {
	        return this.removeChildAt(this.getChildIndex(child));
	    },
	
	    removeChildAt: function removeChildAt(index) {
	        var that = this;
	        var child = null;
	        var children = that.children;
	
	        if (children && index >= 0) {
	            child = that.getChildAt(index);
	
	            if (child) {
	                children.splice(index, 1);
	                child.parent = null;
	            }
	        }
	
	        return child;
	    },
	
	    // links
	    // ------
	
	    getLinksCount: function getLinksCount() {
	        var links = this.links;
	        return links ? links.length : 0;
	    },
	
	    getLinkIndex: function getLinkIndex(link) {
	        return (0, _commonUtils.indexOf)(this.links || [], link);
	    },
	
	    getLinkAt: function getLinkAt(index) {
	        var links = this.links;
	        return links ? links[index] : null;
	    },
	
	    eachLink: function eachLink(iterator, context) {
	        var that = this;
	
	        (0, _commonUtils.each)(that.links || [], iterator, context);
	
	        return that;
	    },
	
	    insertLink: function insertLink(link, outgoing) {
	
	        var that = this;
	
	        if (link) {
	            link.removeFromNode(outgoing);
	            link.setNode(that, outgoing);
	
	            var links = that.links;
	
	            if (!links || that.getLinkIndex(link) < 0 || link.getNode(!outgoing) !== that) {
	                if (!links) {
	                    links = that.links = [];
	                }
	
	                links.push(link);
	            }
	        }
	
	        return link;
	    },
	
	    removeLink: function removeLink(link, outgoing) {
	
	        var that = this;
	        var links = that.links;
	
	        if (link) {
	
	            if (links && link.getNode(!outgoing) !== that) {
	                var index = that.getLinkIndex(link);
	
	                if (index >= 0) {
	                    links.splice(index, 1);
	                }
	            }
	
	            link.setNode(null, outgoing);
	        }
	
	        return link;
	    }
	});
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonUtils = __webpack_require__(1);
	
	var _libBase = __webpack_require__(10);
	
	var _libBase2 = _interopRequireDefault(_libBase);
	
	var transients = ['id', 'value', 'parent', 'source', 'target', 'children', 'links'];
	
	exports['default'] = _libBase2['default'].extend({
	    constructor: function Cell(value, geometry, style) {
	
	        var that = this;
	
	        that.value = value;
	        that.geometry = geometry;
	        that.style = style;
	        that.visible = true;
	    },
	
	    removeFromParent: function removeFromParent() {
	        var that = this;
	        var parent = that.parent;
	
	        parent && parent.remove(that);
	
	        return that;
	    },
	
	    cloneValue: function cloneValue() {
	        var value = this.value;
	
	        if (value) {
	            if (value.clone && (0, _commonUtils.isFunction)(value.clone)) {
	                return value.clone();
	            }
	
	            if ((0, _commonUtils.isNode)(value)) {
	                return value.cloneNode(true);
	            }
	        }
	
	        return value;
	    },
	
	    clone: function clone() {
	        var that = this;
	        var cloned = (0, _commonUtils.clone)(that, transients);
	        cloned.value = that.cloneValue();
	
	        return cloned;
	    }
	});
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Vessel) {
	    'use strict';
	
	    return Vessel.extend({
	        constructor: function Layer(value) {
	
	            var that = this;
	
	            Layer['super'].constructor.call(that, value);
	
	            that.isLayer = true;
	            that.connectAble = false;
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (utils, Vessel) {
	    'use strict';
	
	    var indexOf = utils.indexOf;
	
	    var Group = Vessel.extend({
	        constructor: function Group(value, geometry, style) {
	
	            var that = this;
	
	            Group['super'].constructor.call(that, value, geometry, style);
	
	            that.isGroup = true;
	            that.collapsed = false;
	        },
	
	        cloneValue: function cloneValue() {},
	
	        clone: function clone() {}
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Cell = __webpack_require__(16);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	exports['default'] = _Cell2['default'].extend({
	    constructor: function Link(value, geometry, style) {
	
	        var that = this;
	
	        Link['super'].constructor.call(that, value, geometry, style);
	
	        that.isLink = true;
	        that.source = null;
	        that.target = null;
	    },
	
	    getNode: function getNode(isSource) {
	        return isSource ? this.source : this.target;
	    },
	
	    setNode: function setNode(node, isSource) {
	        if (isSource) {
	            this.source = node;
	        } else {
	            this.target = node;
	        }
	
	        return node;
	    },
	
	    removeFromNode: function removeFromNode(isSource) {
	
	        var that = this;
	
	        var node = that.getNode(isSource);
	
	        node && node.removeLink(that, isSource);
	
	        return that;
	    }
	});
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(21), __webpack_require__(10), __webpack_require__(13), __webpack_require__(17), __webpack_require__(18), __webpack_require__(15), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = function (utils, detector, Base, Root, Layer, Group, Node, Link) {
	    'use strict';
	
	    return Base.extend({
	        constructor: function View(graph) {
	            this.graph = graph;
	            this.translate = new Point();
	            this.graphBounds = new Rectangle();
	            this.states = new mxDictionary();
	        },
	
	        init: function init() {
	
	            var that = this;
	            var root = document.createElementNS(mxConstants.NS_SVG, 'svg');
	            var canvas = document.createElementNS(mxConstants.NS_SVG, 'g');
	            var backgroundPane = document.createElementNS(mxConstants.NS_SVG, 'g');
	            var drawPane = document.createElementNS(mxConstants.NS_SVG, 'g');
	            var overlayPane = document.createElementNS(mxConstants.NS_SVG, 'g');
	            var decoratorPane = document.createElementNS(mxConstants.NS_SVG, 'g');
	
	            canvas.appendChild(backgroundPane);
	            canvas.appendChild(drawPane);
	            canvas.appendChild(overlayPane);
	            canvas.appendChild(decoratorPane);
	            root.appendChild(canvas);
	
	            root.style.width = '100%';
	            root.style.height = '100%';
	            root.style.display = 'block';
	
	            that.canvas = canvas;
	            that.backgroundPane = backgroundPane;
	            that.drawPane = drawPane;
	            that.overlayPane = overlayPane;
	            that.decoratorPane = decoratorPane;
	
	            var container = that.graph.container;
	            if (container) {
	                container.appendChild(root);
	                that.updateContainerStyle(container);
	            }
	
	            that.installListeners();
	        },
	
	        installListeners: function installListeners() {},
	
	        updateContainerStyle: function updateContainerStyle(container) {
	            var style = utils.getCurrentStyle(container);
	
	            if (style.position === 'static') {
	                container.style.position = 'relative';
	            }
	
	            // 禁用默认的平移和缩放
	            // Disables built-in pan and zoom in IE10 and later
	            if (detector.IS_POINTER) {
	                container.style.msTouchAction = 'none';
	            }
	        }
	
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var ua = navigator.userAgent;
	var av = navigator.appVersion;
	
	var client = {
	    // IE
	    IS_IE: ua.indexOf('MSIE') >= 0,
	
	    IS_IE11: !!ua.match(/Trident\/7\./),
	
	    // Netscape
	    IS_NS: ua.indexOf('Mozilla/') >= 0 && ua.indexOf('MSIE') < 0,
	
	    // Firefox
	    IS_FF: ua.indexOf('Firefox/') >= 0,
	
	    // Chrome
	    IS_GC: ua.indexOf('Chrome/') >= 0,
	
	    // Safari
	    IS_SF: ua.indexOf('AppleWebKit/') >= 0 && ua.indexOf('Chrome/') < 0,
	
	    // Opera
	    IS_OP: ua.indexOf('Opera/') >= 0,
	
	    IS_IOS: !!ua.match(/(iPad|iPhone|iPod)/g),
	
	    IS_WIN: av.indexOf('Win') > 0,
	
	    IS_MAC: av.indexOf('Mac') > 0,
	
	    IS_TOUCH: 'ontouchstart' in document.documentElement,
	
	    IS_POINTER: window.navigator.msPointerEnabled || false
	};
	
	exports['default'] = client;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=pane.js.map