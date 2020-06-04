(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-page-input-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/input-page/input-page.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/input-page/input-page.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ WhichSelected }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content scrollEnabled=\"true\">\r\n    <ion-grid>\r\n\r\n        <!-- Identifer Row -->\r\n        <ion-item>\r\n            <ion-label position=\"stacked\" class=\"input-label\">Identifier</ion-label>\r\n            <ion-input [ngStyle]=\"identifierStyle\" [(ngModel)]=\"identifier\" placeholder=\"Optional\" clearInput=\"true\"></ion-input>\r\n        </ion-item>\r\n\r\n        <!-- Treatment Site Row -->\r\n        <ion-item>\r\n            <ion-label position=\"stacked\" class=\"input-label\">Treatment Site</ion-label>\r\n            <ion-input [ngStyle]=\"treatSiteStyle\" [(ngModel)]=\"treatSite\" placeholder=\"Optional\" clearInput=\"true\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-row>\r\n            <!-- Total Script Column -->\r\n            <ion-col style=\"padding-left:0px !important; padding-right: 0px !important;\">\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\" class=\"input-label\">Total Script</ion-label>\r\n                    <ion-input [ngStyle]=\"scriptStyle\" [(ngModel)]=\"script\" (ionFocus)=\"resetInputs('script')\" placeholder=\"Script (cGy)\" clearInput=\"true\" inputmode=\"decimal\" required=\"true\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <!-- Field Setup Column -->\r\n            <ion-col style=\"padding-right: 0px;\">\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\" class=\"input-label\">Field Setup</ion-label>\r\n                    <ion-input [ngStyle]=\"fieldStyle\" [(ngModel)]=\"fieldSelect\" (ionFocus)=\"resetInputs('field')\" readonly=\"true\" placeholder=\"Single/Opposed\" inputmode=\"none\" required=\"true\" (click)=\"openPicker('field')\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <!-- SSD Column -->\r\n            <ion-col style=\"padding-left:0px !important; padding-right: 0px !important;\">\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\" class=\"input-label\">SSD</ion-label>\r\n                    <ion-input readonly=\"{{ disableSSD }}\" [ngStyle]=\"ssdStyle\" [(ngModel)]=\"ssd\" (ngModelChange)=\"changeISO('ssd')\" (ionFocus)=\"resetInputs('ssd')\" placeholder=\"80, 100\" inputmode=\"decimal\" readonly=\"true\" required=\"true\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <!-- Depth Column -->\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\" class=\"input-label\">Depth</ion-label>\r\n                    <ion-input [ngStyle]=\"depthStyle\" [(ngModel)]=\"depth\" (ngModelChange)=\"changeISO('depth')\" (ionFocus)=\"resetInputs('depth')\" (ionBlur)=\"roundDepth()\" placeholder=\"Depth\" inputmode=\"decimal\" required=\"true\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <!-- Energy Column -->\r\n            <ion-col>\r\n                <ion-item style=\"padding-right: 0px;\">\r\n                    <ion-label position=\"stacked\" class=\"input-label\">Energy (MV)</ion-label>\r\n                    <ion-input [ngStyle]=\"energyStyle\" [(ngModel)]=\"energySelect\" (ionFocus)=\"resetInputs('energy')\" placeholder=\"Energy Level\" inputmode=\"none\" required=\"true\" readonly=\"true\" (click)=\"openPicker('energy')\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- Length Label -->\r\n        <ion-row>\r\n            <ion-item lines=\"none\" class=\"input-label\">\r\n                <ion-label class=\"input-label-row\">Length</ion-label>\r\n            </ion-item>\r\n        </ion-row>\r\n\r\n        <!-- Length Variables -->\r\n        <ion-row style=\"margin-top: -10px;\">\r\n            <ion-col size=\"2.5\" style=\"padding-left:0px !important; padding-right: 0px !important;\">\r\n                <ion-item>\r\n                    <ion-input [(ngModel)]=\"x1\" placeholder=\"X1\" inputmode=\"decimal\" required=\"true\" (ngModelChange)=\"changeLength()\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"2.5\" style=\"padding-left:0px !important; padding-right: 0px !important;\">\r\n                <ion-item>\r\n                    <ion-input [(ngModel)]=\"x2\" placeholder=\"X2\" inputmode=\"decimal\" required=\"true\" (ngModelChange)=\"changeLength()\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col style=\"padding-right: 0px;\">\r\n                <ion-item>\r\n                    <ion-input [ngStyle]=\"lengthStyle\" [(ngModel)]=\"length\" (ionFocus)=\"resetInputs('length')\" placeholder=\"Length\" inputmode=\"decimal\" required=\"true\" (ngModelChange)=\"changeX()\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- Width Label -->\r\n        <ion-row>\r\n            <ion-item lines=\"none\" class=\"input-label\">\r\n                <ion-label class=\"input-label-row\">Width</ion-label>\r\n            </ion-item>\r\n        </ion-row>\r\n\r\n        <!-- Width Variables -->\r\n        <ion-row style=\"margin-top: -10px;\">\r\n            <ion-col size=\"2.5\" style=\"padding-left:0px !important; padding-right: 0px !important;\">\r\n                <ion-item>\r\n                    <ion-input [(ngModel)]=\"y1\" placeholder=\"Y1\" inputmode=\"decimal\" required=\"true\" (ngModelChange)=\"changeWidth()\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"2.5\" style=\"padding-left:0px !important; padding-right: 0px !important;\">\r\n                <ion-item>\r\n                    <ion-input [(ngModel)]=\"y2\" placeholder=\"Y2\" inputmode=\"decimal\" required=\"true\" (ngModelChange)=\"changeWidth()\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col style=\"padding-right: 0px;\">\r\n                <ion-item>\r\n                    <ion-input [ngStyle]=\"widthStyle\" [(ngModel)]=\"width\" (ionFocus)=\"resetInputs('width')\" placeholder=\"Width\" inputmode=\"decimal\" required=\"true\" (ngModelChange)=\"changeY()\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- Equivalent Square Row -->\r\n        <ion-item>\r\n            <ion-label position=\"stacked\" class=\"input-label\">Equivalent Square</ion-label>\r\n            <ion-input [ngStyle]=\"equivalentSqrStyle\" [(ngModel)]=\"equivalentSqr\" placeholder=\"(2ab)/(a+b)\" inputmode=\"decimal\" required=\"true\" readonly=\"true\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-button (click)=\"calculatePressed()\" style=\"margin-top: 30px;\" expand=\"block\">Calculate</ion-button>\r\n    </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "./src/app/input-page/input-page.module.ts":
/*!*************************************************!*\
  !*** ./src/app/input-page/input-page.module.ts ***!
  \*************************************************/
/*! exports provided: InputPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPagePageModule", function() { return InputPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _input_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-page.page */ "./src/app/input-page/input-page.page.ts");







const routes = [
    {
        path: '',
        component: _input_page_page__WEBPACK_IMPORTED_MODULE_6__["InputPagePage"]
    }
];
let InputPagePageModule = class InputPagePageModule {
};
InputPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_input_page_page__WEBPACK_IMPORTED_MODULE_6__["InputPagePage"]]
    })
], InputPagePageModule);



/***/ }),

/***/ "./src/app/input-page/input-page.page.scss":
/*!*************************************************!*\
  !*** ./src/app/input-page/input-page.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-label {\n  font-size: 1.15em;\n}\n\nbody {\n  margin-bottom: 50rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQtcGFnZS9DOlxcVXNlcnNcXG1pcm9pXFxSYXlDYWxjMi9zcmNcXGFwcFxcaW5wdXQtcGFnZVxcaW5wdXQtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2lucHV0LXBhZ2UvaW5wdXQtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LXBhZ2UvaW5wdXQtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTByZW07XHJcbn0iLCIuaW5wdXQtbGFiZWwge1xuICBmb250LXNpemU6IDEuMTVlbTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/input-page/input-page.page.ts":
/*!***********************************************!*\
  !*** ./src/app/input-page/input-page.page.ts ***!
  \***********************************************/
/*! exports provided: InputPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPagePage", function() { return InputPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");









const { Keyboard } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
const { Haptics } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let InputPagePage = class InputPagePage {
    constructor(router, pickerCtrl, storageService) {
        this.router = router;
        this.pickerCtrl = pickerCtrl;
        this.storageService = storageService;
        //Title HTML variable
        this.WhichSelected = "ERROR: Data Failed to Pass";
        //Declare input variables
        this.identifier = "";
        this.treatSite = "";
        this.calcSelect = "";
        this.fieldSelect = "";
        this.energySelect = "";
        this.script = "";
        this.ssd = "";
        this.depth = "";
        this.x1 = "";
        this.x2 = "";
        this.length = "";
        this.y1 = "";
        this.y2 = "";
        this.width = "";
        this.equivalentSqr = "";
        //Enable/disable SSD
        this.disableSSD = "false";
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        if (state.importData != null) {
            this.setImportData(state.importData);
        }
        else {
            this.setCalcType(state.calcSelect);
        }
    }
    ngAfterViewInit() {
        Keyboard.addListener('keyboardWillShow', (info) => {
            setTimeout(() => this.content.scrollToBottom(100), 200);
        });
        Keyboard.addListener('keyboardDidShow', (info) => {
            setTimeout(() => this.content.scrollToBottom(100), 200);
        });
    }
    setImportData(importData) {
        this.identifier = importData.identifier;
        this.treatSite = importData.treatSite;
        this.fieldSelect = importData.fieldSelect;
        this.energySelect = importData.energySelect;
        this.script = importData.script;
        this.depth = importData.depth;
        this.length = importData.length;
        this.width = importData.width;
        this.ssd = importData.ssdStyle;
        this.equivalentSqr = importData.equivalentSqr;
        this.x1 = importData.x1;
        this.x2 = importData.x2;
        this.y1 = importData.y1;
        this.y2 = importData.y2;
        if (importData.calcSelect == "Source-Surface-Distance Calculation") {
            this.calcSelect = "ssd";
        }
        else {
            this.calcSelect = "sad";
        }
        this.setCalcType(this.calcSelect);
    }
    //Also will set the variable for calcSelect to be used to determine properties of different input fields, important for the different calculation types.
    setCalcType(calcSelect) {
        if (calcSelect == 'ssd') {
            this.WhichSelected = 'SSD Calculation';
            this.fieldSelect = 'Single';
            this.disableSSD = "true";
            this.storageService.getISO().then(iso => {
                if (iso != "" && Object(util__WEBPACK_IMPORTED_MODULE_5__["isNumber"])(iso)) {
                    this.ssd = iso;
                }
                else {
                    this.ssd = "100";
                }
            });
        }
        if (calcSelect == 'sad') {
            this.WhichSelected = "SAD Calculation";
        }
        this.calcSelect = calcSelect;
    }
    //Picker selection, takes string input to determine which values to display
    openPicker(selection) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.calcSelect == "sad" || selection == 'energy') {
                var opts = { columns: [] };
                if (selection == "field") {
                    var opts = {
                        buttons: [{ text: 'Cancel', role: 'cancel' }, { text: 'Done', }],
                        columns: [{ name: 'select', options: [{ text: "Select an option", value: "" }, { text: "Single", value: "Single" }, { text: "Opposed", value: "Opposed" }] }]
                    };
                }
                if (selection == "energy") {
                    var opts = {
                        buttons: [{ text: 'Cancel', role: 'cancel' }, { text: 'Done', }],
                        columns: [{ name: 'select', options: [{ text: "Select an option", value: "" }, { text: "6", value: "6" }, { text: "18", value: "18" }, { text: "10 (Inactive)", value: "10" }, { text: "15 (Inactive)", value: "15" }] }]
                    };
                }
                let picker = yield this.pickerCtrl.create(opts);
                picker.present();
                picker.onDidDismiss().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.hapticsSelectionChanged();
                    let col = yield picker.getColumn('select');
                    if (col.options[col.selectedIndex].text != "Select an option" && col.options[col.selectedIndex].value != "15" && col.options[col.selectedIndex].value != "10") { //Disable 15MV energy level due to lack of data
                        if (selection == "field") {
                            this.fieldSelect = col.options[col.selectedIndex].value;
                        }
                        else if (selection == "energy") {
                            this.energySelect = col.options[col.selectedIndex].value;
                        }
                    }
                }));
            }
        });
    }
    hapticsSelectionChanged() {
        Haptics.selectionChanged();
    }
    changeISO(selection) {
        if (this.calcSelect == "sad") {
            var depthn = Number(this.depth);
            var ssdn = Number(this.ssd);
            if (selection == "depth") {
                this.ssd = String(100 - depthn);
            }
            if (selection == "ssd") {
                this.depth = String(100 - ssdn);
            }
            this.depthStyle = { 'color': 'inherit' };
            this.ssdStyle = { 'color': 'inherit' };
        }
    }
    roundDepth() {
        let depthn = Number(this.depth);
        this.depth = String(Number((Number(depthn) * 2).toFixed()) / 2);
    }
    changeLength() {
        var x1n = Number(this.x1);
        var x2n = Number(this.x2);
        this.length = String(x1n + x2n);
        this.equivalentSquare();
    }
    changeWidth() {
        var y1n = Number(this.y1);
        var y2n = Number(this.y2);
        this.width = String(y1n + y2n);
        this.equivalentSquare();
    }
    changeX() {
        var lengthn = String(Number(this.length) / 2);
        this.x1 = lengthn;
        this.x2 = lengthn;
        this.equivalentSquare();
    }
    changeY() {
        var widthn = String(Number(this.width) / 2);
        this.y1 = widthn;
        this.y2 = widthn;
        this.equivalentSquare();
    }
    equivalentSquare() {
        if (this.equivalentSqr == "Value too small" || this.equivalentSqr == "Value too large") {
            this.equivalentSqr = "";
            this.equivalentSqrStyle = { 'color': 'inherit' };
        }
        var lengthn = Number(this.length);
        var widthn = Number(this.width);
        var result = String((2 * lengthn * widthn) / (lengthn + widthn));
        if (result != "NaN" && widthn != 0 && lengthn != 0) {
            this.equivalentSqr = String(Number((Number(result) * 2).toFixed()) / 2);
        }
        else {
            this.equivalentSqr = "";
        }
    }
    calculatePressed() {
        if ((this.length != "" && this.width != "" && this.script != "" && this.fieldSelect != "" && (this.depth != "" && (Number(this.depth) <= 30 && Number(this.depth) >= 0.5)) && this.energySelect != "" && this.fieldSelect != "Required" && this.ssd != "" && (Number(this.equivalentSqr) <= 30 && Number(this.equivalentSqr) >= 5)) && (this.length != "Required" && this.width != "Required" && this.script != "Required" && (this.depth != "Required" && this.depth != "Too large" && this.depth != "Too small") && this.energySelect != "Required" && this.ssd != "Required" && (this.equivalentSqr != "Value too large" && this.equivalentSqr != "Value too small"))) {
            const navigationExtras = { state: { calcSelect: this.calcSelect,
                    identifier: this.identifier,
                    treatSite: this.treatSite,
                    fieldSelect: this.fieldSelect,
                    energySelect: this.energySelect,
                    script: this.script,
                    ssd: this.ssd,
                    depth: this.depth,
                    x1: this.x1,
                    x2: this.x2,
                    length: this.length,
                    y1: this.y1,
                    y2: this.y2,
                    width: this.width,
                    equivalentSqr: this.equivalentSqr
                }
            };
            this.router.navigate(['/tabs/tab1/results'], navigationExtras);
        }
        else {
            if (this.script == "") {
                this.script = "Required";
                this.scriptStyle = { 'color': 'red' };
            }
            if (this.depth == "") {
                this.depth = "Required";
                this.depthStyle = { 'color': 'red' };
            }
            if (Number(this.depth) > 30) {
                this.depth = "Too large";
                this.depthStyle = { 'color': 'red' };
            }
            if (Number(this.depth) < 0.5) {
                this.depth = "Too small";
                this.depthStyle = { 'color': 'red' };
            }
            if (this.length == "") {
                this.length = "Required";
                this.lengthStyle = { 'color': 'red' };
            }
            if (this.width == "") {
                this.width = "Required";
                this.widthStyle = { 'color': 'red' };
            }
            if (this.energySelect == "") {
                this.energySelect = "Required";
                this.energyStyle = { 'color': 'red' };
            }
            if (this.ssd == "") {
                this.ssd = "Required";
                this.ssdStyle = { 'color': 'red' };
            }
            if (this.fieldSelect == "") {
                this.fieldSelect = "Required";
                this.fieldStyle = { 'color': 'red' };
            }
            if (this.equivalentSqrStyle != { 'color': 'red' }) {
                if (Number(this.equivalentSqr) > 30) {
                    this.equivalentSqr = "Value too large";
                    this.equivalentSqrStyle = { 'color': 'red' };
                }
                if (Number(this.equivalentSqr) < 5) {
                    this.equivalentSqr = "Value too small";
                    this.equivalentSqrStyle = { 'color': 'red' };
                }
            }
        }
    }
    resetInputs(selection) {
        if (selection == "script" && this.script == "Required") {
            this.script = "";
            this.scriptStyle = { 'color': 'inherit' };
        }
        if (selection == "ssd" && this.ssd == "Required") {
            this.ssd = "";
            this.ssdStyle = { 'color': 'inherit' };
        }
        if (selection == 'depth' && (this.depth == "Required" || this.depth == "Too small" || this.depth == "Too large")) {
            this.depth = "";
            this.depthStyle = { 'color': 'inherit' };
        }
        if (selection == "energy" && this.energySelect == "Required") {
            this.energySelect = "";
            this.energyStyle = { 'color': 'inherit' };
        }
        if (selection == "length" && this.length == "Required") {
            this.length = "";
            this.lengthStyle = { 'color': 'inherit' };
        }
        if (selection == "width" && this.width == "Required") {
            this.width = "";
            this.widthStyle = { 'color': 'inherit' };
        }
        if (selection == "field" && this.fieldSelect == "Required") {
            this.fieldSelect = "";
            this.fieldStyle = { 'color': 'inherit' };
        }
    }
};
InputPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PickerController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], InputPagePage.prototype, "content", void 0);
InputPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/input-page/input-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-page.page.scss */ "./src/app/input-page/input-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PickerController"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], InputPagePage);



/***/ })

}]);
//# sourceMappingURL=input-page-input-page-module-es2015.js.map