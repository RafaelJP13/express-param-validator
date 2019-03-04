"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.paramValidator=void 0;function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}var DEFAULT_ERROR_CODES={404:"Not found.",403:"Bad request.",401:"Unauthorized."},paramValidator=function(a,b,c,d){var e=function(){var c=a.filter(function(a){return!b.body[a.name]&&!a.optional}).map(function(a){return"Field '".concat(a.name,"' is missing. ( is required)")}),d=a.filter(function(a){return _typeof(b.body[a.name])!=a.type&&b.body[a.name]}).map(function(a){return"'".concat(a.name,"' type is wrong (should be '").concat(a.type,"')")}),e=a.filter(function(a){return a.oneOf&&!a.oneOf.includes(b.body[a.name])}).map(function(a){return"'".concat(a.name,"' value is not allowed. Should be one of: [").concat(a.oneOf,"]")});return[].concat(_toConsumableArray(c),_toConsumableArray(d),_toConsumableArray(e))};return 1<=e().length?c.status(403).send({success:!1,message:e()}):d?d(function(a,b){return c.status(a).send({success:!1,message:b||DEFAULT_ERROR_CODES[a]})},function(a){return c.status(200).send({success:!0,message:a})}):c.status(200).send({success:!0,message:"success"})};exports.paramValidator=paramValidator;