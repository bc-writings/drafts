(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 194);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var _move = function (obj, _attachList) {
  _newArrowCheck(this, _this);

  for (var n in obj) {
    if (obj.hasOwnProperty(n)) {
      for (var k = 0; k < _attachList.length; ++k) {
        if (_attachList[k].list.indexOf(n) != -1) {
          _attachList[k].attach[n] = obj[n];
        }
      }
    }
  }
}.bind(this);

/* harmony default export */ __webpack_exports__["a"] = (_move);

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rng_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stringify_js__ = __webpack_require__(29);

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || __WEBPACK_IMPORTED_MODULE_0__rng_js__["a" /* default */])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || __WEBPACK_IMPORTED_MODULE_1__stringify_js__["a" /* default */](b);
}

/* unused harmony default export */ var _unused_webpack_default_export = (v1);

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v35_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__md5_js__ = __webpack_require__(140);


var v3 = __WEBPACK_IMPORTED_MODULE_0__v35_js__["a" /* default */]('v3', 0x30, __WEBPACK_IMPORTED_MODULE_1__md5_js__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (v3);

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */

function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */

function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */

function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */

function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */

function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */

function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */

function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["a"] = (md5);

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rng_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stringify_js__ = __webpack_require__(29);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || __WEBPACK_IMPORTED_MODULE_0__rng_js__["a" /* default */])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return __WEBPACK_IMPORTED_MODULE_1__stringify_js__["a" /* default */](rnds);
}

/* harmony default export */ __webpack_exports__["a"] = (v4);

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v35_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sha1_js__ = __webpack_require__(143);


var v5 = __WEBPACK_IMPORTED_MODULE_0__v35_js__["a" /* default */]('v5', 0x50, __WEBPACK_IMPORTED_MODULE_1__sha1_js__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (v5);

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["a"] = (sha1);

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(30);


function version(uuid) {
  if (!__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */](uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* unused harmony default export */ var _unused_webpack_default_export = (version);

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_move__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_ptr__ = __webpack_require__(80);



var _attachList = [{
  attach: self,
  list: [
  //tracking,
  "getPurchaseData", "initAnalytics", "initFacebookTracking", "initTwitterTracking", "setPromoParam", "getPromoParam", "sendAnalyticsEvent", "sendAnalyticsEventFromStorage", "sendAnalyticsTag", "initTracking", "saveToSessionstorage", "setTracking", "gaAll"]
}];

__WEBPACK_IMPORTED_MODULE_0__lib_move__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__lib_ptr__, _attachList);

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TFA_TYPE */


var TFA_TYPE = {
  MSISDN_TYPE: 1,
  AUTHENTICATOR_APP_TYPE: 2
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(30);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */](uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["a"] = (stringify);

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rcookie", function() { return rcookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setcookie", function() { return setcookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrefSearch", function() { return hrefSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveToSessionstorage", function() { return saveToSessionstorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signToCurrency", function() { return signToCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyMap", function() { return currencyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__", function() { return __; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obLength", function() { return obLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisabledPlanReason", function() { return getDisabledPlanReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatExpDatetoMMYY", function() { return formatExpDatetoMMYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventEnteringNumbers", function() { return preventEnteringNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventEnteringChars", function() { return preventEnteringChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCardType", function() { return findCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpiryDatePeriod", function() { return getExpiryDatePeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateExpiryDate", function() { return validateExpiryDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrency", function() { return getCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areArraysEqual", function() { return areArraysEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web_shared_dataTypes__ = __webpack_require__(2);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var rcookie = function (name) {
  _newArrowCheck(this, _this);

  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}.bind(this);

var setcookie = function (name, value, days) {
  _newArrowCheck(this, _this);

  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  }

  if (location.hostname.indexOf(".pcloud.com") != -1) {
    document.cookie = name + "=" + value + expires + "; domain=.pcloud.com; path=/";
  } else {
    document.cookie = name + "=" + value + expires + "; path=/";
  }
}.bind(this);

var hrefSearch = function (key) {
  _newArrowCheck(this, _this);

  var parsed = false;
  var params = {};

  var _parse = function () {
    _newArrowCheck(this, _this);

    var p_arr = location.search.substring(1).split("&");
    var arr = void 0;

    for (var n in p_arr) {
      arr = p_arr[n].split("=");
      params[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1]);
    }

    parsed = true;
  }.bind(this);

  if (!parsed) {
    _parse();
  }

  return key in params ? params[key] : false;
}.bind(this);

var saveToSessionstorage = function (label, value) {
  _newArrowCheck(this, _this);

  if (typeof Storage === "undefined" || typeof sessionStorage === "undefined" || sessionStorage === null) {
    setcookie(label, value, 0);
  } else {
    sessionStorage.setItem(label, value);
  }
}.bind(this);

var signToCurrency = {
  $: "USD",
  "€": "EUR",
  "₤": "GBP"
};

var currencyMap = {
  'USD': '$',
  'EUR': '€',
  'GBP': '₤'
};

var __ = function (key, val, repl, description) {
  _newArrowCheck(this, _this);

  if (typeof window.pCloudIntl !== "undefined") {
    return window.pCloudIntl.__(key, val, repl, description);
  }

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && typeof window.__ === "function") {
    return window.__(key, val, repl, description);
  }

  if (val) {
    return _repl(val, repl);
  }

  return _repl(key, repl);
}.bind(this);

var _repl = function (str) {
  var repl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _newArrowCheck(this, _this);

  str = _properSpaces(str);

  if (!obLength(repl)) {
    return str;
  }

  for (var n in repl) {
    str = str.replace(new RegExp("%" + n + "%", "g"), repl[n]);
  }

  return str;
}.bind(this);

var _properSpaces = function (str) {
  _newArrowCheck(this, _this);

  return str.split(String.fromCharCode(160)).join(" ");
}.bind(this);

var obLength = function (obj) {
  _newArrowCheck(this, _this);

  var size = 0,
      key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      size++;
    }
  }
  return size;
}.bind(this);

var getDisabledPlanReason = function (_ref) {
  var user = _ref.user,
      forPlan = _ref.forPlan,
      forPeriod = _ref.forPeriod,
      downgradeAllowed = _ref.downgradeAllowed;

  _newArrowCheck(this, _this);

  if (!user || !forPlan || !forPeriod) {
    return "";
  }

  var business = user.business,
      lastsubscription = user.lastsubscription,
      cryptolifetime = user.cryptolifetime,
      plan = user.plan,
      premium = user.premium,
      premiumlifetime = user.premiumlifetime,
      premiumexpires = user.premiumexpires,
      cryptosubscription = user.cryptosubscription;

  if (user) {
    if (business) {
      return "business";
    } else {
      var hasStorageSubscription = premium && !premiumlifetime;
      var hasCryptoSubscription = cryptosubscription;
      var hasSubscriptionPeriod = false;
      var isCanceled = lastsubscription && lastsubscription.status === "canceled";

      if (!isCanceled && lastsubscription) {
        hasSubscriptionPeriod = lastsubscription.period;
      }

      // Buying Crypto

      if (forPlan == 101) {
        if (cryptolifetime) {
          return "crypto_lifetime";
        } else if (hasSubscriptionPeriod && !hasCryptoSubscription) {
          if (hasCryptoSubscription == "month" && forPeriod == "month") {
            return "current_plan";
          } else if (hasSubscriptionPeriod == "year" && forPeriod == "month") {
            return "lower_period";
          }
        } else if (hasCryptoSubscription && hasSubscriptionPeriod && isCanceled == false) {
          if (hasSubscriptionPeriod == "month" && forPeriod == "month") {
            return "current_plan";
          } else if (hasSubscriptionPeriod == "year") {
            if (forPeriod == "month") {
              return "lower_period";
            } else if (forPeriod == "year") {
              return "current_plan";
            }
          }
        }

        // Buying Storage
      } else {
        if (plan == 1 || plan == 3 || plan == 13) {
          if (premiumlifetime) {
            if (forPlan <= plan || forPlan == 14 || forPlan == 15) {
              return "storage_lifetime";
            }
          } else if (hasSubscriptionPeriod && isCanceled == false) {
            if (forPeriod == "lifetime") {
              if (forPlan < plan) {
                return "lower_plan";
              }
            } else if (hasSubscriptionPeriod == "month") {
              if (forPeriod == "month") {
                if (forPlan < plan && !downgradeAllowed) {
                  return "lower_plan";
                } else if (forPlan == plan) {
                  return "current_plan";
                }
              } else if (forPeriod == "year" && forPlan < plan || forPlan < plan && premiumexpires) {
                return "lower_plan";
              }
            } else if (hasSubscriptionPeriod == "year") {
              if (forPeriod == "month" && !downgradeAllowed) {
                return "lower_period";
              } else {
                if (forPlan < plan && !downgradeAllowed) {
                  return "lower_plan";
                } else if (forPlan == plan) {
                  if (!downgradeAllowed || hasSubscriptionPeriod == forPeriod) {
                    return "current_plan";
                  }
                }
              }
            }
          } else if (isCanceled == false) {
            if (forPlan < plan) {
              return "lower_plan";
            } else if (forPlan <= plan && premiumexpires) {
              var now = new Date();
              var expires = new Date(premiumexpires);
              //Get 1 day in milliseconds
              var oneDay = 1000 * 60 * 60 * 24;
              var daysLeft = Number(expires) - Number(now) / oneDay;

              var monthlyTabisActive = forPeriod === "month";
              var annualTabisActive = forPeriod === "year";

              if (daysLeft > 10 && (annualTabisActive || monthlyTabisActive)) {
                return "lower_period";
              }
            }
          }
        } else if (plan == 15 && forPlan == 15 || (plan == 14 || plan == 15) && forPlan !== 15) {
          return "family";
        }
      }
    }

    // return true;
  }
}.bind(this);

var formatExpDatetoMMYY = function (inputvalue) {
  _newArrowCheck(this, _this);

  var formatedValue = inputvalue;

  formatedValue = formatedValue.replace(/^([1-9]\/|[2-9])$/g, '0$1 / ' // 3 > 03/
  ).replace(/^(0[1-9]|1[0-2])$/g, '$1 / ' // 11 > 11/
  ).replace(/^1([3-9])$/g, '01 / $1' // 13 > 01/3 //UPDATED by NAVNEET
  // ).replace(
  //   /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
  ).replace(/^0\/|0+$/g, '0' // 0/ > 0 and 00 > 0 //UPDATED by NAVNEET
  ).replace(/[^\d|^\/]*/g, '' // To allow only digits and `/` //UPDATED by NAVNEET
  ).replace(/\/\//g, '/' // Prevent entering more than 1 `/`
  );

  return formatedValue;
}.bind(this);

var preventEnteringNumbers = function (event) {
  _newArrowCheck(this, _this);

  var key = event.which || event.keyCode || event.charCode;
  var pressedCharacter = String.fromCharCode(key);

  if (!/[a-zA-Z '-]/.test(pressedCharacter)) {
    event.preventDefault();
  }
}.bind(this);

var preventEnteringChars = function (event) {
  _newArrowCheck(this, _this);

  var key = event.which || event.keyCode || event.charCode;
  var pressedCharacter = String.fromCharCode(key);

  if (!/[0-9 ]/.test(pressedCharacter)) {
    event.preventDefault();
  }
}.bind(this);

var findCardType = function (cardNumber) {
  _newArrowCheck(this, _this);

  var creditCardValidations = [{
    name: "amex",
    range: "34, 37",
    valid_length: ["15"]
  }, {
    name: "diners",
    range: "301, 302, 303, 304, 305, 36",
    valid_length: ["14"]
  }, {
    name: "jcb",
    range: "352, 353, 354, 355, 357, 358",
    valid_length: ["16"]
  }, {
    name: "visa",
    range: "4",
    valid_length: ["19", "18", "17", "16", "15", "14", "13"]
  }, {
    name: "mastercard",
    range: "50, 51, 52, 53, 54, 55, 222",
    valid_length: ["16"]
  }, {
    name: "discover",
    range: "6011, 622, 644, 645, 646, 647, 648, 649",
    valid_length: ["16"]
  }];

  return creditCardValidations.find(function (cardTemplate) {
    _newArrowCheck(this, _this);

    var isThereAMatch = cardTemplate.range.split(", ").some(function (range) {
      _newArrowCheck(this, _this);

      return range === cardNumber;
    }.bind(this));
    return isThereAMatch;
  }.bind(this));
}.bind(this);

var getExpiryDatePeriod = function (expiryDate, period) {
  _newArrowCheck(this, _this);

  var periods = {
    month: Number(expiryDate.split("/")[0]),
    year: Number(expiryDate.split("/")[1])
  };

  if (periods.year > 2000 && periods.year < 2100) {
    periods.year -= 2000;
  }

  return periods[period];
}.bind(this);

var validateExpiryDate = function (expiryDate) {
  _newArrowCheck(this, _this);

  var month = getExpiryDatePeriod(expiryDate, "month");
  var year = getExpiryDatePeriod(expiryDate, "year");
  var currentYear = new Date().getFullYear() - 2000;
  var currentMonth = new Date().getMonth() + 1;

  var validateExpression = month <= 12 && (month > 0 && year > currentYear || month >= currentMonth && year == currentYear) && year <= 40;

  return validateExpression;
}.bind(this);

var getCurrency = function (_ref2) {
  var auth = _ref2.auth,
      callback = _ref2.callback;

  _newArrowCheck(this, _this);

  var params = {};
  var getCurrencyTries = 0;

  if (getCurrencyTries >= 5) {
    onSuccess("$");
    return;
  }

  if (auth) {
    params["auth"] = $.cookie("pcauth");
  }

  if (rcookie("forcecurrency")) {
    params["currency"] = $.cookie("forcecurrency");
  }

  if (rcookie("forcecountry")) {
    params["country"] = $.cookie("forcecountry");
  }

  var onSuccess = function (currency) {
    _newArrowCheck(this, _this);

    if (typeof Storage !== "undefined" && currencyMap[currency]) {
      sessionStorage.setItem("pclCurrency", currencyMap[currency]);
    }

    callback(currency);
  }.bind(this);

  var getCurrencyApiCall = function () {
    _newArrowCheck(this, _this);

    getCurrencyTries++;
    var onError = function () {
      _newArrowCheck(this, _this);

      setTimeout(function () {
        _newArrowCheck(this, _this);

        getCurrencyApiCall();
      }.bind(this), 300);
    }.bind(this);

    pCloudGlobals.apiMethod && pCloudGlobals.apiMethod("getcurrency", params, function (data) {
      _newArrowCheck(this, _this);

      if (data.currency) {
        onSuccess(data.currency);
      } else {
        onError();
      }
    }.bind(this), {
      errorCallback: onError
    });
  }.bind(this);

  getCurrencyApiCall();
}.bind(this);

var areArraysEqual = function (array1, array2) {
  _newArrowCheck(this, _this);

  if (!array1 || !array2) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (var index1 = 0; index1 < array1.length; index1++) {
    var e1 = array1[index1];
    var e2 = array2[index1];

    if (Array.isArray(e1) && Array.isArray(e2)) {
      compareArrays(e1, e2);
    } else if (e1 !== e2) {
      return false;
    }

    // for (let index2 = 0; index2 < array2.length; index2++) {
    //   const e2 = array2[index2];

    //   if (Array.isArray(e1) && Array.isArray(e2)) {
    //     compareArrays(e1, e2);
    //   } else if (e1 !== e2) {
    //     return false;
    //   }
    // }
  }

  return true;
}.bind(this);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__regex_js__ = __webpack_require__(138);


function validate(uuid) {
  return typeof uuid === 'string' && __WEBPACK_IMPORTED_MODULE_0__regex_js__["a" /* default */].test(uuid);
}

/* harmony default export */ __webpack_exports__["a"] = (validate);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DNS */
/* unused harmony export URL */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stringify_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_js__ = __webpack_require__(62);



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["a"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = __WEBPACK_IMPORTED_MODULE_1__parse_js__["a" /* default */](namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return __WEBPACK_IMPORTED_MODULE_0__stringify_js__["a" /* default */](bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(30);


function parse(uuid) {
  if (!__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */](uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["a"] = (parse);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_FLAG", function() { return GA_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBQ_FLAG", function() { return FBQ_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFacebookTracking", function() { return initFacebookTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTwitterTracking", function() { return initTwitterTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initKlaviyoTracking", function() { return initKlaviyoTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPurchaseData", function() { return getPurchaseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromoParam", function() { return getPromoParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPromoParam", function() { return setPromoParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePromoParam", function() { return removePromoParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovePromoData", function() { return RemovePromoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearPurchaseData", function() { return clearPurchaseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAnalyticsEvent", function() { return sendAnalyticsEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAnalyticsEventFromStorage", function() { return sendAnalyticsEventFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAnalyticsTag", function() { return sendAnalyticsTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAnalytics", function() { return initAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTracking", function() { return initTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTracking", function() { return setTracking; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





var GA_FLAG = 1;
var FBQ_FLAG = 2;

window.uuidv4 = __WEBPACK_IMPORTED_MODULE_0_uuid__["a" /* v4 */];

var mockGaFuncs = function () {
  _newArrowCheck(this, _this);

  window.gtag = function () {};
  window.gaAll = function () {};
}.bind(this);

var mockFbqFuncs = function () {
  _newArrowCheck(this, _this);

  window.fbq = function () {};
}.bind(this);

var mockTwqFuncs = function () {
  _newArrowCheck(this, _this);

  window.twq = function () {};
}.bind(this);

var mockKlaviyoFuncs = function () {
  _newArrowCheck(this, _this);

  window._learnq = [];
}.bind(this);

mockGaFuncs();
// mockFbqFuncs();
// mockTwqFuncs();

var initFacebookTracking = function () {
  _newArrowCheck(this, _this);

  console.log('facebook tracking included tacking.js');

  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return;n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };if (!f._fbq) f._fbq = n;
    n.push = n;n.loaded = !0;n.version = '2.0';n.queue = [];t = b.createElement(e);t.async = !0;
    t.src = v;s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '280549965449042');
  fbq('track', 'PageView');
}.bind(this);

var initTwitterTracking = function () {
  _newArrowCheck(this, _this);

  console.log("twitter tracking included tacking.js");
  // Twitter tracking
  !function (e, t, n, s, u, a) {
    e.twq || (s = e.twq = function () {
      s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
    }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = '//static.ads-twitter.com/uwt.js', a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a));
  }(window, document, 'script');
  // Insert Twitter Pixel ID and Standard Event data below
  twq('init', 'o13cc');
  twq('track', 'PageView');
}.bind(this);

var initKlaviyoTracking = function () {
  _newArrowCheck(this, _this);

  var script = document.createElement('script');

  script.onload = function () {
    _newArrowCheck(this, _this);

    window._learnq = _learnq || [];
  }.bind(this);

  script.src = "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=HUxTuZ";
  document.getElementsByTagName('head')[0].appendChild(script);
}.bind(this);

var getPurchaseData = function () {
  _newArrowCheck(this, _this);

  if (typeof Storage === 'undefined' || typeof localStorage === 'undefined' || localStorage === null) {
    return [];
  }
  var purchases = localStorage.getItem("purchases");
  if (purchases) {
    return JSON.parse(purchases);
  } else {
    return [];
  }
}.bind(this);

var getPromoParam = function (param) {
  _newArrowCheck(this, _this);

  if (__WEBPACK_IMPORTED_MODULE_1__utils__["hrefSearch"](param)) {
    return __WEBPACK_IMPORTED_MODULE_1__utils__["hrefSearch"](param);
  }

  if (typeof Storage === 'undefined' || typeof sessionStorage === 'undefined' || sessionStorage === null) {
    return __WEBPACK_IMPORTED_MODULE_1__utils__["rcookie"](param) || __WEBPACK_IMPORTED_MODULE_1__utils__["hrefSearch"](param);
  }

  return sessionStorage.getItem(param);
}.bind(this);

var setPromoParam = function (param) {
  _newArrowCheck(this, _this);

  var value = getPromoParam(param);

  if (value) {
    __WEBPACK_IMPORTED_MODULE_1__utils__["saveToSessionstorage"](param, value);
  }
}.bind(this);

var removePromoParam = function (param) {
  _newArrowCheck(this, _this);

  if (typeof Storage === 'undefined' || typeof sessionStorage === 'undefined' || sessionStorage === null) {
    if (__WEBPACK_IMPORTED_MODULE_1__utils__["rcookie"](param)) {
      __WEBPACK_IMPORTED_MODULE_1__utils__["setcookie"](param, null, 0);
    }
  } else {
    if (sessionStorage.getItem(param)) {
      sessionStorage.removeItem(param);
    }
  }
}.bind(this);

var RemovePromoData = function () {
  _newArrowCheck(this, _this);

  removePromoParam("channelid");
  removePromoParam("label");
}.bind(this);

var clearPurchaseData = function () {
  _newArrowCheck(this, _this);

  localStorage.removeItem("purchases");
}.bind(this);

var getStoredAnalyticsParams = function () {
  _newArrowCheck(this, _this);

  return [].concat(JSON.parse(localStorage.analyticsData));
}.bind(this);

var sendAnalyticsEvent = function (params, data) {
  _newArrowCheck(this, _this);

  var etime = Math.round(new Date().getTime() / 1000);
  var _params = _extends({}, params, { etime: etime });

  if (data) {
    var keys = [];

    Object.keys(data).map(function (keyName) {
      _newArrowCheck(this, _this);

      var val = data[keyName];
      _params["key" + keyName] = val;
      keys.push(keyName);
    }.bind(this));

    if (keys.length) {
      _params.keys = keys.join(',');
    }
  }

  var updateLocalStorageData = function (_ref) {
    var result = _ref.result;

    _newArrowCheck(this, _this);

    var localStorageParams = result == 0 ? [] : [_extends({}, _params, { retries: 1, id: __WEBPACK_IMPORTED_MODULE_0_uuid__["a" /* v4 */]() })];

    if (localStorage.analyticsData) {
      localStorageParams = localStorageParams.concat(getStoredAnalyticsParams());
    }

    if (localStorageParams.length) {
      localStorage.setItem('analyticsData', JSON.stringify(localStorageParams));
    } else {
      localStorage.removeItem('analyticsData');
    }
  }.bind(this);

  if (pCloudGlobals && pCloudGlobals.apiMethod) {
    pCloudGlobals.apiMethod("loganalyticsevent", _params, updateLocalStorageData, {
      errorCallback: updateLocalStorageData
    });
  }
}.bind(this);

var sendAnalyticsEventFromStorage = function () {
  _newArrowCheck(this, _this);

  var localStorageParams = [];
  var promises = [];
  var deleteParamsIds = [];

  if (localStorage.analyticsData) {
    localStorageParams = getStoredAnalyticsParams();
  }

  var updateLocalStorageData = function () {
    _newArrowCheck(this, _this);

    if (localStorage.analyticsData) {
      localStorageParams = getStoredAnalyticsParams();
    }

    if (deleteParamsIds.length === localStorageParams.length) {
      localStorage.removeItem('analyticsData');
    } else {
      var newLocalStorageParams = localStorageParams.filter(function (params) {
        _newArrowCheck(this, _this);

        return deleteParamsIds.indexOf(params.id) === -1;
      }.bind(this)).map(function (_ref2) {
        _newArrowCheck(this, _this);

        var retries = _ref2.retries,
            params = _objectWithoutProperties(_ref2, ['retries']);

        return _extends({ retries: ++retries }, params);
      }.bind(this));

      localStorage.setItem('analyticsData', JSON.stringify(newLocalStorageParams));
    }
  }.bind(this);

  if (localStorageParams.length) {
    promises = localStorageParams.map(function (_ref3) {
      _newArrowCheck(this, _this);

      var retries = _ref3.retries,
          id = _ref3.id,
          params = _objectWithoutProperties(_ref3, ['retries', 'id']);

      var onSuccess = function () {
        _newArrowCheck(this, _this);

        deleteParamsIds.push(id);
      }.bind(this);

      var onError = function () {
        _newArrowCheck(this, _this);

        if (retries >= 10) {
          deleteParamsIds.push(id);
        }
      }.bind(this);

      if (pCloudGlobals && pCloudGlobals.apiMethod) {
        return new Promise(function (resolve, reject) {
          _newArrowCheck(this, _this);

          pCloudGlobals.apiMethod("loganalyticsevent", params, function (data) {
            _newArrowCheck(this, _this);

            onSuccess();
            resolve(data);
          }.bind(this), {
            errorCallback: function errorCallback(data) {
              _newArrowCheck(this, _this);

              reject(data);
            }.bind(this)
          });
        }.bind(this)).catch(function (error) {
          _newArrowCheck(this, _this);

          onError();
        }.bind(this));
      }
    }.bind(this));
  }

  Promise.all(promises).then(updateLocalStorageData, updateLocalStorageData);
}.bind(this);


var sendAnalyticsTag = function (auth, tag) {
  _newArrowCheck(this, _this);

  pCloudGlobals.apiMethod("addusertag", { auth: auth, tag: tag }, function () {
    _newArrowCheck(this, _this);
  }.bind(this));
}.bind(this);

var initAnalytics = function () {
  _newArrowCheck(this, _this);

  console.log('google analytics included ptr.js');

  window.dataLayer = window.dataLayer || [];
  (function (dataLayer) {
    _newArrowCheck(this, _this);

    var purchases = getPurchaseData();
    if (purchases.length > 0) {
      var pclCurrency = sessionStorage.pclCurrency || '$';

      for (var i = 0; i < purchases.length; i++) {
        var purchase = purchases[i];
        dataLayer.push({
          'transactionId': purchase.transactionID,
          'transactionTotal': purchase.price
        });
      }

      var category = "";
      var promoParams = {
        label: getPromoParam("label"),
        channelid: getPromoParam("channelid")
      };
      if (promoParams.label && promoParams.channelid) {
        category = "promo";
      } else {
        category = "product";
      }

      var params = {
        revenue: purchases[purchases.length - 1].price,
        currency: __WEBPACK_IMPORTED_MODULE_1__utils__["signToCurrency"][pclCurrency] || 'USD'
      };
      if (promoParams.channelid) {
        params.channelid = promoParams.channelid;
      }

      var os = __WEBPACK_IMPORTED_MODULE_1__utils__["hrefSearch"]('os') || 4;

      sendAnalyticsEvent({
        category: category,
        action: "purchase",
        label: promoParams.label || "www-site",
        os: os
      }, params);

      RemovePromoData();
      clearPurchaseData();
    }
  }).bind(this)(dataLayer);

  console.log(">>>> dataLayer: ", dataLayer);

  // Global site tag (gtag.js) - Google Analytics
  var script = document.createElement('script');

  script.onload = function () {
    _newArrowCheck(this, _this);

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-44134956-1');
    gtag('config', 'UA-44134956-4', { 'optimize_id': 'GTM-N35M66J' });

    window.gaAll = function (event, category, action) {
      gtag(event, action, {
        'event_category': category
      });
    };
    window.gtag = gtag;
  }.bind(this);

  script.src = "https://www.googletagmanager.com/gtag/js?id=UA-44134956-4";
  document.getElementsByTagName('head')[0].appendChild(script);

  initKlaviyoTracking();
}.bind(this);

var initTracking = function (trackingServices) {
  _newArrowCheck(this, _this);

  var trackingSettings = __WEBPACK_IMPORTED_MODULE_1__utils__["rcookie"]('cookieconsent');

  if (trackingSettings === null) {
    trackingSettings = GA_FLAG | FBQ_FLAG;
  }

  var isEnabled = checkStatus(trackingSettings, 'enabled');
  var isDisabled = checkStatus(trackingSettings, 'disabled');
  var startService = invokeObjProp('onStart');
  var stopService = invokeObjProp('onDisabled');

  trackingServices.filter(isEnabled).forEach(startService);
  trackingServices.filter(isDisabled).forEach(stopService);

  function checkStatus(trackingSettings, status) {
    return function (service) {
      if (status === 'enabled') {
        return (trackingSettings & service.type) === service.type;
      } else {
        return (trackingSettings & service.type) === 0;
      }
    };
  }

  function invokeObjProp(prop) {
    return function (obj) {
      obj[prop] && obj[prop]();
    };
  }
}.bind(this);

var setTracking = function () {
  _newArrowCheck(this, _this);

  initTracking([{
    type: GA_FLAG,
    onStart: initAnalytics,
    onDisabled: function onDisabled() {
      _newArrowCheck(this, _this);

      mockGaFuncs();
      mockKlaviyoFuncs();
    }.bind(this)
  }, {
    type: FBQ_FLAG,
    onStart: function onStart() {
      _newArrowCheck(this, _this);

      initFacebookTracking();
      initTwitterTracking();
    }.bind(this),
    onDisabled: function onDisabled() {
      _newArrowCheck(this, _this);

      mockFbqFuncs();
      mockTwqFuncs();
    }.bind(this)
  }]);
}.bind(this);

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v1_js__ = __webpack_require__(137);
/* unused harmony reexport v1 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__v3_js__ = __webpack_require__(139);
/* unused harmony reexport v3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__v4_js__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__v4_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__v5_js__ = __webpack_require__(142);
/* unused harmony reexport v5 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nil_js__ = __webpack_require__(144);
/* unused harmony reexport NIL */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__version_js__ = __webpack_require__(145);
/* unused harmony reexport version */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validate_js__ = __webpack_require__(30);
/* unused harmony reexport validate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stringify_js__ = __webpack_require__(29);
/* unused harmony reexport stringify */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parse_js__ = __webpack_require__(62);
/* unused harmony reexport parse */










/***/ })

/******/ })));
//# sourceMappingURL=ptr.js.map