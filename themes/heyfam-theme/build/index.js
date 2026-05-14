import {
  __commonJS,
  __toESM
} from "./chunk-7D4SUZUM.js";

// node_modules/cropperjs/dist/cropper.js
var require_cropper = __commonJS({
  "node_modules/cropperjs/dist/cropper.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Cropper = factory());
    })(exports, (function() {
      "use strict";
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r2) {
            return Object.getOwnPropertyDescriptor(e, r2).enumerable;
          })), t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
            _defineProperty(e, r2, t[r2]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
            Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
          });
        }
        return e;
      }
      function _toPrimitive(t, r) {
        if ("object" != typeof t || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != typeof i) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == typeof i ? i : i + "";
      }
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
      var WINDOW = IS_BROWSER ? window : {};
      var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
      var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
      var NAMESPACE = "cropper";
      var ACTION_ALL = "all";
      var ACTION_CROP = "crop";
      var ACTION_MOVE = "move";
      var ACTION_ZOOM = "zoom";
      var ACTION_EAST = "e";
      var ACTION_WEST = "w";
      var ACTION_SOUTH = "s";
      var ACTION_NORTH = "n";
      var ACTION_NORTH_EAST = "ne";
      var ACTION_NORTH_WEST = "nw";
      var ACTION_SOUTH_EAST = "se";
      var ACTION_SOUTH_WEST = "sw";
      var CLASS_CROP = "".concat(NAMESPACE, "-crop");
      var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
      var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
      var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
      var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
      var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
      var CLASS_MOVE = "".concat(NAMESPACE, "-move");
      var DATA_ACTION = "".concat(NAMESPACE, "Action");
      var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");
      var DRAG_MODE_CROP = "crop";
      var DRAG_MODE_MOVE = "move";
      var DRAG_MODE_NONE = "none";
      var EVENT_CROP = "crop";
      var EVENT_CROP_END = "cropend";
      var EVENT_CROP_MOVE = "cropmove";
      var EVENT_CROP_START = "cropstart";
      var EVENT_DBLCLICK = "dblclick";
      var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
      var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
      var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
      var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
      var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
      var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
      var EVENT_READY = "ready";
      var EVENT_RESIZE = "resize";
      var EVENT_WHEEL = "wheel";
      var EVENT_ZOOM = "zoom";
      var MIME_TYPE_JPEG = "image/jpeg";
      var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
      var REGEXP_DATA_URL = /^data:/;
      var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
      var REGEXP_TAG_NAME = /^img|canvas$/i;
      var MIN_CONTAINER_WIDTH = 200;
      var MIN_CONTAINER_HEIGHT = 100;
      var DEFAULTS = {
        // Define the view mode of the cropper
        viewMode: 0,
        // 0, 1, 2, 3
        // Define the dragging mode of the cropper
        dragMode: DRAG_MODE_CROP,
        // 'crop', 'move' or 'none'
        // Define the initial aspect ratio of the crop box
        initialAspectRatio: NaN,
        // Define the aspect ratio of the crop box
        aspectRatio: NaN,
        // An object with the previous cropping result data
        data: null,
        // A selector for adding extra containers to preview
        preview: "",
        // Re-render the cropper when resize the window
        responsive: true,
        // Restore the cropped area after resize the window
        restore: true,
        // Check if the current image is a cross-origin image
        checkCrossOrigin: true,
        // Check the current image's Exif Orientation information
        checkOrientation: true,
        // Show the black modal
        modal: true,
        // Show the dashed lines for guiding
        guides: true,
        // Show the center indicator for guiding
        center: true,
        // Show the white modal to highlight the crop box
        highlight: true,
        // Show the grid background
        background: true,
        // Enable to crop the image automatically when initialize
        autoCrop: true,
        // Define the percentage of automatic cropping area when initializes
        autoCropArea: 0.8,
        // Enable to move the image
        movable: true,
        // Enable to rotate the image
        rotatable: true,
        // Enable to scale the image
        scalable: true,
        // Enable to zoom the image
        zoomable: true,
        // Enable to zoom the image by dragging touch
        zoomOnTouch: true,
        // Enable to zoom the image by wheeling mouse
        zoomOnWheel: true,
        // Define zoom ratio when zoom the image by wheeling mouse
        wheelZoomRatio: 0.1,
        // Enable to move the crop box
        cropBoxMovable: true,
        // Enable to resize the crop box
        cropBoxResizable: true,
        // Toggle drag mode between "crop" and "move" when click twice on the cropper
        toggleDragModeOnDblclick: true,
        // Size limitation
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: MIN_CONTAINER_WIDTH,
        minContainerHeight: MIN_CONTAINER_HEIGHT,
        // Shortcuts of events
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null
      };
      var TEMPLATE = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
      var isNaN = Number.isNaN || WINDOW.isNaN;
      function isNumber(value) {
        return typeof value === "number" && !isNaN(value);
      }
      var isPositiveNumber = function isPositiveNumber2(value) {
        return value > 0 && value < Infinity;
      };
      function isUndefined(value) {
        return typeof value === "undefined";
      }
      function isObject(value) {
        return _typeof(value) === "object" && value !== null;
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function isPlainObject(value) {
        if (!isObject(value)) {
          return false;
        }
        try {
          var _constructor = value.constructor;
          var prototype = _constructor.prototype;
          return _constructor && prototype && hasOwnProperty.call(prototype, "isPrototypeOf");
        } catch (error) {
          return false;
        }
      }
      function isFunction(value) {
        return typeof value === "function";
      }
      var slice = Array.prototype.slice;
      function toArray(value) {
        return Array.from ? Array.from(value) : slice.call(value);
      }
      function forEach(data, callback) {
        if (data && isFunction(callback)) {
          if (Array.isArray(data) || isNumber(data.length)) {
            toArray(data).forEach(function(value, key) {
              callback.call(data, value, key, data);
            });
          } else if (isObject(data)) {
            Object.keys(data).forEach(function(key) {
              callback.call(data, data[key], key, data);
            });
          }
        }
        return data;
      }
      var assign2 = Object.assign || function assign3(target) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        if (isObject(target) && args.length > 0) {
          args.forEach(function(arg) {
            if (isObject(arg)) {
              Object.keys(arg).forEach(function(key) {
                target[key] = arg[key];
              });
            }
          });
        }
        return target;
      };
      var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
      function normalizeDecimalNumber(value) {
        var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
        return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
      }
      var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
      function setStyle(element, styles) {
        var style = element.style;
        forEach(styles, function(value, property) {
          if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
            value = "".concat(value, "px");
          }
          style[property] = value;
        });
      }
      function hasClass(element, value) {
        return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
      }
      function addClass(element, value) {
        if (!value) {
          return;
        }
        if (isNumber(element.length)) {
          forEach(element, function(elem) {
            addClass(elem, value);
          });
          return;
        }
        if (element.classList) {
          element.classList.add(value);
          return;
        }
        var className = element.className.trim();
        if (!className) {
          element.className = value;
        } else if (className.indexOf(value) < 0) {
          element.className = "".concat(className, " ").concat(value);
        }
      }
      function removeClass(element, value) {
        if (!value) {
          return;
        }
        if (isNumber(element.length)) {
          forEach(element, function(elem) {
            removeClass(elem, value);
          });
          return;
        }
        if (element.classList) {
          element.classList.remove(value);
          return;
        }
        if (element.className.indexOf(value) >= 0) {
          element.className = element.className.replace(value, "");
        }
      }
      function toggleClass(element, value, added) {
        if (!value) {
          return;
        }
        if (isNumber(element.length)) {
          forEach(element, function(elem) {
            toggleClass(elem, value, added);
          });
          return;
        }
        if (added) {
          addClass(element, value);
        } else {
          removeClass(element, value);
        }
      }
      var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
      function toParamCase(value) {
        return value.replace(REGEXP_CAMEL_CASE, "$1-$2").toLowerCase();
      }
      function getData(element, name) {
        if (isObject(element[name])) {
          return element[name];
        }
        if (element.dataset) {
          return element.dataset[name];
        }
        return element.getAttribute("data-".concat(toParamCase(name)));
      }
      function setData(element, name, data) {
        if (isObject(data)) {
          element[name] = data;
        } else if (element.dataset) {
          element.dataset[name] = data;
        } else {
          element.setAttribute("data-".concat(toParamCase(name)), data);
        }
      }
      function removeData(element, name) {
        if (isObject(element[name])) {
          try {
            delete element[name];
          } catch (error) {
            element[name] = void 0;
          }
        } else if (element.dataset) {
          try {
            delete element.dataset[name];
          } catch (error) {
            element.dataset[name] = void 0;
          }
        } else {
          element.removeAttribute("data-".concat(toParamCase(name)));
        }
      }
      var REGEXP_SPACES = /\s\s*/;
      var onceSupported = (function() {
        var supported = false;
        if (IS_BROWSER) {
          var once = false;
          var listener = function listener2() {
          };
          var options = Object.defineProperty({}, "once", {
            get: function get2() {
              supported = true;
              return once;
            },
            /**
             * This setter can fix a `TypeError` in strict mode
             * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
             * @param {boolean} value - The value to set
             */
            set: function set2(value) {
              once = value;
            }
          });
          WINDOW.addEventListener("test", listener, options);
          WINDOW.removeEventListener("test", listener, options);
        }
        return supported;
      })();
      function removeListener(element, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function(event) {
          if (!onceSupported) {
            var listeners = element.listeners;
            if (listeners && listeners[event] && listeners[event][listener]) {
              handler = listeners[event][listener];
              delete listeners[event][listener];
              if (Object.keys(listeners[event]).length === 0) {
                delete listeners[event];
              }
              if (Object.keys(listeners).length === 0) {
                delete element.listeners;
              }
            }
          }
          element.removeEventListener(event, handler, options);
        });
      }
      function addListener(element, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var _handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function(event) {
          if (options.once && !onceSupported) {
            var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
            _handler = function handler() {
              delete listeners[event][listener];
              element.removeEventListener(event, _handler, options);
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              listener.apply(element, args);
            };
            if (!listeners[event]) {
              listeners[event] = {};
            }
            if (listeners[event][listener]) {
              element.removeEventListener(event, listeners[event][listener], options);
            }
            listeners[event][listener] = _handler;
            element.listeners = listeners;
          }
          element.addEventListener(event, _handler, options);
        });
      }
      function dispatchEvent(element, type, data) {
        var event;
        if (isFunction(Event) && isFunction(CustomEvent)) {
          event = new CustomEvent(type, {
            detail: data,
            bubbles: true,
            cancelable: true
          });
        } else {
          event = document.createEvent("CustomEvent");
          event.initCustomEvent(type, true, true, data);
        }
        return element.dispatchEvent(event);
      }
      function getOffset(element) {
        var box = element.getBoundingClientRect();
        return {
          left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
          top: box.top + (window.pageYOffset - document.documentElement.clientTop)
        };
      }
      var location2 = WINDOW.location;
      var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
      function isCrossOriginURL(url) {
        var parts = url.match(REGEXP_ORIGINS);
        return parts !== null && (parts[1] !== location2.protocol || parts[2] !== location2.hostname || parts[3] !== location2.port);
      }
      function addTimestamp(url) {
        var timestamp = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
        return url + (url.indexOf("?") === -1 ? "?" : "&") + timestamp;
      }
      function getTransforms(_ref) {
        var rotate = _ref.rotate, scaleX = _ref.scaleX, scaleY = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
        var values = [];
        if (isNumber(translateX) && translateX !== 0) {
          values.push("translateX(".concat(translateX, "px)"));
        }
        if (isNumber(translateY) && translateY !== 0) {
          values.push("translateY(".concat(translateY, "px)"));
        }
        if (isNumber(rotate) && rotate !== 0) {
          values.push("rotate(".concat(rotate, "deg)"));
        }
        if (isNumber(scaleX) && scaleX !== 1) {
          values.push("scaleX(".concat(scaleX, ")"));
        }
        if (isNumber(scaleY) && scaleY !== 1) {
          values.push("scaleY(".concat(scaleY, ")"));
        }
        var transform = values.length ? values.join(" ") : "none";
        return {
          WebkitTransform: transform,
          msTransform: transform,
          transform
        };
      }
      function getMaxZoomRatio(pointers) {
        var pointers2 = _objectSpread2({}, pointers);
        var maxRatio = 0;
        forEach(pointers, function(pointer, pointerId) {
          delete pointers2[pointerId];
          forEach(pointers2, function(pointer2) {
            var x1 = Math.abs(pointer.startX - pointer2.startX);
            var y1 = Math.abs(pointer.startY - pointer2.startY);
            var x2 = Math.abs(pointer.endX - pointer2.endX);
            var y2 = Math.abs(pointer.endY - pointer2.endY);
            var z1 = Math.sqrt(x1 * x1 + y1 * y1);
            var z2 = Math.sqrt(x2 * x2 + y2 * y2);
            var ratio = (z2 - z1) / z1;
            if (Math.abs(ratio) > Math.abs(maxRatio)) {
              maxRatio = ratio;
            }
          });
        });
        return maxRatio;
      }
      function getPointer(_ref2, endOnly) {
        var pageX = _ref2.pageX, pageY = _ref2.pageY;
        var end = {
          endX: pageX,
          endY: pageY
        };
        return endOnly ? end : _objectSpread2({
          startX: pageX,
          startY: pageY
        }, end);
      }
      function getPointersCenter(pointers) {
        var pageX = 0;
        var pageY = 0;
        var count = 0;
        forEach(pointers, function(_ref3) {
          var startX = _ref3.startX, startY = _ref3.startY;
          pageX += startX;
          pageY += startY;
          count += 1;
        });
        pageX /= count;
        pageY /= count;
        return {
          pageX,
          pageY
        };
      }
      function getAdjustedSizes(_ref4) {
        var aspectRatio = _ref4.aspectRatio, height = _ref4.height, width = _ref4.width;
        var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain";
        var isValidWidth = isPositiveNumber(width);
        var isValidHeight = isPositiveNumber(height);
        if (isValidWidth && isValidHeight) {
          var adjustedWidth = height * aspectRatio;
          if (type === "contain" && adjustedWidth > width || type === "cover" && adjustedWidth < width) {
            height = width / aspectRatio;
          } else {
            width = height * aspectRatio;
          }
        } else if (isValidWidth) {
          height = width / aspectRatio;
        } else if (isValidHeight) {
          width = height * aspectRatio;
        }
        return {
          width,
          height
        };
      }
      function getRotatedSizes(_ref5) {
        var width = _ref5.width, height = _ref5.height, degree = _ref5.degree;
        degree = Math.abs(degree) % 180;
        if (degree === 90) {
          return {
            width: height,
            height: width
          };
        }
        var arc = degree % 90 * Math.PI / 180;
        var sinArc = Math.sin(arc);
        var cosArc = Math.cos(arc);
        var newWidth = width * cosArc + height * sinArc;
        var newHeight = width * sinArc + height * cosArc;
        return degree > 90 ? {
          width: newHeight,
          height: newWidth
        } : {
          width: newWidth,
          height: newHeight
        };
      }
      function getSourceCanvas(image, _ref6, _ref7, _ref8) {
        var imageAspectRatio = _ref6.aspectRatio, imageNaturalWidth = _ref6.naturalWidth, imageNaturalHeight = _ref6.naturalHeight, _ref6$rotate = _ref6.rotate, rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate, _ref6$scaleX = _ref6.scaleX, scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX, _ref6$scaleY = _ref6.scaleY, scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
        var aspectRatio = _ref7.aspectRatio, naturalWidth = _ref7.naturalWidth, naturalHeight = _ref7.naturalHeight;
        var _ref8$fillColor = _ref8.fillColor, fillColor = _ref8$fillColor === void 0 ? "transparent" : _ref8$fillColor, _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled, imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE, _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality, imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? "low" : _ref8$imageSmoothingQ, _ref8$maxWidth = _ref8.maxWidth, maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth, _ref8$maxHeight = _ref8.maxHeight, maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight, _ref8$minWidth = _ref8.minWidth, minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth, _ref8$minHeight = _ref8.minHeight, minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var maxSizes = getAdjustedSizes({
          aspectRatio,
          width: maxWidth,
          height: maxHeight
        });
        var minSizes = getAdjustedSizes({
          aspectRatio,
          width: minWidth,
          height: minHeight
        }, "cover");
        var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
        var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));
        var destMaxSizes = getAdjustedSizes({
          aspectRatio: imageAspectRatio,
          width: maxWidth,
          height: maxHeight
        });
        var destMinSizes = getAdjustedSizes({
          aspectRatio: imageAspectRatio,
          width: minWidth,
          height: minHeight
        }, "cover");
        var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
        var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
        var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
        canvas.width = normalizeDecimalNumber(width);
        canvas.height = normalizeDecimalNumber(height);
        context.fillStyle = fillColor;
        context.fillRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        context.rotate(rotate * Math.PI / 180);
        context.scale(scaleX, scaleY);
        context.imageSmoothingEnabled = imageSmoothingEnabled;
        context.imageSmoothingQuality = imageSmoothingQuality;
        context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function(param) {
          return Math.floor(normalizeDecimalNumber(param));
        }))));
        context.restore();
        return canvas;
      }
      var fromCharCode = String.fromCharCode;
      function getStringFromCharCode(dataView, start, length) {
        var str = "";
        length += start;
        for (var i = start; i < length; i += 1) {
          str += fromCharCode(dataView.getUint8(i));
        }
        return str;
      }
      var REGEXP_DATA_URL_HEAD = /^data:.*,/;
      function dataURLToArrayBuffer(dataURL) {
        var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, "");
        var binary = atob(base64);
        var arrayBuffer = new ArrayBuffer(binary.length);
        var uint8 = new Uint8Array(arrayBuffer);
        forEach(uint8, function(value, i) {
          uint8[i] = binary.charCodeAt(i);
        });
        return arrayBuffer;
      }
      function arrayBufferToDataURL(arrayBuffer, mimeType) {
        var chunks = [];
        var chunkSize = 8192;
        var uint8 = new Uint8Array(arrayBuffer);
        while (uint8.length > 0) {
          chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
          uint8 = uint8.subarray(chunkSize);
        }
        return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join("")));
      }
      function resetAndGetOrientation(arrayBuffer) {
        var dataView = new DataView(arrayBuffer);
        var orientation;
        try {
          var littleEndian;
          var app1Start;
          var ifdStart;
          if (dataView.getUint8(0) === 255 && dataView.getUint8(1) === 216) {
            var length = dataView.byteLength;
            var offset = 2;
            while (offset + 1 < length) {
              if (dataView.getUint8(offset) === 255 && dataView.getUint8(offset + 1) === 225) {
                app1Start = offset;
                break;
              }
              offset += 1;
            }
          }
          if (app1Start) {
            var exifIDCode = app1Start + 4;
            var tiffOffset = app1Start + 10;
            if (getStringFromCharCode(dataView, exifIDCode, 4) === "Exif") {
              var endianness = dataView.getUint16(tiffOffset);
              littleEndian = endianness === 18761;
              if (littleEndian || endianness === 19789) {
                if (dataView.getUint16(tiffOffset + 2, littleEndian) === 42) {
                  var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                  if (firstIFDOffset >= 8) {
                    ifdStart = tiffOffset + firstIFDOffset;
                  }
                }
              }
            }
          }
          if (ifdStart) {
            var _length = dataView.getUint16(ifdStart, littleEndian);
            var _offset;
            var i;
            for (i = 0; i < _length; i += 1) {
              _offset = ifdStart + i * 12 + 2;
              if (dataView.getUint16(_offset, littleEndian) === 274) {
                _offset += 8;
                orientation = dataView.getUint16(_offset, littleEndian);
                dataView.setUint16(_offset, 1, littleEndian);
                break;
              }
            }
          }
        } catch (error) {
          orientation = 1;
        }
        return orientation;
      }
      function parseOrientation(orientation) {
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;
        switch (orientation) {
          // Flip horizontal
          case 2:
            scaleX = -1;
            break;
          // Rotate left 180°
          case 3:
            rotate = -180;
            break;
          // Flip vertical
          case 4:
            scaleY = -1;
            break;
          // Flip vertical and rotate right 90°
          case 5:
            rotate = 90;
            scaleY = -1;
            break;
          // Rotate right 90°
          case 6:
            rotate = 90;
            break;
          // Flip horizontal and rotate right 90°
          case 7:
            rotate = 90;
            scaleX = -1;
            break;
          // Rotate left 90°
          case 8:
            rotate = -90;
            break;
        }
        return {
          rotate,
          scaleX,
          scaleY
        };
      }
      var render2 = {
        render: function render3() {
          this.initContainer();
          this.initCanvas();
          this.initCropBox();
          this.renderCanvas();
          if (this.cropped) {
            this.renderCropBox();
          }
        },
        initContainer: function initContainer() {
          var element = this.element, options = this.options, container = this.container, cropper = this.cropper;
          var minWidth = Number(options.minContainerWidth);
          var minHeight = Number(options.minContainerHeight);
          addClass(cropper, CLASS_HIDDEN);
          removeClass(element, CLASS_HIDDEN);
          var containerData = {
            width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
            height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
          };
          this.containerData = containerData;
          setStyle(cropper, {
            width: containerData.width,
            height: containerData.height
          });
          addClass(element, CLASS_HIDDEN);
          removeClass(cropper, CLASS_HIDDEN);
        },
        // Canvas (image wrapper)
        initCanvas: function initCanvas() {
          var containerData = this.containerData, imageData = this.imageData;
          var viewMode = this.options.viewMode;
          var rotated = Math.abs(imageData.rotate) % 180 === 90;
          var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
          var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
          var aspectRatio = naturalWidth / naturalHeight;
          var canvasWidth = containerData.width;
          var canvasHeight = containerData.height;
          if (containerData.height * aspectRatio > containerData.width) {
            if (viewMode === 3) {
              canvasWidth = containerData.height * aspectRatio;
            } else {
              canvasHeight = containerData.width / aspectRatio;
            }
          } else if (viewMode === 3) {
            canvasHeight = containerData.width / aspectRatio;
          } else {
            canvasWidth = containerData.height * aspectRatio;
          }
          var canvasData = {
            aspectRatio,
            naturalWidth,
            naturalHeight,
            width: canvasWidth,
            height: canvasHeight
          };
          this.canvasData = canvasData;
          this.limited = viewMode === 1 || viewMode === 2;
          this.limitCanvas(true, true);
          canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
          canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
          canvasData.left = (containerData.width - canvasData.width) / 2;
          canvasData.top = (containerData.height - canvasData.height) / 2;
          canvasData.oldLeft = canvasData.left;
          canvasData.oldTop = canvasData.top;
          this.initialCanvasData = assign2({}, canvasData);
        },
        limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
          var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
          var viewMode = options.viewMode;
          var aspectRatio = canvasData.aspectRatio;
          var cropped = this.cropped && cropBoxData;
          if (sizeLimited) {
            var minCanvasWidth = Number(options.minCanvasWidth) || 0;
            var minCanvasHeight = Number(options.minCanvasHeight) || 0;
            if (viewMode > 1) {
              minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
              minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
              if (viewMode === 3) {
                if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                  minCanvasWidth = minCanvasHeight * aspectRatio;
                } else {
                  minCanvasHeight = minCanvasWidth / aspectRatio;
                }
              }
            } else if (viewMode > 0) {
              if (minCanvasWidth) {
                minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
              } else if (minCanvasHeight) {
                minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
              } else if (cropped) {
                minCanvasWidth = cropBoxData.width;
                minCanvasHeight = cropBoxData.height;
                if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                  minCanvasWidth = minCanvasHeight * aspectRatio;
                } else {
                  minCanvasHeight = minCanvasWidth / aspectRatio;
                }
              }
            }
            var _getAdjustedSizes = getAdjustedSizes({
              aspectRatio,
              width: minCanvasWidth,
              height: minCanvasHeight
            });
            minCanvasWidth = _getAdjustedSizes.width;
            minCanvasHeight = _getAdjustedSizes.height;
            canvasData.minWidth = minCanvasWidth;
            canvasData.minHeight = minCanvasHeight;
            canvasData.maxWidth = Infinity;
            canvasData.maxHeight = Infinity;
          }
          if (positionLimited) {
            if (viewMode > (cropped ? 0 : 1)) {
              var newCanvasLeft = containerData.width - canvasData.width;
              var newCanvasTop = containerData.height - canvasData.height;
              canvasData.minLeft = Math.min(0, newCanvasLeft);
              canvasData.minTop = Math.min(0, newCanvasTop);
              canvasData.maxLeft = Math.max(0, newCanvasLeft);
              canvasData.maxTop = Math.max(0, newCanvasTop);
              if (cropped && this.limited) {
                canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
                canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
                canvasData.maxLeft = cropBoxData.left;
                canvasData.maxTop = cropBoxData.top;
                if (viewMode === 2) {
                  if (canvasData.width >= containerData.width) {
                    canvasData.minLeft = Math.min(0, newCanvasLeft);
                    canvasData.maxLeft = Math.max(0, newCanvasLeft);
                  }
                  if (canvasData.height >= containerData.height) {
                    canvasData.minTop = Math.min(0, newCanvasTop);
                    canvasData.maxTop = Math.max(0, newCanvasTop);
                  }
                }
              }
            } else {
              canvasData.minLeft = -canvasData.width;
              canvasData.minTop = -canvasData.height;
              canvasData.maxLeft = containerData.width;
              canvasData.maxTop = containerData.height;
            }
          }
        },
        renderCanvas: function renderCanvas(changed, transformed) {
          var canvasData = this.canvasData, imageData = this.imageData;
          if (transformed) {
            var _getRotatedSizes = getRotatedSizes({
              width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
              height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
              degree: imageData.rotate || 0
            }), naturalWidth = _getRotatedSizes.width, naturalHeight = _getRotatedSizes.height;
            var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
            var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
            canvasData.left -= (width - canvasData.width) / 2;
            canvasData.top -= (height - canvasData.height) / 2;
            canvasData.width = width;
            canvasData.height = height;
            canvasData.aspectRatio = naturalWidth / naturalHeight;
            canvasData.naturalWidth = naturalWidth;
            canvasData.naturalHeight = naturalHeight;
            this.limitCanvas(true, false);
          }
          if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
            canvasData.left = canvasData.oldLeft;
          }
          if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
            canvasData.top = canvasData.oldTop;
          }
          canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
          canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
          this.limitCanvas(false, true);
          canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
          canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
          canvasData.oldLeft = canvasData.left;
          canvasData.oldTop = canvasData.top;
          setStyle(this.canvas, assign2({
            width: canvasData.width,
            height: canvasData.height
          }, getTransforms({
            translateX: canvasData.left,
            translateY: canvasData.top
          })));
          this.renderImage(changed);
          if (this.cropped && this.limited) {
            this.limitCropBox(true, true);
          }
        },
        renderImage: function renderImage(changed) {
          var canvasData = this.canvasData, imageData = this.imageData;
          var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
          var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
          assign2(imageData, {
            width,
            height,
            left: (canvasData.width - width) / 2,
            top: (canvasData.height - height) / 2
          });
          setStyle(this.image, assign2({
            width: imageData.width,
            height: imageData.height
          }, getTransforms(assign2({
            translateX: imageData.left,
            translateY: imageData.top
          }, imageData))));
          if (changed) {
            this.output();
          }
        },
        initCropBox: function initCropBox() {
          var options = this.options, canvasData = this.canvasData;
          var aspectRatio = options.aspectRatio || options.initialAspectRatio;
          var autoCropArea = Number(options.autoCropArea) || 0.8;
          var cropBoxData = {
            width: canvasData.width,
            height: canvasData.height
          };
          if (aspectRatio) {
            if (canvasData.height * aspectRatio > canvasData.width) {
              cropBoxData.height = cropBoxData.width / aspectRatio;
            } else {
              cropBoxData.width = cropBoxData.height * aspectRatio;
            }
          }
          this.cropBoxData = cropBoxData;
          this.limitCropBox(true, true);
          cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
          cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
          cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
          cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
          cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
          cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
          cropBoxData.oldLeft = cropBoxData.left;
          cropBoxData.oldTop = cropBoxData.top;
          this.initialCropBoxData = assign2({}, cropBoxData);
        },
        limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
          var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData, limited = this.limited;
          var aspectRatio = options.aspectRatio;
          if (sizeLimited) {
            var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
            var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
            var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
            var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;
            minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
            minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
            if (aspectRatio) {
              if (minCropBoxWidth && minCropBoxHeight) {
                if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
                  minCropBoxHeight = minCropBoxWidth / aspectRatio;
                } else {
                  minCropBoxWidth = minCropBoxHeight * aspectRatio;
                }
              } else if (minCropBoxWidth) {
                minCropBoxHeight = minCropBoxWidth / aspectRatio;
              } else if (minCropBoxHeight) {
                minCropBoxWidth = minCropBoxHeight * aspectRatio;
              }
              if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
                maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
              } else {
                maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
              }
            }
            cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
            cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
            cropBoxData.maxWidth = maxCropBoxWidth;
            cropBoxData.maxHeight = maxCropBoxHeight;
          }
          if (positionLimited) {
            if (limited) {
              cropBoxData.minLeft = Math.max(0, canvasData.left);
              cropBoxData.minTop = Math.max(0, canvasData.top);
              cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
              cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
            } else {
              cropBoxData.minLeft = 0;
              cropBoxData.minTop = 0;
              cropBoxData.maxLeft = containerData.width - cropBoxData.width;
              cropBoxData.maxTop = containerData.height - cropBoxData.height;
            }
          }
        },
        renderCropBox: function renderCropBox() {
          var options = this.options, containerData = this.containerData, cropBoxData = this.cropBoxData;
          if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
            cropBoxData.left = cropBoxData.oldLeft;
          }
          if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
            cropBoxData.top = cropBoxData.oldTop;
          }
          cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
          cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
          this.limitCropBox(false, true);
          cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
          cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
          cropBoxData.oldLeft = cropBoxData.left;
          cropBoxData.oldTop = cropBoxData.top;
          if (options.movable && options.cropBoxMovable) {
            setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
          }
          setStyle(this.cropBox, assign2({
            width: cropBoxData.width,
            height: cropBoxData.height
          }, getTransforms({
            translateX: cropBoxData.left,
            translateY: cropBoxData.top
          })));
          if (this.cropped && this.limited) {
            this.limitCanvas(true, true);
          }
          if (!this.disabled) {
            this.output();
          }
        },
        output: function output() {
          this.preview();
          dispatchEvent(this.element, EVENT_CROP, this.getData());
        }
      };
      var preview = {
        initPreview: function initPreview() {
          var element = this.element, crossOrigin = this.crossOrigin;
          var preview2 = this.options.preview;
          var url = crossOrigin ? this.crossOriginUrl : this.url;
          var alt = element.alt || "The image to preview";
          var image = document.createElement("img");
          if (crossOrigin) {
            image.crossOrigin = crossOrigin;
          }
          image.src = url;
          image.alt = alt;
          this.viewBox.appendChild(image);
          this.viewBoxImage = image;
          if (!preview2) {
            return;
          }
          var previews = preview2;
          if (typeof preview2 === "string") {
            previews = element.ownerDocument.querySelectorAll(preview2);
          } else if (preview2.querySelector) {
            previews = [preview2];
          }
          this.previews = previews;
          forEach(previews, function(el) {
            var img = document.createElement("img");
            setData(el, DATA_PREVIEW, {
              width: el.offsetWidth,
              height: el.offsetHeight,
              html: el.innerHTML
            });
            if (crossOrigin) {
              img.crossOrigin = crossOrigin;
            }
            img.src = url;
            img.alt = alt;
            img.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"';
            el.innerHTML = "";
            el.appendChild(img);
          });
        },
        resetPreview: function resetPreview() {
          forEach(this.previews, function(element) {
            var data = getData(element, DATA_PREVIEW);
            setStyle(element, {
              width: data.width,
              height: data.height
            });
            element.innerHTML = data.html;
            removeData(element, DATA_PREVIEW);
          });
        },
        preview: function preview2() {
          var imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
          var cropBoxWidth = cropBoxData.width, cropBoxHeight = cropBoxData.height;
          var width = imageData.width, height = imageData.height;
          var left = cropBoxData.left - canvasData.left - imageData.left;
          var top = cropBoxData.top - canvasData.top - imageData.top;
          if (!this.cropped || this.disabled) {
            return;
          }
          setStyle(this.viewBoxImage, assign2({
            width,
            height
          }, getTransforms(assign2({
            translateX: -left,
            translateY: -top
          }, imageData))));
          forEach(this.previews, function(element) {
            var data = getData(element, DATA_PREVIEW);
            var originalWidth = data.width;
            var originalHeight = data.height;
            var newWidth = originalWidth;
            var newHeight = originalHeight;
            var ratio = 1;
            if (cropBoxWidth) {
              ratio = originalWidth / cropBoxWidth;
              newHeight = cropBoxHeight * ratio;
            }
            if (cropBoxHeight && newHeight > originalHeight) {
              ratio = originalHeight / cropBoxHeight;
              newWidth = cropBoxWidth * ratio;
              newHeight = originalHeight;
            }
            setStyle(element, {
              width: newWidth,
              height: newHeight
            });
            setStyle(element.getElementsByTagName("img")[0], assign2({
              width: width * ratio,
              height: height * ratio
            }, getTransforms(assign2({
              translateX: -left * ratio,
              translateY: -top * ratio
            }, imageData))));
          });
        }
      };
      var events = {
        bind: function bind() {
          var element = this.element, options = this.options, cropper = this.cropper;
          if (isFunction(options.cropstart)) {
            addListener(element, EVENT_CROP_START, options.cropstart);
          }
          if (isFunction(options.cropmove)) {
            addListener(element, EVENT_CROP_MOVE, options.cropmove);
          }
          if (isFunction(options.cropend)) {
            addListener(element, EVENT_CROP_END, options.cropend);
          }
          if (isFunction(options.crop)) {
            addListener(element, EVENT_CROP, options.crop);
          }
          if (isFunction(options.zoom)) {
            addListener(element, EVENT_ZOOM, options.zoom);
          }
          addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
          if (options.zoomable && options.zoomOnWheel) {
            addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
              passive: false,
              capture: true
            });
          }
          if (options.toggleDragModeOnDblclick) {
            addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
          }
          addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
          addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
          if (options.responsive) {
            addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
          }
        },
        unbind: function unbind() {
          var element = this.element, options = this.options, cropper = this.cropper;
          if (isFunction(options.cropstart)) {
            removeListener(element, EVENT_CROP_START, options.cropstart);
          }
          if (isFunction(options.cropmove)) {
            removeListener(element, EVENT_CROP_MOVE, options.cropmove);
          }
          if (isFunction(options.cropend)) {
            removeListener(element, EVENT_CROP_END, options.cropend);
          }
          if (isFunction(options.crop)) {
            removeListener(element, EVENT_CROP, options.crop);
          }
          if (isFunction(options.zoom)) {
            removeListener(element, EVENT_ZOOM, options.zoom);
          }
          removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
          if (options.zoomable && options.zoomOnWheel) {
            removeListener(cropper, EVENT_WHEEL, this.onWheel, {
              passive: false,
              capture: true
            });
          }
          if (options.toggleDragModeOnDblclick) {
            removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
          }
          removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
          removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
          if (options.responsive) {
            removeListener(window, EVENT_RESIZE, this.onResize);
          }
        }
      };
      var handlers = {
        resize: function resize() {
          if (this.disabled) {
            return;
          }
          var options = this.options, container = this.container, containerData = this.containerData;
          var ratioX = container.offsetWidth / containerData.width;
          var ratioY = container.offsetHeight / containerData.height;
          var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;
          if (ratio !== 1) {
            var canvasData;
            var cropBoxData;
            if (options.restore) {
              canvasData = this.getCanvasData();
              cropBoxData = this.getCropBoxData();
            }
            this.render();
            if (options.restore) {
              this.setCanvasData(forEach(canvasData, function(n, i) {
                canvasData[i] = n * ratio;
              }));
              this.setCropBoxData(forEach(cropBoxData, function(n, i) {
                cropBoxData[i] = n * ratio;
              }));
            }
          }
        },
        dblclick: function dblclick() {
          if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
            return;
          }
          this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
        },
        wheel: function wheel(event) {
          var _this = this;
          var ratio = Number(this.options.wheelZoomRatio) || 0.1;
          var delta = 1;
          if (this.disabled) {
            return;
          }
          event.preventDefault();
          if (this.wheeling) {
            return;
          }
          this.wheeling = true;
          setTimeout(function() {
            _this.wheeling = false;
          }, 50);
          if (event.deltaY) {
            delta = event.deltaY > 0 ? 1 : -1;
          } else if (event.wheelDelta) {
            delta = -event.wheelDelta / 120;
          } else if (event.detail) {
            delta = event.detail > 0 ? 1 : -1;
          }
          this.zoom(-delta * ratio, event);
        },
        cropStart: function cropStart(event) {
          var buttons = event.buttons, button = event.button;
          if (this.disabled || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && // No primary button (Usually the left button)
          (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
            return;
          }
          var options = this.options, pointers = this.pointers;
          var action;
          if (event.changedTouches) {
            forEach(event.changedTouches, function(touch) {
              pointers[touch.identifier] = getPointer(touch);
            });
          } else {
            pointers[event.pointerId || 0] = getPointer(event);
          }
          if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
            action = ACTION_ZOOM;
          } else {
            action = getData(event.target, DATA_ACTION);
          }
          if (!REGEXP_ACTIONS.test(action)) {
            return;
          }
          if (dispatchEvent(this.element, EVENT_CROP_START, {
            originalEvent: event,
            action
          }) === false) {
            return;
          }
          event.preventDefault();
          this.action = action;
          this.cropping = false;
          if (action === ACTION_CROP) {
            this.cropping = true;
            addClass(this.dragBox, CLASS_MODAL);
          }
        },
        cropMove: function cropMove(event) {
          var action = this.action;
          if (this.disabled || !action) {
            return;
          }
          var pointers = this.pointers;
          event.preventDefault();
          if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
            originalEvent: event,
            action
          }) === false) {
            return;
          }
          if (event.changedTouches) {
            forEach(event.changedTouches, function(touch) {
              assign2(pointers[touch.identifier] || {}, getPointer(touch, true));
            });
          } else {
            assign2(pointers[event.pointerId || 0] || {}, getPointer(event, true));
          }
          this.change(event);
        },
        cropEnd: function cropEnd(event) {
          if (this.disabled) {
            return;
          }
          var action = this.action, pointers = this.pointers;
          if (event.changedTouches) {
            forEach(event.changedTouches, function(touch) {
              delete pointers[touch.identifier];
            });
          } else {
            delete pointers[event.pointerId || 0];
          }
          if (!action) {
            return;
          }
          event.preventDefault();
          if (!Object.keys(pointers).length) {
            this.action = "";
          }
          if (this.cropping) {
            this.cropping = false;
            toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
          }
          dispatchEvent(this.element, EVENT_CROP_END, {
            originalEvent: event,
            action
          });
        }
      };
      var change = {
        change: function change2(event) {
          var options = this.options, canvasData = this.canvasData, containerData = this.containerData, cropBoxData = this.cropBoxData, pointers = this.pointers;
          var action = this.action;
          var aspectRatio = options.aspectRatio;
          var left = cropBoxData.left, top = cropBoxData.top, width = cropBoxData.width, height = cropBoxData.height;
          var right = left + width;
          var bottom = top + height;
          var minLeft = 0;
          var minTop = 0;
          var maxWidth = containerData.width;
          var maxHeight = containerData.height;
          var renderable = true;
          var offset;
          if (!aspectRatio && event.shiftKey) {
            aspectRatio = width && height ? width / height : 1;
          }
          if (this.limited) {
            minLeft = cropBoxData.minLeft;
            minTop = cropBoxData.minTop;
            maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
            maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
          }
          var pointer = pointers[Object.keys(pointers)[0]];
          var range = {
            x: pointer.endX - pointer.startX,
            y: pointer.endY - pointer.startY
          };
          var check = function check2(side) {
            switch (side) {
              case ACTION_EAST:
                if (right + range.x > maxWidth) {
                  range.x = maxWidth - right;
                }
                break;
              case ACTION_WEST:
                if (left + range.x < minLeft) {
                  range.x = minLeft - left;
                }
                break;
              case ACTION_NORTH:
                if (top + range.y < minTop) {
                  range.y = minTop - top;
                }
                break;
              case ACTION_SOUTH:
                if (bottom + range.y > maxHeight) {
                  range.y = maxHeight - bottom;
                }
                break;
            }
          };
          switch (action) {
            // Move crop box
            case ACTION_ALL:
              left += range.x;
              top += range.y;
              break;
            // Resize crop box
            case ACTION_EAST:
              if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                renderable = false;
                break;
              }
              check(ACTION_EAST);
              width += range.x;
              if (width < 0) {
                action = ACTION_WEST;
                width = -width;
                left -= width;
              }
              if (aspectRatio) {
                height = width / aspectRatio;
                top += (cropBoxData.height - height) / 2;
              }
              break;
            case ACTION_NORTH:
              if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                renderable = false;
                break;
              }
              check(ACTION_NORTH);
              height -= range.y;
              top += range.y;
              if (height < 0) {
                action = ACTION_SOUTH;
                height = -height;
                top -= height;
              }
              if (aspectRatio) {
                width = height * aspectRatio;
                left += (cropBoxData.width - width) / 2;
              }
              break;
            case ACTION_WEST:
              if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                renderable = false;
                break;
              }
              check(ACTION_WEST);
              width -= range.x;
              left += range.x;
              if (width < 0) {
                action = ACTION_EAST;
                width = -width;
                left -= width;
              }
              if (aspectRatio) {
                height = width / aspectRatio;
                top += (cropBoxData.height - height) / 2;
              }
              break;
            case ACTION_SOUTH:
              if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                renderable = false;
                break;
              }
              check(ACTION_SOUTH);
              height += range.y;
              if (height < 0) {
                action = ACTION_NORTH;
                height = -height;
                top -= height;
              }
              if (aspectRatio) {
                width = height * aspectRatio;
                left += (cropBoxData.width - width) / 2;
              }
              break;
            case ACTION_NORTH_EAST:
              if (aspectRatio) {
                if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
                  renderable = false;
                  break;
                }
                check(ACTION_NORTH);
                height -= range.y;
                top += range.y;
                width = height * aspectRatio;
              } else {
                check(ACTION_NORTH);
                check(ACTION_EAST);
                if (range.x >= 0) {
                  if (right < maxWidth) {
                    width += range.x;
                  } else if (range.y <= 0 && top <= minTop) {
                    renderable = false;
                  }
                } else {
                  width += range.x;
                }
                if (range.y <= 0) {
                  if (top > minTop) {
                    height -= range.y;
                    top += range.y;
                  }
                } else {
                  height -= range.y;
                  top += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_SOUTH_WEST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_NORTH_WEST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_SOUTH_EAST;
                height = -height;
                top -= height;
              }
              break;
            case ACTION_NORTH_WEST:
              if (aspectRatio) {
                if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
                  renderable = false;
                  break;
                }
                check(ACTION_NORTH);
                height -= range.y;
                top += range.y;
                width = height * aspectRatio;
                left += cropBoxData.width - width;
              } else {
                check(ACTION_NORTH);
                check(ACTION_WEST);
                if (range.x <= 0) {
                  if (left > minLeft) {
                    width -= range.x;
                    left += range.x;
                  } else if (range.y <= 0 && top <= minTop) {
                    renderable = false;
                  }
                } else {
                  width -= range.x;
                  left += range.x;
                }
                if (range.y <= 0) {
                  if (top > minTop) {
                    height -= range.y;
                    top += range.y;
                  }
                } else {
                  height -= range.y;
                  top += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_SOUTH_EAST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_NORTH_EAST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_SOUTH_WEST;
                height = -height;
                top -= height;
              }
              break;
            case ACTION_SOUTH_WEST:
              if (aspectRatio) {
                if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
                  renderable = false;
                  break;
                }
                check(ACTION_WEST);
                width -= range.x;
                left += range.x;
                height = width / aspectRatio;
              } else {
                check(ACTION_SOUTH);
                check(ACTION_WEST);
                if (range.x <= 0) {
                  if (left > minLeft) {
                    width -= range.x;
                    left += range.x;
                  } else if (range.y >= 0 && bottom >= maxHeight) {
                    renderable = false;
                  }
                } else {
                  width -= range.x;
                  left += range.x;
                }
                if (range.y >= 0) {
                  if (bottom < maxHeight) {
                    height += range.y;
                  }
                } else {
                  height += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_NORTH_EAST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_SOUTH_EAST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_NORTH_WEST;
                height = -height;
                top -= height;
              }
              break;
            case ACTION_SOUTH_EAST:
              if (aspectRatio) {
                if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
                  renderable = false;
                  break;
                }
                check(ACTION_EAST);
                width += range.x;
                height = width / aspectRatio;
              } else {
                check(ACTION_SOUTH);
                check(ACTION_EAST);
                if (range.x >= 0) {
                  if (right < maxWidth) {
                    width += range.x;
                  } else if (range.y >= 0 && bottom >= maxHeight) {
                    renderable = false;
                  }
                } else {
                  width += range.x;
                }
                if (range.y >= 0) {
                  if (bottom < maxHeight) {
                    height += range.y;
                  }
                } else {
                  height += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_NORTH_WEST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_SOUTH_WEST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_NORTH_EAST;
                height = -height;
                top -= height;
              }
              break;
            // Move canvas
            case ACTION_MOVE:
              this.move(range.x, range.y);
              renderable = false;
              break;
            // Zoom canvas
            case ACTION_ZOOM:
              this.zoom(getMaxZoomRatio(pointers), event);
              renderable = false;
              break;
            // Create crop box
            case ACTION_CROP:
              if (!range.x || !range.y) {
                renderable = false;
                break;
              }
              offset = getOffset(this.cropper);
              left = pointer.startX - offset.left;
              top = pointer.startY - offset.top;
              width = cropBoxData.minWidth;
              height = cropBoxData.minHeight;
              if (range.x > 0) {
                action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
              } else if (range.x < 0) {
                left -= width;
                action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
              }
              if (range.y < 0) {
                top -= height;
              }
              if (!this.cropped) {
                removeClass(this.cropBox, CLASS_HIDDEN);
                this.cropped = true;
                if (this.limited) {
                  this.limitCropBox(true, true);
                }
              }
              break;
          }
          if (renderable) {
            cropBoxData.width = width;
            cropBoxData.height = height;
            cropBoxData.left = left;
            cropBoxData.top = top;
            this.action = action;
            this.renderCropBox();
          }
          forEach(pointers, function(p) {
            p.startX = p.endX;
            p.startY = p.endY;
          });
        }
      };
      var methods = {
        // Show the crop box manually
        crop: function crop() {
          if (this.ready && !this.cropped && !this.disabled) {
            this.cropped = true;
            this.limitCropBox(true, true);
            if (this.options.modal) {
              addClass(this.dragBox, CLASS_MODAL);
            }
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.setCropBoxData(this.initialCropBoxData);
          }
          return this;
        },
        // Reset the image and crop box to their initial states
        reset: function reset() {
          if (this.ready && !this.disabled) {
            this.imageData = assign2({}, this.initialImageData);
            this.canvasData = assign2({}, this.initialCanvasData);
            this.cropBoxData = assign2({}, this.initialCropBoxData);
            this.renderCanvas();
            if (this.cropped) {
              this.renderCropBox();
            }
          }
          return this;
        },
        // Clear the crop box
        clear: function clear() {
          if (this.cropped && !this.disabled) {
            assign2(this.cropBoxData, {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            });
            this.cropped = false;
            this.renderCropBox();
            this.limitCanvas(true, true);
            this.renderCanvas();
            removeClass(this.dragBox, CLASS_MODAL);
            addClass(this.cropBox, CLASS_HIDDEN);
          }
          return this;
        },
        /**
         * Replace the image's src and rebuild the cropper
         * @param {string} url - The new URL.
         * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
         * @returns {Cropper} this
         */
        replace: function replace(url) {
          var hasSameSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          if (!this.disabled && url) {
            if (this.isImg) {
              this.element.src = url;
            }
            if (hasSameSize) {
              this.url = url;
              this.image.src = url;
              if (this.ready) {
                this.viewBoxImage.src = url;
                forEach(this.previews, function(element) {
                  element.getElementsByTagName("img")[0].src = url;
                });
              }
            } else {
              if (this.isImg) {
                this.replaced = true;
              }
              this.options.data = null;
              this.uncreate();
              this.load(url);
            }
          }
          return this;
        },
        // Enable (unfreeze) the cropper
        enable: function enable() {
          if (this.ready && this.disabled) {
            this.disabled = false;
            removeClass(this.cropper, CLASS_DISABLED);
          }
          return this;
        },
        // Disable (freeze) the cropper
        disable: function disable() {
          if (this.ready && !this.disabled) {
            this.disabled = true;
            addClass(this.cropper, CLASS_DISABLED);
          }
          return this;
        },
        /**
         * Destroy the cropper and remove the instance from the image
         * @returns {Cropper} this
         */
        destroy: function destroy() {
          var element = this.element;
          if (!element[NAMESPACE]) {
            return this;
          }
          element[NAMESPACE] = void 0;
          if (this.isImg && this.replaced) {
            element.src = this.originalUrl;
          }
          this.uncreate();
          return this;
        },
        /**
         * Move the canvas with relative offsets
         * @param {number} offsetX - The relative offset distance on the x-axis.
         * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
         * @returns {Cropper} this
         */
        move: function move(offsetX) {
          var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : offsetX;
          var _this$canvasData = this.canvasData, left = _this$canvasData.left, top = _this$canvasData.top;
          return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
        },
        /**
         * Move the canvas to an absolute point
         * @param {number} x - The x-axis coordinate.
         * @param {number} [y=x] - The y-axis coordinate.
         * @returns {Cropper} this
         */
        moveTo: function moveTo(x) {
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
          var canvasData = this.canvasData;
          var changed = false;
          x = Number(x);
          y = Number(y);
          if (this.ready && !this.disabled && this.options.movable) {
            if (isNumber(x)) {
              canvasData.left = x;
              changed = true;
            }
            if (isNumber(y)) {
              canvasData.top = y;
              changed = true;
            }
            if (changed) {
              this.renderCanvas(true);
            }
          }
          return this;
        },
        /**
         * Zoom the canvas with a relative ratio
         * @param {number} ratio - The target ratio.
         * @param {Event} _originalEvent - The original event if any.
         * @returns {Cropper} this
         */
        zoom: function zoom(ratio, _originalEvent) {
          var canvasData = this.canvasData;
          ratio = Number(ratio);
          if (ratio < 0) {
            ratio = 1 / (1 - ratio);
          } else {
            ratio = 1 + ratio;
          }
          return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
        },
        /**
         * Zoom the canvas to an absolute ratio
         * @param {number} ratio - The target ratio.
         * @param {Object} pivot - The zoom pivot point coordinate.
         * @param {Event} _originalEvent - The original event if any.
         * @returns {Cropper} this
         */
        zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
          var options = this.options, canvasData = this.canvasData;
          var width = canvasData.width, height = canvasData.height, naturalWidth = canvasData.naturalWidth, naturalHeight = canvasData.naturalHeight;
          ratio = Number(ratio);
          if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
            var newWidth = naturalWidth * ratio;
            var newHeight = naturalHeight * ratio;
            if (dispatchEvent(this.element, EVENT_ZOOM, {
              ratio,
              oldRatio: width / naturalWidth,
              originalEvent: _originalEvent
            }) === false) {
              return this;
            }
            if (_originalEvent) {
              var pointers = this.pointers;
              var offset = getOffset(this.cropper);
              var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
                pageX: _originalEvent.pageX,
                pageY: _originalEvent.pageY
              };
              canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
              canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
            } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
              canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
              canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
            } else {
              canvasData.left -= (newWidth - width) / 2;
              canvasData.top -= (newHeight - height) / 2;
            }
            canvasData.width = newWidth;
            canvasData.height = newHeight;
            this.renderCanvas(true);
          }
          return this;
        },
        /**
         * Rotate the canvas with a relative degree
         * @param {number} degree - The rotate degree.
         * @returns {Cropper} this
         */
        rotate: function rotate(degree) {
          return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
        },
        /**
         * Rotate the canvas to an absolute degree
         * @param {number} degree - The rotate degree.
         * @returns {Cropper} this
         */
        rotateTo: function rotateTo(degree) {
          degree = Number(degree);
          if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
            this.imageData.rotate = degree % 360;
            this.renderCanvas(true, true);
          }
          return this;
        },
        /**
         * Scale the image on the x-axis.
         * @param {number} scaleX - The scale ratio on the x-axis.
         * @returns {Cropper} this
         */
        scaleX: function scaleX(_scaleX) {
          var scaleY = this.imageData.scaleY;
          return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
        },
        /**
         * Scale the image on the y-axis.
         * @param {number} scaleY - The scale ratio on the y-axis.
         * @returns {Cropper} this
         */
        scaleY: function scaleY(_scaleY) {
          var scaleX = this.imageData.scaleX;
          return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
        },
        /**
         * Scale the image
         * @param {number} scaleX - The scale ratio on the x-axis.
         * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
         * @returns {Cropper} this
         */
        scale: function scale(scaleX) {
          var scaleY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX;
          var imageData = this.imageData;
          var transformed = false;
          scaleX = Number(scaleX);
          scaleY = Number(scaleY);
          if (this.ready && !this.disabled && this.options.scalable) {
            if (isNumber(scaleX)) {
              imageData.scaleX = scaleX;
              transformed = true;
            }
            if (isNumber(scaleY)) {
              imageData.scaleY = scaleY;
              transformed = true;
            }
            if (transformed) {
              this.renderCanvas(true, true);
            }
          }
          return this;
        },
        /**
         * Get the cropped area position and size data (base on the original image)
         * @param {boolean} [rounded=false] - Indicate if round the data values or not.
         * @returns {Object} The result cropped data.
         */
        getData: function getData2() {
          var rounded = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
          var options = this.options, imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
          var data;
          if (this.ready && this.cropped) {
            data = {
              x: cropBoxData.left - canvasData.left,
              y: cropBoxData.top - canvasData.top,
              width: cropBoxData.width,
              height: cropBoxData.height
            };
            var ratio = imageData.width / imageData.naturalWidth;
            forEach(data, function(n, i) {
              data[i] = n / ratio;
            });
            if (rounded) {
              var bottom = Math.round(data.y + data.height);
              var right = Math.round(data.x + data.width);
              data.x = Math.round(data.x);
              data.y = Math.round(data.y);
              data.width = right - data.x;
              data.height = bottom - data.y;
            }
          } else {
            data = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
          }
          if (options.rotatable) {
            data.rotate = imageData.rotate || 0;
          }
          if (options.scalable) {
            data.scaleX = imageData.scaleX || 1;
            data.scaleY = imageData.scaleY || 1;
          }
          return data;
        },
        /**
         * Set the cropped area position and size with new data
         * @param {Object} data - The new data.
         * @returns {Cropper} this
         */
        setData: function setData2(data) {
          var options = this.options, imageData = this.imageData, canvasData = this.canvasData;
          var cropBoxData = {};
          if (this.ready && !this.disabled && isPlainObject(data)) {
            var transformed = false;
            if (options.rotatable) {
              if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
                imageData.rotate = data.rotate;
                transformed = true;
              }
            }
            if (options.scalable) {
              if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
                imageData.scaleX = data.scaleX;
                transformed = true;
              }
              if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
                imageData.scaleY = data.scaleY;
                transformed = true;
              }
            }
            if (transformed) {
              this.renderCanvas(true, true);
            }
            var ratio = imageData.width / imageData.naturalWidth;
            if (isNumber(data.x)) {
              cropBoxData.left = data.x * ratio + canvasData.left;
            }
            if (isNumber(data.y)) {
              cropBoxData.top = data.y * ratio + canvasData.top;
            }
            if (isNumber(data.width)) {
              cropBoxData.width = data.width * ratio;
            }
            if (isNumber(data.height)) {
              cropBoxData.height = data.height * ratio;
            }
            this.setCropBoxData(cropBoxData);
          }
          return this;
        },
        /**
         * Get the container size data.
         * @returns {Object} The result container data.
         */
        getContainerData: function getContainerData() {
          return this.ready ? assign2({}, this.containerData) : {};
        },
        /**
         * Get the image position and size data.
         * @returns {Object} The result image data.
         */
        getImageData: function getImageData() {
          return this.sized ? assign2({}, this.imageData) : {};
        },
        /**
         * Get the canvas position and size data.
         * @returns {Object} The result canvas data.
         */
        getCanvasData: function getCanvasData() {
          var canvasData = this.canvasData;
          var data = {};
          if (this.ready) {
            forEach(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(n) {
              data[n] = canvasData[n];
            });
          }
          return data;
        },
        /**
         * Set the canvas position and size with new data.
         * @param {Object} data - The new canvas data.
         * @returns {Cropper} this
         */
        setCanvasData: function setCanvasData(data) {
          var canvasData = this.canvasData;
          var aspectRatio = canvasData.aspectRatio;
          if (this.ready && !this.disabled && isPlainObject(data)) {
            if (isNumber(data.left)) {
              canvasData.left = data.left;
            }
            if (isNumber(data.top)) {
              canvasData.top = data.top;
            }
            if (isNumber(data.width)) {
              canvasData.width = data.width;
              canvasData.height = data.width / aspectRatio;
            } else if (isNumber(data.height)) {
              canvasData.height = data.height;
              canvasData.width = data.height * aspectRatio;
            }
            this.renderCanvas(true);
          }
          return this;
        },
        /**
         * Get the crop box position and size data.
         * @returns {Object} The result crop box data.
         */
        getCropBoxData: function getCropBoxData() {
          var cropBoxData = this.cropBoxData;
          var data;
          if (this.ready && this.cropped) {
            data = {
              left: cropBoxData.left,
              top: cropBoxData.top,
              width: cropBoxData.width,
              height: cropBoxData.height
            };
          }
          return data || {};
        },
        /**
         * Set the crop box position and size with new data.
         * @param {Object} data - The new crop box data.
         * @returns {Cropper} this
         */
        setCropBoxData: function setCropBoxData(data) {
          var cropBoxData = this.cropBoxData;
          var aspectRatio = this.options.aspectRatio;
          var widthChanged;
          var heightChanged;
          if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
            if (isNumber(data.left)) {
              cropBoxData.left = data.left;
            }
            if (isNumber(data.top)) {
              cropBoxData.top = data.top;
            }
            if (isNumber(data.width) && data.width !== cropBoxData.width) {
              widthChanged = true;
              cropBoxData.width = data.width;
            }
            if (isNumber(data.height) && data.height !== cropBoxData.height) {
              heightChanged = true;
              cropBoxData.height = data.height;
            }
            if (aspectRatio) {
              if (widthChanged) {
                cropBoxData.height = cropBoxData.width / aspectRatio;
              } else if (heightChanged) {
                cropBoxData.width = cropBoxData.height * aspectRatio;
              }
            }
            this.renderCropBox();
          }
          return this;
        },
        /**
         * Get a canvas drawn the cropped image.
         * @param {Object} [options={}] - The config options.
         * @returns {HTMLCanvasElement} - The result canvas.
         */
        getCroppedCanvas: function getCroppedCanvas() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (!this.ready || !window.HTMLCanvasElement) {
            return null;
          }
          var canvasData = this.canvasData;
          var source = getSourceCanvas(this.image, this.imageData, canvasData, options);
          if (!this.cropped) {
            return source;
          }
          var _this$getData = this.getData(options.rounded), initialX = _this$getData.x, initialY = _this$getData.y, initialWidth = _this$getData.width, initialHeight = _this$getData.height;
          var ratio = source.width / Math.floor(canvasData.naturalWidth);
          if (ratio !== 1) {
            initialX *= ratio;
            initialY *= ratio;
            initialWidth *= ratio;
            initialHeight *= ratio;
          }
          var aspectRatio = initialWidth / initialHeight;
          var maxSizes = getAdjustedSizes({
            aspectRatio,
            width: options.maxWidth || Infinity,
            height: options.maxHeight || Infinity
          });
          var minSizes = getAdjustedSizes({
            aspectRatio,
            width: options.minWidth || 0,
            height: options.minHeight || 0
          }, "cover");
          var _getAdjustedSizes = getAdjustedSizes({
            aspectRatio,
            width: options.width || (ratio !== 1 ? source.width : initialWidth),
            height: options.height || (ratio !== 1 ? source.height : initialHeight)
          }), width = _getAdjustedSizes.width, height = _getAdjustedSizes.height;
          width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
          height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");
          canvas.width = normalizeDecimalNumber(width);
          canvas.height = normalizeDecimalNumber(height);
          context.fillStyle = options.fillColor || "transparent";
          context.fillRect(0, 0, width, height);
          var _options$imageSmoothi = options.imageSmoothingEnabled, imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi, imageSmoothingQuality = options.imageSmoothingQuality;
          context.imageSmoothingEnabled = imageSmoothingEnabled;
          if (imageSmoothingQuality) {
            context.imageSmoothingQuality = imageSmoothingQuality;
          }
          var sourceWidth = source.width;
          var sourceHeight = source.height;
          var srcX = initialX;
          var srcY = initialY;
          var srcWidth;
          var srcHeight;
          var dstX;
          var dstY;
          var dstWidth;
          var dstHeight;
          if (srcX <= -initialWidth || srcX > sourceWidth) {
            srcX = 0;
            srcWidth = 0;
            dstX = 0;
            dstWidth = 0;
          } else if (srcX <= 0) {
            dstX = -srcX;
            srcX = 0;
            srcWidth = Math.min(sourceWidth, initialWidth + srcX);
            dstWidth = srcWidth;
          } else if (srcX <= sourceWidth) {
            dstX = 0;
            srcWidth = Math.min(initialWidth, sourceWidth - srcX);
            dstWidth = srcWidth;
          }
          if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
            srcY = 0;
            srcHeight = 0;
            dstY = 0;
            dstHeight = 0;
          } else if (srcY <= 0) {
            dstY = -srcY;
            srcY = 0;
            srcHeight = Math.min(sourceHeight, initialHeight + srcY);
            dstHeight = srcHeight;
          } else if (srcY <= sourceHeight) {
            dstY = 0;
            srcHeight = Math.min(initialHeight, sourceHeight - srcY);
            dstHeight = srcHeight;
          }
          var params = [srcX, srcY, srcWidth, srcHeight];
          if (dstWidth > 0 && dstHeight > 0) {
            var scale = width / initialWidth;
            params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
          }
          context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function(param) {
            return Math.floor(normalizeDecimalNumber(param));
          }))));
          return canvas;
        },
        /**
         * Change the aspect ratio of the crop box.
         * @param {number} aspectRatio - The new aspect ratio.
         * @returns {Cropper} this
         */
        setAspectRatio: function setAspectRatio(aspectRatio) {
          var options = this.options;
          if (!this.disabled && !isUndefined(aspectRatio)) {
            options.aspectRatio = Math.max(0, aspectRatio) || NaN;
            if (this.ready) {
              this.initCropBox();
              if (this.cropped) {
                this.renderCropBox();
              }
            }
          }
          return this;
        },
        /**
         * Change the drag mode.
         * @param {string} mode - The new drag mode.
         * @returns {Cropper} this
         */
        setDragMode: function setDragMode(mode) {
          var options = this.options, dragBox = this.dragBox, face = this.face;
          if (this.ready && !this.disabled) {
            var croppable = mode === DRAG_MODE_CROP;
            var movable = options.movable && mode === DRAG_MODE_MOVE;
            mode = croppable || movable ? mode : DRAG_MODE_NONE;
            options.dragMode = mode;
            setData(dragBox, DATA_ACTION, mode);
            toggleClass(dragBox, CLASS_CROP, croppable);
            toggleClass(dragBox, CLASS_MOVE, movable);
            if (!options.cropBoxMovable) {
              setData(face, DATA_ACTION, mode);
              toggleClass(face, CLASS_CROP, croppable);
              toggleClass(face, CLASS_MOVE, movable);
            }
          }
          return this;
        }
      };
      var AnotherCropper = WINDOW.Cropper;
      var Cropper2 = /* @__PURE__ */ (function() {
        function Cropper3(element) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          _classCallCheck(this, Cropper3);
          if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
            throw new Error("The first argument is required and must be an <img> or <canvas> element.");
          }
          this.element = element;
          this.options = assign2({}, DEFAULTS, isPlainObject(options) && options);
          this.cropped = false;
          this.disabled = false;
          this.pointers = {};
          this.ready = false;
          this.reloading = false;
          this.replaced = false;
          this.sized = false;
          this.sizing = false;
          this.init();
        }
        return _createClass(Cropper3, [{
          key: "init",
          value: function init() {
            var element = this.element;
            var tagName = element.tagName.toLowerCase();
            var url;
            if (element[NAMESPACE]) {
              return;
            }
            element[NAMESPACE] = this;
            if (tagName === "img") {
              this.isImg = true;
              url = element.getAttribute("src") || "";
              this.originalUrl = url;
              if (!url) {
                return;
              }
              url = element.src;
            } else if (tagName === "canvas" && window.HTMLCanvasElement) {
              url = element.toDataURL();
            }
            this.load(url);
          }
        }, {
          key: "load",
          value: function load(url) {
            var _this = this;
            if (!url) {
              return;
            }
            this.url = url;
            this.imageData = {};
            var element = this.element, options = this.options;
            if (!options.rotatable && !options.scalable) {
              options.checkOrientation = false;
            }
            if (!options.checkOrientation || !window.ArrayBuffer) {
              this.clone();
              return;
            }
            if (REGEXP_DATA_URL.test(url)) {
              if (REGEXP_DATA_URL_JPEG.test(url)) {
                this.read(dataURLToArrayBuffer(url));
              } else {
                this.clone();
              }
              return;
            }
            var xhr = new XMLHttpRequest();
            var clone = this.clone.bind(this);
            this.reloading = true;
            this.xhr = xhr;
            xhr.onabort = clone;
            xhr.onerror = clone;
            xhr.ontimeout = clone;
            xhr.onprogress = function() {
              if (xhr.getResponseHeader("content-type") !== MIME_TYPE_JPEG) {
                xhr.abort();
              }
            };
            xhr.onload = function() {
              _this.read(xhr.response);
            };
            xhr.onloadend = function() {
              _this.reloading = false;
              _this.xhr = null;
            };
            if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
              url = addTimestamp(url);
            }
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.withCredentials = element.crossOrigin === "use-credentials";
            xhr.send();
          }
        }, {
          key: "read",
          value: function read(arrayBuffer) {
            var options = this.options, imageData = this.imageData;
            var orientation = resetAndGetOrientation(arrayBuffer);
            var rotate = 0;
            var scaleX = 1;
            var scaleY = 1;
            if (orientation > 1) {
              this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
              var _parseOrientation = parseOrientation(orientation);
              rotate = _parseOrientation.rotate;
              scaleX = _parseOrientation.scaleX;
              scaleY = _parseOrientation.scaleY;
            }
            if (options.rotatable) {
              imageData.rotate = rotate;
            }
            if (options.scalable) {
              imageData.scaleX = scaleX;
              imageData.scaleY = scaleY;
            }
            this.clone();
          }
        }, {
          key: "clone",
          value: function clone() {
            var element = this.element, url = this.url;
            var crossOrigin = element.crossOrigin;
            var crossOriginUrl = url;
            if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
              if (!crossOrigin) {
                crossOrigin = "anonymous";
              }
              crossOriginUrl = addTimestamp(url);
            }
            this.crossOrigin = crossOrigin;
            this.crossOriginUrl = crossOriginUrl;
            var image = document.createElement("img");
            if (crossOrigin) {
              image.crossOrigin = crossOrigin;
            }
            image.src = crossOriginUrl || url;
            image.alt = element.alt || "The image to crop";
            this.image = image;
            image.onload = this.start.bind(this);
            image.onerror = this.stop.bind(this);
            addClass(image, CLASS_HIDE);
            element.parentNode.insertBefore(image, element.nextSibling);
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;
            var image = this.image;
            image.onload = null;
            image.onerror = null;
            this.sizing = true;
            var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
            var done = function done2(naturalWidth, naturalHeight) {
              assign2(_this2.imageData, {
                naturalWidth,
                naturalHeight,
                aspectRatio: naturalWidth / naturalHeight
              });
              _this2.initialImageData = assign2({}, _this2.imageData);
              _this2.sizing = false;
              _this2.sized = true;
              _this2.build();
            };
            if (image.naturalWidth && !isIOSWebKit) {
              done(image.naturalWidth, image.naturalHeight);
              return;
            }
            var sizingImage = document.createElement("img");
            var body = document.body || document.documentElement;
            this.sizingImage = sizingImage;
            sizingImage.onload = function() {
              done(sizingImage.width, sizingImage.height);
              if (!isIOSWebKit) {
                body.removeChild(sizingImage);
              }
            };
            sizingImage.src = image.src;
            if (!isIOSWebKit) {
              sizingImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
              body.appendChild(sizingImage);
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            var image = this.image;
            image.onload = null;
            image.onerror = null;
            image.parentNode.removeChild(image);
            this.image = null;
          }
        }, {
          key: "build",
          value: function build() {
            if (!this.sized || this.ready) {
              return;
            }
            var element = this.element, options = this.options, image = this.image;
            var container = element.parentNode;
            var template = document.createElement("div");
            template.innerHTML = TEMPLATE;
            var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
            var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
            var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
            var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
            var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
            this.container = container;
            this.cropper = cropper;
            this.canvas = canvas;
            this.dragBox = dragBox;
            this.cropBox = cropBox;
            this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
            this.face = face;
            canvas.appendChild(image);
            addClass(element, CLASS_HIDDEN);
            container.insertBefore(cropper, element.nextSibling);
            removeClass(image, CLASS_HIDE);
            this.initPreview();
            this.bind();
            options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
            options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
            options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
            addClass(cropBox, CLASS_HIDDEN);
            if (!options.guides) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
            }
            if (!options.center) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
            }
            if (options.background) {
              addClass(cropper, "".concat(NAMESPACE, "-bg"));
            }
            if (!options.highlight) {
              addClass(face, CLASS_INVISIBLE);
            }
            if (options.cropBoxMovable) {
              addClass(face, CLASS_MOVE);
              setData(face, DATA_ACTION, ACTION_ALL);
            }
            if (!options.cropBoxResizable) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
            }
            this.render();
            this.ready = true;
            this.setDragMode(options.dragMode);
            if (options.autoCrop) {
              this.crop();
            }
            this.setData(options.data);
            if (isFunction(options.ready)) {
              addListener(element, EVENT_READY, options.ready, {
                once: true
              });
            }
            dispatchEvent(element, EVENT_READY);
          }
        }, {
          key: "unbuild",
          value: function unbuild() {
            if (!this.ready) {
              return;
            }
            this.ready = false;
            this.unbind();
            this.resetPreview();
            var parentNode = this.cropper.parentNode;
            if (parentNode) {
              parentNode.removeChild(this.cropper);
            }
            removeClass(this.element, CLASS_HIDDEN);
          }
        }, {
          key: "uncreate",
          value: function uncreate() {
            if (this.ready) {
              this.unbuild();
              this.ready = false;
              this.cropped = false;
            } else if (this.sizing) {
              this.sizingImage.onload = null;
              this.sizing = false;
              this.sized = false;
            } else if (this.reloading) {
              this.xhr.onabort = null;
              this.xhr.abort();
            } else if (this.image) {
              this.stop();
            }
          }
          /**
           * Get the no conflict cropper class.
           * @returns {Cropper} The cropper class.
           */
        }], [{
          key: "noConflict",
          value: function noConflict() {
            window.Cropper = AnotherCropper;
            return Cropper3;
          }
          /**
           * Change the default options.
           * @param {Object} options - The new default options.
           */
        }, {
          key: "setDefaults",
          value: function setDefaults(options) {
            assign2(DEFAULTS, isPlainObject(options) && options);
          }
        }]);
      })();
      assign2(Cropper2.prototype, render2, preview, events, handlers, change, methods);
      return Cropper2;
    }));
  }
});

// themes/heyfam-theme/src/interactivity/router.js
import { store, getContext } from "@wordpress/interactivity";
store("heyfam/router", {
  actions: {
    *navigate(e) {
      const a = e?.target?.closest("a");
      if (!a || a.target === "_blank" || e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      window.location.href = a.href;
    }
  }
});

// themes/heyfam-theme/src/interactivity/composer.js
import { store as store2, getContext as getContext2 } from "@wordpress/interactivity";

// themes/heyfam-theme/src/lib/media.js
var ACCEPT_MIME_RE = /^image\/(jpeg|png|gif|webp|avif|heic|heif)$/i;
var HEIC_EXT_RE = /\.(heic|heif)$/i;
var ACCEPT_EXT_RE = /\.(jpe?g|png|gif|webp|avif|heic|heif)$/i;
function acceptable(file) {
  if (!file) return false;
  if (ACCEPT_MIME_RE.test(file.type || "")) return true;
  return ACCEPT_EXT_RE.test(file.name || "");
}
function isHeic(file) {
  if (!file) return false;
  if (HEIC_EXT_RE.test(file.name || "")) return true;
  return /heif|heic/i.test(file.type || "");
}

// themes/heyfam-theme/src/interactivity/composer.js
var MAX_FILES = 10;
var MAX_BYTES = 25 * 1024 * 1024;
var MIN_OPTIONS = 2;
var MAX_OPTIONS = 6;
var nextOptionId = 1;
var newOption = (placeholder) => ({ id: nextOptionId++, text: "", placeholder });
var initialOptions = () => [
  newOption("Option 1"),
  newOption("Option 2")
];
var blankState = () => ({
  body: "",
  pending: [],
  pollMode: false,
  optionList: initialOptions(),
  closesAt: "",
  anon: false
});
var { state, actions } = store2("heyfam/composer", {
  state: {
    body: "",
    /**
     * Array of { id, file, name, previewUrl, status } where status is
     * 'pending' | 'converting' | 'ready' | 'error'. Previews are
     * `URL.createObjectURL` strings; we revoke them on remove + on submit.
     */
    pending: [],
    submitting: false,
    error: "",
    // Poll-mode state. `optionList` reuses the same shape across
    // mode toggles so the user can iterate without losing typed text.
    pollMode: false,
    optionList: initialOptions(),
    closesAt: "",
    anon: false,
    // Edit mode. `editingPostId` is 0 when composing a new post.
    editorOpen: false,
    editingPostId: 0,
    // Snapshot of inline-compose state captured when the editor opens, so the
    // user's in-progress draft survives a cancel.
    stash: null,
    // For edit mode: `{ id, url, alt }[]` of attachments currently on the post.
    // The user can remove them, which pushes the id onto `removedAttachmentIds`
    // (sent to the server on save).
    existingImages: [],
    removedAttachmentIds: [],
    get hasFiles() {
      return state.pending.length > 0;
    },
    get hasExistingImages() {
      return state.existingImages.length > 0;
    },
    get canSubmit() {
      if (state.submitting) return false;
      if (state.pollMode) {
        if (state.body.trim() === "") return false;
        return state.optionList.filter((o) => o.text.trim() !== "").length >= MIN_OPTIONS;
      }
      return state.body.trim() !== "" || state.pending.some((p) => p.status === "ready") || state.existingImages.length > 0;
    },
    get photoLabel() {
      const n = state.pending.length;
      return n === 0 ? "Add photos" : `${n} photo${n === 1 ? "" : "s"}`;
    },
    get bodyPlaceholder() {
      return state.pollMode ? "Ask a question\u2026" : "Hey fam\u2026";
    },
    get submitLabel() {
      if (state.editingPostId) return "Save";
      return state.pollMode ? "Send poll" : "Send";
    },
    get pollToggleLabel() {
      return state.pollMode ? "\u2190 Back" : "Make it a poll";
    },
    get atMaxOptions() {
      return state.optionList.length >= MAX_OPTIONS;
    },
    get cannotRemove() {
      return state.optionList.length <= MIN_OPTIONS;
    }
  },
  actions: {
    updateBody(e) {
      state.body = e.target.value;
      autoSize(e.target);
    },
    /** Triggered by the <input type="file" multiple> change event. */
    pickPhotos(e) {
      const files = Array.from(e.target.files || []);
      addFiles(files);
      e.target.value = "";
    },
    /** Drag-drop on the composer's drop-zone. */
    onDragOver(e) {
      if (e.dataTransfer?.types?.includes("Files")) {
        e.preventDefault();
        e.currentTarget.classList.add("is-drop-target");
      }
    },
    onDragLeave(e) {
      e.currentTarget.classList.remove("is-drop-target");
    },
    onDrop(e) {
      e.preventDefault();
      e.currentTarget.classList.remove("is-drop-target");
      const files = Array.from(e.dataTransfer?.files || []);
      addFiles(files);
    },
    /** Cmd/Ctrl+V on the body textarea — grab image clipboard items. */
    onPaste(e) {
      const items = Array.from(e.clipboardData?.items || []);
      const files = items.filter((i) => i.kind === "file").map((i) => i.getAsFile()).filter(Boolean);
      if (files.length === 0) return;
      e.preventDefault();
      addFiles(files);
    },
    removeFile() {
      const ctx = getContext2();
      const id = ctx?.item?.id;
      if (id == null) return;
      const idx = state.pending.findIndex((p) => p.id === id);
      if (idx === -1) return;
      const removed = state.pending[idx];
      if (removed.previewUrl) URL.revokeObjectURL(removed.previewUrl);
      state.pending.splice(idx, 1);
    },
    togglePollMode() {
      state.pollMode = !state.pollMode;
      if (state.pollMode) {
        for (const p of state.pending) {
          if (p.previewUrl) URL.revokeObjectURL(p.previewUrl);
        }
        state.pending = [];
        if (state.optionList.length < MIN_OPTIONS) state.optionList = initialOptions();
      }
    },
    addOption() {
      if (state.optionList.length >= MAX_OPTIONS) return;
      const i = state.optionList.length + 1;
      state.optionList.push(newOption(`Option ${i}`));
    },
    removeOption() {
      if (state.optionList.length <= MIN_OPTIONS) return;
      const ctx = getContext2();
      const idx = state.optionList.findIndex((o) => o.id === ctx?.option?.id);
      if (idx === -1) return;
      state.optionList.splice(idx, 1);
    },
    updateOption(e) {
      const ctx = getContext2();
      const opt = state.optionList.find((o) => o.id === ctx?.option?.id);
      if (opt) opt.text = e.target.value;
    },
    updateClosesAt(e) {
      state.closesAt = e.target.value;
    },
    toggleAnon(e) {
      state.anon = e.target.checked;
    },
    /**
     * Populate the composer from an existing post, stashing the inline draft
     * first so cancel restores it. Closes any open per-post menu.
     */
    openEditor(post) {
      if (!post || !post.id) return;
      if (!state.editorOpen) {
        state.stash = {
          body: state.body,
          pending: state.pending,
          pollMode: state.pollMode,
          optionList: state.optionList,
          closesAt: state.closesAt,
          anon: state.anon
        };
      }
      state.body = post.body || "";
      state.pending = [];
      state.removedAttachmentIds = [];
      state.existingImages = (post.images || []).map((i) => ({
        id: i.id,
        url: i.thumb_url || i.url,
        alt: i.alt || ""
      }));
      if (post.poll) {
        state.pollMode = true;
        state.optionList = post.poll.options.map((o) => {
          const id = nextOptionId++;
          return { id, text: o.label || "", placeholder: `Option ${o.index + 1}` };
        });
        while (state.optionList.length < MIN_OPTIONS) {
          state.optionList.push(newOption(`Option ${state.optionList.length + 1}`));
        }
        state.closesAt = post.poll.closes_at ? post.poll.closes_at.slice(0, 16) : "";
        state.anon = !!post.poll.anon;
      } else {
        state.pollMode = false;
        state.optionList = initialOptions();
        state.closesAt = "";
        state.anon = false;
      }
      state.editingPostId = post.id;
      state.error = "";
      state.editorOpen = true;
      document.body.classList.add("heyfam-modal-open");
    },
    closeEditor() {
      for (const p of state.pending) {
        if (p.previewUrl) URL.revokeObjectURL(p.previewUrl);
      }
      const s = state.stash;
      if (s) {
        state.body = s.body;
        state.pending = s.pending;
        state.pollMode = s.pollMode;
        state.optionList = s.optionList;
        state.closesAt = s.closesAt;
        state.anon = s.anon;
      } else {
        Object.assign(state, blankState());
      }
      state.stash = null;
      state.editingPostId = 0;
      state.existingImages = [];
      state.removedAttachmentIds = [];
      state.error = "";
      state.editorOpen = false;
      document.body.classList.remove("heyfam-modal-open");
    },
    /** Remove an already-attached image. Queue its id for server-side delete. */
    removeExistingImage() {
      const ctx = getContext2();
      const id = ctx?.image?.id;
      if (id == null) return;
      const idx = state.existingImages.findIndex((i) => i.id === id);
      if (idx === -1) return;
      state.existingImages.splice(idx, 1);
      state.removedAttachmentIds.push(id);
    },
    onEditorBackdrop(e) {
      if (e.target.classList?.contains("heyfam-modal")) {
        actions.closeEditor();
      }
    },
    *submit(e) {
      e.preventDefault();
      if (!state.canSubmit || state.submitting) return;
      state.submitting = true;
      state.error = "";
      const heyfam = store2("heyfam").state;
      const editingId = state.editingPostId;
      const fd = new FormData();
      fd.append("body", state.body);
      if (state.pollMode) {
        const opts = state.optionList.map((o) => o.text.trim()).filter(Boolean);
        if (opts.length < MIN_OPTIONS) {
          state.error = `A poll needs at least ${MIN_OPTIONS} options.`;
          state.submitting = false;
          return;
        }
        for (const o of opts) fd.append("poll_options[]", o);
        if (state.closesAt) fd.append("poll_closes_at", state.closesAt);
        fd.append("poll_anon", state.anon ? "1" : "0");
      } else {
        const ready = state.pending.filter((p) => p.status === "ready");
        for (const p of ready) fd.append("photos[]", p.file, p.name);
      }
      if (editingId) {
        for (const id of state.removedAttachmentIds) {
          fd.append("remove_attachment_ids[]", String(id));
        }
      }
      const url = editingId ? `${heyfam.apiBase}/${heyfam.famSlug}/post/${editingId}` : `${heyfam.apiBase}/${heyfam.famSlug}/posts`;
      try {
        const r = yield fetch(url, {
          method: "POST",
          credentials: "include",
          headers: { "X-WP-Nonce": heyfam.nonce },
          body: fd
        });
        if (!r.ok) throw new Error("post-failed");
        for (const p of state.pending) {
          if (p.previewUrl) URL.revokeObjectURL(p.previewUrl);
        }
        if (editingId) {
          state.pending = [];
          actions.closeEditor();
        } else {
          state.body = "";
          autoSize(document.querySelector(".heyfam-composer textarea"));
          state.pending = [];
          state.pollMode = false;
          state.optionList = initialOptions();
          state.closesAt = "";
          state.anon = false;
        }
        store2("heyfam/feed").callbacks?.refresh?.(heyfam);
      } catch (err) {
        state.error = editingId ? "Could not save. Try again." : "Could not post. Try again.";
      } finally {
        state.submitting = false;
      }
    }
  }
});
var AUTOSIZE_MAX = 240;
function autoSize(el) {
  if (!el || el.tagName !== "TEXTAREA") return;
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, AUTOSIZE_MAX) + "px";
  el.style.overflowY = el.scrollHeight > AUTOSIZE_MAX ? "auto" : "hidden";
}
async function addFiles(files) {
  const heyfam = store2("heyfam").state;
  let nextId = (state.pending[state.pending.length - 1]?.id ?? 0) + 1;
  for (const file of files) {
    if (state.pending.length >= MAX_FILES) {
      state.error = `Max ${MAX_FILES} photos per post.`;
      break;
    }
    if (!acceptable(file)) {
      state.error = "Only images, please.";
      continue;
    }
    if (file.size > MAX_BYTES) {
      state.error = `${file.name} is too large.`;
      continue;
    }
    const heic = isHeic(file);
    const needsClientConvert = heic && !heyfam.heicSupport;
    const slot = {
      id: nextId++,
      file,
      name: file.name,
      previewUrl: "",
      status: needsClientConvert ? "converting" : "ready"
    };
    try {
      slot.previewUrl = URL.createObjectURL(file);
    } catch {
    }
    state.pending.push(slot);
    if (needsClientConvert) {
      try {
        const { default: heic2any } = await import("./heic2any-LFTOEGVI.js");
        const blob = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.82 });
        const out = Array.isArray(blob) ? blob[0] : blob;
        const converted = new File(
          [out],
          file.name.replace(/\.(heic|heif)$/i, ".jpg"),
          { type: "image/jpeg" }
        );
        const fresh = state.pending.find((p) => p.id === slot.id);
        if (!fresh) continue;
        if (fresh.previewUrl) URL.revokeObjectURL(fresh.previewUrl);
        fresh.file = converted;
        fresh.name = converted.name;
        fresh.previewUrl = URL.createObjectURL(converted);
        fresh.status = "ready";
      } catch (err) {
        const fresh = state.pending.find((p) => p.id === slot.id);
        if (fresh) fresh.status = "error";
        state.error = "Could not read HEIC photo. Convert to JPEG and try again.";
      }
    }
  }
}

// themes/heyfam-theme/src/interactivity/reactions.js
import { store as store3, getContext as getContext3 } from "@wordpress/interactivity";

// node_modules/emoji-picker-element/database.js
function assertNonEmptyString(str) {
  if (typeof str !== "string" || !str) {
    throw new Error("expected a non-empty string, got: " + str);
  }
}
function assertNumber(number) {
  if (typeof number !== "number") {
    throw new Error("expected a number, got: " + number);
  }
}
var DB_VERSION_CURRENT = 1;
var DB_VERSION_INITIAL = 1;
var STORE_EMOJI = "emoji";
var STORE_KEYVALUE = "keyvalue";
var STORE_FAVORITES = "favorites";
var FIELD_TOKENS = "tokens";
var INDEX_TOKENS = "tokens";
var FIELD_UNICODE = "unicode";
var INDEX_COUNT = "count";
var FIELD_GROUP = "group";
var FIELD_ORDER = "order";
var INDEX_GROUP_AND_ORDER = "group-order";
var KEY_ETAG = "eTag";
var KEY_URL = "url";
var KEY_PREFERRED_SKINTONE = "skinTone";
var MODE_READONLY = "readonly";
var MODE_READWRITE = "readwrite";
var INDEX_SKIN_UNICODE = "skinUnicodes";
var FIELD_SKIN_UNICODE = "skinUnicodes";
var DEFAULT_DATA_SOURCE = "https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json";
var DEFAULT_LOCALE = "en";
function uniqBy(arr, func) {
  const set2 = /* @__PURE__ */ new Set();
  const res = [];
  for (const item of arr) {
    const key = func(item);
    if (!set2.has(key)) {
      set2.add(key);
      res.push(item);
    }
  }
  return res;
}
function uniqEmoji(emojis) {
  return uniqBy(emojis, (_) => _.unicode);
}
function initialMigration(db) {
  function createObjectStore(name, keyPath, indexes) {
    const store16 = keyPath ? db.createObjectStore(name, { keyPath }) : db.createObjectStore(name);
    if (indexes) {
      for (const [indexName, [keyPath2, multiEntry]] of Object.entries(indexes)) {
        store16.createIndex(indexName, keyPath2, { multiEntry });
      }
    }
    return store16;
  }
  createObjectStore(STORE_KEYVALUE);
  createObjectStore(
    STORE_EMOJI,
    /* keyPath */
    FIELD_UNICODE,
    {
      [INDEX_TOKENS]: [
        FIELD_TOKENS,
        /* multiEntry */
        true
      ],
      [INDEX_GROUP_AND_ORDER]: [[FIELD_GROUP, FIELD_ORDER]],
      [INDEX_SKIN_UNICODE]: [
        FIELD_SKIN_UNICODE,
        /* multiEntry */
        true
      ]
    }
  );
  createObjectStore(STORE_FAVORITES, void 0, {
    [INDEX_COUNT]: [""]
  });
}
var openIndexedDBRequests = {};
var databaseCache = {};
var onCloseListeners = {};
function handleOpenOrDeleteReq(resolve, reject, req) {
  req.onerror = () => reject(req.error);
  req.onblocked = () => reject(new Error("IDB blocked"));
  req.onsuccess = () => resolve(req.result);
}
async function createDatabase(dbName) {
  const db = await new Promise((resolve, reject) => {
    const req = indexedDB.open(dbName, DB_VERSION_CURRENT);
    openIndexedDBRequests[dbName] = req;
    req.onupgradeneeded = (e) => {
      if (e.oldVersion < DB_VERSION_INITIAL) {
        initialMigration(req.result);
      }
    };
    handleOpenOrDeleteReq(resolve, reject, req);
  });
  db.onclose = () => closeDatabase(dbName);
  return db;
}
function openDatabase(dbName) {
  if (!databaseCache[dbName]) {
    databaseCache[dbName] = createDatabase(dbName);
  }
  return databaseCache[dbName];
}
function dbPromise(db, storeName, readOnlyOrReadWrite, cb) {
  return new Promise((resolve, reject) => {
    const txn = db.transaction(storeName, readOnlyOrReadWrite, { durability: "relaxed" });
    const store16 = typeof storeName === "string" ? txn.objectStore(storeName) : storeName.map((name) => txn.objectStore(name));
    let res;
    cb(store16, txn, (result) => {
      res = result;
    });
    txn.oncomplete = () => resolve(res);
    txn.onerror = () => reject(txn.error);
  });
}
function closeDatabase(dbName) {
  const req = openIndexedDBRequests[dbName];
  const db = req && req.result;
  if (db) {
    db.close();
    const listeners = onCloseListeners[dbName];
    if (listeners) {
      for (const listener of listeners) {
        listener();
      }
    }
  }
  delete openIndexedDBRequests[dbName];
  delete databaseCache[dbName];
  delete onCloseListeners[dbName];
}
function deleteDatabase(dbName) {
  return new Promise((resolve, reject) => {
    closeDatabase(dbName);
    const req = indexedDB.deleteDatabase(dbName);
    handleOpenOrDeleteReq(resolve, reject, req);
  });
}
function addOnCloseListener(dbName, listener) {
  let listeners = onCloseListeners[dbName];
  if (!listeners) {
    listeners = onCloseListeners[dbName] = [];
  }
  listeners.push(listener);
}
var irregularEmoticons = /* @__PURE__ */ new Set([
  ":D",
  "XD",
  ":'D",
  "O:)",
  ":X",
  ":P",
  ";P",
  "XP",
  ":L",
  ":Z",
  ":j",
  "8D",
  "XO",
  "8)",
  ":B",
  ":O",
  ":S",
  ":'o",
  "Dx",
  "X(",
  "D:",
  ":C",
  ">0)",
  ":3",
  "</3",
  "<3",
  "\\M/",
  ":E",
  "8#"
]);
function extractTokens(str) {
  return str.split(/[\s_]+/).map((word) => {
    if (!word.match(/\w/) || irregularEmoticons.has(word)) {
      return word.toLowerCase();
    }
    return word.replace(/[)(:,]/g, "").replace(/’/g, "'").toLowerCase();
  }).filter(Boolean);
}
var MIN_SEARCH_TEXT_LENGTH = 2;
function normalizeTokens(str) {
  return str.filter(Boolean).map((_) => _.toLowerCase()).filter((_) => _.length >= MIN_SEARCH_TEXT_LENGTH);
}
function transformEmojiData(emojiData) {
  const res = emojiData.map(({ annotation, emoticon, group, order, shortcodes, skins, tags, emoji, version }) => {
    const tokens = [...new Set(
      normalizeTokens([
        ...(shortcodes || []).map(extractTokens).flat(),
        ...(tags || []).map(extractTokens).flat(),
        ...extractTokens(annotation),
        emoticon
      ])
    )].sort();
    const res2 = {
      annotation,
      group,
      order,
      tags,
      tokens,
      unicode: emoji,
      version
    };
    if (emoticon) {
      res2.emoticon = emoticon;
    }
    if (shortcodes) {
      res2.shortcodes = shortcodes;
    }
    if (skins) {
      res2.skinTones = [];
      res2.skinUnicodes = [];
      res2.skinVersions = [];
      for (const { tone, emoji: emoji2, version: version2 } of skins) {
        res2.skinTones.push(tone);
        res2.skinUnicodes.push(emoji2);
        res2.skinVersions.push(version2);
      }
    }
    return res2;
  });
  return res;
}
function callStore(store16, method, key, cb) {
  store16[method](key).onsuccess = (e) => cb && cb(e.target.result);
}
function getIDB(store16, key, cb) {
  callStore(store16, "get", key, cb);
}
function getAllIDB(store16, key, cb) {
  callStore(store16, "getAll", key, cb);
}
function commit(txn) {
  if (txn.commit) {
    txn.commit();
  }
}
function minBy(array, func) {
  let minItem = array[0];
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    if (func(minItem) > func(item)) {
      minItem = item;
    }
  }
  return minItem;
}
function findCommonMembers(arrays, uniqByFunc) {
  const shortestArray = minBy(arrays, (_) => _.length);
  const results = [];
  for (const item of shortestArray) {
    if (!arrays.some((array) => array.findIndex((_) => uniqByFunc(_) === uniqByFunc(item)) === -1)) {
      results.push(item);
    }
  }
  return results;
}
async function isEmpty(db) {
  return !await get(db, STORE_KEYVALUE, KEY_URL);
}
async function hasData(db, url, eTag) {
  const [oldETag, oldUrl] = await Promise.all([KEY_ETAG, KEY_URL].map((key) => get(db, STORE_KEYVALUE, key)));
  return oldETag === eTag && oldUrl === url;
}
async function doFullDatabaseScanForSingleResult(db, predicate) {
  const BATCH_SIZE = 50;
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    let lastKey;
    const processNextBatch = () => {
      emojiStore.getAll(lastKey && IDBKeyRange.lowerBound(lastKey, true), BATCH_SIZE).onsuccess = (e) => {
        const results = e.target.result;
        for (const result of results) {
          lastKey = result.unicode;
          if (predicate(result)) {
            return cb(result);
          }
        }
        if (results.length < BATCH_SIZE) {
          return cb();
        }
        processNextBatch();
      };
    };
    processNextBatch();
  });
}
async function loadData(db, emojiData, url, eTag) {
  try {
    const transformedData = transformEmojiData(emojiData);
    await dbPromise(db, [STORE_EMOJI, STORE_KEYVALUE], MODE_READWRITE, ([emojiStore, metaStore], txn) => {
      let oldETag;
      let oldUrl;
      let todo = 0;
      function checkFetched() {
        if (++todo === 2) {
          onFetched();
        }
      }
      function onFetched() {
        if (oldETag === eTag && oldUrl === url) {
          return;
        }
        emojiStore.clear();
        for (const data of transformedData) {
          emojiStore.put(data);
        }
        metaStore.put(eTag, KEY_ETAG);
        metaStore.put(url, KEY_URL);
        commit(txn);
      }
      getIDB(metaStore, KEY_ETAG, (result) => {
        oldETag = result;
        checkFetched();
      });
      getIDB(metaStore, KEY_URL, (result) => {
        oldUrl = result;
        checkFetched();
      });
    });
  } finally {
  }
}
async function getEmojiByGroup(db, group) {
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    const range = IDBKeyRange.bound([group, 0], [group + 1, 0], false, true);
    getAllIDB(emojiStore.index(INDEX_GROUP_AND_ORDER), range, cb);
  });
}
async function getEmojiBySearchQuery(db, query) {
  const tokens = normalizeTokens(extractTokens(query));
  if (!tokens.length) {
    return [];
  }
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => {
    const intermediateResults = [];
    const checkDone = () => {
      if (intermediateResults.length === tokens.length) {
        onDone();
      }
    };
    const onDone = () => {
      const results = findCommonMembers(intermediateResults, (_) => _.unicode);
      cb(results.sort((a, b) => a.order < b.order ? -1 : 1));
    };
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const range = i === tokens.length - 1 ? IDBKeyRange.bound(token, token + "\uFFFF", false, true) : IDBKeyRange.only(token);
      getAllIDB(emojiStore.index(INDEX_TOKENS), range, (result) => {
        intermediateResults.push(result);
        checkDone();
      });
    }
  });
}
async function getEmojiByShortcode(db, shortcode) {
  const emojis = await getEmojiBySearchQuery(db, shortcode);
  if (!emojis.length) {
    const predicate = (_) => (_.shortcodes || []).includes(shortcode.toLowerCase());
    return await doFullDatabaseScanForSingleResult(db, predicate) || null;
  }
  return emojis.filter((_) => {
    const lowerShortcodes = (_.shortcodes || []).map((_2) => _2.toLowerCase());
    return lowerShortcodes.includes(shortcode.toLowerCase());
  })[0] || null;
}
async function getEmojiByUnicode(db, unicode) {
  return dbPromise(db, STORE_EMOJI, MODE_READONLY, (emojiStore, txn, cb) => getIDB(emojiStore, unicode, (result) => {
    if (result) {
      return cb(result);
    }
    getIDB(emojiStore.index(INDEX_SKIN_UNICODE), unicode, (result2) => cb(result2 || null));
  }));
}
function get(db, storeName, key) {
  return dbPromise(db, storeName, MODE_READONLY, (store16, txn, cb) => getIDB(store16, key, cb));
}
function set(db, storeName, key, value) {
  return dbPromise(db, storeName, MODE_READWRITE, (store16, txn) => {
    store16.put(value, key);
    commit(txn);
  });
}
function incrementFavoriteEmojiCount(db, unicode) {
  return dbPromise(db, STORE_FAVORITES, MODE_READWRITE, (store16, txn) => getIDB(store16, unicode, (result) => {
    store16.put((result || 0) + 1, unicode);
    commit(txn);
  }));
}
function getTopFavoriteEmoji(db, customEmojiIndex2, limit) {
  if (limit === 0) {
    return [];
  }
  return dbPromise(db, [STORE_FAVORITES, STORE_EMOJI], MODE_READONLY, ([favoritesStore, emojiStore], txn, cb) => {
    const results = [];
    favoritesStore.index(INDEX_COUNT).openCursor(void 0, "prev").onsuccess = (e) => {
      const cursor = e.target.result;
      if (!cursor) {
        return cb(results);
      }
      function addResult(result) {
        results.push(result);
        if (results.length === limit) {
          return cb(results);
        }
        cursor.continue();
      }
      const unicodeOrName = cursor.primaryKey;
      const custom = customEmojiIndex2.byName(unicodeOrName);
      if (custom) {
        return addResult(custom);
      }
      getIDB(emojiStore, unicodeOrName, (emoji) => {
        if (emoji) {
          return addResult(emoji);
        }
        cursor.continue();
      });
    };
  });
}
var CODA_MARKER = "";
function trie(arr, itemToTokens) {
  const map = /* @__PURE__ */ new Map();
  for (const item of arr) {
    const tokens = itemToTokens(item);
    for (const token of tokens) {
      let currentMap = map;
      for (let i = 0; i < token.length; i++) {
        const char = token.charAt(i);
        let nextMap = currentMap.get(char);
        if (!nextMap) {
          nextMap = /* @__PURE__ */ new Map();
          currentMap.set(char, nextMap);
        }
        currentMap = nextMap;
      }
      let valuesAtCoda = currentMap.get(CODA_MARKER);
      if (!valuesAtCoda) {
        valuesAtCoda = [];
        currentMap.set(CODA_MARKER, valuesAtCoda);
      }
      valuesAtCoda.push(item);
    }
  }
  const search = (query, exact) => {
    let currentMap = map;
    for (let i = 0; i < query.length; i++) {
      const char = query.charAt(i);
      const nextMap = currentMap.get(char);
      if (nextMap) {
        currentMap = nextMap;
      } else {
        return [];
      }
    }
    if (exact) {
      const results2 = currentMap.get(CODA_MARKER);
      return results2 || [];
    }
    const results = [];
    const queue = [currentMap];
    while (queue.length) {
      const currentMap2 = queue.shift();
      const entriesSortedByKey = [...currentMap2.entries()].sort((a, b) => a[0] < b[0] ? -1 : 1);
      for (const [key, value] of entriesSortedByKey) {
        if (key === CODA_MARKER) {
          results.push(...value);
        } else {
          queue.push(value);
        }
      }
    }
    return results;
  };
  return search;
}
var requiredKeys$1 = [
  "name",
  "url"
];
function assertCustomEmojis(customEmojis) {
  const isArray = customEmojis && Array.isArray(customEmojis);
  const firstItemIsFaulty = isArray && customEmojis.length && (!customEmojis[0] || requiredKeys$1.some((key) => !(key in customEmojis[0])));
  if (!isArray || firstItemIsFaulty) {
    throw new Error("Custom emojis are in the wrong format");
  }
}
function customEmojiIndex(customEmojis) {
  assertCustomEmojis(customEmojis);
  const sortByName = (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
  const all = customEmojis.sort(sortByName);
  const emojiToTokens = (emoji) => {
    const set2 = /* @__PURE__ */ new Set();
    if (emoji.shortcodes) {
      for (const shortcode of emoji.shortcodes) {
        for (const token of extractTokens(shortcode)) {
          set2.add(token);
        }
      }
    }
    return set2;
  };
  const searchTrie = trie(customEmojis, emojiToTokens);
  const searchByExactMatch = (_) => searchTrie(_, true);
  const searchByPrefix = (_) => searchTrie(_, false);
  const search = (query) => {
    const tokens = extractTokens(query);
    const intermediateResults = tokens.map((token, i) => (i < tokens.length - 1 ? searchByExactMatch : searchByPrefix)(token));
    return findCommonMembers(intermediateResults, (_) => _.name).sort(sortByName);
  };
  const shortcodeToEmoji = /* @__PURE__ */ new Map();
  const nameToEmoji = /* @__PURE__ */ new Map();
  for (const customEmoji of customEmojis) {
    nameToEmoji.set(customEmoji.name.toLowerCase(), customEmoji);
    for (const shortcode of customEmoji.shortcodes || []) {
      shortcodeToEmoji.set(shortcode.toLowerCase(), customEmoji);
    }
  }
  const byShortcode = (shortcode) => shortcodeToEmoji.get(shortcode.toLowerCase());
  const byName = (name) => nameToEmoji.get(name.toLowerCase());
  return {
    all,
    search,
    byShortcode,
    byName
  };
}
var isFirefoxContentScript = typeof wrappedJSObject !== "undefined";
function cleanEmoji(emoji) {
  if (!emoji) {
    return emoji;
  }
  if (isFirefoxContentScript) {
    emoji = structuredClone(emoji);
  }
  delete emoji.tokens;
  if (emoji.skinTones) {
    const len = emoji.skinTones.length;
    emoji.skins = Array(len);
    for (let i = 0; i < len; i++) {
      emoji.skins[i] = {
        tone: emoji.skinTones[i],
        unicode: emoji.skinUnicodes[i],
        version: emoji.skinVersions[i]
      };
    }
    delete emoji.skinTones;
    delete emoji.skinUnicodes;
    delete emoji.skinVersions;
  }
  return emoji;
}
function warnETag(eTag) {
  if (!eTag) {
    console.warn("emoji-picker-element is more efficient if the dataSource server exposes an ETag header.");
  }
}
var requiredKeys = [
  "annotation",
  "emoji",
  "group",
  "order",
  "version"
];
function assertEmojiData(emojiData) {
  if (!emojiData || !Array.isArray(emojiData) || !emojiData[0] || typeof emojiData[0] !== "object" || requiredKeys.some((key) => !(key in emojiData[0]))) {
    throw new Error("Emoji data is in the wrong format");
  }
}
function assertStatus(response, dataSource) {
  if (Math.floor(response.status / 100) !== 2) {
    throw new Error("Failed to fetch: " + dataSource + ":  " + response.status);
  }
}
async function getETag(dataSource) {
  const response = await fetch(dataSource, { method: "HEAD" });
  assertStatus(response, dataSource);
  const eTag = response.headers.get("etag");
  warnETag(eTag);
  return eTag;
}
async function getETagAndData(dataSource) {
  const response = await fetch(dataSource);
  assertStatus(response, dataSource);
  const eTag = response.headers.get("etag");
  warnETag(eTag);
  const emojiData = await response.json();
  assertEmojiData(emojiData);
  return [eTag, emojiData];
}
function arrayBufferToBinaryString(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var length = bytes.byteLength;
  var i = -1;
  while (++i < length) {
    binary += String.fromCharCode(bytes[i]);
  }
  return binary;
}
function binaryStringToArrayBuffer(binary) {
  var length = binary.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);
  var i = -1;
  while (++i < length) {
    arr[i] = binary.charCodeAt(i);
  }
  return buf;
}
async function jsonChecksum(object) {
  const inString = JSON.stringify(object);
  let inBuffer = binaryStringToArrayBuffer(inString);
  const outBuffer = await crypto.subtle.digest("SHA-1", inBuffer);
  const outBinString = arrayBufferToBinaryString(outBuffer);
  const res = btoa(outBinString);
  return res;
}
async function doCheckForUpdates(db, dataSource) {
  let emojiData;
  let eTag = await getETag(dataSource);
  if (!eTag) {
    const eTagAndData = await getETagAndData(dataSource);
    eTag = eTagAndData[0];
    emojiData = eTagAndData[1];
    if (!eTag) {
      eTag = await jsonChecksum(emojiData);
    }
  }
  if (await hasData(db, dataSource, eTag)) ;
  else {
    if (!emojiData) {
      const eTagAndData = await getETagAndData(dataSource);
      emojiData = eTagAndData[1];
    }
    await loadData(db, emojiData, dataSource, eTag);
  }
}
async function loadDataForFirstTime(db, dataSource) {
  let [eTag, emojiData] = await getETagAndData(dataSource);
  if (!eTag) {
    eTag = await jsonChecksum(emojiData);
  }
  await loadData(db, emojiData, dataSource, eTag);
}
async function checkForUpdates(db, dataSource) {
  try {
    await doCheckForUpdates(db, dataSource);
  } catch (err) {
    if (err.name !== "InvalidStateError") {
      throw err;
    }
  }
}
var Database = class {
  constructor({ dataSource = DEFAULT_DATA_SOURCE, locale = DEFAULT_LOCALE, customEmoji = [] } = {}) {
    this.dataSource = dataSource;
    this.locale = locale;
    this._dbName = `emoji-picker-element-${this.locale}`;
    this._db = void 0;
    this._lazyUpdate = void 0;
    this._custom = customEmojiIndex(customEmoji);
    this._clear = this._clear.bind(this);
    this._ready = this._init();
  }
  async _init() {
    const db = this._db = await openDatabase(this._dbName);
    addOnCloseListener(this._dbName, this._clear);
    const dataSource = this.dataSource;
    const empty = await isEmpty(db);
    if (empty) {
      await loadDataForFirstTime(db, dataSource);
    } else {
      this._lazyUpdate = checkForUpdates(db, dataSource);
    }
  }
  async ready() {
    const checkReady = async () => {
      if (!this._ready) {
        this._ready = this._init();
      }
      return this._ready;
    };
    await checkReady();
    if (!this._db) {
      await checkReady();
    }
  }
  async getEmojiByGroup(group) {
    assertNumber(group);
    await this.ready();
    return uniqEmoji(await getEmojiByGroup(this._db, group)).map(cleanEmoji);
  }
  async getEmojiBySearchQuery(query) {
    assertNonEmptyString(query);
    await this.ready();
    const customs = this._custom.search(query);
    const natives = uniqEmoji(await getEmojiBySearchQuery(this._db, query)).map(cleanEmoji);
    return [
      ...customs,
      ...natives
    ];
  }
  async getEmojiByShortcode(shortcode) {
    assertNonEmptyString(shortcode);
    await this.ready();
    const custom = this._custom.byShortcode(shortcode);
    if (custom) {
      return custom;
    }
    return cleanEmoji(await getEmojiByShortcode(this._db, shortcode));
  }
  async getEmojiByUnicodeOrName(unicodeOrName) {
    assertNonEmptyString(unicodeOrName);
    await this.ready();
    const custom = this._custom.byName(unicodeOrName);
    if (custom) {
      return custom;
    }
    return cleanEmoji(await getEmojiByUnicode(this._db, unicodeOrName));
  }
  async getPreferredSkinTone() {
    await this.ready();
    return await get(this._db, STORE_KEYVALUE, KEY_PREFERRED_SKINTONE) || 0;
  }
  async setPreferredSkinTone(skinTone) {
    assertNumber(skinTone);
    await this.ready();
    return set(this._db, STORE_KEYVALUE, KEY_PREFERRED_SKINTONE, skinTone);
  }
  async incrementFavoriteEmojiCount(unicodeOrName) {
    assertNonEmptyString(unicodeOrName);
    await this.ready();
    return incrementFavoriteEmojiCount(this._db, unicodeOrName);
  }
  async getTopFavoriteEmoji(limit) {
    assertNumber(limit);
    await this.ready();
    return (await getTopFavoriteEmoji(this._db, this._custom, limit)).map(cleanEmoji);
  }
  set customEmoji(customEmojis) {
    this._custom = customEmojiIndex(customEmojis);
  }
  get customEmoji() {
    return this._custom.all;
  }
  async _shutdown() {
    await this.ready();
    try {
      await this._lazyUpdate;
    } catch (err) {
    }
  }
  // clear references to IDB, e.g. during a close event
  _clear() {
    this._db = this._ready = this._lazyUpdate = void 0;
  }
  async close() {
    await this._shutdown();
    await closeDatabase(this._dbName);
  }
  async delete() {
    await this._shutdown();
    await deleteDatabase(this._dbName);
  }
};

// node_modules/emoji-picker-element/picker.js
var allGroups = [
  [-1, "\u2728", "custom"],
  [0, "\u{1F600}", "smileys-emotion"],
  [1, "\u{1F44B}", "people-body"],
  [3, "\u{1F431}", "animals-nature"],
  [4, "\u{1F34E}", "food-drink"],
  [5, "\u{1F3E0}\uFE0F", "travel-places"],
  [6, "\u26BD", "activities"],
  [7, "\u{1F4DD}", "objects"],
  [8, "\u26D4\uFE0F", "symbols"],
  [9, "\u{1F3C1}", "flags"]
].map(([id, emoji, name]) => ({ id, emoji, name }));
var groups = allGroups.slice(1);
var MIN_SEARCH_TEXT_LENGTH2 = 2;
var NUM_SKIN_TONES = 6;
var rIC = typeof requestIdleCallback === "function" ? requestIdleCallback : setTimeout;
function hasZwj(emoji) {
  return emoji.unicode.includes("\u200D");
}
var versionsAndTestEmoji = {
  "\u{1FAEA}": 17,
  // distorted face
  "\u{1FAE9}": 16,
  // face with bags under eyes
  "\u{1FAE8}": 15.1,
  // shaking head, technically from v15 but see note above
  "\u{1FAE0}": 14,
  "\u{1F972}": 13.1,
  // smiling face with tear, technically from v13 but see note above
  "\u{1F97B}": 12.1,
  // sari, technically from v12 but see note above
  "\u{1F970}": 11,
  "\u{1F929}": 5,
  "\u{1F471}\u200D\u2640\uFE0F": 4,
  "\u{1F923}": 3,
  "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F": 2,
  "\u{1F600}": 1,
  "\u{1F610}\uFE0F": 0.7,
  "\u{1F603}": 0.6
};
var TIMEOUT_BEFORE_LOADING_MESSAGE = 1e3;
var DEFAULT_SKIN_TONE_EMOJI = "\u{1F590}\uFE0F";
var DEFAULT_NUM_COLUMNS = 8;
var MOST_COMMONLY_USED_EMOJI = [
  "\u{1F60A}",
  "\u{1F612}",
  "\u2764\uFE0F",
  "\u{1F44D}\uFE0F",
  "\u{1F60D}",
  "\u{1F602}",
  "\u{1F62D}",
  "\u263A\uFE0F",
  "\u{1F614}",
  "\u{1F629}",
  "\u{1F60F}",
  "\u{1F495}",
  "\u{1F64C}",
  "\u{1F618}"
];
var FONT_FAMILY = '"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif';
var DEFAULT_CATEGORY_SORTING = (a, b) => a < b ? -1 : a > b ? 1 : 0;
var getTextFeature = (text, color) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext("2d", {
    // Improves the performance of `getImageData()`
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getContextAttributes#willreadfrequently
    willReadFrequently: true
  });
  ctx.textBaseline = "top";
  ctx.font = `100px ${FONT_FAMILY}`;
  ctx.fillStyle = color;
  ctx.scale(0.01, 0.01);
  ctx.fillText(text, 0, 0);
  return ctx.getImageData(0, 0, 1, 1).data;
};
var compareFeatures = (feature1, feature2) => {
  const feature1Str = [...feature1].join(",");
  const feature2Str = [...feature2].join(",");
  return feature1Str === feature2Str && !feature1Str.startsWith("0,0,0,");
};
function testColorEmojiSupported(text) {
  const feature1 = getTextFeature(text, "#000");
  const feature2 = getTextFeature(text, "#fff");
  return feature1 && feature2 && compareFeatures(feature1, feature2);
}
function determineEmojiSupportLevel() {
  const entries = Object.entries(versionsAndTestEmoji);
  try {
    for (const [emoji, version] of entries) {
      if (testColorEmojiSupported(emoji)) {
        return version;
      }
    }
  } catch (e) {
  } finally {
  }
  return entries[0][1];
}
var promise;
var detectEmojiSupportLevel = () => {
  if (!promise) {
    promise = new Promise((resolve) => rIC(() => resolve(determineEmojiSupportLevel())));
  }
  return promise;
};
var supportedZwjEmojis = /* @__PURE__ */ new Map();
var VARIATION_SELECTOR = "\uFE0F";
var SKINTONE_MODIFIER = "\uD83C";
var ZWJ = "\u200D";
var LIGHT_SKIN_TONE = 127995;
var LIGHT_SKIN_TONE_MODIFIER = 57339;
function applySkinTone(str, skinTone) {
  if (skinTone === 0) {
    return str;
  }
  const zwjIndex = str.indexOf(ZWJ);
  if (zwjIndex !== -1) {
    return str.substring(0, zwjIndex) + String.fromCodePoint(LIGHT_SKIN_TONE + skinTone - 1) + str.substring(zwjIndex);
  }
  if (str.endsWith(VARIATION_SELECTOR)) {
    str = str.substring(0, str.length - 1);
  }
  return str + SKINTONE_MODIFIER + String.fromCodePoint(LIGHT_SKIN_TONE_MODIFIER + skinTone - 1);
}
function halt(event) {
  event.preventDefault();
  event.stopPropagation();
}
function incrementOrDecrement(decrement, val, arr) {
  val += decrement ? -1 : 1;
  if (val < 0) {
    val = arr.length - 1;
  } else if (val >= arr.length) {
    val = 0;
  }
  return val;
}
function uniqBy2(arr, func) {
  const set2 = /* @__PURE__ */ new Set();
  const res = [];
  for (const item of arr) {
    const key = func(item);
    if (!set2.has(key)) {
      set2.add(key);
      res.push(item);
    }
  }
  return res;
}
function summarizeEmojisForUI(emojis, emojiSupportLevel) {
  const toSimpleSkinsMap = (skins) => {
    const res = {};
    for (const skin of skins) {
      if (typeof skin.tone === "number" && skin.version <= emojiSupportLevel) {
        res[skin.tone] = skin.unicode;
      }
    }
    return res;
  };
  return emojis.map(({ unicode, skins, shortcodes, url, name, category, annotation }) => ({
    unicode,
    name,
    shortcodes,
    url,
    category,
    annotation,
    id: unicode || name,
    skins: skins && toSimpleSkinsMap(skins)
  }));
}
var rAF = requestAnimationFrame;
var resizeObserverSupported = typeof ResizeObserver === "function";
function resizeObserverAction(node, abortSignal, onUpdate) {
  let resizeObserver;
  if (resizeObserverSupported) {
    resizeObserver = new ResizeObserver(onUpdate);
    resizeObserver.observe(node);
  } else {
    rAF(onUpdate);
  }
  abortSignal.addEventListener("abort", () => {
    if (resizeObserver) {
      resizeObserver.disconnect();
    }
  });
}
function calculateTextWidth(node) {
  {
    const range = document.createRange();
    range.selectNode(node.firstChild);
    return range.getBoundingClientRect().width;
  }
}
var BASELINE_EMOJI = "\u{1F600}";
var baselineEmojiWidth;
var fallbackNode;
function calculateTextWidthWithFallback(unicode, domNode, baselineEmojiNode) {
  const result = calculateTextWidth(domNode);
  if (!result) {
    if (!fallbackNode) {
      fallbackNode = baselineEmojiNode.cloneNode(true);
      const styles = getComputedStyle(baselineEmojiNode);
      for (const prop of ["font-family", "line-height", "width", "height", "font-size", "display", "align-items", "justify-content"]) {
        fallbackNode.style.setProperty(prop, styles.getPropertyValue(prop), "important");
      }
    }
    try {
      document.body.appendChild(fallbackNode);
      fallbackNode.firstChild.nodeValue = unicode;
      return calculateTextWidth(fallbackNode);
    } finally {
      fallbackNode.remove();
    }
  }
  return result;
}
function checkZwjSupport(zwjEmojisToCheck, baselineEmojiNode, emojiToDomNode) {
  let allSupported = true;
  for (const emoji of zwjEmojisToCheck) {
    const domNode = emojiToDomNode(emoji);
    if (!domNode) {
      continue;
    }
    if (typeof baselineEmojiWidth === "undefined") {
      baselineEmojiWidth = calculateTextWidthWithFallback(BASELINE_EMOJI, baselineEmojiNode, baselineEmojiNode);
    }
    const emojiWidth = calculateTextWidthWithFallback(emoji.unicode, domNode, baselineEmojiNode);
    const supported = emojiWidth / 1.8 < baselineEmojiWidth;
    supportedZwjEmojis.set(emoji.unicode, supported);
    if (!supported) {
      allSupported = false;
    }
  }
  return allSupported;
}
function uniq(arr) {
  return uniqBy2(arr, (_) => _);
}
function resetScrollTopIfPossible(element) {
  if (element) {
    element.scrollTop = 0;
  }
}
function getFromMap(cache, key, func) {
  let cached = cache.get(key);
  if (!cached) {
    cached = func();
    cache.set(key, cached);
  }
  return cached;
}
function toString(value) {
  return "" + value;
}
function parseTemplate(htmlString) {
  const template = document.createElement("template");
  template.innerHTML = htmlString;
  return template;
}
var parseCache = /* @__PURE__ */ new WeakMap();
var domInstancesCache = /* @__PURE__ */ new WeakMap();
var unkeyedSymbol = /* @__PURE__ */ Symbol("un-keyed");
var hasReplaceChildren = "replaceChildren" in Element.prototype;
function replaceChildren(parentNode, newChildren) {
  if (hasReplaceChildren) {
    parentNode.replaceChildren(...newChildren);
  } else {
    parentNode.innerHTML = "";
    parentNode.append(...newChildren);
  }
}
function doChildrenNeedRerender(parentNode, newChildren) {
  let oldChild = parentNode.firstChild;
  let oldChildrenCount = 0;
  while (oldChild) {
    const newChild = newChildren[oldChildrenCount];
    if (newChild !== oldChild) {
      return true;
    }
    oldChild = oldChild.nextSibling;
    oldChildrenCount++;
  }
  return oldChildrenCount !== newChildren.length;
}
function patchChildren(newChildren, instanceBinding) {
  const { targetNode } = instanceBinding;
  let { targetParentNode } = instanceBinding;
  let needsRerender = false;
  if (targetParentNode) {
    needsRerender = doChildrenNeedRerender(targetParentNode, newChildren);
  } else {
    needsRerender = true;
    instanceBinding.targetNode = void 0;
    instanceBinding.targetParentNode = targetParentNode = targetNode.parentNode;
  }
  if (needsRerender) {
    replaceChildren(targetParentNode, newChildren);
  }
}
function patch(expressions, instanceBindings) {
  for (const instanceBinding of instanceBindings) {
    const {
      targetNode,
      currentExpression,
      binding: {
        expressionIndex,
        attributeName,
        attributeValuePre,
        attributeValuePost
      }
    } = instanceBinding;
    const expression = expressions[expressionIndex];
    if (currentExpression === expression) {
      continue;
    }
    instanceBinding.currentExpression = expression;
    if (attributeName) {
      if (expression === null) {
        targetNode.removeAttribute(attributeName);
      } else {
        const newValue = attributeValuePre + toString(expression) + attributeValuePost;
        targetNode.setAttribute(attributeName, newValue);
      }
    } else {
      let newNode;
      if (Array.isArray(expression)) {
        patchChildren(expression, instanceBinding);
      } else if (expression instanceof Element) {
        newNode = expression;
        targetNode.replaceWith(newNode);
      } else {
        targetNode.nodeValue = toString(expression);
      }
      if (newNode) {
        instanceBinding.targetNode = newNode;
      }
    }
  }
}
function parse(tokens) {
  let htmlString = "";
  let withinTag = false;
  let withinAttribute = false;
  let elementIndexCounter = -1;
  const elementsToBindings = /* @__PURE__ */ new Map();
  const elementIndexes = [];
  let skipTokenChars = 0;
  for (let i = 0, len = tokens.length; i < len; i++) {
    const token = tokens[i];
    htmlString += token.slice(skipTokenChars);
    if (i === len - 1) {
      break;
    }
    for (let j = 0; j < token.length; j++) {
      const char = token.charAt(j);
      switch (char) {
        case "<": {
          const nextChar = token.charAt(j + 1);
          if (nextChar === "/") {
            elementIndexes.pop();
          } else {
            withinTag = true;
            elementIndexes.push(++elementIndexCounter);
          }
          break;
        }
        case ">": {
          withinTag = false;
          withinAttribute = false;
          break;
        }
        case "=": {
          withinAttribute = true;
          break;
        }
      }
    }
    const elementIndex = elementIndexes[elementIndexes.length - 1];
    const bindings = getFromMap(elementsToBindings, elementIndex, () => []);
    let attributeName;
    let attributeValuePre;
    let attributeValuePost;
    if (withinAttribute) {
      const attributePreMatch = /(\S+)="?([^"=]*)$/.exec(token);
      attributeName = attributePreMatch[1];
      attributeValuePre = attributePreMatch[2];
      const attributePostMatch = /^([^">]*)("?)/.exec(tokens[i + 1]);
      attributeValuePost = attributePostMatch[1];
      htmlString = htmlString.slice(0, -1 * attributePreMatch[0].length);
      skipTokenChars = attributePostMatch[0].length;
    } else {
      skipTokenChars = 0;
    }
    const binding = {
      attributeName,
      attributeValuePre,
      attributeValuePost,
      expressionIndex: i
    };
    bindings.push(binding);
    if (!withinTag && !withinAttribute) {
      htmlString += " ";
    }
  }
  const template = parseTemplate(htmlString);
  return {
    template,
    elementsToBindings
  };
}
function applyBindings(bindings, element, instanceBindings) {
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    const targetNode = binding.attributeName ? element : element.firstChild;
    const instanceBinding = {
      binding,
      targetNode,
      targetParentNode: void 0,
      currentExpression: void 0
    };
    instanceBindings.push(instanceBinding);
  }
}
function traverseAndSetupBindings(rootElement, elementsToBindings) {
  const instanceBindings = [];
  let topLevelBindings;
  if (elementsToBindings.size === 1 && (topLevelBindings = elementsToBindings.get(0))) {
    applyBindings(topLevelBindings, rootElement, instanceBindings);
  } else {
    const treeWalker = document.createTreeWalker(rootElement, NodeFilter.SHOW_ELEMENT);
    let element = rootElement;
    let elementIndex = -1;
    do {
      const bindings = elementsToBindings.get(++elementIndex);
      if (bindings) {
        applyBindings(bindings, element, instanceBindings);
      }
    } while (element = treeWalker.nextNode());
  }
  return instanceBindings;
}
function parseHtml(tokens) {
  const { template, elementsToBindings } = getFromMap(parseCache, tokens, () => parse(tokens));
  const dom = template.cloneNode(true).content.firstElementChild;
  const instanceBindings = traverseAndSetupBindings(dom, elementsToBindings);
  return function updateDomInstance(expressions) {
    patch(expressions, instanceBindings);
    return dom;
  };
}
function createFramework(state10) {
  const domInstances = getFromMap(domInstancesCache, state10, () => /* @__PURE__ */ new Map());
  let domInstanceCacheKey = unkeyedSymbol;
  function html(tokens, ...expressions) {
    const domInstancesForTokens = getFromMap(domInstances, tokens, () => /* @__PURE__ */ new Map());
    const updateDomInstance = getFromMap(domInstancesForTokens, domInstanceCacheKey, () => parseHtml(tokens));
    return updateDomInstance(expressions);
  }
  function map(array, callback, keyFunction) {
    return array.map((item, index) => {
      const originalCacheKey = domInstanceCacheKey;
      domInstanceCacheKey = keyFunction(item);
      try {
        return callback(item, index);
      } finally {
        domInstanceCacheKey = originalCacheKey;
      }
    });
  }
  return { map, html };
}
function render(container, state10, helpers, events, actions9, refs, abortSignal, actionContext, firstRender) {
  const { labelWithSkin, titleForEmoji, unicodeWithSkin } = helpers;
  const { html, map } = createFramework(state10);
  function emojiList(emojis, searchMode, prefix) {
    return map(emojis, (emoji, i) => {
      return html`<button role="${searchMode ? "option" : "menuitem"}" aria-selected="${searchMode ? i === state10.activeSearchItem : null}" aria-label="${labelWithSkin(emoji, state10.currentSkinTone)}" title="${titleForEmoji(emoji)}" class="${"emoji" + (searchMode && i === state10.activeSearchItem ? " active" : "") + (emoji.unicode ? "" : " custom-emoji")}" id="${`${prefix}-${emoji.id}`}" style="${emoji.unicode ? null : `--custom-emoji-background: url(${JSON.stringify(emoji.url)})`}">${emoji.unicode ? unicodeWithSkin(emoji, state10.currentSkinTone) : ""}</button>`;
    }, (emoji) => `${prefix}-${emoji.id}`);
  }
  const section = () => {
    return html`<section data-ref="rootElement" class="picker" aria-label="${state10.i18n.regionLabel}" style="${state10.pickerStyle || ""}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${state10.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!!(state10.searchMode && state10.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${state10.activeSearchItemId ? `emo-${state10.activeSearchItemId}` : null}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${state10.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${state10.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${state10.skinTonePickerExpandedAfterAnimation ? "expanded" : ""}"><button id="skintone-button" class="emoji ${state10.skinTonePickerExpanded ? "hide-focus" : ""}" aria-label="${state10.skinToneButtonLabel}" title="${state10.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${state10.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${state10.skinToneButtonText || ""}</button></div><span id="skintone-description" class="sr-only">${state10.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${state10.skinTonePickerExpanded ? "" : "hidden no-animate"}" style="transform:translateY(${state10.skinTonePickerExpanded ? 0 : "calc(-1 * var(--num-skintones) * var(--total-emoji-size))"})" role="listbox" aria-label="${state10.i18n.skinTonesLabel}" aria-activedescendant="skintone-${state10.activeSkinTone}" aria-hidden="${!state10.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${map(state10.skinTones, (skinTone, i) => {
      return html`<div id="skintone-${i}" class="emoji ${i === state10.activeSkinTone ? "active" : ""}" aria-selected="${i === state10.activeSkinTone}" role="option" title="${state10.i18n.skinTones[i]}" aria-label="${state10.i18n.skinTones[i]}">${skinTone}</div>`;
    }, (skinTone) => skinTone)}</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${state10.groups.length},1fr)" aria-label="${state10.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${map(state10.groups, (group) => {
      return html`<button role="tab" class="nav-button" aria-controls="tab-${group.id}" aria-label="${state10.i18n.categories[group.name]}" aria-selected="${!state10.searchMode && state10.currentGroup.id === group.id}" title="${state10.i18n.categories[group.name]}" data-group-id="${group.id}"><div class="nav-emoji emoji">${group.emoji}</div></button>`;
    }, (group) => group.id)}</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${/* istanbul ignore next */
    (state10.isRtl ? -1 : 1) * state10.currentGroupIndex * 100}%)"></div></div><div class="message ${state10.message ? "" : "gone"}" role="alert" aria-live="polite">${state10.message || ""}</div><div data-ref="tabpanelElement" class="tabpanel ${!state10.databaseLoaded || state10.message ? "gone" : ""}" role="${state10.searchMode ? "region" : "tabpanel"}" aria-label="${state10.searchMode ? state10.i18n.searchResultsLabel : state10.i18n.categories[state10.currentGroup.name]}" id="${state10.searchMode ? null : `tab-${state10.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${map(state10.currentEmojisWithCategories, (emojiWithCategory, i) => {
      return html`<div><div id="menu-label-${i}" class="category ${state10.currentEmojisWithCategories.length === 1 && state10.currentEmojisWithCategories[0].category === "" ? "gone" : ""}" aria-hidden="true">${state10.searchMode ? state10.i18n.searchResultsLabel : emojiWithCategory.category ? emojiWithCategory.category : state10.currentEmojisWithCategories.length > 1 ? state10.i18n.categories.custom : state10.i18n.categories[state10.currentGroup.name]}</div><div class="emoji-menu ${i !== 0 && !state10.searchMode && state10.currentGroup.id === -1 ? "visibility-auto" : ""}" style="${`--num-rows: ${Math.ceil(emojiWithCategory.emojis.length / state10.numColumns)}`}" data-action="updateOnIntersection" role="${state10.searchMode ? "listbox" : "menu"}" aria-labelledby="menu-label-${i}" id="${state10.searchMode ? "search-results" : null}">${emojiList(
        emojiWithCategory.emojis,
        state10.searchMode,
        /* prefix */
        "emo"
      )}</div></div>`;
    }, (emojiWithCategory) => emojiWithCategory.category)}</div></div><div class="favorites onscreen emoji-menu ${state10.message ? "gone" : ""}" role="menu" aria-label="${state10.i18n.favoritesLabel}" data-on-click="onEmojiClick">${emojiList(
      state10.currentFavorites,
      /* searchMode */
      false,
      /* prefix */
      "fav"
    )}</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`;
  };
  const rootDom = section();
  const forElementWithAttribute = (attributeName, callback) => {
    for (const element of container.querySelectorAll(`[${attributeName}]`)) {
      callback(element, element.getAttribute(attributeName));
    }
  };
  if (firstRender) {
    container.appendChild(rootDom);
    for (const eventName of ["click", "focusout", "input", "keydown", "keyup"]) {
      forElementWithAttribute(`data-on-${eventName}`, (element, listenerName) => {
        element.addEventListener(eventName, events[listenerName]);
      });
    }
    forElementWithAttribute("data-ref", (element, ref) => {
      refs[ref] = element;
    });
    abortSignal.addEventListener("abort", () => {
      container.removeChild(rootDom);
    });
  }
  forElementWithAttribute("data-action", (element, action) => {
    let boundActions = actionContext.get(action);
    if (!boundActions) {
      actionContext.set(action, boundActions = /* @__PURE__ */ new WeakSet());
    }
    if (!boundActions.has(element)) {
      boundActions.add(element);
      actions9[action](element);
    }
  });
}
var qM = typeof queueMicrotask === "function" ? queueMicrotask : (callback) => Promise.resolve().then(callback);
function createState(abortSignal) {
  let destroyed = false;
  let currentObserver;
  const propsToObservers = /* @__PURE__ */ new Map();
  const dirtyObservers = /* @__PURE__ */ new Set();
  let queued;
  const flush = () => {
    if (destroyed) {
      return;
    }
    const observersToRun = [...dirtyObservers];
    dirtyObservers.clear();
    try {
      for (const observer of observersToRun) {
        observer();
      }
    } finally {
      queued = false;
      if (dirtyObservers.size) {
        queued = true;
        qM(flush);
      }
    }
  };
  const state10 = new Proxy({}, {
    get(target, prop) {
      if (currentObserver) {
        let observers = propsToObservers.get(prop);
        if (!observers) {
          observers = /* @__PURE__ */ new Set();
          propsToObservers.set(prop, observers);
        }
        observers.add(currentObserver);
      }
      return target[prop];
    },
    set(target, prop, newValue) {
      if (target[prop] !== newValue) {
        target[prop] = newValue;
        const observers = propsToObservers.get(prop);
        if (observers) {
          for (const observer of observers) {
            dirtyObservers.add(observer);
          }
          if (!queued) {
            queued = true;
            qM(flush);
          }
        }
      }
      return true;
    }
  });
  const createEffect = (callback) => {
    const runnable = () => {
      const oldObserver = currentObserver;
      currentObserver = runnable;
      try {
        return callback();
      } finally {
        currentObserver = oldObserver;
      }
    };
    return runnable();
  };
  abortSignal.addEventListener("abort", () => {
    destroyed = true;
  });
  return {
    state: state10,
    createEffect
  };
}
function arraysAreEqualByFunction(left, right, areEqualFunc) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (!areEqualFunc(left[i], right[i])) {
      return false;
    }
  }
  return true;
}
var intersectionObserverCache = /* @__PURE__ */ new WeakMap();
function intersectionObserverAction(node, abortSignal, listener) {
  {
    const root = node.closest(".tabpanel");
    let observer = intersectionObserverCache.get(root);
    if (!observer) {
      observer = new IntersectionObserver(listener, {
        root,
        // trigger if we are 1/2 scroll container height away so that the images load a bit quicker while scrolling
        rootMargin: "50% 0px 50% 0px",
        // trigger if any part of the emoji grid is intersecting
        threshold: 0
      });
      intersectionObserverCache.set(root, observer);
      abortSignal.addEventListener("abort", () => {
        observer.disconnect();
      });
    }
    observer.observe(node);
  }
}
var EMPTY_ARRAY = [];
var { assign } = Object;
function createRoot(shadowRoot, props) {
  const refs = {};
  const abortController = new AbortController();
  const abortSignal = abortController.signal;
  const { state: state10, createEffect } = createState(abortSignal);
  const actionContext = /* @__PURE__ */ new Map();
  assign(state10, {
    skinToneEmoji: void 0,
    i18n: void 0,
    database: void 0,
    customEmoji: void 0,
    customCategorySorting: void 0,
    emojiVersion: void 0
  });
  assign(state10, props);
  assign(state10, {
    initialLoad: true,
    currentEmojis: [],
    currentEmojisWithCategories: [],
    rawSearchText: "",
    searchText: "",
    searchMode: false,
    activeSearchItem: -1,
    message: void 0,
    skinTonePickerExpanded: false,
    skinTonePickerExpandedAfterAnimation: false,
    currentSkinTone: 0,
    activeSkinTone: 0,
    skinToneButtonText: void 0,
    pickerStyle: void 0,
    skinToneButtonLabel: "",
    skinTones: [],
    currentFavorites: [],
    defaultFavoriteEmojis: void 0,
    numColumns: DEFAULT_NUM_COLUMNS,
    isRtl: false,
    currentGroupIndex: 0,
    groups,
    databaseLoaded: false,
    activeSearchItemId: void 0
  });
  createEffect(() => {
    if (state10.currentGroup !== state10.groups[state10.currentGroupIndex]) {
      state10.currentGroup = state10.groups[state10.currentGroupIndex];
    }
  });
  const focus = (id) => {
    shadowRoot.getElementById(id).focus();
  };
  const emojiToDomNode = (emoji) => shadowRoot.getElementById(`emo-${emoji.id}`);
  const fireEvent = (name, detail) => {
    refs.rootElement.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true
    }));
  };
  const compareEmojiArrays = (a, b) => a.id === b.id;
  const compareCurrentEmojisWithCategories = (a, b) => {
    const { category: aCategory, emojis: aEmojis } = a;
    const { category: bCategory, emojis: bEmojis } = b;
    if (aCategory !== bCategory) {
      return false;
    }
    return arraysAreEqualByFunction(aEmojis, bEmojis, compareEmojiArrays);
  };
  const updateCurrentEmojis = (newEmojis) => {
    if (!arraysAreEqualByFunction(state10.currentEmojis, newEmojis, compareEmojiArrays)) {
      state10.currentEmojis = newEmojis;
    }
  };
  const updateSearchMode = (newSearchMode) => {
    if (state10.searchMode !== newSearchMode) {
      state10.searchMode = newSearchMode;
    }
  };
  const updateCurrentEmojisWithCategories = (newEmojisWithCategories) => {
    if (!arraysAreEqualByFunction(state10.currentEmojisWithCategories, newEmojisWithCategories, compareCurrentEmojisWithCategories)) {
      state10.currentEmojisWithCategories = newEmojisWithCategories;
    }
  };
  const unicodeWithSkin = (emoji, currentSkinTone) => currentSkinTone && emoji.skins && emoji.skins[currentSkinTone] || emoji.unicode;
  const labelWithSkin = (emoji, currentSkinTone) => uniq([
    emoji.name || unicodeWithSkin(emoji, currentSkinTone),
    emoji.annotation,
    ...emoji.shortcodes || EMPTY_ARRAY
  ].filter(Boolean)).join(", ");
  const titleForEmoji = (emoji) => emoji.annotation || (emoji.shortcodes || EMPTY_ARRAY).join(", ");
  const helpers = {
    labelWithSkin,
    titleForEmoji,
    unicodeWithSkin
  };
  const events = {
    onClickSkinToneButton,
    onEmojiClick,
    onNavClick,
    onNavKeydown,
    onSearchKeydown,
    onSkinToneOptionsClick,
    onSkinToneOptionsFocusOut,
    onSkinToneOptionsKeydown,
    onSkinToneOptionsKeyup,
    onSearchInput
  };
  const actions9 = {
    calculateEmojiGridStyle,
    updateOnIntersection
  };
  let firstRender = true;
  createEffect(() => {
    render(shadowRoot, state10, helpers, events, actions9, refs, abortSignal, actionContext, firstRender);
    firstRender = false;
  });
  if (!state10.emojiVersion) {
    detectEmojiSupportLevel().then((level) => {
      if (!level) {
        state10.message = state10.i18n.emojiUnsupportedMessage;
      }
    });
  }
  createEffect(() => {
    async function handleDatabaseLoading() {
      let showingLoadingMessage = false;
      const timeoutHandle = setTimeout(() => {
        showingLoadingMessage = true;
        state10.message = state10.i18n.loadingMessage;
      }, TIMEOUT_BEFORE_LOADING_MESSAGE);
      try {
        await state10.database.ready();
        state10.databaseLoaded = true;
      } catch (err) {
        console.error(err);
        state10.message = state10.i18n.networkErrorMessage;
      } finally {
        clearTimeout(timeoutHandle);
        if (showingLoadingMessage) {
          showingLoadingMessage = false;
          state10.message = "";
        }
      }
    }
    if (state10.database) {
      handleDatabaseLoading();
    }
  });
  createEffect(() => {
    state10.pickerStyle = `
      --num-groups: ${state10.groups.length}; 
      --indicator-opacity: ${state10.searchMode ? 0 : 1}; 
      --num-skintones: ${NUM_SKIN_TONES};`;
  });
  createEffect(() => {
    if (state10.customEmoji && state10.database) {
      updateCustomEmoji();
    }
  });
  createEffect(() => {
    if (state10.customEmoji && state10.customEmoji.length) {
      if (state10.groups !== allGroups) {
        state10.groups = allGroups;
      }
    } else if (state10.groups !== groups) {
      if (state10.currentGroupIndex) {
        state10.currentGroupIndex--;
      }
      state10.groups = groups;
    }
  });
  createEffect(() => {
    async function updatePreferredSkinTone() {
      if (state10.databaseLoaded) {
        state10.currentSkinTone = await state10.database.getPreferredSkinTone();
      }
    }
    updatePreferredSkinTone();
  });
  createEffect(() => {
    state10.skinTones = Array(NUM_SKIN_TONES).fill().map((_, i) => applySkinTone(state10.skinToneEmoji, i));
  });
  createEffect(() => {
    state10.skinToneButtonText = state10.skinTones[state10.currentSkinTone];
  });
  createEffect(() => {
    state10.skinToneButtonLabel = state10.i18n.skinToneLabel.replace("{skinTone}", state10.i18n.skinTones[state10.currentSkinTone]);
  });
  createEffect(() => {
    async function updateDefaultFavoriteEmojis() {
      const { database } = state10;
      const favs = (await Promise.all(MOST_COMMONLY_USED_EMOJI.map((unicode) => database.getEmojiByUnicodeOrName(unicode)))).filter(Boolean);
      state10.defaultFavoriteEmojis = favs;
    }
    if (state10.databaseLoaded) {
      updateDefaultFavoriteEmojis();
    }
  });
  function updateCustomEmoji() {
    const { customEmoji, database } = state10;
    const databaseCustomEmoji = customEmoji || EMPTY_ARRAY;
    if (database.customEmoji !== databaseCustomEmoji) {
      database.customEmoji = databaseCustomEmoji;
    }
  }
  createEffect(() => {
    async function updateFavorites() {
      updateCustomEmoji();
      const { database, defaultFavoriteEmojis, numColumns } = state10;
      const dbFavorites = await database.getTopFavoriteEmoji(numColumns);
      const favorites = await summarizeEmojis(uniqBy2([
        ...dbFavorites,
        ...defaultFavoriteEmojis
      ], (_) => _.unicode || _.name).slice(0, numColumns));
      state10.currentFavorites = favorites;
    }
    if (state10.databaseLoaded && state10.defaultFavoriteEmojis) {
      updateFavorites();
    }
  });
  function calculateEmojiGridStyle(node) {
    resizeObserverAction(node, abortSignal, () => {
      {
        const style = getComputedStyle(refs.rootElement);
        const newNumColumns = parseInt(style.getPropertyValue("--num-columns"), 10);
        const newIsRtl = style.getPropertyValue("direction") === "rtl";
        state10.numColumns = newNumColumns;
        state10.isRtl = newIsRtl;
      }
    });
  }
  function updateOnIntersection(node) {
    intersectionObserverAction(node, abortSignal, (entries) => {
      for (const { target, isIntersecting } of entries) {
        target.classList.toggle("onscreen", isIntersecting);
      }
    });
  }
  createEffect(() => {
    async function updateEmojis() {
      const { searchText, currentGroup, databaseLoaded, customEmoji } = state10;
      if (!databaseLoaded) {
        state10.currentEmojis = [];
        state10.searchMode = false;
      } else if (searchText.length >= MIN_SEARCH_TEXT_LENGTH2) {
        const newEmojis = await getEmojisBySearchQuery(searchText);
        if (state10.searchText === searchText) {
          updateCurrentEmojis(newEmojis);
          updateSearchMode(true);
        }
      } else {
        const { id: currentGroupId } = currentGroup;
        if (currentGroupId !== -1 || customEmoji && customEmoji.length) {
          const newEmojis = await getEmojisByGroup(currentGroupId);
          if (state10.currentGroup.id === currentGroupId) {
            updateCurrentEmojis(newEmojis);
            updateSearchMode(false);
          }
        }
      }
    }
    updateEmojis();
  });
  const resetScrollTopInRaf = () => {
    rAF(() => resetScrollTopIfPossible(refs.tabpanelElement));
  };
  createEffect(() => {
    const { currentEmojis, emojiVersion } = state10;
    const zwjEmojisToCheck = currentEmojis.filter((emoji) => emoji.unicode).filter((emoji) => hasZwj(emoji) && !supportedZwjEmojis.has(emoji.unicode));
    if (!emojiVersion && zwjEmojisToCheck.length) {
      updateCurrentEmojis(currentEmojis);
      rAF(() => checkZwjSupportAndUpdate(zwjEmojisToCheck));
    } else {
      const newEmojis = emojiVersion ? currentEmojis : currentEmojis.filter(isZwjSupported);
      updateCurrentEmojis(newEmojis);
      resetScrollTopInRaf();
    }
  });
  function checkZwjSupportAndUpdate(zwjEmojisToCheck) {
    const allSupported = checkZwjSupport(zwjEmojisToCheck, refs.baselineEmoji, emojiToDomNode);
    if (allSupported) {
      resetScrollTopInRaf();
    } else {
      state10.currentEmojis = [...state10.currentEmojis];
    }
  }
  function isZwjSupported(emoji) {
    return !emoji.unicode || !hasZwj(emoji) || supportedZwjEmojis.get(emoji.unicode);
  }
  async function filterEmojisByVersion(emojis) {
    const emojiSupportLevel = state10.emojiVersion || await detectEmojiSupportLevel();
    return emojis.filter(({ version }) => !version || version <= emojiSupportLevel);
  }
  async function summarizeEmojis(emojis) {
    return summarizeEmojisForUI(emojis, state10.emojiVersion || await detectEmojiSupportLevel());
  }
  async function getEmojisByGroup(group) {
    const emoji = group === -1 ? state10.customEmoji : await state10.database.getEmojiByGroup(group);
    return summarizeEmojis(await filterEmojisByVersion(emoji));
  }
  async function getEmojisBySearchQuery(query) {
    return summarizeEmojis(await filterEmojisByVersion(await state10.database.getEmojiBySearchQuery(query)));
  }
  createEffect(() => {
  });
  createEffect(() => {
    function calculateCurrentEmojisWithCategories() {
      const { searchMode, currentEmojis } = state10;
      if (searchMode) {
        return [
          {
            category: "",
            emojis: currentEmojis
          }
        ];
      }
      const categoriesToEmoji = /* @__PURE__ */ new Map();
      for (const emoji of currentEmojis) {
        const category = emoji.category || "";
        let emojis = categoriesToEmoji.get(category);
        if (!emojis) {
          emojis = [];
          categoriesToEmoji.set(category, emojis);
        }
        emojis.push(emoji);
      }
      return [...categoriesToEmoji.entries()].map(([category, emojis]) => ({ category, emojis })).sort((a, b) => state10.customCategorySorting(a.category, b.category));
    }
    const newEmojisWithCategories = calculateCurrentEmojisWithCategories();
    updateCurrentEmojisWithCategories(newEmojisWithCategories);
  });
  createEffect(() => {
    state10.activeSearchItemId = state10.activeSearchItem !== -1 && state10.currentEmojis[state10.activeSearchItem].id;
  });
  createEffect(() => {
    const { rawSearchText } = state10;
    rIC(() => {
      state10.searchText = (rawSearchText || "").trim();
      state10.activeSearchItem = -1;
    });
  });
  function onSearchKeydown(event) {
    if (!state10.searchMode || !state10.currentEmojis.length) {
      return;
    }
    const goToNextOrPrevious = (previous) => {
      halt(event);
      state10.activeSearchItem = incrementOrDecrement(previous, state10.activeSearchItem, state10.currentEmojis);
    };
    switch (event.key) {
      case "ArrowDown":
        return goToNextOrPrevious(false);
      case "ArrowUp":
        return goToNextOrPrevious(true);
      case "Enter":
        if (state10.activeSearchItem === -1) {
          state10.activeSearchItem = 0;
        } else {
          halt(event);
          return clickEmoji(state10.currentEmojis[state10.activeSearchItem].id);
        }
    }
  }
  function onNavClick(event) {
    const { target } = event;
    const closestTarget = target.closest(".nav-button");
    if (!closestTarget) {
      return;
    }
    const groupId = parseInt(closestTarget.dataset.groupId, 10);
    refs.searchElement.value = "";
    state10.rawSearchText = "";
    state10.searchText = "";
    state10.activeSearchItem = -1;
    state10.currentGroupIndex = state10.groups.findIndex((_) => _.id === groupId);
  }
  function onNavKeydown(event) {
    const { target, key } = event;
    const doFocus = (el) => {
      if (el) {
        halt(event);
        el.focus();
      }
    };
    switch (key) {
      case "ArrowLeft":
        return doFocus(target.previousElementSibling);
      case "ArrowRight":
        return doFocus(target.nextElementSibling);
      case "Home":
        return doFocus(target.parentElement.firstElementChild);
      case "End":
        return doFocus(target.parentElement.lastElementChild);
    }
  }
  async function getDetailForClickEvent(unicodeOrName) {
    const emoji = await state10.database.getEmojiByUnicodeOrName(unicodeOrName);
    const emojiSummary = [...state10.currentEmojis, ...state10.currentFavorites].find((_) => _.id === unicodeOrName);
    const skinTonedUnicode = emojiSummary.unicode && unicodeWithSkin(emojiSummary, state10.currentSkinTone);
    await state10.database.incrementFavoriteEmojiCount(unicodeOrName);
    return {
      emoji,
      skinTone: state10.currentSkinTone,
      ...skinTonedUnicode && { unicode: skinTonedUnicode },
      ...emojiSummary.name && { name: emojiSummary.name }
    };
  }
  async function clickEmoji(unicodeOrName) {
    const promiseForDetail = getDetailForClickEvent(unicodeOrName);
    fireEvent("emoji-click-sync", promiseForDetail);
    fireEvent("emoji-click", await promiseForDetail);
  }
  function onEmojiClick(event) {
    const { target } = event;
    if (!target.classList.contains("emoji")) {
      return;
    }
    halt(event);
    const id = target.id.substring(4);
    clickEmoji(id);
  }
  function changeSkinTone(skinTone) {
    state10.currentSkinTone = skinTone;
    state10.skinTonePickerExpanded = false;
    focus("skintone-button");
    fireEvent("skin-tone-change", { skinTone });
    state10.database.setPreferredSkinTone(skinTone);
  }
  function onSkinToneOptionsClick(event) {
    const { target: { id } } = event;
    const match = id && id.match(/^skintone-(\d)/);
    if (!match) {
      return;
    }
    halt(event);
    const skinTone = parseInt(match[1], 10);
    changeSkinTone(skinTone);
  }
  function onClickSkinToneButton(event) {
    state10.skinTonePickerExpanded = !state10.skinTonePickerExpanded;
    state10.activeSkinTone = state10.currentSkinTone;
    if (state10.skinTonePickerExpanded) {
      halt(event);
      rAF(() => focus("skintone-list"));
    }
  }
  createEffect(() => {
    if (state10.skinTonePickerExpanded) {
      refs.skinToneDropdown.addEventListener("transitionend", () => {
        state10.skinTonePickerExpandedAfterAnimation = true;
      }, { once: true });
    } else {
      state10.skinTonePickerExpandedAfterAnimation = false;
    }
  });
  function onSkinToneOptionsKeydown(event) {
    if (!state10.skinTonePickerExpanded) {
      return;
    }
    const changeActiveSkinTone = async (nextSkinTone) => {
      halt(event);
      state10.activeSkinTone = nextSkinTone;
    };
    switch (event.key) {
      case "ArrowUp":
        return changeActiveSkinTone(incrementOrDecrement(true, state10.activeSkinTone, state10.skinTones));
      case "ArrowDown":
        return changeActiveSkinTone(incrementOrDecrement(false, state10.activeSkinTone, state10.skinTones));
      case "Home":
        return changeActiveSkinTone(0);
      case "End":
        return changeActiveSkinTone(state10.skinTones.length - 1);
      case "Enter":
        halt(event);
        return changeSkinTone(state10.activeSkinTone);
      case "Escape":
        halt(event);
        state10.skinTonePickerExpanded = false;
        return focus("skintone-button");
    }
  }
  function onSkinToneOptionsKeyup(event) {
    if (!state10.skinTonePickerExpanded) {
      return;
    }
    switch (event.key) {
      case " ":
        halt(event);
        return changeSkinTone(state10.activeSkinTone);
    }
  }
  async function onSkinToneOptionsFocusOut(event) {
    const { relatedTarget } = event;
    if (!relatedTarget || relatedTarget.id !== "skintone-list") {
      state10.skinTonePickerExpanded = false;
    }
  }
  function onSearchInput(event) {
    state10.rawSearchText = event.target.value;
  }
  return {
    $set(newState) {
      assign(state10, newState);
    },
    $destroy() {
      abortController.abort();
    }
  };
}
var DEFAULT_DATA_SOURCE2 = "https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json";
var DEFAULT_LOCALE2 = "en";
var enI18n = {
  categoriesLabel: "Categories",
  emojiUnsupportedMessage: "Your browser does not support color emoji.",
  favoritesLabel: "Favorites",
  loadingMessage: "Loading\u2026",
  networkErrorMessage: "Could not load emoji.",
  regionLabel: "Emoji picker",
  searchDescription: "When search results are available, press up or down to select and enter to choose.",
  searchLabel: "Search",
  searchResultsLabel: "Search results",
  skinToneDescription: "When expanded, press up or down to select and enter to choose.",
  skinToneLabel: "Choose a skin tone (currently {skinTone})",
  skinTonesLabel: "Skin tones",
  skinTones: [
    "Default",
    "Light",
    "Medium-Light",
    "Medium",
    "Medium-Dark",
    "Dark"
  ],
  categories: {
    custom: "Custom",
    "smileys-emotion": "Smileys and emoticons",
    "people-body": "People and body",
    "animals-nature": "Animals and nature",
    "food-drink": "Food and drink",
    "travel-places": "Travel and places",
    activities: "Activities",
    objects: "Objects",
    symbols: "Symbols",
    flags: "Flags"
  }
};
var baseStyles = ':host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--border-radius:0;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);border-radius:var(--border-radius);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;scrollbar-gutter:stable;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.emoji-menu.visibility-auto{content-visibility:auto;contain-intrinsic-size:calc(var(--num-columns)*var(--total-emoji-size)) calc(var(--num-rows)*var(--total-emoji-size))}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;height:var(--total-emoji-size);width:var(--total-emoji-size);line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.onscreen .custom-emoji::after{content:"";width:var(--emoji-size);height:var(--emoji-size);background-repeat:no-repeat;background-position:center center;background-size:contain;background-image:var(--custom-emoji-background)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{overflow-y:auto;scrollbar-gutter:stable;display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}';
var PROPS = [
  "customEmoji",
  "customCategorySorting",
  "database",
  "dataSource",
  "i18n",
  "locale",
  "skinToneEmoji",
  "emojiVersion"
];
var EXTRA_STYLES = `:host{--emoji-font-family:${FONT_FAMILY}}`;
var PickerElement = class extends HTMLElement {
  constructor(props) {
    super();
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = baseStyles + EXTRA_STYLES;
    this.shadowRoot.appendChild(style);
    this._ctx = {
      // Set defaults
      locale: DEFAULT_LOCALE2,
      dataSource: DEFAULT_DATA_SOURCE2,
      skinToneEmoji: DEFAULT_SKIN_TONE_EMOJI,
      customCategorySorting: DEFAULT_CATEGORY_SORTING,
      customEmoji: null,
      i18n: enI18n,
      emojiVersion: null,
      ...props
    };
    for (const prop of PROPS) {
      if (prop !== "database" && Object.prototype.hasOwnProperty.call(this, prop)) {
        this._ctx[prop] = this[prop];
        delete this[prop];
      }
    }
    this._dbFlush();
  }
  connectedCallback() {
    rescueElementPrototype(this);
    if (!this._cmp) {
      this._cmp = createRoot(this.shadowRoot, this._ctx);
    }
  }
  disconnectedCallback() {
    rescueElementPrototype(this);
    qM(() => {
      if (!this.isConnected && this._cmp) {
        this._cmp.$destroy();
        this._cmp = void 0;
        const { database } = this._ctx;
        database.close().catch((err) => console.error(err));
      }
    });
  }
  static get observedAttributes() {
    return ["locale", "data-source", "skin-tone-emoji", "emoji-version"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    this._set(
      // convert from kebab-case to camelcase
      // see https://github.com/sveltejs/svelte/issues/3852#issuecomment-665037015
      attrName.replace(/-([a-z])/g, (_, up) => up.toUpperCase()),
      // convert string attribute to float if necessary
      attrName === "emoji-version" ? parseFloat(newValue) : newValue
    );
  }
  _set(prop, newValue) {
    this._ctx[prop] = newValue;
    if (this._cmp) {
      this._cmp.$set({ [prop]: newValue });
    }
    if (["locale", "dataSource"].includes(prop)) {
      this._dbFlush();
    }
  }
  _dbCreate() {
    const { locale, dataSource, database } = this._ctx;
    if (!database || database.locale !== locale || database.dataSource !== dataSource) {
      this._set("database", new Database({ locale, dataSource }));
    }
  }
  // Update the Database in one microtask if the locale/dataSource change. We do one microtask
  // so we don't create two Databases if e.g. both the locale and the dataSource change
  _dbFlush() {
    qM(() => this._dbCreate());
  }
};
var definitions = {};
for (const prop of PROPS) {
  definitions[prop] = {
    get() {
      if (prop === "database") {
        this._dbCreate();
      }
      return this._ctx[prop];
    },
    set(val) {
      if (prop === "database") {
        throw new Error("database is read-only");
      }
      this._set(prop, val);
    }
  };
}
Object.defineProperties(PickerElement.prototype, definitions);
function rescueElementPrototype(element) {
  if (!(element instanceof PickerElement)) {
    Object.setPrototypeOf(element, customElements.get(element.tagName.toLowerCase()).prototype);
  }
}
if (!customElements.get("emoji-picker")) {
  customElements.define("emoji-picker", PickerElement);
}

// themes/heyfam-theme/src/interactivity/reactions.js
var pickerEl = null;
var pendingTarget = null;
var outsideClickHandler = null;
store3("heyfam/reactions", {
  actions: {
    *toggle(e) {
      const container = e?.target?.closest("[data-id]");
      const id = container ? parseInt(container.dataset.id, 10) : 0;
      const target = container?.dataset.targetType || "post";
      const ctx = getContext3();
      const emoji = ctx.entry?.emoji;
      const mine = !!ctx.entry?.mine;
      if (!id || !emoji) return;
      yield apply(target, id, emoji, mine);
    },
    openPicker(e) {
      const btn = e?.currentTarget || e?.target?.closest("button") || e?.target;
      const container = e?.target?.closest("[data-id]");
      const id = container ? parseInt(container.dataset.id, 10) : 0;
      const target = container?.dataset.targetType || "post";
      if (!id || !btn) return;
      openPickerAt(btn, target, id);
    }
  }
});
function* apply(target_type, target_id, emoji, remove = false) {
  const heyfam = store3("heyfam").state;
  yield fetch(`${heyfam.apiBase}/${heyfam.famSlug}/reactions`, {
    method: remove ? "DELETE" : "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
    body: JSON.stringify({ target_type, target_id, emoji })
  });
  try {
    store3("heyfam/feed").callbacks.refresh(heyfam);
  } catch (e) {
  }
}
async function applyDirect(target_type, target_id, emoji) {
  const heyfam = store3("heyfam").state;
  await fetch(`${heyfam.apiBase}/${heyfam.famSlug}/reactions`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
    body: JSON.stringify({ target_type, target_id, emoji })
  });
  try {
    store3("heyfam/feed").callbacks.refresh(heyfam);
  } catch (e) {
  }
}
function getPicker() {
  if (pickerEl) return pickerEl;
  pickerEl = document.createElement("emoji-picker");
  pickerEl.classList.add("heyfam-emoji-picker");
  pickerEl.style.position = "absolute";
  pickerEl.style.zIndex = "1000";
  pickerEl.style.display = "none";
  pickerEl.addEventListener("emoji-click", (ev) => {
    if (pendingTarget) {
      applyDirect(pendingTarget.target_type, pendingTarget.target_id, ev.detail.unicode);
    }
    closePicker();
  });
  document.body.appendChild(pickerEl);
  return pickerEl;
}
function openPickerAt(btn, target_type, target_id) {
  const p = getPicker();
  pendingTarget = { target_type, target_id };
  const rect = btn.getBoundingClientRect();
  const pickerHeight = 400;
  const fitsBelow = rect.bottom + pickerHeight + 12 < window.innerHeight;
  const top = fitsBelow ? rect.bottom + window.scrollY + 6 : rect.top + window.scrollY - pickerHeight - 6;
  const left = Math.max(8, Math.min(rect.left + window.scrollX, window.innerWidth - 360));
  p.style.top = `${top}px`;
  p.style.left = `${left}px`;
  p.style.display = "";
  if (outsideClickHandler) document.removeEventListener("click", outsideClickHandler);
  outsideClickHandler = (ev) => {
    if (!p.contains(ev.target) && !btn.contains(ev.target)) {
      closePicker();
    }
  };
  setTimeout(() => document.addEventListener("click", outsideClickHandler), 0);
}
function closePicker() {
  if (pickerEl) pickerEl.style.display = "none";
  pendingTarget = null;
  if (outsideClickHandler) {
    document.removeEventListener("click", outsideClickHandler);
    outsideClickHandler = null;
  }
}

// themes/heyfam-theme/src/interactivity/comments.js
import { store as store4, getContext as getContext4 } from "@wordpress/interactivity";
store4("heyfam/comments", {
  state: {
    composing: 0,
    // 0 = no inline composer open; otherwise the parent comment id
    body: "",
    submitting: false
  },
  actions: {
    reply() {
      const ctx = getContext4("heyfam/feed");
      const id = ctx?.comment?.id ? parseInt(ctx.comment.id, 10) : 0;
      if (!id) return;
      const s = store4("heyfam/comments").state;
      closeOpenInlineForms();
      if (s.composing === id) {
        s.composing = 0;
        return;
      }
      s.composing = id;
      s.body = "";
      const form = document.querySelector(`article.heyfam-comment[data-id="${id}"] .heyfam-comment-form--inline`);
      if (form) {
        form.classList.add("is-open");
        form.querySelector("textarea")?.focus();
      }
    },
    updateBody(e) {
      store4("heyfam/comments").state.body = e.target.value;
      autoSize2(e.target);
    },
    autosize(e) {
      autoSize2(e.target);
    },
    *submit(e) {
      e.preventDefault();
      const form = e.target;
      const postCard = form.closest('[data-target-type="post"]');
      const post_id = postCard ? parseInt(postCard.dataset.id, 10) : 0;
      if (!post_id) return;
      const isRoot = form.classList.contains("heyfam-comment-form--root");
      const ta = form.querySelector("textarea");
      const s = store4("heyfam/comments").state;
      if (s.submitting) return;
      const draft = isRoot ? ta?.value || "" : s.body;
      const body = draft.trim();
      if (!body) return;
      const parent_id = isRoot ? 0 : s.composing;
      s.submitting = true;
      const heyfam = store4("heyfam").state;
      try {
        const r = yield fetch(`${heyfam.apiBase}/${heyfam.famSlug}/comments`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "X-WP-Nonce": heyfam.nonce
          },
          body: JSON.stringify({ post_id, parent_id, body })
        });
        if (!r.ok) throw new Error("comment-failed");
        if (isRoot) {
          if (ta) {
            ta.value = "";
            autoSize2(ta);
          }
        } else {
          s.body = "";
          s.composing = 0;
          closeOpenInlineForms();
        }
        store4("heyfam/feed").callbacks.refresh(heyfam);
      } catch (err) {
        alert("Could not comment. Try again.");
      } finally {
        s.submitting = false;
      }
    }
  }
});
function closeOpenInlineForms() {
  document.querySelectorAll(".heyfam-comment-form--inline.is-open").forEach((el) => el.classList.remove("is-open"));
}
var AUTOSIZE_MAX2 = 200;
function autoSize2(el) {
  if (!el || el.tagName !== "TEXTAREA") return;
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, AUTOSIZE_MAX2) + "px";
  el.style.overflowY = el.scrollHeight > AUTOSIZE_MAX2 ? "auto" : "hidden";
}

// themes/heyfam-theme/src/interactivity/polls.js
import { store as store5 } from "@wordpress/interactivity";
store5("heyfam/polls", {
  actions: {
    *vote(e) {
      const btn = e.currentTarget;
      const idx = btn ? parseInt(btn.dataset.optionIndex, 10) : -1;
      const card = btn ? btn.closest("[data-post-id]") : null;
      const pid = card ? parseInt(card.dataset.postId, 10) : 0;
      if (!pid || Number.isNaN(idx) || idx < 0) return;
      const heyfam = store5("heyfam").state;
      try {
        const r = yield fetch(`${heyfam.apiBase}/${heyfam.famSlug}/poll-vote`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
          body: JSON.stringify({ post_id: pid, option_index: idx })
        });
        if (!r.ok) {
          const body = yield r.json().catch(() => ({}));
          if (body?.error === "closed") {
            alert("This poll has closed.");
          } else {
            alert("Could not vote. Try again.");
          }
          return;
        }
        store5("heyfam/feed").callbacks?.refresh?.(heyfam);
      } catch (err) {
        alert("Could not vote. Try again.");
      }
    }
  }
});

// themes/heyfam-theme/src/interactivity/feed-poll.js
import { store as store6, getContext as getContext5 } from "@wordpress/interactivity";

// themes/heyfam-theme/src/lib/dom.js
function currentPostIdFromClass(className) {
  const m = (className || "").match(/\bpostid-(\d+)\b/);
  return m ? parseInt(m[1], 10) : 0;
}
function currentPostId() {
  return typeof document === "undefined" ? 0 : currentPostIdFromClass(document.body.className);
}

// themes/heyfam-theme/src/interactivity/feed-poll.js
var { state: state2 } = store6("heyfam/feed", {
  state: {
    lastFetch: null,
    // Delete-confirm dialog state.
    deleteOpen: false,
    deleteTargetId: 0,
    deleting: false,
    deleteError: ""
  },
  actions: {
    togglePostMenu() {
      const ctx = getContext5();
      const id = ctx?.item?.id;
      if (!id || !Array.isArray(state2.posts)) return;
      const willOpen = !ctx.item.menuOpen;
      for (const p of state2.posts) p.menuOpen = false;
      ctx.item.menuOpen = willOpen;
    },
    *copyPostLink() {
      const ctx = getContext5();
      const url = ctx?.item?.permalink;
      if (ctx?.item) ctx.item.menuOpen = false;
      if (!url) return;
      try {
        yield navigator.clipboard.writeText(url);
      } catch (err) {
        window.prompt("Copy this link", url);
      }
    },
    editPost() {
      const ctx = getContext5();
      const post = ctx?.item;
      if (post) post.menuOpen = false;
      if (!post) return;
      store6("heyfam/composer").actions.openEditor(post);
    },
    deletePost() {
      const ctx = getContext5();
      const id = ctx?.item?.id;
      if (ctx?.item) ctx.item.menuOpen = false;
      if (!id) return;
      state2.deleteTargetId = id;
      state2.deleteError = "";
      state2.deleteOpen = true;
      document.body.classList.add("heyfam-modal-open");
    },
    closeDeleteConfirm() {
      if (state2.deleting) return;
      state2.deleteOpen = false;
      state2.deleteTargetId = 0;
      state2.deleteError = "";
      document.body.classList.remove("heyfam-modal-open");
    },
    onDeleteBackdrop(e) {
      if (e.target.classList?.contains("heyfam-modal")) {
        store6("heyfam/feed").actions.closeDeleteConfirm();
      }
    },
    *confirmDelete() {
      const id = state2.deleteTargetId;
      if (!id || state2.deleting) return;
      state2.deleting = true;
      state2.deleteError = "";
      const heyfam = store6("heyfam").state;
      try {
        const r = yield fetch(`${heyfam.apiBase}/${heyfam.famSlug}/post/${id}`, {
          method: "DELETE",
          credentials: "include",
          headers: { "X-WP-Nonce": heyfam.nonce }
        });
        if (!r.ok) throw new Error("delete-failed");
        if (Array.isArray(state2.posts)) {
          state2.posts = state2.posts.filter((p) => p.id !== id);
          state2.hasPosts = state2.posts.length > 0;
        }
        state2.deleteOpen = false;
        state2.deleteTargetId = 0;
        document.body.classList.remove("heyfam-modal-open");
        if (currentPostId() === id) {
          window.location.href = `/${heyfam.famSlug}/`;
          return;
        }
        store6("heyfam/feed").callbacks?.refresh?.(heyfam);
      } catch (err) {
        state2.deleteError = "Could not delete. Try again.";
      } finally {
        state2.deleting = false;
      }
    }
  },
  callbacks: {
    *bootstrap() {
      const heyfam = store6("heyfam").state;
      setInterval(() => store6("heyfam/feed").callbacks.refresh(heyfam), 1e4);
      document.addEventListener("click", (ev) => {
        if (!Array.isArray(state2.posts)) return;
        if (ev.target?.closest?.(".heyfam-menu")) return;
        for (const p of state2.posts) if (p.menuOpen) p.menuOpen = false;
      });
    },
    *refresh(heyfam) {
      if (!heyfam.famSlug) return;
      const post_id = currentPostId();
      const url = post_id ? `${heyfam.apiBase}/${heyfam.famSlug}/post/${post_id}` : `${heyfam.apiBase}/${heyfam.famSlug}/feed`;
      const r = yield fetch(url, {
        credentials: "include",
        headers: { "X-WP-Nonce": heyfam.nonce }
      });
      if (!r.ok) return;
      const body = yield r.json();
      state2.posts = post_id ? body.post ? [body.post] : [] : body.posts || [];
      state2.hasPosts = state2.posts.length > 0;
      state2.lastFetch = body.now;
    }
  }
});

// themes/heyfam-theme/src/interactivity/landing.js
import { store as store7 } from "@wordpress/interactivity";
store7("heyfam/landing", {
  state: {}
});

// themes/heyfam-theme/src/interactivity/push-subscribe.js
import { store as store8 } from "@wordpress/interactivity";
if ("serviceWorker" in navigator && "PushManager" in window) {
  window.addEventListener("load", register);
}
async function register() {
  const heyfam = store8("heyfam").state;
  if (!heyfam.userId || !heyfam.vapidKey) return;
  const reg = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
  let permission = Notification.permission;
  if (permission === "default") {
    return;
  }
  if (permission !== "granted") return;
  const sub = await reg.pushManager.getSubscription() || await reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(heyfam.vapidKey)
  });
  await fetch(`${heyfam.apiBase}/push/subscribe`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
    body: JSON.stringify({
      endpoint: sub.endpoint,
      p256dh: arrayBufferToBase64(sub.getKey("p256dh")),
      auth: arrayBufferToBase64(sub.getKey("auth")),
      expiration_time: sub.expirationTime || null
    })
  });
}
function urlBase64ToUint8Array(b64) {
  const padding = "=".repeat((4 - b64.length % 4) % 4);
  const base64 = (b64 + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}
function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let bin = "";
  for (let i = 0; i < bytes.byteLength; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

// themes/heyfam-theme/src/interactivity/signup.js
import { store as store9 } from "@wordpress/interactivity";

// themes/heyfam-theme/src/lib/phone.js
function normalizePhone(raw) {
  const digits = (raw || "").replace(/[^0-9+]/g, "");
  if (!digits.startsWith("+")) return null;
  if (digits.length < 8 || digits.length > 16) return null;
  return digits;
}
function parsePhoneList(raw) {
  if (!raw) return [];
  const candidates = raw.split(/[\s,;]+/).filter(Boolean);
  const seen = /* @__PURE__ */ new Set();
  return candidates.map((c) => {
    const e164 = normalizePhone(c);
    const valid = !!e164 && !seen.has(e164);
    if (valid) seen.add(e164);
    return { raw: c, e164: e164 || c, valid };
  });
}

// themes/heyfam-theme/src/lib/slug.js
function slugify(s) {
  return (s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// themes/heyfam-theme/src/interactivity/signup.js
var { state: state3, actions: actions2 } = store9("heyfam/signup", {
  state: {
    step: "phone",
    phone: "",
    code: "",
    name: "",
    famName: "",
    famSlug: "",
    inviteText: "",
    inviteNote: "",
    parsedPhones: [],
    parsedPhonesEntries: [],
    inviteResults: [],
    inviteResultsEntries: [],
    famUrl: "",
    error: "",
    busy: false,
    title: "Start a fam",
    devMode: false,
    hasContactPicker: false,
    // IAPI directives only react to direct property access. Plain getters
    // computed off other state aren't picked up at hydration, so we keep
    // visibility flags as plain reactive props and toggle them in setStep().
    step1Hidden: false,
    step2Hidden: true,
    step3Hidden: true,
    step4Hidden: true,
    stepperStep1Current: true,
    stepperStep1Done: false,
    stepperStep2Current: false,
    stepperStep2Done: false,
    stepperStep3Current: false,
    stepperStep3Done: false,
    stepperStep4Current: false,
    stepperStep4Done: false
  },
  actions: {
    updatePhone(e) {
      state3.phone = e.target.value;
      state3.error = "";
    },
    updateCode(e) {
      state3.code = e.target.value.replace(/\D/g, "");
      state3.error = "";
    },
    updateName(e) {
      state3.name = e.target.value;
      state3.error = "";
    },
    updateFamName(e) {
      state3.famName = e.target.value;
      if (!state3.famSlug || state3.famSlug === slugify(state3.famName.slice(0, -1))) {
        state3.famSlug = slugify(e.target.value);
      }
      state3.error = "";
    },
    updateFamSlug(e) {
      state3.famSlug = slugify(e.target.value);
      state3.error = "";
    },
    updateInviteText(e) {
      state3.inviteText = e.target.value;
      reparsePhones();
    },
    updateInviteNote(e) {
      state3.inviteNote = e.target.value.slice(0, 120);
    },
    backToPhone() {
      setStep("phone");
      state3.code = "";
      state3.error = "";
    },
    *submitPhone(e) {
      e.preventDefault();
      if (state3.busy) return;
      const phone = normalizePhone(state3.phone);
      if (!phone) {
        state3.error = "Phone must start with + and country code (e.g. +15555550100).";
        return;
      }
      state3.phone = phone;
      state3.busy = true;
      try {
        const heyfam = store9("heyfam").state;
        const r = yield fetch(`${heyfam.apiBase}/signup/start`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone })
        });
        if (!r.ok) throw new Error("send-failed");
        setStep("code");
      } catch (err) {
        state3.error = "Could not send code. Try again.";
      } finally {
        state3.busy = false;
      }
    },
    *submitCode(e) {
      e.preventDefault();
      if (state3.busy) return;
      if (state3.code.length !== 6) {
        state3.error = "Enter the 6-digit code.";
        return;
      }
      setStep("fam");
    },
    *submitFam(e) {
      e.preventDefault();
      if (state3.busy) return;
      if (!state3.name.trim()) {
        state3.error = "Enter your name.";
        return;
      }
      if (!state3.famName.trim()) {
        state3.error = "Name your fam.";
        return;
      }
      if (!/^[a-z0-9][a-z0-9-]{1,30}[a-z0-9]$/.test(state3.famSlug)) {
        state3.error = "Fam URL: 3-32 letters/numbers/hyphens, no leading/trailing hyphen.";
        return;
      }
      state3.busy = true;
      try {
        const heyfam = store9("heyfam").state;
        const v = yield fetch(`${heyfam.apiBase}/signup/verify`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: state3.phone,
            code: state3.code,
            display_name: state3.name,
            fam_name: state3.famName,
            fam_slug: state3.famSlug
          })
        });
        const body = yield v.json().catch(() => ({}));
        if (!v.ok || !body.ok) {
          if (body.error === "bad_code") {
            state3.error = "Wrong code. Try again.";
            setStep("code");
          } else if (["slug_taken", "invalid_slug", "reserved_slug"].includes(body.error)) {
            state3.error = body.message || "That fam URL is unavailable.";
          } else {
            state3.error = body.message || "Could not verify. Try again.";
          }
          state3.busy = false;
          return;
        }
        if (body.nonce) {
          store9("heyfam").state.nonce = body.nonce;
        }
        state3.famUrl = body.fam_url || "";
        setStep("invite");
      } catch (err) {
        state3.error = "Network error. Try again.";
      } finally {
        state3.busy = false;
      }
    },
    *pickContacts() {
      if (!("contacts" in navigator) || !("ContactsManager" in window)) return;
      try {
        const picked = yield navigator.contacts.select(["tel"], { multiple: true });
        if (!picked || !picked.length) return;
        const phones = picked.flatMap((c) => c.tel || []);
        const existing = state3.inviteText.trim();
        state3.inviteText = existing ? existing + "\n" + phones.join("\n") : phones.join("\n");
        reparsePhones();
      } catch (err) {
      }
    },
    *submitInvites(e) {
      e.preventDefault();
      if (state3.busy) return;
      const heyfam = store9("heyfam").state;
      const famSlug = state3.famSlug;
      const valid = state3.parsedPhones.filter((p) => p.valid).map((p) => p.e164);
      if (!valid.length) {
        yield actions2.skipInvites();
        return;
      }
      state3.busy = true;
      try {
        const r = yield fetch(`${heyfam.apiBase}/${famSlug}/invites`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
          body: JSON.stringify({ phones: valid, message_note: state3.inviteNote || "" })
        });
        const body = yield r.json().catch(() => ({}));
        if (!r.ok) {
          state3.error = body.message || "Could not send invites. Try again.";
          state3.busy = false;
          return;
        }
        state3.inviteResults = body.issued || [];
        state3.inviteResultsEntries = state3.inviteResults.map((v, i) => [i, v]);
        if (state3.famUrl) {
          window.location.href = state3.famUrl;
          return;
        }
        window.location.href = "/";
      } catch (err) {
        state3.error = "Network error. Try again.";
      } finally {
        state3.busy = false;
      }
    },
    *skipInvites() {
      const heyfam = store9("heyfam").state;
      try {
        yield fetch(`${heyfam.apiBase}/me/skip-invites`, {
          method: "POST",
          credentials: "include",
          headers: { "X-WP-Nonce": heyfam.nonce }
        });
      } catch (err) {
      }
      if (state3.famUrl) {
        window.location.href = state3.famUrl;
        return;
      }
      window.location.href = "/account";
    }
  },
  callbacks: {
    *init() {
      state3.devMode = !!store9("heyfam").state.devMode;
      state3.hasContactPicker = "contacts" in navigator && "ContactsManager" in window;
      state3.step1Hidden = !state3.step1Hidden;
      state3.step2Hidden = !state3.step2Hidden;
      state3.step3Hidden = !state3.step3Hidden;
      state3.step4Hidden = !state3.step4Hidden;
      setStep(state3.step);
      const heyfam = store9("heyfam").state;
      if (heyfam.userId) {
        try {
          const r = yield fetch(`${heyfam.apiBase}/me/fams`, {
            credentials: "include",
            headers: { "X-WP-Nonce": heyfam.nonce }
          });
          if (r.ok) {
            const body = yield r.json();
            const fams = body.fams || [];
            if (fams.length && fams[0].url) {
              window.location.href = fams[0].url;
              return;
            }
            setStep("fam");
            return;
          }
        } catch (err) {
        }
      }
    }
  }
});
function setStep(next) {
  state3.step = next;
  state3.step1Hidden = next !== "phone";
  state3.step2Hidden = next !== "code";
  state3.step3Hidden = next !== "fam";
  state3.step4Hidden = next !== "invite";
  const order = { phone: 1, code: 2, fam: 3, invite: 4 };
  const n = order[next] || 1;
  for (let i = 1; i <= 4; i++) {
    state3[`stepperStep${i}Current`] = i === n;
    state3[`stepperStep${i}Done`] = i < n;
  }
}
function reparsePhones() {
  const parsed = parsePhoneList(state3.inviteText);
  state3.parsedPhones = parsed;
  state3.parsedPhonesEntries = parsed.map((v, i) => [i, v]);
}

// themes/heyfam-theme/src/interactivity/login.js
import { store as store10 } from "@wordpress/interactivity";
var { state: state4, actions: actions3 } = store10("heyfam/login", {
  state: {
    stage: "phone",
    phone: "",
    code: "",
    error: "",
    busy: false,
    // IAPI directives only react to direct property access. Plain getters
    // computed off other state aren't picked up at hydration, so we keep
    // visibility flags as plain reactive props and toggle them in setStage().
    phoneFormHidden: false,
    codeFormHidden: true
  },
  actions: {
    updatePhone(e) {
      state4.phone = e.target.value;
      state4.error = "";
    },
    updateCode(e) {
      state4.code = e.target.value.replace(/\D/g, "");
      state4.error = "";
    },
    backToPhone() {
      setStage("phone");
      state4.code = "";
      state4.error = "";
    },
    *submitPhone(e) {
      e.preventDefault();
      if (state4.busy) return;
      const phone = normalizePhone(state4.phone);
      if (!phone) {
        state4.error = "Phone must start with + and country code (e.g. +15555550100).";
        return;
      }
      state4.phone = phone;
      state4.busy = true;
      try {
        const heyfam = store10("heyfam").state;
        const r = yield fetch(`${heyfam.apiBase}/login/start`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone })
        });
        if (!r.ok) throw new Error("send-failed");
        setStage("code");
      } catch (err) {
        state4.error = "Could not send code. Try again.";
      } finally {
        state4.busy = false;
      }
    },
    *submitCode(e) {
      e.preventDefault();
      if (state4.busy) return;
      if (state4.code.length !== 6) {
        state4.error = "Enter the 6-digit code.";
        return;
      }
      state4.busy = true;
      try {
        const heyfam = store10("heyfam").state;
        const v = yield fetch(`${heyfam.apiBase}/login/verify`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: state4.phone, code: state4.code })
        });
        if (!v.ok) {
          const body = yield v.json().catch(() => ({}));
          state4.error = body.error === "bad_code" ? "Wrong code or unknown phone. Try again." : "Could not verify. Try again.";
          state4.busy = false;
          return;
        }
        const vbody = yield v.json().catch(() => ({}));
        if (vbody && vbody.nonce) heyfam.nonce = vbody.nonce;
        const f = yield fetch(`${heyfam.apiBase}/me/fams`, {
          method: "GET",
          credentials: "include",
          headers: { "X-WP-Nonce": heyfam.nonce }
        });
        const fbody = yield f.json().catch(() => ({}));
        const fams = fbody && fbody.fams || [];
        if (fams.length && fams[0].url) {
          window.location.href = fams[0].url;
          return;
        }
        window.location.href = "/";
      } catch (err) {
        state4.error = "Network error. Try again.";
        state4.busy = false;
      }
    }
  },
  callbacks: {
    init() {
      state4.phoneFormHidden = !state4.phoneFormHidden;
      state4.codeFormHidden = !state4.codeFormHidden;
      setStage(state4.stage);
    }
  }
});
function setStage(next) {
  state4.stage = next;
  state4.phoneFormHidden = next !== "phone";
  state4.codeFormHidden = next !== "code";
}

// themes/heyfam-theme/src/interactivity/invite.js
import { store as store11 } from "@wordpress/interactivity";
var { state: state5, actions: actions4 } = store11("heyfam/invite", {
  state: {
    stage: "phone",
    code: "",
    // invite code, from query string
    phone: "",
    smsCode: "",
    name: "",
    famName: "",
    inviter: "",
    phoneHint: "",
    previewLoaded: false,
    previewError: "",
    error: "",
    busy: false,
    isAuthed: false,
    // IAPI directives only react to direct property access. Plain getters
    // computed off other state aren't picked up at hydration, so we keep
    // visibility flags as plain reactive props and recompute them whenever
    // the inputs change. phoneFormHidden depends on both stage and
    // previewError — a broken invite link should keep the form hidden.
    phoneFormHidden: false,
    codeFormHidden: true,
    loggedInFormHidden: true
  },
  actions: {
    updatePhone(e) {
      state5.phone = e.target.value;
      state5.error = "";
    },
    updateCode(e) {
      state5.smsCode = e.target.value.replace(/\D/g, "");
      state5.error = "";
    },
    updateName(e) {
      state5.name = e.target.value;
      state5.error = "";
    },
    backToPhone() {
      setStage2("phone");
      state5.smsCode = "";
      state5.error = "";
    },
    *submitPhone(e) {
      e.preventDefault();
      if (state5.busy) return;
      const phone = normalizePhone2(state5.phone);
      if (!phone) {
        state5.error = "Phone must start with + and country code (e.g. +15555550100).";
        return;
      }
      state5.phone = phone;
      state5.busy = true;
      try {
        const heyfam = store11("heyfam").state;
        const r = yield fetch(`${heyfam.apiBase}/signup/start`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone })
        });
        if (!r.ok) throw new Error("send-failed");
        setStage2("code");
      } catch (err) {
        state5.error = "Could not send code. Try again.";
      } finally {
        state5.busy = false;
      }
    },
    *submitCode(e) {
      e.preventDefault();
      if (state5.busy) return;
      if (state5.smsCode.length !== 6) {
        state5.error = "Enter the 6-digit code.";
        return;
      }
      state5.busy = true;
      try {
        const heyfam = store11("heyfam").state;
        const r = yield fetch(`${heyfam.apiBase}/invites/accept`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            code: state5.code,
            phone: state5.phone,
            sms_code: state5.smsCode,
            display_name: state5.name
          })
        });
        const body = yield r.json().catch(() => ({}));
        if (!r.ok) {
          if (body.error === "bad_code") state5.error = "Wrong code. Try again.";
          else if (body.error === "invalid_or_expired") state5.error = "This invite is no longer valid.";
          else if (body.error === "locked_out") state5.error = "Too many tries. Wait a bit.";
          else state5.error = "Could not accept invite. Try again.";
          state5.busy = false;
          return;
        }
        window.location.href = body.url;
      } catch (err) {
        state5.error = "Network error. Try again.";
        state5.busy = false;
      }
    },
    *joinAsCurrentUser(e) {
      e.preventDefault();
      if (state5.busy) return;
      state5.busy = true;
      try {
        const heyfam = store11("heyfam").state;
        const r = yield fetch(`${heyfam.apiBase}/invites/accept`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
          body: JSON.stringify({ code: state5.code })
        });
        const body = yield r.json().catch(() => ({}));
        if (!r.ok) {
          if (body.error === "invalid_or_expired") state5.error = "This invite is no longer valid.";
          else if (body.error === "no_user_phone") state5.error = "This invite was sent to a different number than the one on your account.";
          else state5.error = "Could not join. Try again.";
          state5.busy = false;
          return;
        }
        window.location.href = body.url;
      } catch (err) {
        state5.error = "Network error. Try again.";
        state5.busy = false;
      }
    }
  },
  callbacks: {
    *init() {
      state5.phoneFormHidden = !state5.phoneFormHidden;
      state5.codeFormHidden = !state5.codeFormHidden;
      state5.loggedInFormHidden = !state5.loggedInFormHidden;
      const heyfam = store11("heyfam").state;
      state5.isAuthed = !!heyfam.userId;
      recomputeVisibility();
      const params = new URLSearchParams(window.location.search);
      const code = params.get("heyfam_invite_code") || "";
      if (!code) {
        setPreviewError("No invite code in URL. Check the link your inviter sent you.");
        return;
      }
      state5.code = code;
      try {
        const r = yield fetch(
          `${heyfam.apiBase}/invites/preview?code=${encodeURIComponent(code)}`,
          { credentials: "include" }
        );
        const body = yield r.json().catch(() => ({}));
        if (!r.ok) {
          if (body.error === "used") setPreviewError("This invite has already been used.");
          else if (body.error === "expired") setPreviewError("This invite has expired.");
          else setPreviewError("This invite link is not valid.");
          return;
        }
        state5.famName = body.fam_name;
        state5.inviter = body.inviter;
        state5.phoneHint = body.phone_hint;
        state5.previewLoaded = true;
        recomputeVisibility();
      } catch (err) {
        setPreviewError("Could not load invite. Check your connection.");
      }
    }
  }
});
function recomputeVisibility() {
  if (state5.isAuthed) {
    state5.phoneFormHidden = true;
    state5.codeFormHidden = true;
    state5.loggedInFormHidden = !state5.previewLoaded || !!state5.previewError;
    return;
  }
  state5.phoneFormHidden = state5.stage !== "phone" || !!state5.previewError;
  state5.codeFormHidden = state5.stage !== "code";
  state5.loggedInFormHidden = true;
}
function setStage2(next) {
  state5.stage = next;
  recomputeVisibility();
}
function setPreviewError(err) {
  state5.previewError = err;
  recomputeVisibility();
}
function normalizePhone2(raw) {
  const digits = (raw || "").replace(/[^0-9+]/g, "");
  if (!digits.startsWith("+")) return null;
  if (digits.length < 8 || digits.length > 16) return null;
  return digits;
}

// themes/heyfam-theme/src/interactivity/account.js
var import_cropperjs = __toESM(require_cropper());
import { store as store12 } from "@wordpress/interactivity";
var prefsDebounce = null;
var sideTable = {
  cameraStream: null,
  cropper: null,
  pendingObjectUrl: null
};
var initialPushPermission = typeof Notification !== "undefined" ? Notification.permission : "denied";
var isMobileDevice = () => /Mobi|Android|iPhone|iPad/.test(navigator.userAgent || "");
var emptyFam = () => ({
  slug: "",
  name: "",
  blog_id: 0,
  url: "",
  prefs: defaultPrefs(),
  inviteUrl: "",
  inviteRecipients: "",
  inviteNote: "",
  sendingInvites: false,
  inviteStatus: "",
  qrOpen: false,
  qrSvg: ""
});
var { state: state6, actions: actions5 } = store12("heyfam/account", {
  state: {
    fam: emptyFam(),
    loading: true,
    loadError: "",
    pushPermission: initialPushPermission,
    me: { name: "", avatar_url: "", has_uploaded_avatar: false },
    // Native share sheet availability — set in init() so directives can hide
    // the Share button on browsers without navigator.share.
    canShare: false,
    // Camera + crop flow.
    cameraOpen: false,
    cameraReady: false,
    cameraError: "",
    cropOpen: false,
    cropSrc: "",
    uploading: false,
    get logoutUrl() {
      return store12("heyfam").state.logoutUrl || "/wp-login.php?action=logout";
    },
    get newFamUrl() {
      return store12("heyfam").state.newFamUrl || "/signup";
    },
    // IAPI directives only react to direct property access. Plain getters
    // computed off other state aren't picked up at hydration, so we keep
    // visibility flags as plain reactive props and recompute them whenever
    // pushPermission changes.
    pushNotEnabled: initialPushPermission !== "default",
    pushNotGranted: initialPushPermission !== "granted",
    pushNotDenied: initialPushPermission !== "denied"
  },
  actions: {
    *togglePref(e) {
      const event = e.target.getAttribute("data-event");
      const channel = e.target.getAttribute("data-channel");
      const checked = !!e.target.checked;
      if (!state6.fam.slug) return;
      state6.fam.prefs[event][channel] = checked;
      if (prefsDebounce) clearTimeout(prefsDebounce);
      prefsDebounce = setTimeout(savePrefs, 500);
    },
    *requestPush() {
      if (typeof Notification === "undefined") return;
      try {
        const result = yield Notification.requestPermission();
        state6.pushPermission = result;
        recomputeVisibility2();
        if (result === "granted") {
          window.location.reload();
        }
      } catch (err) {
      }
    },
    *onPhotoChosen(e) {
      const file = e?.target?.files?.[0];
      if (e?.target) e.target.value = "";
      if (file) openCrop(file);
    },
    *takePhoto() {
      if (isMobileDevice()) {
        document.querySelector("[data-camera-input]")?.click();
        return;
      }
      state6.cameraError = "";
      state6.cameraReady = false;
      state6.cameraOpen = true;
      if (!navigator.mediaDevices?.getUserMedia) {
        state6.cameraError = "This browser does not support camera capture.";
        return;
      }
      try {
        const stream = yield navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
        sideTable.cameraStream = stream;
        const video = document.querySelector(".heyfam-camera__video");
        if (video) {
          video.srcObject = stream;
          yield new Promise((resolve) => video.addEventListener("loadedmetadata", resolve, { once: true }));
          state6.cameraReady = true;
        }
      } catch (err) {
        state6.cameraError = err?.name === "NotAllowedError" ? "Camera permission was denied." : "Could not access the camera.";
      }
    },
    *capturePhoto() {
      const video = document.querySelector(".heyfam-camera__video");
      if (!video || !video.videoWidth) return;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      const blob = yield new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
      stopCamera();
      if (blob) openCrop(blob);
    },
    *closeCamera() {
      stopCamera();
    },
    *closeCrop() {
      destroyCropper();
    },
    *saveCrop() {
      if (!sideTable.cropper) return;
      state6.uploading = true;
      const canvas = sideTable.cropper.getCroppedCanvas({
        width: 512,
        height: 512,
        imageSmoothingQuality: "high"
      });
      const blob = yield new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.9));
      if (!blob) {
        state6.uploading = false;
        return;
      }
      const heyfam = store12("heyfam").state;
      const fd = new FormData();
      fd.append("photo", blob, "avatar.jpg");
      try {
        const r = yield fetch(`${heyfam.apiBase}/me/avatar`, {
          method: "POST",
          credentials: "include",
          headers: { "X-WP-Nonce": heyfam.nonce },
          body: fd
        });
        if (!r.ok) throw new Error("avatar-failed");
        const body = yield r.json();
        state6.me.avatar_url = body.avatar_url;
        state6.me.has_uploaded_avatar = true;
        destroyCropper();
      } catch (err) {
        alert("Could not upload photo. Try again.");
      } finally {
        state6.uploading = false;
      }
    },
    *onFamNameInput(e) {
      state6.fam.name = e.target.value;
    },
    *saveFamName(e) {
      e.preventDefault();
      if (!state6.fam.slug) return;
      const name = (state6.fam.name || "").trim();
      if (!name) return;
      const heyfam = store12("heyfam").state;
      try {
        const r = yield fetch(`${heyfam.apiBase}/${state6.fam.slug}/name`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
          body: JSON.stringify({ name })
        });
        if (!r.ok) throw new Error("rename-failed");
        const body = yield r.json();
        if (body && body.name) state6.fam.name = body.name;
      } catch (err) {
        alert("Could not save the family name. Try again.");
      }
    },
    selectAll(e) {
      if (e?.target?.select) e.target.select();
    },
    updateInviteRecipients(e) {
      state6.fam.inviteRecipients = e.target.value;
    },
    updateInviteNote(e) {
      state6.fam.inviteNote = e.target.value;
    },
    *copyInviteLink() {
      if (!state6.fam.inviteUrl) return;
      try {
        yield navigator.clipboard.writeText(state6.fam.inviteUrl);
        state6.fam.inviteStatus = "Link copied.";
        setTimeout(() => {
          if (state6.fam.inviteStatus === "Link copied.") state6.fam.inviteStatus = "";
        }, 2500);
      } catch (err) {
        state6.fam.inviteStatus = "Could not copy. Long-press the link to copy manually.";
      }
    },
    *shareInviteLink() {
      if (!state6.fam.inviteUrl || !navigator.share) return;
      try {
        yield navigator.share({ title: `Join ${state6.fam.name} on HeyFam`, url: state6.fam.inviteUrl });
      } catch (err) {
      }
    },
    *toggleQr(e) {
      state6.fam.qrOpen = !state6.fam.qrOpen;
      if (state6.fam.qrOpen && !state6.fam.qrSvg) {
        try {
          const { default: QRCode } = yield import("./qrcode-XDD3E3FV.js");
          const qr = new QRCode({
            content: state6.fam.inviteUrl,
            padding: 2,
            width: 192,
            height: 192,
            color: "#1a1f17",
            background: "#f4f6f0",
            ecl: "M",
            join: true
          });
          state6.fam.qrSvg = qr.svg();
          const host = e.target.closest(".heyfam-account__fam")?.querySelector(".heyfam-account__invite-qr");
          if (host) host.innerHTML = state6.fam.qrSvg;
        } catch (err) {
          state6.fam.qrOpen = false;
          alert("Could not render the QR code.");
        }
      }
    },
    *sendInvites(e) {
      e.preventDefault();
      if (!state6.fam.slug || state6.fam.sendingInvites) return;
      const raw = (state6.fam.inviteRecipients || "").split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
      if (!raw.length) {
        state6.fam.inviteStatus = "Add at least one phone number or email.";
        return;
      }
      state6.fam.sendingInvites = true;
      state6.fam.inviteStatus = "";
      const heyfam = store12("heyfam").state;
      try {
        const r = yield fetch(`${heyfam.apiBase}/${state6.fam.slug}/invites`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
          body: JSON.stringify({ recipients: raw, message_note: state6.fam.inviteNote || "" })
        });
        if (!r.ok) throw new Error("invite-failed");
        const body = yield r.json();
        const sent = (body.issued || []).filter((i) => i.sent).length;
        const skipped = (body.skipped || []).length;
        state6.fam.inviteStatus = `Sent ${sent}${skipped ? ` (${skipped} skipped \u2014 invalid)` : ""}.`;
        state6.fam.inviteRecipients = "";
        state6.fam.inviteNote = "";
      } catch (err) {
        state6.fam.inviteStatus = "Could not send. Try again.";
      } finally {
        state6.fam.sendingInvites = false;
      }
    },
    *clearAvatar() {
      const heyfam = store12("heyfam").state;
      try {
        const r = yield fetch(`${heyfam.apiBase}/me/avatar`, {
          method: "DELETE",
          credentials: "include",
          headers: { "X-WP-Nonce": heyfam.nonce }
        });
        if (!r.ok) throw new Error("reset-failed");
        const body = yield r.json();
        state6.me.avatar_url = body.avatar_url;
        state6.me.has_uploaded_avatar = false;
      } catch (err) {
        alert("Could not reset. Try again.");
      }
    }
  },
  callbacks: {
    *loadMe() {
      const heyfam = store12("heyfam").state;
      if (!heyfam.userId) return;
      try {
        const r = yield fetch(`${heyfam.apiBase}/me`, {
          credentials: "include",
          headers: { "X-WP-Nonce": heyfam.nonce }
        });
        if (!r.ok) return;
        const body = yield r.json();
        state6.me.name = body.name || "";
        state6.me.avatar_url = body.avatar_url || "";
        state6.me.has_uploaded_avatar = !!body.has_uploaded_avatar;
      } catch (err) {
      }
    },
    *init() {
      state6.pushNotEnabled = !state6.pushNotEnabled;
      state6.pushNotGranted = !state6.pushNotGranted;
      state6.pushNotDenied = !state6.pushNotDenied;
      state6.canShare = typeof navigator !== "undefined" && typeof navigator.share === "function";
      recomputeVisibility2();
      const heyfam = store12("heyfam").state;
      if (!heyfam.userId) {
        window.location.href = "/login";
        return;
      }
      const slug = heyfam.famSlug;
      if (!slug) {
        state6.loading = false;
        state6.loadError = "This settings page must be opened from a family.";
        return;
      }
      try {
        const headers = { "X-WP-Nonce": heyfam.nonce };
        const [famsResp, prefsResp, linkResp] = yield Promise.all([
          fetch(`${heyfam.apiBase}/me/fams`, { credentials: "include", headers }).catch(() => null),
          fetch(`${heyfam.apiBase}/${slug}/prefs`, { credentials: "include", headers }).catch(() => null),
          fetch(`${heyfam.apiBase}/${slug}/invite-link`, { credentials: "include", headers }).catch(() => null)
        ]);
        let famRecord = null;
        if (famsResp && famsResp.ok) {
          const body = yield famsResp.json();
          famRecord = (body && body.fams || []).find((f) => f.slug === slug) || null;
        }
        let prefs = defaultPrefs();
        if (prefsResp && prefsResp.ok) {
          const pb = yield prefsResp.json();
          if (pb && pb.prefs) prefs = pb.prefs;
        }
        let inviteUrl = "";
        if (linkResp && linkResp.ok) {
          const lb = yield linkResp.json();
          inviteUrl = lb?.url || "";
        }
        Object.assign(state6.fam, famRecord || { slug, name: slug }, { prefs, inviteUrl });
        state6.loading = false;
      } catch (err) {
        state6.loading = false;
        state6.loadError = "Could not load your settings. Try refreshing.";
      }
    }
  }
});
function recomputeVisibility2() {
  state6.pushNotEnabled = state6.pushPermission !== "default";
  state6.pushNotGranted = state6.pushPermission !== "granted";
  state6.pushNotDenied = state6.pushPermission !== "denied";
}
function defaultPrefs() {
  return {
    posts: { push: true, email: true, sms: true },
    comments: { push: true, email: false, sms: false },
    reactions: { push: true, email: false, sms: false }
  };
}
function stopCamera() {
  sideTable.cameraStream?.getTracks?.().forEach((t) => t.stop());
  sideTable.cameraStream = null;
  const video = document.querySelector(".heyfam-camera__video");
  if (video) video.srcObject = null;
  state6.cameraOpen = false;
  state6.cameraReady = false;
  state6.cameraError = "";
}
function openCrop(fileOrBlob) {
  if (sideTable.pendingObjectUrl) URL.revokeObjectURL(sideTable.pendingObjectUrl);
  const url = URL.createObjectURL(fileOrBlob);
  sideTable.pendingObjectUrl = url;
  state6.cropSrc = url;
  state6.cropOpen = true;
  requestAnimationFrame(() => {
    const img = document.querySelector(".heyfam-crop__image");
    if (!img) return;
    sideTable.cropper?.destroy?.();
    sideTable.cropper = new import_cropperjs.default(img, {
      aspectRatio: 1,
      viewMode: 1,
      autoCropArea: 1,
      background: false,
      dragMode: "move",
      guides: false,
      center: false,
      cropBoxResizable: true,
      toggleDragModeOnDblclick: false
    });
  });
}
function destroyCropper() {
  sideTable.cropper?.destroy?.();
  sideTable.cropper = null;
  if (sideTable.pendingObjectUrl) {
    URL.revokeObjectURL(sideTable.pendingObjectUrl);
    sideTable.pendingObjectUrl = null;
  }
  state6.cropOpen = false;
  state6.cropSrc = "";
}
async function savePrefs() {
  const heyfam = store12("heyfam").state;
  if (!state6.fam.slug) return;
  try {
    await fetch(`${heyfam.apiBase}/${state6.fam.slug}/prefs`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
      body: JSON.stringify({ prefs: state6.fam.prefs })
    });
  } catch (err) {
  }
}

// themes/heyfam-theme/src/interactivity/nudge.js
import { store as store13 } from "@wordpress/interactivity";
var SEVEN_DAYS = 7 * 24 * 60 * 60 * 1e3;
var { state: state7, actions: actions6 } = store13("heyfam/nudge", {
  state: {
    visible: false
  },
  actions: {
    *dismiss() {
      state7.visible = false;
      try {
        const heyfam = store13("heyfam").state;
        yield fetch(`${heyfam.apiBase}/me/dismiss-nudge`, {
          method: "POST",
          credentials: "include",
          headers: { "X-WP-Nonce": heyfam.nonce }
        });
      } catch (err) {
      }
    }
  },
  callbacks: {
    init() {
      const heyfam = store13("heyfam").state;
      if (!heyfam.userId) return;
      if (heyfam.nudgeDismissedAt) return;
      if (!heyfam.invitesSkippedAt) return;
      const onboarded = Date.parse(heyfam.onboardedAt);
      if (!onboarded) return;
      if (Date.now() - onboarded > SEVEN_DAYS) return;
      state7.visible = true;
    }
  }
});

// themes/heyfam-theme/src/interactivity/lightbox.js
import { store as store14, getContext as getContext6 } from "@wordpress/interactivity";
var { state: state8, actions: actions7 } = store14("heyfam/lightbox", {
  state: {
    open: false,
    images: [],
    // full-res URLs for the currently-opened post
    index: 0,
    get current() {
      return state8.images[state8.index] || null;
    },
    get currentUrl() {
      return state8.current?.url || "";
    },
    get currentAlt() {
      return state8.current?.alt || "";
    },
    get hasPrev() {
      return state8.index > 0;
    },
    get hasNext() {
      return state8.index < state8.images.length - 1;
    },
    get position() {
      return state8.images.length > 1 ? `${state8.index + 1} / ${state8.images.length}` : "";
    }
  },
  actions: {
    open(e) {
      e.preventDefault();
      const ctx = getContext6();
      const post = ctx?.item;
      const photo = ctx?.photo;
      if (!post || !photo) return;
      state8.images = (post.images || []).map((i) => ({ id: i.id, url: i.url, alt: i.alt }));
      state8.index = state8.images.findIndex((i) => i.id === photo.id);
      if (state8.index < 0) state8.index = 0;
      state8.open = true;
      document.body.classList.add("heyfam-lightbox-open");
    },
    close() {
      state8.open = false;
      document.body.classList.remove("heyfam-lightbox-open");
    },
    prev() {
      if (state8.hasPrev) state8.index--;
    },
    next() {
      if (state8.hasNext) state8.index++;
    },
    onBackdrop(e) {
      if (e.target.classList?.contains("heyfam-lightbox")) {
        actions7.close();
      }
    },
    onKey(e) {
      if (!state8.open) return;
      if (e.key === "Escape") actions7.close();
      if (e.key === "ArrowLeft") actions7.prev();
      if (e.key === "ArrowRight") actions7.next();
    }
  },
  callbacks: {
    /** Run once at hydration: bind global key handler + swipe handlers. */
    init() {
      document.addEventListener("keydown", actions7.onKey);
      let touchStartX = 0;
      document.addEventListener("touchstart", (e) => {
        if (!state8.open) return;
        touchStartX = e.touches[0]?.clientX || 0;
      }, { passive: true });
      document.addEventListener("touchend", (e) => {
        if (!state8.open) return;
        const dx = (e.changedTouches[0]?.clientX || 0) - touchStartX;
        if (dx > 60 && state8.hasPrev) actions7.prev();
        if (dx < -60 && state8.hasNext) actions7.next();
      }, { passive: true });
    }
  }
});

// themes/heyfam-theme/src/interactivity/dev-banner.js
import { store as store15 } from "@wordpress/interactivity";
var { state: state9, actions: actions8 } = store15("heyfam/dev", {
  state: {
    open: false,
    busy: false,
    message: ""
  },
  actions: {
    toggle() {
      state9.open = !state9.open;
    },
    *resetMe() {
      const heyfam = store15("heyfam").state;
      if (!window.confirm("Reset your fams and unverify your phone? You'll re-onboard on next page load.")) return;
      state9.busy = true;
      try {
        const r = yield fetch(`${heyfam.apiBase}/_dev/reset-me`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
          body: JSON.stringify({ delete_user: false })
        });
        if (!r.ok) throw new Error(yield r.text());
        state9.message = "Reset done. Reloading\u2026";
        setTimeout(() => location.assign("/"), 500);
      } catch (err) {
        state9.message = `Reset failed: ${err.message}`;
      } finally {
        state9.busy = false;
      }
    },
    *seedDemo() {
      const heyfam = store15("heyfam").state;
      state9.busy = true;
      try {
        const r = yield fetch(`${heyfam.apiBase}/_dev/seed-demo`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
          body: JSON.stringify({ reset: true })
        });
        const j = yield r.json();
        if (!r.ok) throw new Error(j?.error || "seed failed");
        state9.message = `Seeded \u2192 ${j.result.fam_url}`;
        setTimeout(() => location.assign(j.result.fam_url), 800);
      } catch (err) {
        state9.message = `Seed failed: ${err.message}`;
      } finally {
        state9.busy = false;
      }
    },
    // --- State simulators -----------------------------------------------
    // These flip store state directly so you can review/screenshot each
    // visual state without driving it through real interactions. Idempotent
    // toggles where it makes sense; "Reset" puts everything back to default.
    simNudge() {
      const s = store15("heyfam/nudge").state;
      s.visible = !s.visible;
    },
    simEditor() {
      const feed = store15("heyfam/feed").state;
      const post = feed.posts?.[0] || {
        id: -1,
        body: "Simulated post body \u2014 edit me to test the editor.",
        images: [],
        poll: null
      };
      store15("heyfam/composer").actions.openEditor(post);
    },
    simDelete() {
      const feed = store15("heyfam/feed").state;
      feed.deleteTargetId = feed.posts?.[0]?.id || -1;
      feed.deleteError = "";
      feed.deleting = false;
      feed.deleteOpen = true;
      document.body.classList.add("heyfam-modal-open");
    },
    simDeleting() {
      actions8.simDelete();
      store15("heyfam/feed").state.deleting = true;
    },
    simDeleteError() {
      actions8.simDelete();
      const feed = store15("heyfam/feed").state;
      feed.deleting = false;
      feed.deleteError = "Could not delete. Try again.";
    },
    simPollMode() {
      const c = store15("heyfam/composer").state;
      c.pollMode = !c.pollMode;
    },
    simSending() {
      const c = store15("heyfam/composer").state;
      c.submitting = !c.submitting;
    },
    simComposerError() {
      const c = store15("heyfam/composer").state;
      c.error = c.error ? "" : "Could not post. Try again.";
    },
    simEmptyFeed() {
      const feed = store15("heyfam/feed").state;
      if (feed.__stashedPosts) {
        feed.posts = feed.__stashedPosts;
        feed.hasPosts = feed.posts.length > 0;
        feed.__stashedPosts = null;
      } else {
        feed.__stashedPosts = feed.posts;
        feed.posts = [];
        feed.hasPosts = false;
      }
    },
    simReset() {
      const c = store15("heyfam/composer");
      if (c.state.editorOpen) c.actions.closeEditor();
      c.state.pollMode = false;
      c.state.submitting = false;
      c.state.error = "";
      const f = store15("heyfam/feed").state;
      f.deleteOpen = false;
      f.deleteTargetId = 0;
      f.deleting = false;
      f.deleteError = "";
      if (f.__stashedPosts) {
        f.posts = f.__stashedPosts;
        f.hasPosts = f.posts.length > 0;
        f.__stashedPosts = null;
      }
      document.body.classList.remove("heyfam-modal-open");
      store15("heyfam/nudge").state.visible = false;
    }
  }
});
/*! Bundled license information:

cropperjs/dist/cropper.js:
  (*!
   * Cropper.js v1.6.2
   * https://fengyuanchen.github.io/cropperjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2024-04-21T07:43:05.335Z
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nyb3BwZXJqcy9kaXN0L2Nyb3BwZXIuanMiLCAiLi4vc3JjL2ludGVyYWN0aXZpdHkvcm91dGVyLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L2NvbXBvc2VyLmpzIiwgIi4uL3NyYy9saWIvbWVkaWEuanMiLCAiLi4vc3JjL2ludGVyYWN0aXZpdHkvcmVhY3Rpb25zLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9lbW9qaS1waWNrZXItZWxlbWVudC9kYXRhYmFzZS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZW1vamktcGlja2VyLWVsZW1lbnQvcGlja2VyLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L2NvbW1lbnRzLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L3BvbGxzLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L2ZlZWQtcG9sbC5qcyIsICIuLi9zcmMvbGliL2RvbS5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9sYW5kaW5nLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L3B1c2gtc3Vic2NyaWJlLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L3NpZ251cC5qcyIsICIuLi9zcmMvbGliL3Bob25lLmpzIiwgIi4uL3NyYy9saWIvc2x1Zy5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9sb2dpbi5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9pbnZpdGUuanMiLCAiLi4vc3JjL2ludGVyYWN0aXZpdHkvYWNjb3VudC5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9udWRnZS5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9saWdodGJveC5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9kZXYtYmFubmVyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiFcbiAqIENyb3BwZXIuanMgdjEuNi4yXG4gKiBodHRwczovL2Zlbmd5dWFuY2hlbi5naXRodWIuaW8vY3JvcHBlcmpzXG4gKlxuICogQ29weXJpZ2h0IDIwMTUtcHJlc2VudCBDaGVuIEZlbmd5dWFuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDI0LTA0LTIxVDA3OjQzOjA1LjMzNVpcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Dcm9wcGVyID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBvd25LZXlzKGUsIHIpIHtcbiAgICB2YXIgdCA9IE9iamVjdC5rZXlzKGUpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgICByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTtcbiAgICAgIH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMihlKSB7XG4gICAgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTtcbiAgICAgIHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTtcbiAgICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgdCB8fCAhdCkgcmV0dXJuIHQ7XG4gICAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gICAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgaSkgcmV0dXJuIGk7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gICAgfVxuICAgIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG4gIH1cbiAgZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkge1xuICAgIHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICAgIHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiO1xuICB9XG4gIGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICAgIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICAgIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgbztcbiAgICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICAgIH0sIF90eXBlb2Yobyk7XG4gIH1cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpO1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG4gIH1cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cbiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgIGlmICghbykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB9XG4gIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICAgIHJldHVybiBhcnIyO1xuICB9XG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG4gIHZhciBXSU5ET1cgPSBJU19CUk9XU0VSID8gd2luZG93IDoge307XG4gIHZhciBJU19UT1VDSF9ERVZJQ0UgPSBJU19CUk9XU0VSICYmIFdJTkRPVy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyAnb250b3VjaHN0YXJ0JyBpbiBXSU5ET1cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZmFsc2U7XG4gIHZhciBIQVNfUE9JTlRFUl9FVkVOVCA9IElTX0JST1dTRVIgPyAnUG9pbnRlckV2ZW50JyBpbiBXSU5ET1cgOiBmYWxzZTtcbiAgdmFyIE5BTUVTUEFDRSA9ICdjcm9wcGVyJztcblxuICAvLyBBY3Rpb25zXG4gIHZhciBBQ1RJT05fQUxMID0gJ2FsbCc7XG4gIHZhciBBQ1RJT05fQ1JPUCA9ICdjcm9wJztcbiAgdmFyIEFDVElPTl9NT1ZFID0gJ21vdmUnO1xuICB2YXIgQUNUSU9OX1pPT00gPSAnem9vbSc7XG4gIHZhciBBQ1RJT05fRUFTVCA9ICdlJztcbiAgdmFyIEFDVElPTl9XRVNUID0gJ3cnO1xuICB2YXIgQUNUSU9OX1NPVVRIID0gJ3MnO1xuICB2YXIgQUNUSU9OX05PUlRIID0gJ24nO1xuICB2YXIgQUNUSU9OX05PUlRIX0VBU1QgPSAnbmUnO1xuICB2YXIgQUNUSU9OX05PUlRIX1dFU1QgPSAnbncnO1xuICB2YXIgQUNUSU9OX1NPVVRIX0VBU1QgPSAnc2UnO1xuICB2YXIgQUNUSU9OX1NPVVRIX1dFU1QgPSAnc3cnO1xuXG4gIC8vIENsYXNzZXNcbiAgdmFyIENMQVNTX0NST1AgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWNyb3BcIik7XG4gIHZhciBDTEFTU19ESVNBQkxFRCA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZGlzYWJsZWRcIik7XG4gIHZhciBDTEFTU19ISURERU4gPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWhpZGRlblwiKTtcbiAgdmFyIENMQVNTX0hJREUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWhpZGVcIik7XG4gIHZhciBDTEFTU19JTlZJU0lCTEUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWludmlzaWJsZVwiKTtcbiAgdmFyIENMQVNTX01PREFMID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1tb2RhbFwiKTtcbiAgdmFyIENMQVNTX01PVkUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLW1vdmVcIik7XG5cbiAgLy8gRGF0YSBrZXlzXG4gIHZhciBEQVRBX0FDVElPTiA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCJBY3Rpb25cIik7XG4gIHZhciBEQVRBX1BSRVZJRVcgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiUHJldmlld1wiKTtcblxuICAvLyBEcmFnIG1vZGVzXG4gIHZhciBEUkFHX01PREVfQ1JPUCA9ICdjcm9wJztcbiAgdmFyIERSQUdfTU9ERV9NT1ZFID0gJ21vdmUnO1xuICB2YXIgRFJBR19NT0RFX05PTkUgPSAnbm9uZSc7XG5cbiAgLy8gRXZlbnRzXG4gIHZhciBFVkVOVF9DUk9QID0gJ2Nyb3AnO1xuICB2YXIgRVZFTlRfQ1JPUF9FTkQgPSAnY3JvcGVuZCc7XG4gIHZhciBFVkVOVF9DUk9QX01PVkUgPSAnY3JvcG1vdmUnO1xuICB2YXIgRVZFTlRfQ1JPUF9TVEFSVCA9ICdjcm9wc3RhcnQnO1xuICB2YXIgRVZFTlRfREJMQ0xJQ0sgPSAnZGJsY2xpY2snO1xuICB2YXIgRVZFTlRfVE9VQ0hfU1RBUlQgPSBJU19UT1VDSF9ERVZJQ0UgPyAndG91Y2hzdGFydCcgOiAnbW91c2Vkb3duJztcbiAgdmFyIEVWRU5UX1RPVUNIX01PVkUgPSBJU19UT1VDSF9ERVZJQ0UgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xuICB2YXIgRVZFTlRfVE9VQ0hfRU5EID0gSVNfVE9VQ0hfREVWSUNFID8gJ3RvdWNoZW5kIHRvdWNoY2FuY2VsJyA6ICdtb3VzZXVwJztcbiAgdmFyIEVWRU5UX1BPSU5URVJfRE9XTiA9IEhBU19QT0lOVEVSX0VWRU5UID8gJ3BvaW50ZXJkb3duJyA6IEVWRU5UX1RPVUNIX1NUQVJUO1xuICB2YXIgRVZFTlRfUE9JTlRFUl9NT1ZFID0gSEFTX1BPSU5URVJfRVZFTlQgPyAncG9pbnRlcm1vdmUnIDogRVZFTlRfVE9VQ0hfTU9WRTtcbiAgdmFyIEVWRU5UX1BPSU5URVJfVVAgPSBIQVNfUE9JTlRFUl9FVkVOVCA/ICdwb2ludGVydXAgcG9pbnRlcmNhbmNlbCcgOiBFVkVOVF9UT1VDSF9FTkQ7XG4gIHZhciBFVkVOVF9SRUFEWSA9ICdyZWFkeSc7XG4gIHZhciBFVkVOVF9SRVNJWkUgPSAncmVzaXplJztcbiAgdmFyIEVWRU5UX1dIRUVMID0gJ3doZWVsJztcbiAgdmFyIEVWRU5UX1pPT00gPSAnem9vbSc7XG5cbiAgLy8gTWltZSB0eXBlc1xuICB2YXIgTUlNRV9UWVBFX0pQRUcgPSAnaW1hZ2UvanBlZyc7XG5cbiAgLy8gUmVnRXhwc1xuICB2YXIgUkVHRVhQX0FDVElPTlMgPSAvXmV8d3xzfG58c2V8c3d8bmV8bnd8YWxsfGNyb3B8bW92ZXx6b29tJC87XG4gIHZhciBSRUdFWFBfREFUQV9VUkwgPSAvXmRhdGE6LztcbiAgdmFyIFJFR0VYUF9EQVRBX1VSTF9KUEVHID0gL15kYXRhOmltYWdlXFwvanBlZztiYXNlNjQsLztcbiAgdmFyIFJFR0VYUF9UQUdfTkFNRSA9IC9eaW1nfGNhbnZhcyQvaTtcblxuICAvLyBNaXNjXG4gIC8vIEluc3BpcmVkIGJ5IHRoZSBkZWZhdWx0IHdpZHRoIGFuZCBoZWlnaHQgb2YgYSBjYW52YXMgZWxlbWVudC5cbiAgdmFyIE1JTl9DT05UQUlORVJfV0lEVEggPSAyMDA7XG4gIHZhciBNSU5fQ09OVEFJTkVSX0hFSUdIVCA9IDEwMDtcblxuICB2YXIgREVGQVVMVFMgPSB7XG4gICAgLy8gRGVmaW5lIHRoZSB2aWV3IG1vZGUgb2YgdGhlIGNyb3BwZXJcbiAgICB2aWV3TW9kZTogMCxcbiAgICAvLyAwLCAxLCAyLCAzXG5cbiAgICAvLyBEZWZpbmUgdGhlIGRyYWdnaW5nIG1vZGUgb2YgdGhlIGNyb3BwZXJcbiAgICBkcmFnTW9kZTogRFJBR19NT0RFX0NST1AsXG4gICAgLy8gJ2Nyb3AnLCAnbW92ZScgb3IgJ25vbmUnXG5cbiAgICAvLyBEZWZpbmUgdGhlIGluaXRpYWwgYXNwZWN0IHJhdGlvIG9mIHRoZSBjcm9wIGJveFxuICAgIGluaXRpYWxBc3BlY3RSYXRpbzogTmFOLFxuICAgIC8vIERlZmluZSB0aGUgYXNwZWN0IHJhdGlvIG9mIHRoZSBjcm9wIGJveFxuICAgIGFzcGVjdFJhdGlvOiBOYU4sXG4gICAgLy8gQW4gb2JqZWN0IHdpdGggdGhlIHByZXZpb3VzIGNyb3BwaW5nIHJlc3VsdCBkYXRhXG4gICAgZGF0YTogbnVsbCxcbiAgICAvLyBBIHNlbGVjdG9yIGZvciBhZGRpbmcgZXh0cmEgY29udGFpbmVycyB0byBwcmV2aWV3XG4gICAgcHJldmlldzogJycsXG4gICAgLy8gUmUtcmVuZGVyIHRoZSBjcm9wcGVyIHdoZW4gcmVzaXplIHRoZSB3aW5kb3dcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIC8vIFJlc3RvcmUgdGhlIGNyb3BwZWQgYXJlYSBhZnRlciByZXNpemUgdGhlIHdpbmRvd1xuICAgIHJlc3RvcmU6IHRydWUsXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgaW1hZ2UgaXMgYSBjcm9zcy1vcmlnaW4gaW1hZ2VcbiAgICBjaGVja0Nyb3NzT3JpZ2luOiB0cnVlLFxuICAgIC8vIENoZWNrIHRoZSBjdXJyZW50IGltYWdlJ3MgRXhpZiBPcmllbnRhdGlvbiBpbmZvcm1hdGlvblxuICAgIGNoZWNrT3JpZW50YXRpb246IHRydWUsXG4gICAgLy8gU2hvdyB0aGUgYmxhY2sgbW9kYWxcbiAgICBtb2RhbDogdHJ1ZSxcbiAgICAvLyBTaG93IHRoZSBkYXNoZWQgbGluZXMgZm9yIGd1aWRpbmdcbiAgICBndWlkZXM6IHRydWUsXG4gICAgLy8gU2hvdyB0aGUgY2VudGVyIGluZGljYXRvciBmb3IgZ3VpZGluZ1xuICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAvLyBTaG93IHRoZSB3aGl0ZSBtb2RhbCB0byBoaWdobGlnaHQgdGhlIGNyb3AgYm94XG4gICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgIC8vIFNob3cgdGhlIGdyaWQgYmFja2dyb3VuZFxuICAgIGJhY2tncm91bmQ6IHRydWUsXG4gICAgLy8gRW5hYmxlIHRvIGNyb3AgdGhlIGltYWdlIGF1dG9tYXRpY2FsbHkgd2hlbiBpbml0aWFsaXplXG4gICAgYXV0b0Nyb3A6IHRydWUsXG4gICAgLy8gRGVmaW5lIHRoZSBwZXJjZW50YWdlIG9mIGF1dG9tYXRpYyBjcm9wcGluZyBhcmVhIHdoZW4gaW5pdGlhbGl6ZXNcbiAgICBhdXRvQ3JvcEFyZWE6IDAuOCxcbiAgICAvLyBFbmFibGUgdG8gbW92ZSB0aGUgaW1hZ2VcbiAgICBtb3ZhYmxlOiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0byByb3RhdGUgdGhlIGltYWdlXG4gICAgcm90YXRhYmxlOiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0byBzY2FsZSB0aGUgaW1hZ2VcbiAgICBzY2FsYWJsZTogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gem9vbSB0aGUgaW1hZ2VcbiAgICB6b29tYWJsZTogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gem9vbSB0aGUgaW1hZ2UgYnkgZHJhZ2dpbmcgdG91Y2hcbiAgICB6b29tT25Ub3VjaDogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gem9vbSB0aGUgaW1hZ2UgYnkgd2hlZWxpbmcgbW91c2VcbiAgICB6b29tT25XaGVlbDogdHJ1ZSxcbiAgICAvLyBEZWZpbmUgem9vbSByYXRpbyB3aGVuIHpvb20gdGhlIGltYWdlIGJ5IHdoZWVsaW5nIG1vdXNlXG4gICAgd2hlZWxab29tUmF0aW86IDAuMSxcbiAgICAvLyBFbmFibGUgdG8gbW92ZSB0aGUgY3JvcCBib3hcbiAgICBjcm9wQm94TW92YWJsZTogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gcmVzaXplIHRoZSBjcm9wIGJveFxuICAgIGNyb3BCb3hSZXNpemFibGU6IHRydWUsXG4gICAgLy8gVG9nZ2xlIGRyYWcgbW9kZSBiZXR3ZWVuIFwiY3JvcFwiIGFuZCBcIm1vdmVcIiB3aGVuIGNsaWNrIHR3aWNlIG9uIHRoZSBjcm9wcGVyXG4gICAgdG9nZ2xlRHJhZ01vZGVPbkRibGNsaWNrOiB0cnVlLFxuICAgIC8vIFNpemUgbGltaXRhdGlvblxuICAgIG1pbkNhbnZhc1dpZHRoOiAwLFxuICAgIG1pbkNhbnZhc0hlaWdodDogMCxcbiAgICBtaW5Dcm9wQm94V2lkdGg6IDAsXG4gICAgbWluQ3JvcEJveEhlaWdodDogMCxcbiAgICBtaW5Db250YWluZXJXaWR0aDogTUlOX0NPTlRBSU5FUl9XSURUSCxcbiAgICBtaW5Db250YWluZXJIZWlnaHQ6IE1JTl9DT05UQUlORVJfSEVJR0hULFxuICAgIC8vIFNob3J0Y3V0cyBvZiBldmVudHNcbiAgICByZWFkeTogbnVsbCxcbiAgICBjcm9wc3RhcnQ6IG51bGwsXG4gICAgY3JvcG1vdmU6IG51bGwsXG4gICAgY3JvcGVuZDogbnVsbCxcbiAgICBjcm9wOiBudWxsLFxuICAgIHpvb206IG51bGxcbiAgfTtcblxuICB2YXIgVEVNUExBVEUgPSAnPGRpdiBjbGFzcz1cImNyb3BwZXItY29udGFpbmVyXCIgdG91Y2gtYWN0aW9uPVwibm9uZVwiPicgKyAnPGRpdiBjbGFzcz1cImNyb3BwZXItd3JhcC1ib3hcIj4nICsgJzxkaXYgY2xhc3M9XCJjcm9wcGVyLWNhbnZhc1wiPjwvZGl2PicgKyAnPC9kaXY+JyArICc8ZGl2IGNsYXNzPVwiY3JvcHBlci1kcmFnLWJveFwiPjwvZGl2PicgKyAnPGRpdiBjbGFzcz1cImNyb3BwZXItY3JvcC1ib3hcIj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci12aWV3LWJveFwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1kYXNoZWQgZGFzaGVkLWhcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItZGFzaGVkIGRhc2hlZC12XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWNlbnRlclwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1mYWNlXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWxpbmUgbGluZS1lXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cImVcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItbGluZSBsaW5lLW5cIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwiblwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1saW5lIGxpbmUtd1wiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJ3XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWxpbmUgbGluZS1zXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cInNcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtZVwiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJlXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LW5cIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwiblwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC13XCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIndcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtc1wiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJzXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LW5lXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIm5lXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LW53XCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIm53XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LXN3XCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cInN3XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LXNlXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cInNlXCI+PC9zcGFuPicgKyAnPC9kaXY+JyArICc8L2Rpdj4nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgbm90IGEgbnVtYmVyLlxuICAgKi9cbiAgdmFyIGlzTmFOID0gTnVtYmVyLmlzTmFOIHx8IFdJTkRPVy5pc05hTjtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICB2YXIgaXNQb3NpdGl2ZU51bWJlciA9IGZ1bmN0aW9uIGlzUG9zaXRpdmVOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPiAwICYmIHZhbHVlIDwgSW5maW5pdHk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgdW5kZWZpbmVkLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBvYmplY3QuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcbiAgICAgIHZhciBwcm90b3R5cGUgPSBfY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3RvciAmJiBwcm90b3R5cGUgJiYgaGFzT3duUHJvcGVydHkuY2FsbChwcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH1cbiAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFycmF5LWxpa2Ugb3IgaXRlcmFibGUgb2JqZWN0IHRvIGFuIGFycmF5LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIG5ldyBhcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSA/IEFycmF5LmZyb20odmFsdWUpIDogc2xpY2UuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSB0aGUgZ2l2ZW4gZGF0YS5cbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gVGhlIGRhdGEgdG8gaXRlcmF0ZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgcHJvY2VzcyBmdW5jdGlvbiBmb3IgZWFjaCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7Kn0gVGhlIG9yaWdpbmFsIGRhdGEuXG4gICAqL1xuICBmdW5jdGlvbiBmb3JFYWNoKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGRhdGEgJiYgaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IGlzTnVtYmVyKGRhdGEubGVuZ3RoKSAvKiBhcnJheS1saWtlICovKSB7XG4gICAgICAgIHRvQXJyYXkoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZGF0YSwgdmFsdWUsIGtleSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKGRhdGEsIGRhdGFba2V5XSwga2V5LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuZCB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgKiBAcGFyYW0geyp9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2JqZWN0IHRvIGV4dGVuZC5cbiAgICogQHBhcmFtIHsqfSBhcmdzIC0gVGhlIHJlc3Qgb2JqZWN0cyBmb3IgbWVyZ2luZyB0byB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGV4dGVuZGVkIG9iamVjdC5cbiAgICovXG4gIHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICBpZiAoaXNPYmplY3QoYXJnKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKGFyZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGFyZ1trZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgdmFyIFJFR0VYUF9ERUNJTUFMUyA9IC9cXC5cXGQqKD86MHw5KXsxMn1cXGQqJC87XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBkZWNpbWFsIG51bWJlci5cbiAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovLzAuMzAwMDAwMDAwMDAwMDAwMDQuY29tL31cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIG5vcm1hbGl6ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lcz0xMDAwMDAwMDAwMDBdIC0gVGhlIHRpbWVzIGZvciBub3JtYWxpemluZy5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbm9ybWFsaXplZCBudW1iZXIuXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIHRpbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDAwMDAwMDAwMDA7XG4gICAgcmV0dXJuIFJFR0VYUF9ERUNJTUFMUy50ZXN0KHZhbHVlKSA/IE1hdGgucm91bmQodmFsdWUgKiB0aW1lcykgLyB0aW1lcyA6IHZhbHVlO1xuICB9XG4gIHZhciBSRUdFWFBfU1VGRklYID0gL153aWR0aHxoZWlnaHR8bGVmdHx0b3B8bWFyZ2luTGVmdHxtYXJnaW5Ub3AkLztcblxuICAvKipcbiAgICogQXBwbHkgc3R5bGVzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBUaGUgc3R5bGVzIGZvciBhcHBseWluZy5cbiAgICovXG4gIGZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG4gICAgZm9yRWFjaChzdHlsZXMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgICAgIGlmIChSRUdFWFBfU1VGRklYLnRlc3QocHJvcGVydHkpICYmIGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IFwiXCIuY29uY2F0KHZhbHVlLCBcInB4XCIpO1xuICAgICAgfVxuICAgICAgc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaGFzIGEgc3BlY2lhbCBjbGFzcy5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gY2hlY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzcyB0byBzZWFyY2guXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lhbCBjbGFzcyB3YXMgZm91bmQuXG4gICAqL1xuICBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdCA/IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbHVlKSA6IGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YodmFsdWUpID4gLTE7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNsYXNzZXMgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIGNsYXNzZXMgdG8gYmUgYWRkZWQuXG4gICAqL1xuICBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgICAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBhZGRDbGFzcyhlbGVtLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUudHJpbSgpO1xuICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lLmluZGV4T2YodmFsdWUpIDwgMCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiIFwiKS5jb25jYXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIHJlbW92ZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgICAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZW1vdmVDbGFzcyhlbGVtLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZih2YWx1ZSkgPj0gMCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHZhbHVlLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvciByZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIHRvZ2dsZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWRkZWQgLSBBZGQgb25seS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIHZhbHVlLCBhZGRlZCkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgICAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICB0b2dnbGVDbGFzcyhlbGVtLCB2YWx1ZSwgYWRkZWQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSUUxMC0xMSBkb2Vzbid0IHN1cHBvcnQgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgYGNsYXNzTGlzdC50b2dnbGVgXG4gICAgaWYgKGFkZGVkKSB7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgdmFyIFJFR0VYUF9DQU1FTF9DQVNFID0gLyhbYS16XFxkXSkoW0EtWl0pL2c7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0aGUgZ2l2ZW4gc3RyaW5nIGZyb20gY2FtZWxDYXNlIHRvIGtlYmFiLWNhc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHRyYW5zZm9ybS5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gdG9QYXJhbUNhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZShSRUdFWFBfQ0FNRUxfQ0FTRSwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGF0YSBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGRhdGEga2V5IHRvIGdldC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGRhdGEgdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiBnZXREYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgICBpZiAoaXNPYmplY3QoZWxlbWVudFtuYW1lXSkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50W25hbWVdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0W25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0b1BhcmFtQ2FzZShuYW1lKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkYXRhIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGRhdGEga2V5IHRvIHNldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSBUaGUgZGF0YSB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHNldERhdGEoZWxlbWVudCwgbmFtZSwgZGF0YSkge1xuICAgIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgZWxlbWVudFtuYW1lXSA9IGRhdGE7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgIGVsZW1lbnQuZGF0YXNldFtuYW1lXSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1cIi5jb25jYXQodG9QYXJhbUNhc2UobmFtZSkpLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGRhdGEgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBkYXRhIGtleSB0byByZW1vdmUuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVEYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgICBpZiAoaXNPYmplY3QoZWxlbWVudFtuYW1lXSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50W25hbWVdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZWxlbWVudFtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgLy8gIzEyOCBTYWZhcmkgbm90IGFsbG93cyB0byBkZWxldGUgZGF0YXNldCBwcm9wZXJ0eVxuICAgICAgdHJ5IHtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZGF0YXNldFtuYW1lXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldFtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0b1BhcmFtQ2FzZShuYW1lKSkpO1xuICAgIH1cbiAgfVxuICB2YXIgUkVHRVhQX1NQQUNFUyA9IC9cXHNcXHMqLztcbiAgdmFyIG9uY2VTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIGlmIChJU19CUk9XU0VSKSB7XG4gICAgICB2YXIgb25jZSA9IGZhbHNlO1xuICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7fTtcbiAgICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnb25jZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgc3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gb25jZTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgc2V0dGVyIGNhbiBmaXggYSBgVHlwZUVycm9yYCBpbiBzdHJpY3QgbW9kZVxuICAgICAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvRXJyb3JzL0dldHRlcl9vbmx5fVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICBvbmNlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgV0lORE9XLmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICBXSU5ET1cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZDtcbiAgfSgpO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUocykuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgdmFyIGhhbmRsZXIgPSBsaXN0ZW5lcjtcbiAgICB0eXBlLnRyaW0oKS5zcGxpdChSRUdFWFBfU1BBQ0VTKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFvbmNlU3VwcG9ydGVkKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBlbGVtZW50Lmxpc3RlbmVycztcbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnNbZXZlbnRdICYmIGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdO1xuICAgICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXTtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobGlzdGVuZXJzW2V2ZW50XSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgbGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGxpc3RlbmVycykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgZWxlbWVudC5saXN0ZW5lcnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUocykuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICAgKi9cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgdmFyIF9oYW5kbGVyID0gbGlzdGVuZXI7XG4gICAgdHlwZS50cmltKCkuc3BsaXQoUkVHRVhQX1NQQUNFUykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChvcHRpb25zLm9uY2UgJiYgIW9uY2VTdXBwb3J0ZWQpIHtcbiAgICAgICAgdmFyIF9lbGVtZW50JGxpc3RlbmVycyA9IGVsZW1lbnQubGlzdGVuZXJzLFxuICAgICAgICAgIGxpc3RlbmVycyA9IF9lbGVtZW50JGxpc3RlbmVycyA9PT0gdm9pZCAwID8ge30gOiBfZWxlbWVudCRsaXN0ZW5lcnM7XG4gICAgICAgIF9oYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICBkZWxldGUgbGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl07XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBfaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3RlbmVyLmFwcGx5KGVsZW1lbnQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIWxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl0gPSBfaGFuZGxlcjtcbiAgICAgICAgZWxlbWVudC5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgICB9XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIF9oYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCBldmVudCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUocykuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIGFkZGl0aW9uYWwgZXZlbnQgZGF0YS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IEluZGljYXRlIGlmIHRoZSBldmVudCBpcyBkZWZhdWx0IHByZXZlbnRlZCBvciBub3QuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIHR5cGUsIGRhdGEpIHtcbiAgICB2YXIgZXZlbnQ7XG5cbiAgICAvLyBFdmVudCBhbmQgQ3VzdG9tRXZlbnQgb24gSUU5LTExIGFyZSBnbG9iYWwgb2JqZWN0cywgbm90IGNvbnN0cnVjdG9yc1xuICAgIGlmIChpc0Z1bmN0aW9uKEV2ZW50KSAmJiBpc0Z1bmN0aW9uKEN1c3RvbUV2ZW50KSkge1xuICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwge1xuICAgICAgICBkZXRhaWw6IGRhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9mZnNldCBiYXNlIG9uIHRoZSBkb2N1bWVudC5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgb2Zmc2V0IGRhdGEuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRPZmZzZXQoZWxlbWVudCkge1xuICAgIHZhciBib3ggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiBib3gubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCksXG4gICAgICB0b3A6IGJveC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcClcbiAgICB9O1xuICB9XG4gIHZhciBsb2NhdGlvbiA9IFdJTkRPVy5sb2NhdGlvbjtcbiAgdmFyIFJFR0VYUF9PUklHSU5TID0gL14oXFx3KzopXFwvXFwvKFteOi8/I10qKTo/KFxcZCopL2k7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiBVUkwgaXMgYSBjcm9zcyBvcmlnaW4gVVJMLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIHRhcmdldCBVUkwuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gVVJMIGlzIGEgY3Jvc3Mgb3JpZ2luIFVSTCwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNDcm9zc09yaWdpblVSTCh1cmwpIHtcbiAgICB2YXIgcGFydHMgPSB1cmwubWF0Y2goUkVHRVhQX09SSUdJTlMpO1xuICAgIHJldHVybiBwYXJ0cyAhPT0gbnVsbCAmJiAocGFydHNbMV0gIT09IGxvY2F0aW9uLnByb3RvY29sIHx8IHBhcnRzWzJdICE9PSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwYXJ0c1szXSAhPT0gbG9jYXRpb24ucG9ydCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRpbWVzdGFtcCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIHRhcmdldCBVUkwuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXN1bHQgVVJMLlxuICAgKi9cbiAgZnVuY3Rpb24gYWRkVGltZXN0YW1wKHVybCkge1xuICAgIHZhciB0aW1lc3RhbXAgPSBcInRpbWVzdGFtcD1cIi5jb25jYXQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIHJldHVybiB1cmwgKyAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgdGltZXN0YW1wO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0cmFuc2Zvcm1zIGJhc2Ugb24gdGhlIGdpdmVuIG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIFRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBjb250YWlucyB0cmFuc2Zvcm0gdmFsdWVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtcyhfcmVmKSB7XG4gICAgdmFyIHJvdGF0ZSA9IF9yZWYucm90YXRlLFxuICAgICAgc2NhbGVYID0gX3JlZi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmLnNjYWxlWSxcbiAgICAgIHRyYW5zbGF0ZVggPSBfcmVmLnRyYW5zbGF0ZVgsXG4gICAgICB0cmFuc2xhdGVZID0gX3JlZi50cmFuc2xhdGVZO1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICBpZiAoaXNOdW1iZXIodHJhbnNsYXRlWCkgJiYgdHJhbnNsYXRlWCAhPT0gMCkge1xuICAgICAgdmFsdWVzLnB1c2goXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdCh0cmFuc2xhdGVYLCBcInB4KVwiKSk7XG4gICAgfVxuICAgIGlmIChpc051bWJlcih0cmFuc2xhdGVZKSAmJiB0cmFuc2xhdGVZICE9PSAwKSB7XG4gICAgICB2YWx1ZXMucHVzaChcInRyYW5zbGF0ZVkoXCIuY29uY2F0KHRyYW5zbGF0ZVksIFwicHgpXCIpKTtcbiAgICB9XG5cbiAgICAvLyBSb3RhdGUgc2hvdWxkIGNvbWUgZmlyc3QgYmVmb3JlIHNjYWxlIHRvIG1hdGNoIG9yaWVudGF0aW9uIHRyYW5zZm9ybVxuICAgIGlmIChpc051bWJlcihyb3RhdGUpICYmIHJvdGF0ZSAhPT0gMCkge1xuICAgICAgdmFsdWVzLnB1c2goXCJyb3RhdGUoXCIuY29uY2F0KHJvdGF0ZSwgXCJkZWcpXCIpKTtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKHNjYWxlWCkgJiYgc2NhbGVYICE9PSAxKSB7XG4gICAgICB2YWx1ZXMucHVzaChcInNjYWxlWChcIi5jb25jYXQoc2NhbGVYLCBcIilcIikpO1xuICAgIH1cbiAgICBpZiAoaXNOdW1iZXIoc2NhbGVZKSAmJiBzY2FsZVkgIT09IDEpIHtcbiAgICAgIHZhbHVlcy5wdXNoKFwic2NhbGVZKFwiLmNvbmNhdChzY2FsZVksIFwiKVwiKSk7XG4gICAgfVxuICAgIHZhciB0cmFuc2Zvcm0gPSB2YWx1ZXMubGVuZ3RoID8gdmFsdWVzLmpvaW4oJyAnKSA6ICdub25lJztcbiAgICByZXR1cm4ge1xuICAgICAgV2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBtc1RyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4IHJhdGlvIG9mIGEgZ3JvdXAgb2YgcG9pbnRlcnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb2ludGVycyAtIFRoZSB0YXJnZXQgcG9pbnRlcnMuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZXN1bHQgcmF0aW8uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRNYXhab29tUmF0aW8ocG9pbnRlcnMpIHtcbiAgICB2YXIgcG9pbnRlcnMyID0gX29iamVjdFNwcmVhZDIoe30sIHBvaW50ZXJzKTtcbiAgICB2YXIgbWF4UmF0aW8gPSAwO1xuICAgIGZvckVhY2gocG9pbnRlcnMsIGZ1bmN0aW9uIChwb2ludGVyLCBwb2ludGVySWQpIHtcbiAgICAgIGRlbGV0ZSBwb2ludGVyczJbcG9pbnRlcklkXTtcbiAgICAgIGZvckVhY2gocG9pbnRlcnMyLCBmdW5jdGlvbiAocG9pbnRlcjIpIHtcbiAgICAgICAgdmFyIHgxID0gTWF0aC5hYnMocG9pbnRlci5zdGFydFggLSBwb2ludGVyMi5zdGFydFgpO1xuICAgICAgICB2YXIgeTEgPSBNYXRoLmFicyhwb2ludGVyLnN0YXJ0WSAtIHBvaW50ZXIyLnN0YXJ0WSk7XG4gICAgICAgIHZhciB4MiA9IE1hdGguYWJzKHBvaW50ZXIuZW5kWCAtIHBvaW50ZXIyLmVuZFgpO1xuICAgICAgICB2YXIgeTIgPSBNYXRoLmFicyhwb2ludGVyLmVuZFkgLSBwb2ludGVyMi5lbmRZKTtcbiAgICAgICAgdmFyIHoxID0gTWF0aC5zcXJ0KHgxICogeDEgKyB5MSAqIHkxKTtcbiAgICAgICAgdmFyIHoyID0gTWF0aC5zcXJ0KHgyICogeDIgKyB5MiAqIHkyKTtcbiAgICAgICAgdmFyIHJhdGlvID0gKHoyIC0gejEpIC8gejE7XG4gICAgICAgIGlmIChNYXRoLmFicyhyYXRpbykgPiBNYXRoLmFicyhtYXhSYXRpbykpIHtcbiAgICAgICAgICBtYXhSYXRpbyA9IHJhdGlvO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF4UmF0aW87XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gVGhlIHRhcmdldCBldmVudCBvYmplY3QuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5kT25seSAtIEluZGljYXRlcyBpZiBvbmx5IHJldHVybnMgdGhlIGVuZCBwb2ludCBjb29yZGluYXRlIG9yIG5vdC5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBwb2ludGVyIGNvbnRhaW5zIHN0YXJ0IGFuZC9vciBlbmQgcG9pbnQgY29vcmRpbmF0ZXMuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQb2ludGVyKF9yZWYyLCBlbmRPbmx5KSB7XG4gICAgdmFyIHBhZ2VYID0gX3JlZjIucGFnZVgsXG4gICAgICBwYWdlWSA9IF9yZWYyLnBhZ2VZO1xuICAgIHZhciBlbmQgPSB7XG4gICAgICBlbmRYOiBwYWdlWCxcbiAgICAgIGVuZFk6IHBhZ2VZXG4gICAgfTtcbiAgICByZXR1cm4gZW5kT25seSA/IGVuZCA6IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICBzdGFydFk6IHBhZ2VZXG4gICAgfSwgZW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNlbnRlciBwb2ludCBjb29yZGluYXRlIG9mIGEgZ3JvdXAgb2YgcG9pbnRlcnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwb2ludGVycyAtIFRoZSB0YXJnZXQgcG9pbnRlcnMuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjZW50ZXIgcG9pbnQgY29vcmRpbmF0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFBvaW50ZXJzQ2VudGVyKHBvaW50ZXJzKSB7XG4gICAgdmFyIHBhZ2VYID0gMDtcbiAgICB2YXIgcGFnZVkgPSAwO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgZm9yRWFjaChwb2ludGVycywgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICB2YXIgc3RhcnRYID0gX3JlZjMuc3RhcnRYLFxuICAgICAgICBzdGFydFkgPSBfcmVmMy5zdGFydFk7XG4gICAgICBwYWdlWCArPSBzdGFydFg7XG4gICAgICBwYWdlWSArPSBzdGFydFk7XG4gICAgICBjb3VudCArPSAxO1xuICAgIH0pO1xuICAgIHBhZ2VYIC89IGNvdW50O1xuICAgIHBhZ2VZIC89IGNvdW50O1xuICAgIHJldHVybiB7XG4gICAgICBwYWdlWDogcGFnZVgsXG4gICAgICBwYWdlWTogcGFnZVlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4IHNpemVzIGluIGEgcmVjdGFuZ2xlIHVuZGVyIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9J2NvbnRhaW4nXSAtIFRoZSBhZGp1c3QgdHlwZS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBzaXplcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEFkanVzdGVkU2l6ZXMoX3JlZjQpIHtcbiAgICB2YXIgYXNwZWN0UmF0aW8gPSBfcmVmNC5hc3BlY3RSYXRpbyxcbiAgICAgIGhlaWdodCA9IF9yZWY0LmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZjQud2lkdGg7XG4gICAgdmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdjb250YWluJztcbiAgICB2YXIgaXNWYWxpZFdpZHRoID0gaXNQb3NpdGl2ZU51bWJlcih3aWR0aCk7XG4gICAgdmFyIGlzVmFsaWRIZWlnaHQgPSBpc1Bvc2l0aXZlTnVtYmVyKGhlaWdodCk7XG4gICAgaWYgKGlzVmFsaWRXaWR0aCAmJiBpc1ZhbGlkSGVpZ2h0KSB7XG4gICAgICB2YXIgYWRqdXN0ZWRXaWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgaWYgKHR5cGUgPT09ICdjb250YWluJyAmJiBhZGp1c3RlZFdpZHRoID4gd2lkdGggfHwgdHlwZSA9PT0gJ2NvdmVyJyAmJiBhZGp1c3RlZFdpZHRoIDwgd2lkdGgpIHtcbiAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkV2lkdGgpIHtcbiAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkSGVpZ2h0KSB7XG4gICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmV3IHNpemVzIG9mIGEgcmVjdGFuZ2xlIGFmdGVyIHJvdGF0ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IHNpemVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Um90YXRlZFNpemVzKF9yZWY1KSB7XG4gICAgdmFyIHdpZHRoID0gX3JlZjUud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmNS5oZWlnaHQsXG4gICAgICBkZWdyZWUgPSBfcmVmNS5kZWdyZWU7XG4gICAgZGVncmVlID0gTWF0aC5hYnMoZGVncmVlKSAlIDE4MDtcbiAgICBpZiAoZGVncmVlID09PSA5MCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGhlaWdodCxcbiAgICAgICAgaGVpZ2h0OiB3aWR0aFxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGFyYyA9IGRlZ3JlZSAlIDkwICogTWF0aC5QSSAvIDE4MDtcbiAgICB2YXIgc2luQXJjID0gTWF0aC5zaW4oYXJjKTtcbiAgICB2YXIgY29zQXJjID0gTWF0aC5jb3MoYXJjKTtcbiAgICB2YXIgbmV3V2lkdGggPSB3aWR0aCAqIGNvc0FyYyArIGhlaWdodCAqIHNpbkFyYztcbiAgICB2YXIgbmV3SGVpZ2h0ID0gd2lkdGggKiBzaW5BcmMgKyBoZWlnaHQgKiBjb3NBcmM7XG4gICAgcmV0dXJuIGRlZ3JlZSA+IDkwID8ge1xuICAgICAgd2lkdGg6IG5ld0hlaWdodCxcbiAgICAgIGhlaWdodDogbmV3V2lkdGhcbiAgICB9IDoge1xuICAgICAgd2lkdGg6IG5ld1dpZHRoLFxuICAgICAgaGVpZ2h0OiBuZXdIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGNhbnZhcyB3aGljaCBkcmV3IHRoZSBnaXZlbiBpbWFnZS5cbiAgICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBpbWFnZSAtIFRoZSBpbWFnZSBmb3IgZHJhd2luZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IGltYWdlRGF0YSAtIFRoZSBpbWFnZSBkYXRhLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY2FudmFzRGF0YSAtIFRoZSBjYW52YXMgZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgb3B0aW9ucy5cbiAgICogQHJldHVybnMge0hUTUxDYW52YXNFbGVtZW50fSBUaGUgcmVzdWx0IGNhbnZhcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFNvdXJjZUNhbnZhcyhpbWFnZSwgX3JlZjYsIF9yZWY3LCBfcmVmOCkge1xuICAgIHZhciBpbWFnZUFzcGVjdFJhdGlvID0gX3JlZjYuYXNwZWN0UmF0aW8sXG4gICAgICBpbWFnZU5hdHVyYWxXaWR0aCA9IF9yZWY2Lm5hdHVyYWxXaWR0aCxcbiAgICAgIGltYWdlTmF0dXJhbEhlaWdodCA9IF9yZWY2Lm5hdHVyYWxIZWlnaHQsXG4gICAgICBfcmVmNiRyb3RhdGUgPSBfcmVmNi5yb3RhdGUsXG4gICAgICByb3RhdGUgPSBfcmVmNiRyb3RhdGUgPT09IHZvaWQgMCA/IDAgOiBfcmVmNiRyb3RhdGUsXG4gICAgICBfcmVmNiRzY2FsZVggPSBfcmVmNi5zY2FsZVgsXG4gICAgICBzY2FsZVggPSBfcmVmNiRzY2FsZVggPT09IHZvaWQgMCA/IDEgOiBfcmVmNiRzY2FsZVgsXG4gICAgICBfcmVmNiRzY2FsZVkgPSBfcmVmNi5zY2FsZVksXG4gICAgICBzY2FsZVkgPSBfcmVmNiRzY2FsZVkgPT09IHZvaWQgMCA/IDEgOiBfcmVmNiRzY2FsZVk7XG4gICAgdmFyIGFzcGVjdFJhdGlvID0gX3JlZjcuYXNwZWN0UmF0aW8sXG4gICAgICBuYXR1cmFsV2lkdGggPSBfcmVmNy5uYXR1cmFsV2lkdGgsXG4gICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjcubmF0dXJhbEhlaWdodDtcbiAgICB2YXIgX3JlZjgkZmlsbENvbG9yID0gX3JlZjguZmlsbENvbG9yLFxuICAgICAgZmlsbENvbG9yID0gX3JlZjgkZmlsbENvbG9yID09PSB2b2lkIDAgPyAndHJhbnNwYXJlbnQnIDogX3JlZjgkZmlsbENvbG9yLFxuICAgICAgX3JlZjgkaW1hZ2VTbW9vdGhpbmdFID0gX3JlZjguaW1hZ2VTbW9vdGhpbmdFbmFibGVkLFxuICAgICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gX3JlZjgkaW1hZ2VTbW9vdGhpbmdFID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjgkaW1hZ2VTbW9vdGhpbmdFLFxuICAgICAgX3JlZjgkaW1hZ2VTbW9vdGhpbmdRID0gX3JlZjguaW1hZ2VTbW9vdGhpbmdRdWFsaXR5LFxuICAgICAgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gX3JlZjgkaW1hZ2VTbW9vdGhpbmdRID09PSB2b2lkIDAgPyAnbG93JyA6IF9yZWY4JGltYWdlU21vb3RoaW5nUSxcbiAgICAgIF9yZWY4JG1heFdpZHRoID0gX3JlZjgubWF4V2lkdGgsXG4gICAgICBtYXhXaWR0aCA9IF9yZWY4JG1heFdpZHRoID09PSB2b2lkIDAgPyBJbmZpbml0eSA6IF9yZWY4JG1heFdpZHRoLFxuICAgICAgX3JlZjgkbWF4SGVpZ2h0ID0gX3JlZjgubWF4SGVpZ2h0LFxuICAgICAgbWF4SGVpZ2h0ID0gX3JlZjgkbWF4SGVpZ2h0ID09PSB2b2lkIDAgPyBJbmZpbml0eSA6IF9yZWY4JG1heEhlaWdodCxcbiAgICAgIF9yZWY4JG1pbldpZHRoID0gX3JlZjgubWluV2lkdGgsXG4gICAgICBtaW5XaWR0aCA9IF9yZWY4JG1pbldpZHRoID09PSB2b2lkIDAgPyAwIDogX3JlZjgkbWluV2lkdGgsXG4gICAgICBfcmVmOCRtaW5IZWlnaHQgPSBfcmVmOC5taW5IZWlnaHQsXG4gICAgICBtaW5IZWlnaHQgPSBfcmVmOCRtaW5IZWlnaHQgPT09IHZvaWQgMCA/IDAgOiBfcmVmOCRtaW5IZWlnaHQ7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIG1heFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICBoZWlnaHQ6IG1heEhlaWdodFxuICAgIH0pO1xuICAgIHZhciBtaW5TaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgd2lkdGg6IG1pbldpZHRoLFxuICAgICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgICB9LCAnY292ZXInKTtcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1pbihtYXhTaXplcy53aWR0aCwgTWF0aC5tYXgobWluU2l6ZXMud2lkdGgsIG5hdHVyYWxXaWR0aCkpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbihtYXhTaXplcy5oZWlnaHQsIE1hdGgubWF4KG1pblNpemVzLmhlaWdodCwgbmF0dXJhbEhlaWdodCkpO1xuXG4gICAgLy8gTm90ZTogc2hvdWxkIGFsd2F5cyB1c2UgaW1hZ2UncyBuYXR1cmFsIHNpemVzIGZvciBkcmF3aW5nIGFzXG4gICAgLy8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aCA9PT0gY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0IHdoZW4gcm90YXRlICUgMTgwID09PSA5MFxuICAgIHZhciBkZXN0TWF4U2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgIGFzcGVjdFJhdGlvOiBpbWFnZUFzcGVjdFJhdGlvLFxuICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgaGVpZ2h0OiBtYXhIZWlnaHRcbiAgICB9KTtcbiAgICB2YXIgZGVzdE1pblNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICBhc3BlY3RSYXRpbzogaW1hZ2VBc3BlY3RSYXRpbyxcbiAgICAgIHdpZHRoOiBtaW5XaWR0aCxcbiAgICAgIGhlaWdodDogbWluSGVpZ2h0XG4gICAgfSwgJ2NvdmVyJyk7XG4gICAgdmFyIGRlc3RXaWR0aCA9IE1hdGgubWluKGRlc3RNYXhTaXplcy53aWR0aCwgTWF0aC5tYXgoZGVzdE1pblNpemVzLndpZHRoLCBpbWFnZU5hdHVyYWxXaWR0aCkpO1xuICAgIHZhciBkZXN0SGVpZ2h0ID0gTWF0aC5taW4oZGVzdE1heFNpemVzLmhlaWdodCwgTWF0aC5tYXgoZGVzdE1pblNpemVzLmhlaWdodCwgaW1hZ2VOYXR1cmFsSGVpZ2h0KSk7XG4gICAgdmFyIHBhcmFtcyA9IFstZGVzdFdpZHRoIC8gMiwgLWRlc3RIZWlnaHQgLyAyLCBkZXN0V2lkdGgsIGRlc3RIZWlnaHRdO1xuICAgIGNhbnZhcy53aWR0aCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIod2lkdGgpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBub3JtYWxpemVEZWNpbWFsTnVtYmVyKGhlaWdodCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICAgIGNvbnRleHQucm90YXRlKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGNvbnRleHQuc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5O1xuICAgIGNvbnRleHQuZHJhd0ltYWdlLmFwcGx5KGNvbnRleHQsIFtpbWFnZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwYXJhbXMubWFwKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihwYXJhbSkpO1xuICAgIH0pKSkpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgIHJldHVybiBjYW52YXM7XG4gIH1cbiAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgZnJvbSBjaGFyIGNvZGUgaW4gZGF0YSB2aWV3LlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyAtIFRoZSBkYXRhIHZpZXcgZm9yIHJlYWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydCBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIFRoZSByZWFkIGxlbmd0aC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlYWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIGxlbmd0aCArPSBzdGFydDtcbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3RyICs9IGZyb21DaGFyQ29kZShkYXRhVmlldy5nZXRVaW50OChpKSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgdmFyIFJFR0VYUF9EQVRBX1VSTF9IRUFEID0gL15kYXRhOi4qLC87XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBEYXRhIFVSTCB0byBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhVVJMIC0gVGhlIERhdGEgVVJMIHRvIHRyYW5zZm9ybS5cbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgcmVzdWx0IGFycmF5IGJ1ZmZlci5cbiAgICovXG4gIGZ1bmN0aW9uIGRhdGFVUkxUb0FycmF5QnVmZmVyKGRhdGFVUkwpIHtcbiAgICB2YXIgYmFzZTY0ID0gZGF0YVVSTC5yZXBsYWNlKFJFR0VYUF9EQVRBX1VSTF9IRUFELCAnJyk7XG4gICAgdmFyIGJpbmFyeSA9IGF0b2IoYmFzZTY0KTtcbiAgICB2YXIgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYmluYXJ5Lmxlbmd0aCk7XG4gICAgdmFyIHVpbnQ4ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgIGZvckVhY2godWludDgsIGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgdWludDhbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXlCdWZmZXI7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGFycmF5IGJ1ZmZlciB0byBEYXRhIFVSTC5cbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgLSBUaGUgYXJyYXkgYnVmZmVyIHRvIHRyYW5zZm9ybS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1pbWVUeXBlIC0gVGhlIG1pbWUgdHlwZSBvZiB0aGUgRGF0YSBVUkwuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXN1bHQgRGF0YSBVUkwuXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvRGF0YVVSTChhcnJheUJ1ZmZlciwgbWltZVR5cGUpIHtcbiAgICB2YXIgY2h1bmtzID0gW107XG5cbiAgICAvLyBDaHVuayBUeXBlZCBBcnJheSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlICgjNDM1KVxuICAgIHZhciBjaHVua1NpemUgPSA4MTkyO1xuICAgIHZhciB1aW50OCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgICB3aGlsZSAodWludDgubGVuZ3RoID4gMCkge1xuICAgICAgLy8gWFhYOiBCYWJlbCdzIGB0b0NvbnN1bWFibGVBcnJheWAgaGVscGVyIHdpbGwgdGhyb3cgZXJyb3IgaW4gSUUgb3IgU2FmYXJpIDlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICBjaHVua3MucHVzaChmcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdG9BcnJheSh1aW50OC5zdWJhcnJheSgwLCBjaHVua1NpemUpKSkpO1xuICAgICAgdWludDggPSB1aW50OC5zdWJhcnJheShjaHVua1NpemUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJkYXRhOlwiLmNvbmNhdChtaW1lVHlwZSwgXCI7YmFzZTY0LFwiKS5jb25jYXQoYnRvYShjaHVua3Muam9pbignJykpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3JpZW50YXRpb24gdmFsdWUgZnJvbSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVhZCBvcmllbnRhdGlvbiB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0QW5kR2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICAgIHZhciBvcmllbnRhdGlvbjtcblxuICAgIC8vIElnbm9yZXMgcmFuZ2UgZXJyb3Igd2hlbiB0aGUgaW1hZ2UgZG9lcyBub3QgaGF2ZSBjb3JyZWN0IEV4aWYgaW5mb3JtYXRpb25cbiAgICB0cnkge1xuICAgICAgdmFyIGxpdHRsZUVuZGlhbjtcbiAgICAgIHZhciBhcHAxU3RhcnQ7XG4gICAgICB2YXIgaWZkU3RhcnQ7XG5cbiAgICAgIC8vIE9ubHkgaGFuZGxlIEpQRUcgaW1hZ2UgKHN0YXJ0IGJ5IDB4RkZEOClcbiAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OCgwKSA9PT0gMHhGRiAmJiBkYXRhVmlldy5nZXRVaW50OCgxKSA9PT0gMHhEOCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gZGF0YVZpZXcuYnl0ZUxlbmd0aDtcbiAgICAgICAgdmFyIG9mZnNldCA9IDI7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgKyAxIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSkgPT09IDB4RTEpIHtcbiAgICAgICAgICAgIGFwcDFTdGFydCA9IG9mZnNldDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFwcDFTdGFydCkge1xuICAgICAgICB2YXIgZXhpZklEQ29kZSA9IGFwcDFTdGFydCArIDQ7XG4gICAgICAgIHZhciB0aWZmT2Zmc2V0ID0gYXBwMVN0YXJ0ICsgMTA7XG4gICAgICAgIGlmIChnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIGV4aWZJRENvZGUsIDQpID09PSAnRXhpZicpIHtcbiAgICAgICAgICB2YXIgZW5kaWFubmVzcyA9IGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KTtcbiAgICAgICAgICBsaXR0bGVFbmRpYW4gPSBlbmRpYW5uZXNzID09PSAweDQ5NDk7XG4gICAgICAgICAgaWYgKGxpdHRsZUVuZGlhbiB8fCBlbmRpYW5uZXNzID09PSAweDRENEQgLyogYmlnRW5kaWFuICovKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQgKyAyLCBsaXR0bGVFbmRpYW4pID09PSAweDAwMkEpIHtcbiAgICAgICAgICAgICAgdmFyIGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPj0gMHgwMDAwMDAwOCkge1xuICAgICAgICAgICAgICAgIGlmZFN0YXJ0ID0gdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaWZkU3RhcnQpIHtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MTYoaWZkU3RhcnQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIHZhciBfb2Zmc2V0O1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IF9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIF9vZmZzZXQgPSBpZmRTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pID09PSAweDAxMTIgLyogT3JpZW50YXRpb24gKi8pIHtcbiAgICAgICAgICAgIC8vIDggaXMgdGhlIG9mZnNldCBvZiB0aGUgY3VycmVudCB0YWcncyB2YWx1ZVxuICAgICAgICAgICAgX29mZnNldCArPSA4O1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIG9yaWdpbmFsIG9yaWVudGF0aW9uIHZhbHVlXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgICAgICAvLyBPdmVycmlkZSB0aGUgb3JpZW50YXRpb24gd2l0aCBpdHMgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KF9vZmZzZXQsIDEsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb3JpZW50YXRpb24gPSAxO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgRXhpZiBPcmllbnRhdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWVudGF0aW9uIC0gVGhlIG9yaWVudGF0aW9uIHRvIHBhcnNlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcGFyc2VkIHJlc3VsdC5cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pIHtcbiAgICB2YXIgcm90YXRlID0gMDtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICAvLyBGbGlwIGhvcml6b250YWxcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgbGVmdCAxODBcdTAwQjBcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcm90YXRlID0gLTE4MDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEZsaXAgdmVydGljYWxcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgc2NhbGVZID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBGbGlwIHZlcnRpY2FsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIHJpZ2h0IDkwXHUwMEIwXG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCBob3Jpem9udGFsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWCA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIGxlZnQgOTBcdTAwQjBcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcm90YXRlID0gLTkwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdGF0ZTogcm90YXRlLFxuICAgICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgICBzY2FsZVk6IHNjYWxlWVxuICAgIH07XG4gIH1cblxuICB2YXIgcmVuZGVyID0ge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdGhpcy5pbml0Q29udGFpbmVyKCk7XG4gICAgICB0aGlzLmluaXRDYW52YXMoKTtcbiAgICAgIHRoaXMuaW5pdENyb3BCb3goKTtcbiAgICAgIHRoaXMucmVuZGVyQ2FudmFzKCk7XG4gICAgICBpZiAodGhpcy5jcm9wcGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5pdENvbnRhaW5lcjogZnVuY3Rpb24gaW5pdENvbnRhaW5lcigpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgY3JvcHBlciA9IHRoaXMuY3JvcHBlcjtcbiAgICAgIHZhciBtaW5XaWR0aCA9IE51bWJlcihvcHRpb25zLm1pbkNvbnRhaW5lcldpZHRoKTtcbiAgICAgIHZhciBtaW5IZWlnaHQgPSBOdW1iZXIob3B0aW9ucy5taW5Db250YWluZXJIZWlnaHQpO1xuICAgICAgYWRkQ2xhc3MoY3JvcHBlciwgQ0xBU1NfSElEREVOKTtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIENMQVNTX0hJRERFTik7XG4gICAgICB2YXIgY29udGFpbmVyRGF0YSA9IHtcbiAgICAgICAgd2lkdGg6IE1hdGgubWF4KGNvbnRhaW5lci5vZmZzZXRXaWR0aCwgbWluV2lkdGggPj0gMCA/IG1pbldpZHRoIDogTUlOX0NPTlRBSU5FUl9XSURUSCksXG4gICAgICAgIGhlaWdodDogTWF0aC5tYXgoY29udGFpbmVyLm9mZnNldEhlaWdodCwgbWluSGVpZ2h0ID49IDAgPyBtaW5IZWlnaHQgOiBNSU5fQ09OVEFJTkVSX0hFSUdIVClcbiAgICAgIH07XG4gICAgICB0aGlzLmNvbnRhaW5lckRhdGEgPSBjb250YWluZXJEYXRhO1xuICAgICAgc2V0U3R5bGUoY3JvcHBlciwge1xuICAgICAgICB3aWR0aDogY29udGFpbmVyRGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEYXRhLmhlaWdodFxuICAgICAgfSk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBDTEFTU19ISURERU4pO1xuICAgICAgcmVtb3ZlQ2xhc3MoY3JvcHBlciwgQ0xBU1NfSElEREVOKTtcbiAgICB9LFxuICAgIC8vIENhbnZhcyAoaW1hZ2Ugd3JhcHBlcilcbiAgICBpbml0Q2FudmFzOiBmdW5jdGlvbiBpbml0Q2FudmFzKCkge1xuICAgICAgdmFyIGNvbnRhaW5lckRhdGEgPSB0aGlzLmNvbnRhaW5lckRhdGEsXG4gICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuICAgICAgdmFyIHZpZXdNb2RlID0gdGhpcy5vcHRpb25zLnZpZXdNb2RlO1xuICAgICAgdmFyIHJvdGF0ZWQgPSBNYXRoLmFicyhpbWFnZURhdGEucm90YXRlKSAlIDE4MCA9PT0gOTA7XG4gICAgICB2YXIgbmF0dXJhbFdpZHRoID0gcm90YXRlZCA/IGltYWdlRGF0YS5uYXR1cmFsSGVpZ2h0IDogaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aDtcbiAgICAgIHZhciBuYXR1cmFsSGVpZ2h0ID0gcm90YXRlZCA/IGltYWdlRGF0YS5uYXR1cmFsV2lkdGggOiBpbWFnZURhdGEubmF0dXJhbEhlaWdodDtcbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHQ7XG4gICAgICB2YXIgY2FudmFzV2lkdGggPSBjb250YWluZXJEYXRhLndpZHRoO1xuICAgICAgdmFyIGNhbnZhc0hlaWdodCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgICAgaWYgKGNvbnRhaW5lckRhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBjb250YWluZXJEYXRhLndpZHRoKSB7XG4gICAgICAgIGlmICh2aWV3TW9kZSA9PT0gMykge1xuICAgICAgICAgIGNhbnZhc1dpZHRoID0gY29udGFpbmVyRGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYW52YXNIZWlnaHQgPSBjb250YWluZXJEYXRhLndpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmlld01vZGUgPT09IDMpIHtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gY29udGFpbmVyRGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSBjb250YWluZXJEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB7XG4gICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgIG5hdHVyYWxIZWlnaHQ6IG5hdHVyYWxIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBjYW52YXNXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjYW52YXNIZWlnaHRcbiAgICAgIH07XG4gICAgICB0aGlzLmNhbnZhc0RhdGEgPSBjYW52YXNEYXRhO1xuICAgICAgdGhpcy5saW1pdGVkID0gdmlld01vZGUgPT09IDEgfHwgdmlld01vZGUgPT09IDI7XG4gICAgICB0aGlzLmxpbWl0Q2FudmFzKHRydWUsIHRydWUpO1xuICAgICAgY2FudmFzRGF0YS53aWR0aCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEud2lkdGgsIGNhbnZhc0RhdGEubWluV2lkdGgpLCBjYW52YXNEYXRhLm1heFdpZHRoKTtcbiAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEubWluSGVpZ2h0KSwgY2FudmFzRGF0YS5tYXhIZWlnaHQpO1xuICAgICAgY2FudmFzRGF0YS5sZWZ0ID0gKGNvbnRhaW5lckRhdGEud2lkdGggLSBjYW52YXNEYXRhLndpZHRoKSAvIDI7XG4gICAgICBjYW52YXNEYXRhLnRvcCA9IChjb250YWluZXJEYXRhLmhlaWdodCAtIGNhbnZhc0RhdGEuaGVpZ2h0KSAvIDI7XG4gICAgICBjYW52YXNEYXRhLm9sZExlZnQgPSBjYW52YXNEYXRhLmxlZnQ7XG4gICAgICBjYW52YXNEYXRhLm9sZFRvcCA9IGNhbnZhc0RhdGEudG9wO1xuICAgICAgdGhpcy5pbml0aWFsQ2FudmFzRGF0YSA9IGFzc2lnbih7fSwgY2FudmFzRGF0YSk7XG4gICAgfSxcbiAgICBsaW1pdENhbnZhczogZnVuY3Rpb24gbGltaXRDYW52YXMoc2l6ZUxpbWl0ZWQsIHBvc2l0aW9uTGltaXRlZCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNvbnRhaW5lckRhdGEgPSB0aGlzLmNvbnRhaW5lckRhdGEsXG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICAgIHZhciB2aWV3TW9kZSA9IG9wdGlvbnMudmlld01vZGU7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBjYW52YXNEYXRhLmFzcGVjdFJhdGlvO1xuICAgICAgdmFyIGNyb3BwZWQgPSB0aGlzLmNyb3BwZWQgJiYgY3JvcEJveERhdGE7XG4gICAgICBpZiAoc2l6ZUxpbWl0ZWQpIHtcbiAgICAgICAgdmFyIG1pbkNhbnZhc1dpZHRoID0gTnVtYmVyKG9wdGlvbnMubWluQ2FudmFzV2lkdGgpIHx8IDA7XG4gICAgICAgIHZhciBtaW5DYW52YXNIZWlnaHQgPSBOdW1iZXIob3B0aW9ucy5taW5DYW52YXNIZWlnaHQpIHx8IDA7XG4gICAgICAgIGlmICh2aWV3TW9kZSA+IDEpIHtcbiAgICAgICAgICBtaW5DYW52YXNXaWR0aCA9IE1hdGgubWF4KG1pbkNhbnZhc1dpZHRoLCBjb250YWluZXJEYXRhLndpZHRoKTtcbiAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBNYXRoLm1heChtaW5DYW52YXNIZWlnaHQsIGNvbnRhaW5lckRhdGEuaGVpZ2h0KTtcbiAgICAgICAgICBpZiAodmlld01vZGUgPT09IDMpIHtcbiAgICAgICAgICAgIGlmIChtaW5DYW52YXNIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1pbkNhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICAgIG1pbkNhbnZhc1dpZHRoID0gbWluQ2FudmFzSGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBtaW5DYW52YXNXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2aWV3TW9kZSA+IDApIHtcbiAgICAgICAgICBpZiAobWluQ2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgIG1pbkNhbnZhc1dpZHRoID0gTWF0aC5tYXgobWluQ2FudmFzV2lkdGgsIGNyb3BwZWQgPyBjcm9wQm94RGF0YS53aWR0aCA6IDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWluQ2FudmFzSGVpZ2h0KSB7XG4gICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBNYXRoLm1heChtaW5DYW52YXNIZWlnaHQsIGNyb3BwZWQgPyBjcm9wQm94RGF0YS5oZWlnaHQgOiAwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNyb3BwZWQpIHtcbiAgICAgICAgICAgIG1pbkNhbnZhc1dpZHRoID0gY3JvcEJveERhdGEud2lkdGg7XG4gICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBjcm9wQm94RGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICBpZiAobWluQ2FudmFzSGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBtaW5DYW52YXNXaWR0aCkge1xuICAgICAgICAgICAgICBtaW5DYW52YXNXaWR0aCA9IG1pbkNhbnZhc0hlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gbWluQ2FudmFzV2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgIHdpZHRoOiBtaW5DYW52YXNXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG1pbkNhbnZhc0hlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgbWluQ2FudmFzV2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplcy53aWR0aDtcbiAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMuaGVpZ2h0O1xuICAgICAgICBjYW52YXNEYXRhLm1pbldpZHRoID0gbWluQ2FudmFzV2lkdGg7XG4gICAgICAgIGNhbnZhc0RhdGEubWluSGVpZ2h0ID0gbWluQ2FudmFzSGVpZ2h0O1xuICAgICAgICBjYW52YXNEYXRhLm1heFdpZHRoID0gSW5maW5pdHk7XG4gICAgICAgIGNhbnZhc0RhdGEubWF4SGVpZ2h0ID0gSW5maW5pdHk7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25MaW1pdGVkKSB7XG4gICAgICAgIGlmICh2aWV3TW9kZSA+IChjcm9wcGVkID8gMCA6IDEpKSB7XG4gICAgICAgICAgdmFyIG5ld0NhbnZhc0xlZnQgPSBjb250YWluZXJEYXRhLndpZHRoIC0gY2FudmFzRGF0YS53aWR0aDtcbiAgICAgICAgICB2YXIgbmV3Q2FudmFzVG9wID0gY29udGFpbmVyRGF0YS5oZWlnaHQgLSBjYW52YXNEYXRhLmhlaWdodDtcbiAgICAgICAgICBjYW52YXNEYXRhLm1pbkxlZnQgPSBNYXRoLm1pbigwLCBuZXdDYW52YXNMZWZ0KTtcbiAgICAgICAgICBjYW52YXNEYXRhLm1pblRvcCA9IE1hdGgubWluKDAsIG5ld0NhbnZhc1RvcCk7XG4gICAgICAgICAgY2FudmFzRGF0YS5tYXhMZWZ0ID0gTWF0aC5tYXgoMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgICAgY2FudmFzRGF0YS5tYXhUb3AgPSBNYXRoLm1heCgwLCBuZXdDYW52YXNUb3ApO1xuICAgICAgICAgIGlmIChjcm9wcGVkICYmIHRoaXMubGltaXRlZCkge1xuICAgICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gTWF0aC5taW4oY3JvcEJveERhdGEubGVmdCwgY3JvcEJveERhdGEubGVmdCArIChjcm9wQm94RGF0YS53aWR0aCAtIGNhbnZhc0RhdGEud2lkdGgpKTtcbiAgICAgICAgICAgIGNhbnZhc0RhdGEubWluVG9wID0gTWF0aC5taW4oY3JvcEJveERhdGEudG9wLCBjcm9wQm94RGF0YS50b3AgKyAoY3JvcEJveERhdGEuaGVpZ2h0IC0gY2FudmFzRGF0YS5oZWlnaHQpKTtcbiAgICAgICAgICAgIGNhbnZhc0RhdGEubWF4TGVmdCA9IGNyb3BCb3hEYXRhLmxlZnQ7XG4gICAgICAgICAgICBjYW52YXNEYXRhLm1heFRvcCA9IGNyb3BCb3hEYXRhLnRvcDtcbiAgICAgICAgICAgIGlmICh2aWV3TW9kZSA9PT0gMikge1xuICAgICAgICAgICAgICBpZiAoY2FudmFzRGF0YS53aWR0aCA+PSBjb250YWluZXJEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgICAgICAgICAgY2FudmFzRGF0YS5tYXhMZWZ0ID0gTWF0aC5tYXgoMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGNhbnZhc0RhdGEuaGVpZ2h0ID49IGNvbnRhaW5lckRhdGEuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY2FudmFzRGF0YS5taW5Ub3AgPSBNYXRoLm1pbigwLCBuZXdDYW52YXNUb3ApO1xuICAgICAgICAgICAgICAgIGNhbnZhc0RhdGEubWF4VG9wID0gTWF0aC5tYXgoMCwgbmV3Q2FudmFzVG9wKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYW52YXNEYXRhLm1pbkxlZnQgPSAtY2FudmFzRGF0YS53aWR0aDtcbiAgICAgICAgICBjYW52YXNEYXRhLm1pblRvcCA9IC1jYW52YXNEYXRhLmhlaWdodDtcbiAgICAgICAgICBjYW52YXNEYXRhLm1heExlZnQgPSBjb250YWluZXJEYXRhLndpZHRoO1xuICAgICAgICAgIGNhbnZhc0RhdGEubWF4VG9wID0gY29udGFpbmVyRGF0YS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlckNhbnZhczogZnVuY3Rpb24gcmVuZGVyQ2FudmFzKGNoYW5nZWQsIHRyYW5zZm9ybWVkKSB7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG4gICAgICBpZiAodHJhbnNmb3JtZWQpIHtcbiAgICAgICAgdmFyIF9nZXRSb3RhdGVkU2l6ZXMgPSBnZXRSb3RhdGVkU2l6ZXMoe1xuICAgICAgICAgICAgd2lkdGg6IGltYWdlRGF0YS5uYXR1cmFsV2lkdGggKiBNYXRoLmFicyhpbWFnZURhdGEuc2NhbGVYIHx8IDEpLFxuICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZURhdGEubmF0dXJhbEhlaWdodCAqIE1hdGguYWJzKGltYWdlRGF0YS5zY2FsZVkgfHwgMSksXG4gICAgICAgICAgICBkZWdyZWU6IGltYWdlRGF0YS5yb3RhdGUgfHwgMFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5hdHVyYWxXaWR0aCA9IF9nZXRSb3RhdGVkU2l6ZXMud2lkdGgsXG4gICAgICAgICAgbmF0dXJhbEhlaWdodCA9IF9nZXRSb3RhdGVkU2l6ZXMuaGVpZ2h0O1xuICAgICAgICB2YXIgd2lkdGggPSBjYW52YXNEYXRhLndpZHRoICogKG5hdHVyYWxXaWR0aCAvIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoKTtcbiAgICAgICAgdmFyIGhlaWdodCA9IGNhbnZhc0RhdGEuaGVpZ2h0ICogKG5hdHVyYWxIZWlnaHQgLyBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQpO1xuICAgICAgICBjYW52YXNEYXRhLmxlZnQgLT0gKHdpZHRoIC0gY2FudmFzRGF0YS53aWR0aCkgLyAyO1xuICAgICAgICBjYW52YXNEYXRhLnRvcCAtPSAoaGVpZ2h0IC0gY2FudmFzRGF0YS5oZWlnaHQpIC8gMjtcbiAgICAgICAgY2FudmFzRGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXNEYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzRGF0YS5hc3BlY3RSYXRpbyA9IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoID0gbmF0dXJhbFdpZHRoO1xuICAgICAgICBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICB0aGlzLmxpbWl0Q2FudmFzKHRydWUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjYW52YXNEYXRhLndpZHRoID4gY2FudmFzRGF0YS5tYXhXaWR0aCB8fCBjYW52YXNEYXRhLndpZHRoIDwgY2FudmFzRGF0YS5taW5XaWR0aCkge1xuICAgICAgICBjYW52YXNEYXRhLmxlZnQgPSBjYW52YXNEYXRhLm9sZExlZnQ7XG4gICAgICB9XG4gICAgICBpZiAoY2FudmFzRGF0YS5oZWlnaHQgPiBjYW52YXNEYXRhLm1heEhlaWdodCB8fCBjYW52YXNEYXRhLmhlaWdodCA8IGNhbnZhc0RhdGEubWluSGVpZ2h0KSB7XG4gICAgICAgIGNhbnZhc0RhdGEudG9wID0gY2FudmFzRGF0YS5vbGRUb3A7XG4gICAgICB9XG4gICAgICBjYW52YXNEYXRhLndpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS53aWR0aCwgY2FudmFzRGF0YS5taW5XaWR0aCksIGNhbnZhc0RhdGEubWF4V2lkdGgpO1xuICAgICAgY2FudmFzRGF0YS5oZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChjYW52YXNEYXRhLmhlaWdodCwgY2FudmFzRGF0YS5taW5IZWlnaHQpLCBjYW52YXNEYXRhLm1heEhlaWdodCk7XG4gICAgICB0aGlzLmxpbWl0Q2FudmFzKGZhbHNlLCB0cnVlKTtcbiAgICAgIGNhbnZhc0RhdGEubGVmdCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEubGVmdCwgY2FudmFzRGF0YS5taW5MZWZ0KSwgY2FudmFzRGF0YS5tYXhMZWZ0KTtcbiAgICAgIGNhbnZhc0RhdGEudG9wID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS50b3AsIGNhbnZhc0RhdGEubWluVG9wKSwgY2FudmFzRGF0YS5tYXhUb3ApO1xuICAgICAgY2FudmFzRGF0YS5vbGRMZWZ0ID0gY2FudmFzRGF0YS5sZWZ0O1xuICAgICAgY2FudmFzRGF0YS5vbGRUb3AgPSBjYW52YXNEYXRhLnRvcDtcbiAgICAgIHNldFN0eWxlKHRoaXMuY2FudmFzLCBhc3NpZ24oe1xuICAgICAgICB3aWR0aDogY2FudmFzRGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjYW52YXNEYXRhLmhlaWdodFxuICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyh7XG4gICAgICAgIHRyYW5zbGF0ZVg6IGNhbnZhc0RhdGEubGVmdCxcbiAgICAgICAgdHJhbnNsYXRlWTogY2FudmFzRGF0YS50b3BcbiAgICAgIH0pKSk7XG4gICAgICB0aGlzLnJlbmRlckltYWdlKGNoYW5nZWQpO1xuICAgICAgaWYgKHRoaXMuY3JvcHBlZCAmJiB0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXJJbWFnZTogZnVuY3Rpb24gcmVuZGVySW1hZ2UoY2hhbmdlZCkge1xuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuICAgICAgdmFyIHdpZHRoID0gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aCAqIChjYW52YXNEYXRhLndpZHRoIC8gY2FudmFzRGF0YS5uYXR1cmFsV2lkdGgpO1xuICAgICAgdmFyIGhlaWdodCA9IGltYWdlRGF0YS5uYXR1cmFsSGVpZ2h0ICogKGNhbnZhc0RhdGEuaGVpZ2h0IC8gY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0KTtcbiAgICAgIGFzc2lnbihpbWFnZURhdGEsIHtcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgbGVmdDogKGNhbnZhc0RhdGEud2lkdGggLSB3aWR0aCkgLyAyLFxuICAgICAgICB0b3A6IChjYW52YXNEYXRhLmhlaWdodCAtIGhlaWdodCkgLyAyXG4gICAgICB9KTtcbiAgICAgIHNldFN0eWxlKHRoaXMuaW1hZ2UsIGFzc2lnbih7XG4gICAgICAgIHdpZHRoOiBpbWFnZURhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDogaW1hZ2VEYXRhLmhlaWdodFxuICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyhhc3NpZ24oe1xuICAgICAgICB0cmFuc2xhdGVYOiBpbWFnZURhdGEubGVmdCxcbiAgICAgICAgdHJhbnNsYXRlWTogaW1hZ2VEYXRhLnRvcFxuICAgICAgfSwgaW1hZ2VEYXRhKSkpKTtcbiAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMub3V0cHV0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbml0Q3JvcEJveDogZnVuY3Rpb24gaW5pdENyb3BCb3goKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IG9wdGlvbnMuYXNwZWN0UmF0aW8gfHwgb3B0aW9ucy5pbml0aWFsQXNwZWN0UmF0aW87XG4gICAgICB2YXIgYXV0b0Nyb3BBcmVhID0gTnVtYmVyKG9wdGlvbnMuYXV0b0Nyb3BBcmVhKSB8fCAwLjg7XG4gICAgICB2YXIgY3JvcEJveERhdGEgPSB7XG4gICAgICAgIHdpZHRoOiBjYW52YXNEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNhbnZhc0RhdGEuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgIGlmIChjYW52YXNEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvID4gY2FudmFzRGF0YS53aWR0aCkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IGNyb3BCb3hEYXRhLndpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3JvcEJveERhdGEud2lkdGggPSBjcm9wQm94RGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jcm9wQm94RGF0YSA9IGNyb3BCb3hEYXRhO1xuICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgIC8vIEluaXRpYWxpemUgYXV0byBjcm9wIGFyZWFcbiAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEud2lkdGgsIGNyb3BCb3hEYXRhLm1pbldpZHRoKSwgY3JvcEJveERhdGEubWF4V2lkdGgpO1xuICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEuaGVpZ2h0LCBjcm9wQm94RGF0YS5taW5IZWlnaHQpLCBjcm9wQm94RGF0YS5tYXhIZWlnaHQpO1xuXG4gICAgICAvLyBUaGUgd2lkdGgvaGVpZ2h0IG9mIGF1dG8gY3JvcCBhcmVhIG11c3QgbGFyZ2UgdGhhbiBcIm1pbldpZHRoL0hlaWdodFwiXG4gICAgICBjcm9wQm94RGF0YS53aWR0aCA9IE1hdGgubWF4KGNyb3BCb3hEYXRhLm1pbldpZHRoLCBjcm9wQm94RGF0YS53aWR0aCAqIGF1dG9Dcm9wQXJlYSk7XG4gICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBNYXRoLm1heChjcm9wQm94RGF0YS5taW5IZWlnaHQsIGNyb3BCb3hEYXRhLmhlaWdodCAqIGF1dG9Dcm9wQXJlYSk7XG4gICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gY2FudmFzRGF0YS5sZWZ0ICsgKGNhbnZhc0RhdGEud2lkdGggLSBjcm9wQm94RGF0YS53aWR0aCkgLyAyO1xuICAgICAgY3JvcEJveERhdGEudG9wID0gY2FudmFzRGF0YS50b3AgKyAoY2FudmFzRGF0YS5oZWlnaHQgLSBjcm9wQm94RGF0YS5oZWlnaHQpIC8gMjtcbiAgICAgIGNyb3BCb3hEYXRhLm9sZExlZnQgPSBjcm9wQm94RGF0YS5sZWZ0O1xuICAgICAgY3JvcEJveERhdGEub2xkVG9wID0gY3JvcEJveERhdGEudG9wO1xuICAgICAgdGhpcy5pbml0aWFsQ3JvcEJveERhdGEgPSBhc3NpZ24oe30sIGNyb3BCb3hEYXRhKTtcbiAgICB9LFxuICAgIGxpbWl0Q3JvcEJveDogZnVuY3Rpb24gbGltaXRDcm9wQm94KHNpemVMaW1pdGVkLCBwb3NpdGlvbkxpbWl0ZWQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGEsXG4gICAgICAgIGxpbWl0ZWQgPSB0aGlzLmxpbWl0ZWQ7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBvcHRpb25zLmFzcGVjdFJhdGlvO1xuICAgICAgaWYgKHNpemVMaW1pdGVkKSB7XG4gICAgICAgIHZhciBtaW5Dcm9wQm94V2lkdGggPSBOdW1iZXIob3B0aW9ucy5taW5Dcm9wQm94V2lkdGgpIHx8IDA7XG4gICAgICAgIHZhciBtaW5Dcm9wQm94SGVpZ2h0ID0gTnVtYmVyKG9wdGlvbnMubWluQ3JvcEJveEhlaWdodCkgfHwgMDtcbiAgICAgICAgdmFyIG1heENyb3BCb3hXaWR0aCA9IGxpbWl0ZWQgPyBNYXRoLm1pbihjb250YWluZXJEYXRhLndpZHRoLCBjYW52YXNEYXRhLndpZHRoLCBjYW52YXNEYXRhLndpZHRoICsgY2FudmFzRGF0YS5sZWZ0LCBjb250YWluZXJEYXRhLndpZHRoIC0gY2FudmFzRGF0YS5sZWZ0KSA6IGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgICAgIHZhciBtYXhDcm9wQm94SGVpZ2h0ID0gbGltaXRlZCA/IE1hdGgubWluKGNvbnRhaW5lckRhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLmhlaWdodCwgY2FudmFzRGF0YS5oZWlnaHQgKyBjYW52YXNEYXRhLnRvcCwgY29udGFpbmVyRGF0YS5oZWlnaHQgLSBjYW52YXNEYXRhLnRvcCkgOiBjb250YWluZXJEYXRhLmhlaWdodDtcblxuICAgICAgICAvLyBUaGUgbWluL21heENyb3BCb3hXaWR0aC9IZWlnaHQgbXVzdCBiZSBsZXNzIHRoYW4gY29udGFpbmVyJ3Mgd2lkdGgvaGVpZ2h0XG4gICAgICAgIG1pbkNyb3BCb3hXaWR0aCA9IE1hdGgubWluKG1pbkNyb3BCb3hXaWR0aCwgY29udGFpbmVyRGF0YS53aWR0aCk7XG4gICAgICAgIG1pbkNyb3BCb3hIZWlnaHQgPSBNYXRoLm1pbihtaW5Dcm9wQm94SGVpZ2h0LCBjb250YWluZXJEYXRhLmhlaWdodCk7XG4gICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgIGlmIChtaW5Dcm9wQm94V2lkdGggJiYgbWluQ3JvcEJveEhlaWdodCkge1xuICAgICAgICAgICAgaWYgKG1pbkNyb3BCb3hIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1pbkNyb3BCb3hXaWR0aCkge1xuICAgICAgICAgICAgICBtaW5Dcm9wQm94SGVpZ2h0ID0gbWluQ3JvcEJveFdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtaW5Dcm9wQm94V2lkdGggPSBtaW5Dcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChtaW5Dcm9wQm94V2lkdGgpIHtcbiAgICAgICAgICAgIG1pbkNyb3BCb3hIZWlnaHQgPSBtaW5Dcm9wQm94V2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2UgaWYgKG1pbkNyb3BCb3hIZWlnaHQpIHtcbiAgICAgICAgICAgIG1pbkNyb3BCb3hXaWR0aCA9IG1pbkNyb3BCb3hIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1heENyb3BCb3hIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1heENyb3BCb3hXaWR0aCkge1xuICAgICAgICAgICAgbWF4Q3JvcEJveEhlaWdodCA9IG1heENyb3BCb3hXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXhDcm9wQm94V2lkdGggPSBtYXhDcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIG1pbldpZHRoL0hlaWdodCBtdXN0IGJlIGxlc3MgdGhhbiBtYXhXaWR0aC9IZWlnaHRcbiAgICAgICAgY3JvcEJveERhdGEubWluV2lkdGggPSBNYXRoLm1pbihtaW5Dcm9wQm94V2lkdGgsIG1heENyb3BCb3hXaWR0aCk7XG4gICAgICAgIGNyb3BCb3hEYXRhLm1pbkhlaWdodCA9IE1hdGgubWluKG1pbkNyb3BCb3hIZWlnaHQsIG1heENyb3BCb3hIZWlnaHQpO1xuICAgICAgICBjcm9wQm94RGF0YS5tYXhXaWR0aCA9IG1heENyb3BCb3hXaWR0aDtcbiAgICAgICAgY3JvcEJveERhdGEubWF4SGVpZ2h0ID0gbWF4Q3JvcEJveEhlaWdodDtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkxpbWl0ZWQpIHtcbiAgICAgICAgaWYgKGxpbWl0ZWQpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5taW5MZWZ0ID0gTWF0aC5tYXgoMCwgY2FudmFzRGF0YS5sZWZ0KTtcbiAgICAgICAgICBjcm9wQm94RGF0YS5taW5Ub3AgPSBNYXRoLm1heCgwLCBjYW52YXNEYXRhLnRvcCk7XG4gICAgICAgICAgY3JvcEJveERhdGEubWF4TGVmdCA9IE1hdGgubWluKGNvbnRhaW5lckRhdGEud2lkdGgsIGNhbnZhc0RhdGEubGVmdCArIGNhbnZhc0RhdGEud2lkdGgpIC0gY3JvcEJveERhdGEud2lkdGg7XG4gICAgICAgICAgY3JvcEJveERhdGEubWF4VG9wID0gTWF0aC5taW4oY29udGFpbmVyRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEudG9wICsgY2FudmFzRGF0YS5oZWlnaHQpIC0gY3JvcEJveERhdGEuaGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1pbkxlZnQgPSAwO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1pblRvcCA9IDA7XG4gICAgICAgICAgY3JvcEJveERhdGEubWF4TGVmdCA9IGNvbnRhaW5lckRhdGEud2lkdGggLSBjcm9wQm94RGF0YS53aWR0aDtcbiAgICAgICAgICBjcm9wQm94RGF0YS5tYXhUb3AgPSBjb250YWluZXJEYXRhLmhlaWdodCAtIGNyb3BCb3hEYXRhLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyQ3JvcEJveDogZnVuY3Rpb24gcmVuZGVyQ3JvcEJveCgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICBpZiAoY3JvcEJveERhdGEud2lkdGggPiBjcm9wQm94RGF0YS5tYXhXaWR0aCB8fCBjcm9wQm94RGF0YS53aWR0aCA8IGNyb3BCb3hEYXRhLm1pbldpZHRoKSB7XG4gICAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBjcm9wQm94RGF0YS5vbGRMZWZ0O1xuICAgICAgfVxuICAgICAgaWYgKGNyb3BCb3hEYXRhLmhlaWdodCA+IGNyb3BCb3hEYXRhLm1heEhlaWdodCB8fCBjcm9wQm94RGF0YS5oZWlnaHQgPCBjcm9wQm94RGF0YS5taW5IZWlnaHQpIHtcbiAgICAgICAgY3JvcEJveERhdGEudG9wID0gY3JvcEJveERhdGEub2xkVG9wO1xuICAgICAgfVxuICAgICAgY3JvcEJveERhdGEud2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS53aWR0aCwgY3JvcEJveERhdGEubWluV2lkdGgpLCBjcm9wQm94RGF0YS5tYXhXaWR0aCk7XG4gICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS5oZWlnaHQsIGNyb3BCb3hEYXRhLm1pbkhlaWdodCksIGNyb3BCb3hEYXRhLm1heEhlaWdodCk7XG4gICAgICB0aGlzLmxpbWl0Q3JvcEJveChmYWxzZSwgdHJ1ZSk7XG4gICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEubGVmdCwgY3JvcEJveERhdGEubWluTGVmdCksIGNyb3BCb3hEYXRhLm1heExlZnQpO1xuICAgICAgY3JvcEJveERhdGEudG9wID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEudG9wLCBjcm9wQm94RGF0YS5taW5Ub3ApLCBjcm9wQm94RGF0YS5tYXhUb3ApO1xuICAgICAgY3JvcEJveERhdGEub2xkTGVmdCA9IGNyb3BCb3hEYXRhLmxlZnQ7XG4gICAgICBjcm9wQm94RGF0YS5vbGRUb3AgPSBjcm9wQm94RGF0YS50b3A7XG4gICAgICBpZiAob3B0aW9ucy5tb3ZhYmxlICYmIG9wdGlvbnMuY3JvcEJveE1vdmFibGUpIHtcbiAgICAgICAgLy8gVHVybiB0byBtb3ZlIHRoZSBjYW52YXMgd2hlbiB0aGUgY3JvcCBib3ggaXMgZXF1YWwgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICBzZXREYXRhKHRoaXMuZmFjZSwgREFUQV9BQ1RJT04sIGNyb3BCb3hEYXRhLndpZHRoID49IGNvbnRhaW5lckRhdGEud2lkdGggJiYgY3JvcEJveERhdGEuaGVpZ2h0ID49IGNvbnRhaW5lckRhdGEuaGVpZ2h0ID8gQUNUSU9OX01PVkUgOiBBQ1RJT05fQUxMKTtcbiAgICAgIH1cbiAgICAgIHNldFN0eWxlKHRoaXMuY3JvcEJveCwgYXNzaWduKHtcbiAgICAgICAgd2lkdGg6IGNyb3BCb3hEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNyb3BCb3hEYXRhLmhlaWdodFxuICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyh7XG4gICAgICAgIHRyYW5zbGF0ZVg6IGNyb3BCb3hEYXRhLmxlZnQsXG4gICAgICAgIHRyYW5zbGF0ZVk6IGNyb3BCb3hEYXRhLnRvcFxuICAgICAgfSkpKTtcbiAgICAgIGlmICh0aGlzLmNyb3BwZWQgJiYgdGhpcy5saW1pdGVkKSB7XG4gICAgICAgIHRoaXMubGltaXRDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG91dHB1dDogZnVuY3Rpb24gb3V0cHV0KCkge1xuICAgICAgdGhpcy5wcmV2aWV3KCk7XG4gICAgICBkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfQ1JPUCwgdGhpcy5nZXREYXRhKCkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcHJldmlldyA9IHtcbiAgICBpbml0UHJldmlldzogZnVuY3Rpb24gaW5pdFByZXZpZXcoKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgY3Jvc3NPcmlnaW4gPSB0aGlzLmNyb3NzT3JpZ2luO1xuICAgICAgdmFyIHByZXZpZXcgPSB0aGlzLm9wdGlvbnMucHJldmlldztcbiAgICAgIHZhciB1cmwgPSBjcm9zc09yaWdpbiA/IHRoaXMuY3Jvc3NPcmlnaW5VcmwgOiB0aGlzLnVybDtcbiAgICAgIHZhciBhbHQgPSBlbGVtZW50LmFsdCB8fCAnVGhlIGltYWdlIHRvIHByZXZpZXcnO1xuICAgICAgdmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpZiAoY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgIH1cbiAgICAgIGltYWdlLnNyYyA9IHVybDtcbiAgICAgIGltYWdlLmFsdCA9IGFsdDtcbiAgICAgIHRoaXMudmlld0JveC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICB0aGlzLnZpZXdCb3hJbWFnZSA9IGltYWdlO1xuICAgICAgaWYgKCFwcmV2aWV3KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBwcmV2aWV3cyA9IHByZXZpZXc7XG4gICAgICBpZiAodHlwZW9mIHByZXZpZXcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHByZXZpZXdzID0gZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocHJldmlldyk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZpZXcucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICBwcmV2aWV3cyA9IFtwcmV2aWV3XTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJldmlld3MgPSBwcmV2aWV3cztcbiAgICAgIGZvckVhY2gocHJldmlld3MsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgc2l6ZSBmb3IgcmVjb3ZlclxuICAgICAgICBzZXREYXRhKGVsLCBEQVRBX1BSRVZJRVcsIHtcbiAgICAgICAgICB3aWR0aDogZWwub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBlbC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgaHRtbDogZWwuaW5uZXJIVE1MXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgICAgfVxuICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICBpbWcuYWx0ID0gYWx0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPdmVycmlkZSBpbWcgZWxlbWVudCBzdHlsZXNcbiAgICAgICAgICogQWRkIGBkaXNwbGF5OmJsb2NrYCB0byBhdm9pZCBtYXJnaW4gdG9wIGlzc3VlXG4gICAgICAgICAqIEFkZCBgaGVpZ2h0OmF1dG9gIHRvIG92ZXJyaWRlIGBoZWlnaHRgIGF0dHJpYnV0ZSBvbiBJRThcbiAgICAgICAgICogKE9jY3VyIG9ubHkgd2hlbiBtYXJnaW4tdG9wIDw9IC1oZWlnaHQpXG4gICAgICAgICAqL1xuICAgICAgICBpbWcuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OmJsb2NrOycgKyAnd2lkdGg6MTAwJTsnICsgJ2hlaWdodDphdXRvOycgKyAnbWluLXdpZHRoOjAhaW1wb3J0YW50OycgKyAnbWluLWhlaWdodDowIWltcG9ydGFudDsnICsgJ21heC13aWR0aDpub25lIWltcG9ydGFudDsnICsgJ21heC1oZWlnaHQ6bm9uZSFpbXBvcnRhbnQ7JyArICdpbWFnZS1vcmllbnRhdGlvbjowZGVnIWltcG9ydGFudDtcIic7XG4gICAgICAgIGVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICByZXNldFByZXZpZXc6IGZ1bmN0aW9uIHJlc2V0UHJldmlldygpIHtcbiAgICAgIGZvckVhY2godGhpcy5wcmV2aWV3cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXREYXRhKGVsZW1lbnQsIERBVEFfUFJFVklFVyk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIHtcbiAgICAgICAgICB3aWR0aDogZGF0YS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGRhdGEuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGRhdGEuaHRtbDtcbiAgICAgICAgcmVtb3ZlRGF0YShlbGVtZW50LCBEQVRBX1BSRVZJRVcpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBwcmV2aWV3OiBmdW5jdGlvbiBwcmV2aWV3KCkge1xuICAgICAgdmFyIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhLFxuICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICB2YXIgY3JvcEJveFdpZHRoID0gY3JvcEJveERhdGEud2lkdGgsXG4gICAgICAgIGNyb3BCb3hIZWlnaHQgPSBjcm9wQm94RGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgd2lkdGggPSBpbWFnZURhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IGltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgbGVmdCA9IGNyb3BCb3hEYXRhLmxlZnQgLSBjYW52YXNEYXRhLmxlZnQgLSBpbWFnZURhdGEubGVmdDtcbiAgICAgIHZhciB0b3AgPSBjcm9wQm94RGF0YS50b3AgLSBjYW52YXNEYXRhLnRvcCAtIGltYWdlRGF0YS50b3A7XG4gICAgICBpZiAoIXRoaXMuY3JvcHBlZCB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldFN0eWxlKHRoaXMudmlld0JveEltYWdlLCBhc3NpZ24oe1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9LCBnZXRUcmFuc2Zvcm1zKGFzc2lnbih7XG4gICAgICAgIHRyYW5zbGF0ZVg6IC1sZWZ0LFxuICAgICAgICB0cmFuc2xhdGVZOiAtdG9wXG4gICAgICB9LCBpbWFnZURhdGEpKSkpO1xuICAgICAgZm9yRWFjaCh0aGlzLnByZXZpZXdzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgZGF0YSA9IGdldERhdGEoZWxlbWVudCwgREFUQV9QUkVWSUVXKTtcbiAgICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgICB2YXIgb3JpZ2luYWxIZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gb3JpZ2luYWxXaWR0aDtcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IG9yaWdpbmFsSGVpZ2h0O1xuICAgICAgICB2YXIgcmF0aW8gPSAxO1xuICAgICAgICBpZiAoY3JvcEJveFdpZHRoKSB7XG4gICAgICAgICAgcmF0aW8gPSBvcmlnaW5hbFdpZHRoIC8gY3JvcEJveFdpZHRoO1xuICAgICAgICAgIG5ld0hlaWdodCA9IGNyb3BCb3hIZWlnaHQgKiByYXRpbztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3JvcEJveEhlaWdodCAmJiBuZXdIZWlnaHQgPiBvcmlnaW5hbEhlaWdodCkge1xuICAgICAgICAgIHJhdGlvID0gb3JpZ2luYWxIZWlnaHQgLyBjcm9wQm94SGVpZ2h0O1xuICAgICAgICAgIG5ld1dpZHRoID0gY3JvcEJveFdpZHRoICogcmF0aW87XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gb3JpZ2luYWxIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwge1xuICAgICAgICAgIHdpZHRoOiBuZXdXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0U3R5bGUoZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0sIGFzc2lnbih7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoICogcmF0aW8sXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiByYXRpb1xuICAgICAgICB9LCBnZXRUcmFuc2Zvcm1zKGFzc2lnbih7XG4gICAgICAgICAgdHJhbnNsYXRlWDogLWxlZnQgKiByYXRpbyxcbiAgICAgICAgICB0cmFuc2xhdGVZOiAtdG9wICogcmF0aW9cbiAgICAgICAgfSwgaW1hZ2VEYXRhKSkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZXZlbnRzID0ge1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgY3JvcHBlciA9IHRoaXMuY3JvcHBlcjtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcHN0YXJ0KSkge1xuICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QX1NUQVJULCBvcHRpb25zLmNyb3BzdGFydCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3Btb3ZlKSkge1xuICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QX01PVkUsIG9wdGlvbnMuY3JvcG1vdmUpO1xuICAgICAgfVxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wZW5kKSkge1xuICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QX0VORCwgb3B0aW9ucy5jcm9wZW5kKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcCkpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUCwgb3B0aW9ucy5jcm9wKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuem9vbSkpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfWk9PTSwgb3B0aW9ucy56b29tKTtcbiAgICAgIH1cbiAgICAgIGFkZExpc3RlbmVyKGNyb3BwZXIsIEVWRU5UX1BPSU5URVJfRE9XTiwgdGhpcy5vbkNyb3BTdGFydCA9IHRoaXMuY3JvcFN0YXJ0LmJpbmQodGhpcykpO1xuICAgICAgaWYgKG9wdGlvbnMuem9vbWFibGUgJiYgb3B0aW9ucy56b29tT25XaGVlbCkge1xuICAgICAgICBhZGRMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9XSEVFTCwgdGhpcy5vbldoZWVsID0gdGhpcy53aGVlbC5iaW5kKHRoaXMpLCB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnRvZ2dsZURyYWdNb2RlT25EYmxjbGljaykge1xuICAgICAgICBhZGRMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9EQkxDTElDSywgdGhpcy5vbkRibGNsaWNrID0gdGhpcy5kYmxjbGljay5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQub3duZXJEb2N1bWVudCwgRVZFTlRfUE9JTlRFUl9NT1ZFLCB0aGlzLm9uQ3JvcE1vdmUgPSB0aGlzLmNyb3BNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudC5vd25lckRvY3VtZW50LCBFVkVOVF9QT0lOVEVSX1VQLCB0aGlzLm9uQ3JvcEVuZCA9IHRoaXMuY3JvcEVuZC5iaW5kKHRoaXMpKTtcbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIod2luZG93LCBFVkVOVF9SRVNJWkUsIHRoaXMub25SZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNyb3BwZXIgPSB0aGlzLmNyb3BwZXI7XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3BzdGFydCkpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9TVEFSVCwgb3B0aW9ucy5jcm9wc3RhcnQpO1xuICAgICAgfVxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wbW92ZSkpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9NT1ZFLCBvcHRpb25zLmNyb3Btb3ZlKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcGVuZCkpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9FTkQsIG9wdGlvbnMuY3JvcGVuZCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3ApKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1AsIG9wdGlvbnMuY3JvcCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnpvb20pKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1pPT00sIG9wdGlvbnMuem9vbSk7XG4gICAgICB9XG4gICAgICByZW1vdmVMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9QT0lOVEVSX0RPV04sIHRoaXMub25Dcm9wU3RhcnQpO1xuICAgICAgaWYgKG9wdGlvbnMuem9vbWFibGUgJiYgb3B0aW9ucy56b29tT25XaGVlbCkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9XSEVFTCwgdGhpcy5vbldoZWVsLCB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnRvZ2dsZURyYWdNb2RlT25EYmxjbGljaykge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9EQkxDTElDSywgdGhpcy5vbkRibGNsaWNrKTtcbiAgICAgIH1cbiAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQub3duZXJEb2N1bWVudCwgRVZFTlRfUE9JTlRFUl9NT1ZFLCB0aGlzLm9uQ3JvcE1vdmUpO1xuICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudC5vd25lckRvY3VtZW50LCBFVkVOVF9QT0lOVEVSX1VQLCB0aGlzLm9uQ3JvcEVuZCk7XG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHdpbmRvdywgRVZFTlRfUkVTSVpFLCB0aGlzLm9uUmVzaXplKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZXJzID0ge1xuICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLFxuICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhO1xuICAgICAgdmFyIHJhdGlvWCA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aCAvIGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgICB2YXIgcmF0aW9ZID0gY29udGFpbmVyLm9mZnNldEhlaWdodCAvIGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgICAgdmFyIHJhdGlvID0gTWF0aC5hYnMocmF0aW9YIC0gMSkgPiBNYXRoLmFicyhyYXRpb1kgLSAxKSA/IHJhdGlvWCA6IHJhdGlvWTtcblxuICAgICAgLy8gUmVzaXplIHdoZW4gd2lkdGggY2hhbmdlZCBvciBoZWlnaHQgY2hhbmdlZFxuICAgICAgaWYgKHJhdGlvICE9PSAxKSB7XG4gICAgICAgIHZhciBjYW52YXNEYXRhO1xuICAgICAgICB2YXIgY3JvcEJveERhdGE7XG4gICAgICAgIGlmIChvcHRpb25zLnJlc3RvcmUpIHtcbiAgICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5nZXRDYW52YXNEYXRhKCk7XG4gICAgICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmdldENyb3BCb3hEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMucmVzdG9yZSkge1xuICAgICAgICAgIHRoaXMuc2V0Q2FudmFzRGF0YShmb3JFYWNoKGNhbnZhc0RhdGEsIGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgICBjYW52YXNEYXRhW2ldID0gbiAqIHJhdGlvO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgICB0aGlzLnNldENyb3BCb3hEYXRhKGZvckVhY2goY3JvcEJveERhdGEsIGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgICBjcm9wQm94RGF0YVtpXSA9IG4gKiByYXRpbztcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRibGNsaWNrOiBmdW5jdGlvbiBkYmxjbGljaygpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMub3B0aW9ucy5kcmFnTW9kZSA9PT0gRFJBR19NT0RFX05PTkUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXREcmFnTW9kZShoYXNDbGFzcyh0aGlzLmRyYWdCb3gsIENMQVNTX0NST1ApID8gRFJBR19NT0RFX01PVkUgOiBEUkFHX01PREVfQ1JPUCk7XG4gICAgfSxcbiAgICB3aGVlbDogZnVuY3Rpb24gd2hlZWwoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgcmF0aW8gPSBOdW1iZXIodGhpcy5vcHRpb25zLndoZWVsWm9vbVJhdGlvKSB8fCAwLjE7XG4gICAgICB2YXIgZGVsdGEgPSAxO1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gTGltaXQgd2hlZWwgc3BlZWQgdG8gcHJldmVudCB6b29tIHRvbyBmYXN0ICgjMjEpXG4gICAgICBpZiAodGhpcy53aGVlbGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLndoZWVsaW5nID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy53aGVlbGluZyA9IGZhbHNlO1xuICAgICAgfSwgNTApO1xuICAgICAgaWYgKGV2ZW50LmRlbHRhWSkge1xuICAgICAgICBkZWx0YSA9IGV2ZW50LmRlbHRhWSA+IDAgPyAxIDogLTE7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LndoZWVsRGVsdGEpIHtcbiAgICAgICAgZGVsdGEgPSAtZXZlbnQud2hlZWxEZWx0YSAvIDEyMDtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGV0YWlsKSB7XG4gICAgICAgIGRlbHRhID0gZXZlbnQuZGV0YWlsID4gMCA/IDEgOiAtMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuem9vbSgtZGVsdGEgKiByYXRpbywgZXZlbnQpO1xuICAgIH0sXG4gICAgY3JvcFN0YXJ0OiBmdW5jdGlvbiBjcm9wU3RhcnQoZXZlbnQpIHtcbiAgICAgIHZhciBidXR0b25zID0gZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWRcblxuICAgICAgLy8gSGFuZGxlIG1vdXNlIGV2ZW50IGFuZCBwb2ludGVyIGV2ZW50IGFuZCBpZ25vcmUgdG91Y2ggZXZlbnRcbiAgICAgIHx8IChldmVudC50eXBlID09PSAnbW91c2Vkb3duJyB8fCBldmVudC50eXBlID09PSAncG9pbnRlcmRvd24nICYmIGV2ZW50LnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSAmJiAoXG4gICAgICAvLyBObyBwcmltYXJ5IGJ1dHRvbiAoVXN1YWxseSB0aGUgbGVmdCBidXR0b24pXG4gICAgICBpc051bWJlcihidXR0b25zKSAmJiBidXR0b25zICE9PSAxIHx8IGlzTnVtYmVyKGJ1dHRvbikgJiYgYnV0dG9uICE9PSAwXG5cbiAgICAgIC8vIE9wZW4gY29udGV4dCBtZW51XG4gICAgICB8fCBldmVudC5jdHJsS2V5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgcG9pbnRlcnMgPSB0aGlzLnBvaW50ZXJzO1xuICAgICAgdmFyIGFjdGlvbjtcbiAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgICAvLyBIYW5kbGUgdG91Y2ggZXZlbnRcbiAgICAgICAgZm9yRWFjaChldmVudC5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgICAgcG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl0gPSBnZXRQb2ludGVyKHRvdWNoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgbW91c2UgZXZlbnQgYW5kIHBvaW50ZXIgZXZlbnRcbiAgICAgICAgcG9pbnRlcnNbZXZlbnQucG9pbnRlcklkIHx8IDBdID0gZ2V0UG9pbnRlcihldmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXMocG9pbnRlcnMpLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy56b29tYWJsZSAmJiBvcHRpb25zLnpvb21PblRvdWNoKSB7XG4gICAgICAgIGFjdGlvbiA9IEFDVElPTl9aT09NO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aW9uID0gZ2V0RGF0YShldmVudC50YXJnZXQsIERBVEFfQUNUSU9OKTtcbiAgICAgIH1cbiAgICAgIGlmICghUkVHRVhQX0FDVElPTlMudGVzdChhY3Rpb24pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfQ1JPUF9TVEFSVCwge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgIH0pID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoaXMgbGluZSBpcyByZXF1aXJlZCBmb3IgcHJldmVudGluZyBwYWdlIHpvb21pbmcgaW4gaU9TIGJyb3dzZXJzXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICB0aGlzLmNyb3BwaW5nID0gZmFsc2U7XG4gICAgICBpZiAoYWN0aW9uID09PSBBQ1RJT05fQ1JPUCkge1xuICAgICAgICB0aGlzLmNyb3BwaW5nID0gdHJ1ZTtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5kcmFnQm94LCBDTEFTU19NT0RBTCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjcm9wTW92ZTogZnVuY3Rpb24gY3JvcE1vdmUoZXZlbnQpIHtcbiAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGlvbjtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICFhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX0NST1BfTU9WRSwge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgIH0pID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgZm9yRWFjaChldmVudC5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgICAgLy8gVGhlIGZpcnN0IHBhcmFtZXRlciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCAoIzQzMilcbiAgICAgICAgICBhc3NpZ24ocG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl0gfHwge30sIGdldFBvaW50ZXIodG91Y2gsIHRydWUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhc3NpZ24ocG9pbnRlcnNbZXZlbnQucG9pbnRlcklkIHx8IDBdIHx8IHt9LCBnZXRQb2ludGVyKGV2ZW50LCB0cnVlKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZShldmVudCk7XG4gICAgfSxcbiAgICBjcm9wRW5kOiBmdW5jdGlvbiBjcm9wRW5kKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3Rpb24sXG4gICAgICAgIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgICBmb3JFYWNoKGV2ZW50LmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbiAodG91Y2gpIHtcbiAgICAgICAgICBkZWxldGUgcG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHBvaW50ZXJzW2V2ZW50LnBvaW50ZXJJZCB8fCAwXTtcbiAgICAgIH1cbiAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHBvaW50ZXJzKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNyb3BwaW5nKSB7XG4gICAgICAgIHRoaXMuY3JvcHBpbmcgPSBmYWxzZTtcbiAgICAgICAgdG9nZ2xlQ2xhc3ModGhpcy5kcmFnQm94LCBDTEFTU19NT0RBTCwgdGhpcy5jcm9wcGVkICYmIHRoaXMub3B0aW9ucy5tb2RhbCk7XG4gICAgICB9XG4gICAgICBkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfQ1JPUF9FTkQsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNoYW5nZSA9IHtcbiAgICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZShldmVudCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgIGNvbnRhaW5lckRhdGEgPSB0aGlzLmNvbnRhaW5lckRhdGEsXG4gICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YSxcbiAgICAgICAgcG9pbnRlcnMgPSB0aGlzLnBvaW50ZXJzO1xuICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aW9uO1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gb3B0aW9ucy5hc3BlY3RSYXRpbztcbiAgICAgIHZhciBsZWZ0ID0gY3JvcEJveERhdGEubGVmdCxcbiAgICAgICAgdG9wID0gY3JvcEJveERhdGEudG9wLFxuICAgICAgICB3aWR0aCA9IGNyb3BCb3hEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBjcm9wQm94RGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG4gICAgICB2YXIgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgICAgdmFyIG1pbkxlZnQgPSAwO1xuICAgICAgdmFyIG1pblRvcCA9IDA7XG4gICAgICB2YXIgbWF4V2lkdGggPSBjb250YWluZXJEYXRhLndpZHRoO1xuICAgICAgdmFyIG1heEhlaWdodCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgICAgdmFyIHJlbmRlcmFibGUgPSB0cnVlO1xuICAgICAgdmFyIG9mZnNldDtcblxuICAgICAgLy8gTG9ja2luZyBhc3BlY3QgcmF0aW8gaW4gXCJmcmVlIG1vZGVcIiBieSBob2xkaW5nIHNoaWZ0IGtleVxuICAgICAgaWYgKCFhc3BlY3RSYXRpbyAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoICYmIGhlaWdodCA/IHdpZHRoIC8gaGVpZ2h0IDogMTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgbWluTGVmdCA9IGNyb3BCb3hEYXRhLm1pbkxlZnQ7XG4gICAgICAgIG1pblRvcCA9IGNyb3BCb3hEYXRhLm1pblRvcDtcbiAgICAgICAgbWF4V2lkdGggPSBtaW5MZWZ0ICsgTWF0aC5taW4oY29udGFpbmVyRGF0YS53aWR0aCwgY2FudmFzRGF0YS53aWR0aCwgY2FudmFzRGF0YS5sZWZ0ICsgY2FudmFzRGF0YS53aWR0aCk7XG4gICAgICAgIG1heEhlaWdodCA9IG1pblRvcCArIE1hdGgubWluKGNvbnRhaW5lckRhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLmhlaWdodCwgY2FudmFzRGF0YS50b3AgKyBjYW52YXNEYXRhLmhlaWdodCk7XG4gICAgICB9XG4gICAgICB2YXIgcG9pbnRlciA9IHBvaW50ZXJzW09iamVjdC5rZXlzKHBvaW50ZXJzKVswXV07XG4gICAgICB2YXIgcmFuZ2UgPSB7XG4gICAgICAgIHg6IHBvaW50ZXIuZW5kWCAtIHBvaW50ZXIuc3RhcnRYLFxuICAgICAgICB5OiBwb2ludGVyLmVuZFkgLSBwb2ludGVyLnN0YXJ0WVxuICAgICAgfTtcbiAgICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKHNpZGUpIHtcbiAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgY2FzZSBBQ1RJT05fRUFTVDpcbiAgICAgICAgICAgIGlmIChyaWdodCArIHJhbmdlLnggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICByYW5nZS54ID0gbWF4V2lkdGggLSByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQUNUSU9OX1dFU1Q6XG4gICAgICAgICAgICBpZiAobGVmdCArIHJhbmdlLnggPCBtaW5MZWZ0KSB7XG4gICAgICAgICAgICAgIHJhbmdlLnggPSBtaW5MZWZ0IC0gbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQUNUSU9OX05PUlRIOlxuICAgICAgICAgICAgaWYgKHRvcCArIHJhbmdlLnkgPCBtaW5Ub3ApIHtcbiAgICAgICAgICAgICAgcmFuZ2UueSA9IG1pblRvcCAtIHRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQUNUSU9OX1NPVVRIOlxuICAgICAgICAgICAgaWYgKGJvdHRvbSArIHJhbmdlLnkgPiBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgcmFuZ2UueSA9IG1heEhlaWdodCAtIGJvdHRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgLy8gTW92ZSBjcm9wIGJveFxuICAgICAgICBjYXNlIEFDVElPTl9BTEw6XG4gICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIFJlc2l6ZSBjcm9wIGJveFxuICAgICAgICBjYXNlIEFDVElPTl9FQVNUOlxuICAgICAgICAgIGlmIChyYW5nZS54ID49IDAgJiYgKHJpZ2h0ID49IG1heFdpZHRoIHx8IGFzcGVjdFJhdGlvICYmICh0b3AgPD0gbWluVG9wIHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSkge1xuICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoZWNrKEFDVElPTl9FQVNUKTtcbiAgICAgICAgICB3aWR0aCArPSByYW5nZS54O1xuICAgICAgICAgIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9XRVNUO1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB0b3AgKz0gKGNyb3BCb3hEYXRhLmhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fTk9SVEg6XG4gICAgICAgICAgaWYgKHJhbmdlLnkgPD0gMCAmJiAodG9wIDw9IG1pblRvcCB8fCBhc3BlY3RSYXRpbyAmJiAobGVmdCA8PSBtaW5MZWZ0IHx8IHJpZ2h0ID49IG1heFdpZHRoKSkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEg7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgbGVmdCArPSAoY3JvcEJveERhdGEud2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fV0VTVDpcbiAgICAgICAgICBpZiAocmFuZ2UueCA8PSAwICYmIChsZWZ0IDw9IG1pbkxlZnQgfHwgYXNwZWN0UmF0aW8gJiYgKHRvcCA8PSBtaW5Ub3AgfHwgYm90dG9tID49IG1heEhlaWdodCkpKSB7XG4gICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hlY2soQUNUSU9OX1dFU1QpO1xuICAgICAgICAgIHdpZHRoIC09IHJhbmdlLng7XG4gICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9FQVNUO1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB0b3AgKz0gKGNyb3BCb3hEYXRhLmhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fU09VVEg6XG4gICAgICAgICAgaWYgKHJhbmdlLnkgPj0gMCAmJiAoYm90dG9tID49IG1heEhlaWdodCB8fCBhc3BlY3RSYXRpbyAmJiAobGVmdCA8PSBtaW5MZWZ0IHx8IHJpZ2h0ID49IG1heFdpZHRoKSkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGVjayhBQ1RJT05fU09VVEgpO1xuICAgICAgICAgIGhlaWdodCArPSByYW5nZS55O1xuICAgICAgICAgIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEg7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgbGVmdCArPSAoY3JvcEJveERhdGEud2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fTk9SVEhfRUFTVDpcbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGlmIChyYW5nZS55IDw9IDAgJiYgKHRvcCA8PSBtaW5Ub3AgfHwgcmlnaHQgPj0gbWF4V2lkdGgpKSB7XG4gICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgICAgaGVpZ2h0IC09IHJhbmdlLnk7XG4gICAgICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9OT1JUSCk7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fRUFTVCk7XG4gICAgICAgICAgICBpZiAocmFuZ2UueCA+PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChyaWdodCA8IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS55IDw9IDAgJiYgdG9wIDw9IG1pblRvcCkge1xuICAgICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2lkdGggKz0gcmFuZ2UueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyYW5nZS55IDw9IDApIHtcbiAgICAgICAgICAgICAgaWYgKHRvcCA+IG1pblRvcCkge1xuICAgICAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIX1dFU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIX1dFU1Q7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fTk9SVEhfV0VTVDpcbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGlmIChyYW5nZS55IDw9IDAgJiYgKHRvcCA8PSBtaW5Ub3AgfHwgbGVmdCA8PSBtaW5MZWZ0KSkge1xuICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2soQUNUSU9OX05PUlRIKTtcbiAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgbGVmdCArPSBjcm9wQm94RGF0YS53aWR0aCAtIHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX1dFU1QpO1xuICAgICAgICAgICAgaWYgKHJhbmdlLnggPD0gMCkge1xuICAgICAgICAgICAgICBpZiAobGVmdCA+IG1pbkxlZnQpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS55IDw9IDAgJiYgdG9wIDw9IG1pblRvcCkge1xuICAgICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2lkdGggLT0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJhbmdlLnkgPD0gMCkge1xuICAgICAgICAgICAgICBpZiAodG9wID4gbWluVG9wKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0IC09IHJhbmdlLnk7XG4gICAgICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHdpZHRoIDwgMCAmJiBoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9TT1VUSF9XRVNUO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEFDVElPTl9TT1VUSF9XRVNUOlxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgaWYgKHJhbmdlLnggPD0gMCAmJiAobGVmdCA8PSBtaW5MZWZ0IHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSB7XG4gICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fV0VTVCk7XG4gICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX1NPVVRIKTtcbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9XRVNUKTtcbiAgICAgICAgICAgIGlmIChyYW5nZS54IDw9IDApIHtcbiAgICAgICAgICAgICAgaWYgKGxlZnQgPiBtaW5MZWZ0KSB7XG4gICAgICAgICAgICAgICAgd2lkdGggLT0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHJhbmdlLng7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2UueSA+PSAwICYmIGJvdHRvbSA+PSBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpZHRoIC09IHJhbmdlLng7XG4gICAgICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyYW5nZS55ID49IDApIHtcbiAgICAgICAgICAgICAgaWYgKGJvdHRvbSA8IG1heEhlaWdodCkge1xuICAgICAgICAgICAgICAgIGhlaWdodCArPSByYW5nZS55O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoZWlnaHQgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHdpZHRoIDwgMCAmJiBoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9OT1JUSF9XRVNUO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEFDVElPTl9TT1VUSF9FQVNUOlxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgaWYgKHJhbmdlLnggPj0gMCAmJiAocmlnaHQgPj0gbWF4V2lkdGggfHwgYm90dG9tID49IG1heEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9FQVNUKTtcbiAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fU09VVEgpO1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX0VBU1QpO1xuICAgICAgICAgICAgaWYgKHJhbmdlLnggPj0gMCkge1xuICAgICAgICAgICAgICBpZiAocmlnaHQgPCBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2UueSA+PSAwICYmIGJvdHRvbSA+PSBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmFuZ2UueSA+PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChib3R0b20gPCBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIX1dFU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIX1dFU1Q7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBNb3ZlIGNhbnZhc1xuICAgICAgICBjYXNlIEFDVElPTl9NT1ZFOlxuICAgICAgICAgIHRoaXMubW92ZShyYW5nZS54LCByYW5nZS55KTtcbiAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gWm9vbSBjYW52YXNcbiAgICAgICAgY2FzZSBBQ1RJT05fWk9PTTpcbiAgICAgICAgICB0aGlzLnpvb20oZ2V0TWF4Wm9vbVJhdGlvKHBvaW50ZXJzKSwgZXZlbnQpO1xuICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBDcmVhdGUgY3JvcCBib3hcbiAgICAgICAgY2FzZSBBQ1RJT05fQ1JPUDpcbiAgICAgICAgICBpZiAoIXJhbmdlLnggfHwgIXJhbmdlLnkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvZmZzZXQgPSBnZXRPZmZzZXQodGhpcy5jcm9wcGVyKTtcbiAgICAgICAgICBsZWZ0ID0gcG9pbnRlci5zdGFydFggLSBvZmZzZXQubGVmdDtcbiAgICAgICAgICB0b3AgPSBwb2ludGVyLnN0YXJ0WSAtIG9mZnNldC50b3A7XG4gICAgICAgICAgd2lkdGggPSBjcm9wQm94RGF0YS5taW5XaWR0aDtcbiAgICAgICAgICBoZWlnaHQgPSBjcm9wQm94RGF0YS5taW5IZWlnaHQ7XG4gICAgICAgICAgaWYgKHJhbmdlLnggPiAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSByYW5nZS55ID4gMCA/IEFDVElPTl9TT1VUSF9FQVNUIDogQUNUSU9OX05PUlRIX0VBU1Q7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS54IDwgMCkge1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICAgIGFjdGlvbiA9IHJhbmdlLnkgPiAwID8gQUNUSU9OX1NPVVRIX1dFU1QgOiBBQ1RJT05fTk9SVEhfV0VTVDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJhbmdlLnkgPCAwKSB7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNob3cgdGhlIGNyb3AgYm94IGlmIGlzIGhpZGRlblxuICAgICAgICAgIGlmICghdGhpcy5jcm9wcGVkKSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmNyb3BCb3gsIENMQVNTX0hJRERFTik7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMubGltaXRlZCkge1xuICAgICAgICAgICAgICB0aGlzLmxpbWl0Q3JvcEJveCh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVuZGVyYWJsZSkge1xuICAgICAgICBjcm9wQm94RGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBsZWZ0O1xuICAgICAgICBjcm9wQm94RGF0YS50b3AgPSB0b3A7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLnJlbmRlckNyb3BCb3goKTtcbiAgICAgIH1cblxuICAgICAgLy8gT3ZlcnJpZGVcbiAgICAgIGZvckVhY2gocG9pbnRlcnMsIGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHAuc3RhcnRYID0gcC5lbmRYO1xuICAgICAgICBwLnN0YXJ0WSA9IHAuZW5kWTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICAvLyBTaG93IHRoZSBjcm9wIGJveCBtYW51YWxseVxuICAgIGNyb3A6IGZ1bmN0aW9uIGNyb3AoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5jcm9wcGVkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuY3JvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGltaXRDcm9wQm94KHRydWUsIHRydWUpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsKSB7XG4gICAgICAgICAgYWRkQ2xhc3ModGhpcy5kcmFnQm94LCBDTEFTU19NT0RBTCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgICAgICB0aGlzLnNldENyb3BCb3hEYXRhKHRoaXMuaW5pdGlhbENyb3BCb3hEYXRhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy8gUmVzZXQgdGhlIGltYWdlIGFuZCBjcm9wIGJveCB0byB0aGVpciBpbml0aWFsIHN0YXRlc1xuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhID0gYXNzaWduKHt9LCB0aGlzLmluaXRpYWxJbWFnZURhdGEpO1xuICAgICAgICB0aGlzLmNhbnZhc0RhdGEgPSBhc3NpZ24oe30sIHRoaXMuaW5pdGlhbENhbnZhc0RhdGEpO1xuICAgICAgICB0aGlzLmNyb3BCb3hEYXRhID0gYXNzaWduKHt9LCB0aGlzLmluaXRpYWxDcm9wQm94RGF0YSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKCk7XG4gICAgICAgIGlmICh0aGlzLmNyb3BwZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckNyb3BCb3goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvLyBDbGVhciB0aGUgY3JvcCBib3hcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBpZiAodGhpcy5jcm9wcGVkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGFzc2lnbih0aGlzLmNyb3BCb3hEYXRhLCB7XG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyb3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICAgIHRoaXMubGltaXRDYW52YXModHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIGNhbnZhcyBhZnRlciBjcm9wIGJveCByZW5kZXJlZFxuICAgICAgICB0aGlzLnJlbmRlckNhbnZhcygpO1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmRyYWdCb3gsIENMQVNTX01PREFMKTtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5jcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHRoZSBpbWFnZSdzIHNyYyBhbmQgcmVidWlsZCB0aGUgY3JvcHBlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgbmV3IFVSTC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNTYW1lU2l6ZV0gLSBJbmRpY2F0ZSBpZiB0aGUgbmV3IGltYWdlIGhhcyB0aGUgc2FtZSBzaXplIGFzIHRoZSBvbGQgb25lLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZSh1cmwpIHtcbiAgICAgIHZhciBoYXNTYW1lU2l6ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSW1nKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnNyYyA9IHVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzU2FtZVNpemUpIHtcbiAgICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICAgICAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgICAgICAgdGhpcy52aWV3Qm94SW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICAgICAgZm9yRWFjaCh0aGlzLnByZXZpZXdzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zcmMgPSB1cmw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNJbWcpIHtcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IG51bGw7XG4gICAgICAgICAgdGhpcy51bmNyZWF0ZSgpO1xuICAgICAgICAgIHRoaXMubG9hZCh1cmwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vIEVuYWJsZSAodW5mcmVlemUpIHRoZSBjcm9wcGVyXG4gICAgZW5hYmxlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jcm9wcGVyLCBDTEFTU19ESVNBQkxFRCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vIERpc2FibGUgKGZyZWV6ZSkgdGhlIGNyb3BwZXJcbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuY3JvcHBlciwgQ0xBU1NfRElTQUJMRUQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBjcm9wcGVyIGFuZCByZW1vdmUgdGhlIGluc3RhbmNlIGZyb20gdGhlIGltYWdlXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICBpZiAoIWVsZW1lbnRbTkFNRVNQQUNFXSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbTkFNRVNQQUNFXSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICh0aGlzLmlzSW1nICYmIHRoaXMucmVwbGFjZWQpIHtcbiAgICAgICAgZWxlbWVudC5zcmMgPSB0aGlzLm9yaWdpbmFsVXJsO1xuICAgICAgfVxuICAgICAgdGhpcy51bmNyZWF0ZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBNb3ZlIHRoZSBjYW52YXMgd2l0aCByZWxhdGl2ZSBvZmZzZXRzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFggLSBUaGUgcmVsYXRpdmUgb2Zmc2V0IGRpc3RhbmNlIG9uIHRoZSB4LWF4aXMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRZPW9mZnNldFhdIC0gVGhlIHJlbGF0aXZlIG9mZnNldCBkaXN0YW5jZSBvbiB0aGUgeS1heGlzLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgbW92ZTogZnVuY3Rpb24gbW92ZShvZmZzZXRYKSB7XG4gICAgICB2YXIgb2Zmc2V0WSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogb2Zmc2V0WDtcbiAgICAgIHZhciBfdGhpcyRjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICBsZWZ0ID0gX3RoaXMkY2FudmFzRGF0YS5sZWZ0LFxuICAgICAgICB0b3AgPSBfdGhpcyRjYW52YXNEYXRhLnRvcDtcbiAgICAgIHJldHVybiB0aGlzLm1vdmVUbyhpc1VuZGVmaW5lZChvZmZzZXRYKSA/IG9mZnNldFggOiBsZWZ0ICsgTnVtYmVyKG9mZnNldFgpLCBpc1VuZGVmaW5lZChvZmZzZXRZKSA/IG9mZnNldFkgOiB0b3AgKyBOdW1iZXIob2Zmc2V0WSkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogTW92ZSB0aGUgY2FudmFzIHRvIGFuIGFic29sdXRlIHBvaW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeC1heGlzIGNvb3JkaW5hdGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PXhdIC0gVGhlIHktYXhpcyBjb29yZGluYXRlLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgbW92ZVRvOiBmdW5jdGlvbiBtb3ZlVG8oeCkge1xuICAgICAgdmFyIHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHg7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICB4ID0gTnVtYmVyKHgpO1xuICAgICAgeSA9IE51bWJlcih5KTtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMub3B0aW9ucy5tb3ZhYmxlKSB7XG4gICAgICAgIGlmIChpc051bWJlcih4KSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEubGVmdCA9IHg7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTnVtYmVyKHkpKSB7XG4gICAgICAgICAgY2FudmFzRGF0YS50b3AgPSB5O1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogWm9vbSB0aGUgY2FudmFzIHdpdGggYSByZWxhdGl2ZSByYXRpb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYXRpbyAtIFRoZSB0YXJnZXQgcmF0aW8uXG4gICAgICogQHBhcmFtIHtFdmVudH0gX29yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgaWYgYW55LlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgem9vbTogZnVuY3Rpb24gem9vbShyYXRpbywgX29yaWdpbmFsRXZlbnQpIHtcbiAgICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgcmF0aW8gPSBOdW1iZXIocmF0aW8pO1xuICAgICAgaWYgKHJhdGlvIDwgMCkge1xuICAgICAgICByYXRpbyA9IDEgLyAoMSAtIHJhdGlvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhdGlvID0gMSArIHJhdGlvO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuem9vbVRvKGNhbnZhc0RhdGEud2lkdGggKiByYXRpbyAvIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoLCBudWxsLCBfb3JpZ2luYWxFdmVudCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBab29tIHRoZSBjYW52YXMgdG8gYW4gYWJzb2x1dGUgcmF0aW9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmF0aW8gLSBUaGUgdGFyZ2V0IHJhdGlvLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwaXZvdCAtIFRoZSB6b29tIHBpdm90IHBvaW50IGNvb3JkaW5hdGUuXG4gICAgICogQHBhcmFtIHtFdmVudH0gX29yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgaWYgYW55LlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgem9vbVRvOiBmdW5jdGlvbiB6b29tVG8ocmF0aW8sIHBpdm90LCBfb3JpZ2luYWxFdmVudCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgd2lkdGggPSBjYW52YXNEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBjYW52YXNEYXRhLmhlaWdodCxcbiAgICAgICAgbmF0dXJhbFdpZHRoID0gY2FudmFzRGF0YS5uYXR1cmFsV2lkdGgsXG4gICAgICAgIG5hdHVyYWxIZWlnaHQgPSBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQ7XG4gICAgICByYXRpbyA9IE51bWJlcihyYXRpbyk7XG4gICAgICBpZiAocmF0aW8gPj0gMCAmJiB0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIG9wdGlvbnMuem9vbWFibGUpIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gbmF0dXJhbFdpZHRoICogcmF0aW87XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0ICogcmF0aW87XG4gICAgICAgIGlmIChkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfWk9PTSwge1xuICAgICAgICAgIHJhdGlvOiByYXRpbyxcbiAgICAgICAgICBvbGRSYXRpbzogd2lkdGggLyBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogX29yaWdpbmFsRXZlbnRcbiAgICAgICAgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9vcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgdmFyIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gZ2V0T2Zmc2V0KHRoaXMuY3JvcHBlcik7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IHBvaW50ZXJzICYmIE9iamVjdC5rZXlzKHBvaW50ZXJzKS5sZW5ndGggPyBnZXRQb2ludGVyc0NlbnRlcihwb2ludGVycykgOiB7XG4gICAgICAgICAgICBwYWdlWDogX29yaWdpbmFsRXZlbnQucGFnZVgsXG4gICAgICAgICAgICBwYWdlWTogX29yaWdpbmFsRXZlbnQucGFnZVlcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gWm9vbSBmcm9tIHRoZSB0cmlnZ2VyaW5nIHBvaW50IG9mIHRoZSBldmVudFxuICAgICAgICAgIGNhbnZhc0RhdGEubGVmdCAtPSAobmV3V2lkdGggLSB3aWR0aCkgKiAoKGNlbnRlci5wYWdlWCAtIG9mZnNldC5sZWZ0IC0gY2FudmFzRGF0YS5sZWZ0KSAvIHdpZHRoKTtcbiAgICAgICAgICBjYW52YXNEYXRhLnRvcCAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KSAqICgoY2VudGVyLnBhZ2VZIC0gb2Zmc2V0LnRvcCAtIGNhbnZhc0RhdGEudG9wKSAvIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwaXZvdCkgJiYgaXNOdW1iZXIocGl2b3QueCkgJiYgaXNOdW1iZXIocGl2b3QueSkpIHtcbiAgICAgICAgICBjYW52YXNEYXRhLmxlZnQgLT0gKG5ld1dpZHRoIC0gd2lkdGgpICogKChwaXZvdC54IC0gY2FudmFzRGF0YS5sZWZ0KSAvIHdpZHRoKTtcbiAgICAgICAgICBjYW52YXNEYXRhLnRvcCAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KSAqICgocGl2b3QueSAtIGNhbnZhc0RhdGEudG9wKSAvIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gWm9vbSBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAgIGNhbnZhc0RhdGEubGVmdCAtPSAobmV3V2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICAgIGNhbnZhc0RhdGEudG9wIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXNEYXRhLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICB0aGlzLnJlbmRlckNhbnZhcyh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm90YXRlIHRoZSBjYW52YXMgd2l0aCBhIHJlbGF0aXZlIGRlZ3JlZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWUgLSBUaGUgcm90YXRlIGRlZ3JlZS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHJvdGF0ZTogZnVuY3Rpb24gcm90YXRlKGRlZ3JlZSkge1xuICAgICAgcmV0dXJuIHRoaXMucm90YXRlVG8oKHRoaXMuaW1hZ2VEYXRhLnJvdGF0ZSB8fCAwKSArIE51bWJlcihkZWdyZWUpKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdGF0ZSB0aGUgY2FudmFzIHRvIGFuIGFic29sdXRlIGRlZ3JlZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWUgLSBUaGUgcm90YXRlIGRlZ3JlZS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHJvdGF0ZVRvOiBmdW5jdGlvbiByb3RhdGVUbyhkZWdyZWUpIHtcbiAgICAgIGRlZ3JlZSA9IE51bWJlcihkZWdyZWUpO1xuICAgICAgaWYgKGlzTnVtYmVyKGRlZ3JlZSkgJiYgdGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLm9wdGlvbnMucm90YXRhYmxlKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhLnJvdGF0ZSA9IGRlZ3JlZSAlIDM2MDtcbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNjYWxlIHRoZSBpbWFnZSBvbiB0aGUgeC1heGlzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVggLSBUaGUgc2NhbGUgcmF0aW8gb24gdGhlIHgtYXhpcy5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNjYWxlWDogZnVuY3Rpb24gc2NhbGVYKF9zY2FsZVgpIHtcbiAgICAgIHZhciBzY2FsZVkgPSB0aGlzLmltYWdlRGF0YS5zY2FsZVk7XG4gICAgICByZXR1cm4gdGhpcy5zY2FsZShfc2NhbGVYLCBpc051bWJlcihzY2FsZVkpID8gc2NhbGVZIDogMSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTY2FsZSB0aGUgaW1hZ2Ugb24gdGhlIHktYXhpcy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVZIC0gVGhlIHNjYWxlIHJhdGlvIG9uIHRoZSB5LWF4aXMuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzY2FsZVk6IGZ1bmN0aW9uIHNjYWxlWShfc2NhbGVZKSB7XG4gICAgICB2YXIgc2NhbGVYID0gdGhpcy5pbWFnZURhdGEuc2NhbGVYO1xuICAgICAgcmV0dXJuIHRoaXMuc2NhbGUoaXNOdW1iZXIoc2NhbGVYKSA/IHNjYWxlWCA6IDEsIF9zY2FsZVkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2NhbGUgdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWCAtIFRoZSBzY2FsZSByYXRpbyBvbiB0aGUgeC1heGlzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2NhbGVZPXNjYWxlWF0gLSBUaGUgc2NhbGUgcmF0aW8gb24gdGhlIHktYXhpcy5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNjYWxlOiBmdW5jdGlvbiBzY2FsZShzY2FsZVgpIHtcbiAgICAgIHZhciBzY2FsZVkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHNjYWxlWDtcbiAgICAgIHZhciBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YTtcbiAgICAgIHZhciB0cmFuc2Zvcm1lZCA9IGZhbHNlO1xuICAgICAgc2NhbGVYID0gTnVtYmVyKHNjYWxlWCk7XG4gICAgICBzY2FsZVkgPSBOdW1iZXIoc2NhbGVZKTtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMub3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgICBpZiAoaXNOdW1iZXIoc2NhbGVYKSkge1xuICAgICAgICAgIGltYWdlRGF0YS5zY2FsZVggPSBzY2FsZVg7XG4gICAgICAgICAgdHJhbnNmb3JtZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihzY2FsZVkpKSB7XG4gICAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWSA9IHNjYWxlWTtcbiAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjcm9wcGVkIGFyZWEgcG9zaXRpb24gYW5kIHNpemUgZGF0YSAoYmFzZSBvbiB0aGUgb3JpZ2luYWwgaW1hZ2UpXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcm91bmRlZD1mYWxzZV0gLSBJbmRpY2F0ZSBpZiByb3VuZCB0aGUgZGF0YSB2YWx1ZXMgb3Igbm90LlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgY3JvcHBlZCBkYXRhLlxuICAgICAqL1xuICAgIGdldERhdGE6IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICB2YXIgcm91bmRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGEsXG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICAgIHZhciBkYXRhO1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgdGhpcy5jcm9wcGVkKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgeDogY3JvcEJveERhdGEubGVmdCAtIGNhbnZhc0RhdGEubGVmdCxcbiAgICAgICAgICB5OiBjcm9wQm94RGF0YS50b3AgLSBjYW52YXNEYXRhLnRvcCxcbiAgICAgICAgICB3aWR0aDogY3JvcEJveERhdGEud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBjcm9wQm94RGF0YS5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJhdGlvID0gaW1hZ2VEYXRhLndpZHRoIC8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aDtcbiAgICAgICAgZm9yRWFjaChkYXRhLCBmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgIGRhdGFbaV0gPSBuIC8gcmF0aW87XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocm91bmRlZCkge1xuICAgICAgICAgIC8vIEluIGNhc2Ugcm91bmRpbmcgb2ZmIGxlYWRzIHRvIGV4dHJhIDFweCBpbiByaWdodCBvciBib3R0b20gYm9yZGVyXG4gICAgICAgICAgLy8gd2Ugc2hvdWxkIHJvdW5kIHRoZSB0b3AtbGVmdCBjb3JuZXIgYW5kIHRoZSBkaW1lbnNpb24gKCMzNDMpLlxuICAgICAgICAgIHZhciBib3R0b20gPSBNYXRoLnJvdW5kKGRhdGEueSArIGRhdGEuaGVpZ2h0KTtcbiAgICAgICAgICB2YXIgcmlnaHQgPSBNYXRoLnJvdW5kKGRhdGEueCArIGRhdGEud2lkdGgpO1xuICAgICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQoZGF0YS54KTtcbiAgICAgICAgICBkYXRhLnkgPSBNYXRoLnJvdW5kKGRhdGEueSk7XG4gICAgICAgICAgZGF0YS53aWR0aCA9IHJpZ2h0IC0gZGF0YS54O1xuICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gYm90dG9tIC0gZGF0YS55O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnJvdGF0YWJsZSkge1xuICAgICAgICBkYXRhLnJvdGF0ZSA9IGltYWdlRGF0YS5yb3RhdGUgfHwgMDtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnNjYWxhYmxlKSB7XG4gICAgICAgIGRhdGEuc2NhbGVYID0gaW1hZ2VEYXRhLnNjYWxlWCB8fCAxO1xuICAgICAgICBkYXRhLnNjYWxlWSA9IGltYWdlRGF0YS5zY2FsZVkgfHwgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjcm9wcGVkIGFyZWEgcG9zaXRpb24gYW5kIHNpemUgd2l0aCBuZXcgZGF0YVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ldyBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2V0RGF0YTogZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGEsXG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgY3JvcEJveERhdGEgPSB7fTtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIGlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICAgICAgdmFyIHRyYW5zZm9ybWVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb25zLnJvdGF0YWJsZSkge1xuICAgICAgICAgIGlmIChpc051bWJlcihkYXRhLnJvdGF0ZSkgJiYgZGF0YS5yb3RhdGUgIT09IGltYWdlRGF0YS5yb3RhdGUpIHtcbiAgICAgICAgICAgIGltYWdlRGF0YS5yb3RhdGUgPSBkYXRhLnJvdGF0ZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc2NhbGFibGUpIHtcbiAgICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5zY2FsZVgpICYmIGRhdGEuc2NhbGVYICE9PSBpbWFnZURhdGEuc2NhbGVYKSB7XG4gICAgICAgICAgICBpbWFnZURhdGEuc2NhbGVYID0gZGF0YS5zY2FsZVg7XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc051bWJlcihkYXRhLnNjYWxlWSkgJiYgZGF0YS5zY2FsZVkgIT09IGltYWdlRGF0YS5zY2FsZVkpIHtcbiAgICAgICAgICAgIGltYWdlRGF0YS5zY2FsZVkgPSBkYXRhLnNjYWxlWTtcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJhdGlvID0gaW1hZ2VEYXRhLndpZHRoIC8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aDtcbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEueCkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gZGF0YS54ICogcmF0aW8gKyBjYW52YXNEYXRhLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEueSkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS50b3AgPSBkYXRhLnkgKiByYXRpbyArIGNhbnZhc0RhdGEudG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLndpZHRoKSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gZGF0YS53aWR0aCAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLmhlaWdodCkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBkYXRhLmhlaWdodCAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Q3JvcEJveERhdGEoY3JvcEJveERhdGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNvbnRhaW5lciBzaXplIGRhdGEuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBjb250YWluZXIgZGF0YS5cbiAgICAgKi9cbiAgICBnZXRDb250YWluZXJEYXRhOiBmdW5jdGlvbiBnZXRDb250YWluZXJEYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhZHkgPyBhc3NpZ24oe30sIHRoaXMuY29udGFpbmVyRGF0YSkgOiB7fTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW1hZ2UgcG9zaXRpb24gYW5kIHNpemUgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IGltYWdlIGRhdGEuXG4gICAgICovXG4gICAgZ2V0SW1hZ2VEYXRhOiBmdW5jdGlvbiBnZXRJbWFnZURhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaXplZCA/IGFzc2lnbih7fSwgdGhpcy5pbWFnZURhdGEpIDoge307XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNhbnZhcyBwb3NpdGlvbiBhbmQgc2l6ZSBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgY2FudmFzIGRhdGEuXG4gICAgICovXG4gICAgZ2V0Q2FudmFzRGF0YTogZnVuY3Rpb24gZ2V0Q2FudmFzRGF0YSgpIHtcbiAgICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgIGZvckVhY2goWydsZWZ0JywgJ3RvcCcsICd3aWR0aCcsICdoZWlnaHQnLCAnbmF0dXJhbFdpZHRoJywgJ25hdHVyYWxIZWlnaHQnXSwgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICBkYXRhW25dID0gY2FudmFzRGF0YVtuXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY2FudmFzIHBvc2l0aW9uIGFuZCBzaXplIHdpdGggbmV3IGRhdGEuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgbmV3IGNhbnZhcyBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2V0Q2FudmFzRGF0YTogZnVuY3Rpb24gc2V0Q2FudmFzRGF0YShkYXRhKSB7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IGNhbnZhc0RhdGEuYXNwZWN0UmF0aW87XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiBpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLmxlZnQpKSB7XG4gICAgICAgICAgY2FudmFzRGF0YS5sZWZ0ID0gZGF0YS5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLnRvcCkpIHtcbiAgICAgICAgICBjYW52YXNEYXRhLnRvcCA9IGRhdGEudG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLndpZHRoKSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEud2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gZGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGRhdGEuaGVpZ2h0KSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgICAgICAgY2FudmFzRGF0YS53aWR0aCA9IGRhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3JvcCBib3ggcG9zaXRpb24gYW5kIHNpemUgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IGNyb3AgYm94IGRhdGEuXG4gICAgICovXG4gICAgZ2V0Q3JvcEJveERhdGE6IGZ1bmN0aW9uIGdldENyb3BCb3hEYXRhKCkge1xuICAgICAgdmFyIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICAgIHZhciBkYXRhO1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgdGhpcy5jcm9wcGVkKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgbGVmdDogY3JvcEJveERhdGEubGVmdCxcbiAgICAgICAgICB0b3A6IGNyb3BCb3hEYXRhLnRvcCxcbiAgICAgICAgICB3aWR0aDogY3JvcEJveERhdGEud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBjcm9wQm94RGF0YS5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhIHx8IHt9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjcm9wIGJveCBwb3NpdGlvbiBhbmQgc2l6ZSB3aXRoIG5ldyBkYXRhLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ldyBjcm9wIGJveCBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2V0Q3JvcEJveERhdGE6IGZ1bmN0aW9uIHNldENyb3BCb3hEYXRhKGRhdGEpIHtcbiAgICAgIHZhciBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSB0aGlzLm9wdGlvbnMuYXNwZWN0UmF0aW87XG4gICAgICB2YXIgd2lkdGhDaGFuZ2VkO1xuICAgICAgdmFyIGhlaWdodENoYW5nZWQ7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiB0aGlzLmNyb3BwZWQgJiYgIXRoaXMuZGlzYWJsZWQgJiYgaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5sZWZ0KSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBkYXRhLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEudG9wKSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLnRvcCA9IGRhdGEudG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLndpZHRoKSAmJiBkYXRhLndpZHRoICE9PSBjcm9wQm94RGF0YS53aWR0aCkge1xuICAgICAgICAgIHdpZHRoQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgY3JvcEJveERhdGEud2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLmhlaWdodCkgJiYgZGF0YS5oZWlnaHQgIT09IGNyb3BCb3hEYXRhLmhlaWdodCkge1xuICAgICAgICAgIGhlaWdodENoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgIGlmICh3aWR0aENoYW5nZWQpIHtcbiAgICAgICAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IGNyb3BCb3hEYXRhLndpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHRDaGFuZ2VkKSB7XG4gICAgICAgICAgICBjcm9wQm94RGF0YS53aWR0aCA9IGNyb3BCb3hEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlckNyb3BCb3goKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0IGEgY2FudmFzIGRyYXduIHRoZSBjcm9wcGVkIGltYWdlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gLSBUaGUgY29uZmlnIG9wdGlvbnMuXG4gICAgICogQHJldHVybnMge0hUTUxDYW52YXNFbGVtZW50fSAtIFRoZSByZXN1bHQgY2FudmFzLlxuICAgICAqL1xuICAgIGdldENyb3BwZWRDYW52YXM6IGZ1bmN0aW9uIGdldENyb3BwZWRDYW52YXMoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBpZiAoIXRoaXMucmVhZHkgfHwgIXdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgdmFyIHNvdXJjZSA9IGdldFNvdXJjZUNhbnZhcyh0aGlzLmltYWdlLCB0aGlzLmltYWdlRGF0YSwgY2FudmFzRGF0YSwgb3B0aW9ucyk7XG5cbiAgICAgIC8vIFJldHVybnMgdGhlIHNvdXJjZSBjYW52YXMgaWYgaXQgaXMgbm90IGNyb3BwZWQuXG4gICAgICBpZiAoIXRoaXMuY3JvcHBlZCkge1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgfVxuICAgICAgdmFyIF90aGlzJGdldERhdGEgPSB0aGlzLmdldERhdGEob3B0aW9ucy5yb3VuZGVkKSxcbiAgICAgICAgaW5pdGlhbFggPSBfdGhpcyRnZXREYXRhLngsXG4gICAgICAgIGluaXRpYWxZID0gX3RoaXMkZ2V0RGF0YS55LFxuICAgICAgICBpbml0aWFsV2lkdGggPSBfdGhpcyRnZXREYXRhLndpZHRoLFxuICAgICAgICBpbml0aWFsSGVpZ2h0ID0gX3RoaXMkZ2V0RGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgcmF0aW8gPSBzb3VyY2Uud2lkdGggLyBNYXRoLmZsb29yKGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoKTtcbiAgICAgIGlmIChyYXRpbyAhPT0gMSkge1xuICAgICAgICBpbml0aWFsWCAqPSByYXRpbztcbiAgICAgICAgaW5pdGlhbFkgKj0gcmF0aW87XG4gICAgICAgIGluaXRpYWxXaWR0aCAqPSByYXRpbztcbiAgICAgICAgaW5pdGlhbEhlaWdodCAqPSByYXRpbztcbiAgICAgIH1cbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IGluaXRpYWxXaWR0aCAvIGluaXRpYWxIZWlnaHQ7XG4gICAgICB2YXIgbWF4U2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICB3aWR0aDogb3B0aW9ucy5tYXhXaWR0aCB8fCBJbmZpbml0eSxcbiAgICAgICAgaGVpZ2h0OiBvcHRpb25zLm1heEhlaWdodCB8fCBJbmZpbml0eVxuICAgICAgfSk7XG4gICAgICB2YXIgbWluU2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICB3aWR0aDogb3B0aW9ucy5taW5XaWR0aCB8fCAwLFxuICAgICAgICBoZWlnaHQ6IG9wdGlvbnMubWluSGVpZ2h0IHx8IDBcbiAgICAgIH0sICdjb3ZlcicpO1xuICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoIHx8IChyYXRpbyAhPT0gMSA/IHNvdXJjZS53aWR0aCA6IGluaXRpYWxXaWR0aCksXG4gICAgICAgICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCB8fCAocmF0aW8gIT09IDEgPyBzb3VyY2UuaGVpZ2h0IDogaW5pdGlhbEhlaWdodClcbiAgICAgICAgfSksXG4gICAgICAgIHdpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzLmhlaWdodDtcbiAgICAgIHdpZHRoID0gTWF0aC5taW4obWF4U2l6ZXMud2lkdGgsIE1hdGgubWF4KG1pblNpemVzLndpZHRoLCB3aWR0aCkpO1xuICAgICAgaGVpZ2h0ID0gTWF0aC5taW4obWF4U2l6ZXMuaGVpZ2h0LCBNYXRoLm1heChtaW5TaXplcy5oZWlnaHQsIGhlaWdodCkpO1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIod2lkdGgpO1xuICAgICAgY2FudmFzLmhlaWdodCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoaGVpZ2h0KTtcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gb3B0aW9ucy5maWxsQ29sb3IgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICB2YXIgX29wdGlvbnMkaW1hZ2VTbW9vdGhpID0gb3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQsXG4gICAgICAgIGltYWdlU21vb3RoaW5nRW5hYmxlZCA9IF9vcHRpb25zJGltYWdlU21vb3RoaSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGltYWdlU21vb3RoaSxcbiAgICAgICAgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gb3B0aW9ucy5pbWFnZVNtb290aGluZ1F1YWxpdHk7XG4gICAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGltYWdlU21vb3RoaW5nRW5hYmxlZDtcbiAgICAgIGlmIChpbWFnZVNtb290aGluZ1F1YWxpdHkpIHtcbiAgICAgICAgY29udGV4dC5pbWFnZVNtb290aGluZ1F1YWxpdHkgPSBpbWFnZVNtb290aGluZ1F1YWxpdHk7XG4gICAgICB9XG5cbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQuZHJhd0ltYWdlXG4gICAgICB2YXIgc291cmNlV2lkdGggPSBzb3VyY2Uud2lkdGg7XG4gICAgICB2YXIgc291cmNlSGVpZ2h0ID0gc291cmNlLmhlaWdodDtcblxuICAgICAgLy8gU291cmNlIGNhbnZhcyBwYXJhbWV0ZXJzXG4gICAgICB2YXIgc3JjWCA9IGluaXRpYWxYO1xuICAgICAgdmFyIHNyY1kgPSBpbml0aWFsWTtcbiAgICAgIHZhciBzcmNXaWR0aDtcbiAgICAgIHZhciBzcmNIZWlnaHQ7XG5cbiAgICAgIC8vIERlc3RpbmF0aW9uIGNhbnZhcyBwYXJhbWV0ZXJzXG4gICAgICB2YXIgZHN0WDtcbiAgICAgIHZhciBkc3RZO1xuICAgICAgdmFyIGRzdFdpZHRoO1xuICAgICAgdmFyIGRzdEhlaWdodDtcbiAgICAgIGlmIChzcmNYIDw9IC1pbml0aWFsV2lkdGggfHwgc3JjWCA+IHNvdXJjZVdpZHRoKSB7XG4gICAgICAgIHNyY1ggPSAwO1xuICAgICAgICBzcmNXaWR0aCA9IDA7XG4gICAgICAgIGRzdFggPSAwO1xuICAgICAgICBkc3RXaWR0aCA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHNyY1ggPD0gMCkge1xuICAgICAgICBkc3RYID0gLXNyY1g7XG4gICAgICAgIHNyY1ggPSAwO1xuICAgICAgICBzcmNXaWR0aCA9IE1hdGgubWluKHNvdXJjZVdpZHRoLCBpbml0aWFsV2lkdGggKyBzcmNYKTtcbiAgICAgICAgZHN0V2lkdGggPSBzcmNXaWR0aDtcbiAgICAgIH0gZWxzZSBpZiAoc3JjWCA8PSBzb3VyY2VXaWR0aCkge1xuICAgICAgICBkc3RYID0gMDtcbiAgICAgICAgc3JjV2lkdGggPSBNYXRoLm1pbihpbml0aWFsV2lkdGgsIHNvdXJjZVdpZHRoIC0gc3JjWCk7XG4gICAgICAgIGRzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgICB9XG4gICAgICBpZiAoc3JjV2lkdGggPD0gMCB8fCBzcmNZIDw9IC1pbml0aWFsSGVpZ2h0IHx8IHNyY1kgPiBzb3VyY2VIZWlnaHQpIHtcbiAgICAgICAgc3JjWSA9IDA7XG4gICAgICAgIHNyY0hlaWdodCA9IDA7XG4gICAgICAgIGRzdFkgPSAwO1xuICAgICAgICBkc3RIZWlnaHQgPSAwO1xuICAgICAgfSBlbHNlIGlmIChzcmNZIDw9IDApIHtcbiAgICAgICAgZHN0WSA9IC1zcmNZO1xuICAgICAgICBzcmNZID0gMDtcbiAgICAgICAgc3JjSGVpZ2h0ID0gTWF0aC5taW4oc291cmNlSGVpZ2h0LCBpbml0aWFsSGVpZ2h0ICsgc3JjWSk7XG4gICAgICAgIGRzdEhlaWdodCA9IHNyY0hlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoc3JjWSA8PSBzb3VyY2VIZWlnaHQpIHtcbiAgICAgICAgZHN0WSA9IDA7XG4gICAgICAgIHNyY0hlaWdodCA9IE1hdGgubWluKGluaXRpYWxIZWlnaHQsIHNvdXJjZUhlaWdodCAtIHNyY1kpO1xuICAgICAgICBkc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgICB9XG4gICAgICB2YXIgcGFyYW1zID0gW3NyY1gsIHNyY1ksIHNyY1dpZHRoLCBzcmNIZWlnaHRdO1xuXG4gICAgICAvLyBBdm9pZCBcIkluZGV4U2l6ZUVycm9yXCJcbiAgICAgIGlmIChkc3RXaWR0aCA+IDAgJiYgZHN0SGVpZ2h0ID4gMCkge1xuICAgICAgICB2YXIgc2NhbGUgPSB3aWR0aCAvIGluaXRpYWxXaWR0aDtcbiAgICAgICAgcGFyYW1zLnB1c2goZHN0WCAqIHNjYWxlLCBkc3RZICogc2NhbGUsIGRzdFdpZHRoICogc2NhbGUsIGRzdEhlaWdodCAqIHNjYWxlKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWxsIHRoZSBudW1lcmljYWwgcGFyYW1ldGVycyBzaG91bGQgYmUgaW50ZWdlciBmb3IgYGRyYXdJbWFnZWBcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZW5neXVhbmNoZW4vY3JvcHBlci9pc3N1ZXMvNDc2XG4gICAgICBjb250ZXh0LmRyYXdJbWFnZS5hcHBseShjb250ZXh0LCBbc291cmNlXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHBhcmFtcy5tYXAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIocGFyYW0pKTtcbiAgICAgIH0pKSkpO1xuICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgYXNwZWN0IHJhdGlvIG9mIHRoZSBjcm9wIGJveC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0UmF0aW8gLSBUaGUgbmV3IGFzcGVjdCByYXRpby5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNldEFzcGVjdFJhdGlvOiBmdW5jdGlvbiBzZXRBc3BlY3RSYXRpbyhhc3BlY3RSYXRpbykge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIWlzVW5kZWZpbmVkKGFzcGVjdFJhdGlvKSkge1xuICAgICAgICAvLyAwIC0+IE5hTlxuICAgICAgICBvcHRpb25zLmFzcGVjdFJhdGlvID0gTWF0aC5tYXgoMCwgYXNwZWN0UmF0aW8pIHx8IE5hTjtcbiAgICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgICB0aGlzLmluaXRDcm9wQm94KCk7XG4gICAgICAgICAgaWYgKHRoaXMuY3JvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgZHJhZyBtb2RlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIC0gVGhlIG5ldyBkcmFnIG1vZGUuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzZXREcmFnTW9kZTogZnVuY3Rpb24gc2V0RHJhZ01vZGUobW9kZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGRyYWdCb3ggPSB0aGlzLmRyYWdCb3gsXG4gICAgICAgIGZhY2UgPSB0aGlzLmZhY2U7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB2YXIgY3JvcHBhYmxlID0gbW9kZSA9PT0gRFJBR19NT0RFX0NST1A7XG4gICAgICAgIHZhciBtb3ZhYmxlID0gb3B0aW9ucy5tb3ZhYmxlICYmIG1vZGUgPT09IERSQUdfTU9ERV9NT1ZFO1xuICAgICAgICBtb2RlID0gY3JvcHBhYmxlIHx8IG1vdmFibGUgPyBtb2RlIDogRFJBR19NT0RFX05PTkU7XG4gICAgICAgIG9wdGlvbnMuZHJhZ01vZGUgPSBtb2RlO1xuICAgICAgICBzZXREYXRhKGRyYWdCb3gsIERBVEFfQUNUSU9OLCBtb2RlKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0JveCwgQ0xBU1NfQ1JPUCwgY3JvcHBhYmxlKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0JveCwgQ0xBU1NfTU9WRSwgbW92YWJsZSk7XG4gICAgICAgIGlmICghb3B0aW9ucy5jcm9wQm94TW92YWJsZSkge1xuICAgICAgICAgIC8vIFN5bmMgZHJhZyBtb2RlIHRvIGNyb3AgYm94IHdoZW4gaXQgaXMgbm90IG1vdmFibGVcbiAgICAgICAgICBzZXREYXRhKGZhY2UsIERBVEFfQUNUSU9OLCBtb2RlKTtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhmYWNlLCBDTEFTU19DUk9QLCBjcm9wcGFibGUpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGZhY2UsIENMQVNTX01PVkUsIG1vdmFibGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG5cbiAgdmFyIEFub3RoZXJDcm9wcGVyID0gV0lORE9XLkNyb3BwZXI7XG4gIHZhciBDcm9wcGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgQ3JvcHBlci5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQgZm9yIGNyb3BwaW5nLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gLSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENyb3BwZXIoZWxlbWVudCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENyb3BwZXIpO1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFSRUdFWFBfVEFHX05BTUUudGVzdChlbGVtZW50LnRhZ05hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkIGFuZCBtdXN0IGJlIGFuIDxpbWc+IG9yIDxjYW52YXM+IGVsZW1lbnQuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5vcHRpb25zID0gYXNzaWduKHt9LCBERUZBVUxUUywgaXNQbGFpbk9iamVjdChvcHRpb25zKSAmJiBvcHRpb25zKTtcbiAgICAgIHRoaXMuY3JvcHBlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5wb2ludGVycyA9IHt9O1xuICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVwbGFjZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2l6ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2l6aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhDcm9wcGVyLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHVybDtcbiAgICAgICAgaWYgKGVsZW1lbnRbTkFNRVNQQUNFXSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50W05BTUVTUEFDRV0gPSB0aGlzO1xuICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2ltZycpIHtcbiAgICAgICAgICB0aGlzLmlzSW1nID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIGUuZy46IFwiaW1nL3BpY3R1cmUuanBnXCJcbiAgICAgICAgICB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3JjJykgfHwgJyc7XG4gICAgICAgICAgdGhpcy5vcmlnaW5hbFVybCA9IHVybDtcblxuICAgICAgICAgIC8vIFN0b3Agd2hlbiBpdCdzIGEgYmxhbmsgaW1hZ2VcbiAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGUuZy46IFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9pbWcvcGljdHVyZS5qcGdcIlxuICAgICAgICAgIHVybCA9IGVsZW1lbnQuc3JjO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09ICdjYW52YXMnICYmIHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAgIHVybCA9IGVsZW1lbnQudG9EYXRhVVJMKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkKHVybCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImxvYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHVybCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5pbWFnZURhdGEgPSB7fTtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKCFvcHRpb25zLnJvdGF0YWJsZSAmJiAhb3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSBJRTEwKyBzdXBwb3J0cyBUeXBlZCBBcnJheXNcbiAgICAgICAgaWYgKCFvcHRpb25zLmNoZWNrT3JpZW50YXRpb24gfHwgIXdpbmRvdy5BcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHRoaXMuY2xvbmUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlY3QgdGhlIG1pbWUgdHlwZSBvZiB0aGUgaW1hZ2UgZGlyZWN0bHkgaWYgaXQgaXMgYSBEYXRhIFVSTFxuICAgICAgICBpZiAoUkVHRVhQX0RBVEFfVVJMLnRlc3QodXJsKSkge1xuICAgICAgICAgIC8vIFJlYWQgQXJyYXlCdWZmZXIgZnJvbSBEYXRhIFVSTCBvZiBKUEVHIGltYWdlcyBkaXJlY3RseSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICAgICAgaWYgKFJFR0VYUF9EQVRBX1VSTF9KUEVHLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkKGRhdGFVUkxUb0FycmF5QnVmZmVyKHVybCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPbmx5IGEgSlBFRyBpbWFnZSBtYXkgY29udGFpbnMgRXhpZiBPcmllbnRhdGlvbiBpbmZvcm1hdGlvbixcbiAgICAgICAgICAgIC8vIHRoZSByZXN0IHR5cGVzIG9mIERhdGEgVVJMcyBhcmUgbm90IG5lY2Vzc2FyeSB0byBjaGVjayBvcmllbnRhdGlvbiBhdCBhbGwuXG4gICAgICAgICAgICB0aGlzLmNsb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIERldGVjdCB0aGUgbWltZSB0eXBlIG9mIHRoZSBpbWFnZSBieSBhIFhNTEh0dHBSZXF1ZXN0LlxuICAgICAgICAvLyAyLiBMb2FkIHRoZSBpbWFnZSBhcyBBcnJheUJ1ZmZlciBmb3IgcmVhZGluZyBvcmllbnRhdGlvbiBpZiBpdHMgYSBKUEVHIGltYWdlLlxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciBjbG9uZSA9IHRoaXMuY2xvbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnhociA9IHhocjtcblxuICAgICAgICAvLyAxLiBDcm9zcyBvcmlnaW4gcmVxdWVzdHMgYXJlIG9ubHkgc3VwcG9ydGVkIGZvciBwcm90b2NvbCBzY2hlbWVzOlxuICAgICAgICAvLyBodHRwLCBodHRwcywgZGF0YSwgY2hyb21lLCBjaHJvbWUtZXh0ZW5zaW9uLlxuICAgICAgICAvLyAyLiBBY2Nlc3MgdG8gWE1MSHR0cFJlcXVlc3QgZnJvbSBhIERhdGEgVVJMIHdpbGwgYmUgYmxvY2tlZCBieSBDT1JTIHBvbGljeVxuICAgICAgICAvLyBpbiBzb21lIGJyb3dzZXJzIGFzIElFMTEgYW5kIFNhZmFyaS5cbiAgICAgICAgeGhyLm9uYWJvcnQgPSBjbG9uZTtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBjbG9uZTtcbiAgICAgICAgeGhyLm9udGltZW91dCA9IGNsb25lO1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBBYm9ydCB0aGUgcmVxdWVzdCBkaXJlY3RseSBpZiBpdCBub3QgYSBKUEVHIGltYWdlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAgICBpZiAoeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKSAhPT0gTUlNRV9UWVBFX0pQRUcpIHtcbiAgICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5yZWFkKHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMucmVsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgX3RoaXMueGhyID0gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBCdXN0IGNhY2hlIHdoZW4gdGhlcmUgaXMgYSBcImNyb3NzT3JpZ2luXCIgcHJvcGVydHkgdG8gYXZvaWQgYnJvd3NlciBjYWNoZSBlcnJvclxuICAgICAgICBpZiAob3B0aW9ucy5jaGVja0Nyb3NzT3JpZ2luICYmIGlzQ3Jvc3NPcmlnaW5VUkwodXJsKSAmJiBlbGVtZW50LmNyb3NzT3JpZ2luKSB7XG4gICAgICAgICAgdXJsID0gYWRkVGltZXN0YW1wKHVybCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgdGhpcmQgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGZvciBhdm9pZGluZyBzaWRlLWVmZmVjdCAoIzY4MilcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZWxlbWVudC5jcm9zc09yaWdpbiA9PT0gJ3VzZS1jcmVkZW50aWFscyc7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkKGFycmF5QnVmZmVyKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuXG4gICAgICAgIC8vIFJlc2V0IHRoZSBvcmllbnRhdGlvbiB2YWx1ZSB0byBpdHMgZGVmYXVsdCB2YWx1ZSAxXG4gICAgICAgIC8vIGFzIHNvbWUgaU9TIGJyb3dzZXJzIHdpbGwgcmVuZGVyIGltYWdlIHdpdGggaXRzIG9yaWVudGF0aW9uXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IHJlc2V0QW5kR2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpO1xuICAgICAgICB2YXIgcm90YXRlID0gMDtcbiAgICAgICAgdmFyIHNjYWxlWCA9IDE7XG4gICAgICAgIHZhciBzY2FsZVkgPSAxO1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPiAxKSB7XG4gICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgVVJMIHdoaWNoIGhhcyB0aGUgZGVmYXVsdCBvcmllbnRhdGlvbiB2YWx1ZVxuICAgICAgICAgIHRoaXMudXJsID0gYXJyYXlCdWZmZXJUb0RhdGFVUkwoYXJyYXlCdWZmZXIsIE1JTUVfVFlQRV9KUEVHKTtcbiAgICAgICAgICB2YXIgX3BhcnNlT3JpZW50YXRpb24gPSBwYXJzZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcbiAgICAgICAgICByb3RhdGUgPSBfcGFyc2VPcmllbnRhdGlvbi5yb3RhdGU7XG4gICAgICAgICAgc2NhbGVYID0gX3BhcnNlT3JpZW50YXRpb24uc2NhbGVYO1xuICAgICAgICAgIHNjYWxlWSA9IF9wYXJzZU9yaWVudGF0aW9uLnNjYWxlWTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgICAgICBpbWFnZURhdGEucm90YXRlID0gcm90YXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnNjYWxhYmxlKSB7XG4gICAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWCA9IHNjYWxlWDtcbiAgICAgICAgICBpbWFnZURhdGEuc2NhbGVZID0gc2NhbGVZO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvbmUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvbmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgdXJsID0gdGhpcy51cmw7XG4gICAgICAgIHZhciBjcm9zc09yaWdpbiA9IGVsZW1lbnQuY3Jvc3NPcmlnaW47XG4gICAgICAgIHZhciBjcm9zc09yaWdpblVybCA9IHVybDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jaGVja0Nyb3NzT3JpZ2luICYmIGlzQ3Jvc3NPcmlnaW5VUkwodXJsKSkge1xuICAgICAgICAgIGlmICghY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQnVzdCBjYWNoZSB3aGVuIHRoZXJlIGlzIG5vdCBhIFwiY3Jvc3NPcmlnaW5cIiBwcm9wZXJ0eSAoIzUxOSlcbiAgICAgICAgICBjcm9zc09yaWdpblVybCA9IGFkZFRpbWVzdGFtcCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgICAgdGhpcy5jcm9zc09yaWdpblVybCA9IGNyb3NzT3JpZ2luVXJsO1xuICAgICAgICB2YXIgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWYgKGNyb3NzT3JpZ2luKSB7XG4gICAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZS5zcmMgPSBjcm9zc09yaWdpblVybCB8fCB1cmw7XG4gICAgICAgIGltYWdlLmFsdCA9IGVsZW1lbnQuYWx0IHx8ICdUaGUgaW1hZ2UgdG8gY3JvcCc7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gdGhpcy5zdG9wLmJpbmQodGhpcyk7XG4gICAgICAgIGFkZENsYXNzKGltYWdlLCBDTEFTU19ISURFKTtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpbWFnZSwgZWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaXppbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIE1hdGNoIGFsbCBicm93c2VycyB0aGF0IHVzZSBXZWJLaXQgYXMgdGhlIGxheW91dCBlbmdpbmUgaW4gaU9TIGRldmljZXMsXG4gICAgICAgIC8vIHN1Y2ggYXMgU2FmYXJpIGZvciBpT1MsIENocm9tZSBmb3IgaU9TLCBhbmQgaW4tYXBwIGJyb3dzZXJzLlxuICAgICAgICB2YXIgaXNJT1NXZWJLaXQgPSBXSU5ET1cubmF2aWdhdG9yICYmIC8oPzppUGFkfGlQaG9uZXxpUG9kKS4qP0FwcGxlV2ViS2l0L2kudGVzdChXSU5ET1cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIHZhciBkb25lID0gZnVuY3Rpb24gZG9uZShuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQpIHtcbiAgICAgICAgICBhc3NpZ24oX3RoaXMyLmltYWdlRGF0YSwge1xuICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBuYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgYXNwZWN0UmF0aW86IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpczIuaW5pdGlhbEltYWdlRGF0YSA9IGFzc2lnbih7fSwgX3RoaXMyLmltYWdlRGF0YSk7XG4gICAgICAgICAgX3RoaXMyLnNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIF90aGlzMi5zaXplZCA9IHRydWU7XG4gICAgICAgICAgX3RoaXMyLmJ1aWxkKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gTW9zdCBtb2Rlcm4gYnJvd3NlcnMgKGV4Y2VwdHMgaU9TIFdlYktpdClcbiAgICAgICAgaWYgKGltYWdlLm5hdHVyYWxXaWR0aCAmJiAhaXNJT1NXZWJLaXQpIHtcbiAgICAgICAgICBkb25lKGltYWdlLm5hdHVyYWxXaWR0aCwgaW1hZ2UubmF0dXJhbEhlaWdodCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaXppbmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB0aGlzLnNpemluZ0ltYWdlID0gc2l6aW5nSW1hZ2U7XG4gICAgICAgIHNpemluZ0ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb25lKHNpemluZ0ltYWdlLndpZHRoLCBzaXppbmdJbWFnZS5oZWlnaHQpO1xuICAgICAgICAgIGlmICghaXNJT1NXZWJLaXQpIHtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoc2l6aW5nSW1hZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc2l6aW5nSW1hZ2Uuc3JjID0gaW1hZ2Uuc3JjO1xuXG4gICAgICAgIC8vIGlPUyBXZWJLaXQgd2lsbCBjb252ZXJ0IHRoZSBpbWFnZSBhdXRvbWF0aWNhbGx5XG4gICAgICAgIC8vIHdpdGggaXRzIG9yaWVudGF0aW9uIG9uY2UgYXBwZW5kIGl0IGludG8gRE9NICgjMjc5KVxuICAgICAgICBpZiAoIWlzSU9TV2ViS2l0KSB7XG4gICAgICAgICAgc2l6aW5nSW1hZ2Uuc3R5bGUuY3NzVGV4dCA9ICdsZWZ0OjA7JyArICdtYXgtaGVpZ2h0Om5vbmUhaW1wb3J0YW50OycgKyAnbWF4LXdpZHRoOm5vbmUhaW1wb3J0YW50OycgKyAnbWluLWhlaWdodDowIWltcG9ydGFudDsnICsgJ21pbi13aWR0aDowIWltcG9ydGFudDsnICsgJ29wYWNpdHk6MDsnICsgJ3Bvc2l0aW9uOmFic29sdXRlOycgKyAndG9wOjA7JyArICd6LWluZGV4Oi0xOyc7XG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaXppbmdJbWFnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3RvcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICBpbWFnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGltYWdlKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImJ1aWxkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zaXplZCB8fCB0aGlzLnJlYWR5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgaW1hZ2UgPSB0aGlzLmltYWdlO1xuXG4gICAgICAgIC8vIENyZWF0ZSBjcm9wcGVyIGVsZW1lbnRzXG4gICAgICAgIHZhciBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBURU1QTEFURTtcbiAgICAgICAgdmFyIGNyb3BwZXIgPSB0ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWNvbnRhaW5lclwiKSk7XG4gICAgICAgIHZhciBjYW52YXMgPSBjcm9wcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItY2FudmFzXCIpKTtcbiAgICAgICAgdmFyIGRyYWdCb3ggPSBjcm9wcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZHJhZy1ib3hcIikpO1xuICAgICAgICB2YXIgY3JvcEJveCA9IGNyb3BwZXIucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jcm9wLWJveFwiKSk7XG4gICAgICAgIHZhciBmYWNlID0gY3JvcEJveC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWZhY2VcIikpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5jcm9wcGVyID0gY3JvcHBlcjtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZHJhZ0JveCA9IGRyYWdCb3g7XG4gICAgICAgIHRoaXMuY3JvcEJveCA9IGNyb3BCb3g7XG4gICAgICAgIHRoaXMudmlld0JveCA9IGNyb3BwZXIucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi12aWV3LWJveFwiKSk7XG4gICAgICAgIHRoaXMuZmFjZSA9IGZhY2U7XG4gICAgICAgIGNhbnZhcy5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgLy8gSGlkZSB0aGUgb3JpZ2luYWwgaW1hZ2VcbiAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgQ0xBU1NfSElEREVOKTtcblxuICAgICAgICAvLyBJbnNlcnRzIHRoZSBjcm9wcGVyIGFmdGVyIHRvIHRoZSBjdXJyZW50IGltYWdlXG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JvcHBlciwgZWxlbWVudC5uZXh0U2libGluZyk7XG5cbiAgICAgICAgLy8gU2hvdyB0aGUgaGlkZGVuIGltYWdlXG4gICAgICAgIHJlbW92ZUNsYXNzKGltYWdlLCBDTEFTU19ISURFKTtcbiAgICAgICAgdGhpcy5pbml0UHJldmlldygpO1xuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICAgICAgb3B0aW9ucy5pbml0aWFsQXNwZWN0UmF0aW8gPSBNYXRoLm1heCgwLCBvcHRpb25zLmluaXRpYWxBc3BlY3RSYXRpbykgfHwgTmFOO1xuICAgICAgICBvcHRpb25zLmFzcGVjdFJhdGlvID0gTWF0aC5tYXgoMCwgb3B0aW9ucy5hc3BlY3RSYXRpbykgfHwgTmFOO1xuICAgICAgICBvcHRpb25zLnZpZXdNb2RlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMywgTWF0aC5yb3VuZChvcHRpb25zLnZpZXdNb2RlKSkpIHx8IDA7XG4gICAgICAgIGFkZENsYXNzKGNyb3BCb3gsIENMQVNTX0hJRERFTik7XG4gICAgICAgIGlmICghb3B0aW9ucy5ndWlkZXMpIHtcbiAgICAgICAgICBhZGRDbGFzcyhjcm9wQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1kYXNoZWRcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5jZW50ZXIpIHtcbiAgICAgICAgICBhZGRDbGFzcyhjcm9wQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jZW50ZXJcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmJhY2tncm91bmQpIHtcbiAgICAgICAgICBhZGRDbGFzcyhjcm9wcGVyLCBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWJnXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgYWRkQ2xhc3MoZmFjZSwgQ0xBU1NfSU5WSVNJQkxFKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5jcm9wQm94TW92YWJsZSkge1xuICAgICAgICAgIGFkZENsYXNzKGZhY2UsIENMQVNTX01PVkUpO1xuICAgICAgICAgIHNldERhdGEoZmFjZSwgREFUQV9BQ1RJT04sIEFDVElPTl9BTEwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5jcm9wQm94UmVzaXphYmxlKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoY3JvcEJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItbGluZVwiKSksIENMQVNTX0hJRERFTik7XG4gICAgICAgICAgYWRkQ2xhc3MoY3JvcEJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItcG9pbnRcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldERyYWdNb2RlKG9wdGlvbnMuZHJhZ01vZGUpO1xuICAgICAgICBpZiAob3B0aW9ucy5hdXRvQ3JvcCkge1xuICAgICAgICAgIHRoaXMuY3JvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnJlYWR5KSkge1xuICAgICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1JFQURZLCBvcHRpb25zLnJlYWR5LCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBFVkVOVF9SRUFEWSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVuYnVpbGRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJ1aWxkKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVhZHkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICB0aGlzLnJlc2V0UHJldmlldygpO1xuICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IHRoaXMuY3JvcHBlci5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jcm9wcGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIENMQVNTX0hJRERFTik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVuY3JlYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdW5jcmVhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgICAgdGhpcy51bmJ1aWxkKCk7XG4gICAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY3JvcHBlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2l6aW5nKSB7XG4gICAgICAgICAgdGhpcy5zaXppbmdJbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgIHRoaXMuc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5zaXplZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVsb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy54aHIub25hYm9ydCA9IG51bGw7XG4gICAgICAgICAgdGhpcy54aHIuYWJvcnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIG5vIGNvbmZsaWN0IGNyb3BwZXIgY2xhc3MuXG4gICAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gVGhlIGNyb3BwZXIgY2xhc3MuXG4gICAgICAgKi9cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJub0NvbmZsaWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgd2luZG93LkNyb3BwZXIgPSBBbm90aGVyQ3JvcHBlcjtcbiAgICAgICAgcmV0dXJuIENyb3BwZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hhbmdlIHRoZSBkZWZhdWx0IG9wdGlvbnMuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBuZXcgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICovXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldERlZmF1bHRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGVmYXVsdHMob3B0aW9ucykge1xuICAgICAgICBhc3NpZ24oREVGQVVMVFMsIGlzUGxhaW5PYmplY3Qob3B0aW9ucykgJiYgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfV0pO1xuICB9KCk7XG4gIGFzc2lnbihDcm9wcGVyLnByb3RvdHlwZSwgcmVuZGVyLCBwcmV2aWV3LCBldmVudHMsIGhhbmRsZXJzLCBjaGFuZ2UsIG1ldGhvZHMpO1xuXG4gIHJldHVybiBDcm9wcGVyO1xuXG59KSk7XG4iLCAiaW1wb3J0IHsgc3RvcmUsIGdldENvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2ludGVyYWN0aXZpdHknO1xuXG5zdG9yZSggJ2hleWZhbS9yb3V0ZXInLCB7XG4gIGFjdGlvbnM6IHtcbiAgICAqbmF2aWdhdGUoIGUgKSB7XG4gICAgICBjb25zdCBhID0gZT8udGFyZ2V0Py5jbG9zZXN0KCAnYScgKTtcbiAgICAgIGlmICggISBhIHx8IGEudGFyZ2V0ID09PSAnX2JsYW5rJyB8fCBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5ICkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhLmhyZWY7XG4gICAgfSxcbiAgfSxcbn0gKTtcbiIsICJpbXBvcnQgeyBzdG9yZSwgZ2V0Q29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvaW50ZXJhY3Rpdml0eSc7XG5pbXBvcnQgeyBhY2NlcHRhYmxlLCBpc0hlaWMgfSBmcm9tICcuLi9saWIvbWVkaWEuanMnO1xuXG5jb25zdCBNQVhfRklMRVMgPSAxMDtcbmNvbnN0IE1BWF9CWVRFUyA9IDI1ICogMTAyNCAqIDEwMjQ7IC8vIDI1IE1CIHBlciBmaWxlIGJlZm9yZSBjbGllbnQgY29udmVyc2lvblxuXG5jb25zdCBNSU5fT1BUSU9OUyA9IDI7XG5jb25zdCBNQVhfT1BUSU9OUyA9IDY7XG5sZXQgbmV4dE9wdGlvbklkID0gMTtcbmNvbnN0IG5ld09wdGlvbiA9ICggcGxhY2Vob2xkZXIgKSA9PiAoIHsgaWQ6IG5leHRPcHRpb25JZCsrLCB0ZXh0OiAnJywgcGxhY2Vob2xkZXIgfSApO1xuY29uc3QgaW5pdGlhbE9wdGlvbnMgPSAoKSA9PiBbXG4gIG5ld09wdGlvbiggJ09wdGlvbiAxJyApLFxuICBuZXdPcHRpb24oICdPcHRpb24gMicgKSxcbl07XG5cbmNvbnN0IGJsYW5rU3RhdGUgPSAoKSA9PiAoIHtcbiAgYm9keTogJycsXG4gIHBlbmRpbmc6IFtdLFxuICBwb2xsTW9kZTogZmFsc2UsXG4gIG9wdGlvbkxpc3Q6IGluaXRpYWxPcHRpb25zKCksXG4gIGNsb3Nlc0F0OiAnJyxcbiAgYW5vbjogZmFsc2UsXG59ICk7XG5cbmNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHN0b3JlKCAnaGV5ZmFtL2NvbXBvc2VyJywge1xuICBzdGF0ZToge1xuICAgIGJvZHk6ICcnLFxuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIHsgaWQsIGZpbGUsIG5hbWUsIHByZXZpZXdVcmwsIHN0YXR1cyB9IHdoZXJlIHN0YXR1cyBpc1xuICAgICAqICdwZW5kaW5nJyB8ICdjb252ZXJ0aW5nJyB8ICdyZWFkeScgfCAnZXJyb3InLiBQcmV2aWV3cyBhcmVcbiAgICAgKiBgVVJMLmNyZWF0ZU9iamVjdFVSTGAgc3RyaW5nczsgd2UgcmV2b2tlIHRoZW0gb24gcmVtb3ZlICsgb24gc3VibWl0LlxuICAgICAqL1xuICAgIHBlbmRpbmc6IFtdLFxuICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgIGVycm9yOiAnJyxcbiAgICAvLyBQb2xsLW1vZGUgc3RhdGUuIGBvcHRpb25MaXN0YCByZXVzZXMgdGhlIHNhbWUgc2hhcGUgYWNyb3NzXG4gICAgLy8gbW9kZSB0b2dnbGVzIHNvIHRoZSB1c2VyIGNhbiBpdGVyYXRlIHdpdGhvdXQgbG9zaW5nIHR5cGVkIHRleHQuXG4gICAgcG9sbE1vZGU6IGZhbHNlLFxuICAgIG9wdGlvbkxpc3Q6IGluaXRpYWxPcHRpb25zKCksXG4gICAgY2xvc2VzQXQ6ICcnLFxuICAgIGFub246IGZhbHNlLFxuICAgIC8vIEVkaXQgbW9kZS4gYGVkaXRpbmdQb3N0SWRgIGlzIDAgd2hlbiBjb21wb3NpbmcgYSBuZXcgcG9zdC5cbiAgICBlZGl0b3JPcGVuOiBmYWxzZSxcbiAgICBlZGl0aW5nUG9zdElkOiAwLFxuICAgIC8vIFNuYXBzaG90IG9mIGlubGluZS1jb21wb3NlIHN0YXRlIGNhcHR1cmVkIHdoZW4gdGhlIGVkaXRvciBvcGVucywgc28gdGhlXG4gICAgLy8gdXNlcidzIGluLXByb2dyZXNzIGRyYWZ0IHN1cnZpdmVzIGEgY2FuY2VsLlxuICAgIHN0YXNoOiBudWxsLFxuICAgIC8vIEZvciBlZGl0IG1vZGU6IGB7IGlkLCB1cmwsIGFsdCB9W11gIG9mIGF0dGFjaG1lbnRzIGN1cnJlbnRseSBvbiB0aGUgcG9zdC5cbiAgICAvLyBUaGUgdXNlciBjYW4gcmVtb3ZlIHRoZW0sIHdoaWNoIHB1c2hlcyB0aGUgaWQgb250byBgcmVtb3ZlZEF0dGFjaG1lbnRJZHNgXG4gICAgLy8gKHNlbnQgdG8gdGhlIHNlcnZlciBvbiBzYXZlKS5cbiAgICBleGlzdGluZ0ltYWdlczogW10sXG4gICAgcmVtb3ZlZEF0dGFjaG1lbnRJZHM6IFtdLFxuICAgIGdldCBoYXNGaWxlcygpIHsgcmV0dXJuIHN0YXRlLnBlbmRpbmcubGVuZ3RoID4gMDsgfSxcbiAgICBnZXQgaGFzRXhpc3RpbmdJbWFnZXMoKSB7IHJldHVybiBzdGF0ZS5leGlzdGluZ0ltYWdlcy5sZW5ndGggPiAwOyB9LFxuICAgIGdldCBjYW5TdWJtaXQoKSB7XG4gICAgICBpZiAoIHN0YXRlLnN1Ym1pdHRpbmcgKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoIHN0YXRlLnBvbGxNb2RlICkge1xuICAgICAgICAvLyBRdWVzdGlvbiAoYm9keSkgKyBhdCBsZWFzdCBNSU5fT1BUSU9OUyBub24tZW1wdHkgb3B0aW9ucy5cbiAgICAgICAgaWYgKCBzdGF0ZS5ib2R5LnRyaW0oKSA9PT0gJycgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBzdGF0ZS5vcHRpb25MaXN0LmZpbHRlciggbyA9PiBvLnRleHQudHJpbSgpICE9PSAnJyApLmxlbmd0aCA+PSBNSU5fT1BUSU9OUztcbiAgICAgIH1cbiAgICAgIC8vIEFsbG93IHRleHQtb25seSBwb3N0cyAoYm9keSB0cmltbWVkKSwgb3IgYW55IG51bWJlciBvZiByZWFkeSBmaWxlcy5cbiAgICAgIHJldHVybiBzdGF0ZS5ib2R5LnRyaW0oKSAhPT0gJycgfHxcbiAgICAgICAgc3RhdGUucGVuZGluZy5zb21lKCBwID0+IHAuc3RhdHVzID09PSAncmVhZHknICkgfHxcbiAgICAgICAgc3RhdGUuZXhpc3RpbmdJbWFnZXMubGVuZ3RoID4gMDtcbiAgICB9LFxuICAgIGdldCBwaG90b0xhYmVsKCkge1xuICAgICAgY29uc3QgbiA9IHN0YXRlLnBlbmRpbmcubGVuZ3RoO1xuICAgICAgcmV0dXJuIG4gPT09IDAgPyAnQWRkIHBob3RvcycgOiBgJHsgbiB9IHBob3RvJHsgbiA9PT0gMSA/ICcnIDogJ3MnIH1gO1xuICAgIH0sXG4gICAgZ2V0IGJvZHlQbGFjZWhvbGRlcigpIHsgcmV0dXJuIHN0YXRlLnBvbGxNb2RlID8gJ0FzayBhIHF1ZXN0aW9uXHUyMDI2JyA6ICdIZXkgZmFtXHUyMDI2JzsgfSxcbiAgICBnZXQgc3VibWl0TGFiZWwoKSB7XG4gICAgICBpZiAoIHN0YXRlLmVkaXRpbmdQb3N0SWQgKSByZXR1cm4gJ1NhdmUnO1xuICAgICAgcmV0dXJuIHN0YXRlLnBvbGxNb2RlID8gJ1NlbmQgcG9sbCcgOiAnU2VuZCc7XG4gICAgfSxcbiAgICBnZXQgcG9sbFRvZ2dsZUxhYmVsKCkgeyByZXR1cm4gc3RhdGUucG9sbE1vZGUgPyAnXHUyMTkwIEJhY2snICAgICAgICAgOiAnTWFrZSBpdCBhIHBvbGwnOyB9LFxuICAgIGdldCBhdE1heE9wdGlvbnMoKSAgICB7IHJldHVybiBzdGF0ZS5vcHRpb25MaXN0Lmxlbmd0aCA+PSBNQVhfT1BUSU9OUzsgfSxcbiAgICBnZXQgY2Fubm90UmVtb3ZlKCkgICAgeyByZXR1cm4gc3RhdGUub3B0aW9uTGlzdC5sZW5ndGggPD0gTUlOX09QVElPTlM7IH0sXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICB1cGRhdGVCb2R5KCBlICkge1xuICAgICAgc3RhdGUuYm9keSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgYXV0b1NpemUoIGUudGFyZ2V0ICk7XG4gICAgfSxcblxuICAgIC8qKiBUcmlnZ2VyZWQgYnkgdGhlIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlPiBjaGFuZ2UgZXZlbnQuICovXG4gICAgcGlja1Bob3RvcyggZSApIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gQXJyYXkuZnJvbSggZS50YXJnZXQuZmlsZXMgfHwgW10gKTtcbiAgICAgIGFkZEZpbGVzKCBmaWxlcyApO1xuICAgICAgLy8gQ2xlYXIgdGhlIGlucHV0IHNvIHBpY2tpbmcgdGhlIHNhbWUgZmlsZW5hbWUgYWdhaW4gc3RpbGwgZmlyZXMgYGNoYW5nZWAuXG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICAgIH0sXG5cbiAgICAvKiogRHJhZy1kcm9wIG9uIHRoZSBjb21wb3NlcidzIGRyb3Atem9uZS4gKi9cbiAgICBvbkRyYWdPdmVyKCBlICkge1xuICAgICAgaWYgKCBlLmRhdGFUcmFuc2Zlcj8udHlwZXM/LmluY2x1ZGVzKCAnRmlsZXMnICkgKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdpcy1kcm9wLXRhcmdldCcgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uRHJhZ0xlYXZlKCBlICkge1xuICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoICdpcy1kcm9wLXRhcmdldCcgKTtcbiAgICB9LFxuICAgIG9uRHJvcCggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCAnaXMtZHJvcC10YXJnZXQnICk7XG4gICAgICBjb25zdCBmaWxlcyA9IEFycmF5LmZyb20oIGUuZGF0YVRyYW5zZmVyPy5maWxlcyB8fCBbXSApO1xuICAgICAgYWRkRmlsZXMoIGZpbGVzICk7XG4gICAgfSxcblxuICAgIC8qKiBDbWQvQ3RybCtWIG9uIHRoZSBib2R5IHRleHRhcmVhIFx1MjAxNCBncmFiIGltYWdlIGNsaXBib2FyZCBpdGVtcy4gKi9cbiAgICBvblBhc3RlKCBlICkge1xuICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKCBlLmNsaXBib2FyZERhdGE/Lml0ZW1zIHx8IFtdICk7XG4gICAgICBjb25zdCBmaWxlcyA9IGl0ZW1zXG4gICAgICAgIC5maWx0ZXIoIGkgPT4gaS5raW5kID09PSAnZmlsZScgKVxuICAgICAgICAubWFwKCBpID0+IGkuZ2V0QXNGaWxlKCkgKVxuICAgICAgICAuZmlsdGVyKCBCb29sZWFuICk7XG4gICAgICBpZiAoIGZpbGVzLmxlbmd0aCA9PT0gMCApIHJldHVybjsgLy8gdGV4dCBwYXN0ZTogbGV0IHRoZSB0ZXh0YXJlYSBoYW5kbGUgaXRcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGFkZEZpbGVzKCBmaWxlcyApO1xuICAgIH0sXG5cbiAgICByZW1vdmVGaWxlKCkge1xuICAgICAgY29uc3QgY3R4ID0gZ2V0Q29udGV4dCgpO1xuICAgICAgY29uc3QgaWQgID0gY3R4Py5pdGVtPy5pZDtcbiAgICAgIGlmICggaWQgPT0gbnVsbCApIHJldHVybjtcbiAgICAgIGNvbnN0IGlkeCA9IHN0YXRlLnBlbmRpbmcuZmluZEluZGV4KCBwID0+IHAuaWQgPT09IGlkICk7XG4gICAgICBpZiAoIGlkeCA9PT0gLTEgKSByZXR1cm47XG4gICAgICBjb25zdCByZW1vdmVkID0gc3RhdGUucGVuZGluZ1sgaWR4IF07XG4gICAgICBpZiAoIHJlbW92ZWQucHJldmlld1VybCApIFVSTC5yZXZva2VPYmplY3RVUkwoIHJlbW92ZWQucHJldmlld1VybCApO1xuICAgICAgc3RhdGUucGVuZGluZy5zcGxpY2UoIGlkeCwgMSApO1xuICAgIH0sXG5cbiAgICB0b2dnbGVQb2xsTW9kZSgpIHtcbiAgICAgIHN0YXRlLnBvbGxNb2RlID0gISBzdGF0ZS5wb2xsTW9kZTtcbiAgICAgIGlmICggc3RhdGUucG9sbE1vZGUgKSB7XG4gICAgICAgIC8vIERyb3AgYW55IHBlbmRpbmcgcGhvdG8gc2VsZWN0aW9uIHdoZW4gc3dpdGNoaW5nIGludG8gcG9sbCBtb2RlIFx1MjAxNFxuICAgICAgICAvLyBwb2xscyBkb24ndCBjYXJyeSBwaG90b3MgaW4gdjEuXG4gICAgICAgIGZvciAoIGNvbnN0IHAgb2Ygc3RhdGUucGVuZGluZyApIHtcbiAgICAgICAgICBpZiAoIHAucHJldmlld1VybCApIFVSTC5yZXZva2VPYmplY3RVUkwoIHAucHJldmlld1VybCApO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnBlbmRpbmcgPSBbXTtcbiAgICAgICAgaWYgKCBzdGF0ZS5vcHRpb25MaXN0Lmxlbmd0aCA8IE1JTl9PUFRJT05TICkgc3RhdGUub3B0aW9uTGlzdCA9IGluaXRpYWxPcHRpb25zKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRPcHRpb24oKSB7XG4gICAgICBpZiAoIHN0YXRlLm9wdGlvbkxpc3QubGVuZ3RoID49IE1BWF9PUFRJT05TICkgcmV0dXJuO1xuICAgICAgY29uc3QgaSA9IHN0YXRlLm9wdGlvbkxpc3QubGVuZ3RoICsgMTtcbiAgICAgIHN0YXRlLm9wdGlvbkxpc3QucHVzaCggbmV3T3B0aW9uKCBgT3B0aW9uICR7IGkgfWAgKSApO1xuICAgIH0sXG4gICAgcmVtb3ZlT3B0aW9uKCkge1xuICAgICAgaWYgKCBzdGF0ZS5vcHRpb25MaXN0Lmxlbmd0aCA8PSBNSU5fT1BUSU9OUyApIHJldHVybjtcbiAgICAgIGNvbnN0IGN0eCA9IGdldENvbnRleHQoKTtcbiAgICAgIGNvbnN0IGlkeCA9IHN0YXRlLm9wdGlvbkxpc3QuZmluZEluZGV4KCBvID0+IG8uaWQgPT09IGN0eD8ub3B0aW9uPy5pZCApO1xuICAgICAgaWYgKCBpZHggPT09IC0xICkgcmV0dXJuO1xuICAgICAgc3RhdGUub3B0aW9uTGlzdC5zcGxpY2UoIGlkeCwgMSApO1xuICAgIH0sXG4gICAgdXBkYXRlT3B0aW9uKCBlICkge1xuICAgICAgY29uc3QgY3R4ID0gZ2V0Q29udGV4dCgpO1xuICAgICAgY29uc3Qgb3B0ID0gc3RhdGUub3B0aW9uTGlzdC5maW5kKCBvID0+IG8uaWQgPT09IGN0eD8ub3B0aW9uPy5pZCApO1xuICAgICAgaWYgKCBvcHQgKSBvcHQudGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0sXG4gICAgdXBkYXRlQ2xvc2VzQXQoIGUgKSB7IHN0YXRlLmNsb3Nlc0F0ID0gZS50YXJnZXQudmFsdWU7IH0sXG4gICAgdG9nZ2xlQW5vbiggZSApICAgICB7IHN0YXRlLmFub24gICAgID0gZS50YXJnZXQuY2hlY2tlZDsgfSxcblxuICAgIC8qKlxuICAgICAqIFBvcHVsYXRlIHRoZSBjb21wb3NlciBmcm9tIGFuIGV4aXN0aW5nIHBvc3QsIHN0YXNoaW5nIHRoZSBpbmxpbmUgZHJhZnRcbiAgICAgKiBmaXJzdCBzbyBjYW5jZWwgcmVzdG9yZXMgaXQuIENsb3NlcyBhbnkgb3BlbiBwZXItcG9zdCBtZW51LlxuICAgICAqL1xuICAgIG9wZW5FZGl0b3IoIHBvc3QgKSB7XG4gICAgICBpZiAoICEgcG9zdCB8fCAhIHBvc3QuaWQgKSByZXR1cm47XG4gICAgICAvLyBTdGFzaCBjdXJyZW50IGlubGluZSBzdGF0ZSAob25seSB3aGVuIG5vdCBhbHJlYWR5IGVkaXRpbmcgXHUyMDE0IHByZXZlbnRzXG4gICAgICAvLyBhIGRvdWJsZS1vcGVuIGZyb20gY2xvYmJlcmluZyB0aGUgc3Rhc2ggd2l0aCB0aGUgcHJldmlvdXMgZWRpdCkuXG4gICAgICBpZiAoICEgc3RhdGUuZWRpdG9yT3BlbiApIHtcbiAgICAgICAgc3RhdGUuc3Rhc2ggPSB7XG4gICAgICAgICAgYm9keTogICAgICAgc3RhdGUuYm9keSxcbiAgICAgICAgICBwZW5kaW5nOiAgICBzdGF0ZS5wZW5kaW5nLFxuICAgICAgICAgIHBvbGxNb2RlOiAgIHN0YXRlLnBvbGxNb2RlLFxuICAgICAgICAgIG9wdGlvbkxpc3Q6IHN0YXRlLm9wdGlvbkxpc3QsXG4gICAgICAgICAgY2xvc2VzQXQ6ICAgc3RhdGUuY2xvc2VzQXQsXG4gICAgICAgICAgYW5vbjogICAgICAgc3RhdGUuYW5vbixcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuYm9keSAgICAgICAgICA9IHBvc3QuYm9keSB8fCAnJztcbiAgICAgIHN0YXRlLnBlbmRpbmcgICAgICAgPSBbXTtcbiAgICAgIHN0YXRlLnJlbW92ZWRBdHRhY2htZW50SWRzID0gW107XG4gICAgICBzdGF0ZS5leGlzdGluZ0ltYWdlcyA9ICggcG9zdC5pbWFnZXMgfHwgW10gKS5tYXAoIGkgPT4gKCB7XG4gICAgICAgIGlkOiBpLmlkLCB1cmw6IGkudGh1bWJfdXJsIHx8IGkudXJsLCBhbHQ6IGkuYWx0IHx8ICcnLFxuICAgICAgfSApICk7XG5cbiAgICAgIGlmICggcG9zdC5wb2xsICkge1xuICAgICAgICBzdGF0ZS5wb2xsTW9kZSAgID0gdHJ1ZTtcbiAgICAgICAgLy8gUmUtaHlkcmF0ZSBvcHRpb24gbGlzdCB3aXRoIGRldGVybWluaXN0aWMgSURzIHNvIGRhdGEtd3AtZWFjaCBjYW4ga2V5LlxuICAgICAgICBzdGF0ZS5vcHRpb25MaXN0ID0gcG9zdC5wb2xsLm9wdGlvbnMubWFwKCAoIG8gKSA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSBuZXh0T3B0aW9uSWQrKztcbiAgICAgICAgICByZXR1cm4geyBpZCwgdGV4dDogby5sYWJlbCB8fCAnJywgcGxhY2Vob2xkZXI6IGBPcHRpb24gJHsgby5pbmRleCArIDEgfWAgfTtcbiAgICAgICAgfSApO1xuICAgICAgICAvLyBQYWQgdG8gTUlOX09QVElPTlMgaW4gdGhlIHVubGlrZWx5IGNhc2UgdGhlIHNlcnZlciByZXR1cm5lZCBmZXdlci5cbiAgICAgICAgd2hpbGUgKCBzdGF0ZS5vcHRpb25MaXN0Lmxlbmd0aCA8IE1JTl9PUFRJT05TICkge1xuICAgICAgICAgIHN0YXRlLm9wdGlvbkxpc3QucHVzaCggbmV3T3B0aW9uKCBgT3B0aW9uICR7IHN0YXRlLm9wdGlvbkxpc3QubGVuZ3RoICsgMSB9YCApICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29udmVydCBJU08gY2xvc2UgdG8gYSBgZGF0ZXRpbWUtbG9jYWxgLWZyaWVuZGx5IHZhbHVlLCBvciBibGFuay5cbiAgICAgICAgc3RhdGUuY2xvc2VzQXQgPSBwb3N0LnBvbGwuY2xvc2VzX2F0XG4gICAgICAgICAgPyBwb3N0LnBvbGwuY2xvc2VzX2F0LnNsaWNlKCAwLCAxNiApXG4gICAgICAgICAgOiAnJztcbiAgICAgICAgc3RhdGUuYW5vbiA9ICEhIHBvc3QucG9sbC5hbm9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucG9sbE1vZGUgICA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5vcHRpb25MaXN0ID0gaW5pdGlhbE9wdGlvbnMoKTtcbiAgICAgICAgc3RhdGUuY2xvc2VzQXQgICA9ICcnO1xuICAgICAgICBzdGF0ZS5hbm9uICAgICAgID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmVkaXRpbmdQb3N0SWQgPSBwb3N0LmlkO1xuICAgICAgc3RhdGUuZXJyb3IgICAgICAgICA9ICcnO1xuICAgICAgc3RhdGUuZWRpdG9yT3BlbiAgICA9IHRydWU7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoICdoZXlmYW0tbW9kYWwtb3BlbicgKTtcbiAgICB9LFxuXG4gICAgY2xvc2VFZGl0b3IoKSB7XG4gICAgICAvLyBEcm9wIGFueSBuZXctZmlsZSBwcmV2aWV3cyBwaWNrZWQgd2hpbGUgaW4gdGhlIGVkaXRvci5cbiAgICAgIGZvciAoIGNvbnN0IHAgb2Ygc3RhdGUucGVuZGluZyApIHtcbiAgICAgICAgaWYgKCBwLnByZXZpZXdVcmwgKSBVUkwucmV2b2tlT2JqZWN0VVJMKCBwLnByZXZpZXdVcmwgKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzdG9yZSB0aGUgc3Rhc2hlZCBpbmxpbmUgZHJhZnQgaWYgdGhlcmUgd2FzIG9uZS5cbiAgICAgIGNvbnN0IHMgPSBzdGF0ZS5zdGFzaDtcbiAgICAgIGlmICggcyApIHtcbiAgICAgICAgc3RhdGUuYm9keSAgICAgICA9IHMuYm9keTtcbiAgICAgICAgc3RhdGUucGVuZGluZyAgICA9IHMucGVuZGluZztcbiAgICAgICAgc3RhdGUucG9sbE1vZGUgICA9IHMucG9sbE1vZGU7XG4gICAgICAgIHN0YXRlLm9wdGlvbkxpc3QgPSBzLm9wdGlvbkxpc3Q7XG4gICAgICAgIHN0YXRlLmNsb3Nlc0F0ICAgPSBzLmNsb3Nlc0F0O1xuICAgICAgICBzdGF0ZS5hbm9uICAgICAgID0gcy5hbm9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbiggc3RhdGUsIGJsYW5rU3RhdGUoKSApO1xuICAgICAgfVxuICAgICAgc3RhdGUuc3Rhc2ggICAgICAgICAgICAgICAgPSBudWxsO1xuICAgICAgc3RhdGUuZWRpdGluZ1Bvc3RJZCAgICAgICAgPSAwO1xuICAgICAgc3RhdGUuZXhpc3RpbmdJbWFnZXMgICAgICAgPSBbXTtcbiAgICAgIHN0YXRlLnJlbW92ZWRBdHRhY2htZW50SWRzID0gW107XG4gICAgICBzdGF0ZS5lcnJvciAgICAgICAgICAgICAgICA9ICcnO1xuICAgICAgc3RhdGUuZWRpdG9yT3BlbiAgICAgICAgICAgPSBmYWxzZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggJ2hleWZhbS1tb2RhbC1vcGVuJyApO1xuICAgIH0sXG5cbiAgICAvKiogUmVtb3ZlIGFuIGFscmVhZHktYXR0YWNoZWQgaW1hZ2UuIFF1ZXVlIGl0cyBpZCBmb3Igc2VydmVyLXNpZGUgZGVsZXRlLiAqL1xuICAgIHJlbW92ZUV4aXN0aW5nSW1hZ2UoKSB7XG4gICAgICBjb25zdCBjdHggPSBnZXRDb250ZXh0KCk7XG4gICAgICBjb25zdCBpZCAgPSBjdHg/LmltYWdlPy5pZDtcbiAgICAgIGlmICggaWQgPT0gbnVsbCApIHJldHVybjtcbiAgICAgIGNvbnN0IGlkeCA9IHN0YXRlLmV4aXN0aW5nSW1hZ2VzLmZpbmRJbmRleCggaSA9PiBpLmlkID09PSBpZCApO1xuICAgICAgaWYgKCBpZHggPT09IC0xICkgcmV0dXJuO1xuICAgICAgc3RhdGUuZXhpc3RpbmdJbWFnZXMuc3BsaWNlKCBpZHgsIDEgKTtcbiAgICAgIHN0YXRlLnJlbW92ZWRBdHRhY2htZW50SWRzLnB1c2goIGlkICk7XG4gICAgfSxcblxuICAgIG9uRWRpdG9yQmFja2Ryb3AoIGUgKSB7XG4gICAgICAvLyBPbmx5IGNsb3NlIHdoZW4gY2xpY2tpbmcgdGhlIGJhY2tkcm9wIGl0c2VsZiwgbm90IHRoZSBkaWFsb2cgaW5zaWRlLlxuICAgICAgaWYgKCBlLnRhcmdldC5jbGFzc0xpc3Q/LmNvbnRhaW5zKCAnaGV5ZmFtLW1vZGFsJyApICkge1xuICAgICAgICBhY3Rpb25zLmNsb3NlRWRpdG9yKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgICpzdWJtaXQoIGUgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoICEgc3RhdGUuY2FuU3VibWl0IHx8IHN0YXRlLnN1Ym1pdHRpbmcgKSByZXR1cm47XG4gICAgICBzdGF0ZS5zdWJtaXR0aW5nID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmVycm9yICAgICAgPSAnJztcbiAgICAgIGNvbnN0IGhleWZhbSAgICA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgY29uc3QgZWRpdGluZ0lkID0gc3RhdGUuZWRpdGluZ1Bvc3RJZDtcblxuICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZkLmFwcGVuZCggJ2JvZHknLCBzdGF0ZS5ib2R5ICk7XG5cbiAgICAgIGlmICggc3RhdGUucG9sbE1vZGUgKSB7XG4gICAgICAgIGNvbnN0IG9wdHMgPSBzdGF0ZS5vcHRpb25MaXN0XG4gICAgICAgICAgLm1hcCggbyA9PiBvLnRleHQudHJpbSgpIClcbiAgICAgICAgICAuZmlsdGVyKCBCb29sZWFuICk7XG4gICAgICAgIGlmICggb3B0cy5sZW5ndGggPCBNSU5fT1BUSU9OUyApIHtcbiAgICAgICAgICBzdGF0ZS5lcnJvciAgICAgID0gYEEgcG9sbCBuZWVkcyBhdCBsZWFzdCAkeyBNSU5fT1BUSU9OUyB9IG9wdGlvbnMuYDtcbiAgICAgICAgICBzdGF0ZS5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoIGNvbnN0IG8gb2Ygb3B0cyApIGZkLmFwcGVuZCggJ3BvbGxfb3B0aW9uc1tdJywgbyApO1xuICAgICAgICBpZiAoIHN0YXRlLmNsb3Nlc0F0ICkgZmQuYXBwZW5kKCAncG9sbF9jbG9zZXNfYXQnLCBzdGF0ZS5jbG9zZXNBdCApO1xuICAgICAgICBmZC5hcHBlbmQoICdwb2xsX2Fub24nLCBzdGF0ZS5hbm9uID8gJzEnIDogJzAnICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWFkeSA9IHN0YXRlLnBlbmRpbmcuZmlsdGVyKCBwID0+IHAuc3RhdHVzID09PSAncmVhZHknICk7XG4gICAgICAgIGZvciAoIGNvbnN0IHAgb2YgcmVhZHkgKSBmZC5hcHBlbmQoICdwaG90b3NbXScsIHAuZmlsZSwgcC5uYW1lICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggZWRpdGluZ0lkICkge1xuICAgICAgICBmb3IgKCBjb25zdCBpZCBvZiBzdGF0ZS5yZW1vdmVkQXR0YWNobWVudElkcyApIHtcbiAgICAgICAgICBmZC5hcHBlbmQoICdyZW1vdmVfYXR0YWNobWVudF9pZHNbXScsIFN0cmluZyggaWQgKSApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVybCA9IGVkaXRpbmdJZFxuICAgICAgICA/IGAkeyBoZXlmYW0uYXBpQmFzZSB9LyR7IGhleWZhbS5mYW1TbHVnIH0vcG9zdC8keyBlZGl0aW5nSWQgfWBcbiAgICAgICAgOiBgJHsgaGV5ZmFtLmFwaUJhc2UgfS8keyBoZXlmYW0uZmFtU2x1ZyB9L3Bvc3RzYDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCB1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sIGJvZHk6IGZkLFxuICAgICAgICB9ICk7XG4gICAgICAgIGlmICggISByLm9rICkgdGhyb3cgbmV3IEVycm9yKCAncG9zdC1mYWlsZWQnICk7XG5cbiAgICAgICAgLy8gQ2xlYXIgc3RhdGUsIHJldm9rZSBvYmplY3QgVVJMcy5cbiAgICAgICAgZm9yICggY29uc3QgcCBvZiBzdGF0ZS5wZW5kaW5nICkge1xuICAgICAgICAgIGlmICggcC5wcmV2aWV3VXJsICkgVVJMLnJldm9rZU9iamVjdFVSTCggcC5wcmV2aWV3VXJsICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBlZGl0aW5nSWQgKSB7XG4gICAgICAgICAgLy8gY2xvc2VFZGl0b3IgcmVzdG9yZXMgdGhlIHByZS1lZGl0IGlubGluZSBkcmFmdCAodGhlIHN0YXNoKS5cbiAgICAgICAgICBzdGF0ZS5wZW5kaW5nID0gW107XG4gICAgICAgICAgYWN0aW9ucy5jbG9zZUVkaXRvcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLmJvZHkgICAgICAgPSAnJztcbiAgICAgICAgICBhdXRvU2l6ZSggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5oZXlmYW0tY29tcG9zZXIgdGV4dGFyZWEnICkgKTtcbiAgICAgICAgICBzdGF0ZS5wZW5kaW5nICAgID0gW107XG4gICAgICAgICAgc3RhdGUucG9sbE1vZGUgICA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLm9wdGlvbkxpc3QgPSBpbml0aWFsT3B0aW9ucygpO1xuICAgICAgICAgIHN0YXRlLmNsb3Nlc0F0ICAgPSAnJztcbiAgICAgICAgICBzdGF0ZS5hbm9uICAgICAgID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZSggJ2hleWZhbS9mZWVkJyApLmNhbGxiYWNrcz8ucmVmcmVzaD8uKCBoZXlmYW0gKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIHN0YXRlLmVycm9yID0gZWRpdGluZ0lkID8gJ0NvdWxkIG5vdCBzYXZlLiBUcnkgYWdhaW4uJyA6ICdDb3VsZCBub3QgcG9zdC4gVHJ5IGFnYWluLic7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzdGF0ZS5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0gKTtcblxuLyoqIEdyb3cgYSB0ZXh0YXJlYSB0byBmaXQgaXRzIGNvbnRlbnQgKHVwIHRvIGEgc29mdCBjYXA7IHNjcm9sbCBwYXN0IGl0KS4gKi9cbmNvbnN0IEFVVE9TSVpFX01BWCA9IDI0MDtcbmZ1bmN0aW9uIGF1dG9TaXplKCBlbCApIHtcbiAgaWYgKCAhIGVsIHx8IGVsLnRhZ05hbWUgIT09ICdURVhUQVJFQScgKSByZXR1cm47XG4gIGVsLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgZWwuc3R5bGUuaGVpZ2h0ID0gTWF0aC5taW4oIGVsLnNjcm9sbEhlaWdodCwgQVVUT1NJWkVfTUFYICkgKyAncHgnO1xuICBlbC5zdHlsZS5vdmVyZmxvd1kgPSBlbC5zY3JvbGxIZWlnaHQgPiBBVVRPU0laRV9NQVggPyAnYXV0bycgOiAnaGlkZGVuJztcbn1cblxuYXN5bmMgZnVuY3Rpb24gYWRkRmlsZXMoIGZpbGVzICkge1xuICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgbGV0IG5leHRJZCAgID0gKCBzdGF0ZS5wZW5kaW5nWyBzdGF0ZS5wZW5kaW5nLmxlbmd0aCAtIDEgXT8uaWQgPz8gMCApICsgMTtcblxuICBmb3IgKCBjb25zdCBmaWxlIG9mIGZpbGVzICkge1xuICAgIGlmICggc3RhdGUucGVuZGluZy5sZW5ndGggPj0gTUFYX0ZJTEVTICkge1xuICAgICAgc3RhdGUuZXJyb3IgPSBgTWF4ICR7IE1BWF9GSUxFUyB9IHBob3RvcyBwZXIgcG9zdC5gO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICggISBhY2NlcHRhYmxlKCBmaWxlICkgKSB7XG4gICAgICBzdGF0ZS5lcnJvciA9ICdPbmx5IGltYWdlcywgcGxlYXNlLic7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCBmaWxlLnNpemUgPiBNQVhfQllURVMgKSB7XG4gICAgICBzdGF0ZS5lcnJvciA9IGAkeyBmaWxlLm5hbWUgfSBpcyB0b28gbGFyZ2UuYDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWMgICAgICAgICAgICAgICA9IGlzSGVpYyggZmlsZSApO1xuICAgIGNvbnN0IG5lZWRzQ2xpZW50Q29udmVydCA9IGhlaWMgJiYgISBoZXlmYW0uaGVpY1N1cHBvcnQ7XG5cbiAgICBjb25zdCBzbG90ID0ge1xuICAgICAgaWQ6ICAgICAgICAgbmV4dElkKyssXG4gICAgICBmaWxlLFxuICAgICAgbmFtZTogICAgICAgZmlsZS5uYW1lLFxuICAgICAgcHJldmlld1VybDogJycsXG4gICAgICBzdGF0dXM6ICAgICBuZWVkc0NsaWVudENvbnZlcnQgPyAnY29udmVydGluZycgOiAncmVhZHknLFxuICAgIH07XG4gICAgLy8gUHJvdmlzaW9uYWwgcHJldmlldyBmcm9tIHRoZSBvcmlnaW5hbCBmaWxlLiBpT1MgU2FmYXJpIGNhbiByZW5kZXJcbiAgICAvLyBzb21lIEhFSUMgaW50byA8aW1nPjsgb24gb3RoZXIgYnJvd3NlcnMgdGhlIHByZXZpZXcganVzdCBzdGF5cyBibGFua1xuICAgIC8vIHVudGlsIHRoZSBjb252ZXJzaW9uIHN3YXBzIGluIGEgSlBFRyBiZWxvdy5cbiAgICB0cnkgeyBzbG90LnByZXZpZXdVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBmaWxlICk7IH0gY2F0Y2gge31cbiAgICBzdGF0ZS5wZW5kaW5nLnB1c2goIHNsb3QgKTtcblxuICAgIGlmICggbmVlZHNDbGllbnRDb252ZXJ0ICkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBoZWljMmFueSB9ID0gYXdhaXQgaW1wb3J0KCAnaGVpYzJhbnknICk7XG4gICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBoZWljMmFueSggeyBibG9iOiBmaWxlLCB0b1R5cGU6ICdpbWFnZS9qcGVnJywgcXVhbGl0eTogMC44MiB9ICk7XG4gICAgICAgIGNvbnN0IG91dCAgPSBBcnJheS5pc0FycmF5KCBibG9iICkgPyBibG9iWyAwIF0gOiBibG9iO1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWQgPSBuZXcgRmlsZShcbiAgICAgICAgICBbIG91dCBdLFxuICAgICAgICAgIGZpbGUubmFtZS5yZXBsYWNlKCAvXFwuKGhlaWN8aGVpZikkL2ksICcuanBnJyApLFxuICAgICAgICAgIHsgdHlwZTogJ2ltYWdlL2pwZWcnIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZnJlc2ggPSBzdGF0ZS5wZW5kaW5nLmZpbmQoIHAgPT4gcC5pZCA9PT0gc2xvdC5pZCApO1xuICAgICAgICBpZiAoICEgZnJlc2ggKSBjb250aW51ZTsgLy8gdXNlciByZW1vdmVkIGl0IGR1cmluZyBjb252ZXJzaW9uXG4gICAgICAgIGlmICggZnJlc2gucHJldmlld1VybCApIFVSTC5yZXZva2VPYmplY3RVUkwoIGZyZXNoLnByZXZpZXdVcmwgKTtcbiAgICAgICAgZnJlc2guZmlsZSAgICAgICA9IGNvbnZlcnRlZDtcbiAgICAgICAgZnJlc2gubmFtZSAgICAgICA9IGNvbnZlcnRlZC5uYW1lO1xuICAgICAgICBmcmVzaC5wcmV2aWV3VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggY29udmVydGVkICk7XG4gICAgICAgIGZyZXNoLnN0YXR1cyAgICAgPSAncmVhZHknO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgY29uc3QgZnJlc2ggPSBzdGF0ZS5wZW5kaW5nLmZpbmQoIHAgPT4gcC5pZCA9PT0gc2xvdC5pZCApO1xuICAgICAgICBpZiAoIGZyZXNoICkgZnJlc2guc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgc3RhdGUuZXJyb3IgPSAnQ291bGQgbm90IHJlYWQgSEVJQyBwaG90by4gQ29udmVydCB0byBKUEVHIGFuZCB0cnkgYWdhaW4uJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsICIvKipcbiAqIE1lZGlhIGhlbHBlcnMgZm9yIHRoZSBjb21wb3Nlci5cbiAqXG4gKiBDZW50cmFsaXplcyB0aGUgYWNjZXB0L3JlamVjdCBkZWNpc2lvbiBmb3IgaW1hZ2UgZmlsZXMgc28gaXQncyB0ZXN0YWJsZVxuICogb3V0c2lkZSB0aGUgSUFQSSBzdG9yZS4gQnJvd3NlcnMgcmVwb3J0IGlQaG9uZSBIRUlDIHBob3RvcyBpbmNvbnNpc3RlbnRseVxuICogKFNhZmFyaSA9IGltYWdlL2hlaWM7IEFuZHJvaWQgQ2hyb21lID0gYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtKTsgdGhlXG4gKiBgYWNjZXB0YWJsZWAgY2hlY2sgaGFzIHRvIGZhbGwgYmFjayB0byB0aGUgZmlsZSBleHRlbnNpb24gd2hlbiB0aGUgTUlNRVxuICogdHlwZSBkb2Vzbid0IG1hdGNoLlxuICovXG5cbmV4cG9ydCBjb25zdCBBQ0NFUFRfTUlNRV9SRSA9IC9eaW1hZ2VcXC8oanBlZ3xwbmd8Z2lmfHdlYnB8YXZpZnxoZWljfGhlaWYpJC9pO1xuZXhwb3J0IGNvbnN0IEhFSUNfRVhUX1JFICAgID0gL1xcLihoZWljfGhlaWYpJC9pO1xuY29uc3QgQUNDRVBUX0VYVF9SRSAgICAgICAgID0gL1xcLihqcGU/Z3xwbmd8Z2lmfHdlYnB8YXZpZnxoZWljfGhlaWYpJC9pO1xuXG4vKipcbiAqIEBwYXJhbSB7eyB0eXBlPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nIH19IGZpbGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWNjZXB0YWJsZSggZmlsZSApIHtcbiAgaWYgKCAhIGZpbGUgKSByZXR1cm4gZmFsc2U7XG4gIGlmICggQUNDRVBUX01JTUVfUkUudGVzdCggZmlsZS50eXBlIHx8ICcnICkgKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIEFDQ0VQVF9FWFRfUkUudGVzdCggZmlsZS5uYW1lIHx8ICcnICk7XG59XG5cbi8qKlxuICogQHBhcmFtIHt7IHR5cGU/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcgfX0gZmlsZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0hlaWMoIGZpbGUgKSB7XG4gIGlmICggISBmaWxlICkgcmV0dXJuIGZhbHNlO1xuICBpZiAoIEhFSUNfRVhUX1JFLnRlc3QoIGZpbGUubmFtZSB8fCAnJyApICkgcmV0dXJuIHRydWU7XG4gIHJldHVybiAvaGVpZnxoZWljL2kudGVzdCggZmlsZS50eXBlIHx8ICcnICk7XG59XG4iLCAiaW1wb3J0IHsgc3RvcmUsIGdldENvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2ludGVyYWN0aXZpdHknO1xuaW1wb3J0ICdlbW9qaS1waWNrZXItZWxlbWVudCc7XG5cbmxldCBwaWNrZXJFbCAgICAgICAgICA9IG51bGw7XG5sZXQgcGVuZGluZ1RhcmdldCAgICAgPSBudWxsO1xubGV0IG91dHNpZGVDbGlja0hhbmRsZXIgPSBudWxsO1xuXG5zdG9yZSggJ2hleWZhbS9yZWFjdGlvbnMnLCB7XG4gIGFjdGlvbnM6IHtcbiAgICAqdG9nZ2xlKCBlICkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZT8udGFyZ2V0Py5jbG9zZXN0KCAnW2RhdGEtaWRdJyApO1xuICAgICAgY29uc3QgaWQgICAgICAgID0gY29udGFpbmVyID8gcGFyc2VJbnQoIGNvbnRhaW5lci5kYXRhc2V0LmlkLCAxMCApIDogMDtcbiAgICAgIGNvbnN0IHRhcmdldCAgICA9IGNvbnRhaW5lcj8uZGF0YXNldC50YXJnZXRUeXBlIHx8ICdwb3N0JztcbiAgICAgIGNvbnN0IGN0eCAgICAgICA9IGdldENvbnRleHQoKTtcbiAgICAgIGNvbnN0IGVtb2ppICAgICA9IGN0eC5lbnRyeT8uZW1vamk7XG4gICAgICBjb25zdCBtaW5lICAgICAgPSAhISBjdHguZW50cnk/Lm1pbmU7XG4gICAgICBpZiAoICEgaWQgfHwgISBlbW9qaSApIHJldHVybjtcbiAgICAgIHlpZWxkIGFwcGx5KCB0YXJnZXQsIGlkLCBlbW9qaSwgbWluZSApO1xuICAgIH0sXG4gICAgb3BlblBpY2tlciggZSApIHtcbiAgICAgIGNvbnN0IGJ0biAgICAgICA9IGU/LmN1cnJlbnRUYXJnZXQgfHwgZT8udGFyZ2V0Py5jbG9zZXN0KCAnYnV0dG9uJyApIHx8IGU/LnRhcmdldDtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGU/LnRhcmdldD8uY2xvc2VzdCggJ1tkYXRhLWlkXScgKTtcbiAgICAgIGNvbnN0IGlkICAgICAgICA9IGNvbnRhaW5lciA/IHBhcnNlSW50KCBjb250YWluZXIuZGF0YXNldC5pZCwgMTAgKSA6IDA7XG4gICAgICBjb25zdCB0YXJnZXQgICAgPSBjb250YWluZXI/LmRhdGFzZXQudGFyZ2V0VHlwZSB8fCAncG9zdCc7XG4gICAgICBpZiAoICEgaWQgfHwgISBidG4gKSByZXR1cm47XG4gICAgICBvcGVuUGlja2VyQXQoIGJ0biwgdGFyZ2V0LCBpZCApO1xuICAgIH0sXG4gIH0sXG59ICk7XG5cbmZ1bmN0aW9uKiBhcHBseSggdGFyZ2V0X3R5cGUsIHRhcmdldF9pZCwgZW1vamksIHJlbW92ZSA9IGZhbHNlICkge1xuICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgeWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS8ke2hleWZhbS5mYW1TbHVnfS9yZWFjdGlvbnNgLCB7XG4gICAgbWV0aG9kOiByZW1vdmUgPyAnREVMRVRFJyA6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgdGFyZ2V0X3R5cGUsIHRhcmdldF9pZCwgZW1vamkgfSApLFxuICB9ICk7XG4gIHRyeSB7IHN0b3JlKCAnaGV5ZmFtL2ZlZWQnICkuY2FsbGJhY2tzLnJlZnJlc2goIGhleWZhbSApOyB9IGNhdGNoICggZSApIHt9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFwcGx5RGlyZWN0KCB0YXJnZXRfdHlwZSwgdGFyZ2V0X2lkLCBlbW9qaSApIHtcbiAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gIGF3YWl0IGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vJHtoZXlmYW0uZmFtU2x1Z30vcmVhY3Rpb25zYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSggeyB0YXJnZXRfdHlwZSwgdGFyZ2V0X2lkLCBlbW9qaSB9ICksXG4gIH0gKTtcbiAgdHJ5IHsgc3RvcmUoICdoZXlmYW0vZmVlZCcgKS5jYWxsYmFja3MucmVmcmVzaCggaGV5ZmFtICk7IH0gY2F0Y2ggKCBlICkge31cbn1cblxuZnVuY3Rpb24gZ2V0UGlja2VyKCkge1xuICBpZiAoIHBpY2tlckVsICkgcmV0dXJuIHBpY2tlckVsO1xuICBwaWNrZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdlbW9qaS1waWNrZXInICk7XG4gIHBpY2tlckVsLmNsYXNzTGlzdC5hZGQoICdoZXlmYW0tZW1vamktcGlja2VyJyApO1xuICBwaWNrZXJFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHBpY2tlckVsLnN0eWxlLnpJbmRleCAgID0gJzEwMDAnO1xuICBwaWNrZXJFbC5zdHlsZS5kaXNwbGF5ICA9ICdub25lJztcbiAgcGlja2VyRWwuYWRkRXZlbnRMaXN0ZW5lciggJ2Vtb2ppLWNsaWNrJywgKCBldiApID0+IHtcbiAgICBpZiAoIHBlbmRpbmdUYXJnZXQgKSB7XG4gICAgICBhcHBseURpcmVjdCggcGVuZGluZ1RhcmdldC50YXJnZXRfdHlwZSwgcGVuZGluZ1RhcmdldC50YXJnZXRfaWQsIGV2LmRldGFpbC51bmljb2RlICk7XG4gICAgfVxuICAgIGNsb3NlUGlja2VyKCk7XG4gIH0gKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggcGlja2VyRWwgKTtcbiAgcmV0dXJuIHBpY2tlckVsO1xufVxuXG5mdW5jdGlvbiBvcGVuUGlja2VyQXQoIGJ0biwgdGFyZ2V0X3R5cGUsIHRhcmdldF9pZCApIHtcbiAgY29uc3QgcCA9IGdldFBpY2tlcigpO1xuICBwZW5kaW5nVGFyZ2V0ID0geyB0YXJnZXRfdHlwZSwgdGFyZ2V0X2lkIH07XG4gIGNvbnN0IHJlY3QgICAgICAgICA9IGJ0bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgcGlja2VySGVpZ2h0ID0gNDAwOyAvLyBlbW9qaS1waWNrZXItZWxlbWVudCBkZWZhdWx0XG4gIGNvbnN0IGZpdHNCZWxvdyAgICA9IHJlY3QuYm90dG9tICsgcGlja2VySGVpZ2h0ICsgMTIgPCB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNvbnN0IHRvcCAgICAgICAgICA9IGZpdHNCZWxvdyA/IHJlY3QuYm90dG9tICsgd2luZG93LnNjcm9sbFkgKyA2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFkgLSBwaWNrZXJIZWlnaHQgLSA2O1xuICBjb25zdCBsZWZ0ICAgICAgICAgPSBNYXRoLm1heCggOCwgTWF0aC5taW4oIHJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuaW5uZXJXaWR0aCAtIDM2MCApICk7XG4gIHAuc3R5bGUudG9wICAgICA9IGAke3RvcH1weGA7XG4gIHAuc3R5bGUubGVmdCAgICA9IGAke2xlZnR9cHhgO1xuICBwLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgLy8gQXR0YWNoIG91dHNpZGUtY2xpY2sgaGFuZGxlciBvbiB0aGUgTkVYVCB0aWNrIHNvIHRoZSBjbGljayB0aGF0IG9wZW5lZFxuICAvLyB0aGUgcGlja2VyIGRvZXNuJ3QgaW1tZWRpYXRlbHkgY2xvc2UgaXQuXG4gIGlmICggb3V0c2lkZUNsaWNrSGFuZGxlciApIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIG91dHNpZGVDbGlja0hhbmRsZXIgKTtcbiAgb3V0c2lkZUNsaWNrSGFuZGxlciA9ICggZXYgKSA9PiB7XG4gICAgaWYgKCAhIHAuY29udGFpbnMoIGV2LnRhcmdldCApICYmICEgYnRuLmNvbnRhaW5zKCBldi50YXJnZXQgKSApIHtcbiAgICAgIGNsb3NlUGlja2VyKCk7XG4gICAgfVxuICB9O1xuICBzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvdXRzaWRlQ2xpY2tIYW5kbGVyICksIDAgKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQaWNrZXIoKSB7XG4gIGlmICggcGlja2VyRWwgKSBwaWNrZXJFbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBwZW5kaW5nVGFyZ2V0ID0gbnVsbDtcbiAgaWYgKCBvdXRzaWRlQ2xpY2tIYW5kbGVyICkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIG91dHNpZGVDbGlja0hhbmRsZXIgKTtcbiAgICBvdXRzaWRlQ2xpY2tIYW5kbGVyID0gbnVsbDtcbiAgfVxufVxuIiwgImZ1bmN0aW9uIGFzc2VydE5vbkVtcHR5U3RyaW5nIChzdHIpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnIHx8ICFzdHIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4cGVjdGVkIGEgbm9uLWVtcHR5IHN0cmluZywgZ290OiAnICsgc3RyKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydE51bWJlciAobnVtYmVyKSB7XG4gIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgYSBudW1iZXIsIGdvdDogJyArIG51bWJlcilcbiAgfVxufVxuXG5jb25zdCBEQl9WRVJTSU9OX0NVUlJFTlQgPSAxO1xuY29uc3QgREJfVkVSU0lPTl9JTklUSUFMID0gMTtcbmNvbnN0IFNUT1JFX0VNT0pJID0gJ2Vtb2ppJztcbmNvbnN0IFNUT1JFX0tFWVZBTFVFID0gJ2tleXZhbHVlJztcbmNvbnN0IFNUT1JFX0ZBVk9SSVRFUyA9ICdmYXZvcml0ZXMnO1xuY29uc3QgRklFTERfVE9LRU5TID0gJ3Rva2Vucyc7XG5jb25zdCBJTkRFWF9UT0tFTlMgPSAndG9rZW5zJztcbmNvbnN0IEZJRUxEX1VOSUNPREUgPSAndW5pY29kZSc7XG5jb25zdCBJTkRFWF9DT1VOVCA9ICdjb3VudCc7XG5jb25zdCBGSUVMRF9HUk9VUCA9ICdncm91cCc7XG5jb25zdCBGSUVMRF9PUkRFUiA9ICdvcmRlcic7XG5jb25zdCBJTkRFWF9HUk9VUF9BTkRfT1JERVIgPSAnZ3JvdXAtb3JkZXInO1xuY29uc3QgS0VZX0VUQUcgPSAnZVRhZyc7XG5jb25zdCBLRVlfVVJMID0gJ3VybCc7XG5jb25zdCBLRVlfUFJFRkVSUkVEX1NLSU5UT05FID0gJ3NraW5Ub25lJztcbmNvbnN0IE1PREVfUkVBRE9OTFkgPSAncmVhZG9ubHknO1xuY29uc3QgTU9ERV9SRUFEV1JJVEUgPSAncmVhZHdyaXRlJztcbmNvbnN0IElOREVYX1NLSU5fVU5JQ09ERSA9ICdza2luVW5pY29kZXMnO1xuY29uc3QgRklFTERfU0tJTl9VTklDT0RFID0gJ3NraW5Vbmljb2Rlcyc7XG5cbmNvbnN0IERFRkFVTFRfREFUQV9TT1VSQ0UgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9lbW9qaS1waWNrZXItZWxlbWVudC1kYXRhQF4xL2VuL2Vtb2ppYmFzZS9kYXRhLmpzb24nO1xuY29uc3QgREVGQVVMVF9MT0NBTEUgPSAnZW4nO1xuXG4vLyBsaWtlIGxvZGFzaCdzIHVuaXFCeSBidXQgbXVjaCBzbWFsbGVyXG5mdW5jdGlvbiB1bmlxQnkgKGFyciwgZnVuYykge1xuICBjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgY29uc3Qga2V5ID0gZnVuYyhpdGVtKTtcbiAgICBpZiAoIXNldC5oYXMoa2V5KSkge1xuICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gdW5pcUVtb2ppIChlbW9qaXMpIHtcbiAgcmV0dXJuIHVuaXFCeShlbW9qaXMsIF8gPT4gXy51bmljb2RlKVxufVxuXG5mdW5jdGlvbiBpbml0aWFsTWlncmF0aW9uIChkYikge1xuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RTdG9yZSAobmFtZSwga2V5UGF0aCwgaW5kZXhlcykge1xuICAgIGNvbnN0IHN0b3JlID0ga2V5UGF0aFxuICAgICAgPyBkYi5jcmVhdGVPYmplY3RTdG9yZShuYW1lLCB7IGtleVBhdGggfSlcbiAgICAgIDogZGIuY3JlYXRlT2JqZWN0U3RvcmUobmFtZSk7XG4gICAgaWYgKGluZGV4ZXMpIHtcbiAgICAgIGZvciAoY29uc3QgW2luZGV4TmFtZSwgW2tleVBhdGgsIG11bHRpRW50cnldXSBvZiBPYmplY3QuZW50cmllcyhpbmRleGVzKSkge1xuICAgICAgICBzdG9yZS5jcmVhdGVJbmRleChpbmRleE5hbWUsIGtleVBhdGgsIHsgbXVsdGlFbnRyeSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0b3JlXG4gIH1cblxuICBjcmVhdGVPYmplY3RTdG9yZShTVE9SRV9LRVlWQUxVRSk7XG4gIGNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFX0VNT0pJLCAvKiBrZXlQYXRoICovIEZJRUxEX1VOSUNPREUsIHtcbiAgICBbSU5ERVhfVE9LRU5TXTogW0ZJRUxEX1RPS0VOUywgLyogbXVsdGlFbnRyeSAqLyB0cnVlXSxcbiAgICBbSU5ERVhfR1JPVVBfQU5EX09SREVSXTogW1tGSUVMRF9HUk9VUCwgRklFTERfT1JERVJdXSxcbiAgICBbSU5ERVhfU0tJTl9VTklDT0RFXTogW0ZJRUxEX1NLSU5fVU5JQ09ERSwgLyogbXVsdGlFbnRyeSAqLyB0cnVlXVxuICB9KTtcbiAgY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkVfRkFWT1JJVEVTLCB1bmRlZmluZWQsIHtcbiAgICBbSU5ERVhfQ09VTlRdOiBbJyddXG4gIH0pO1xufVxuXG5jb25zdCBvcGVuSW5kZXhlZERCUmVxdWVzdHMgPSB7fTtcbmNvbnN0IGRhdGFiYXNlQ2FjaGUgPSB7fTtcbmNvbnN0IG9uQ2xvc2VMaXN0ZW5lcnMgPSB7fTtcblxuZnVuY3Rpb24gaGFuZGxlT3Blbk9yRGVsZXRlUmVxIChyZXNvbHZlLCByZWplY3QsIHJlcSkge1xuICAvLyBUaGVzZSB0aGluZ3MgYXJlIGFsbW9zdCBpbXBvc3NpYmxlIHRvIHRlc3Qgd2l0aCBmYWtlSW5kZXhlZERCIHNhZGx5XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvcik7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJlcS5vbmJsb2NrZWQgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKCdJREIgYmxvY2tlZCcpKTtcbiAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxLnJlc3VsdCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURhdGFiYXNlIChkYk5hbWUpIHtcbiAgY29uc3QgZGIgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVxID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lLCBEQl9WRVJTSU9OX0NVUlJFTlQpO1xuICAgIG9wZW5JbmRleGVkREJSZXF1ZXN0c1tkYk5hbWVdID0gcmVxO1xuICAgIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBlID0+IHtcbiAgICAgIC8vIFRlY2huaWNhbGx5IHRoZXJlIGlzIG9ubHkgb25lIHZlcnNpb24sIHNvIHdlIGRvbid0IG5lZWQgdGhpcyBgaWZgIGNoZWNrXG4gICAgICAvLyBCdXQgaWYgYW4gb2xkIHZlcnNpb24gb2YgdGhlIEpTIGlzIGluIGFub3RoZXIgYnJvd3NlciB0YWJcbiAgICAgIC8vIGFuZCBpdCBnZXRzIHVwZ3JhZGVkIGluIHRoZSBmdXR1cmUgYW5kIHdlIGhhdmUgYSBuZXcgREIgdmVyc2lvbiwgd2VsbC4uLlxuICAgICAgLy8gYmV0dGVyIHNhZmUgdGhhbiBzb3JyeS5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoZS5vbGRWZXJzaW9uIDwgREJfVkVSU0lPTl9JTklUSUFMKSB7XG4gICAgICAgIGluaXRpYWxNaWdyYXRpb24ocmVxLnJlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBoYW5kbGVPcGVuT3JEZWxldGVSZXEocmVzb2x2ZSwgcmVqZWN0LCByZXEpO1xuICB9KTtcbiAgLy8gSGFuZGxlIGFibm9ybWFsIGNsb3NlcywgZS5nLiBcImRlbGV0ZSBkYXRhYmFzZVwiIGluIGNocm9tZSBkZXYgdG9vbHMuXG4gIC8vIE5vIG5lZWQgZm9yIHJlbW92ZUV2ZW50TGlzdGVuZXIsIGJlY2F1c2Ugb25jZSB0aGUgREIgY2FuIG5vIGxvbmdlclxuICAvLyBmaXJlIFwiY2xvc2VcIiBldmVudHMsIGl0IHdpbGwgYXV0by1HQy5cbiAgZGIub25jbG9zZSA9ICgpID0+IGNsb3NlRGF0YWJhc2UoZGJOYW1lKTtcbiAgcmV0dXJuIGRiXG59XG5cbmZ1bmN0aW9uIG9wZW5EYXRhYmFzZSAoZGJOYW1lKSB7XG4gIGlmICghZGF0YWJhc2VDYWNoZVtkYk5hbWVdKSB7XG4gICAgZGF0YWJhc2VDYWNoZVtkYk5hbWVdID0gY3JlYXRlRGF0YWJhc2UoZGJOYW1lKTtcbiAgfVxuICByZXR1cm4gZGF0YWJhc2VDYWNoZVtkYk5hbWVdXG59XG5cbmZ1bmN0aW9uIGRiUHJvbWlzZSAoZGIsIHN0b3JlTmFtZSwgcmVhZE9ubHlPclJlYWRXcml0ZSwgY2IpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBVc2UgcmVsYXhlZCBkdXJhYmlsaXR5IGJlY2F1c2UgbmVpdGhlciB0aGUgZW1vamkgZGF0YSBub3IgdGhlIGZhdm9yaXRlcy9wcmVmZXJyZWQgc2tpbiB0b25lXG4gICAgLy8gYXJlIHJlYWxseSBpcnJlcGxhY2VhYmxlIGRhdGEuIEluZGV4ZWREQiBpcyBqdXN0IGEgY2FjaGUgaW4gdGhpcyBjYXNlLlxuICAgIGNvbnN0IHR4biA9IGRiLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgcmVhZE9ubHlPclJlYWRXcml0ZSwgeyBkdXJhYmlsaXR5OiAncmVsYXhlZCcgfSk7XG4gICAgY29uc3Qgc3RvcmUgPSB0eXBlb2Ygc3RvcmVOYW1lID09PSAnc3RyaW5nJ1xuICAgICAgPyB0eG4ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKVxuICAgICAgOiBzdG9yZU5hbWUubWFwKG5hbWUgPT4gdHhuLm9iamVjdFN0b3JlKG5hbWUpKTtcbiAgICBsZXQgcmVzO1xuICAgIGNiKHN0b3JlLCB0eG4sIChyZXN1bHQpID0+IHtcbiAgICAgIHJlcyA9IHJlc3VsdDtcbiAgICB9KTtcblxuICAgIHR4bi5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZShyZXMpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdHhuLm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHhuLmVycm9yKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2xvc2VEYXRhYmFzZSAoZGJOYW1lKSB7XG4gIC8vIGNsb3NlIGFueSBvcGVuIHJlcXVlc3RzXG4gIGNvbnN0IHJlcSA9IG9wZW5JbmRleGVkREJSZXF1ZXN0c1tkYk5hbWVdO1xuICBjb25zdCBkYiA9IHJlcSAmJiByZXEucmVzdWx0O1xuICBpZiAoZGIpIHtcbiAgICBkYi5jbG9zZSgpO1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IG9uQ2xvc2VMaXN0ZW5lcnNbZGJOYW1lXTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgIGxpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRlbGV0ZSBvcGVuSW5kZXhlZERCUmVxdWVzdHNbZGJOYW1lXTtcbiAgZGVsZXRlIGRhdGFiYXNlQ2FjaGVbZGJOYW1lXTtcbiAgZGVsZXRlIG9uQ2xvc2VMaXN0ZW5lcnNbZGJOYW1lXTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlRGF0YWJhc2UgKGRiTmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIGNsb3NlIGFueSBvcGVuIHJlcXVlc3RzXG4gICAgY2xvc2VEYXRhYmFzZShkYk5hbWUpO1xuICAgIGNvbnN0IHJlcSA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShkYk5hbWUpO1xuICAgIGhhbmRsZU9wZW5PckRlbGV0ZVJlcShyZXNvbHZlLCByZWplY3QsIHJlcSk7XG4gIH0pXG59XG5cbi8vIFRoZSBcImNsb3NlXCIgZXZlbnQgb2NjdXJzIGR1cmluZyBhbiBhYm5vcm1hbCBzaHV0ZG93biwgZS5nLiBhIHVzZXIgY2xlYXJpbmcgdGhlaXIgYnJvd3NlciBkYXRhLlxuLy8gSG93ZXZlciwgaXQgZG9lc24ndCBvY2N1ciB3aXRoIHRoZSBub3JtYWwgXCJjbG9zZVwiIGV2ZW50LCBzbyB3ZSBoYW5kbGUgdGhhdCBzZXBhcmF0ZWx5LlxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL0luZGV4ZWREQi8jY2xvc2UtYS1kYXRhYmFzZS1jb25uZWN0aW9uXG5mdW5jdGlvbiBhZGRPbkNsb3NlTGlzdGVuZXIgKGRiTmFtZSwgbGlzdGVuZXIpIHtcbiAgbGV0IGxpc3RlbmVycyA9IG9uQ2xvc2VMaXN0ZW5lcnNbZGJOYW1lXTtcbiAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICBsaXN0ZW5lcnMgPSBvbkNsb3NlTGlzdGVuZXJzW2RiTmFtZV0gPSBbXTtcbiAgfVxuICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG59XG5cbi8vIGxpc3Qgb2YgZW1vdGljb25zIHRoYXQgZG9uJ3QgbWF0Y2ggYSBzaW1wbGUgXFxXKyByZWdleFxuLy8gZXh0cmFjdGVkIHVzaW5nOlxuLy8gcmVxdWlyZSgnZW1vamktcGlja2VyLWVsZW1lbnQtZGF0YS9lbi9lbW9qaWJhc2UvZGF0YS5qc29uJykubWFwKF8gPT4gXy5lbW90aWNvbikuZmlsdGVyKEJvb2xlYW4pLmZpbHRlcihfID0+ICEvXlxcVyskLy50ZXN0KF8pKVxuY29uc3QgaXJyZWd1bGFyRW1vdGljb25zID0gbmV3IFNldChbXG4gICc6RCcsICdYRCcsIFwiOidEXCIsICdPOiknLFxuICAnOlgnLCAnOlAnLCAnO1AnLCAnWFAnLFxuICAnOkwnLCAnOlonLCAnOmonLCAnOEQnLFxuICAnWE8nLCAnOCknLCAnOkInLCAnOk8nLFxuICAnOlMnLCBcIjonb1wiLCAnRHgnLCAnWCgnLFxuICAnRDonLCAnOkMnLCAnPjApJywgJzozJyxcbiAgJzwvMycsICc8MycsICdcXFxcTS8nLCAnOkUnLFxuICAnOCMnXG5dKTtcblxuZnVuY3Rpb24gZXh0cmFjdFRva2VucyAoc3RyKSB7XG4gIHJldHVybiBzdHJcbiAgICAuc3BsaXQoL1tcXHNfXSsvKVxuICAgIC5tYXAod29yZCA9PiB7XG4gICAgICBpZiAoIXdvcmQubWF0Y2goL1xcdy8pIHx8IGlycmVndWxhckVtb3RpY29ucy5oYXMod29yZCkpIHtcbiAgICAgICAgLy8gZm9yIHB1cmUgZW1vdGljb25zIGxpa2UgOikgb3IgOi0pLCBqdXN0IGxlYXZlIHRoZW0gYXMtaXNcbiAgICAgICAgcmV0dXJuIHdvcmQudG9Mb3dlckNhc2UoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gd29yZFxuICAgICAgICAucmVwbGFjZSgvWykoOixdL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXHUyMDE5L2csIFwiJ1wiKVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgIH0pLmZpbHRlcihCb29sZWFuKVxufVxuXG5jb25zdCBNSU5fU0VBUkNIX1RFWFRfTEVOR1RIID0gMjtcblxuLy8gVGhpcyBpcyBhbiBleHRyYSBzdGVwIGluIGFkZGl0aW9uIHRvIGV4dHJhY3RUb2tlbnMoKS4gVGhlIGRpZmZlcmVuY2UgaGVyZSBpcyB0aGF0IHdlIGV4cGVjdFxuLy8gdGhlIGlucHV0IHRvIGhhdmUgYWxyZWFkeSBiZWVuIHJ1biB0aHJvdWdoIGV4dHJhY3RUb2tlbnMoKS4gVGhpcyBpcyB1c2VmdWwgZm9yIGNhc2VzIGxpa2Vcbi8vIGVtb3RpY29ucywgd2hlcmUgd2UgZG9uJ3Qgd2FudCB0byBkbyBhbnkgdG9rZW5pemF0aW9uIChiZWNhdXNlIGl0IG1ha2VzIG5vIHNlbnNlIHRvIHNwbGl0IHVwXG4vLyBcIj46KVwiIGJ5IHRoZSBjb2xvbikgYnV0IHdlIGRvIHdhbnQgdG8gbG93ZXJjYXNlIGl0IHRvIGhhdmUgY29uc2lzdGVudCBzZWFyY2ggcmVzdWx0cywgc28gdGhhdFxuLy8gdGhlIHVzZXIgY2FuIHR5cGUgJzpQJyBvciAnOnAnIGFuZCBzdGlsbCBnZXQgdGhlIHNhbWUgcmVzdWx0LlxuZnVuY3Rpb24gbm9ybWFsaXplVG9rZW5zIChzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAubWFwKF8gPT4gXy50b0xvd2VyQ2FzZSgpKVxuICAgIC5maWx0ZXIoXyA9PiBfLmxlbmd0aCA+PSBNSU5fU0VBUkNIX1RFWFRfTEVOR1RIKVxufVxuXG4vLyBUcmFuc2Zvcm0gZW1vamkgZGF0YSBmb3Igc3RvcmFnZSBpbiBJREJcbmZ1bmN0aW9uIHRyYW5zZm9ybUVtb2ppRGF0YSAoZW1vamlEYXRhKSB7XG4gIGNvbnN0IHJlcyA9IGVtb2ppRGF0YS5tYXAoKHsgYW5ub3RhdGlvbiwgZW1vdGljb24sIGdyb3VwLCBvcmRlciwgc2hvcnRjb2Rlcywgc2tpbnMsIHRhZ3MsIGVtb2ppLCB2ZXJzaW9uIH0pID0+IHtcbiAgICBjb25zdCB0b2tlbnMgPSBbLi4ubmV3IFNldChcbiAgICAgIG5vcm1hbGl6ZVRva2VucyhbXG4gICAgICAgIC4uLihzaG9ydGNvZGVzIHx8IFtdKS5tYXAoZXh0cmFjdFRva2VucykuZmxhdCgpLFxuICAgICAgICAuLi4odGFncyB8fCBbXSkubWFwKGV4dHJhY3RUb2tlbnMpLmZsYXQoKSxcbiAgICAgICAgLi4uZXh0cmFjdFRva2Vucyhhbm5vdGF0aW9uKSxcbiAgICAgICAgZW1vdGljb25cbiAgICAgIF0pXG4gICAgKV0uc29ydCgpO1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIGFubm90YXRpb24sXG4gICAgICBncm91cCxcbiAgICAgIG9yZGVyLFxuICAgICAgdGFncyxcbiAgICAgIHRva2VucyxcbiAgICAgIHVuaWNvZGU6IGVtb2ppLFxuICAgICAgdmVyc2lvblxuICAgIH07XG4gICAgaWYgKGVtb3RpY29uKSB7XG4gICAgICByZXMuZW1vdGljb24gPSBlbW90aWNvbjtcbiAgICB9XG4gICAgaWYgKHNob3J0Y29kZXMpIHtcbiAgICAgIHJlcy5zaG9ydGNvZGVzID0gc2hvcnRjb2RlcztcbiAgICB9XG4gICAgaWYgKHNraW5zKSB7XG4gICAgICByZXMuc2tpblRvbmVzID0gW107XG4gICAgICByZXMuc2tpblVuaWNvZGVzID0gW107XG4gICAgICByZXMuc2tpblZlcnNpb25zID0gW107XG4gICAgICBmb3IgKGNvbnN0IHsgdG9uZSwgZW1vamksIHZlcnNpb24gfSBvZiBza2lucykge1xuICAgICAgICByZXMuc2tpblRvbmVzLnB1c2godG9uZSk7XG4gICAgICAgIHJlcy5za2luVW5pY29kZXMucHVzaChlbW9qaSk7XG4gICAgICAgIHJlcy5za2luVmVyc2lvbnMucHVzaCh2ZXJzaW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufVxuXG4vLyBoZWxwZXIgZnVuY3Rpb25zIHRoYXQgaGVscCBjb21wcmVzcyB0aGUgY29kZSBiZXR0ZXJcblxuZnVuY3Rpb24gY2FsbFN0b3JlIChzdG9yZSwgbWV0aG9kLCBrZXksIGNiKSB7XG4gIHN0b3JlW21ldGhvZF0oa2V5KS5vbnN1Y2Nlc3MgPSBlID0+IChjYiAmJiBjYihlLnRhcmdldC5yZXN1bHQpKTtcbn1cblxuZnVuY3Rpb24gZ2V0SURCIChzdG9yZSwga2V5LCBjYikge1xuICBjYWxsU3RvcmUoc3RvcmUsICdnZXQnLCBrZXksIGNiKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsSURCIChzdG9yZSwga2V5LCBjYikge1xuICBjYWxsU3RvcmUoc3RvcmUsICdnZXRBbGwnLCBrZXksIGNiKTtcbn1cblxuZnVuY3Rpb24gY29tbWl0ICh0eG4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHR4bi5jb21taXQpIHtcbiAgICB0eG4uY29tbWl0KCk7XG4gIH1cbn1cblxuLy8gbGlrZSBsb2Rhc2gncyBtaW5CeVxuZnVuY3Rpb24gbWluQnkgKGFycmF5LCBmdW5jKSB7XG4gIGxldCBtaW5JdGVtID0gYXJyYXlbMF07XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gYXJyYXlbaV07XG4gICAgaWYgKGZ1bmMobWluSXRlbSkgPiBmdW5jKGl0ZW0pKSB7XG4gICAgICBtaW5JdGVtID0gaXRlbTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pbkl0ZW1cbn1cblxuLy8gcmV0dXJuIGFuIGFycmF5IG9mIHJlc3VsdHMgcmVwcmVzZW50aW5nIGFsbCBpdGVtcyB0aGF0IGFyZSBmb3VuZCBpbiBlYWNoIG9uZSBvZiB0aGUgYXJyYXlzXG4vL1xuXG5mdW5jdGlvbiBmaW5kQ29tbW9uTWVtYmVycyAoYXJyYXlzLCB1bmlxQnlGdW5jKSB7XG4gIGNvbnN0IHNob3J0ZXN0QXJyYXkgPSBtaW5CeShhcnJheXMsIF8gPT4gXy5sZW5ndGgpO1xuICBjb25zdCByZXN1bHRzID0gW107XG4gIGZvciAoY29uc3QgaXRlbSBvZiBzaG9ydGVzdEFycmF5KSB7XG4gICAgLy8gaWYgdGhpcyBpdGVtIGlzIGluY2x1ZGVkIGluIGV2ZXJ5IGFycmF5IGluIHRoZSBpbnRlcm1lZGlhdGUgcmVzdWx0cywgYWRkIGl0IHRvIHRoZSBmaW5hbCByZXN1bHRzXG4gICAgaWYgKCFhcnJheXMuc29tZShhcnJheSA9PiBhcnJheS5maW5kSW5kZXgoXyA9PiB1bmlxQnlGdW5jKF8pID09PSB1bmlxQnlGdW5jKGl0ZW0pKSA9PT0gLTEpKSB7XG4gICAgICByZXN1bHRzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRzXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGlzRW1wdHkgKGRiKSB7XG4gIHJldHVybiAhKGF3YWl0IGdldChkYiwgU1RPUkVfS0VZVkFMVUUsIEtFWV9VUkwpKVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYXNEYXRhIChkYiwgdXJsLCBlVGFnKSB7XG4gIGNvbnN0IFtvbGRFVGFnLCBvbGRVcmxdID0gYXdhaXQgUHJvbWlzZS5hbGwoW0tFWV9FVEFHLCBLRVlfVVJMXVxuICAgIC5tYXAoa2V5ID0+IGdldChkYiwgU1RPUkVfS0VZVkFMVUUsIGtleSkpKTtcbiAgcmV0dXJuIChvbGRFVGFnID09PSBlVGFnICYmIG9sZFVybCA9PT0gdXJsKVxufVxuXG5hc3luYyBmdW5jdGlvbiBkb0Z1bGxEYXRhYmFzZVNjYW5Gb3JTaW5nbGVSZXN1bHQgKGRiLCBwcmVkaWNhdGUpIHtcbiAgLy8gVGhpcyBiYXRjaGluZyBhbGdvcml0aG0gaXMganVzdCBhIHBlcmYgaW1wcm92ZW1lbnQgb3ZlciBhIGJhc2ljXG4gIC8vIGN1cnNvci4gVGhlIEJBVENIX1NJWkUgaXMgYW4gZXN0aW1hdGUgb2Ygd2hhdCB3b3VsZCBnaXZlIHRoZSBiZXN0XG4gIC8vIHBlcmYgZm9yIGRvaW5nIGEgZnVsbCBEQiBzY2FuICh3b3JzdCBjYXNlKS5cbiAgLy9cbiAgLy8gTWluaS1iZW5jaG1hcmsgZm9yIGRldGVybWluaW5nIHRoZSBiZXN0IGJhdGNoIHNpemU6XG4gIC8vXG4gIC8vIFBFUkY9MSBwbnBtIGJ1aWxkOnJvbGx1cCAmJiBwbnBtIHRlc3Q6YWRob2NcbiAgLy9cbiAgLy8gKGFzeW5jICgpID0+IHtcbiAgLy8gICBwZXJmb3JtYW5jZS5tYXJrKCdzdGFydCcpXG4gIC8vICAgYXdhaXQgJCgnZW1vamktcGlja2VyJykuZGF0YWJhc2UuZ2V0RW1vamlCeVNob3J0Y29kZSgnZG9lc25vdGV4aXN0JylcbiAgLy8gICBwZXJmb3JtYW5jZS5tZWFzdXJlKCd0b3RhbCcsICdzdGFydCcpXG4gIC8vICAgY29uc29sZS5sb2cocGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZSgndG90YWwnKS5zbGljZSgtMSlbMF0uZHVyYXRpb24pXG4gIC8vIH0pKClcbiAgY29uc3QgQkFUQ0hfU0laRSA9IDUwOyAvLyBUeXBpY2FsbHkgYXJvdW5kIDE1MG1zIGZvciA2eCBzbG93ZG93biBpbiBDaHJvbWUgZm9yIGFib3ZlIGJlbmNobWFya1xuICByZXR1cm4gZGJQcm9taXNlKGRiLCBTVE9SRV9FTU9KSSwgTU9ERV9SRUFET05MWSwgKGVtb2ppU3RvcmUsIHR4biwgY2IpID0+IHtcbiAgICBsZXQgbGFzdEtleTtcblxuICAgIGNvbnN0IHByb2Nlc3NOZXh0QmF0Y2ggPSAoKSA9PiB7XG4gICAgICBlbW9qaVN0b3JlLmdldEFsbChsYXN0S2V5ICYmIElEQktleVJhbmdlLmxvd2VyQm91bmQobGFzdEtleSwgdHJ1ZSksIEJBVENIX1NJWkUpLm9uc3VjY2VzcyA9IGUgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgbGFzdEtleSA9IHJlc3VsdC51bmljb2RlO1xuICAgICAgICAgIGlmIChwcmVkaWNhdGUocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGNiKHJlc3VsdClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDwgQkFUQ0hfU0laRSkge1xuICAgICAgICAgIHJldHVybiBjYigpXG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc05leHRCYXRjaCgpO1xuICAgICAgfTtcbiAgICB9O1xuICAgIHByb2Nlc3NOZXh0QmF0Y2goKTtcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEgKGRiLCBlbW9qaURhdGEsIHVybCwgZVRhZykge1xuICB0cnkge1xuICAgIGNvbnN0IHRyYW5zZm9ybWVkRGF0YSA9IHRyYW5zZm9ybUVtb2ppRGF0YShlbW9qaURhdGEpO1xuICAgIGF3YWl0IGRiUHJvbWlzZShkYiwgW1NUT1JFX0VNT0pJLCBTVE9SRV9LRVlWQUxVRV0sIE1PREVfUkVBRFdSSVRFLCAoW2Vtb2ppU3RvcmUsIG1ldGFTdG9yZV0sIHR4bikgPT4ge1xuICAgICAgbGV0IG9sZEVUYWc7XG4gICAgICBsZXQgb2xkVXJsO1xuICAgICAgbGV0IHRvZG8gPSAwO1xuXG4gICAgICBmdW5jdGlvbiBjaGVja0ZldGNoZWQgKCkge1xuICAgICAgICBpZiAoKyt0b2RvID09PSAyKSB7IC8vIDIgcmVxdWVzdHMgbWFkZVxuICAgICAgICAgIG9uRmV0Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uRmV0Y2hlZCAoKSB7XG4gICAgICAgIGlmIChvbGRFVGFnID09PSBlVGFnICYmIG9sZFVybCA9PT0gdXJsKSB7XG4gICAgICAgICAgLy8gY2hlY2sgYWdhaW4gd2l0aGluIHRoZSB0cmFuc2FjdGlvbiB0byBndWFyZCBhZ2FpbnN0IGNvbmN1cnJlbmN5LCBlLmcuIG11bHRpcGxlIGJyb3dzZXIgdGFic1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIGRlbGV0ZSBvbGQgZGF0YVxuICAgICAgICBlbW9qaVN0b3JlLmNsZWFyKCk7XG4gICAgICAgIC8vIGluc2VydCBuZXcgZGF0YVxuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhbnNmb3JtZWREYXRhKSB7XG4gICAgICAgICAgZW1vamlTdG9yZS5wdXQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgbWV0YVN0b3JlLnB1dChlVGFnLCBLRVlfRVRBRyk7XG4gICAgICAgIG1ldGFTdG9yZS5wdXQodXJsLCBLRVlfVVJMKTtcbiAgICAgICAgY29tbWl0KHR4bik7XG4gICAgICB9XG5cbiAgICAgIGdldElEQihtZXRhU3RvcmUsIEtFWV9FVEFHLCByZXN1bHQgPT4ge1xuICAgICAgICBvbGRFVGFnID0gcmVzdWx0O1xuICAgICAgICBjaGVja0ZldGNoZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBnZXRJREIobWV0YVN0b3JlLCBLRVlfVVJMLCByZXN1bHQgPT4ge1xuICAgICAgICBvbGRVcmwgPSByZXN1bHQ7XG4gICAgICAgIGNoZWNrRmV0Y2hlZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZmluYWxseSB7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlCeUdyb3VwIChkYiwgZ3JvdXApIHtcbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgU1RPUkVfRU1PSkksIE1PREVfUkVBRE9OTFksIChlbW9qaVN0b3JlLCB0eG4sIGNiKSA9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBJREJLZXlSYW5nZS5ib3VuZChbZ3JvdXAsIDBdLCBbZ3JvdXAgKyAxLCAwXSwgZmFsc2UsIHRydWUpO1xuICAgIGdldEFsbElEQihlbW9qaVN0b3JlLmluZGV4KElOREVYX0dST1VQX0FORF9PUkRFUiksIHJhbmdlLCBjYik7XG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEVtb2ppQnlTZWFyY2hRdWVyeSAoZGIsIHF1ZXJ5KSB7XG4gIGNvbnN0IHRva2VucyA9IG5vcm1hbGl6ZVRva2VucyhleHRyYWN0VG9rZW5zKHF1ZXJ5KSk7XG5cbiAgaWYgKCF0b2tlbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZXR1cm4gZGJQcm9taXNlKGRiLCBTVE9SRV9FTU9KSSwgTU9ERV9SRUFET05MWSwgKGVtb2ppU3RvcmUsIHR4biwgY2IpID0+IHtcbiAgICAvLyBnZXQgYWxsIHJlc3VsdHMgdGhhdCBjb250YWluIGFsbCB0b2tlbnMgKGkuZS4gYW4gQU5EIHF1ZXJ5KVxuICAgIGNvbnN0IGludGVybWVkaWF0ZVJlc3VsdHMgPSBbXTtcblxuICAgIGNvbnN0IGNoZWNrRG9uZSA9ICgpID0+IHtcbiAgICAgIGlmIChpbnRlcm1lZGlhdGVSZXN1bHRzLmxlbmd0aCA9PT0gdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICBvbkRvbmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25Eb25lID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGZpbmRDb21tb25NZW1iZXJzKGludGVybWVkaWF0ZVJlc3VsdHMsIF8gPT4gXy51bmljb2RlKTtcbiAgICAgIGNiKHJlc3VsdHMuc29ydCgoYSwgYikgPT4gYS5vcmRlciA8IGIub3JkZXIgPyAtMSA6IDEpKTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgY29uc3QgcmFuZ2UgPSBpID09PSB0b2tlbnMubGVuZ3RoIC0gMVxuICAgICAgICA/IElEQktleVJhbmdlLmJvdW5kKHRva2VuLCB0b2tlbiArICdcXHVmZmZmJywgZmFsc2UsIHRydWUpIC8vIHRyZWF0IGxhc3QgdG9rZW4gYXMgYSBwcmVmaXggc2VhcmNoXG4gICAgICAgIDogSURCS2V5UmFuZ2Uub25seSh0b2tlbik7IC8vIHRyZWF0IGFsbCBvdGhlciB0b2tlbnMgYXMgYW4gZXhhY3QgbWF0Y2hcbiAgICAgIGdldEFsbElEQihlbW9qaVN0b3JlLmluZGV4KElOREVYX1RPS0VOUyksIHJhbmdlLCByZXN1bHQgPT4ge1xuICAgICAgICBpbnRlcm1lZGlhdGVSZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pXG59XG5cbi8vIFRoaXMgY291bGQgaGF2ZSBiZWVuIGltcGxlbWVudGVkIGFzIGFuIElEQiBpbmRleCBvbiBzaG9ydGNvZGVzLCBidXQgaXQgc2VlbWVkIHdhc3RlZnVsIHRvIGRvIHRoYXRcbi8vIHdoZW4gd2UgY2FuIGFscmVhZHkgcXVlcnkgYnkgdG9rZW5zIGFuZCB0aGlzIHdpbGwgZ2l2ZSB1cyB3aGF0IHdlJ3JlIGxvb2tpbmcgZm9yIDk5LjklIG9mIHRoZSB0aW1lXG5hc3luYyBmdW5jdGlvbiBnZXRFbW9qaUJ5U2hvcnRjb2RlIChkYiwgc2hvcnRjb2RlKSB7XG4gIGNvbnN0IGVtb2ppcyA9IGF3YWl0IGdldEVtb2ppQnlTZWFyY2hRdWVyeShkYiwgc2hvcnRjb2RlKTtcblxuICAvLyBJbiB2ZXJ5IHJhcmUgY2FzZXMgKGUuZy4gdGhlIHNob3J0Y29kZSBcInZcIiBhcyBpbiBcInYgZm9yIHZpY3RvcnlcIiksIHdlIGNhbm5vdCBzZWFyY2ggYmVjYXVzZVxuICAvLyB0aGVyZSBhcmUgbm8gdXNhYmxlIHRva2VucyAodG9vIHNob3J0IGluIHRoaXMgY2FzZSkuIEluIHRoYXQgY2FzZSwgd2UgaGF2ZSB0byBkbyBhbiBpbmVmZmljaWVudFxuICAvLyBmdWxsLWRhdGFiYXNlIHNjYW4sIHdoaWNoIEkgYmVsaWV2ZSBpcyBhbiBhY2NlcHRhYmxlIHRyYWRlb2ZmIGZvciBub3QgaGF2aW5nIHRvIGhhdmUgYW4gZXh0cmFcbiAgLy8gaW5kZXggb24gc2hvcnRjb2Rlcy5cblxuICBpZiAoIWVtb2ppcy5sZW5ndGgpIHtcbiAgICBjb25zdCBwcmVkaWNhdGUgPSBfID0+ICgoXy5zaG9ydGNvZGVzIHx8IFtdKS5pbmNsdWRlcyhzaG9ydGNvZGUudG9Mb3dlckNhc2UoKSkpO1xuICAgIHJldHVybiAoYXdhaXQgZG9GdWxsRGF0YWJhc2VTY2FuRm9yU2luZ2xlUmVzdWx0KGRiLCBwcmVkaWNhdGUpKSB8fCBudWxsXG4gIH1cblxuICByZXR1cm4gZW1vamlzLmZpbHRlcihfID0+IHtcbiAgICBjb25zdCBsb3dlclNob3J0Y29kZXMgPSAoXy5zaG9ydGNvZGVzIHx8IFtdKS5tYXAoXyA9PiBfLnRvTG93ZXJDYXNlKCkpO1xuICAgIHJldHVybiBsb3dlclNob3J0Y29kZXMuaW5jbHVkZXMoc2hvcnRjb2RlLnRvTG93ZXJDYXNlKCkpXG4gIH0pWzBdIHx8IG51bGxcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlCeVVuaWNvZGUgKGRiLCB1bmljb2RlKSB7XG4gIHJldHVybiBkYlByb21pc2UoZGIsIFNUT1JFX0VNT0pJLCBNT0RFX1JFQURPTkxZLCAoZW1vamlTdG9yZSwgdHhuLCBjYikgPT4gKFxuICAgIGdldElEQihlbW9qaVN0b3JlLCB1bmljb2RlLCByZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gY2IocmVzdWx0KVxuICAgICAgfVxuICAgICAgZ2V0SURCKGVtb2ppU3RvcmUuaW5kZXgoSU5ERVhfU0tJTl9VTklDT0RFKSwgdW5pY29kZSwgcmVzdWx0ID0+IGNiKHJlc3VsdCB8fCBudWxsKSk7XG4gICAgfSlcbiAgKSlcbn1cblxuZnVuY3Rpb24gZ2V0IChkYiwgc3RvcmVOYW1lLCBrZXkpIHtcbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgc3RvcmVOYW1lLCBNT0RFX1JFQURPTkxZLCAoc3RvcmUsIHR4biwgY2IpID0+IChcbiAgICBnZXRJREIoc3RvcmUsIGtleSwgY2IpXG4gICkpXG59XG5cbmZ1bmN0aW9uIHNldCAoZGIsIHN0b3JlTmFtZSwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGJQcm9taXNlKGRiLCBzdG9yZU5hbWUsIE1PREVfUkVBRFdSSVRFLCAoc3RvcmUsIHR4bikgPT4ge1xuICAgIHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcbiAgICBjb21taXQodHhuKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50RmF2b3JpdGVFbW9qaUNvdW50IChkYiwgdW5pY29kZSkge1xuICByZXR1cm4gZGJQcm9taXNlKGRiLCBTVE9SRV9GQVZPUklURVMsIE1PREVfUkVBRFdSSVRFLCAoc3RvcmUsIHR4bikgPT4gKFxuICAgIGdldElEQihzdG9yZSwgdW5pY29kZSwgcmVzdWx0ID0+IHtcbiAgICAgIHN0b3JlLnB1dCgocmVzdWx0IHx8IDApICsgMSwgdW5pY29kZSk7XG4gICAgICBjb21taXQodHhuKTtcbiAgICB9KVxuICApKVxufVxuXG5mdW5jdGlvbiBnZXRUb3BGYXZvcml0ZUVtb2ppIChkYiwgY3VzdG9tRW1vamlJbmRleCwgbGltaXQpIHtcbiAgaWYgKGxpbWl0ID09PSAwKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgW1NUT1JFX0ZBVk9SSVRFUywgU1RPUkVfRU1PSkldLCBNT0RFX1JFQURPTkxZLCAoW2Zhdm9yaXRlc1N0b3JlLCBlbW9qaVN0b3JlXSwgdHhuLCBjYikgPT4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBmYXZvcml0ZXNTdG9yZS5pbmRleChJTkRFWF9DT1VOVCkub3BlbkN1cnNvcih1bmRlZmluZWQsICdwcmV2Jykub25zdWNjZXNzID0gZSA9PiB7XG4gICAgICBjb25zdCBjdXJzb3IgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICBpZiAoIWN1cnNvcikgeyAvLyBubyBtb3JlIHJlc3VsdHNcbiAgICAgICAgcmV0dXJuIGNiKHJlc3VsdHMpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFJlc3VsdCAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IGxpbWl0KSB7XG4gICAgICAgICAgcmV0dXJuIGNiKHJlc3VsdHMpIC8vIGRvbmUsIHJlYWNoZWQgdGhlIGxpbWl0XG4gICAgICAgIH1cbiAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVuaWNvZGVPck5hbWUgPSBjdXJzb3IucHJpbWFyeUtleTtcbiAgICAgIGNvbnN0IGN1c3RvbSA9IGN1c3RvbUVtb2ppSW5kZXguYnlOYW1lKHVuaWNvZGVPck5hbWUpO1xuICAgICAgaWYgKGN1c3RvbSkge1xuICAgICAgICByZXR1cm4gYWRkUmVzdWx0KGN1c3RvbSlcbiAgICAgIH1cbiAgICAgIC8vIFRoaXMgY291bGQgYmUgZG9uZSBpbiBwYXJhbGxlbCAoaS5lLiBtYWtlIHRoZSBjdXJzb3IgYW5kIHRoZSBnZXQoKXMgcGFyYWxsZWxpemVkKSxcbiAgICAgIC8vIGJ1dCBteSB0ZXN0aW5nIHN1Z2dlc3RzIGl0J3Mgbm90IGFjdHVhbGx5IGZhc3Rlci5cbiAgICAgIGdldElEQihlbW9qaVN0b3JlLCB1bmljb2RlT3JOYW1lLCBlbW9qaSA9PiB7XG4gICAgICAgIGlmIChlbW9qaSkge1xuICAgICAgICAgIHJldHVybiBhZGRSZXN1bHQoZW1vamkpXG4gICAgICAgIH1cbiAgICAgICAgLy8gZW1vamkgbm90IGZvdW5kIHNvbWVob3csIGlnbm9yZSAobWF5IGhhcHBlbiBpZiBjdXN0b20gZW1vamkgY2hhbmdlKVxuICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pXG59XG5cbi8vIHRyaWUgZGF0YSBzdHJ1Y3R1cmUgZm9yIHByZWZpeCBzZWFyY2hlc1xuLy8gbG9vc2VseSBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbm9sYW5sYXdzb24vc3Vic3RyaW5nLXRyaWVcblxuY29uc3QgQ09EQV9NQVJLRVIgPSAnJzsgLy8gbWFya3MgdGhlIGVuZCBvZiB0aGUgc3RyaW5nXG5cbmZ1bmN0aW9uIHRyaWUgKGFyciwgaXRlbVRvVG9rZW5zKSB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgIGNvbnN0IHRva2VucyA9IGl0ZW1Ub1Rva2VucyhpdGVtKTtcbiAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xuICAgICAgbGV0IGN1cnJlbnRNYXAgPSBtYXA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSB0b2tlbi5jaGFyQXQoaSk7XG4gICAgICAgIGxldCBuZXh0TWFwID0gY3VycmVudE1hcC5nZXQoY2hhcik7XG4gICAgICAgIGlmICghbmV4dE1hcCkge1xuICAgICAgICAgIG5leHRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgY3VycmVudE1hcC5zZXQoY2hhciwgbmV4dE1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1hcCA9IG5leHRNYXA7XG4gICAgICB9XG4gICAgICBsZXQgdmFsdWVzQXRDb2RhID0gY3VycmVudE1hcC5nZXQoQ09EQV9NQVJLRVIpO1xuICAgICAgaWYgKCF2YWx1ZXNBdENvZGEpIHtcbiAgICAgICAgdmFsdWVzQXRDb2RhID0gW107XG4gICAgICAgIGN1cnJlbnRNYXAuc2V0KENPREFfTUFSS0VSLCB2YWx1ZXNBdENvZGEpO1xuICAgICAgfVxuICAgICAgdmFsdWVzQXRDb2RhLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2VhcmNoID0gKHF1ZXJ5LCBleGFjdCkgPT4ge1xuICAgIGxldCBjdXJyZW50TWFwID0gbWFwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSBxdWVyeS5jaGFyQXQoaSk7XG4gICAgICBjb25zdCBuZXh0TWFwID0gY3VycmVudE1hcC5nZXQoY2hhcik7XG4gICAgICBpZiAobmV4dE1hcCkge1xuICAgICAgICBjdXJyZW50TWFwID0gbmV4dE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChleGFjdCkge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGN1cnJlbnRNYXAuZ2V0KENPREFfTUFSS0VSKTtcbiAgICAgIHJldHVybiByZXN1bHRzIHx8IFtdXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIC8vIHRyYXZlcnNlXG4gICAgY29uc3QgcXVldWUgPSBbY3VycmVudE1hcF07XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgY29uc3QgY3VycmVudE1hcCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBjb25zdCBlbnRyaWVzU29ydGVkQnlLZXkgPSBbLi4uY3VycmVudE1hcC5lbnRyaWVzKCldLnNvcnQoKGEsIGIpID0+IGFbMF0gPCBiWzBdID8gLTEgOiAxKTtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGVudHJpZXNTb3J0ZWRCeUtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSBDT0RBX01BUktFUikgeyAvLyBDT0RBX01BUktFUiBhbHdheXMgY29tZXMgZmlyc3Q7IGl0J3MgdGhlIGVtcHR5IHN0cmluZ1xuICAgICAgICAgIHJlc3VsdHMucHVzaCguLi52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVldWUucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfTtcblxuICByZXR1cm4gc2VhcmNoXG59XG5cbmNvbnN0IHJlcXVpcmVkS2V5cyQxID0gW1xuICAnbmFtZScsXG4gICd1cmwnXG5dO1xuXG5mdW5jdGlvbiBhc3NlcnRDdXN0b21FbW9qaXMgKGN1c3RvbUVtb2ppcykge1xuICBjb25zdCBpc0FycmF5ID0gY3VzdG9tRW1vamlzICYmIEFycmF5LmlzQXJyYXkoY3VzdG9tRW1vamlzKTtcbiAgY29uc3QgZmlyc3RJdGVtSXNGYXVsdHkgPSBpc0FycmF5ICYmXG4gICAgY3VzdG9tRW1vamlzLmxlbmd0aCAmJlxuICAgICghY3VzdG9tRW1vamlzWzBdIHx8IHJlcXVpcmVkS2V5cyQxLnNvbWUoa2V5ID0+ICEoa2V5IGluIGN1c3RvbUVtb2ppc1swXSkpKTtcbiAgaWYgKCFpc0FycmF5IHx8IGZpcnN0SXRlbUlzRmF1bHR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gZW1vamlzIGFyZSBpbiB0aGUgd3JvbmcgZm9ybWF0JylcbiAgfVxufVxuXG5mdW5jdGlvbiBjdXN0b21FbW9qaUluZGV4IChjdXN0b21FbW9qaXMpIHtcbiAgYXNzZXJ0Q3VzdG9tRW1vamlzKGN1c3RvbUVtb2ppcyk7XG5cbiAgY29uc3Qgc29ydEJ5TmFtZSA9IChhLCBiKSA9PiBhLm5hbWUudG9Mb3dlckNhc2UoKSA8IGIubmFtZS50b0xvd2VyQ2FzZSgpID8gLTEgOiAxO1xuXG4gIC8vXG4gIC8vIGFsbCgpXG4gIC8vXG4gIGNvbnN0IGFsbCA9IGN1c3RvbUVtb2ppcy5zb3J0KHNvcnRCeU5hbWUpO1xuXG4gIC8vXG4gIC8vIHNlYXJjaCgpXG4gIC8vXG4gIGNvbnN0IGVtb2ppVG9Ub2tlbnMgPSBlbW9qaSA9PiB7XG4gICAgY29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuICAgIGlmIChlbW9qaS5zaG9ydGNvZGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHNob3J0Y29kZSBvZiBlbW9qaS5zaG9ydGNvZGVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgdG9rZW4gb2YgZXh0cmFjdFRva2VucyhzaG9ydGNvZGUpKSB7XG4gICAgICAgICAgc2V0LmFkZCh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNldFxuICB9O1xuICBjb25zdCBzZWFyY2hUcmllID0gdHJpZShjdXN0b21FbW9qaXMsIGVtb2ppVG9Ub2tlbnMpO1xuICBjb25zdCBzZWFyY2hCeUV4YWN0TWF0Y2ggPSBfID0+IHNlYXJjaFRyaWUoXywgdHJ1ZSk7XG4gIGNvbnN0IHNlYXJjaEJ5UHJlZml4ID0gXyA9PiBzZWFyY2hUcmllKF8sIGZhbHNlKTtcblxuICAvLyBTZWFyY2ggYnkgcXVlcnkgZm9yIGN1c3RvbSBlbW9qaS4gU2ltaWxhciB0byBob3cgd2UgZG8gdGhpcyBpbiBJREIsIHRoZSBsYXN0IHRva2VuXG4gIC8vIGlzIHRyZWF0ZWQgYXMgYSBwcmVmaXggc2VhcmNoLCBidXQgZXZlcnkgb3RoZXIgb25lIGlzIHRyZWF0ZWQgYXMgYW4gZXhhY3QgbWF0Y2guXG4gIC8vIFRoZW4gd2UgQU5EIHRoZSByZXN1bHRzIHRvZ2V0aGVyXG4gIGNvbnN0IHNlYXJjaCA9IHF1ZXJ5ID0+IHtcbiAgICBjb25zdCB0b2tlbnMgPSBleHRyYWN0VG9rZW5zKHF1ZXJ5KTtcbiAgICBjb25zdCBpbnRlcm1lZGlhdGVSZXN1bHRzID0gdG9rZW5zLm1hcCgodG9rZW4sIGkpID0+IChcbiAgICAgIChpIDwgdG9rZW5zLmxlbmd0aCAtIDEgPyBzZWFyY2hCeUV4YWN0TWF0Y2ggOiBzZWFyY2hCeVByZWZpeCkodG9rZW4pXG4gICAgKSk7XG4gICAgcmV0dXJuIGZpbmRDb21tb25NZW1iZXJzKGludGVybWVkaWF0ZVJlc3VsdHMsIF8gPT4gXy5uYW1lKS5zb3J0KHNvcnRCeU5hbWUpXG4gIH07XG5cbiAgLy9cbiAgLy8gYnlTaG9ydGNvZGUsIGJ5TmFtZVxuICAvL1xuICBjb25zdCBzaG9ydGNvZGVUb0Vtb2ppID0gbmV3IE1hcCgpO1xuICBjb25zdCBuYW1lVG9FbW9qaSA9IG5ldyBNYXAoKTtcbiAgZm9yIChjb25zdCBjdXN0b21FbW9qaSBvZiBjdXN0b21FbW9qaXMpIHtcbiAgICBuYW1lVG9FbW9qaS5zZXQoY3VzdG9tRW1vamkubmFtZS50b0xvd2VyQ2FzZSgpLCBjdXN0b21FbW9qaSk7XG4gICAgZm9yIChjb25zdCBzaG9ydGNvZGUgb2YgKGN1c3RvbUVtb2ppLnNob3J0Y29kZXMgfHwgW10pKSB7XG4gICAgICBzaG9ydGNvZGVUb0Vtb2ppLnNldChzaG9ydGNvZGUudG9Mb3dlckNhc2UoKSwgY3VzdG9tRW1vamkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJ5U2hvcnRjb2RlID0gc2hvcnRjb2RlID0+IHNob3J0Y29kZVRvRW1vamkuZ2V0KHNob3J0Y29kZS50b0xvd2VyQ2FzZSgpKTtcbiAgY29uc3QgYnlOYW1lID0gbmFtZSA9PiBuYW1lVG9FbW9qaS5nZXQobmFtZS50b0xvd2VyQ2FzZSgpKTtcblxuICByZXR1cm4ge1xuICAgIGFsbCxcbiAgICBzZWFyY2gsXG4gICAgYnlTaG9ydGNvZGUsXG4gICAgYnlOYW1lXG4gIH1cbn1cblxuY29uc3QgaXNGaXJlZm94Q29udGVudFNjcmlwdCA9IHR5cGVvZiB3cmFwcGVkSlNPYmplY3QgIT09ICd1bmRlZmluZWQnO1xuXG4vLyByZW1vdmUgc29tZSBpbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLCBpLmUuIHRoZSBcInRva2Vuc1wiIGFycmF5IG9uIHRoZSBlbW9qaSBvYmplY3Rcbi8vIGVzc2VudGlhbGx5LCBjb252ZXJ0IHRoZSBlbW9qaSBmcm9tIHRoZSB2ZXJzaW9uIHN0b3JlZCBpbiBJREIgdG8gdGhlIHZlcnNpb24gdXNlZCBpbi1tZW1vcnlcbmZ1bmN0aW9uIGNsZWFuRW1vamkgKGVtb2ppKSB7XG4gIGlmICghZW1vamkpIHtcbiAgICByZXR1cm4gZW1vamlcbiAgfVxuICAvLyBpZiBpbnNpZGUgYSBGaXJlZm94IGNvbnRlbnQgc2NyaXB0LCBuZWVkIHRvIGNsb25lIHRoZSBlbW9qaSBvYmplY3QgdG8gcHJldmVudCBGaXJlZm94IGZyb20gY29tcGxhaW5pbmcgYWJvdXRcbiAgLy8gY3Jvc3Mtb3JpZ2luIG9iamVjdC4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbm9sYW5sYXdzb24vZW1vamktcGlja2VyLWVsZW1lbnQvaXNzdWVzLzM1NlxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzRmlyZWZveENvbnRlbnRTY3JpcHQpIHtcbiAgICBlbW9qaSA9IHN0cnVjdHVyZWRDbG9uZShlbW9qaSk7XG4gIH1cbiAgZGVsZXRlIGVtb2ppLnRva2VucztcbiAgaWYgKGVtb2ppLnNraW5Ub25lcykge1xuICAgIGNvbnN0IGxlbiA9IGVtb2ppLnNraW5Ub25lcy5sZW5ndGg7XG4gICAgZW1vamkuc2tpbnMgPSBBcnJheShsZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGVtb2ppLnNraW5zW2ldID0ge1xuICAgICAgICB0b25lOiBlbW9qaS5za2luVG9uZXNbaV0sXG4gICAgICAgIHVuaWNvZGU6IGVtb2ppLnNraW5Vbmljb2Rlc1tpXSxcbiAgICAgICAgdmVyc2lvbjogZW1vamkuc2tpblZlcnNpb25zW2ldXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWxldGUgZW1vamkuc2tpblRvbmVzO1xuICAgIGRlbGV0ZSBlbW9qaS5za2luVW5pY29kZXM7XG4gICAgZGVsZXRlIGVtb2ppLnNraW5WZXJzaW9ucztcbiAgfVxuICByZXR1cm4gZW1vamlcbn1cblxuZnVuY3Rpb24gd2FybkVUYWcgKGVUYWcpIHtcbiAgaWYgKCFlVGFnKSB7XG4gICAgY29uc29sZS53YXJuKCdlbW9qaS1waWNrZXItZWxlbWVudCBpcyBtb3JlIGVmZmljaWVudCBpZiB0aGUgZGF0YVNvdXJjZSBzZXJ2ZXIgZXhwb3NlcyBhbiBFVGFnIGhlYWRlci4nKTtcbiAgfVxufVxuXG5jb25zdCByZXF1aXJlZEtleXMgPSBbXG4gICdhbm5vdGF0aW9uJyxcbiAgJ2Vtb2ppJyxcbiAgJ2dyb3VwJyxcbiAgJ29yZGVyJyxcbiAgJ3ZlcnNpb24nXG5dO1xuXG5mdW5jdGlvbiBhc3NlcnRFbW9qaURhdGEgKGVtb2ppRGF0YSkge1xuICBpZiAoIWVtb2ppRGF0YSB8fFxuICAgICFBcnJheS5pc0FycmF5KGVtb2ppRGF0YSkgfHxcbiAgICAhZW1vamlEYXRhWzBdIHx8XG4gICAgKHR5cGVvZiBlbW9qaURhdGFbMF0gIT09ICdvYmplY3QnKSB8fFxuICAgIHJlcXVpcmVkS2V5cy5zb21lKGtleSA9PiAoIShrZXkgaW4gZW1vamlEYXRhWzBdKSkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFbW9qaSBkYXRhIGlzIGluIHRoZSB3cm9uZyBmb3JtYXQnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFN0YXR1cyAocmVzcG9uc2UsIGRhdGFTb3VyY2UpIHtcbiAgaWYgKE1hdGguZmxvb3IocmVzcG9uc2Uuc3RhdHVzIC8gMTAwKSAhPT0gMikge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoOiAnICsgZGF0YVNvdXJjZSArICc6ICAnICsgcmVzcG9uc2Uuc3RhdHVzKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEVUYWcgKGRhdGFTb3VyY2UpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhU291cmNlLCB7IG1ldGhvZDogJ0hFQUQnIH0pO1xuICBhc3NlcnRTdGF0dXMocmVzcG9uc2UsIGRhdGFTb3VyY2UpO1xuICBjb25zdCBlVGFnID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2V0YWcnKTtcbiAgd2FybkVUYWcoZVRhZyk7XG4gIHJldHVybiBlVGFnXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEVUYWdBbmREYXRhIChkYXRhU291cmNlKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVNvdXJjZSk7XG4gIGFzc2VydFN0YXR1cyhyZXNwb25zZSwgZGF0YVNvdXJjZSk7XG4gIGNvbnN0IGVUYWcgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnZXRhZycpO1xuICB3YXJuRVRhZyhlVGFnKTtcbiAgY29uc3QgZW1vamlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBhc3NlcnRFbW9qaURhdGEoZW1vamlEYXRhKTtcbiAgcmV0dXJuIFtlVGFnLCBlbW9qaURhdGFdXG59XG5cbi8vIFRPRE86IGluY2x1ZGluZyB0aGVzZSBpbiBibG9iLXV0aWwudHMgY2F1c2VzIHR5cGVkb2MgdG8gZ2VuZXJhdGUgZG9jcyBmb3IgdGhlbSxcbi8vIGV2ZW4gd2l0aCAtLWV4Y2x1ZGVQcml2YXRlIFx1MDBBRlxcXyhcdTMwQzQpXy9cdTAwQUZcbi8qKiBAcHJpdmF0ZSAqL1xuLyoqXG4gKiBDb252ZXJ0IGFuIGBBcnJheUJ1ZmZlcmAgdG8gYSBiaW5hcnkgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciBteVN0cmluZyA9IGJsb2JVdGlsLmFycmF5QnVmZmVyVG9CaW5hcnlTdHJpbmcoYXJyYXlCdWZmKVxuICogYGBgXG4gKlxuICogQHBhcmFtIGJ1ZmZlciAtIGFycmF5IGJ1ZmZlclxuICogQHJldHVybnMgYmluYXJ5IHN0cmluZ1xuICovXG5mdW5jdGlvbiBhcnJheUJ1ZmZlclRvQmluYXJ5U3RyaW5nKGJ1ZmZlcikge1xuICAgIHZhciBiaW5hcnkgPSAnJztcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIHZhciBsZW5ndGggPSBieXRlcy5ieXRlTGVuZ3RoO1xuICAgIHZhciBpID0gLTE7XG4gICAgd2hpbGUgKCsraSA8IGxlbmd0aCkge1xuICAgICAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBiaW5hcnk7XG59XG4vKipcbiAqIENvbnZlcnQgYSBiaW5hcnkgc3RyaW5nIHRvIGFuIGBBcnJheUJ1ZmZlcmAuXG4gKlxuICogYGBganNcbiAqIHZhciBteUJ1ZmZlciA9IGJsb2JVdGlsLmJpbmFyeVN0cmluZ1RvQXJyYXlCdWZmZXIoYmluYXJ5U3RyaW5nKVxuICogYGBgXG4gKlxuICogQHBhcmFtIGJpbmFyeSAtIGJpbmFyeSBzdHJpbmdcbiAqIEByZXR1cm5zIGFycmF5IGJ1ZmZlclxuICovXG5mdW5jdGlvbiBiaW5hcnlTdHJpbmdUb0FycmF5QnVmZmVyKGJpbmFyeSkge1xuICAgIHZhciBsZW5ndGggPSBiaW5hcnkubGVuZ3RoO1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIobGVuZ3RoKTtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICB2YXIgaSA9IC0xO1xuICAgIHdoaWxlICgrK2kgPCBsZW5ndGgpIHtcbiAgICAgICAgYXJyW2ldID0gYmluYXJ5LmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5cbi8vIGdlbmVyYXRlIGEgY2hlY2tzdW0gYmFzZWQgb24gdGhlIHN0cmluZ2lmaWVkIEpTT05cbmFzeW5jIGZ1bmN0aW9uIGpzb25DaGVja3N1bSAob2JqZWN0KSB7XG4gIGNvbnN0IGluU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KTtcbiAgbGV0IGluQnVmZmVyID0gYmluYXJ5U3RyaW5nVG9BcnJheUJ1ZmZlcihpblN0cmluZyk7XG5cbiAgLy8gdGhpcyBkb2VzIG5vdCBuZWVkIHRvIGJlIGNyeXB0b2dyYXBoaWNhbGx5IHNlY3VyZSwgU0hBLTEgaXMgZmluZVxuICBjb25zdCBvdXRCdWZmZXIgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdCgnU0hBLTEnLCBpbkJ1ZmZlcik7XG4gIGNvbnN0IG91dEJpblN0cmluZyA9IGFycmF5QnVmZmVyVG9CaW5hcnlTdHJpbmcob3V0QnVmZmVyKTtcbiAgY29uc3QgcmVzID0gYnRvYShvdXRCaW5TdHJpbmcpO1xuICByZXR1cm4gcmVzXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvQ2hlY2tGb3JVcGRhdGVzIChkYiwgZGF0YVNvdXJjZSkge1xuICAvLyBqdXN0IGRvIGEgc2ltcGxlIEhFQUQgcmVxdWVzdCBmaXJzdCB0byBzZWUgaWYgdGhlIGVUYWdzIG1hdGNoXG4gIGxldCBlbW9qaURhdGE7XG4gIGxldCBlVGFnID0gYXdhaXQgZ2V0RVRhZyhkYXRhU291cmNlKTtcbiAgaWYgKCFlVGFnKSB7IC8vIHdvcmsgYXJvdW5kIGxhY2sgb2YgRVRhZy9BY2Nlc3MtQ29udHJvbC1FeHBvc2UtSGVhZGVyc1xuICAgIGNvbnN0IGVUYWdBbmREYXRhID0gYXdhaXQgZ2V0RVRhZ0FuZERhdGEoZGF0YVNvdXJjZSk7XG4gICAgZVRhZyA9IGVUYWdBbmREYXRhWzBdO1xuICAgIGVtb2ppRGF0YSA9IGVUYWdBbmREYXRhWzFdO1xuICAgIGlmICghZVRhZykge1xuICAgICAgZVRhZyA9IGF3YWl0IGpzb25DaGVja3N1bShlbW9qaURhdGEpO1xuICAgIH1cbiAgfVxuICBpZiAoYXdhaXQgaGFzRGF0YShkYiwgZGF0YVNvdXJjZSwgZVRhZykpIDsgZWxzZSB7XG4gICAgaWYgKCFlbW9qaURhdGEpIHtcbiAgICAgIGNvbnN0IGVUYWdBbmREYXRhID0gYXdhaXQgZ2V0RVRhZ0FuZERhdGEoZGF0YVNvdXJjZSk7XG4gICAgICBlbW9qaURhdGEgPSBlVGFnQW5kRGF0YVsxXTtcbiAgICB9XG4gICAgYXdhaXQgbG9hZERhdGEoZGIsIGVtb2ppRGF0YSwgZGF0YVNvdXJjZSwgZVRhZyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGFGb3JGaXJzdFRpbWUgKGRiLCBkYXRhU291cmNlKSB7XG4gIGxldCBbZVRhZywgZW1vamlEYXRhXSA9IGF3YWl0IGdldEVUYWdBbmREYXRhKGRhdGFTb3VyY2UpO1xuICBpZiAoIWVUYWcpIHtcbiAgICAvLyBIYW5kbGUgbGFjayBvZiBzdXBwb3J0IGZvciBFVGFnIG9yIEFjY2Vzcy1Db250cm9sLUV4cG9zZS1IZWFkZXJzXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9IZWFkZXJzL0FjY2Vzcy1Db250cm9sLUV4cG9zZS1IZWFkZXJzI0Jyb3dzZXJfY29tcGF0aWJpbGl0eVxuICAgIGVUYWcgPSBhd2FpdCBqc29uQ2hlY2tzdW0oZW1vamlEYXRhKTtcbiAgfVxuXG4gIGF3YWl0IGxvYWREYXRhKGRiLCBlbW9qaURhdGEsIGRhdGFTb3VyY2UsIGVUYWcpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja0ZvclVwZGF0ZXMgKGRiLCBkYXRhU291cmNlKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZG9DaGVja0ZvclVwZGF0ZXMoZGIsIGRhdGFTb3VyY2UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBDaGVja2luZyBmb3IgdXBkYXRlcyBpcyBub3QgYSBjcml0aWNhbCBvcGVyYXRpb24sIGFuZCBpdCBjYW4gZmFpbCBpZiBlLmcuIHRoZSBwaWNrZXIgaXMgcXVpY2tseSByZW1vdmVkIGFuZFxuICAgIC8vIHJlLWFkZGVkIHRvIHRoZSBET00uIEluIHRob3NlIGNhc2VzLCB3ZSBtYXkgZ2V0IGFuIEluZGV4ZWREQiBJbnZhbGlkU3RhdGVFcnJvciBiZWNhdXNlIHdlIGFyZSBhdHRlbXB0aW5nIHRvIGNsb3NlXG4gICAgLy8gdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb24sIHBvc3NpYmx5IHdoaWxlIGFub3RoZXIgcmVxdWVzdCBpcyBpbmZsaWdodC4gU28gdGhlcmUncyBlZmZlY3RpdmVseSBubyB3YXkgdG8gcHJldmVudFxuICAgIC8vIEludmFsaWRTdGF0ZUVycm9ycyB1bmxlc3Mgd2Ugd2VyZSB0byBjYXJlZnVsbHkgc2VxdWVuY2Ugb3VyIEluZGV4ZWREQiBvcGVyYXRpb25zLiBNdWNoIG1vcmUgc2ltcGx5LCB3ZSBjYW4ganVzdFxuICAgIC8vIGlnbm9yZSBJbmRleGVkREIgSW52YWxpZFN0YXRlRXJyb3JzIGhlcmUgYW5kIGdpdmUgdXNlcnMgb25lIGxlc3MgdXNlbGVzcyBlcnJvciBtZXNzYWdlIGluIHRoZWlyIGNvbnNvbGUuXG4gICAgaWYgKGVyci5uYW1lICE9PSAnSW52YWxpZFN0YXRlRXJyb3InKSB7XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRGF0YWJhc2Uge1xuICBjb25zdHJ1Y3RvciAoeyBkYXRhU291cmNlID0gREVGQVVMVF9EQVRBX1NPVVJDRSwgbG9jYWxlID0gREVGQVVMVF9MT0NBTEUsIGN1c3RvbUVtb2ppID0gW10gfSA9IHt9KSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICB0aGlzLl9kYk5hbWUgPSBgZW1vamktcGlja2VyLWVsZW1lbnQtJHt0aGlzLmxvY2FsZX1gO1xuICAgIHRoaXMuX2RiID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2xhenlVcGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fY3VzdG9tID0gY3VzdG9tRW1vamlJbmRleChjdXN0b21FbW9qaSk7XG5cbiAgICB0aGlzLl9jbGVhciA9IHRoaXMuX2NsZWFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcmVhZHkgPSB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBhc3luYyBfaW5pdCAoKSB7XG4gICAgY29uc3QgZGIgPSB0aGlzLl9kYiA9IGF3YWl0IG9wZW5EYXRhYmFzZSh0aGlzLl9kYk5hbWUpO1xuXG4gICAgYWRkT25DbG9zZUxpc3RlbmVyKHRoaXMuX2RiTmFtZSwgdGhpcy5fY2xlYXIpO1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgY29uc3QgZW1wdHkgPSBhd2FpdCBpc0VtcHR5KGRiKTtcblxuICAgIGlmIChlbXB0eSkge1xuICAgICAgYXdhaXQgbG9hZERhdGFGb3JGaXJzdFRpbWUoZGIsIGRhdGFTb3VyY2UpO1xuICAgIH0gZWxzZSB7IC8vIG9mZmxpbmUtZmlyc3QgLSBkbyBhbiB1cGRhdGUgYXN5bmNocm9ub3VzbHlcbiAgICAgIHRoaXMuX2xhenlVcGRhdGUgPSBjaGVja0ZvclVwZGF0ZXMoZGIsIGRhdGFTb3VyY2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlYWR5ICgpIHtcbiAgICBjb25zdCBjaGVja1JlYWR5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9yZWFkeSkge1xuICAgICAgICB0aGlzLl9yZWFkeSA9IHRoaXMuX2luaXQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9yZWFkeVxuICAgIH07XG4gICAgYXdhaXQgY2hlY2tSZWFkeSgpO1xuICAgIC8vIFRoZXJlJ3MgYSBwb3NzaWJpbGl0eSBvZiBhIHJhY2UgY29uZGl0aW9uIHdoZXJlIHRoZSBlbGVtZW50IGdldHMgYWRkZWQsIHJlbW92ZWQsIGFuZCB0aGVuIGFkZGVkIGFnYWluXG4gICAgLy8gd2l0aCBhIHBhcnRpY3VsYXIgdGltaW5nLCB3aGljaCB3b3VsZCBzZXQgdGhlIF9kYiB0byB1bmRlZmluZWQuXG4gICAgLy8gV2UgKmNvdWxkKiBkbyBhIHdoaWxlIGxvb3AgaGVyZSwgYnV0IHRoYXQgc2VlbXMgZXhjZXNzaXZlIGFuZCBjb3VsZCBsZWFkIHRvIGFuIGluZmluaXRlIGxvb3AuXG4gICAgaWYgKCF0aGlzLl9kYikge1xuICAgICAgYXdhaXQgY2hlY2tSZWFkeSgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldEVtb2ppQnlHcm91cCAoZ3JvdXApIHtcbiAgICBhc3NlcnROdW1iZXIoZ3JvdXApO1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICByZXR1cm4gdW5pcUVtb2ppKGF3YWl0IGdldEVtb2ppQnlHcm91cCh0aGlzLl9kYiwgZ3JvdXApKS5tYXAoY2xlYW5FbW9qaSlcbiAgfVxuXG4gIGFzeW5jIGdldEVtb2ppQnlTZWFyY2hRdWVyeSAocXVlcnkpIHtcbiAgICBhc3NlcnROb25FbXB0eVN0cmluZyhxdWVyeSk7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIGNvbnN0IGN1c3RvbXMgPSB0aGlzLl9jdXN0b20uc2VhcmNoKHF1ZXJ5KTtcbiAgICBjb25zdCBuYXRpdmVzID0gdW5pcUVtb2ppKGF3YWl0IGdldEVtb2ppQnlTZWFyY2hRdWVyeSh0aGlzLl9kYiwgcXVlcnkpKS5tYXAoY2xlYW5FbW9qaSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLmN1c3RvbXMsXG4gICAgICAuLi5uYXRpdmVzXG4gICAgXVxuICB9XG5cbiAgYXN5bmMgZ2V0RW1vamlCeVNob3J0Y29kZSAoc2hvcnRjb2RlKSB7XG4gICAgYXNzZXJ0Tm9uRW1wdHlTdHJpbmcoc2hvcnRjb2RlKTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgY29uc3QgY3VzdG9tID0gdGhpcy5fY3VzdG9tLmJ5U2hvcnRjb2RlKHNob3J0Y29kZSk7XG4gICAgaWYgKGN1c3RvbSkge1xuICAgICAgcmV0dXJuIGN1c3RvbVxuICAgIH1cbiAgICByZXR1cm4gY2xlYW5FbW9qaShhd2FpdCBnZXRFbW9qaUJ5U2hvcnRjb2RlKHRoaXMuX2RiLCBzaG9ydGNvZGUpKVxuICB9XG5cbiAgYXN5bmMgZ2V0RW1vamlCeVVuaWNvZGVPck5hbWUgKHVuaWNvZGVPck5hbWUpIHtcbiAgICBhc3NlcnROb25FbXB0eVN0cmluZyh1bmljb2RlT3JOYW1lKTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgY29uc3QgY3VzdG9tID0gdGhpcy5fY3VzdG9tLmJ5TmFtZSh1bmljb2RlT3JOYW1lKTtcbiAgICBpZiAoY3VzdG9tKSB7XG4gICAgICByZXR1cm4gY3VzdG9tXG4gICAgfVxuICAgIHJldHVybiBjbGVhbkVtb2ppKGF3YWl0IGdldEVtb2ppQnlVbmljb2RlKHRoaXMuX2RiLCB1bmljb2RlT3JOYW1lKSlcbiAgfVxuXG4gIGFzeW5jIGdldFByZWZlcnJlZFNraW5Ub25lICgpIHtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgcmV0dXJuIChhd2FpdCBnZXQodGhpcy5fZGIsIFNUT1JFX0tFWVZBTFVFLCBLRVlfUFJFRkVSUkVEX1NLSU5UT05FKSkgfHwgMFxuICB9XG5cbiAgYXN5bmMgc2V0UHJlZmVycmVkU2tpblRvbmUgKHNraW5Ub25lKSB7XG4gICAgYXNzZXJ0TnVtYmVyKHNraW5Ub25lKTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgcmV0dXJuIHNldCh0aGlzLl9kYiwgU1RPUkVfS0VZVkFMVUUsIEtFWV9QUkVGRVJSRURfU0tJTlRPTkUsIHNraW5Ub25lKVxuICB9XG5cbiAgYXN5bmMgaW5jcmVtZW50RmF2b3JpdGVFbW9qaUNvdW50ICh1bmljb2RlT3JOYW1lKSB7XG4gICAgYXNzZXJ0Tm9uRW1wdHlTdHJpbmcodW5pY29kZU9yTmFtZSk7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIHJldHVybiBpbmNyZW1lbnRGYXZvcml0ZUVtb2ppQ291bnQodGhpcy5fZGIsIHVuaWNvZGVPck5hbWUpXG4gIH1cblxuICBhc3luYyBnZXRUb3BGYXZvcml0ZUVtb2ppIChsaW1pdCkge1xuICAgIGFzc2VydE51bWJlcihsaW1pdCk7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIHJldHVybiAoYXdhaXQgZ2V0VG9wRmF2b3JpdGVFbW9qaSh0aGlzLl9kYiwgdGhpcy5fY3VzdG9tLCBsaW1pdCkpLm1hcChjbGVhbkVtb2ppKVxuICB9XG5cbiAgc2V0IGN1c3RvbUVtb2ppIChjdXN0b21FbW9qaXMpIHtcbiAgICB0aGlzLl9jdXN0b20gPSBjdXN0b21FbW9qaUluZGV4KGN1c3RvbUVtb2ppcyk7XG4gIH1cblxuICBnZXQgY3VzdG9tRW1vamkgKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b20uYWxsXG4gIH1cblxuICBhc3luYyBfc2h1dGRvd24gKCkge1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTsgLy8gcmVvcGVuIGlmIHdlJ3ZlIGFscmVhZHkgYmVlbiBjbG9zZWQvZGVsZXRlZFxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9sYXp5VXBkYXRlOyAvLyBhbGxvdyBhbnkgbGF6eSB1cGRhdGVzIHRvIHByb2Nlc3MgYmVmb3JlIGNsb3NpbmcvZGVsZXRpbmdcbiAgICB9IGNhdGNoIChlcnIpIHsgLyogaWdub3JlIG5ldHdvcmsgZXJyb3JzIChvZmZsaW5lLWZpcnN0KSAqLyB9XG4gIH1cblxuICAvLyBjbGVhciByZWZlcmVuY2VzIHRvIElEQiwgZS5nLiBkdXJpbmcgYSBjbG9zZSBldmVudFxuICBfY2xlYXIgKCkge1xuICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gY2FsbCByZW1vdmVFdmVudExpc3RlbmVyIG9yIHJlbW92ZSB0aGUgbWFudWFsIFwiY2xvc2VcIiBsaXN0ZW5lcnMuXG4gICAgLy8gVGhlIG1lbW9yeSBsZWFrIHRlc3RzIHByb3ZlIHRoaXMgaXMgdW5uZWNlc3NhcnkuIEl0J3MgYmVjYXVzZTpcbiAgICAvLyAxKSBJREJEYXRhYmFzZXMgdGhhdCBjYW4gbm8gbG9uZ2VyIGZpcmUgXCJjbG9zZVwiIGF1dG9tYXRpY2FsbHkgaGF2ZSBsaXN0ZW5lcnMgR0NlZFxuICAgIC8vIDIpIHdlIGNsZWFyIHRoZSBtYW51YWwgY2xvc2UgbGlzdGVuZXJzIGluIGRhdGFiYXNlTGlmZWN5Y2xlLmpzLlxuICAgIHRoaXMuX2RiID0gdGhpcy5fcmVhZHkgPSB0aGlzLl9sYXp5VXBkYXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXN5bmMgY2xvc2UgKCkge1xuICAgIGF3YWl0IHRoaXMuX3NodXRkb3duKCk7XG4gICAgYXdhaXQgY2xvc2VEYXRhYmFzZSh0aGlzLl9kYk5hbWUpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlICgpIHtcbiAgICBhd2FpdCB0aGlzLl9zaHV0ZG93bigpO1xuICAgIGF3YWl0IGRlbGV0ZURhdGFiYXNlKHRoaXMuX2RiTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRGF0YWJhc2UgYXMgZGVmYXVsdCB9O1xuIiwgImltcG9ydCBEYXRhYmFzZSBmcm9tICcuL2RhdGFiYXNlLmpzJztcblxuLy8gdmlhIGh0dHBzOi8vdW5wa2cuY29tL2Jyb3dzZS9lbW9qaWJhc2UtZGF0YUA2LjAuMC9tZXRhL2dyb3Vwcy5qc29uXG5jb25zdCBhbGxHcm91cHMgPSBbXG4gIFstMSwgJ1x1MjcyOCcsICdjdXN0b20nXSxcbiAgWzAsICdcdUQ4M0RcdURFMDAnLCAnc21pbGV5cy1lbW90aW9uJ10sXG4gIFsxLCAnXHVEODNEXHVEQzRCJywgJ3Blb3BsZS1ib2R5J10sXG4gIFszLCAnXHVEODNEXHVEQzMxJywgJ2FuaW1hbHMtbmF0dXJlJ10sXG4gIFs0LCAnXHVEODNDXHVERjRFJywgJ2Zvb2QtZHJpbmsnXSxcbiAgWzUsICdcdUQ4M0NcdURGRTBcdUZFMEYnLCAndHJhdmVsLXBsYWNlcyddLFxuICBbNiwgJ1x1MjZCRCcsICdhY3Rpdml0aWVzJ10sXG4gIFs3LCAnXHVEODNEXHVEQ0REJywgJ29iamVjdHMnXSxcbiAgWzgsICdcdTI2RDRcdUZFMEYnLCAnc3ltYm9scyddLFxuICBbOSwgJ1x1RDgzQ1x1REZDMScsICdmbGFncyddXG5dLm1hcCgoW2lkLCBlbW9qaSwgbmFtZV0pID0+ICh7IGlkLCBlbW9qaSwgbmFtZSB9KSk7XG5cbmNvbnN0IGdyb3VwcyA9IGFsbEdyb3Vwcy5zbGljZSgxKTtcblxuY29uc3QgTUlOX1NFQVJDSF9URVhUX0xFTkdUSCA9IDI7XG5jb25zdCBOVU1fU0tJTl9UT05FUyA9IDY7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBySUMgPSB0eXBlb2YgcmVxdWVzdElkbGVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IHJlcXVlc3RJZGxlQ2FsbGJhY2sgOiBzZXRUaW1lb3V0O1xuXG4vLyBjaGVjayBmb3IgWldKICh6ZXJvIHdpZHRoIGpvaW5lcikgY2hhcmFjdGVyXG5mdW5jdGlvbiBoYXNad2ogKGVtb2ppKSB7XG4gIHJldHVybiBlbW9qaS51bmljb2RlLmluY2x1ZGVzKCdcXHUyMDBkJylcbn1cblxuLy8gRmluZCBvbmUgZ29vZCByZXByZXNlbnRhdGl2ZSBlbW9qaSBmcm9tIGVhY2ggdmVyc2lvbiB0byB0ZXN0IGJ5IGNoZWNraW5nIGl0cyBjb2xvci5cbi8vIElkZWFsbHkgaXQgc2hvdWxkIGhhdmUgY29sb3IgaW4gdGhlIGNlbnRlci4gRm9yIHNvbWUgaW5zcGlyYXRpb24sIHNlZTpcbi8vIGh0dHBzOi8vYWJvdXQuZ2l0bGFiLmNvbS9ibG9nLzIwMTgvMDUvMzAvam91cm5leS1pbi1uYXRpdmUtdW5pY29kZS1lbW9qaS9cbi8vXG4vLyBOb3RlIHRoYXQgZm9yIGNlcnRhaW4gdmVyc2lvbnMgKDEyLjEsIDEzLjEpLCB0aGVyZSBpcyBubyBwb2ludCBpbiB0ZXN0aW5nIHRoZW0gZXhwbGljaXRseSwgYmVjYXVzZVxuLy8gYWxsIHRoZSBlbW9qaSBmcm9tIHRoaXMgdmVyc2lvbiBhcmUgY29tcG91bmQtZW1vamkgZnJvbSBwcmV2aW91cyB2ZXJzaW9ucy4gU28gdGhleSB3b3VsZCBwYXNzIGEgY29sb3Jcbi8vIHRlc3QsIGV2ZW4gaW4gYnJvd3NlcnMgdGhhdCBkaXNwbGF5IHRoZW0gYXMgZG91YmxlIGVtb2ppLiAoRS5nLiBcImZhY2UgaW4gY2xvdWRzXCIgbWlnaHQgcmVuZGVyIGFzXG4vLyBcImZhY2Ugd2l0aG91dCBtb3V0aFwiIHBsdXMgXCJmb2dcIi4pIFRoZXNlIGVtb2ppIGNhbiBvbmx5IGJlIGZpbHRlcmVkIHVzaW5nIHRoZSB3aWR0aCB0ZXN0LFxuLy8gd2hpY2ggaGFwcGVucyBpbiBjaGVja1p3alN1cHBvcnQuanMuXG5jb25zdCB2ZXJzaW9uc0FuZFRlc3RFbW9qaSA9IHtcbiAgJ1x1RDgzRVx1REVFQSc6IDE3LCAvLyBkaXN0b3J0ZWQgZmFjZVxuICAnXHVEODNFXHVERUU5JzogMTYsIC8vIGZhY2Ugd2l0aCBiYWdzIHVuZGVyIGV5ZXNcbiAgJ1x1RDgzRVx1REVFOCc6IDE1LjEsIC8vIHNoYWtpbmcgaGVhZCwgdGVjaG5pY2FsbHkgZnJvbSB2MTUgYnV0IHNlZSBub3RlIGFib3ZlXG4gICdcdUQ4M0VcdURFRTAnOiAxNCxcbiAgJ1x1RDgzRVx1REQ3Mic6IDEzLjEsIC8vIHNtaWxpbmcgZmFjZSB3aXRoIHRlYXIsIHRlY2huaWNhbGx5IGZyb20gdjEzIGJ1dCBzZWUgbm90ZSBhYm92ZVxuICAnXHVEODNFXHVERDdCJzogMTIuMSwgLy8gc2FyaSwgdGVjaG5pY2FsbHkgZnJvbSB2MTIgYnV0IHNlZSBub3RlIGFib3ZlXG4gICdcdUQ4M0VcdURENzAnOiAxMSxcbiAgJ1x1RDgzRVx1REQyOSc6IDUsXG4gICdcdUQ4M0RcdURDNzFcdTIwMERcdTI2NDBcdUZFMEYnOiA0LFxuICAnXHVEODNFXHVERDIzJzogMyxcbiAgJ1x1RDgzRFx1REM0MVx1RkUwRlx1MjAwRFx1RDgzRFx1RERFOFx1RkUwRic6IDIsXG4gICdcdUQ4M0RcdURFMDAnOiAxLFxuICAnXHVEODNEXHVERTEwXHVGRTBGJzogMC43LFxuICAnXHVEODNEXHVERTAzJzogMC42XG59O1xuXG5jb25zdCBUSU1FT1VUX0JFRk9SRV9MT0FESU5HX01FU1NBR0UgPSAxMDAwOyAvLyAxIHNlY29uZFxuY29uc3QgREVGQVVMVF9TS0lOX1RPTkVfRU1PSkkgPSAnXHVEODNEXHVERDkwXHVGRTBGJztcbmNvbnN0IERFRkFVTFRfTlVNX0NPTFVNTlMgPSA4O1xuXG4vLyBCYXNlZCBvbiBodHRwczovL2ZpdmV0aGlydHllaWdodC5jb20vZmVhdHVyZXMvdGhlLTEwMC1tb3N0LXVzZWQtZW1vamlzLyBhbmRcbi8vIGh0dHBzOi8vYmxvZy5lbW9qaXBlZGlhLm9yZy9mYWNlYm9vay1yZXZlYWxzLW1vc3QtYW5kLWxlYXN0LXVzZWQtZW1vamlzLyB3aXRoXG4vLyBhIGJpdCBvZiBteSBvd24gY3VyYXRpb24uIChFLmcuIGF2b2lkIHRoZSBcIk9LXCIgZ2VzdHVyZSBiZWNhdXNlIG9mIGNvbm5vdGF0aW9uczpcbi8vIGh0dHBzOi8vZW1vamlwZWRpYS5vcmcvb2staGFuZC8pXG5jb25zdCBNT1NUX0NPTU1PTkxZX1VTRURfRU1PSkkgPSBbXG4gICdcdUQ4M0RcdURFMEEnLFxuICAnXHVEODNEXHVERTEyJyxcbiAgJ1x1Mjc2NFx1RkUwRicsXG4gICdcdUQ4M0RcdURDNERcdUZFMEYnLFxuICAnXHVEODNEXHVERTBEJyxcbiAgJ1x1RDgzRFx1REUwMicsXG4gICdcdUQ4M0RcdURFMkQnLFxuICAnXHUyNjNBXHVGRTBGJyxcbiAgJ1x1RDgzRFx1REUxNCcsXG4gICdcdUQ4M0RcdURFMjknLFxuICAnXHVEODNEXHVERTBGJyxcbiAgJ1x1RDgzRFx1REM5NScsXG4gICdcdUQ4M0RcdURFNEMnLFxuICAnXHVEODNEXHVERTE4J1xuXTtcblxuLy8gSXQncyBpbXBvcnRhbnQgdG8gbGlzdCBUd2Vtb2ppIE1vemlsbGEgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZSwgYmVjYXVzZSBNb3ppbGxhIGJ1bmRsZXMgdGhlaXJcbi8vIG93biBmb250IG9uIHNvbWUgcGxhdGZvcm1zIChub3RhYmx5IFdpbmRvd3MgYW5kIExpbnV4IGFzIG9mIHRoaXMgd3JpdGluZykuIFR5cGljYWxseSwgTW96aWxsYVxuLy8gdXBkYXRlcyBmYXN0ZXIgdGhhbiB0aGUgdW5kZXJseWluZyBPUywgYW5kIHdlIGRvbid0IHdhbnQgdG8gcmVuZGVyIG9sZGVyIGVtb2ppIGluIG9uZSBmb250IGFuZFxuLy8gbmV3ZXIgZW1vamkgaW4gYW5vdGhlciBmb250OlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vbGFubGF3c29uL2Vtb2ppLXBpY2tlci1lbGVtZW50L3B1bGwvMjY4I2lzc3VlY29tbWVudC0xMDczMzQ3MjgzXG5jb25zdCBGT05UX0ZBTUlMWSA9ICdcIlR3ZW1vamkgTW96aWxsYVwiLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIiwnICtcbiAgJ1wiTm90byBDb2xvciBFbW9qaVwiLFwiRW1vamlPbmUgQ29sb3JcIixcIkFuZHJvaWQgRW1vamlcIixzYW5zLXNlcmlmJztcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IERFRkFVTFRfQ0FURUdPUllfU09SVElORyA9IChhLCBiKSA9PiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcblxuLy8gVGVzdCBpZiBhbiBlbW9qaSBpcyBzdXBwb3J0ZWQgYnkgcmVuZGVyaW5nIGl0IHRvIGNhbnZhcyBhbmQgY2hlY2tpbmcgdGhhdCB0aGUgY29sb3IgaXMgbm90IGJsYWNrXG4vLyBTZWUgaHR0cHM6Ly9hYm91dC5naXRsYWIuY29tL2Jsb2cvMjAxOC8wNS8zMC9qb3VybmV5LWluLW5hdGl2ZS11bmljb2RlLWVtb2ppL1xuLy8gYW5kIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2lmLWVtb2ppIGZvciBpbnNwaXJhdGlvblxuLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBsYXJnZWx5IGJvcnJvd2VkIGZyb20gaWYtZW1vamksIGFkZGluZyB0aGUgZm9udC1mYW1pbHlcblxuXG5jb25zdCBnZXRUZXh0RmVhdHVyZSA9ICh0ZXh0LCBjb2xvcikgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLndpZHRoID0gY2FudmFzLmhlaWdodCA9IDE7XG5cbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgIC8vIEltcHJvdmVzIHRoZSBwZXJmb3JtYW5jZSBvZiBgZ2V0SW1hZ2VEYXRhKClgXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC9nZXRDb250ZXh0QXR0cmlidXRlcyN3aWxscmVhZGZyZXF1ZW50bHlcbiAgICB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWVcbiAgfSk7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgY3R4LmZvbnQgPSBgMTAwcHggJHtGT05UX0ZBTUlMWX1gO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5zY2FsZSgwLjAxLCAwLjAxKTtcbiAgY3R4LmZpbGxUZXh0KHRleHQsIDAsIDApO1xuXG4gIHJldHVybiBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGFcbn07XG5cbmNvbnN0IGNvbXBhcmVGZWF0dXJlcyA9IChmZWF0dXJlMSwgZmVhdHVyZTIpID0+IHtcbiAgY29uc3QgZmVhdHVyZTFTdHIgPSBbLi4uZmVhdHVyZTFdLmpvaW4oJywnKTtcbiAgY29uc3QgZmVhdHVyZTJTdHIgPSBbLi4uZmVhdHVyZTJdLmpvaW4oJywnKTtcbiAgLy8gVGhpcyBpcyBSR0JBLCBzbyBmb3IgMCwwLDAsIHdlIGFyZSBjaGVja2luZyB0aGF0IHRoZSBmaXJzdCBSR0IgaXMgbm90IGFsbCB6ZXJvZXMuXG4gIC8vIE1vc3Qgb2YgdGhlIHRpbWUgd2hlbiB1bnN1cHBvcnRlZCB0aGlzIGlzIDAsMCwwLDAsIGJ1dCBvbiBDaHJvbWUgb24gTWFjIGl0IGlzXG4gIC8vIDAsMCwwLDYxIC0gdGhlcmUgaXMgYSB0cmFuc3BhcmVuY3kgaGVyZS5cbiAgcmV0dXJuIGZlYXR1cmUxU3RyID09PSBmZWF0dXJlMlN0ciAmJiAhZmVhdHVyZTFTdHIuc3RhcnRzV2l0aCgnMCwwLDAsJylcbn07XG5cbmZ1bmN0aW9uIHRlc3RDb2xvckVtb2ppU3VwcG9ydGVkICh0ZXh0KSB7XG4gIC8vIFJlbmRlciB3aGl0ZSBhbmQgYmxhY2sgYW5kIHRoZW4gY29tcGFyZSB0aGVtIHRvIGVhY2ggb3RoZXIgYW5kIGVuc3VyZSB0aGV5J3JlIHRoZSBzYW1lXG4gIC8vIGNvbG9yLCBhbmQgbmVpdGhlciBvbmUgaXMgYmxhY2suIFRoaXMgc2hvd3MgdGhhdCB0aGUgZW1vamkgd2FzIHJlbmRlcmVkIGluIGNvbG9yLlxuICBjb25zdCBmZWF0dXJlMSA9IGdldFRleHRGZWF0dXJlKHRleHQsICcjMDAwJyk7XG4gIGNvbnN0IGZlYXR1cmUyID0gZ2V0VGV4dEZlYXR1cmUodGV4dCwgJyNmZmYnKTtcbiAgcmV0dXJuIGZlYXR1cmUxICYmIGZlYXR1cmUyICYmIGNvbXBhcmVGZWF0dXJlcyhmZWF0dXJlMSwgZmVhdHVyZTIpXG59XG5cbi8vIHJhdGhlciB0aGFuIGNoZWNrIGV2ZXJ5IGVtb2ppIGV2ZXIsIHdoaWNoIHdvdWxkIGJlIGV4cGVuc2l2ZSwganVzdCBjaGVjayBzb21lIHJlcHJlc2VudGF0aXZlcyBmcm9tIHRoZVxuLy8gZGlmZmVyZW50IGVtb2ppIHJlbGVhc2VzIHRvIGRldGVybWluZSB3aGF0IHRoZSBmb250IHN1cHBvcnRzXG5cbmZ1bmN0aW9uIGRldGVybWluZUVtb2ppU3VwcG9ydExldmVsICgpIHtcbiAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHZlcnNpb25zQW5kVGVzdEVtb2ppKTtcbiAgdHJ5IHtcbiAgICAvLyBzdGFydCB3aXRoIGxhdGVzdCBlbW9qaSBhbmQgd29yayBiYWNrd2FyZHNcbiAgICBmb3IgKGNvbnN0IFtlbW9qaSwgdmVyc2lvbl0gb2YgZW50cmllcykge1xuICAgICAgaWYgKHRlc3RDb2xvckVtb2ppU3VwcG9ydGVkKGVtb2ppKSkge1xuICAgICAgICByZXR1cm4gdmVyc2lvblxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkgeyAvLyBjYW52YXMgZXJyb3JcbiAgfSBmaW5hbGx5IHtcbiAgfVxuICAvLyBJbiBjYXNlIG9mIGFuIGVycm9yLCBiZSBnZW5lcm91cyBhbmQganVzdCBhc3N1bWUgYWxsIGVtb2ppIGFyZSBzdXBwb3J0ZWQgKGUuZy4gZm9yIGNhbnZhcyBlcnJvcnNcbiAgLy8gZHVlIHRvIGFudGktZmluZ2VycHJpbnRpbmcgYWRkLW9ucykuIEJldHRlciB0byBzaG93IHNvbWUgZ3JheSBib3hlcyB0aGFuIG5vdGhpbmcgYXQgYWxsLlxuICByZXR1cm4gZW50cmllc1swXVsxXSAvLyBmaXJzdCBvbmUgaW4gdGhlIGxpc3QgaXMgdGhlIG1vc3QgcmVjZW50IHZlcnNpb25cbn1cblxuLy8gQ2hlY2sgd2hpY2ggZW1vamlzIHdlIGtub3cgZm9yIHN1cmUgYXJlbid0IHN1cHBvcnRlZCwgYmFzZWQgb24gVW5pY29kZSB2ZXJzaW9uIGxldmVsXG5sZXQgcHJvbWlzZTtcbmNvbnN0IGRldGVjdEVtb2ppU3VwcG9ydExldmVsID0gKCkgPT4ge1xuICBpZiAoIXByb21pc2UpIHtcbiAgICAvLyBEZWxheSBzbyBpdCBjYW4gcnVuIHdoaWxlIHRoZSBJREIgZGF0YWJhc2UgaXMgYmVpbmcgY3JlYXRlZCBieSB0aGUgYnJvd3NlciAob24gYW5vdGhlciB0aHJlYWQpLlxuICAgIC8vIFRoaXMgaGVscHMgZXNwZWNpYWxseSB3aXRoIGZpcnN0IGxvYWQgXHUyMDEzIHdlIHdhbnQgdG8gc3RhcnQgcHJlLXBvcHVsYXRpbmcgdGhlIGRhdGFiYXNlIG9uIHRoZSBtYWluIHRocmVhZCxcbiAgICAvLyBhbmQgdGhlbiB3YWl0IGZvciBJREIgdG8gY29tbWl0IGV2ZXJ5dGhpbmcsIGFuZCB3aGlsZSB3YWl0aW5nIHdlIHJ1biB0aGlzIGNoZWNrLlxuICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IChcbiAgICAgIHJJQygoKSA9PiAoXG4gICAgICAgIHJlc29sdmUoZGV0ZXJtaW5lRW1vamlTdXBwb3J0TGV2ZWwoKSkgLy8gZGVsYXkgc28gaWRlYWxseSB0aGlzIGNhbiBydW4gd2hpbGUgSURCIGlzIGZpcnN0IHBvcHVsYXRpbmdcbiAgICAgICkpXG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2Vcbn07XG4vLyBkZXRlcm1pbmUgd2hpY2ggZW1vamlzIGNvbnRhaW5pbmcgWldKICh6ZXJvIHdpZHRoIGpvaW5lcikgY2hhcmFjdGVyc1xuLy8gYXJlIHN1cHBvcnRlZCAocmVuZGVyZWQgYXMgb25lIGdseXBoKSByYXRoZXIgdGhhbiB1bnN1cHBvcnRlZCAocmVuZGVyZWQgYXMgdHdvIG9yIG1vcmUgZ2x5cGhzKVxuY29uc3Qgc3VwcG9ydGVkWndqRW1vamlzID0gbmV3IE1hcCgpO1xuXG5jb25zdCBWQVJJQVRJT05fU0VMRUNUT1IgPSAnXFx1ZmUwZic7XG5jb25zdCBTS0lOVE9ORV9NT0RJRklFUiA9ICdcXHVkODNjJztcbmNvbnN0IFpXSiA9ICdcXHUyMDBkJztcbmNvbnN0IExJR0hUX1NLSU5fVE9ORSA9IDB4MUYzRkI7XG5jb25zdCBMSUdIVF9TS0lOX1RPTkVfTU9ESUZJRVIgPSAweGRmZmI7XG5cbi8vIFRPRE86IHRoaXMgaXMgYSBuYWl2ZSBpbXBsZW1lbnRhdGlvbiwgd2UgY2FuIGltcHJvdmUgaXQgbGF0ZXJcbi8vIEl0J3Mgb25seSB1c2VkIGZvciB0aGUgc2tpbnRvbmUgcGlja2VyLCBzbyBhcyBsb25nIGFzIHBlb3BsZSBkb24ndCBjdXN0b21pemUgd2l0aFxuLy8gcmVhbGx5IGV4b3RpYyBlbW9qaSB0aGVuIGl0IHNob3VsZCB3b3JrIGZpbmVcbmZ1bmN0aW9uIGFwcGx5U2tpblRvbmUgKHN0ciwgc2tpblRvbmUpIHtcbiAgaWYgKHNraW5Ub25lID09PSAwKSB7XG4gICAgcmV0dXJuIHN0clxuICB9XG4gIGNvbnN0IHp3akluZGV4ID0gc3RyLmluZGV4T2YoWldKKTtcbiAgaWYgKHp3akluZGV4ICE9PSAtMSkge1xuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIHp3akluZGV4KSArXG4gICAgICBTdHJpbmcuZnJvbUNvZGVQb2ludChMSUdIVF9TS0lOX1RPTkUgKyBza2luVG9uZSAtIDEpICtcbiAgICAgIHN0ci5zdWJzdHJpbmcoendqSW5kZXgpXG4gIH1cbiAgaWYgKHN0ci5lbmRzV2l0aChWQVJJQVRJT05fU0VMRUNUT1IpKSB7XG4gICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XG4gIH1cbiAgcmV0dXJuIHN0ciArIFNLSU5UT05FX01PRElGSUVSICsgU3RyaW5nLmZyb21Db2RlUG9pbnQoTElHSFRfU0tJTl9UT05FX01PRElGSUVSICsgc2tpblRvbmUgLSAxKVxufVxuXG5mdW5jdGlvbiBoYWx0IChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuLy8gSW1wbGVtZW50YXRpb24gbGVmdC9yaWdodCBvciB1cC9kb3duIG5hdmlnYXRpb24sIGNpcmNsaW5nIGJhY2sgd2hlbiB5b3Vcbi8vIHJlYWNoIHRoZSBzdGFydC9lbmQgb2YgdGhlIGxpc3RcbmZ1bmN0aW9uIGluY3JlbWVudE9yRGVjcmVtZW50IChkZWNyZW1lbnQsIHZhbCwgYXJyKSB7XG4gIHZhbCArPSAoZGVjcmVtZW50ID8gLTEgOiAxKTtcbiAgaWYgKHZhbCA8IDApIHtcbiAgICB2YWwgPSBhcnIubGVuZ3RoIC0gMTtcbiAgfSBlbHNlIGlmICh2YWwgPj0gYXJyLmxlbmd0aCkge1xuICAgIHZhbCA9IDA7XG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG4vLyBsaWtlIGxvZGFzaCdzIHVuaXFCeSBidXQgbXVjaCBzbWFsbGVyXG5mdW5jdGlvbiB1bmlxQnkgKGFyciwgZnVuYykge1xuICBjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgY29uc3Qga2V5ID0gZnVuYyhpdGVtKTtcbiAgICBpZiAoIXNldC5oYXMoa2V5KSkge1xuICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLy8gV2UgZG9uJ3QgbmVlZCBhbGwgdGhlIGRhdGEgb24gZXZlcnkgZW1vamksIGFuZCB0aGVyZSBhcmUgc3BlY2lmaWMgdGhpbmdzIHdlIG5lZWRcbi8vIGZvciB0aGUgVUksIHNvIGJ1aWxkIGEgXCJ2aWV3IG1vZGVsXCIgZnJvbSB0aGUgZW1vamkgb2JqZWN0IHdlIGdvdCBmcm9tIHRoZSBkYXRhYmFzZVxuXG5mdW5jdGlvbiBzdW1tYXJpemVFbW9qaXNGb3JVSSAoZW1vamlzLCBlbW9qaVN1cHBvcnRMZXZlbCkge1xuICBjb25zdCB0b1NpbXBsZVNraW5zTWFwID0gc2tpbnMgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAoY29uc3Qgc2tpbiBvZiBza2lucykge1xuICAgICAgLy8gaWdub3JlIGFycmF5cyBsaWtlIFsxLCAyXSB3aXRoIG11bHRpcGxlIHNraW4gdG9uZXNcbiAgICAgIC8vIGFsc28gaWdub3JlIHZhcmlhbnRzIHRoYXQgYXJlIGluIGFuIHVuc3VwcG9ydGVkIGVtb2ppIHZlcnNpb25cbiAgICAgIC8vICh0aGVzZSBkbyBleGlzdCAtIHZhcmlhbnRzIGZyb20gYSBkaWZmZXJlbnQgdmVyc2lvbiB0aGFuIHRoZWlyIGJhc2UgZW1vamkpXG4gICAgICBpZiAodHlwZW9mIHNraW4udG9uZSA9PT0gJ251bWJlcicgJiYgc2tpbi52ZXJzaW9uIDw9IGVtb2ppU3VwcG9ydExldmVsKSB7XG4gICAgICAgIHJlc1tza2luLnRvbmVdID0gc2tpbi51bmljb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH07XG5cbiAgcmV0dXJuIGVtb2ppcy5tYXAoKHsgdW5pY29kZSwgc2tpbnMsIHNob3J0Y29kZXMsIHVybCwgbmFtZSwgY2F0ZWdvcnksIGFubm90YXRpb24gfSkgPT4gKHtcbiAgICB1bmljb2RlLFxuICAgIG5hbWUsXG4gICAgc2hvcnRjb2RlcyxcbiAgICB1cmwsXG4gICAgY2F0ZWdvcnksXG4gICAgYW5ub3RhdGlvbixcbiAgICBpZDogdW5pY29kZSB8fCBuYW1lLFxuICAgIHNraW5zOiBza2lucyAmJiB0b1NpbXBsZVNraW5zTWFwKHNraW5zKVxuICB9KSlcbn1cblxuLy8gaW1wb3J0IHJBRiBmcm9tIG9uZSBwbGFjZSBzbyB0aGF0IHRoZSBidW5kbGUgc2l6ZSBpcyBhIGJpdCBzbWFsbGVyXG5jb25zdCByQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbi8vIFwiU3ZlbHRlIGFjdGlvblwiLWxpa2UgdXRpbGl0eSB0byBkZXRlY3QgbGF5b3V0IGNoYW5nZXMgdmlhIFJlc2l6ZU9ic2VydmVyLlxuLy8gSWYgUmVzaXplT2JzZXJ2ZXIgaXMgdW5zdXBwb3J0ZWQsIHdlIGp1c3QgdXNlIHJBRiBvbmNlIGFuZCBkb24ndCBib3RoZXIgdG8gdXBkYXRlLlxuXG5cbmxldCByZXNpemVPYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gcmVzaXplT2JzZXJ2ZXJBY3Rpb24gKG5vZGUsIGFib3J0U2lnbmFsLCBvblVwZGF0ZSkge1xuICBsZXQgcmVzaXplT2JzZXJ2ZXI7XG4gIGlmIChyZXNpemVPYnNlcnZlclN1cHBvcnRlZCkge1xuICAgIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKG9uVXBkYXRlKTtcbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKG5vZGUpO1xuICB9IGVsc2UgeyAvLyBqdXN0IHJ1biBvbmNlLCBkb24ndCBib3RoZXIgdHJ5aW5nIHRvIHRyYWNrIGl0XG4gICAgckFGKG9uVXBkYXRlKTtcbiAgfVxuXG4gIC8vIGNsZWFudXAgZnVuY3Rpb24gKGNhbGxlZCBvbiBkZXN0cm95KVxuICBhYm9ydFNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcbiAgICBpZiAocmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBnZXQgdGhlIHdpZHRoIG9mIHRoZSB0ZXh0IGluc2lkZSBvZiBhIERPTSBub2RlLCB2aWEgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU5NTI1ODkxLzY4MDc0MlxuZnVuY3Rpb24gY2FsY3VsYXRlVGV4dFdpZHRoIChub2RlKSB7XG4gIC8vIHNraXAgcnVubmluZyB0aGlzIGluIGplc3Qvdml0ZXN0IGJlY2F1c2Ugd2UgZG9uJ3QgbmVlZCB0byBjaGVjayBmb3IgZW1vamkgc3VwcG9ydCBpbiB0aGF0IGVudmlyb25tZW50XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIHtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZShub2RlLmZpcnN0Q2hpbGQpO1xuICAgIHJldHVybiByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICB9XG59XG5cbmNvbnN0IEJBU0VMSU5FX0VNT0pJID0gJ1x1RDgzRFx1REUwMCc7XG5cbmxldCBiYXNlbGluZUVtb2ppV2lkdGg7XG5sZXQgZmFsbGJhY2tOb2RlO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVUZXh0V2lkdGhXaXRoRmFsbGJhY2sgKHVuaWNvZGUsIGRvbU5vZGUsIGJhc2VsaW5lRW1vamlOb2RlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGNhbGN1bGF0ZVRleHRXaWR0aChkb21Ob2RlKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghcmVzdWx0KSB7XG4gICAgLy8gSWYgcmVzdWx0IGlzIDAgdGhlbiB2ZXJ5IGxpa2VseSB0aGUgZW1vamktcGlja2VyIGhhcyBgZGlzcGxheTpub25lYCBvciBlcXVpdmFsZW50LiBJbiB0aGF0IGNhc2UsIHdlIGZhbGwgYmFjayB0b1xuICAgIC8vIGNsb25pbmcgdGhlIGJhc2VsaW5lIGVtb2ppLCBwdXR0aW5nIHRoYXQgaW4gdGhlIGBkb2N1bWVudC5ib2R5YCwgYW5kIG1lYXN1cmluZyB0aGF0IGluc3RlYWQuIFRoaXMgaXMgYSBwZXJmIGhpdCxcbiAgICAvLyBidXQgaXQncyBiZXR0ZXIgdGhhbiBtaXN0YWtlbmx5IGZpbHRlcmluZyBlbW9qaTogaHR0cHM6Ly9naXRodWIuY29tL25vbGFubGF3c29uL2Vtb2ppLXBpY2tlci1lbGVtZW50L2lzc3Vlcy81MTRcbiAgICBpZiAoIWZhbGxiYWNrTm9kZSkge1xuICAgICAgZmFsbGJhY2tOb2RlID0gYmFzZWxpbmVFbW9qaU5vZGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgLy8gV2UgaGF2ZSB0byBjb3B5IHN0eWxlcyBiZWNhdXNlIHdlJ3JlIGNvcHlpbmcgZnJvbSBhbiBlbGVtZW50IGluIHRoZSBzaGFkb3cgRE9NIHRvIHRoZSBsaWdodCBET01cbiAgICAgIC8vIFdlIGNhbid0IHVzZSB0aGUgc2hhZG93IERPTSBiZWNhdXNlIGl0J3MgbGlrZWx5IHRoZSBlbnRpcmUgcGlja2VyIGlzIGBkaXNwbGF5Om5vbmVgXG4gICAgICBjb25zdCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGJhc2VsaW5lRW1vamlOb2RlKTtcbiAgICAgIC8vIHByb2JhYmx5IGRvbid0IG5lZWQgZGlzcGxheS9hbGlnbi1pdGVtcy9qdXN0aWZ5LWNvbnRlbnQgYnV0IGxldCdzIHBsYXkgaXQgc2FmZVxuICAgICAgZm9yIChjb25zdCBwcm9wIG9mIFsnZm9udC1mYW1pbHknLCAnbGluZS1oZWlnaHQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ2ZvbnQtc2l6ZScsICdkaXNwbGF5JywgJ2FsaWduLWl0ZW1zJywgJ2p1c3RpZnktY29udGVudCddKSB7XG4gICAgICAgIC8vIHNldCBgIWltcG9ydGFudGAganVzdCBpbiBjYXNlIHNvbWUgZ2xvYmFsIHN0eWxlcyBtaWdodCB0cnkgdG8gb3ZlcndyaXRlIHRoaXNcbiAgICAgICAgZmFsbGJhY2tOb2RlLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApLCAnaW1wb3J0YW50Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZhbGxiYWNrTm9kZSk7XG4gICAgICBmYWxsYmFja05vZGUuZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB1bmljb2RlO1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVRleHRXaWR0aChmYWxsYmFja05vZGUpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIGF2b2lkIGFjdHVhbGx5IHJlbmRlcmluZyB0aGUgdGVzdCBlbW9qaVxuICAgICAgZmFsbGJhY2tOb2RlLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVtb2ppcyBjb250YWluaW5nIFpXSiBjaGFyYWN0ZXJzIGFyZSBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgYnJvd3NlciAoZG9uJ3QgcmVuZGVyXG4gKiBhcyBkb3VibGUgY2hhcmFjdGVycykgYW5kIHJldHVybiB0cnVlIGlmIGFsbCBhcmUgc3VwcG9ydGVkLlxuICogQHBhcmFtIHp3akVtb2ppc1RvQ2hlY2tcbiAqIEBwYXJhbSBiYXNlbGluZUVtb2ppTm9kZVxuICogQHBhcmFtIGVtb2ppVG9Eb21Ob2RlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrWndqU3VwcG9ydCAoendqRW1vamlzVG9DaGVjaywgYmFzZWxpbmVFbW9qaU5vZGUsIGVtb2ppVG9Eb21Ob2RlKSB7XG4gIGxldCBhbGxTdXBwb3J0ZWQgPSB0cnVlO1xuICBmb3IgKGNvbnN0IGVtb2ppIG9mIHp3akVtb2ppc1RvQ2hlY2spIHtcbiAgICBjb25zdCBkb21Ob2RlID0gZW1vamlUb0RvbU5vZGUoZW1vamkpO1xuICAgIC8vIHNhbml0eSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIG5vZGUgaXMgZGVmaW5lZCBwcm9wZXJseVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghZG9tTm9kZSkge1xuICAgICAgLy8gVGhpcyBpcyBhIHJhY2UgY29uZGl0aW9uIHRoYXQgY2FuIG9jY3VyIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQvcmVtb3VudGVkXG4gICAgICAvLyBJdCBkb2Vzbid0IHJlYWxseSBtYXR0ZXIgd2hhdCB3ZSBkbyBoZXJlIHNpbmNlIHRoZSBvbGQgY29udGV4dCBpcyBub3QgZ29pbmcgdG8gcmVuZGVyIGFueW1vcmUuXG4gICAgICAvLyBKdXN0IGJhaWwgb3V0IG9mIGVtb2ppIHN1cHBvcnQgZGV0ZWN0aW9uIGFuZCByZXR1cm4gYGFsbFN1cHBvcnRlZD10cnVlYCBzaW5jZSB0aGUgcmVuZGVyaW5nIGNvbnRleHQgaXMgZ29uZVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBiYXNlbGluZUVtb2ppV2lkdGggPT09ICd1bmRlZmluZWQnKSB7IC8vIGNhbGN1bGF0ZSB0aGUgYmFzZWxpbmUgZW1vamkgd2lkdGggb25seSBvbmNlXG4gICAgICBiYXNlbGluZUVtb2ppV2lkdGggPSBjYWxjdWxhdGVUZXh0V2lkdGhXaXRoRmFsbGJhY2soQkFTRUxJTkVfRU1PSkksIGJhc2VsaW5lRW1vamlOb2RlLCBiYXNlbGluZUVtb2ppTm9kZSk7XG4gICAgfVxuICAgIGNvbnN0IGVtb2ppV2lkdGggPSBjYWxjdWxhdGVUZXh0V2lkdGhXaXRoRmFsbGJhY2soZW1vamkudW5pY29kZSwgZG9tTm9kZSwgYmFzZWxpbmVFbW9qaU5vZGUpO1xuICAgIC8vIE9uIFdpbmRvd3MsIHNvbWUgc3VwcG9ydGVkIGVtb2ppIGFyZSB+NTAlIGJpZ2dlciB0aGFuIHRoZSBiYXNlbGluZSBlbW9qaSwgYnV0IHdoYXQgd2UgcmVhbGx5IHdhbnQgdG8gZ3VhcmRcbiAgICAvLyBhZ2FpbnN0IGFyZSB0aGUgb25lcyB0aGF0IGFyZSAyeCB0aGUgc2l6ZSwgYmVjYXVzZSB0aG9zZSBhcmUgdHJ1bHkgYnJva2VuIChwZXJzb24gd2l0aCByZWQgaGFpciA9IHBlcnNvbiB3aXRoXG4gICAgLy8gZmxvYXRpbmcgcmVkIHdpZywgYmxhY2sgY2F0ID0gY2F0IHdpdGggYmxhY2sgc3F1YXJlLCBwb2xhciBiZWFyID0gYmVhciB3aXRoIHNub3dmbGFrZSwgZXRjLilcbiAgICAvLyBTbyBoZXJlIHdlIHNldCB0aGUgdGhyZXNob2xkIGF0IDEuOCB0aW1lcyB0aGUgc2l6ZSBvZiB0aGUgYmFzZWxpbmUgZW1vamkuXG4gICAgY29uc3Qgc3VwcG9ydGVkID0gZW1vamlXaWR0aCAvIDEuOCA8IGJhc2VsaW5lRW1vamlXaWR0aDtcbiAgICBzdXBwb3J0ZWRad2pFbW9qaXMuc2V0KGVtb2ppLnVuaWNvZGUsIHN1cHBvcnRlZCk7XG5cbiAgICBpZiAoIXN1cHBvcnRlZCkge1xuICAgICAgYWxsU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBhbGxTdXBwb3J0ZWRcbn1cblxuLy8gbGlrZSBsb2Rhc2gncyB1bmlxXG5cbmZ1bmN0aW9uIHVuaXEgKGFycikge1xuICByZXR1cm4gdW5pcUJ5KGFyciwgXyA9PiBfKVxufVxuXG4vLyBOb3RlIHdlIHB1dCB0aGlzIGluIGl0cyBvd24gZnVuY3Rpb24gb3V0c2lkZSBQaWNrZXIuanMgdG8gYXZvaWQgU3ZlbHRlIGRvaW5nIGFuIGludmFsaWRhdGlvbiBvbiB0aGUgXCJzZXR0ZXJcIiBoZXJlLlxuLy8gQXQgYmVzdCB0aGUgaW52YWxpZGF0aW9uIGlzIHVzZWxlc3MsIGF0IHdvcnN0IGl0IGNhbiBjYXVzZSBpbmZpbml0ZSBsb29wczpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xhbmxhd3Nvbi9lbW9qaS1waWNrZXItZWxlbWVudC9wdWxsLzE4MFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvNjUyMVxuLy8gQWxzbyBub3RlIHRhYnBhbmVsRWxlbWVudCBjYW4gYmUgbnVsbCBpZiB0aGUgZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgY29ubmVjdGVkXG5mdW5jdGlvbiByZXNldFNjcm9sbFRvcElmUG9zc2libGUgKGVsZW1lbnQpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGVsZW1lbnQpIHsgLy8gTWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSB0aGlzIGBpZmAgZ3VhcmRcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RnJvbU1hcCAoY2FjaGUsIGtleSwgZnVuYykge1xuICBsZXQgY2FjaGVkID0gY2FjaGUuZ2V0KGtleSk7XG4gIGlmICghY2FjaGVkKSB7XG4gICAgY2FjaGVkID0gZnVuYygpO1xuICAgIGNhY2hlLnNldChrZXksIGNhY2hlZCk7XG4gIH1cbiAgcmV0dXJuIGNhY2hlZFxufVxuXG5mdW5jdGlvbiB0b1N0cmluZyAodmFsdWUpIHtcbiAgcmV0dXJuICcnICsgdmFsdWVcbn1cblxuZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSAoaHRtbFN0cmluZykge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gIHJldHVybiB0ZW1wbGF0ZVxufVxuXG5jb25zdCBwYXJzZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGRvbUluc3RhbmNlc0NhY2hlID0gbmV3IFdlYWtNYXAoKTtcbi8vIFRoaXMgbmVlZHMgdG8gYmUgYSBzeW1ib2wgYmVjYXVzZSBpdCBuZWVkcyB0byBiZSBkaWZmZXJlbnQgZnJvbSBhbnkgcG9zc2libGUgb3V0cHV0IG9mIGEga2V5IGZ1bmN0aW9uXG5jb25zdCB1bmtleWVkU3ltYm9sID0gU3ltYm9sKCd1bi1rZXllZCcpO1xuXG4vLyBOb3Qgc3VwcG9ydGVkIGluIFNhZmFyaSA8PTEzXG5jb25zdCBoYXNSZXBsYWNlQ2hpbGRyZW4gPSAncmVwbGFjZUNoaWxkcmVuJyBpbiBFbGVtZW50LnByb3RvdHlwZTtcbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZHJlbiAocGFyZW50Tm9kZSwgbmV3Q2hpbGRyZW4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGhhc1JlcGxhY2VDaGlsZHJlbikge1xuICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkcmVuKC4uLm5ld0NoaWxkcmVuKTtcbiAgfSBlbHNlIHsgLy8gbWluaW1hbCBwb2x5ZmlsbCBmb3IgRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZUNoaWxkcmVuXG4gICAgcGFyZW50Tm9kZS5pbm5lckhUTUwgPSAnJztcbiAgICBwYXJlbnROb2RlLmFwcGVuZCguLi5uZXdDaGlsZHJlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9DaGlsZHJlbk5lZWRSZXJlbmRlciAocGFyZW50Tm9kZSwgbmV3Q2hpbGRyZW4pIHtcbiAgbGV0IG9sZENoaWxkID0gcGFyZW50Tm9kZS5maXJzdENoaWxkO1xuICBsZXQgb2xkQ2hpbGRyZW5Db3VudCA9IDA7XG4gIC8vIGl0ZXJhdGUgdXNpbmcgZmlyc3RDaGlsZC9uZXh0U2libGluZyBiZWNhdXNlIGJyb3dzZXJzIHVzZSBhIGxpbmtlZCBsaXN0IHVuZGVyIHRoZSBob29kXG4gIHdoaWxlIChvbGRDaGlsZCkge1xuICAgIGNvbnN0IG5ld0NoaWxkID0gbmV3Q2hpbGRyZW5bb2xkQ2hpbGRyZW5Db3VudF07XG4gICAgLy8gY2hlY2sgaWYgdGhlIG9sZCBjaGlsZCBhbmQgbmV3IGNoaWxkIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdDaGlsZCAhPT0gb2xkQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIG9sZENoaWxkID0gb2xkQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgb2xkQ2hpbGRyZW5Db3VudCsrO1xuICB9XG4gIC8vIGlmIG5ldyBjaGlsZHJlbiBsZW5ndGggaXMgZGlmZmVyZW50IGZyb20gb2xkLCB3ZSBtdXN0IHJlLXJlbmRlclxuICByZXR1cm4gb2xkQ2hpbGRyZW5Db3VudCAhPT0gbmV3Q2hpbGRyZW4ubGVuZ3RoXG59XG5cbmZ1bmN0aW9uIHBhdGNoQ2hpbGRyZW4gKG5ld0NoaWxkcmVuLCBpbnN0YW5jZUJpbmRpbmcpIHtcbiAgY29uc3QgeyB0YXJnZXROb2RlIH0gPSBpbnN0YW5jZUJpbmRpbmc7XG4gIGxldCB7IHRhcmdldFBhcmVudE5vZGUgfSA9IGluc3RhbmNlQmluZGluZztcblxuICBsZXQgbmVlZHNSZXJlbmRlciA9IGZhbHNlO1xuXG4gIGlmICh0YXJnZXRQYXJlbnROb2RlKSB7IC8vIGFscmVhZHkgcmVuZGVyZWQgb25jZVxuICAgIG5lZWRzUmVyZW5kZXIgPSBkb0NoaWxkcmVuTmVlZFJlcmVuZGVyKHRhcmdldFBhcmVudE5vZGUsIG5ld0NoaWxkcmVuKTtcbiAgfSBlbHNlIHsgLy8gZmlyc3QgcmVuZGVyIG9mIGxpc3RcbiAgICBuZWVkc1JlcmVuZGVyID0gdHJ1ZTtcbiAgICBpbnN0YW5jZUJpbmRpbmcudGFyZ2V0Tm9kZSA9IHVuZGVmaW5lZDsgLy8gcGxhY2Vob2xkZXIgbm9kZSBub3QgbmVlZGVkIGFueW1vcmUsIGZyZWUgbWVtb3J5XG4gICAgaW5zdGFuY2VCaW5kaW5nLnRhcmdldFBhcmVudE5vZGUgPSB0YXJnZXRQYXJlbnROb2RlID0gdGFyZ2V0Tm9kZS5wYXJlbnROb2RlO1xuICB9XG4gIC8vIGF2b2lkIHJlLXJlbmRlcmluZyBsaXN0IGlmIHRoZSBkb20gbm9kZXMgYXJlIGV4YWN0bHkgdGhlIHNhbWUgYmVmb3JlIGFuZCBhZnRlclxuICBpZiAobmVlZHNSZXJlbmRlcikge1xuICAgIHJlcGxhY2VDaGlsZHJlbih0YXJnZXRQYXJlbnROb2RlLCBuZXdDaGlsZHJlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGF0Y2ggKGV4cHJlc3Npb25zLCBpbnN0YW5jZUJpbmRpbmdzKSB7XG4gIGZvciAoY29uc3QgaW5zdGFuY2VCaW5kaW5nIG9mIGluc3RhbmNlQmluZGluZ3MpIHtcbiAgICBjb25zdCB7XG4gICAgICB0YXJnZXROb2RlLFxuICAgICAgY3VycmVudEV4cHJlc3Npb24sXG4gICAgICBiaW5kaW5nOiB7XG4gICAgICAgIGV4cHJlc3Npb25JbmRleCxcbiAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgYXR0cmlidXRlVmFsdWVQcmUsXG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlUG9zdFxuICAgICAgfVxuICAgIH0gPSBpbnN0YW5jZUJpbmRpbmc7XG5cbiAgICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbnNbZXhwcmVzc2lvbkluZGV4XTtcblxuICAgIGlmIChjdXJyZW50RXhwcmVzc2lvbiA9PT0gZXhwcmVzc2lvbikge1xuICAgICAgLy8gbm8gbmVlZCB0byB1cGRhdGUsIHNhbWUgYXMgYmVmb3JlXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlQmluZGluZy5jdXJyZW50RXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG5cbiAgICBpZiAoYXR0cmlidXRlTmFtZSkgeyAvLyBhdHRyaWJ1dGUgcmVwbGFjZW1lbnRcbiAgICAgIGlmIChleHByZXNzaW9uID09PSBudWxsKSB7XG4gICAgICAgIC8vIG51bGwgaXMgdHJlYXRlZCBhcyBhIHNwZWNpYWwgY2FzZSBieSB0aGUgZnJhbWV3b3JrIC0gd2UgZG9uJ3QgcmVuZGVyIGFuIGF0dHJpYnV0ZSBhdCBhbGwgaW4gdGhpcyBjYXNlXG4gICAgICAgIHRhcmdldE5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYXR0cmlidXRlIHZhbHVlIGlzIG5vdCBudWxsOyBzZXQgYSBuZXcgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gYXR0cmlidXRlVmFsdWVQcmUgKyB0b1N0cmluZyhleHByZXNzaW9uKSArIGF0dHJpYnV0ZVZhbHVlUG9zdDtcbiAgICAgICAgdGFyZ2V0Tm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIHRleHQgbm9kZSAvIGNoaWxkIGVsZW1lbnQgLyBjaGlsZHJlbiByZXBsYWNlbWVudFxuICAgICAgbGV0IG5ld05vZGU7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShleHByZXNzaW9uKSkgeyAvLyBhcnJheSBvZiBET00gZWxlbWVudHMgcHJvZHVjZWQgYnkgdGFnIHRlbXBsYXRlIGxpdGVyYWxzXG4gICAgICAgIHBhdGNoQ2hpbGRyZW4oZXhwcmVzc2lvbiwgaW5zdGFuY2VCaW5kaW5nKTtcbiAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbiBpbnN0YW5jZW9mIEVsZW1lbnQpIHsgLy8gaHRtbCB0YWcgdGVtcGxhdGUgcmV0dXJuaW5nIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgbmV3Tm9kZSA9IGV4cHJlc3Npb247XG4gICAgICAgIHRhcmdldE5vZGUucmVwbGFjZVdpdGgobmV3Tm9kZSk7XG4gICAgICB9IGVsc2UgeyAvLyBwcmltaXRpdmUgLSBzdHJpbmcsIG51bWJlciwgZXRjXG4gICAgICAgIC8vIG5vZGVWYWx1ZSBpcyBmYXN0ZXIgdGhhbiB0ZXh0Q29udGVudCBzdXBwb3NlZGx5IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TFk2eTNIYkRWbWdcbiAgICAgICAgLy8gbm90ZSB3ZSBtYXkgYmUgcmVwbGFjaW5nIHRoZSB2YWx1ZSBpbiBhIHBsYWNlaG9sZGVyIHRleHQgbm9kZVxuICAgICAgICB0YXJnZXROb2RlLm5vZGVWYWx1ZSA9IHRvU3RyaW5nKGV4cHJlc3Npb24pO1xuICAgICAgfVxuICAgICAgaWYgKG5ld05vZGUpIHtcbiAgICAgICAgaW5zdGFuY2VCaW5kaW5nLnRhcmdldE5vZGUgPSBuZXdOb2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZSAodG9rZW5zKSB7XG4gIGxldCBodG1sU3RyaW5nID0gJyc7XG5cbiAgbGV0IHdpdGhpblRhZyA9IGZhbHNlO1xuICBsZXQgd2l0aGluQXR0cmlidXRlID0gZmFsc2U7XG4gIGxldCBlbGVtZW50SW5kZXhDb3VudGVyID0gLTE7IC8vIGRlcHRoLWZpcnN0IHRyYXZlcnNhbCBvcmRlclxuXG4gIGNvbnN0IGVsZW1lbnRzVG9CaW5kaW5ncyA9IG5ldyBNYXAoKTtcbiAgY29uc3QgZWxlbWVudEluZGV4ZXMgPSBbXTtcblxuICBsZXQgc2tpcFRva2VuQ2hhcnMgPSAwO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9rZW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgaHRtbFN0cmluZyArPSB0b2tlbi5zbGljZShza2lwVG9rZW5DaGFycyk7XG5cbiAgICBpZiAoaSA9PT0gbGVuIC0gMSkge1xuICAgICAgYnJlYWsgLy8gbm8gbmVlZCB0byBwcm9jZXNzIGNoYXJhY3RlcnMgLSBubyBtb3JlIGV4cHJlc3Npb25zIHRvIGJlIGZvdW5kXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0b2tlbi5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgY2hhciA9IHRva2VuLmNoYXJBdChqKTtcbiAgICAgIHN3aXRjaCAoY2hhcikge1xuICAgICAgICBjYXNlICc8Jzoge1xuICAgICAgICAgIGNvbnN0IG5leHRDaGFyID0gdG9rZW4uY2hhckF0KGogKyAxKTtcbiAgICAgICAgICBpZiAobmV4dENoYXIgPT09ICcvJykgeyAvLyBjbG9zaW5nIHRhZ1xuICAgICAgICAgICAgLy8gbGVhdmluZyBhbiBlbGVtZW50XG4gICAgICAgICAgICBlbGVtZW50SW5kZXhlcy5wb3AoKTtcbiAgICAgICAgICB9IGVsc2UgeyAvLyBub3QgYSBjbG9zaW5nIHRhZ1xuICAgICAgICAgICAgd2l0aGluVGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsZW1lbnRJbmRleGVzLnB1c2goKytlbGVtZW50SW5kZXhDb3VudGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICc+Jzoge1xuICAgICAgICAgIHdpdGhpblRhZyA9IGZhbHNlO1xuICAgICAgICAgIHdpdGhpbkF0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnPSc6IHtcbiAgICAgICAgICB3aXRoaW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW5kZXggPSBlbGVtZW50SW5kZXhlc1tlbGVtZW50SW5kZXhlcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBiaW5kaW5ncyA9IGdldEZyb21NYXAoZWxlbWVudHNUb0JpbmRpbmdzLCBlbGVtZW50SW5kZXgsICgpID0+IFtdKTtcblxuICAgIGxldCBhdHRyaWJ1dGVOYW1lO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZVByZTtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWVQb3N0O1xuICAgIGlmICh3aXRoaW5BdHRyaWJ1dGUpIHtcbiAgICAgIC8vIEkgbmV2ZXIgdXNlIHNpbmdsZS1xdW90ZXMgZm9yIGF0dHJpYnV0ZSB2YWx1ZXMgaW4gSFRNTCwgc28ganVzdCBzdXBwb3J0IGRvdWJsZS1xdW90ZXMgb3Igbm8tcXVvdGVzXG4gICAgICBjb25zdCBhdHRyaWJ1dGVQcmVNYXRjaCA9IC8oXFxTKyk9XCI/KFteXCI9XSopJC8uZXhlYyh0b2tlbik7XG4gICAgICBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlUHJlTWF0Y2hbMV07XG4gICAgICBhdHRyaWJ1dGVWYWx1ZVByZSA9IGF0dHJpYnV0ZVByZU1hdGNoWzJdO1xuICAgICAgY29uc3QgYXR0cmlidXRlUG9zdE1hdGNoID0gL14oW15cIj5dKikoXCI/KS8uZXhlYyh0b2tlbnNbaSArIDFdKTtcbiAgICAgIGF0dHJpYnV0ZVZhbHVlUG9zdCA9IGF0dHJpYnV0ZVBvc3RNYXRjaFsxXTtcbiAgICAgIC8vIE9wdGltaXphdGlvbjogcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgaXRzZWxmLCBzbyB3ZSBkb24ndCBjcmVhdGUgYSBkZWZhdWx0IGF0dHJpYnV0ZSB3aGljaCBpcyBlaXRoZXIgZW1wdHkgb3IganVzdFxuICAgICAgLy8gdGhlIFwicHJlXCIgdGV4dCwgZS5nLiBgPGRpdiBmb28+YCBvciBgPGRpdiBmb289XCJwcmVmaXhcIj5gLiBJdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoZSBleHByZXNzaW9uIGFueXdheS5cbiAgICAgIGh0bWxTdHJpbmcgPSBodG1sU3RyaW5nLnNsaWNlKDAsIC0xICogYXR0cmlidXRlUHJlTWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgIHNraXBUb2tlbkNoYXJzID0gYXR0cmlidXRlUG9zdE1hdGNoWzBdLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2tpcFRva2VuQ2hhcnMgPSAwO1xuICAgIH1cblxuICAgIGNvbnN0IGJpbmRpbmcgPSB7XG4gICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgYXR0cmlidXRlVmFsdWVQcmUsXG4gICAgICBhdHRyaWJ1dGVWYWx1ZVBvc3QsXG4gICAgICBleHByZXNzaW9uSW5kZXg6IGlcbiAgICB9O1xuXG4gICAgYmluZGluZ3MucHVzaChiaW5kaW5nKTtcblxuICAgIGlmICghd2l0aGluVGFnICYmICF3aXRoaW5BdHRyaWJ1dGUpIHtcbiAgICAgIC8vIEFkZCBhIHBsYWNlaG9sZGVyIHRleHQgbm9kZSwgc28gd2UgY2FuIGZpbmQgaXQgbGF0ZXIuIE5vdGUgd2Ugb25seSBzdXBwb3J0IG9uZSBkeW5hbWljIGNoaWxkIHRleHQgbm9kZVxuICAgICAgaHRtbFN0cmluZyArPSAnICc7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGVtcGxhdGUgPSBwYXJzZVRlbXBsYXRlKGh0bWxTdHJpbmcpO1xuXG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGUsXG4gICAgZWxlbWVudHNUb0JpbmRpbmdzXG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlCaW5kaW5ncyAoYmluZGluZ3MsIGVsZW1lbnQsIGluc3RhbmNlQmluZGluZ3MpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5kaW5ncy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJpbmRpbmcgPSBiaW5kaW5nc1tpXTtcblxuICAgIGNvbnN0IHRhcmdldE5vZGUgPSBiaW5kaW5nLmF0dHJpYnV0ZU5hbWVcbiAgICAgID8gZWxlbWVudCAvLyBhdHRyaWJ1dGUgYmluZGluZywganVzdCB1c2UgdGhlIGVsZW1lbnQgaXRzZWxmXG4gICAgICA6IGVsZW1lbnQuZmlyc3RDaGlsZDsgLy8gbm90IGFuIGF0dHJpYnV0ZSBiaW5kaW5nLCBzbyBoYXMgYSBwbGFjZWhvbGRlciB0ZXh0IG5vZGVcblxuICAgIGNvbnN0IGluc3RhbmNlQmluZGluZyA9IHtcbiAgICAgIGJpbmRpbmcsXG4gICAgICB0YXJnZXROb2RlLFxuICAgICAgdGFyZ2V0UGFyZW50Tm9kZTogdW5kZWZpbmVkLFxuICAgICAgY3VycmVudEV4cHJlc3Npb246IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBpbnN0YW5jZUJpbmRpbmdzLnB1c2goaW5zdGFuY2VCaW5kaW5nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmF2ZXJzZUFuZFNldHVwQmluZGluZ3MgKHJvb3RFbGVtZW50LCBlbGVtZW50c1RvQmluZGluZ3MpIHtcbiAgY29uc3QgaW5zdGFuY2VCaW5kaW5ncyA9IFtdO1xuXG4gIGxldCB0b3BMZXZlbEJpbmRpbmdzO1xuICBpZiAoZWxlbWVudHNUb0JpbmRpbmdzLnNpemUgPT09IDEgJiYgKHRvcExldmVsQmluZGluZ3MgPSBlbGVtZW50c1RvQmluZGluZ3MuZ2V0KDApKSkge1xuICAgIC8vIE9wdGltaXphdGlvbiBmb3IgdGhlIGNvbW1vbiBjYXNlIHdoZXJlIHRoZXJlJ3Mgb25seSBvbmUgZWxlbWVudCBhbmQgb25lIGJpbmRpbmdcbiAgICAvLyBTa2lwIGNyZWF0aW5nIGEgVHJlZVdhbGtlciBlbnRpcmVseSBhbmQganVzdCBoYW5kbGUgdGhlIHJvb3QgRE9NIGVsZW1lbnRcbiAgICBhcHBseUJpbmRpbmdzKHRvcExldmVsQmluZGluZ3MsIHJvb3RFbGVtZW50LCBpbnN0YW5jZUJpbmRpbmdzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyB0cmF2ZXJzZSBkb21cbiAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihyb290RWxlbWVudCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuXG4gICAgbGV0IGVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgICBsZXQgZWxlbWVudEluZGV4ID0gLTE7XG4gICAgZG8ge1xuICAgICAgY29uc3QgYmluZGluZ3MgPSBlbGVtZW50c1RvQmluZGluZ3MuZ2V0KCsrZWxlbWVudEluZGV4KTtcbiAgICAgIGlmIChiaW5kaW5ncykge1xuICAgICAgICBhcHBseUJpbmRpbmdzKGJpbmRpbmdzLCBlbGVtZW50LCBpbnN0YW5jZUJpbmRpbmdzKTtcbiAgICAgIH1cbiAgICB9IHdoaWxlICgoZWxlbWVudCA9IHRyZWVXYWxrZXIubmV4dE5vZGUoKSkpXG4gIH1cblxuICByZXR1cm4gaW5zdGFuY2VCaW5kaW5nc1xufVxuXG5mdW5jdGlvbiBwYXJzZUh0bWwgKHRva2Vucykge1xuICAvLyBBbGwgdGVtcGxhdGVzIGFuZCBib3VuZCBleHByZXNzaW9ucyBhcmUgdW5pcXVlIHBlciB0b2tlbnMgYXJyYXlcbiAgY29uc3QgeyB0ZW1wbGF0ZSwgZWxlbWVudHNUb0JpbmRpbmdzIH0gPSBnZXRGcm9tTWFwKHBhcnNlQ2FjaGUsIHRva2VucywgKCkgPT4gcGFyc2UodG9rZW5zKSk7XG5cbiAgLy8gV2hlbiB3ZSBwYXJzZUh0bWwsIHdlIGFsd2F5cyByZXR1cm4gYSBmcmVzaCBET00gaW5zdGFuY2UgcmVhZHkgdG8gYmUgdXBkYXRlZFxuICBjb25zdCBkb20gPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSkuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgaW5zdGFuY2VCaW5kaW5ncyA9IHRyYXZlcnNlQW5kU2V0dXBCaW5kaW5ncyhkb20sIGVsZW1lbnRzVG9CaW5kaW5ncyk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZURvbUluc3RhbmNlIChleHByZXNzaW9ucykge1xuICAgIHBhdGNoKGV4cHJlc3Npb25zLCBpbnN0YW5jZUJpbmRpbmdzKTtcbiAgICByZXR1cm4gZG9tXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhbWV3b3JrIChzdGF0ZSkge1xuICBjb25zdCBkb21JbnN0YW5jZXMgPSBnZXRGcm9tTWFwKGRvbUluc3RhbmNlc0NhY2hlLCBzdGF0ZSwgKCkgPT4gbmV3IE1hcCgpKTtcbiAgbGV0IGRvbUluc3RhbmNlQ2FjaGVLZXkgPSB1bmtleWVkU3ltYm9sO1xuXG4gIGZ1bmN0aW9uIGh0bWwgKHRva2VucywgLi4uZXhwcmVzc2lvbnMpIHtcbiAgICAvLyBFYWNoIHVuaXF1ZSBsZXhpY2FsIHVzYWdlIG9mIG1hcCgpIGlzIGNvbnNpZGVyZWQgdW5pcXVlIGR1ZSB0byB0aGUgaHRtbGBgIHRhZ2dlZCB0ZW1wbGF0ZSBjYWxsIGl0IG1ha2VzLFxuICAgIC8vIHdoaWNoIGhhcyBsZXhpY2FsbHkgdW5pcXVlIHRva2Vucy4gVGhlIHVua2V5ZWQgc3ltYm9sIGlzIGp1c3QgdXNlZCBmb3IgaHRtbGBgIHVzYWdlIG91dHNpZGUgb2YgYSBtYXAoKS5cbiAgICBjb25zdCBkb21JbnN0YW5jZXNGb3JUb2tlbnMgPSBnZXRGcm9tTWFwKGRvbUluc3RhbmNlcywgdG9rZW5zLCAoKSA9PiBuZXcgTWFwKCkpO1xuICAgIGNvbnN0IHVwZGF0ZURvbUluc3RhbmNlID0gZ2V0RnJvbU1hcChkb21JbnN0YW5jZXNGb3JUb2tlbnMsIGRvbUluc3RhbmNlQ2FjaGVLZXksICgpID0+IHBhcnNlSHRtbCh0b2tlbnMpKTtcblxuICAgIHJldHVybiB1cGRhdGVEb21JbnN0YW5jZShleHByZXNzaW9ucykgLy8gdXBkYXRlIHdpdGggZXhwcmVzc2lvbnNcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcCAoYXJyYXksIGNhbGxiYWNrLCBrZXlGdW5jdGlvbikge1xuICAgIHJldHVybiBhcnJheS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbENhY2hlS2V5ID0gZG9tSW5zdGFuY2VDYWNoZUtleTtcbiAgICAgIGRvbUluc3RhbmNlQ2FjaGVLZXkgPSBrZXlGdW5jdGlvbihpdGVtKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhpdGVtLCBpbmRleClcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGRvbUluc3RhbmNlQ2FjaGVLZXkgPSBvcmlnaW5hbENhY2hlS2V5O1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4geyBtYXAsIGh0bWwgfVxufVxuXG5mdW5jdGlvbiByZW5kZXIgKGNvbnRhaW5lciwgc3RhdGUsIGhlbHBlcnMsIGV2ZW50cywgYWN0aW9ucywgcmVmcywgYWJvcnRTaWduYWwsIGFjdGlvbkNvbnRleHQsIGZpcnN0UmVuZGVyKSB7XG4gIGNvbnN0IHsgbGFiZWxXaXRoU2tpbiwgdGl0bGVGb3JFbW9qaSwgdW5pY29kZVdpdGhTa2luIH0gPSBoZWxwZXJzO1xuICBjb25zdCB7IGh0bWwsIG1hcCB9ID0gY3JlYXRlRnJhbWV3b3JrKHN0YXRlKTtcblxuICBmdW5jdGlvbiBlbW9qaUxpc3QgKGVtb2ppcywgc2VhcmNoTW9kZSwgcHJlZml4KSB7XG4gICAgcmV0dXJuIG1hcChlbW9qaXMsIChlbW9qaSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIGh0bWxgPGJ1dHRvbiByb2xlPVwiJHtzZWFyY2hNb2RlID8gJ29wdGlvbicgOiAnbWVudWl0ZW0nfVwiIGFyaWEtc2VsZWN0ZWQ9XCIke3NlYXJjaE1vZGUgPyBpID09PSBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtIDogbnVsbH1cIiBhcmlhLWxhYmVsPVwiJHtsYWJlbFdpdGhTa2luKGVtb2ppLCBzdGF0ZS5jdXJyZW50U2tpblRvbmUpfVwiIHRpdGxlPVwiJHt0aXRsZUZvckVtb2ppKGVtb2ppKX1cIiBjbGFzcz1cIiR7XG4gICAgICAgICAgICAgICAgJ2Vtb2ppJyArXG4gICAgICAgICAgICAgICAgKHNlYXJjaE1vZGUgJiYgaSA9PT0gc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA/ICcgYWN0aXZlJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgKGVtb2ppLnVuaWNvZGUgPyAnJyA6ICcgY3VzdG9tLWVtb2ppJylcbiAgICAgICAgICAgICAgfVwiIGlkPVwiJHtgJHtwcmVmaXh9LSR7ZW1vamkuaWR9YH1cIiBzdHlsZT1cIiR7ZW1vamkudW5pY29kZSA/IG51bGwgOiBgLS1jdXN0b20tZW1vamktYmFja2dyb3VuZDogdXJsKCR7SlNPTi5zdHJpbmdpZnkoZW1vamkudXJsKX0pYH1cIj4ke1xuICAgICAgICBlbW9qaS51bmljb2RlXG4gICAgICAgICAgPyB1bmljb2RlV2l0aFNraW4oZW1vamksIHN0YXRlLmN1cnJlbnRTa2luVG9uZSlcbiAgICAgICAgICA6ICcnXG4gICAgICB9PC9idXR0b24+YFxuICAgICAgLy8gSXQncyBpbXBvcnRhbnQgZm9yIHRoZSBjYWNoZSBrZXkgdG8gYmUgdW5pcXVlIGJhc2VkIG9uIHRoZSBwcmVmaXgsIGJlY2F1c2UgdGhlIGZyYW1ld29yayBjYWNoZXMgYmFzZWQgb24gdGhlXG4gICAgICAvLyB1bmlxdWUgdG9rZW5zICsgY2FjaGUga2V5LCBhbmQgdGhlIHNhbWUgZW1vamkgbWF5IGJlIHVzZWQgaW4gdGhlIHRhYiBhcyB3ZWxsIGFzIGluIHRoZSBmYXYgYmFyXG4gICAgfSwgZW1vamkgPT4gYCR7cHJlZml4fS0ke2Vtb2ppLmlkfWApXG4gIH1cblxuICBjb25zdCBzZWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBodG1sYDxzZWN0aW9uIGRhdGEtcmVmPVwicm9vdEVsZW1lbnRcIiBjbGFzcz1cInBpY2tlclwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLmkxOG4ucmVnaW9uTGFiZWx9XCIgc3R5bGU9XCIke3N0YXRlLnBpY2tlclN0eWxlIHx8ICcnfVwiPjxkaXYgY2xhc3M9XCJwYWQtdG9wXCI+PC9kaXY+PGRpdiBjbGFzcz1cInNlYXJjaC1yb3dcIj48ZGl2IGNsYXNzPVwic2VhcmNoLXdyYXBwZXJcIj48aW5wdXQgaWQ9XCJzZWFyY2hcIiBjbGFzcz1cInNlYXJjaFwiIHR5cGU9XCJzZWFyY2hcIiByb2xlPVwiY29tYm9ib3hcIiBlbnRlcmtleWhpbnQ9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIiR7c3RhdGUuaTE4bi5zZWFyY2hMYWJlbH1cIiBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBzcGVsbGNoZWNrPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCIkeyEhKHN0YXRlLnNlYXJjaE1vZGUgJiYgc3RhdGUuY3VycmVudEVtb2ppcy5sZW5ndGgpfVwiIGFyaWEtY29udHJvbHM9XCJzZWFyY2gtcmVzdWx0c1wiIGFyaWEtZGVzY3JpYmVkYnk9XCJzZWFyY2gtZGVzY3JpcHRpb25cIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XCIke3N0YXRlLmFjdGl2ZVNlYXJjaEl0ZW1JZCA/IGBlbW8tJHtzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtSWR9YCA6IG51bGx9XCIgZGF0YS1yZWY9XCJzZWFyY2hFbGVtZW50XCIgZGF0YS1vbi1pbnB1dD1cIm9uU2VhcmNoSW5wdXRcIiBkYXRhLW9uLWtleWRvd249XCJvblNlYXJjaEtleWRvd25cIj48bGFiZWwgY2xhc3M9XCJzci1vbmx5XCIgZm9yPVwic2VhcmNoXCI+JHtzdGF0ZS5pMThuLnNlYXJjaExhYmVsfTwvbGFiZWw+IDxzcGFuIGlkPVwic2VhcmNoLWRlc2NyaXB0aW9uXCIgY2xhc3M9XCJzci1vbmx5XCI+JHtzdGF0ZS5pMThuLnNlYXJjaERlc2NyaXB0aW9ufTwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVwic2tpbnRvbmUtYnV0dG9uLXdyYXBwZXIgJHtzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkQWZ0ZXJBbmltYXRpb24gPyAnZXhwYW5kZWQnIDogJyd9XCI+PGJ1dHRvbiBpZD1cInNraW50b25lLWJ1dHRvblwiIGNsYXNzPVwiZW1vamkgJHtzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID8gJ2hpZGUtZm9jdXMnIDogJyd9XCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuc2tpblRvbmVCdXR0b25MYWJlbH1cIiB0aXRsZT1cIiR7c3RhdGUuc2tpblRvbmVCdXR0b25MYWJlbH1cIiBhcmlhLWRlc2NyaWJlZGJ5PVwic2tpbnRvbmUtZGVzY3JpcHRpb25cIiBhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiIGFyaWEtZXhwYW5kZWQ9XCIke3N0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWR9XCIgYXJpYS1jb250cm9scz1cInNraW50b25lLWxpc3RcIiBkYXRhLW9uLWNsaWNrPVwib25DbGlja1NraW5Ub25lQnV0dG9uXCI+JHtzdGF0ZS5za2luVG9uZUJ1dHRvblRleHQgfHwgJyd9PC9idXR0b24+PC9kaXY+PHNwYW4gaWQ9XCJza2ludG9uZS1kZXNjcmlwdGlvblwiIGNsYXNzPVwic3Itb25seVwiPiR7c3RhdGUuaTE4bi5za2luVG9uZURlc2NyaXB0aW9ufTwvc3Bhbj48ZGl2IGRhdGEtcmVmPVwic2tpblRvbmVEcm9wZG93blwiIGlkPVwic2tpbnRvbmUtbGlzdFwiIGNsYXNzPVwic2tpbnRvbmUtbGlzdCBoaWRlLWZvY3VzICR7c3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCA/ICcnIDogJ2hpZGRlbiBuby1hbmltYXRlJ31cIiBzdHlsZT1cInRyYW5zZm9ybTp0cmFuc2xhdGVZKCR7c3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCA/IDAgOiAnY2FsYygtMSAqIHZhcigtLW51bS1za2ludG9uZXMpICogdmFyKC0tdG90YWwtZW1vamktc2l6ZSkpJ30pXCIgcm9sZT1cImxpc3Rib3hcIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5pMThuLnNraW5Ub25lc0xhYmVsfVwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cInNraW50b25lLSR7c3RhdGUuYWN0aXZlU2tpblRvbmV9XCIgYXJpYS1oaWRkZW49XCIkeyFzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkfVwiIHRhYkluZGV4PVwiLTFcIiBkYXRhLW9uLWZvY3Vzb3V0PVwib25Ta2luVG9uZU9wdGlvbnNGb2N1c091dFwiIGRhdGEtb24tY2xpY2s9XCJvblNraW5Ub25lT3B0aW9uc0NsaWNrXCIgZGF0YS1vbi1rZXlkb3duPVwib25Ta2luVG9uZU9wdGlvbnNLZXlkb3duXCIgZGF0YS1vbi1rZXl1cD1cIm9uU2tpblRvbmVPcHRpb25zS2V5dXBcIj4ke1xuICAgIG1hcChzdGF0ZS5za2luVG9uZXMsIChza2luVG9uZSwgaSkgPT4ge1xuICAgIHJldHVybiBodG1sYDxkaXYgaWQ9XCJza2ludG9uZS0ke2l9XCIgY2xhc3M9XCJlbW9qaSAke2kgPT09IHN0YXRlLmFjdGl2ZVNraW5Ub25lID8gJ2FjdGl2ZScgOiAnJ31cIiBhcmlhLXNlbGVjdGVkPVwiJHtpID09PSBzdGF0ZS5hY3RpdmVTa2luVG9uZX1cIiByb2xlPVwib3B0aW9uXCIgdGl0bGU9XCIke3N0YXRlLmkxOG4uc2tpblRvbmVzW2ldfVwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLmkxOG4uc2tpblRvbmVzW2ldfVwiPiR7c2tpblRvbmV9PC9kaXY+YFxuICAgIH0sIHNraW5Ub25lID0+IHNraW5Ub25lKVxuICAgICAgICB9PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIm5hdlwiIHJvbGU9XCJ0YWJsaXN0XCIgc3R5bGU9XCJncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KCR7c3RhdGUuZ3JvdXBzLmxlbmd0aH0sMWZyKVwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLmkxOG4uY2F0ZWdvcmllc0xhYmVsfVwiIGRhdGEtb24ta2V5ZG93bj1cIm9uTmF2S2V5ZG93blwiIGRhdGEtb24tY2xpY2s9XCJvbk5hdkNsaWNrXCI+JHtcbiAgICAgICAgICAgIG1hcChzdGF0ZS5ncm91cHMsIChncm91cCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaHRtbGA8YnV0dG9uIHJvbGU9XCJ0YWJcIiBjbGFzcz1cIm5hdi1idXR0b25cIiBhcmlhLWNvbnRyb2xzPVwidGFiLSR7Z3JvdXAuaWR9XCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuaTE4bi5jYXRlZ29yaWVzW2dyb3VwLm5hbWVdfVwiIGFyaWEtc2VsZWN0ZWQ9XCIkeyFzdGF0ZS5zZWFyY2hNb2RlICYmIHN0YXRlLmN1cnJlbnRHcm91cC5pZCA9PT0gZ3JvdXAuaWR9XCIgdGl0bGU9XCIke3N0YXRlLmkxOG4uY2F0ZWdvcmllc1tncm91cC5uYW1lXX1cIiBkYXRhLWdyb3VwLWlkPVwiJHtncm91cC5pZH1cIj48ZGl2IGNsYXNzPVwibmF2LWVtb2ppIGVtb2ppXCI+JHtncm91cC5lbW9qaX08L2Rpdj48L2J1dHRvbj5gXG4gICAgICAgICAgICB9LCBncm91cCA9PiBncm91cC5pZClcbiAgICAgICAgICB9PC9kaXY+PGRpdiBjbGFzcz1cImluZGljYXRvci13cmFwcGVyXCI+PGRpdiBjbGFzcz1cImluZGljYXRvclwiIHN0eWxlPVwidHJhbnNmb3JtOnRyYW5zbGF0ZVgoJHsoLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKHN0YXRlLmlzUnRsID8gLTEgOiAxKSkgKiBzdGF0ZS5jdXJyZW50R3JvdXBJbmRleCAqIDEwMH0lKVwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJtZXNzYWdlICR7c3RhdGUubWVzc2FnZSA/ICcnIDogJ2dvbmUnfVwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPiR7c3RhdGUubWVzc2FnZSB8fCAnJ308L2Rpdj48ZGl2IGRhdGEtcmVmPVwidGFicGFuZWxFbGVtZW50XCIgY2xhc3M9XCJ0YWJwYW5lbCAkeyghc3RhdGUuZGF0YWJhc2VMb2FkZWQgfHwgc3RhdGUubWVzc2FnZSkgPyAnZ29uZScgOiAnJ31cIiByb2xlPVwiJHtzdGF0ZS5zZWFyY2hNb2RlID8gJ3JlZ2lvbicgOiAndGFicGFuZWwnfVwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLnNlYXJjaE1vZGUgPyBzdGF0ZS5pMThuLnNlYXJjaFJlc3VsdHNMYWJlbCA6IHN0YXRlLmkxOG4uY2F0ZWdvcmllc1tzdGF0ZS5jdXJyZW50R3JvdXAubmFtZV19XCIgaWQ9XCIke3N0YXRlLnNlYXJjaE1vZGUgPyBudWxsIDogYHRhYi0ke3N0YXRlLmN1cnJlbnRHcm91cC5pZH1gfVwiIHRhYkluZGV4PVwiMFwiIGRhdGEtb24tY2xpY2s9XCJvbkVtb2ppQ2xpY2tcIj48ZGl2IGRhdGEtYWN0aW9uPVwiY2FsY3VsYXRlRW1vamlHcmlkU3R5bGVcIj4ke1xuICAgICAgICAgICAgICBtYXAoc3RhdGUuY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzLCAoZW1vamlXaXRoQ2F0ZWdvcnksIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGA8ZGl2PjxkaXYgaWQ9XCJtZW51LWxhYmVsLSR7aX1cIiBjbGFzcz1cImNhdGVnb3J5ICR7c3RhdGUuY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMSAmJiBzdGF0ZS5jdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXNbMF0uY2F0ZWdvcnkgPT09ICcnID8gJ2dvbmUnIDogJyd9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JHtcbiAgICAgICAgICAgICAgICAgIHN0YXRlLnNlYXJjaE1vZGVcbiAgICAgICAgICAgICAgICAgICAgPyBzdGF0ZS5pMThuLnNlYXJjaFJlc3VsdHNMYWJlbFxuICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICBlbW9qaVdpdGhDYXRlZ29yeS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBlbW9qaVdpdGhDYXRlZ29yeS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdGF0ZS5pMThuLmNhdGVnb3JpZXMuY3VzdG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5pMThuLmNhdGVnb3JpZXNbc3RhdGUuY3VycmVudEdyb3VwLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9PC9kaXY+PGRpdiBjbGFzcz1cImVtb2ppLW1lbnUgJHtpICE9PSAwICYmICFzdGF0ZS5zZWFyY2hNb2RlICYmIHN0YXRlLmN1cnJlbnRHcm91cC5pZCA9PT0gLTEgPyAndmlzaWJpbGl0eS1hdXRvJyA6ICcnfVwiIHN0eWxlPVwiJHtgLS1udW0tcm93czogJHtNYXRoLmNlaWwoZW1vamlXaXRoQ2F0ZWdvcnkuZW1vamlzLmxlbmd0aCAvIHN0YXRlLm51bUNvbHVtbnMpfWB9XCIgZGF0YS1hY3Rpb249XCJ1cGRhdGVPbkludGVyc2VjdGlvblwiIHJvbGU9XCIke3N0YXRlLnNlYXJjaE1vZGUgPyAnbGlzdGJveCcgOiAnbWVudSd9XCIgYXJpYS1sYWJlbGxlZGJ5PVwibWVudS1sYWJlbC0ke2l9XCIgaWQ9XCIke3N0YXRlLnNlYXJjaE1vZGUgPyAnc2VhcmNoLXJlc3VsdHMnIDogbnVsbH1cIj4ke1xuICAgICAgICAgICAgICBlbW9qaUxpc3QoZW1vamlXaXRoQ2F0ZWdvcnkuZW1vamlzLCBzdGF0ZS5zZWFyY2hNb2RlLCAvKiBwcmVmaXggKi8gJ2VtbycpXG4gICAgICAgICAgICB9PC9kaXY+PC9kaXY+YFxuICAgICAgICAgICAgICB9LCBlbW9qaVdpdGhDYXRlZ29yeSA9PiBlbW9qaVdpdGhDYXRlZ29yeS5jYXRlZ29yeSlcbiAgICAgICAgICAgIH08L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiZmF2b3JpdGVzIG9uc2NyZWVuIGVtb2ppLW1lbnUgJHtzdGF0ZS5tZXNzYWdlID8gJ2dvbmUnIDogJyd9XCIgcm9sZT1cIm1lbnVcIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5pMThuLmZhdm9yaXRlc0xhYmVsfVwiIGRhdGEtb24tY2xpY2s9XCJvbkVtb2ppQ2xpY2tcIj4ke1xuICAgICAgICAgICAgZW1vamlMaXN0KHN0YXRlLmN1cnJlbnRGYXZvcml0ZXMsIC8qIHNlYXJjaE1vZGUgKi8gZmFsc2UsIC8qIHByZWZpeCAqLyAnZmF2JylcbiAgICAgICAgICB9PC9kaXY+PGJ1dHRvbiBkYXRhLXJlZj1cImJhc2VsaW5lRW1vamlcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJhYnMtcG9zIGhpZGRlbiBlbW9qaSBiYXNlbGluZS1lbW9qaVwiPlx1RDgzRFx1REUwMDwvYnV0dG9uPjwvc2VjdGlvbj5gXG4gIH07XG5cbiAgY29uc3Qgcm9vdERvbSA9IHNlY3Rpb24oKTtcblxuICAvLyBoZWxwZXIgZm9yIHRyYXZlcnNpbmcgdGhlIGRvbSwgZmluZGluZyBlbGVtZW50cyBieSBhbiBhdHRyaWJ1dGUsIGFuZCBnZXR0aW5nIHRoZSBhdHRyaWJ1dGUgdmFsdWVcbiAgY29uc3QgZm9yRWxlbWVudFdpdGhBdHRyaWJ1dGUgPSAoYXR0cmlidXRlTmFtZSwgY2FsbGJhY2spID0+IHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJpYnV0ZU5hbWV9XWApKSB7XG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChmaXJzdFJlbmRlcikgeyAvLyBub3QgYSByZS1yZW5kZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm9vdERvbSk7XG5cbiAgICAvLyB3ZSBvbmx5IGJpbmQgZXZlbnRzL3JlZnMgb25jZSAtIHRoZXJlIGlzIG5vIG5lZWQgdG8gZmluZCB0aGVtIGFnYWluIGdpdmVuIHRoaXMgY29tcG9uZW50IHN0cnVjdHVyZVxuXG4gICAgLy8gYmluZCBldmVudHNcbiAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBbJ2NsaWNrJywgJ2ZvY3Vzb3V0JywgJ2lucHV0JywgJ2tleWRvd24nLCAna2V5dXAnXSkge1xuICAgICAgZm9yRWxlbWVudFdpdGhBdHRyaWJ1dGUoYGRhdGEtb24tJHtldmVudE5hbWV9YCwgKGVsZW1lbnQsIGxpc3RlbmVyTmFtZSkgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudHNbbGlzdGVuZXJOYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIHJlZnNcbiAgICBmb3JFbGVtZW50V2l0aEF0dHJpYnV0ZSgnZGF0YS1yZWYnLCAoZWxlbWVudCwgcmVmKSA9PiB7XG4gICAgICByZWZzW3JlZl0gPSBlbGVtZW50O1xuICAgIH0pO1xuXG4gICAgLy8gZGVzdHJveS9hYm9ydCBsb2dpY1xuICAgIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHJvb3REb20pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gc2V0IHVwIGFjdGlvbnMgLSB0aGVzZSBhcmUgcmUtYm91bmQgb24gZXZlcnkgcmVuZGVyXG4gIGZvckVsZW1lbnRXaXRoQXR0cmlidXRlKCdkYXRhLWFjdGlvbicsIChlbGVtZW50LCBhY3Rpb24pID0+IHtcbiAgICBsZXQgYm91bmRBY3Rpb25zID0gYWN0aW9uQ29udGV4dC5nZXQoYWN0aW9uKTtcbiAgICBpZiAoIWJvdW5kQWN0aW9ucykge1xuICAgICAgYWN0aW9uQ29udGV4dC5zZXQoYWN0aW9uLCAoYm91bmRBY3Rpb25zID0gbmV3IFdlYWtTZXQoKSkpO1xuICAgIH1cblxuICAgIC8vIGF2b2lkIGFwcGx5aW5nIHRoZSBzYW1lIGFjdGlvbiB0byB0aGUgc2FtZSBlbGVtZW50IG11bHRpcGxlIHRpbWVzXG4gICAgaWYgKCFib3VuZEFjdGlvbnMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBib3VuZEFjdGlvbnMuYWRkKGVsZW1lbnQpO1xuICAgICAgYWN0aW9uc1thY3Rpb25dKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBxTSA9IHR5cGVvZiBxdWV1ZU1pY3JvdGFzayA9PT0gJ2Z1bmN0aW9uJyA/IHF1ZXVlTWljcm90YXNrIDogY2FsbGJhY2sgPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihjYWxsYmFjayk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlIChhYm9ydFNpZ25hbCkge1xuICBsZXQgZGVzdHJveWVkID0gZmFsc2U7XG4gIGxldCBjdXJyZW50T2JzZXJ2ZXI7XG5cbiAgY29uc3QgcHJvcHNUb09ic2VydmVycyA9IG5ldyBNYXAoKTtcbiAgY29uc3QgZGlydHlPYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG5cbiAgbGV0IHF1ZXVlZDtcblxuICBjb25zdCBmbHVzaCA9ICgpID0+IHtcbiAgICBpZiAoZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgb2JzZXJ2ZXJzVG9SdW4gPSBbLi4uZGlydHlPYnNlcnZlcnNdO1xuICAgIGRpcnR5T2JzZXJ2ZXJzLmNsZWFyKCk7IC8vIGNsZWFyIGJlZm9yZSBydW5uaW5nIHRvIGZvcmNlIGFueSBuZXcgdXBkYXRlcyB0byBydW4gaW4gYW5vdGhlciB0aWNrIG9mIHRoZSBsb29wXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2Ygb2JzZXJ2ZXJzVG9SdW4pIHtcbiAgICAgICAgb2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgcXVldWVkID0gZmFsc2U7XG4gICAgICBpZiAoZGlydHlPYnNlcnZlcnMuc2l6ZSkgeyAvLyBuZXcgdXBkYXRlcywgcXVldWUgYW5vdGhlciBvbmVcbiAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgcU0oZmx1c2gpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGF0ZSA9IG5ldyBQcm94eSh7fSwge1xuICAgIGdldCAodGFyZ2V0LCBwcm9wKSB7XG4gICAgICBpZiAoY3VycmVudE9ic2VydmVyKSB7XG4gICAgICAgIGxldCBvYnNlcnZlcnMgPSBwcm9wc1RvT2JzZXJ2ZXJzLmdldChwcm9wKTtcbiAgICAgICAgaWYgKCFvYnNlcnZlcnMpIHtcbiAgICAgICAgICBvYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgcHJvcHNUb09ic2VydmVycy5zZXQocHJvcCwgb2JzZXJ2ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlcnMuYWRkKGN1cnJlbnRPYnNlcnZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdXG4gICAgfSxcbiAgICBzZXQgKHRhcmdldCwgcHJvcCwgbmV3VmFsdWUpIHtcbiAgICAgIGlmICh0YXJnZXRbcHJvcF0gIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IG5ld1ZhbHVlO1xuICAgICAgICBjb25zdCBvYnNlcnZlcnMgPSBwcm9wc1RvT2JzZXJ2ZXJzLmdldChwcm9wKTtcbiAgICAgICAgaWYgKG9ic2VydmVycykge1xuICAgICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2Ygb2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgICBkaXJ0eU9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXF1ZXVlZCkge1xuICAgICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHFNKGZsdXNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjcmVhdGVFZmZlY3QgPSAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBydW5uYWJsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG9sZE9ic2VydmVyID0gY3VycmVudE9ic2VydmVyO1xuICAgICAgY3VycmVudE9ic2VydmVyID0gcnVubmFibGU7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soKVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY3VycmVudE9ic2VydmVyID0gb2xkT2JzZXJ2ZXI7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gcnVubmFibGUoKVxuICB9O1xuXG4gIC8vIGRlc3Ryb3kgbG9naWNcbiAgYWJvcnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG4gICAgZGVzdHJveWVkID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZSxcbiAgICBjcmVhdGVFZmZlY3RcbiAgfVxufVxuXG4vLyBDb21wYXJlIHR3byBhcnJheXMsIHdpdGggYSBmdW5jdGlvbiBjYWxsZWQgb24gZWFjaCBpdGVtIGluIHRoZSB0d28gYXJyYXlzIHRoYXQgcmV0dXJucyB0cnVlIGlmIHRoZSBpdGVtcyBhcmUgZXF1YWxcbmZ1bmN0aW9uIGFycmF5c0FyZUVxdWFsQnlGdW5jdGlvbiAobGVmdCwgcmlnaHQsIGFyZUVxdWFsRnVuYykge1xuICBpZiAobGVmdC5sZW5ndGggIT09IHJpZ2h0Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVmdC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghYXJlRXF1YWxGdW5jKGxlZnRbaV0sIHJpZ2h0W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmNvbnN0IGludGVyc2VjdGlvbk9ic2VydmVyQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBpbnRlcnNlY3Rpb25PYnNlcnZlckFjdGlvbiAobm9kZSwgYWJvcnRTaWduYWwsIGxpc3RlbmVyKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIHtcbiAgICAvLyBUaGUgc2Nyb2xsIHJvb3QgaXMgYWx3YXlzIGAudGFicGFuZWxgXG4gICAgY29uc3Qgcm9vdCA9IG5vZGUuY2xvc2VzdCgnLnRhYnBhbmVsJyk7XG5cbiAgICBsZXQgb2JzZXJ2ZXIgPSBpbnRlcnNlY3Rpb25PYnNlcnZlckNhY2hlLmdldChyb290KTtcbiAgICBpZiAoIW9ic2VydmVyKSB7XG4gICAgICAvLyBUT0RPOiByZXBsYWNlIHRoaXMgd2l0aCB0aGUgY29udGVudHZpc2liaWxpdHlhdXRvc3RhdGVjaGFuZ2UgZXZlbnQgd2hlbiBhbGwgc3VwcG9ydGVkIGJyb3dzZXJzIHN1cHBvcnQgaXQuXG4gICAgICAvLyBGb3Igbm93IHdlIHVzZSBJbnRlcnNlY3Rpb25PYnNlcnZlciBiZWNhdXNlIGl0IGhhcyBiZXR0ZXIgY3Jvc3MtYnJvd3NlciBzdXBwb3J0LCBhbmQgaXQgd291bGQgYmUgYmFkIGZvclxuICAgICAgLy8gb2xkIFNhZmFyaSB2ZXJzaW9ucyBpZiB0aGV5IGVhZ2VybHkgZG93bmxvYWRlZCBhbGwgY3VzdG9tIGVtb2ppIGFsbCBhdCBvbmNlLlxuICAgICAgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIobGlzdGVuZXIsIHtcbiAgICAgICAgcm9vdCxcbiAgICAgICAgLy8gdHJpZ2dlciBpZiB3ZSBhcmUgMS8yIHNjcm9sbCBjb250YWluZXIgaGVpZ2h0IGF3YXkgc28gdGhhdCB0aGUgaW1hZ2VzIGxvYWQgYSBiaXQgcXVpY2tlciB3aGlsZSBzY3JvbGxpbmdcbiAgICAgICAgcm9vdE1hcmdpbjogJzUwJSAwcHggNTAlIDBweCcsXG4gICAgICAgIC8vIHRyaWdnZXIgaWYgYW55IHBhcnQgb2YgdGhlIGVtb2ppIGdyaWQgaXMgaW50ZXJzZWN0aW5nXG4gICAgICAgIHRocmVzaG9sZDogMFxuICAgICAgfSk7XG5cbiAgICAgIC8vIGF2b2lkIGNyZWF0aW5nIGEgbmV3IEludGVyc2VjdGlvbk9ic2VydmVyIGZvciBldmVyeSBjYXRlZ29yeTsganVzdCB1c2Ugb25lIGZvciB0aGUgd2hvbGUgcm9vdFxuICAgICAgaW50ZXJzZWN0aW9uT2JzZXJ2ZXJDYWNoZS5zZXQocm9vdCwgb2JzZXJ2ZXIpO1xuXG4gICAgICAvLyBhc3N1bWUgdGhhdCB0aGUgYWJvcnRTaWduYWwgaXMgYWx3YXlzIHRoZSBzYW1lIGZvciB0aGlzIHJvb3Qgbm9kZTsganVzdCBhZGQgb25lIGV2ZW50IGxpc3RlbmVyXG4gICAgICBhYm9ydFNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlKTtcbiAgfVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3Qsbm8tbGFiZWxzLG5vLWlubmVyLWRlY2xhcmF0aW9ucyAqL1xuXG4vLyBjb25zdGFudHNcbmNvbnN0IEVNUFRZX0FSUkFZID0gW107XG5cbmNvbnN0IHsgYXNzaWduIH0gPSBPYmplY3Q7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvb3QgKHNoYWRvd1Jvb3QsIHByb3BzKSB7XG4gIGNvbnN0IHJlZnMgPSB7fTtcbiAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICBjb25zdCBhYm9ydFNpZ25hbCA9IGFib3J0Q29udHJvbGxlci5zaWduYWw7XG4gIGNvbnN0IHsgc3RhdGUsIGNyZWF0ZUVmZmVjdCB9ID0gY3JlYXRlU3RhdGUoYWJvcnRTaWduYWwpO1xuICBjb25zdCBhY3Rpb25Db250ZXh0ID0gbmV3IE1hcCgpO1xuXG4gIC8vIGluaXRpYWwgc3RhdGVcbiAgYXNzaWduKHN0YXRlLCB7XG4gICAgc2tpblRvbmVFbW9qaTogdW5kZWZpbmVkLFxuICAgIGkxOG46IHVuZGVmaW5lZCxcbiAgICBkYXRhYmFzZTogdW5kZWZpbmVkLFxuICAgIGN1c3RvbUVtb2ppOiB1bmRlZmluZWQsXG4gICAgY3VzdG9tQ2F0ZWdvcnlTb3J0aW5nOiB1bmRlZmluZWQsXG4gICAgZW1vamlWZXJzaW9uOiB1bmRlZmluZWRcbiAgfSk7XG5cbiAgLy8gcHVibGljIHByb3BzXG4gIGFzc2lnbihzdGF0ZSwgcHJvcHMpO1xuXG4gIC8vIHByaXZhdGUgcHJvcHNcbiAgYXNzaWduKHN0YXRlLCB7XG4gICAgaW5pdGlhbExvYWQ6IHRydWUsXG4gICAgY3VycmVudEVtb2ppczogW10sXG4gICAgY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzOiBbXSxcbiAgICByYXdTZWFyY2hUZXh0OiAnJyxcbiAgICBzZWFyY2hUZXh0OiAnJyxcbiAgICBzZWFyY2hNb2RlOiBmYWxzZSxcbiAgICBhY3RpdmVTZWFyY2hJdGVtOiAtMSxcbiAgICBtZXNzYWdlOiB1bmRlZmluZWQsXG4gICAgc2tpblRvbmVQaWNrZXJFeHBhbmRlZDogZmFsc2UsXG4gICAgc2tpblRvbmVQaWNrZXJFeHBhbmRlZEFmdGVyQW5pbWF0aW9uOiBmYWxzZSxcbiAgICBjdXJyZW50U2tpblRvbmU6IDAsXG4gICAgYWN0aXZlU2tpblRvbmU6IDAsXG4gICAgc2tpblRvbmVCdXR0b25UZXh0OiB1bmRlZmluZWQsXG4gICAgcGlja2VyU3R5bGU6IHVuZGVmaW5lZCxcbiAgICBza2luVG9uZUJ1dHRvbkxhYmVsOiAnJyxcbiAgICBza2luVG9uZXM6IFtdLFxuICAgIGN1cnJlbnRGYXZvcml0ZXM6IFtdLFxuICAgIGRlZmF1bHRGYXZvcml0ZUVtb2ppczogdW5kZWZpbmVkLFxuICAgIG51bUNvbHVtbnM6IERFRkFVTFRfTlVNX0NPTFVNTlMsXG4gICAgaXNSdGw6IGZhbHNlLFxuICAgIGN1cnJlbnRHcm91cEluZGV4OiAwLFxuICAgIGdyb3VwczogZ3JvdXBzLFxuICAgIGRhdGFiYXNlTG9hZGVkOiBmYWxzZSxcbiAgICBhY3RpdmVTZWFyY2hJdGVtSWQ6IHVuZGVmaW5lZFxuICB9KTtcblxuICAvL1xuICAvLyBVcGRhdGUgdGhlIGN1cnJlbnQgZ3JvdXAgYmFzZWQgb24gdGhlIGN1cnJlbnRHcm91cEluZGV4XG4gIC8vXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmN1cnJlbnRHcm91cCAhPT0gc3RhdGUuZ3JvdXBzW3N0YXRlLmN1cnJlbnRHcm91cEluZGV4XSkge1xuICAgICAgc3RhdGUuY3VycmVudEdyb3VwID0gc3RhdGUuZ3JvdXBzW3N0YXRlLmN1cnJlbnRHcm91cEluZGV4XTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vXG4gIC8vIFV0aWxzL2hlbHBlcnNcbiAgLy9cblxuICBjb25zdCBmb2N1cyA9IGlkID0+IHtcbiAgICBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKGlkKS5mb2N1cygpO1xuICB9O1xuXG4gIGNvbnN0IGVtb2ppVG9Eb21Ob2RlID0gZW1vamkgPT4gc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChgZW1vLSR7ZW1vamkuaWR9YCk7XG5cbiAgLy8gZmlyZSBhIGN1c3RvbSBldmVudCB0aGF0IGNyb3NzZXMgdGhlIHNoYWRvdyBib3VuZGFyeVxuICBjb25zdCBmaXJlRXZlbnQgPSAobmFtZSwgZGV0YWlsKSA9PiB7XG4gICAgcmVmcy5yb290RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICBkZXRhaWwsXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICB9KSk7XG4gIH07XG5cbiAgLy9cbiAgLy8gQ29tcGFyaXNvbiB1dGlsc1xuICAvL1xuXG4gIGNvbnN0IGNvbXBhcmVFbW9qaUFycmF5cyA9IChhLCBiKSA9PiBhLmlkID09PSBiLmlkO1xuXG4gIGNvbnN0IGNvbXBhcmVDdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnk6IGFDYXRlZ29yeSwgZW1vamlzOiBhRW1vamlzIH0gPSBhO1xuICAgIGNvbnN0IHsgY2F0ZWdvcnk6IGJDYXRlZ29yeSwgZW1vamlzOiBiRW1vamlzIH0gPSBiO1xuXG4gICAgaWYgKGFDYXRlZ29yeSAhPT0gYkNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlzQXJlRXF1YWxCeUZ1bmN0aW9uKGFFbW9qaXMsIGJFbW9qaXMsIGNvbXBhcmVFbW9qaUFycmF5cylcbiAgfTtcblxuICAvL1xuICAvLyBVcGRhdGUgdXRpbHMgdG8gYXZvaWQgZXhjZXNzaXZlIHJlLXJlbmRlcnNcbiAgLy9cblxuICAvLyBhdm9pZCBleGNlc3NpdmUgcmUtcmVuZGVycyBieSBjaGVja2luZyB0aGUgdmFsdWUgYmVmb3JlIHNldHRpbmdcbiAgY29uc3QgdXBkYXRlQ3VycmVudEVtb2ppcyA9IChuZXdFbW9qaXMpID0+IHtcbiAgICBpZiAoIWFycmF5c0FyZUVxdWFsQnlGdW5jdGlvbihzdGF0ZS5jdXJyZW50RW1vamlzLCBuZXdFbW9qaXMsIGNvbXBhcmVFbW9qaUFycmF5cykpIHtcbiAgICAgIHN0YXRlLmN1cnJlbnRFbW9qaXMgPSBuZXdFbW9qaXM7XG4gICAgfVxuICB9O1xuXG4gIC8vIGF2b2lkIGV4Y2Vzc2l2ZSByZS1yZW5kZXJzXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaE1vZGUgPSAobmV3U2VhcmNoTW9kZSkgPT4ge1xuICAgIGlmIChzdGF0ZS5zZWFyY2hNb2RlICE9PSBuZXdTZWFyY2hNb2RlKSB7XG4gICAgICBzdGF0ZS5zZWFyY2hNb2RlID0gbmV3U2VhcmNoTW9kZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gYXZvaWQgZXhjZXNzaXZlIHJlLXJlbmRlcnNcbiAgY29uc3QgdXBkYXRlQ3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzID0gKG5ld0Vtb2ppc1dpdGhDYXRlZ29yaWVzKSA9PiB7XG4gICAgaWYgKCFhcnJheXNBcmVFcXVhbEJ5RnVuY3Rpb24oc3RhdGUuY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzLCBuZXdFbW9qaXNXaXRoQ2F0ZWdvcmllcywgY29tcGFyZUN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcykpIHtcbiAgICAgIHN0YXRlLmN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcyA9IG5ld0Vtb2ppc1dpdGhDYXRlZ29yaWVzO1xuICAgIH1cbiAgfTtcblxuICAvLyBIZWxwZXJzIHVzZWQgYnkgUGlja2VyVGVtcGxhdGVcblxuICBjb25zdCB1bmljb2RlV2l0aFNraW4gPSAoZW1vamksIGN1cnJlbnRTa2luVG9uZSkgPT4gKFxuICAgIChjdXJyZW50U2tpblRvbmUgJiYgZW1vamkuc2tpbnMgJiYgZW1vamkuc2tpbnNbY3VycmVudFNraW5Ub25lXSkgfHwgZW1vamkudW5pY29kZVxuICApO1xuXG4gIGNvbnN0IGxhYmVsV2l0aFNraW4gPSAoZW1vamksIGN1cnJlbnRTa2luVG9uZSkgPT4gKFxuICAgIHVuaXEoW1xuICAgICAgKGVtb2ppLm5hbWUgfHwgdW5pY29kZVdpdGhTa2luKGVtb2ppLCBjdXJyZW50U2tpblRvbmUpKSxcbiAgICAgIGVtb2ppLmFubm90YXRpb24sXG4gICAgICAuLi4oZW1vamkuc2hvcnRjb2RlcyB8fCBFTVBUWV9BUlJBWSlcbiAgICBdLmZpbHRlcihCb29sZWFuKSkuam9pbignLCAnKVxuICApO1xuXG4gIGNvbnN0IHRpdGxlRm9yRW1vamkgPSAoZW1vamkpID0+IChcbiAgICBlbW9qaS5hbm5vdGF0aW9uIHx8IChlbW9qaS5zaG9ydGNvZGVzIHx8IEVNUFRZX0FSUkFZKS5qb2luKCcsICcpXG4gICk7XG5cbiAgY29uc3QgaGVscGVycyA9IHtcbiAgICBsYWJlbFdpdGhTa2luLCB0aXRsZUZvckVtb2ppLCB1bmljb2RlV2l0aFNraW5cbiAgfTtcbiAgY29uc3QgZXZlbnRzID0ge1xuICAgIG9uQ2xpY2tTa2luVG9uZUJ1dHRvbixcbiAgICBvbkVtb2ppQ2xpY2ssXG4gICAgb25OYXZDbGljayxcbiAgICBvbk5hdktleWRvd24sXG4gICAgb25TZWFyY2hLZXlkb3duLFxuICAgIG9uU2tpblRvbmVPcHRpb25zQ2xpY2ssXG4gICAgb25Ta2luVG9uZU9wdGlvbnNGb2N1c091dCxcbiAgICBvblNraW5Ub25lT3B0aW9uc0tleWRvd24sXG4gICAgb25Ta2luVG9uZU9wdGlvbnNLZXl1cCxcbiAgICBvblNlYXJjaElucHV0XG4gIH07XG4gIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgY2FsY3VsYXRlRW1vamlHcmlkU3R5bGUsXG4gICAgdXBkYXRlT25JbnRlcnNlY3Rpb25cbiAgfTtcblxuICBsZXQgZmlyc3RSZW5kZXIgPSB0cnVlO1xuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHJlbmRlcihzaGFkb3dSb290LCBzdGF0ZSwgaGVscGVycywgZXZlbnRzLCBhY3Rpb25zLCByZWZzLCBhYm9ydFNpZ25hbCwgYWN0aW9uQ29udGV4dCwgZmlyc3RSZW5kZXIpO1xuICAgIGZpcnN0UmVuZGVyID0gZmFsc2U7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIERldGVybWluZSB0aGUgZW1vamkgc3VwcG9ydCBsZXZlbCAoaW4gcmVxdWVzdElkbGVDYWxsYmFjaylcbiAgLy9cblxuICAvLyBtb3VudCBsb2dpY1xuICBpZiAoIXN0YXRlLmVtb2ppVmVyc2lvbikge1xuICAgIGRldGVjdEVtb2ppU3VwcG9ydExldmVsKCkudGhlbihsZXZlbCA9PiB7XG4gICAgICAvLyBDYW4ndCBhY3R1YWxseSB0ZXN0IGVtb2ppIHN1cHBvcnQgaW4gSmVzdC9WaXRlc3QvSlNEb20sIGVtb2ppIG5ldmVyIHJlbmRlciBpbiBjb2xvciBpbiBDYWlyb1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmICghbGV2ZWwpIHtcbiAgICAgICAgc3RhdGUubWVzc2FnZSA9IHN0YXRlLmkxOG4uZW1vamlVbnN1cHBvcnRlZE1lc3NhZ2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvL1xuICAvLyBTZXQgb3IgdXBkYXRlIHRoZSBkYXRhYmFzZSBvYmplY3RcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNob3cgYSBMb2FkaW5nIG1lc3NhZ2UgaWYgaXQgdGFrZXMgYSBsb25nIHRpbWUsIG9yIHNob3cgYW4gZXJyb3IgaWYgdGhlcmUncyBhIG5ldHdvcmsvSURCIGVycm9yXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGF0YWJhc2VMb2FkaW5nICgpIHtcbiAgICAgIGxldCBzaG93aW5nTG9hZGluZ01lc3NhZ2UgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd2luZ0xvYWRpbmdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUubWVzc2FnZSA9IHN0YXRlLmkxOG4ubG9hZGluZ01lc3NhZ2U7XG4gICAgICB9LCBUSU1FT1VUX0JFRk9SRV9MT0FESU5HX01FU1NBR0UpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc3RhdGUuZGF0YWJhc2UucmVhZHkoKTtcbiAgICAgICAgc3RhdGUuZGF0YWJhc2VMb2FkZWQgPSB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICBzdGF0ZS5tZXNzYWdlID0gc3RhdGUuaTE4bi5uZXR3b3JrRXJyb3JNZXNzYWdlO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgICBpZiAoc2hvd2luZ0xvYWRpbmdNZXNzYWdlKSB7IC8vIFNlZW1zIHNhZmVyIHRoYW4gY2hlY2tpbmcgdGhlIGkxOG4gc3RyaW5nLCB3aGljaCBtYXkgY2hhbmdlXG4gICAgICAgICAgc2hvd2luZ0xvYWRpbmdNZXNzYWdlID0gZmFsc2U7XG4gICAgICAgICAgc3RhdGUubWVzc2FnZSA9ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZGF0YWJhc2UpIHtcbiAgICAgIC8qIG5vIGF3YWl0ICovXG4gICAgICBoYW5kbGVEYXRhYmFzZUxvYWRpbmcoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vXG4gIC8vIEdsb2JhbCBzdHlsZXMgZm9yIHRoZSBlbnRpcmUgcGlja2VyXG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0ZS5waWNrZXJTdHlsZSA9IGBcbiAgICAgIC0tbnVtLWdyb3VwczogJHtzdGF0ZS5ncm91cHMubGVuZ3RofTsgXG4gICAgICAtLWluZGljYXRvci1vcGFjaXR5OiAke3N0YXRlLnNlYXJjaE1vZGUgPyAwIDogMX07IFxuICAgICAgLS1udW0tc2tpbnRvbmVzOiAke05VTV9TS0lOX1RPTkVTfTtgO1xuICB9KTtcblxuICAvL1xuICAvLyBTZXQgb3IgdXBkYXRlIHRoZSBjdXN0b21FbW9qaVxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmN1c3RvbUVtb2ppICYmIHN0YXRlLmRhdGFiYXNlKSB7XG4gICAgICB1cGRhdGVDdXN0b21FbW9qaSgpOyAvLyByZS1ydW4gd2hlbmV2ZXIgY3VzdG9tRW1vamkgY2hhbmdlXG4gICAgfVxuICB9KTtcblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5jdXN0b21FbW9qaSAmJiBzdGF0ZS5jdXN0b21FbW9qaS5sZW5ndGgpIHtcbiAgICAgIGlmIChzdGF0ZS5ncm91cHMgIT09IGFsbEdyb3VwcykgeyAvLyBkb24ndCB1cGRhdGUgdW5uZWNlc3NhcmlseVxuICAgICAgICBzdGF0ZS5ncm91cHMgPSBhbGxHcm91cHM7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5ncm91cHMgIT09IGdyb3Vwcykge1xuICAgICAgaWYgKHN0YXRlLmN1cnJlbnRHcm91cEluZGV4KSB7XG4gICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGdyb3VwIGlzIGFueXRoaW5nIG90aGVyIHRoYW4gXCJjdXN0b21cIiAod2hpY2ggaXMgZmlyc3QpLCBkZWNyZW1lbnQuXG4gICAgICAgIC8vIFRoaXMgZml4ZXMgdGhlIG9kZCBjYXNlIHdoZXJlIHlvdSBzZXQgY3VzdG9tRW1vamksIHRoZW4gcGljayBhIGNhdGVnb3J5LCB0aGVuIHVuc2V0IGN1c3RvbUVtb2ppXG4gICAgICAgIHN0YXRlLmN1cnJlbnRHcm91cEluZGV4LS07XG4gICAgICB9XG4gICAgICBzdGF0ZS5ncm91cHMgPSBncm91cHM7XG4gICAgfVxuICB9KTtcblxuICAvL1xuICAvLyBTZXQgb3IgdXBkYXRlIHRoZSBwcmVmZXJyZWQgc2tpbiB0b25lXG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcmVmZXJyZWRTa2luVG9uZSAoKSB7XG4gICAgICBpZiAoc3RhdGUuZGF0YWJhc2VMb2FkZWQpIHtcbiAgICAgICAgc3RhdGUuY3VycmVudFNraW5Ub25lID0gYXdhaXQgc3RhdGUuZGF0YWJhc2UuZ2V0UHJlZmVycmVkU2tpblRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBubyBhd2FpdCAqLyB1cGRhdGVQcmVmZXJyZWRTa2luVG9uZSgpO1xuICB9KTtcblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLnNraW5Ub25lcyA9IEFycmF5KE5VTV9TS0lOX1RPTkVTKS5maWxsKCkubWFwKChfLCBpKSA9PiBhcHBseVNraW5Ub25lKHN0YXRlLnNraW5Ub25lRW1vamksIGkpKTtcbiAgfSk7XG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0ZS5za2luVG9uZUJ1dHRvblRleHQgPSBzdGF0ZS5za2luVG9uZXNbc3RhdGUuY3VycmVudFNraW5Ub25lXTtcbiAgfSk7XG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0ZS5za2luVG9uZUJ1dHRvbkxhYmVsID0gc3RhdGUuaTE4bi5za2luVG9uZUxhYmVsLnJlcGxhY2UoJ3tza2luVG9uZX0nLCBzdGF0ZS5pMThuLnNraW5Ub25lc1tzdGF0ZS5jdXJyZW50U2tpblRvbmVdKTtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gU2V0IG9yIHVwZGF0ZSB0aGUgZmF2b3JpdGVzIGVtb2ppc1xuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEZhdm9yaXRlRW1vamlzICgpIHtcbiAgICAgIGNvbnN0IHsgZGF0YWJhc2UgfSA9IHN0YXRlO1xuICAgICAgY29uc3QgZmF2cyA9IChhd2FpdCBQcm9taXNlLmFsbChNT1NUX0NPTU1PTkxZX1VTRURfRU1PSkkubWFwKHVuaWNvZGUgPT4gKFxuICAgICAgICBkYXRhYmFzZS5nZXRFbW9qaUJ5VW5pY29kZU9yTmFtZSh1bmljb2RlKVxuICAgICAgKSkpKS5maWx0ZXIoQm9vbGVhbik7IC8vIGZpbHRlciBiZWNhdXNlIGluIEplc3QvVml0ZXN0IHRlc3RzIHdlIGRvbid0IGhhdmUgYWxsIHRoZSBlbW9qaSBpbiB0aGUgREJcbiAgICAgIHN0YXRlLmRlZmF1bHRGYXZvcml0ZUVtb2ppcyA9IGZhdnM7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmRhdGFiYXNlTG9hZGVkKSB7XG4gICAgICAvKiBubyBhd2FpdCAqLyB1cGRhdGVEZWZhdWx0RmF2b3JpdGVFbW9qaXMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUN1c3RvbUVtb2ppICgpIHtcbiAgICAvLyBDZXJ0YWluIGVmZmVjdHMgaGF2ZSBhbiBpbXBsaWNpdCBkZXBlbmRlbmN5IG9uIGN1c3RvbUVtb2ppIHNpbmNlIGl0IGFmZmVjdHMgdGhlIGRhdGFiYXNlXG4gICAgLy8gR2V0dGluZyBpdCBoZXJlIG9uIHRoZSBzdGF0ZSBlbnN1cmVzIHRoaXMgZWZmZWN0IHJlLXJ1bnMgd2hlbiBjdXN0b21FbW9qaSBjaGFuZ2UuXG4gICAgY29uc3QgeyBjdXN0b21FbW9qaSwgZGF0YWJhc2UgfSA9IHN0YXRlO1xuICAgIGNvbnN0IGRhdGFiYXNlQ3VzdG9tRW1vamkgPSBjdXN0b21FbW9qaSB8fCBFTVBUWV9BUlJBWTtcbiAgICBpZiAoZGF0YWJhc2UuY3VzdG9tRW1vamkgIT09IGRhdGFiYXNlQ3VzdG9tRW1vamkpIHtcbiAgICAgIC8vIEF2b2lkIHNldHRpbmcgdGhpcyBpZiB0aGUgY3VzdG9tRW1vamkgaGF2ZSBfbm90XyBjaGFuZ2VkLCBiZWNhdXNlIHRoZSBzZXR0ZXIgdHJpZ2dlcnMgYSByZS1jb21wdXRhdGlvbiBvZiB0aGVcbiAgICAgIC8vIGBjdXN0b21FbW9qaUluZGV4YC4gTm90ZSB3ZSBkb24ndCBib3RoZXIgd2l0aCBkZWVwIG9iamVjdCBjaGFuZ2VzLlxuICAgICAgZGF0YWJhc2UuY3VzdG9tRW1vamkgPSBkYXRhYmFzZUN1c3RvbUVtb2ppO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRmF2b3JpdGVzICgpIHtcbiAgICAgIHVwZGF0ZUN1c3RvbUVtb2ppKCk7IC8vIHJlLXJ1biB3aGVuZXZlciBjdXN0b21FbW9qaSBjaGFuZ2VcbiAgICAgIGNvbnN0IHsgZGF0YWJhc2UsIGRlZmF1bHRGYXZvcml0ZUVtb2ppcywgbnVtQ29sdW1ucyB9ID0gc3RhdGU7XG4gICAgICBjb25zdCBkYkZhdm9yaXRlcyA9IGF3YWl0IGRhdGFiYXNlLmdldFRvcEZhdm9yaXRlRW1vamkobnVtQ29sdW1ucyk7XG4gICAgICBjb25zdCBmYXZvcml0ZXMgPSBhd2FpdCBzdW1tYXJpemVFbW9qaXModW5pcUJ5KFtcbiAgICAgICAgLi4uZGJGYXZvcml0ZXMsXG4gICAgICAgIC4uLmRlZmF1bHRGYXZvcml0ZUVtb2ppc1xuICAgICAgXSwgXyA9PiAoXy51bmljb2RlIHx8IF8ubmFtZSkpLnNsaWNlKDAsIG51bUNvbHVtbnMpKTtcbiAgICAgIHN0YXRlLmN1cnJlbnRGYXZvcml0ZXMgPSBmYXZvcml0ZXM7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmRhdGFiYXNlTG9hZGVkICYmIHN0YXRlLmRlZmF1bHRGYXZvcml0ZUVtb2ppcykge1xuICAgICAgLyogbm8gYXdhaXQgKi8gdXBkYXRlRmF2b3JpdGVzKCk7XG4gICAgfVxuICB9KTtcblxuICAvL1xuICAvLyBSZS1ydW4gd2hlbmV2ZXIgdGhlIGVtb2ppIGdyaWQgY2hhbmdlcyBzaXplLCBhbmQgcmUtY2FsYyBzdHlsZS9sYXlvdXQtcmVsYXRlZCBzdGF0ZSB2YXJpYWJsZXM6XG4gIC8vIDEpIFJlLWNhbGN1bGF0ZSB0aGUgLS1udW0tY29sdW1ucyB2YXIgYmVjYXVzZSBpdCBtYXkgaGF2ZSBjaGFuZ2VkXG4gIC8vIDIpIFJlLWNhbGN1bGF0ZSB3aGV0aGVyIHdlJ3JlIGluIFJUTCBtb2RlIG9yIG5vdC5cbiAgLy9cbiAgLy8gVGhlIGJlbmVmaXQgb2YgZG9pbmcgdGhpcyBpbiBvbmUgcGxhY2UgaXMgdG8gYWxpZ24gd2l0aCByQUYvUmVzaXplT2JzZXJ2ZXJcbiAgLy8gYW5kIGRvIGFsbCB0aGUgY2FsY3VsYXRpb25zIGluIG9uZSBnby4gUlRMIHZzIExUUiBpcyBub3Qgc3RyaWN0bHkgbGF5b3V0LXJlbGF0ZWQsXG4gIC8vIGJ1dCBzaW5jZSB3ZSdyZSBhbHJlYWR5IHJlYWRpbmcgdGhlIHN0eWxlIGhlcmUsIGFuZCBzaW5jZSBpdCdzIGFscmVhZHkgYWxpZ25lZCB3aXRoXG4gIC8vIHRoZSByQUYgbG9vcCwgdGhpcyBpcyB0aGUgbW9zdCBhcHByb3ByaWF0ZSBwbGFjZSB0byBkbyBpdCBwZXJmLXdpc2UuXG4gIC8vXG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlRW1vamlHcmlkU3R5bGUgKG5vZGUpIHtcbiAgICByZXNpemVPYnNlcnZlckFjdGlvbihub2RlLCBhYm9ydFNpZ25hbCwgKCkgPT4ge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIHsgLy8ganNkb20gdGhyb3dzIGVycm9ycyBmb3IgdGhpcyBraW5kIG9mIGZhbmN5IHN0dWZmXG4gICAgICAgIC8vIHJlYWQgYWxsIHRoZSBzdHlsZS9sYXlvdXQgY2FsY3VsYXRpb25zIHdlIG5lZWQgdG8gbWFrZVxuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocmVmcy5yb290RWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG5ld051bUNvbHVtbnMgPSBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLW51bS1jb2x1bW5zJyksIDEwKTtcbiAgICAgICAgY29uc3QgbmV3SXNSdGwgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCc7XG5cbiAgICAgICAgLy8gd3JpdGUgdG8gc3RhdGUgdmFyaWFibGVzXG4gICAgICAgIHN0YXRlLm51bUNvbHVtbnMgPSBuZXdOdW1Db2x1bW5zO1xuICAgICAgICBzdGF0ZS5pc1J0bCA9IG5ld0lzUnRsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gUmUtcnVuIHdoZW5ldmVyIHRoZSBjdXN0b20gZW1vamkgaW4gYSBjYXRlZ29yeSBhcmUgc2hvd24vaGlkZGVuLiBUaGlzIGlzIGFuIG9wdGltaXphdGlvbiB0aGF0IHNpbXVsYXRlc1xuICAvLyB3aGF0IHdlJ2QgZ2V0IGZyb20gYDxpbWcgbG9hZGluZz1sYXp5PmAgYnV0IHdpdGhvdXQgcmVuZGVyaW5nIGFuIGA8aW1nPmAuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9uSW50ZXJzZWN0aW9uIChub2RlKSB7XG4gICAgaW50ZXJzZWN0aW9uT2JzZXJ2ZXJBY3Rpb24obm9kZSwgYWJvcnRTaWduYWwsIChlbnRyaWVzKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0LCBpc0ludGVyc2VjdGluZyB9IG9mIGVudHJpZXMpIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ29uc2NyZWVuJywgaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy9cbiAgLy8gU2V0IG9yIHVwZGF0ZSB0aGUgY3VycmVudEVtb2ppcy4gQ2hlY2sgZm9yIGludmFsaWQgWldKIHJlbmRlcmluZ3NcbiAgLy8gKGkuZS4gZG91YmxlIGVtb2ppKS5cbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtb2ppcyAoKSB7XG4gICAgICBjb25zdCB7IHNlYXJjaFRleHQsIGN1cnJlbnRHcm91cCwgZGF0YWJhc2VMb2FkZWQsIGN1c3RvbUVtb2ppIH0gPSBzdGF0ZTtcbiAgICAgIGlmICghZGF0YWJhc2VMb2FkZWQpIHtcbiAgICAgICAgc3RhdGUuY3VycmVudEVtb2ppcyA9IFtdO1xuICAgICAgICBzdGF0ZS5zZWFyY2hNb2RlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHNlYXJjaFRleHQubGVuZ3RoID49IE1JTl9TRUFSQ0hfVEVYVF9MRU5HVEgpIHtcbiAgICAgICAgY29uc3QgbmV3RW1vamlzID0gYXdhaXQgZ2V0RW1vamlzQnlTZWFyY2hRdWVyeShzZWFyY2hUZXh0KTtcbiAgICAgICAgaWYgKHN0YXRlLnNlYXJjaFRleHQgPT09IHNlYXJjaFRleHQpIHsgLy8gaWYgdGhlIHNpdHVhdGlvbiBjaGFuZ2VzIGFzeW5jaHJvbm91c2x5LCBkbyBub3QgdXBkYXRlXG4gICAgICAgICAgdXBkYXRlQ3VycmVudEVtb2ppcyhuZXdFbW9qaXMpO1xuICAgICAgICAgIHVwZGF0ZVNlYXJjaE1vZGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIGRhdGFiYXNlIGlzIGxvYWRlZCBhbmQgd2UncmUgbm90IGluIHNlYXJjaCBtb2RlLCBzbyB3ZSdyZSBpbiBub3JtYWwgY2F0ZWdvcnkgbW9kZVxuICAgICAgICBjb25zdCB7IGlkOiBjdXJyZW50R3JvdXBJZCB9ID0gY3VycmVudEdyb3VwO1xuICAgICAgICAvLyBhdm9pZCByYWNlIGNvbmRpdGlvbiB3aGVyZSBjdXJyZW50R3JvdXBJZCBpcyAtMSBhbmQgY3VzdG9tRW1vamkgaXMgdW5kZWZpbmVkL2VtcHR5XG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBJZCAhPT0gLTEgfHwgKGN1c3RvbUVtb2ppICYmIGN1c3RvbUVtb2ppLmxlbmd0aCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdFbW9qaXMgPSBhd2FpdCBnZXRFbW9qaXNCeUdyb3VwKGN1cnJlbnRHcm91cElkKTtcbiAgICAgICAgICBpZiAoc3RhdGUuY3VycmVudEdyb3VwLmlkID09PSBjdXJyZW50R3JvdXBJZCkgeyAvLyBpZiB0aGUgc2l0dWF0aW9uIGNoYW5nZXMgYXN5bmNocm9ub3VzbHksIGRvIG5vdCB1cGRhdGVcbiAgICAgICAgICAgIHVwZGF0ZUN1cnJlbnRFbW9qaXMobmV3RW1vamlzKTtcbiAgICAgICAgICAgIHVwZGF0ZVNlYXJjaE1vZGUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIG5vIGF3YWl0ICovIHVwZGF0ZUVtb2ppcygpO1xuICB9KTtcblxuICBjb25zdCByZXNldFNjcm9sbFRvcEluUmFmID0gKCkgPT4ge1xuICAgIHJBRigoKSA9PiByZXNldFNjcm9sbFRvcElmUG9zc2libGUocmVmcy50YWJwYW5lbEVsZW1lbnQpKTtcbiAgfTtcblxuICAvLyBTb21lIGVtb2ppcyBoYXZlIHRoZWlyIGxpZ2F0dXJlcyByZW5kZXJlZCBhcyB0d28gb3IgbW9yZSBjb25zZWN1dGl2ZSBlbW9qaXNcbiAgLy8gV2Ugd2FudCB0byB0cmVhdCB0aGVzZSB0aGUgc2FtZSBhcyB1bnN1cHBvcnRlZCBlbW9qaXMsIHNvIHdlIGNvbXBhcmUgdGhlaXJcbiAgLy8gd2lkdGhzIGFnYWluc3QgdGhlIGJhc2VsaW5lIHdpZHRocyBhbmQgcmVtb3ZlIHRoZW0gYXMgbmVjZXNzYXJ5XG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50RW1vamlzLCBlbW9qaVZlcnNpb24gfSA9IHN0YXRlO1xuICAgIGNvbnN0IHp3akVtb2ppc1RvQ2hlY2sgPSBjdXJyZW50RW1vamlzXG4gICAgICAuZmlsdGVyKGVtb2ppID0+IGVtb2ppLnVuaWNvZGUpIC8vIGZpbHRlciBjdXN0b20gZW1vamlcbiAgICAgIC5maWx0ZXIoZW1vamkgPT4gaGFzWndqKGVtb2ppKSAmJiAhc3VwcG9ydGVkWndqRW1vamlzLmhhcyhlbW9qaS51bmljb2RlKSk7XG4gICAgaWYgKCFlbW9qaVZlcnNpb24gJiYgendqRW1vamlzVG9DaGVjay5sZW5ndGgpIHtcbiAgICAgIC8vIHJlbmRlciBub3csIGNoZWNrIHRoZWlyIGxlbmd0aCBsYXRlclxuICAgICAgdXBkYXRlQ3VycmVudEVtb2ppcyhjdXJyZW50RW1vamlzKTtcbiAgICAgIHJBRigoKSA9PiBjaGVja1p3alN1cHBvcnRBbmRVcGRhdGUoendqRW1vamlzVG9DaGVjaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdFbW9qaXMgPSBlbW9qaVZlcnNpb24gPyBjdXJyZW50RW1vamlzIDogY3VycmVudEVtb2ppcy5maWx0ZXIoaXNad2pTdXBwb3J0ZWQpO1xuICAgICAgdXBkYXRlQ3VycmVudEVtb2ppcyhuZXdFbW9qaXMpO1xuICAgICAgLy8gUmVzZXQgc2Nyb2xsIHRvcCB0byAwIHdoZW4gZW1vamlzIGNoYW5nZVxuICAgICAgcmVzZXRTY3JvbGxUb3BJblJhZigpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2hlY2tad2pTdXBwb3J0QW5kVXBkYXRlICh6d2pFbW9qaXNUb0NoZWNrKSB7XG4gICAgY29uc3QgYWxsU3VwcG9ydGVkID0gY2hlY2tad2pTdXBwb3J0KHp3akVtb2ppc1RvQ2hlY2ssIHJlZnMuYmFzZWxpbmVFbW9qaSwgZW1vamlUb0RvbU5vZGUpO1xuICAgIGlmIChhbGxTdXBwb3J0ZWQpIHtcbiAgICAgIC8vIEV2ZW4gaWYgYWxsIGVtb2ppIGFyZSBzdXBwb3J0ZWQsIHdlIHN0aWxsIG5lZWQgdG8gcmVzZXQgdGhlIHNjcm9sbCB0b3AgdG8gMCB3aGVuIGVtb2ppcyBjaGFuZ2VcbiAgICAgIHJlc2V0U2Nyb2xsVG9wSW5SYWYoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRm9yY2UgdXBkYXRlLiBXZSBvbmx5IGRvIHRoaXMgaWYgdGhlcmUgYXJlIGFueSB1bnN1cHBvcnRlZCBaV0ogY2hhcmFjdGVycyBzaW5jZSBvdGhlcndpc2UsXG4gICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGFsbCBlbW9qaSwgaXQgd291bGQgYmUgYW4gdW5uZWNlc3NhcnkgZXh0cmEgcmUtcmVuZGVyLlxuICAgICAgc3RhdGUuY3VycmVudEVtb2ppcyA9IFsuLi5zdGF0ZS5jdXJyZW50RW1vamlzXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1p3alN1cHBvcnRlZCAoZW1vamkpIHtcbiAgICByZXR1cm4gIWVtb2ppLnVuaWNvZGUgfHwgIWhhc1p3aihlbW9qaSkgfHwgc3VwcG9ydGVkWndqRW1vamlzLmdldChlbW9qaS51bmljb2RlKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmlsdGVyRW1vamlzQnlWZXJzaW9uIChlbW9qaXMpIHtcbiAgICBjb25zdCBlbW9qaVN1cHBvcnRMZXZlbCA9IHN0YXRlLmVtb2ppVmVyc2lvbiB8fCBhd2FpdCBkZXRlY3RFbW9qaVN1cHBvcnRMZXZlbCgpO1xuICAgIC8vICF2ZXJzaW9uIGNvcnJlc3BvbmRzIHRvIGN1c3RvbSBlbW9qaVxuICAgIHJldHVybiBlbW9qaXMuZmlsdGVyKCh7IHZlcnNpb24gfSkgPT4gIXZlcnNpb24gfHwgdmVyc2lvbiA8PSBlbW9qaVN1cHBvcnRMZXZlbClcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1bW1hcml6ZUVtb2ppcyAoZW1vamlzKSB7XG4gICAgcmV0dXJuIHN1bW1hcml6ZUVtb2ppc0ZvclVJKGVtb2ppcywgc3RhdGUuZW1vamlWZXJzaW9uIHx8IGF3YWl0IGRldGVjdEVtb2ppU3VwcG9ydExldmVsKCkpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRFbW9qaXNCeUdyb3VwIChncm91cCkge1xuICAgIC8vIC0xIGlzIGN1c3RvbSBlbW9qaVxuICAgIGNvbnN0IGVtb2ppID0gZ3JvdXAgPT09IC0xID8gc3RhdGUuY3VzdG9tRW1vamkgOiBhd2FpdCBzdGF0ZS5kYXRhYmFzZS5nZXRFbW9qaUJ5R3JvdXAoZ3JvdXApO1xuICAgIHJldHVybiBzdW1tYXJpemVFbW9qaXMoYXdhaXQgZmlsdGVyRW1vamlzQnlWZXJzaW9uKGVtb2ppKSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEVtb2ppc0J5U2VhcmNoUXVlcnkgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHN1bW1hcml6ZUVtb2ppcyhhd2FpdCBmaWx0ZXJFbW9qaXNCeVZlcnNpb24oYXdhaXQgc3RhdGUuZGF0YWJhc2UuZ2V0RW1vamlCeVNlYXJjaFF1ZXJ5KHF1ZXJ5KSkpXG4gIH1cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICB9KTtcblxuICAvL1xuICAvLyBEZXJpdmUgY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzIGZyb20gY3VycmVudEVtb2ppcy4gVGhpcyBpcyBhbHdheXMgZG9uZSBldmVuIGlmIHRoZXJlXG4gIC8vIGFyZSBubyBjYXRlZ29yaWVzLCBiZWNhdXNlIGl0J3MganVzdCBlYXNpZXIgdG8gY29kZSB0aGUgSFRNTCB0aGlzIHdheS5cbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcyAoKSB7XG4gICAgICBjb25zdCB7IHNlYXJjaE1vZGUsIGN1cnJlbnRFbW9qaXMgfSA9IHN0YXRlO1xuICAgICAgaWYgKHNlYXJjaE1vZGUpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJycsXG4gICAgICAgICAgICBlbW9qaXM6IGN1cnJlbnRFbW9qaXNcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhdGVnb3JpZXNUb0Vtb2ppID0gbmV3IE1hcCgpO1xuICAgICAgZm9yIChjb25zdCBlbW9qaSBvZiBjdXJyZW50RW1vamlzKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZW1vamkuY2F0ZWdvcnkgfHwgJyc7XG4gICAgICAgIGxldCBlbW9qaXMgPSBjYXRlZ29yaWVzVG9FbW9qaS5nZXQoY2F0ZWdvcnkpO1xuICAgICAgICBpZiAoIWVtb2ppcykge1xuICAgICAgICAgIGVtb2ppcyA9IFtdO1xuICAgICAgICAgIGNhdGVnb3JpZXNUb0Vtb2ppLnNldChjYXRlZ29yeSwgZW1vamlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbW9qaXMucHVzaChlbW9qaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gWy4uLmNhdGVnb3JpZXNUb0Vtb2ppLmVudHJpZXMoKV1cbiAgICAgICAgLm1hcCgoW2NhdGVnb3J5LCBlbW9qaXNdKSA9PiAoeyBjYXRlZ29yeSwgZW1vamlzIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gc3RhdGUuY3VzdG9tQ2F0ZWdvcnlTb3J0aW5nKGEuY2F0ZWdvcnksIGIuY2F0ZWdvcnkpKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0Vtb2ppc1dpdGhDYXRlZ29yaWVzID0gY2FsY3VsYXRlQ3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzKCk7XG4gICAgdXBkYXRlQ3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzKG5ld0Vtb2ppc1dpdGhDYXRlZ29yaWVzKTtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gSGFuZGxlIGFjdGl2ZSBzZWFyY2ggaXRlbSAoaS5lLiBwcmVzc2luZyB1cCBvciBkb3duIHdoaWxlIHNlYXJjaGluZylcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW1JZCA9IHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gIT09IC0xICYmIHN0YXRlLmN1cnJlbnRFbW9qaXNbc3RhdGUuYWN0aXZlU2VhcmNoSXRlbV0uaWQ7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIEhhbmRsZSB1c2VyIGlucHV0IG9uIHRoZSBzZWFyY2ggaW5wdXRcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgcmF3U2VhcmNoVGV4dCB9ID0gc3RhdGU7XG4gICAgcklDKCgpID0+IHtcbiAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSAocmF3U2VhcmNoVGV4dCB8fCAnJykudHJpbSgpOyAvLyBkZWZlciB0byBhdm9pZCBpbnB1dCBkZWxheXMsIHBsdXMgd2UgY2FuIHRyaW0gaGVyZVxuICAgICAgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA9IC0xO1xuICAgIH0pO1xuICB9KTtcblxuICBmdW5jdGlvbiBvblNlYXJjaEtleWRvd24gKGV2ZW50KSB7XG4gICAgaWYgKCFzdGF0ZS5zZWFyY2hNb2RlIHx8ICFzdGF0ZS5jdXJyZW50RW1vamlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZ29Ub05leHRPclByZXZpb3VzID0gKHByZXZpb3VzKSA9PiB7XG4gICAgICBoYWx0KGV2ZW50KTtcbiAgICAgIHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gPSBpbmNyZW1lbnRPckRlY3JlbWVudChwcmV2aW91cywgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSwgc3RhdGUuY3VycmVudEVtb2ppcyk7XG4gICAgfTtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICByZXR1cm4gZ29Ub05leHRPclByZXZpb3VzKGZhbHNlKVxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHJldHVybiBnb1RvTmV4dE9yUHJldmlvdXModHJ1ZSlcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgaWYgKHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gPT09IC0xKSB7XG4gICAgICAgICAgLy8gZm9jdXMgdGhlIGZpcnN0IG9wdGlvbiBpbiB0aGUgbGlzdCBzaW5jZSB0aGUgbGlzdCBtdXN0IGJlIG5vbi1lbXB0eSBhdCB0aGlzIHBvaW50IChpdCdzIHZlcmlmaWVkIGFib3ZlKVxuICAgICAgICAgIHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gPSAwO1xuICAgICAgICB9IGVsc2UgeyAvLyB0aGVyZSBpcyBhbHJlYWR5IGFuIGFjdGl2ZSBzZWFyY2ggaXRlbVxuICAgICAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgICAgIHJldHVybiBjbGlja0Vtb2ppKHN0YXRlLmN1cnJlbnRFbW9qaXNbc3RhdGUuYWN0aXZlU2VhcmNoSXRlbV0uaWQpXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL1xuICAvLyBIYW5kbGUgdXNlciBpbnB1dCBvbiBuYXZcbiAgLy9cblxuICBmdW5jdGlvbiBvbk5hdkNsaWNrIChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICBjb25zdCBjbG9zZXN0VGFyZ2V0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5uYXYtYnV0dG9uJyk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjbG9zZXN0VGFyZ2V0KSB7XG4gICAgICByZXR1cm4gLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgbWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSBpdFxuICAgIH1cbiAgICBjb25zdCBncm91cElkID0gcGFyc2VJbnQoY2xvc2VzdFRhcmdldC5kYXRhc2V0Lmdyb3VwSWQsIDEwKTtcbiAgICByZWZzLnNlYXJjaEVsZW1lbnQudmFsdWUgPSAnJzsgLy8gY2xlYXIgc2VhcmNoIGJveCBpbnB1dFxuICAgIHN0YXRlLnJhd1NlYXJjaFRleHQgPSAnJztcbiAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gJyc7XG4gICAgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA9IC0xO1xuICAgIHN0YXRlLmN1cnJlbnRHcm91cEluZGV4ID0gc3RhdGUuZ3JvdXBzLmZpbmRJbmRleChfID0+IF8uaWQgPT09IGdyb3VwSWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25OYXZLZXlkb3duIChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0LCBrZXkgfSA9IGV2ZW50O1xuXG4gICAgY29uc3QgZG9Gb2N1cyA9IGVsID0+IHtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBoYWx0KGV2ZW50KTtcbiAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHJldHVybiBkb0ZvY3VzKHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKVxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIHJldHVybiBkb0ZvY3VzKHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgcmV0dXJuIGRvRm9jdXModGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpXG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICByZXR1cm4gZG9Gb2N1cyh0YXJnZXQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERldGFpbEZvckNsaWNrRXZlbnQgKHVuaWNvZGVPck5hbWUpIHtcbiAgICBjb25zdCBlbW9qaSA9IGF3YWl0IHN0YXRlLmRhdGFiYXNlLmdldEVtb2ppQnlVbmljb2RlT3JOYW1lKHVuaWNvZGVPck5hbWUpO1xuICAgIGNvbnN0IGVtb2ppU3VtbWFyeSA9IFsuLi5zdGF0ZS5jdXJyZW50RW1vamlzLCAuLi5zdGF0ZS5jdXJyZW50RmF2b3JpdGVzXVxuICAgICAgLmZpbmQoXyA9PiAoXy5pZCA9PT0gdW5pY29kZU9yTmFtZSkpO1xuICAgIGNvbnN0IHNraW5Ub25lZFVuaWNvZGUgPSBlbW9qaVN1bW1hcnkudW5pY29kZSAmJiB1bmljb2RlV2l0aFNraW4oZW1vamlTdW1tYXJ5LCBzdGF0ZS5jdXJyZW50U2tpblRvbmUpO1xuICAgIGF3YWl0IHN0YXRlLmRhdGFiYXNlLmluY3JlbWVudEZhdm9yaXRlRW1vamlDb3VudCh1bmljb2RlT3JOYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgZW1vamksXG4gICAgICBza2luVG9uZTogc3RhdGUuY3VycmVudFNraW5Ub25lLFxuICAgICAgLi4uKHNraW5Ub25lZFVuaWNvZGUgJiYgeyB1bmljb2RlOiBza2luVG9uZWRVbmljb2RlIH0pLFxuICAgICAgLi4uKGVtb2ppU3VtbWFyeS5uYW1lICYmIHsgbmFtZTogZW1vamlTdW1tYXJ5Lm5hbWUgfSlcbiAgICB9XG4gIH1cblxuICAvL1xuICAvLyBIYW5kbGUgdXNlciBpbnB1dCBvbiBhbiBlbW9qaVxuICAvL1xuICBhc3luYyBmdW5jdGlvbiBjbGlja0Vtb2ppICh1bmljb2RlT3JOYW1lKSB7XG4gICAgY29uc3QgcHJvbWlzZUZvckRldGFpbCA9IGdldERldGFpbEZvckNsaWNrRXZlbnQodW5pY29kZU9yTmFtZSk7XG4gICAgLy8gc3luYyBldmVudCB0byB3b3JrIGFyb3VuZCBhIHNhZmFyaSBidWc6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMjIyNjJcbiAgICBmaXJlRXZlbnQoJ2Vtb2ppLWNsaWNrLXN5bmMnLCBwcm9taXNlRm9yRGV0YWlsKTtcbiAgICAvLyBhc3luYyBldmVudCBmb3IgbW9zdCBub3JtYWwgdXNlIGNhc2VzIHRoYXQgZG9uJ3QgbmVlZCB0byB3b3JrIGFyb3VuZCB0aGUgc2FmYXJpIGJ1Z1xuICAgIGZpcmVFdmVudCgnZW1vamktY2xpY2snLCBhd2FpdCBwcm9taXNlRm9yRGV0YWlsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRW1vamlDbGljayAoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbW9qaScpKSB7XG4gICAgICAvLyBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCBtYWtlcyBtZSBuZXJ2b3VzIG5vdCB0byBoYXZlIGl0XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaGFsdChldmVudCk7XG4gICAgY29uc3QgaWQgPSB0YXJnZXQuaWQuc3Vic3RyaW5nKDQpOyAvLyByZXBsYWNlICdlbW8tJyBvciAnZmF2LScgcHJlZml4XG5cbiAgICAvKiBubyBhd2FpdCAqLyBjbGlja0Vtb2ppKGlkKTtcbiAgfVxuXG4gIC8vXG4gIC8vIEhhbmRsZSB1c2VyIGlucHV0IG9uIHRoZSBza2ludG9uZSBwaWNrZXJcbiAgLy9cblxuICBmdW5jdGlvbiBjaGFuZ2VTa2luVG9uZSAoc2tpblRvbmUpIHtcbiAgICBzdGF0ZS5jdXJyZW50U2tpblRvbmUgPSBza2luVG9uZTtcbiAgICBzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID0gZmFsc2U7XG4gICAgZm9jdXMoJ3NraW50b25lLWJ1dHRvbicpO1xuICAgIGZpcmVFdmVudCgnc2tpbi10b25lLWNoYW5nZScsIHsgc2tpblRvbmUgfSk7XG4gICAgLyogbm8gYXdhaXQgKi8gc3RhdGUuZGF0YWJhc2Uuc2V0UHJlZmVycmVkU2tpblRvbmUoc2tpblRvbmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ta2luVG9uZU9wdGlvbnNDbGljayAoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldDogeyBpZCB9IH0gPSBldmVudDtcbiAgICBjb25zdCBtYXRjaCA9IGlkICYmIGlkLm1hdGNoKC9ec2tpbnRvbmUtKFxcZCkvKTsgLy8gc2tpbnRvbmUgb3B0aW9uIGZvcm1hdFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghbWF0Y2gpIHsgLy8gbm90IGEgc2tpbnRvbmUgb3B0aW9uXG4gICAgICByZXR1cm4gLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgbWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSBpdFxuICAgIH1cbiAgICBoYWx0KGV2ZW50KTtcbiAgICBjb25zdCBza2luVG9uZSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7IC8vIHJlbW92ZSAnc2tpbnRvbmUtJyBwcmVmaXhcbiAgICBjaGFuZ2VTa2luVG9uZShza2luVG9uZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrU2tpblRvbmVCdXR0b24gKGV2ZW50KSB7XG4gICAgc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCA9ICFzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkO1xuICAgIHN0YXRlLmFjdGl2ZVNraW5Ub25lID0gc3RhdGUuY3VycmVudFNraW5Ub25lO1xuICAgIC8vIHRoaXMgc2hvdWxkIGFsd2F5cyBiZSB0cnVlLCBzaW5jZSB0aGUgYnV0dG9uIGlzIG9ic2N1cmVkIGJ5IHRoZSBsaXN0Ym94LCBzbyB0aGlzIGBpZmAgaXMganVzdCB0byBiZSBzdXJlXG4gICAgaWYgKHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQpIHtcbiAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgckFGKCgpID0+IGZvY3VzKCdza2ludG9uZS1saXN0JykpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRvIG1ha2UgdGhlIGFuaW1hdGlvbiBuaWNlciwgY2hhbmdlIHRoZSB6LWluZGV4IG9mIHRoZSBza2ludG9uZSBwaWNrZXIgYnV0dG9uXG4gIC8vICphZnRlciogdGhlIGFuaW1hdGlvbiBoYXMgcGxheWVkLiBUaGlzIG1ha2VzIGl0IGFwcGVhciB0aGF0IHRoZSBwaWNrZXIgYm94XG4gIC8vIGlzIGV4cGFuZGluZyBcImJlbG93XCIgdGhlIGJ1dHRvblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkKSB7XG4gICAgICByZWZzLnNraW5Ub25lRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZEFmdGVyQW5pbWF0aW9uID0gdHJ1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkQWZ0ZXJBbmltYXRpb24gPSBmYWxzZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25Ta2luVG9uZU9wdGlvbnNLZXlkb3duIChldmVudCkge1xuICAgIC8vIHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IG1ha2VzIG1lIG5lcnZvdXMgbm90IHRvIGhhdmUgaXRcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VBY3RpdmVTa2luVG9uZSA9IGFzeW5jIG5leHRTa2luVG9uZSA9PiB7XG4gICAgICBoYWx0KGV2ZW50KTtcbiAgICAgIHN0YXRlLmFjdGl2ZVNraW5Ub25lID0gbmV4dFNraW5Ub25lO1xuICAgIH07XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHJldHVybiBjaGFuZ2VBY3RpdmVTa2luVG9uZShpbmNyZW1lbnRPckRlY3JlbWVudCh0cnVlLCBzdGF0ZS5hY3RpdmVTa2luVG9uZSwgc3RhdGUuc2tpblRvbmVzKSlcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIHJldHVybiBjaGFuZ2VBY3RpdmVTa2luVG9uZShpbmNyZW1lbnRPckRlY3JlbWVudChmYWxzZSwgc3RhdGUuYWN0aXZlU2tpblRvbmUsIHN0YXRlLnNraW5Ub25lcykpXG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgcmV0dXJuIGNoYW5nZUFjdGl2ZVNraW5Ub25lKDApXG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICByZXR1cm4gY2hhbmdlQWN0aXZlU2tpblRvbmUoc3RhdGUuc2tpblRvbmVzLmxlbmd0aCAtIDEpXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIC8vIGVudGVyIG9uIGtleWRvd24sIHNwYWNlIG9uIGtleXVwLiB0aGlzIGlzIGp1c3QgaG93IGJyb3dzZXJzIHdvcmsgZm9yIGJ1dHRvbnNcbiAgICAgICAgLy8gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3czYy13YWktaWcvMjAxOUphbk1hci8wMDg2Lmh0bWxcbiAgICAgICAgaGFsdChldmVudCk7XG4gICAgICAgIHJldHVybiBjaGFuZ2VTa2luVG9uZShzdGF0ZS5hY3RpdmVTa2luVG9uZSlcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgICBzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmb2N1cygnc2tpbnRvbmUtYnV0dG9uJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblNraW5Ub25lT3B0aW9uc0tleXVwIChldmVudCkge1xuICAgIC8vIHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IG1ha2VzIG1lIG5lcnZvdXMgbm90IHRvIGhhdmUgaXRcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnICc6XG4gICAgICAgIC8vIGVudGVyIG9uIGtleWRvd24sIHNwYWNlIG9uIGtleXVwLiB0aGlzIGlzIGp1c3QgaG93IGJyb3dzZXJzIHdvcmsgZm9yIGJ1dHRvbnNcbiAgICAgICAgLy8gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3czYy13YWktaWcvMjAxOUphbk1hci8wMDg2Lmh0bWxcbiAgICAgICAgaGFsdChldmVudCk7XG4gICAgICAgIHJldHVybiBjaGFuZ2VTa2luVG9uZShzdGF0ZS5hY3RpdmVTa2luVG9uZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvblNraW5Ub25lT3B0aW9uc0ZvY3VzT3V0IChldmVudCkge1xuICAgIC8vIE9uIGJsdXIgb3V0c2lkZSBvZiB0aGUgc2tpbnRvbmUgbGlzdGJveCwgY29sbGFwc2UgdGhlIHNraW50b25lIHBpY2tlci5cbiAgICBjb25zdCB7IHJlbGF0ZWRUYXJnZXQgfSA9IGV2ZW50O1xuICAgIC8vIFRoZSBgZWxzZWAgc2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IG1ha2VzIG1lIG5lcnZvdXMgbm90IHRvIGhhdmUgaXRcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICghcmVsYXRlZFRhcmdldCB8fCByZWxhdGVkVGFyZ2V0LmlkICE9PSAnc2tpbnRvbmUtbGlzdCcpIHtcbiAgICAgIHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblNlYXJjaElucHV0IChldmVudCkge1xuICAgIHN0YXRlLnJhd1NlYXJjaFRleHQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgICRzZXQgKG5ld1N0YXRlKSB7XG4gICAgICBhc3NpZ24oc3RhdGUsIG5ld1N0YXRlKTtcbiAgICB9LFxuICAgICRkZXN0cm95ICgpIHtcbiAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBERUZBVUxUX0RBVEFfU09VUkNFID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZW1vamktcGlja2VyLWVsZW1lbnQtZGF0YUBeMS9lbi9lbW9qaWJhc2UvZGF0YS5qc29uJztcbmNvbnN0IERFRkFVTFRfTE9DQUxFID0gJ2VuJztcblxudmFyIGVuSTE4biA9IHtcbiAgY2F0ZWdvcmllc0xhYmVsOiAnQ2F0ZWdvcmllcycsXG4gIGVtb2ppVW5zdXBwb3J0ZWRNZXNzYWdlOiAnWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY29sb3IgZW1vamkuJyxcbiAgZmF2b3JpdGVzTGFiZWw6ICdGYXZvcml0ZXMnLFxuICBsb2FkaW5nTWVzc2FnZTogJ0xvYWRpbmdcdTIwMjYnLFxuICBuZXR3b3JrRXJyb3JNZXNzYWdlOiAnQ291bGQgbm90IGxvYWQgZW1vamkuJyxcbiAgcmVnaW9uTGFiZWw6ICdFbW9qaSBwaWNrZXInLFxuICBzZWFyY2hEZXNjcmlwdGlvbjogJ1doZW4gc2VhcmNoIHJlc3VsdHMgYXJlIGF2YWlsYWJsZSwgcHJlc3MgdXAgb3IgZG93biB0byBzZWxlY3QgYW5kIGVudGVyIHRvIGNob29zZS4nLFxuICBzZWFyY2hMYWJlbDogJ1NlYXJjaCcsXG4gIHNlYXJjaFJlc3VsdHNMYWJlbDogJ1NlYXJjaCByZXN1bHRzJyxcbiAgc2tpblRvbmVEZXNjcmlwdGlvbjogJ1doZW4gZXhwYW5kZWQsIHByZXNzIHVwIG9yIGRvd24gdG8gc2VsZWN0IGFuZCBlbnRlciB0byBjaG9vc2UuJyxcbiAgc2tpblRvbmVMYWJlbDogJ0Nob29zZSBhIHNraW4gdG9uZSAoY3VycmVudGx5IHtza2luVG9uZX0pJyxcbiAgc2tpblRvbmVzTGFiZWw6ICdTa2luIHRvbmVzJyxcbiAgc2tpblRvbmVzOiBbXG4gICAgJ0RlZmF1bHQnLFxuICAgICdMaWdodCcsXG4gICAgJ01lZGl1bS1MaWdodCcsXG4gICAgJ01lZGl1bScsXG4gICAgJ01lZGl1bS1EYXJrJyxcbiAgICAnRGFyaydcbiAgXSxcbiAgY2F0ZWdvcmllczoge1xuICAgIGN1c3RvbTogJ0N1c3RvbScsXG4gICAgJ3NtaWxleXMtZW1vdGlvbic6ICdTbWlsZXlzIGFuZCBlbW90aWNvbnMnLFxuICAgICdwZW9wbGUtYm9keSc6ICdQZW9wbGUgYW5kIGJvZHknLFxuICAgICdhbmltYWxzLW5hdHVyZSc6ICdBbmltYWxzIGFuZCBuYXR1cmUnLFxuICAgICdmb29kLWRyaW5rJzogJ0Zvb2QgYW5kIGRyaW5rJyxcbiAgICAndHJhdmVsLXBsYWNlcyc6ICdUcmF2ZWwgYW5kIHBsYWNlcycsXG4gICAgYWN0aXZpdGllczogJ0FjdGl2aXRpZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncydcbiAgfVxufTtcblxudmFyIGJhc2VTdHlsZXMgPSBcIjpob3N0ey0tZW1vamktc2l6ZToxLjM3NXJlbTstLWVtb2ppLXBhZGRpbmc6MC41cmVtOy0tY2F0ZWdvcnktZW1vamktc2l6ZTp2YXIoLS1lbW9qaS1zaXplKTstLWNhdGVnb3J5LWVtb2ppLXBhZGRpbmc6dmFyKC0tZW1vamktcGFkZGluZyk7LS1pbmRpY2F0b3ItaGVpZ2h0OjNweDstLWlucHV0LWJvcmRlci1yYWRpdXM6MC41cmVtOy0taW5wdXQtYm9yZGVyLXNpemU6MXB4Oy0taW5wdXQtZm9udC1zaXplOjFyZW07LS1pbnB1dC1saW5lLWhlaWdodDoxLjU7LS1pbnB1dC1wYWRkaW5nOjAuMjVyZW07LS1udW0tY29sdW1uczo4Oy0tb3V0bGluZS1zaXplOjJweDstLWJvcmRlci1zaXplOjFweDstLWJvcmRlci1yYWRpdXM6MDstLXNraW50b25lLWJvcmRlci1yYWRpdXM6MXJlbTstLWNhdGVnb3J5LWZvbnQtc2l6ZToxcmVtO2Rpc3BsYXk6ZmxleDt3aWR0aDptaW4tY29udGVudDtoZWlnaHQ6NDAwcHh9Omhvc3QsOmhvc3QoLmxpZ2h0KXtjb2xvci1zY2hlbWU6bGlnaHQ7LS1iYWNrZ3JvdW5kOiNmZmY7LS1ib3JkZXItY29sb3I6I2UwZTBlMDstLWluZGljYXRvci1jb2xvcjojMzg1YWMxOy0taW5wdXQtYm9yZGVyLWNvbG9yOiM5OTk7LS1pbnB1dC1mb250LWNvbG9yOiMxMTE7LS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjojOTk5Oy0tb3V0bGluZS1jb2xvcjojOTk5Oy0tY2F0ZWdvcnktZm9udC1jb2xvcjojMTExOy0tYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kOiNlNmU2ZTY7LS1idXR0b24taG92ZXItYmFja2dyb3VuZDojZDlkOWQ5fTpob3N0KC5kYXJrKXtjb2xvci1zY2hlbWU6ZGFyazstLWJhY2tncm91bmQ6IzIyMjstLWJvcmRlci1jb2xvcjojNDQ0Oy0taW5kaWNhdG9yLWNvbG9yOiM1MzczZWM7LS1pbnB1dC1ib3JkZXItY29sb3I6I2NjYzstLWlucHV0LWZvbnQtY29sb3I6I2VmZWZlZjstLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiNjY2M7LS1vdXRsaW5lLWNvbG9yOiNmZmY7LS1jYXRlZ29yeS1mb250LWNvbG9yOiNlZmVmZWY7LS1idXR0b24tYWN0aXZlLWJhY2tncm91bmQ6IzU1NTU1NTstLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiM0ODQ4NDh9QG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKXs6aG9zdHtjb2xvci1zY2hlbWU6ZGFyazstLWJhY2tncm91bmQ6IzIyMjstLWJvcmRlci1jb2xvcjojNDQ0Oy0taW5kaWNhdG9yLWNvbG9yOiM1MzczZWM7LS1pbnB1dC1ib3JkZXItY29sb3I6I2NjYzstLWlucHV0LWZvbnQtY29sb3I6I2VmZWZlZjstLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiNjY2M7LS1vdXRsaW5lLWNvbG9yOiNmZmY7LS1jYXRlZ29yeS1mb250LWNvbG9yOiNlZmVmZWY7LS1idXR0b24tYWN0aXZlLWJhY2tncm91bmQ6IzU1NTU1NTstLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiM0ODQ4NDh9fTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9YnV0dG9ue21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6MDtiYWNrZ3JvdW5kOjAgMDtib3gtc2hhZG93Om5vbmU7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH1pbnB1dHtwYWRkaW5nOjA7bWFyZ2luOjA7bGluZS1oZWlnaHQ6MS4xNTtmb250LWZhbWlseTppbmhlcml0fWlucHV0W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Zm9jdXN7b3V0bGluZTp2YXIoLS1vdXRsaW5lLWNvbG9yKSBzb2xpZCB2YXIoLS1vdXRsaW5lLXNpemUpO291dGxpbmUtb2Zmc2V0OmNhbGMoLTEqdmFyKC0tb3V0bGluZS1zaXplKSl9Omhvc3QoW2RhdGEtanMtZm9jdXMtdmlzaWJsZV0pIDpmb2N1czpub3QoW2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZF0pe291dGxpbmU6MH06Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKXtvdXRsaW5lOjB9LmhpZGUtZm9jdXN7b3V0bGluZTowfSp7Ym94LXNpemluZzpib3JkZXItYm94fS5waWNrZXJ7Y29udGFpbjpjb250ZW50O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtib3JkZXI6dmFyKC0tYm9yZGVyLXNpemUpIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjstLXRvdGFsLWVtb2ppLXNpemU6Y2FsYyh2YXIoLS1lbW9qaS1zaXplKSArICgyICogdmFyKC0tZW1vamktcGFkZGluZykpKTstLXRvdGFsLWNhdGVnb3J5LWVtb2ppLXNpemU6Y2FsYyh2YXIoLS1jYXRlZ29yeS1lbW9qaS1zaXplKSArICgyICogdmFyKC0tY2F0ZWdvcnktZW1vamktcGFkZGluZykpKX0uc3Itb25seXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7aGVpZ2h0OjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLDAsMCwwKTtib3JkZXI6MH0uaGlkZGVue29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfS5hYnMtcG9ze3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MH0uZ29uZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5za2ludG9uZS1idXR0b24td3JhcHBlciwuc2tpbnRvbmUtbGlzdHtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO3otaW5kZXg6M30uc2tpbnRvbmUtYnV0dG9uLXdyYXBwZXIuZXhwYW5kZWR7ei1pbmRleDoxfS5za2ludG9uZS1saXN0e3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWlubGluZS1lbmQ6MDt0b3A6MDt6LWluZGV4OjI7b3ZlcmZsb3c6dmlzaWJsZTtib3JkZXItYm90dG9tOnZhcigtLWJvcmRlci1zaXplKSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6MCAwIHZhcigtLXNraW50b25lLWJvcmRlci1yYWRpdXMpIHZhcigtLXNraW50b25lLWJvcmRlci1yYWRpdXMpO3dpbGwtY2hhbmdlOnRyYW5zZm9ybTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgMH1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuc2tpbnRvbmUtbGlzdHt0cmFuc2l0aW9uLWR1cmF0aW9uOi4wMDFzfX1Ac3VwcG9ydHMgbm90IChpbnNldC1pbmxpbmUtZW5kOjApey5za2ludG9uZS1saXN0e3JpZ2h0OjB9fS5za2ludG9uZS1saXN0Lm5vLWFuaW1hdGV7dHJhbnNpdGlvbjpub25lfS50YWJwYW5lbHtvdmVyZmxvdy15OmF1dG87c2Nyb2xsYmFyLWd1dHRlcjpzdGFibGU7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtO21pbi1oZWlnaHQ6MDtmbGV4OjE7Y29udGFpbjpjb250ZW50fS5lbW9qaS1tZW51e2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KHZhcigtLW51bS1jb2x1bW5zKSx2YXIoLS10b3RhbC1lbW9qaS1zaXplKSk7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3dpZHRoOjEwMCV9LmVtb2ppLW1lbnUudmlzaWJpbGl0eS1hdXRve2NvbnRlbnQtdmlzaWJpbGl0eTphdXRvO2NvbnRhaW4taW50cmluc2ljLXNpemU6Y2FsYyh2YXIoLS1udW0tY29sdW1ucykqdmFyKC0tdG90YWwtZW1vamktc2l6ZSkpIGNhbGModmFyKC0tbnVtLXJvd3MpKnZhcigtLXRvdGFsLWVtb2ppLXNpemUpKX0uY2F0ZWdvcnl7cGFkZGluZzp2YXIoLS1lbW9qaS1wYWRkaW5nKTtmb250LXNpemU6dmFyKC0tY2F0ZWdvcnktZm9udC1zaXplKTtjb2xvcjp2YXIoLS1jYXRlZ29yeS1mb250LWNvbG9yKX0uZW1vamksYnV0dG9uLmVtb2ppe2ZvbnQtc2l6ZTp2YXIoLS1lbW9qaS1zaXplKTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czoxMDAlO2hlaWdodDp2YXIoLS10b3RhbC1lbW9qaS1zaXplKTt3aWR0aDp2YXIoLS10b3RhbC1lbW9qaS1zaXplKTtsaW5lLWhlaWdodDoxO292ZXJmbG93OmhpZGRlbjtmb250LWZhbWlseTp2YXIoLS1lbW9qaS1mb250LWZhbWlseSk7Y3Vyc29yOnBvaW50ZXJ9QG1lZGlhIChob3Zlcjpob3ZlcikgYW5kIChwb2ludGVyOmZpbmUpey5lbW9qaTpob3ZlcixidXR0b24uZW1vamk6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZCl9fS5lbW9qaS5hY3RpdmUsLmVtb2ppOmFjdGl2ZSxidXR0b24uZW1vamkuYWN0aXZlLGJ1dHRvbi5lbW9qaTphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1idXR0b24tYWN0aXZlLWJhY2tncm91bmQpfS5vbnNjcmVlbiAuY3VzdG9tLWVtb2ppOjphZnRlcntjb250ZW50OlxcXCJcXFwiO3dpZHRoOnZhcigtLWVtb2ppLXNpemUpO2hlaWdodDp2YXIoLS1lbW9qaS1zaXplKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb250YWluO2JhY2tncm91bmQtaW1hZ2U6dmFyKC0tY3VzdG9tLWVtb2ppLWJhY2tncm91bmQpfS5uYXYsLm5hdi1idXR0b257YWxpZ24taXRlbXM6Y2VudGVyfS5uYXZ7ZGlzcGxheTpncmlkO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2NvbnRhaW46Y29udGVudH0ubmF2LWJ1dHRvbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubmF2LWVtb2ppe2ZvbnQtc2l6ZTp2YXIoLS1jYXRlZ29yeS1lbW9qaS1zaXplKTt3aWR0aDp2YXIoLS10b3RhbC1jYXRlZ29yeS1lbW9qaS1zaXplKTtoZWlnaHQ6dmFyKC0tdG90YWwtY2F0ZWdvcnktZW1vamktc2l6ZSl9LmluZGljYXRvci13cmFwcGVye2Rpc3BsYXk6ZmxleDtib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpfS5pbmRpY2F0b3J7d2lkdGg6Y2FsYygxMDAlL3ZhcigtLW51bS1ncm91cHMpKTtoZWlnaHQ6dmFyKC0taW5kaWNhdG9yLWhlaWdodCk7b3BhY2l0eTp2YXIoLS1pbmRpY2F0b3Itb3BhY2l0eSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pbmRpY2F0b3ItY29sb3IpO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5O3RyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyLHRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0fUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5pbmRpY2F0b3J7d2lsbC1jaGFuZ2U6b3BhY2l0eTt0cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcn19LnBhZC10b3AsaW5wdXQuc2VhcmNoe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7d2lkdGg6MTAwJX0ucGFkLXRvcHtoZWlnaHQ6dmFyKC0tZW1vamktcGFkZGluZyk7ei1pbmRleDozfS5zZWFyY2gtcm93e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tZW1vamktcGFkZGluZyk7cGFkZGluZy1ib3R0b206dmFyKC0tZW1vamktcGFkZGluZyl9LnNlYXJjaC13cmFwcGVye2ZsZXg6MTttaW4td2lkdGg6MH1pbnB1dC5zZWFyY2h7cGFkZGluZzp2YXIoLS1pbnB1dC1wYWRkaW5nKTtib3JkZXItcmFkaXVzOnZhcigtLWlucHV0LWJvcmRlci1yYWRpdXMpO2JvcmRlcjp2YXIoLS1pbnB1dC1ib3JkZXItc2l6ZSkgc29saWQgdmFyKC0taW5wdXQtYm9yZGVyLWNvbG9yKTtjb2xvcjp2YXIoLS1pbnB1dC1mb250LWNvbG9yKTtmb250LXNpemU6dmFyKC0taW5wdXQtZm9udC1zaXplKTtsaW5lLWhlaWdodDp2YXIoLS1pbnB1dC1saW5lLWhlaWdodCl9aW5wdXQuc2VhcmNoOjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcil9LmZhdm9yaXRlc3tvdmVyZmxvdy15OmF1dG87c2Nyb2xsYmFyLWd1dHRlcjpzdGFibGU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztib3JkZXItdG9wOnZhcigtLWJvcmRlci1zaXplKSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2NvbnRhaW46Y29udGVudH0ubWVzc2FnZXtwYWRkaW5nOnZhcigtLWVtb2ppLXBhZGRpbmcpfVwiO1xuXG5jb25zdCBQUk9QUyA9IFtcbiAgJ2N1c3RvbUVtb2ppJyxcbiAgJ2N1c3RvbUNhdGVnb3J5U29ydGluZycsXG4gICdkYXRhYmFzZScsXG4gICdkYXRhU291cmNlJyxcbiAgJ2kxOG4nLFxuICAnbG9jYWxlJyxcbiAgJ3NraW5Ub25lRW1vamknLFxuICAnZW1vamlWZXJzaW9uJ1xuXTtcblxuLy8gU3R5bGVzIGluamVjdGVkIG91cnNlbHZlcywgc28gd2UgY2FuIGRlY2xhcmUgdGhlIEZPTlRfRkFNSUxZIHZhcmlhYmxlIGluIG9uZSBwbGFjZVxuY29uc3QgRVhUUkFfU1RZTEVTID0gYDpob3N0ey0tZW1vamktZm9udC1mYW1pbHk6JHtGT05UX0ZBTUlMWX19YDtcblxuY2xhc3MgUGlja2VyRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBiYXNlU3R5bGVzICsgRVhUUkFfU1RZTEVTO1xuICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgdGhpcy5fY3R4ID0ge1xuICAgICAgLy8gU2V0IGRlZmF1bHRzXG4gICAgICBsb2NhbGU6IERFRkFVTFRfTE9DQUxFLFxuICAgICAgZGF0YVNvdXJjZTogREVGQVVMVF9EQVRBX1NPVVJDRSxcbiAgICAgIHNraW5Ub25lRW1vamk6IERFRkFVTFRfU0tJTl9UT05FX0VNT0pJLFxuICAgICAgY3VzdG9tQ2F0ZWdvcnlTb3J0aW5nOiBERUZBVUxUX0NBVEVHT1JZX1NPUlRJTkcsXG4gICAgICBjdXN0b21FbW9qaTogbnVsbCxcbiAgICAgIGkxOG46IGVuSTE4bixcbiAgICAgIGVtb2ppVmVyc2lvbjogbnVsbCxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgICAvLyBIYW5kbGUgcHJvcGVydGllcyBzZXQgYmVmb3JlIHRoZSBlbGVtZW50IHdhcyB1cGdyYWRlZFxuICAgIGZvciAoY29uc3QgcHJvcCBvZiBQUk9QUykge1xuICAgICAgaWYgKHByb3AgIT09ICdkYXRhYmFzZScgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIHByb3ApKSB7XG4gICAgICAgIHRoaXMuX2N0eFtwcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgIGRlbGV0ZSB0aGlzW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9kYkZsdXNoKCk7IC8vIHdhaXQgZm9yIGEgZmx1c2ggYmVmb3JlIGNyZWF0aW5nIHRoZSBkYiwgaW4gY2FzZSB0aGUgdXNlciBjYWxscyBlLmcuIGEgc2V0dGVyIG9yIHNldEF0dHJpYnV0ZVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgIHJlc2N1ZUVsZW1lbnRQcm90b3R5cGUodGhpcyk7XG4gICAgLy8gVGhlIF9jbXAgbWF5IGJlIGRlZmluZWQgaWYgdGhlIGNvbXBvbmVudCB3YXMgaW1tZWRpYXRlbHkgZGlzY29ubmVjdGVkIGFuZCB0aGVuIHJlY29ubmVjdGVkLiBJbiB0aGF0IGNhc2UsXG4gICAgLy8gZG8gbm90aGluZyAocHJlc2VydmUgdGhlIHN0YXRlKVxuICAgIGlmICghdGhpcy5fY21wKSB7XG4gICAgICB0aGlzLl9jbXAgPSBjcmVhdGVSb290KHRoaXMuc2hhZG93Um9vdCwgdGhpcy5fY3R4KTtcbiAgICB9XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgcmVzY3VlRWxlbWVudFByb3RvdHlwZSh0aGlzKTtcbiAgICAvLyBDaGVjayBpbiBhIG1pY3JvdGFzayBpZiB0aGUgZWxlbWVudCBpcyBzdGlsbCBjb25uZWN0ZWQuIElmIHNvLCB0cmVhdCB0aGlzIGFzIGEgXCJtb3ZlXCIgcmF0aGVyIHRoYW4gYSBkaXNjb25uZWN0XG4gICAgLy8gSW5zcGlyZWQgYnkgVnVlOiBodHRwczovL3Z1ZWpzLm9yZy9ndWlkZS9leHRyYXMvd2ViLWNvbXBvbmVudHMuaHRtbCNidWlsZGluZy1jdXN0b20tZWxlbWVudHMtd2l0aC12dWVcbiAgICBxTSgoKSA9PiB7XG4gICAgICAvLyB0aGlzLl9jbXAgbWF5IGJlIGRlZmluZWQgaWYgY29ubmVjdC1kaXNjb25uZWN0LWNvbm5lY3QtZGlzY29ubmVjdCBvY2N1cnMgc3luY2hyb25vdXNseVxuICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkICYmIHRoaXMuX2NtcCkge1xuICAgICAgICB0aGlzLl9jbXAuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fY21wID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YWJhc2UgfSA9IHRoaXMuX2N0eDtcbiAgICAgICAgZGF0YWJhc2UuY2xvc2UoKVxuICAgICAgICAgIC8vIG9ubHkgaGFwcGVucyBpZiB0aGUgZGF0YWJhc2UgZmFpbGVkIHRvIGxvYWQgaW4gdGhlIGZpcnN0IHBsYWNlLCBzbyB3ZSBkb24ndCBjYXJlXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMgKCkge1xuICAgIHJldHVybiBbJ2xvY2FsZScsICdkYXRhLXNvdXJjZScsICdza2luLXRvbmUtZW1vamknLCAnZW1vamktdmVyc2lvbiddIC8vIGNvbXBsZXggb2JqZWN0cyBhcmVuJ3Qgc3VwcG9ydGVkLCBhbHNvIHVzZSBrZWJhYi1jYXNlXG4gIH1cblxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgKGF0dHJOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICB0aGlzLl9zZXQoXG4gICAgICAvLyBjb252ZXJ0IGZyb20ga2ViYWItY2FzZSB0byBjYW1lbGNhc2VcbiAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy8zODUyI2lzc3VlY29tbWVudC02NjUwMzcwMTVcbiAgICAgIGF0dHJOYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIChfLCB1cCkgPT4gdXAudG9VcHBlckNhc2UoKSksXG4gICAgICAvLyBjb252ZXJ0IHN0cmluZyBhdHRyaWJ1dGUgdG8gZmxvYXQgaWYgbmVjZXNzYXJ5XG4gICAgICBhdHRyTmFtZSA9PT0gJ2Vtb2ppLXZlcnNpb24nID8gcGFyc2VGbG9hdChuZXdWYWx1ZSkgOiBuZXdWYWx1ZVxuICAgICk7XG4gIH1cblxuICBfc2V0IChwcm9wLCBuZXdWYWx1ZSkge1xuICAgIHRoaXMuX2N0eFtwcm9wXSA9IG5ld1ZhbHVlO1xuICAgIGlmICh0aGlzLl9jbXApIHtcbiAgICAgIHRoaXMuX2NtcC4kc2V0KHsgW3Byb3BdOiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgaWYgKFsnbG9jYWxlJywgJ2RhdGFTb3VyY2UnXS5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgdGhpcy5fZGJGbHVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIF9kYkNyZWF0ZSAoKSB7XG4gICAgY29uc3QgeyBsb2NhbGUsIGRhdGFTb3VyY2UsIGRhdGFiYXNlIH0gPSB0aGlzLl9jdHg7XG4gICAgLy8gb25seSBjcmVhdGUgYSBuZXcgZGF0YWJhc2UgaWYgd2UgcmVhbGx5IG5lZWQgdG9cbiAgICBpZiAoIWRhdGFiYXNlIHx8IGRhdGFiYXNlLmxvY2FsZSAhPT0gbG9jYWxlIHx8IGRhdGFiYXNlLmRhdGFTb3VyY2UgIT09IGRhdGFTb3VyY2UpIHtcbiAgICAgIHRoaXMuX3NldCgnZGF0YWJhc2UnLCBuZXcgRGF0YWJhc2UoeyBsb2NhbGUsIGRhdGFTb3VyY2UgfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgRGF0YWJhc2UgaW4gb25lIG1pY3JvdGFzayBpZiB0aGUgbG9jYWxlL2RhdGFTb3VyY2UgY2hhbmdlLiBXZSBkbyBvbmUgbWljcm90YXNrXG4gIC8vIHNvIHdlIGRvbid0IGNyZWF0ZSB0d28gRGF0YWJhc2VzIGlmIGUuZy4gYm90aCB0aGUgbG9jYWxlIGFuZCB0aGUgZGF0YVNvdXJjZSBjaGFuZ2VcbiAgX2RiRmx1c2ggKCkge1xuICAgIHFNKCgpID0+IChcbiAgICAgIHRoaXMuX2RiQ3JlYXRlKClcbiAgICApKTtcbiAgfVxufVxuXG5jb25zdCBkZWZpbml0aW9ucyA9IHt9O1xuXG5mb3IgKGNvbnN0IHByb3Agb2YgUFJPUFMpIHtcbiAgZGVmaW5pdGlvbnNbcHJvcF0gPSB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIGlmIChwcm9wID09PSAnZGF0YWJhc2UnKSB7XG4gICAgICAgIC8vIGluIHJhcmUgY2FzZXMsIHRoZSBtaWNyb3Rhc2sgbWF5IG5vdCBiZSBmbHVzaGVkIHlldCwgc28gd2UgbmVlZCB0byBpbnN0YW50aWF0ZSB0aGUgREJcbiAgICAgICAgLy8gbm93IGlmIHRoZSB1c2VyIGlzIGFza2luZyBmb3IgaXRcbiAgICAgICAgdGhpcy5fZGJDcmVhdGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9jdHhbcHJvcF1cbiAgICB9LFxuICAgIHNldCAodmFsKSB7XG4gICAgICBpZiAocHJvcCA9PT0gJ2RhdGFiYXNlJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGFiYXNlIGlzIHJlYWQtb25seScpXG4gICAgICB9XG4gICAgICB0aGlzLl9zZXQocHJvcCwgdmFsKTtcbiAgICB9XG4gIH07XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFBpY2tlckVsZW1lbnQucHJvdG90eXBlLCBkZWZpbml0aW9ucyk7XG5cbi8vIFNlZSBodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMjUvZmlyZWZveC1jdXN0b20tZWxlbWVudHMtaWZyYW1lcy1idWcvXG4vLyBUT0RPOiByZW1vdmUgd2hlbiB0aGUgRmlyZWZveCBidWcgaXMgZml4ZWQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE1MDI4MTRcbmZ1bmN0aW9uIHJlc2N1ZUVsZW1lbnRQcm90b3R5cGUgKGVsZW1lbnQpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBQaWNrZXJFbGVtZW50KSkge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihlbGVtZW50LCBjdXN0b21FbGVtZW50cy5nZXQoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdlbW9qaS1waWNrZXInKSkgeyAvLyBpZiBhbHJlYWR5IGRlZmluZWQsIGRvIG5vdGhpbmcgKGUuZy4gc2FtZSBzY3JpcHQgaW1wb3J0ZWQgdHdpY2UpXG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZW1vamktcGlja2VyJywgUGlja2VyRWxlbWVudCk7XG59XG5cbmV4cG9ydCB7IFBpY2tlckVsZW1lbnQgYXMgZGVmYXVsdCwgcmVzY3VlRWxlbWVudFByb3RvdHlwZSB9O1xuIiwgImltcG9ydCB7IHN0b3JlLCBnZXRDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9pbnRlcmFjdGl2aXR5JztcblxuLyoqXG4gKiBUaGUgaW5saW5lIHJlcGx5IGNvbXBvc2VyIChvbmUgcGVyIGNvbW1lbnQpIGlzIHN0YXRlLWJvdW5kOiBvbmx5IG9uZSBpc1xuICogb3BlbiBhdCBhIHRpbWUsIGFuZCBgc3RhdGUuYm9keWAgY2FycmllcyBpdHMgZHJhZnQuIEVhY2ggcG9zdCBjYXJkJ3NcbiAqIGFsd2F5cy12aXNpYmxlIHJvb3QgY29tcG9zZXIgaXMgYSB2YW5pbGxhIGZvcm0gXHUyMDE0IGl0cyB0ZXh0YXJlYSBpc24ndFxuICogSUFQSS1ib3VuZCwgc28gbXVsdGlwbGUgY2FyZHMgY2FuIGNvZXhpc3Qgb24gdGhlIGZlZWQgd2l0aG91dCBzaGFyaW5nXG4gKiBzdGF0ZS4gVGhlIHN1Ym1pdCBhY3Rpb24gaGFuZGxlcyBib3RoIGtpbmRzIGFuZCB3YWxrcyB1cCB0byB0aGVcbiAqIGVuY2xvc2luZyBwb3N0IGNhcmQgdG8gZmlndXJlIG91dCB3aGljaCBwb3N0IHRvIGNvbW1lbnQgb24uXG4gKi9cbnN0b3JlKCAnaGV5ZmFtL2NvbW1lbnRzJywge1xuICBzdGF0ZToge1xuICAgIGNvbXBvc2luZzogIDAsICAgLy8gMCA9IG5vIGlubGluZSBjb21wb3NlciBvcGVuOyBvdGhlcndpc2UgdGhlIHBhcmVudCBjb21tZW50IGlkXG4gICAgYm9keTogICAgICAgJycsXG4gICAgc3VibWl0dGluZzogZmFsc2UsXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICByZXBseSgpIHtcbiAgICAgIGNvbnN0IGN0eCA9IGdldENvbnRleHQoICdoZXlmYW0vZmVlZCcgKTtcbiAgICAgIGNvbnN0IGlkICA9IGN0eD8uY29tbWVudD8uaWQgPyBwYXJzZUludCggY3R4LmNvbW1lbnQuaWQsIDEwICkgOiAwO1xuICAgICAgaWYgKCAhIGlkICkgcmV0dXJuO1xuICAgICAgY29uc3QgcyA9IHN0b3JlKCAnaGV5ZmFtL2NvbW1lbnRzJyApLnN0YXRlO1xuICAgICAgY2xvc2VPcGVuSW5saW5lRm9ybXMoKTtcbiAgICAgIGlmICggcy5jb21wb3NpbmcgPT09IGlkICkge1xuICAgICAgICBzLmNvbXBvc2luZyA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHMuY29tcG9zaW5nID0gaWQ7XG4gICAgICBzLmJvZHkgICAgICA9ICcnO1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGBhcnRpY2xlLmhleWZhbS1jb21tZW50W2RhdGEtaWQ9XCIke2lkfVwiXSAuaGV5ZmFtLWNvbW1lbnQtZm9ybS0taW5saW5lYCApO1xuICAgICAgaWYgKCBmb3JtICkge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoICdpcy1vcGVuJyApO1xuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoICd0ZXh0YXJlYScgKT8uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZUJvZHkoIGUgKSB7XG4gICAgICBzdG9yZSggJ2hleWZhbS9jb21tZW50cycgKS5zdGF0ZS5ib2R5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBhdXRvU2l6ZSggZS50YXJnZXQgKTtcbiAgICB9LFxuICAgIGF1dG9zaXplKCBlICkge1xuICAgICAgYXV0b1NpemUoIGUudGFyZ2V0ICk7XG4gICAgfSxcbiAgICAqc3VibWl0KCBlICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybSAgICAgPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IHBvc3RDYXJkID0gZm9ybS5jbG9zZXN0KCAnW2RhdGEtdGFyZ2V0LXR5cGU9XCJwb3N0XCJdJyApO1xuICAgICAgY29uc3QgcG9zdF9pZCAgPSBwb3N0Q2FyZCA/IHBhcnNlSW50KCBwb3N0Q2FyZC5kYXRhc2V0LmlkLCAxMCApIDogMDtcbiAgICAgIGlmICggISBwb3N0X2lkICkgcmV0dXJuO1xuICAgICAgY29uc3QgaXNSb290ID0gZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoICdoZXlmYW0tY29tbWVudC1mb3JtLS1yb290JyApO1xuICAgICAgY29uc3QgdGEgICAgID0gZm9ybS5xdWVyeVNlbGVjdG9yKCAndGV4dGFyZWEnICk7XG4gICAgICBjb25zdCBzICAgICAgPSBzdG9yZSggJ2hleWZhbS9jb21tZW50cycgKS5zdGF0ZTtcbiAgICAgIGlmICggcy5zdWJtaXR0aW5nICkgcmV0dXJuO1xuICAgICAgY29uc3QgZHJhZnQgPSBpc1Jvb3QgPyAoIHRhPy52YWx1ZSB8fCAnJyApIDogcy5ib2R5O1xuICAgICAgY29uc3QgYm9keSAgPSBkcmFmdC50cmltKCk7XG4gICAgICBpZiAoICEgYm9keSApIHJldHVybjtcbiAgICAgIGNvbnN0IHBhcmVudF9pZCA9IGlzUm9vdCA/IDAgOiBzLmNvbXBvc2luZztcbiAgICAgIHMuc3VibWl0dGluZyA9IHRydWU7XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHIgPSB5aWVsZCBmZXRjaCggYCR7aGV5ZmFtLmFwaUJhc2V9LyR7aGV5ZmFtLmZhbVNsdWd9L2NvbW1lbnRzYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnWC1XUC1Ob25jZSc6ICAgaGV5ZmFtLm5vbmNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgcG9zdF9pZCwgcGFyZW50X2lkLCBib2R5IH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBpZiAoICEgci5vayApIHRocm93IG5ldyBFcnJvciggJ2NvbW1lbnQtZmFpbGVkJyApO1xuICAgICAgICBpZiAoIGlzUm9vdCApIHtcbiAgICAgICAgICBpZiAoIHRhICkgeyB0YS52YWx1ZSA9ICcnOyBhdXRvU2l6ZSggdGEgKTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMuYm9keSAgICAgID0gJyc7XG4gICAgICAgICAgcy5jb21wb3NpbmcgPSAwO1xuICAgICAgICAgIGNsb3NlT3BlbklubGluZUZvcm1zKCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmUoICdoZXlmYW0vZmVlZCcgKS5jYWxsYmFja3MucmVmcmVzaCggaGV5ZmFtICk7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBhbGVydCggJ0NvdWxkIG5vdCBjb21tZW50LiBUcnkgYWdhaW4uJyApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgcy5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0gKTtcblxuZnVuY3Rpb24gY2xvc2VPcGVuSW5saW5lRm9ybXMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuaGV5ZmFtLWNvbW1lbnQtZm9ybS0taW5saW5lLmlzLW9wZW4nIClcbiAgICAuZm9yRWFjaCggKCBlbCApID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoICdpcy1vcGVuJyApICk7XG59XG5cbi8qKlxuICogUmVzaXplIGEgdGV4dGFyZWEgdG8gZml0IGl0cyBjb250ZW50ICh1cCB0byBhIHNvZnQgY2FwKS4gVGhlIGNhcCBrZWVwc1xuICogcnVuYXdheSBlc3NheXMgZnJvbSBwdXNoaW5nIHRoZSByZXN0IG9mIHRoZSBwYWdlIG9mZi1zY3JlZW47IHNjcm9sbCBraWNrc1xuICogaW4gcGFzdCBpdC5cbiAqL1xuY29uc3QgQVVUT1NJWkVfTUFYID0gMjAwO1xuZnVuY3Rpb24gYXV0b1NpemUoIGVsICkge1xuICBpZiAoICEgZWwgfHwgZWwudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyApIHJldHVybjtcbiAgZWwuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICBlbC5zdHlsZS5oZWlnaHQgPSBNYXRoLm1pbiggZWwuc2Nyb2xsSGVpZ2h0LCBBVVRPU0laRV9NQVggKSArICdweCc7XG4gIGVsLnN0eWxlLm92ZXJmbG93WSA9IGVsLnNjcm9sbEhlaWdodCA+IEFVVE9TSVpFX01BWCA/ICdhdXRvJyA6ICdoaWRkZW4nO1xufVxuIiwgImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9pbnRlcmFjdGl2aXR5JztcblxuLyoqXG4gKiBQb2xsIHZvdGluZyBzdG9yZS5cbiAqXG4gKiBUaGUgcG9zdC1jYXJkIHBvbGwgd2lkZ2V0IGJpbmRzIGVhY2ggb3B0aW9uIGJ1dHRvbidzIGNsaWNrIHRvXG4gKiBgaGV5ZmFtL3BvbGxzOjphY3Rpb25zLnZvdGVgLiBUaGUgYnV0dG9uIGNhcnJpZXMgYGRhdGEtb3B0aW9uLWluZGV4YFxuICogYW5kIGl0cyBlbmNsb3NpbmcgYC5oZXlmYW0tcG9zdC1jYXJkYCBjYXJyaWVzIGBkYXRhLXBvc3QtaWRgOyB3ZSByZWFkXG4gKiB0aG9zZSB0byBpZGVudGlmeSB0aGUgdGFyZ2V0IHdpdGhvdXQgcGlwaW5nIHRoZSBwb3N0IGlkIHRocm91Z2ggY29udGV4dC5cbiAqXG4gKiBBZnRlciBhIHN1Y2Nlc3NmdWwgdm90ZSB3ZSB0cmlnZ2VyIGBoZXlmYW0vZmVlZDo6Y2FsbGJhY2tzLnJlZnJlc2hgIHNvXG4gKiB0aGUgcmVzdWx0IGJhcnMgKyB2b3RlciBjaGlwcyB1cGRhdGUgd2l0aG91dCB3YWl0aW5nIGZvciB0aGUgMTBzXG4gKiBwb2xsaW5nIGN5Y2xlLlxuICovXG5zdG9yZSggJ2hleWZhbS9wb2xscycsIHtcbiAgYWN0aW9uczoge1xuICAgICp2b3RlKCBlICkge1xuICAgICAgY29uc3QgYnRuID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgaWR4ID0gYnRuID8gcGFyc2VJbnQoIGJ0bi5kYXRhc2V0Lm9wdGlvbkluZGV4LCAxMCApIDogLTE7XG4gICAgICBjb25zdCBjYXJkID0gYnRuID8gYnRuLmNsb3Nlc3QoICdbZGF0YS1wb3N0LWlkXScgKSA6IG51bGw7XG4gICAgICBjb25zdCBwaWQgPSBjYXJkID8gcGFyc2VJbnQoIGNhcmQuZGF0YXNldC5wb3N0SWQsIDEwICkgOiAwO1xuICAgICAgaWYgKCAhIHBpZCB8fCBOdW1iZXIuaXNOYU4oIGlkeCApIHx8IGlkeCA8IDAgKSByZXR1cm47XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCBgJHsgaGV5ZmFtLmFwaUJhc2UgfS8keyBoZXlmYW0uZmFtU2x1ZyB9L3BvbGwtdm90ZWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSggeyBwb3N0X2lkOiBwaWQsIG9wdGlvbl9pbmRleDogaWR4IH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBpZiAoICEgci5vayApIHtcbiAgICAgICAgICBjb25zdCBib2R5ID0geWllbGQgci5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICAgIGlmICggYm9keT8uZXJyb3IgPT09ICdjbG9zZWQnICkge1xuICAgICAgICAgICAgYWxlcnQoICdUaGlzIHBvbGwgaGFzIGNsb3NlZC4nICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCAnQ291bGQgbm90IHZvdGUuIFRyeSBhZ2Fpbi4nICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBMaXZlIHJlc3VsdCByZXZlYWwgXHUyMDE0IHB1bGwgdGhlIGZlZWQgYmFjayBpbW1lZGlhdGVseSByYXRoZXJcbiAgICAgICAgLy8gdGhhbiB3YWl0aW5nIGZvciB0aGUgMTBzIHBvbGxpbmcgdGljay5cbiAgICAgICAgc3RvcmUoICdoZXlmYW0vZmVlZCcgKS5jYWxsYmFja3M/LnJlZnJlc2g/LiggaGV5ZmFtICk7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBhbGVydCggJ0NvdWxkIG5vdCB2b3RlLiBUcnkgYWdhaW4uJyApO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59ICk7XG4iLCAiaW1wb3J0IHsgc3RvcmUsIGdldENvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2ludGVyYWN0aXZpdHknO1xuaW1wb3J0IHsgY3VycmVudFBvc3RJZCB9IGZyb20gJy4uL2xpYi9kb20uanMnO1xuXG4vKipcbiAqIE9uZSBzdG9yZSwgdHdvIHBhZ2VzLiBPbiB0aGUgZmVlZCBwYWdlIGBzdGF0ZS5wb3N0c2AgaXMgdGhlIGZ1bGwgbGlzdDtcbiAqIG9uIHRoZSBzaW5nbGUgcGFnZSBpdCdzIGEgb25lLWVsZW1lbnQgYXJyYXkuIFRoZSBzZXJ2ZXIgcHJlLWRlY29yYXRlc1xuICogY29tbWVudHMgKERGUy1vcmRlcmVkLCB3aXRoIGRlcHRoL3BhcmVudF9uYW1lL2V0Yy4pLCBzbyB0aGUgY2xpZW50XG4gKiBuZXZlciBoYXMgdG8gZmxhdHRlbiBvciBzaGFwZSB0aGUgcGF5bG9hZC5cbiAqL1xuLy8gRG9uJ3QgZGVmaW5lIGBwb3N0c2AgLyBgaGFzUG9zdHNgIGluIGluaXRpYWwgc3RhdGUgXHUyMDE0IElBUEkncyBgZGVlcE1lcmdlYFxuLy8gcmVwbGFjZXMgYXJyYXlzIHJhdGhlciB0aGFuIG1lcmdpbmcsIHNvIGFuIGVtcHR5IGFycmF5IGhlcmUgd2lwZXMgdGhlXG4vLyBTU1ItaW5qZWN0ZWQgc3RhdGUuIFRoZSBkaXJlY3RpdmVzIGRlZ3JhZGUgZ3JhY2VmdWxseSB3aGVuIHRob3NlIGtleXNcbi8vIGFyZSBhYnNlbnQgKGBkYXRhLXdwLWVhY2hgIGJhaWxzIG9uIHVuZGVmaW5lZCBpdGVyYWJsZXMpLlxuY29uc3QgeyBzdGF0ZSB9ID0gc3RvcmUoICdoZXlmYW0vZmVlZCcsIHtcbiAgc3RhdGU6IHtcbiAgICBsYXN0RmV0Y2g6IG51bGwsXG4gICAgLy8gRGVsZXRlLWNvbmZpcm0gZGlhbG9nIHN0YXRlLlxuICAgIGRlbGV0ZU9wZW46ICAgZmFsc2UsXG4gICAgZGVsZXRlVGFyZ2V0SWQ6IDAsXG4gICAgZGVsZXRpbmc6ICAgICBmYWxzZSxcbiAgICBkZWxldGVFcnJvcjogICcnLFxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgdG9nZ2xlUG9zdE1lbnUoKSB7XG4gICAgICBjb25zdCBjdHggPSBnZXRDb250ZXh0KCk7XG4gICAgICBjb25zdCBpZCAgPSBjdHg/Lml0ZW0/LmlkO1xuICAgICAgaWYgKCAhIGlkIHx8ICEgQXJyYXkuaXNBcnJheSggc3RhdGUucG9zdHMgKSApIHJldHVybjtcbiAgICAgIGNvbnN0IHdpbGxPcGVuID0gISBjdHguaXRlbS5tZW51T3BlbjtcbiAgICAgIC8vIENsb3NlIGV2ZXJ5IG90aGVyIHBvc3QncyBtZW51OyBvbmx5IG9uZSBpcyBvcGVuIGF0IGEgdGltZS5cbiAgICAgIGZvciAoIGNvbnN0IHAgb2Ygc3RhdGUucG9zdHMgKSBwLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgICBjdHguaXRlbS5tZW51T3BlbiA9IHdpbGxPcGVuO1xuICAgIH0sXG4gICAgKmNvcHlQb3N0TGluaygpIHtcbiAgICAgIGNvbnN0IGN0eCA9IGdldENvbnRleHQoKTtcbiAgICAgIGNvbnN0IHVybCA9IGN0eD8uaXRlbT8ucGVybWFsaW5rO1xuICAgICAgaWYgKCBjdHg/Lml0ZW0gKSBjdHguaXRlbS5tZW51T3BlbiA9IGZhbHNlO1xuICAgICAgaWYgKCAhIHVybCApIHJldHVybjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCB1cmwgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIC8vIExhc3QtZGl0Y2ggZmFsbGJhY2s6IG9wZW4gdGhlIGxpbmsgc28gdGhlIHVzZXIgY2FuIGNvcHkgZnJvbSB0aGUgYWRkcmVzcyBiYXIuXG4gICAgICAgIHdpbmRvdy5wcm9tcHQoICdDb3B5IHRoaXMgbGluaycsIHVybCApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZWRpdFBvc3QoKSB7XG4gICAgICBjb25zdCBjdHggID0gZ2V0Q29udGV4dCgpO1xuICAgICAgY29uc3QgcG9zdCA9IGN0eD8uaXRlbTtcbiAgICAgIGlmICggcG9zdCApIHBvc3QubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgIGlmICggISBwb3N0ICkgcmV0dXJuO1xuICAgICAgc3RvcmUoICdoZXlmYW0vY29tcG9zZXInICkuYWN0aW9ucy5vcGVuRWRpdG9yKCBwb3N0ICk7XG4gICAgfSxcbiAgICBkZWxldGVQb3N0KCkge1xuICAgICAgY29uc3QgY3R4ID0gZ2V0Q29udGV4dCgpO1xuICAgICAgY29uc3QgaWQgID0gY3R4Py5pdGVtPy5pZDtcbiAgICAgIGlmICggY3R4Py5pdGVtICkgY3R4Lml0ZW0ubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgIGlmICggISBpZCApIHJldHVybjtcbiAgICAgIHN0YXRlLmRlbGV0ZVRhcmdldElkID0gaWQ7XG4gICAgICBzdGF0ZS5kZWxldGVFcnJvciAgICA9ICcnO1xuICAgICAgc3RhdGUuZGVsZXRlT3BlbiAgICAgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaGV5ZmFtLW1vZGFsLW9wZW4nICk7XG4gICAgfSxcbiAgICBjbG9zZURlbGV0ZUNvbmZpcm0oKSB7XG4gICAgICBpZiAoIHN0YXRlLmRlbGV0aW5nICkgcmV0dXJuO1xuICAgICAgc3RhdGUuZGVsZXRlT3BlbiAgICAgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmRlbGV0ZVRhcmdldElkID0gMDtcbiAgICAgIHN0YXRlLmRlbGV0ZUVycm9yICAgID0gJyc7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoZXlmYW0tbW9kYWwtb3BlbicgKTtcbiAgICB9LFxuICAgIG9uRGVsZXRlQmFja2Ryb3AoIGUgKSB7XG4gICAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdD8uY29udGFpbnMoICdoZXlmYW0tbW9kYWwnICkgKSB7XG4gICAgICAgIHN0b3JlKCAnaGV5ZmFtL2ZlZWQnICkuYWN0aW9ucy5jbG9zZURlbGV0ZUNvbmZpcm0oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgICpjb25maXJtRGVsZXRlKCkge1xuICAgICAgY29uc3QgaWQgPSBzdGF0ZS5kZWxldGVUYXJnZXRJZDtcbiAgICAgIGlmICggISBpZCB8fCBzdGF0ZS5kZWxldGluZyApIHJldHVybjtcbiAgICAgIHN0YXRlLmRlbGV0aW5nICAgID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmRlbGV0ZUVycm9yID0gJyc7XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCBgJHsgaGV5ZmFtLmFwaUJhc2UgfS8keyBoZXlmYW0uZmFtU2x1ZyB9L3Bvc3QvJHsgaWQgfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgICAgICB9ICk7XG4gICAgICAgIGlmICggISByLm9rICkgdGhyb3cgbmV3IEVycm9yKCAnZGVsZXRlLWZhaWxlZCcgKTtcblxuICAgICAgICAvLyBPcHRpbWlzdGljYWxseSBkcm9wIGZyb20gdGhlIGxvY2FsIGZlZWQgc28gdGhlIHBvc3QgZGlzYXBwZWFyc1xuICAgICAgICAvLyBpbW1lZGlhdGVseS4gVGhlIG5leHQgcmVmcmVzaCB3aWxsIHJlY29uY2lsZS5cbiAgICAgICAgaWYgKCBBcnJheS5pc0FycmF5KCBzdGF0ZS5wb3N0cyApICkge1xuICAgICAgICAgIHN0YXRlLnBvc3RzID0gc3RhdGUucG9zdHMuZmlsdGVyKCBwID0+IHAuaWQgIT09IGlkICk7XG4gICAgICAgICAgc3RhdGUuaGFzUG9zdHMgPSBzdGF0ZS5wb3N0cy5sZW5ndGggPiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuZGVsZXRlT3BlbiAgICAgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZGVsZXRlVGFyZ2V0SWQgPSAwO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoZXlmYW0tbW9kYWwtb3BlbicgKTtcblxuICAgICAgICAvLyBPbiB0aGUgc2luZ2xlLXBvc3QgcGFnZSwgZmFsbCBiYWNrIHRvIHRoZSBmZWVkIHNpbmNlIHRoZSBwb3N0IGlzIGdvbmUuXG4gICAgICAgIGlmICggY3VycmVudFBvc3RJZCgpID09PSBpZCApIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvJHsgaGV5ZmFtLmZhbVNsdWcgfS9gO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3JlKCAnaGV5ZmFtL2ZlZWQnICkuY2FsbGJhY2tzPy5yZWZyZXNoPy4oIGhleWZhbSApO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgc3RhdGUuZGVsZXRlRXJyb3IgPSAnQ291bGQgbm90IGRlbGV0ZS4gVHJ5IGFnYWluLic7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzdGF0ZS5kZWxldGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgICpib290c3RyYXAoKSB7XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgIC8vIEluaXRpYWwgc3RhdGUgaXMgU1NSJ2QgYnkgUEhQLCBzbyBkb24ndCByZS1mZXRjaCBpbW1lZGlhdGVseSBcdTIwMTRcbiAgICAgIC8vIGp1bXAgc3RyYWlnaHQgdG8gdGhlIDEwcyBwb2xsaW5nIGxvb3AgZm9yIGxpdmUgdXBkYXRlcy5cbiAgICAgIHNldEludGVydmFsKCAoKSA9PiBzdG9yZSggJ2hleWZhbS9mZWVkJyApLmNhbGxiYWNrcy5yZWZyZXNoKCBoZXlmYW0gKSwgMTAwMDAgKTtcbiAgICAgIC8vIE91dHNpZGUtY2xpY2sgY2xvc2VzIGFueSBvcGVuIHBvc3QgbWVudS5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggZXYgKSA9PiB7XG4gICAgICAgIGlmICggISBBcnJheS5pc0FycmF5KCBzdGF0ZS5wb3N0cyApICkgcmV0dXJuO1xuICAgICAgICBpZiAoIGV2LnRhcmdldD8uY2xvc2VzdD8uKCAnLmhleWZhbS1tZW51JyApICkgcmV0dXJuO1xuICAgICAgICBmb3IgKCBjb25zdCBwIG9mIHN0YXRlLnBvc3RzICkgaWYgKCBwLm1lbnVPcGVuICkgcC5tZW51T3BlbiA9IGZhbHNlO1xuICAgICAgfSApO1xuICAgIH0sXG4gICAgKnJlZnJlc2goIGhleWZhbSApIHtcbiAgICAgIGlmICggISBoZXlmYW0uZmFtU2x1ZyApIHJldHVybjtcbiAgICAgIGNvbnN0IHBvc3RfaWQgPSBjdXJyZW50UG9zdElkKCk7XG4gICAgICBjb25zdCB1cmwgPSBwb3N0X2lkXG4gICAgICAgID8gYCR7aGV5ZmFtLmFwaUJhc2V9LyR7aGV5ZmFtLmZhbVNsdWd9L3Bvc3QvJHtwb3N0X2lkfWBcbiAgICAgICAgOiBgJHtoZXlmYW0uYXBpQmFzZX0vJHtoZXlmYW0uZmFtU2x1Z30vZmVlZGA7XG4gICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIHVybCwge1xuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICBoZWFkZXJzOiB7ICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgICB9ICk7XG4gICAgICBpZiAoICEgci5vayApIHJldHVybjtcbiAgICAgIGNvbnN0IGJvZHkgPSB5aWVsZCByLmpzb24oKTtcbiAgICAgIHN0YXRlLnBvc3RzICAgID0gcG9zdF9pZCA/ICggYm9keS5wb3N0ID8gWyBib2R5LnBvc3QgXSA6IFtdICkgOiAoIGJvZHkucG9zdHMgfHwgW10gKTtcbiAgICAgIHN0YXRlLmhhc1Bvc3RzID0gc3RhdGUucG9zdHMubGVuZ3RoID4gMDtcbiAgICAgIHN0YXRlLmxhc3RGZXRjaCA9IGJvZHkubm93O1xuICAgIH0sXG4gIH0sXG59ICk7XG5cbiIsICIvKiogUGFyc2UgYGJvZHkuY2xhc3NOYW1lYCBhbmQgcmV0dXJuIHRoZSBwb3N0IGlkIHdoZW4gb24gYSBzaW5ndWxhciBwb3N0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnRQb3N0SWRGcm9tQ2xhc3MoIGNsYXNzTmFtZSApIHtcbiAgY29uc3QgbSA9ICggY2xhc3NOYW1lIHx8ICcnICkubWF0Y2goIC9cXGJwb3N0aWQtKFxcZCspXFxiLyApO1xuICByZXR1cm4gbSA/IHBhcnNlSW50KCBtWyAxIF0sIDEwICkgOiAwO1xufVxuXG4vKiogQnJvd3Nlci1vbmx5IHdyYXBwZXIuIEtlZXAgRE9NIGFjY2VzcyBvdXQgb2YgdGhlIHRlc3RhYmxlIHN1cmZhY2UuICovXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudFBvc3RJZCgpIHtcbiAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgICA/IDBcbiAgICA6IGN1cnJlbnRQb3N0SWRGcm9tQ2xhc3MoIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICk7XG59XG4iLCAiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2ludGVyYWN0aXZpdHknO1xuXG4vLyBzdGF0ZS5mYW1zICsgc3RhdGUuaGFzRmFtcyBhcmUgc2VlZGVkIHNlcnZlci1zaWRlIHZpYSB3cF9pbnRlcmFjdGl2aXR5X3N0YXRlLlxuLy8gSU1QT1JUQU5UOiBkbyBOT1QgZGVmaW5lIGBmYW1zYCBvciBgaGFzRmFtc2AgaGVyZS4gSUFQSSdzIGRlZXBNZXJnZSByZXBsYWNlc1xuLy8gYXJyYXlzIHJhdGhlciB0aGFuIG1lcmdpbmcgdGhlbSwgd2hpY2ggd291bGQgd2lwZSB0aGUgU1NSIGRhdGEgb24gaHlkcmF0aW9uLlxuc3RvcmUoICdoZXlmYW0vbGFuZGluZycsIHtcbiAgc3RhdGU6IHt9LFxufSApO1xuIiwgImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9pbnRlcmFjdGl2aXR5JztcblxuaWYgKCAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yICYmICdQdXNoTWFuYWdlcicgaW4gd2luZG93ICkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCByZWdpc3RlciApO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gIGlmICggISBoZXlmYW0udXNlcklkIHx8ICEgaGV5ZmFtLnZhcGlkS2V5ICkgcmV0dXJuO1xuXG4gIGNvbnN0IHJlZyA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCAnL3N3LmpzJywgeyBzY29wZTogJy8nIH0gKTtcblxuICBsZXQgcGVybWlzc2lvbiA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO1xuICBpZiAoIHBlcm1pc3Npb24gPT09ICdkZWZhdWx0JyApIHtcbiAgICAvLyBEZWZlciB0aGUgcHJvbXB0IFx1MjAxNCBsZXQgdGhlIHVzZXIgb3B0IGluIHZpYSBhIGJ1dHRvbiBsYXRlci5cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCBwZXJtaXNzaW9uICE9PSAnZ3JhbnRlZCcgKSByZXR1cm47XG5cbiAgY29uc3Qgc3ViID0gYXdhaXQgcmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpXG4gICAgfHwgYXdhaXQgcmVnLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSgge1xuICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxuICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IHVybEJhc2U2NFRvVWludDhBcnJheSggaGV5ZmFtLnZhcGlkS2V5ICksXG4gICAgfSApO1xuXG4gIGF3YWl0IGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vcHVzaC9zdWJzY3JpYmVgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7XG4gICAgICBlbmRwb2ludDogc3ViLmVuZHBvaW50LFxuICAgICAgcDI1NmRoOiAgIGFycmF5QnVmZmVyVG9CYXNlNjQoIHN1Yi5nZXRLZXkoICdwMjU2ZGgnICkgKSxcbiAgICAgIGF1dGg6ICAgICBhcnJheUJ1ZmZlclRvQmFzZTY0KCBzdWIuZ2V0S2V5KCAnYXV0aCcgKSApLFxuICAgICAgZXhwaXJhdGlvbl90aW1lOiBzdWIuZXhwaXJhdGlvblRpbWUgfHwgbnVsbCxcbiAgICB9ICksXG4gIH0gKTtcbn1cblxuZnVuY3Rpb24gdXJsQmFzZTY0VG9VaW50OEFycmF5KCBiNjQgKSB7XG4gIGNvbnN0IHBhZGRpbmcgPSAnPScucmVwZWF0KCAoIDQgLSAoIGI2NC5sZW5ndGggJSA0ICkgKSAlIDQgKTtcbiAgY29uc3QgYmFzZTY0ICA9ICggYjY0ICsgcGFkZGluZyApLnJlcGxhY2UoIC8tL2csICcrJyApLnJlcGxhY2UoIC9fL2csICcvJyApO1xuICBjb25zdCByYXcgICAgID0gYXRvYiggYmFzZTY0ICk7XG4gIGNvbnN0IG91dCAgICAgPSBuZXcgVWludDhBcnJheSggcmF3Lmxlbmd0aCApO1xuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCByYXcubGVuZ3RoOyBpKysgKSBvdXRbIGkgXSA9IHJhdy5jaGFyQ29kZUF0KCBpICk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGFycmF5QnVmZmVyVG9CYXNlNjQoIGJ1ZmZlciApIHtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheSggYnVmZmVyICk7XG4gIGxldCBiaW4gPSAnJztcbiAgZm9yICggbGV0IGkgPSAwOyBpIDwgYnl0ZXMuYnl0ZUxlbmd0aDsgaSsrICkgYmluICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoIGJ5dGVzWyBpIF0gKTtcbiAgcmV0dXJuIGJ0b2EoIGJpbiApO1xufVxuIiwgImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9pbnRlcmFjdGl2aXR5JztcbmltcG9ydCB7IG5vcm1hbGl6ZVBob25lLCBwYXJzZVBob25lTGlzdCB9IGZyb20gJy4uL2xpYi9waG9uZS5qcyc7XG5pbXBvcnQgeyBzbHVnaWZ5IH0gZnJvbSAnLi4vbGliL3NsdWcuanMnO1xuXG5jb25zdCB7IHN0YXRlLCBhY3Rpb25zIH0gPSBzdG9yZSggJ2hleWZhbS9zaWdudXAnLCB7XG4gIHN0YXRlOiB7XG4gICAgc3RlcDogJ3Bob25lJyxcbiAgICBwaG9uZTogJycsIGNvZGU6ICcnLCBuYW1lOiAnJywgZmFtTmFtZTogJycsIGZhbVNsdWc6ICcnLFxuICAgIGludml0ZVRleHQ6ICcnLCBpbnZpdGVOb3RlOiAnJyxcbiAgICBwYXJzZWRQaG9uZXM6IFtdLFxuICAgIHBhcnNlZFBob25lc0VudHJpZXM6IFtdLFxuICAgIGludml0ZVJlc3VsdHM6IFtdLFxuICAgIGludml0ZVJlc3VsdHNFbnRyaWVzOiBbXSxcbiAgICBmYW1Vcmw6ICcnLFxuICAgIGVycm9yOiAnJywgYnVzeTogZmFsc2UsXG4gICAgdGl0bGU6ICdTdGFydCBhIGZhbScsXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgaGFzQ29udGFjdFBpY2tlcjogZmFsc2UsXG4gICAgLy8gSUFQSSBkaXJlY3RpdmVzIG9ubHkgcmVhY3QgdG8gZGlyZWN0IHByb3BlcnR5IGFjY2Vzcy4gUGxhaW4gZ2V0dGVyc1xuICAgIC8vIGNvbXB1dGVkIG9mZiBvdGhlciBzdGF0ZSBhcmVuJ3QgcGlja2VkIHVwIGF0IGh5ZHJhdGlvbiwgc28gd2Uga2VlcFxuICAgIC8vIHZpc2liaWxpdHkgZmxhZ3MgYXMgcGxhaW4gcmVhY3RpdmUgcHJvcHMgYW5kIHRvZ2dsZSB0aGVtIGluIHNldFN0ZXAoKS5cbiAgICBzdGVwMUhpZGRlbjogZmFsc2UsXG4gICAgc3RlcDJIaWRkZW46IHRydWUsXG4gICAgc3RlcDNIaWRkZW46IHRydWUsXG4gICAgc3RlcDRIaWRkZW46IHRydWUsXG4gICAgc3RlcHBlclN0ZXAxQ3VycmVudDogdHJ1ZSwgIHN0ZXBwZXJTdGVwMURvbmU6IGZhbHNlLFxuICAgIHN0ZXBwZXJTdGVwMkN1cnJlbnQ6IGZhbHNlLCBzdGVwcGVyU3RlcDJEb25lOiBmYWxzZSxcbiAgICBzdGVwcGVyU3RlcDNDdXJyZW50OiBmYWxzZSwgc3RlcHBlclN0ZXAzRG9uZTogZmFsc2UsXG4gICAgc3RlcHBlclN0ZXA0Q3VycmVudDogZmFsc2UsIHN0ZXBwZXJTdGVwNERvbmU6IGZhbHNlLFxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgdXBkYXRlUGhvbmUoIGUgKSAgICAgIHsgc3RhdGUucGhvbmUgPSBlLnRhcmdldC52YWx1ZTsgc3RhdGUuZXJyb3IgPSAnJzsgfSxcbiAgICB1cGRhdGVDb2RlKCBlICkgICAgICAgeyBzdGF0ZS5jb2RlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSggL1xcRC9nLCAnJyApOyBzdGF0ZS5lcnJvciA9ICcnOyB9LFxuICAgIHVwZGF0ZU5hbWUoIGUgKSAgICAgICB7IHN0YXRlLm5hbWUgPSBlLnRhcmdldC52YWx1ZTsgc3RhdGUuZXJyb3IgPSAnJzsgfSxcbiAgICB1cGRhdGVGYW1OYW1lKCBlICkge1xuICAgICAgc3RhdGUuZmFtTmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgLy8gQXV0by1zdWdnZXN0IHNsdWcgd2hpbGUgdGhlIHVzZXIgaXMgc3RpbGwgdHlwaW5nIHRoZSBuYW1lOyBzdG9wIG9uY2VcbiAgICAgIC8vIHRoZXkndmUgZWRpdGVkIHRoZSBzbHVnIHRoZW1zZWx2ZXMuXG4gICAgICBpZiAoICEgc3RhdGUuZmFtU2x1ZyB8fCBzdGF0ZS5mYW1TbHVnID09PSBzbHVnaWZ5KCBzdGF0ZS5mYW1OYW1lLnNsaWNlKCAwLCAtMSApICkgKSB7XG4gICAgICAgIHN0YXRlLmZhbVNsdWcgPSBzbHVnaWZ5KCBlLnRhcmdldC52YWx1ZSApO1xuICAgICAgfVxuICAgICAgc3RhdGUuZXJyb3IgPSAnJztcbiAgICB9LFxuICAgIHVwZGF0ZUZhbVNsdWcoIGUgKSAgICB7IHN0YXRlLmZhbVNsdWcgPSBzbHVnaWZ5KCBlLnRhcmdldC52YWx1ZSApOyBzdGF0ZS5lcnJvciA9ICcnOyB9LFxuICAgIHVwZGF0ZUludml0ZVRleHQoIGUgKSB7IHN0YXRlLmludml0ZVRleHQgPSBlLnRhcmdldC52YWx1ZTsgcmVwYXJzZVBob25lcygpOyB9LFxuICAgIHVwZGF0ZUludml0ZU5vdGUoIGUgKSB7IHN0YXRlLmludml0ZU5vdGUgPSBlLnRhcmdldC52YWx1ZS5zbGljZSggMCwgMTIwICk7IH0sXG4gICAgYmFja1RvUGhvbmUoKSAgICAgICAgIHsgc2V0U3RlcCggJ3Bob25lJyApOyBzdGF0ZS5jb2RlID0gJyc7IHN0YXRlLmVycm9yID0gJyc7IH0sXG5cbiAgICAqc3VibWl0UGhvbmUoIGUgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIHN0YXRlLmJ1c3kgKSByZXR1cm47XG4gICAgICBjb25zdCBwaG9uZSA9IG5vcm1hbGl6ZVBob25lKCBzdGF0ZS5waG9uZSApO1xuICAgICAgaWYgKCAhIHBob25lICkgeyBzdGF0ZS5lcnJvciA9ICdQaG9uZSBtdXN0IHN0YXJ0IHdpdGggKyBhbmQgY291bnRyeSBjb2RlIChlLmcuICsxNTU1NTU1MDEwMCkuJzsgcmV0dXJuOyB9XG4gICAgICBzdGF0ZS5waG9uZSA9IHBob25lO1xuICAgICAgc3RhdGUuYnVzeSA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vc2lnbnVwL3N0YXJ0YCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7IHBob25lIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBpZiAoICEgci5vayApIHRocm93IG5ldyBFcnJvciggJ3NlbmQtZmFpbGVkJyApO1xuICAgICAgICBzZXRTdGVwKCAnY29kZScgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7IHN0YXRlLmVycm9yID0gJ0NvdWxkIG5vdCBzZW5kIGNvZGUuIFRyeSBhZ2Fpbi4nOyB9XG4gICAgICBmaW5hbGx5IHsgc3RhdGUuYnVzeSA9IGZhbHNlOyB9XG4gICAgfSxcblxuICAgICpzdWJtaXRDb2RlKCBlICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCBzdGF0ZS5idXN5ICkgcmV0dXJuO1xuICAgICAgaWYgKCBzdGF0ZS5jb2RlLmxlbmd0aCAhPT0gNiApIHsgc3RhdGUuZXJyb3IgPSAnRW50ZXIgdGhlIDYtZGlnaXQgY29kZS4nOyByZXR1cm47IH1cbiAgICAgIC8vIFdlIGNhbid0IGFjdHVhbGx5IHZlcmlmeSB0aGUgY29kZSBoZXJlIFx1MjAxNCBzaWdudXAvdmVyaWZ5IGNyZWF0ZXMgdGhlIHVzZXJcbiAgICAgIC8vIGFuZCB0aGUgZmFtIGluIG9uZSBzaG90LCBzbyB3ZSBqdXN0IGFkdmFuY2UgdG8gdGhlIGZhbSBzdGVwIGFuZCBjb21iaW5lXG4gICAgICAvLyBldmVyeXRoaW5nIGluIHN1Ym1pdEZhbSgpIGJlbG93LlxuICAgICAgc2V0U3RlcCggJ2ZhbScgKTtcbiAgICB9LFxuXG4gICAgKnN1Ym1pdEZhbSggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICggc3RhdGUuYnVzeSApIHJldHVybjtcbiAgICAgIGlmICggISBzdGF0ZS5uYW1lLnRyaW0oKSApICAgIHsgc3RhdGUuZXJyb3IgPSAnRW50ZXIgeW91ciBuYW1lLic7IHJldHVybjsgfVxuICAgICAgaWYgKCAhIHN0YXRlLmZhbU5hbWUudHJpbSgpICkgeyBzdGF0ZS5lcnJvciA9ICdOYW1lIHlvdXIgZmFtLic7IHJldHVybjsgfVxuICAgICAgaWYgKCAhIC9eW2EtejAtOV1bYS16MC05LV17MSwzMH1bYS16MC05XSQvLnRlc3QoIHN0YXRlLmZhbVNsdWcgKSApIHtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSAnRmFtIFVSTDogMy0zMiBsZXR0ZXJzL251bWJlcnMvaHlwaGVucywgbm8gbGVhZGluZy90cmFpbGluZyBoeXBoZW4uJzsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3RhdGUuYnVzeSA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgICAgLy8gc2lnbnVwL3ZlcmlmeSBjcmVhdGVzIHRoZSB1c2VyLCBzZXRzIHRoZSBhdXRoIGNvb2tpZSwgQU5EIGNyZWF0ZXNcbiAgICAgICAgLy8gdGhlIGZhbSBpbiBvbmUgc2hvdCBcdTIwMTQgY29tYmluaW5nIGF2b2lkcyB0aGUgV1AgUkVTVCBub25jZSB2cyBuZXctXG4gICAgICAgIC8vIHNlc3Npb24gcmFjZSB0aGF0IHdvdWxkIG90aGVyd2lzZSByZWplY3QgdGhlIGZvbGxvdy11cCAvZmFtcyBjYWxsLlxuICAgICAgICBjb25zdCB2ID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9zaWdudXAvdmVyaWZ5YCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7XG4gICAgICAgICAgICBwaG9uZTogICAgICAgIHN0YXRlLnBob25lLFxuICAgICAgICAgICAgY29kZTogICAgICAgICBzdGF0ZS5jb2RlLFxuICAgICAgICAgICAgZGlzcGxheV9uYW1lOiBzdGF0ZS5uYW1lLFxuICAgICAgICAgICAgZmFtX25hbWU6ICAgICBzdGF0ZS5mYW1OYW1lLFxuICAgICAgICAgICAgZmFtX3NsdWc6ICAgICBzdGF0ZS5mYW1TbHVnLFxuICAgICAgICAgIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBjb25zdCBib2R5ID0geWllbGQgdi5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICBpZiAoICEgdi5vayB8fCAhIGJvZHkub2sgKSB7XG4gICAgICAgICAgaWYgKCBib2R5LmVycm9yID09PSAnYmFkX2NvZGUnICkge1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSAnV3JvbmcgY29kZS4gVHJ5IGFnYWluLic7XG4gICAgICAgICAgICBzZXRTdGVwKCAnY29kZScgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCBbICdzbHVnX3Rha2VuJywgJ2ludmFsaWRfc2x1ZycsICdyZXNlcnZlZF9zbHVnJyBdLmluY2x1ZGVzKCBib2R5LmVycm9yICkgKSB7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGJvZHkubWVzc2FnZSB8fCAnVGhhdCBmYW0gVVJMIGlzIHVuYXZhaWxhYmxlLic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYm9keS5tZXNzYWdlIHx8ICdDb3VsZCBub3QgdmVyaWZ5LiBUcnkgYWdhaW4uJztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhdGUuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgZnJlc2ggc2lnbnVwIGdhdmUgdXMgYSBuZXcgUkVTVCBub25jZTsgc3dhcCBpdCBpbiBzbyB0aGVcbiAgICAgICAgLy8gaW1tZWRpYXRlbHktZm9sbG93aW5nIGludml0ZSBQT1NUIGF1dGhlbnRpY2F0ZXMgYXMgdGhlIG5ldyB1c2VyLlxuICAgICAgICBpZiAoIGJvZHkubm9uY2UgKSB7XG4gICAgICAgICAgc3RvcmUoICdoZXlmYW0nICkuc3RhdGUubm9uY2UgPSBib2R5Lm5vbmNlO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmZhbVVybCA9IGJvZHkuZmFtX3VybCB8fCAnJztcbiAgICAgICAgc2V0U3RlcCggJ2ludml0ZScgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIHN0YXRlLmVycm9yID0gJ05ldHdvcmsgZXJyb3IuIFRyeSBhZ2Fpbi4nO1xuICAgICAgfSBmaW5hbGx5IHsgc3RhdGUuYnVzeSA9IGZhbHNlOyB9XG4gICAgfSxcblxuICAgICpwaWNrQ29udGFjdHMoKSB7XG4gICAgICBpZiAoICEgKCAnY29udGFjdHMnIGluIG5hdmlnYXRvciApIHx8ICEgKCAnQ29udGFjdHNNYW5hZ2VyJyBpbiB3aW5kb3cgKSApIHJldHVybjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBpY2tlZCA9IHlpZWxkIG5hdmlnYXRvci5jb250YWN0cy5zZWxlY3QoIFsgJ3RlbCcgXSwgeyBtdWx0aXBsZTogdHJ1ZSB9ICk7XG4gICAgICAgIGlmICggISBwaWNrZWQgfHwgISBwaWNrZWQubGVuZ3RoICkgcmV0dXJuO1xuICAgICAgICBjb25zdCBwaG9uZXMgPSBwaWNrZWQuZmxhdE1hcCggKCBjICkgPT4gYy50ZWwgfHwgW10gKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBzdGF0ZS5pbnZpdGVUZXh0LnRyaW0oKTtcbiAgICAgICAgc3RhdGUuaW52aXRlVGV4dCA9IGV4aXN0aW5nXG4gICAgICAgICAgPyBleGlzdGluZyArICdcXG4nICsgcGhvbmVzLmpvaW4oICdcXG4nIClcbiAgICAgICAgICA6IHBob25lcy5qb2luKCAnXFxuJyApO1xuICAgICAgICByZXBhcnNlUGhvbmVzKCk7XG4gICAgICB9IGNhdGNoICggZXJyICkgeyAvKiBjYW5jZWxsZWQgb3IgYmxvY2tlZCAqLyB9XG4gICAgfSxcblxuICAgICpzdWJtaXRJbnZpdGVzKCBlICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCBzdGF0ZS5idXN5ICkgcmV0dXJuO1xuICAgICAgY29uc3QgaGV5ZmFtICA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgY29uc3QgZmFtU2x1ZyA9IHN0YXRlLmZhbVNsdWc7XG4gICAgICBjb25zdCB2YWxpZCAgID0gc3RhdGUucGFyc2VkUGhvbmVzLmZpbHRlciggKCBwICkgPT4gcC52YWxpZCApLm1hcCggKCBwICkgPT4gcC5lMTY0ICk7XG4gICAgICBpZiAoICEgdmFsaWQubGVuZ3RoICkge1xuICAgICAgICAvLyBUcmVhdCBhbiBlbXB0eSBpbnZpdGUgbGlzdCB0aGUgc2FtZSBhcyBTa2lwIFx1MjAxNCBwcmVzZXJ2ZXMgdGhlIHJlZGlyZWN0XG4gICAgICAgIC8vIGFuZCB3cml0ZXMgdGhlIHNraXAgZmxhZyBzbyB0aGUgbnVkZ2UgYmFubmVyIGNhbiBkZWNpZGUgd2hhdCB0byBkby5cbiAgICAgICAgeWllbGQgYWN0aW9ucy5za2lwSW52aXRlcygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdGF0ZS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHIgPSB5aWVsZCBmZXRjaCggYCR7aGV5ZmFtLmFwaUJhc2V9LyR7ZmFtU2x1Z30vaW52aXRlc2AsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgcGhvbmVzOiB2YWxpZCwgbWVzc2FnZV9ub3RlOiBzdGF0ZS5pbnZpdGVOb3RlIHx8ICcnIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBjb25zdCBib2R5ID0geWllbGQgci5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICBpZiAoICEgci5vayApIHtcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IGJvZHkubWVzc2FnZSB8fCAnQ291bGQgbm90IHNlbmQgaW52aXRlcy4gVHJ5IGFnYWluLic7XG4gICAgICAgICAgc3RhdGUuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5pbnZpdGVSZXN1bHRzICAgICAgICA9IGJvZHkuaXNzdWVkIHx8IFtdO1xuICAgICAgICBzdGF0ZS5pbnZpdGVSZXN1bHRzRW50cmllcyA9IHN0YXRlLmludml0ZVJlc3VsdHMubWFwKCAoIHYsIGkgKSA9PiBbIGksIHYgXSApO1xuICAgICAgICBpZiAoIHN0YXRlLmZhbVVybCApIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHN0YXRlLmZhbVVybDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzdGF0ZS5lcnJvciA9ICdOZXR3b3JrIGVycm9yLiBUcnkgYWdhaW4uJztcbiAgICAgIH0gZmluYWxseSB7IHN0YXRlLmJ1c3kgPSBmYWxzZTsgfVxuICAgIH0sXG5cbiAgICAqc2tpcEludml0ZXMoKSB7XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vbWUvc2tpcC1pbnZpdGVzYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICAgICAgfSApO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHsgLyogbm90IGJsb2NraW5nICovIH1cbiAgICAgIGlmICggc3RhdGUuZmFtVXJsICkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHN0YXRlLmZhbVVybDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FjY291bnQnO1xuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgICppbml0KCkge1xuICAgICAgc3RhdGUuZGV2TW9kZSAgICAgICAgICA9ICEhIHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlLmRldk1vZGU7XG4gICAgICBzdGF0ZS5oYXNDb250YWN0UGlja2VyID0gKCAnY29udGFjdHMnIGluIG5hdmlnYXRvciApICYmICggJ0NvbnRhY3RzTWFuYWdlcicgaW4gd2luZG93ICk7XG5cbiAgICAgIC8vIFNTUiBkb2Vzbid0IHJlbmRlciBpcy1oaWRkZW4gb24gdGhlc2UgZm9ybXMuIElBUEkncyBoeWRyYXRpb24gc2tpcHNcbiAgICAgIC8vIHJlLWFwcGx5aW5nIGNsYXNzIGJpbmRpbmdzIHdob3NlIGluaXRpYWwgRE9NIHN0YXRlIG1hdGNoZXMgdGhlIHByb3h5LlxuICAgICAgLy8gVG9nZ2xlIGVhY2ggZmxhZyB0aHJvdWdoIGl0cyBvcHBvc2l0ZSB0byB0cmlwIHRoZSBwcm94eSdzIGNoYW5nZS1cbiAgICAgIC8vIGRldGVjdGlvbiwgdGhlbiBzZXRTdGVwKCkgcmUtYXNzZXJ0cyB0aGUgcmlnaHQgdmFsdWVzLlxuICAgICAgc3RhdGUuc3RlcDFIaWRkZW4gPSAhIHN0YXRlLnN0ZXAxSGlkZGVuO1xuICAgICAgc3RhdGUuc3RlcDJIaWRkZW4gPSAhIHN0YXRlLnN0ZXAySGlkZGVuO1xuICAgICAgc3RhdGUuc3RlcDNIaWRkZW4gPSAhIHN0YXRlLnN0ZXAzSGlkZGVuO1xuICAgICAgc3RhdGUuc3RlcDRIaWRkZW4gPSAhIHN0YXRlLnN0ZXA0SGlkZGVuO1xuICAgICAgc2V0U3RlcCggc3RhdGUuc3RlcCApO1xuXG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgIGlmICggaGV5ZmFtLnVzZXJJZCApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9tZS9mYW1zYCwge1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICAgICAgICB9ICk7XG4gICAgICAgICAgaWYgKCByLm9rICkge1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IHlpZWxkIHIuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgZmFtcyA9IGJvZHkuZmFtcyB8fCBbXTtcbiAgICAgICAgICAgIGlmICggZmFtcy5sZW5ndGggJiYgZmFtc1sgMCBdLnVybCApIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmYW1zWyAwIF0udXJsO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb2dnZWQgaW4gYnV0IG5vIGZhbXMgKHJhcmUgXHUyMDE0IGludml0ZSBwYXRoIG9yIGEgZm9ybWVyIG1lbWJlcikuXG4gICAgICAgICAgICAvLyBEcm9wIHRoZW0gYXQgdGhlIGZhbSBzdGVwIHNvIHRoZXkgY2FuIHNwaW4gb25lIHVwLlxuICAgICAgICAgICAgc2V0U3RlcCggJ2ZhbScgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7IC8qIGZhbGwgdGhyb3VnaCB0byBzdGVwIDEgKi8gfVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59ICk7XG5cbmZ1bmN0aW9uIHNldFN0ZXAoIG5leHQgKSB7XG4gIHN0YXRlLnN0ZXAgICAgICAgID0gbmV4dDtcbiAgc3RhdGUuc3RlcDFIaWRkZW4gPSBuZXh0ICE9PSAncGhvbmUnO1xuICBzdGF0ZS5zdGVwMkhpZGRlbiA9IG5leHQgIT09ICdjb2RlJztcbiAgc3RhdGUuc3RlcDNIaWRkZW4gPSBuZXh0ICE9PSAnZmFtJztcbiAgc3RhdGUuc3RlcDRIaWRkZW4gPSBuZXh0ICE9PSAnaW52aXRlJztcblxuICBjb25zdCBvcmRlciA9IHsgcGhvbmU6IDEsIGNvZGU6IDIsIGZhbTogMywgaW52aXRlOiA0IH07XG4gIGNvbnN0IG4gICAgID0gb3JkZXJbIG5leHQgXSB8fCAxO1xuICBmb3IgKCBsZXQgaSA9IDE7IGkgPD0gNDsgaSsrICkge1xuICAgIHN0YXRlWyBgc3RlcHBlclN0ZXAke2l9Q3VycmVudGAgXSA9IGkgPT09IG47XG4gICAgc3RhdGVbIGBzdGVwcGVyU3RlcCR7aX1Eb25lYCBdICAgID0gaSA8ICBuO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGFyc2VQaG9uZXMoKSB7XG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGhvbmVMaXN0KCBzdGF0ZS5pbnZpdGVUZXh0ICk7XG4gIHN0YXRlLnBhcnNlZFBob25lcyAgICAgICAgPSBwYXJzZWQ7XG4gIHN0YXRlLnBhcnNlZFBob25lc0VudHJpZXMgPSBwYXJzZWQubWFwKCAoIHYsIGkgKSA9PiBbIGksIHYgXSApO1xufVxuIiwgIi8qKlxuICogQ29lcmNlIGEgdXNlci10eXBlZCBwaG9uZSBzdHJpbmcgdG8gRS4xNjQgKGRpZ2l0cyB3aXRoIGxlYWRpbmcgKywgOC0xNiBjaGFycykuXG4gKiBSZXR1cm5zIG51bGwgd2hlbiB0aGUgaW5wdXQgY2Fubm90IGJlIGNvZXJjZWQgXHUyMDE0IGNhbGxlcnMgc2hvdWxkIHRyZWF0IG51bGxcbiAqIGFzIGEgdmFsaWRhdGlvbiBmYWlsdXJlIHJhdGhlciB0aGFuIHJldHJ5aW5nLlxuICpcbiAqIE1pcnJvcnMgdGhlIHNlcnZlci1zaWRlIHJ1bGUgaW4gUkVTVFxcUm91dGVzOjpub3JtYWxpemVfcGhvbmUoKS4gV2hlbiB5b3VcbiAqIGNoYW5nZSBvbmUsIGNoYW5nZSB0aGUgb3RoZXIgYW5kIHVwZGF0ZSBwaG9uZS50ZXN0LmpzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUGhvbmUoIHJhdyApIHtcbiAgY29uc3QgZGlnaXRzID0gKCByYXcgfHwgJycgKS5yZXBsYWNlKCAvW14wLTkrXS9nLCAnJyApO1xuICBpZiAoICEgZGlnaXRzLnN0YXJ0c1dpdGgoICcrJyApICkgcmV0dXJuIG51bGw7XG4gIGlmICggZGlnaXRzLmxlbmd0aCA8IDggfHwgZGlnaXRzLmxlbmd0aCA+IDE2ICkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBkaWdpdHM7XG59XG5cbi8qKlxuICogVG9sZXJhbnQgcGFyc2VyIGZvciBpbnZpdGUgcGhvbmUgbGlzdHMuIFNwbGl0cyBvbiBjb21tYSwgbmV3bGluZSwgc2VtaWNvbG9uLFxuICogb3Igd2hpdGVzcGFjZTsgZm9yIGVhY2ggY2FuZGlkYXRlLCBzdHJpcHMgZXZlcnl0aGluZyBleGNlcHQgZGlnaXRzIGFuZCBgK2AsXG4gKiB0aGVuIHJlLXZhbGlkYXRlcyBhcyBFLjE2NC4gUmV0dXJucyBvbmUgcm93IHBlciBjYW5kaWRhdGUgd2l0aCBgcmF3YCxcbiAqIGBlMTY0YCwgYW5kIGB2YWxpZGAgc28gdGhlIFVJIGNhbiBzaG93IGludmFsaWQgZW50cmllcyB3aXRoIGEgaGludC5cbiAqXG4gKiBEdXBsaWNhdGVzIGFmdGVyIHRoZSBmaXJzdCBvY2N1cnJlbmNlIGFyZSBmbGFnZ2VkIGludmFsaWQgc28gdGhlIHVzZXJcbiAqIG5vdGljZXMsIHJhdGhlciB0aGFuIHNpbGVudGx5IGRlLWR1cGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQaG9uZUxpc3QoIHJhdyApIHtcbiAgaWYgKCAhIHJhdyApIHJldHVybiBbXTtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IHJhdy5zcGxpdCggL1tcXHMsO10rLyApLmZpbHRlciggQm9vbGVhbiApO1xuICBjb25zdCBzZWVuID0gbmV3IFNldCgpO1xuICByZXR1cm4gY2FuZGlkYXRlcy5tYXAoICggYyApID0+IHtcbiAgICBjb25zdCBlMTY0ID0gbm9ybWFsaXplUGhvbmUoIGMgKTtcbiAgICBjb25zdCB2YWxpZCA9ICEhIGUxNjQgJiYgISBzZWVuLmhhcyggZTE2NCApO1xuICAgIGlmICggdmFsaWQgKSBzZWVuLmFkZCggZTE2NCApO1xuICAgIHJldHVybiB7IHJhdzogYywgZTE2NDogZTE2NCB8fCBjLCB2YWxpZCB9O1xuICB9ICk7XG59XG4iLCAiLyoqIE1hcCBhIGZhbSBkaXNwbGF5IG5hbWUgdG8gYSBsb3dlcmNhc2UsIGh5cGhlbmF0ZWQgY2FuZGlkYXRlIHNsdWcuICovXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2lmeSggcyApIHtcbiAgcmV0dXJuICggcyB8fCAnJyApLnRvTG93ZXJDYXNlKCkucmVwbGFjZSggL1teYS16MC05XSsvZywgJy0nICkucmVwbGFjZSggL14tK3wtKyQvZywgJycgKTtcbn1cblxuLyoqIFNhbWUgc2hhcGUgcnVsZSBhcyBQSFAgU2x1Z3M6OnZhbGlkYXRlKCkuICovXG5leHBvcnQgY29uc3QgU0xVR19SRUdFWCA9IC9eW2EtejAtOV1bYS16MC05LV17MSwzMH1bYS16MC05XSQvO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFNsdWcoIHMgKSB7XG4gIHJldHVybiBTTFVHX1JFR0VYLnRlc3QoIHMgfHwgJycgKTtcbn1cbiIsICJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvaW50ZXJhY3Rpdml0eSc7XG5pbXBvcnQgeyBub3JtYWxpemVQaG9uZSB9IGZyb20gJy4uL2xpYi9waG9uZS5qcyc7XG5cbmNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHN0b3JlKCAnaGV5ZmFtL2xvZ2luJywge1xuICBzdGF0ZToge1xuICAgIHN0YWdlOiAncGhvbmUnLFxuICAgIHBob25lOiAnJywgY29kZTogJycsXG4gICAgZXJyb3I6ICcnLCBidXN5OiBmYWxzZSxcbiAgICAvLyBJQVBJIGRpcmVjdGl2ZXMgb25seSByZWFjdCB0byBkaXJlY3QgcHJvcGVydHkgYWNjZXNzLiBQbGFpbiBnZXR0ZXJzXG4gICAgLy8gY29tcHV0ZWQgb2ZmIG90aGVyIHN0YXRlIGFyZW4ndCBwaWNrZWQgdXAgYXQgaHlkcmF0aW9uLCBzbyB3ZSBrZWVwXG4gICAgLy8gdmlzaWJpbGl0eSBmbGFncyBhcyBwbGFpbiByZWFjdGl2ZSBwcm9wcyBhbmQgdG9nZ2xlIHRoZW0gaW4gc2V0U3RhZ2UoKS5cbiAgICBwaG9uZUZvcm1IaWRkZW46IGZhbHNlLFxuICAgIGNvZGVGb3JtSGlkZGVuOiAgdHJ1ZSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIHVwZGF0ZVBob25lKCBlICkgeyBzdGF0ZS5waG9uZSA9IGUudGFyZ2V0LnZhbHVlOyBzdGF0ZS5lcnJvciA9ICcnOyB9LFxuICAgIHVwZGF0ZUNvZGUoIGUgKSB7IHN0YXRlLmNvZGUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKCAvXFxEL2csICcnICk7IHN0YXRlLmVycm9yID0gJyc7IH0sXG4gICAgYmFja1RvUGhvbmUoKSB7IHNldFN0YWdlKCAncGhvbmUnICk7IHN0YXRlLmNvZGUgPSAnJzsgc3RhdGUuZXJyb3IgPSAnJzsgfSxcbiAgICAqc3VibWl0UGhvbmUoIGUgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIHN0YXRlLmJ1c3kgKSByZXR1cm47XG4gICAgICBjb25zdCBwaG9uZSA9IG5vcm1hbGl6ZVBob25lKCBzdGF0ZS5waG9uZSApO1xuICAgICAgaWYgKCAhIHBob25lICkgeyBzdGF0ZS5lcnJvciA9ICdQaG9uZSBtdXN0IHN0YXJ0IHdpdGggKyBhbmQgY291bnRyeSBjb2RlIChlLmcuICsxNTU1NTU1MDEwMCkuJzsgcmV0dXJuOyB9XG4gICAgICBzdGF0ZS5waG9uZSA9IHBob25lO1xuICAgICAgc3RhdGUuYnVzeSA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vbG9naW4vc3RhcnRgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgcGhvbmUgfSApLFxuICAgICAgICB9ICk7XG4gICAgICAgIGlmICggISByLm9rICkgdGhyb3cgbmV3IEVycm9yKCAnc2VuZC1mYWlsZWQnICk7XG4gICAgICAgIHNldFN0YWdlKCAnY29kZScgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7IHN0YXRlLmVycm9yID0gJ0NvdWxkIG5vdCBzZW5kIGNvZGUuIFRyeSBhZ2Fpbi4nOyB9XG4gICAgICBmaW5hbGx5IHsgc3RhdGUuYnVzeSA9IGZhbHNlOyB9XG4gICAgfSxcbiAgICAqc3VibWl0Q29kZSggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICggc3RhdGUuYnVzeSApIHJldHVybjtcbiAgICAgIGlmICggc3RhdGUuY29kZS5sZW5ndGggIT09IDYgKSB7IHN0YXRlLmVycm9yID0gJ0VudGVyIHRoZSA2LWRpZ2l0IGNvZGUuJzsgcmV0dXJuOyB9XG4gICAgICBzdGF0ZS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgICBjb25zdCB2ID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9sb2dpbi92ZXJpZnlgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgcGhvbmU6IHN0YXRlLnBob25lLCBjb2RlOiBzdGF0ZS5jb2RlIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBpZiAoICEgdi5vayApIHtcbiAgICAgICAgICBjb25zdCBib2R5ID0geWllbGQgdi5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICAgIHN0YXRlLmVycm9yID0gYm9keS5lcnJvciA9PT0gJ2JhZF9jb2RlJyA/ICdXcm9uZyBjb2RlIG9yIHVua25vd24gcGhvbmUuIFRyeSBhZ2Fpbi4nIDogJ0NvdWxkIG5vdCB2ZXJpZnkuIFRyeSBhZ2Fpbi4nO1xuICAgICAgICAgIHN0YXRlLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9naW4vdmVyaWZ5IHJvdGF0ZXMgdGhlIG5vbmNlIChub3cgYXV0aGVudGljYXRlZCBhcyB0aGUgdXNlcikuXG4gICAgICAgIGNvbnN0IHZib2R5ID0geWllbGQgdi5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICBpZiAoIHZib2R5ICYmIHZib2R5Lm5vbmNlICkgaGV5ZmFtLm5vbmNlID0gdmJvZHkubm9uY2U7XG4gICAgICAgIC8vIEF1dGhlbnRpY2F0ZWQuIEZpbmQgdGhlIHVzZXIncyBmaXJzdCBmYW0sIGZhbGwgYmFjayB0byBsYW5kaW5nLlxuICAgICAgICBjb25zdCBmID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9tZS9mYW1zYCwge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgICAgICB9ICk7XG4gICAgICAgIGNvbnN0IGZib2R5ID0geWllbGQgZi5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICBjb25zdCBmYW1zID0gKCBmYm9keSAmJiBmYm9keS5mYW1zICkgfHwgW107XG4gICAgICAgIGlmICggZmFtcy5sZW5ndGggJiYgZmFtc1sgMCBdLnVybCApIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZhbXNbIDAgXS51cmw7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSAnTmV0d29yayBlcnJvci4gVHJ5IGFnYWluLic7XG4gICAgICAgIHN0YXRlLmJ1c3kgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBpbml0KCkge1xuICAgICAgLy8gU1NSIGRvZXNuJ3QgcmVuZGVyIHRoZSBpcy1oaWRkZW4gY2xhc3Mgb24gdGhlc2UgZm9ybXMuIElBUEkncyBoeWRyYXRpb25cbiAgICAgIC8vIHNraXBzIHJlLWFwcGx5aW5nIGNsYXNzIGJpbmRpbmdzIHdob3NlIGluaXRpYWwgRE9NIHN0YXRlIG1hdGNoZXMgdGhlXG4gICAgICAvLyBwcm94eS4gVG9nZ2xlIGVhY2ggZmxhZyB0aHJvdWdoIGl0cyBvcHBvc2l0ZSB0byB0cmlwIHRoZSBwcm94eSdzXG4gICAgICAvLyBjaGFuZ2UtZGV0ZWN0aW9uLCB0aGVuIHNldFN0YWdlKCkgcmUtYXNzZXJ0cyB0aGUgcmlnaHQgdmFsdWVzLlxuICAgICAgc3RhdGUucGhvbmVGb3JtSGlkZGVuID0gISBzdGF0ZS5waG9uZUZvcm1IaWRkZW47XG4gICAgICBzdGF0ZS5jb2RlRm9ybUhpZGRlbiAgPSAhIHN0YXRlLmNvZGVGb3JtSGlkZGVuO1xuICAgICAgc2V0U3RhZ2UoIHN0YXRlLnN0YWdlICk7XG4gICAgfSxcbiAgfSxcbn0gKTtcblxuZnVuY3Rpb24gc2V0U3RhZ2UoIG5leHQgKSB7XG4gIHN0YXRlLnN0YWdlICAgICAgICAgICA9IG5leHQ7XG4gIHN0YXRlLnBob25lRm9ybUhpZGRlbiA9IG5leHQgIT09ICdwaG9uZSc7XG4gIHN0YXRlLmNvZGVGb3JtSGlkZGVuICA9IG5leHQgIT09ICdjb2RlJztcbn1cblxuIiwgImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9pbnRlcmFjdGl2aXR5JztcblxuY29uc3QgeyBzdGF0ZSwgYWN0aW9ucyB9ID0gc3RvcmUoICdoZXlmYW0vaW52aXRlJywge1xuICBzdGF0ZToge1xuICAgIHN0YWdlOiAncGhvbmUnLFxuICAgIGNvZGU6ICcnLCAgICAgLy8gaW52aXRlIGNvZGUsIGZyb20gcXVlcnkgc3RyaW5nXG4gICAgcGhvbmU6ICcnLFxuICAgIHNtc0NvZGU6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGZhbU5hbWU6ICcnLCBpbnZpdGVyOiAnJywgcGhvbmVIaW50OiAnJyxcbiAgICBwcmV2aWV3TG9hZGVkOiBmYWxzZSwgcHJldmlld0Vycm9yOiAnJyxcbiAgICBlcnJvcjogJycsIGJ1c3k6IGZhbHNlLFxuICAgIGlzQXV0aGVkOiBmYWxzZSxcbiAgICAvLyBJQVBJIGRpcmVjdGl2ZXMgb25seSByZWFjdCB0byBkaXJlY3QgcHJvcGVydHkgYWNjZXNzLiBQbGFpbiBnZXR0ZXJzXG4gICAgLy8gY29tcHV0ZWQgb2ZmIG90aGVyIHN0YXRlIGFyZW4ndCBwaWNrZWQgdXAgYXQgaHlkcmF0aW9uLCBzbyB3ZSBrZWVwXG4gICAgLy8gdmlzaWJpbGl0eSBmbGFncyBhcyBwbGFpbiByZWFjdGl2ZSBwcm9wcyBhbmQgcmVjb21wdXRlIHRoZW0gd2hlbmV2ZXJcbiAgICAvLyB0aGUgaW5wdXRzIGNoYW5nZS4gcGhvbmVGb3JtSGlkZGVuIGRlcGVuZHMgb24gYm90aCBzdGFnZSBhbmRcbiAgICAvLyBwcmV2aWV3RXJyb3IgXHUyMDE0IGEgYnJva2VuIGludml0ZSBsaW5rIHNob3VsZCBrZWVwIHRoZSBmb3JtIGhpZGRlbi5cbiAgICBwaG9uZUZvcm1IaWRkZW46ICAgIGZhbHNlLFxuICAgIGNvZGVGb3JtSGlkZGVuOiAgICAgdHJ1ZSxcbiAgICBsb2dnZWRJbkZvcm1IaWRkZW46IHRydWUsXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICB1cGRhdGVQaG9uZSggZSApIHsgc3RhdGUucGhvbmUgPSBlLnRhcmdldC52YWx1ZTsgc3RhdGUuZXJyb3IgPSAnJzsgfSxcbiAgICB1cGRhdGVDb2RlKCBlICkgeyBzdGF0ZS5zbXNDb2RlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSggL1xcRC9nLCAnJyApOyBzdGF0ZS5lcnJvciA9ICcnOyB9LFxuICAgIHVwZGF0ZU5hbWUoIGUgKSB7IHN0YXRlLm5hbWUgPSBlLnRhcmdldC52YWx1ZTsgc3RhdGUuZXJyb3IgPSAnJzsgfSxcbiAgICBiYWNrVG9QaG9uZSgpIHsgc2V0U3RhZ2UoICdwaG9uZScgKTsgc3RhdGUuc21zQ29kZSA9ICcnOyBzdGF0ZS5lcnJvciA9ICcnOyB9LFxuICAgICpzdWJtaXRQaG9uZSggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICggc3RhdGUuYnVzeSApIHJldHVybjtcbiAgICAgIGNvbnN0IHBob25lID0gbm9ybWFsaXplUGhvbmUoIHN0YXRlLnBob25lICk7XG4gICAgICBpZiAoICEgcGhvbmUgKSB7IHN0YXRlLmVycm9yID0gJ1Bob25lIG11c3Qgc3RhcnQgd2l0aCArIGFuZCBjb3VudHJ5IGNvZGUgKGUuZy4gKzE1NTU1NTUwMTAwKS4nOyByZXR1cm47IH1cbiAgICAgIHN0YXRlLnBob25lID0gcGhvbmU7XG4gICAgICBzdGF0ZS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9zaWdudXAvc3RhcnRgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgcGhvbmUgfSApLFxuICAgICAgICB9ICk7XG4gICAgICAgIGlmICggISByLm9rICkgdGhyb3cgbmV3IEVycm9yKCAnc2VuZC1mYWlsZWQnICk7XG4gICAgICAgIHNldFN0YWdlKCAnY29kZScgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7IHN0YXRlLmVycm9yID0gJ0NvdWxkIG5vdCBzZW5kIGNvZGUuIFRyeSBhZ2Fpbi4nOyB9XG4gICAgICBmaW5hbGx5IHsgc3RhdGUuYnVzeSA9IGZhbHNlOyB9XG4gICAgfSxcbiAgICAqc3VibWl0Q29kZSggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICggc3RhdGUuYnVzeSApIHJldHVybjtcbiAgICAgIGlmICggc3RhdGUuc21zQ29kZS5sZW5ndGggIT09IDYgKSB7IHN0YXRlLmVycm9yID0gJ0VudGVyIHRoZSA2LWRpZ2l0IGNvZGUuJzsgcmV0dXJuOyB9XG4gICAgICBzdGF0ZS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9pbnZpdGVzL2FjY2VwdGAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSgge1xuICAgICAgICAgICAgY29kZTogc3RhdGUuY29kZSxcbiAgICAgICAgICAgIHBob25lOiBzdGF0ZS5waG9uZSxcbiAgICAgICAgICAgIHNtc19jb2RlOiBzdGF0ZS5zbXNDb2RlLFxuICAgICAgICAgICAgZGlzcGxheV9uYW1lOiBzdGF0ZS5uYW1lLFxuICAgICAgICAgIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBjb25zdCBib2R5ID0geWllbGQgci5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICBpZiAoICEgci5vayApIHtcbiAgICAgICAgICBpZiAoIGJvZHkuZXJyb3IgPT09ICdiYWRfY29kZScgKSBzdGF0ZS5lcnJvciA9ICdXcm9uZyBjb2RlLiBUcnkgYWdhaW4uJztcbiAgICAgICAgICBlbHNlIGlmICggYm9keS5lcnJvciA9PT0gJ2ludmFsaWRfb3JfZXhwaXJlZCcgKSBzdGF0ZS5lcnJvciA9ICdUaGlzIGludml0ZSBpcyBubyBsb25nZXIgdmFsaWQuJztcbiAgICAgICAgICBlbHNlIGlmICggYm9keS5lcnJvciA9PT0gJ2xvY2tlZF9vdXQnICkgc3RhdGUuZXJyb3IgPSAnVG9vIG1hbnkgdHJpZXMuIFdhaXQgYSBiaXQuJztcbiAgICAgICAgICBlbHNlIHN0YXRlLmVycm9yID0gJ0NvdWxkIG5vdCBhY2NlcHQgaW52aXRlLiBUcnkgYWdhaW4uJztcbiAgICAgICAgICBzdGF0ZS5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYm9keS51cmw7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzdGF0ZS5lcnJvciA9ICdOZXR3b3JrIGVycm9yLiBUcnkgYWdhaW4uJztcbiAgICAgICAgc3RhdGUuYnVzeSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgKmpvaW5Bc0N1cnJlbnRVc2VyKCBlICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCBzdGF0ZS5idXN5ICkgcmV0dXJuO1xuICAgICAgc3RhdGUuYnVzeSA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vaW52aXRlcy9hY2NlcHRgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7IGNvZGU6IHN0YXRlLmNvZGUgfSApLFxuICAgICAgICB9ICk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB5aWVsZCByLmpzb24oKS5jYXRjaCggKCkgPT4gKCB7fSApICk7XG4gICAgICAgIGlmICggISByLm9rICkge1xuICAgICAgICAgIGlmICggYm9keS5lcnJvciA9PT0gJ2ludmFsaWRfb3JfZXhwaXJlZCcgKSAgICBzdGF0ZS5lcnJvciA9ICdUaGlzIGludml0ZSBpcyBubyBsb25nZXIgdmFsaWQuJztcbiAgICAgICAgICBlbHNlIGlmICggYm9keS5lcnJvciA9PT0gJ25vX3VzZXJfcGhvbmUnICkgICAgc3RhdGUuZXJyb3IgPSAnVGhpcyBpbnZpdGUgd2FzIHNlbnQgdG8gYSBkaWZmZXJlbnQgbnVtYmVyIHRoYW4gdGhlIG9uZSBvbiB5b3VyIGFjY291bnQuJztcbiAgICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmVycm9yID0gJ0NvdWxkIG5vdCBqb2luLiBUcnkgYWdhaW4uJztcbiAgICAgICAgICBzdGF0ZS5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYm9keS51cmw7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzdGF0ZS5lcnJvciA9ICdOZXR3b3JrIGVycm9yLiBUcnkgYWdhaW4uJztcbiAgICAgICAgc3RhdGUuYnVzeSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgICppbml0KCkge1xuICAgICAgLy8gU1NSIGRvZXNuJ3QgcmVuZGVyIHRoZSBpcy1oaWRkZW4gY2xhc3Mgb24gdGhlc2UgZm9ybXMuIElBUEkncyBoeWRyYXRpb25cbiAgICAgIC8vIHNraXBzIHJlLWFwcGx5aW5nIGNsYXNzIGJpbmRpbmdzIHdob3NlIGluaXRpYWwgRE9NIHN0YXRlIG1hdGNoZXMgdGhlXG4gICAgICAvLyBwcm94eS4gVG9nZ2xlIGVhY2ggZmxhZyB0aHJvdWdoIGl0cyBvcHBvc2l0ZSB0byB0cmlwIHRoZSBwcm94eSdzXG4gICAgICAvLyBjaGFuZ2UtZGV0ZWN0aW9uLCB0aGVuIHJlY29tcHV0ZVZpc2liaWxpdHkoKSByZS1hc3NlcnRzIHRoZSByaWdodCB2YWx1ZXMuXG4gICAgICBzdGF0ZS5waG9uZUZvcm1IaWRkZW4gICAgPSAhIHN0YXRlLnBob25lRm9ybUhpZGRlbjtcbiAgICAgIHN0YXRlLmNvZGVGb3JtSGlkZGVuICAgICA9ICEgc3RhdGUuY29kZUZvcm1IaWRkZW47XG4gICAgICBzdGF0ZS5sb2dnZWRJbkZvcm1IaWRkZW4gPSAhIHN0YXRlLmxvZ2dlZEluRm9ybUhpZGRlbjtcblxuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICBzdGF0ZS5pc0F1dGhlZCA9ICEhIGhleWZhbS51c2VySWQ7XG4gICAgICByZWNvbXB1dGVWaXNpYmlsaXR5KCk7XG5cbiAgICAgIC8vIFB1bGwgaW52aXRlIGNvZGUgZnJvbSB0aGUgVVJMLlxuICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyggd2luZG93LmxvY2F0aW9uLnNlYXJjaCApO1xuICAgICAgY29uc3QgY29kZSA9IHBhcmFtcy5nZXQoICdoZXlmYW1faW52aXRlX2NvZGUnICkgfHwgJyc7XG4gICAgICBpZiAoICEgY29kZSApIHtcbiAgICAgICAgc2V0UHJldmlld0Vycm9yKCAnTm8gaW52aXRlIGNvZGUgaW4gVVJMLiBDaGVjayB0aGUgbGluayB5b3VyIGludml0ZXIgc2VudCB5b3UuJyApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdGF0ZS5jb2RlID0gY29kZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKFxuICAgICAgICAgIGAke2hleWZhbS5hcGlCYXNlfS9pbnZpdGVzL3ByZXZpZXc/Y29kZT0ke2VuY29kZVVSSUNvbXBvbmVudCggY29kZSApfWAsXG4gICAgICAgICAgeyBjcmVkZW50aWFsczogJ2luY2x1ZGUnIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYm9keSA9IHlpZWxkIHIuanNvbigpLmNhdGNoKCAoKSA9PiAoIHt9ICkgKTtcbiAgICAgICAgaWYgKCAhIHIub2sgKSB7XG4gICAgICAgICAgaWYgKCBib2R5LmVycm9yID09PSAndXNlZCcgKSAgICBzZXRQcmV2aWV3RXJyb3IoICdUaGlzIGludml0ZSBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuJyApO1xuICAgICAgICAgIGVsc2UgaWYgKCBib2R5LmVycm9yID09PSAnZXhwaXJlZCcgKSBzZXRQcmV2aWV3RXJyb3IoICdUaGlzIGludml0ZSBoYXMgZXhwaXJlZC4nICk7XG4gICAgICAgICAgZWxzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXZpZXdFcnJvciggJ1RoaXMgaW52aXRlIGxpbmsgaXMgbm90IHZhbGlkLicgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuZmFtTmFtZSAgICAgICA9IGJvZHkuZmFtX25hbWU7XG4gICAgICAgIHN0YXRlLmludml0ZXIgICAgICAgPSBib2R5Lmludml0ZXI7XG4gICAgICAgIHN0YXRlLnBob25lSGludCAgICAgPSBib2R5LnBob25lX2hpbnQ7XG4gICAgICAgIHN0YXRlLnByZXZpZXdMb2FkZWQgPSB0cnVlO1xuICAgICAgICByZWNvbXB1dGVWaXNpYmlsaXR5KCk7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzZXRQcmV2aWV3RXJyb3IoICdDb3VsZCBub3QgbG9hZCBpbnZpdGUuIENoZWNrIHlvdXIgY29ubmVjdGlvbi4nICk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0gKTtcblxuZnVuY3Rpb24gcmVjb21wdXRlVmlzaWJpbGl0eSgpIHtcbiAgLy8gTG9nZ2VkIGluOiBza2lwIHRoZSBwaG9uZStTTVMgZGFuY2UgZW50aXJlbHkuIFNob3cgdGhlIG9uZS1idXR0b24gZm9ybVxuICAvLyBvbmNlIHRoZSBwcmV2aWV3IGxvYWRzIChzbyB3ZSBrbm93IHdoYXQgZmFtIHRoZXkncmUgam9pbmluZyk7IGhpZGUgaXRcbiAgLy8gaWYgcHJldmlldyBmYWlsZWQuXG4gIGlmICggc3RhdGUuaXNBdXRoZWQgKSB7XG4gICAgc3RhdGUucGhvbmVGb3JtSGlkZGVuICAgID0gdHJ1ZTtcbiAgICBzdGF0ZS5jb2RlRm9ybUhpZGRlbiAgICAgPSB0cnVlO1xuICAgIHN0YXRlLmxvZ2dlZEluRm9ybUhpZGRlbiA9ICEgc3RhdGUucHJldmlld0xvYWRlZCB8fCAhISBzdGF0ZS5wcmV2aWV3RXJyb3I7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN0YXRlLnBob25lRm9ybUhpZGRlbiAgICA9IHN0YXRlLnN0YWdlICE9PSAncGhvbmUnIHx8ICEhIHN0YXRlLnByZXZpZXdFcnJvcjtcbiAgc3RhdGUuY29kZUZvcm1IaWRkZW4gICAgID0gc3RhdGUuc3RhZ2UgIT09ICdjb2RlJztcbiAgc3RhdGUubG9nZ2VkSW5Gb3JtSGlkZGVuID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhZ2UoIG5leHQgKSB7XG4gIHN0YXRlLnN0YWdlID0gbmV4dDtcbiAgcmVjb21wdXRlVmlzaWJpbGl0eSgpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmV2aWV3RXJyb3IoIGVyciApIHtcbiAgc3RhdGUucHJldmlld0Vycm9yID0gZXJyO1xuICByZWNvbXB1dGVWaXNpYmlsaXR5KCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBob25lKCByYXcgKSB7XG4gIGNvbnN0IGRpZ2l0cyA9ICggcmF3IHx8ICcnICkucmVwbGFjZSggL1teMC05K10vZywgJycgKTtcbiAgaWYgKCAhIGRpZ2l0cy5zdGFydHNXaXRoKCAnKycgKSApIHJldHVybiBudWxsO1xuICBpZiAoIGRpZ2l0cy5sZW5ndGggPCA4IHx8IGRpZ2l0cy5sZW5ndGggPiAxNiApIHJldHVybiBudWxsO1xuICByZXR1cm4gZGlnaXRzO1xufVxuIiwgImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9pbnRlcmFjdGl2aXR5JztcbmltcG9ydCBDcm9wcGVyIGZyb20gJ2Nyb3BwZXJqcyc7XG5pbXBvcnQgJ2Nyb3BwZXJqcy9kaXN0L2Nyb3BwZXIuY3NzJztcblxubGV0IHByZWZzRGVib3VuY2UgPSBudWxsO1xuXG4vLyBIb2xkcyBub24tcmVhY3RpdmUgaW5zdGFuY2VzIChET00gc3RyZWFtcywgbGlicmFyeSBoYW5kbGVzKSBvdXRzaWRlIG9mIHN0YXRlXG4vLyBzbyBJQVBJJ3MgcHJveHkgZG9lc24ndCB0cnkgdG8gZGVlcC13YXRjaCB0aGVtLlxuY29uc3Qgc2lkZVRhYmxlID0ge1xuICBjYW1lcmFTdHJlYW06IG51bGwsXG4gIGNyb3BwZXI6IG51bGwsXG4gIHBlbmRpbmdPYmplY3RVcmw6IG51bGwsXG59O1xuXG5jb25zdCBpbml0aWFsUHVzaFBlcm1pc3Npb24gPSB0eXBlb2YgTm90aWZpY2F0aW9uICE9PSAndW5kZWZpbmVkJyA/IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uIDogJ2RlbmllZCc7XG5cbmNvbnN0IGlzTW9iaWxlRGV2aWNlID0gKCkgPT4gL01vYml8QW5kcm9pZHxpUGhvbmV8aVBhZC8udGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJyApO1xuXG5jb25zdCBlbXB0eUZhbSA9ICgpID0+ICgge1xuICBzbHVnOiAgICAgICAgICAgICAnJyxcbiAgbmFtZTogICAgICAgICAgICAgJycsXG4gIGJsb2dfaWQ6ICAgICAgICAgIDAsXG4gIHVybDogICAgICAgICAgICAgICcnLFxuICBwcmVmczogICAgICAgICAgICBkZWZhdWx0UHJlZnMoKSxcbiAgaW52aXRlVXJsOiAgICAgICAgJycsXG4gIGludml0ZVJlY2lwaWVudHM6ICcnLFxuICBpbnZpdGVOb3RlOiAgICAgICAnJyxcbiAgc2VuZGluZ0ludml0ZXM6ICAgZmFsc2UsXG4gIGludml0ZVN0YXR1czogICAgICcnLFxuICBxck9wZW46ICAgICAgICAgICBmYWxzZSxcbiAgcXJTdmc6ICAgICAgICAgICAgJycsXG59ICk7XG5cbmNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHN0b3JlKCAnaGV5ZmFtL2FjY291bnQnLCB7XG4gIHN0YXRlOiB7XG4gICAgZmFtOiBlbXB0eUZhbSgpLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgbG9hZEVycm9yOiAnJyxcbiAgICBwdXNoUGVybWlzc2lvbjogaW5pdGlhbFB1c2hQZXJtaXNzaW9uLFxuICAgIG1lOiB7IG5hbWU6ICcnLCBhdmF0YXJfdXJsOiAnJywgaGFzX3VwbG9hZGVkX2F2YXRhcjogZmFsc2UgfSxcbiAgICAvLyBOYXRpdmUgc2hhcmUgc2hlZXQgYXZhaWxhYmlsaXR5IFx1MjAxNCBzZXQgaW4gaW5pdCgpIHNvIGRpcmVjdGl2ZXMgY2FuIGhpZGVcbiAgICAvLyB0aGUgU2hhcmUgYnV0dG9uIG9uIGJyb3dzZXJzIHdpdGhvdXQgbmF2aWdhdG9yLnNoYXJlLlxuICAgIGNhblNoYXJlOiBmYWxzZSxcbiAgICAvLyBDYW1lcmEgKyBjcm9wIGZsb3cuXG4gICAgY2FtZXJhT3BlbjogICBmYWxzZSxcbiAgICBjYW1lcmFSZWFkeTogIGZhbHNlLFxuICAgIGNhbWVyYUVycm9yOiAgJycsXG4gICAgY3JvcE9wZW46ICAgICBmYWxzZSxcbiAgICBjcm9wU3JjOiAgICAgICcnLFxuICAgIHVwbG9hZGluZzogICAgZmFsc2UsXG4gICAgZ2V0IGxvZ291dFVybCgpIHtcbiAgICAgIHJldHVybiBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZS5sb2dvdXRVcmwgfHwgJy93cC1sb2dpbi5waHA/YWN0aW9uPWxvZ291dCc7XG4gICAgfSxcbiAgICBnZXQgbmV3RmFtVXJsKCkge1xuICAgICAgcmV0dXJuIHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlLm5ld0ZhbVVybCB8fCAnL3NpZ251cCc7XG4gICAgfSxcbiAgICAvLyBJQVBJIGRpcmVjdGl2ZXMgb25seSByZWFjdCB0byBkaXJlY3QgcHJvcGVydHkgYWNjZXNzLiBQbGFpbiBnZXR0ZXJzXG4gICAgLy8gY29tcHV0ZWQgb2ZmIG90aGVyIHN0YXRlIGFyZW4ndCBwaWNrZWQgdXAgYXQgaHlkcmF0aW9uLCBzbyB3ZSBrZWVwXG4gICAgLy8gdmlzaWJpbGl0eSBmbGFncyBhcyBwbGFpbiByZWFjdGl2ZSBwcm9wcyBhbmQgcmVjb21wdXRlIHRoZW0gd2hlbmV2ZXJcbiAgICAvLyBwdXNoUGVybWlzc2lvbiBjaGFuZ2VzLlxuICAgIHB1c2hOb3RFbmFibGVkOiAgIGluaXRpYWxQdXNoUGVybWlzc2lvbiAhPT0gJ2RlZmF1bHQnLFxuICAgIHB1c2hOb3RHcmFudGVkOiAgIGluaXRpYWxQdXNoUGVybWlzc2lvbiAhPT0gJ2dyYW50ZWQnLFxuICAgIHB1c2hOb3REZW5pZWQ6ICAgIGluaXRpYWxQdXNoUGVybWlzc2lvbiAhPT0gJ2RlbmllZCcsXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICAqdG9nZ2xlUHJlZiggZSApIHtcbiAgICAgIGNvbnN0IGV2ZW50ICAgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoICdkYXRhLWV2ZW50JyApO1xuICAgICAgY29uc3QgY2hhbm5lbCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSggJ2RhdGEtY2hhbm5lbCcgKTtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSAhISBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgaWYgKCAhIHN0YXRlLmZhbS5zbHVnICkgcmV0dXJuO1xuICAgICAgLy8gTXV0YXRlIHRoZSByZWFjdGl2ZSBwcm94eSBzbyB0aGUgY2hlY2tib3ggc3RheXMgaW4gc3luYy5cbiAgICAgIHN0YXRlLmZhbS5wcmVmc1sgZXZlbnQgXVsgY2hhbm5lbCBdID0gY2hlY2tlZDtcbiAgICAgIGlmICggcHJlZnNEZWJvdW5jZSApIGNsZWFyVGltZW91dCggcHJlZnNEZWJvdW5jZSApO1xuICAgICAgcHJlZnNEZWJvdW5jZSA9IHNldFRpbWVvdXQoIHNhdmVQcmVmcywgNTAwICk7XG4gICAgfSxcbiAgICAqcmVxdWVzdFB1c2goKSB7XG4gICAgICBpZiAoIHR5cGVvZiBOb3RpZmljYXRpb24gPT09ICd1bmRlZmluZWQnICkgcmV0dXJuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gICAgICAgIHN0YXRlLnB1c2hQZXJtaXNzaW9uID0gcmVzdWx0O1xuICAgICAgICByZWNvbXB1dGVWaXNpYmlsaXR5KCk7XG4gICAgICAgIGlmICggcmVzdWx0ID09PSAnZ3JhbnRlZCcgKSB7XG4gICAgICAgICAgLy8gUmVsb2FkIHRvIGxldCBwdXNoLXN1YnNjcmliZS5qcyByZWdpc3RlciBub3JtYWxseSBvbiBpdHMgd2luZG93LmxvYWQgaGFuZGxlci5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIC8vIGlnbm9yZVxuICAgICAgfVxuICAgIH0sXG4gICAgKm9uUGhvdG9DaG9zZW4oIGUgKSB7XG4gICAgICBjb25zdCBmaWxlID0gZT8udGFyZ2V0Py5maWxlcz8uWyAwIF07XG4gICAgICAvLyBDbGVhciB0aGUgaW5wdXQgc28gcmUtc2VsZWN0aW5nIHRoZSBzYW1lIGZpbGUgc3RpbGwgZmlyZXMgYGNoYW5nZWAuXG4gICAgICBpZiAoIGU/LnRhcmdldCApIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICBpZiAoIGZpbGUgKSBvcGVuQ3JvcCggZmlsZSApO1xuICAgIH0sXG4gICAgKnRha2VQaG90bygpIHtcbiAgICAgIC8vIE1vYmlsZTogZGVmZXIgdG8gdGhlIE9TIGNhbWVyYSBVSSB2aWEgdGhlIGNhcHR1cmUtYXR0cmlidXRlIGlucHV0LlxuICAgICAgaWYgKCBpc01vYmlsZURldmljZSgpICkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnW2RhdGEtY2FtZXJhLWlucHV0XScgKT8uY2xpY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gRGVza3RvcDogaW4tcGFnZSA8dmlkZW8+IHN0cmVhbS5cbiAgICAgIHN0YXRlLmNhbWVyYUVycm9yID0gJyc7XG4gICAgICBzdGF0ZS5jYW1lcmFSZWFkeSA9IGZhbHNlO1xuICAgICAgc3RhdGUuY2FtZXJhT3BlbiAgPSB0cnVlO1xuICAgICAgaWYgKCAhIG5hdmlnYXRvci5tZWRpYURldmljZXM/LmdldFVzZXJNZWRpYSApIHtcbiAgICAgICAgc3RhdGUuY2FtZXJhRXJyb3IgPSAnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY2FtZXJhIGNhcHR1cmUuJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0geWllbGQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoIHsgdmlkZW86IHsgZmFjaW5nTW9kZTogJ3VzZXInIH0gfSApO1xuICAgICAgICBzaWRlVGFibGUuY2FtZXJhU3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuaGV5ZmFtLWNhbWVyYV9fdmlkZW8nICk7XG4gICAgICAgIGlmICggdmlkZW8gKSB7XG4gICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkZWRtZXRhZGF0YScsIHJlc29sdmUsIHsgb25jZTogdHJ1ZSB9ICkgKTtcbiAgICAgICAgICBzdGF0ZS5jYW1lcmFSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIHN0YXRlLmNhbWVyYUVycm9yID0gZXJyPy5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJ1xuICAgICAgICAgID8gJ0NhbWVyYSBwZXJtaXNzaW9uIHdhcyBkZW5pZWQuJ1xuICAgICAgICAgIDogJ0NvdWxkIG5vdCBhY2Nlc3MgdGhlIGNhbWVyYS4nO1xuICAgICAgfVxuICAgIH0sXG4gICAgKmNhcHR1cmVQaG90bygpIHtcbiAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5oZXlmYW0tY2FtZXJhX192aWRlbycgKTtcbiAgICAgIGlmICggISB2aWRlbyB8fCAhIHZpZGVvLnZpZGVvV2lkdGggKSByZXR1cm47XG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuICAgICAgY2FudmFzLndpZHRoICA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgICBjYW52YXMuZ2V0Q29udGV4dCggJzJkJyApLmRyYXdJbWFnZSggdmlkZW8sIDAsIDAgKTtcbiAgICAgIGNvbnN0IGJsb2IgPSB5aWVsZCBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiBjYW52YXMudG9CbG9iKCByZXNvbHZlLCAnaW1hZ2UvanBlZycsIDAuOTIgKSApO1xuICAgICAgc3RvcENhbWVyYSgpO1xuICAgICAgaWYgKCBibG9iICkgb3BlbkNyb3AoIGJsb2IgKTtcbiAgICB9LFxuICAgICpjbG9zZUNhbWVyYSgpIHtcbiAgICAgIHN0b3BDYW1lcmEoKTtcbiAgICB9LFxuICAgICpjbG9zZUNyb3AoKSB7XG4gICAgICBkZXN0cm95Q3JvcHBlcigpO1xuICAgIH0sXG4gICAgKnNhdmVDcm9wKCkge1xuICAgICAgaWYgKCAhIHNpZGVUYWJsZS5jcm9wcGVyICkgcmV0dXJuO1xuICAgICAgc3RhdGUudXBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHNpZGVUYWJsZS5jcm9wcGVyLmdldENyb3BwZWRDYW52YXMoIHtcbiAgICAgICAgd2lkdGg6ICA1MTIsXG4gICAgICAgIGhlaWdodDogNTEyLFxuICAgICAgICBpbWFnZVNtb290aGluZ1F1YWxpdHk6ICdoaWdoJyxcbiAgICAgIH0gKTtcbiAgICAgIGNvbnN0IGJsb2IgPSB5aWVsZCBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiBjYW52YXMudG9CbG9iKCByZXNvbHZlLCAnaW1hZ2UvanBlZycsIDAuOSApICk7XG4gICAgICBpZiAoICEgYmxvYiApIHsgc3RhdGUudXBsb2FkaW5nID0gZmFsc2U7IHJldHVybjsgfVxuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZmQuYXBwZW5kKCAncGhvdG8nLCBibG9iLCAnYXZhdGFyLmpwZycgKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHIgPSB5aWVsZCBmZXRjaCggYCR7IGhleWZhbS5hcGlCYXNlIH0vbWUvYXZhdGFyYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSwgYm9keTogZmQsXG4gICAgICAgIH0gKTtcbiAgICAgICAgaWYgKCAhIHIub2sgKSB0aHJvdyBuZXcgRXJyb3IoICdhdmF0YXItZmFpbGVkJyApO1xuICAgICAgICBjb25zdCBib2R5ID0geWllbGQgci5qc29uKCk7XG4gICAgICAgIHN0YXRlLm1lLmF2YXRhcl91cmwgICAgICAgICAgPSBib2R5LmF2YXRhcl91cmw7XG4gICAgICAgIHN0YXRlLm1lLmhhc191cGxvYWRlZF9hdmF0YXIgPSB0cnVlO1xuICAgICAgICBkZXN0cm95Q3JvcHBlcigpO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgYWxlcnQoICdDb3VsZCBub3QgdXBsb2FkIHBob3RvLiBUcnkgYWdhaW4uJyApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc3RhdGUudXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICAqb25GYW1OYW1lSW5wdXQoIGUgKSB7XG4gICAgICBzdGF0ZS5mYW0ubmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0sXG4gICAgKnNhdmVGYW1OYW1lKCBlICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCAhIHN0YXRlLmZhbS5zbHVnICkgcmV0dXJuO1xuICAgICAgY29uc3QgbmFtZSA9ICggc3RhdGUuZmFtLm5hbWUgfHwgJycgKS50cmltKCk7XG4gICAgICBpZiAoICEgbmFtZSApIHJldHVybjtcbiAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vJHtzdGF0ZS5mYW0uc2x1Z30vbmFtZWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgbmFtZSB9ICksXG4gICAgICAgIH0gKTtcbiAgICAgICAgaWYgKCAhIHIub2sgKSB0aHJvdyBuZXcgRXJyb3IoICdyZW5hbWUtZmFpbGVkJyApO1xuICAgICAgICBjb25zdCBib2R5ID0geWllbGQgci5qc29uKCk7XG4gICAgICAgIGlmICggYm9keSAmJiBib2R5Lm5hbWUgKSBzdGF0ZS5mYW0ubmFtZSA9IGJvZHkubmFtZTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIGFsZXJ0KCAnQ291bGQgbm90IHNhdmUgdGhlIGZhbWlseSBuYW1lLiBUcnkgYWdhaW4uJyApO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0QWxsKCBlICkge1xuICAgICAgaWYgKCBlPy50YXJnZXQ/LnNlbGVjdCApIGUudGFyZ2V0LnNlbGVjdCgpO1xuICAgIH0sXG4gICAgdXBkYXRlSW52aXRlUmVjaXBpZW50cyggZSApIHtcbiAgICAgIHN0YXRlLmZhbS5pbnZpdGVSZWNpcGllbnRzID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSxcbiAgICB1cGRhdGVJbnZpdGVOb3RlKCBlICkge1xuICAgICAgc3RhdGUuZmFtLmludml0ZU5vdGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9LFxuICAgICpjb3B5SW52aXRlTGluaygpIHtcbiAgICAgIGlmICggISBzdGF0ZS5mYW0uaW52aXRlVXJsICkgcmV0dXJuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgeWllbGQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoIHN0YXRlLmZhbS5pbnZpdGVVcmwgKTtcbiAgICAgICAgc3RhdGUuZmFtLmludml0ZVN0YXR1cyA9ICdMaW5rIGNvcGllZC4nO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7IGlmICggc3RhdGUuZmFtLmludml0ZVN0YXR1cyA9PT0gJ0xpbmsgY29waWVkLicgKSBzdGF0ZS5mYW0uaW52aXRlU3RhdHVzID0gJyc7IH0sIDI1MDAgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIHN0YXRlLmZhbS5pbnZpdGVTdGF0dXMgPSAnQ291bGQgbm90IGNvcHkuIExvbmctcHJlc3MgdGhlIGxpbmsgdG8gY29weSBtYW51YWxseS4nO1xuICAgICAgfVxuICAgIH0sXG4gICAgKnNoYXJlSW52aXRlTGluaygpIHtcbiAgICAgIGlmICggISBzdGF0ZS5mYW0uaW52aXRlVXJsIHx8ICEgbmF2aWdhdG9yLnNoYXJlICkgcmV0dXJuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgeWllbGQgbmF2aWdhdG9yLnNoYXJlKCB7IHRpdGxlOiBgSm9pbiAke3N0YXRlLmZhbS5uYW1lfSBvbiBIZXlGYW1gLCB1cmw6IHN0YXRlLmZhbS5pbnZpdGVVcmwgfSApO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgLy8gVXNlciBjYW5jZWxsZWQgb3Igc2hhcmUgZmFpbGVkIHNpbGVudGx5IFx1MjAxNCBubyBVSSBjaGFuZ2UuXG4gICAgICB9XG4gICAgfSxcbiAgICAqdG9nZ2xlUXIoIGUgKSB7XG4gICAgICBzdGF0ZS5mYW0ucXJPcGVuID0gISBzdGF0ZS5mYW0ucXJPcGVuO1xuICAgICAgaWYgKCBzdGF0ZS5mYW0ucXJPcGVuICYmICEgc3RhdGUuZmFtLnFyU3ZnICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgZGVmYXVsdDogUVJDb2RlIH0gPSB5aWVsZCBpbXBvcnQoICdxcmNvZGUtc3ZnJyApO1xuICAgICAgICAgIGNvbnN0IHFyID0gbmV3IFFSQ29kZSgge1xuICAgICAgICAgICAgY29udGVudDogc3RhdGUuZmFtLmludml0ZVVybCwgcGFkZGluZzogMiwgd2lkdGg6IDE5MiwgaGVpZ2h0OiAxOTIsXG4gICAgICAgICAgICBjb2xvcjogJyMxYTFmMTcnLCBiYWNrZ3JvdW5kOiAnI2Y0ZjZmMCcsIGVjbDogJ00nLCBqb2luOiB0cnVlLFxuICAgICAgICAgIH0gKTtcbiAgICAgICAgICBzdGF0ZS5mYW0ucXJTdmcgPSBxci5zdmcoKTtcbiAgICAgICAgICAvLyBSZWFjdGl2ZSBpbm5lckhUTUwgaXNuJ3QgYSB0aGluZyBpbiBJQVBJLCBzbyBwYWludCBtYW51YWxseS5cbiAgICAgICAgICBjb25zdCBob3N0ID0gZS50YXJnZXQuY2xvc2VzdCggJy5oZXlmYW0tYWNjb3VudF9fZmFtJyApPy5xdWVyeVNlbGVjdG9yKCAnLmhleWZhbS1hY2NvdW50X19pbnZpdGUtcXInICk7XG4gICAgICAgICAgaWYgKCBob3N0ICkgaG9zdC5pbm5lckhUTUwgPSBzdGF0ZS5mYW0ucXJTdmc7XG4gICAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgICAgc3RhdGUuZmFtLnFyT3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGFsZXJ0KCAnQ291bGQgbm90IHJlbmRlciB0aGUgUVIgY29kZS4nICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICpzZW5kSW52aXRlcyggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICggISBzdGF0ZS5mYW0uc2x1ZyB8fCBzdGF0ZS5mYW0uc2VuZGluZ0ludml0ZXMgKSByZXR1cm47XG4gICAgICBjb25zdCByYXcgPSAoIHN0YXRlLmZhbS5pbnZpdGVSZWNpcGllbnRzIHx8ICcnICkuc3BsaXQoIC9bXFxuLF0rLyApLm1hcCggcyA9PiBzLnRyaW0oKSApLmZpbHRlciggQm9vbGVhbiApO1xuICAgICAgaWYgKCAhIHJhdy5sZW5ndGggKSB7XG4gICAgICAgIHN0YXRlLmZhbS5pbnZpdGVTdGF0dXMgPSAnQWRkIGF0IGxlYXN0IG9uZSBwaG9uZSBudW1iZXIgb3IgZW1haWwuJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3RhdGUuZmFtLnNlbmRpbmdJbnZpdGVzID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmZhbS5pbnZpdGVTdGF0dXMgICA9ICcnO1xuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS8ke3N0YXRlLmZhbS5zbHVnfS9pbnZpdGVzYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSggeyByZWNpcGllbnRzOiByYXcsIG1lc3NhZ2Vfbm90ZTogc3RhdGUuZmFtLmludml0ZU5vdGUgfHwgJycgfSApLFxuICAgICAgICB9ICk7XG4gICAgICAgIGlmICggISByLm9rICkgdGhyb3cgbmV3IEVycm9yKCAnaW52aXRlLWZhaWxlZCcgKTtcbiAgICAgICAgY29uc3QgYm9keSA9IHlpZWxkIHIuanNvbigpO1xuICAgICAgICBjb25zdCBzZW50ID0gKCBib2R5Lmlzc3VlZCB8fCBbXSApLmZpbHRlciggaSA9PiBpLnNlbnQgKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNraXBwZWQgPSAoIGJvZHkuc2tpcHBlZCB8fCBbXSApLmxlbmd0aDtcbiAgICAgICAgc3RhdGUuZmFtLmludml0ZVN0YXR1cyA9IGBTZW50ICR7c2VudH0keyBza2lwcGVkID8gYCAoJHtza2lwcGVkfSBza2lwcGVkIFx1MjAxNCBpbnZhbGlkKWAgOiAnJyB9LmA7XG4gICAgICAgIHN0YXRlLmZhbS5pbnZpdGVSZWNpcGllbnRzID0gJyc7XG4gICAgICAgIHN0YXRlLmZhbS5pbnZpdGVOb3RlICAgICAgID0gJyc7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzdGF0ZS5mYW0uaW52aXRlU3RhdHVzID0gJ0NvdWxkIG5vdCBzZW5kLiBUcnkgYWdhaW4uJztcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHN0YXRlLmZhbS5zZW5kaW5nSW52aXRlcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgKmNsZWFyQXZhdGFyKCkge1xuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAkeyBoZXlmYW0uYXBpQmFzZSB9L21lL2F2YXRhcmAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICAgICAgfSApO1xuICAgICAgICBpZiAoICEgci5vayApIHRocm93IG5ldyBFcnJvciggJ3Jlc2V0LWZhaWxlZCcgKTtcbiAgICAgICAgY29uc3QgYm9keSA9IHlpZWxkIHIuanNvbigpO1xuICAgICAgICBzdGF0ZS5tZS5hdmF0YXJfdXJsICAgICAgICAgID0gYm9keS5hdmF0YXJfdXJsO1xuICAgICAgICBzdGF0ZS5tZS5oYXNfdXBsb2FkZWRfYXZhdGFyID0gZmFsc2U7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBhbGVydCggJ0NvdWxkIG5vdCByZXNldC4gVHJ5IGFnYWluLicgKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICAqbG9hZE1lKCkge1xuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICBpZiAoICEgaGV5ZmFtLnVzZXJJZCApIHJldHVybjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHIgPSB5aWVsZCBmZXRjaCggYCR7IGhleWZhbS5hcGlCYXNlIH0vbWVgLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgICAgIH0gKTtcbiAgICAgICAgaWYgKCAhIHIub2sgKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJvZHkgPSB5aWVsZCByLmpzb24oKTtcbiAgICAgICAgc3RhdGUubWUubmFtZSAgICAgICAgICAgICAgICA9IGJvZHkubmFtZSB8fCAnJztcbiAgICAgICAgc3RhdGUubWUuYXZhdGFyX3VybCAgICAgICAgICA9IGJvZHkuYXZhdGFyX3VybCB8fCAnJztcbiAgICAgICAgc3RhdGUubWUuaGFzX3VwbG9hZGVkX2F2YXRhciA9ICEhIGJvZHkuaGFzX3VwbG9hZGVkX2F2YXRhcjtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIC8vIGlnbm9yZTsgdGhlIHBhZ2Ugc3RpbGwgd29ya3Mgd2l0aG91dCB0aGUgYXZhdGFyIGJsb2NrXG4gICAgICB9XG4gICAgfSxcbiAgICAqaW5pdCgpIHtcbiAgICAgIC8vIFNTUiBkb2Vzbid0IHJlbmRlciB0aGUgaXMtaGlkZGVuIGNsYXNzIG9uIHRoZXNlIGVsZW1lbnRzLiBJQVBJJ3MgaHlkcmF0aW9uXG4gICAgICAvLyBza2lwcyByZS1hcHBseWluZyBjbGFzcyBiaW5kaW5ncyB3aG9zZSBpbml0aWFsIERPTSBzdGF0ZSBtYXRjaGVzIHRoZVxuICAgICAgLy8gcHJveHkuIFRvZ2dsZSBlYWNoIGZsYWcgdGhyb3VnaCBpdHMgb3Bwb3NpdGUgdG8gdHJpcCB0aGUgcHJveHknc1xuICAgICAgLy8gY2hhbmdlLWRldGVjdGlvbiwgdGhlbiByZWNvbXB1dGVWaXNpYmlsaXR5KCkgcmUtYXNzZXJ0cyB0aGUgcmlnaHQgdmFsdWVzLlxuICAgICAgc3RhdGUucHVzaE5vdEVuYWJsZWQgPSAhIHN0YXRlLnB1c2hOb3RFbmFibGVkO1xuICAgICAgc3RhdGUucHVzaE5vdEdyYW50ZWQgPSAhIHN0YXRlLnB1c2hOb3RHcmFudGVkO1xuICAgICAgc3RhdGUucHVzaE5vdERlbmllZCAgPSAhIHN0YXRlLnB1c2hOb3REZW5pZWQ7XG4gICAgICBzdGF0ZS5jYW5TaGFyZSAgICAgICA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3Iuc2hhcmUgPT09ICdmdW5jdGlvbic7XG4gICAgICByZWNvbXB1dGVWaXNpYmlsaXR5KCk7XG5cbiAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgaWYgKCAhIGhleWZhbS51c2VySWQgKSB7XG4gICAgICAgIC8vIE5vdCBsb2dnZWQgaW47IGJvdW5jZSB0byBsb2dpbi5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2x1ZyA9IGhleWZhbS5mYW1TbHVnO1xuICAgICAgaWYgKCAhIHNsdWcgKSB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgICA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5sb2FkRXJyb3IgPSAnVGhpcyBzZXR0aW5ncyBwYWdlIG11c3QgYmUgb3BlbmVkIGZyb20gYSBmYW1pbHkuJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfTtcbiAgICAgICAgY29uc3QgWyBmYW1zUmVzcCwgcHJlZnNSZXNwLCBsaW5rUmVzcCBdID0geWllbGQgUHJvbWlzZS5hbGwoIFtcbiAgICAgICAgICBmZXRjaCggYCR7aGV5ZmFtLmFwaUJhc2V9L21lL2ZhbXNgLCAgICAgICAgICAgeyBjcmVkZW50aWFsczogJ2luY2x1ZGUnLCBoZWFkZXJzIH0gKS5jYXRjaCggKCkgPT4gbnVsbCApLFxuICAgICAgICAgIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vJHtzbHVnfS9wcmVmc2AsICAgICB7IGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsIGhlYWRlcnMgfSApLmNhdGNoKCAoKSA9PiBudWxsICksXG4gICAgICAgICAgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS8ke3NsdWd9L2ludml0ZS1saW5rYCwgeyBjcmVkZW50aWFsczogJ2luY2x1ZGUnLCBoZWFkZXJzIH0gKS5jYXRjaCggKCkgPT4gbnVsbCApLFxuICAgICAgICBdICk7XG5cbiAgICAgICAgLy8gTG9vayB1cCB0aGUgY3VycmVudCBmYW0gaW4gdGhlIG1lbWJlcnNoaXAgbGlzdCBzbyB3ZSBnZXQgdGhlIG5hbWUgK1xuICAgICAgICAvLyBibG9nX2lkIHdpdGhvdXQgYSBwZXItZmFtIGVuZHBvaW50LiBJZiB0aGUgdXNlciBpc24ndCBhIG1lbWJlciwgZmFsbFxuICAgICAgICAvLyBiYWNrIHRvIGEgbWluaW1hbCByZWNvcmQgc28gdGhlIFVJIHN0aWxsIGJpbmRzLlxuICAgICAgICBsZXQgZmFtUmVjb3JkID0gbnVsbDtcbiAgICAgICAgaWYgKCBmYW1zUmVzcCAmJiBmYW1zUmVzcC5vayApIHtcbiAgICAgICAgICBjb25zdCBib2R5ID0geWllbGQgZmFtc1Jlc3AuanNvbigpO1xuICAgICAgICAgIGZhbVJlY29yZCA9ICggYm9keSAmJiBib2R5LmZhbXMgfHwgW10gKS5maW5kKCBmID0+IGYuc2x1ZyA9PT0gc2x1ZyApIHx8IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJlZnMgPSBkZWZhdWx0UHJlZnMoKTtcbiAgICAgICAgaWYgKCBwcmVmc1Jlc3AgJiYgcHJlZnNSZXNwLm9rICkge1xuICAgICAgICAgIGNvbnN0IHBiID0geWllbGQgcHJlZnNSZXNwLmpzb24oKTtcbiAgICAgICAgICBpZiAoIHBiICYmIHBiLnByZWZzICkgcHJlZnMgPSBwYi5wcmVmcztcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW52aXRlVXJsID0gJyc7XG4gICAgICAgIGlmICggbGlua1Jlc3AgJiYgbGlua1Jlc3Aub2sgKSB7XG4gICAgICAgICAgY29uc3QgbGIgPSB5aWVsZCBsaW5rUmVzcC5qc29uKCk7XG4gICAgICAgICAgaW52aXRlVXJsID0gbGI/LnVybCB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHN0YXRlLmZhbSwgZmFtUmVjb3JkIHx8IHsgc2x1ZywgbmFtZTogc2x1ZyB9LCB7IHByZWZzLCBpbnZpdGVVcmwgfSApO1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nICAgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUubG9hZEVycm9yID0gJ0NvdWxkIG5vdCBsb2FkIHlvdXIgc2V0dGluZ3MuIFRyeSByZWZyZXNoaW5nLic7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0gKTtcblxuZnVuY3Rpb24gcmVjb21wdXRlVmlzaWJpbGl0eSgpIHtcbiAgc3RhdGUucHVzaE5vdEVuYWJsZWQgPSBzdGF0ZS5wdXNoUGVybWlzc2lvbiAhPT0gJ2RlZmF1bHQnO1xuICBzdGF0ZS5wdXNoTm90R3JhbnRlZCA9IHN0YXRlLnB1c2hQZXJtaXNzaW9uICE9PSAnZ3JhbnRlZCc7XG4gIHN0YXRlLnB1c2hOb3REZW5pZWQgID0gc3RhdGUucHVzaFBlcm1pc3Npb24gIT09ICdkZW5pZWQnO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJlZnMoKSB7XG4gIHJldHVybiB7XG4gICAgcG9zdHM6ICAgICB7IHB1c2g6IHRydWUsIGVtYWlsOiB0cnVlLCAgc21zOiB0cnVlIH0sXG4gICAgY29tbWVudHM6ICB7IHB1c2g6IHRydWUsIGVtYWlsOiBmYWxzZSwgc21zOiBmYWxzZSB9LFxuICAgIHJlYWN0aW9uczogeyBwdXNoOiB0cnVlLCBlbWFpbDogZmFsc2UsIHNtczogZmFsc2UgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RvcENhbWVyYSgpIHtcbiAgc2lkZVRhYmxlLmNhbWVyYVN0cmVhbT8uZ2V0VHJhY2tzPy4oKS5mb3JFYWNoKCB0ID0+IHQuc3RvcCgpICk7XG4gIHNpZGVUYWJsZS5jYW1lcmFTdHJlYW0gPSBudWxsO1xuICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuaGV5ZmFtLWNhbWVyYV9fdmlkZW8nICk7XG4gIGlmICggdmlkZW8gKSB2aWRlby5zcmNPYmplY3QgPSBudWxsO1xuICBzdGF0ZS5jYW1lcmFPcGVuICA9IGZhbHNlO1xuICBzdGF0ZS5jYW1lcmFSZWFkeSA9IGZhbHNlO1xuICBzdGF0ZS5jYW1lcmFFcnJvciA9ICcnO1xufVxuXG5mdW5jdGlvbiBvcGVuQ3JvcCggZmlsZU9yQmxvYiApIHtcbiAgaWYgKCBzaWRlVGFibGUucGVuZGluZ09iamVjdFVybCApIFVSTC5yZXZva2VPYmplY3RVUkwoIHNpZGVUYWJsZS5wZW5kaW5nT2JqZWN0VXJsICk7XG4gIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGZpbGVPckJsb2IgKTtcbiAgc2lkZVRhYmxlLnBlbmRpbmdPYmplY3RVcmwgPSB1cmw7XG4gIHN0YXRlLmNyb3BTcmMgID0gdXJsO1xuICBzdGF0ZS5jcm9wT3BlbiA9IHRydWU7XG4gIC8vIENyb3BwZXJKUyBuZWVkcyB0aGUgPGltZz4gdG8gaGF2ZSBhIHNyYyBhbmQgYmUgaW4gdGhlIERPTS4gVGhlIGVsZW1lbnRcbiAgLy8gZXhpc3RzIGFscmVhZHkgKHRlbXBsYXRlIHJlbmRlcnMgdW5jb25kaXRpb25hbGx5OyB2aXNpYmlsaXR5IGlzIGNsYXNzLXRvZ2dsZWQpLFxuICAvLyBzbyB3YWl0IG9uZSBmcmFtZSBmb3IgdGhlIG5ldyBzcmMgdG8gc2V0dGxlLCB0aGVuIGluaXRpYWxpc2UuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuaGV5ZmFtLWNyb3BfX2ltYWdlJyApO1xuICAgIGlmICggISBpbWcgKSByZXR1cm47XG4gICAgc2lkZVRhYmxlLmNyb3BwZXI/LmRlc3Ryb3k/LigpO1xuICAgIHNpZGVUYWJsZS5jcm9wcGVyID0gbmV3IENyb3BwZXIoIGltZywge1xuICAgICAgYXNwZWN0UmF0aW86IDEsXG4gICAgICB2aWV3TW9kZTogICAgMSxcbiAgICAgIGF1dG9Dcm9wQXJlYTogMSxcbiAgICAgIGJhY2tncm91bmQ6ICBmYWxzZSxcbiAgICAgIGRyYWdNb2RlOiAgICAnbW92ZScsXG4gICAgICBndWlkZXM6ICAgICAgZmFsc2UsXG4gICAgICBjZW50ZXI6ICAgICAgZmFsc2UsXG4gICAgICBjcm9wQm94UmVzaXphYmxlOiB0cnVlLFxuICAgICAgdG9nZ2xlRHJhZ01vZGVPbkRibGNsaWNrOiBmYWxzZSxcbiAgICB9ICk7XG4gIH0gKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveUNyb3BwZXIoKSB7XG4gIHNpZGVUYWJsZS5jcm9wcGVyPy5kZXN0cm95Py4oKTtcbiAgc2lkZVRhYmxlLmNyb3BwZXIgPSBudWxsO1xuICBpZiAoIHNpZGVUYWJsZS5wZW5kaW5nT2JqZWN0VXJsICkge1xuICAgIFVSTC5yZXZva2VPYmplY3RVUkwoIHNpZGVUYWJsZS5wZW5kaW5nT2JqZWN0VXJsICk7XG4gICAgc2lkZVRhYmxlLnBlbmRpbmdPYmplY3RVcmwgPSBudWxsO1xuICB9XG4gIHN0YXRlLmNyb3BPcGVuID0gZmFsc2U7XG4gIHN0YXRlLmNyb3BTcmMgID0gJyc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmVQcmVmcygpIHtcbiAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gIGlmICggISBzdGF0ZS5mYW0uc2x1ZyApIHJldHVybjtcbiAgdHJ5IHtcbiAgICBhd2FpdCBmZXRjaCggYCR7aGV5ZmFtLmFwaUJhc2V9LyR7c3RhdGUuZmFtLnNsdWd9L3ByZWZzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSggeyBwcmVmczogc3RhdGUuZmFtLnByZWZzIH0gKSxcbiAgICB9ICk7XG4gIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgLy8gU2lsZW50IGZhaWx1cmUgXHUyMDE0IG5leHQgdG9nZ2xlIHdpbGwgcmV0cnkuXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvaW50ZXJhY3Rpdml0eSc7XG5cbmNvbnN0IFNFVkVOX0RBWVMgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuY29uc3QgeyBzdGF0ZSwgYWN0aW9ucyB9ID0gc3RvcmUoICdoZXlmYW0vbnVkZ2UnLCB7XG4gIHN0YXRlOiB7XG4gICAgdmlzaWJsZTogZmFsc2UsXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICAqZGlzbWlzcygpIHtcbiAgICAgIHN0YXRlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgICB5aWVsZCBmZXRjaCggYCR7aGV5ZmFtLmFwaUJhc2V9L21lL2Rpc21pc3MtbnVkZ2VgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgICAgICB9ICk7XG4gICAgICB9IGNhdGNoICggZXJyICkgeyAvKiBub3QgYmxvY2tpbmcgKi8gfVxuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGluaXQoKSB7XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgIC8vIEFub255bW91cyB2aXNpdG9ycyBuZXZlciBzZWUgdGhlIG51ZGdlLlxuICAgICAgaWYgKCAhIGhleWZhbS51c2VySWQgKSAgICAgICAgICAgcmV0dXJuO1xuICAgICAgLy8gUGVyc2lzdGVudCBkaXNtaXNzYWwgXHUyMDE0IHNlcnZlciBhbHJlYWR5IGtub3dzIHRoZSB1c2VyIGNsb3NlZCBpdC5cbiAgICAgIGlmICggaGV5ZmFtLm51ZGdlRGlzbWlzc2VkQXQgKSAgIHJldHVybjtcbiAgICAgIC8vIE9ubHkgc2hvdyBpZiB0aGUgdXNlciBhY3R1YWxseSBjaG9zZSB0byBza2lwIGR1cmluZyBzaWdudXAuXG4gICAgICBpZiAoICEgaGV5ZmFtLmludml0ZXNTa2lwcGVkQXQgKSByZXR1cm47XG4gICAgICAvLyBUaW1lLWJveCB0aGUgbnVkZ2U6IGFmdGVyIDcgZGF5cyBmcm9tIG9uYm9hcmRpbmcsIHN0b3AgYnVnZ2luZyB0aGVtLlxuICAgICAgY29uc3Qgb25ib2FyZGVkID0gRGF0ZS5wYXJzZSggaGV5ZmFtLm9uYm9hcmRlZEF0ICk7XG4gICAgICBpZiAoICEgb25ib2FyZGVkICkgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgIGlmICggRGF0ZS5ub3coKSAtIG9uYm9hcmRlZCA+IFNFVkVOX0RBWVMgKSAgcmV0dXJuO1xuICAgICAgc3RhdGUudmlzaWJsZSA9IHRydWU7XG4gICAgfSxcbiAgfSxcbn0gKTtcbiIsICJpbXBvcnQgeyBzdG9yZSwgZ2V0Q29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvaW50ZXJhY3Rpdml0eSc7XG5cbmNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHN0b3JlKCAnaGV5ZmFtL2xpZ2h0Ym94Jywge1xuICBzdGF0ZToge1xuICAgIG9wZW46ICAgZmFsc2UsXG4gICAgaW1hZ2VzOiBbXSwgLy8gZnVsbC1yZXMgVVJMcyBmb3IgdGhlIGN1cnJlbnRseS1vcGVuZWQgcG9zdFxuICAgIGluZGV4OiAgMCxcbiAgICBnZXQgY3VycmVudCgpICAgIHsgcmV0dXJuIHN0YXRlLmltYWdlc1sgc3RhdGUuaW5kZXggXSB8fCBudWxsOyB9LFxuICAgIGdldCBjdXJyZW50VXJsKCkgeyByZXR1cm4gc3RhdGUuY3VycmVudD8udXJsIHx8ICcnOyB9LFxuICAgIGdldCBjdXJyZW50QWx0KCkgeyByZXR1cm4gc3RhdGUuY3VycmVudD8uYWx0IHx8ICcnOyB9LFxuICAgIGdldCBoYXNQcmV2KCkgICAgeyByZXR1cm4gc3RhdGUuaW5kZXggPiAwOyB9LFxuICAgIGdldCBoYXNOZXh0KCkgICAgeyByZXR1cm4gc3RhdGUuaW5kZXggPCBzdGF0ZS5pbWFnZXMubGVuZ3RoIC0gMTsgfSxcbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICByZXR1cm4gc3RhdGUuaW1hZ2VzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBgJHsgc3RhdGUuaW5kZXggKyAxIH0gLyAkeyBzdGF0ZS5pbWFnZXMubGVuZ3RoIH1gXG4gICAgICAgIDogJyc7XG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIG9wZW4oIGUgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjdHggICA9IGdldENvbnRleHQoKTtcbiAgICAgIC8vIGBjb250ZXh0Lml0ZW1gIGlzIHRoZSBwb3N0IChzZXQgYnkgZGF0YS13cC1lYWNoIGluIHRoZSBwb3N0LWNhcmQpLFxuICAgICAgLy8gYGNvbnRleHQucGhvdG9gIGlzIHRoZSBzcGVjaWZpYyBpbWFnZSBjbGlja2VkLlxuICAgICAgY29uc3QgcG9zdCAgPSBjdHg/Lml0ZW07XG4gICAgICBjb25zdCBwaG90byA9IGN0eD8ucGhvdG87XG4gICAgICBpZiAoICEgcG9zdCB8fCAhIHBob3RvICkgcmV0dXJuO1xuICAgICAgc3RhdGUuaW1hZ2VzID0gKCBwb3N0LmltYWdlcyB8fCBbXSApLm1hcCggaSA9PiAoIHsgaWQ6IGkuaWQsIHVybDogaS51cmwsIGFsdDogaS5hbHQgfSApICk7XG4gICAgICBzdGF0ZS5pbmRleCAgPSBzdGF0ZS5pbWFnZXMuZmluZEluZGV4KCBpID0+IGkuaWQgPT09IHBob3RvLmlkICk7XG4gICAgICBpZiAoIHN0YXRlLmluZGV4IDwgMCApIHN0YXRlLmluZGV4ID0gMDtcbiAgICAgIHN0YXRlLm9wZW4gPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaGV5ZmFtLWxpZ2h0Ym94LW9wZW4nICk7XG4gICAgfSxcbiAgICBjbG9zZSgpIHtcbiAgICAgIHN0YXRlLm9wZW4gPSBmYWxzZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggJ2hleWZhbS1saWdodGJveC1vcGVuJyApO1xuICAgIH0sXG4gICAgcHJldigpIHsgaWYgKCBzdGF0ZS5oYXNQcmV2ICkgc3RhdGUuaW5kZXgtLTsgfSxcbiAgICBuZXh0KCkgeyBpZiAoIHN0YXRlLmhhc05leHQgKSBzdGF0ZS5pbmRleCsrOyB9LFxuICAgIG9uQmFja2Ryb3AoIGUgKSB7XG4gICAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdD8uY29udGFpbnMoICdoZXlmYW0tbGlnaHRib3gnICkgKSB7XG4gICAgICAgIGFjdGlvbnMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uS2V5KCBlICkge1xuICAgICAgaWYgKCAhIHN0YXRlLm9wZW4gKSByZXR1cm47XG4gICAgICBpZiAoIGUua2V5ID09PSAnRXNjYXBlJyApICAgICBhY3Rpb25zLmNsb3NlKCk7XG4gICAgICBpZiAoIGUua2V5ID09PSAnQXJyb3dMZWZ0JyApICBhY3Rpb25zLnByZXYoKTtcbiAgICAgIGlmICggZS5rZXkgPT09ICdBcnJvd1JpZ2h0JyApIGFjdGlvbnMubmV4dCgpO1xuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIC8qKiBSdW4gb25jZSBhdCBoeWRyYXRpb246IGJpbmQgZ2xvYmFsIGtleSBoYW5kbGVyICsgc3dpcGUgaGFuZGxlcnMuICovXG4gICAgaW5pdCgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgYWN0aW9ucy5vbktleSApO1xuXG4gICAgICAvLyBUb3VjaCBzd2lwZTogc2ltcGxlIGhvcml6b250YWwgdGhyZXNob2xkLiBPbmx5IGFjdGl2ZSB3aGlsZSBvcGVuLlxuICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgZSA9PiB7XG4gICAgICAgIGlmICggISBzdGF0ZS5vcGVuICkgcmV0dXJuO1xuICAgICAgICB0b3VjaFN0YXJ0WCA9IGUudG91Y2hlc1sgMCBdPy5jbGllbnRYIHx8IDA7XG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgZSA9PiB7XG4gICAgICAgIGlmICggISBzdGF0ZS5vcGVuICkgcmV0dXJuO1xuICAgICAgICBjb25zdCBkeCA9ICggZS5jaGFuZ2VkVG91Y2hlc1sgMCBdPy5jbGllbnRYIHx8IDAgKSAtIHRvdWNoU3RhcnRYO1xuICAgICAgICBpZiAoIGR4ID4gIDYwICYmIHN0YXRlLmhhc1ByZXYgKSBhY3Rpb25zLnByZXYoKTtcbiAgICAgICAgaWYgKCBkeCA8IC02MCAmJiBzdGF0ZS5oYXNOZXh0ICkgYWN0aW9ucy5uZXh0KCk7XG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgIH0sXG4gIH0sXG59ICk7XG4iLCAiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2ludGVyYWN0aXZpdHknO1xuXG5jb25zdCB7IHN0YXRlLCBhY3Rpb25zIH0gPSBzdG9yZSggJ2hleWZhbS9kZXYnLCB7XG4gIHN0YXRlOiB7XG4gICAgb3BlbjogICAgZmFsc2UsXG4gICAgYnVzeTogICAgZmFsc2UsXG4gICAgbWVzc2FnZTogJycsXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICB0b2dnbGUoKSB7XG4gICAgICBzdGF0ZS5vcGVuID0gISBzdGF0ZS5vcGVuO1xuICAgIH0sXG4gICAgKnJlc2V0TWUoKSB7XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgIGlmICggISB3aW5kb3cuY29uZmlybSggXCJSZXNldCB5b3VyIGZhbXMgYW5kIHVudmVyaWZ5IHlvdXIgcGhvbmU/IFlvdSdsbCByZS1vbmJvYXJkIG9uIG5leHQgcGFnZSBsb2FkLlwiICkgKSByZXR1cm47XG4gICAgICBzdGF0ZS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHIgPSB5aWVsZCBmZXRjaCggYCR7IGhleWZhbS5hcGlCYXNlIH0vX2Rldi9yZXNldC1tZWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICAgICAgJ1BPU1QnLFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogICAgIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICAgICAgICBib2R5OiAgICAgICAgSlNPTi5zdHJpbmdpZnkoIHsgZGVsZXRlX3VzZXI6IGZhbHNlIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBpZiAoICEgci5vayApIHRocm93IG5ldyBFcnJvciggeWllbGQgci50ZXh0KCkgKTtcbiAgICAgICAgc3RhdGUubWVzc2FnZSA9ICdSZXNldCBkb25lLiBSZWxvYWRpbmdcdTIwMjYnO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiBsb2NhdGlvbi5hc3NpZ24oICcvJyApLCA1MDAgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIHN0YXRlLm1lc3NhZ2UgPSBgUmVzZXQgZmFpbGVkOiAkeyBlcnIubWVzc2FnZSB9YDtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHN0YXRlLmJ1c3kgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgICpzZWVkRGVtbygpIHtcbiAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgc3RhdGUuYnVzeSA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAkeyBoZXlmYW0uYXBpQmFzZSB9L19kZXYvc2VlZC1kZW1vYCwge1xuICAgICAgICAgIG1ldGhvZDogICAgICAnUE9TVCcsXG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiAgICAgeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgICAgICAgIGJvZHk6ICAgICAgICBKU09OLnN0cmluZ2lmeSggeyByZXNldDogdHJ1ZSB9ICksXG4gICAgICAgIH0gKTtcbiAgICAgICAgY29uc3QgaiA9IHlpZWxkIHIuanNvbigpO1xuICAgICAgICBpZiAoICEgci5vayApIHRocm93IG5ldyBFcnJvciggaj8uZXJyb3IgfHwgJ3NlZWQgZmFpbGVkJyApO1xuICAgICAgICBzdGF0ZS5tZXNzYWdlID0gYFNlZWRlZCBcdTIxOTIgJHsgai5yZXN1bHQuZmFtX3VybCB9YDtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4gbG9jYXRpb24uYXNzaWduKCBqLnJlc3VsdC5mYW1fdXJsICksIDgwMCApO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgc3RhdGUubWVzc2FnZSA9IGBTZWVkIGZhaWxlZDogJHsgZXJyLm1lc3NhZ2UgfWA7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzdGF0ZS5idXN5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIC0tLSBTdGF0ZSBzaW11bGF0b3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gVGhlc2UgZmxpcCBzdG9yZSBzdGF0ZSBkaXJlY3RseSBzbyB5b3UgY2FuIHJldmlldy9zY3JlZW5zaG90IGVhY2hcbiAgICAvLyB2aXN1YWwgc3RhdGUgd2l0aG91dCBkcml2aW5nIGl0IHRocm91Z2ggcmVhbCBpbnRlcmFjdGlvbnMuIElkZW1wb3RlbnRcbiAgICAvLyB0b2dnbGVzIHdoZXJlIGl0IG1ha2VzIHNlbnNlOyBcIlJlc2V0XCIgcHV0cyBldmVyeXRoaW5nIGJhY2sgdG8gZGVmYXVsdC5cbiAgICBzaW1OdWRnZSgpIHtcbiAgICAgIGNvbnN0IHMgPSBzdG9yZSggJ2hleWZhbS9udWRnZScgKS5zdGF0ZTtcbiAgICAgIHMudmlzaWJsZSA9ICEgcy52aXNpYmxlO1xuICAgIH0sXG4gICAgc2ltRWRpdG9yKCkge1xuICAgICAgLy8gT3BlbiB0aGUgZWRpdG9yIG9uIHRoZSBmaXJzdCBwb3N0IGluIHRoZSBmZWVkLCBvciBhIGZha2UgcG9zdCBpZiBlbXB0eS5cbiAgICAgIGNvbnN0IGZlZWQgPSBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlO1xuICAgICAgY29uc3QgcG9zdCA9IGZlZWQucG9zdHM/LlsgMCBdIHx8IHtcbiAgICAgICAgaWQ6IC0xLCBib2R5OiAnU2ltdWxhdGVkIHBvc3QgYm9keSBcdTIwMTQgZWRpdCBtZSB0byB0ZXN0IHRoZSBlZGl0b3IuJyxcbiAgICAgICAgaW1hZ2VzOiBbXSwgcG9sbDogbnVsbCxcbiAgICAgIH07XG4gICAgICBzdG9yZSggJ2hleWZhbS9jb21wb3NlcicgKS5hY3Rpb25zLm9wZW5FZGl0b3IoIHBvc3QgKTtcbiAgICB9LFxuICAgIHNpbURlbGV0ZSgpIHtcbiAgICAgIGNvbnN0IGZlZWQgPSBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlO1xuICAgICAgZmVlZC5kZWxldGVUYXJnZXRJZCA9IGZlZWQucG9zdHM/LlsgMCBdPy5pZCB8fCAtMTtcbiAgICAgIGZlZWQuZGVsZXRlRXJyb3IgICAgPSAnJztcbiAgICAgIGZlZWQuZGVsZXRpbmcgICAgICAgPSBmYWxzZTtcbiAgICAgIGZlZWQuZGVsZXRlT3BlbiAgICAgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaGV5ZmFtLW1vZGFsLW9wZW4nICk7XG4gICAgfSxcbiAgICBzaW1EZWxldGluZygpIHtcbiAgICAgIC8vIE9wZW4gdGhlIGNvbmZpcm0sIHRoZW4gZmxpcCBpbnRvIHRoZSBcImRlbGV0aW5nXCIgcGVuZGluZyBzdGF0ZS5cbiAgICAgIGFjdGlvbnMuc2ltRGVsZXRlKCk7XG4gICAgICBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlLmRlbGV0aW5nID0gdHJ1ZTtcbiAgICB9LFxuICAgIHNpbURlbGV0ZUVycm9yKCkge1xuICAgICAgYWN0aW9ucy5zaW1EZWxldGUoKTtcbiAgICAgIGNvbnN0IGZlZWQgPSBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlO1xuICAgICAgZmVlZC5kZWxldGluZyAgICA9IGZhbHNlO1xuICAgICAgZmVlZC5kZWxldGVFcnJvciA9ICdDb3VsZCBub3QgZGVsZXRlLiBUcnkgYWdhaW4uJztcbiAgICB9LFxuICAgIHNpbVBvbGxNb2RlKCkge1xuICAgICAgY29uc3QgYyA9IHN0b3JlKCAnaGV5ZmFtL2NvbXBvc2VyJyApLnN0YXRlO1xuICAgICAgYy5wb2xsTW9kZSA9ICEgYy5wb2xsTW9kZTtcbiAgICB9LFxuICAgIHNpbVNlbmRpbmcoKSB7XG4gICAgICBjb25zdCBjID0gc3RvcmUoICdoZXlmYW0vY29tcG9zZXInICkuc3RhdGU7XG4gICAgICBjLnN1Ym1pdHRpbmcgPSAhIGMuc3VibWl0dGluZztcbiAgICB9LFxuICAgIHNpbUNvbXBvc2VyRXJyb3IoKSB7XG4gICAgICBjb25zdCBjID0gc3RvcmUoICdoZXlmYW0vY29tcG9zZXInICkuc3RhdGU7XG4gICAgICBjLmVycm9yID0gYy5lcnJvciA/ICcnIDogJ0NvdWxkIG5vdCBwb3N0LiBUcnkgYWdhaW4uJztcbiAgICB9LFxuICAgIHNpbUVtcHR5RmVlZCgpIHtcbiAgICAgIGNvbnN0IGZlZWQgPSBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlO1xuICAgICAgaWYgKCBmZWVkLl9fc3Rhc2hlZFBvc3RzICkge1xuICAgICAgICBmZWVkLnBvc3RzICAgICAgICAgID0gZmVlZC5fX3N0YXNoZWRQb3N0cztcbiAgICAgICAgZmVlZC5oYXNQb3N0cyAgICAgICA9IGZlZWQucG9zdHMubGVuZ3RoID4gMDtcbiAgICAgICAgZmVlZC5fX3N0YXNoZWRQb3N0cyA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZWVkLl9fc3Rhc2hlZFBvc3RzID0gZmVlZC5wb3N0cztcbiAgICAgICAgZmVlZC5wb3N0cyAgICAgICAgICA9IFtdO1xuICAgICAgICBmZWVkLmhhc1Bvc3RzICAgICAgID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBzaW1SZXNldCgpIHtcbiAgICAgIGNvbnN0IGMgPSBzdG9yZSggJ2hleWZhbS9jb21wb3NlcicgKTtcbiAgICAgIGlmICggYy5zdGF0ZS5lZGl0b3JPcGVuICkgYy5hY3Rpb25zLmNsb3NlRWRpdG9yKCk7XG4gICAgICBjLnN0YXRlLnBvbGxNb2RlICAgPSBmYWxzZTtcbiAgICAgIGMuc3RhdGUuc3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgYy5zdGF0ZS5lcnJvciAgICAgID0gJyc7XG5cbiAgICAgIGNvbnN0IGYgPSBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlO1xuICAgICAgZi5kZWxldGVPcGVuICAgICA9IGZhbHNlO1xuICAgICAgZi5kZWxldGVUYXJnZXRJZCA9IDA7XG4gICAgICBmLmRlbGV0aW5nICAgICAgID0gZmFsc2U7XG4gICAgICBmLmRlbGV0ZUVycm9yICAgID0gJyc7XG4gICAgICBpZiAoIGYuX19zdGFzaGVkUG9zdHMgKSB7XG4gICAgICAgIGYucG9zdHMgICAgICAgICAgPSBmLl9fc3Rhc2hlZFBvc3RzO1xuICAgICAgICBmLmhhc1Bvc3RzICAgICAgID0gZi5wb3N0cy5sZW5ndGggPiAwO1xuICAgICAgICBmLl9fc3Rhc2hlZFBvc3RzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggJ2hleWZhbS1tb2RhbC1vcGVuJyApO1xuXG4gICAgICBzdG9yZSggJ2hleWZhbS9udWRnZScgKS5zdGF0ZS52aXNpYmxlID0gZmFsc2U7XG4gICAgfSxcbiAgfSxcbn0gKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7OztBQUFBO0FBQUE7QUFVQSxLQUFDLFNBQVUsUUFBUSxTQUFTO0FBQzFCLGFBQU8sWUFBWSxZQUFZLE9BQU8sV0FBVyxjQUFjLE9BQU8sVUFBVSxRQUFRLElBQ3hGLE9BQU8sV0FBVyxjQUFjLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FDMUQsU0FBUyxPQUFPLGVBQWUsY0FBYyxhQUFhLFVBQVUsTUFBTSxPQUFPLFVBQVUsUUFBUTtBQUFBLElBQ3RHLEdBQUcsVUFBTyxXQUFZO0FBQUU7QUFFdEIsZUFBUyxRQUFRLEdBQUcsR0FBRztBQUNyQixZQUFJLElBQUksT0FBTyxLQUFLLENBQUM7QUFDckIsWUFBSSxPQUFPLHVCQUF1QjtBQUNoQyxjQUFJLElBQUksT0FBTyxzQkFBc0IsQ0FBQztBQUN0QyxnQkFBTSxJQUFJLEVBQUUsT0FBTyxTQUFVQSxJQUFHO0FBQzlCLG1CQUFPLE9BQU8seUJBQXlCLEdBQUdBLEVBQUMsRUFBRTtBQUFBLFVBQy9DLENBQUMsSUFB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QUFjLEVBQUU7QUFDcEMsVUFBSyxLQUFLLGdCQUFpQjtBQUN6QixhQUFLLFFBQWlCLEtBQUs7QUFDM0IsYUFBSyxXQUFpQixLQUFLLE1BQU0sU0FBUztBQUMxQyxhQUFLLGlCQUFpQjtBQUFBLE1BQ3hCLE9BQU87QUFDTCxhQUFLLGlCQUFpQixLQUFLO0FBQzNCLGFBQUssUUFBaUIsQ0FBQztBQUN2QixhQUFLLFdBQWlCO0FBQUEsTUFDeEI7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQ1QsWUFBTSxJQUFJQSxRQUFPLGlCQUFrQjtBQUNuQyxVQUFLLEVBQUUsTUFBTSxXQUFhLEdBQUUsUUFBUSxZQUFZO0FBQ2hELFFBQUUsTUFBTSxXQUFhO0FBQ3JCLFFBQUUsTUFBTSxhQUFhO0FBQ3JCLFFBQUUsTUFBTSxRQUFhO0FBRXJCLFlBQU0sSUFBSUEsUUFBTyxhQUFjLEVBQUU7QUFDakMsUUFBRSxhQUFpQjtBQUNuQixRQUFFLGlCQUFpQjtBQUNuQixRQUFFLFdBQWlCO0FBQ25CLFFBQUUsY0FBaUI7QUFDbkIsVUFBSyxFQUFFLGdCQUFpQjtBQUN0QixVQUFFLFFBQWlCLEVBQUU7QUFDckIsVUFBRSxXQUFpQixFQUFFLE1BQU0sU0FBUztBQUNwQyxVQUFFLGlCQUFpQjtBQUFBLE1BQ3JCO0FBQ0EsZUFBUyxLQUFLLFVBQVUsT0FBUSxtQkFBb0I7QUFFcEQsTUFBQUEsUUFBTyxjQUFlLEVBQUUsTUFBTSxVQUFVO0FBQUEsSUFDMUM7QUFBQSxFQUNGO0FBQ0YsQ0FBRTsiLAogICJuYW1lcyI6IFsiciIsICJvIiwgImlzUG9zaXRpdmVOdW1iZXIiLCAiYXNzaWduIiwgImxpc3RlbmVyIiwgImdldCIsICJzZXQiLCAibG9jYXRpb24iLCAicmVuZGVyIiwgInByZXZpZXciLCAiY2hhbmdlIiwgImNoZWNrIiwgImdldERhdGEiLCAic2V0RGF0YSIsICJDcm9wcGVyIiwgImRvbmUiLCAic3RvcmUiLCAiZ2V0Q29udGV4dCIsICJzdG9yZSIsICJnZXRDb250ZXh0IiwgInN0b3JlIiwgImdldENvbnRleHQiLCAic2V0IiwgInN0b3JlIiwgImtleVBhdGgiLCAicmVzIiwgImVtb2ppIiwgInZlcnNpb24iLCAiXyIsICJyZXN1bHQiLCAiY3VzdG9tRW1vamlJbmRleCIsICJyZXN1bHRzIiwgImN1cnJlbnRNYXAiLCAiTUlOX1NFQVJDSF9URVhUX0xFTkdUSCIsICJ1bmlxQnkiLCAic2V0IiwgInN0YXRlIiwgImFjdGlvbnMiLCAiREVGQVVMVF9EQVRBX1NPVVJDRSIsICJERUZBVUxUX0xPQ0FMRSIsICJzdG9yZSIsICJnZXRDb250ZXh0IiwgInN0b3JlIiwgImdldENvbnRleHQiLCAiYXV0b1NpemUiLCAiQVVUT1NJWkVfTUFYIiwgInN0b3JlIiwgInN0b3JlIiwgImdldENvbnRleHQiLCAic3RhdGUiLCAic3RvcmUiLCAiZ2V0Q29udGV4dCIsICJzdG9yZSIsICJzdG9yZSIsICJzdG9yZSIsICJzdGF0ZSIsICJhY3Rpb25zIiwgInN0b3JlIiwgInN0b3JlIiwgInN0YXRlIiwgImFjdGlvbnMiLCAic3RvcmUiLCAic3RvcmUiLCAic3RhdGUiLCAiYWN0aW9ucyIsICJzZXRTdGFnZSIsICJub3JtYWxpemVQaG9uZSIsICJzdG9yZSIsICJzdGF0ZSIsICJhY3Rpb25zIiwgInN0b3JlIiwgInJlY29tcHV0ZVZpc2liaWxpdHkiLCAiQ3JvcHBlciIsICJzdG9yZSIsICJzdGF0ZSIsICJhY3Rpb25zIiwgInN0b3JlIiwgImdldENvbnRleHQiLCAic3RhdGUiLCAiYWN0aW9ucyIsICJzdG9yZSIsICJzdGF0ZSIsICJhY3Rpb25zIl0KfQo=
