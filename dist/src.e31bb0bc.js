// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function(modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})(
  {
    'vdom/createElement.js': [
      function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = createElement;

        function createElement(tagName) {
          var attrs =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var children =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : [];
          return {
            tagName: tagName,
            attrs: attrs,
            children: children,
          };
        }
      },
      {},
    ],
    '../node_modules/lodash.zip/index.js': [
      function(require, module, exports) {
        /**
         * lodash (Custom Build) <https://lodash.com/>
         * Build: `lodash modularize exports="npm" -o ./`
         * Copyright jQuery Foundation and other contributors <https://jquery.org/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */

        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /** `Object#toString` result references. */
        var funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]';

        /**
         * A faster alternative to `Function#apply`, this function invokes `func`
         * with the `this` binding of `thisArg` and the arguments of `args`.
         *
         * @private
         * @param {Function} func The function to invoke.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {Array} args The arguments to invoke `func` with.
         * @returns {*} Returns the result of `func`.
         */
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }

        /**
         * A specialized version of `_.filter` for arrays without support for
         * iteratee shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {Array} Returns the new filtered array.
         */
        function arrayFilter(array, predicate) {
          var index = -1,
            length = array ? array.length : 0,
            resIndex = 0,
            result = [];

          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }

        /**
         * A specialized version of `_.map` for arrays without support for iteratee
         * shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         */
        function arrayMap(array, iteratee) {
          var index = -1,
            length = array ? array.length : 0,
            result = Array(length);

          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }

        /**
         * The base implementation of `_.property` without support for deep paths.
         *
         * @private
         * @param {string} key The key of the property to get.
         * @returns {Function} Returns the new accessor function.
         */
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined : object[key];
          };
        }

        /**
         * The base implementation of `_.times` without support for iteratee shorthands
         * or max array length checks.
         *
         * @private
         * @param {number} n The number of times to invoke `iteratee`.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the array of results.
         */
        function baseTimes(n, iteratee) {
          var index = -1,
            result = Array(n);

          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeMax = Math.max;

        /**
         * The base implementation of `_.rest` which doesn't validate or coerce arguments.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @returns {Function} Returns the new function.
         */
        function baseRest(func, start) {
          start = nativeMax(start === undefined ? func.length - 1 : start, 0);
          return function() {
            var args = arguments,
              index = -1,
              length = nativeMax(args.length - start, 0),
              array = Array(length);

            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = array;
            return apply(func, this, otherArgs);
          };
        }

        /**
         * This method is like `_.zip` except that it accepts an array of grouped
         * elements and creates an array regrouping the elements to their pre-zip
         * configuration.
         *
         * @static
         * @memberOf _
         * @since 1.2.0
         * @category Array
         * @param {Array} array The array of grouped elements to process.
         * @returns {Array} Returns the new array of regrouped elements.
         * @example
         *
         * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
         * // => [['a', 1, true], ['b', 2, false]]
         *
         * _.unzip(zipped);
         * // => [['a', 'b'], [1, 2], [true, false]]
         */
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }

        /**
         * Creates an array of grouped elements, the first of which contains the
         * first elements of the given arrays, the second of which contains the
         * second elements of the given arrays, and so on.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {...Array} [arrays] The arrays to process.
         * @returns {Array} Returns the new array of grouped elements.
         * @example
         *
         * _.zip(['a', 'b'], [1, 2], [true, false]);
         * // => [['a', 1, true], ['b', 2, false]]
         */
        var zip = baseRest(unzip);

        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }

        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array-like object,
         *  else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }

        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 8-9 which returns 'object' for typed array and other constructors.
          var tag = isObject(value) ? objectToString.call(value) : '';
          return tag == funcTag || tag == genTag;
        }

        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This method is loosely based on
         * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        function isLength(value) {
          return (
            typeof value == 'number' &&
            value > -1 &&
            value % 1 == 0 &&
            value <= MAX_SAFE_INTEGER
          );
        }

        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == 'object' || type == 'function');
        }

        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function isObjectLike(value) {
          return !!value && typeof value == 'object';
        }

        module.exports = zip;
      },
      {},
    ],
    '../node_modules/lodash.spread/index.js': [
      function(require, module, exports) {
        /**
         * lodash (Custom Build) <https://lodash.com/>
         * Build: `lodash modularize exports="npm" -o ./`
         * Copyright jQuery Foundation and other contributors <https://jquery.org/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */

        /** Used as the `TypeError` message for "Functions" methods. */
        var FUNC_ERROR_TEXT = 'Expected a function';

        /** Used as references for various `Number` constants. */
        var INFINITY = 1 / 0,
          MAX_INTEGER = 1.7976931348623157e308,
          NAN = 0 / 0;

        /** `Object#toString` result references. */
        var symbolTag = '[object Symbol]';

        /** Used to match leading and trailing whitespace. */
        var reTrim = /^\s+|\s+$/g;

        /** Used to detect bad signed hexadecimal string values. */
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

        /** Used to detect binary string values. */
        var reIsBinary = /^0b[01]+$/i;

        /** Used to detect octal string values. */
        var reIsOctal = /^0o[0-7]+$/i;

        /** Built-in method references without a dependency on `root`. */
        var freeParseInt = parseInt;

        /**
         * A faster alternative to `Function#apply`, this function invokes `func`
         * with the `this` binding of `thisArg` and the arguments of `args`.
         *
         * @private
         * @param {Function} func The function to invoke.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {Array} args The arguments to invoke `func` with.
         * @returns {*} Returns the result of `func`.
         */
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }

        /**
         * Appends the elements of `values` to `array`.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {Array} values The values to append.
         * @returns {Array} Returns `array`.
         */
        function arrayPush(array, values) {
          var index = -1,
            length = values.length,
            offset = array.length;

          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeMax = Math.max;

        /**
         * The base implementation of `_.rest` which doesn't validate or coerce arguments.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @returns {Function} Returns the new function.
         */
        function baseRest(func, start) {
          start = nativeMax(start === undefined ? func.length - 1 : start, 0);
          return function() {
            var args = arguments,
              index = -1,
              length = nativeMax(args.length - start, 0),
              array = Array(length);

            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = array;
            return apply(func, this, otherArgs);
          };
        }

        /**
         * The base implementation of `_.slice` without an iteratee call guard.
         *
         * @private
         * @param {Array} array The array to slice.
         * @param {number} [start=0] The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns the slice of `array`.
         */
        function baseSlice(array, start, end) {
          var index = -1,
            length = array.length;

          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : (end - start) >>> 0;
          start >>>= 0;

          var result = Array(length);
          while (++index < length) {
            result[index] = array[index + start];
          }
          return result;
        }

        /**
         * Casts `array` to a slice if it's needed.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {number} start The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns the cast slice.
         */
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }

        /**
         * Creates a function that invokes `func` with the `this` binding of the
         * create function and an array of arguments much like
         * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
         *
         * **Note:** This method is based on the
         * [spread operator](https://mdn.io/spread_operator).
         *
         * @static
         * @memberOf _
         * @since 3.2.0
         * @category Function
         * @param {Function} func The function to spread arguments over.
         * @param {number} [start=0] The start position of the spread.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var say = _.spread(function(who, what) {
         *   return who + ' says ' + what;
         * });
         *
         * say(['fred', 'hello']);
         * // => 'fred says hello'
         *
         * var numbers = Promise.all([
         *   Promise.resolve(40),
         *   Promise.resolve(36)
         * ]);
         *
         * numbers.then(_.spread(function(x, y) {
         *   return x + y;
         * }));
         * // => a Promise of 76
         */
        function spread(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start],
              otherArgs = castSlice(args, 0, start);

            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }

        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == 'object' || type == 'function');
        }

        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function isObjectLike(value) {
          return !!value && typeof value == 'object';
        }

        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        function isSymbol(value) {
          return (
            typeof value == 'symbol' ||
            (isObjectLike(value) && objectToString.call(value) == symbolTag)
          );
        }

        /**
         * Converts `value` to a finite number.
         *
         * @static
         * @memberOf _
         * @since 4.12.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {number} Returns the converted number.
         * @example
         *
         * _.toFinite(3.2);
         * // => 3.2
         *
         * _.toFinite(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toFinite(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toFinite('3.2');
         * // => 3.2
         */
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }

        /**
         * Converts `value` to an integer.
         *
         * **Note:** This method is loosely based on
         * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {number} Returns the converted integer.
         * @example
         *
         * _.toInteger(3.2);
         * // => 3
         *
         * _.toInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toInteger(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toInteger('3.2');
         * // => 3
         */
        function toInteger(value) {
          var result = toFinite(value),
            remainder = result % 1;

          return result === result
            ? remainder
              ? result - remainder
              : result
            : 0;
        }

        /**
         * Converts `value` to a number.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to process.
         * @returns {number} Returns the number.
         * @example
         *
         * _.toNumber(3.2);
         * // => 3.2
         *
         * _.toNumber(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toNumber(Infinity);
         * // => Infinity
         *
         * _.toNumber('3.2');
         * // => 3.2
         */
        function toNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other =
              typeof value.valueOf == 'function' ? value.valueOf() : value;
            value = isObject(other) ? other + '' : other;
          }
          if (typeof value != 'string') {
            return value === 0 ? value : +value;
          }
          value = value.replace(reTrim, '');
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value)
            ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
            : reIsBadHex.test(value)
            ? NAN
            : +value;
        }

        module.exports = spread;
      },
      {},
    ],
    'vdom/render.js': [
      function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = render;

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        }

        function _iterableToArrayLimit(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (
              var _i = arr[Symbol.iterator](), _s;
              !(_n = (_s = _i.next()).done);
              _n = true
            ) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i['return'] != null) _i['return']();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        function render(vNode) {
          if (typeof vNode === 'string') {
            return document.createTextNode(vNode);
          }

          var tagName = vNode.tagName,
            attrs = vNode.attrs,
            children = vNode.children;
          var $el = document.createElement(tagName);

          var _arr = Object.entries(attrs);

          for (var _i = 0; _i < _arr.length; _i++) {
            var _arr$_i = _slicedToArray(_arr[_i], 2),
              key = _arr$_i[0],
              value = _arr$_i[1];

            $el.setAttribute(key, value);
          }

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (
              var _iterator = children[Symbol.iterator](), _step;
              !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
              _iteratorNormalCompletion = true
            ) {
              var child = _step.value;
              $el.appendChild(render(child));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return $el;
        }
      },
      {},
    ],
    'vdom/diff.js': [
      function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = diff;

        var _lodash = _interopRequireDefault(require('lodash.zip'));

        var _lodash2 = _interopRequireDefault(require('lodash.spread'));

        var _render = _interopRequireDefault(require('./render'));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        }

        function _iterableToArrayLimit(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (
              var _i = arr[Symbol.iterator](), _s;
              !(_n = (_s = _i.next()).done);
              _n = true
            ) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i['return'] != null) _i['return']();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        function diff(oldVNode, newVNode) {
          if (!newVNode) {
            return function removeOldVNode($node) {
              $node.remove();
              return undefined;
            };
          } // diff one or two strings

          if (typeof oldVNode === 'string' || typeof newVNode === 'string') {
            if (oldVNode !== newVNode) {
              return function replaceOldVNode($node) {
                var $newNode = (0, _render.default)(newVNode);
                $node.replaceWith($newNode);
                return $newNode;
              };
            }

            return function doNothing() {
              return undefined;
            };
          } // when two v nodes have different tag names, we assume they are different

          if (oldVNode.tagName !== newVNode.tagName) {
            return function replaceOldVNode($node) {
              var $newNode = (0, _render.default)(newVNode);
              $node.replaceWith($newNode);
              return $newNode;
            };
          }

          var patchAttrs = diffAttrs(oldVNode.attrs, newVNode.attrs);
          var patchChildren = diffChildren(
            oldVNode.children,
            newVNode.children
          );
          return function patchOldVNode($node) {
            patchAttrs($node);
            patchChildren($node);
            return $node;
          };
        }

        function diffAttrs(oldAttrs, newAttrs) {
          var setAttrsPatches = Object.keys(newAttrs)
            .filter(function(attrName) {
              return (
                !oldAttrs.hasOwnProperty(attrName) ||
                oldAttrs[attrName] !== newAttrs[attrName]
              );
            })
            .map(function(attrName) {
              return function setAttr($node) {
                $node.setAttribute(attrName, newAttrs[attrName]);
                return $node;
              };
            });
          var removeAttrPatches = Object.keys(oldAttrs)
            .filter(function(oldAttrName) {
              return !newAttrs.hasOwnProperty(oldAttrName);
            })
            .map(function(attrName) {
              return function removeOldVNodeAttr($node) {
                $node.removeAttribute(attrName);
                return $node;
              };
            });
          var patches = removeAttrPatches.concat(setAttrsPatches);
          return function patchOldVNodeAttrs($node) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (
                var _iterator = patches[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
              ) {
                var patch = _step.value;
                patch($node);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return $node;
          };
        }

        function diffChildren(oldVChildren, newVChildren) {
          var childPatches = (0, _lodash.default)(
            oldVChildren,
            newVChildren
          ).map((0, _lodash2.default)(diff));
          var additionalPatches = newVChildren
            .slice(oldVChildren.length)
            .map(function(newChild) {
              return function appendNewVChild($node) {
                $node.appendChild((0, _render.default)(newChild));
                return $node;
              };
            });
          return function patchChildren($parent) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (
                var _iterator2 = (0, _lodash.default)(
                    childPatches,
                    $parent.childNodes
                  )[Symbol.iterator](),
                  _step2;
                !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next())
                  .done);
                _iteratorNormalCompletion2 = true
              ) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                  patch = _step2$value[0],
                  child = _step2$value[1];

                patch(child);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (
                var _iterator3 = additionalPatches[Symbol.iterator](), _step3;
                !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next())
                  .done);
                _iteratorNormalCompletion3 = true
              ) {
                var patch = _step3.value;
                patch($parent);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            return $parent;
          };
        }
      },
      {
        'lodash.zip': '../node_modules/lodash.zip/index.js',
        'lodash.spread': '../node_modules/lodash.spread/index.js',
        './render': 'vdom/render.js',
      },
    ],
    'vdom/mount.js': [
      function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = mount;

        function mount($node, $target) {
          $target.replaceWith($node);
          return $node;
        }
      },
      {},
    ],
    'vdom/index.js': [
      function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.render = exports.mount = exports.diff = exports.createElement = void 0;

        var _createElement2 = _interopRequireDefault(
          require('./createElement')
        );

        var _diff2 = _interopRequireDefault(require('./diff'));

        var _mount2 = _interopRequireDefault(require('./mount'));

        var _render2 = _interopRequireDefault(require('./render'));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var createElement = _createElement2.default;
        exports.createElement = createElement;
        var diff = _diff2.default;
        exports.diff = diff;
        var mount = _mount2.default;
        exports.mount = mount;
        var render = _render2.default;
        exports.render = render;
      },
      {
        './createElement': 'vdom/createElement.js',
        './diff': 'vdom/diff.js',
        './mount': 'vdom/mount.js',
        './render': 'vdom/render.js',
      },
    ],
    'index.js': [
      function(require, module, exports) {
        'use strict';

        var _vdom = require('./vdom');

        var createApp = function createApp(_ref) {
          var count = _ref.count;
          return (0, _vdom.createElement)(
            'div',
            {
              id: 'app',
              count: count,
            },
            [
              (0, _vdom.createElement)('h1', undefined, ['VirtualDOMio']),
              (0, _vdom.createElement)(
                'span',
                {
                  id: 'count',
                },
                [String(count)]
              ),
              (0, _vdom.createElement)('input', {
                type: 'text',
                placeholder: 'Try typing while the app is updating',
              }),
              (0, _vdom.createElement)('img', {
                src:
                  'https://media.giphy.com/media/26DNdzl2XkgbbFAmk/giphy.gif',
              }),
            ]
          );
        };

        var state = {
          count: 0,
        };
        var vApp = createApp(state);
        var $root = (0, _vdom.mount)(
          (0, _vdom.render)(vApp),
          document.querySelector('#app')
        );
        setInterval(function() {
          state.count += 1;
          var newVApp = createApp(state);
          var patch = (0, _vdom.diff)(vApp, newVApp);
          $root = patch($root);
          vApp = newVApp;
        }, 1000);
      },
      { './vdom': 'vdom/index.js' },
    ],
    '../node_modules/parcel-bundler/src/builtins/hmr-runtime.js': [
      function(require, module, exports) {
        var global = arguments[3];
        var OVERLAY_ID = '__parcel__error__overlay__';
        var OldModule = module.bundle.Module;

        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function(fn) {
              this._acceptCallbacks.push(fn || function() {});
            },
            dispose: function(fn) {
              this._disposeCallbacks.push(fn);
            },
          };
          module.bundle.hotData = null;
        }

        module.bundle.Module = Module;
        var parent = module.bundle.parent;

        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== 'undefined'
        ) {
          var hostname = '' || location.hostname;
          var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
          var ws = new WebSocket(
            protocol + '://' + hostname + ':' + '49263' + '/'
          );

          ws.onmessage = function(event) {
            var data = JSON.parse(event.data);

            if (data.type === 'update') {
              console.clear();
              data.assets.forEach(function(asset) {
                hmrApply(global.parcelRequire, asset);
              });
              data.assets.forEach(function(asset) {
                if (!asset.isNew) {
                  hmrAccept(global.parcelRequire, asset.id);
                }
              });
            }

            if (data.type === 'reload') {
              ws.close();

              ws.onclose = function() {
                location.reload();
              };
            }

            if (data.type === 'error-resolved') {
              console.log('[parcel] ✨ Error resolved');
              removeErrorOverlay();
            }

            if (data.type === 'error') {
              console.error(
                '[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack
              );
              removeErrorOverlay();
              var overlay = createErrorOverlay(data);
              document.body.appendChild(overlay);
            }
          };
        }

        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);

          if (overlay) {
            overlay.remove();
          }
        }

        function createErrorOverlay(data) {
          var overlay = document.createElement('div');
          overlay.id = OVERLAY_ID; // html encode message and stack trace

          var message = document.createElement('div');
          var stackTrace = document.createElement('pre');
          message.innerText = data.error.message;
          stackTrace.innerText = data.error.stack;
          overlay.innerHTML =
            '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' +
            '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' +
            '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' +
            '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' +
            message.innerHTML +
            '</div>' +
            '<pre>' +
            stackTrace.innerHTML +
            '</pre>' +
            '</div>';
          return overlay;
        }

        function getParents(bundle, id) {
          var modules = bundle.modules;

          if (!modules) {
            return [];
          }

          var parents = [];
          var k, d, dep;

          for (k in modules) {
            for (d in modules[k][1]) {
              dep = modules[k][1][d];

              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              ) {
                parents.push(k);
              }
            }
          }

          if (bundle.parent) {
            parents = parents.concat(getParents(bundle.parent, id));
          }

          return parents;
        }

        function hmrApply(bundle, asset) {
          var modules = bundle.modules;

          if (!modules) {
            return;
          }

          if (modules[asset.id] || !bundle.parent) {
            var fn = new Function(
              'require',
              'module',
              'exports',
              asset.generated.js
            );
            asset.isNew = !modules[asset.id];
            modules[asset.id] = [fn, asset.deps];
          } else if (bundle.parent) {
            hmrApply(bundle.parent, asset);
          }
        }

        function hmrAccept(bundle, id) {
          var modules = bundle.modules;

          if (!modules) {
            return;
          }

          if (!modules[id] && bundle.parent) {
            return hmrAccept(bundle.parent, id);
          }

          var cached = bundle.cache[id];
          bundle.hotData = {};

          if (cached) {
            cached.hot.data = bundle.hotData;
          }

          if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
            cached.hot._disposeCallbacks.forEach(function(cb) {
              cb(bundle.hotData);
            });
          }

          delete bundle.cache[id];
          bundle(id);
          cached = bundle.cache[id];

          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            cached.hot._acceptCallbacks.forEach(function(cb) {
              cb();
            });

            return true;
          }

          return getParents(global.parcelRequire, id).some(function(id) {
            return hmrAccept(global.parcelRequire, id);
          });
        }
      },
      {},
    ],
  },
  {},
  ['../node_modules/parcel-bundler/src/builtins/hmr-runtime.js', 'index.js'],
  null
);
//# sourceMappingURL=/src.e31bb0bc.map
