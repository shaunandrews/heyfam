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
var newOption = (placeholder) => ({ id: nextOptionId++, text: "", emoji: "", placeholder });
var initialOptions = () => [
  newOption("Option 1"),
  newOption("Option 2")
];
var CLOSES_PRESETS = [
  { value: "", label: "Never", hours: 0 },
  { value: "1h", label: "1 hour", hours: 1 },
  { value: "4h", label: "4 hours", hours: 4 },
  { value: "1d", label: "1 day", hours: 24 },
  { value: "1w", label: "1 week", hours: 168 }
];
var blankState = () => ({
  body: "",
  pending: [],
  pollMode: false,
  optionList: initialOptions(),
  closesPreset: ""
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
    closesPreset: "",
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
    },
    /**
     * Closes presets decorated with `is_selected` so the template can drive
     * `data-wp-class--is-active` directly off the loop context. Computed each
     * read; cheap (five entries) and keeps state.closesPreset as the single
     * source of truth.
     */
    get closesPresets() {
      return CLOSES_PRESETS.map((p) => ({ ...p, is_selected: p.value === state.closesPreset }));
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
    /**
     * Open the singleton emoji picker anchored on the option's emoji button.
     * Closing happens on selection or outside-click (handled in openEmojiPicker).
     * Clicking the button a second time toggles the picker closed.
     */
    pickOptionEmoji(e) {
      const ctx = getContext2();
      const opt = state.optionList.find((o) => o.id === ctx?.option?.id);
      if (!opt) return;
      const btn = e.currentTarget;
      if (emojiPickerIsFor(opt.id)) {
        closeEmojiPicker();
        return;
      }
      openEmojiPicker(btn, opt.id, (emoji) => {
        opt.emoji = emoji;
      });
    },
    clearOptionEmoji() {
      const ctx = getContext2();
      const opt = state.optionList.find((o) => o.id === ctx?.option?.id);
      if (opt) opt.emoji = "";
    },
    pickClosesPreset(e) {
      const v = e.currentTarget?.dataset?.value ?? "";
      state.closesPreset = v;
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
          closesPreset: state.closesPreset
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
          return {
            id,
            text: o.label || "",
            emoji: o.emoji || "",
            placeholder: `Option ${o.index + 1}`
          };
        });
        while (state.optionList.length < MIN_OPTIONS) {
          state.optionList.push(newOption(`Option ${state.optionList.length + 1}`));
        }
        state.closesPreset = "";
      } else {
        state.pollMode = false;
        state.optionList = initialOptions();
        state.closesPreset = "";
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
        state.closesPreset = s.closesPreset;
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
        const rows = state.optionList.map((o) => ({ label: o.text.trim(), emoji: (o.emoji || "").trim() })).filter((r) => r.label !== "");
        if (rows.length < MIN_OPTIONS) {
          state.error = `A poll needs at least ${MIN_OPTIONS} options.`;
          state.submitting = false;
          return;
        }
        for (const r of rows) {
          fd.append("poll_options[]", r.label);
          fd.append("poll_option_emojis[]", r.emoji);
        }
        const preset = CLOSES_PRESETS.find((p) => p.value === state.closesPreset);
        if (preset && preset.hours > 0) {
          const closes = new Date(Date.now() + preset.hours * 3600 * 1e3);
          fd.append("poll_closes_at", closes.toISOString());
        }
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
          state.closesPreset = "";
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
var emojiPicker = null;
var emojiPickerOptId = null;
var emojiPickerOutside = null;
var emojiPickerCallback = null;
function getEmojiPicker() {
  if (emojiPicker) return emojiPicker;
  emojiPicker = document.createElement("emoji-picker");
  emojiPicker.classList.add("heyfam-emoji-picker");
  emojiPicker.style.position = "absolute";
  emojiPicker.style.zIndex = "1000";
  emojiPicker.style.display = "none";
  emojiPicker.addEventListener("emoji-click", (ev) => {
    if (emojiPickerCallback) emojiPickerCallback(ev.detail.unicode);
    closeEmojiPicker();
  });
  document.body.appendChild(emojiPicker);
  return emojiPicker;
}
function emojiPickerIsFor(optId) {
  return emojiPicker && emojiPicker.style.display !== "none" && emojiPickerOptId === optId;
}
function openEmojiPicker(btn, optId, cb) {
  const p = getEmojiPicker();
  emojiPickerOptId = optId;
  emojiPickerCallback = cb;
  const rect = btn.getBoundingClientRect();
  const h = 400;
  const fits = rect.bottom + h + 12 < window.innerHeight;
  const top = fits ? rect.bottom + window.scrollY + 6 : rect.top + window.scrollY - h - 6;
  const left = Math.max(8, Math.min(rect.left + window.scrollX, window.innerWidth - 360));
  p.style.top = `${top}px`;
  p.style.left = `${left}px`;
  p.style.display = "";
  if (emojiPickerOutside) document.removeEventListener("click", emojiPickerOutside);
  emojiPickerOutside = (ev) => {
    if (!p.contains(ev.target) && !btn.contains(ev.target)) closeEmojiPicker();
  };
  setTimeout(() => document.addEventListener("click", emojiPickerOutside), 0);
}
function closeEmojiPicker() {
  if (emojiPicker) emojiPicker.style.display = "none";
  emojiPickerOptId = null;
  emojiPickerCallback = null;
  if (emojiPickerOutside) {
    document.removeEventListener("click", emojiPickerOutside);
    emojiPickerOutside = null;
  }
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
      const feed = store5("heyfam/feed");
      const posts = Array.isArray(feed.state.posts) ? feed.state.posts : null;
      const post = posts ? posts.find((p) => p.id === pid) : null;
      const poll = post?.poll;
      if (!poll || poll.closed) return;
      if (poll.my_vote === idx) return;
      const snapshot = snapshotPoll(poll);
      const me = {
        user_id: heyfam.userId,
        name: heyfam.userName || "You",
        avatar_url: heyfam.userAvatarUrl
      };
      applyVote(poll, idx, me);
      try {
        const r = yield fetch(`${heyfam.apiBase}/${heyfam.famSlug}/poll-vote`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json", "X-WP-Nonce": heyfam.nonce },
          body: JSON.stringify({ post_id: pid, option_index: idx })
        });
        if (!r.ok) {
          restorePoll(poll, snapshot);
          const body = yield r.json().catch(() => ({}));
          if (body?.error === "closed") {
            alert("This poll has closed.");
          } else {
            alert("Could not vote. Try again.");
          }
          return;
        }
        feed.callbacks?.refresh?.(heyfam);
      } catch (err) {
        restorePoll(poll, snapshot);
        alert("Could not vote. Try again.");
      }
    }
  }
});
function applyVote(poll, newIdx, me) {
  const prev = poll.my_vote;
  if (prev === newIdx) return;
  const opts = poll.options || [];
  if (newIdx < 0 || newIdx >= opts.length) return;
  opts[newIdx].count += 1;
  if (prev >= 0 && prev < opts.length) {
    opts[prev].count = Math.max(0, opts[prev].count - 1);
  } else {
    poll.total_votes += 1;
  }
  if (me && me.user_id) {
    for (const opt of opts) {
      if (!Array.isArray(opt.voters)) opt.voters = [];
    }
    if (prev >= 0 && prev < opts.length) {
      opts[prev].voters = opts[prev].voters.filter((v) => v.user_id !== me.user_id);
    }
    if (!opts[newIdx].voters.some((v) => v.user_id === me.user_id)) {
      opts[newIdx].voters.push({
        user_id: me.user_id,
        name: me.name,
        avatar_url: me.avatar_url
      });
    }
  }
  poll.my_vote = newIdx;
  poll.has_voted = true;
  const total = poll.total_votes;
  for (let i = 0; i < opts.length; i++) {
    opts[i].is_my_vote = i === newIdx;
    const pct = total > 0 ? Math.round(opts[i].count / total * 100) : 0;
    opts[i].percent = pct;
    opts[i].bar_style = `width:${pct}%;`;
  }
}
function snapshotPoll(poll) {
  return {
    my_vote: poll.my_vote,
    has_voted: poll.has_voted,
    total_votes: poll.total_votes,
    options: poll.options.map((o) => ({
      count: o.count,
      percent: o.percent,
      bar_style: o.bar_style,
      is_my_vote: o.is_my_vote,
      voters: Array.isArray(o.voters) ? o.voters.slice() : []
    }))
  };
}
function restorePoll(poll, snap) {
  poll.my_vote = snap.my_vote;
  poll.has_voted = snap.has_voted;
  poll.total_votes = snap.total_votes;
  for (let i = 0; i < snap.options.length; i++) {
    const s = snap.options[i];
    const o = poll.options[i];
    o.count = s.count;
    o.percent = s.percent;
    o.bar_style = s.bar_style;
    o.is_my_vote = s.is_my_vote;
    o.voters = s.voters.slice();
  }
}

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nyb3BwZXJqcy9kaXN0L2Nyb3BwZXIuanMiLCAiLi4vc3JjL2ludGVyYWN0aXZpdHkvcm91dGVyLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L2NvbXBvc2VyLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9lbW9qaS1waWNrZXItZWxlbWVudC9kYXRhYmFzZS5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZW1vamktcGlja2VyLWVsZW1lbnQvcGlja2VyLmpzIiwgIi4uL3NyYy9saWIvbWVkaWEuanMiLCAiLi4vc3JjL2ludGVyYWN0aXZpdHkvcmVhY3Rpb25zLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L2NvbW1lbnRzLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L3BvbGxzLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L2ZlZWQtcG9sbC5qcyIsICIuLi9zcmMvbGliL2RvbS5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9sYW5kaW5nLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L3B1c2gtc3Vic2NyaWJlLmpzIiwgIi4uL3NyYy9pbnRlcmFjdGl2aXR5L3NpZ251cC5qcyIsICIuLi9zcmMvbGliL3Bob25lLmpzIiwgIi4uL3NyYy9saWIvc2x1Zy5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9sb2dpbi5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9pbnZpdGUuanMiLCAiLi4vc3JjL2ludGVyYWN0aXZpdHkvYWNjb3VudC5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9udWRnZS5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9saWdodGJveC5qcyIsICIuLi9zcmMvaW50ZXJhY3Rpdml0eS9kZXYtYmFubmVyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiFcbiAqIENyb3BwZXIuanMgdjEuNi4yXG4gKiBodHRwczovL2Zlbmd5dWFuY2hlbi5naXRodWIuaW8vY3JvcHBlcmpzXG4gKlxuICogQ29weXJpZ2h0IDIwMTUtcHJlc2VudCBDaGVuIEZlbmd5dWFuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDI0LTA0LTIxVDA3OjQzOjA1LjMzNVpcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Dcm9wcGVyID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBvd25LZXlzKGUsIHIpIHtcbiAgICB2YXIgdCA9IE9iamVjdC5rZXlzKGUpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgICByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTtcbiAgICAgIH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMihlKSB7XG4gICAgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTtcbiAgICAgIHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTtcbiAgICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgdCB8fCAhdCkgcmV0dXJuIHQ7XG4gICAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gICAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgaSkgcmV0dXJuIGk7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gICAgfVxuICAgIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG4gIH1cbiAgZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkge1xuICAgIHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICAgIHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiO1xuICB9XG4gIGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICAgIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICAgIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgbztcbiAgICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICAgIH0sIF90eXBlb2Yobyk7XG4gIH1cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpO1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG4gIH1cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cbiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgIGlmICghbykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB9XG4gIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICAgIHJldHVybiBhcnIyO1xuICB9XG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG4gIHZhciBXSU5ET1cgPSBJU19CUk9XU0VSID8gd2luZG93IDoge307XG4gIHZhciBJU19UT1VDSF9ERVZJQ0UgPSBJU19CUk9XU0VSICYmIFdJTkRPVy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyAnb250b3VjaHN0YXJ0JyBpbiBXSU5ET1cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZmFsc2U7XG4gIHZhciBIQVNfUE9JTlRFUl9FVkVOVCA9IElTX0JST1dTRVIgPyAnUG9pbnRlckV2ZW50JyBpbiBXSU5ET1cgOiBmYWxzZTtcbiAgdmFyIE5BTUVTUEFDRSA9ICdjcm9wcGVyJztcblxuICAvLyBBY3Rpb25zXG4gIHZhciBBQ1RJT05fQUxMID0gJ2FsbCc7XG4gIHZhciBBQ1RJT05fQ1JPUCA9ICdjcm9wJztcbiAgdmFyIEFDVElPTl9NT1ZFID0gJ21vdmUnO1xuICB2YXIgQUNUSU9OX1pPT00gPSAnem9vbSc7XG4gIHZhciBBQ1RJT05fRUFTVCA9ICdlJztcbiAgdmFyIEFDVElPTl9XRVNUID0gJ3cnO1xuICB2YXIgQUNUSU9OX1NPVVRIID0gJ3MnO1xuICB2YXIgQUNUSU9OX05PUlRIID0gJ24nO1xuICB2YXIgQUNUSU9OX05PUlRIX0VBU1QgPSAnbmUnO1xuICB2YXIgQUNUSU9OX05PUlRIX1dFU1QgPSAnbncnO1xuICB2YXIgQUNUSU9OX1NPVVRIX0VBU1QgPSAnc2UnO1xuICB2YXIgQUNUSU9OX1NPVVRIX1dFU1QgPSAnc3cnO1xuXG4gIC8vIENsYXNzZXNcbiAgdmFyIENMQVNTX0NST1AgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWNyb3BcIik7XG4gIHZhciBDTEFTU19ESVNBQkxFRCA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZGlzYWJsZWRcIik7XG4gIHZhciBDTEFTU19ISURERU4gPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWhpZGRlblwiKTtcbiAgdmFyIENMQVNTX0hJREUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWhpZGVcIik7XG4gIHZhciBDTEFTU19JTlZJU0lCTEUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWludmlzaWJsZVwiKTtcbiAgdmFyIENMQVNTX01PREFMID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1tb2RhbFwiKTtcbiAgdmFyIENMQVNTX01PVkUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLW1vdmVcIik7XG5cbiAgLy8gRGF0YSBrZXlzXG4gIHZhciBEQVRBX0FDVElPTiA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCJBY3Rpb25cIik7XG4gIHZhciBEQVRBX1BSRVZJRVcgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiUHJldmlld1wiKTtcblxuICAvLyBEcmFnIG1vZGVzXG4gIHZhciBEUkFHX01PREVfQ1JPUCA9ICdjcm9wJztcbiAgdmFyIERSQUdfTU9ERV9NT1ZFID0gJ21vdmUnO1xuICB2YXIgRFJBR19NT0RFX05PTkUgPSAnbm9uZSc7XG5cbiAgLy8gRXZlbnRzXG4gIHZhciBFVkVOVF9DUk9QID0gJ2Nyb3AnO1xuICB2YXIgRVZFTlRfQ1JPUF9FTkQgPSAnY3JvcGVuZCc7XG4gIHZhciBFVkVOVF9DUk9QX01PVkUgPSAnY3JvcG1vdmUnO1xuICB2YXIgRVZFTlRfQ1JPUF9TVEFSVCA9ICdjcm9wc3RhcnQnO1xuICB2YXIgRVZFTlRfREJMQ0xJQ0sgPSAnZGJsY2xpY2snO1xuICB2YXIgRVZFTlRfVE9VQ0hfU1RBUlQgPSBJU19UT1VDSF9ERVZJQ0UgPyAndG91Y2hzdGFydCcgOiAnbW91c2Vkb3duJztcbiAgdmFyIEVWRU5UX1RPVUNIX01PVkUgPSBJU19UT1VDSF9ERVZJQ0UgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xuICB2YXIgRVZFTlRfVE9VQ0hfRU5EID0gSVNfVE9VQ0hfREVWSUNFID8gJ3RvdWNoZW5kIHRvdWNoY2FuY2VsJyA6ICdtb3VzZXVwJztcbiAgdmFyIEVWRU5UX1BPSU5URVJfRE9XTiA9IEhBU19QT0lOVEVSX0VWRU5UID8gJ3BvaW50ZXJkb3duJyA6IEVWRU5UX1RPVUNIX1NUQVJUO1xuICB2YXIgRVZFTlRfUE9JTlRFUl9NT1ZFID0gSEFTX1BPSU5URVJfRVZFTlQgPyAncG9pbnRlcm1vdmUnIDogRVZFTlRfVE9VQ0hfTU9WRTtcbiAgdmFyIEVWRU5UX1BPSU5URVJfVVAgPSBIQVNfUE9JTlRFUl9FVkVOVCA/ICdwb2ludGVydXAgcG9pbnRlcmNhbmNlbCcgOiBFVkVOVF9UT1VDSF9FTkQ7XG4gIHZhciBFVkVOVF9SRUFEWSA9ICdyZWFkeSc7XG4gIHZhciBFVkVOVF9SRVNJWkUgPSAncmVzaXplJztcbiAgdmFyIEVWRU5UX1dIRUVMID0gJ3doZWVsJztcbiAgdmFyIEVWRU5UX1pPT00gPSAnem9vbSc7XG5cbiAgLy8gTWltZSB0eXBlc1xuICB2YXIgTUlNRV9UWVBFX0pQRUcgPSAnaW1hZ2UvanBlZyc7XG5cbiAgLy8gUmVnRXhwc1xuICB2YXIgUkVHRVhQX0FDVElPTlMgPSAvXmV8d3xzfG58c2V8c3d8bmV8bnd8YWxsfGNyb3B8bW92ZXx6b29tJC87XG4gIHZhciBSRUdFWFBfREFUQV9VUkwgPSAvXmRhdGE6LztcbiAgdmFyIFJFR0VYUF9EQVRBX1VSTF9KUEVHID0gL15kYXRhOmltYWdlXFwvanBlZztiYXNlNjQsLztcbiAgdmFyIFJFR0VYUF9UQUdfTkFNRSA9IC9eaW1nfGNhbnZhcyQvaTtcblxuICAvLyBNaXNjXG4gIC8vIEluc3BpcmVkIGJ5IHRoZSBkZWZhdWx0IHdpZHRoIGFuZCBoZWlnaHQgb2YgYSBjYW52YXMgZWxlbWVudC5cbiAgdmFyIE1JTl9DT05UQUlORVJfV0lEVEggPSAyMDA7XG4gIHZhciBNSU5fQ09OVEFJTkVSX0hFSUdIVCA9IDEwMDtcblxuICB2YXIgREVGQVVMVFMgPSB7XG4gICAgLy8gRGVmaW5lIHRoZSB2aWV3IG1vZGUgb2YgdGhlIGNyb3BwZXJcbiAgICB2aWV3TW9kZTogMCxcbiAgICAvLyAwLCAxLCAyLCAzXG5cbiAgICAvLyBEZWZpbmUgdGhlIGRyYWdnaW5nIG1vZGUgb2YgdGhlIGNyb3BwZXJcbiAgICBkcmFnTW9kZTogRFJBR19NT0RFX0NST1AsXG4gICAgLy8gJ2Nyb3AnLCAnbW92ZScgb3IgJ25vbmUnXG5cbiAgICAvLyBEZWZpbmUgdGhlIGluaXRpYWwgYXNwZWN0IHJhdGlvIG9mIHRoZSBjcm9wIGJveFxuICAgIGluaXRpYWxBc3BlY3RSYXRpbzogTmFOLFxuICAgIC8vIERlZmluZSB0aGUgYXNwZWN0IHJhdGlvIG9mIHRoZSBjcm9wIGJveFxuICAgIGFzcGVjdFJhdGlvOiBOYU4sXG4gICAgLy8gQW4gb2JqZWN0IHdpdGggdGhlIHByZXZpb3VzIGNyb3BwaW5nIHJlc3VsdCBkYXRhXG4gICAgZGF0YTogbnVsbCxcbiAgICAvLyBBIHNlbGVjdG9yIGZvciBhZGRpbmcgZXh0cmEgY29udGFpbmVycyB0byBwcmV2aWV3XG4gICAgcHJldmlldzogJycsXG4gICAgLy8gUmUtcmVuZGVyIHRoZSBjcm9wcGVyIHdoZW4gcmVzaXplIHRoZSB3aW5kb3dcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIC8vIFJlc3RvcmUgdGhlIGNyb3BwZWQgYXJlYSBhZnRlciByZXNpemUgdGhlIHdpbmRvd1xuICAgIHJlc3RvcmU6IHRydWUsXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgaW1hZ2UgaXMgYSBjcm9zcy1vcmlnaW4gaW1hZ2VcbiAgICBjaGVja0Nyb3NzT3JpZ2luOiB0cnVlLFxuICAgIC8vIENoZWNrIHRoZSBjdXJyZW50IGltYWdlJ3MgRXhpZiBPcmllbnRhdGlvbiBpbmZvcm1hdGlvblxuICAgIGNoZWNrT3JpZW50YXRpb246IHRydWUsXG4gICAgLy8gU2hvdyB0aGUgYmxhY2sgbW9kYWxcbiAgICBtb2RhbDogdHJ1ZSxcbiAgICAvLyBTaG93IHRoZSBkYXNoZWQgbGluZXMgZm9yIGd1aWRpbmdcbiAgICBndWlkZXM6IHRydWUsXG4gICAgLy8gU2hvdyB0aGUgY2VudGVyIGluZGljYXRvciBmb3IgZ3VpZGluZ1xuICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAvLyBTaG93IHRoZSB3aGl0ZSBtb2RhbCB0byBoaWdobGlnaHQgdGhlIGNyb3AgYm94XG4gICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgIC8vIFNob3cgdGhlIGdyaWQgYmFja2dyb3VuZFxuICAgIGJhY2tncm91bmQ6IHRydWUsXG4gICAgLy8gRW5hYmxlIHRvIGNyb3AgdGhlIGltYWdlIGF1dG9tYXRpY2FsbHkgd2hlbiBpbml0aWFsaXplXG4gICAgYXV0b0Nyb3A6IHRydWUsXG4gICAgLy8gRGVmaW5lIHRoZSBwZXJjZW50YWdlIG9mIGF1dG9tYXRpYyBjcm9wcGluZyBhcmVhIHdoZW4gaW5pdGlhbGl6ZXNcbiAgICBhdXRvQ3JvcEFyZWE6IDAuOCxcbiAgICAvLyBFbmFibGUgdG8gbW92ZSB0aGUgaW1hZ2VcbiAgICBtb3ZhYmxlOiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0byByb3RhdGUgdGhlIGltYWdlXG4gICAgcm90YXRhYmxlOiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0byBzY2FsZSB0aGUgaW1hZ2VcbiAgICBzY2FsYWJsZTogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gem9vbSB0aGUgaW1hZ2VcbiAgICB6b29tYWJsZTogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gem9vbSB0aGUgaW1hZ2UgYnkgZHJhZ2dpbmcgdG91Y2hcbiAgICB6b29tT25Ub3VjaDogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gem9vbSB0aGUgaW1hZ2UgYnkgd2hlZWxpbmcgbW91c2VcbiAgICB6b29tT25XaGVlbDogdHJ1ZSxcbiAgICAvLyBEZWZpbmUgem9vbSByYXRpbyB3aGVuIHpvb20gdGhlIGltYWdlIGJ5IHdoZWVsaW5nIG1vdXNlXG4gICAgd2hlZWxab29tUmF0aW86IDAuMSxcbiAgICAvLyBFbmFibGUgdG8gbW92ZSB0aGUgY3JvcCBib3hcbiAgICBjcm9wQm94TW92YWJsZTogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gcmVzaXplIHRoZSBjcm9wIGJveFxuICAgIGNyb3BCb3hSZXNpemFibGU6IHRydWUsXG4gICAgLy8gVG9nZ2xlIGRyYWcgbW9kZSBiZXR3ZWVuIFwiY3JvcFwiIGFuZCBcIm1vdmVcIiB3aGVuIGNsaWNrIHR3aWNlIG9uIHRoZSBjcm9wcGVyXG4gICAgdG9nZ2xlRHJhZ01vZGVPbkRibGNsaWNrOiB0cnVlLFxuICAgIC8vIFNpemUgbGltaXRhdGlvblxuICAgIG1pbkNhbnZhc1dpZHRoOiAwLFxuICAgIG1pbkNhbnZhc0hlaWdodDogMCxcbiAgICBtaW5Dcm9wQm94V2lkdGg6IDAsXG4gICAgbWluQ3JvcEJveEhlaWdodDogMCxcbiAgICBtaW5Db250YWluZXJXaWR0aDogTUlOX0NPTlRBSU5FUl9XSURUSCxcbiAgICBtaW5Db250YWluZXJIZWlnaHQ6IE1JTl9DT05UQUlORVJfSEVJR0hULFxuICAgIC8vIFNob3J0Y3V0cyBvZiBldmVudHNcbiAgICByZWFkeTogbnVsbCxcbiAgICBjcm9wc3RhcnQ6IG51bGwsXG4gICAgY3JvcG1vdmU6IG51bGwsXG4gICAgY3JvcGVuZDogbnVsbCxcbiAgICBjcm9wOiBudWxsLFxuICAgIHpvb206IG51bGxcbiAgfTtcblxuICB2YXIgVEVNUExBVEUgPSAnPGRpdiBjbGFzcz1cImNyb3BwZXItY29udGFpbmVyXCIgdG91Y2gtYWN0aW9uPVwibm9uZVwiPicgKyAnPGRpdiBjbGFzcz1cImNyb3BwZXItd3JhcC1ib3hcIj4nICsgJzxkaXYgY2xhc3M9XCJjcm9wcGVyLWNhbnZhc1wiPjwvZGl2PicgKyAnPC9kaXY+JyArICc8ZGl2IGNsYXNzPVwiY3JvcHBlci1kcmFnLWJveFwiPjwvZGl2PicgKyAnPGRpdiBjbGFzcz1cImNyb3BwZXItY3JvcC1ib3hcIj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci12aWV3LWJveFwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1kYXNoZWQgZGFzaGVkLWhcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItZGFzaGVkIGRhc2hlZC12XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWNlbnRlclwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1mYWNlXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWxpbmUgbGluZS1lXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cImVcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItbGluZSBsaW5lLW5cIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwiblwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1saW5lIGxpbmUtd1wiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJ3XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWxpbmUgbGluZS1zXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cInNcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtZVwiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJlXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LW5cIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwiblwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC13XCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIndcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtc1wiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJzXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LW5lXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIm5lXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LW53XCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIm53XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LXN3XCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cInN3XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LXNlXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cInNlXCI+PC9zcGFuPicgKyAnPC9kaXY+JyArICc8L2Rpdj4nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgbm90IGEgbnVtYmVyLlxuICAgKi9cbiAgdmFyIGlzTmFOID0gTnVtYmVyLmlzTmFOIHx8IFdJTkRPVy5pc05hTjtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICB2YXIgaXNQb3NpdGl2ZU51bWJlciA9IGZ1bmN0aW9uIGlzUG9zaXRpdmVOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPiAwICYmIHZhbHVlIDwgSW5maW5pdHk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgdW5kZWZpbmVkLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBvYmplY3QuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcbiAgICAgIHZhciBwcm90b3R5cGUgPSBfY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3RvciAmJiBwcm90b3R5cGUgJiYgaGFzT3duUHJvcGVydHkuY2FsbChwcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH1cbiAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFycmF5LWxpa2Ugb3IgaXRlcmFibGUgb2JqZWN0IHRvIGFuIGFycmF5LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIG5ldyBhcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSA/IEFycmF5LmZyb20odmFsdWUpIDogc2xpY2UuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSB0aGUgZ2l2ZW4gZGF0YS5cbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gVGhlIGRhdGEgdG8gaXRlcmF0ZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgcHJvY2VzcyBmdW5jdGlvbiBmb3IgZWFjaCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7Kn0gVGhlIG9yaWdpbmFsIGRhdGEuXG4gICAqL1xuICBmdW5jdGlvbiBmb3JFYWNoKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGRhdGEgJiYgaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IGlzTnVtYmVyKGRhdGEubGVuZ3RoKSAvKiBhcnJheS1saWtlICovKSB7XG4gICAgICAgIHRvQXJyYXkoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZGF0YSwgdmFsdWUsIGtleSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKGRhdGEsIGRhdGFba2V5XSwga2V5LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuZCB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgKiBAcGFyYW0geyp9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2JqZWN0IHRvIGV4dGVuZC5cbiAgICogQHBhcmFtIHsqfSBhcmdzIC0gVGhlIHJlc3Qgb2JqZWN0cyBmb3IgbWVyZ2luZyB0byB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGV4dGVuZGVkIG9iamVjdC5cbiAgICovXG4gIHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICBpZiAoaXNPYmplY3QoYXJnKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKGFyZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGFyZ1trZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgdmFyIFJFR0VYUF9ERUNJTUFMUyA9IC9cXC5cXGQqKD86MHw5KXsxMn1cXGQqJC87XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBkZWNpbWFsIG51bWJlci5cbiAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovLzAuMzAwMDAwMDAwMDAwMDAwMDQuY29tL31cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIG5vcm1hbGl6ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lcz0xMDAwMDAwMDAwMDBdIC0gVGhlIHRpbWVzIGZvciBub3JtYWxpemluZy5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbm9ybWFsaXplZCBudW1iZXIuXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIHRpbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDAwMDAwMDAwMDA7XG4gICAgcmV0dXJuIFJFR0VYUF9ERUNJTUFMUy50ZXN0KHZhbHVlKSA/IE1hdGgucm91bmQodmFsdWUgKiB0aW1lcykgLyB0aW1lcyA6IHZhbHVlO1xuICB9XG4gIHZhciBSRUdFWFBfU1VGRklYID0gL153aWR0aHxoZWlnaHR8bGVmdHx0b3B8bWFyZ2luTGVmdHxtYXJnaW5Ub3AkLztcblxuICAvKipcbiAgICogQXBwbHkgc3R5bGVzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBUaGUgc3R5bGVzIGZvciBhcHBseWluZy5cbiAgICovXG4gIGZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG4gICAgZm9yRWFjaChzdHlsZXMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgICAgIGlmIChSRUdFWFBfU1VGRklYLnRlc3QocHJvcGVydHkpICYmIGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IFwiXCIuY29uY2F0KHZhbHVlLCBcInB4XCIpO1xuICAgICAgfVxuICAgICAgc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaGFzIGEgc3BlY2lhbCBjbGFzcy5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gY2hlY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzcyB0byBzZWFyY2guXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lhbCBjbGFzcyB3YXMgZm91bmQuXG4gICAqL1xuICBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdCA/IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbHVlKSA6IGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YodmFsdWUpID4gLTE7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNsYXNzZXMgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIGNsYXNzZXMgdG8gYmUgYWRkZWQuXG4gICAqL1xuICBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgICAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBhZGRDbGFzcyhlbGVtLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUudHJpbSgpO1xuICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lLmluZGV4T2YodmFsdWUpIDwgMCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiIFwiKS5jb25jYXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIHJlbW92ZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgICAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZW1vdmVDbGFzcyhlbGVtLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZih2YWx1ZSkgPj0gMCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHZhbHVlLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvciByZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIHRvZ2dsZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWRkZWQgLSBBZGQgb25seS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIHZhbHVlLCBhZGRlZCkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgICAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICB0b2dnbGVDbGFzcyhlbGVtLCB2YWx1ZSwgYWRkZWQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSUUxMC0xMSBkb2Vzbid0IHN1cHBvcnQgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgYGNsYXNzTGlzdC50b2dnbGVgXG4gICAgaWYgKGFkZGVkKSB7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgdmFyIFJFR0VYUF9DQU1FTF9DQVNFID0gLyhbYS16XFxkXSkoW0EtWl0pL2c7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0aGUgZ2l2ZW4gc3RyaW5nIGZyb20gY2FtZWxDYXNlIHRvIGtlYmFiLWNhc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHRyYW5zZm9ybS5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gdG9QYXJhbUNhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZShSRUdFWFBfQ0FNRUxfQ0FTRSwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGF0YSBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGRhdGEga2V5IHRvIGdldC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGRhdGEgdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiBnZXREYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgICBpZiAoaXNPYmplY3QoZWxlbWVudFtuYW1lXSkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50W25hbWVdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0W25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0b1BhcmFtQ2FzZShuYW1lKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkYXRhIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGRhdGEga2V5IHRvIHNldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSBUaGUgZGF0YSB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHNldERhdGEoZWxlbWVudCwgbmFtZSwgZGF0YSkge1xuICAgIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgZWxlbWVudFtuYW1lXSA9IGRhdGE7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgIGVsZW1lbnQuZGF0YXNldFtuYW1lXSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1cIi5jb25jYXQodG9QYXJhbUNhc2UobmFtZSkpLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGRhdGEgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBkYXRhIGtleSB0byByZW1vdmUuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVEYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgICBpZiAoaXNPYmplY3QoZWxlbWVudFtuYW1lXSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50W25hbWVdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZWxlbWVudFtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgLy8gIzEyOCBTYWZhcmkgbm90IGFsbG93cyB0byBkZWxldGUgZGF0YXNldCBwcm9wZXJ0eVxuICAgICAgdHJ5IHtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZGF0YXNldFtuYW1lXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldFtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0b1BhcmFtQ2FzZShuYW1lKSkpO1xuICAgIH1cbiAgfVxuICB2YXIgUkVHRVhQX1NQQUNFUyA9IC9cXHNcXHMqLztcbiAgdmFyIG9uY2VTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIGlmIChJU19CUk9XU0VSKSB7XG4gICAgICB2YXIgb25jZSA9IGZhbHNlO1xuICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7fTtcbiAgICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnb25jZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgc3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gb25jZTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgc2V0dGVyIGNhbiBmaXggYSBgVHlwZUVycm9yYCBpbiBzdHJpY3QgbW9kZVxuICAgICAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvRXJyb3JzL0dldHRlcl9vbmx5fVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICBvbmNlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgV0lORE9XLmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICBXSU5ET1cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZDtcbiAgfSgpO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUocykuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgdmFyIGhhbmRsZXIgPSBsaXN0ZW5lcjtcbiAgICB0eXBlLnRyaW0oKS5zcGxpdChSRUdFWFBfU1BBQ0VTKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFvbmNlU3VwcG9ydGVkKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBlbGVtZW50Lmxpc3RlbmVycztcbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnNbZXZlbnRdICYmIGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdO1xuICAgICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXTtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobGlzdGVuZXJzW2V2ZW50XSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgbGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGxpc3RlbmVycykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgZWxlbWVudC5saXN0ZW5lcnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUocykuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICAgKi9cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgdmFyIF9oYW5kbGVyID0gbGlzdGVuZXI7XG4gICAgdHlwZS50cmltKCkuc3BsaXQoUkVHRVhQX1NQQUNFUykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChvcHRpb25zLm9uY2UgJiYgIW9uY2VTdXBwb3J0ZWQpIHtcbiAgICAgICAgdmFyIF9lbGVtZW50JGxpc3RlbmVycyA9IGVsZW1lbnQubGlzdGVuZXJzLFxuICAgICAgICAgIGxpc3RlbmVycyA9IF9lbGVtZW50JGxpc3RlbmVycyA9PT0gdm9pZCAwID8ge30gOiBfZWxlbWVudCRsaXN0ZW5lcnM7XG4gICAgICAgIF9oYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICBkZWxldGUgbGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl07XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBfaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3RlbmVyLmFwcGx5KGVsZW1lbnQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIWxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl0gPSBfaGFuZGxlcjtcbiAgICAgICAgZWxlbWVudC5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgICB9XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIF9oYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCBldmVudCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUocykuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIGFkZGl0aW9uYWwgZXZlbnQgZGF0YS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IEluZGljYXRlIGlmIHRoZSBldmVudCBpcyBkZWZhdWx0IHByZXZlbnRlZCBvciBub3QuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIHR5cGUsIGRhdGEpIHtcbiAgICB2YXIgZXZlbnQ7XG5cbiAgICAvLyBFdmVudCBhbmQgQ3VzdG9tRXZlbnQgb24gSUU5LTExIGFyZSBnbG9iYWwgb2JqZWN0cywgbm90IGNvbnN0cnVjdG9yc1xuICAgIGlmIChpc0Z1bmN0aW9uKEV2ZW50KSAmJiBpc0Z1bmN0aW9uKEN1c3RvbUV2ZW50KSkge1xuICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwge1xuICAgICAgICBkZXRhaWw6IGRhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9mZnNldCBiYXNlIG9uIHRoZSBkb2N1bWVudC5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgb2Zmc2V0IGRhdGEuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRPZmZzZXQoZWxlbWVudCkge1xuICAgIHZhciBib3ggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiBib3gubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCksXG4gICAgICB0b3A6IGJveC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcClcbiAgICB9O1xuICB9XG4gIHZhciBsb2NhdGlvbiA9IFdJTkRPVy5sb2NhdGlvbjtcbiAgdmFyIFJFR0VYUF9PUklHSU5TID0gL14oXFx3KzopXFwvXFwvKFteOi8/I10qKTo/KFxcZCopL2k7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiBVUkwgaXMgYSBjcm9zcyBvcmlnaW4gVVJMLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIHRhcmdldCBVUkwuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gVVJMIGlzIGEgY3Jvc3Mgb3JpZ2luIFVSTCwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNDcm9zc09yaWdpblVSTCh1cmwpIHtcbiAgICB2YXIgcGFydHMgPSB1cmwubWF0Y2goUkVHRVhQX09SSUdJTlMpO1xuICAgIHJldHVybiBwYXJ0cyAhPT0gbnVsbCAmJiAocGFydHNbMV0gIT09IGxvY2F0aW9uLnByb3RvY29sIHx8IHBhcnRzWzJdICE9PSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwYXJ0c1szXSAhPT0gbG9jYXRpb24ucG9ydCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRpbWVzdGFtcCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIHRhcmdldCBVUkwuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXN1bHQgVVJMLlxuICAgKi9cbiAgZnVuY3Rpb24gYWRkVGltZXN0YW1wKHVybCkge1xuICAgIHZhciB0aW1lc3RhbXAgPSBcInRpbWVzdGFtcD1cIi5jb25jYXQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIHJldHVybiB1cmwgKyAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgdGltZXN0YW1wO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0cmFuc2Zvcm1zIGJhc2Ugb24gdGhlIGdpdmVuIG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIFRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBjb250YWlucyB0cmFuc2Zvcm0gdmFsdWVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtcyhfcmVmKSB7XG4gICAgdmFyIHJvdGF0ZSA9IF9yZWYucm90YXRlLFxuICAgICAgc2NhbGVYID0gX3JlZi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmLnNjYWxlWSxcbiAgICAgIHRyYW5zbGF0ZVggPSBfcmVmLnRyYW5zbGF0ZVgsXG4gICAgICB0cmFuc2xhdGVZID0gX3JlZi50cmFuc2xhdGVZO1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICBpZiAoaXNOdW1iZXIodHJhbnNsYXRlWCkgJiYgdHJhbnNsYXRlWCAhPT0gMCkge1xuICAgICAgdmFsdWVzLnB1c2goXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdCh0cmFuc2xhdGVYLCBcInB4KVwiKSk7XG4gICAgfVxuICAgIGlmIChpc051bWJlcih0cmFuc2xhdGVZKSAmJiB0cmFuc2xhdGVZICE9PSAwKSB7XG4gICAgICB2YWx1ZXMucHVzaChcInRyYW5zbGF0ZVkoXCIuY29uY2F0KHRyYW5zbGF0ZVksIFwicHgpXCIpKTtcbiAgICB9XG5cbiAgICAvLyBSb3RhdGUgc2hvdWxkIGNvbWUgZmlyc3QgYmVmb3JlIHNjYWxlIHRvIG1hdGNoIG9yaWVudGF0aW9uIHRyYW5zZm9ybVxuICAgIGlmIChpc051bWJlcihyb3RhdGUpICYmIHJvdGF0ZSAhPT0gMCkge1xuICAgICAgdmFsdWVzLnB1c2goXCJyb3RhdGUoXCIuY29uY2F0KHJvdGF0ZSwgXCJkZWcpXCIpKTtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKHNjYWxlWCkgJiYgc2NhbGVYICE9PSAxKSB7XG4gICAgICB2YWx1ZXMucHVzaChcInNjYWxlWChcIi5jb25jYXQoc2NhbGVYLCBcIilcIikpO1xuICAgIH1cbiAgICBpZiAoaXNOdW1iZXIoc2NhbGVZKSAmJiBzY2FsZVkgIT09IDEpIHtcbiAgICAgIHZhbHVlcy5wdXNoKFwic2NhbGVZKFwiLmNvbmNhdChzY2FsZVksIFwiKVwiKSk7XG4gICAgfVxuICAgIHZhciB0cmFuc2Zvcm0gPSB2YWx1ZXMubGVuZ3RoID8gdmFsdWVzLmpvaW4oJyAnKSA6ICdub25lJztcbiAgICByZXR1cm4ge1xuICAgICAgV2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBtc1RyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4IHJhdGlvIG9mIGEgZ3JvdXAgb2YgcG9pbnRlcnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb2ludGVycyAtIFRoZSB0YXJnZXQgcG9pbnRlcnMuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZXN1bHQgcmF0aW8uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRNYXhab29tUmF0aW8ocG9pbnRlcnMpIHtcbiAgICB2YXIgcG9pbnRlcnMyID0gX29iamVjdFNwcmVhZDIoe30sIHBvaW50ZXJzKTtcbiAgICB2YXIgbWF4UmF0aW8gPSAwO1xuICAgIGZvckVhY2gocG9pbnRlcnMsIGZ1bmN0aW9uIChwb2ludGVyLCBwb2ludGVySWQpIHtcbiAgICAgIGRlbGV0ZSBwb2ludGVyczJbcG9pbnRlcklkXTtcbiAgICAgIGZvckVhY2gocG9pbnRlcnMyLCBmdW5jdGlvbiAocG9pbnRlcjIpIHtcbiAgICAgICAgdmFyIHgxID0gTWF0aC5hYnMocG9pbnRlci5zdGFydFggLSBwb2ludGVyMi5zdGFydFgpO1xuICAgICAgICB2YXIgeTEgPSBNYXRoLmFicyhwb2ludGVyLnN0YXJ0WSAtIHBvaW50ZXIyLnN0YXJ0WSk7XG4gICAgICAgIHZhciB4MiA9IE1hdGguYWJzKHBvaW50ZXIuZW5kWCAtIHBvaW50ZXIyLmVuZFgpO1xuICAgICAgICB2YXIgeTIgPSBNYXRoLmFicyhwb2ludGVyLmVuZFkgLSBwb2ludGVyMi5lbmRZKTtcbiAgICAgICAgdmFyIHoxID0gTWF0aC5zcXJ0KHgxICogeDEgKyB5MSAqIHkxKTtcbiAgICAgICAgdmFyIHoyID0gTWF0aC5zcXJ0KHgyICogeDIgKyB5MiAqIHkyKTtcbiAgICAgICAgdmFyIHJhdGlvID0gKHoyIC0gejEpIC8gejE7XG4gICAgICAgIGlmIChNYXRoLmFicyhyYXRpbykgPiBNYXRoLmFicyhtYXhSYXRpbykpIHtcbiAgICAgICAgICBtYXhSYXRpbyA9IHJhdGlvO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF4UmF0aW87XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gVGhlIHRhcmdldCBldmVudCBvYmplY3QuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5kT25seSAtIEluZGljYXRlcyBpZiBvbmx5IHJldHVybnMgdGhlIGVuZCBwb2ludCBjb29yZGluYXRlIG9yIG5vdC5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBwb2ludGVyIGNvbnRhaW5zIHN0YXJ0IGFuZC9vciBlbmQgcG9pbnQgY29vcmRpbmF0ZXMuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQb2ludGVyKF9yZWYyLCBlbmRPbmx5KSB7XG4gICAgdmFyIHBhZ2VYID0gX3JlZjIucGFnZVgsXG4gICAgICBwYWdlWSA9IF9yZWYyLnBhZ2VZO1xuICAgIHZhciBlbmQgPSB7XG4gICAgICBlbmRYOiBwYWdlWCxcbiAgICAgIGVuZFk6IHBhZ2VZXG4gICAgfTtcbiAgICByZXR1cm4gZW5kT25seSA/IGVuZCA6IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICBzdGFydFk6IHBhZ2VZXG4gICAgfSwgZW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNlbnRlciBwb2ludCBjb29yZGluYXRlIG9mIGEgZ3JvdXAgb2YgcG9pbnRlcnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwb2ludGVycyAtIFRoZSB0YXJnZXQgcG9pbnRlcnMuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjZW50ZXIgcG9pbnQgY29vcmRpbmF0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFBvaW50ZXJzQ2VudGVyKHBvaW50ZXJzKSB7XG4gICAgdmFyIHBhZ2VYID0gMDtcbiAgICB2YXIgcGFnZVkgPSAwO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgZm9yRWFjaChwb2ludGVycywgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICB2YXIgc3RhcnRYID0gX3JlZjMuc3RhcnRYLFxuICAgICAgICBzdGFydFkgPSBfcmVmMy5zdGFydFk7XG4gICAgICBwYWdlWCArPSBzdGFydFg7XG4gICAgICBwYWdlWSArPSBzdGFydFk7XG4gICAgICBjb3VudCArPSAxO1xuICAgIH0pO1xuICAgIHBhZ2VYIC89IGNvdW50O1xuICAgIHBhZ2VZIC89IGNvdW50O1xuICAgIHJldHVybiB7XG4gICAgICBwYWdlWDogcGFnZVgsXG4gICAgICBwYWdlWTogcGFnZVlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4IHNpemVzIGluIGEgcmVjdGFuZ2xlIHVuZGVyIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9J2NvbnRhaW4nXSAtIFRoZSBhZGp1c3QgdHlwZS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBzaXplcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEFkanVzdGVkU2l6ZXMoX3JlZjQpIHtcbiAgICB2YXIgYXNwZWN0UmF0aW8gPSBfcmVmNC5hc3BlY3RSYXRpbyxcbiAgICAgIGhlaWdodCA9IF9yZWY0LmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZjQud2lkdGg7XG4gICAgdmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdjb250YWluJztcbiAgICB2YXIgaXNWYWxpZFdpZHRoID0gaXNQb3NpdGl2ZU51bWJlcih3aWR0aCk7XG4gICAgdmFyIGlzVmFsaWRIZWlnaHQgPSBpc1Bvc2l0aXZlTnVtYmVyKGhlaWdodCk7XG4gICAgaWYgKGlzVmFsaWRXaWR0aCAmJiBpc1ZhbGlkSGVpZ2h0KSB7XG4gICAgICB2YXIgYWRqdXN0ZWRXaWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgaWYgKHR5cGUgPT09ICdjb250YWluJyAmJiBhZGp1c3RlZFdpZHRoID4gd2lkdGggfHwgdHlwZSA9PT0gJ2NvdmVyJyAmJiBhZGp1c3RlZFdpZHRoIDwgd2lkdGgpIHtcbiAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkV2lkdGgpIHtcbiAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkSGVpZ2h0KSB7XG4gICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmV3IHNpemVzIG9mIGEgcmVjdGFuZ2xlIGFmdGVyIHJvdGF0ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IHNpemVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Um90YXRlZFNpemVzKF9yZWY1KSB7XG4gICAgdmFyIHdpZHRoID0gX3JlZjUud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmNS5oZWlnaHQsXG4gICAgICBkZWdyZWUgPSBfcmVmNS5kZWdyZWU7XG4gICAgZGVncmVlID0gTWF0aC5hYnMoZGVncmVlKSAlIDE4MDtcbiAgICBpZiAoZGVncmVlID09PSA5MCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGhlaWdodCxcbiAgICAgICAgaGVpZ2h0OiB3aWR0aFxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGFyYyA9IGRlZ3JlZSAlIDkwICogTWF0aC5QSSAvIDE4MDtcbiAgICB2YXIgc2luQXJjID0gTWF0aC5zaW4oYXJjKTtcbiAgICB2YXIgY29zQXJjID0gTWF0aC5jb3MoYXJjKTtcbiAgICB2YXIgbmV3V2lkdGggPSB3aWR0aCAqIGNvc0FyYyArIGhlaWdodCAqIHNpbkFyYztcbiAgICB2YXIgbmV3SGVpZ2h0ID0gd2lkdGggKiBzaW5BcmMgKyBoZWlnaHQgKiBjb3NBcmM7XG4gICAgcmV0dXJuIGRlZ3JlZSA+IDkwID8ge1xuICAgICAgd2lkdGg6IG5ld0hlaWdodCxcbiAgICAgIGhlaWdodDogbmV3V2lkdGhcbiAgICB9IDoge1xuICAgICAgd2lkdGg6IG5ld1dpZHRoLFxuICAgICAgaGVpZ2h0OiBuZXdIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGNhbnZhcyB3aGljaCBkcmV3IHRoZSBnaXZlbiBpbWFnZS5cbiAgICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBpbWFnZSAtIFRoZSBpbWFnZSBmb3IgZHJhd2luZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IGltYWdlRGF0YSAtIFRoZSBpbWFnZSBkYXRhLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY2FudmFzRGF0YSAtIFRoZSBjYW52YXMgZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgb3B0aW9ucy5cbiAgICogQHJldHVybnMge0hUTUxDYW52YXNFbGVtZW50fSBUaGUgcmVzdWx0IGNhbnZhcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFNvdXJjZUNhbnZhcyhpbWFnZSwgX3JlZjYsIF9yZWY3LCBfcmVmOCkge1xuICAgIHZhciBpbWFnZUFzcGVjdFJhdGlvID0gX3JlZjYuYXNwZWN0UmF0aW8sXG4gICAgICBpbWFnZU5hdHVyYWxXaWR0aCA9IF9yZWY2Lm5hdHVyYWxXaWR0aCxcbiAgICAgIGltYWdlTmF0dXJhbEhlaWdodCA9IF9yZWY2Lm5hdHVyYWxIZWlnaHQsXG4gICAgICBfcmVmNiRyb3RhdGUgPSBfcmVmNi5yb3RhdGUsXG4gICAgICByb3RhdGUgPSBfcmVmNiRyb3RhdGUgPT09IHZvaWQgMCA/IDAgOiBfcmVmNiRyb3RhdGUsXG4gICAgICBfcmVmNiRzY2FsZVggPSBfcmVmNi5zY2FsZVgsXG4gICAgICBzY2FsZVggPSBfcmVmNiRzY2FsZVggPT09IHZvaWQgMCA/IDEgOiBfcmVmNiRzY2FsZVgsXG4gICAgICBfcmVmNiRzY2FsZVkgPSBfcmVmNi5zY2FsZVksXG4gICAgICBzY2FsZVkgPSBfcmVmNiRzY2FsZVkgPT09IHZvaWQgMCA/IDEgOiBfcmVmNiRzY2FsZVk7XG4gICAgdmFyIGFzcGVjdFJhdGlvID0gX3JlZjcuYXNwZWN0UmF0aW8sXG4gICAgICBuYXR1cmFsV2lkdGggPSBfcmVmNy5uYXR1cmFsV2lkdGgsXG4gICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjcubmF0dXJhbEhlaWdodDtcbiAgICB2YXIgX3JlZjgkZmlsbENvbG9yID0gX3JlZjguZmlsbENvbG9yLFxuICAgICAgZmlsbENvbG9yID0gX3JlZjgkZmlsbENvbG9yID09PSB2b2lkIDAgPyAndHJhbnNwYXJlbnQnIDogX3JlZjgkZmlsbENvbG9yLFxuICAgICAgX3JlZjgkaW1hZ2VTbW9vdGhpbmdFID0gX3JlZjguaW1hZ2VTbW9vdGhpbmdFbmFibGVkLFxuICAgICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gX3JlZjgkaW1hZ2VTbW9vdGhpbmdFID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjgkaW1hZ2VTbW9vdGhpbmdFLFxuICAgICAgX3JlZjgkaW1hZ2VTbW9vdGhpbmdRID0gX3JlZjguaW1hZ2VTbW9vdGhpbmdRdWFsaXR5LFxuICAgICAgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gX3JlZjgkaW1hZ2VTbW9vdGhpbmdRID09PSB2b2lkIDAgPyAnbG93JyA6IF9yZWY4JGltYWdlU21vb3RoaW5nUSxcbiAgICAgIF9yZWY4JG1heFdpZHRoID0gX3JlZjgubWF4V2lkdGgsXG4gICAgICBtYXhXaWR0aCA9IF9yZWY4JG1heFdpZHRoID09PSB2b2lkIDAgPyBJbmZpbml0eSA6IF9yZWY4JG1heFdpZHRoLFxuICAgICAgX3JlZjgkbWF4SGVpZ2h0ID0gX3JlZjgubWF4SGVpZ2h0LFxuICAgICAgbWF4SGVpZ2h0ID0gX3JlZjgkbWF4SGVpZ2h0ID09PSB2b2lkIDAgPyBJbmZpbml0eSA6IF9yZWY4JG1heEhlaWdodCxcbiAgICAgIF9yZWY4JG1pbldpZHRoID0gX3JlZjgubWluV2lkdGgsXG4gICAgICBtaW5XaWR0aCA9IF9yZWY4JG1pbldpZHRoID09PSB2b2lkIDAgPyAwIDogX3JlZjgkbWluV2lkdGgsXG4gICAgICBfcmVmOCRtaW5IZWlnaHQgPSBfcmVmOC5taW5IZWlnaHQsXG4gICAgICBtaW5IZWlnaHQgPSBfcmVmOCRtaW5IZWlnaHQgPT09IHZvaWQgMCA/IDAgOiBfcmVmOCRtaW5IZWlnaHQ7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIG1heFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICBoZWlnaHQ6IG1heEhlaWdodFxuICAgIH0pO1xuICAgIHZhciBtaW5TaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgd2lkdGg6IG1pbldpZHRoLFxuICAgICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgICB9LCAnY292ZXInKTtcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1pbihtYXhTaXplcy53aWR0aCwgTWF0aC5tYXgobWluU2l6ZXMud2lkdGgsIG5hdHVyYWxXaWR0aCkpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbihtYXhTaXplcy5oZWlnaHQsIE1hdGgubWF4KG1pblNpemVzLmhlaWdodCwgbmF0dXJhbEhlaWdodCkpO1xuXG4gICAgLy8gTm90ZTogc2hvdWxkIGFsd2F5cyB1c2UgaW1hZ2UncyBuYXR1cmFsIHNpemVzIGZvciBkcmF3aW5nIGFzXG4gICAgLy8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aCA9PT0gY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0IHdoZW4gcm90YXRlICUgMTgwID09PSA5MFxuICAgIHZhciBkZXN0TWF4U2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgIGFzcGVjdFJhdGlvOiBpbWFnZUFzcGVjdFJhdGlvLFxuICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgaGVpZ2h0OiBtYXhIZWlnaHRcbiAgICB9KTtcbiAgICB2YXIgZGVzdE1pblNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICBhc3BlY3RSYXRpbzogaW1hZ2VBc3BlY3RSYXRpbyxcbiAgICAgIHdpZHRoOiBtaW5XaWR0aCxcbiAgICAgIGhlaWdodDogbWluSGVpZ2h0XG4gICAgfSwgJ2NvdmVyJyk7XG4gICAgdmFyIGRlc3RXaWR0aCA9IE1hdGgubWluKGRlc3RNYXhTaXplcy53aWR0aCwgTWF0aC5tYXgoZGVzdE1pblNpemVzLndpZHRoLCBpbWFnZU5hdHVyYWxXaWR0aCkpO1xuICAgIHZhciBkZXN0SGVpZ2h0ID0gTWF0aC5taW4oZGVzdE1heFNpemVzLmhlaWdodCwgTWF0aC5tYXgoZGVzdE1pblNpemVzLmhlaWdodCwgaW1hZ2VOYXR1cmFsSGVpZ2h0KSk7XG4gICAgdmFyIHBhcmFtcyA9IFstZGVzdFdpZHRoIC8gMiwgLWRlc3RIZWlnaHQgLyAyLCBkZXN0V2lkdGgsIGRlc3RIZWlnaHRdO1xuICAgIGNhbnZhcy53aWR0aCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIod2lkdGgpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBub3JtYWxpemVEZWNpbWFsTnVtYmVyKGhlaWdodCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICAgIGNvbnRleHQucm90YXRlKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGNvbnRleHQuc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5O1xuICAgIGNvbnRleHQuZHJhd0ltYWdlLmFwcGx5KGNvbnRleHQsIFtpbWFnZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwYXJhbXMubWFwKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihwYXJhbSkpO1xuICAgIH0pKSkpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgIHJldHVybiBjYW52YXM7XG4gIH1cbiAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgZnJvbSBjaGFyIGNvZGUgaW4gZGF0YSB2aWV3LlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyAtIFRoZSBkYXRhIHZpZXcgZm9yIHJlYWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydCBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIFRoZSByZWFkIGxlbmd0aC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlYWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIGxlbmd0aCArPSBzdGFydDtcbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3RyICs9IGZyb21DaGFyQ29kZShkYXRhVmlldy5nZXRVaW50OChpKSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgdmFyIFJFR0VYUF9EQVRBX1VSTF9IRUFEID0gL15kYXRhOi4qLC87XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBEYXRhIFVSTCB0byBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhVVJMIC0gVGhlIERhdGEgVVJMIHRvIHRyYW5zZm9ybS5cbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgcmVzdWx0IGFycmF5IGJ1ZmZlci5cbiAgICovXG4gIGZ1bmN0aW9uIGRhdGFVUkxUb0FycmF5QnVmZmVyKGRhdGFVUkwpIHtcbiAgICB2YXIgYmFzZTY0ID0gZGF0YVVSTC5yZXBsYWNlKFJFR0VYUF9EQVRBX1VSTF9IRUFELCAnJyk7XG4gICAgdmFyIGJpbmFyeSA9IGF0b2IoYmFzZTY0KTtcbiAgICB2YXIgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYmluYXJ5Lmxlbmd0aCk7XG4gICAgdmFyIHVpbnQ4ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgIGZvckVhY2godWludDgsIGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgdWludDhbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXlCdWZmZXI7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGFycmF5IGJ1ZmZlciB0byBEYXRhIFVSTC5cbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgLSBUaGUgYXJyYXkgYnVmZmVyIHRvIHRyYW5zZm9ybS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1pbWVUeXBlIC0gVGhlIG1pbWUgdHlwZSBvZiB0aGUgRGF0YSBVUkwuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXN1bHQgRGF0YSBVUkwuXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvRGF0YVVSTChhcnJheUJ1ZmZlciwgbWltZVR5cGUpIHtcbiAgICB2YXIgY2h1bmtzID0gW107XG5cbiAgICAvLyBDaHVuayBUeXBlZCBBcnJheSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlICgjNDM1KVxuICAgIHZhciBjaHVua1NpemUgPSA4MTkyO1xuICAgIHZhciB1aW50OCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgICB3aGlsZSAodWludDgubGVuZ3RoID4gMCkge1xuICAgICAgLy8gWFhYOiBCYWJlbCdzIGB0b0NvbnN1bWFibGVBcnJheWAgaGVscGVyIHdpbGwgdGhyb3cgZXJyb3IgaW4gSUUgb3IgU2FmYXJpIDlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICBjaHVua3MucHVzaChmcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdG9BcnJheSh1aW50OC5zdWJhcnJheSgwLCBjaHVua1NpemUpKSkpO1xuICAgICAgdWludDggPSB1aW50OC5zdWJhcnJheShjaHVua1NpemUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJkYXRhOlwiLmNvbmNhdChtaW1lVHlwZSwgXCI7YmFzZTY0LFwiKS5jb25jYXQoYnRvYShjaHVua3Muam9pbignJykpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3JpZW50YXRpb24gdmFsdWUgZnJvbSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVhZCBvcmllbnRhdGlvbiB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0QW5kR2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICAgIHZhciBvcmllbnRhdGlvbjtcblxuICAgIC8vIElnbm9yZXMgcmFuZ2UgZXJyb3Igd2hlbiB0aGUgaW1hZ2UgZG9lcyBub3QgaGF2ZSBjb3JyZWN0IEV4aWYgaW5mb3JtYXRpb25cbiAgICB0cnkge1xuICAgICAgdmFyIGxpdHRsZUVuZGlhbjtcbiAgICAgIHZhciBhcHAxU3RhcnQ7XG4gICAgICB2YXIgaWZkU3RhcnQ7XG5cbiAgICAgIC8vIE9ubHkgaGFuZGxlIEpQRUcgaW1hZ2UgKHN0YXJ0IGJ5IDB4RkZEOClcbiAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OCgwKSA9PT0gMHhGRiAmJiBkYXRhVmlldy5nZXRVaW50OCgxKSA9PT0gMHhEOCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gZGF0YVZpZXcuYnl0ZUxlbmd0aDtcbiAgICAgICAgdmFyIG9mZnNldCA9IDI7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgKyAxIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSkgPT09IDB4RTEpIHtcbiAgICAgICAgICAgIGFwcDFTdGFydCA9IG9mZnNldDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFwcDFTdGFydCkge1xuICAgICAgICB2YXIgZXhpZklEQ29kZSA9IGFwcDFTdGFydCArIDQ7XG4gICAgICAgIHZhciB0aWZmT2Zmc2V0ID0gYXBwMVN0YXJ0ICsgMTA7XG4gICAgICAgIGlmIChnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIGV4aWZJRENvZGUsIDQpID09PSAnRXhpZicpIHtcbiAgICAgICAgICB2YXIgZW5kaWFubmVzcyA9IGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KTtcbiAgICAgICAgICBsaXR0bGVFbmRpYW4gPSBlbmRpYW5uZXNzID09PSAweDQ5NDk7XG4gICAgICAgICAgaWYgKGxpdHRsZUVuZGlhbiB8fCBlbmRpYW5uZXNzID09PSAweDRENEQgLyogYmlnRW5kaWFuICovKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQgKyAyLCBsaXR0bGVFbmRpYW4pID09PSAweDAwMkEpIHtcbiAgICAgICAgICAgICAgdmFyIGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPj0gMHgwMDAwMDAwOCkge1xuICAgICAgICAgICAgICAgIGlmZFN0YXJ0ID0gdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaWZkU3RhcnQpIHtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MTYoaWZkU3RhcnQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIHZhciBfb2Zmc2V0O1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IF9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIF9vZmZzZXQgPSBpZmRTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pID09PSAweDAxMTIgLyogT3JpZW50YXRpb24gKi8pIHtcbiAgICAgICAgICAgIC8vIDggaXMgdGhlIG9mZnNldCBvZiB0aGUgY3VycmVudCB0YWcncyB2YWx1ZVxuICAgICAgICAgICAgX29mZnNldCArPSA4O1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIG9yaWdpbmFsIG9yaWVudGF0aW9uIHZhbHVlXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgICAgICAvLyBPdmVycmlkZSB0aGUgb3JpZW50YXRpb24gd2l0aCBpdHMgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KF9vZmZzZXQsIDEsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb3JpZW50YXRpb24gPSAxO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgRXhpZiBPcmllbnRhdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWVudGF0aW9uIC0gVGhlIG9yaWVudGF0aW9uIHRvIHBhcnNlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcGFyc2VkIHJlc3VsdC5cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pIHtcbiAgICB2YXIgcm90YXRlID0gMDtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICAvLyBGbGlwIGhvcml6b250YWxcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgbGVmdCAxODBcdTAwQjBcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcm90YXRlID0gLTE4MDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEZsaXAgdmVydGljYWxcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgc2NhbGVZID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBGbGlwIHZlcnRpY2FsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIHJpZ2h0IDkwXHUwMEIwXG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCBob3Jpem9udGFsIGFuZCByb3RhdGUgcmlnaHQgOTBcdTAwQjBcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWCA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIGxlZnQgOTBcdTAwQjBcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcm90YXRlID0gLTkwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdGF0ZTogcm90YXRlLFxuICAgICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgICBzY2FsZVk6IHNjYWxlWVxuICAgIH07XG4gIH1cblxuICB2YXIgcmVuZGVyID0ge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdGhpcy5pbml0Q29udGFpbmVyKCk7XG4gICAgICB0aGlzLmluaXRDYW52YXMoKTtcbiAgICAgIHRoaXMuaW5pdENyb3BCb3goKTtcbiAgICAgIHRoaXMucmVuZGVyQ2FudmFzKCk7XG4gICAgICBpZiAodGhpcy5jcm9wcGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5pdENvbnRhaW5lcjogZnVuY3Rpb24gaW5pdENvbnRhaW5lcigpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgY3JvcHBlciA9IHRoaXMuY3JvcHBlcjtcbiAgICAgIHZhciBtaW5XaWR0aCA9IE51bWJlcihvcHRpb25zLm1pbkNvbnRhaW5lcldpZHRoKTtcbiAgICAgIHZhciBtaW5IZWlnaHQgPSBOdW1iZXIob3B0aW9ucy5taW5Db250YWluZXJIZWlnaHQpO1xuICAgICAgYWRkQ2xhc3MoY3JvcHBlciwgQ0xBU1NfSElEREVOKTtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIENMQVNTX0hJRERFTik7XG4gICAgICB2YXIgY29udGFpbmVyRGF0YSA9IHtcbiAgICAgICAgd2lkdGg6IE1hdGgubWF4KGNvbnRhaW5lci5vZmZzZXRXaWR0aCwgbWluV2lkdGggPj0gMCA/IG1pbldpZHRoIDogTUlOX0NPTlRBSU5FUl9XSURUSCksXG4gICAgICAgIGhlaWdodDogTWF0aC5tYXgoY29udGFpbmVyLm9mZnNldEhlaWdodCwgbWluSGVpZ2h0ID49IDAgPyBtaW5IZWlnaHQgOiBNSU5fQ09OVEFJTkVSX0hFSUdIVClcbiAgICAgIH07XG4gICAgICB0aGlzLmNvbnRhaW5lckRhdGEgPSBjb250YWluZXJEYXRhO1xuICAgICAgc2V0U3R5bGUoY3JvcHBlciwge1xuICAgICAgICB3aWR0aDogY29udGFpbmVyRGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEYXRhLmhlaWdodFxuICAgICAgfSk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBDTEFTU19ISURERU4pO1xuICAgICAgcmVtb3ZlQ2xhc3MoY3JvcHBlciwgQ0xBU1NfSElEREVOKTtcbiAgICB9LFxuICAgIC8vIENhbnZhcyAoaW1hZ2Ugd3JhcHBlcilcbiAgICBpbml0Q2FudmFzOiBmdW5jdGlvbiBpbml0Q2FudmFzKCkge1xuICAgICAgdmFyIGNvbnRhaW5lckRhdGEgPSB0aGlzLmNvbnRhaW5lckRhdGEsXG4gICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuICAgICAgdmFyIHZpZXdNb2RlID0gdGhpcy5vcHRpb25zLnZpZXdNb2RlO1xuICAgICAgdmFyIHJvdGF0ZWQgPSBNYXRoLmFicyhpbWFnZURhdGEucm90YXRlKSAlIDE4MCA9PT0gOTA7XG4gICAgICB2YXIgbmF0dXJhbFdpZHRoID0gcm90YXRlZCA/IGltYWdlRGF0YS5uYXR1cmFsSGVpZ2h0IDogaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aDtcbiAgICAgIHZhciBuYXR1cmFsSGVpZ2h0ID0gcm90YXRlZCA/IGltYWdlRGF0YS5uYXR1cmFsV2lkdGggOiBpbWFnZURhdGEubmF0dXJhbEhlaWdodDtcbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHQ7XG4gICAgICB2YXIgY2FudmFzV2lkdGggPSBjb250YWluZXJEYXRhLndpZHRoO1xuICAgICAgdmFyIGNhbnZhc0hlaWdodCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgICAgaWYgKGNvbnRhaW5lckRhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBjb250YWluZXJEYXRhLndpZHRoKSB7XG4gICAgICAgIGlmICh2aWV3TW9kZSA9PT0gMykge1xuICAgICAgICAgIGNhbnZhc1dpZHRoID0gY29udGFpbmVyRGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYW52YXNIZWlnaHQgPSBjb250YWluZXJEYXRhLndpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmlld01vZGUgPT09IDMpIHtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gY29udGFpbmVyRGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSBjb250YWluZXJEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB7XG4gICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgIG5hdHVyYWxIZWlnaHQ6IG5hdHVyYWxIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBjYW52YXNXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjYW52YXNIZWlnaHRcbiAgICAgIH07XG4gICAgICB0aGlzLmNhbnZhc0RhdGEgPSBjYW52YXNEYXRhO1xuICAgICAgdGhpcy5saW1pdGVkID0gdmlld01vZGUgPT09IDEgfHwgdmlld01vZGUgPT09IDI7XG4gICAgICB0aGlzLmxpbWl0Q2FudmFzKHRydWUsIHRydWUpO1xuICAgICAgY2FudmFzRGF0YS53aWR0aCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEud2lkdGgsIGNhbnZhc0RhdGEubWluV2lkdGgpLCBjYW52YXNEYXRhLm1heFdpZHRoKTtcbiAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEubWluSGVpZ2h0KSwgY2FudmFzRGF0YS5tYXhIZWlnaHQpO1xuICAgICAgY2FudmFzRGF0YS5sZWZ0ID0gKGNvbnRhaW5lckRhdGEud2lkdGggLSBjYW52YXNEYXRhLndpZHRoKSAvIDI7XG4gICAgICBjYW52YXNEYXRhLnRvcCA9IChjb250YWluZXJEYXRhLmhlaWdodCAtIGNhbnZhc0RhdGEuaGVpZ2h0KSAvIDI7XG4gICAgICBjYW52YXNEYXRhLm9sZExlZnQgPSBjYW52YXNEYXRhLmxlZnQ7XG4gICAgICBjYW52YXNEYXRhLm9sZFRvcCA9IGNhbnZhc0RhdGEudG9wO1xuICAgICAgdGhpcy5pbml0aWFsQ2FudmFzRGF0YSA9IGFzc2lnbih7fSwgY2FudmFzRGF0YSk7XG4gICAgfSxcbiAgICBsaW1pdENhbnZhczogZnVuY3Rpb24gbGltaXRDYW52YXMoc2l6ZUxpbWl0ZWQsIHBvc2l0aW9uTGltaXRlZCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNvbnRhaW5lckRhdGEgPSB0aGlzLmNvbnRhaW5lckRhdGEsXG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICAgIHZhciB2aWV3TW9kZSA9IG9wdGlvbnMudmlld01vZGU7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBjYW52YXNEYXRhLmFzcGVjdFJhdGlvO1xuICAgICAgdmFyIGNyb3BwZWQgPSB0aGlzLmNyb3BwZWQgJiYgY3JvcEJveERhdGE7XG4gICAgICBpZiAoc2l6ZUxpbWl0ZWQpIHtcbiAgICAgICAgdmFyIG1pbkNhbnZhc1dpZHRoID0gTnVtYmVyKG9wdGlvbnMubWluQ2FudmFzV2lkdGgpIHx8IDA7XG4gICAgICAgIHZhciBtaW5DYW52YXNIZWlnaHQgPSBOdW1iZXIob3B0aW9ucy5taW5DYW52YXNIZWlnaHQpIHx8IDA7XG4gICAgICAgIGlmICh2aWV3TW9kZSA+IDEpIHtcbiAgICAgICAgICBtaW5DYW52YXNXaWR0aCA9IE1hdGgubWF4KG1pbkNhbnZhc1dpZHRoLCBjb250YWluZXJEYXRhLndpZHRoKTtcbiAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBNYXRoLm1heChtaW5DYW52YXNIZWlnaHQsIGNvbnRhaW5lckRhdGEuaGVpZ2h0KTtcbiAgICAgICAgICBpZiAodmlld01vZGUgPT09IDMpIHtcbiAgICAgICAgICAgIGlmIChtaW5DYW52YXNIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1pbkNhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICAgIG1pbkNhbnZhc1dpZHRoID0gbWluQ2FudmFzSGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBtaW5DYW52YXNXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2aWV3TW9kZSA+IDApIHtcbiAgICAgICAgICBpZiAobWluQ2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgIG1pbkNhbnZhc1dpZHRoID0gTWF0aC5tYXgobWluQ2FudmFzV2lkdGgsIGNyb3BwZWQgPyBjcm9wQm94RGF0YS53aWR0aCA6IDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWluQ2FudmFzSGVpZ2h0KSB7XG4gICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBNYXRoLm1heChtaW5DYW52YXNIZWlnaHQsIGNyb3BwZWQgPyBjcm9wQm94RGF0YS5oZWlnaHQgOiAwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNyb3BwZWQpIHtcbiAgICAgICAgICAgIG1pbkNhbnZhc1dpZHRoID0gY3JvcEJveERhdGEud2lkdGg7XG4gICAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBjcm9wQm94RGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICBpZiAobWluQ2FudmFzSGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBtaW5DYW52YXNXaWR0aCkge1xuICAgICAgICAgICAgICBtaW5DYW52YXNXaWR0aCA9IG1pbkNhbnZhc0hlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gbWluQ2FudmFzV2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgIHdpZHRoOiBtaW5DYW52YXNXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG1pbkNhbnZhc0hlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgbWluQ2FudmFzV2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplcy53aWR0aDtcbiAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMuaGVpZ2h0O1xuICAgICAgICBjYW52YXNEYXRhLm1pbldpZHRoID0gbWluQ2FudmFzV2lkdGg7XG4gICAgICAgIGNhbnZhc0RhdGEubWluSGVpZ2h0ID0gbWluQ2FudmFzSGVpZ2h0O1xuICAgICAgICBjYW52YXNEYXRhLm1heFdpZHRoID0gSW5maW5pdHk7XG4gICAgICAgIGNhbnZhc0RhdGEubWF4SGVpZ2h0ID0gSW5maW5pdHk7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25MaW1pdGVkKSB7XG4gICAgICAgIGlmICh2aWV3TW9kZSA+IChjcm9wcGVkID8gMCA6IDEpKSB7XG4gICAgICAgICAgdmFyIG5ld0NhbnZhc0xlZnQgPSBjb250YWluZXJEYXRhLndpZHRoIC0gY2FudmFzRGF0YS53aWR0aDtcbiAgICAgICAgICB2YXIgbmV3Q2FudmFzVG9wID0gY29udGFpbmVyRGF0YS5oZWlnaHQgLSBjYW52YXNEYXRhLmhlaWdodDtcbiAgICAgICAgICBjYW52YXNEYXRhLm1pbkxlZnQgPSBNYXRoLm1pbigwLCBuZXdDYW52YXNMZWZ0KTtcbiAgICAgICAgICBjYW52YXNEYXRhLm1pblRvcCA9IE1hdGgubWluKDAsIG5ld0NhbnZhc1RvcCk7XG4gICAgICAgICAgY2FudmFzRGF0YS5tYXhMZWZ0ID0gTWF0aC5tYXgoMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgICAgY2FudmFzRGF0YS5tYXhUb3AgPSBNYXRoLm1heCgwLCBuZXdDYW52YXNUb3ApO1xuICAgICAgICAgIGlmIChjcm9wcGVkICYmIHRoaXMubGltaXRlZCkge1xuICAgICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gTWF0aC5taW4oY3JvcEJveERhdGEubGVmdCwgY3JvcEJveERhdGEubGVmdCArIChjcm9wQm94RGF0YS53aWR0aCAtIGNhbnZhc0RhdGEud2lkdGgpKTtcbiAgICAgICAgICAgIGNhbnZhc0RhdGEubWluVG9wID0gTWF0aC5taW4oY3JvcEJveERhdGEudG9wLCBjcm9wQm94RGF0YS50b3AgKyAoY3JvcEJveERhdGEuaGVpZ2h0IC0gY2FudmFzRGF0YS5oZWlnaHQpKTtcbiAgICAgICAgICAgIGNhbnZhc0RhdGEubWF4TGVmdCA9IGNyb3BCb3hEYXRhLmxlZnQ7XG4gICAgICAgICAgICBjYW52YXNEYXRhLm1heFRvcCA9IGNyb3BCb3hEYXRhLnRvcDtcbiAgICAgICAgICAgIGlmICh2aWV3TW9kZSA9PT0gMikge1xuICAgICAgICAgICAgICBpZiAoY2FudmFzRGF0YS53aWR0aCA+PSBjb250YWluZXJEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgICAgICAgICAgY2FudmFzRGF0YS5tYXhMZWZ0ID0gTWF0aC5tYXgoMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGNhbnZhc0RhdGEuaGVpZ2h0ID49IGNvbnRhaW5lckRhdGEuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY2FudmFzRGF0YS5taW5Ub3AgPSBNYXRoLm1pbigwLCBuZXdDYW52YXNUb3ApO1xuICAgICAgICAgICAgICAgIGNhbnZhc0RhdGEubWF4VG9wID0gTWF0aC5tYXgoMCwgbmV3Q2FudmFzVG9wKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYW52YXNEYXRhLm1pbkxlZnQgPSAtY2FudmFzRGF0YS53aWR0aDtcbiAgICAgICAgICBjYW52YXNEYXRhLm1pblRvcCA9IC1jYW52YXNEYXRhLmhlaWdodDtcbiAgICAgICAgICBjYW52YXNEYXRhLm1heExlZnQgPSBjb250YWluZXJEYXRhLndpZHRoO1xuICAgICAgICAgIGNhbnZhc0RhdGEubWF4VG9wID0gY29udGFpbmVyRGF0YS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlckNhbnZhczogZnVuY3Rpb24gcmVuZGVyQ2FudmFzKGNoYW5nZWQsIHRyYW5zZm9ybWVkKSB7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG4gICAgICBpZiAodHJhbnNmb3JtZWQpIHtcbiAgICAgICAgdmFyIF9nZXRSb3RhdGVkU2l6ZXMgPSBnZXRSb3RhdGVkU2l6ZXMoe1xuICAgICAgICAgICAgd2lkdGg6IGltYWdlRGF0YS5uYXR1cmFsV2lkdGggKiBNYXRoLmFicyhpbWFnZURhdGEuc2NhbGVYIHx8IDEpLFxuICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZURhdGEubmF0dXJhbEhlaWdodCAqIE1hdGguYWJzKGltYWdlRGF0YS5zY2FsZVkgfHwgMSksXG4gICAgICAgICAgICBkZWdyZWU6IGltYWdlRGF0YS5yb3RhdGUgfHwgMFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5hdHVyYWxXaWR0aCA9IF9nZXRSb3RhdGVkU2l6ZXMud2lkdGgsXG4gICAgICAgICAgbmF0dXJhbEhlaWdodCA9IF9nZXRSb3RhdGVkU2l6ZXMuaGVpZ2h0O1xuICAgICAgICB2YXIgd2lkdGggPSBjYW52YXNEYXRhLndpZHRoICogKG5hdHVyYWxXaWR0aCAvIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoKTtcbiAgICAgICAgdmFyIGhlaWdodCA9IGNhbnZhc0RhdGEuaGVpZ2h0ICogKG5hdHVyYWxIZWlnaHQgLyBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQpO1xuICAgICAgICBjYW52YXNEYXRhLmxlZnQgLT0gKHdpZHRoIC0gY2FudmFzRGF0YS53aWR0aCkgLyAyO1xuICAgICAgICBjYW52YXNEYXRhLnRvcCAtPSAoaGVpZ2h0IC0gY2FudmFzRGF0YS5oZWlnaHQpIC8gMjtcbiAgICAgICAgY2FudmFzRGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXNEYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzRGF0YS5hc3BlY3RSYXRpbyA9IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoID0gbmF0dXJhbFdpZHRoO1xuICAgICAgICBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICB0aGlzLmxpbWl0Q2FudmFzKHRydWUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjYW52YXNEYXRhLndpZHRoID4gY2FudmFzRGF0YS5tYXhXaWR0aCB8fCBjYW52YXNEYXRhLndpZHRoIDwgY2FudmFzRGF0YS5taW5XaWR0aCkge1xuICAgICAgICBjYW52YXNEYXRhLmxlZnQgPSBjYW52YXNEYXRhLm9sZExlZnQ7XG4gICAgICB9XG4gICAgICBpZiAoY2FudmFzRGF0YS5oZWlnaHQgPiBjYW52YXNEYXRhLm1heEhlaWdodCB8fCBjYW52YXNEYXRhLmhlaWdodCA8IGNhbnZhc0RhdGEubWluSGVpZ2h0KSB7XG4gICAgICAgIGNhbnZhc0RhdGEudG9wID0gY2FudmFzRGF0YS5vbGRUb3A7XG4gICAgICB9XG4gICAgICBjYW52YXNEYXRhLndpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS53aWR0aCwgY2FudmFzRGF0YS5taW5XaWR0aCksIGNhbnZhc0RhdGEubWF4V2lkdGgpO1xuICAgICAgY2FudmFzRGF0YS5oZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChjYW52YXNEYXRhLmhlaWdodCwgY2FudmFzRGF0YS5taW5IZWlnaHQpLCBjYW52YXNEYXRhLm1heEhlaWdodCk7XG4gICAgICB0aGlzLmxpbWl0Q2FudmFzKGZhbHNlLCB0cnVlKTtcbiAgICAgIGNhbnZhc0RhdGEubGVmdCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEubGVmdCwgY2FudmFzRGF0YS5taW5MZWZ0KSwgY2FudmFzRGF0YS5tYXhMZWZ0KTtcbiAgICAgIGNhbnZhc0RhdGEudG9wID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS50b3AsIGNhbnZhc0RhdGEubWluVG9wKSwgY2FudmFzRGF0YS5tYXhUb3ApO1xuICAgICAgY2FudmFzRGF0YS5vbGRMZWZ0ID0gY2FudmFzRGF0YS5sZWZ0O1xuICAgICAgY2FudmFzRGF0YS5vbGRUb3AgPSBjYW52YXNEYXRhLnRvcDtcbiAgICAgIHNldFN0eWxlKHRoaXMuY2FudmFzLCBhc3NpZ24oe1xuICAgICAgICB3aWR0aDogY2FudmFzRGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjYW52YXNEYXRhLmhlaWdodFxuICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyh7XG4gICAgICAgIHRyYW5zbGF0ZVg6IGNhbnZhc0RhdGEubGVmdCxcbiAgICAgICAgdHJhbnNsYXRlWTogY2FudmFzRGF0YS50b3BcbiAgICAgIH0pKSk7XG4gICAgICB0aGlzLnJlbmRlckltYWdlKGNoYW5nZWQpO1xuICAgICAgaWYgKHRoaXMuY3JvcHBlZCAmJiB0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXJJbWFnZTogZnVuY3Rpb24gcmVuZGVySW1hZ2UoY2hhbmdlZCkge1xuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuICAgICAgdmFyIHdpZHRoID0gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aCAqIChjYW52YXNEYXRhLndpZHRoIC8gY2FudmFzRGF0YS5uYXR1cmFsV2lkdGgpO1xuICAgICAgdmFyIGhlaWdodCA9IGltYWdlRGF0YS5uYXR1cmFsSGVpZ2h0ICogKGNhbnZhc0RhdGEuaGVpZ2h0IC8gY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0KTtcbiAgICAgIGFzc2lnbihpbWFnZURhdGEsIHtcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgbGVmdDogKGNhbnZhc0RhdGEud2lkdGggLSB3aWR0aCkgLyAyLFxuICAgICAgICB0b3A6IChjYW52YXNEYXRhLmhlaWdodCAtIGhlaWdodCkgLyAyXG4gICAgICB9KTtcbiAgICAgIHNldFN0eWxlKHRoaXMuaW1hZ2UsIGFzc2lnbih7XG4gICAgICAgIHdpZHRoOiBpbWFnZURhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDogaW1hZ2VEYXRhLmhlaWdodFxuICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyhhc3NpZ24oe1xuICAgICAgICB0cmFuc2xhdGVYOiBpbWFnZURhdGEubGVmdCxcbiAgICAgICAgdHJhbnNsYXRlWTogaW1hZ2VEYXRhLnRvcFxuICAgICAgfSwgaW1hZ2VEYXRhKSkpKTtcbiAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMub3V0cHV0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbml0Q3JvcEJveDogZnVuY3Rpb24gaW5pdENyb3BCb3goKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IG9wdGlvbnMuYXNwZWN0UmF0aW8gfHwgb3B0aW9ucy5pbml0aWFsQXNwZWN0UmF0aW87XG4gICAgICB2YXIgYXV0b0Nyb3BBcmVhID0gTnVtYmVyKG9wdGlvbnMuYXV0b0Nyb3BBcmVhKSB8fCAwLjg7XG4gICAgICB2YXIgY3JvcEJveERhdGEgPSB7XG4gICAgICAgIHdpZHRoOiBjYW52YXNEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNhbnZhc0RhdGEuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgIGlmIChjYW52YXNEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvID4gY2FudmFzRGF0YS53aWR0aCkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IGNyb3BCb3hEYXRhLndpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3JvcEJveERhdGEud2lkdGggPSBjcm9wQm94RGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jcm9wQm94RGF0YSA9IGNyb3BCb3hEYXRhO1xuICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgIC8vIEluaXRpYWxpemUgYXV0byBjcm9wIGFyZWFcbiAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEud2lkdGgsIGNyb3BCb3hEYXRhLm1pbldpZHRoKSwgY3JvcEJveERhdGEubWF4V2lkdGgpO1xuICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEuaGVpZ2h0LCBjcm9wQm94RGF0YS5taW5IZWlnaHQpLCBjcm9wQm94RGF0YS5tYXhIZWlnaHQpO1xuXG4gICAgICAvLyBUaGUgd2lkdGgvaGVpZ2h0IG9mIGF1dG8gY3JvcCBhcmVhIG11c3QgbGFyZ2UgdGhhbiBcIm1pbldpZHRoL0hlaWdodFwiXG4gICAgICBjcm9wQm94RGF0YS53aWR0aCA9IE1hdGgubWF4KGNyb3BCb3hEYXRhLm1pbldpZHRoLCBjcm9wQm94RGF0YS53aWR0aCAqIGF1dG9Dcm9wQXJlYSk7XG4gICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBNYXRoLm1heChjcm9wQm94RGF0YS5taW5IZWlnaHQsIGNyb3BCb3hEYXRhLmhlaWdodCAqIGF1dG9Dcm9wQXJlYSk7XG4gICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gY2FudmFzRGF0YS5sZWZ0ICsgKGNhbnZhc0RhdGEud2lkdGggLSBjcm9wQm94RGF0YS53aWR0aCkgLyAyO1xuICAgICAgY3JvcEJveERhdGEudG9wID0gY2FudmFzRGF0YS50b3AgKyAoY2FudmFzRGF0YS5oZWlnaHQgLSBjcm9wQm94RGF0YS5oZWlnaHQpIC8gMjtcbiAgICAgIGNyb3BCb3hEYXRhLm9sZExlZnQgPSBjcm9wQm94RGF0YS5sZWZ0O1xuICAgICAgY3JvcEJveERhdGEub2xkVG9wID0gY3JvcEJveERhdGEudG9wO1xuICAgICAgdGhpcy5pbml0aWFsQ3JvcEJveERhdGEgPSBhc3NpZ24oe30sIGNyb3BCb3hEYXRhKTtcbiAgICB9LFxuICAgIGxpbWl0Q3JvcEJveDogZnVuY3Rpb24gbGltaXRDcm9wQm94KHNpemVMaW1pdGVkLCBwb3NpdGlvbkxpbWl0ZWQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGEsXG4gICAgICAgIGxpbWl0ZWQgPSB0aGlzLmxpbWl0ZWQ7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBvcHRpb25zLmFzcGVjdFJhdGlvO1xuICAgICAgaWYgKHNpemVMaW1pdGVkKSB7XG4gICAgICAgIHZhciBtaW5Dcm9wQm94V2lkdGggPSBOdW1iZXIob3B0aW9ucy5taW5Dcm9wQm94V2lkdGgpIHx8IDA7XG4gICAgICAgIHZhciBtaW5Dcm9wQm94SGVpZ2h0ID0gTnVtYmVyKG9wdGlvbnMubWluQ3JvcEJveEhlaWdodCkgfHwgMDtcbiAgICAgICAgdmFyIG1heENyb3BCb3hXaWR0aCA9IGxpbWl0ZWQgPyBNYXRoLm1pbihjb250YWluZXJEYXRhLndpZHRoLCBjYW52YXNEYXRhLndpZHRoLCBjYW52YXNEYXRhLndpZHRoICsgY2FudmFzRGF0YS5sZWZ0LCBjb250YWluZXJEYXRhLndpZHRoIC0gY2FudmFzRGF0YS5sZWZ0KSA6IGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgICAgIHZhciBtYXhDcm9wQm94SGVpZ2h0ID0gbGltaXRlZCA/IE1hdGgubWluKGNvbnRhaW5lckRhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLmhlaWdodCwgY2FudmFzRGF0YS5oZWlnaHQgKyBjYW52YXNEYXRhLnRvcCwgY29udGFpbmVyRGF0YS5oZWlnaHQgLSBjYW52YXNEYXRhLnRvcCkgOiBjb250YWluZXJEYXRhLmhlaWdodDtcblxuICAgICAgICAvLyBUaGUgbWluL21heENyb3BCb3hXaWR0aC9IZWlnaHQgbXVzdCBiZSBsZXNzIHRoYW4gY29udGFpbmVyJ3Mgd2lkdGgvaGVpZ2h0XG4gICAgICAgIG1pbkNyb3BCb3hXaWR0aCA9IE1hdGgubWluKG1pbkNyb3BCb3hXaWR0aCwgY29udGFpbmVyRGF0YS53aWR0aCk7XG4gICAgICAgIG1pbkNyb3BCb3hIZWlnaHQgPSBNYXRoLm1pbihtaW5Dcm9wQm94SGVpZ2h0LCBjb250YWluZXJEYXRhLmhlaWdodCk7XG4gICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgIGlmIChtaW5Dcm9wQm94V2lkdGggJiYgbWluQ3JvcEJveEhlaWdodCkge1xuICAgICAgICAgICAgaWYgKG1pbkNyb3BCb3hIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1pbkNyb3BCb3hXaWR0aCkge1xuICAgICAgICAgICAgICBtaW5Dcm9wQm94SGVpZ2h0ID0gbWluQ3JvcEJveFdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtaW5Dcm9wQm94V2lkdGggPSBtaW5Dcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChtaW5Dcm9wQm94V2lkdGgpIHtcbiAgICAgICAgICAgIG1pbkNyb3BCb3hIZWlnaHQgPSBtaW5Dcm9wQm94V2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2UgaWYgKG1pbkNyb3BCb3hIZWlnaHQpIHtcbiAgICAgICAgICAgIG1pbkNyb3BCb3hXaWR0aCA9IG1pbkNyb3BCb3hIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1heENyb3BCb3hIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1heENyb3BCb3hXaWR0aCkge1xuICAgICAgICAgICAgbWF4Q3JvcEJveEhlaWdodCA9IG1heENyb3BCb3hXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXhDcm9wQm94V2lkdGggPSBtYXhDcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIG1pbldpZHRoL0hlaWdodCBtdXN0IGJlIGxlc3MgdGhhbiBtYXhXaWR0aC9IZWlnaHRcbiAgICAgICAgY3JvcEJveERhdGEubWluV2lkdGggPSBNYXRoLm1pbihtaW5Dcm9wQm94V2lkdGgsIG1heENyb3BCb3hXaWR0aCk7XG4gICAgICAgIGNyb3BCb3hEYXRhLm1pbkhlaWdodCA9IE1hdGgubWluKG1pbkNyb3BCb3hIZWlnaHQsIG1heENyb3BCb3hIZWlnaHQpO1xuICAgICAgICBjcm9wQm94RGF0YS5tYXhXaWR0aCA9IG1heENyb3BCb3hXaWR0aDtcbiAgICAgICAgY3JvcEJveERhdGEubWF4SGVpZ2h0ID0gbWF4Q3JvcEJveEhlaWdodDtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbkxpbWl0ZWQpIHtcbiAgICAgICAgaWYgKGxpbWl0ZWQpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5taW5MZWZ0ID0gTWF0aC5tYXgoMCwgY2FudmFzRGF0YS5sZWZ0KTtcbiAgICAgICAgICBjcm9wQm94RGF0YS5taW5Ub3AgPSBNYXRoLm1heCgwLCBjYW52YXNEYXRhLnRvcCk7XG4gICAgICAgICAgY3JvcEJveERhdGEubWF4TGVmdCA9IE1hdGgubWluKGNvbnRhaW5lckRhdGEud2lkdGgsIGNhbnZhc0RhdGEubGVmdCArIGNhbnZhc0RhdGEud2lkdGgpIC0gY3JvcEJveERhdGEud2lkdGg7XG4gICAgICAgICAgY3JvcEJveERhdGEubWF4VG9wID0gTWF0aC5taW4oY29udGFpbmVyRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEudG9wICsgY2FudmFzRGF0YS5oZWlnaHQpIC0gY3JvcEJveERhdGEuaGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1pbkxlZnQgPSAwO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1pblRvcCA9IDA7XG4gICAgICAgICAgY3JvcEJveERhdGEubWF4TGVmdCA9IGNvbnRhaW5lckRhdGEud2lkdGggLSBjcm9wQm94RGF0YS53aWR0aDtcbiAgICAgICAgICBjcm9wQm94RGF0YS5tYXhUb3AgPSBjb250YWluZXJEYXRhLmhlaWdodCAtIGNyb3BCb3hEYXRhLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyQ3JvcEJveDogZnVuY3Rpb24gcmVuZGVyQ3JvcEJveCgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICBpZiAoY3JvcEJveERhdGEud2lkdGggPiBjcm9wQm94RGF0YS5tYXhXaWR0aCB8fCBjcm9wQm94RGF0YS53aWR0aCA8IGNyb3BCb3hEYXRhLm1pbldpZHRoKSB7XG4gICAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBjcm9wQm94RGF0YS5vbGRMZWZ0O1xuICAgICAgfVxuICAgICAgaWYgKGNyb3BCb3hEYXRhLmhlaWdodCA+IGNyb3BCb3hEYXRhLm1heEhlaWdodCB8fCBjcm9wQm94RGF0YS5oZWlnaHQgPCBjcm9wQm94RGF0YS5taW5IZWlnaHQpIHtcbiAgICAgICAgY3JvcEJveERhdGEudG9wID0gY3JvcEJveERhdGEub2xkVG9wO1xuICAgICAgfVxuICAgICAgY3JvcEJveERhdGEud2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS53aWR0aCwgY3JvcEJveERhdGEubWluV2lkdGgpLCBjcm9wQm94RGF0YS5tYXhXaWR0aCk7XG4gICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS5oZWlnaHQsIGNyb3BCb3hEYXRhLm1pbkhlaWdodCksIGNyb3BCb3hEYXRhLm1heEhlaWdodCk7XG4gICAgICB0aGlzLmxpbWl0Q3JvcEJveChmYWxzZSwgdHJ1ZSk7XG4gICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEubGVmdCwgY3JvcEJveERhdGEubWluTGVmdCksIGNyb3BCb3hEYXRhLm1heExlZnQpO1xuICAgICAgY3JvcEJveERhdGEudG9wID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEudG9wLCBjcm9wQm94RGF0YS5taW5Ub3ApLCBjcm9wQm94RGF0YS5tYXhUb3ApO1xuICAgICAgY3JvcEJveERhdGEub2xkTGVmdCA9IGNyb3BCb3hEYXRhLmxlZnQ7XG4gICAgICBjcm9wQm94RGF0YS5vbGRUb3AgPSBjcm9wQm94RGF0YS50b3A7XG4gICAgICBpZiAob3B0aW9ucy5tb3ZhYmxlICYmIG9wdGlvbnMuY3JvcEJveE1vdmFibGUpIHtcbiAgICAgICAgLy8gVHVybiB0byBtb3ZlIHRoZSBjYW52YXMgd2hlbiB0aGUgY3JvcCBib3ggaXMgZXF1YWwgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICBzZXREYXRhKHRoaXMuZmFjZSwgREFUQV9BQ1RJT04sIGNyb3BCb3hEYXRhLndpZHRoID49IGNvbnRhaW5lckRhdGEud2lkdGggJiYgY3JvcEJveERhdGEuaGVpZ2h0ID49IGNvbnRhaW5lckRhdGEuaGVpZ2h0ID8gQUNUSU9OX01PVkUgOiBBQ1RJT05fQUxMKTtcbiAgICAgIH1cbiAgICAgIHNldFN0eWxlKHRoaXMuY3JvcEJveCwgYXNzaWduKHtcbiAgICAgICAgd2lkdGg6IGNyb3BCb3hEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNyb3BCb3hEYXRhLmhlaWdodFxuICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyh7XG4gICAgICAgIHRyYW5zbGF0ZVg6IGNyb3BCb3hEYXRhLmxlZnQsXG4gICAgICAgIHRyYW5zbGF0ZVk6IGNyb3BCb3hEYXRhLnRvcFxuICAgICAgfSkpKTtcbiAgICAgIGlmICh0aGlzLmNyb3BwZWQgJiYgdGhpcy5saW1pdGVkKSB7XG4gICAgICAgIHRoaXMubGltaXRDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG91dHB1dDogZnVuY3Rpb24gb3V0cHV0KCkge1xuICAgICAgdGhpcy5wcmV2aWV3KCk7XG4gICAgICBkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfQ1JPUCwgdGhpcy5nZXREYXRhKCkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcHJldmlldyA9IHtcbiAgICBpbml0UHJldmlldzogZnVuY3Rpb24gaW5pdFByZXZpZXcoKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgY3Jvc3NPcmlnaW4gPSB0aGlzLmNyb3NzT3JpZ2luO1xuICAgICAgdmFyIHByZXZpZXcgPSB0aGlzLm9wdGlvbnMucHJldmlldztcbiAgICAgIHZhciB1cmwgPSBjcm9zc09yaWdpbiA/IHRoaXMuY3Jvc3NPcmlnaW5VcmwgOiB0aGlzLnVybDtcbiAgICAgIHZhciBhbHQgPSBlbGVtZW50LmFsdCB8fCAnVGhlIGltYWdlIHRvIHByZXZpZXcnO1xuICAgICAgdmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpZiAoY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgIH1cbiAgICAgIGltYWdlLnNyYyA9IHVybDtcbiAgICAgIGltYWdlLmFsdCA9IGFsdDtcbiAgICAgIHRoaXMudmlld0JveC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICB0aGlzLnZpZXdCb3hJbWFnZSA9IGltYWdlO1xuICAgICAgaWYgKCFwcmV2aWV3KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBwcmV2aWV3cyA9IHByZXZpZXc7XG4gICAgICBpZiAodHlwZW9mIHByZXZpZXcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHByZXZpZXdzID0gZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocHJldmlldyk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZpZXcucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICBwcmV2aWV3cyA9IFtwcmV2aWV3XTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJldmlld3MgPSBwcmV2aWV3cztcbiAgICAgIGZvckVhY2gocHJldmlld3MsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgc2l6ZSBmb3IgcmVjb3ZlclxuICAgICAgICBzZXREYXRhKGVsLCBEQVRBX1BSRVZJRVcsIHtcbiAgICAgICAgICB3aWR0aDogZWwub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBlbC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgaHRtbDogZWwuaW5uZXJIVE1MXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgICAgfVxuICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICBpbWcuYWx0ID0gYWx0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPdmVycmlkZSBpbWcgZWxlbWVudCBzdHlsZXNcbiAgICAgICAgICogQWRkIGBkaXNwbGF5OmJsb2NrYCB0byBhdm9pZCBtYXJnaW4gdG9wIGlzc3VlXG4gICAgICAgICAqIEFkZCBgaGVpZ2h0OmF1dG9gIHRvIG92ZXJyaWRlIGBoZWlnaHRgIGF0dHJpYnV0ZSBvbiBJRThcbiAgICAgICAgICogKE9jY3VyIG9ubHkgd2hlbiBtYXJnaW4tdG9wIDw9IC1oZWlnaHQpXG4gICAgICAgICAqL1xuICAgICAgICBpbWcuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OmJsb2NrOycgKyAnd2lkdGg6MTAwJTsnICsgJ2hlaWdodDphdXRvOycgKyAnbWluLXdpZHRoOjAhaW1wb3J0YW50OycgKyAnbWluLWhlaWdodDowIWltcG9ydGFudDsnICsgJ21heC13aWR0aDpub25lIWltcG9ydGFudDsnICsgJ21heC1oZWlnaHQ6bm9uZSFpbXBvcnRhbnQ7JyArICdpbWFnZS1vcmllbnRhdGlvbjowZGVnIWltcG9ydGFudDtcIic7XG4gICAgICAgIGVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICByZXNldFByZXZpZXc6IGZ1bmN0aW9uIHJlc2V0UHJldmlldygpIHtcbiAgICAgIGZvckVhY2godGhpcy5wcmV2aWV3cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXREYXRhKGVsZW1lbnQsIERBVEFfUFJFVklFVyk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIHtcbiAgICAgICAgICB3aWR0aDogZGF0YS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGRhdGEuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGRhdGEuaHRtbDtcbiAgICAgICAgcmVtb3ZlRGF0YShlbGVtZW50LCBEQVRBX1BSRVZJRVcpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBwcmV2aWV3OiBmdW5jdGlvbiBwcmV2aWV3KCkge1xuICAgICAgdmFyIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhLFxuICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICB2YXIgY3JvcEJveFdpZHRoID0gY3JvcEJveERhdGEud2lkdGgsXG4gICAgICAgIGNyb3BCb3hIZWlnaHQgPSBjcm9wQm94RGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgd2lkdGggPSBpbWFnZURhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IGltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgbGVmdCA9IGNyb3BCb3hEYXRhLmxlZnQgLSBjYW52YXNEYXRhLmxlZnQgLSBpbWFnZURhdGEubGVmdDtcbiAgICAgIHZhciB0b3AgPSBjcm9wQm94RGF0YS50b3AgLSBjYW52YXNEYXRhLnRvcCAtIGltYWdlRGF0YS50b3A7XG4gICAgICBpZiAoIXRoaXMuY3JvcHBlZCB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldFN0eWxlKHRoaXMudmlld0JveEltYWdlLCBhc3NpZ24oe1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9LCBnZXRUcmFuc2Zvcm1zKGFzc2lnbih7XG4gICAgICAgIHRyYW5zbGF0ZVg6IC1sZWZ0LFxuICAgICAgICB0cmFuc2xhdGVZOiAtdG9wXG4gICAgICB9LCBpbWFnZURhdGEpKSkpO1xuICAgICAgZm9yRWFjaCh0aGlzLnByZXZpZXdzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgZGF0YSA9IGdldERhdGEoZWxlbWVudCwgREFUQV9QUkVWSUVXKTtcbiAgICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgICB2YXIgb3JpZ2luYWxIZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gb3JpZ2luYWxXaWR0aDtcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IG9yaWdpbmFsSGVpZ2h0O1xuICAgICAgICB2YXIgcmF0aW8gPSAxO1xuICAgICAgICBpZiAoY3JvcEJveFdpZHRoKSB7XG4gICAgICAgICAgcmF0aW8gPSBvcmlnaW5hbFdpZHRoIC8gY3JvcEJveFdpZHRoO1xuICAgICAgICAgIG5ld0hlaWdodCA9IGNyb3BCb3hIZWlnaHQgKiByYXRpbztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3JvcEJveEhlaWdodCAmJiBuZXdIZWlnaHQgPiBvcmlnaW5hbEhlaWdodCkge1xuICAgICAgICAgIHJhdGlvID0gb3JpZ2luYWxIZWlnaHQgLyBjcm9wQm94SGVpZ2h0O1xuICAgICAgICAgIG5ld1dpZHRoID0gY3JvcEJveFdpZHRoICogcmF0aW87XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gb3JpZ2luYWxIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwge1xuICAgICAgICAgIHdpZHRoOiBuZXdXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0U3R5bGUoZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0sIGFzc2lnbih7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoICogcmF0aW8sXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiByYXRpb1xuICAgICAgICB9LCBnZXRUcmFuc2Zvcm1zKGFzc2lnbih7XG4gICAgICAgICAgdHJhbnNsYXRlWDogLWxlZnQgKiByYXRpbyxcbiAgICAgICAgICB0cmFuc2xhdGVZOiAtdG9wICogcmF0aW9cbiAgICAgICAgfSwgaW1hZ2VEYXRhKSkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZXZlbnRzID0ge1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgY3JvcHBlciA9IHRoaXMuY3JvcHBlcjtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcHN0YXJ0KSkge1xuICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QX1NUQVJULCBvcHRpb25zLmNyb3BzdGFydCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3Btb3ZlKSkge1xuICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QX01PVkUsIG9wdGlvbnMuY3JvcG1vdmUpO1xuICAgICAgfVxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wZW5kKSkge1xuICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QX0VORCwgb3B0aW9ucy5jcm9wZW5kKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcCkpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUCwgb3B0aW9ucy5jcm9wKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuem9vbSkpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfWk9PTSwgb3B0aW9ucy56b29tKTtcbiAgICAgIH1cbiAgICAgIGFkZExpc3RlbmVyKGNyb3BwZXIsIEVWRU5UX1BPSU5URVJfRE9XTiwgdGhpcy5vbkNyb3BTdGFydCA9IHRoaXMuY3JvcFN0YXJ0LmJpbmQodGhpcykpO1xuICAgICAgaWYgKG9wdGlvbnMuem9vbWFibGUgJiYgb3B0aW9ucy56b29tT25XaGVlbCkge1xuICAgICAgICBhZGRMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9XSEVFTCwgdGhpcy5vbldoZWVsID0gdGhpcy53aGVlbC5iaW5kKHRoaXMpLCB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnRvZ2dsZURyYWdNb2RlT25EYmxjbGljaykge1xuICAgICAgICBhZGRMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9EQkxDTElDSywgdGhpcy5vbkRibGNsaWNrID0gdGhpcy5kYmxjbGljay5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQub3duZXJEb2N1bWVudCwgRVZFTlRfUE9JTlRFUl9NT1ZFLCB0aGlzLm9uQ3JvcE1vdmUgPSB0aGlzLmNyb3BNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudC5vd25lckRvY3VtZW50LCBFVkVOVF9QT0lOVEVSX1VQLCB0aGlzLm9uQ3JvcEVuZCA9IHRoaXMuY3JvcEVuZC5iaW5kKHRoaXMpKTtcbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIod2luZG93LCBFVkVOVF9SRVNJWkUsIHRoaXMub25SZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNyb3BwZXIgPSB0aGlzLmNyb3BwZXI7XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3BzdGFydCkpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9TVEFSVCwgb3B0aW9ucy5jcm9wc3RhcnQpO1xuICAgICAgfVxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wbW92ZSkpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9NT1ZFLCBvcHRpb25zLmNyb3Btb3ZlKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcGVuZCkpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9FTkQsIG9wdGlvbnMuY3JvcGVuZCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3ApKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1AsIG9wdGlvbnMuY3JvcCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnpvb20pKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1pPT00sIG9wdGlvbnMuem9vbSk7XG4gICAgICB9XG4gICAgICByZW1vdmVMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9QT0lOVEVSX0RPV04sIHRoaXMub25Dcm9wU3RhcnQpO1xuICAgICAgaWYgKG9wdGlvbnMuem9vbWFibGUgJiYgb3B0aW9ucy56b29tT25XaGVlbCkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9XSEVFTCwgdGhpcy5vbldoZWVsLCB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnRvZ2dsZURyYWdNb2RlT25EYmxjbGljaykge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9EQkxDTElDSywgdGhpcy5vbkRibGNsaWNrKTtcbiAgICAgIH1cbiAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQub3duZXJEb2N1bWVudCwgRVZFTlRfUE9JTlRFUl9NT1ZFLCB0aGlzLm9uQ3JvcE1vdmUpO1xuICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudC5vd25lckRvY3VtZW50LCBFVkVOVF9QT0lOVEVSX1VQLCB0aGlzLm9uQ3JvcEVuZCk7XG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHdpbmRvdywgRVZFTlRfUkVTSVpFLCB0aGlzLm9uUmVzaXplKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZXJzID0ge1xuICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLFxuICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhO1xuICAgICAgdmFyIHJhdGlvWCA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aCAvIGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgICB2YXIgcmF0aW9ZID0gY29udGFpbmVyLm9mZnNldEhlaWdodCAvIGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgICAgdmFyIHJhdGlvID0gTWF0aC5hYnMocmF0aW9YIC0gMSkgPiBNYXRoLmFicyhyYXRpb1kgLSAxKSA/IHJhdGlvWCA6IHJhdGlvWTtcblxuICAgICAgLy8gUmVzaXplIHdoZW4gd2lkdGggY2hhbmdlZCBvciBoZWlnaHQgY2hhbmdlZFxuICAgICAgaWYgKHJhdGlvICE9PSAxKSB7XG4gICAgICAgIHZhciBjYW52YXNEYXRhO1xuICAgICAgICB2YXIgY3JvcEJveERhdGE7XG4gICAgICAgIGlmIChvcHRpb25zLnJlc3RvcmUpIHtcbiAgICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5nZXRDYW52YXNEYXRhKCk7XG4gICAgICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmdldENyb3BCb3hEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMucmVzdG9yZSkge1xuICAgICAgICAgIHRoaXMuc2V0Q2FudmFzRGF0YShmb3JFYWNoKGNhbnZhc0RhdGEsIGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgICBjYW52YXNEYXRhW2ldID0gbiAqIHJhdGlvO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgICB0aGlzLnNldENyb3BCb3hEYXRhKGZvckVhY2goY3JvcEJveERhdGEsIGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgICBjcm9wQm94RGF0YVtpXSA9IG4gKiByYXRpbztcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRibGNsaWNrOiBmdW5jdGlvbiBkYmxjbGljaygpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMub3B0aW9ucy5kcmFnTW9kZSA9PT0gRFJBR19NT0RFX05PTkUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXREcmFnTW9kZShoYXNDbGFzcyh0aGlzLmRyYWdCb3gsIENMQVNTX0NST1ApID8gRFJBR19NT0RFX01PVkUgOiBEUkFHX01PREVfQ1JPUCk7XG4gICAgfSxcbiAgICB3aGVlbDogZnVuY3Rpb24gd2hlZWwoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgcmF0aW8gPSBOdW1iZXIodGhpcy5vcHRpb25zLndoZWVsWm9vbVJhdGlvKSB8fCAwLjE7XG4gICAgICB2YXIgZGVsdGEgPSAxO1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gTGltaXQgd2hlZWwgc3BlZWQgdG8gcHJldmVudCB6b29tIHRvbyBmYXN0ICgjMjEpXG4gICAgICBpZiAodGhpcy53aGVlbGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLndoZWVsaW5nID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy53aGVlbGluZyA9IGZhbHNlO1xuICAgICAgfSwgNTApO1xuICAgICAgaWYgKGV2ZW50LmRlbHRhWSkge1xuICAgICAgICBkZWx0YSA9IGV2ZW50LmRlbHRhWSA+IDAgPyAxIDogLTE7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LndoZWVsRGVsdGEpIHtcbiAgICAgICAgZGVsdGEgPSAtZXZlbnQud2hlZWxEZWx0YSAvIDEyMDtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGV0YWlsKSB7XG4gICAgICAgIGRlbHRhID0gZXZlbnQuZGV0YWlsID4gMCA/IDEgOiAtMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuem9vbSgtZGVsdGEgKiByYXRpbywgZXZlbnQpO1xuICAgIH0sXG4gICAgY3JvcFN0YXJ0OiBmdW5jdGlvbiBjcm9wU3RhcnQoZXZlbnQpIHtcbiAgICAgIHZhciBidXR0b25zID0gZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWRcblxuICAgICAgLy8gSGFuZGxlIG1vdXNlIGV2ZW50IGFuZCBwb2ludGVyIGV2ZW50IGFuZCBpZ25vcmUgdG91Y2ggZXZlbnRcbiAgICAgIHx8IChldmVudC50eXBlID09PSAnbW91c2Vkb3duJyB8fCBldmVudC50eXBlID09PSAncG9pbnRlcmRvd24nICYmIGV2ZW50LnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSAmJiAoXG4gICAgICAvLyBObyBwcmltYXJ5IGJ1dHRvbiAoVXN1YWxseSB0aGUgbGVmdCBidXR0b24pXG4gICAgICBpc051bWJlcihidXR0b25zKSAmJiBidXR0b25zICE9PSAxIHx8IGlzTnVtYmVyKGJ1dHRvbikgJiYgYnV0dG9uICE9PSAwXG5cbiAgICAgIC8vIE9wZW4gY29udGV4dCBtZW51XG4gICAgICB8fCBldmVudC5jdHJsS2V5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgcG9pbnRlcnMgPSB0aGlzLnBvaW50ZXJzO1xuICAgICAgdmFyIGFjdGlvbjtcbiAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgICAvLyBIYW5kbGUgdG91Y2ggZXZlbnRcbiAgICAgICAgZm9yRWFjaChldmVudC5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgICAgcG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl0gPSBnZXRQb2ludGVyKHRvdWNoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgbW91c2UgZXZlbnQgYW5kIHBvaW50ZXIgZXZlbnRcbiAgICAgICAgcG9pbnRlcnNbZXZlbnQucG9pbnRlcklkIHx8IDBdID0gZ2V0UG9pbnRlcihldmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXMocG9pbnRlcnMpLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy56b29tYWJsZSAmJiBvcHRpb25zLnpvb21PblRvdWNoKSB7XG4gICAgICAgIGFjdGlvbiA9IEFDVElPTl9aT09NO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aW9uID0gZ2V0RGF0YShldmVudC50YXJnZXQsIERBVEFfQUNUSU9OKTtcbiAgICAgIH1cbiAgICAgIGlmICghUkVHRVhQX0FDVElPTlMudGVzdChhY3Rpb24pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfQ1JPUF9TVEFSVCwge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgIH0pID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoaXMgbGluZSBpcyByZXF1aXJlZCBmb3IgcHJldmVudGluZyBwYWdlIHpvb21pbmcgaW4gaU9TIGJyb3dzZXJzXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICB0aGlzLmNyb3BwaW5nID0gZmFsc2U7XG4gICAgICBpZiAoYWN0aW9uID09PSBBQ1RJT05fQ1JPUCkge1xuICAgICAgICB0aGlzLmNyb3BwaW5nID0gdHJ1ZTtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5kcmFnQm94LCBDTEFTU19NT0RBTCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjcm9wTW92ZTogZnVuY3Rpb24gY3JvcE1vdmUoZXZlbnQpIHtcbiAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGlvbjtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICFhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX0NST1BfTU9WRSwge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgIH0pID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgZm9yRWFjaChldmVudC5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgICAgLy8gVGhlIGZpcnN0IHBhcmFtZXRlciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCAoIzQzMilcbiAgICAgICAgICBhc3NpZ24ocG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl0gfHwge30sIGdldFBvaW50ZXIodG91Y2gsIHRydWUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhc3NpZ24ocG9pbnRlcnNbZXZlbnQucG9pbnRlcklkIHx8IDBdIHx8IHt9LCBnZXRQb2ludGVyKGV2ZW50LCB0cnVlKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZShldmVudCk7XG4gICAgfSxcbiAgICBjcm9wRW5kOiBmdW5jdGlvbiBjcm9wRW5kKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3Rpb24sXG4gICAgICAgIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgICBmb3JFYWNoKGV2ZW50LmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbiAodG91Y2gpIHtcbiAgICAgICAgICBkZWxldGUgcG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHBvaW50ZXJzW2V2ZW50LnBvaW50ZXJJZCB8fCAwXTtcbiAgICAgIH1cbiAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHBvaW50ZXJzKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNyb3BwaW5nKSB7XG4gICAgICAgIHRoaXMuY3JvcHBpbmcgPSBmYWxzZTtcbiAgICAgICAgdG9nZ2xlQ2xhc3ModGhpcy5kcmFnQm94LCBDTEFTU19NT0RBTCwgdGhpcy5jcm9wcGVkICYmIHRoaXMub3B0aW9ucy5tb2RhbCk7XG4gICAgICB9XG4gICAgICBkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfQ1JPUF9FTkQsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNoYW5nZSA9IHtcbiAgICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZShldmVudCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgIGNvbnRhaW5lckRhdGEgPSB0aGlzLmNvbnRhaW5lckRhdGEsXG4gICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YSxcbiAgICAgICAgcG9pbnRlcnMgPSB0aGlzLnBvaW50ZXJzO1xuICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aW9uO1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gb3B0aW9ucy5hc3BlY3RSYXRpbztcbiAgICAgIHZhciBsZWZ0ID0gY3JvcEJveERhdGEubGVmdCxcbiAgICAgICAgdG9wID0gY3JvcEJveERhdGEudG9wLFxuICAgICAgICB3aWR0aCA9IGNyb3BCb3hEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBjcm9wQm94RGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG4gICAgICB2YXIgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgICAgdmFyIG1pbkxlZnQgPSAwO1xuICAgICAgdmFyIG1pblRvcCA9IDA7XG4gICAgICB2YXIgbWF4V2lkdGggPSBjb250YWluZXJEYXRhLndpZHRoO1xuICAgICAgdmFyIG1heEhlaWdodCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgICAgdmFyIHJlbmRlcmFibGUgPSB0cnVlO1xuICAgICAgdmFyIG9mZnNldDtcblxuICAgICAgLy8gTG9ja2luZyBhc3BlY3QgcmF0aW8gaW4gXCJmcmVlIG1vZGVcIiBieSBob2xkaW5nIHNoaWZ0IGtleVxuICAgICAgaWYgKCFhc3BlY3RSYXRpbyAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoICYmIGhlaWdodCA/IHdpZHRoIC8gaGVpZ2h0IDogMTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgbWluTGVmdCA9IGNyb3BCb3hEYXRhLm1pbkxlZnQ7XG4gICAgICAgIG1pblRvcCA9IGNyb3BCb3hEYXRhLm1pblRvcDtcbiAgICAgICAgbWF4V2lkdGggPSBtaW5MZWZ0ICsgTWF0aC5taW4oY29udGFpbmVyRGF0YS53aWR0aCwgY2FudmFzRGF0YS53aWR0aCwgY2FudmFzRGF0YS5sZWZ0ICsgY2FudmFzRGF0YS53aWR0aCk7XG4gICAgICAgIG1heEhlaWdodCA9IG1pblRvcCArIE1hdGgubWluKGNvbnRhaW5lckRhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLmhlaWdodCwgY2FudmFzRGF0YS50b3AgKyBjYW52YXNEYXRhLmhlaWdodCk7XG4gICAgICB9XG4gICAgICB2YXIgcG9pbnRlciA9IHBvaW50ZXJzW09iamVjdC5rZXlzKHBvaW50ZXJzKVswXV07XG4gICAgICB2YXIgcmFuZ2UgPSB7XG4gICAgICAgIHg6IHBvaW50ZXIuZW5kWCAtIHBvaW50ZXIuc3RhcnRYLFxuICAgICAgICB5OiBwb2ludGVyLmVuZFkgLSBwb2ludGVyLnN0YXJ0WVxuICAgICAgfTtcbiAgICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKHNpZGUpIHtcbiAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgY2FzZSBBQ1RJT05fRUFTVDpcbiAgICAgICAgICAgIGlmIChyaWdodCArIHJhbmdlLnggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICByYW5nZS54ID0gbWF4V2lkdGggLSByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQUNUSU9OX1dFU1Q6XG4gICAgICAgICAgICBpZiAobGVmdCArIHJhbmdlLnggPCBtaW5MZWZ0KSB7XG4gICAgICAgICAgICAgIHJhbmdlLnggPSBtaW5MZWZ0IC0gbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQUNUSU9OX05PUlRIOlxuICAgICAgICAgICAgaWYgKHRvcCArIHJhbmdlLnkgPCBtaW5Ub3ApIHtcbiAgICAgICAgICAgICAgcmFuZ2UueSA9IG1pblRvcCAtIHRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQUNUSU9OX1NPVVRIOlxuICAgICAgICAgICAgaWYgKGJvdHRvbSArIHJhbmdlLnkgPiBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgcmFuZ2UueSA9IG1heEhlaWdodCAtIGJvdHRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgLy8gTW92ZSBjcm9wIGJveFxuICAgICAgICBjYXNlIEFDVElPTl9BTEw6XG4gICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIFJlc2l6ZSBjcm9wIGJveFxuICAgICAgICBjYXNlIEFDVElPTl9FQVNUOlxuICAgICAgICAgIGlmIChyYW5nZS54ID49IDAgJiYgKHJpZ2h0ID49IG1heFdpZHRoIHx8IGFzcGVjdFJhdGlvICYmICh0b3AgPD0gbWluVG9wIHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSkge1xuICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoZWNrKEFDVElPTl9FQVNUKTtcbiAgICAgICAgICB3aWR0aCArPSByYW5nZS54O1xuICAgICAgICAgIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9XRVNUO1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB0b3AgKz0gKGNyb3BCb3hEYXRhLmhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fTk9SVEg6XG4gICAgICAgICAgaWYgKHJhbmdlLnkgPD0gMCAmJiAodG9wIDw9IG1pblRvcCB8fCBhc3BlY3RSYXRpbyAmJiAobGVmdCA8PSBtaW5MZWZ0IHx8IHJpZ2h0ID49IG1heFdpZHRoKSkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEg7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgbGVmdCArPSAoY3JvcEJveERhdGEud2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fV0VTVDpcbiAgICAgICAgICBpZiAocmFuZ2UueCA8PSAwICYmIChsZWZ0IDw9IG1pbkxlZnQgfHwgYXNwZWN0UmF0aW8gJiYgKHRvcCA8PSBtaW5Ub3AgfHwgYm90dG9tID49IG1heEhlaWdodCkpKSB7XG4gICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hlY2soQUNUSU9OX1dFU1QpO1xuICAgICAgICAgIHdpZHRoIC09IHJhbmdlLng7XG4gICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9FQVNUO1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB0b3AgKz0gKGNyb3BCb3hEYXRhLmhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fU09VVEg6XG4gICAgICAgICAgaWYgKHJhbmdlLnkgPj0gMCAmJiAoYm90dG9tID49IG1heEhlaWdodCB8fCBhc3BlY3RSYXRpbyAmJiAobGVmdCA8PSBtaW5MZWZ0IHx8IHJpZ2h0ID49IG1heFdpZHRoKSkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGVjayhBQ1RJT05fU09VVEgpO1xuICAgICAgICAgIGhlaWdodCArPSByYW5nZS55O1xuICAgICAgICAgIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEg7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgbGVmdCArPSAoY3JvcEJveERhdGEud2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fTk9SVEhfRUFTVDpcbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGlmIChyYW5nZS55IDw9IDAgJiYgKHRvcCA8PSBtaW5Ub3AgfHwgcmlnaHQgPj0gbWF4V2lkdGgpKSB7XG4gICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgICAgaGVpZ2h0IC09IHJhbmdlLnk7XG4gICAgICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9OT1JUSCk7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fRUFTVCk7XG4gICAgICAgICAgICBpZiAocmFuZ2UueCA+PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChyaWdodCA8IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS55IDw9IDAgJiYgdG9wIDw9IG1pblRvcCkge1xuICAgICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2lkdGggKz0gcmFuZ2UueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyYW5nZS55IDw9IDApIHtcbiAgICAgICAgICAgICAgaWYgKHRvcCA+IG1pblRvcCkge1xuICAgICAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIX1dFU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIX1dFU1Q7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fTk9SVEhfV0VTVDpcbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGlmIChyYW5nZS55IDw9IDAgJiYgKHRvcCA8PSBtaW5Ub3AgfHwgbGVmdCA8PSBtaW5MZWZ0KSkge1xuICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2soQUNUSU9OX05PUlRIKTtcbiAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgbGVmdCArPSBjcm9wQm94RGF0YS53aWR0aCAtIHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX1dFU1QpO1xuICAgICAgICAgICAgaWYgKHJhbmdlLnggPD0gMCkge1xuICAgICAgICAgICAgICBpZiAobGVmdCA+IG1pbkxlZnQpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS55IDw9IDAgJiYgdG9wIDw9IG1pblRvcCkge1xuICAgICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2lkdGggLT0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJhbmdlLnkgPD0gMCkge1xuICAgICAgICAgICAgICBpZiAodG9wID4gbWluVG9wKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0IC09IHJhbmdlLnk7XG4gICAgICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHdpZHRoIDwgMCAmJiBoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9TT1VUSF9XRVNUO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEFDVElPTl9TT1VUSF9XRVNUOlxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgaWYgKHJhbmdlLnggPD0gMCAmJiAobGVmdCA8PSBtaW5MZWZ0IHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSB7XG4gICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fV0VTVCk7XG4gICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX1NPVVRIKTtcbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9XRVNUKTtcbiAgICAgICAgICAgIGlmIChyYW5nZS54IDw9IDApIHtcbiAgICAgICAgICAgICAgaWYgKGxlZnQgPiBtaW5MZWZ0KSB7XG4gICAgICAgICAgICAgICAgd2lkdGggLT0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHJhbmdlLng7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2UueSA+PSAwICYmIGJvdHRvbSA+PSBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpZHRoIC09IHJhbmdlLng7XG4gICAgICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyYW5nZS55ID49IDApIHtcbiAgICAgICAgICAgICAgaWYgKGJvdHRvbSA8IG1heEhlaWdodCkge1xuICAgICAgICAgICAgICAgIGhlaWdodCArPSByYW5nZS55O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoZWlnaHQgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHdpZHRoIDwgMCAmJiBoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9OT1JUSF9XRVNUO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEFDVElPTl9TT1VUSF9FQVNUOlxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgaWYgKHJhbmdlLnggPj0gMCAmJiAocmlnaHQgPj0gbWF4V2lkdGggfHwgYm90dG9tID49IG1heEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9FQVNUKTtcbiAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fU09VVEgpO1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX0VBU1QpO1xuICAgICAgICAgICAgaWYgKHJhbmdlLnggPj0gMCkge1xuICAgICAgICAgICAgICBpZiAocmlnaHQgPCBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2UueSA+PSAwICYmIGJvdHRvbSA+PSBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmFuZ2UueSA+PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChib3R0b20gPCBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIX1dFU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIX1dFU1Q7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBNb3ZlIGNhbnZhc1xuICAgICAgICBjYXNlIEFDVElPTl9NT1ZFOlxuICAgICAgICAgIHRoaXMubW92ZShyYW5nZS54LCByYW5nZS55KTtcbiAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gWm9vbSBjYW52YXNcbiAgICAgICAgY2FzZSBBQ1RJT05fWk9PTTpcbiAgICAgICAgICB0aGlzLnpvb20oZ2V0TWF4Wm9vbVJhdGlvKHBvaW50ZXJzKSwgZXZlbnQpO1xuICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBDcmVhdGUgY3JvcCBib3hcbiAgICAgICAgY2FzZSBBQ1RJT05fQ1JPUDpcbiAgICAgICAgICBpZiAoIXJhbmdlLnggfHwgIXJhbmdlLnkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvZmZzZXQgPSBnZXRPZmZzZXQodGhpcy5jcm9wcGVyKTtcbiAgICAgICAgICBsZWZ0ID0gcG9pbnRlci5zdGFydFggLSBvZmZzZXQubGVmdDtcbiAgICAgICAgICB0b3AgPSBwb2ludGVyLnN0YXJ0WSAtIG9mZnNldC50b3A7XG4gICAgICAgICAgd2lkdGggPSBjcm9wQm94RGF0YS5taW5XaWR0aDtcbiAgICAgICAgICBoZWlnaHQgPSBjcm9wQm94RGF0YS5taW5IZWlnaHQ7XG4gICAgICAgICAgaWYgKHJhbmdlLnggPiAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSByYW5nZS55ID4gMCA/IEFDVElPTl9TT1VUSF9FQVNUIDogQUNUSU9OX05PUlRIX0VBU1Q7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS54IDwgMCkge1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICAgIGFjdGlvbiA9IHJhbmdlLnkgPiAwID8gQUNUSU9OX1NPVVRIX1dFU1QgOiBBQ1RJT05fTk9SVEhfV0VTVDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJhbmdlLnkgPCAwKSB7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNob3cgdGhlIGNyb3AgYm94IGlmIGlzIGhpZGRlblxuICAgICAgICAgIGlmICghdGhpcy5jcm9wcGVkKSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmNyb3BCb3gsIENMQVNTX0hJRERFTik7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMubGltaXRlZCkge1xuICAgICAgICAgICAgICB0aGlzLmxpbWl0Q3JvcEJveCh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVuZGVyYWJsZSkge1xuICAgICAgICBjcm9wQm94RGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBsZWZ0O1xuICAgICAgICBjcm9wQm94RGF0YS50b3AgPSB0b3A7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLnJlbmRlckNyb3BCb3goKTtcbiAgICAgIH1cblxuICAgICAgLy8gT3ZlcnJpZGVcbiAgICAgIGZvckVhY2gocG9pbnRlcnMsIGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHAuc3RhcnRYID0gcC5lbmRYO1xuICAgICAgICBwLnN0YXJ0WSA9IHAuZW5kWTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICAvLyBTaG93IHRoZSBjcm9wIGJveCBtYW51YWxseVxuICAgIGNyb3A6IGZ1bmN0aW9uIGNyb3AoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5jcm9wcGVkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuY3JvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGltaXRDcm9wQm94KHRydWUsIHRydWUpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsKSB7XG4gICAgICAgICAgYWRkQ2xhc3ModGhpcy5kcmFnQm94LCBDTEFTU19NT0RBTCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgICAgICB0aGlzLnNldENyb3BCb3hEYXRhKHRoaXMuaW5pdGlhbENyb3BCb3hEYXRhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy8gUmVzZXQgdGhlIGltYWdlIGFuZCBjcm9wIGJveCB0byB0aGVpciBpbml0aWFsIHN0YXRlc1xuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhID0gYXNzaWduKHt9LCB0aGlzLmluaXRpYWxJbWFnZURhdGEpO1xuICAgICAgICB0aGlzLmNhbnZhc0RhdGEgPSBhc3NpZ24oe30sIHRoaXMuaW5pdGlhbENhbnZhc0RhdGEpO1xuICAgICAgICB0aGlzLmNyb3BCb3hEYXRhID0gYXNzaWduKHt9LCB0aGlzLmluaXRpYWxDcm9wQm94RGF0YSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKCk7XG4gICAgICAgIGlmICh0aGlzLmNyb3BwZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckNyb3BCb3goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvLyBDbGVhciB0aGUgY3JvcCBib3hcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBpZiAodGhpcy5jcm9wcGVkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGFzc2lnbih0aGlzLmNyb3BCb3hEYXRhLCB7XG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyb3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICAgIHRoaXMubGltaXRDYW52YXModHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIGNhbnZhcyBhZnRlciBjcm9wIGJveCByZW5kZXJlZFxuICAgICAgICB0aGlzLnJlbmRlckNhbnZhcygpO1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmRyYWdCb3gsIENMQVNTX01PREFMKTtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5jcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHRoZSBpbWFnZSdzIHNyYyBhbmQgcmVidWlsZCB0aGUgY3JvcHBlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgbmV3IFVSTC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNTYW1lU2l6ZV0gLSBJbmRpY2F0ZSBpZiB0aGUgbmV3IGltYWdlIGhhcyB0aGUgc2FtZSBzaXplIGFzIHRoZSBvbGQgb25lLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZSh1cmwpIHtcbiAgICAgIHZhciBoYXNTYW1lU2l6ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSW1nKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnNyYyA9IHVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzU2FtZVNpemUpIHtcbiAgICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHVybDtcbiAgICAgICAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgICAgICAgdGhpcy52aWV3Qm94SW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICAgICAgZm9yRWFjaCh0aGlzLnByZXZpZXdzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXS5zcmMgPSB1cmw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNJbWcpIHtcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IG51bGw7XG4gICAgICAgICAgdGhpcy51bmNyZWF0ZSgpO1xuICAgICAgICAgIHRoaXMubG9hZCh1cmwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vIEVuYWJsZSAodW5mcmVlemUpIHRoZSBjcm9wcGVyXG4gICAgZW5hYmxlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jcm9wcGVyLCBDTEFTU19ESVNBQkxFRCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vIERpc2FibGUgKGZyZWV6ZSkgdGhlIGNyb3BwZXJcbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuY3JvcHBlciwgQ0xBU1NfRElTQUJMRUQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBjcm9wcGVyIGFuZCByZW1vdmUgdGhlIGluc3RhbmNlIGZyb20gdGhlIGltYWdlXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICBpZiAoIWVsZW1lbnRbTkFNRVNQQUNFXSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbTkFNRVNQQUNFXSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICh0aGlzLmlzSW1nICYmIHRoaXMucmVwbGFjZWQpIHtcbiAgICAgICAgZWxlbWVudC5zcmMgPSB0aGlzLm9yaWdpbmFsVXJsO1xuICAgICAgfVxuICAgICAgdGhpcy51bmNyZWF0ZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBNb3ZlIHRoZSBjYW52YXMgd2l0aCByZWxhdGl2ZSBvZmZzZXRzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFggLSBUaGUgcmVsYXRpdmUgb2Zmc2V0IGRpc3RhbmNlIG9uIHRoZSB4LWF4aXMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRZPW9mZnNldFhdIC0gVGhlIHJlbGF0aXZlIG9mZnNldCBkaXN0YW5jZSBvbiB0aGUgeS1heGlzLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgbW92ZTogZnVuY3Rpb24gbW92ZShvZmZzZXRYKSB7XG4gICAgICB2YXIgb2Zmc2V0WSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogb2Zmc2V0WDtcbiAgICAgIHZhciBfdGhpcyRjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICBsZWZ0ID0gX3RoaXMkY2FudmFzRGF0YS5sZWZ0LFxuICAgICAgICB0b3AgPSBfdGhpcyRjYW52YXNEYXRhLnRvcDtcbiAgICAgIHJldHVybiB0aGlzLm1vdmVUbyhpc1VuZGVmaW5lZChvZmZzZXRYKSA/IG9mZnNldFggOiBsZWZ0ICsgTnVtYmVyKG9mZnNldFgpLCBpc1VuZGVmaW5lZChvZmZzZXRZKSA/IG9mZnNldFkgOiB0b3AgKyBOdW1iZXIob2Zmc2V0WSkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogTW92ZSB0aGUgY2FudmFzIHRvIGFuIGFic29sdXRlIHBvaW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeC1heGlzIGNvb3JkaW5hdGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PXhdIC0gVGhlIHktYXhpcyBjb29yZGluYXRlLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgbW92ZVRvOiBmdW5jdGlvbiBtb3ZlVG8oeCkge1xuICAgICAgdmFyIHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHg7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICB4ID0gTnVtYmVyKHgpO1xuICAgICAgeSA9IE51bWJlcih5KTtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMub3B0aW9ucy5tb3ZhYmxlKSB7XG4gICAgICAgIGlmIChpc051bWJlcih4KSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEubGVmdCA9IHg7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTnVtYmVyKHkpKSB7XG4gICAgICAgICAgY2FudmFzRGF0YS50b3AgPSB5O1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogWm9vbSB0aGUgY2FudmFzIHdpdGggYSByZWxhdGl2ZSByYXRpb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYXRpbyAtIFRoZSB0YXJnZXQgcmF0aW8uXG4gICAgICogQHBhcmFtIHtFdmVudH0gX29yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgaWYgYW55LlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgem9vbTogZnVuY3Rpb24gem9vbShyYXRpbywgX29yaWdpbmFsRXZlbnQpIHtcbiAgICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgcmF0aW8gPSBOdW1iZXIocmF0aW8pO1xuICAgICAgaWYgKHJhdGlvIDwgMCkge1xuICAgICAgICByYXRpbyA9IDEgLyAoMSAtIHJhdGlvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhdGlvID0gMSArIHJhdGlvO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuem9vbVRvKGNhbnZhc0RhdGEud2lkdGggKiByYXRpbyAvIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoLCBudWxsLCBfb3JpZ2luYWxFdmVudCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBab29tIHRoZSBjYW52YXMgdG8gYW4gYWJzb2x1dGUgcmF0aW9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmF0aW8gLSBUaGUgdGFyZ2V0IHJhdGlvLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwaXZvdCAtIFRoZSB6b29tIHBpdm90IHBvaW50IGNvb3JkaW5hdGUuXG4gICAgICogQHBhcmFtIHtFdmVudH0gX29yaWdpbmFsRXZlbnQgLSBUaGUgb3JpZ2luYWwgZXZlbnQgaWYgYW55LlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgem9vbVRvOiBmdW5jdGlvbiB6b29tVG8ocmF0aW8sIHBpdm90LCBfb3JpZ2luYWxFdmVudCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgd2lkdGggPSBjYW52YXNEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBjYW52YXNEYXRhLmhlaWdodCxcbiAgICAgICAgbmF0dXJhbFdpZHRoID0gY2FudmFzRGF0YS5uYXR1cmFsV2lkdGgsXG4gICAgICAgIG5hdHVyYWxIZWlnaHQgPSBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQ7XG4gICAgICByYXRpbyA9IE51bWJlcihyYXRpbyk7XG4gICAgICBpZiAocmF0aW8gPj0gMCAmJiB0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIG9wdGlvbnMuem9vbWFibGUpIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gbmF0dXJhbFdpZHRoICogcmF0aW87XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0ICogcmF0aW87XG4gICAgICAgIGlmIChkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfWk9PTSwge1xuICAgICAgICAgIHJhdGlvOiByYXRpbyxcbiAgICAgICAgICBvbGRSYXRpbzogd2lkdGggLyBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogX29yaWdpbmFsRXZlbnRcbiAgICAgICAgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9vcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgdmFyIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gZ2V0T2Zmc2V0KHRoaXMuY3JvcHBlcik7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IHBvaW50ZXJzICYmIE9iamVjdC5rZXlzKHBvaW50ZXJzKS5sZW5ndGggPyBnZXRQb2ludGVyc0NlbnRlcihwb2ludGVycykgOiB7XG4gICAgICAgICAgICBwYWdlWDogX29yaWdpbmFsRXZlbnQucGFnZVgsXG4gICAgICAgICAgICBwYWdlWTogX29yaWdpbmFsRXZlbnQucGFnZVlcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gWm9vbSBmcm9tIHRoZSB0cmlnZ2VyaW5nIHBvaW50IG9mIHRoZSBldmVudFxuICAgICAgICAgIGNhbnZhc0RhdGEubGVmdCAtPSAobmV3V2lkdGggLSB3aWR0aCkgKiAoKGNlbnRlci5wYWdlWCAtIG9mZnNldC5sZWZ0IC0gY2FudmFzRGF0YS5sZWZ0KSAvIHdpZHRoKTtcbiAgICAgICAgICBjYW52YXNEYXRhLnRvcCAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KSAqICgoY2VudGVyLnBhZ2VZIC0gb2Zmc2V0LnRvcCAtIGNhbnZhc0RhdGEudG9wKSAvIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwaXZvdCkgJiYgaXNOdW1iZXIocGl2b3QueCkgJiYgaXNOdW1iZXIocGl2b3QueSkpIHtcbiAgICAgICAgICBjYW52YXNEYXRhLmxlZnQgLT0gKG5ld1dpZHRoIC0gd2lkdGgpICogKChwaXZvdC54IC0gY2FudmFzRGF0YS5sZWZ0KSAvIHdpZHRoKTtcbiAgICAgICAgICBjYW52YXNEYXRhLnRvcCAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KSAqICgocGl2b3QueSAtIGNhbnZhc0RhdGEudG9wKSAvIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gWm9vbSBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAgIGNhbnZhc0RhdGEubGVmdCAtPSAobmV3V2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICAgIGNhbnZhc0RhdGEudG9wIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXNEYXRhLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICB0aGlzLnJlbmRlckNhbnZhcyh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUm90YXRlIHRoZSBjYW52YXMgd2l0aCBhIHJlbGF0aXZlIGRlZ3JlZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWUgLSBUaGUgcm90YXRlIGRlZ3JlZS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHJvdGF0ZTogZnVuY3Rpb24gcm90YXRlKGRlZ3JlZSkge1xuICAgICAgcmV0dXJuIHRoaXMucm90YXRlVG8oKHRoaXMuaW1hZ2VEYXRhLnJvdGF0ZSB8fCAwKSArIE51bWJlcihkZWdyZWUpKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdGF0ZSB0aGUgY2FudmFzIHRvIGFuIGFic29sdXRlIGRlZ3JlZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWUgLSBUaGUgcm90YXRlIGRlZ3JlZS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHJvdGF0ZVRvOiBmdW5jdGlvbiByb3RhdGVUbyhkZWdyZWUpIHtcbiAgICAgIGRlZ3JlZSA9IE51bWJlcihkZWdyZWUpO1xuICAgICAgaWYgKGlzTnVtYmVyKGRlZ3JlZSkgJiYgdGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLm9wdGlvbnMucm90YXRhYmxlKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhLnJvdGF0ZSA9IGRlZ3JlZSAlIDM2MDtcbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNjYWxlIHRoZSBpbWFnZSBvbiB0aGUgeC1heGlzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVggLSBUaGUgc2NhbGUgcmF0aW8gb24gdGhlIHgtYXhpcy5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNjYWxlWDogZnVuY3Rpb24gc2NhbGVYKF9zY2FsZVgpIHtcbiAgICAgIHZhciBzY2FsZVkgPSB0aGlzLmltYWdlRGF0YS5zY2FsZVk7XG4gICAgICByZXR1cm4gdGhpcy5zY2FsZShfc2NhbGVYLCBpc051bWJlcihzY2FsZVkpID8gc2NhbGVZIDogMSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTY2FsZSB0aGUgaW1hZ2Ugb24gdGhlIHktYXhpcy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVZIC0gVGhlIHNjYWxlIHJhdGlvIG9uIHRoZSB5LWF4aXMuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzY2FsZVk6IGZ1bmN0aW9uIHNjYWxlWShfc2NhbGVZKSB7XG4gICAgICB2YXIgc2NhbGVYID0gdGhpcy5pbWFnZURhdGEuc2NhbGVYO1xuICAgICAgcmV0dXJuIHRoaXMuc2NhbGUoaXNOdW1iZXIoc2NhbGVYKSA/IHNjYWxlWCA6IDEsIF9zY2FsZVkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2NhbGUgdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWCAtIFRoZSBzY2FsZSByYXRpbyBvbiB0aGUgeC1heGlzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2NhbGVZPXNjYWxlWF0gLSBUaGUgc2NhbGUgcmF0aW8gb24gdGhlIHktYXhpcy5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNjYWxlOiBmdW5jdGlvbiBzY2FsZShzY2FsZVgpIHtcbiAgICAgIHZhciBzY2FsZVkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHNjYWxlWDtcbiAgICAgIHZhciBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YTtcbiAgICAgIHZhciB0cmFuc2Zvcm1lZCA9IGZhbHNlO1xuICAgICAgc2NhbGVYID0gTnVtYmVyKHNjYWxlWCk7XG4gICAgICBzY2FsZVkgPSBOdW1iZXIoc2NhbGVZKTtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMub3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgICBpZiAoaXNOdW1iZXIoc2NhbGVYKSkge1xuICAgICAgICAgIGltYWdlRGF0YS5zY2FsZVggPSBzY2FsZVg7XG4gICAgICAgICAgdHJhbnNmb3JtZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihzY2FsZVkpKSB7XG4gICAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWSA9IHNjYWxlWTtcbiAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjcm9wcGVkIGFyZWEgcG9zaXRpb24gYW5kIHNpemUgZGF0YSAoYmFzZSBvbiB0aGUgb3JpZ2luYWwgaW1hZ2UpXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcm91bmRlZD1mYWxzZV0gLSBJbmRpY2F0ZSBpZiByb3VuZCB0aGUgZGF0YSB2YWx1ZXMgb3Igbm90LlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgY3JvcHBlZCBkYXRhLlxuICAgICAqL1xuICAgIGdldERhdGE6IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICB2YXIgcm91bmRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGEsXG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICAgIHZhciBkYXRhO1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgdGhpcy5jcm9wcGVkKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgeDogY3JvcEJveERhdGEubGVmdCAtIGNhbnZhc0RhdGEubGVmdCxcbiAgICAgICAgICB5OiBjcm9wQm94RGF0YS50b3AgLSBjYW52YXNEYXRhLnRvcCxcbiAgICAgICAgICB3aWR0aDogY3JvcEJveERhdGEud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBjcm9wQm94RGF0YS5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJhdGlvID0gaW1hZ2VEYXRhLndpZHRoIC8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aDtcbiAgICAgICAgZm9yRWFjaChkYXRhLCBmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgIGRhdGFbaV0gPSBuIC8gcmF0aW87XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocm91bmRlZCkge1xuICAgICAgICAgIC8vIEluIGNhc2Ugcm91bmRpbmcgb2ZmIGxlYWRzIHRvIGV4dHJhIDFweCBpbiByaWdodCBvciBib3R0b20gYm9yZGVyXG4gICAgICAgICAgLy8gd2Ugc2hvdWxkIHJvdW5kIHRoZSB0b3AtbGVmdCBjb3JuZXIgYW5kIHRoZSBkaW1lbnNpb24gKCMzNDMpLlxuICAgICAgICAgIHZhciBib3R0b20gPSBNYXRoLnJvdW5kKGRhdGEueSArIGRhdGEuaGVpZ2h0KTtcbiAgICAgICAgICB2YXIgcmlnaHQgPSBNYXRoLnJvdW5kKGRhdGEueCArIGRhdGEud2lkdGgpO1xuICAgICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQoZGF0YS54KTtcbiAgICAgICAgICBkYXRhLnkgPSBNYXRoLnJvdW5kKGRhdGEueSk7XG4gICAgICAgICAgZGF0YS53aWR0aCA9IHJpZ2h0IC0gZGF0YS54O1xuICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gYm90dG9tIC0gZGF0YS55O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnJvdGF0YWJsZSkge1xuICAgICAgICBkYXRhLnJvdGF0ZSA9IGltYWdlRGF0YS5yb3RhdGUgfHwgMDtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnNjYWxhYmxlKSB7XG4gICAgICAgIGRhdGEuc2NhbGVYID0gaW1hZ2VEYXRhLnNjYWxlWCB8fCAxO1xuICAgICAgICBkYXRhLnNjYWxlWSA9IGltYWdlRGF0YS5zY2FsZVkgfHwgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjcm9wcGVkIGFyZWEgcG9zaXRpb24gYW5kIHNpemUgd2l0aCBuZXcgZGF0YVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ldyBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2V0RGF0YTogZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGEsXG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgY3JvcEJveERhdGEgPSB7fTtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIGlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICAgICAgdmFyIHRyYW5zZm9ybWVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb25zLnJvdGF0YWJsZSkge1xuICAgICAgICAgIGlmIChpc051bWJlcihkYXRhLnJvdGF0ZSkgJiYgZGF0YS5yb3RhdGUgIT09IGltYWdlRGF0YS5yb3RhdGUpIHtcbiAgICAgICAgICAgIGltYWdlRGF0YS5yb3RhdGUgPSBkYXRhLnJvdGF0ZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc2NhbGFibGUpIHtcbiAgICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5zY2FsZVgpICYmIGRhdGEuc2NhbGVYICE9PSBpbWFnZURhdGEuc2NhbGVYKSB7XG4gICAgICAgICAgICBpbWFnZURhdGEuc2NhbGVYID0gZGF0YS5zY2FsZVg7XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc051bWJlcihkYXRhLnNjYWxlWSkgJiYgZGF0YS5zY2FsZVkgIT09IGltYWdlRGF0YS5zY2FsZVkpIHtcbiAgICAgICAgICAgIGltYWdlRGF0YS5zY2FsZVkgPSBkYXRhLnNjYWxlWTtcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJhdGlvID0gaW1hZ2VEYXRhLndpZHRoIC8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aDtcbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEueCkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gZGF0YS54ICogcmF0aW8gKyBjYW52YXNEYXRhLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEueSkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS50b3AgPSBkYXRhLnkgKiByYXRpbyArIGNhbnZhc0RhdGEudG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLndpZHRoKSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gZGF0YS53aWR0aCAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLmhlaWdodCkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBkYXRhLmhlaWdodCAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Q3JvcEJveERhdGEoY3JvcEJveERhdGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNvbnRhaW5lciBzaXplIGRhdGEuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBjb250YWluZXIgZGF0YS5cbiAgICAgKi9cbiAgICBnZXRDb250YWluZXJEYXRhOiBmdW5jdGlvbiBnZXRDb250YWluZXJEYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhZHkgPyBhc3NpZ24oe30sIHRoaXMuY29udGFpbmVyRGF0YSkgOiB7fTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW1hZ2UgcG9zaXRpb24gYW5kIHNpemUgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IGltYWdlIGRhdGEuXG4gICAgICovXG4gICAgZ2V0SW1hZ2VEYXRhOiBmdW5jdGlvbiBnZXRJbWFnZURhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaXplZCA/IGFzc2lnbih7fSwgdGhpcy5pbWFnZURhdGEpIDoge307XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNhbnZhcyBwb3NpdGlvbiBhbmQgc2l6ZSBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgY2FudmFzIGRhdGEuXG4gICAgICovXG4gICAgZ2V0Q2FudmFzRGF0YTogZnVuY3Rpb24gZ2V0Q2FudmFzRGF0YSgpIHtcbiAgICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgIGZvckVhY2goWydsZWZ0JywgJ3RvcCcsICd3aWR0aCcsICdoZWlnaHQnLCAnbmF0dXJhbFdpZHRoJywgJ25hdHVyYWxIZWlnaHQnXSwgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICBkYXRhW25dID0gY2FudmFzRGF0YVtuXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY2FudmFzIHBvc2l0aW9uIGFuZCBzaXplIHdpdGggbmV3IGRhdGEuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgbmV3IGNhbnZhcyBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2V0Q2FudmFzRGF0YTogZnVuY3Rpb24gc2V0Q2FudmFzRGF0YShkYXRhKSB7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IGNhbnZhc0RhdGEuYXNwZWN0UmF0aW87XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiBpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLmxlZnQpKSB7XG4gICAgICAgICAgY2FudmFzRGF0YS5sZWZ0ID0gZGF0YS5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLnRvcCkpIHtcbiAgICAgICAgICBjYW52YXNEYXRhLnRvcCA9IGRhdGEudG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLndpZHRoKSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEud2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gZGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGRhdGEuaGVpZ2h0KSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgICAgICAgY2FudmFzRGF0YS53aWR0aCA9IGRhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3JvcCBib3ggcG9zaXRpb24gYW5kIHNpemUgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IGNyb3AgYm94IGRhdGEuXG4gICAgICovXG4gICAgZ2V0Q3JvcEJveERhdGE6IGZ1bmN0aW9uIGdldENyb3BCb3hEYXRhKCkge1xuICAgICAgdmFyIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICAgIHZhciBkYXRhO1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgdGhpcy5jcm9wcGVkKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgbGVmdDogY3JvcEJveERhdGEubGVmdCxcbiAgICAgICAgICB0b3A6IGNyb3BCb3hEYXRhLnRvcCxcbiAgICAgICAgICB3aWR0aDogY3JvcEJveERhdGEud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBjcm9wQm94RGF0YS5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhIHx8IHt9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjcm9wIGJveCBwb3NpdGlvbiBhbmQgc2l6ZSB3aXRoIG5ldyBkYXRhLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ldyBjcm9wIGJveCBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2V0Q3JvcEJveERhdGE6IGZ1bmN0aW9uIHNldENyb3BCb3hEYXRhKGRhdGEpIHtcbiAgICAgIHZhciBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSB0aGlzLm9wdGlvbnMuYXNwZWN0UmF0aW87XG4gICAgICB2YXIgd2lkdGhDaGFuZ2VkO1xuICAgICAgdmFyIGhlaWdodENoYW5nZWQ7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiB0aGlzLmNyb3BwZWQgJiYgIXRoaXMuZGlzYWJsZWQgJiYgaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5sZWZ0KSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBkYXRhLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEudG9wKSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLnRvcCA9IGRhdGEudG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLndpZHRoKSAmJiBkYXRhLndpZHRoICE9PSBjcm9wQm94RGF0YS53aWR0aCkge1xuICAgICAgICAgIHdpZHRoQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgY3JvcEJveERhdGEud2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLmhlaWdodCkgJiYgZGF0YS5oZWlnaHQgIT09IGNyb3BCb3hEYXRhLmhlaWdodCkge1xuICAgICAgICAgIGhlaWdodENoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgIGlmICh3aWR0aENoYW5nZWQpIHtcbiAgICAgICAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IGNyb3BCb3hEYXRhLndpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHRDaGFuZ2VkKSB7XG4gICAgICAgICAgICBjcm9wQm94RGF0YS53aWR0aCA9IGNyb3BCb3hEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlckNyb3BCb3goKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0IGEgY2FudmFzIGRyYXduIHRoZSBjcm9wcGVkIGltYWdlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gLSBUaGUgY29uZmlnIG9wdGlvbnMuXG4gICAgICogQHJldHVybnMge0hUTUxDYW52YXNFbGVtZW50fSAtIFRoZSByZXN1bHQgY2FudmFzLlxuICAgICAqL1xuICAgIGdldENyb3BwZWRDYW52YXM6IGZ1bmN0aW9uIGdldENyb3BwZWRDYW52YXMoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBpZiAoIXRoaXMucmVhZHkgfHwgIXdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgdmFyIHNvdXJjZSA9IGdldFNvdXJjZUNhbnZhcyh0aGlzLmltYWdlLCB0aGlzLmltYWdlRGF0YSwgY2FudmFzRGF0YSwgb3B0aW9ucyk7XG5cbiAgICAgIC8vIFJldHVybnMgdGhlIHNvdXJjZSBjYW52YXMgaWYgaXQgaXMgbm90IGNyb3BwZWQuXG4gICAgICBpZiAoIXRoaXMuY3JvcHBlZCkge1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgfVxuICAgICAgdmFyIF90aGlzJGdldERhdGEgPSB0aGlzLmdldERhdGEob3B0aW9ucy5yb3VuZGVkKSxcbiAgICAgICAgaW5pdGlhbFggPSBfdGhpcyRnZXREYXRhLngsXG4gICAgICAgIGluaXRpYWxZID0gX3RoaXMkZ2V0RGF0YS55LFxuICAgICAgICBpbml0aWFsV2lkdGggPSBfdGhpcyRnZXREYXRhLndpZHRoLFxuICAgICAgICBpbml0aWFsSGVpZ2h0ID0gX3RoaXMkZ2V0RGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgcmF0aW8gPSBzb3VyY2Uud2lkdGggLyBNYXRoLmZsb29yKGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoKTtcbiAgICAgIGlmIChyYXRpbyAhPT0gMSkge1xuICAgICAgICBpbml0aWFsWCAqPSByYXRpbztcbiAgICAgICAgaW5pdGlhbFkgKj0gcmF0aW87XG4gICAgICAgIGluaXRpYWxXaWR0aCAqPSByYXRpbztcbiAgICAgICAgaW5pdGlhbEhlaWdodCAqPSByYXRpbztcbiAgICAgIH1cbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IGluaXRpYWxXaWR0aCAvIGluaXRpYWxIZWlnaHQ7XG4gICAgICB2YXIgbWF4U2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICB3aWR0aDogb3B0aW9ucy5tYXhXaWR0aCB8fCBJbmZpbml0eSxcbiAgICAgICAgaGVpZ2h0OiBvcHRpb25zLm1heEhlaWdodCB8fCBJbmZpbml0eVxuICAgICAgfSk7XG4gICAgICB2YXIgbWluU2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICB3aWR0aDogb3B0aW9ucy5taW5XaWR0aCB8fCAwLFxuICAgICAgICBoZWlnaHQ6IG9wdGlvbnMubWluSGVpZ2h0IHx8IDBcbiAgICAgIH0sICdjb3ZlcicpO1xuICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoIHx8IChyYXRpbyAhPT0gMSA/IHNvdXJjZS53aWR0aCA6IGluaXRpYWxXaWR0aCksXG4gICAgICAgICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCB8fCAocmF0aW8gIT09IDEgPyBzb3VyY2UuaGVpZ2h0IDogaW5pdGlhbEhlaWdodClcbiAgICAgICAgfSksXG4gICAgICAgIHdpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzLmhlaWdodDtcbiAgICAgIHdpZHRoID0gTWF0aC5taW4obWF4U2l6ZXMud2lkdGgsIE1hdGgubWF4KG1pblNpemVzLndpZHRoLCB3aWR0aCkpO1xuICAgICAgaGVpZ2h0ID0gTWF0aC5taW4obWF4U2l6ZXMuaGVpZ2h0LCBNYXRoLm1heChtaW5TaXplcy5oZWlnaHQsIGhlaWdodCkpO1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIod2lkdGgpO1xuICAgICAgY2FudmFzLmhlaWdodCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoaGVpZ2h0KTtcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gb3B0aW9ucy5maWxsQ29sb3IgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICB2YXIgX29wdGlvbnMkaW1hZ2VTbW9vdGhpID0gb3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQsXG4gICAgICAgIGltYWdlU21vb3RoaW5nRW5hYmxlZCA9IF9vcHRpb25zJGltYWdlU21vb3RoaSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGltYWdlU21vb3RoaSxcbiAgICAgICAgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gb3B0aW9ucy5pbWFnZVNtb290aGluZ1F1YWxpdHk7XG4gICAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGltYWdlU21vb3RoaW5nRW5hYmxlZDtcbiAgICAgIGlmIChpbWFnZVNtb290aGluZ1F1YWxpdHkpIHtcbiAgICAgICAgY29udGV4dC5pbWFnZVNtb290aGluZ1F1YWxpdHkgPSBpbWFnZVNtb290aGluZ1F1YWxpdHk7XG4gICAgICB9XG5cbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQuZHJhd0ltYWdlXG4gICAgICB2YXIgc291cmNlV2lkdGggPSBzb3VyY2Uud2lkdGg7XG4gICAgICB2YXIgc291cmNlSGVpZ2h0ID0gc291cmNlLmhlaWdodDtcblxuICAgICAgLy8gU291cmNlIGNhbnZhcyBwYXJhbWV0ZXJzXG4gICAgICB2YXIgc3JjWCA9IGluaXRpYWxYO1xuICAgICAgdmFyIHNyY1kgPSBpbml0aWFsWTtcbiAgICAgIHZhciBzcmNXaWR0aDtcbiAgICAgIHZhciBzcmNIZWlnaHQ7XG5cbiAgICAgIC8vIERlc3RpbmF0aW9uIGNhbnZhcyBwYXJhbWV0ZXJzXG4gICAgICB2YXIgZHN0WDtcbiAgICAgIHZhciBkc3RZO1xuICAgICAgdmFyIGRzdFdpZHRoO1xuICAgICAgdmFyIGRzdEhlaWdodDtcbiAgICAgIGlmIChzcmNYIDw9IC1pbml0aWFsV2lkdGggfHwgc3JjWCA+IHNvdXJjZVdpZHRoKSB7XG4gICAgICAgIHNyY1ggPSAwO1xuICAgICAgICBzcmNXaWR0aCA9IDA7XG4gICAgICAgIGRzdFggPSAwO1xuICAgICAgICBkc3RXaWR0aCA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHNyY1ggPD0gMCkge1xuICAgICAgICBkc3RYID0gLXNyY1g7XG4gICAgICAgIHNyY1ggPSAwO1xuICAgICAgICBzcmNXaWR0aCA9IE1hdGgubWluKHNvdXJjZVdpZHRoLCBpbml0aWFsV2lkdGggKyBzcmNYKTtcbiAgICAgICAgZHN0V2lkdGggPSBzcmNXaWR0aDtcbiAgICAgIH0gZWxzZSBpZiAoc3JjWCA8PSBzb3VyY2VXaWR0aCkge1xuICAgICAgICBkc3RYID0gMDtcbiAgICAgICAgc3JjV2lkdGggPSBNYXRoLm1pbihpbml0aWFsV2lkdGgsIHNvdXJjZVdpZHRoIC0gc3JjWCk7XG4gICAgICAgIGRzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgICB9XG4gICAgICBpZiAoc3JjV2lkdGggPD0gMCB8fCBzcmNZIDw9IC1pbml0aWFsSGVpZ2h0IHx8IHNyY1kgPiBzb3VyY2VIZWlnaHQpIHtcbiAgICAgICAgc3JjWSA9IDA7XG4gICAgICAgIHNyY0hlaWdodCA9IDA7XG4gICAgICAgIGRzdFkgPSAwO1xuICAgICAgICBkc3RIZWlnaHQgPSAwO1xuICAgICAgfSBlbHNlIGlmIChzcmNZIDw9IDApIHtcbiAgICAgICAgZHN0WSA9IC1zcmNZO1xuICAgICAgICBzcmNZID0gMDtcbiAgICAgICAgc3JjSGVpZ2h0ID0gTWF0aC5taW4oc291cmNlSGVpZ2h0LCBpbml0aWFsSGVpZ2h0ICsgc3JjWSk7XG4gICAgICAgIGRzdEhlaWdodCA9IHNyY0hlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoc3JjWSA8PSBzb3VyY2VIZWlnaHQpIHtcbiAgICAgICAgZHN0WSA9IDA7XG4gICAgICAgIHNyY0hlaWdodCA9IE1hdGgubWluKGluaXRpYWxIZWlnaHQsIHNvdXJjZUhlaWdodCAtIHNyY1kpO1xuICAgICAgICBkc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgICB9XG4gICAgICB2YXIgcGFyYW1zID0gW3NyY1gsIHNyY1ksIHNyY1dpZHRoLCBzcmNIZWlnaHRdO1xuXG4gICAgICAvLyBBdm9pZCBcIkluZGV4U2l6ZUVycm9yXCJcbiAgICAgIGlmIChkc3RXaWR0aCA+IDAgJiYgZHN0SGVpZ2h0ID4gMCkge1xuICAgICAgICB2YXIgc2NhbGUgPSB3aWR0aCAvIGluaXRpYWxXaWR0aDtcbiAgICAgICAgcGFyYW1zLnB1c2goZHN0WCAqIHNjYWxlLCBkc3RZICogc2NhbGUsIGRzdFdpZHRoICogc2NhbGUsIGRzdEhlaWdodCAqIHNjYWxlKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWxsIHRoZSBudW1lcmljYWwgcGFyYW1ldGVycyBzaG91bGQgYmUgaW50ZWdlciBmb3IgYGRyYXdJbWFnZWBcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZW5neXVhbmNoZW4vY3JvcHBlci9pc3N1ZXMvNDc2XG4gICAgICBjb250ZXh0LmRyYXdJbWFnZS5hcHBseShjb250ZXh0LCBbc291cmNlXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHBhcmFtcy5tYXAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIocGFyYW0pKTtcbiAgICAgIH0pKSkpO1xuICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgYXNwZWN0IHJhdGlvIG9mIHRoZSBjcm9wIGJveC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0UmF0aW8gLSBUaGUgbmV3IGFzcGVjdCByYXRpby5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNldEFzcGVjdFJhdGlvOiBmdW5jdGlvbiBzZXRBc3BlY3RSYXRpbyhhc3BlY3RSYXRpbykge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIWlzVW5kZWZpbmVkKGFzcGVjdFJhdGlvKSkge1xuICAgICAgICAvLyAwIC0+IE5hTlxuICAgICAgICBvcHRpb25zLmFzcGVjdFJhdGlvID0gTWF0aC5tYXgoMCwgYXNwZWN0UmF0aW8pIHx8IE5hTjtcbiAgICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgICB0aGlzLmluaXRDcm9wQm94KCk7XG4gICAgICAgICAgaWYgKHRoaXMuY3JvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgZHJhZyBtb2RlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIC0gVGhlIG5ldyBkcmFnIG1vZGUuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzZXREcmFnTW9kZTogZnVuY3Rpb24gc2V0RHJhZ01vZGUobW9kZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGRyYWdCb3ggPSB0aGlzLmRyYWdCb3gsXG4gICAgICAgIGZhY2UgPSB0aGlzLmZhY2U7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB2YXIgY3JvcHBhYmxlID0gbW9kZSA9PT0gRFJBR19NT0RFX0NST1A7XG4gICAgICAgIHZhciBtb3ZhYmxlID0gb3B0aW9ucy5tb3ZhYmxlICYmIG1vZGUgPT09IERSQUdfTU9ERV9NT1ZFO1xuICAgICAgICBtb2RlID0gY3JvcHBhYmxlIHx8IG1vdmFibGUgPyBtb2RlIDogRFJBR19NT0RFX05PTkU7XG4gICAgICAgIG9wdGlvbnMuZHJhZ01vZGUgPSBtb2RlO1xuICAgICAgICBzZXREYXRhKGRyYWdCb3gsIERBVEFfQUNUSU9OLCBtb2RlKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0JveCwgQ0xBU1NfQ1JPUCwgY3JvcHBhYmxlKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0JveCwgQ0xBU1NfTU9WRSwgbW92YWJsZSk7XG4gICAgICAgIGlmICghb3B0aW9ucy5jcm9wQm94TW92YWJsZSkge1xuICAgICAgICAgIC8vIFN5bmMgZHJhZyBtb2RlIHRvIGNyb3AgYm94IHdoZW4gaXQgaXMgbm90IG1vdmFibGVcbiAgICAgICAgICBzZXREYXRhKGZhY2UsIERBVEFfQUNUSU9OLCBtb2RlKTtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhmYWNlLCBDTEFTU19DUk9QLCBjcm9wcGFibGUpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGZhY2UsIENMQVNTX01PVkUsIG1vdmFibGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG5cbiAgdmFyIEFub3RoZXJDcm9wcGVyID0gV0lORE9XLkNyb3BwZXI7XG4gIHZhciBDcm9wcGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgQ3JvcHBlci5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQgZm9yIGNyb3BwaW5nLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gLSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENyb3BwZXIoZWxlbWVudCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENyb3BwZXIpO1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFSRUdFWFBfVEFHX05BTUUudGVzdChlbGVtZW50LnRhZ05hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkIGFuZCBtdXN0IGJlIGFuIDxpbWc+IG9yIDxjYW52YXM+IGVsZW1lbnQuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5vcHRpb25zID0gYXNzaWduKHt9LCBERUZBVUxUUywgaXNQbGFpbk9iamVjdChvcHRpb25zKSAmJiBvcHRpb25zKTtcbiAgICAgIHRoaXMuY3JvcHBlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5wb2ludGVycyA9IHt9O1xuICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVwbGFjZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2l6ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2l6aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhDcm9wcGVyLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHVybDtcbiAgICAgICAgaWYgKGVsZW1lbnRbTkFNRVNQQUNFXSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50W05BTUVTUEFDRV0gPSB0aGlzO1xuICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2ltZycpIHtcbiAgICAgICAgICB0aGlzLmlzSW1nID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIGUuZy46IFwiaW1nL3BpY3R1cmUuanBnXCJcbiAgICAgICAgICB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3JjJykgfHwgJyc7XG4gICAgICAgICAgdGhpcy5vcmlnaW5hbFVybCA9IHVybDtcblxuICAgICAgICAgIC8vIFN0b3Agd2hlbiBpdCdzIGEgYmxhbmsgaW1hZ2VcbiAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGUuZy46IFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9pbWcvcGljdHVyZS5qcGdcIlxuICAgICAgICAgIHVybCA9IGVsZW1lbnQuc3JjO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09ICdjYW52YXMnICYmIHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAgIHVybCA9IGVsZW1lbnQudG9EYXRhVVJMKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkKHVybCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImxvYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHVybCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5pbWFnZURhdGEgPSB7fTtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKCFvcHRpb25zLnJvdGF0YWJsZSAmJiAhb3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSBJRTEwKyBzdXBwb3J0cyBUeXBlZCBBcnJheXNcbiAgICAgICAgaWYgKCFvcHRpb25zLmNoZWNrT3JpZW50YXRpb24gfHwgIXdpbmRvdy5BcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHRoaXMuY2xvbmUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlY3QgdGhlIG1pbWUgdHlwZSBvZiB0aGUgaW1hZ2UgZGlyZWN0bHkgaWYgaXQgaXMgYSBEYXRhIFVSTFxuICAgICAgICBpZiAoUkVHRVhQX0RBVEFfVVJMLnRlc3QodXJsKSkge1xuICAgICAgICAgIC8vIFJlYWQgQXJyYXlCdWZmZXIgZnJvbSBEYXRhIFVSTCBvZiBKUEVHIGltYWdlcyBkaXJlY3RseSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICAgICAgaWYgKFJFR0VYUF9EQVRBX1VSTF9KUEVHLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkKGRhdGFVUkxUb0FycmF5QnVmZmVyKHVybCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPbmx5IGEgSlBFRyBpbWFnZSBtYXkgY29udGFpbnMgRXhpZiBPcmllbnRhdGlvbiBpbmZvcm1hdGlvbixcbiAgICAgICAgICAgIC8vIHRoZSByZXN0IHR5cGVzIG9mIERhdGEgVVJMcyBhcmUgbm90IG5lY2Vzc2FyeSB0byBjaGVjayBvcmllbnRhdGlvbiBhdCBhbGwuXG4gICAgICAgICAgICB0aGlzLmNsb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIERldGVjdCB0aGUgbWltZSB0eXBlIG9mIHRoZSBpbWFnZSBieSBhIFhNTEh0dHBSZXF1ZXN0LlxuICAgICAgICAvLyAyLiBMb2FkIHRoZSBpbWFnZSBhcyBBcnJheUJ1ZmZlciBmb3IgcmVhZGluZyBvcmllbnRhdGlvbiBpZiBpdHMgYSBKUEVHIGltYWdlLlxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciBjbG9uZSA9IHRoaXMuY2xvbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnhociA9IHhocjtcblxuICAgICAgICAvLyAxLiBDcm9zcyBvcmlnaW4gcmVxdWVzdHMgYXJlIG9ubHkgc3VwcG9ydGVkIGZvciBwcm90b2NvbCBzY2hlbWVzOlxuICAgICAgICAvLyBodHRwLCBodHRwcywgZGF0YSwgY2hyb21lLCBjaHJvbWUtZXh0ZW5zaW9uLlxuICAgICAgICAvLyAyLiBBY2Nlc3MgdG8gWE1MSHR0cFJlcXVlc3QgZnJvbSBhIERhdGEgVVJMIHdpbGwgYmUgYmxvY2tlZCBieSBDT1JTIHBvbGljeVxuICAgICAgICAvLyBpbiBzb21lIGJyb3dzZXJzIGFzIElFMTEgYW5kIFNhZmFyaS5cbiAgICAgICAgeGhyLm9uYWJvcnQgPSBjbG9uZTtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBjbG9uZTtcbiAgICAgICAgeGhyLm9udGltZW91dCA9IGNsb25lO1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBBYm9ydCB0aGUgcmVxdWVzdCBkaXJlY3RseSBpZiBpdCBub3QgYSBKUEVHIGltYWdlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAgICBpZiAoeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKSAhPT0gTUlNRV9UWVBFX0pQRUcpIHtcbiAgICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5yZWFkKHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMucmVsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgX3RoaXMueGhyID0gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBCdXN0IGNhY2hlIHdoZW4gdGhlcmUgaXMgYSBcImNyb3NzT3JpZ2luXCIgcHJvcGVydHkgdG8gYXZvaWQgYnJvd3NlciBjYWNoZSBlcnJvclxuICAgICAgICBpZiAob3B0aW9ucy5jaGVja0Nyb3NzT3JpZ2luICYmIGlzQ3Jvc3NPcmlnaW5VUkwodXJsKSAmJiBlbGVtZW50LmNyb3NzT3JpZ2luKSB7XG4gICAgICAgICAgdXJsID0gYWRkVGltZXN0YW1wKHVybCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgdGhpcmQgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGZvciBhdm9pZGluZyBzaWRlLWVmZmVjdCAoIzY4MilcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZWxlbWVudC5jcm9zc09yaWdpbiA9PT0gJ3VzZS1jcmVkZW50aWFscyc7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkKGFycmF5QnVmZmVyKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuXG4gICAgICAgIC8vIFJlc2V0IHRoZSBvcmllbnRhdGlvbiB2YWx1ZSB0byBpdHMgZGVmYXVsdCB2YWx1ZSAxXG4gICAgICAgIC8vIGFzIHNvbWUgaU9TIGJyb3dzZXJzIHdpbGwgcmVuZGVyIGltYWdlIHdpdGggaXRzIG9yaWVudGF0aW9uXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IHJlc2V0QW5kR2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpO1xuICAgICAgICB2YXIgcm90YXRlID0gMDtcbiAgICAgICAgdmFyIHNjYWxlWCA9IDE7XG4gICAgICAgIHZhciBzY2FsZVkgPSAxO1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPiAxKSB7XG4gICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgVVJMIHdoaWNoIGhhcyB0aGUgZGVmYXVsdCBvcmllbnRhdGlvbiB2YWx1ZVxuICAgICAgICAgIHRoaXMudXJsID0gYXJyYXlCdWZmZXJUb0RhdGFVUkwoYXJyYXlCdWZmZXIsIE1JTUVfVFlQRV9KUEVHKTtcbiAgICAgICAgICB2YXIgX3BhcnNlT3JpZW50YXRpb24gPSBwYXJzZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcbiAgICAgICAgICByb3RhdGUgPSBfcGFyc2VPcmllbnRhdGlvbi5yb3RhdGU7XG4gICAgICAgICAgc2NhbGVYID0gX3BhcnNlT3JpZW50YXRpb24uc2NhbGVYO1xuICAgICAgICAgIHNjYWxlWSA9IF9wYXJzZU9yaWVudGF0aW9uLnNjYWxlWTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgICAgICBpbWFnZURhdGEucm90YXRlID0gcm90YXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnNjYWxhYmxlKSB7XG4gICAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWCA9IHNjYWxlWDtcbiAgICAgICAgICBpbWFnZURhdGEuc2NhbGVZID0gc2NhbGVZO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvbmUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvbmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgdXJsID0gdGhpcy51cmw7XG4gICAgICAgIHZhciBjcm9zc09yaWdpbiA9IGVsZW1lbnQuY3Jvc3NPcmlnaW47XG4gICAgICAgIHZhciBjcm9zc09yaWdpblVybCA9IHVybDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jaGVja0Nyb3NzT3JpZ2luICYmIGlzQ3Jvc3NPcmlnaW5VUkwodXJsKSkge1xuICAgICAgICAgIGlmICghY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQnVzdCBjYWNoZSB3aGVuIHRoZXJlIGlzIG5vdCBhIFwiY3Jvc3NPcmlnaW5cIiBwcm9wZXJ0eSAoIzUxOSlcbiAgICAgICAgICBjcm9zc09yaWdpblVybCA9IGFkZFRpbWVzdGFtcCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgICAgdGhpcy5jcm9zc09yaWdpblVybCA9IGNyb3NzT3JpZ2luVXJsO1xuICAgICAgICB2YXIgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWYgKGNyb3NzT3JpZ2luKSB7XG4gICAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZS5zcmMgPSBjcm9zc09yaWdpblVybCB8fCB1cmw7XG4gICAgICAgIGltYWdlLmFsdCA9IGVsZW1lbnQuYWx0IHx8ICdUaGUgaW1hZ2UgdG8gY3JvcCc7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gdGhpcy5zdG9wLmJpbmQodGhpcyk7XG4gICAgICAgIGFkZENsYXNzKGltYWdlLCBDTEFTU19ISURFKTtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpbWFnZSwgZWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaXppbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIE1hdGNoIGFsbCBicm93c2VycyB0aGF0IHVzZSBXZWJLaXQgYXMgdGhlIGxheW91dCBlbmdpbmUgaW4gaU9TIGRldmljZXMsXG4gICAgICAgIC8vIHN1Y2ggYXMgU2FmYXJpIGZvciBpT1MsIENocm9tZSBmb3IgaU9TLCBhbmQgaW4tYXBwIGJyb3dzZXJzLlxuICAgICAgICB2YXIgaXNJT1NXZWJLaXQgPSBXSU5ET1cubmF2aWdhdG9yICYmIC8oPzppUGFkfGlQaG9uZXxpUG9kKS4qP0FwcGxlV2ViS2l0L2kudGVzdChXSU5ET1cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIHZhciBkb25lID0gZnVuY3Rpb24gZG9uZShuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQpIHtcbiAgICAgICAgICBhc3NpZ24oX3RoaXMyLmltYWdlRGF0YSwge1xuICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBuYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgYXNwZWN0UmF0aW86IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpczIuaW5pdGlhbEltYWdlRGF0YSA9IGFzc2lnbih7fSwgX3RoaXMyLmltYWdlRGF0YSk7XG4gICAgICAgICAgX3RoaXMyLnNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIF90aGlzMi5zaXplZCA9IHRydWU7XG4gICAgICAgICAgX3RoaXMyLmJ1aWxkKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gTW9zdCBtb2Rlcm4gYnJvd3NlcnMgKGV4Y2VwdHMgaU9TIFdlYktpdClcbiAgICAgICAgaWYgKGltYWdlLm5hdHVyYWxXaWR0aCAmJiAhaXNJT1NXZWJLaXQpIHtcbiAgICAgICAgICBkb25lKGltYWdlLm5hdHVyYWxXaWR0aCwgaW1hZ2UubmF0dXJhbEhlaWdodCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaXppbmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB0aGlzLnNpemluZ0ltYWdlID0gc2l6aW5nSW1hZ2U7XG4gICAgICAgIHNpemluZ0ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb25lKHNpemluZ0ltYWdlLndpZHRoLCBzaXppbmdJbWFnZS5oZWlnaHQpO1xuICAgICAgICAgIGlmICghaXNJT1NXZWJLaXQpIHtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoc2l6aW5nSW1hZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc2l6aW5nSW1hZ2Uuc3JjID0gaW1hZ2Uuc3JjO1xuXG4gICAgICAgIC8vIGlPUyBXZWJLaXQgd2lsbCBjb252ZXJ0IHRoZSBpbWFnZSBhdXRvbWF0aWNhbGx5XG4gICAgICAgIC8vIHdpdGggaXRzIG9yaWVudGF0aW9uIG9uY2UgYXBwZW5kIGl0IGludG8gRE9NICgjMjc5KVxuICAgICAgICBpZiAoIWlzSU9TV2ViS2l0KSB7XG4gICAgICAgICAgc2l6aW5nSW1hZ2Uuc3R5bGUuY3NzVGV4dCA9ICdsZWZ0OjA7JyArICdtYXgtaGVpZ2h0Om5vbmUhaW1wb3J0YW50OycgKyAnbWF4LXdpZHRoOm5vbmUhaW1wb3J0YW50OycgKyAnbWluLWhlaWdodDowIWltcG9ydGFudDsnICsgJ21pbi13aWR0aDowIWltcG9ydGFudDsnICsgJ29wYWNpdHk6MDsnICsgJ3Bvc2l0aW9uOmFic29sdXRlOycgKyAndG9wOjA7JyArICd6LWluZGV4Oi0xOyc7XG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaXppbmdJbWFnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3RvcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICBpbWFnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGltYWdlKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImJ1aWxkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zaXplZCB8fCB0aGlzLnJlYWR5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgaW1hZ2UgPSB0aGlzLmltYWdlO1xuXG4gICAgICAgIC8vIENyZWF0ZSBjcm9wcGVyIGVsZW1lbnRzXG4gICAgICAgIHZhciBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBURU1QTEFURTtcbiAgICAgICAgdmFyIGNyb3BwZXIgPSB0ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWNvbnRhaW5lclwiKSk7XG4gICAgICAgIHZhciBjYW52YXMgPSBjcm9wcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItY2FudmFzXCIpKTtcbiAgICAgICAgdmFyIGRyYWdCb3ggPSBjcm9wcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZHJhZy1ib3hcIikpO1xuICAgICAgICB2YXIgY3JvcEJveCA9IGNyb3BwZXIucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jcm9wLWJveFwiKSk7XG4gICAgICAgIHZhciBmYWNlID0gY3JvcEJveC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWZhY2VcIikpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5jcm9wcGVyID0gY3JvcHBlcjtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZHJhZ0JveCA9IGRyYWdCb3g7XG4gICAgICAgIHRoaXMuY3JvcEJveCA9IGNyb3BCb3g7XG4gICAgICAgIHRoaXMudmlld0JveCA9IGNyb3BwZXIucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi12aWV3LWJveFwiKSk7XG4gICAgICAgIHRoaXMuZmFjZSA9IGZhY2U7XG4gICAgICAgIGNhbnZhcy5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgLy8gSGlkZSB0aGUgb3JpZ2luYWwgaW1hZ2VcbiAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgQ0xBU1NfSElEREVOKTtcblxuICAgICAgICAvLyBJbnNlcnRzIHRoZSBjcm9wcGVyIGFmdGVyIHRvIHRoZSBjdXJyZW50IGltYWdlXG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JvcHBlciwgZWxlbWVudC5uZXh0U2libGluZyk7XG5cbiAgICAgICAgLy8gU2hvdyB0aGUgaGlkZGVuIGltYWdlXG4gICAgICAgIHJlbW92ZUNsYXNzKGltYWdlLCBDTEFTU19ISURFKTtcbiAgICAgICAgdGhpcy5pbml0UHJldmlldygpO1xuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICAgICAgb3B0aW9ucy5pbml0aWFsQXNwZWN0UmF0aW8gPSBNYXRoLm1heCgwLCBvcHRpb25zLmluaXRpYWxBc3BlY3RSYXRpbykgfHwgTmFOO1xuICAgICAgICBvcHRpb25zLmFzcGVjdFJhdGlvID0gTWF0aC5tYXgoMCwgb3B0aW9ucy5hc3BlY3RSYXRpbykgfHwgTmFOO1xuICAgICAgICBvcHRpb25zLnZpZXdNb2RlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMywgTWF0aC5yb3VuZChvcHRpb25zLnZpZXdNb2RlKSkpIHx8IDA7XG4gICAgICAgIGFkZENsYXNzKGNyb3BCb3gsIENMQVNTX0hJRERFTik7XG4gICAgICAgIGlmICghb3B0aW9ucy5ndWlkZXMpIHtcbiAgICAgICAgICBhZGRDbGFzcyhjcm9wQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1kYXNoZWRcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5jZW50ZXIpIHtcbiAgICAgICAgICBhZGRDbGFzcyhjcm9wQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jZW50ZXJcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmJhY2tncm91bmQpIHtcbiAgICAgICAgICBhZGRDbGFzcyhjcm9wcGVyLCBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWJnXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgYWRkQ2xhc3MoZmFjZSwgQ0xBU1NfSU5WSVNJQkxFKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5jcm9wQm94TW92YWJsZSkge1xuICAgICAgICAgIGFkZENsYXNzKGZhY2UsIENMQVNTX01PVkUpO1xuICAgICAgICAgIHNldERhdGEoZmFjZSwgREFUQV9BQ1RJT04sIEFDVElPTl9BTEwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5jcm9wQm94UmVzaXphYmxlKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoY3JvcEJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItbGluZVwiKSksIENMQVNTX0hJRERFTik7XG4gICAgICAgICAgYWRkQ2xhc3MoY3JvcEJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItcG9pbnRcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldERyYWdNb2RlKG9wdGlvbnMuZHJhZ01vZGUpO1xuICAgICAgICBpZiAob3B0aW9ucy5hdXRvQ3JvcCkge1xuICAgICAgICAgIHRoaXMuY3JvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnJlYWR5KSkge1xuICAgICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1JFQURZLCBvcHRpb25zLnJlYWR5LCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBFVkVOVF9SRUFEWSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVuYnVpbGRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJ1aWxkKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVhZHkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICB0aGlzLnJlc2V0UHJldmlldygpO1xuICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IHRoaXMuY3JvcHBlci5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jcm9wcGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIENMQVNTX0hJRERFTik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVuY3JlYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdW5jcmVhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgICAgdGhpcy51bmJ1aWxkKCk7XG4gICAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY3JvcHBlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2l6aW5nKSB7XG4gICAgICAgICAgdGhpcy5zaXppbmdJbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgIHRoaXMuc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5zaXplZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVsb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy54aHIub25hYm9ydCA9IG51bGw7XG4gICAgICAgICAgdGhpcy54aHIuYWJvcnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIG5vIGNvbmZsaWN0IGNyb3BwZXIgY2xhc3MuXG4gICAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gVGhlIGNyb3BwZXIgY2xhc3MuXG4gICAgICAgKi9cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJub0NvbmZsaWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgd2luZG93LkNyb3BwZXIgPSBBbm90aGVyQ3JvcHBlcjtcbiAgICAgICAgcmV0dXJuIENyb3BwZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hhbmdlIHRoZSBkZWZhdWx0IG9wdGlvbnMuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBuZXcgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICovXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldERlZmF1bHRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGVmYXVsdHMob3B0aW9ucykge1xuICAgICAgICBhc3NpZ24oREVGQVVMVFMsIGlzUGxhaW5PYmplY3Qob3B0aW9ucykgJiYgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfV0pO1xuICB9KCk7XG4gIGFzc2lnbihDcm9wcGVyLnByb3RvdHlwZSwgcmVuZGVyLCBwcmV2aWV3LCBldmVudHMsIGhhbmRsZXJzLCBjaGFuZ2UsIG1ldGhvZHMpO1xuXG4gIHJldHVybiBDcm9wcGVyO1xuXG59KSk7XG4iLCAiaW1wb3J0IHsgc3RvcmUsIGdldENvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2ludGVyYWN0aXZpdHknO1xuXG5zdG9yZSggJ2hleWZhbS9yb3V0ZXInLCB7XG4gIGFjdGlvbnM6IHtcbiAgICAqbmF2aWdhdGUoIGUgKSB7XG4gICAgICBjb25zdCBhID0gZT8udGFyZ2V0Py5jbG9zZXN0KCAnYScgKTtcbiAgICAgIGlmICggISBhIHx8IGEudGFyZ2V0ID09PSAnX2JsYW5rJyB8fCBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5ICkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhLmhyZWY7XG4gICAgfSxcbiAgfSxcbn0gKTtcbiIsICJpbXBvcnQgeyBzdG9yZSwgZ2V0Q29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvaW50ZXJhY3Rpdml0eSc7XG5pbXBvcnQgJ2Vtb2ppLXBpY2tlci1lbGVtZW50JztcbmltcG9ydCB7IGFjY2VwdGFibGUsIGlzSGVpYyB9IGZyb20gJy4uL2xpYi9tZWRpYS5qcyc7XG5cbmNvbnN0IE1BWF9GSUxFUyA9IDEwO1xuY29uc3QgTUFYX0JZVEVTID0gMjUgKiAxMDI0ICogMTAyNDsgLy8gMjUgTUIgcGVyIGZpbGUgYmVmb3JlIGNsaWVudCBjb252ZXJzaW9uXG5cbmNvbnN0IE1JTl9PUFRJT05TID0gMjtcbmNvbnN0IE1BWF9PUFRJT05TID0gNjtcbmxldCBuZXh0T3B0aW9uSWQgPSAxO1xuY29uc3QgbmV3T3B0aW9uID0gKCBwbGFjZWhvbGRlciApID0+ICggeyBpZDogbmV4dE9wdGlvbklkKyssIHRleHQ6ICcnLCBlbW9qaTogJycsIHBsYWNlaG9sZGVyIH0gKTtcbmNvbnN0IGluaXRpYWxPcHRpb25zID0gKCkgPT4gW1xuICBuZXdPcHRpb24oICdPcHRpb24gMScgKSxcbiAgbmV3T3B0aW9uKCAnT3B0aW9uIDInICksXG5dO1xuXG4vLyBQcmVzZXQgZHVyYXRpb25zIGV4cG9zZWQgaW4gdGhlIHBvbGwgY29tcG9zZXIuIGB2YWx1ZWAgaXMgdGhlIHByZXNldCBrZXkgd2Vcbi8vIHN0b3JlIGluIHN0YXRlOyBgaG91cnNgIGlzIHdoYXQgd2UgYWRkIHRvIGBEYXRlLm5vdygpYCBvbiBzdWJtaXQgdG8gZGVyaXZlXG4vLyB0aGUgY2xvc2VzLWF0IHRpbWVzdGFtcC4gVGhlIGVtcHR5IHZhbHVlIG1lYW5zIFwibmV2ZXIgY2xvc2VzXCIgXHUyMDE0IHNhbWVcbi8vIHNlbWFudGljcyBhcyBhbiBlbXB0eSBgcG9sbF9jbG9zZXNfYXRgIG9uIHRoZSBzZXJ2ZXIuXG5jb25zdCBDTE9TRVNfUFJFU0VUUyA9IFtcbiAgeyB2YWx1ZTogJycsICAgbGFiZWw6ICdOZXZlcicsIGhvdXJzOiAwICAgfSxcbiAgeyB2YWx1ZTogJzFoJywgbGFiZWw6ICcxIGhvdXInLCBob3VyczogMSAgfSxcbiAgeyB2YWx1ZTogJzRoJywgbGFiZWw6ICc0IGhvdXJzJywgaG91cnM6IDQgfSxcbiAgeyB2YWx1ZTogJzFkJywgbGFiZWw6ICcxIGRheScsIGhvdXJzOiAyNCAgfSxcbiAgeyB2YWx1ZTogJzF3JywgbGFiZWw6ICcxIHdlZWsnLCBob3VyczogMTY4IH0sXG5dO1xuXG5jb25zdCBibGFua1N0YXRlID0gKCkgPT4gKCB7XG4gIGJvZHk6ICcnLFxuICBwZW5kaW5nOiBbXSxcbiAgcG9sbE1vZGU6IGZhbHNlLFxuICBvcHRpb25MaXN0OiBpbml0aWFsT3B0aW9ucygpLFxuICBjbG9zZXNQcmVzZXQ6ICcnLFxufSApO1xuXG5jb25zdCB7IHN0YXRlLCBhY3Rpb25zIH0gPSBzdG9yZSggJ2hleWZhbS9jb21wb3NlcicsIHtcbiAgc3RhdGU6IHtcbiAgICBib2R5OiAnJyxcbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiB7IGlkLCBmaWxlLCBuYW1lLCBwcmV2aWV3VXJsLCBzdGF0dXMgfSB3aGVyZSBzdGF0dXMgaXNcbiAgICAgKiAncGVuZGluZycgfCAnY29udmVydGluZycgfCAncmVhZHknIHwgJ2Vycm9yJy4gUHJldmlld3MgYXJlXG4gICAgICogYFVSTC5jcmVhdGVPYmplY3RVUkxgIHN0cmluZ3M7IHdlIHJldm9rZSB0aGVtIG9uIHJlbW92ZSArIG9uIHN1Ym1pdC5cbiAgICAgKi9cbiAgICBwZW5kaW5nOiBbXSxcbiAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICBlcnJvcjogJycsXG4gICAgLy8gUG9sbC1tb2RlIHN0YXRlLiBgb3B0aW9uTGlzdGAgcmV1c2VzIHRoZSBzYW1lIHNoYXBlIGFjcm9zc1xuICAgIC8vIG1vZGUgdG9nZ2xlcyBzbyB0aGUgdXNlciBjYW4gaXRlcmF0ZSB3aXRob3V0IGxvc2luZyB0eXBlZCB0ZXh0LlxuICAgIHBvbGxNb2RlOiBmYWxzZSxcbiAgICBvcHRpb25MaXN0OiBpbml0aWFsT3B0aW9ucygpLFxuICAgIGNsb3Nlc1ByZXNldDogJycsXG4gICAgLy8gRWRpdCBtb2RlLiBgZWRpdGluZ1Bvc3RJZGAgaXMgMCB3aGVuIGNvbXBvc2luZyBhIG5ldyBwb3N0LlxuICAgIGVkaXRvck9wZW46IGZhbHNlLFxuICAgIGVkaXRpbmdQb3N0SWQ6IDAsXG4gICAgLy8gU25hcHNob3Qgb2YgaW5saW5lLWNvbXBvc2Ugc3RhdGUgY2FwdHVyZWQgd2hlbiB0aGUgZWRpdG9yIG9wZW5zLCBzbyB0aGVcbiAgICAvLyB1c2VyJ3MgaW4tcHJvZ3Jlc3MgZHJhZnQgc3Vydml2ZXMgYSBjYW5jZWwuXG4gICAgc3Rhc2g6IG51bGwsXG4gICAgLy8gRm9yIGVkaXQgbW9kZTogYHsgaWQsIHVybCwgYWx0IH1bXWAgb2YgYXR0YWNobWVudHMgY3VycmVudGx5IG9uIHRoZSBwb3N0LlxuICAgIC8vIFRoZSB1c2VyIGNhbiByZW1vdmUgdGhlbSwgd2hpY2ggcHVzaGVzIHRoZSBpZCBvbnRvIGByZW1vdmVkQXR0YWNobWVudElkc2BcbiAgICAvLyAoc2VudCB0byB0aGUgc2VydmVyIG9uIHNhdmUpLlxuICAgIGV4aXN0aW5nSW1hZ2VzOiBbXSxcbiAgICByZW1vdmVkQXR0YWNobWVudElkczogW10sXG4gICAgZ2V0IGhhc0ZpbGVzKCkgeyByZXR1cm4gc3RhdGUucGVuZGluZy5sZW5ndGggPiAwOyB9LFxuICAgIGdldCBoYXNFeGlzdGluZ0ltYWdlcygpIHsgcmV0dXJuIHN0YXRlLmV4aXN0aW5nSW1hZ2VzLmxlbmd0aCA+IDA7IH0sXG4gICAgZ2V0IGNhblN1Ym1pdCgpIHtcbiAgICAgIGlmICggc3RhdGUuc3VibWl0dGluZyApIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICggc3RhdGUucG9sbE1vZGUgKSB7XG4gICAgICAgIC8vIFF1ZXN0aW9uIChib2R5KSArIGF0IGxlYXN0IE1JTl9PUFRJT05TIG5vbi1lbXB0eSBvcHRpb25zLlxuICAgICAgICBpZiAoIHN0YXRlLmJvZHkudHJpbSgpID09PSAnJyApIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLm9wdGlvbkxpc3QuZmlsdGVyKCBvID0+IG8udGV4dC50cmltKCkgIT09ICcnICkubGVuZ3RoID49IE1JTl9PUFRJT05TO1xuICAgICAgfVxuICAgICAgLy8gQWxsb3cgdGV4dC1vbmx5IHBvc3RzIChib2R5IHRyaW1tZWQpLCBvciBhbnkgbnVtYmVyIG9mIHJlYWR5IGZpbGVzLlxuICAgICAgcmV0dXJuIHN0YXRlLmJvZHkudHJpbSgpICE9PSAnJyB8fFxuICAgICAgICBzdGF0ZS5wZW5kaW5nLnNvbWUoIHAgPT4gcC5zdGF0dXMgPT09ICdyZWFkeScgKSB8fFxuICAgICAgICBzdGF0ZS5leGlzdGluZ0ltYWdlcy5sZW5ndGggPiAwO1xuICAgIH0sXG4gICAgZ2V0IHBob3RvTGFiZWwoKSB7XG4gICAgICBjb25zdCBuID0gc3RhdGUucGVuZGluZy5sZW5ndGg7XG4gICAgICByZXR1cm4gbiA9PT0gMCA/ICdBZGQgcGhvdG9zJyA6IGAkeyBuIH0gcGhvdG8keyBuID09PSAxID8gJycgOiAncycgfWA7XG4gICAgfSxcbiAgICBnZXQgYm9keVBsYWNlaG9sZGVyKCkgeyByZXR1cm4gc3RhdGUucG9sbE1vZGUgPyAnQXNrIGEgcXVlc3Rpb25cdTIwMjYnIDogJ0hleSBmYW1cdTIwMjYnOyB9LFxuICAgIGdldCBzdWJtaXRMYWJlbCgpIHtcbiAgICAgIGlmICggc3RhdGUuZWRpdGluZ1Bvc3RJZCApIHJldHVybiAnU2F2ZSc7XG4gICAgICByZXR1cm4gc3RhdGUucG9sbE1vZGUgPyAnU2VuZCBwb2xsJyA6ICdTZW5kJztcbiAgICB9LFxuICAgIGdldCBwb2xsVG9nZ2xlTGFiZWwoKSB7IHJldHVybiBzdGF0ZS5wb2xsTW9kZSA/ICdcdTIxOTAgQmFjaycgICAgICAgICA6ICdNYWtlIGl0IGEgcG9sbCc7IH0sXG4gICAgZ2V0IGF0TWF4T3B0aW9ucygpICAgIHsgcmV0dXJuIHN0YXRlLm9wdGlvbkxpc3QubGVuZ3RoID49IE1BWF9PUFRJT05TOyB9LFxuICAgIGdldCBjYW5ub3RSZW1vdmUoKSAgICB7IHJldHVybiBzdGF0ZS5vcHRpb25MaXN0Lmxlbmd0aCA8PSBNSU5fT1BUSU9OUzsgfSxcbiAgICAvKipcbiAgICAgKiBDbG9zZXMgcHJlc2V0cyBkZWNvcmF0ZWQgd2l0aCBgaXNfc2VsZWN0ZWRgIHNvIHRoZSB0ZW1wbGF0ZSBjYW4gZHJpdmVcbiAgICAgKiBgZGF0YS13cC1jbGFzcy0taXMtYWN0aXZlYCBkaXJlY3RseSBvZmYgdGhlIGxvb3AgY29udGV4dC4gQ29tcHV0ZWQgZWFjaFxuICAgICAqIHJlYWQ7IGNoZWFwIChmaXZlIGVudHJpZXMpIGFuZCBrZWVwcyBzdGF0ZS5jbG9zZXNQcmVzZXQgYXMgdGhlIHNpbmdsZVxuICAgICAqIHNvdXJjZSBvZiB0cnV0aC5cbiAgICAgKi9cbiAgICBnZXQgY2xvc2VzUHJlc2V0cygpIHtcbiAgICAgIHJldHVybiBDTE9TRVNfUFJFU0VUUy5tYXAoIHAgPT4gKCB7IC4uLnAsIGlzX3NlbGVjdGVkOiBwLnZhbHVlID09PSBzdGF0ZS5jbG9zZXNQcmVzZXQgfSApICk7XG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIHVwZGF0ZUJvZHkoIGUgKSB7XG4gICAgICBzdGF0ZS5ib2R5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBhdXRvU2l6ZSggZS50YXJnZXQgKTtcbiAgICB9LFxuXG4gICAgLyoqIFRyaWdnZXJlZCBieSB0aGUgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGU+IGNoYW5nZSBldmVudC4gKi9cbiAgICBwaWNrUGhvdG9zKCBlICkge1xuICAgICAgY29uc3QgZmlsZXMgPSBBcnJheS5mcm9tKCBlLnRhcmdldC5maWxlcyB8fCBbXSApO1xuICAgICAgYWRkRmlsZXMoIGZpbGVzICk7XG4gICAgICAvLyBDbGVhciB0aGUgaW5wdXQgc28gcGlja2luZyB0aGUgc2FtZSBmaWxlbmFtZSBhZ2FpbiBzdGlsbCBmaXJlcyBgY2hhbmdlYC5cbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgfSxcblxuICAgIC8qKiBEcmFnLWRyb3Agb24gdGhlIGNvbXBvc2VyJ3MgZHJvcC16b25lLiAqL1xuICAgIG9uRHJhZ092ZXIoIGUgKSB7XG4gICAgICBpZiAoIGUuZGF0YVRyYW5zZmVyPy50eXBlcz8uaW5jbHVkZXMoICdGaWxlcycgKSApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCggJ2lzLWRyb3AtdGFyZ2V0JyApO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25EcmFnTGVhdmUoIGUgKSB7XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSggJ2lzLWRyb3AtdGFyZ2V0JyApO1xuICAgIH0sXG4gICAgb25Ecm9wKCBlICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoICdpcy1kcm9wLXRhcmdldCcgKTtcbiAgICAgIGNvbnN0IGZpbGVzID0gQXJyYXkuZnJvbSggZS5kYXRhVHJhbnNmZXI/LmZpbGVzIHx8IFtdICk7XG4gICAgICBhZGRGaWxlcyggZmlsZXMgKTtcbiAgICB9LFxuXG4gICAgLyoqIENtZC9DdHJsK1Ygb24gdGhlIGJvZHkgdGV4dGFyZWEgXHUyMDE0IGdyYWIgaW1hZ2UgY2xpcGJvYXJkIGl0ZW1zLiAqL1xuICAgIG9uUGFzdGUoIGUgKSB7XG4gICAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oIGUuY2xpcGJvYXJkRGF0YT8uaXRlbXMgfHwgW10gKTtcbiAgICAgIGNvbnN0IGZpbGVzID0gaXRlbXNcbiAgICAgICAgLmZpbHRlciggaSA9PiBpLmtpbmQgPT09ICdmaWxlJyApXG4gICAgICAgIC5tYXAoIGkgPT4gaS5nZXRBc0ZpbGUoKSApXG4gICAgICAgIC5maWx0ZXIoIEJvb2xlYW4gKTtcbiAgICAgIGlmICggZmlsZXMubGVuZ3RoID09PSAwICkgcmV0dXJuOyAvLyB0ZXh0IHBhc3RlOiBsZXQgdGhlIHRleHRhcmVhIGhhbmRsZSBpdFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWRkRmlsZXMoIGZpbGVzICk7XG4gICAgfSxcblxuICAgIHJlbW92ZUZpbGUoKSB7XG4gICAgICBjb25zdCBjdHggPSBnZXRDb250ZXh0KCk7XG4gICAgICBjb25zdCBpZCAgPSBjdHg/Lml0ZW0/LmlkO1xuICAgICAgaWYgKCBpZCA9PSBudWxsICkgcmV0dXJuO1xuICAgICAgY29uc3QgaWR4ID0gc3RhdGUucGVuZGluZy5maW5kSW5kZXgoIHAgPT4gcC5pZCA9PT0gaWQgKTtcbiAgICAgIGlmICggaWR4ID09PSAtMSApIHJldHVybjtcbiAgICAgIGNvbnN0IHJlbW92ZWQgPSBzdGF0ZS5wZW5kaW5nWyBpZHggXTtcbiAgICAgIGlmICggcmVtb3ZlZC5wcmV2aWV3VXJsICkgVVJMLnJldm9rZU9iamVjdFVSTCggcmVtb3ZlZC5wcmV2aWV3VXJsICk7XG4gICAgICBzdGF0ZS5wZW5kaW5nLnNwbGljZSggaWR4LCAxICk7XG4gICAgfSxcblxuICAgIHRvZ2dsZVBvbGxNb2RlKCkge1xuICAgICAgc3RhdGUucG9sbE1vZGUgPSAhIHN0YXRlLnBvbGxNb2RlO1xuICAgICAgaWYgKCBzdGF0ZS5wb2xsTW9kZSApIHtcbiAgICAgICAgLy8gRHJvcCBhbnkgcGVuZGluZyBwaG90byBzZWxlY3Rpb24gd2hlbiBzd2l0Y2hpbmcgaW50byBwb2xsIG1vZGUgXHUyMDE0XG4gICAgICAgIC8vIHBvbGxzIGRvbid0IGNhcnJ5IHBob3RvcyBpbiB2MS5cbiAgICAgICAgZm9yICggY29uc3QgcCBvZiBzdGF0ZS5wZW5kaW5nICkge1xuICAgICAgICAgIGlmICggcC5wcmV2aWV3VXJsICkgVVJMLnJldm9rZU9iamVjdFVSTCggcC5wcmV2aWV3VXJsICk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUucGVuZGluZyA9IFtdO1xuICAgICAgICBpZiAoIHN0YXRlLm9wdGlvbkxpc3QubGVuZ3RoIDwgTUlOX09QVElPTlMgKSBzdGF0ZS5vcHRpb25MaXN0ID0gaW5pdGlhbE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZE9wdGlvbigpIHtcbiAgICAgIGlmICggc3RhdGUub3B0aW9uTGlzdC5sZW5ndGggPj0gTUFYX09QVElPTlMgKSByZXR1cm47XG4gICAgICBjb25zdCBpID0gc3RhdGUub3B0aW9uTGlzdC5sZW5ndGggKyAxO1xuICAgICAgc3RhdGUub3B0aW9uTGlzdC5wdXNoKCBuZXdPcHRpb24oIGBPcHRpb24gJHsgaSB9YCApICk7XG4gICAgfSxcbiAgICByZW1vdmVPcHRpb24oKSB7XG4gICAgICBpZiAoIHN0YXRlLm9wdGlvbkxpc3QubGVuZ3RoIDw9IE1JTl9PUFRJT05TICkgcmV0dXJuO1xuICAgICAgY29uc3QgY3R4ID0gZ2V0Q29udGV4dCgpO1xuICAgICAgY29uc3QgaWR4ID0gc3RhdGUub3B0aW9uTGlzdC5maW5kSW5kZXgoIG8gPT4gby5pZCA9PT0gY3R4Py5vcHRpb24/LmlkICk7XG4gICAgICBpZiAoIGlkeCA9PT0gLTEgKSByZXR1cm47XG4gICAgICBzdGF0ZS5vcHRpb25MaXN0LnNwbGljZSggaWR4LCAxICk7XG4gICAgfSxcbiAgICB1cGRhdGVPcHRpb24oIGUgKSB7XG4gICAgICBjb25zdCBjdHggPSBnZXRDb250ZXh0KCk7XG4gICAgICBjb25zdCBvcHQgPSBzdGF0ZS5vcHRpb25MaXN0LmZpbmQoIG8gPT4gby5pZCA9PT0gY3R4Py5vcHRpb24/LmlkICk7XG4gICAgICBpZiAoIG9wdCApIG9wdC50ZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBzaW5nbGV0b24gZW1vamkgcGlja2VyIGFuY2hvcmVkIG9uIHRoZSBvcHRpb24ncyBlbW9qaSBidXR0b24uXG4gICAgICogQ2xvc2luZyBoYXBwZW5zIG9uIHNlbGVjdGlvbiBvciBvdXRzaWRlLWNsaWNrIChoYW5kbGVkIGluIG9wZW5FbW9qaVBpY2tlcikuXG4gICAgICogQ2xpY2tpbmcgdGhlIGJ1dHRvbiBhIHNlY29uZCB0aW1lIHRvZ2dsZXMgdGhlIHBpY2tlciBjbG9zZWQuXG4gICAgICovXG4gICAgcGlja09wdGlvbkVtb2ppKCBlICkge1xuICAgICAgY29uc3QgY3R4ID0gZ2V0Q29udGV4dCgpO1xuICAgICAgY29uc3Qgb3B0ID0gc3RhdGUub3B0aW9uTGlzdC5maW5kKCBvID0+IG8uaWQgPT09IGN0eD8ub3B0aW9uPy5pZCApO1xuICAgICAgaWYgKCAhIG9wdCApIHJldHVybjtcbiAgICAgIGNvbnN0IGJ0biA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGlmICggZW1vamlQaWNrZXJJc0Zvciggb3B0LmlkICkgKSB7IGNsb3NlRW1vamlQaWNrZXIoKTsgcmV0dXJuOyB9XG4gICAgICBvcGVuRW1vamlQaWNrZXIoIGJ0biwgb3B0LmlkLCAoIGVtb2ppICkgPT4geyBvcHQuZW1vamkgPSBlbW9qaTsgfSApO1xuICAgIH0sXG4gICAgY2xlYXJPcHRpb25FbW9qaSgpIHtcbiAgICAgIGNvbnN0IGN0eCA9IGdldENvbnRleHQoKTtcbiAgICAgIGNvbnN0IG9wdCA9IHN0YXRlLm9wdGlvbkxpc3QuZmluZCggbyA9PiBvLmlkID09PSBjdHg/Lm9wdGlvbj8uaWQgKTtcbiAgICAgIGlmICggb3B0ICkgb3B0LmVtb2ppID0gJyc7XG4gICAgfSxcbiAgICBwaWNrQ2xvc2VzUHJlc2V0KCBlICkge1xuICAgICAgLy8gUmVhZCBkaXJlY3RseSBmcm9tIHRoZSBidXR0b24gXHUyMDE0IGBkYXRhLXdwLWJpbmQtLWRhdGEtdmFsdWVgIG1pcnJvcnNcbiAgICAgIC8vIGBjb250ZXh0LnByZXNldC52YWx1ZWAgc28gdGhpcyB3b3JrcyBmb3IgYm90aCBTU1InZCBhbmQgSlMtcmVuZGVyZWRcbiAgICAgIC8vIGJ1dHRvbnMgd2l0aG91dCBuZWVkaW5nIHRoZSBJQVBJIGNvbnRleHQgaGVyZS5cbiAgICAgIGNvbnN0IHYgPSBlLmN1cnJlbnRUYXJnZXQ/LmRhdGFzZXQ/LnZhbHVlID8/ICcnO1xuICAgICAgc3RhdGUuY2xvc2VzUHJlc2V0ID0gdjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUG9wdWxhdGUgdGhlIGNvbXBvc2VyIGZyb20gYW4gZXhpc3RpbmcgcG9zdCwgc3Rhc2hpbmcgdGhlIGlubGluZSBkcmFmdFxuICAgICAqIGZpcnN0IHNvIGNhbmNlbCByZXN0b3JlcyBpdC4gQ2xvc2VzIGFueSBvcGVuIHBlci1wb3N0IG1lbnUuXG4gICAgICovXG4gICAgb3BlbkVkaXRvciggcG9zdCApIHtcbiAgICAgIGlmICggISBwb3N0IHx8ICEgcG9zdC5pZCApIHJldHVybjtcbiAgICAgIC8vIFN0YXNoIGN1cnJlbnQgaW5saW5lIHN0YXRlIChvbmx5IHdoZW4gbm90IGFscmVhZHkgZWRpdGluZyBcdTIwMTQgcHJldmVudHNcbiAgICAgIC8vIGEgZG91YmxlLW9wZW4gZnJvbSBjbG9iYmVyaW5nIHRoZSBzdGFzaCB3aXRoIHRoZSBwcmV2aW91cyBlZGl0KS5cbiAgICAgIGlmICggISBzdGF0ZS5lZGl0b3JPcGVuICkge1xuICAgICAgICBzdGF0ZS5zdGFzaCA9IHtcbiAgICAgICAgICBib2R5OiAgICAgICAgIHN0YXRlLmJvZHksXG4gICAgICAgICAgcGVuZGluZzogICAgICBzdGF0ZS5wZW5kaW5nLFxuICAgICAgICAgIHBvbGxNb2RlOiAgICAgc3RhdGUucG9sbE1vZGUsXG4gICAgICAgICAgb3B0aW9uTGlzdDogICBzdGF0ZS5vcHRpb25MaXN0LFxuICAgICAgICAgIGNsb3Nlc1ByZXNldDogc3RhdGUuY2xvc2VzUHJlc2V0LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5ib2R5ICAgICAgICAgID0gcG9zdC5ib2R5IHx8ICcnO1xuICAgICAgc3RhdGUucGVuZGluZyAgICAgICA9IFtdO1xuICAgICAgc3RhdGUucmVtb3ZlZEF0dGFjaG1lbnRJZHMgPSBbXTtcbiAgICAgIHN0YXRlLmV4aXN0aW5nSW1hZ2VzID0gKCBwb3N0LmltYWdlcyB8fCBbXSApLm1hcCggaSA9PiAoIHtcbiAgICAgICAgaWQ6IGkuaWQsIHVybDogaS50aHVtYl91cmwgfHwgaS51cmwsIGFsdDogaS5hbHQgfHwgJycsXG4gICAgICB9ICkgKTtcblxuICAgICAgaWYgKCBwb3N0LnBvbGwgKSB7XG4gICAgICAgIHN0YXRlLnBvbGxNb2RlICAgPSB0cnVlO1xuICAgICAgICAvLyBSZS1oeWRyYXRlIG9wdGlvbiBsaXN0IHdpdGggZGV0ZXJtaW5pc3RpYyBJRHMgc28gZGF0YS13cC1lYWNoIGNhbiBrZXkuXG4gICAgICAgIHN0YXRlLm9wdGlvbkxpc3QgPSBwb3N0LnBvbGwub3B0aW9ucy5tYXAoICggbyApID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IG5leHRPcHRpb25JZCsrO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHRleHQ6ICAgICAgICBvLmxhYmVsIHx8ICcnLFxuICAgICAgICAgICAgZW1vamk6ICAgICAgIG8uZW1vamkgfHwgJycsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogYE9wdGlvbiAkeyBvLmluZGV4ICsgMSB9YCxcbiAgICAgICAgICB9O1xuICAgICAgICB9ICk7XG4gICAgICAgIC8vIFBhZCB0byBNSU5fT1BUSU9OUyBpbiB0aGUgdW5saWtlbHkgY2FzZSB0aGUgc2VydmVyIHJldHVybmVkIGZld2VyLlxuICAgICAgICB3aGlsZSAoIHN0YXRlLm9wdGlvbkxpc3QubGVuZ3RoIDwgTUlOX09QVElPTlMgKSB7XG4gICAgICAgICAgc3RhdGUub3B0aW9uTGlzdC5wdXNoKCBuZXdPcHRpb24oIGBPcHRpb24gJHsgc3RhdGUub3B0aW9uTGlzdC5sZW5ndGggKyAxIH1gICkgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBjYW4ndCByZWxpYWJseSByZXZlcnNlLWVuZ2luZWVyIHdoaWNoIHByZXNldCB0aGUgdXNlciBvcmlnaW5hbGx5XG4gICAgICAgIC8vIHBpY2tlZCBcdTIwMTQgcGljayBhIGZyZXNoIGR1cmF0aW9uIHRvIGNoYW5nZSB0aGUgY2xvc2UgdGltZSwgb3IgbGVhdmVcbiAgICAgICAgLy8gJ05ldmVyJyB0byBjbGVhciBpdC5cbiAgICAgICAgc3RhdGUuY2xvc2VzUHJlc2V0ID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5wb2xsTW9kZSAgICAgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUub3B0aW9uTGlzdCAgID0gaW5pdGlhbE9wdGlvbnMoKTtcbiAgICAgICAgc3RhdGUuY2xvc2VzUHJlc2V0ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmVkaXRpbmdQb3N0SWQgPSBwb3N0LmlkO1xuICAgICAgc3RhdGUuZXJyb3IgICAgICAgICA9ICcnO1xuICAgICAgc3RhdGUuZWRpdG9yT3BlbiAgICA9IHRydWU7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoICdoZXlmYW0tbW9kYWwtb3BlbicgKTtcbiAgICB9LFxuXG4gICAgY2xvc2VFZGl0b3IoKSB7XG4gICAgICAvLyBEcm9wIGFueSBuZXctZmlsZSBwcmV2aWV3cyBwaWNrZWQgd2hpbGUgaW4gdGhlIGVkaXRvci5cbiAgICAgIGZvciAoIGNvbnN0IHAgb2Ygc3RhdGUucGVuZGluZyApIHtcbiAgICAgICAgaWYgKCBwLnByZXZpZXdVcmwgKSBVUkwucmV2b2tlT2JqZWN0VVJMKCBwLnByZXZpZXdVcmwgKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzdG9yZSB0aGUgc3Rhc2hlZCBpbmxpbmUgZHJhZnQgaWYgdGhlcmUgd2FzIG9uZS5cbiAgICAgIGNvbnN0IHMgPSBzdGF0ZS5zdGFzaDtcbiAgICAgIGlmICggcyApIHtcbiAgICAgICAgc3RhdGUuYm9keSAgICAgICAgID0gcy5ib2R5O1xuICAgICAgICBzdGF0ZS5wZW5kaW5nICAgICAgPSBzLnBlbmRpbmc7XG4gICAgICAgIHN0YXRlLnBvbGxNb2RlICAgICA9IHMucG9sbE1vZGU7XG4gICAgICAgIHN0YXRlLm9wdGlvbkxpc3QgICA9IHMub3B0aW9uTGlzdDtcbiAgICAgICAgc3RhdGUuY2xvc2VzUHJlc2V0ID0gcy5jbG9zZXNQcmVzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKCBzdGF0ZSwgYmxhbmtTdGF0ZSgpICk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5zdGFzaCAgICAgICAgICAgICAgICA9IG51bGw7XG4gICAgICBzdGF0ZS5lZGl0aW5nUG9zdElkICAgICAgICA9IDA7XG4gICAgICBzdGF0ZS5leGlzdGluZ0ltYWdlcyAgICAgICA9IFtdO1xuICAgICAgc3RhdGUucmVtb3ZlZEF0dGFjaG1lbnRJZHMgPSBbXTtcbiAgICAgIHN0YXRlLmVycm9yICAgICAgICAgICAgICAgID0gJyc7XG4gICAgICBzdGF0ZS5lZGl0b3JPcGVuICAgICAgICAgICA9IGZhbHNlO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCAnaGV5ZmFtLW1vZGFsLW9wZW4nICk7XG4gICAgfSxcblxuICAgIC8qKiBSZW1vdmUgYW4gYWxyZWFkeS1hdHRhY2hlZCBpbWFnZS4gUXVldWUgaXRzIGlkIGZvciBzZXJ2ZXItc2lkZSBkZWxldGUuICovXG4gICAgcmVtb3ZlRXhpc3RpbmdJbWFnZSgpIHtcbiAgICAgIGNvbnN0IGN0eCA9IGdldENvbnRleHQoKTtcbiAgICAgIGNvbnN0IGlkICA9IGN0eD8uaW1hZ2U/LmlkO1xuICAgICAgaWYgKCBpZCA9PSBudWxsICkgcmV0dXJuO1xuICAgICAgY29uc3QgaWR4ID0gc3RhdGUuZXhpc3RpbmdJbWFnZXMuZmluZEluZGV4KCBpID0+IGkuaWQgPT09IGlkICk7XG4gICAgICBpZiAoIGlkeCA9PT0gLTEgKSByZXR1cm47XG4gICAgICBzdGF0ZS5leGlzdGluZ0ltYWdlcy5zcGxpY2UoIGlkeCwgMSApO1xuICAgICAgc3RhdGUucmVtb3ZlZEF0dGFjaG1lbnRJZHMucHVzaCggaWQgKTtcbiAgICB9LFxuXG4gICAgb25FZGl0b3JCYWNrZHJvcCggZSApIHtcbiAgICAgIC8vIE9ubHkgY2xvc2Ugd2hlbiBjbGlja2luZyB0aGUgYmFja2Ryb3AgaXRzZWxmLCBub3QgdGhlIGRpYWxvZyBpbnNpZGUuXG4gICAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdD8uY29udGFpbnMoICdoZXlmYW0tbW9kYWwnICkgKSB7XG4gICAgICAgIGFjdGlvbnMuY2xvc2VFZGl0b3IoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgKnN1Ym1pdCggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICggISBzdGF0ZS5jYW5TdWJtaXQgfHwgc3RhdGUuc3VibWl0dGluZyApIHJldHVybjtcbiAgICAgIHN0YXRlLnN1Ym1pdHRpbmcgPSB0cnVlO1xuICAgICAgc3RhdGUuZXJyb3IgICAgICA9ICcnO1xuICAgICAgY29uc3QgaGV5ZmFtICAgID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICBjb25zdCBlZGl0aW5nSWQgPSBzdGF0ZS5lZGl0aW5nUG9zdElkO1xuXG4gICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZmQuYXBwZW5kKCAnYm9keScsIHN0YXRlLmJvZHkgKTtcblxuICAgICAgaWYgKCBzdGF0ZS5wb2xsTW9kZSApIHtcbiAgICAgICAgLy8gUGFpciBsYWJlbHMgd2l0aCB0aGVpciBlbW9qaXMgQkVGT1JFIGZpbHRlcmluZyBlbXB0aWVzLCBzbyB3ZSBkb24ndFxuICAgICAgICAvLyBkZXRhY2ggYW4gZW1vamkgZnJvbSBpdHMgcm93IHdoZW4gYW4gb3B0aW9uIGp1c3QgYWJvdmUgaXMgYmxhbmsuXG4gICAgICAgIGNvbnN0IHJvd3MgPSBzdGF0ZS5vcHRpb25MaXN0XG4gICAgICAgICAgLm1hcCggbyA9PiAoIHsgbGFiZWw6IG8udGV4dC50cmltKCksIGVtb2ppOiAoIG8uZW1vamkgfHwgJycgKS50cmltKCkgfSApIClcbiAgICAgICAgICAuZmlsdGVyKCByID0+IHIubGFiZWwgIT09ICcnICk7XG4gICAgICAgIGlmICggcm93cy5sZW5ndGggPCBNSU5fT1BUSU9OUyApIHtcbiAgICAgICAgICBzdGF0ZS5lcnJvciAgICAgID0gYEEgcG9sbCBuZWVkcyBhdCBsZWFzdCAkeyBNSU5fT1BUSU9OUyB9IG9wdGlvbnMuYDtcbiAgICAgICAgICBzdGF0ZS5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoIGNvbnN0IHIgb2Ygcm93cyApIHtcbiAgICAgICAgICBmZC5hcHBlbmQoICdwb2xsX29wdGlvbnNbXScsICAgICAgIHIubGFiZWwgKTtcbiAgICAgICAgICBmZC5hcHBlbmQoICdwb2xsX29wdGlvbl9lbW9qaXNbXScsIHIuZW1vamkgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmVzZXQgPSBDTE9TRVNfUFJFU0VUUy5maW5kKCBwID0+IHAudmFsdWUgPT09IHN0YXRlLmNsb3Nlc1ByZXNldCApO1xuICAgICAgICBpZiAoIHByZXNldCAmJiBwcmVzZXQuaG91cnMgPiAwICkge1xuICAgICAgICAgIC8vIEFuY2hvciBhdCBzdWJtaXQgdGltZSBzbyB0aGUgZGlzcGxheWVkIHByZXNldHMgbWF0Y2ggd2hhdCB0aGVcbiAgICAgICAgICAvLyBiYWNrZW5kIHN0b3JlcyAodGhlIHNlcnZlciBvdGhlcndpc2Ugc2VlcyBubyBjbG9zZXNfYXQgYW5kIHRoZVxuICAgICAgICAgIC8vIHBvbGwgbmV2ZXIgY2xvc2VzKS5cbiAgICAgICAgICBjb25zdCBjbG9zZXMgPSBuZXcgRGF0ZSggRGF0ZS5ub3coKSArIHByZXNldC5ob3VycyAqIDM2MDAgKiAxMDAwICk7XG4gICAgICAgICAgZmQuYXBwZW5kKCAncG9sbF9jbG9zZXNfYXQnLCBjbG9zZXMudG9JU09TdHJpbmcoKSApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWFkeSA9IHN0YXRlLnBlbmRpbmcuZmlsdGVyKCBwID0+IHAuc3RhdHVzID09PSAncmVhZHknICk7XG4gICAgICAgIGZvciAoIGNvbnN0IHAgb2YgcmVhZHkgKSBmZC5hcHBlbmQoICdwaG90b3NbXScsIHAuZmlsZSwgcC5uYW1lICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggZWRpdGluZ0lkICkge1xuICAgICAgICBmb3IgKCBjb25zdCBpZCBvZiBzdGF0ZS5yZW1vdmVkQXR0YWNobWVudElkcyApIHtcbiAgICAgICAgICBmZC5hcHBlbmQoICdyZW1vdmVfYXR0YWNobWVudF9pZHNbXScsIFN0cmluZyggaWQgKSApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVybCA9IGVkaXRpbmdJZFxuICAgICAgICA/IGAkeyBoZXlmYW0uYXBpQmFzZSB9LyR7IGhleWZhbS5mYW1TbHVnIH0vcG9zdC8keyBlZGl0aW5nSWQgfWBcbiAgICAgICAgOiBgJHsgaGV5ZmFtLmFwaUJhc2UgfS8keyBoZXlmYW0uZmFtU2x1ZyB9L3Bvc3RzYDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCB1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sIGJvZHk6IGZkLFxuICAgICAgICB9ICk7XG4gICAgICAgIGlmICggISByLm9rICkgdGhyb3cgbmV3IEVycm9yKCAncG9zdC1mYWlsZWQnICk7XG5cbiAgICAgICAgLy8gQ2xlYXIgc3RhdGUsIHJldm9rZSBvYmplY3QgVVJMcy5cbiAgICAgICAgZm9yICggY29uc3QgcCBvZiBzdGF0ZS5wZW5kaW5nICkge1xuICAgICAgICAgIGlmICggcC5wcmV2aWV3VXJsICkgVVJMLnJldm9rZU9iamVjdFVSTCggcC5wcmV2aWV3VXJsICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBlZGl0aW5nSWQgKSB7XG4gICAgICAgICAgLy8gY2xvc2VFZGl0b3IgcmVzdG9yZXMgdGhlIHByZS1lZGl0IGlubGluZSBkcmFmdCAodGhlIHN0YXNoKS5cbiAgICAgICAgICBzdGF0ZS5wZW5kaW5nID0gW107XG4gICAgICAgICAgYWN0aW9ucy5jbG9zZUVkaXRvcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLmJvZHkgICAgICAgICA9ICcnO1xuICAgICAgICAgIGF1dG9TaXplKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmhleWZhbS1jb21wb3NlciB0ZXh0YXJlYScgKSApO1xuICAgICAgICAgIHN0YXRlLnBlbmRpbmcgICAgICA9IFtdO1xuICAgICAgICAgIHN0YXRlLnBvbGxNb2RlICAgICA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLm9wdGlvbkxpc3QgICA9IGluaXRpYWxPcHRpb25zKCk7XG4gICAgICAgICAgc3RhdGUuY2xvc2VzUHJlc2V0ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZSggJ2hleWZhbS9mZWVkJyApLmNhbGxiYWNrcz8ucmVmcmVzaD8uKCBoZXlmYW0gKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIHN0YXRlLmVycm9yID0gZWRpdGluZ0lkID8gJ0NvdWxkIG5vdCBzYXZlLiBUcnkgYWdhaW4uJyA6ICdDb3VsZCBub3QgcG9zdC4gVHJ5IGFnYWluLic7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzdGF0ZS5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0gKTtcblxuLyoqIEdyb3cgYSB0ZXh0YXJlYSB0byBmaXQgaXRzIGNvbnRlbnQgKHVwIHRvIGEgc29mdCBjYXA7IHNjcm9sbCBwYXN0IGl0KS4gKi9cbmNvbnN0IEFVVE9TSVpFX01BWCA9IDI0MDtcbmZ1bmN0aW9uIGF1dG9TaXplKCBlbCApIHtcbiAgaWYgKCAhIGVsIHx8IGVsLnRhZ05hbWUgIT09ICdURVhUQVJFQScgKSByZXR1cm47XG4gIGVsLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgZWwuc3R5bGUuaGVpZ2h0ID0gTWF0aC5taW4oIGVsLnNjcm9sbEhlaWdodCwgQVVUT1NJWkVfTUFYICkgKyAncHgnO1xuICBlbC5zdHlsZS5vdmVyZmxvd1kgPSBlbC5zY3JvbGxIZWlnaHQgPiBBVVRPU0laRV9NQVggPyAnYXV0bycgOiAnaGlkZGVuJztcbn1cblxuLypcbiAqIFNpbmdsZXRvbiBlbW9qaSBwaWNrZXIgZm9yIHRoZSBjb21wb3NlcidzIHBlci1vcHRpb24gcGlja2Vycy4gTGl2ZXMgb25cbiAqIGRvY3VtZW50LmJvZHkgYW5kIHRvZ2dsZXMgaW50byBwb3NpdGlvbiBvdmVyIHdoaWNoZXZlciBvcHRpb24gYnV0dG9uIHdhc1xuICogdGFwcGVkLiBNaXJyb3JzIHJlYWN0aW9ucy5qcydzIHBhdHRlcm4gYnV0IHRoZSBjYWxsYmFjayB3cml0ZXMgdG8gdGhlXG4gKiBvcHRpb24ncyBgZW1vamlgIGluc3RlYWQgb2YgUE9TVGluZyBhIHJlYWN0aW9uLlxuICovXG5sZXQgZW1vamlQaWNrZXIgICAgICAgID0gbnVsbDtcbmxldCBlbW9qaVBpY2tlck9wdElkICAgPSBudWxsO1xubGV0IGVtb2ppUGlja2VyT3V0c2lkZSA9IG51bGw7XG5sZXQgZW1vamlQaWNrZXJDYWxsYmFjayA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldEVtb2ppUGlja2VyKCkge1xuICBpZiAoIGVtb2ppUGlja2VyICkgcmV0dXJuIGVtb2ppUGlja2VyO1xuICBlbW9qaVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdlbW9qaS1waWNrZXInICk7XG4gIGVtb2ppUGlja2VyLmNsYXNzTGlzdC5hZGQoICdoZXlmYW0tZW1vamktcGlja2VyJyApO1xuICBlbW9qaVBpY2tlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGVtb2ppUGlja2VyLnN0eWxlLnpJbmRleCAgID0gJzEwMDAnO1xuICBlbW9qaVBpY2tlci5zdHlsZS5kaXNwbGF5ICA9ICdub25lJztcbiAgZW1vamlQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2Vtb2ppLWNsaWNrJywgKCBldiApID0+IHtcbiAgICBpZiAoIGVtb2ppUGlja2VyQ2FsbGJhY2sgKSBlbW9qaVBpY2tlckNhbGxiYWNrKCBldi5kZXRhaWwudW5pY29kZSApO1xuICAgIGNsb3NlRW1vamlQaWNrZXIoKTtcbiAgfSApO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBlbW9qaVBpY2tlciApO1xuICByZXR1cm4gZW1vamlQaWNrZXI7XG59XG5cbmZ1bmN0aW9uIGVtb2ppUGlja2VySXNGb3IoIG9wdElkICkge1xuICByZXR1cm4gZW1vamlQaWNrZXIgJiYgZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIGVtb2ppUGlja2VyT3B0SWQgPT09IG9wdElkO1xufVxuXG5mdW5jdGlvbiBvcGVuRW1vamlQaWNrZXIoIGJ0biwgb3B0SWQsIGNiICkge1xuICBjb25zdCBwID0gZ2V0RW1vamlQaWNrZXIoKTtcbiAgZW1vamlQaWNrZXJPcHRJZCAgICA9IG9wdElkO1xuICBlbW9qaVBpY2tlckNhbGxiYWNrID0gY2I7XG4gIGNvbnN0IHJlY3QgICA9IGJ0bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgaCAgICAgID0gNDAwOyAvLyBlbW9qaS1waWNrZXItZWxlbWVudCBkZWZhdWx0IGhlaWdodFxuICBjb25zdCBmaXRzICAgPSByZWN0LmJvdHRvbSArIGggKyAxMiA8IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY29uc3QgdG9wICAgID0gZml0cyA/IHJlY3QuYm90dG9tICsgd2luZG93LnNjcm9sbFkgKyA2XG4gICAgICAgICAgICAgICAgICAgICAgOiByZWN0LnRvcCAgICArIHdpbmRvdy5zY3JvbGxZIC0gaCAtIDY7XG4gIGNvbnN0IGxlZnQgICA9IE1hdGgubWF4KCA4LCBNYXRoLm1pbiggcmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFgsIHdpbmRvdy5pbm5lcldpZHRoIC0gMzYwICkgKTtcbiAgcC5zdHlsZS50b3AgICAgID0gYCR7IHRvcCB9cHhgO1xuICBwLnN0eWxlLmxlZnQgICAgPSBgJHsgbGVmdCB9cHhgO1xuICBwLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgaWYgKCBlbW9qaVBpY2tlck91dHNpZGUgKSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBlbW9qaVBpY2tlck91dHNpZGUgKTtcbiAgZW1vamlQaWNrZXJPdXRzaWRlID0gKCBldiApID0+IHtcbiAgICBpZiAoICEgcC5jb250YWlucyggZXYudGFyZ2V0ICkgJiYgISBidG4uY29udGFpbnMoIGV2LnRhcmdldCApICkgY2xvc2VFbW9qaVBpY2tlcigpO1xuICB9O1xuICBzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBlbW9qaVBpY2tlck91dHNpZGUgKSwgMCApO1xufVxuXG5mdW5jdGlvbiBjbG9zZUVtb2ppUGlja2VyKCkge1xuICBpZiAoIGVtb2ppUGlja2VyICkgZW1vamlQaWNrZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZW1vamlQaWNrZXJPcHRJZCAgICA9IG51bGw7XG4gIGVtb2ppUGlja2VyQ2FsbGJhY2sgPSBudWxsO1xuICBpZiAoIGVtb2ppUGlja2VyT3V0c2lkZSApIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBlbW9qaVBpY2tlck91dHNpZGUgKTtcbiAgICBlbW9qaVBpY2tlck91dHNpZGUgPSBudWxsO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZEZpbGVzKCBmaWxlcyApIHtcbiAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gIGxldCBuZXh0SWQgICA9ICggc3RhdGUucGVuZGluZ1sgc3RhdGUucGVuZGluZy5sZW5ndGggLSAxIF0/LmlkID8/IDAgKSArIDE7XG5cbiAgZm9yICggY29uc3QgZmlsZSBvZiBmaWxlcyApIHtcbiAgICBpZiAoIHN0YXRlLnBlbmRpbmcubGVuZ3RoID49IE1BWF9GSUxFUyApIHtcbiAgICAgIHN0YXRlLmVycm9yID0gYE1heCAkeyBNQVhfRklMRVMgfSBwaG90b3MgcGVyIHBvc3QuYDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoICEgYWNjZXB0YWJsZSggZmlsZSApICkge1xuICAgICAgc3RhdGUuZXJyb3IgPSAnT25seSBpbWFnZXMsIHBsZWFzZS4nO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICggZmlsZS5zaXplID4gTUFYX0JZVEVTICkge1xuICAgICAgc3RhdGUuZXJyb3IgPSBgJHsgZmlsZS5uYW1lIH0gaXMgdG9vIGxhcmdlLmA7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWljICAgICAgICAgICAgICAgPSBpc0hlaWMoIGZpbGUgKTtcbiAgICBjb25zdCBuZWVkc0NsaWVudENvbnZlcnQgPSBoZWljICYmICEgaGV5ZmFtLmhlaWNTdXBwb3J0O1xuXG4gICAgY29uc3Qgc2xvdCA9IHtcbiAgICAgIGlkOiAgICAgICAgIG5leHRJZCsrLFxuICAgICAgZmlsZSxcbiAgICAgIG5hbWU6ICAgICAgIGZpbGUubmFtZSxcbiAgICAgIHByZXZpZXdVcmw6ICcnLFxuICAgICAgc3RhdHVzOiAgICAgbmVlZHNDbGllbnRDb252ZXJ0ID8gJ2NvbnZlcnRpbmcnIDogJ3JlYWR5JyxcbiAgICB9O1xuICAgIC8vIFByb3Zpc2lvbmFsIHByZXZpZXcgZnJvbSB0aGUgb3JpZ2luYWwgZmlsZS4gaU9TIFNhZmFyaSBjYW4gcmVuZGVyXG4gICAgLy8gc29tZSBIRUlDIGludG8gPGltZz47IG9uIG90aGVyIGJyb3dzZXJzIHRoZSBwcmV2aWV3IGp1c3Qgc3RheXMgYmxhbmtcbiAgICAvLyB1bnRpbCB0aGUgY29udmVyc2lvbiBzd2FwcyBpbiBhIEpQRUcgYmVsb3cuXG4gICAgdHJ5IHsgc2xvdC5wcmV2aWV3VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggZmlsZSApOyB9IGNhdGNoIHt9XG4gICAgc3RhdGUucGVuZGluZy5wdXNoKCBzbG90ICk7XG5cbiAgICBpZiAoIG5lZWRzQ2xpZW50Q29udmVydCApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogaGVpYzJhbnkgfSA9IGF3YWl0IGltcG9ydCggJ2hlaWMyYW55JyApO1xuICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgaGVpYzJhbnkoIHsgYmxvYjogZmlsZSwgdG9UeXBlOiAnaW1hZ2UvanBlZycsIHF1YWxpdHk6IDAuODIgfSApO1xuICAgICAgICBjb25zdCBvdXQgID0gQXJyYXkuaXNBcnJheSggYmxvYiApID8gYmxvYlsgMCBdIDogYmxvYjtcbiAgICAgICAgY29uc3QgY29udmVydGVkID0gbmV3IEZpbGUoXG4gICAgICAgICAgWyBvdXQgXSxcbiAgICAgICAgICBmaWxlLm5hbWUucmVwbGFjZSggL1xcLihoZWljfGhlaWYpJC9pLCAnLmpwZycgKSxcbiAgICAgICAgICB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGZyZXNoID0gc3RhdGUucGVuZGluZy5maW5kKCBwID0+IHAuaWQgPT09IHNsb3QuaWQgKTtcbiAgICAgICAgaWYgKCAhIGZyZXNoICkgY29udGludWU7IC8vIHVzZXIgcmVtb3ZlZCBpdCBkdXJpbmcgY29udmVyc2lvblxuICAgICAgICBpZiAoIGZyZXNoLnByZXZpZXdVcmwgKSBVUkwucmV2b2tlT2JqZWN0VVJMKCBmcmVzaC5wcmV2aWV3VXJsICk7XG4gICAgICAgIGZyZXNoLmZpbGUgICAgICAgPSBjb252ZXJ0ZWQ7XG4gICAgICAgIGZyZXNoLm5hbWUgICAgICAgPSBjb252ZXJ0ZWQubmFtZTtcbiAgICAgICAgZnJlc2gucHJldmlld1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGNvbnZlcnRlZCApO1xuICAgICAgICBmcmVzaC5zdGF0dXMgICAgID0gJ3JlYWR5JztcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIGNvbnN0IGZyZXNoID0gc3RhdGUucGVuZGluZy5maW5kKCBwID0+IHAuaWQgPT09IHNsb3QuaWQgKTtcbiAgICAgICAgaWYgKCBmcmVzaCApIGZyZXNoLnN0YXR1cyA9ICdlcnJvcic7XG4gICAgICAgIHN0YXRlLmVycm9yID0gJ0NvdWxkIG5vdCByZWFkIEhFSUMgcGhvdG8uIENvbnZlcnQgdG8gSlBFRyBhbmQgdHJ5IGFnYWluLic7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCAiZnVuY3Rpb24gYXNzZXJ0Tm9uRW1wdHlTdHJpbmcgKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgIXN0cikge1xuICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgYSBub24tZW1wdHkgc3RyaW5nLCBnb3Q6ICcgKyBzdHIpXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0TnVtYmVyIChudW1iZXIpIHtcbiAgaWYgKHR5cGVvZiBudW1iZXIgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBhIG51bWJlciwgZ290OiAnICsgbnVtYmVyKVxuICB9XG59XG5cbmNvbnN0IERCX1ZFUlNJT05fQ1VSUkVOVCA9IDE7XG5jb25zdCBEQl9WRVJTSU9OX0lOSVRJQUwgPSAxO1xuY29uc3QgU1RPUkVfRU1PSkkgPSAnZW1vamknO1xuY29uc3QgU1RPUkVfS0VZVkFMVUUgPSAna2V5dmFsdWUnO1xuY29uc3QgU1RPUkVfRkFWT1JJVEVTID0gJ2Zhdm9yaXRlcyc7XG5jb25zdCBGSUVMRF9UT0tFTlMgPSAndG9rZW5zJztcbmNvbnN0IElOREVYX1RPS0VOUyA9ICd0b2tlbnMnO1xuY29uc3QgRklFTERfVU5JQ09ERSA9ICd1bmljb2RlJztcbmNvbnN0IElOREVYX0NPVU5UID0gJ2NvdW50JztcbmNvbnN0IEZJRUxEX0dST1VQID0gJ2dyb3VwJztcbmNvbnN0IEZJRUxEX09SREVSID0gJ29yZGVyJztcbmNvbnN0IElOREVYX0dST1VQX0FORF9PUkRFUiA9ICdncm91cC1vcmRlcic7XG5jb25zdCBLRVlfRVRBRyA9ICdlVGFnJztcbmNvbnN0IEtFWV9VUkwgPSAndXJsJztcbmNvbnN0IEtFWV9QUkVGRVJSRURfU0tJTlRPTkUgPSAnc2tpblRvbmUnO1xuY29uc3QgTU9ERV9SRUFET05MWSA9ICdyZWFkb25seSc7XG5jb25zdCBNT0RFX1JFQURXUklURSA9ICdyZWFkd3JpdGUnO1xuY29uc3QgSU5ERVhfU0tJTl9VTklDT0RFID0gJ3NraW5Vbmljb2Rlcyc7XG5jb25zdCBGSUVMRF9TS0lOX1VOSUNPREUgPSAnc2tpblVuaWNvZGVzJztcblxuY29uc3QgREVGQVVMVF9EQVRBX1NPVVJDRSA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Vtb2ppLXBpY2tlci1lbGVtZW50LWRhdGFAXjEvZW4vZW1vamliYXNlL2RhdGEuanNvbic7XG5jb25zdCBERUZBVUxUX0xPQ0FMRSA9ICdlbic7XG5cbi8vIGxpa2UgbG9kYXNoJ3MgdW5pcUJ5IGJ1dCBtdWNoIHNtYWxsZXJcbmZ1bmN0aW9uIHVuaXFCeSAoYXJyLCBmdW5jKSB7XG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcbiAgY29uc3QgcmVzID0gW107XG4gIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICBjb25zdCBrZXkgPSBmdW5jKGl0ZW0pO1xuICAgIGlmICghc2V0LmhhcyhrZXkpKSB7XG4gICAgICBzZXQuYWRkKGtleSk7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiB1bmlxRW1vamkgKGVtb2ppcykge1xuICByZXR1cm4gdW5pcUJ5KGVtb2ppcywgXyA9PiBfLnVuaWNvZGUpXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxNaWdyYXRpb24gKGRiKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdFN0b3JlIChuYW1lLCBrZXlQYXRoLCBpbmRleGVzKSB7XG4gICAgY29uc3Qgc3RvcmUgPSBrZXlQYXRoXG4gICAgICA/IGRiLmNyZWF0ZU9iamVjdFN0b3JlKG5hbWUsIHsga2V5UGF0aCB9KVxuICAgICAgOiBkYi5jcmVhdGVPYmplY3RTdG9yZShuYW1lKTtcbiAgICBpZiAoaW5kZXhlcykge1xuICAgICAgZm9yIChjb25zdCBbaW5kZXhOYW1lLCBba2V5UGF0aCwgbXVsdGlFbnRyeV1dIG9mIE9iamVjdC5lbnRyaWVzKGluZGV4ZXMpKSB7XG4gICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KGluZGV4TmFtZSwga2V5UGF0aCwgeyBtdWx0aUVudHJ5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RvcmVcbiAgfVxuXG4gIGNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFX0tFWVZBTFVFKTtcbiAgY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkVfRU1PSkksIC8qIGtleVBhdGggKi8gRklFTERfVU5JQ09ERSwge1xuICAgIFtJTkRFWF9UT0tFTlNdOiBbRklFTERfVE9LRU5TLCAvKiBtdWx0aUVudHJ5ICovIHRydWVdLFxuICAgIFtJTkRFWF9HUk9VUF9BTkRfT1JERVJdOiBbW0ZJRUxEX0dST1VQLCBGSUVMRF9PUkRFUl1dLFxuICAgIFtJTkRFWF9TS0lOX1VOSUNPREVdOiBbRklFTERfU0tJTl9VTklDT0RFLCAvKiBtdWx0aUVudHJ5ICovIHRydWVdXG4gIH0pO1xuICBjcmVhdGVPYmplY3RTdG9yZShTVE9SRV9GQVZPUklURVMsIHVuZGVmaW5lZCwge1xuICAgIFtJTkRFWF9DT1VOVF06IFsnJ11cbiAgfSk7XG59XG5cbmNvbnN0IG9wZW5JbmRleGVkREJSZXF1ZXN0cyA9IHt9O1xuY29uc3QgZGF0YWJhc2VDYWNoZSA9IHt9O1xuY29uc3Qgb25DbG9zZUxpc3RlbmVycyA9IHt9O1xuXG5mdW5jdGlvbiBoYW5kbGVPcGVuT3JEZWxldGVSZXEgKHJlc29sdmUsIHJlamVjdCwgcmVxKSB7XG4gIC8vIFRoZXNlIHRoaW5ncyBhcmUgYWxtb3N0IGltcG9zc2libGUgdG8gdGVzdCB3aXRoIGZha2VJbmRleGVkREIgc2FkbHlcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmVxLm9uYmxvY2tlZCA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoJ0lEQiBibG9ja2VkJykpO1xuICByZXEub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXEucmVzdWx0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGF0YWJhc2UgKGRiTmFtZSkge1xuICBjb25zdCBkYiA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZXEgPSBpbmRleGVkREIub3BlbihkYk5hbWUsIERCX1ZFUlNJT05fQ1VSUkVOVCk7XG4gICAgb3BlbkluZGV4ZWREQlJlcXVlc3RzW2RiTmFtZV0gPSByZXE7XG4gICAgcmVxLm9udXBncmFkZW5lZWRlZCA9IGUgPT4ge1xuICAgICAgLy8gVGVjaG5pY2FsbHkgdGhlcmUgaXMgb25seSBvbmUgdmVyc2lvbiwgc28gd2UgZG9uJ3QgbmVlZCB0aGlzIGBpZmAgY2hlY2tcbiAgICAgIC8vIEJ1dCBpZiBhbiBvbGQgdmVyc2lvbiBvZiB0aGUgSlMgaXMgaW4gYW5vdGhlciBicm93c2VyIHRhYlxuICAgICAgLy8gYW5kIGl0IGdldHMgdXBncmFkZWQgaW4gdGhlIGZ1dHVyZSBhbmQgd2UgaGF2ZSBhIG5ldyBEQiB2ZXJzaW9uLCB3ZWxsLi4uXG4gICAgICAvLyBiZXR0ZXIgc2FmZSB0aGFuIHNvcnJ5LlxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChlLm9sZFZlcnNpb24gPCBEQl9WRVJTSU9OX0lOSVRJQUwpIHtcbiAgICAgICAgaW5pdGlhbE1pZ3JhdGlvbihyZXEucmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGhhbmRsZU9wZW5PckRlbGV0ZVJlcShyZXNvbHZlLCByZWplY3QsIHJlcSk7XG4gIH0pO1xuICAvLyBIYW5kbGUgYWJub3JtYWwgY2xvc2VzLCBlLmcuIFwiZGVsZXRlIGRhdGFiYXNlXCIgaW4gY2hyb21lIGRldiB0b29scy5cbiAgLy8gTm8gbmVlZCBmb3IgcmVtb3ZlRXZlbnRMaXN0ZW5lciwgYmVjYXVzZSBvbmNlIHRoZSBEQiBjYW4gbm8gbG9uZ2VyXG4gIC8vIGZpcmUgXCJjbG9zZVwiIGV2ZW50cywgaXQgd2lsbCBhdXRvLUdDLlxuICBkYi5vbmNsb3NlID0gKCkgPT4gY2xvc2VEYXRhYmFzZShkYk5hbWUpO1xuICByZXR1cm4gZGJcbn1cblxuZnVuY3Rpb24gb3BlbkRhdGFiYXNlIChkYk5hbWUpIHtcbiAgaWYgKCFkYXRhYmFzZUNhY2hlW2RiTmFtZV0pIHtcbiAgICBkYXRhYmFzZUNhY2hlW2RiTmFtZV0gPSBjcmVhdGVEYXRhYmFzZShkYk5hbWUpO1xuICB9XG4gIHJldHVybiBkYXRhYmFzZUNhY2hlW2RiTmFtZV1cbn1cblxuZnVuY3Rpb24gZGJQcm9taXNlIChkYiwgc3RvcmVOYW1lLCByZWFkT25seU9yUmVhZFdyaXRlLCBjYikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIFVzZSByZWxheGVkIGR1cmFiaWxpdHkgYmVjYXVzZSBuZWl0aGVyIHRoZSBlbW9qaSBkYXRhIG5vciB0aGUgZmF2b3JpdGVzL3ByZWZlcnJlZCBza2luIHRvbmVcbiAgICAvLyBhcmUgcmVhbGx5IGlycmVwbGFjZWFibGUgZGF0YS4gSW5kZXhlZERCIGlzIGp1c3QgYSBjYWNoZSBpbiB0aGlzIGNhc2UuXG4gICAgY29uc3QgdHhuID0gZGIudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCByZWFkT25seU9yUmVhZFdyaXRlLCB7IGR1cmFiaWxpdHk6ICdyZWxheGVkJyB9KTtcbiAgICBjb25zdCBzdG9yZSA9IHR5cGVvZiBzdG9yZU5hbWUgPT09ICdzdHJpbmcnXG4gICAgICA/IHR4bi5vYmplY3RTdG9yZShzdG9yZU5hbWUpXG4gICAgICA6IHN0b3JlTmFtZS5tYXAobmFtZSA9PiB0eG4ub2JqZWN0U3RvcmUobmFtZSkpO1xuICAgIGxldCByZXM7XG4gICAgY2Ioc3RvcmUsIHR4biwgKHJlc3VsdCkgPT4ge1xuICAgICAgcmVzID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgdHhuLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKHJlcyk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB0eG4ub25lcnJvciA9ICgpID0+IHJlamVjdCh0eG4uZXJyb3IpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBjbG9zZURhdGFiYXNlIChkYk5hbWUpIHtcbiAgLy8gY2xvc2UgYW55IG9wZW4gcmVxdWVzdHNcbiAgY29uc3QgcmVxID0gb3BlbkluZGV4ZWREQlJlcXVlc3RzW2RiTmFtZV07XG4gIGNvbnN0IGRiID0gcmVxICYmIHJlcS5yZXN1bHQ7XG4gIGlmIChkYikge1xuICAgIGRiLmNsb3NlKCk7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gb25DbG9zZUxpc3RlbmVyc1tkYk5hbWVdO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZGVsZXRlIG9wZW5JbmRleGVkREJSZXF1ZXN0c1tkYk5hbWVdO1xuICBkZWxldGUgZGF0YWJhc2VDYWNoZVtkYk5hbWVdO1xuICBkZWxldGUgb25DbG9zZUxpc3RlbmVyc1tkYk5hbWVdO1xufVxuXG5mdW5jdGlvbiBkZWxldGVEYXRhYmFzZSAoZGJOYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gY2xvc2UgYW55IG9wZW4gcmVxdWVzdHNcbiAgICBjbG9zZURhdGFiYXNlKGRiTmFtZSk7XG4gICAgY29uc3QgcmVxID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKGRiTmFtZSk7XG4gICAgaGFuZGxlT3Blbk9yRGVsZXRlUmVxKHJlc29sdmUsIHJlamVjdCwgcmVxKTtcbiAgfSlcbn1cblxuLy8gVGhlIFwiY2xvc2VcIiBldmVudCBvY2N1cnMgZHVyaW5nIGFuIGFibm9ybWFsIHNodXRkb3duLCBlLmcuIGEgdXNlciBjbGVhcmluZyB0aGVpciBicm93c2VyIGRhdGEuXG4vLyBIb3dldmVyLCBpdCBkb2Vzbid0IG9jY3VyIHdpdGggdGhlIG5vcm1hbCBcImNsb3NlXCIgZXZlbnQsIHNvIHdlIGhhbmRsZSB0aGF0IHNlcGFyYXRlbHkuXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvSW5kZXhlZERCLyNjbG9zZS1hLWRhdGFiYXNlLWNvbm5lY3Rpb25cbmZ1bmN0aW9uIGFkZE9uQ2xvc2VMaXN0ZW5lciAoZGJOYW1lLCBsaXN0ZW5lcikge1xuICBsZXQgbGlzdGVuZXJzID0gb25DbG9zZUxpc3RlbmVyc1tkYk5hbWVdO1xuICBpZiAoIWxpc3RlbmVycykge1xuICAgIGxpc3RlbmVycyA9IG9uQ2xvc2VMaXN0ZW5lcnNbZGJOYW1lXSA9IFtdO1xuICB9XG4gIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbn1cblxuLy8gbGlzdCBvZiBlbW90aWNvbnMgdGhhdCBkb24ndCBtYXRjaCBhIHNpbXBsZSBcXFcrIHJlZ2V4XG4vLyBleHRyYWN0ZWQgdXNpbmc6XG4vLyByZXF1aXJlKCdlbW9qaS1waWNrZXItZWxlbWVudC1kYXRhL2VuL2Vtb2ppYmFzZS9kYXRhLmpzb24nKS5tYXAoXyA9PiBfLmVtb3RpY29uKS5maWx0ZXIoQm9vbGVhbikuZmlsdGVyKF8gPT4gIS9eXFxXKyQvLnRlc3QoXykpXG5jb25zdCBpcnJlZ3VsYXJFbW90aWNvbnMgPSBuZXcgU2V0KFtcbiAgJzpEJywgJ1hEJywgXCI6J0RcIiwgJ086KScsXG4gICc6WCcsICc6UCcsICc7UCcsICdYUCcsXG4gICc6TCcsICc6WicsICc6aicsICc4RCcsXG4gICdYTycsICc4KScsICc6QicsICc6TycsXG4gICc6UycsIFwiOidvXCIsICdEeCcsICdYKCcsXG4gICdEOicsICc6QycsICc+MCknLCAnOjMnLFxuICAnPC8zJywgJzwzJywgJ1xcXFxNLycsICc6RScsXG4gICc4Iydcbl0pO1xuXG5mdW5jdGlvbiBleHRyYWN0VG9rZW5zIChzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC5zcGxpdCgvW1xcc19dKy8pXG4gICAgLm1hcCh3b3JkID0+IHtcbiAgICAgIGlmICghd29yZC5tYXRjaCgvXFx3LykgfHwgaXJyZWd1bGFyRW1vdGljb25zLmhhcyh3b3JkKSkge1xuICAgICAgICAvLyBmb3IgcHVyZSBlbW90aWNvbnMgbGlrZSA6KSBvciA6LSksIGp1c3QgbGVhdmUgdGhlbSBhcy1pc1xuICAgICAgICByZXR1cm4gd29yZC50b0xvd2VyQ2FzZSgpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3b3JkXG4gICAgICAgIC5yZXBsYWNlKC9bKSg6LF0vZywgJycpXG4gICAgICAgIC5yZXBsYWNlKC9cdTIwMTkvZywgXCInXCIpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgfSkuZmlsdGVyKEJvb2xlYW4pXG59XG5cbmNvbnN0IE1JTl9TRUFSQ0hfVEVYVF9MRU5HVEggPSAyO1xuXG4vLyBUaGlzIGlzIGFuIGV4dHJhIHN0ZXAgaW4gYWRkaXRpb24gdG8gZXh0cmFjdFRva2VucygpLiBUaGUgZGlmZmVyZW5jZSBoZXJlIGlzIHRoYXQgd2UgZXhwZWN0XG4vLyB0aGUgaW5wdXQgdG8gaGF2ZSBhbHJlYWR5IGJlZW4gcnVuIHRocm91Z2ggZXh0cmFjdFRva2VucygpLiBUaGlzIGlzIHVzZWZ1bCBmb3IgY2FzZXMgbGlrZVxuLy8gZW1vdGljb25zLCB3aGVyZSB3ZSBkb24ndCB3YW50IHRvIGRvIGFueSB0b2tlbml6YXRpb24gKGJlY2F1c2UgaXQgbWFrZXMgbm8gc2Vuc2UgdG8gc3BsaXQgdXBcbi8vIFwiPjopXCIgYnkgdGhlIGNvbG9uKSBidXQgd2UgZG8gd2FudCB0byBsb3dlcmNhc2UgaXQgdG8gaGF2ZSBjb25zaXN0ZW50IHNlYXJjaCByZXN1bHRzLCBzbyB0aGF0XG4vLyB0aGUgdXNlciBjYW4gdHlwZSAnOlAnIG9yICc6cCcgYW5kIHN0aWxsIGdldCB0aGUgc2FtZSByZXN1bHQuXG5mdW5jdGlvbiBub3JtYWxpemVUb2tlbnMgKHN0cikge1xuICByZXR1cm4gc3RyXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5tYXAoXyA9PiBfLnRvTG93ZXJDYXNlKCkpXG4gICAgLmZpbHRlcihfID0+IF8ubGVuZ3RoID49IE1JTl9TRUFSQ0hfVEVYVF9MRU5HVEgpXG59XG5cbi8vIFRyYW5zZm9ybSBlbW9qaSBkYXRhIGZvciBzdG9yYWdlIGluIElEQlxuZnVuY3Rpb24gdHJhbnNmb3JtRW1vamlEYXRhIChlbW9qaURhdGEpIHtcbiAgY29uc3QgcmVzID0gZW1vamlEYXRhLm1hcCgoeyBhbm5vdGF0aW9uLCBlbW90aWNvbiwgZ3JvdXAsIG9yZGVyLCBzaG9ydGNvZGVzLCBza2lucywgdGFncywgZW1vamksIHZlcnNpb24gfSkgPT4ge1xuICAgIGNvbnN0IHRva2VucyA9IFsuLi5uZXcgU2V0KFxuICAgICAgbm9ybWFsaXplVG9rZW5zKFtcbiAgICAgICAgLi4uKHNob3J0Y29kZXMgfHwgW10pLm1hcChleHRyYWN0VG9rZW5zKS5mbGF0KCksXG4gICAgICAgIC4uLih0YWdzIHx8IFtdKS5tYXAoZXh0cmFjdFRva2VucykuZmxhdCgpLFxuICAgICAgICAuLi5leHRyYWN0VG9rZW5zKGFubm90YXRpb24pLFxuICAgICAgICBlbW90aWNvblxuICAgICAgXSlcbiAgICApXS5zb3J0KCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgYW5ub3RhdGlvbixcbiAgICAgIGdyb3VwLFxuICAgICAgb3JkZXIsXG4gICAgICB0YWdzLFxuICAgICAgdG9rZW5zLFxuICAgICAgdW5pY29kZTogZW1vamksXG4gICAgICB2ZXJzaW9uXG4gICAgfTtcbiAgICBpZiAoZW1vdGljb24pIHtcbiAgICAgIHJlcy5lbW90aWNvbiA9IGVtb3RpY29uO1xuICAgIH1cbiAgICBpZiAoc2hvcnRjb2Rlcykge1xuICAgICAgcmVzLnNob3J0Y29kZXMgPSBzaG9ydGNvZGVzO1xuICAgIH1cbiAgICBpZiAoc2tpbnMpIHtcbiAgICAgIHJlcy5za2luVG9uZXMgPSBbXTtcbiAgICAgIHJlcy5za2luVW5pY29kZXMgPSBbXTtcbiAgICAgIHJlcy5za2luVmVyc2lvbnMgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgeyB0b25lLCBlbW9qaSwgdmVyc2lvbiB9IG9mIHNraW5zKSB7XG4gICAgICAgIHJlcy5za2luVG9uZXMucHVzaCh0b25lKTtcbiAgICAgICAgcmVzLnNraW5Vbmljb2Rlcy5wdXNoKGVtb2ppKTtcbiAgICAgICAgcmVzLnNraW5WZXJzaW9ucy5wdXNoKHZlcnNpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH0pO1xuICByZXR1cm4gcmVzXG59XG5cbi8vIGhlbHBlciBmdW5jdGlvbnMgdGhhdCBoZWxwIGNvbXByZXNzIHRoZSBjb2RlIGJldHRlclxuXG5mdW5jdGlvbiBjYWxsU3RvcmUgKHN0b3JlLCBtZXRob2QsIGtleSwgY2IpIHtcbiAgc3RvcmVbbWV0aG9kXShrZXkpLm9uc3VjY2VzcyA9IGUgPT4gKGNiICYmIGNiKGUudGFyZ2V0LnJlc3VsdCkpO1xufVxuXG5mdW5jdGlvbiBnZXRJREIgKHN0b3JlLCBrZXksIGNiKSB7XG4gIGNhbGxTdG9yZShzdG9yZSwgJ2dldCcsIGtleSwgY2IpO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxJREIgKHN0b3JlLCBrZXksIGNiKSB7XG4gIGNhbGxTdG9yZShzdG9yZSwgJ2dldEFsbCcsIGtleSwgY2IpO1xufVxuXG5mdW5jdGlvbiBjb21taXQgKHR4bikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHhuLmNvbW1pdCkge1xuICAgIHR4bi5jb21taXQoKTtcbiAgfVxufVxuXG4vLyBsaWtlIGxvZGFzaCdzIG1pbkJ5XG5mdW5jdGlvbiBtaW5CeSAoYXJyYXksIGZ1bmMpIHtcbiAgbGV0IG1pbkl0ZW0gPSBhcnJheVswXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBhcnJheVtpXTtcbiAgICBpZiAoZnVuYyhtaW5JdGVtKSA+IGZ1bmMoaXRlbSkpIHtcbiAgICAgIG1pbkl0ZW0gPSBpdGVtO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWluSXRlbVxufVxuXG4vLyByZXR1cm4gYW4gYXJyYXkgb2YgcmVzdWx0cyByZXByZXNlbnRpbmcgYWxsIGl0ZW1zIHRoYXQgYXJlIGZvdW5kIGluIGVhY2ggb25lIG9mIHRoZSBhcnJheXNcbi8vXG5cbmZ1bmN0aW9uIGZpbmRDb21tb25NZW1iZXJzIChhcnJheXMsIHVuaXFCeUZ1bmMpIHtcbiAgY29uc3Qgc2hvcnRlc3RBcnJheSA9IG1pbkJ5KGFycmF5cywgXyA9PiBfLmxlbmd0aCk7XG4gIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgZm9yIChjb25zdCBpdGVtIG9mIHNob3J0ZXN0QXJyYXkpIHtcbiAgICAvLyBpZiB0aGlzIGl0ZW0gaXMgaW5jbHVkZWQgaW4gZXZlcnkgYXJyYXkgaW4gdGhlIGludGVybWVkaWF0ZSByZXN1bHRzLCBhZGQgaXQgdG8gdGhlIGZpbmFsIHJlc3VsdHNcbiAgICBpZiAoIWFycmF5cy5zb21lKGFycmF5ID0+IGFycmF5LmZpbmRJbmRleChfID0+IHVuaXFCeUZ1bmMoXykgPT09IHVuaXFCeUZ1bmMoaXRlbSkpID09PSAtMSkpIHtcbiAgICAgIHJlc3VsdHMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHNcbn1cblxuYXN5bmMgZnVuY3Rpb24gaXNFbXB0eSAoZGIpIHtcbiAgcmV0dXJuICEoYXdhaXQgZ2V0KGRiLCBTVE9SRV9LRVlWQUxVRSwgS0VZX1VSTCkpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhc0RhdGEgKGRiLCB1cmwsIGVUYWcpIHtcbiAgY29uc3QgW29sZEVUYWcsIG9sZFVybF0gPSBhd2FpdCBQcm9taXNlLmFsbChbS0VZX0VUQUcsIEtFWV9VUkxdXG4gICAgLm1hcChrZXkgPT4gZ2V0KGRiLCBTVE9SRV9LRVlWQUxVRSwga2V5KSkpO1xuICByZXR1cm4gKG9sZEVUYWcgPT09IGVUYWcgJiYgb2xkVXJsID09PSB1cmwpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvRnVsbERhdGFiYXNlU2NhbkZvclNpbmdsZVJlc3VsdCAoZGIsIHByZWRpY2F0ZSkge1xuICAvLyBUaGlzIGJhdGNoaW5nIGFsZ29yaXRobSBpcyBqdXN0IGEgcGVyZiBpbXByb3ZlbWVudCBvdmVyIGEgYmFzaWNcbiAgLy8gY3Vyc29yLiBUaGUgQkFUQ0hfU0laRSBpcyBhbiBlc3RpbWF0ZSBvZiB3aGF0IHdvdWxkIGdpdmUgdGhlIGJlc3RcbiAgLy8gcGVyZiBmb3IgZG9pbmcgYSBmdWxsIERCIHNjYW4gKHdvcnN0IGNhc2UpLlxuICAvL1xuICAvLyBNaW5pLWJlbmNobWFyayBmb3IgZGV0ZXJtaW5pbmcgdGhlIGJlc3QgYmF0Y2ggc2l6ZTpcbiAgLy9cbiAgLy8gUEVSRj0xIHBucG0gYnVpbGQ6cm9sbHVwICYmIHBucG0gdGVzdDphZGhvY1xuICAvL1xuICAvLyAoYXN5bmMgKCkgPT4ge1xuICAvLyAgIHBlcmZvcm1hbmNlLm1hcmsoJ3N0YXJ0JylcbiAgLy8gICBhd2FpdCAkKCdlbW9qaS1waWNrZXInKS5kYXRhYmFzZS5nZXRFbW9qaUJ5U2hvcnRjb2RlKCdkb2Vzbm90ZXhpc3QnKVxuICAvLyAgIHBlcmZvcm1hbmNlLm1lYXN1cmUoJ3RvdGFsJywgJ3N0YXJ0JylcbiAgLy8gICBjb25zb2xlLmxvZyhwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKCd0b3RhbCcpLnNsaWNlKC0xKVswXS5kdXJhdGlvbilcbiAgLy8gfSkoKVxuICBjb25zdCBCQVRDSF9TSVpFID0gNTA7IC8vIFR5cGljYWxseSBhcm91bmQgMTUwbXMgZm9yIDZ4IHNsb3dkb3duIGluIENocm9tZSBmb3IgYWJvdmUgYmVuY2htYXJrXG4gIHJldHVybiBkYlByb21pc2UoZGIsIFNUT1JFX0VNT0pJLCBNT0RFX1JFQURPTkxZLCAoZW1vamlTdG9yZSwgdHhuLCBjYikgPT4ge1xuICAgIGxldCBsYXN0S2V5O1xuXG4gICAgY29uc3QgcHJvY2Vzc05leHRCYXRjaCA9ICgpID0+IHtcbiAgICAgIGVtb2ppU3RvcmUuZ2V0QWxsKGxhc3RLZXkgJiYgSURCS2V5UmFuZ2UubG93ZXJCb3VuZChsYXN0S2V5LCB0cnVlKSwgQkFUQ0hfU0laRSkub25zdWNjZXNzID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICBsYXN0S2V5ID0gcmVzdWx0LnVuaWNvZGU7XG4gICAgICAgICAgaWYgKHByZWRpY2F0ZShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2IocmVzdWx0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPCBCQVRDSF9TSVpFKSB7XG4gICAgICAgICAgcmV0dXJuIGNiKClcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzTmV4dEJhdGNoKCk7XG4gICAgICB9O1xuICAgIH07XG4gICAgcHJvY2Vzc05leHRCYXRjaCgpO1xuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkRGF0YSAoZGIsIGVtb2ppRGF0YSwgdXJsLCBlVGFnKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdHJhbnNmb3JtZWREYXRhID0gdHJhbnNmb3JtRW1vamlEYXRhKGVtb2ppRGF0YSk7XG4gICAgYXdhaXQgZGJQcm9taXNlKGRiLCBbU1RPUkVfRU1PSkksIFNUT1JFX0tFWVZBTFVFXSwgTU9ERV9SRUFEV1JJVEUsIChbZW1vamlTdG9yZSwgbWV0YVN0b3JlXSwgdHhuKSA9PiB7XG4gICAgICBsZXQgb2xkRVRhZztcbiAgICAgIGxldCBvbGRVcmw7XG4gICAgICBsZXQgdG9kbyA9IDA7XG5cbiAgICAgIGZ1bmN0aW9uIGNoZWNrRmV0Y2hlZCAoKSB7XG4gICAgICAgIGlmICgrK3RvZG8gPT09IDIpIHsgLy8gMiByZXF1ZXN0cyBtYWRlXG4gICAgICAgICAgb25GZXRjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25GZXRjaGVkICgpIHtcbiAgICAgICAgaWYgKG9sZEVUYWcgPT09IGVUYWcgJiYgb2xkVXJsID09PSB1cmwpIHtcbiAgICAgICAgICAvLyBjaGVjayBhZ2FpbiB3aXRoaW4gdGhlIHRyYW5zYWN0aW9uIHRvIGd1YXJkIGFnYWluc3QgY29uY3VycmVuY3ksIGUuZy4gbXVsdGlwbGUgYnJvd3NlciB0YWJzXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVsZXRlIG9sZCBkYXRhXG4gICAgICAgIGVtb2ppU3RvcmUuY2xlYXIoKTtcbiAgICAgICAgLy8gaW5zZXJ0IG5ldyBkYXRhXG4gICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiB0cmFuc2Zvcm1lZERhdGEpIHtcbiAgICAgICAgICBlbW9qaVN0b3JlLnB1dChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBtZXRhU3RvcmUucHV0KGVUYWcsIEtFWV9FVEFHKTtcbiAgICAgICAgbWV0YVN0b3JlLnB1dCh1cmwsIEtFWV9VUkwpO1xuICAgICAgICBjb21taXQodHhuKTtcbiAgICAgIH1cblxuICAgICAgZ2V0SURCKG1ldGFTdG9yZSwgS0VZX0VUQUcsIHJlc3VsdCA9PiB7XG4gICAgICAgIG9sZEVUYWcgPSByZXN1bHQ7XG4gICAgICAgIGNoZWNrRmV0Y2hlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGdldElEQihtZXRhU3RvcmUsIEtFWV9VUkwsIHJlc3VsdCA9PiB7XG4gICAgICAgIG9sZFVybCA9IHJlc3VsdDtcbiAgICAgICAgY2hlY2tGZXRjaGVkKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRFbW9qaUJ5R3JvdXAgKGRiLCBncm91cCkge1xuICByZXR1cm4gZGJQcm9taXNlKGRiLCBTVE9SRV9FTU9KSSwgTU9ERV9SRUFET05MWSwgKGVtb2ppU3RvcmUsIHR4biwgY2IpID0+IHtcbiAgICBjb25zdCByYW5nZSA9IElEQktleVJhbmdlLmJvdW5kKFtncm91cCwgMF0sIFtncm91cCArIDEsIDBdLCBmYWxzZSwgdHJ1ZSk7XG4gICAgZ2V0QWxsSURCKGVtb2ppU3RvcmUuaW5kZXgoSU5ERVhfR1JPVVBfQU5EX09SREVSKSwgcmFuZ2UsIGNiKTtcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlCeVNlYXJjaFF1ZXJ5IChkYiwgcXVlcnkpIHtcbiAgY29uc3QgdG9rZW5zID0gbm9ybWFsaXplVG9rZW5zKGV4dHJhY3RUb2tlbnMocXVlcnkpKTtcblxuICBpZiAoIXRva2Vucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJldHVybiBkYlByb21pc2UoZGIsIFNUT1JFX0VNT0pJLCBNT0RFX1JFQURPTkxZLCAoZW1vamlTdG9yZSwgdHhuLCBjYikgPT4ge1xuICAgIC8vIGdldCBhbGwgcmVzdWx0cyB0aGF0IGNvbnRhaW4gYWxsIHRva2VucyAoaS5lLiBhbiBBTkQgcXVlcnkpXG4gICAgY29uc3QgaW50ZXJtZWRpYXRlUmVzdWx0cyA9IFtdO1xuXG4gICAgY29uc3QgY2hlY2tEb25lID0gKCkgPT4ge1xuICAgICAgaWYgKGludGVybWVkaWF0ZVJlc3VsdHMubGVuZ3RoID09PSB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIG9uRG9uZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvbkRvbmUgPSAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHRzID0gZmluZENvbW1vbk1lbWJlcnMoaW50ZXJtZWRpYXRlUmVzdWx0cywgXyA9PiBfLnVuaWNvZGUpO1xuICAgICAgY2IocmVzdWx0cy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIDwgYi5vcmRlciA/IC0xIDogMSkpO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBjb25zdCByYW5nZSA9IGkgPT09IHRva2Vucy5sZW5ndGggLSAxXG4gICAgICAgID8gSURCS2V5UmFuZ2UuYm91bmQodG9rZW4sIHRva2VuICsgJ1xcdWZmZmYnLCBmYWxzZSwgdHJ1ZSkgLy8gdHJlYXQgbGFzdCB0b2tlbiBhcyBhIHByZWZpeCBzZWFyY2hcbiAgICAgICAgOiBJREJLZXlSYW5nZS5vbmx5KHRva2VuKTsgLy8gdHJlYXQgYWxsIG90aGVyIHRva2VucyBhcyBhbiBleGFjdCBtYXRjaFxuICAgICAgZ2V0QWxsSURCKGVtb2ppU3RvcmUuaW5kZXgoSU5ERVhfVE9LRU5TKSwgcmFuZ2UsIHJlc3VsdCA9PiB7XG4gICAgICAgIGludGVybWVkaWF0ZVJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSlcbn1cblxuLy8gVGhpcyBjb3VsZCBoYXZlIGJlZW4gaW1wbGVtZW50ZWQgYXMgYW4gSURCIGluZGV4IG9uIHNob3J0Y29kZXMsIGJ1dCBpdCBzZWVtZWQgd2FzdGVmdWwgdG8gZG8gdGhhdFxuLy8gd2hlbiB3ZSBjYW4gYWxyZWFkeSBxdWVyeSBieSB0b2tlbnMgYW5kIHRoaXMgd2lsbCBnaXZlIHVzIHdoYXQgd2UncmUgbG9va2luZyBmb3IgOTkuOSUgb2YgdGhlIHRpbWVcbmFzeW5jIGZ1bmN0aW9uIGdldEVtb2ppQnlTaG9ydGNvZGUgKGRiLCBzaG9ydGNvZGUpIHtcbiAgY29uc3QgZW1vamlzID0gYXdhaXQgZ2V0RW1vamlCeVNlYXJjaFF1ZXJ5KGRiLCBzaG9ydGNvZGUpO1xuXG4gIC8vIEluIHZlcnkgcmFyZSBjYXNlcyAoZS5nLiB0aGUgc2hvcnRjb2RlIFwidlwiIGFzIGluIFwidiBmb3IgdmljdG9yeVwiKSwgd2UgY2Fubm90IHNlYXJjaCBiZWNhdXNlXG4gIC8vIHRoZXJlIGFyZSBubyB1c2FibGUgdG9rZW5zICh0b28gc2hvcnQgaW4gdGhpcyBjYXNlKS4gSW4gdGhhdCBjYXNlLCB3ZSBoYXZlIHRvIGRvIGFuIGluZWZmaWNpZW50XG4gIC8vIGZ1bGwtZGF0YWJhc2Ugc2Nhbiwgd2hpY2ggSSBiZWxpZXZlIGlzIGFuIGFjY2VwdGFibGUgdHJhZGVvZmYgZm9yIG5vdCBoYXZpbmcgdG8gaGF2ZSBhbiBleHRyYVxuICAvLyBpbmRleCBvbiBzaG9ydGNvZGVzLlxuXG4gIGlmICghZW1vamlzLmxlbmd0aCkge1xuICAgIGNvbnN0IHByZWRpY2F0ZSA9IF8gPT4gKChfLnNob3J0Y29kZXMgfHwgW10pLmluY2x1ZGVzKHNob3J0Y29kZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgcmV0dXJuIChhd2FpdCBkb0Z1bGxEYXRhYmFzZVNjYW5Gb3JTaW5nbGVSZXN1bHQoZGIsIHByZWRpY2F0ZSkpIHx8IG51bGxcbiAgfVxuXG4gIHJldHVybiBlbW9qaXMuZmlsdGVyKF8gPT4ge1xuICAgIGNvbnN0IGxvd2VyU2hvcnRjb2RlcyA9IChfLnNob3J0Y29kZXMgfHwgW10pLm1hcChfID0+IF8udG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIGxvd2VyU2hvcnRjb2Rlcy5pbmNsdWRlcyhzaG9ydGNvZGUudG9Mb3dlckNhc2UoKSlcbiAgfSlbMF0gfHwgbnVsbFxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRFbW9qaUJ5VW5pY29kZSAoZGIsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGRiUHJvbWlzZShkYiwgU1RPUkVfRU1PSkksIE1PREVfUkVBRE9OTFksIChlbW9qaVN0b3JlLCB0eG4sIGNiKSA9PiAoXG4gICAgZ2V0SURCKGVtb2ppU3RvcmUsIHVuaWNvZGUsIHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBjYihyZXN1bHQpXG4gICAgICB9XG4gICAgICBnZXRJREIoZW1vamlTdG9yZS5pbmRleChJTkRFWF9TS0lOX1VOSUNPREUpLCB1bmljb2RlLCByZXN1bHQgPT4gY2IocmVzdWx0IHx8IG51bGwpKTtcbiAgICB9KVxuICApKVxufVxuXG5mdW5jdGlvbiBnZXQgKGRiLCBzdG9yZU5hbWUsIGtleSkge1xuICByZXR1cm4gZGJQcm9taXNlKGRiLCBzdG9yZU5hbWUsIE1PREVfUkVBRE9OTFksIChzdG9yZSwgdHhuLCBjYikgPT4gKFxuICAgIGdldElEQihzdG9yZSwga2V5LCBjYilcbiAgKSlcbn1cblxuZnVuY3Rpb24gc2V0IChkYiwgc3RvcmVOYW1lLCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkYlByb21pc2UoZGIsIHN0b3JlTmFtZSwgTU9ERV9SRUFEV1JJVEUsIChzdG9yZSwgdHhuKSA9PiB7XG4gICAgc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuICAgIGNvbW1pdCh0eG4pO1xuICB9KVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRGYXZvcml0ZUVtb2ppQ291bnQgKGRiLCB1bmljb2RlKSB7XG4gIHJldHVybiBkYlByb21pc2UoZGIsIFNUT1JFX0ZBVk9SSVRFUywgTU9ERV9SRUFEV1JJVEUsIChzdG9yZSwgdHhuKSA9PiAoXG4gICAgZ2V0SURCKHN0b3JlLCB1bmljb2RlLCByZXN1bHQgPT4ge1xuICAgICAgc3RvcmUucHV0KChyZXN1bHQgfHwgMCkgKyAxLCB1bmljb2RlKTtcbiAgICAgIGNvbW1pdCh0eG4pO1xuICAgIH0pXG4gICkpXG59XG5cbmZ1bmN0aW9uIGdldFRvcEZhdm9yaXRlRW1vamkgKGRiLCBjdXN0b21FbW9qaUluZGV4LCBsaW1pdCkge1xuICBpZiAobGltaXQgPT09IDApIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICByZXR1cm4gZGJQcm9taXNlKGRiLCBbU1RPUkVfRkFWT1JJVEVTLCBTVE9SRV9FTU9KSV0sIE1PREVfUkVBRE9OTFksIChbZmF2b3JpdGVzU3RvcmUsIGVtb2ppU3RvcmVdLCB0eG4sIGNiKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGZhdm9yaXRlc1N0b3JlLmluZGV4KElOREVYX0NPVU5UKS5vcGVuQ3Vyc29yKHVuZGVmaW5lZCwgJ3ByZXYnKS5vbnN1Y2Nlc3MgPSBlID0+IHtcbiAgICAgIGNvbnN0IGN1cnNvciA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgIGlmICghY3Vyc29yKSB7IC8vIG5vIG1vcmUgcmVzdWx0c1xuICAgICAgICByZXR1cm4gY2IocmVzdWx0cylcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWRkUmVzdWx0IChyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gbGltaXQpIHtcbiAgICAgICAgICByZXR1cm4gY2IocmVzdWx0cykgLy8gZG9uZSwgcmVhY2hlZCB0aGUgbGltaXRcbiAgICAgICAgfVxuICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdW5pY29kZU9yTmFtZSA9IGN1cnNvci5wcmltYXJ5S2V5O1xuICAgICAgY29uc3QgY3VzdG9tID0gY3VzdG9tRW1vamlJbmRleC5ieU5hbWUodW5pY29kZU9yTmFtZSk7XG4gICAgICBpZiAoY3VzdG9tKSB7XG4gICAgICAgIHJldHVybiBhZGRSZXN1bHQoY3VzdG9tKVxuICAgICAgfVxuICAgICAgLy8gVGhpcyBjb3VsZCBiZSBkb25lIGluIHBhcmFsbGVsIChpLmUuIG1ha2UgdGhlIGN1cnNvciBhbmQgdGhlIGdldCgpcyBwYXJhbGxlbGl6ZWQpLFxuICAgICAgLy8gYnV0IG15IHRlc3Rpbmcgc3VnZ2VzdHMgaXQncyBub3QgYWN0dWFsbHkgZmFzdGVyLlxuICAgICAgZ2V0SURCKGVtb2ppU3RvcmUsIHVuaWNvZGVPck5hbWUsIGVtb2ppID0+IHtcbiAgICAgICAgaWYgKGVtb2ppKSB7XG4gICAgICAgICAgcmV0dXJuIGFkZFJlc3VsdChlbW9qaSlcbiAgICAgICAgfVxuICAgICAgICAvLyBlbW9qaSBub3QgZm91bmQgc29tZWhvdywgaWdub3JlIChtYXkgaGFwcGVuIGlmIGN1c3RvbSBlbW9qaSBjaGFuZ2UpXG4gICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSlcbn1cblxuLy8gdHJpZSBkYXRhIHN0cnVjdHVyZSBmb3IgcHJlZml4IHNlYXJjaGVzXG4vLyBsb29zZWx5IGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xhbmxhd3Nvbi9zdWJzdHJpbmctdHJpZVxuXG5jb25zdCBDT0RBX01BUktFUiA9ICcnOyAvLyBtYXJrcyB0aGUgZW5kIG9mIHRoZSBzdHJpbmdcblxuZnVuY3Rpb24gdHJpZSAoYXJyLCBpdGVtVG9Ub2tlbnMpIHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgY29uc3QgdG9rZW5zID0gaXRlbVRvVG9rZW5zKGl0ZW0pO1xuICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XG4gICAgICBsZXQgY3VycmVudE1hcCA9IG1hcDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IHRva2VuLmNoYXJBdChpKTtcbiAgICAgICAgbGV0IG5leHRNYXAgPSBjdXJyZW50TWFwLmdldChjaGFyKTtcbiAgICAgICAgaWYgKCFuZXh0TWFwKSB7XG4gICAgICAgICAgbmV4dE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICBjdXJyZW50TWFwLnNldChjaGFyLCBuZXh0TWFwKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TWFwID0gbmV4dE1hcDtcbiAgICAgIH1cbiAgICAgIGxldCB2YWx1ZXNBdENvZGEgPSBjdXJyZW50TWFwLmdldChDT0RBX01BUktFUik7XG4gICAgICBpZiAoIXZhbHVlc0F0Q29kYSkge1xuICAgICAgICB2YWx1ZXNBdENvZGEgPSBbXTtcbiAgICAgICAgY3VycmVudE1hcC5zZXQoQ09EQV9NQVJLRVIsIHZhbHVlc0F0Q29kYSk7XG4gICAgICB9XG4gICAgICB2YWx1ZXNBdENvZGEucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZWFyY2ggPSAocXVlcnksIGV4YWN0KSA9PiB7XG4gICAgbGV0IGN1cnJlbnRNYXAgPSBtYXA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hhciA9IHF1ZXJ5LmNoYXJBdChpKTtcbiAgICAgIGNvbnN0IG5leHRNYXAgPSBjdXJyZW50TWFwLmdldChjaGFyKTtcbiAgICAgIGlmIChuZXh0TWFwKSB7XG4gICAgICAgIGN1cnJlbnRNYXAgPSBuZXh0TWFwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV4YWN0KSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gY3VycmVudE1hcC5nZXQoQ09EQV9NQVJLRVIpO1xuICAgICAgcmV0dXJuIHJlc3VsdHMgfHwgW11cbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgLy8gdHJhdmVyc2VcbiAgICBjb25zdCBxdWV1ZSA9IFtjdXJyZW50TWFwXTtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjdXJyZW50TWFwID0gcXVldWUuc2hpZnQoKTtcbiAgICAgIGNvbnN0IGVudHJpZXNTb3J0ZWRCeUtleSA9IFsuLi5jdXJyZW50TWFwLmVudHJpZXMoKV0uc29ydCgoYSwgYikgPT4gYVswXSA8IGJbMF0gPyAtMSA6IDEpO1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZW50cmllc1NvcnRlZEJ5S2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09IENPREFfTUFSS0VSKSB7IC8vIENPREFfTUFSS0VSIGFsd2F5cyBjb21lcyBmaXJzdDsgaXQncyB0aGUgZW1wdHkgc3RyaW5nXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKC4uLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWV1ZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9O1xuXG4gIHJldHVybiBzZWFyY2hcbn1cblxuY29uc3QgcmVxdWlyZWRLZXlzJDEgPSBbXG4gICduYW1lJyxcbiAgJ3VybCdcbl07XG5cbmZ1bmN0aW9uIGFzc2VydEN1c3RvbUVtb2ppcyAoY3VzdG9tRW1vamlzKSB7XG4gIGNvbnN0IGlzQXJyYXkgPSBjdXN0b21FbW9qaXMgJiYgQXJyYXkuaXNBcnJheShjdXN0b21FbW9qaXMpO1xuICBjb25zdCBmaXJzdEl0ZW1Jc0ZhdWx0eSA9IGlzQXJyYXkgJiZcbiAgICBjdXN0b21FbW9qaXMubGVuZ3RoICYmXG4gICAgKCFjdXN0b21FbW9qaXNbMF0gfHwgcmVxdWlyZWRLZXlzJDEuc29tZShrZXkgPT4gIShrZXkgaW4gY3VzdG9tRW1vamlzWzBdKSkpO1xuICBpZiAoIWlzQXJyYXkgfHwgZmlyc3RJdGVtSXNGYXVsdHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBlbW9qaXMgYXJlIGluIHRoZSB3cm9uZyBmb3JtYXQnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGN1c3RvbUVtb2ppSW5kZXggKGN1c3RvbUVtb2ppcykge1xuICBhc3NlcnRDdXN0b21FbW9qaXMoY3VzdG9tRW1vamlzKTtcblxuICBjb25zdCBzb3J0QnlOYW1lID0gKGEsIGIpID0+IGEubmFtZS50b0xvd2VyQ2FzZSgpIDwgYi5uYW1lLnRvTG93ZXJDYXNlKCkgPyAtMSA6IDE7XG5cbiAgLy9cbiAgLy8gYWxsKClcbiAgLy9cbiAgY29uc3QgYWxsID0gY3VzdG9tRW1vamlzLnNvcnQoc29ydEJ5TmFtZSk7XG5cbiAgLy9cbiAgLy8gc2VhcmNoKClcbiAgLy9cbiAgY29uc3QgZW1vamlUb1Rva2VucyA9IGVtb2ppID0+IHtcbiAgICBjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG4gICAgaWYgKGVtb2ppLnNob3J0Y29kZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgc2hvcnRjb2RlIG9mIGVtb2ppLnNob3J0Y29kZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiBleHRyYWN0VG9rZW5zKHNob3J0Y29kZSkpIHtcbiAgICAgICAgICBzZXQuYWRkKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2V0XG4gIH07XG4gIGNvbnN0IHNlYXJjaFRyaWUgPSB0cmllKGN1c3RvbUVtb2ppcywgZW1vamlUb1Rva2Vucyk7XG4gIGNvbnN0IHNlYXJjaEJ5RXhhY3RNYXRjaCA9IF8gPT4gc2VhcmNoVHJpZShfLCB0cnVlKTtcbiAgY29uc3Qgc2VhcmNoQnlQcmVmaXggPSBfID0+IHNlYXJjaFRyaWUoXywgZmFsc2UpO1xuXG4gIC8vIFNlYXJjaCBieSBxdWVyeSBmb3IgY3VzdG9tIGVtb2ppLiBTaW1pbGFyIHRvIGhvdyB3ZSBkbyB0aGlzIGluIElEQiwgdGhlIGxhc3QgdG9rZW5cbiAgLy8gaXMgdHJlYXRlZCBhcyBhIHByZWZpeCBzZWFyY2gsIGJ1dCBldmVyeSBvdGhlciBvbmUgaXMgdHJlYXRlZCBhcyBhbiBleGFjdCBtYXRjaC5cbiAgLy8gVGhlbiB3ZSBBTkQgdGhlIHJlc3VsdHMgdG9nZXRoZXJcbiAgY29uc3Qgc2VhcmNoID0gcXVlcnkgPT4ge1xuICAgIGNvbnN0IHRva2VucyA9IGV4dHJhY3RUb2tlbnMocXVlcnkpO1xuICAgIGNvbnN0IGludGVybWVkaWF0ZVJlc3VsdHMgPSB0b2tlbnMubWFwKCh0b2tlbiwgaSkgPT4gKFxuICAgICAgKGkgPCB0b2tlbnMubGVuZ3RoIC0gMSA/IHNlYXJjaEJ5RXhhY3RNYXRjaCA6IHNlYXJjaEJ5UHJlZml4KSh0b2tlbilcbiAgICApKTtcbiAgICByZXR1cm4gZmluZENvbW1vbk1lbWJlcnMoaW50ZXJtZWRpYXRlUmVzdWx0cywgXyA9PiBfLm5hbWUpLnNvcnQoc29ydEJ5TmFtZSlcbiAgfTtcblxuICAvL1xuICAvLyBieVNob3J0Y29kZSwgYnlOYW1lXG4gIC8vXG4gIGNvbnN0IHNob3J0Y29kZVRvRW1vamkgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG5hbWVUb0Vtb2ppID0gbmV3IE1hcCgpO1xuICBmb3IgKGNvbnN0IGN1c3RvbUVtb2ppIG9mIGN1c3RvbUVtb2ppcykge1xuICAgIG5hbWVUb0Vtb2ppLnNldChjdXN0b21FbW9qaS5uYW1lLnRvTG93ZXJDYXNlKCksIGN1c3RvbUVtb2ppKTtcbiAgICBmb3IgKGNvbnN0IHNob3J0Y29kZSBvZiAoY3VzdG9tRW1vamkuc2hvcnRjb2RlcyB8fCBbXSkpIHtcbiAgICAgIHNob3J0Y29kZVRvRW1vamkuc2V0KHNob3J0Y29kZS50b0xvd2VyQ2FzZSgpLCBjdXN0b21FbW9qaSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYnlTaG9ydGNvZGUgPSBzaG9ydGNvZGUgPT4gc2hvcnRjb2RlVG9FbW9qaS5nZXQoc2hvcnRjb2RlLnRvTG93ZXJDYXNlKCkpO1xuICBjb25zdCBieU5hbWUgPSBuYW1lID0+IG5hbWVUb0Vtb2ppLmdldChuYW1lLnRvTG93ZXJDYXNlKCkpO1xuXG4gIHJldHVybiB7XG4gICAgYWxsLFxuICAgIHNlYXJjaCxcbiAgICBieVNob3J0Y29kZSxcbiAgICBieU5hbWVcbiAgfVxufVxuXG5jb25zdCBpc0ZpcmVmb3hDb250ZW50U2NyaXB0ID0gdHlwZW9mIHdyYXBwZWRKU09iamVjdCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIHJlbW92ZSBzb21lIGludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbHMsIGkuZS4gdGhlIFwidG9rZW5zXCIgYXJyYXkgb24gdGhlIGVtb2ppIG9iamVjdFxuLy8gZXNzZW50aWFsbHksIGNvbnZlcnQgdGhlIGVtb2ppIGZyb20gdGhlIHZlcnNpb24gc3RvcmVkIGluIElEQiB0byB0aGUgdmVyc2lvbiB1c2VkIGluLW1lbW9yeVxuZnVuY3Rpb24gY2xlYW5FbW9qaSAoZW1vamkpIHtcbiAgaWYgKCFlbW9qaSkge1xuICAgIHJldHVybiBlbW9qaVxuICB9XG4gIC8vIGlmIGluc2lkZSBhIEZpcmVmb3ggY29udGVudCBzY3JpcHQsIG5lZWQgdG8gY2xvbmUgdGhlIGVtb2ppIG9iamVjdCB0byBwcmV2ZW50IEZpcmVmb3ggZnJvbSBjb21wbGFpbmluZyBhYm91dFxuICAvLyBjcm9zcy1vcmlnaW4gb2JqZWN0LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xhbmxhd3Nvbi9lbW9qaS1waWNrZXItZWxlbWVudC9pc3N1ZXMvMzU2XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNGaXJlZm94Q29udGVudFNjcmlwdCkge1xuICAgIGVtb2ppID0gc3RydWN0dXJlZENsb25lKGVtb2ppKTtcbiAgfVxuICBkZWxldGUgZW1vamkudG9rZW5zO1xuICBpZiAoZW1vamkuc2tpblRvbmVzKSB7XG4gICAgY29uc3QgbGVuID0gZW1vamkuc2tpblRvbmVzLmxlbmd0aDtcbiAgICBlbW9qaS5za2lucyA9IEFycmF5KGxlbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgZW1vamkuc2tpbnNbaV0gPSB7XG4gICAgICAgIHRvbmU6IGVtb2ppLnNraW5Ub25lc1tpXSxcbiAgICAgICAgdW5pY29kZTogZW1vamkuc2tpblVuaWNvZGVzW2ldLFxuICAgICAgICB2ZXJzaW9uOiBlbW9qaS5za2luVmVyc2lvbnNbaV1cbiAgICAgIH07XG4gICAgfVxuICAgIGRlbGV0ZSBlbW9qaS5za2luVG9uZXM7XG4gICAgZGVsZXRlIGVtb2ppLnNraW5Vbmljb2RlcztcbiAgICBkZWxldGUgZW1vamkuc2tpblZlcnNpb25zO1xuICB9XG4gIHJldHVybiBlbW9qaVxufVxuXG5mdW5jdGlvbiB3YXJuRVRhZyAoZVRhZykge1xuICBpZiAoIWVUYWcpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Vtb2ppLXBpY2tlci1lbGVtZW50IGlzIG1vcmUgZWZmaWNpZW50IGlmIHRoZSBkYXRhU291cmNlIHNlcnZlciBleHBvc2VzIGFuIEVUYWcgaGVhZGVyLicpO1xuICB9XG59XG5cbmNvbnN0IHJlcXVpcmVkS2V5cyA9IFtcbiAgJ2Fubm90YXRpb24nLFxuICAnZW1vamknLFxuICAnZ3JvdXAnLFxuICAnb3JkZXInLFxuICAndmVyc2lvbidcbl07XG5cbmZ1bmN0aW9uIGFzc2VydEVtb2ppRGF0YSAoZW1vamlEYXRhKSB7XG4gIGlmICghZW1vamlEYXRhIHx8XG4gICAgIUFycmF5LmlzQXJyYXkoZW1vamlEYXRhKSB8fFxuICAgICFlbW9qaURhdGFbMF0gfHxcbiAgICAodHlwZW9mIGVtb2ppRGF0YVswXSAhPT0gJ29iamVjdCcpIHx8XG4gICAgcmVxdWlyZWRLZXlzLnNvbWUoa2V5ID0+ICghKGtleSBpbiBlbW9qaURhdGFbMF0pKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vtb2ppIGRhdGEgaXMgaW4gdGhlIHdyb25nIGZvcm1hdCcpXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U3RhdHVzIChyZXNwb25zZSwgZGF0YVNvdXJjZSkge1xuICBpZiAoTWF0aC5mbG9vcihyZXNwb25zZS5zdGF0dXMgLyAxMDApICE9PSAyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2g6ICcgKyBkYXRhU291cmNlICsgJzogICcgKyByZXNwb25zZS5zdGF0dXMpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RVRhZyAoZGF0YVNvdXJjZSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFTb3VyY2UsIHsgbWV0aG9kOiAnSEVBRCcgfSk7XG4gIGFzc2VydFN0YXR1cyhyZXNwb25zZSwgZGF0YVNvdXJjZSk7XG4gIGNvbnN0IGVUYWcgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnZXRhZycpO1xuICB3YXJuRVRhZyhlVGFnKTtcbiAgcmV0dXJuIGVUYWdcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RVRhZ0FuZERhdGEgKGRhdGFTb3VyY2UpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhU291cmNlKTtcbiAgYXNzZXJ0U3RhdHVzKHJlc3BvbnNlLCBkYXRhU291cmNlKTtcbiAgY29uc3QgZVRhZyA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdldGFnJyk7XG4gIHdhcm5FVGFnKGVUYWcpO1xuICBjb25zdCBlbW9qaURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGFzc2VydEVtb2ppRGF0YShlbW9qaURhdGEpO1xuICByZXR1cm4gW2VUYWcsIGVtb2ppRGF0YV1cbn1cblxuLy8gVE9ETzogaW5jbHVkaW5nIHRoZXNlIGluIGJsb2ItdXRpbC50cyBjYXVzZXMgdHlwZWRvYyB0byBnZW5lcmF0ZSBkb2NzIGZvciB0aGVtLFxuLy8gZXZlbiB3aXRoIC0tZXhjbHVkZVByaXZhdGUgXHUwMEFGXFxfKFx1MzBDNClfL1x1MDBBRlxuLyoqIEBwcml2YXRlICovXG4vKipcbiAqIENvbnZlcnQgYW4gYEFycmF5QnVmZmVyYCB0byBhIGJpbmFyeSBzdHJpbmcuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIG15U3RyaW5nID0gYmxvYlV0aWwuYXJyYXlCdWZmZXJUb0JpbmFyeVN0cmluZyhhcnJheUJ1ZmYpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gYnVmZmVyIC0gYXJyYXkgYnVmZmVyXG4gKiBAcmV0dXJucyBiaW5hcnkgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGFycmF5QnVmZmVyVG9CaW5hcnlTdHJpbmcoYnVmZmVyKSB7XG4gICAgdmFyIGJpbmFyeSA9ICcnO1xuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgdmFyIGxlbmd0aCA9IGJ5dGVzLmJ5dGVMZW5ndGg7XG4gICAgdmFyIGkgPSAtMTtcbiAgICB3aGlsZSAoKytpIDwgbGVuZ3RoKSB7XG4gICAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGJpbmFyeTtcbn1cbi8qKlxuICogQ29udmVydCBhIGJpbmFyeSBzdHJpbmcgdG8gYW4gYEFycmF5QnVmZmVyYC5cbiAqXG4gKiBgYGBqc1xuICogdmFyIG15QnVmZmVyID0gYmxvYlV0aWwuYmluYXJ5U3RyaW5nVG9BcnJheUJ1ZmZlcihiaW5hcnlTdHJpbmcpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gYmluYXJ5IC0gYmluYXJ5IHN0cmluZ1xuICogQHJldHVybnMgYXJyYXkgYnVmZmVyXG4gKi9cbmZ1bmN0aW9uIGJpbmFyeVN0cmluZ1RvQXJyYXlCdWZmZXIoYmluYXJ5KSB7XG4gICAgdmFyIGxlbmd0aCA9IGJpbmFyeS5sZW5ndGg7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGgpO1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpO1xuICAgIHZhciBpID0gLTE7XG4gICAgd2hpbGUgKCsraSA8IGxlbmd0aCkge1xuICAgICAgICBhcnJbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cblxuLy8gZ2VuZXJhdGUgYSBjaGVja3N1bSBiYXNlZCBvbiB0aGUgc3RyaW5naWZpZWQgSlNPTlxuYXN5bmMgZnVuY3Rpb24ganNvbkNoZWNrc3VtIChvYmplY3QpIHtcbiAgY29uc3QgaW5TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xuICBsZXQgaW5CdWZmZXIgPSBiaW5hcnlTdHJpbmdUb0FycmF5QnVmZmVyKGluU3RyaW5nKTtcblxuICAvLyB0aGlzIGRvZXMgbm90IG5lZWQgdG8gYmUgY3J5cHRvZ3JhcGhpY2FsbHkgc2VjdXJlLCBTSEEtMSBpcyBmaW5lXG4gIGNvbnN0IG91dEJ1ZmZlciA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCdTSEEtMScsIGluQnVmZmVyKTtcbiAgY29uc3Qgb3V0QmluU3RyaW5nID0gYXJyYXlCdWZmZXJUb0JpbmFyeVN0cmluZyhvdXRCdWZmZXIpO1xuICBjb25zdCByZXMgPSBidG9hKG91dEJpblN0cmluZyk7XG4gIHJldHVybiByZXNcbn1cblxuYXN5bmMgZnVuY3Rpb24gZG9DaGVja0ZvclVwZGF0ZXMgKGRiLCBkYXRhU291cmNlKSB7XG4gIC8vIGp1c3QgZG8gYSBzaW1wbGUgSEVBRCByZXF1ZXN0IGZpcnN0IHRvIHNlZSBpZiB0aGUgZVRhZ3MgbWF0Y2hcbiAgbGV0IGVtb2ppRGF0YTtcbiAgbGV0IGVUYWcgPSBhd2FpdCBnZXRFVGFnKGRhdGFTb3VyY2UpO1xuICBpZiAoIWVUYWcpIHsgLy8gd29yayBhcm91bmQgbGFjayBvZiBFVGFnL0FjY2Vzcy1Db250cm9sLUV4cG9zZS1IZWFkZXJzXG4gICAgY29uc3QgZVRhZ0FuZERhdGEgPSBhd2FpdCBnZXRFVGFnQW5kRGF0YShkYXRhU291cmNlKTtcbiAgICBlVGFnID0gZVRhZ0FuZERhdGFbMF07XG4gICAgZW1vamlEYXRhID0gZVRhZ0FuZERhdGFbMV07XG4gICAgaWYgKCFlVGFnKSB7XG4gICAgICBlVGFnID0gYXdhaXQganNvbkNoZWNrc3VtKGVtb2ppRGF0YSk7XG4gICAgfVxuICB9XG4gIGlmIChhd2FpdCBoYXNEYXRhKGRiLCBkYXRhU291cmNlLCBlVGFnKSkgOyBlbHNlIHtcbiAgICBpZiAoIWVtb2ppRGF0YSkge1xuICAgICAgY29uc3QgZVRhZ0FuZERhdGEgPSBhd2FpdCBnZXRFVGFnQW5kRGF0YShkYXRhU291cmNlKTtcbiAgICAgIGVtb2ppRGF0YSA9IGVUYWdBbmREYXRhWzFdO1xuICAgIH1cbiAgICBhd2FpdCBsb2FkRGF0YShkYiwgZW1vamlEYXRhLCBkYXRhU291cmNlLCBlVGFnKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkRGF0YUZvckZpcnN0VGltZSAoZGIsIGRhdGFTb3VyY2UpIHtcbiAgbGV0IFtlVGFnLCBlbW9qaURhdGFdID0gYXdhaXQgZ2V0RVRhZ0FuZERhdGEoZGF0YVNvdXJjZSk7XG4gIGlmICghZVRhZykge1xuICAgIC8vIEhhbmRsZSBsYWNrIG9mIHN1cHBvcnQgZm9yIEVUYWcgb3IgQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnNcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0hlYWRlcnMvQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnMjQnJvd3Nlcl9jb21wYXRpYmlsaXR5XG4gICAgZVRhZyA9IGF3YWl0IGpzb25DaGVja3N1bShlbW9qaURhdGEpO1xuICB9XG5cbiAgYXdhaXQgbG9hZERhdGEoZGIsIGVtb2ppRGF0YSwgZGF0YVNvdXJjZSwgZVRhZyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcyAoZGIsIGRhdGFTb3VyY2UpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBkb0NoZWNrRm9yVXBkYXRlcyhkYiwgZGF0YVNvdXJjZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIENoZWNraW5nIGZvciB1cGRhdGVzIGlzIG5vdCBhIGNyaXRpY2FsIG9wZXJhdGlvbiwgYW5kIGl0IGNhbiBmYWlsIGlmIGUuZy4gdGhlIHBpY2tlciBpcyBxdWlja2x5IHJlbW92ZWQgYW5kXG4gICAgLy8gcmUtYWRkZWQgdG8gdGhlIERPTS4gSW4gdGhvc2UgY2FzZXMsIHdlIG1heSBnZXQgYW4gSW5kZXhlZERCIEludmFsaWRTdGF0ZUVycm9yIGJlY2F1c2Ugd2UgYXJlIGF0dGVtcHRpbmcgdG8gY2xvc2VcbiAgICAvLyB0aGUgZGF0YWJhc2UgY29ubmVjdGlvbiwgcG9zc2libHkgd2hpbGUgYW5vdGhlciByZXF1ZXN0IGlzIGluZmxpZ2h0LiBTbyB0aGVyZSdzIGVmZmVjdGl2ZWx5IG5vIHdheSB0byBwcmV2ZW50XG4gICAgLy8gSW52YWxpZFN0YXRlRXJyb3JzIHVubGVzcyB3ZSB3ZXJlIHRvIGNhcmVmdWxseSBzZXF1ZW5jZSBvdXIgSW5kZXhlZERCIG9wZXJhdGlvbnMuIE11Y2ggbW9yZSBzaW1wbHksIHdlIGNhbiBqdXN0XG4gICAgLy8gaWdub3JlIEluZGV4ZWREQiBJbnZhbGlkU3RhdGVFcnJvcnMgaGVyZSBhbmQgZ2l2ZSB1c2VycyBvbmUgbGVzcyB1c2VsZXNzIGVycm9yIG1lc3NhZ2UgaW4gdGhlaXIgY29uc29sZS5cbiAgICBpZiAoZXJyLm5hbWUgIT09ICdJbnZhbGlkU3RhdGVFcnJvcicpIHtcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBEYXRhYmFzZSB7XG4gIGNvbnN0cnVjdG9yICh7IGRhdGFTb3VyY2UgPSBERUZBVUxUX0RBVEFfU09VUkNFLCBsb2NhbGUgPSBERUZBVUxUX0xPQ0FMRSwgY3VzdG9tRW1vamkgPSBbXSB9ID0ge30pIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgIHRoaXMuX2RiTmFtZSA9IGBlbW9qaS1waWNrZXItZWxlbWVudC0ke3RoaXMubG9jYWxlfWA7XG4gICAgdGhpcy5fZGIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbGF6eVVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9jdXN0b20gPSBjdXN0b21FbW9qaUluZGV4KGN1c3RvbUVtb2ppKTtcblxuICAgIHRoaXMuX2NsZWFyID0gdGhpcy5fY2xlYXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9yZWFkeSA9IHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIGFzeW5jIF9pbml0ICgpIHtcbiAgICBjb25zdCBkYiA9IHRoaXMuX2RiID0gYXdhaXQgb3BlbkRhdGFiYXNlKHRoaXMuX2RiTmFtZSk7XG5cbiAgICBhZGRPbkNsb3NlTGlzdGVuZXIodGhpcy5fZGJOYW1lLCB0aGlzLl9jbGVhcik7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZTtcbiAgICBjb25zdCBlbXB0eSA9IGF3YWl0IGlzRW1wdHkoZGIpO1xuXG4gICAgaWYgKGVtcHR5KSB7XG4gICAgICBhd2FpdCBsb2FkRGF0YUZvckZpcnN0VGltZShkYiwgZGF0YVNvdXJjZSk7XG4gICAgfSBlbHNlIHsgLy8gb2ZmbGluZS1maXJzdCAtIGRvIGFuIHVwZGF0ZSBhc3luY2hyb25vdXNseVxuICAgICAgdGhpcy5fbGF6eVVwZGF0ZSA9IGNoZWNrRm9yVXBkYXRlcyhkYiwgZGF0YVNvdXJjZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVhZHkgKCkge1xuICAgIGNvbnN0IGNoZWNrUmVhZHkgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3JlYWR5KSB7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gdGhpcy5faW5pdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5XG4gICAgfTtcbiAgICBhd2FpdCBjaGVja1JlYWR5KCk7XG4gICAgLy8gVGhlcmUncyBhIHBvc3NpYmlsaXR5IG9mIGEgcmFjZSBjb25kaXRpb24gd2hlcmUgdGhlIGVsZW1lbnQgZ2V0cyBhZGRlZCwgcmVtb3ZlZCwgYW5kIHRoZW4gYWRkZWQgYWdhaW5cbiAgICAvLyB3aXRoIGEgcGFydGljdWxhciB0aW1pbmcsIHdoaWNoIHdvdWxkIHNldCB0aGUgX2RiIHRvIHVuZGVmaW5lZC5cbiAgICAvLyBXZSAqY291bGQqIGRvIGEgd2hpbGUgbG9vcCBoZXJlLCBidXQgdGhhdCBzZWVtcyBleGNlc3NpdmUgYW5kIGNvdWxkIGxlYWQgdG8gYW4gaW5maW5pdGUgbG9vcC5cbiAgICBpZiAoIXRoaXMuX2RiKSB7XG4gICAgICBhd2FpdCBjaGVja1JlYWR5KCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0RW1vamlCeUdyb3VwIChncm91cCkge1xuICAgIGFzc2VydE51bWJlcihncm91cCk7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgIHJldHVybiB1bmlxRW1vamkoYXdhaXQgZ2V0RW1vamlCeUdyb3VwKHRoaXMuX2RiLCBncm91cCkpLm1hcChjbGVhbkVtb2ppKVxuICB9XG5cbiAgYXN5bmMgZ2V0RW1vamlCeVNlYXJjaFF1ZXJ5IChxdWVyeSkge1xuICAgIGFzc2VydE5vbkVtcHR5U3RyaW5nKHF1ZXJ5KTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgY29uc3QgY3VzdG9tcyA9IHRoaXMuX2N1c3RvbS5zZWFyY2gocXVlcnkpO1xuICAgIGNvbnN0IG5hdGl2ZXMgPSB1bmlxRW1vamkoYXdhaXQgZ2V0RW1vamlCeVNlYXJjaFF1ZXJ5KHRoaXMuX2RiLCBxdWVyeSkpLm1hcChjbGVhbkVtb2ppKTtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uY3VzdG9tcyxcbiAgICAgIC4uLm5hdGl2ZXNcbiAgICBdXG4gIH1cblxuICBhc3luYyBnZXRFbW9qaUJ5U2hvcnRjb2RlIChzaG9ydGNvZGUpIHtcbiAgICBhc3NlcnROb25FbXB0eVN0cmluZyhzaG9ydGNvZGUpO1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICBjb25zdCBjdXN0b20gPSB0aGlzLl9jdXN0b20uYnlTaG9ydGNvZGUoc2hvcnRjb2RlKTtcbiAgICBpZiAoY3VzdG9tKSB7XG4gICAgICByZXR1cm4gY3VzdG9tXG4gICAgfVxuICAgIHJldHVybiBjbGVhbkVtb2ppKGF3YWl0IGdldEVtb2ppQnlTaG9ydGNvZGUodGhpcy5fZGIsIHNob3J0Y29kZSkpXG4gIH1cblxuICBhc3luYyBnZXRFbW9qaUJ5VW5pY29kZU9yTmFtZSAodW5pY29kZU9yTmFtZSkge1xuICAgIGFzc2VydE5vbkVtcHR5U3RyaW5nKHVuaWNvZGVPck5hbWUpO1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICBjb25zdCBjdXN0b20gPSB0aGlzLl9jdXN0b20uYnlOYW1lKHVuaWNvZGVPck5hbWUpO1xuICAgIGlmIChjdXN0b20pIHtcbiAgICAgIHJldHVybiBjdXN0b21cbiAgICB9XG4gICAgcmV0dXJuIGNsZWFuRW1vamkoYXdhaXQgZ2V0RW1vamlCeVVuaWNvZGUodGhpcy5fZGIsIHVuaWNvZGVPck5hbWUpKVxuICB9XG5cbiAgYXN5bmMgZ2V0UHJlZmVycmVkU2tpblRvbmUgKCkge1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICByZXR1cm4gKGF3YWl0IGdldCh0aGlzLl9kYiwgU1RPUkVfS0VZVkFMVUUsIEtFWV9QUkVGRVJSRURfU0tJTlRPTkUpKSB8fCAwXG4gIH1cblxuICBhc3luYyBzZXRQcmVmZXJyZWRTa2luVG9uZSAoc2tpblRvbmUpIHtcbiAgICBhc3NlcnROdW1iZXIoc2tpblRvbmUpO1xuICAgIGF3YWl0IHRoaXMucmVhZHkoKTtcbiAgICByZXR1cm4gc2V0KHRoaXMuX2RiLCBTVE9SRV9LRVlWQUxVRSwgS0VZX1BSRUZFUlJFRF9TS0lOVE9ORSwgc2tpblRvbmUpXG4gIH1cblxuICBhc3luYyBpbmNyZW1lbnRGYXZvcml0ZUVtb2ppQ291bnQgKHVuaWNvZGVPck5hbWUpIHtcbiAgICBhc3NlcnROb25FbXB0eVN0cmluZyh1bmljb2RlT3JOYW1lKTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgcmV0dXJuIGluY3JlbWVudEZhdm9yaXRlRW1vamlDb3VudCh0aGlzLl9kYiwgdW5pY29kZU9yTmFtZSlcbiAgfVxuXG4gIGFzeW5jIGdldFRvcEZhdm9yaXRlRW1vamkgKGxpbWl0KSB7XG4gICAgYXNzZXJ0TnVtYmVyKGxpbWl0KTtcbiAgICBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgcmV0dXJuIChhd2FpdCBnZXRUb3BGYXZvcml0ZUVtb2ppKHRoaXMuX2RiLCB0aGlzLl9jdXN0b20sIGxpbWl0KSkubWFwKGNsZWFuRW1vamkpXG4gIH1cblxuICBzZXQgY3VzdG9tRW1vamkgKGN1c3RvbUVtb2ppcykge1xuICAgIHRoaXMuX2N1c3RvbSA9IGN1c3RvbUVtb2ppSW5kZXgoY3VzdG9tRW1vamlzKTtcbiAgfVxuXG4gIGdldCBjdXN0b21FbW9qaSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbS5hbGxcbiAgfVxuXG4gIGFzeW5jIF9zaHV0ZG93biAoKSB7XG4gICAgYXdhaXQgdGhpcy5yZWFkeSgpOyAvLyByZW9wZW4gaWYgd2UndmUgYWxyZWFkeSBiZWVuIGNsb3NlZC9kZWxldGVkXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX2xhenlVcGRhdGU7IC8vIGFsbG93IGFueSBsYXp5IHVwZGF0ZXMgdG8gcHJvY2VzcyBiZWZvcmUgY2xvc2luZy9kZWxldGluZ1xuICAgIH0gY2F0Y2ggKGVycikgeyAvKiBpZ25vcmUgbmV0d29yayBlcnJvcnMgKG9mZmxpbmUtZmlyc3QpICovIH1cbiAgfVxuXG4gIC8vIGNsZWFyIHJlZmVyZW5jZXMgdG8gSURCLCBlLmcuIGR1cmluZyBhIGNsb3NlIGV2ZW50XG4gIF9jbGVhciAoKSB7XG4gICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBjYWxsIHJlbW92ZUV2ZW50TGlzdGVuZXIgb3IgcmVtb3ZlIHRoZSBtYW51YWwgXCJjbG9zZVwiIGxpc3RlbmVycy5cbiAgICAvLyBUaGUgbWVtb3J5IGxlYWsgdGVzdHMgcHJvdmUgdGhpcyBpcyB1bm5lY2Vzc2FyeS4gSXQncyBiZWNhdXNlOlxuICAgIC8vIDEpIElEQkRhdGFiYXNlcyB0aGF0IGNhbiBubyBsb25nZXIgZmlyZSBcImNsb3NlXCIgYXV0b21hdGljYWxseSBoYXZlIGxpc3RlbmVycyBHQ2VkXG4gICAgLy8gMikgd2UgY2xlYXIgdGhlIG1hbnVhbCBjbG9zZSBsaXN0ZW5lcnMgaW4gZGF0YWJhc2VMaWZlY3ljbGUuanMuXG4gICAgdGhpcy5fZGIgPSB0aGlzLl9yZWFkeSA9IHRoaXMuX2xhenlVcGRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBhc3luYyBjbG9zZSAoKSB7XG4gICAgYXdhaXQgdGhpcy5fc2h1dGRvd24oKTtcbiAgICBhd2FpdCBjbG9zZURhdGFiYXNlKHRoaXMuX2RiTmFtZSk7XG4gIH1cblxuICBhc3luYyBkZWxldGUgKCkge1xuICAgIGF3YWl0IHRoaXMuX3NodXRkb3duKCk7XG4gICAgYXdhaXQgZGVsZXRlRGF0YWJhc2UodGhpcy5fZGJOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgeyBEYXRhYmFzZSBhcyBkZWZhdWx0IH07XG4iLCAiaW1wb3J0IERhdGFiYXNlIGZyb20gJy4vZGF0YWJhc2UuanMnO1xuXG4vLyB2aWEgaHR0cHM6Ly91bnBrZy5jb20vYnJvd3NlL2Vtb2ppYmFzZS1kYXRhQDYuMC4wL21ldGEvZ3JvdXBzLmpzb25cbmNvbnN0IGFsbEdyb3VwcyA9IFtcbiAgWy0xLCAnXHUyNzI4JywgJ2N1c3RvbSddLFxuICBbMCwgJ1x1RDgzRFx1REUwMCcsICdzbWlsZXlzLWVtb3Rpb24nXSxcbiAgWzEsICdcdUQ4M0RcdURDNEInLCAncGVvcGxlLWJvZHknXSxcbiAgWzMsICdcdUQ4M0RcdURDMzEnLCAnYW5pbWFscy1uYXR1cmUnXSxcbiAgWzQsICdcdUQ4M0NcdURGNEUnLCAnZm9vZC1kcmluayddLFxuICBbNSwgJ1x1RDgzQ1x1REZFMFx1RkUwRicsICd0cmF2ZWwtcGxhY2VzJ10sXG4gIFs2LCAnXHUyNkJEJywgJ2FjdGl2aXRpZXMnXSxcbiAgWzcsICdcdUQ4M0RcdURDREQnLCAnb2JqZWN0cyddLFxuICBbOCwgJ1x1MjZENFx1RkUwRicsICdzeW1ib2xzJ10sXG4gIFs5LCAnXHVEODNDXHVERkMxJywgJ2ZsYWdzJ11cbl0ubWFwKChbaWQsIGVtb2ppLCBuYW1lXSkgPT4gKHsgaWQsIGVtb2ppLCBuYW1lIH0pKTtcblxuY29uc3QgZ3JvdXBzID0gYWxsR3JvdXBzLnNsaWNlKDEpO1xuXG5jb25zdCBNSU5fU0VBUkNIX1RFWFRfTEVOR1RIID0gMjtcbmNvbnN0IE5VTV9TS0lOX1RPTkVTID0gNjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IHJJQyA9IHR5cGVvZiByZXF1ZXN0SWRsZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gcmVxdWVzdElkbGVDYWxsYmFjayA6IHNldFRpbWVvdXQ7XG5cbi8vIGNoZWNrIGZvciBaV0ogKHplcm8gd2lkdGggam9pbmVyKSBjaGFyYWN0ZXJcbmZ1bmN0aW9uIGhhc1p3aiAoZW1vamkpIHtcbiAgcmV0dXJuIGVtb2ppLnVuaWNvZGUuaW5jbHVkZXMoJ1xcdTIwMGQnKVxufVxuXG4vLyBGaW5kIG9uZSBnb29kIHJlcHJlc2VudGF0aXZlIGVtb2ppIGZyb20gZWFjaCB2ZXJzaW9uIHRvIHRlc3QgYnkgY2hlY2tpbmcgaXRzIGNvbG9yLlxuLy8gSWRlYWxseSBpdCBzaG91bGQgaGF2ZSBjb2xvciBpbiB0aGUgY2VudGVyLiBGb3Igc29tZSBpbnNwaXJhdGlvbiwgc2VlOlxuLy8gaHR0cHM6Ly9hYm91dC5naXRsYWIuY29tL2Jsb2cvMjAxOC8wNS8zMC9qb3VybmV5LWluLW5hdGl2ZS11bmljb2RlLWVtb2ppL1xuLy9cbi8vIE5vdGUgdGhhdCBmb3IgY2VydGFpbiB2ZXJzaW9ucyAoMTIuMSwgMTMuMSksIHRoZXJlIGlzIG5vIHBvaW50IGluIHRlc3RpbmcgdGhlbSBleHBsaWNpdGx5LCBiZWNhdXNlXG4vLyBhbGwgdGhlIGVtb2ppIGZyb20gdGhpcyB2ZXJzaW9uIGFyZSBjb21wb3VuZC1lbW9qaSBmcm9tIHByZXZpb3VzIHZlcnNpb25zLiBTbyB0aGV5IHdvdWxkIHBhc3MgYSBjb2xvclxuLy8gdGVzdCwgZXZlbiBpbiBicm93c2VycyB0aGF0IGRpc3BsYXkgdGhlbSBhcyBkb3VibGUgZW1vamkuIChFLmcuIFwiZmFjZSBpbiBjbG91ZHNcIiBtaWdodCByZW5kZXIgYXNcbi8vIFwiZmFjZSB3aXRob3V0IG1vdXRoXCIgcGx1cyBcImZvZ1wiLikgVGhlc2UgZW1vamkgY2FuIG9ubHkgYmUgZmlsdGVyZWQgdXNpbmcgdGhlIHdpZHRoIHRlc3QsXG4vLyB3aGljaCBoYXBwZW5zIGluIGNoZWNrWndqU3VwcG9ydC5qcy5cbmNvbnN0IHZlcnNpb25zQW5kVGVzdEVtb2ppID0ge1xuICAnXHVEODNFXHVERUVBJzogMTcsIC8vIGRpc3RvcnRlZCBmYWNlXG4gICdcdUQ4M0VcdURFRTknOiAxNiwgLy8gZmFjZSB3aXRoIGJhZ3MgdW5kZXIgZXllc1xuICAnXHVEODNFXHVERUU4JzogMTUuMSwgLy8gc2hha2luZyBoZWFkLCB0ZWNobmljYWxseSBmcm9tIHYxNSBidXQgc2VlIG5vdGUgYWJvdmVcbiAgJ1x1RDgzRVx1REVFMCc6IDE0LFxuICAnXHVEODNFXHVERDcyJzogMTMuMSwgLy8gc21pbGluZyBmYWNlIHdpdGggdGVhciwgdGVjaG5pY2FsbHkgZnJvbSB2MTMgYnV0IHNlZSBub3RlIGFib3ZlXG4gICdcdUQ4M0VcdUREN0InOiAxMi4xLCAvLyBzYXJpLCB0ZWNobmljYWxseSBmcm9tIHYxMiBidXQgc2VlIG5vdGUgYWJvdmVcbiAgJ1x1RDgzRVx1REQ3MCc6IDExLFxuICAnXHVEODNFXHVERDI5JzogNSxcbiAgJ1x1RDgzRFx1REM3MVx1MjAwRFx1MjY0MFx1RkUwRic6IDQsXG4gICdcdUQ4M0VcdUREMjMnOiAzLFxuICAnXHVEODNEXHVEQzQxXHVGRTBGXHUyMDBEXHVEODNEXHVEREU4XHVGRTBGJzogMixcbiAgJ1x1RDgzRFx1REUwMCc6IDEsXG4gICdcdUQ4M0RcdURFMTBcdUZFMEYnOiAwLjcsXG4gICdcdUQ4M0RcdURFMDMnOiAwLjZcbn07XG5cbmNvbnN0IFRJTUVPVVRfQkVGT1JFX0xPQURJTkdfTUVTU0FHRSA9IDEwMDA7IC8vIDEgc2Vjb25kXG5jb25zdCBERUZBVUxUX1NLSU5fVE9ORV9FTU9KSSA9ICdcdUQ4M0RcdUREOTBcdUZFMEYnO1xuY29uc3QgREVGQVVMVF9OVU1fQ09MVU1OUyA9IDg7XG5cbi8vIEJhc2VkIG9uIGh0dHBzOi8vZml2ZXRoaXJ0eWVpZ2h0LmNvbS9mZWF0dXJlcy90aGUtMTAwLW1vc3QtdXNlZC1lbW9qaXMvIGFuZFxuLy8gaHR0cHM6Ly9ibG9nLmVtb2ppcGVkaWEub3JnL2ZhY2Vib29rLXJldmVhbHMtbW9zdC1hbmQtbGVhc3QtdXNlZC1lbW9qaXMvIHdpdGhcbi8vIGEgYml0IG9mIG15IG93biBjdXJhdGlvbi4gKEUuZy4gYXZvaWQgdGhlIFwiT0tcIiBnZXN0dXJlIGJlY2F1c2Ugb2YgY29ubm90YXRpb25zOlxuLy8gaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9vay1oYW5kLylcbmNvbnN0IE1PU1RfQ09NTU9OTFlfVVNFRF9FTU9KSSA9IFtcbiAgJ1x1RDgzRFx1REUwQScsXG4gICdcdUQ4M0RcdURFMTInLFxuICAnXHUyNzY0XHVGRTBGJyxcbiAgJ1x1RDgzRFx1REM0RFx1RkUwRicsXG4gICdcdUQ4M0RcdURFMEQnLFxuICAnXHVEODNEXHVERTAyJyxcbiAgJ1x1RDgzRFx1REUyRCcsXG4gICdcdTI2M0FcdUZFMEYnLFxuICAnXHVEODNEXHVERTE0JyxcbiAgJ1x1RDgzRFx1REUyOScsXG4gICdcdUQ4M0RcdURFMEYnLFxuICAnXHVEODNEXHVEQzk1JyxcbiAgJ1x1RDgzRFx1REU0QycsXG4gICdcdUQ4M0RcdURFMTgnXG5dO1xuXG4vLyBJdCdzIGltcG9ydGFudCB0byBsaXN0IFR3ZW1vamkgTW96aWxsYSBiZWZvcmUgZXZlcnl0aGluZyBlbHNlLCBiZWNhdXNlIE1vemlsbGEgYnVuZGxlcyB0aGVpclxuLy8gb3duIGZvbnQgb24gc29tZSBwbGF0Zm9ybXMgKG5vdGFibHkgV2luZG93cyBhbmQgTGludXggYXMgb2YgdGhpcyB3cml0aW5nKS4gVHlwaWNhbGx5LCBNb3ppbGxhXG4vLyB1cGRhdGVzIGZhc3RlciB0aGFuIHRoZSB1bmRlcmx5aW5nIE9TLCBhbmQgd2UgZG9uJ3Qgd2FudCB0byByZW5kZXIgb2xkZXIgZW1vamkgaW4gb25lIGZvbnQgYW5kXG4vLyBuZXdlciBlbW9qaSBpbiBhbm90aGVyIGZvbnQ6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9sYW5sYXdzb24vZW1vamktcGlja2VyLWVsZW1lbnQvcHVsbC8yNjgjaXNzdWVjb21tZW50LTEwNzMzNDcyODNcbmNvbnN0IEZPTlRfRkFNSUxZID0gJ1wiVHdlbW9qaSBNb3ppbGxhXCIsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiLCcgK1xuICAnXCJOb3RvIENvbG9yIEVtb2ppXCIsXCJFbW9qaU9uZSBDb2xvclwiLFwiQW5kcm9pZCBFbW9qaVwiLHNhbnMtc2VyaWYnO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgREVGQVVMVF9DQVRFR09SWV9TT1JUSU5HID0gKGEsIGIpID0+IGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwO1xuXG4vLyBUZXN0IGlmIGFuIGVtb2ppIGlzIHN1cHBvcnRlZCBieSByZW5kZXJpbmcgaXQgdG8gY2FudmFzIGFuZCBjaGVja2luZyB0aGF0IHRoZSBjb2xvciBpcyBub3QgYmxhY2tcbi8vIFNlZSBodHRwczovL2Fib3V0LmdpdGxhYi5jb20vYmxvZy8yMDE4LzA1LzMwL2pvdXJuZXktaW4tbmF0aXZlLXVuaWNvZGUtZW1vamkvXG4vLyBhbmQgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvaWYtZW1vamkgZm9yIGluc3BpcmF0aW9uXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGxhcmdlbHkgYm9ycm93ZWQgZnJvbSBpZi1lbW9qaSwgYWRkaW5nIHRoZSBmb250LWZhbWlseVxuXG5cbmNvbnN0IGdldFRleHRGZWF0dXJlID0gKHRleHQsIGNvbG9yKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBjYW52YXMuaGVpZ2h0ID0gMTtcblxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4gICAgLy8gSW1wcm92ZXMgdGhlIHBlcmZvcm1hbmNlIG9mIGBnZXRJbWFnZURhdGEoKWBcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL2dldENvbnRleHRBdHRyaWJ1dGVzI3dpbGxyZWFkZnJlcXVlbnRseVxuICAgIHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZVxuICB9KTtcbiAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICBjdHguZm9udCA9IGAxMDBweCAke0ZPTlRfRkFNSUxZfWA7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4LnNjYWxlKDAuMDEsIDAuMDEpO1xuICBjdHguZmlsbFRleHQodGV4dCwgMCwgMCk7XG5cbiAgcmV0dXJuIGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSkuZGF0YVxufTtcblxuY29uc3QgY29tcGFyZUZlYXR1cmVzID0gKGZlYXR1cmUxLCBmZWF0dXJlMikgPT4ge1xuICBjb25zdCBmZWF0dXJlMVN0ciA9IFsuLi5mZWF0dXJlMV0uam9pbignLCcpO1xuICBjb25zdCBmZWF0dXJlMlN0ciA9IFsuLi5mZWF0dXJlMl0uam9pbignLCcpO1xuICAvLyBUaGlzIGlzIFJHQkEsIHNvIGZvciAwLDAsMCwgd2UgYXJlIGNoZWNraW5nIHRoYXQgdGhlIGZpcnN0IFJHQiBpcyBub3QgYWxsIHplcm9lcy5cbiAgLy8gTW9zdCBvZiB0aGUgdGltZSB3aGVuIHVuc3VwcG9ydGVkIHRoaXMgaXMgMCwwLDAsMCwgYnV0IG9uIENocm9tZSBvbiBNYWMgaXQgaXNcbiAgLy8gMCwwLDAsNjEgLSB0aGVyZSBpcyBhIHRyYW5zcGFyZW5jeSBoZXJlLlxuICByZXR1cm4gZmVhdHVyZTFTdHIgPT09IGZlYXR1cmUyU3RyICYmICFmZWF0dXJlMVN0ci5zdGFydHNXaXRoKCcwLDAsMCwnKVxufTtcblxuZnVuY3Rpb24gdGVzdENvbG9yRW1vamlTdXBwb3J0ZWQgKHRleHQpIHtcbiAgLy8gUmVuZGVyIHdoaXRlIGFuZCBibGFjayBhbmQgdGhlbiBjb21wYXJlIHRoZW0gdG8gZWFjaCBvdGhlciBhbmQgZW5zdXJlIHRoZXkncmUgdGhlIHNhbWVcbiAgLy8gY29sb3IsIGFuZCBuZWl0aGVyIG9uZSBpcyBibGFjay4gVGhpcyBzaG93cyB0aGF0IHRoZSBlbW9qaSB3YXMgcmVuZGVyZWQgaW4gY29sb3IuXG4gIGNvbnN0IGZlYXR1cmUxID0gZ2V0VGV4dEZlYXR1cmUodGV4dCwgJyMwMDAnKTtcbiAgY29uc3QgZmVhdHVyZTIgPSBnZXRUZXh0RmVhdHVyZSh0ZXh0LCAnI2ZmZicpO1xuICByZXR1cm4gZmVhdHVyZTEgJiYgZmVhdHVyZTIgJiYgY29tcGFyZUZlYXR1cmVzKGZlYXR1cmUxLCBmZWF0dXJlMilcbn1cblxuLy8gcmF0aGVyIHRoYW4gY2hlY2sgZXZlcnkgZW1vamkgZXZlciwgd2hpY2ggd291bGQgYmUgZXhwZW5zaXZlLCBqdXN0IGNoZWNrIHNvbWUgcmVwcmVzZW50YXRpdmVzIGZyb20gdGhlXG4vLyBkaWZmZXJlbnQgZW1vamkgcmVsZWFzZXMgdG8gZGV0ZXJtaW5lIHdoYXQgdGhlIGZvbnQgc3VwcG9ydHNcblxuZnVuY3Rpb24gZGV0ZXJtaW5lRW1vamlTdXBwb3J0TGV2ZWwgKCkge1xuICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXModmVyc2lvbnNBbmRUZXN0RW1vamkpO1xuICB0cnkge1xuICAgIC8vIHN0YXJ0IHdpdGggbGF0ZXN0IGVtb2ppIGFuZCB3b3JrIGJhY2t3YXJkc1xuICAgIGZvciAoY29uc3QgW2Vtb2ppLCB2ZXJzaW9uXSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAodGVzdENvbG9yRW1vamlTdXBwb3J0ZWQoZW1vamkpKSB7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7IC8vIGNhbnZhcyBlcnJvclxuICB9IGZpbmFsbHkge1xuICB9XG4gIC8vIEluIGNhc2Ugb2YgYW4gZXJyb3IsIGJlIGdlbmVyb3VzIGFuZCBqdXN0IGFzc3VtZSBhbGwgZW1vamkgYXJlIHN1cHBvcnRlZCAoZS5nLiBmb3IgY2FudmFzIGVycm9yc1xuICAvLyBkdWUgdG8gYW50aS1maW5nZXJwcmludGluZyBhZGQtb25zKS4gQmV0dGVyIHRvIHNob3cgc29tZSBncmF5IGJveGVzIHRoYW4gbm90aGluZyBhdCBhbGwuXG4gIHJldHVybiBlbnRyaWVzWzBdWzFdIC8vIGZpcnN0IG9uZSBpbiB0aGUgbGlzdCBpcyB0aGUgbW9zdCByZWNlbnQgdmVyc2lvblxufVxuXG4vLyBDaGVjayB3aGljaCBlbW9qaXMgd2Uga25vdyBmb3Igc3VyZSBhcmVuJ3Qgc3VwcG9ydGVkLCBiYXNlZCBvbiBVbmljb2RlIHZlcnNpb24gbGV2ZWxcbmxldCBwcm9taXNlO1xuY29uc3QgZGV0ZWN0RW1vamlTdXBwb3J0TGV2ZWwgPSAoKSA9PiB7XG4gIGlmICghcHJvbWlzZSkge1xuICAgIC8vIERlbGF5IHNvIGl0IGNhbiBydW4gd2hpbGUgdGhlIElEQiBkYXRhYmFzZSBpcyBiZWluZyBjcmVhdGVkIGJ5IHRoZSBicm93c2VyIChvbiBhbm90aGVyIHRocmVhZCkuXG4gICAgLy8gVGhpcyBoZWxwcyBlc3BlY2lhbGx5IHdpdGggZmlyc3QgbG9hZCBcdTIwMTMgd2Ugd2FudCB0byBzdGFydCBwcmUtcG9wdWxhdGluZyB0aGUgZGF0YWJhc2Ugb24gdGhlIG1haW4gdGhyZWFkLFxuICAgIC8vIGFuZCB0aGVuIHdhaXQgZm9yIElEQiB0byBjb21taXQgZXZlcnl0aGluZywgYW5kIHdoaWxlIHdhaXRpbmcgd2UgcnVuIHRoaXMgY2hlY2suXG4gICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gKFxuICAgICAgcklDKCgpID0+IChcbiAgICAgICAgcmVzb2x2ZShkZXRlcm1pbmVFbW9qaVN1cHBvcnRMZXZlbCgpKSAvLyBkZWxheSBzbyBpZGVhbGx5IHRoaXMgY2FuIHJ1biB3aGlsZSBJREIgaXMgZmlyc3QgcG9wdWxhdGluZ1xuICAgICAgKSlcbiAgICApKTtcbiAgfVxuICByZXR1cm4gcHJvbWlzZVxufTtcbi8vIGRldGVybWluZSB3aGljaCBlbW9qaXMgY29udGFpbmluZyBaV0ogKHplcm8gd2lkdGggam9pbmVyKSBjaGFyYWN0ZXJzXG4vLyBhcmUgc3VwcG9ydGVkIChyZW5kZXJlZCBhcyBvbmUgZ2x5cGgpIHJhdGhlciB0aGFuIHVuc3VwcG9ydGVkIChyZW5kZXJlZCBhcyB0d28gb3IgbW9yZSBnbHlwaHMpXG5jb25zdCBzdXBwb3J0ZWRad2pFbW9qaXMgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IFZBUklBVElPTl9TRUxFQ1RPUiA9ICdcXHVmZTBmJztcbmNvbnN0IFNLSU5UT05FX01PRElGSUVSID0gJ1xcdWQ4M2MnO1xuY29uc3QgWldKID0gJ1xcdTIwMGQnO1xuY29uc3QgTElHSFRfU0tJTl9UT05FID0gMHgxRjNGQjtcbmNvbnN0IExJR0hUX1NLSU5fVE9ORV9NT0RJRklFUiA9IDB4ZGZmYjtcblxuLy8gVE9ETzogdGhpcyBpcyBhIG5haXZlIGltcGxlbWVudGF0aW9uLCB3ZSBjYW4gaW1wcm92ZSBpdCBsYXRlclxuLy8gSXQncyBvbmx5IHVzZWQgZm9yIHRoZSBza2ludG9uZSBwaWNrZXIsIHNvIGFzIGxvbmcgYXMgcGVvcGxlIGRvbid0IGN1c3RvbWl6ZSB3aXRoXG4vLyByZWFsbHkgZXhvdGljIGVtb2ppIHRoZW4gaXQgc2hvdWxkIHdvcmsgZmluZVxuZnVuY3Rpb24gYXBwbHlTa2luVG9uZSAoc3RyLCBza2luVG9uZSkge1xuICBpZiAoc2tpblRvbmUgPT09IDApIHtcbiAgICByZXR1cm4gc3RyXG4gIH1cbiAgY29uc3QgendqSW5kZXggPSBzdHIuaW5kZXhPZihaV0opO1xuICBpZiAoendqSW5kZXggIT09IC0xKSB7XG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgendqSW5kZXgpICtcbiAgICAgIFN0cmluZy5mcm9tQ29kZVBvaW50KExJR0hUX1NLSU5fVE9ORSArIHNraW5Ub25lIC0gMSkgK1xuICAgICAgc3RyLnN1YnN0cmluZyh6d2pJbmRleClcbiAgfVxuICBpZiAoc3RyLmVuZHNXaXRoKFZBUklBVElPTl9TRUxFQ1RPUikpIHtcbiAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKTtcbiAgfVxuICByZXR1cm4gc3RyICsgU0tJTlRPTkVfTU9ESUZJRVIgKyBTdHJpbmcuZnJvbUNvZGVQb2ludChMSUdIVF9TS0lOX1RPTkVfTU9ESUZJRVIgKyBza2luVG9uZSAtIDEpXG59XG5cbmZ1bmN0aW9uIGhhbHQgKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG4vLyBJbXBsZW1lbnRhdGlvbiBsZWZ0L3JpZ2h0IG9yIHVwL2Rvd24gbmF2aWdhdGlvbiwgY2lyY2xpbmcgYmFjayB3aGVuIHlvdVxuLy8gcmVhY2ggdGhlIHN0YXJ0L2VuZCBvZiB0aGUgbGlzdFxuZnVuY3Rpb24gaW5jcmVtZW50T3JEZWNyZW1lbnQgKGRlY3JlbWVudCwgdmFsLCBhcnIpIHtcbiAgdmFsICs9IChkZWNyZW1lbnQgPyAtMSA6IDEpO1xuICBpZiAodmFsIDwgMCkge1xuICAgIHZhbCA9IGFyci5sZW5ndGggLSAxO1xuICB9IGVsc2UgaWYgKHZhbCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgdmFsID0gMDtcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbi8vIGxpa2UgbG9kYXNoJ3MgdW5pcUJ5IGJ1dCBtdWNoIHNtYWxsZXJcbmZ1bmN0aW9uIHVuaXFCeSAoYXJyLCBmdW5jKSB7XG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcbiAgY29uc3QgcmVzID0gW107XG4gIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICBjb25zdCBrZXkgPSBmdW5jKGl0ZW0pO1xuICAgIGlmICghc2V0LmhhcyhrZXkpKSB7XG4gICAgICBzZXQuYWRkKGtleSk7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vLyBXZSBkb24ndCBuZWVkIGFsbCB0aGUgZGF0YSBvbiBldmVyeSBlbW9qaSwgYW5kIHRoZXJlIGFyZSBzcGVjaWZpYyB0aGluZ3Mgd2UgbmVlZFxuLy8gZm9yIHRoZSBVSSwgc28gYnVpbGQgYSBcInZpZXcgbW9kZWxcIiBmcm9tIHRoZSBlbW9qaSBvYmplY3Qgd2UgZ290IGZyb20gdGhlIGRhdGFiYXNlXG5cbmZ1bmN0aW9uIHN1bW1hcml6ZUVtb2ppc0ZvclVJIChlbW9qaXMsIGVtb2ppU3VwcG9ydExldmVsKSB7XG4gIGNvbnN0IHRvU2ltcGxlU2tpbnNNYXAgPSBza2lucyA9PiB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChjb25zdCBza2luIG9mIHNraW5zKSB7XG4gICAgICAvLyBpZ25vcmUgYXJyYXlzIGxpa2UgWzEsIDJdIHdpdGggbXVsdGlwbGUgc2tpbiB0b25lc1xuICAgICAgLy8gYWxzbyBpZ25vcmUgdmFyaWFudHMgdGhhdCBhcmUgaW4gYW4gdW5zdXBwb3J0ZWQgZW1vamkgdmVyc2lvblxuICAgICAgLy8gKHRoZXNlIGRvIGV4aXN0IC0gdmFyaWFudHMgZnJvbSBhIGRpZmZlcmVudCB2ZXJzaW9uIHRoYW4gdGhlaXIgYmFzZSBlbW9qaSlcbiAgICAgIGlmICh0eXBlb2Ygc2tpbi50b25lID09PSAnbnVtYmVyJyAmJiBza2luLnZlcnNpb24gPD0gZW1vamlTdXBwb3J0TGV2ZWwpIHtcbiAgICAgICAgcmVzW3NraW4udG9uZV0gPSBza2luLnVuaWNvZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfTtcblxuICByZXR1cm4gZW1vamlzLm1hcCgoeyB1bmljb2RlLCBza2lucywgc2hvcnRjb2RlcywgdXJsLCBuYW1lLCBjYXRlZ29yeSwgYW5ub3RhdGlvbiB9KSA9PiAoe1xuICAgIHVuaWNvZGUsXG4gICAgbmFtZSxcbiAgICBzaG9ydGNvZGVzLFxuICAgIHVybCxcbiAgICBjYXRlZ29yeSxcbiAgICBhbm5vdGF0aW9uLFxuICAgIGlkOiB1bmljb2RlIHx8IG5hbWUsXG4gICAgc2tpbnM6IHNraW5zICYmIHRvU2ltcGxlU2tpbnNNYXAoc2tpbnMpXG4gIH0pKVxufVxuXG4vLyBpbXBvcnQgckFGIGZyb20gb25lIHBsYWNlIHNvIHRoYXQgdGhlIGJ1bmRsZSBzaXplIGlzIGEgYml0IHNtYWxsZXJcbmNvbnN0IHJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuLy8gXCJTdmVsdGUgYWN0aW9uXCItbGlrZSB1dGlsaXR5IHRvIGRldGVjdCBsYXlvdXQgY2hhbmdlcyB2aWEgUmVzaXplT2JzZXJ2ZXIuXG4vLyBJZiBSZXNpemVPYnNlcnZlciBpcyB1bnN1cHBvcnRlZCwgd2UganVzdCB1c2UgckFGIG9uY2UgYW5kIGRvbid0IGJvdGhlciB0byB1cGRhdGUuXG5cblxubGV0IHJlc2l6ZU9ic2VydmVyU3VwcG9ydGVkID0gdHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSAnZnVuY3Rpb24nO1xuXG5mdW5jdGlvbiByZXNpemVPYnNlcnZlckFjdGlvbiAobm9kZSwgYWJvcnRTaWduYWwsIG9uVXBkYXRlKSB7XG4gIGxldCByZXNpemVPYnNlcnZlcjtcbiAgaWYgKHJlc2l6ZU9ic2VydmVyU3VwcG9ydGVkKSB7XG4gICAgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIob25VcGRhdGUpO1xuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUobm9kZSk7XG4gIH0gZWxzZSB7IC8vIGp1c3QgcnVuIG9uY2UsIGRvbid0IGJvdGhlciB0cnlpbmcgdG8gdHJhY2sgaXRcbiAgICByQUYob25VcGRhdGUpO1xuICB9XG5cbiAgLy8gY2xlYW51cCBmdW5jdGlvbiAoY2FsbGVkIG9uIGRlc3Ryb3kpXG4gIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuICAgIGlmIChyZXNpemVPYnNlcnZlcikge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGdldCB0aGUgd2lkdGggb2YgdGhlIHRleHQgaW5zaWRlIG9mIGEgRE9NIG5vZGUsIHZpYSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTk1MjU4OTEvNjgwNzQyXG5mdW5jdGlvbiBjYWxjdWxhdGVUZXh0V2lkdGggKG5vZGUpIHtcbiAgLy8gc2tpcCBydW5uaW5nIHRoaXMgaW4gamVzdC92aXRlc3QgYmVjYXVzZSB3ZSBkb24ndCBuZWVkIHRvIGNoZWNrIGZvciBlbW9qaSBzdXBwb3J0IGluIHRoYXQgZW52aXJvbm1lbnRcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAge1xuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZWxlY3ROb2RlKG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuIHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gIH1cbn1cblxuY29uc3QgQkFTRUxJTkVfRU1PSkkgPSAnXHVEODNEXHVERTAwJztcblxubGV0IGJhc2VsaW5lRW1vamlXaWR0aDtcbmxldCBmYWxsYmFja05vZGU7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVRleHRXaWR0aFdpdGhGYWxsYmFjayAodW5pY29kZSwgZG9tTm9kZSwgYmFzZWxpbmVFbW9qaU5vZGUpIHtcbiAgY29uc3QgcmVzdWx0ID0gY2FsY3VsYXRlVGV4dFdpZHRoKGRvbU5vZGUpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFyZXN1bHQpIHtcbiAgICAvLyBJZiByZXN1bHQgaXMgMCB0aGVuIHZlcnkgbGlrZWx5IHRoZSBlbW9qaS1waWNrZXIgaGFzIGBkaXNwbGF5Om5vbmVgIG9yIGVxdWl2YWxlbnQuIEluIHRoYXQgY2FzZSwgd2UgZmFsbCBiYWNrIHRvXG4gICAgLy8gY2xvbmluZyB0aGUgYmFzZWxpbmUgZW1vamksIHB1dHRpbmcgdGhhdCBpbiB0aGUgYGRvY3VtZW50LmJvZHlgLCBhbmQgbWVhc3VyaW5nIHRoYXQgaW5zdGVhZC4gVGhpcyBpcyBhIHBlcmYgaGl0LFxuICAgIC8vIGJ1dCBpdCdzIGJldHRlciB0aGFuIG1pc3Rha2VubHkgZmlsdGVyaW5nIGVtb2ppOiBodHRwczovL2dpdGh1Yi5jb20vbm9sYW5sYXdzb24vZW1vamktcGlja2VyLWVsZW1lbnQvaXNzdWVzLzUxNFxuICAgIGlmICghZmFsbGJhY2tOb2RlKSB7XG4gICAgICBmYWxsYmFja05vZGUgPSBiYXNlbGluZUVtb2ppTm9kZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAvLyBXZSBoYXZlIHRvIGNvcHkgc3R5bGVzIGJlY2F1c2Ugd2UncmUgY29weWluZyBmcm9tIGFuIGVsZW1lbnQgaW4gdGhlIHNoYWRvdyBET00gdG8gdGhlIGxpZ2h0IERPTVxuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHRoZSBzaGFkb3cgRE9NIGJlY2F1c2UgaXQncyBsaWtlbHkgdGhlIGVudGlyZSBwaWNrZXIgaXMgYGRpc3BsYXk6bm9uZWBcbiAgICAgIGNvbnN0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoYmFzZWxpbmVFbW9qaU5vZGUpO1xuICAgICAgLy8gcHJvYmFibHkgZG9uJ3QgbmVlZCBkaXNwbGF5L2FsaWduLWl0ZW1zL2p1c3RpZnktY29udGVudCBidXQgbGV0J3MgcGxheSBpdCBzYWZlXG4gICAgICBmb3IgKGNvbnN0IHByb3Agb2YgWydmb250LWZhbWlseScsICdsaW5lLWhlaWdodCcsICd3aWR0aCcsICdoZWlnaHQnLCAnZm9udC1zaXplJywgJ2Rpc3BsYXknLCAnYWxpZ24taXRlbXMnLCAnanVzdGlmeS1jb250ZW50J10pIHtcbiAgICAgICAgLy8gc2V0IGAhaW1wb3J0YW50YCBqdXN0IGluIGNhc2Ugc29tZSBnbG9iYWwgc3R5bGVzIG1pZ2h0IHRyeSB0byBvdmVyd3JpdGUgdGhpc1xuICAgICAgICBmYWxsYmFja05vZGUuc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgc3R5bGVzLmdldFByb3BlcnR5VmFsdWUocHJvcCksICdpbXBvcnRhbnQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZmFsbGJhY2tOb2RlKTtcbiAgICAgIGZhbGxiYWNrTm9kZS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHVuaWNvZGU7XG4gICAgICByZXR1cm4gY2FsY3VsYXRlVGV4dFdpZHRoKGZhbGxiYWNrTm9kZSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gYXZvaWQgYWN0dWFsbHkgcmVuZGVyaW5nIHRoZSB0ZXN0IGVtb2ppXG4gICAgICBmYWxsYmFja05vZGUucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZW1vamlzIGNvbnRhaW5pbmcgWldKIGNoYXJhY3RlcnMgYXJlIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBicm93c2VyIChkb24ndCByZW5kZXJcbiAqIGFzIGRvdWJsZSBjaGFyYWN0ZXJzKSBhbmQgcmV0dXJuIHRydWUgaWYgYWxsIGFyZSBzdXBwb3J0ZWQuXG4gKiBAcGFyYW0gendqRW1vamlzVG9DaGVja1xuICogQHBhcmFtIGJhc2VsaW5lRW1vamlOb2RlXG4gKiBAcGFyYW0gZW1vamlUb0RvbU5vZGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tad2pTdXBwb3J0ICh6d2pFbW9qaXNUb0NoZWNrLCBiYXNlbGluZUVtb2ppTm9kZSwgZW1vamlUb0RvbU5vZGUpIHtcbiAgbGV0IGFsbFN1cHBvcnRlZCA9IHRydWU7XG4gIGZvciAoY29uc3QgZW1vamkgb2YgendqRW1vamlzVG9DaGVjaykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBlbW9qaVRvRG9tTm9kZShlbW9qaSk7XG4gICAgLy8gc2FuaXR5IGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgbm9kZSBpcyBkZWZpbmVkIHByb3Blcmx5XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICAvLyBUaGlzIGlzIGEgcmFjZSBjb25kaXRpb24gdGhhdCBjYW4gb2NjdXIgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC9yZW1vdW50ZWRcbiAgICAgIC8vIEl0IGRvZXNuJ3QgcmVhbGx5IG1hdHRlciB3aGF0IHdlIGRvIGhlcmUgc2luY2UgdGhlIG9sZCBjb250ZXh0IGlzIG5vdCBnb2luZyB0byByZW5kZXIgYW55bW9yZS5cbiAgICAgIC8vIEp1c3QgYmFpbCBvdXQgb2YgZW1vamkgc3VwcG9ydCBkZXRlY3Rpb24gYW5kIHJldHVybiBgYWxsU3VwcG9ydGVkPXRydWVgIHNpbmNlIHRoZSByZW5kZXJpbmcgY29udGV4dCBpcyBnb25lXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGJhc2VsaW5lRW1vamlXaWR0aCA9PT0gJ3VuZGVmaW5lZCcpIHsgLy8gY2FsY3VsYXRlIHRoZSBiYXNlbGluZSBlbW9qaSB3aWR0aCBvbmx5IG9uY2VcbiAgICAgIGJhc2VsaW5lRW1vamlXaWR0aCA9IGNhbGN1bGF0ZVRleHRXaWR0aFdpdGhGYWxsYmFjayhCQVNFTElORV9FTU9KSSwgYmFzZWxpbmVFbW9qaU5vZGUsIGJhc2VsaW5lRW1vamlOb2RlKTtcbiAgICB9XG4gICAgY29uc3QgZW1vamlXaWR0aCA9IGNhbGN1bGF0ZVRleHRXaWR0aFdpdGhGYWxsYmFjayhlbW9qaS51bmljb2RlLCBkb21Ob2RlLCBiYXNlbGluZUVtb2ppTm9kZSk7XG4gICAgLy8gT24gV2luZG93cywgc29tZSBzdXBwb3J0ZWQgZW1vamkgYXJlIH41MCUgYmlnZ2VyIHRoYW4gdGhlIGJhc2VsaW5lIGVtb2ppLCBidXQgd2hhdCB3ZSByZWFsbHkgd2FudCB0byBndWFyZFxuICAgIC8vIGFnYWluc3QgYXJlIHRoZSBvbmVzIHRoYXQgYXJlIDJ4IHRoZSBzaXplLCBiZWNhdXNlIHRob3NlIGFyZSB0cnVseSBicm9rZW4gKHBlcnNvbiB3aXRoIHJlZCBoYWlyID0gcGVyc29uIHdpdGhcbiAgICAvLyBmbG9hdGluZyByZWQgd2lnLCBibGFjayBjYXQgPSBjYXQgd2l0aCBibGFjayBzcXVhcmUsIHBvbGFyIGJlYXIgPSBiZWFyIHdpdGggc25vd2ZsYWtlLCBldGMuKVxuICAgIC8vIFNvIGhlcmUgd2Ugc2V0IHRoZSB0aHJlc2hvbGQgYXQgMS44IHRpbWVzIHRoZSBzaXplIG9mIHRoZSBiYXNlbGluZSBlbW9qaS5cbiAgICBjb25zdCBzdXBwb3J0ZWQgPSBlbW9qaVdpZHRoIC8gMS44IDwgYmFzZWxpbmVFbW9qaVdpZHRoO1xuICAgIHN1cHBvcnRlZFp3akVtb2ppcy5zZXQoZW1vamkudW5pY29kZSwgc3VwcG9ydGVkKTtcblxuICAgIGlmICghc3VwcG9ydGVkKSB7XG4gICAgICBhbGxTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFsbFN1cHBvcnRlZFxufVxuXG4vLyBsaWtlIGxvZGFzaCdzIHVuaXFcblxuZnVuY3Rpb24gdW5pcSAoYXJyKSB7XG4gIHJldHVybiB1bmlxQnkoYXJyLCBfID0+IF8pXG59XG5cbi8vIE5vdGUgd2UgcHV0IHRoaXMgaW4gaXRzIG93biBmdW5jdGlvbiBvdXRzaWRlIFBpY2tlci5qcyB0byBhdm9pZCBTdmVsdGUgZG9pbmcgYW4gaW52YWxpZGF0aW9uIG9uIHRoZSBcInNldHRlclwiIGhlcmUuXG4vLyBBdCBiZXN0IHRoZSBpbnZhbGlkYXRpb24gaXMgdXNlbGVzcywgYXQgd29yc3QgaXQgY2FuIGNhdXNlIGluZmluaXRlIGxvb3BzOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vbGFubGF3c29uL2Vtb2ppLXBpY2tlci1lbGVtZW50L3B1bGwvMTgwXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy82NTIxXG4vLyBBbHNvIG5vdGUgdGFicGFuZWxFbGVtZW50IGNhbiBiZSBudWxsIGlmIHRoZSBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZCBpbW1lZGlhdGVseSBhZnRlciBjb25uZWN0ZWRcbmZ1bmN0aW9uIHJlc2V0U2Nyb2xsVG9wSWZQb3NzaWJsZSAoZWxlbWVudCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWxlbWVudCkgeyAvLyBNYWtlcyBtZSBuZXJ2b3VzIG5vdCB0byBoYXZlIHRoaXMgYGlmYCBndWFyZFxuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRGcm9tTWFwIChjYWNoZSwga2V5LCBmdW5jKSB7XG4gIGxldCBjYWNoZWQgPSBjYWNoZS5nZXQoa2V5KTtcbiAgaWYgKCFjYWNoZWQpIHtcbiAgICBjYWNoZWQgPSBmdW5jKCk7XG4gICAgY2FjaGUuc2V0KGtleSwgY2FjaGVkKTtcbiAgfVxuICByZXR1cm4gY2FjaGVkXG59XG5cbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gJycgKyB2YWx1ZVxufVxuXG5mdW5jdGlvbiBwYXJzZVRlbXBsYXRlIChodG1sU3RyaW5nKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgcmV0dXJuIHRlbXBsYXRlXG59XG5cbmNvbnN0IHBhcnNlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgZG9tSW5zdGFuY2VzQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuLy8gVGhpcyBuZWVkcyB0byBiZSBhIHN5bWJvbCBiZWNhdXNlIGl0IG5lZWRzIHRvIGJlIGRpZmZlcmVudCBmcm9tIGFueSBwb3NzaWJsZSBvdXRwdXQgb2YgYSBrZXkgZnVuY3Rpb25cbmNvbnN0IHVua2V5ZWRTeW1ib2wgPSBTeW1ib2woJ3VuLWtleWVkJyk7XG5cbi8vIE5vdCBzdXBwb3J0ZWQgaW4gU2FmYXJpIDw9MTNcbmNvbnN0IGhhc1JlcGxhY2VDaGlsZHJlbiA9ICdyZXBsYWNlQ2hpbGRyZW4nIGluIEVsZW1lbnQucHJvdG90eXBlO1xuZnVuY3Rpb24gcmVwbGFjZUNoaWxkcmVuIChwYXJlbnROb2RlLCBuZXdDaGlsZHJlbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoaGFzUmVwbGFjZUNoaWxkcmVuKSB7XG4gICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGRyZW4oLi4ubmV3Q2hpbGRyZW4pO1xuICB9IGVsc2UgeyAvLyBtaW5pbWFsIHBvbHlmaWxsIGZvciBFbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlQ2hpbGRyZW5cbiAgICBwYXJlbnROb2RlLmlubmVySFRNTCA9ICcnO1xuICAgIHBhcmVudE5vZGUuYXBwZW5kKC4uLm5ld0NoaWxkcmVuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkb0NoaWxkcmVuTmVlZFJlcmVuZGVyIChwYXJlbnROb2RlLCBuZXdDaGlsZHJlbikge1xuICBsZXQgb2xkQ2hpbGQgPSBwYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG4gIGxldCBvbGRDaGlsZHJlbkNvdW50ID0gMDtcbiAgLy8gaXRlcmF0ZSB1c2luZyBmaXJzdENoaWxkL25leHRTaWJsaW5nIGJlY2F1c2UgYnJvd3NlcnMgdXNlIGEgbGlua2VkIGxpc3QgdW5kZXIgdGhlIGhvb2RcbiAgd2hpbGUgKG9sZENoaWxkKSB7XG4gICAgY29uc3QgbmV3Q2hpbGQgPSBuZXdDaGlsZHJlbltvbGRDaGlsZHJlbkNvdW50XTtcbiAgICAvLyBjaGVjayBpZiB0aGUgb2xkIGNoaWxkIGFuZCBuZXcgY2hpbGQgYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0NoaWxkICE9PSBvbGRDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgb2xkQ2hpbGQgPSBvbGRDaGlsZC5uZXh0U2libGluZztcbiAgICBvbGRDaGlsZHJlbkNvdW50Kys7XG4gIH1cbiAgLy8gaWYgbmV3IGNoaWxkcmVuIGxlbmd0aCBpcyBkaWZmZXJlbnQgZnJvbSBvbGQsIHdlIG11c3QgcmUtcmVuZGVyXG4gIHJldHVybiBvbGRDaGlsZHJlbkNvdW50ICE9PSBuZXdDaGlsZHJlbi5sZW5ndGhcbn1cblxuZnVuY3Rpb24gcGF0Y2hDaGlsZHJlbiAobmV3Q2hpbGRyZW4sIGluc3RhbmNlQmluZGluZykge1xuICBjb25zdCB7IHRhcmdldE5vZGUgfSA9IGluc3RhbmNlQmluZGluZztcbiAgbGV0IHsgdGFyZ2V0UGFyZW50Tm9kZSB9ID0gaW5zdGFuY2VCaW5kaW5nO1xuXG4gIGxldCBuZWVkc1JlcmVuZGVyID0gZmFsc2U7XG5cbiAgaWYgKHRhcmdldFBhcmVudE5vZGUpIHsgLy8gYWxyZWFkeSByZW5kZXJlZCBvbmNlXG4gICAgbmVlZHNSZXJlbmRlciA9IGRvQ2hpbGRyZW5OZWVkUmVyZW5kZXIodGFyZ2V0UGFyZW50Tm9kZSwgbmV3Q2hpbGRyZW4pO1xuICB9IGVsc2UgeyAvLyBmaXJzdCByZW5kZXIgb2YgbGlzdFxuICAgIG5lZWRzUmVyZW5kZXIgPSB0cnVlO1xuICAgIGluc3RhbmNlQmluZGluZy50YXJnZXROb2RlID0gdW5kZWZpbmVkOyAvLyBwbGFjZWhvbGRlciBub2RlIG5vdCBuZWVkZWQgYW55bW9yZSwgZnJlZSBtZW1vcnlcbiAgICBpbnN0YW5jZUJpbmRpbmcudGFyZ2V0UGFyZW50Tm9kZSA9IHRhcmdldFBhcmVudE5vZGUgPSB0YXJnZXROb2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgLy8gYXZvaWQgcmUtcmVuZGVyaW5nIGxpc3QgaWYgdGhlIGRvbSBub2RlcyBhcmUgZXhhY3RseSB0aGUgc2FtZSBiZWZvcmUgYW5kIGFmdGVyXG4gIGlmIChuZWVkc1JlcmVuZGVyKSB7XG4gICAgcmVwbGFjZUNoaWxkcmVuKHRhcmdldFBhcmVudE5vZGUsIG5ld0NoaWxkcmVuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXRjaCAoZXhwcmVzc2lvbnMsIGluc3RhbmNlQmluZGluZ3MpIHtcbiAgZm9yIChjb25zdCBpbnN0YW5jZUJpbmRpbmcgb2YgaW5zdGFuY2VCaW5kaW5ncykge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldE5vZGUsXG4gICAgICBjdXJyZW50RXhwcmVzc2lvbixcbiAgICAgIGJpbmRpbmc6IHtcbiAgICAgICAgZXhwcmVzc2lvbkluZGV4LFxuICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICBhdHRyaWJ1dGVWYWx1ZVByZSxcbiAgICAgICAgYXR0cmlidXRlVmFsdWVQb3N0XG4gICAgICB9XG4gICAgfSA9IGluc3RhbmNlQmluZGluZztcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uc1tleHByZXNzaW9uSW5kZXhdO1xuXG4gICAgaWYgKGN1cnJlbnRFeHByZXNzaW9uID09PSBleHByZXNzaW9uKSB7XG4gICAgICAvLyBubyBuZWVkIHRvIHVwZGF0ZSwgc2FtZSBhcyBiZWZvcmVcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VCaW5kaW5nLmN1cnJlbnRFeHByZXNzaW9uID0gZXhwcmVzc2lvbjtcblxuICAgIGlmIChhdHRyaWJ1dGVOYW1lKSB7IC8vIGF0dHJpYnV0ZSByZXBsYWNlbWVudFxuICAgICAgaWYgKGV4cHJlc3Npb24gPT09IG51bGwpIHtcbiAgICAgICAgLy8gbnVsbCBpcyB0cmVhdGVkIGFzIGEgc3BlY2lhbCBjYXNlIGJ5IHRoZSBmcmFtZXdvcmsgLSB3ZSBkb24ndCByZW5kZXIgYW4gYXR0cmlidXRlIGF0IGFsbCBpbiB0aGlzIGNhc2VcbiAgICAgICAgdGFyZ2V0Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhdHRyaWJ1dGUgdmFsdWUgaXMgbm90IG51bGw7IHNldCBhIG5ldyBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZVByZSArIHRvU3RyaW5nKGV4cHJlc3Npb24pICsgYXR0cmlidXRlVmFsdWVQb3N0O1xuICAgICAgICB0YXJnZXROb2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gdGV4dCBub2RlIC8gY2hpbGQgZWxlbWVudCAvIGNoaWxkcmVuIHJlcGxhY2VtZW50XG4gICAgICBsZXQgbmV3Tm9kZTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4cHJlc3Npb24pKSB7IC8vIGFycmF5IG9mIERPTSBlbGVtZW50cyBwcm9kdWNlZCBieSB0YWcgdGVtcGxhdGUgbGl0ZXJhbHNcbiAgICAgICAgcGF0Y2hDaGlsZHJlbihleHByZXNzaW9uLCBpbnN0YW5jZUJpbmRpbmcpO1xuICAgICAgfSBlbHNlIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgRWxlbWVudCkgeyAvLyBodG1sIHRhZyB0ZW1wbGF0ZSByZXR1cm5pbmcgYSBET00gZWxlbWVudFxuICAgICAgICBuZXdOb2RlID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGFyZ2V0Tm9kZS5yZXBsYWNlV2l0aChuZXdOb2RlKTtcbiAgICAgIH0gZWxzZSB7IC8vIHByaW1pdGl2ZSAtIHN0cmluZywgbnVtYmVyLCBldGNcbiAgICAgICAgLy8gbm9kZVZhbHVlIGlzIGZhc3RlciB0aGFuIHRleHRDb250ZW50IHN1cHBvc2VkbHkgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1MWTZ5M0hiRFZtZ1xuICAgICAgICAvLyBub3RlIHdlIG1heSBiZSByZXBsYWNpbmcgdGhlIHZhbHVlIGluIGEgcGxhY2Vob2xkZXIgdGV4dCBub2RlXG4gICAgICAgIHRhcmdldE5vZGUubm9kZVZhbHVlID0gdG9TdHJpbmcoZXhwcmVzc2lvbik7XG4gICAgICB9XG4gICAgICBpZiAobmV3Tm9kZSkge1xuICAgICAgICBpbnN0YW5jZUJpbmRpbmcudGFyZ2V0Tm9kZSA9IG5ld05vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlICh0b2tlbnMpIHtcbiAgbGV0IGh0bWxTdHJpbmcgPSAnJztcblxuICBsZXQgd2l0aGluVGFnID0gZmFsc2U7XG4gIGxldCB3aXRoaW5BdHRyaWJ1dGUgPSBmYWxzZTtcbiAgbGV0IGVsZW1lbnRJbmRleENvdW50ZXIgPSAtMTsgLy8gZGVwdGgtZmlyc3QgdHJhdmVyc2FsIG9yZGVyXG5cbiAgY29uc3QgZWxlbWVudHNUb0JpbmRpbmdzID0gbmV3IE1hcCgpO1xuICBjb25zdCBlbGVtZW50SW5kZXhlcyA9IFtdO1xuXG4gIGxldCBza2lwVG9rZW5DaGFycyA9IDA7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2tlbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICBodG1sU3RyaW5nICs9IHRva2VuLnNsaWNlKHNraXBUb2tlbkNoYXJzKTtcblxuICAgIGlmIChpID09PSBsZW4gLSAxKSB7XG4gICAgICBicmVhayAvLyBubyBuZWVkIHRvIHByb2Nlc3MgY2hhcmFjdGVycyAtIG5vIG1vcmUgZXhwcmVzc2lvbnMgdG8gYmUgZm91bmRcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRva2VuLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBjaGFyID0gdG9rZW4uY2hhckF0KGopO1xuICAgICAgc3dpdGNoIChjaGFyKSB7XG4gICAgICAgIGNhc2UgJzwnOiB7XG4gICAgICAgICAgY29uc3QgbmV4dENoYXIgPSB0b2tlbi5jaGFyQXQoaiArIDEpO1xuICAgICAgICAgIGlmIChuZXh0Q2hhciA9PT0gJy8nKSB7IC8vIGNsb3NpbmcgdGFnXG4gICAgICAgICAgICAvLyBsZWF2aW5nIGFuIGVsZW1lbnRcbiAgICAgICAgICAgIGVsZW1lbnRJbmRleGVzLnBvcCgpO1xuICAgICAgICAgIH0gZWxzZSB7IC8vIG5vdCBhIGNsb3NpbmcgdGFnXG4gICAgICAgICAgICB3aXRoaW5UYWcgPSB0cnVlO1xuICAgICAgICAgICAgZWxlbWVudEluZGV4ZXMucHVzaCgrK2VsZW1lbnRJbmRleENvdW50ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJz4nOiB7XG4gICAgICAgICAgd2l0aGluVGFnID0gZmFsc2U7XG4gICAgICAgICAgd2l0aGluQXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICc9Jzoge1xuICAgICAgICAgIHdpdGhpbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbmRleCA9IGVsZW1lbnRJbmRleGVzW2VsZW1lbnRJbmRleGVzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGJpbmRpbmdzID0gZ2V0RnJvbU1hcChlbGVtZW50c1RvQmluZGluZ3MsIGVsZW1lbnRJbmRleCwgKCkgPT4gW10pO1xuXG4gICAgbGV0IGF0dHJpYnV0ZU5hbWU7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlUHJlO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZVBvc3Q7XG4gICAgaWYgKHdpdGhpbkF0dHJpYnV0ZSkge1xuICAgICAgLy8gSSBuZXZlciB1c2Ugc2luZ2xlLXF1b3RlcyBmb3IgYXR0cmlidXRlIHZhbHVlcyBpbiBIVE1MLCBzbyBqdXN0IHN1cHBvcnQgZG91YmxlLXF1b3RlcyBvciBuby1xdW90ZXNcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZVByZU1hdGNoID0gLyhcXFMrKT1cIj8oW15cIj1dKikkLy5leGVjKHRva2VuKTtcbiAgICAgIGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVQcmVNYXRjaFsxXTtcbiAgICAgIGF0dHJpYnV0ZVZhbHVlUHJlID0gYXR0cmlidXRlUHJlTWF0Y2hbMl07XG4gICAgICBjb25zdCBhdHRyaWJ1dGVQb3N0TWF0Y2ggPSAvXihbXlwiPl0qKShcIj8pLy5leGVjKHRva2Vuc1tpICsgMV0pO1xuICAgICAgYXR0cmlidXRlVmFsdWVQb3N0ID0gYXR0cmlidXRlUG9zdE1hdGNoWzFdO1xuICAgICAgLy8gT3B0aW1pemF0aW9uOiByZW1vdmUgdGhlIGF0dHJpYnV0ZSBpdHNlbGYsIHNvIHdlIGRvbid0IGNyZWF0ZSBhIGRlZmF1bHQgYXR0cmlidXRlIHdoaWNoIGlzIGVpdGhlciBlbXB0eSBvciBqdXN0XG4gICAgICAvLyB0aGUgXCJwcmVcIiB0ZXh0LCBlLmcuIGA8ZGl2IGZvbz5gIG9yIGA8ZGl2IGZvbz1cInByZWZpeFwiPmAuIEl0IHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIGV4cHJlc3Npb24gYW55d2F5LlxuICAgICAgaHRtbFN0cmluZyA9IGh0bWxTdHJpbmcuc2xpY2UoMCwgLTEgKiBhdHRyaWJ1dGVQcmVNYXRjaFswXS5sZW5ndGgpO1xuICAgICAgc2tpcFRva2VuQ2hhcnMgPSBhdHRyaWJ1dGVQb3N0TWF0Y2hbMF0ubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBza2lwVG9rZW5DaGFycyA9IDA7XG4gICAgfVxuXG4gICAgY29uc3QgYmluZGluZyA9IHtcbiAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICBhdHRyaWJ1dGVWYWx1ZVByZSxcbiAgICAgIGF0dHJpYnV0ZVZhbHVlUG9zdCxcbiAgICAgIGV4cHJlc3Npb25JbmRleDogaVxuICAgIH07XG5cbiAgICBiaW5kaW5ncy5wdXNoKGJpbmRpbmcpO1xuXG4gICAgaWYgKCF3aXRoaW5UYWcgJiYgIXdpdGhpbkF0dHJpYnV0ZSkge1xuICAgICAgLy8gQWRkIGEgcGxhY2Vob2xkZXIgdGV4dCBub2RlLCBzbyB3ZSBjYW4gZmluZCBpdCBsYXRlci4gTm90ZSB3ZSBvbmx5IHN1cHBvcnQgb25lIGR5bmFtaWMgY2hpbGQgdGV4dCBub2RlXG4gICAgICBodG1sU3RyaW5nICs9ICcgJztcbiAgICB9XG4gIH1cblxuICBjb25zdCB0ZW1wbGF0ZSA9IHBhcnNlVGVtcGxhdGUoaHRtbFN0cmluZyk7XG5cbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZSxcbiAgICBlbGVtZW50c1RvQmluZGluZ3NcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseUJpbmRpbmdzIChiaW5kaW5ncywgZWxlbWVudCwgaW5zdGFuY2VCaW5kaW5ncykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmRpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYmluZGluZyA9IGJpbmRpbmdzW2ldO1xuXG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGJpbmRpbmcuYXR0cmlidXRlTmFtZVxuICAgICAgPyBlbGVtZW50IC8vIGF0dHJpYnV0ZSBiaW5kaW5nLCBqdXN0IHVzZSB0aGUgZWxlbWVudCBpdHNlbGZcbiAgICAgIDogZWxlbWVudC5maXJzdENoaWxkOyAvLyBub3QgYW4gYXR0cmlidXRlIGJpbmRpbmcsIHNvIGhhcyBhIHBsYWNlaG9sZGVyIHRleHQgbm9kZVxuXG4gICAgY29uc3QgaW5zdGFuY2VCaW5kaW5nID0ge1xuICAgICAgYmluZGluZyxcbiAgICAgIHRhcmdldE5vZGUsXG4gICAgICB0YXJnZXRQYXJlbnROb2RlOiB1bmRlZmluZWQsXG4gICAgICBjdXJyZW50RXhwcmVzc2lvbjogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIGluc3RhbmNlQmluZGluZ3MucHVzaChpbnN0YW5jZUJpbmRpbmcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYXZlcnNlQW5kU2V0dXBCaW5kaW5ncyAocm9vdEVsZW1lbnQsIGVsZW1lbnRzVG9CaW5kaW5ncykge1xuICBjb25zdCBpbnN0YW5jZUJpbmRpbmdzID0gW107XG5cbiAgbGV0IHRvcExldmVsQmluZGluZ3M7XG4gIGlmIChlbGVtZW50c1RvQmluZGluZ3Muc2l6ZSA9PT0gMSAmJiAodG9wTGV2ZWxCaW5kaW5ncyA9IGVsZW1lbnRzVG9CaW5kaW5ncy5nZXQoMCkpKSB7XG4gICAgLy8gT3B0aW1pemF0aW9uIGZvciB0aGUgY29tbW9uIGNhc2Ugd2hlcmUgdGhlcmUncyBvbmx5IG9uZSBlbGVtZW50IGFuZCBvbmUgYmluZGluZ1xuICAgIC8vIFNraXAgY3JlYXRpbmcgYSBUcmVlV2Fsa2VyIGVudGlyZWx5IGFuZCBqdXN0IGhhbmRsZSB0aGUgcm9vdCBET00gZWxlbWVudFxuICAgIGFwcGx5QmluZGluZ3ModG9wTGV2ZWxCaW5kaW5ncywgcm9vdEVsZW1lbnQsIGluc3RhbmNlQmluZGluZ3MpO1xuICB9IGVsc2Uge1xuICAgIC8vIHRyYXZlcnNlIGRvbVxuICAgIGNvbnN0IHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKHJvb3RFbGVtZW50LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG5cbiAgICBsZXQgZWxlbWVudCA9IHJvb3RFbGVtZW50O1xuICAgIGxldCBlbGVtZW50SW5kZXggPSAtMTtcbiAgICBkbyB7XG4gICAgICBjb25zdCBiaW5kaW5ncyA9IGVsZW1lbnRzVG9CaW5kaW5ncy5nZXQoKytlbGVtZW50SW5kZXgpO1xuICAgICAgaWYgKGJpbmRpbmdzKSB7XG4gICAgICAgIGFwcGx5QmluZGluZ3MoYmluZGluZ3MsIGVsZW1lbnQsIGluc3RhbmNlQmluZGluZ3MpO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKChlbGVtZW50ID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpKSlcbiAgfVxuXG4gIHJldHVybiBpbnN0YW5jZUJpbmRpbmdzXG59XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbCAodG9rZW5zKSB7XG4gIC8vIEFsbCB0ZW1wbGF0ZXMgYW5kIGJvdW5kIGV4cHJlc3Npb25zIGFyZSB1bmlxdWUgcGVyIHRva2VucyBhcnJheVxuICBjb25zdCB7IHRlbXBsYXRlLCBlbGVtZW50c1RvQmluZGluZ3MgfSA9IGdldEZyb21NYXAocGFyc2VDYWNoZSwgdG9rZW5zLCAoKSA9PiBwYXJzZSh0b2tlbnMpKTtcblxuICAvLyBXaGVuIHdlIHBhcnNlSHRtbCwgd2UgYWx3YXlzIHJldHVybiBhIGZyZXNoIERPTSBpbnN0YW5jZSByZWFkeSB0byBiZSB1cGRhdGVkXG4gIGNvbnN0IGRvbSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICBjb25zdCBpbnN0YW5jZUJpbmRpbmdzID0gdHJhdmVyc2VBbmRTZXR1cEJpbmRpbmdzKGRvbSwgZWxlbWVudHNUb0JpbmRpbmdzKTtcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlRG9tSW5zdGFuY2UgKGV4cHJlc3Npb25zKSB7XG4gICAgcGF0Y2goZXhwcmVzc2lvbnMsIGluc3RhbmNlQmluZGluZ3MpO1xuICAgIHJldHVybiBkb21cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZXdvcmsgKHN0YXRlKSB7XG4gIGNvbnN0IGRvbUluc3RhbmNlcyA9IGdldEZyb21NYXAoZG9tSW5zdGFuY2VzQ2FjaGUsIHN0YXRlLCAoKSA9PiBuZXcgTWFwKCkpO1xuICBsZXQgZG9tSW5zdGFuY2VDYWNoZUtleSA9IHVua2V5ZWRTeW1ib2w7XG5cbiAgZnVuY3Rpb24gaHRtbCAodG9rZW5zLCAuLi5leHByZXNzaW9ucykge1xuICAgIC8vIEVhY2ggdW5pcXVlIGxleGljYWwgdXNhZ2Ugb2YgbWFwKCkgaXMgY29uc2lkZXJlZCB1bmlxdWUgZHVlIHRvIHRoZSBodG1sYGAgdGFnZ2VkIHRlbXBsYXRlIGNhbGwgaXQgbWFrZXMsXG4gICAgLy8gd2hpY2ggaGFzIGxleGljYWxseSB1bmlxdWUgdG9rZW5zLiBUaGUgdW5rZXllZCBzeW1ib2wgaXMganVzdCB1c2VkIGZvciBodG1sYGAgdXNhZ2Ugb3V0c2lkZSBvZiBhIG1hcCgpLlxuICAgIGNvbnN0IGRvbUluc3RhbmNlc0ZvclRva2VucyA9IGdldEZyb21NYXAoZG9tSW5zdGFuY2VzLCB0b2tlbnMsICgpID0+IG5ldyBNYXAoKSk7XG4gICAgY29uc3QgdXBkYXRlRG9tSW5zdGFuY2UgPSBnZXRGcm9tTWFwKGRvbUluc3RhbmNlc0ZvclRva2VucywgZG9tSW5zdGFuY2VDYWNoZUtleSwgKCkgPT4gcGFyc2VIdG1sKHRva2VucykpO1xuXG4gICAgcmV0dXJuIHVwZGF0ZURvbUluc3RhbmNlKGV4cHJlc3Npb25zKSAvLyB1cGRhdGUgd2l0aCBleHByZXNzaW9uc1xuICB9XG5cbiAgZnVuY3Rpb24gbWFwIChhcnJheSwgY2FsbGJhY2ssIGtleUZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsQ2FjaGVLZXkgPSBkb21JbnN0YW5jZUNhY2hlS2V5O1xuICAgICAgZG9tSW5zdGFuY2VDYWNoZUtleSA9IGtleUZ1bmN0aW9uKGl0ZW0pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGl0ZW0sIGluZGV4KVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZG9tSW5zdGFuY2VDYWNoZUtleSA9IG9yaWdpbmFsQ2FjaGVLZXk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7IG1hcCwgaHRtbCB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlciAoY29udGFpbmVyLCBzdGF0ZSwgaGVscGVycywgZXZlbnRzLCBhY3Rpb25zLCByZWZzLCBhYm9ydFNpZ25hbCwgYWN0aW9uQ29udGV4dCwgZmlyc3RSZW5kZXIpIHtcbiAgY29uc3QgeyBsYWJlbFdpdGhTa2luLCB0aXRsZUZvckVtb2ppLCB1bmljb2RlV2l0aFNraW4gfSA9IGhlbHBlcnM7XG4gIGNvbnN0IHsgaHRtbCwgbWFwIH0gPSBjcmVhdGVGcmFtZXdvcmsoc3RhdGUpO1xuXG4gIGZ1bmN0aW9uIGVtb2ppTGlzdCAoZW1vamlzLCBzZWFyY2hNb2RlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gbWFwKGVtb2ppcywgKGVtb2ppLCBpKSA9PiB7XG4gICAgICByZXR1cm4gaHRtbGA8YnV0dG9uIHJvbGU9XCIke3NlYXJjaE1vZGUgPyAnb3B0aW9uJyA6ICdtZW51aXRlbSd9XCIgYXJpYS1zZWxlY3RlZD1cIiR7c2VhcmNoTW9kZSA/IGkgPT09IHN0YXRlLmFjdGl2ZVNlYXJjaEl0ZW0gOiBudWxsfVwiIGFyaWEtbGFiZWw9XCIke2xhYmVsV2l0aFNraW4oZW1vamksIHN0YXRlLmN1cnJlbnRTa2luVG9uZSl9XCIgdGl0bGU9XCIke3RpdGxlRm9yRW1vamkoZW1vamkpfVwiIGNsYXNzPVwiJHtcbiAgICAgICAgICAgICAgICAnZW1vamknICtcbiAgICAgICAgICAgICAgICAoc2VhcmNoTW9kZSAmJiBpID09PSBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtID8gJyBhY3RpdmUnIDogJycpICtcbiAgICAgICAgICAgICAgICAoZW1vamkudW5pY29kZSA/ICcnIDogJyBjdXN0b20tZW1vamknKVxuICAgICAgICAgICAgICB9XCIgaWQ9XCIke2Ake3ByZWZpeH0tJHtlbW9qaS5pZH1gfVwiIHN0eWxlPVwiJHtlbW9qaS51bmljb2RlID8gbnVsbCA6IGAtLWN1c3RvbS1lbW9qaS1iYWNrZ3JvdW5kOiB1cmwoJHtKU09OLnN0cmluZ2lmeShlbW9qaS51cmwpfSlgfVwiPiR7XG4gICAgICAgIGVtb2ppLnVuaWNvZGVcbiAgICAgICAgICA/IHVuaWNvZGVXaXRoU2tpbihlbW9qaSwgc3RhdGUuY3VycmVudFNraW5Ub25lKVxuICAgICAgICAgIDogJydcbiAgICAgIH08L2J1dHRvbj5gXG4gICAgICAvLyBJdCdzIGltcG9ydGFudCBmb3IgdGhlIGNhY2hlIGtleSB0byBiZSB1bmlxdWUgYmFzZWQgb24gdGhlIHByZWZpeCwgYmVjYXVzZSB0aGUgZnJhbWV3b3JrIGNhY2hlcyBiYXNlZCBvbiB0aGVcbiAgICAgIC8vIHVuaXF1ZSB0b2tlbnMgKyBjYWNoZSBrZXksIGFuZCB0aGUgc2FtZSBlbW9qaSBtYXkgYmUgdXNlZCBpbiB0aGUgdGFiIGFzIHdlbGwgYXMgaW4gdGhlIGZhdiBiYXJcbiAgICB9LCBlbW9qaSA9PiBgJHtwcmVmaXh9LSR7ZW1vamkuaWR9YClcbiAgfVxuXG4gIGNvbnN0IHNlY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGh0bWxgPHNlY3Rpb24gZGF0YS1yZWY9XCJyb290RWxlbWVudFwiIGNsYXNzPVwicGlja2VyXCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuaTE4bi5yZWdpb25MYWJlbH1cIiBzdHlsZT1cIiR7c3RhdGUucGlja2VyU3R5bGUgfHwgJyd9XCI+PGRpdiBjbGFzcz1cInBhZC10b3BcIj48L2Rpdj48ZGl2IGNsYXNzPVwic2VhcmNoLXJvd1wiPjxkaXYgY2xhc3M9XCJzZWFyY2gtd3JhcHBlclwiPjxpbnB1dCBpZD1cInNlYXJjaFwiIGNsYXNzPVwic2VhcmNoXCIgdHlwZT1cInNlYXJjaFwiIHJvbGU9XCJjb21ib2JveFwiIGVudGVya2V5aGludD1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiJHtzdGF0ZS5pMThuLnNlYXJjaExhYmVsfVwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cIiR7ISEoc3RhdGUuc2VhcmNoTW9kZSAmJiBzdGF0ZS5jdXJyZW50RW1vamlzLmxlbmd0aCl9XCIgYXJpYS1jb250cm9scz1cInNlYXJjaC1yZXN1bHRzXCIgYXJpYS1kZXNjcmliZWRieT1cInNlYXJjaC1kZXNjcmlwdGlvblwiIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cIiR7c3RhdGUuYWN0aXZlU2VhcmNoSXRlbUlkID8gYGVtby0ke3N0YXRlLmFjdGl2ZVNlYXJjaEl0ZW1JZH1gIDogbnVsbH1cIiBkYXRhLXJlZj1cInNlYXJjaEVsZW1lbnRcIiBkYXRhLW9uLWlucHV0PVwib25TZWFyY2hJbnB1dFwiIGRhdGEtb24ta2V5ZG93bj1cIm9uU2VhcmNoS2V5ZG93blwiPjxsYWJlbCBjbGFzcz1cInNyLW9ubHlcIiBmb3I9XCJzZWFyY2hcIj4ke3N0YXRlLmkxOG4uc2VhcmNoTGFiZWx9PC9sYWJlbD4gPHNwYW4gaWQ9XCJzZWFyY2gtZGVzY3JpcHRpb25cIiBjbGFzcz1cInNyLW9ubHlcIj4ke3N0YXRlLmkxOG4uc2VhcmNoRGVzY3JpcHRpb259PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XCJza2ludG9uZS1idXR0b24td3JhcHBlciAke3N0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWRBZnRlckFuaW1hdGlvbiA/ICdleHBhbmRlZCcgOiAnJ31cIj48YnV0dG9uIGlkPVwic2tpbnRvbmUtYnV0dG9uXCIgY2xhc3M9XCJlbW9qaSAke3N0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQgPyAnaGlkZS1mb2N1cycgOiAnJ31cIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5za2luVG9uZUJ1dHRvbkxhYmVsfVwiIHRpdGxlPVwiJHtzdGF0ZS5za2luVG9uZUJ1dHRvbkxhYmVsfVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJza2ludG9uZS1kZXNjcmlwdGlvblwiIGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCIgYXJpYS1leHBhbmRlZD1cIiR7c3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZH1cIiBhcmlhLWNvbnRyb2xzPVwic2tpbnRvbmUtbGlzdFwiIGRhdGEtb24tY2xpY2s9XCJvbkNsaWNrU2tpblRvbmVCdXR0b25cIj4ke3N0YXRlLnNraW5Ub25lQnV0dG9uVGV4dCB8fCAnJ308L2J1dHRvbj48L2Rpdj48c3BhbiBpZD1cInNraW50b25lLWRlc2NyaXB0aW9uXCIgY2xhc3M9XCJzci1vbmx5XCI+JHtzdGF0ZS5pMThuLnNraW5Ub25lRGVzY3JpcHRpb259PC9zcGFuPjxkaXYgZGF0YS1yZWY9XCJza2luVG9uZURyb3Bkb3duXCIgaWQ9XCJza2ludG9uZS1saXN0XCIgY2xhc3M9XCJza2ludG9uZS1saXN0IGhpZGUtZm9jdXMgJHtzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID8gJycgOiAnaGlkZGVuIG5vLWFuaW1hdGUnfVwiIHN0eWxlPVwidHJhbnNmb3JtOnRyYW5zbGF0ZVkoJHtzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID8gMCA6ICdjYWxjKC0xICogdmFyKC0tbnVtLXNraW50b25lcykgKiB2YXIoLS10b3RhbC1lbW9qaS1zaXplKSknfSlcIiByb2xlPVwibGlzdGJveFwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLmkxOG4uc2tpblRvbmVzTGFiZWx9XCIgYXJpYS1hY3RpdmVkZXNjZW5kYW50PVwic2tpbnRvbmUtJHtzdGF0ZS5hY3RpdmVTa2luVG9uZX1cIiBhcmlhLWhpZGRlbj1cIiR7IXN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWR9XCIgdGFiSW5kZXg9XCItMVwiIGRhdGEtb24tZm9jdXNvdXQ9XCJvblNraW5Ub25lT3B0aW9uc0ZvY3VzT3V0XCIgZGF0YS1vbi1jbGljaz1cIm9uU2tpblRvbmVPcHRpb25zQ2xpY2tcIiBkYXRhLW9uLWtleWRvd249XCJvblNraW5Ub25lT3B0aW9uc0tleWRvd25cIiBkYXRhLW9uLWtleXVwPVwib25Ta2luVG9uZU9wdGlvbnNLZXl1cFwiPiR7XG4gICAgbWFwKHN0YXRlLnNraW5Ub25lcywgKHNraW5Ub25lLCBpKSA9PiB7XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBpZD1cInNraW50b25lLSR7aX1cIiBjbGFzcz1cImVtb2ppICR7aSA9PT0gc3RhdGUuYWN0aXZlU2tpblRvbmUgPyAnYWN0aXZlJyA6ICcnfVwiIGFyaWEtc2VsZWN0ZWQ9XCIke2kgPT09IHN0YXRlLmFjdGl2ZVNraW5Ub25lfVwiIHJvbGU9XCJvcHRpb25cIiB0aXRsZT1cIiR7c3RhdGUuaTE4bi5za2luVG9uZXNbaV19XCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuaTE4bi5za2luVG9uZXNbaV19XCI+JHtza2luVG9uZX08L2Rpdj5gXG4gICAgfSwgc2tpblRvbmUgPT4gc2tpblRvbmUpXG4gICAgICAgIH08L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwibmF2XCIgcm9sZT1cInRhYmxpc3RcIiBzdHlsZT1cImdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoJHtzdGF0ZS5ncm91cHMubGVuZ3RofSwxZnIpXCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuaTE4bi5jYXRlZ29yaWVzTGFiZWx9XCIgZGF0YS1vbi1rZXlkb3duPVwib25OYXZLZXlkb3duXCIgZGF0YS1vbi1jbGljaz1cIm9uTmF2Q2xpY2tcIj4ke1xuICAgICAgICAgICAgbWFwKHN0YXRlLmdyb3VwcywgKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYDxidXR0b24gcm9sZT1cInRhYlwiIGNsYXNzPVwibmF2LWJ1dHRvblwiIGFyaWEtY29udHJvbHM9XCJ0YWItJHtncm91cC5pZH1cIiBhcmlhLWxhYmVsPVwiJHtzdGF0ZS5pMThuLmNhdGVnb3JpZXNbZ3JvdXAubmFtZV19XCIgYXJpYS1zZWxlY3RlZD1cIiR7IXN0YXRlLnNlYXJjaE1vZGUgJiYgc3RhdGUuY3VycmVudEdyb3VwLmlkID09PSBncm91cC5pZH1cIiB0aXRsZT1cIiR7c3RhdGUuaTE4bi5jYXRlZ29yaWVzW2dyb3VwLm5hbWVdfVwiIGRhdGEtZ3JvdXAtaWQ9XCIke2dyb3VwLmlkfVwiPjxkaXYgY2xhc3M9XCJuYXYtZW1vamkgZW1vamlcIj4ke2dyb3VwLmVtb2ppfTwvZGl2PjwvYnV0dG9uPmBcbiAgICAgICAgICAgIH0sIGdyb3VwID0+IGdyb3VwLmlkKVxuICAgICAgICAgIH08L2Rpdj48ZGl2IGNsYXNzPVwiaW5kaWNhdG9yLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCIgc3R5bGU9XCJ0cmFuc2Zvcm06dHJhbnNsYXRlWCgkeygvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoc3RhdGUuaXNSdGwgPyAtMSA6IDEpKSAqIHN0YXRlLmN1cnJlbnRHcm91cEluZGV4ICogMTAwfSUpXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIm1lc3NhZ2UgJHtzdGF0ZS5tZXNzYWdlID8gJycgOiAnZ29uZSd9XCIgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwicG9saXRlXCI+JHtzdGF0ZS5tZXNzYWdlIHx8ICcnfTwvZGl2PjxkaXYgZGF0YS1yZWY9XCJ0YWJwYW5lbEVsZW1lbnRcIiBjbGFzcz1cInRhYnBhbmVsICR7KCFzdGF0ZS5kYXRhYmFzZUxvYWRlZCB8fCBzdGF0ZS5tZXNzYWdlKSA/ICdnb25lJyA6ICcnfVwiIHJvbGU9XCIke3N0YXRlLnNlYXJjaE1vZGUgPyAncmVnaW9uJyA6ICd0YWJwYW5lbCd9XCIgYXJpYS1sYWJlbD1cIiR7c3RhdGUuc2VhcmNoTW9kZSA/IHN0YXRlLmkxOG4uc2VhcmNoUmVzdWx0c0xhYmVsIDogc3RhdGUuaTE4bi5jYXRlZ29yaWVzW3N0YXRlLmN1cnJlbnRHcm91cC5uYW1lXX1cIiBpZD1cIiR7c3RhdGUuc2VhcmNoTW9kZSA/IG51bGwgOiBgdGFiLSR7c3RhdGUuY3VycmVudEdyb3VwLmlkfWB9XCIgdGFiSW5kZXg9XCIwXCIgZGF0YS1vbi1jbGljaz1cIm9uRW1vamlDbGlja1wiPjxkaXYgZGF0YS1hY3Rpb249XCJjYWxjdWxhdGVFbW9qaUdyaWRTdHlsZVwiPiR7XG4gICAgICAgICAgICAgIG1hcChzdGF0ZS5jdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMsIChlbW9qaVdpdGhDYXRlZ29yeSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYDxkaXY+PGRpdiBpZD1cIm1lbnUtbGFiZWwtJHtpfVwiIGNsYXNzPVwiY2F0ZWdvcnkgJHtzdGF0ZS5jdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMubGVuZ3RoID09PSAxICYmIHN0YXRlLmN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllc1swXS5jYXRlZ29yeSA9PT0gJycgPyAnZ29uZScgOiAnJ31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj4ke1xuICAgICAgICAgICAgICAgICAgc3RhdGUuc2VhcmNoTW9kZVxuICAgICAgICAgICAgICAgICAgICA/IHN0YXRlLmkxOG4uc2VhcmNoUmVzdWx0c0xhYmVsXG4gICAgICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgICAgIGVtb2ppV2l0aENhdGVnb3J5LmNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGVtb2ppV2l0aENhdGVnb3J5LmNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0YXRlLmkxOG4uY2F0ZWdvcmllcy5jdXN0b21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLmkxOG4uY2F0ZWdvcmllc1tzdGF0ZS5jdXJyZW50R3JvdXAubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH08L2Rpdj48ZGl2IGNsYXNzPVwiZW1vamktbWVudSAke2kgIT09IDAgJiYgIXN0YXRlLnNlYXJjaE1vZGUgJiYgc3RhdGUuY3VycmVudEdyb3VwLmlkID09PSAtMSA/ICd2aXNpYmlsaXR5LWF1dG8nIDogJyd9XCIgc3R5bGU9XCIke2AtLW51bS1yb3dzOiAke01hdGguY2VpbChlbW9qaVdpdGhDYXRlZ29yeS5lbW9qaXMubGVuZ3RoIC8gc3RhdGUubnVtQ29sdW1ucyl9YH1cIiBkYXRhLWFjdGlvbj1cInVwZGF0ZU9uSW50ZXJzZWN0aW9uXCIgcm9sZT1cIiR7c3RhdGUuc2VhcmNoTW9kZSA/ICdsaXN0Ym94JyA6ICdtZW51J31cIiBhcmlhLWxhYmVsbGVkYnk9XCJtZW51LWxhYmVsLSR7aX1cIiBpZD1cIiR7c3RhdGUuc2VhcmNoTW9kZSA/ICdzZWFyY2gtcmVzdWx0cycgOiBudWxsfVwiPiR7XG4gICAgICAgICAgICAgIGVtb2ppTGlzdChlbW9qaVdpdGhDYXRlZ29yeS5lbW9qaXMsIHN0YXRlLnNlYXJjaE1vZGUsIC8qIHByZWZpeCAqLyAnZW1vJylcbiAgICAgICAgICAgIH08L2Rpdj48L2Rpdj5gXG4gICAgICAgICAgICAgIH0sIGVtb2ppV2l0aENhdGVnb3J5ID0+IGVtb2ppV2l0aENhdGVnb3J5LmNhdGVnb3J5KVxuICAgICAgICAgICAgfTwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJmYXZvcml0ZXMgb25zY3JlZW4gZW1vamktbWVudSAke3N0YXRlLm1lc3NhZ2UgPyAnZ29uZScgOiAnJ31cIiByb2xlPVwibWVudVwiIGFyaWEtbGFiZWw9XCIke3N0YXRlLmkxOG4uZmF2b3JpdGVzTGFiZWx9XCIgZGF0YS1vbi1jbGljaz1cIm9uRW1vamlDbGlja1wiPiR7XG4gICAgICAgICAgICBlbW9qaUxpc3Qoc3RhdGUuY3VycmVudEZhdm9yaXRlcywgLyogc2VhcmNoTW9kZSAqLyBmYWxzZSwgLyogcHJlZml4ICovICdmYXYnKVxuICAgICAgICAgIH08L2Rpdj48YnV0dG9uIGRhdGEtcmVmPVwiYmFzZWxpbmVFbW9qaVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cImFicy1wb3MgaGlkZGVuIGVtb2ppIGJhc2VsaW5lLWVtb2ppXCI+XHVEODNEXHVERTAwPC9idXR0b24+PC9zZWN0aW9uPmBcbiAgfTtcblxuICBjb25zdCByb290RG9tID0gc2VjdGlvbigpO1xuXG4gIC8vIGhlbHBlciBmb3IgdHJhdmVyc2luZyB0aGUgZG9tLCBmaW5kaW5nIGVsZW1lbnRzIGJ5IGFuIGF0dHJpYnV0ZSwgYW5kIGdldHRpbmcgdGhlIGF0dHJpYnV0ZSB2YWx1ZVxuICBjb25zdCBmb3JFbGVtZW50V2l0aEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGVOYW1lLCBjYWxsYmFjaykgPT4ge1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYCkpIHtcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGZpcnN0UmVuZGVyKSB7IC8vIG5vdCBhIHJlLXJlbmRlclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290RG9tKTtcblxuICAgIC8vIHdlIG9ubHkgYmluZCBldmVudHMvcmVmcyBvbmNlIC0gdGhlcmUgaXMgbm8gbmVlZCB0byBmaW5kIHRoZW0gYWdhaW4gZ2l2ZW4gdGhpcyBjb21wb25lbnQgc3RydWN0dXJlXG5cbiAgICAvLyBiaW5kIGV2ZW50c1xuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIFsnY2xpY2snLCAnZm9jdXNvdXQnLCAnaW5wdXQnLCAna2V5ZG93bicsICdrZXl1cCddKSB7XG4gICAgICBmb3JFbGVtZW50V2l0aEF0dHJpYnV0ZShgZGF0YS1vbi0ke2V2ZW50TmFtZX1gLCAoZWxlbWVudCwgbGlzdGVuZXJOYW1lKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50c1tsaXN0ZW5lck5hbWVdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZpbmQgcmVmc1xuICAgIGZvckVsZW1lbnRXaXRoQXR0cmlidXRlKCdkYXRhLXJlZicsIChlbGVtZW50LCByZWYpID0+IHtcbiAgICAgIHJlZnNbcmVmXSA9IGVsZW1lbnQ7XG4gICAgfSk7XG5cbiAgICAvLyBkZXN0cm95L2Fib3J0IGxvZ2ljXG4gICAgYWJvcnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQocm9vdERvbSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBzZXQgdXAgYWN0aW9ucyAtIHRoZXNlIGFyZSByZS1ib3VuZCBvbiBldmVyeSByZW5kZXJcbiAgZm9yRWxlbWVudFdpdGhBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJywgKGVsZW1lbnQsIGFjdGlvbikgPT4ge1xuICAgIGxldCBib3VuZEFjdGlvbnMgPSBhY3Rpb25Db250ZXh0LmdldChhY3Rpb24pO1xuICAgIGlmICghYm91bmRBY3Rpb25zKSB7XG4gICAgICBhY3Rpb25Db250ZXh0LnNldChhY3Rpb24sIChib3VuZEFjdGlvbnMgPSBuZXcgV2Vha1NldCgpKSk7XG4gICAgfVxuXG4gICAgLy8gYXZvaWQgYXBwbHlpbmcgdGhlIHNhbWUgYWN0aW9uIHRvIHRoZSBzYW1lIGVsZW1lbnQgbXVsdGlwbGUgdGltZXNcbiAgICBpZiAoIWJvdW5kQWN0aW9ucy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGJvdW5kQWN0aW9ucy5hZGQoZWxlbWVudCk7XG4gICAgICBhY3Rpb25zW2FjdGlvbl0oZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IHFNID0gdHlwZW9mIHF1ZXVlTWljcm90YXNrID09PSAnZnVuY3Rpb24nID8gcXVldWVNaWNyb3Rhc2sgOiBjYWxsYmFjayA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGNhbGxiYWNrKTtcblxuZnVuY3Rpb24gY3JlYXRlU3RhdGUgKGFib3J0U2lnbmFsKSB7XG4gIGxldCBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgbGV0IGN1cnJlbnRPYnNlcnZlcjtcblxuICBjb25zdCBwcm9wc1RvT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuICBjb25zdCBkaXJ0eU9ic2VydmVycyA9IG5ldyBTZXQoKTtcblxuICBsZXQgcXVldWVkO1xuXG4gIGNvbnN0IGZsdXNoID0gKCkgPT4ge1xuICAgIGlmIChkZXN0cm95ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBvYnNlcnZlcnNUb1J1biA9IFsuLi5kaXJ0eU9ic2VydmVyc107XG4gICAgZGlydHlPYnNlcnZlcnMuY2xlYXIoKTsgLy8gY2xlYXIgYmVmb3JlIHJ1bm5pbmcgdG8gZm9yY2UgYW55IG5ldyB1cGRhdGVzIHRvIHJ1biBpbiBhbm90aGVyIHRpY2sgb2YgdGhlIGxvb3BcbiAgICB0cnkge1xuICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiBvYnNlcnZlcnNUb1J1bikge1xuICAgICAgICBvYnNlcnZlcigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBxdWV1ZWQgPSBmYWxzZTtcbiAgICAgIGlmIChkaXJ0eU9ic2VydmVycy5zaXplKSB7IC8vIG5ldyB1cGRhdGVzLCBxdWV1ZSBhbm90aGVyIG9uZVxuICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICBxTShmbHVzaCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0YXRlID0gbmV3IFByb3h5KHt9LCB7XG4gICAgZ2V0ICh0YXJnZXQsIHByb3ApIHtcbiAgICAgIGlmIChjdXJyZW50T2JzZXJ2ZXIpIHtcbiAgICAgICAgbGV0IG9ic2VydmVycyA9IHByb3BzVG9PYnNlcnZlcnMuZ2V0KHByb3ApO1xuICAgICAgICBpZiAoIW9ic2VydmVycykge1xuICAgICAgICAgIG9ic2VydmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICBwcm9wc1RvT2JzZXJ2ZXJzLnNldChwcm9wLCBvYnNlcnZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVycy5hZGQoY3VycmVudE9ic2VydmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXRbcHJvcF1cbiAgICB9LFxuICAgIHNldCAodGFyZ2V0LCBwcm9wLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHRhcmdldFtwcm9wXSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnN0IG9ic2VydmVycyA9IHByb3BzVG9PYnNlcnZlcnMuZ2V0KHByb3ApO1xuICAgICAgICBpZiAob2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiBvYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIGRpcnR5T2JzZXJ2ZXJzLmFkZChvYnNlcnZlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghcXVldWVkKSB7XG4gICAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcU0oZmx1c2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNyZWF0ZUVmZmVjdCA9IChjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IHJ1bm5hYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3Qgb2xkT2JzZXJ2ZXIgPSBjdXJyZW50T2JzZXJ2ZXI7XG4gICAgICBjdXJyZW50T2JzZXJ2ZXIgPSBydW5uYWJsZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjdXJyZW50T2JzZXJ2ZXIgPSBvbGRPYnNlcnZlcjtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBydW5uYWJsZSgpXG4gIH07XG5cbiAgLy8gZGVzdHJveSBsb2dpY1xuICBhYm9ydFNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcbiAgICBkZXN0cm95ZWQgPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHN0YXRlLFxuICAgIGNyZWF0ZUVmZmVjdFxuICB9XG59XG5cbi8vIENvbXBhcmUgdHdvIGFycmF5cywgd2l0aCBhIGZ1bmN0aW9uIGNhbGxlZCBvbiBlYWNoIGl0ZW0gaW4gdGhlIHR3byBhcnJheXMgdGhhdCByZXR1cm5zIHRydWUgaWYgdGhlIGl0ZW1zIGFyZSBlcXVhbFxuZnVuY3Rpb24gYXJyYXlzQXJlRXF1YWxCeUZ1bmN0aW9uIChsZWZ0LCByaWdodCwgYXJlRXF1YWxGdW5jKSB7XG4gIGlmIChsZWZ0Lmxlbmd0aCAhPT0gcmlnaHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWZ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFhcmVFcXVhbEZ1bmMobGVmdFtpXSwgcmlnaHRbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuY29uc3QgaW50ZXJzZWN0aW9uT2JzZXJ2ZXJDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGludGVyc2VjdGlvbk9ic2VydmVyQWN0aW9uIChub2RlLCBhYm9ydFNpZ25hbCwgbGlzdGVuZXIpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAge1xuICAgIC8vIFRoZSBzY3JvbGwgcm9vdCBpcyBhbHdheXMgYC50YWJwYW5lbGBcbiAgICBjb25zdCByb290ID0gbm9kZS5jbG9zZXN0KCcudGFicGFuZWwnKTtcblxuICAgIGxldCBvYnNlcnZlciA9IGludGVyc2VjdGlvbk9ic2VydmVyQ2FjaGUuZ2V0KHJvb3QpO1xuICAgIGlmICghb2JzZXJ2ZXIpIHtcbiAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhpcyB3aXRoIHRoZSBjb250ZW50dmlzaWJpbGl0eWF1dG9zdGF0ZWNoYW5nZSBldmVudCB3aGVuIGFsbCBzdXBwb3J0ZWQgYnJvd3NlcnMgc3VwcG9ydCBpdC5cbiAgICAgIC8vIEZvciBub3cgd2UgdXNlIEludGVyc2VjdGlvbk9ic2VydmVyIGJlY2F1c2UgaXQgaGFzIGJldHRlciBjcm9zcy1icm93c2VyIHN1cHBvcnQsIGFuZCBpdCB3b3VsZCBiZSBiYWQgZm9yXG4gICAgICAvLyBvbGQgU2FmYXJpIHZlcnNpb25zIGlmIHRoZXkgZWFnZXJseSBkb3dubG9hZGVkIGFsbCBjdXN0b20gZW1vamkgYWxsIGF0IG9uY2UuXG4gICAgICBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihsaXN0ZW5lciwge1xuICAgICAgICByb290LFxuICAgICAgICAvLyB0cmlnZ2VyIGlmIHdlIGFyZSAxLzIgc2Nyb2xsIGNvbnRhaW5lciBoZWlnaHQgYXdheSBzbyB0aGF0IHRoZSBpbWFnZXMgbG9hZCBhIGJpdCBxdWlja2VyIHdoaWxlIHNjcm9sbGluZ1xuICAgICAgICByb290TWFyZ2luOiAnNTAlIDBweCA1MCUgMHB4JyxcbiAgICAgICAgLy8gdHJpZ2dlciBpZiBhbnkgcGFydCBvZiB0aGUgZW1vamkgZ3JpZCBpcyBpbnRlcnNlY3RpbmdcbiAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICB9KTtcblxuICAgICAgLy8gYXZvaWQgY3JlYXRpbmcgYSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgZm9yIGV2ZXJ5IGNhdGVnb3J5OyBqdXN0IHVzZSBvbmUgZm9yIHRoZSB3aG9sZSByb290XG4gICAgICBpbnRlcnNlY3Rpb25PYnNlcnZlckNhY2hlLnNldChyb290LCBvYnNlcnZlcik7XG5cbiAgICAgIC8vIGFzc3VtZSB0aGF0IHRoZSBhYm9ydFNpZ25hbCBpcyBhbHdheXMgdGhlIHNhbWUgZm9yIHRoaXMgcm9vdCBub2RlOyBqdXN0IGFkZCBvbmUgZXZlbnQgbGlzdGVuZXJcbiAgICAgIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUpO1xuICB9XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCxuby1sYWJlbHMsbm8taW5uZXItZGVjbGFyYXRpb25zICovXG5cbi8vIGNvbnN0YW50c1xuY29uc3QgRU1QVFlfQVJSQVkgPSBbXTtcblxuY29uc3QgeyBhc3NpZ24gfSA9IE9iamVjdDtcblxuZnVuY3Rpb24gY3JlYXRlUm9vdCAoc2hhZG93Um9vdCwgcHJvcHMpIHtcbiAgY29uc3QgcmVmcyA9IHt9O1xuICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IGFib3J0U2lnbmFsID0gYWJvcnRDb250cm9sbGVyLnNpZ25hbDtcbiAgY29uc3QgeyBzdGF0ZSwgY3JlYXRlRWZmZWN0IH0gPSBjcmVhdGVTdGF0ZShhYm9ydFNpZ25hbCk7XG4gIGNvbnN0IGFjdGlvbkNvbnRleHQgPSBuZXcgTWFwKCk7XG5cbiAgLy8gaW5pdGlhbCBzdGF0ZVxuICBhc3NpZ24oc3RhdGUsIHtcbiAgICBza2luVG9uZUVtb2ppOiB1bmRlZmluZWQsXG4gICAgaTE4bjogdW5kZWZpbmVkLFxuICAgIGRhdGFiYXNlOiB1bmRlZmluZWQsXG4gICAgY3VzdG9tRW1vamk6IHVuZGVmaW5lZCxcbiAgICBjdXN0b21DYXRlZ29yeVNvcnRpbmc6IHVuZGVmaW5lZCxcbiAgICBlbW9qaVZlcnNpb246IHVuZGVmaW5lZFxuICB9KTtcblxuICAvLyBwdWJsaWMgcHJvcHNcbiAgYXNzaWduKHN0YXRlLCBwcm9wcyk7XG5cbiAgLy8gcHJpdmF0ZSBwcm9wc1xuICBhc3NpZ24oc3RhdGUsIHtcbiAgICBpbml0aWFsTG9hZDogdHJ1ZSxcbiAgICBjdXJyZW50RW1vamlzOiBbXSxcbiAgICBjdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXM6IFtdLFxuICAgIHJhd1NlYXJjaFRleHQ6ICcnLFxuICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgIHNlYXJjaE1vZGU6IGZhbHNlLFxuICAgIGFjdGl2ZVNlYXJjaEl0ZW06IC0xLFxuICAgIG1lc3NhZ2U6IHVuZGVmaW5lZCxcbiAgICBza2luVG9uZVBpY2tlckV4cGFuZGVkOiBmYWxzZSxcbiAgICBza2luVG9uZVBpY2tlckV4cGFuZGVkQWZ0ZXJBbmltYXRpb246IGZhbHNlLFxuICAgIGN1cnJlbnRTa2luVG9uZTogMCxcbiAgICBhY3RpdmVTa2luVG9uZTogMCxcbiAgICBza2luVG9uZUJ1dHRvblRleHQ6IHVuZGVmaW5lZCxcbiAgICBwaWNrZXJTdHlsZTogdW5kZWZpbmVkLFxuICAgIHNraW5Ub25lQnV0dG9uTGFiZWw6ICcnLFxuICAgIHNraW5Ub25lczogW10sXG4gICAgY3VycmVudEZhdm9yaXRlczogW10sXG4gICAgZGVmYXVsdEZhdm9yaXRlRW1vamlzOiB1bmRlZmluZWQsXG4gICAgbnVtQ29sdW1uczogREVGQVVMVF9OVU1fQ09MVU1OUyxcbiAgICBpc1J0bDogZmFsc2UsXG4gICAgY3VycmVudEdyb3VwSW5kZXg6IDAsXG4gICAgZ3JvdXBzOiBncm91cHMsXG4gICAgZGF0YWJhc2VMb2FkZWQ6IGZhbHNlLFxuICAgIGFjdGl2ZVNlYXJjaEl0ZW1JZDogdW5kZWZpbmVkXG4gIH0pO1xuXG4gIC8vXG4gIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBncm91cCBiYXNlZCBvbiB0aGUgY3VycmVudEdyb3VwSW5kZXhcbiAgLy9cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUuY3VycmVudEdyb3VwICE9PSBzdGF0ZS5ncm91cHNbc3RhdGUuY3VycmVudEdyb3VwSW5kZXhdKSB7XG4gICAgICBzdGF0ZS5jdXJyZW50R3JvdXAgPSBzdGF0ZS5ncm91cHNbc3RhdGUuY3VycmVudEdyb3VwSW5kZXhdO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9cbiAgLy8gVXRpbHMvaGVscGVyc1xuICAvL1xuXG4gIGNvbnN0IGZvY3VzID0gaWQgPT4ge1xuICAgIHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoaWQpLmZvY3VzKCk7XG4gIH07XG5cbiAgY29uc3QgZW1vamlUb0RvbU5vZGUgPSBlbW9qaSA9PiBzaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKGBlbW8tJHtlbW9qaS5pZH1gKTtcblxuICAvLyBmaXJlIGEgY3VzdG9tIGV2ZW50IHRoYXQgY3Jvc3NlcyB0aGUgc2hhZG93IGJvdW5kYXJ5XG4gIGNvbnN0IGZpcmVFdmVudCA9IChuYW1lLCBkZXRhaWwpID0+IHtcbiAgICByZWZzLnJvb3RFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgIGRldGFpbCxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjb21wb3NlZDogdHJ1ZVxuICAgIH0pKTtcbiAgfTtcblxuICAvL1xuICAvLyBDb21wYXJpc29uIHV0aWxzXG4gIC8vXG5cbiAgY29uc3QgY29tcGFyZUVtb2ppQXJyYXlzID0gKGEsIGIpID0+IGEuaWQgPT09IGIuaWQ7XG5cbiAgY29uc3QgY29tcGFyZUN1cnJlbnRFbW9qaXNXaXRoQ2F0ZWdvcmllcyA9IChhLCBiKSA9PiB7XG4gICAgY29uc3QgeyBjYXRlZ29yeTogYUNhdGVnb3J5LCBlbW9qaXM6IGFFbW9qaXMgfSA9IGE7XG4gICAgY29uc3QgeyBjYXRlZ29yeTogYkNhdGVnb3J5LCBlbW9qaXM6IGJFbW9qaXMgfSA9IGI7XG5cbiAgICBpZiAoYUNhdGVnb3J5ICE9PSBiQ2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiBhcnJheXNBcmVFcXVhbEJ5RnVuY3Rpb24oYUVtb2ppcywgYkVtb2ppcywgY29tcGFyZUVtb2ppQXJyYXlzKVxuICB9O1xuXG4gIC8vXG4gIC8vIFVwZGF0ZSB1dGlscyB0byBhdm9pZCBleGNlc3NpdmUgcmUtcmVuZGVyc1xuICAvL1xuXG4gIC8vIGF2b2lkIGV4Y2Vzc2l2ZSByZS1yZW5kZXJzIGJ5IGNoZWNraW5nIHRoZSB2YWx1ZSBiZWZvcmUgc2V0dGluZ1xuICBjb25zdCB1cGRhdGVDdXJyZW50RW1vamlzID0gKG5ld0Vtb2ppcykgPT4ge1xuICAgIGlmICghYXJyYXlzQXJlRXF1YWxCeUZ1bmN0aW9uKHN0YXRlLmN1cnJlbnRFbW9qaXMsIG5ld0Vtb2ppcywgY29tcGFyZUVtb2ppQXJyYXlzKSkge1xuICAgICAgc3RhdGUuY3VycmVudEVtb2ppcyA9IG5ld0Vtb2ppcztcbiAgICB9XG4gIH07XG5cbiAgLy8gYXZvaWQgZXhjZXNzaXZlIHJlLXJlbmRlcnNcbiAgY29uc3QgdXBkYXRlU2VhcmNoTW9kZSA9IChuZXdTZWFyY2hNb2RlKSA9PiB7XG4gICAgaWYgKHN0YXRlLnNlYXJjaE1vZGUgIT09IG5ld1NlYXJjaE1vZGUpIHtcbiAgICAgIHN0YXRlLnNlYXJjaE1vZGUgPSBuZXdTZWFyY2hNb2RlO1xuICAgIH1cbiAgfTtcblxuICAvLyBhdm9pZCBleGNlc3NpdmUgcmUtcmVuZGVyc1xuICBjb25zdCB1cGRhdGVDdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMgPSAobmV3RW1vamlzV2l0aENhdGVnb3JpZXMpID0+IHtcbiAgICBpZiAoIWFycmF5c0FyZUVxdWFsQnlGdW5jdGlvbihzdGF0ZS5jdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMsIG5ld0Vtb2ppc1dpdGhDYXRlZ29yaWVzLCBjb21wYXJlQ3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzKSkge1xuICAgICAgc3RhdGUuY3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzID0gbmV3RW1vamlzV2l0aENhdGVnb3JpZXM7XG4gICAgfVxuICB9O1xuXG4gIC8vIEhlbHBlcnMgdXNlZCBieSBQaWNrZXJUZW1wbGF0ZVxuXG4gIGNvbnN0IHVuaWNvZGVXaXRoU2tpbiA9IChlbW9qaSwgY3VycmVudFNraW5Ub25lKSA9PiAoXG4gICAgKGN1cnJlbnRTa2luVG9uZSAmJiBlbW9qaS5za2lucyAmJiBlbW9qaS5za2luc1tjdXJyZW50U2tpblRvbmVdKSB8fCBlbW9qaS51bmljb2RlXG4gICk7XG5cbiAgY29uc3QgbGFiZWxXaXRoU2tpbiA9IChlbW9qaSwgY3VycmVudFNraW5Ub25lKSA9PiAoXG4gICAgdW5pcShbXG4gICAgICAoZW1vamkubmFtZSB8fCB1bmljb2RlV2l0aFNraW4oZW1vamksIGN1cnJlbnRTa2luVG9uZSkpLFxuICAgICAgZW1vamkuYW5ub3RhdGlvbixcbiAgICAgIC4uLihlbW9qaS5zaG9ydGNvZGVzIHx8IEVNUFRZX0FSUkFZKVxuICAgIF0uZmlsdGVyKEJvb2xlYW4pKS5qb2luKCcsICcpXG4gICk7XG5cbiAgY29uc3QgdGl0bGVGb3JFbW9qaSA9IChlbW9qaSkgPT4gKFxuICAgIGVtb2ppLmFubm90YXRpb24gfHwgKGVtb2ppLnNob3J0Y29kZXMgfHwgRU1QVFlfQVJSQVkpLmpvaW4oJywgJylcbiAgKTtcblxuICBjb25zdCBoZWxwZXJzID0ge1xuICAgIGxhYmVsV2l0aFNraW4sIHRpdGxlRm9yRW1vamksIHVuaWNvZGVXaXRoU2tpblxuICB9O1xuICBjb25zdCBldmVudHMgPSB7XG4gICAgb25DbGlja1NraW5Ub25lQnV0dG9uLFxuICAgIG9uRW1vamlDbGljayxcbiAgICBvbk5hdkNsaWNrLFxuICAgIG9uTmF2S2V5ZG93bixcbiAgICBvblNlYXJjaEtleWRvd24sXG4gICAgb25Ta2luVG9uZU9wdGlvbnNDbGljayxcbiAgICBvblNraW5Ub25lT3B0aW9uc0ZvY3VzT3V0LFxuICAgIG9uU2tpblRvbmVPcHRpb25zS2V5ZG93bixcbiAgICBvblNraW5Ub25lT3B0aW9uc0tleXVwLFxuICAgIG9uU2VhcmNoSW5wdXRcbiAgfTtcbiAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICBjYWxjdWxhdGVFbW9qaUdyaWRTdHlsZSxcbiAgICB1cGRhdGVPbkludGVyc2VjdGlvblxuICB9O1xuXG4gIGxldCBmaXJzdFJlbmRlciA9IHRydWU7XG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVuZGVyKHNoYWRvd1Jvb3QsIHN0YXRlLCBoZWxwZXJzLCBldmVudHMsIGFjdGlvbnMsIHJlZnMsIGFib3J0U2lnbmFsLCBhY3Rpb25Db250ZXh0LCBmaXJzdFJlbmRlcik7XG4gICAgZmlyc3RSZW5kZXIgPSBmYWxzZTtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gRGV0ZXJtaW5lIHRoZSBlbW9qaSBzdXBwb3J0IGxldmVsIChpbiByZXF1ZXN0SWRsZUNhbGxiYWNrKVxuICAvL1xuXG4gIC8vIG1vdW50IGxvZ2ljXG4gIGlmICghc3RhdGUuZW1vamlWZXJzaW9uKSB7XG4gICAgZGV0ZWN0RW1vamlTdXBwb3J0TGV2ZWwoKS50aGVuKGxldmVsID0+IHtcbiAgICAgIC8vIENhbid0IGFjdHVhbGx5IHRlc3QgZW1vamkgc3VwcG9ydCBpbiBKZXN0L1ZpdGVzdC9KU0RvbSwgZW1vamkgbmV2ZXIgcmVuZGVyIGluIGNvbG9yIGluIENhaXJvXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKCFsZXZlbCkge1xuICAgICAgICBzdGF0ZS5tZXNzYWdlID0gc3RhdGUuaTE4bi5lbW9qaVVuc3VwcG9ydGVkTWVzc2FnZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vXG4gIC8vIFNldCBvciB1cGRhdGUgdGhlIGRhdGFiYXNlIG9iamVjdFxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gc2hvdyBhIExvYWRpbmcgbWVzc2FnZSBpZiBpdCB0YWtlcyBhIGxvbmcgdGltZSwgb3Igc2hvdyBhbiBlcnJvciBpZiB0aGVyZSdzIGEgbmV0d29yay9JREIgZXJyb3JcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEYXRhYmFzZUxvYWRpbmcgKCkge1xuICAgICAgbGV0IHNob3dpbmdMb2FkaW5nTWVzc2FnZSA9IGZhbHNlO1xuICAgICAgY29uc3QgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93aW5nTG9hZGluZ01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5tZXNzYWdlID0gc3RhdGUuaTE4bi5sb2FkaW5nTWVzc2FnZTtcbiAgICAgIH0sIFRJTUVPVVRfQkVGT1JFX0xPQURJTkdfTUVTU0FHRSk7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBzdGF0ZS5kYXRhYmFzZS5yZWFkeSgpO1xuICAgICAgICBzdGF0ZS5kYXRhYmFzZUxvYWRlZCA9IHRydWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHN0YXRlLm1lc3NhZ2UgPSBzdGF0ZS5pMThuLm5ldHdvcmtFcnJvck1lc3NhZ2U7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICAgIGlmIChzaG93aW5nTG9hZGluZ01lc3NhZ2UpIHsgLy8gU2VlbXMgc2FmZXIgdGhhbiBjaGVja2luZyB0aGUgaTE4biBzdHJpbmcsIHdoaWNoIG1heSBjaGFuZ2VcbiAgICAgICAgICBzaG93aW5nTG9hZGluZ01lc3NhZ2UgPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS5tZXNzYWdlID0gJyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5kYXRhYmFzZSkge1xuICAgICAgLyogbm8gYXdhaXQgKi9cbiAgICAgIGhhbmRsZURhdGFiYXNlTG9hZGluZygpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9cbiAgLy8gR2xvYmFsIHN0eWxlcyBmb3IgdGhlIGVudGlyZSBwaWNrZXJcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLnBpY2tlclN0eWxlID0gYFxuICAgICAgLS1udW0tZ3JvdXBzOiAke3N0YXRlLmdyb3Vwcy5sZW5ndGh9OyBcbiAgICAgIC0taW5kaWNhdG9yLW9wYWNpdHk6ICR7c3RhdGUuc2VhcmNoTW9kZSA/IDAgOiAxfTsgXG4gICAgICAtLW51bS1za2ludG9uZXM6ICR7TlVNX1NLSU5fVE9ORVN9O2A7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIFNldCBvciB1cGRhdGUgdGhlIGN1c3RvbUVtb2ppXG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUuY3VzdG9tRW1vamkgJiYgc3RhdGUuZGF0YWJhc2UpIHtcbiAgICAgIHVwZGF0ZUN1c3RvbUVtb2ppKCk7IC8vIHJlLXJ1biB3aGVuZXZlciBjdXN0b21FbW9qaSBjaGFuZ2VcbiAgICB9XG4gIH0pO1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmN1c3RvbUVtb2ppICYmIHN0YXRlLmN1c3RvbUVtb2ppLmxlbmd0aCkge1xuICAgICAgaWYgKHN0YXRlLmdyb3VwcyAhPT0gYWxsR3JvdXBzKSB7IC8vIGRvbid0IHVwZGF0ZSB1bm5lY2Vzc2FyaWx5XG4gICAgICAgIHN0YXRlLmdyb3VwcyA9IGFsbEdyb3VwcztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0YXRlLmdyb3VwcyAhPT0gZ3JvdXBzKSB7XG4gICAgICBpZiAoc3RhdGUuY3VycmVudEdyb3VwSW5kZXgpIHtcbiAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgZ3JvdXAgaXMgYW55dGhpbmcgb3RoZXIgdGhhbiBcImN1c3RvbVwiICh3aGljaCBpcyBmaXJzdCksIGRlY3JlbWVudC5cbiAgICAgICAgLy8gVGhpcyBmaXhlcyB0aGUgb2RkIGNhc2Ugd2hlcmUgeW91IHNldCBjdXN0b21FbW9qaSwgdGhlbiBwaWNrIGEgY2F0ZWdvcnksIHRoZW4gdW5zZXQgY3VzdG9tRW1vamlcbiAgICAgICAgc3RhdGUuY3VycmVudEdyb3VwSW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmdyb3VwcyA9IGdyb3VwcztcbiAgICB9XG4gIH0pO1xuXG4gIC8vXG4gIC8vIFNldCBvciB1cGRhdGUgdGhlIHByZWZlcnJlZCBza2luIHRvbmVcbiAgLy9cblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByZWZlcnJlZFNraW5Ub25lICgpIHtcbiAgICAgIGlmIChzdGF0ZS5kYXRhYmFzZUxvYWRlZCkge1xuICAgICAgICBzdGF0ZS5jdXJyZW50U2tpblRvbmUgPSBhd2FpdCBzdGF0ZS5kYXRhYmFzZS5nZXRQcmVmZXJyZWRTa2luVG9uZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIG5vIGF3YWl0ICovIHVwZGF0ZVByZWZlcnJlZFNraW5Ub25lKCk7XG4gIH0pO1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdGUuc2tpblRvbmVzID0gQXJyYXkoTlVNX1NLSU5fVE9ORVMpLmZpbGwoKS5tYXAoKF8sIGkpID0+IGFwcGx5U2tpblRvbmUoc3RhdGUuc2tpblRvbmVFbW9qaSwgaSkpO1xuICB9KTtcblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLnNraW5Ub25lQnV0dG9uVGV4dCA9IHN0YXRlLnNraW5Ub25lc1tzdGF0ZS5jdXJyZW50U2tpblRvbmVdO1xuICB9KTtcblxuICBjcmVhdGVFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLnNraW5Ub25lQnV0dG9uTGFiZWwgPSBzdGF0ZS5pMThuLnNraW5Ub25lTGFiZWwucmVwbGFjZSgne3NraW5Ub25lfScsIHN0YXRlLmkxOG4uc2tpblRvbmVzW3N0YXRlLmN1cnJlbnRTa2luVG9uZV0pO1xuICB9KTtcblxuICAvL1xuICAvLyBTZXQgb3IgdXBkYXRlIHRoZSBmYXZvcml0ZXMgZW1vamlzXG4gIC8vXG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVEZWZhdWx0RmF2b3JpdGVFbW9qaXMgKCkge1xuICAgICAgY29uc3QgeyBkYXRhYmFzZSB9ID0gc3RhdGU7XG4gICAgICBjb25zdCBmYXZzID0gKGF3YWl0IFByb21pc2UuYWxsKE1PU1RfQ09NTU9OTFlfVVNFRF9FTU9KSS5tYXAodW5pY29kZSA9PiAoXG4gICAgICAgIGRhdGFiYXNlLmdldEVtb2ppQnlVbmljb2RlT3JOYW1lKHVuaWNvZGUpXG4gICAgICApKSkpLmZpbHRlcihCb29sZWFuKTsgLy8gZmlsdGVyIGJlY2F1c2UgaW4gSmVzdC9WaXRlc3QgdGVzdHMgd2UgZG9uJ3QgaGF2ZSBhbGwgdGhlIGVtb2ppIGluIHRoZSBEQlxuICAgICAgc3RhdGUuZGVmYXVsdEZhdm9yaXRlRW1vamlzID0gZmF2cztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZGF0YWJhc2VMb2FkZWQpIHtcbiAgICAgIC8qIG5vIGF3YWl0ICovIHVwZGF0ZURlZmF1bHRGYXZvcml0ZUVtb2ppcygpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tRW1vamkgKCkge1xuICAgIC8vIENlcnRhaW4gZWZmZWN0cyBoYXZlIGFuIGltcGxpY2l0IGRlcGVuZGVuY3kgb24gY3VzdG9tRW1vamkgc2luY2UgaXQgYWZmZWN0cyB0aGUgZGF0YWJhc2VcbiAgICAvLyBHZXR0aW5nIGl0IGhlcmUgb24gdGhlIHN0YXRlIGVuc3VyZXMgdGhpcyBlZmZlY3QgcmUtcnVucyB3aGVuIGN1c3RvbUVtb2ppIGNoYW5nZS5cbiAgICBjb25zdCB7IGN1c3RvbUVtb2ppLCBkYXRhYmFzZSB9ID0gc3RhdGU7XG4gICAgY29uc3QgZGF0YWJhc2VDdXN0b21FbW9qaSA9IGN1c3RvbUVtb2ppIHx8IEVNUFRZX0FSUkFZO1xuICAgIGlmIChkYXRhYmFzZS5jdXN0b21FbW9qaSAhPT0gZGF0YWJhc2VDdXN0b21FbW9qaSkge1xuICAgICAgLy8gQXZvaWQgc2V0dGluZyB0aGlzIGlmIHRoZSBjdXN0b21FbW9qaSBoYXZlIF9ub3RfIGNoYW5nZWQsIGJlY2F1c2UgdGhlIHNldHRlciB0cmlnZ2VycyBhIHJlLWNvbXB1dGF0aW9uIG9mIHRoZVxuICAgICAgLy8gYGN1c3RvbUVtb2ppSW5kZXhgLiBOb3RlIHdlIGRvbid0IGJvdGhlciB3aXRoIGRlZXAgb2JqZWN0IGNoYW5nZXMuXG4gICAgICBkYXRhYmFzZS5jdXN0b21FbW9qaSA9IGRhdGFiYXNlQ3VzdG9tRW1vamk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVGYXZvcml0ZXMgKCkge1xuICAgICAgdXBkYXRlQ3VzdG9tRW1vamkoKTsgLy8gcmUtcnVuIHdoZW5ldmVyIGN1c3RvbUVtb2ppIGNoYW5nZVxuICAgICAgY29uc3QgeyBkYXRhYmFzZSwgZGVmYXVsdEZhdm9yaXRlRW1vamlzLCBudW1Db2x1bW5zIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IGRiRmF2b3JpdGVzID0gYXdhaXQgZGF0YWJhc2UuZ2V0VG9wRmF2b3JpdGVFbW9qaShudW1Db2x1bW5zKTtcbiAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IGF3YWl0IHN1bW1hcml6ZUVtb2ppcyh1bmlxQnkoW1xuICAgICAgICAuLi5kYkZhdm9yaXRlcyxcbiAgICAgICAgLi4uZGVmYXVsdEZhdm9yaXRlRW1vamlzXG4gICAgICBdLCBfID0+IChfLnVuaWNvZGUgfHwgXy5uYW1lKSkuc2xpY2UoMCwgbnVtQ29sdW1ucykpO1xuICAgICAgc3RhdGUuY3VycmVudEZhdm9yaXRlcyA9IGZhdm9yaXRlcztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZGF0YWJhc2VMb2FkZWQgJiYgc3RhdGUuZGVmYXVsdEZhdm9yaXRlRW1vamlzKSB7XG4gICAgICAvKiBubyBhd2FpdCAqLyB1cGRhdGVGYXZvcml0ZXMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vXG4gIC8vIFJlLXJ1biB3aGVuZXZlciB0aGUgZW1vamkgZ3JpZCBjaGFuZ2VzIHNpemUsIGFuZCByZS1jYWxjIHN0eWxlL2xheW91dC1yZWxhdGVkIHN0YXRlIHZhcmlhYmxlczpcbiAgLy8gMSkgUmUtY2FsY3VsYXRlIHRoZSAtLW51bS1jb2x1bW5zIHZhciBiZWNhdXNlIGl0IG1heSBoYXZlIGNoYW5nZWRcbiAgLy8gMikgUmUtY2FsY3VsYXRlIHdoZXRoZXIgd2UncmUgaW4gUlRMIG1vZGUgb3Igbm90LlxuICAvL1xuICAvLyBUaGUgYmVuZWZpdCBvZiBkb2luZyB0aGlzIGluIG9uZSBwbGFjZSBpcyB0byBhbGlnbiB3aXRoIHJBRi9SZXNpemVPYnNlcnZlclxuICAvLyBhbmQgZG8gYWxsIHRoZSBjYWxjdWxhdGlvbnMgaW4gb25lIGdvLiBSVEwgdnMgTFRSIGlzIG5vdCBzdHJpY3RseSBsYXlvdXQtcmVsYXRlZCxcbiAgLy8gYnV0IHNpbmNlIHdlJ3JlIGFscmVhZHkgcmVhZGluZyB0aGUgc3R5bGUgaGVyZSwgYW5kIHNpbmNlIGl0J3MgYWxyZWFkeSBhbGlnbmVkIHdpdGhcbiAgLy8gdGhlIHJBRiBsb29wLCB0aGlzIGlzIHRoZSBtb3N0IGFwcHJvcHJpYXRlIHBsYWNlIHRvIGRvIGl0IHBlcmYtd2lzZS5cbiAgLy9cblxuICBmdW5jdGlvbiBjYWxjdWxhdGVFbW9qaUdyaWRTdHlsZSAobm9kZSkge1xuICAgIHJlc2l6ZU9ic2VydmVyQWN0aW9uKG5vZGUsIGFib3J0U2lnbmFsLCAoKSA9PiB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgeyAvLyBqc2RvbSB0aHJvd3MgZXJyb3JzIGZvciB0aGlzIGtpbmQgb2YgZmFuY3kgc3R1ZmZcbiAgICAgICAgLy8gcmVhZCBhbGwgdGhlIHN0eWxlL2xheW91dCBjYWxjdWxhdGlvbnMgd2UgbmVlZCB0byBtYWtlXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShyZWZzLnJvb3RFbGVtZW50KTtcbiAgICAgICAgY29uc3QgbmV3TnVtQ29sdW1ucyA9IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy0tbnVtLWNvbHVtbnMnKSwgMTApO1xuICAgICAgICBjb25zdCBuZXdJc1J0bCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJztcblxuICAgICAgICAvLyB3cml0ZSB0byBzdGF0ZSB2YXJpYWJsZXNcbiAgICAgICAgc3RhdGUubnVtQ29sdW1ucyA9IG5ld051bUNvbHVtbnM7XG4gICAgICAgIHN0YXRlLmlzUnRsID0gbmV3SXNSdGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZS1ydW4gd2hlbmV2ZXIgdGhlIGN1c3RvbSBlbW9qaSBpbiBhIGNhdGVnb3J5IGFyZSBzaG93bi9oaWRkZW4uIFRoaXMgaXMgYW4gb3B0aW1pemF0aW9uIHRoYXQgc2ltdWxhdGVzXG4gIC8vIHdoYXQgd2UnZCBnZXQgZnJvbSBgPGltZyBsb2FkaW5nPWxhenk+YCBidXQgd2l0aG91dCByZW5kZXJpbmcgYW4gYDxpbWc+YC5cbiAgZnVuY3Rpb24gdXBkYXRlT25JbnRlcnNlY3Rpb24gKG5vZGUpIHtcbiAgICBpbnRlcnNlY3Rpb25PYnNlcnZlckFjdGlvbihub2RlLCBhYm9ydFNpZ25hbCwgKGVudHJpZXMpID0+IHtcbiAgICAgIGZvciAoY29uc3QgeyB0YXJnZXQsIGlzSW50ZXJzZWN0aW5nIH0gb2YgZW50cmllcykge1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnb25zY3JlZW4nLCBpc0ludGVyc2VjdGluZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvL1xuICAvLyBTZXQgb3IgdXBkYXRlIHRoZSBjdXJyZW50RW1vamlzLiBDaGVjayBmb3IgaW52YWxpZCBaV0ogcmVuZGVyaW5nc1xuICAvLyAoaS5lLiBkb3VibGUgZW1vamkpLlxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRW1vamlzICgpIHtcbiAgICAgIGNvbnN0IHsgc2VhcmNoVGV4dCwgY3VycmVudEdyb3VwLCBkYXRhYmFzZUxvYWRlZCwgY3VzdG9tRW1vamkgfSA9IHN0YXRlO1xuICAgICAgaWYgKCFkYXRhYmFzZUxvYWRlZCkge1xuICAgICAgICBzdGF0ZS5jdXJyZW50RW1vamlzID0gW107XG4gICAgICAgIHN0YXRlLnNlYXJjaE1vZGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoc2VhcmNoVGV4dC5sZW5ndGggPj0gTUlOX1NFQVJDSF9URVhUX0xFTkdUSCkge1xuICAgICAgICBjb25zdCBuZXdFbW9qaXMgPSBhd2FpdCBnZXRFbW9qaXNCeVNlYXJjaFF1ZXJ5KHNlYXJjaFRleHQpO1xuICAgICAgICBpZiAoc3RhdGUuc2VhcmNoVGV4dCA9PT0gc2VhcmNoVGV4dCkgeyAvLyBpZiB0aGUgc2l0dWF0aW9uIGNoYW5nZXMgYXN5bmNocm9ub3VzbHksIGRvIG5vdCB1cGRhdGVcbiAgICAgICAgICB1cGRhdGVDdXJyZW50RW1vamlzKG5ld0Vtb2ppcyk7XG4gICAgICAgICAgdXBkYXRlU2VhcmNoTW9kZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gZGF0YWJhc2UgaXMgbG9hZGVkIGFuZCB3ZSdyZSBub3QgaW4gc2VhcmNoIG1vZGUsIHNvIHdlJ3JlIGluIG5vcm1hbCBjYXRlZ29yeSBtb2RlXG4gICAgICAgIGNvbnN0IHsgaWQ6IGN1cnJlbnRHcm91cElkIH0gPSBjdXJyZW50R3JvdXA7XG4gICAgICAgIC8vIGF2b2lkIHJhY2UgY29uZGl0aW9uIHdoZXJlIGN1cnJlbnRHcm91cElkIGlzIC0xIGFuZCBjdXN0b21FbW9qaSBpcyB1bmRlZmluZWQvZW1wdHlcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cElkICE9PSAtMSB8fCAoY3VzdG9tRW1vamkgJiYgY3VzdG9tRW1vamkubGVuZ3RoKSkge1xuICAgICAgICAgIGNvbnN0IG5ld0Vtb2ppcyA9IGF3YWl0IGdldEVtb2ppc0J5R3JvdXAoY3VycmVudEdyb3VwSWQpO1xuICAgICAgICAgIGlmIChzdGF0ZS5jdXJyZW50R3JvdXAuaWQgPT09IGN1cnJlbnRHcm91cElkKSB7IC8vIGlmIHRoZSBzaXR1YXRpb24gY2hhbmdlcyBhc3luY2hyb25vdXNseSwgZG8gbm90IHVwZGF0ZVxuICAgICAgICAgICAgdXBkYXRlQ3VycmVudEVtb2ppcyhuZXdFbW9qaXMpO1xuICAgICAgICAgICAgdXBkYXRlU2VhcmNoTW9kZShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogbm8gYXdhaXQgKi8gdXBkYXRlRW1vamlzKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlc2V0U2Nyb2xsVG9wSW5SYWYgPSAoKSA9PiB7XG4gICAgckFGKCgpID0+IHJlc2V0U2Nyb2xsVG9wSWZQb3NzaWJsZShyZWZzLnRhYnBhbmVsRWxlbWVudCkpO1xuICB9O1xuXG4gIC8vIFNvbWUgZW1vamlzIGhhdmUgdGhlaXIgbGlnYXR1cmVzIHJlbmRlcmVkIGFzIHR3byBvciBtb3JlIGNvbnNlY3V0aXZlIGVtb2ppc1xuICAvLyBXZSB3YW50IHRvIHRyZWF0IHRoZXNlIHRoZSBzYW1lIGFzIHVuc3VwcG9ydGVkIGVtb2ppcywgc28gd2UgY29tcGFyZSB0aGVpclxuICAvLyB3aWR0aHMgYWdhaW5zdCB0aGUgYmFzZWxpbmUgd2lkdGhzIGFuZCByZW1vdmUgdGhlbSBhcyBuZWNlc3NhcnlcbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnRFbW9qaXMsIGVtb2ppVmVyc2lvbiB9ID0gc3RhdGU7XG4gICAgY29uc3QgendqRW1vamlzVG9DaGVjayA9IGN1cnJlbnRFbW9qaXNcbiAgICAgIC5maWx0ZXIoZW1vamkgPT4gZW1vamkudW5pY29kZSkgLy8gZmlsdGVyIGN1c3RvbSBlbW9qaVxuICAgICAgLmZpbHRlcihlbW9qaSA9PiBoYXNad2ooZW1vamkpICYmICFzdXBwb3J0ZWRad2pFbW9qaXMuaGFzKGVtb2ppLnVuaWNvZGUpKTtcbiAgICBpZiAoIWVtb2ppVmVyc2lvbiAmJiB6d2pFbW9qaXNUb0NoZWNrLmxlbmd0aCkge1xuICAgICAgLy8gcmVuZGVyIG5vdywgY2hlY2sgdGhlaXIgbGVuZ3RoIGxhdGVyXG4gICAgICB1cGRhdGVDdXJyZW50RW1vamlzKGN1cnJlbnRFbW9qaXMpO1xuICAgICAgckFGKCgpID0+IGNoZWNrWndqU3VwcG9ydEFuZFVwZGF0ZSh6d2pFbW9qaXNUb0NoZWNrKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0Vtb2ppcyA9IGVtb2ppVmVyc2lvbiA/IGN1cnJlbnRFbW9qaXMgOiBjdXJyZW50RW1vamlzLmZpbHRlcihpc1p3alN1cHBvcnRlZCk7XG4gICAgICB1cGRhdGVDdXJyZW50RW1vamlzKG5ld0Vtb2ppcyk7XG4gICAgICAvLyBSZXNldCBzY3JvbGwgdG9wIHRvIDAgd2hlbiBlbW9qaXMgY2hhbmdlXG4gICAgICByZXNldFNjcm9sbFRvcEluUmFmKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBjaGVja1p3alN1cHBvcnRBbmRVcGRhdGUgKHp3akVtb2ppc1RvQ2hlY2spIHtcbiAgICBjb25zdCBhbGxTdXBwb3J0ZWQgPSBjaGVja1p3alN1cHBvcnQoendqRW1vamlzVG9DaGVjaywgcmVmcy5iYXNlbGluZUVtb2ppLCBlbW9qaVRvRG9tTm9kZSk7XG4gICAgaWYgKGFsbFN1cHBvcnRlZCkge1xuICAgICAgLy8gRXZlbiBpZiBhbGwgZW1vamkgYXJlIHN1cHBvcnRlZCwgd2Ugc3RpbGwgbmVlZCB0byByZXNldCB0aGUgc2Nyb2xsIHRvcCB0byAwIHdoZW4gZW1vamlzIGNoYW5nZVxuICAgICAgcmVzZXRTY3JvbGxUb3BJblJhZigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGb3JjZSB1cGRhdGUuIFdlIG9ubHkgZG8gdGhpcyBpZiB0aGVyZSBhcmUgYW55IHVuc3VwcG9ydGVkIFpXSiBjaGFyYWN0ZXJzIHNpbmNlIG90aGVyd2lzZSxcbiAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgYWxsIGVtb2ppLCBpdCB3b3VsZCBiZSBhbiB1bm5lY2Vzc2FyeSBleHRyYSByZS1yZW5kZXIuXG4gICAgICBzdGF0ZS5jdXJyZW50RW1vamlzID0gWy4uLnN0YXRlLmN1cnJlbnRFbW9qaXNdO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzWndqU3VwcG9ydGVkIChlbW9qaSkge1xuICAgIHJldHVybiAhZW1vamkudW5pY29kZSB8fCAhaGFzWndqKGVtb2ppKSB8fCBzdXBwb3J0ZWRad2pFbW9qaXMuZ2V0KGVtb2ppLnVuaWNvZGUpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBmaWx0ZXJFbW9qaXNCeVZlcnNpb24gKGVtb2ppcykge1xuICAgIGNvbnN0IGVtb2ppU3VwcG9ydExldmVsID0gc3RhdGUuZW1vamlWZXJzaW9uIHx8IGF3YWl0IGRldGVjdEVtb2ppU3VwcG9ydExldmVsKCk7XG4gICAgLy8gIXZlcnNpb24gY29ycmVzcG9uZHMgdG8gY3VzdG9tIGVtb2ppXG4gICAgcmV0dXJuIGVtb2ppcy5maWx0ZXIoKHsgdmVyc2lvbiB9KSA9PiAhdmVyc2lvbiB8fCB2ZXJzaW9uIDw9IGVtb2ppU3VwcG9ydExldmVsKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VtbWFyaXplRW1vamlzIChlbW9qaXMpIHtcbiAgICByZXR1cm4gc3VtbWFyaXplRW1vamlzRm9yVUkoZW1vamlzLCBzdGF0ZS5lbW9qaVZlcnNpb24gfHwgYXdhaXQgZGV0ZWN0RW1vamlTdXBwb3J0TGV2ZWwoKSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEVtb2ppc0J5R3JvdXAgKGdyb3VwKSB7XG4gICAgLy8gLTEgaXMgY3VzdG9tIGVtb2ppXG4gICAgY29uc3QgZW1vamkgPSBncm91cCA9PT0gLTEgPyBzdGF0ZS5jdXN0b21FbW9qaSA6IGF3YWl0IHN0YXRlLmRhdGFiYXNlLmdldEVtb2ppQnlHcm91cChncm91cCk7XG4gICAgcmV0dXJuIHN1bW1hcml6ZUVtb2ppcyhhd2FpdCBmaWx0ZXJFbW9qaXNCeVZlcnNpb24oZW1vamkpKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlzQnlTZWFyY2hRdWVyeSAocXVlcnkpIHtcbiAgICByZXR1cm4gc3VtbWFyaXplRW1vamlzKGF3YWl0IGZpbHRlckVtb2ppc0J5VmVyc2lvbihhd2FpdCBzdGF0ZS5kYXRhYmFzZS5nZXRFbW9qaUJ5U2VhcmNoUXVlcnkocXVlcnkpKSlcbiAgfVxuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIERlcml2ZSBjdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMgZnJvbSBjdXJyZW50RW1vamlzLiBUaGlzIGlzIGFsd2F5cyBkb25lIGV2ZW4gaWYgdGhlcmVcbiAgLy8gYXJlIG5vIGNhdGVnb3JpZXMsIGJlY2F1c2UgaXQncyBqdXN0IGVhc2llciB0byBjb2RlIHRoZSBIVE1MIHRoaXMgd2F5LlxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQ3VycmVudEVtb2ppc1dpdGhDYXRlZ29yaWVzICgpIHtcbiAgICAgIGNvbnN0IHsgc2VhcmNoTW9kZSwgY3VycmVudEVtb2ppcyB9ID0gc3RhdGU7XG4gICAgICBpZiAoc2VhcmNoTW9kZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnJyxcbiAgICAgICAgICAgIGVtb2ppczogY3VycmVudEVtb2ppc1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgICAgY29uc3QgY2F0ZWdvcmllc1RvRW1vamkgPSBuZXcgTWFwKCk7XG4gICAgICBmb3IgKGNvbnN0IGVtb2ppIG9mIGN1cnJlbnRFbW9qaXMpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBlbW9qaS5jYXRlZ29yeSB8fCAnJztcbiAgICAgICAgbGV0IGVtb2ppcyA9IGNhdGVnb3JpZXNUb0Vtb2ppLmdldChjYXRlZ29yeSk7XG4gICAgICAgIGlmICghZW1vamlzKSB7XG4gICAgICAgICAgZW1vamlzID0gW107XG4gICAgICAgICAgY2F0ZWdvcmllc1RvRW1vamkuc2V0KGNhdGVnb3J5LCBlbW9qaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVtb2ppcy5wdXNoKGVtb2ppKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbLi4uY2F0ZWdvcmllc1RvRW1vamkuZW50cmllcygpXVxuICAgICAgICAubWFwKChbY2F0ZWdvcnksIGVtb2ppc10pID0+ICh7IGNhdGVnb3J5LCBlbW9qaXMgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBzdGF0ZS5jdXN0b21DYXRlZ29yeVNvcnRpbmcoYS5jYXRlZ29yeSwgYi5jYXRlZ29yeSkpXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RW1vamlzV2l0aENhdGVnb3JpZXMgPSBjYWxjdWxhdGVDdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMoKTtcbiAgICB1cGRhdGVDdXJyZW50RW1vamlzV2l0aENhdGVnb3JpZXMobmV3RW1vamlzV2l0aENhdGVnb3JpZXMpO1xuICB9KTtcblxuICAvL1xuICAvLyBIYW5kbGUgYWN0aXZlIHNlYXJjaCBpdGVtIChpLmUuIHByZXNzaW5nIHVwIG9yIGRvd24gd2hpbGUgc2VhcmNoaW5nKVxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbUlkID0gc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSAhPT0gLTEgJiYgc3RhdGUuY3VycmVudEVtb2ppc1tzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtXS5pZDtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gSGFuZGxlIHVzZXIgaW5wdXQgb24gdGhlIHNlYXJjaCBpbnB1dFxuICAvL1xuXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyByYXdTZWFyY2hUZXh0IH0gPSBzdGF0ZTtcbiAgICBySUMoKCkgPT4ge1xuICAgICAgc3RhdGUuc2VhcmNoVGV4dCA9IChyYXdTZWFyY2hUZXh0IHx8ICcnKS50cmltKCk7IC8vIGRlZmVyIHRvIGF2b2lkIGlucHV0IGRlbGF5cywgcGx1cyB3ZSBjYW4gdHJpbSBoZXJlXG4gICAgICBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtID0gLTE7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9uU2VhcmNoS2V5ZG93biAoZXZlbnQpIHtcbiAgICBpZiAoIXN0YXRlLnNlYXJjaE1vZGUgfHwgIXN0YXRlLmN1cnJlbnRFbW9qaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBnb1RvTmV4dE9yUHJldmlvdXMgPSAocHJldmlvdXMpID0+IHtcbiAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA9IGluY3JlbWVudE9yRGVjcmVtZW50KHByZXZpb3VzLCBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtLCBzdGF0ZS5jdXJyZW50RW1vamlzKTtcbiAgICB9O1xuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIHJldHVybiBnb1RvTmV4dE9yUHJldmlvdXMoZmFsc2UpXG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgcmV0dXJuIGdvVG9OZXh0T3JQcmV2aW91cyh0cnVlKVxuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBpZiAoc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBmb2N1cyB0aGUgZmlyc3Qgb3B0aW9uIGluIHRoZSBsaXN0IHNpbmNlIHRoZSBsaXN0IG11c3QgYmUgbm9uLWVtcHR5IGF0IHRoaXMgcG9pbnQgKGl0J3MgdmVyaWZpZWQgYWJvdmUpXG4gICAgICAgICAgc3RhdGUuYWN0aXZlU2VhcmNoSXRlbSA9IDA7XG4gICAgICAgIH0gZWxzZSB7IC8vIHRoZXJlIGlzIGFscmVhZHkgYW4gYWN0aXZlIHNlYXJjaCBpdGVtXG4gICAgICAgICAgaGFsdChldmVudCk7XG4gICAgICAgICAgcmV0dXJuIGNsaWNrRW1vamkoc3RhdGUuY3VycmVudEVtb2ppc1tzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtXS5pZClcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vXG4gIC8vIEhhbmRsZSB1c2VyIGlucHV0IG9uIG5hdlxuICAvL1xuXG4gIGZ1bmN0aW9uIG9uTmF2Q2xpY2sgKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgIGNvbnN0IGNsb3Nlc3RUYXJnZXQgPSB0YXJnZXQuY2xvc2VzdCgnLm5hdi1idXR0b24nKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNsb3Nlc3RUYXJnZXQpIHtcbiAgICAgIHJldHVybiAvLyBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCBtYWtlcyBtZSBuZXJ2b3VzIG5vdCB0byBoYXZlIGl0XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwSWQgPSBwYXJzZUludChjbG9zZXN0VGFyZ2V0LmRhdGFzZXQuZ3JvdXBJZCwgMTApO1xuICAgIHJlZnMuc2VhcmNoRWxlbWVudC52YWx1ZSA9ICcnOyAvLyBjbGVhciBzZWFyY2ggYm94IGlucHV0XG4gICAgc3RhdGUucmF3U2VhcmNoVGV4dCA9ICcnO1xuICAgIHN0YXRlLnNlYXJjaFRleHQgPSAnJztcbiAgICBzdGF0ZS5hY3RpdmVTZWFyY2hJdGVtID0gLTE7XG4gICAgc3RhdGUuY3VycmVudEdyb3VwSW5kZXggPSBzdGF0ZS5ncm91cHMuZmluZEluZGV4KF8gPT4gXy5pZCA9PT0gZ3JvdXBJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbk5hdktleWRvd24gKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQsIGtleSB9ID0gZXZlbnQ7XG5cbiAgICBjb25zdCBkb0ZvY3VzID0gZWwgPT4ge1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgcmV0dXJuIGRvRm9jdXModGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgcmV0dXJuIGRvRm9jdXModGFyZ2V0Lm5leHRFbGVtZW50U2libGluZylcbiAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICByZXR1cm4gZG9Gb2N1cyh0YXJnZXQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZClcbiAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgIHJldHVybiBkb0ZvY3VzKHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGV0YWlsRm9yQ2xpY2tFdmVudCAodW5pY29kZU9yTmFtZSkge1xuICAgIGNvbnN0IGVtb2ppID0gYXdhaXQgc3RhdGUuZGF0YWJhc2UuZ2V0RW1vamlCeVVuaWNvZGVPck5hbWUodW5pY29kZU9yTmFtZSk7XG4gICAgY29uc3QgZW1vamlTdW1tYXJ5ID0gWy4uLnN0YXRlLmN1cnJlbnRFbW9qaXMsIC4uLnN0YXRlLmN1cnJlbnRGYXZvcml0ZXNdXG4gICAgICAuZmluZChfID0+IChfLmlkID09PSB1bmljb2RlT3JOYW1lKSk7XG4gICAgY29uc3Qgc2tpblRvbmVkVW5pY29kZSA9IGVtb2ppU3VtbWFyeS51bmljb2RlICYmIHVuaWNvZGVXaXRoU2tpbihlbW9qaVN1bW1hcnksIHN0YXRlLmN1cnJlbnRTa2luVG9uZSk7XG4gICAgYXdhaXQgc3RhdGUuZGF0YWJhc2UuaW5jcmVtZW50RmF2b3JpdGVFbW9qaUNvdW50KHVuaWNvZGVPck5hbWUpO1xuICAgIHJldHVybiB7XG4gICAgICBlbW9qaSxcbiAgICAgIHNraW5Ub25lOiBzdGF0ZS5jdXJyZW50U2tpblRvbmUsXG4gICAgICAuLi4oc2tpblRvbmVkVW5pY29kZSAmJiB7IHVuaWNvZGU6IHNraW5Ub25lZFVuaWNvZGUgfSksXG4gICAgICAuLi4oZW1vamlTdW1tYXJ5Lm5hbWUgJiYgeyBuYW1lOiBlbW9qaVN1bW1hcnkubmFtZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vXG4gIC8vIEhhbmRsZSB1c2VyIGlucHV0IG9uIGFuIGVtb2ppXG4gIC8vXG4gIGFzeW5jIGZ1bmN0aW9uIGNsaWNrRW1vamkgKHVuaWNvZGVPck5hbWUpIHtcbiAgICBjb25zdCBwcm9taXNlRm9yRGV0YWlsID0gZ2V0RGV0YWlsRm9yQ2xpY2tFdmVudCh1bmljb2RlT3JOYW1lKTtcbiAgICAvLyBzeW5jIGV2ZW50IHRvIHdvcmsgYXJvdW5kIGEgc2FmYXJpIGJ1ZzogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIyMjI2MlxuICAgIGZpcmVFdmVudCgnZW1vamktY2xpY2stc3luYycsIHByb21pc2VGb3JEZXRhaWwpO1xuICAgIC8vIGFzeW5jIGV2ZW50IGZvciBtb3N0IG5vcm1hbCB1c2UgY2FzZXMgdGhhdCBkb24ndCBuZWVkIHRvIHdvcmsgYXJvdW5kIHRoZSBzYWZhcmkgYnVnXG4gICAgZmlyZUV2ZW50KCdlbW9qaS1jbGljaycsIGF3YWl0IHByb21pc2VGb3JEZXRhaWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25FbW9qaUNsaWNrIChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Vtb2ppJykpIHtcbiAgICAgIC8vIFRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiwgYnV0IG1ha2VzIG1lIG5lcnZvdXMgbm90IHRvIGhhdmUgaXRcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBoYWx0KGV2ZW50KTtcbiAgICBjb25zdCBpZCA9IHRhcmdldC5pZC5zdWJzdHJpbmcoNCk7IC8vIHJlcGxhY2UgJ2Vtby0nIG9yICdmYXYtJyBwcmVmaXhcblxuICAgIC8qIG5vIGF3YWl0ICovIGNsaWNrRW1vamkoaWQpO1xuICB9XG5cbiAgLy9cbiAgLy8gSGFuZGxlIHVzZXIgaW5wdXQgb24gdGhlIHNraW50b25lIHBpY2tlclxuICAvL1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVNraW5Ub25lIChza2luVG9uZSkge1xuICAgIHN0YXRlLmN1cnJlbnRTa2luVG9uZSA9IHNraW5Ub25lO1xuICAgIHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQgPSBmYWxzZTtcbiAgICBmb2N1cygnc2tpbnRvbmUtYnV0dG9uJyk7XG4gICAgZmlyZUV2ZW50KCdza2luLXRvbmUtY2hhbmdlJywgeyBza2luVG9uZSB9KTtcbiAgICAvKiBubyBhd2FpdCAqLyBzdGF0ZS5kYXRhYmFzZS5zZXRQcmVmZXJyZWRTa2luVG9uZShza2luVG9uZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblNraW5Ub25lT3B0aW9uc0NsaWNrIChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0OiB7IGlkIH0gfSA9IGV2ZW50O1xuICAgIGNvbnN0IG1hdGNoID0gaWQgJiYgaWQubWF0Y2goL15za2ludG9uZS0oXFxkKS8pOyAvLyBza2ludG9uZSBvcHRpb24gZm9ybWF0XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFtYXRjaCkgeyAvLyBub3QgYSBza2ludG9uZSBvcHRpb25cbiAgICAgIHJldHVybiAvLyBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIGJ1dCBtYWtlcyBtZSBuZXJ2b3VzIG5vdCB0byBoYXZlIGl0XG4gICAgfVxuICAgIGhhbHQoZXZlbnQpO1xuICAgIGNvbnN0IHNraW5Ub25lID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTsgLy8gcmVtb3ZlICdza2ludG9uZS0nIHByZWZpeFxuICAgIGNoYW5nZVNraW5Ub25lKHNraW5Ub25lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2tTa2luVG9uZUJ1dHRvbiAoZXZlbnQpIHtcbiAgICBzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkID0gIXN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQ7XG4gICAgc3RhdGUuYWN0aXZlU2tpblRvbmUgPSBzdGF0ZS5jdXJyZW50U2tpblRvbmU7XG4gICAgLy8gdGhpcyBzaG91bGQgYWx3YXlzIGJlIHRydWUsIHNpbmNlIHRoZSBidXR0b24gaXMgb2JzY3VyZWQgYnkgdGhlIGxpc3Rib3gsIHNvIHRoaXMgYGlmYCBpcyBqdXN0IHRvIGJlIHN1cmVcbiAgICBpZiAoc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCkge1xuICAgICAgaGFsdChldmVudCk7XG4gICAgICByQUYoKCkgPT4gZm9jdXMoJ3NraW50b25lLWxpc3QnKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVG8gbWFrZSB0aGUgYW5pbWF0aW9uIG5pY2VyLCBjaGFuZ2UgdGhlIHotaW5kZXggb2YgdGhlIHNraW50b25lIHBpY2tlciBidXR0b25cbiAgLy8gKmFmdGVyKiB0aGUgYW5pbWF0aW9uIGhhcyBwbGF5ZWQuIFRoaXMgbWFrZXMgaXQgYXBwZWFyIHRoYXQgdGhlIHBpY2tlciBib3hcbiAgLy8gaXMgZXhwYW5kaW5nIFwiYmVsb3dcIiB0aGUgYnV0dG9uXG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQpIHtcbiAgICAgIHJlZnMuc2tpblRvbmVEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICBzdGF0ZS5za2luVG9uZVBpY2tlckV4cGFuZGVkQWZ0ZXJBbmltYXRpb24gPSB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWRBZnRlckFuaW1hdGlvbiA9IGZhbHNlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBvblNraW5Ub25lT3B0aW9uc0tleWRvd24gKGV2ZW50KSB7XG4gICAgLy8gdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgbWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSBpdFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZUFjdGl2ZVNraW5Ub25lID0gYXN5bmMgbmV4dFNraW5Ub25lID0+IHtcbiAgICAgIGhhbHQoZXZlbnQpO1xuICAgICAgc3RhdGUuYWN0aXZlU2tpblRvbmUgPSBuZXh0U2tpblRvbmU7XG4gICAgfTtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgcmV0dXJuIGNoYW5nZUFjdGl2ZVNraW5Ub25lKGluY3JlbWVudE9yRGVjcmVtZW50KHRydWUsIHN0YXRlLmFjdGl2ZVNraW5Ub25lLCBzdGF0ZS5za2luVG9uZXMpKVxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgcmV0dXJuIGNoYW5nZUFjdGl2ZVNraW5Ub25lKGluY3JlbWVudE9yRGVjcmVtZW50KGZhbHNlLCBzdGF0ZS5hY3RpdmVTa2luVG9uZSwgc3RhdGUuc2tpblRvbmVzKSlcbiAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICByZXR1cm4gY2hhbmdlQWN0aXZlU2tpblRvbmUoMClcbiAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgIHJldHVybiBjaGFuZ2VBY3RpdmVTa2luVG9uZShzdGF0ZS5za2luVG9uZXMubGVuZ3RoIC0gMSlcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgLy8gZW50ZXIgb24ga2V5ZG93biwgc3BhY2Ugb24ga2V5dXAuIHRoaXMgaXMganVzdCBob3cgYnJvd3NlcnMgd29yayBmb3IgYnV0dG9uc1xuICAgICAgICAvLyBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvdzNjLXdhaS1pZy8yMDE5SmFuTWFyLzAwODYuaHRtbFxuICAgICAgICBoYWx0KGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGNoYW5nZVNraW5Ub25lKHN0YXRlLmFjdGl2ZVNraW5Ub25lKVxuICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgaGFsdChldmVudCk7XG4gICAgICAgIHN0YXRlLnNraW5Ub25lUGlja2VyRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZvY3VzKCdza2ludG9uZS1idXR0b24nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU2tpblRvbmVPcHRpb25zS2V5dXAgKGV2ZW50KSB7XG4gICAgLy8gdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgbWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSBpdFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICcgJzpcbiAgICAgICAgLy8gZW50ZXIgb24ga2V5ZG93biwgc3BhY2Ugb24ga2V5dXAuIHRoaXMgaXMganVzdCBob3cgYnJvd3NlcnMgd29yayBmb3IgYnV0dG9uc1xuICAgICAgICAvLyBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvdzNjLXdhaS1pZy8yMDE5SmFuTWFyLzAwODYuaHRtbFxuICAgICAgICBoYWx0KGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGNoYW5nZVNraW5Ub25lKHN0YXRlLmFjdGl2ZVNraW5Ub25lKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU2tpblRvbmVPcHRpb25zRm9jdXNPdXQgKGV2ZW50KSB7XG4gICAgLy8gT24gYmx1ciBvdXRzaWRlIG9mIHRoZSBza2ludG9uZSBsaXN0Ym94LCBjb2xsYXBzZSB0aGUgc2tpbnRvbmUgcGlja2VyLlxuICAgIGNvbnN0IHsgcmVsYXRlZFRhcmdldCB9ID0gZXZlbnQ7XG4gICAgLy8gVGhlIGBlbHNlYCBzaG91bGQgbmV2ZXIgaGFwcGVuLCBidXQgbWFrZXMgbWUgbmVydm91cyBub3QgdG8gaGF2ZSBpdFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCFyZWxhdGVkVGFyZ2V0IHx8IHJlbGF0ZWRUYXJnZXQuaWQgIT09ICdza2ludG9uZS1saXN0Jykge1xuICAgICAgc3RhdGUuc2tpblRvbmVQaWNrZXJFeHBhbmRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU2VhcmNoSW5wdXQgKGV2ZW50KSB7XG4gICAgc3RhdGUucmF3U2VhcmNoVGV4dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJHNldCAobmV3U3RhdGUpIHtcbiAgICAgIGFzc2lnbihzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIH0sXG4gICAgJGRlc3Ryb3kgKCkge1xuICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IERFRkFVTFRfREFUQV9TT1VSQ0UgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9lbW9qaS1waWNrZXItZWxlbWVudC1kYXRhQF4xL2VuL2Vtb2ppYmFzZS9kYXRhLmpzb24nO1xuY29uc3QgREVGQVVMVF9MT0NBTEUgPSAnZW4nO1xuXG52YXIgZW5JMThuID0ge1xuICBjYXRlZ29yaWVzTGFiZWw6ICdDYXRlZ29yaWVzJyxcbiAgZW1vamlVbnN1cHBvcnRlZE1lc3NhZ2U6ICdZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBjb2xvciBlbW9qaS4nLFxuICBmYXZvcml0ZXNMYWJlbDogJ0Zhdm9yaXRlcycsXG4gIGxvYWRpbmdNZXNzYWdlOiAnTG9hZGluZ1x1MjAyNicsXG4gIG5ldHdvcmtFcnJvck1lc3NhZ2U6ICdDb3VsZCBub3QgbG9hZCBlbW9qaS4nLFxuICByZWdpb25MYWJlbDogJ0Vtb2ppIHBpY2tlcicsXG4gIHNlYXJjaERlc2NyaXB0aW9uOiAnV2hlbiBzZWFyY2ggcmVzdWx0cyBhcmUgYXZhaWxhYmxlLCBwcmVzcyB1cCBvciBkb3duIHRvIHNlbGVjdCBhbmQgZW50ZXIgdG8gY2hvb3NlLicsXG4gIHNlYXJjaExhYmVsOiAnU2VhcmNoJyxcbiAgc2VhcmNoUmVzdWx0c0xhYmVsOiAnU2VhcmNoIHJlc3VsdHMnLFxuICBza2luVG9uZURlc2NyaXB0aW9uOiAnV2hlbiBleHBhbmRlZCwgcHJlc3MgdXAgb3IgZG93biB0byBzZWxlY3QgYW5kIGVudGVyIHRvIGNob29zZS4nLFxuICBza2luVG9uZUxhYmVsOiAnQ2hvb3NlIGEgc2tpbiB0b25lIChjdXJyZW50bHkge3NraW5Ub25lfSknLFxuICBza2luVG9uZXNMYWJlbDogJ1NraW4gdG9uZXMnLFxuICBza2luVG9uZXM6IFtcbiAgICAnRGVmYXVsdCcsXG4gICAgJ0xpZ2h0JyxcbiAgICAnTWVkaXVtLUxpZ2h0JyxcbiAgICAnTWVkaXVtJyxcbiAgICAnTWVkaXVtLURhcmsnLFxuICAgICdEYXJrJ1xuICBdLFxuICBjYXRlZ29yaWVzOiB7XG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgICAnc21pbGV5cy1lbW90aW9uJzogJ1NtaWxleXMgYW5kIGVtb3RpY29ucycsXG4gICAgJ3Blb3BsZS1ib2R5JzogJ1Blb3BsZSBhbmQgYm9keScsXG4gICAgJ2FuaW1hbHMtbmF0dXJlJzogJ0FuaW1hbHMgYW5kIG5hdHVyZScsXG4gICAgJ2Zvb2QtZHJpbmsnOiAnRm9vZCBhbmQgZHJpbmsnLFxuICAgICd0cmF2ZWwtcGxhY2VzJzogJ1RyYXZlbCBhbmQgcGxhY2VzJyxcbiAgICBhY3Rpdml0aWVzOiAnQWN0aXZpdGllcycsXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxuICAgIHN5bWJvbHM6ICdTeW1ib2xzJyxcbiAgICBmbGFnczogJ0ZsYWdzJ1xuICB9XG59O1xuXG52YXIgYmFzZVN0eWxlcyA9IFwiOmhvc3R7LS1lbW9qaS1zaXplOjEuMzc1cmVtOy0tZW1vamktcGFkZGluZzowLjVyZW07LS1jYXRlZ29yeS1lbW9qaS1zaXplOnZhcigtLWVtb2ppLXNpemUpOy0tY2F0ZWdvcnktZW1vamktcGFkZGluZzp2YXIoLS1lbW9qaS1wYWRkaW5nKTstLWluZGljYXRvci1oZWlnaHQ6M3B4Oy0taW5wdXQtYm9yZGVyLXJhZGl1czowLjVyZW07LS1pbnB1dC1ib3JkZXItc2l6ZToxcHg7LS1pbnB1dC1mb250LXNpemU6MXJlbTstLWlucHV0LWxpbmUtaGVpZ2h0OjEuNTstLWlucHV0LXBhZGRpbmc6MC4yNXJlbTstLW51bS1jb2x1bW5zOjg7LS1vdXRsaW5lLXNpemU6MnB4Oy0tYm9yZGVyLXNpemU6MXB4Oy0tYm9yZGVyLXJhZGl1czowOy0tc2tpbnRvbmUtYm9yZGVyLXJhZGl1czoxcmVtOy0tY2F0ZWdvcnktZm9udC1zaXplOjFyZW07ZGlzcGxheTpmbGV4O3dpZHRoOm1pbi1jb250ZW50O2hlaWdodDo0MDBweH06aG9zdCw6aG9zdCgubGlnaHQpe2NvbG9yLXNjaGVtZTpsaWdodDstLWJhY2tncm91bmQ6I2ZmZjstLWJvcmRlci1jb2xvcjojZTBlMGUwOy0taW5kaWNhdG9yLWNvbG9yOiMzODVhYzE7LS1pbnB1dC1ib3JkZXItY29sb3I6Izk5OTstLWlucHV0LWZvbnQtY29sb3I6IzExMTstLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiM5OTk7LS1vdXRsaW5lLWNvbG9yOiM5OTk7LS1jYXRlZ29yeS1mb250LWNvbG9yOiMxMTE7LS1idXR0b24tYWN0aXZlLWJhY2tncm91bmQ6I2U2ZTZlNjstLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiNkOWQ5ZDl9Omhvc3QoLmRhcmspe2NvbG9yLXNjaGVtZTpkYXJrOy0tYmFja2dyb3VuZDojMjIyOy0tYm9yZGVyLWNvbG9yOiM0NDQ7LS1pbmRpY2F0b3ItY29sb3I6IzUzNzNlYzstLWlucHV0LWJvcmRlci1jb2xvcjojY2NjOy0taW5wdXQtZm9udC1jb2xvcjojZWZlZmVmOy0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6I2NjYzstLW91dGxpbmUtY29sb3I6I2ZmZjstLWNhdGVnb3J5LWZvbnQtY29sb3I6I2VmZWZlZjstLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZDojNTU1NTU1Oy0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6IzQ4NDg0OH1AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspezpob3N0e2NvbG9yLXNjaGVtZTpkYXJrOy0tYmFja2dyb3VuZDojMjIyOy0tYm9yZGVyLWNvbG9yOiM0NDQ7LS1pbmRpY2F0b3ItY29sb3I6IzUzNzNlYzstLWlucHV0LWJvcmRlci1jb2xvcjojY2NjOy0taW5wdXQtZm9udC1jb2xvcjojZWZlZmVmOy0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6I2NjYzstLW91dGxpbmUtY29sb3I6I2ZmZjstLWNhdGVnb3J5LWZvbnQtY29sb3I6I2VmZWZlZjstLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZDojNTU1NTU1Oy0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6IzQ4NDg0OH19Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX1idXR0b257bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO2JhY2tncm91bmQ6MCAwO2JveC1zaGFkb3c6bm9uZTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9YnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfWlucHV0e3BhZGRpbmc6MDttYXJnaW46MDtsaW5lLWhlaWdodDoxLjE1O2ZvbnQtZmFtaWx5OmluaGVyaXR9aW5wdXRbdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTpub25lfTpmb2N1c3tvdXRsaW5lOnZhcigtLW91dGxpbmUtY29sb3IpIHNvbGlkIHZhcigtLW91dGxpbmUtc2l6ZSk7b3V0bGluZS1vZmZzZXQ6Y2FsYygtMSp2YXIoLS1vdXRsaW5lLXNpemUpKX06aG9zdChbZGF0YS1qcy1mb2N1cy12aXNpYmxlXSkgOmZvY3VzOm5vdChbZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkXSl7b3V0bGluZTowfTpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpe291dGxpbmU6MH0uaGlkZS1mb2N1c3tvdXRsaW5lOjB9Kntib3gtc2l6aW5nOmJvcmRlci1ib3h9LnBpY2tlcntjb250YWluOmNvbnRlbnQ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlcjp2YXIoLS1ib3JkZXItc2l6ZSkgc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVuOy0tdG90YWwtZW1vamktc2l6ZTpjYWxjKHZhcigtLWVtb2ppLXNpemUpICsgKDIgKiB2YXIoLS1lbW9qaS1wYWRkaW5nKSkpOy0tdG90YWwtY2F0ZWdvcnktZW1vamktc2l6ZTpjYWxjKHZhcigtLWNhdGVnb3J5LWVtb2ppLXNpemUpICsgKDIgKiB2YXIoLS1jYXRlZ29yeS1lbW9qaS1wYWRkaW5nKSkpfS5zci1vbmx5e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsMCwwLDApO2JvcmRlcjowfS5oaWRkZW57b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmFicy1wb3N7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowfS5nb25le2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnNraW50b25lLWJ1dHRvbi13cmFwcGVyLC5za2ludG9uZS1saXN0e2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7ei1pbmRleDozfS5za2ludG9uZS1idXR0b24td3JhcHBlci5leHBhbmRlZHt6LWluZGV4OjF9LnNraW50b25lLWxpc3R7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtaW5saW5lLWVuZDowO3RvcDowO3otaW5kZXg6MjtvdmVyZmxvdzp2aXNpYmxlO2JvcmRlci1ib3R0b206dmFyKC0tYm9yZGVyLXNpemUpIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czowIDAgdmFyKC0tc2tpbnRvbmUtYm9yZGVyLXJhZGl1cykgdmFyKC0tc2tpbnRvbmUtYm9yZGVyLXJhZGl1cyk7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciAwfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5za2ludG9uZS1saXN0e3RyYW5zaXRpb24tZHVyYXRpb246LjAwMXN9fUBzdXBwb3J0cyBub3QgKGluc2V0LWlubGluZS1lbmQ6MCl7LnNraW50b25lLWxpc3R7cmlnaHQ6MH19LnNraW50b25lLWxpc3Qubm8tYW5pbWF0ZXt0cmFuc2l0aW9uOm5vbmV9LnRhYnBhbmVse292ZXJmbG93LXk6YXV0bztzY3JvbGxiYXItZ3V0dGVyOnN0YWJsZTstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07bWluLWhlaWdodDowO2ZsZXg6MTtjb250YWluOmNvbnRlbnR9LmVtb2ppLW1lbnV7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQodmFyKC0tbnVtLWNvbHVtbnMpLHZhcigtLXRvdGFsLWVtb2ppLXNpemUpKTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7d2lkdGg6MTAwJX0uZW1vamktbWVudS52aXNpYmlsaXR5LWF1dG97Y29udGVudC12aXNpYmlsaXR5OmF1dG87Y29udGFpbi1pbnRyaW5zaWMtc2l6ZTpjYWxjKHZhcigtLW51bS1jb2x1bW5zKSp2YXIoLS10b3RhbC1lbW9qaS1zaXplKSkgY2FsYyh2YXIoLS1udW0tcm93cykqdmFyKC0tdG90YWwtZW1vamktc2l6ZSkpfS5jYXRlZ29yeXtwYWRkaW5nOnZhcigtLWVtb2ppLXBhZGRpbmcpO2ZvbnQtc2l6ZTp2YXIoLS1jYXRlZ29yeS1mb250LXNpemUpO2NvbG9yOnZhcigtLWNhdGVnb3J5LWZvbnQtY29sb3IpfS5lbW9qaSxidXR0b24uZW1vaml7Zm9udC1zaXplOnZhcigtLWVtb2ppLXNpemUpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3JkZXItcmFkaXVzOjEwMCU7aGVpZ2h0OnZhcigtLXRvdGFsLWVtb2ppLXNpemUpO3dpZHRoOnZhcigtLXRvdGFsLWVtb2ppLXNpemUpO2xpbmUtaGVpZ2h0OjE7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtZmFtaWx5OnZhcigtLWVtb2ppLWZvbnQtZmFtaWx5KTtjdXJzb3I6cG9pbnRlcn1AbWVkaWEgKGhvdmVyOmhvdmVyKSBhbmQgKHBvaW50ZXI6ZmluZSl7LmVtb2ppOmhvdmVyLGJ1dHRvbi5lbW9qaTpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kKX19LmVtb2ppLmFjdGl2ZSwuZW1vamk6YWN0aXZlLGJ1dHRvbi5lbW9qaS5hY3RpdmUsYnV0dG9uLmVtb2ppOmFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZCl9Lm9uc2NyZWVuIC5jdXN0b20tZW1vamk6OmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7d2lkdGg6dmFyKC0tZW1vamktc2l6ZSk7aGVpZ2h0OnZhcigtLWVtb2ppLXNpemUpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNvbnRhaW47YmFja2dyb3VuZC1pbWFnZTp2YXIoLS1jdXN0b20tZW1vamktYmFja2dyb3VuZCl9Lm5hdiwubmF2LWJ1dHRvbnthbGlnbi1pdGVtczpjZW50ZXJ9Lm5hdntkaXNwbGF5OmdyaWQ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Y29udGFpbjpjb250ZW50fS5uYXYtYnV0dG9ue2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5uYXYtZW1vaml7Zm9udC1zaXplOnZhcigtLWNhdGVnb3J5LWVtb2ppLXNpemUpO3dpZHRoOnZhcigtLXRvdGFsLWNhdGVnb3J5LWVtb2ppLXNpemUpO2hlaWdodDp2YXIoLS10b3RhbC1jYXRlZ29yeS1lbW9qaS1zaXplKX0uaW5kaWNhdG9yLXdyYXBwZXJ7ZGlzcGxheTpmbGV4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcil9LmluZGljYXRvcnt3aWR0aDpjYWxjKDEwMCUvdmFyKC0tbnVtLWdyb3VwcykpO2hlaWdodDp2YXIoLS1pbmRpY2F0b3ItaGVpZ2h0KTtvcGFjaXR5OnZhcigtLWluZGljYXRvci1vcGFjaXR5KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWluZGljYXRvci1jb2xvcik7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHk7dHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXIsdHJhbnNmb3JtIC4yNXMgZWFzZS1pbi1vdXR9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LmluZGljYXRvcnt3aWxsLWNoYW5nZTpvcGFjaXR5O3RyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyfX0ucGFkLXRvcCxpbnB1dC5zZWFyY2h7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTt3aWR0aDoxMDAlfS5wYWQtdG9we2hlaWdodDp2YXIoLS1lbW9qaS1wYWRkaW5nKTt6LWluZGV4OjN9LnNlYXJjaC1yb3d7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1lbW9qaS1wYWRkaW5nKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1lbW9qaS1wYWRkaW5nKX0uc2VhcmNoLXdyYXBwZXJ7ZmxleDoxO21pbi13aWR0aDowfWlucHV0LnNlYXJjaHtwYWRkaW5nOnZhcigtLWlucHV0LXBhZGRpbmcpO2JvcmRlci1yYWRpdXM6dmFyKC0taW5wdXQtYm9yZGVyLXJhZGl1cyk7Ym9yZGVyOnZhcigtLWlucHV0LWJvcmRlci1zaXplKSBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXItY29sb3IpO2NvbG9yOnZhcigtLWlucHV0LWZvbnQtY29sb3IpO2ZvbnQtc2l6ZTp2YXIoLS1pbnB1dC1mb250LXNpemUpO2xpbmUtaGVpZ2h0OnZhcigtLWlucHV0LWxpbmUtaGVpZ2h0KX1pbnB1dC5zZWFyY2g6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yKX0uZmF2b3JpdGVze292ZXJmbG93LXk6YXV0bztzY3JvbGxiYXItZ3V0dGVyOnN0YWJsZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2JvcmRlci10b3A6dmFyKC0tYm9yZGVyLXNpemUpIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Y29udGFpbjpjb250ZW50fS5tZXNzYWdle3BhZGRpbmc6dmFyKC0tZW1vamktcGFkZGluZyl9XCI7XG5cbmNvbnN0IFBST1BTID0gW1xuICAnY3VzdG9tRW1vamknLFxuICAnY3VzdG9tQ2F0ZWdvcnlTb3J0aW5nJyxcbiAgJ2RhdGFiYXNlJyxcbiAgJ2RhdGFTb3VyY2UnLFxuICAnaTE4bicsXG4gICdsb2NhbGUnLFxuICAnc2tpblRvbmVFbW9qaScsXG4gICdlbW9qaVZlcnNpb24nXG5dO1xuXG4vLyBTdHlsZXMgaW5qZWN0ZWQgb3Vyc2VsdmVzLCBzbyB3ZSBjYW4gZGVjbGFyZSB0aGUgRk9OVF9GQU1JTFkgdmFyaWFibGUgaW4gb25lIHBsYWNlXG5jb25zdCBFWFRSQV9TVFlMRVMgPSBgOmhvc3R7LS1lbW9qaS1mb250LWZhbWlseToke0ZPTlRfRkFNSUxZfX1gO1xuXG5jbGFzcyBQaWNrZXJFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGJhc2VTdHlsZXMgKyBFWFRSQV9TVFlMRVM7XG4gICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB0aGlzLl9jdHggPSB7XG4gICAgICAvLyBTZXQgZGVmYXVsdHNcbiAgICAgIGxvY2FsZTogREVGQVVMVF9MT0NBTEUsXG4gICAgICBkYXRhU291cmNlOiBERUZBVUxUX0RBVEFfU09VUkNFLFxuICAgICAgc2tpblRvbmVFbW9qaTogREVGQVVMVF9TS0lOX1RPTkVfRU1PSkksXG4gICAgICBjdXN0b21DYXRlZ29yeVNvcnRpbmc6IERFRkFVTFRfQ0FURUdPUllfU09SVElORyxcbiAgICAgIGN1c3RvbUVtb2ppOiBudWxsLFxuICAgICAgaTE4bjogZW5JMThuLFxuICAgICAgZW1vamlWZXJzaW9uOiBudWxsLFxuICAgICAgLi4ucHJvcHNcbiAgICB9O1xuICAgIC8vIEhhbmRsZSBwcm9wZXJ0aWVzIHNldCBiZWZvcmUgdGhlIGVsZW1lbnQgd2FzIHVwZ3JhZGVkXG4gICAgZm9yIChjb25zdCBwcm9wIG9mIFBST1BTKSB7XG4gICAgICBpZiAocHJvcCAhPT0gJ2RhdGFiYXNlJyAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcywgcHJvcCkpIHtcbiAgICAgICAgdGhpcy5fY3R4W3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgZGVsZXRlIHRoaXNbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2RiRmx1c2goKTsgLy8gd2FpdCBmb3IgYSBmbHVzaCBiZWZvcmUgY3JlYXRpbmcgdGhlIGRiLCBpbiBjYXNlIHRoZSB1c2VyIGNhbGxzIGUuZy4gYSBzZXR0ZXIgb3Igc2V0QXR0cmlidXRlXG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgcmVzY3VlRWxlbWVudFByb3RvdHlwZSh0aGlzKTtcbiAgICAvLyBUaGUgX2NtcCBtYXkgYmUgZGVmaW5lZCBpZiB0aGUgY29tcG9uZW50IHdhcyBpbW1lZGlhdGVseSBkaXNjb25uZWN0ZWQgYW5kIHRoZW4gcmVjb25uZWN0ZWQuIEluIHRoYXQgY2FzZSxcbiAgICAvLyBkbyBub3RoaW5nIChwcmVzZXJ2ZSB0aGUgc3RhdGUpXG4gICAgaWYgKCF0aGlzLl9jbXApIHtcbiAgICAgIHRoaXMuX2NtcCA9IGNyZWF0ZVJvb3QodGhpcy5zaGFkb3dSb290LCB0aGlzLl9jdHgpO1xuICAgIH1cbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICByZXNjdWVFbGVtZW50UHJvdG90eXBlKHRoaXMpO1xuICAgIC8vIENoZWNrIGluIGEgbWljcm90YXNrIGlmIHRoZSBlbGVtZW50IGlzIHN0aWxsIGNvbm5lY3RlZC4gSWYgc28sIHRyZWF0IHRoaXMgYXMgYSBcIm1vdmVcIiByYXRoZXIgdGhhbiBhIGRpc2Nvbm5lY3RcbiAgICAvLyBJbnNwaXJlZCBieSBWdWU6IGh0dHBzOi8vdnVlanMub3JnL2d1aWRlL2V4dHJhcy93ZWItY29tcG9uZW50cy5odG1sI2J1aWxkaW5nLWN1c3RvbS1lbGVtZW50cy13aXRoLXZ1ZVxuICAgIHFNKCgpID0+IHtcbiAgICAgIC8vIHRoaXMuX2NtcCBtYXkgYmUgZGVmaW5lZCBpZiBjb25uZWN0LWRpc2Nvbm5lY3QtY29ubmVjdC1kaXNjb25uZWN0IG9jY3VycyBzeW5jaHJvbm91c2x5XG4gICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQgJiYgdGhpcy5fY21wKSB7XG4gICAgICAgIHRoaXMuX2NtcC4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9jbXAgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgY29uc3QgeyBkYXRhYmFzZSB9ID0gdGhpcy5fY3R4O1xuICAgICAgICBkYXRhYmFzZS5jbG9zZSgpXG4gICAgICAgICAgLy8gb25seSBoYXBwZW5zIGlmIHRoZSBkYXRhYmFzZSBmYWlsZWQgdG8gbG9hZCBpbiB0aGUgZmlyc3QgcGxhY2UsIHNvIHdlIGRvbid0IGNhcmVcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcyAoKSB7XG4gICAgcmV0dXJuIFsnbG9jYWxlJywgJ2RhdGEtc291cmNlJywgJ3NraW4tdG9uZS1lbW9qaScsICdlbW9qaS12ZXJzaW9uJ10gLy8gY29tcGxleCBvYmplY3RzIGFyZW4ndCBzdXBwb3J0ZWQsIGFsc28gdXNlIGtlYmFiLWNhc2VcbiAgfVxuXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayAoYXR0ck5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIHRoaXMuX3NldChcbiAgICAgIC8vIGNvbnZlcnQgZnJvbSBrZWJhYi1jYXNlIHRvIGNhbWVsY2FzZVxuICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzM4NTIjaXNzdWVjb21tZW50LTY2NTAzNzAxNVxuICAgICAgYXR0ck5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgKF8sIHVwKSA9PiB1cC50b1VwcGVyQ2FzZSgpKSxcbiAgICAgIC8vIGNvbnZlcnQgc3RyaW5nIGF0dHJpYnV0ZSB0byBmbG9hdCBpZiBuZWNlc3NhcnlcbiAgICAgIGF0dHJOYW1lID09PSAnZW1vamktdmVyc2lvbicgPyBwYXJzZUZsb2F0KG5ld1ZhbHVlKSA6IG5ld1ZhbHVlXG4gICAgKTtcbiAgfVxuXG4gIF9zZXQgKHByb3AsIG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5fY3R4W3Byb3BdID0gbmV3VmFsdWU7XG4gICAgaWYgKHRoaXMuX2NtcCkge1xuICAgICAgdGhpcy5fY21wLiRzZXQoeyBbcHJvcF06IG5ld1ZhbHVlIH0pO1xuICAgIH1cbiAgICBpZiAoWydsb2NhbGUnLCAnZGF0YVNvdXJjZSddLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICB0aGlzLl9kYkZsdXNoKCk7XG4gICAgfVxuICB9XG5cbiAgX2RiQ3JlYXRlICgpIHtcbiAgICBjb25zdCB7IGxvY2FsZSwgZGF0YVNvdXJjZSwgZGF0YWJhc2UgfSA9IHRoaXMuX2N0eDtcbiAgICAvLyBvbmx5IGNyZWF0ZSBhIG5ldyBkYXRhYmFzZSBpZiB3ZSByZWFsbHkgbmVlZCB0b1xuICAgIGlmICghZGF0YWJhc2UgfHwgZGF0YWJhc2UubG9jYWxlICE9PSBsb2NhbGUgfHwgZGF0YWJhc2UuZGF0YVNvdXJjZSAhPT0gZGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5fc2V0KCdkYXRhYmFzZScsIG5ldyBEYXRhYmFzZSh7IGxvY2FsZSwgZGF0YVNvdXJjZSB9KSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBEYXRhYmFzZSBpbiBvbmUgbWljcm90YXNrIGlmIHRoZSBsb2NhbGUvZGF0YVNvdXJjZSBjaGFuZ2UuIFdlIGRvIG9uZSBtaWNyb3Rhc2tcbiAgLy8gc28gd2UgZG9uJ3QgY3JlYXRlIHR3byBEYXRhYmFzZXMgaWYgZS5nLiBib3RoIHRoZSBsb2NhbGUgYW5kIHRoZSBkYXRhU291cmNlIGNoYW5nZVxuICBfZGJGbHVzaCAoKSB7XG4gICAgcU0oKCkgPT4gKFxuICAgICAgdGhpcy5fZGJDcmVhdGUoKVxuICAgICkpO1xuICB9XG59XG5cbmNvbnN0IGRlZmluaXRpb25zID0ge307XG5cbmZvciAoY29uc3QgcHJvcCBvZiBQUk9QUykge1xuICBkZWZpbml0aW9uc1twcm9wXSA9IHtcbiAgICBnZXQgKCkge1xuICAgICAgaWYgKHByb3AgPT09ICdkYXRhYmFzZScpIHtcbiAgICAgICAgLy8gaW4gcmFyZSBjYXNlcywgdGhlIG1pY3JvdGFzayBtYXkgbm90IGJlIGZsdXNoZWQgeWV0LCBzbyB3ZSBuZWVkIHRvIGluc3RhbnRpYXRlIHRoZSBEQlxuICAgICAgICAvLyBub3cgaWYgdGhlIHVzZXIgaXMgYXNraW5nIGZvciBpdFxuICAgICAgICB0aGlzLl9kYkNyZWF0ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2N0eFtwcm9wXVxuICAgIH0sXG4gICAgc2V0ICh2YWwpIHtcbiAgICAgIGlmIChwcm9wID09PSAnZGF0YWJhc2UnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGF0YWJhc2UgaXMgcmVhZC1vbmx5JylcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NldChwcm9wLCB2YWwpO1xuICAgIH1cbiAgfTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUGlja2VyRWxlbWVudC5wcm90b3R5cGUsIGRlZmluaXRpb25zKTtcblxuLy8gU2VlIGh0dHBzOi8vamFrZWFyY2hpYmFsZC5jb20vMjAyNS9maXJlZm94LWN1c3RvbS1lbGVtZW50cy1pZnJhbWVzLWJ1Zy9cbi8vIFRPRE86IHJlbW92ZSB3aGVuIHRoZSBGaXJlZm94IGJ1ZyBpcyBmaXhlZDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTUwMjgxNFxuZnVuY3Rpb24gcmVzY3VlRWxlbWVudFByb3RvdHlwZSAoZWxlbWVudCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIFBpY2tlckVsZW1lbnQpKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGVsZW1lbnQsIGN1c3RvbUVsZW1lbnRzLmdldChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkucHJvdG90eXBlKTtcbiAgfVxufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2Vtb2ppLXBpY2tlcicpKSB7IC8vIGlmIGFscmVhZHkgZGVmaW5lZCwgZG8gbm90aGluZyAoZS5nLiBzYW1lIHNjcmlwdCBpbXBvcnRlZCB0d2ljZSlcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlbW9qaS1waWNrZXInLCBQaWNrZXJFbGVtZW50KTtcbn1cblxuZXhwb3J0IHsgUGlja2VyRWxlbWVudCBhcyBkZWZhdWx0LCByZXNjdWVFbGVtZW50UHJvdG90eXBlIH07XG4iLCAiLyoqXG4gKiBNZWRpYSBoZWxwZXJzIGZvciB0aGUgY29tcG9zZXIuXG4gKlxuICogQ2VudHJhbGl6ZXMgdGhlIGFjY2VwdC9yZWplY3QgZGVjaXNpb24gZm9yIGltYWdlIGZpbGVzIHNvIGl0J3MgdGVzdGFibGVcbiAqIG91dHNpZGUgdGhlIElBUEkgc3RvcmUuIEJyb3dzZXJzIHJlcG9ydCBpUGhvbmUgSEVJQyBwaG90b3MgaW5jb25zaXN0ZW50bHlcbiAqIChTYWZhcmkgPSBpbWFnZS9oZWljOyBBbmRyb2lkIENocm9tZSA9IGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSk7IHRoZVxuICogYGFjY2VwdGFibGVgIGNoZWNrIGhhcyB0byBmYWxsIGJhY2sgdG8gdGhlIGZpbGUgZXh0ZW5zaW9uIHdoZW4gdGhlIE1JTUVcbiAqIHR5cGUgZG9lc24ndCBtYXRjaC5cbiAqL1xuXG5leHBvcnQgY29uc3QgQUNDRVBUX01JTUVfUkUgPSAvXmltYWdlXFwvKGpwZWd8cG5nfGdpZnx3ZWJwfGF2aWZ8aGVpY3xoZWlmKSQvaTtcbmV4cG9ydCBjb25zdCBIRUlDX0VYVF9SRSAgICA9IC9cXC4oaGVpY3xoZWlmKSQvaTtcbmNvbnN0IEFDQ0VQVF9FWFRfUkUgICAgICAgICA9IC9cXC4oanBlP2d8cG5nfGdpZnx3ZWJwfGF2aWZ8aGVpY3xoZWlmKSQvaTtcblxuLyoqXG4gKiBAcGFyYW0ge3sgdHlwZT86IHN0cmluZywgbmFtZT86IHN0cmluZyB9fSBmaWxlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjY2VwdGFibGUoIGZpbGUgKSB7XG4gIGlmICggISBmaWxlICkgcmV0dXJuIGZhbHNlO1xuICBpZiAoIEFDQ0VQVF9NSU1FX1JFLnRlc3QoIGZpbGUudHlwZSB8fCAnJyApICkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBBQ0NFUFRfRVhUX1JFLnRlc3QoIGZpbGUubmFtZSB8fCAnJyApO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7eyB0eXBlPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nIH19IGZpbGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNIZWljKCBmaWxlICkge1xuICBpZiAoICEgZmlsZSApIHJldHVybiBmYWxzZTtcbiAgaWYgKCBIRUlDX0VYVF9SRS50ZXN0KCBmaWxlLm5hbWUgfHwgJycgKSApIHJldHVybiB0cnVlO1xuICByZXR1cm4gL2hlaWZ8aGVpYy9pLnRlc3QoIGZpbGUudHlwZSB8fCAnJyApO1xufVxuIiwgImltcG9ydCB7IHN0b3JlLCBnZXRDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9pbnRlcmFjdGl2aXR5JztcbmltcG9ydCAnZW1vamktcGlja2VyLWVsZW1lbnQnO1xuXG5sZXQgcGlja2VyRWwgICAgICAgICAgPSBudWxsO1xubGV0IHBlbmRpbmdUYXJnZXQgICAgID0gbnVsbDtcbmxldCBvdXRzaWRlQ2xpY2tIYW5kbGVyID0gbnVsbDtcblxuc3RvcmUoICdoZXlmYW0vcmVhY3Rpb25zJywge1xuICBhY3Rpb25zOiB7XG4gICAgKnRvZ2dsZSggZSApIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGU/LnRhcmdldD8uY2xvc2VzdCggJ1tkYXRhLWlkXScgKTtcbiAgICAgIGNvbnN0IGlkICAgICAgICA9IGNvbnRhaW5lciA/IHBhcnNlSW50KCBjb250YWluZXIuZGF0YXNldC5pZCwgMTAgKSA6IDA7XG4gICAgICBjb25zdCB0YXJnZXQgICAgPSBjb250YWluZXI/LmRhdGFzZXQudGFyZ2V0VHlwZSB8fCAncG9zdCc7XG4gICAgICBjb25zdCBjdHggICAgICAgPSBnZXRDb250ZXh0KCk7XG4gICAgICBjb25zdCBlbW9qaSAgICAgPSBjdHguZW50cnk/LmVtb2ppO1xuICAgICAgY29uc3QgbWluZSAgICAgID0gISEgY3R4LmVudHJ5Py5taW5lO1xuICAgICAgaWYgKCAhIGlkIHx8ICEgZW1vamkgKSByZXR1cm47XG4gICAgICB5aWVsZCBhcHBseSggdGFyZ2V0LCBpZCwgZW1vamksIG1pbmUgKTtcbiAgICB9LFxuICAgIG9wZW5QaWNrZXIoIGUgKSB7XG4gICAgICBjb25zdCBidG4gICAgICAgPSBlPy5jdXJyZW50VGFyZ2V0IHx8IGU/LnRhcmdldD8uY2xvc2VzdCggJ2J1dHRvbicgKSB8fCBlPy50YXJnZXQ7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBlPy50YXJnZXQ/LmNsb3Nlc3QoICdbZGF0YS1pZF0nICk7XG4gICAgICBjb25zdCBpZCAgICAgICAgPSBjb250YWluZXIgPyBwYXJzZUludCggY29udGFpbmVyLmRhdGFzZXQuaWQsIDEwICkgOiAwO1xuICAgICAgY29uc3QgdGFyZ2V0ICAgID0gY29udGFpbmVyPy5kYXRhc2V0LnRhcmdldFR5cGUgfHwgJ3Bvc3QnO1xuICAgICAgaWYgKCAhIGlkIHx8ICEgYnRuICkgcmV0dXJuO1xuICAgICAgb3BlblBpY2tlckF0KCBidG4sIHRhcmdldCwgaWQgKTtcbiAgICB9LFxuICB9LFxufSApO1xuXG5mdW5jdGlvbiogYXBwbHkoIHRhcmdldF90eXBlLCB0YXJnZXRfaWQsIGVtb2ppLCByZW1vdmUgPSBmYWxzZSApIHtcbiAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gIHlpZWxkIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vJHtoZXlmYW0uZmFtU2x1Z30vcmVhY3Rpb25zYCwge1xuICAgIG1ldGhvZDogcmVtb3ZlID8gJ0RFTEVURScgOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7IHRhcmdldF90eXBlLCB0YXJnZXRfaWQsIGVtb2ppIH0gKSxcbiAgfSApO1xuICB0cnkgeyBzdG9yZSggJ2hleWZhbS9mZWVkJyApLmNhbGxiYWNrcy5yZWZyZXNoKCBoZXlmYW0gKTsgfSBjYXRjaCAoIGUgKSB7fVxufVxuXG5hc3luYyBmdW5jdGlvbiBhcHBseURpcmVjdCggdGFyZ2V0X3R5cGUsIHRhcmdldF9pZCwgZW1vamkgKSB7XG4gIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICBhd2FpdCBmZXRjaCggYCR7aGV5ZmFtLmFwaUJhc2V9LyR7aGV5ZmFtLmZhbVNsdWd9L3JlYWN0aW9uc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgdGFyZ2V0X3R5cGUsIHRhcmdldF9pZCwgZW1vamkgfSApLFxuICB9ICk7XG4gIHRyeSB7IHN0b3JlKCAnaGV5ZmFtL2ZlZWQnICkuY2FsbGJhY2tzLnJlZnJlc2goIGhleWZhbSApOyB9IGNhdGNoICggZSApIHt9XG59XG5cbmZ1bmN0aW9uIGdldFBpY2tlcigpIHtcbiAgaWYgKCBwaWNrZXJFbCApIHJldHVybiBwaWNrZXJFbDtcbiAgcGlja2VyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZW1vamktcGlja2VyJyApO1xuICBwaWNrZXJFbC5jbGFzc0xpc3QuYWRkKCAnaGV5ZmFtLWVtb2ppLXBpY2tlcicgKTtcbiAgcGlja2VyRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBwaWNrZXJFbC5zdHlsZS56SW5kZXggICA9ICcxMDAwJztcbiAgcGlja2VyRWwuc3R5bGUuZGlzcGxheSAgPSAnbm9uZSc7XG4gIHBpY2tlckVsLmFkZEV2ZW50TGlzdGVuZXIoICdlbW9qaS1jbGljaycsICggZXYgKSA9PiB7XG4gICAgaWYgKCBwZW5kaW5nVGFyZ2V0ICkge1xuICAgICAgYXBwbHlEaXJlY3QoIHBlbmRpbmdUYXJnZXQudGFyZ2V0X3R5cGUsIHBlbmRpbmdUYXJnZXQudGFyZ2V0X2lkLCBldi5kZXRhaWwudW5pY29kZSApO1xuICAgIH1cbiAgICBjbG9zZVBpY2tlcigpO1xuICB9ICk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHBpY2tlckVsICk7XG4gIHJldHVybiBwaWNrZXJFbDtcbn1cblxuZnVuY3Rpb24gb3BlblBpY2tlckF0KCBidG4sIHRhcmdldF90eXBlLCB0YXJnZXRfaWQgKSB7XG4gIGNvbnN0IHAgPSBnZXRQaWNrZXIoKTtcbiAgcGVuZGluZ1RhcmdldCA9IHsgdGFyZ2V0X3R5cGUsIHRhcmdldF9pZCB9O1xuICBjb25zdCByZWN0ICAgICAgICAgPSBidG4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHBpY2tlckhlaWdodCA9IDQwMDsgLy8gZW1vamktcGlja2VyLWVsZW1lbnQgZGVmYXVsdFxuICBjb25zdCBmaXRzQmVsb3cgICAgPSByZWN0LmJvdHRvbSArIHBpY2tlckhlaWdodCArIDEyIDwgd2luZG93LmlubmVySGVpZ2h0O1xuICBjb25zdCB0b3AgICAgICAgICAgPSBmaXRzQmVsb3cgPyByZWN0LmJvdHRvbSArIHdpbmRvdy5zY3JvbGxZICsgNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZIC0gcGlja2VySGVpZ2h0IC0gNjtcbiAgY29uc3QgbGVmdCAgICAgICAgID0gTWF0aC5tYXgoIDgsIE1hdGgubWluKCByZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCwgd2luZG93LmlubmVyV2lkdGggLSAzNjAgKSApO1xuICBwLnN0eWxlLnRvcCAgICAgPSBgJHt0b3B9cHhgO1xuICBwLnN0eWxlLmxlZnQgICAgPSBgJHtsZWZ0fXB4YDtcbiAgcC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gIC8vIEF0dGFjaCBvdXRzaWRlLWNsaWNrIGhhbmRsZXIgb24gdGhlIE5FWFQgdGljayBzbyB0aGUgY2xpY2sgdGhhdCBvcGVuZWRcbiAgLy8gdGhlIHBpY2tlciBkb2Vzbid0IGltbWVkaWF0ZWx5IGNsb3NlIGl0LlxuICBpZiAoIG91dHNpZGVDbGlja0hhbmRsZXIgKSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvdXRzaWRlQ2xpY2tIYW5kbGVyICk7XG4gIG91dHNpZGVDbGlja0hhbmRsZXIgPSAoIGV2ICkgPT4ge1xuICAgIGlmICggISBwLmNvbnRhaW5zKCBldi50YXJnZXQgKSAmJiAhIGJ0bi5jb250YWlucyggZXYudGFyZ2V0ICkgKSB7XG4gICAgICBjbG9zZVBpY2tlcigpO1xuICAgIH1cbiAgfTtcbiAgc2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgb3V0c2lkZUNsaWNrSGFuZGxlciApLCAwICk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUGlja2VyKCkge1xuICBpZiAoIHBpY2tlckVsICkgcGlja2VyRWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcGVuZGluZ1RhcmdldCA9IG51bGw7XG4gIGlmICggb3V0c2lkZUNsaWNrSGFuZGxlciApIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvdXRzaWRlQ2xpY2tIYW5kbGVyICk7XG4gICAgb3V0c2lkZUNsaWNrSGFuZGxlciA9IG51bGw7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBzdG9yZSwgZ2V0Q29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvaW50ZXJhY3Rpdml0eSc7XG5cbi8qKlxuICogVGhlIGlubGluZSByZXBseSBjb21wb3NlciAob25lIHBlciBjb21tZW50KSBpcyBzdGF0ZS1ib3VuZDogb25seSBvbmUgaXNcbiAqIG9wZW4gYXQgYSB0aW1lLCBhbmQgYHN0YXRlLmJvZHlgIGNhcnJpZXMgaXRzIGRyYWZ0LiBFYWNoIHBvc3QgY2FyZCdzXG4gKiBhbHdheXMtdmlzaWJsZSByb290IGNvbXBvc2VyIGlzIGEgdmFuaWxsYSBmb3JtIFx1MjAxNCBpdHMgdGV4dGFyZWEgaXNuJ3RcbiAqIElBUEktYm91bmQsIHNvIG11bHRpcGxlIGNhcmRzIGNhbiBjb2V4aXN0IG9uIHRoZSBmZWVkIHdpdGhvdXQgc2hhcmluZ1xuICogc3RhdGUuIFRoZSBzdWJtaXQgYWN0aW9uIGhhbmRsZXMgYm90aCBraW5kcyBhbmQgd2Fsa3MgdXAgdG8gdGhlXG4gKiBlbmNsb3NpbmcgcG9zdCBjYXJkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggcG9zdCB0byBjb21tZW50IG9uLlxuICovXG5zdG9yZSggJ2hleWZhbS9jb21tZW50cycsIHtcbiAgc3RhdGU6IHtcbiAgICBjb21wb3Npbmc6ICAwLCAgIC8vIDAgPSBubyBpbmxpbmUgY29tcG9zZXIgb3Blbjsgb3RoZXJ3aXNlIHRoZSBwYXJlbnQgY29tbWVudCBpZFxuICAgIGJvZHk6ICAgICAgICcnLFxuICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgcmVwbHkoKSB7XG4gICAgICBjb25zdCBjdHggPSBnZXRDb250ZXh0KCAnaGV5ZmFtL2ZlZWQnICk7XG4gICAgICBjb25zdCBpZCAgPSBjdHg/LmNvbW1lbnQ/LmlkID8gcGFyc2VJbnQoIGN0eC5jb21tZW50LmlkLCAxMCApIDogMDtcbiAgICAgIGlmICggISBpZCApIHJldHVybjtcbiAgICAgIGNvbnN0IHMgPSBzdG9yZSggJ2hleWZhbS9jb21tZW50cycgKS5zdGF0ZTtcbiAgICAgIGNsb3NlT3BlbklubGluZUZvcm1zKCk7XG4gICAgICBpZiAoIHMuY29tcG9zaW5nID09PSBpZCApIHtcbiAgICAgICAgcy5jb21wb3NpbmcgPSAwO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzLmNvbXBvc2luZyA9IGlkO1xuICAgICAgcy5ib2R5ICAgICAgPSAnJztcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBgYXJ0aWNsZS5oZXlmYW0tY29tbWVudFtkYXRhLWlkPVwiJHtpZH1cIl0gLmhleWZhbS1jb21tZW50LWZvcm0tLWlubGluZWAgKTtcbiAgICAgIGlmICggZm9ybSApIHtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCAnaXMtb3BlbicgKTtcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCAndGV4dGFyZWEnICk/LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVCb2R5KCBlICkge1xuICAgICAgc3RvcmUoICdoZXlmYW0vY29tbWVudHMnICkuc3RhdGUuYm9keSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgYXV0b1NpemUoIGUudGFyZ2V0ICk7XG4gICAgfSxcbiAgICBhdXRvc2l6ZSggZSApIHtcbiAgICAgIGF1dG9TaXplKCBlLnRhcmdldCApO1xuICAgIH0sXG4gICAgKnN1Ym1pdCggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm0gICAgID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCBwb3N0Q2FyZCA9IGZvcm0uY2xvc2VzdCggJ1tkYXRhLXRhcmdldC10eXBlPVwicG9zdFwiXScgKTtcbiAgICAgIGNvbnN0IHBvc3RfaWQgID0gcG9zdENhcmQgPyBwYXJzZUludCggcG9zdENhcmQuZGF0YXNldC5pZCwgMTAgKSA6IDA7XG4gICAgICBpZiAoICEgcG9zdF9pZCApIHJldHVybjtcbiAgICAgIGNvbnN0IGlzUm9vdCA9IGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCAnaGV5ZmFtLWNvbW1lbnQtZm9ybS0tcm9vdCcgKTtcbiAgICAgIGNvbnN0IHRhICAgICA9IGZvcm0ucXVlcnlTZWxlY3RvciggJ3RleHRhcmVhJyApO1xuICAgICAgY29uc3QgcyAgICAgID0gc3RvcmUoICdoZXlmYW0vY29tbWVudHMnICkuc3RhdGU7XG4gICAgICBpZiAoIHMuc3VibWl0dGluZyApIHJldHVybjtcbiAgICAgIGNvbnN0IGRyYWZ0ID0gaXNSb290ID8gKCB0YT8udmFsdWUgfHwgJycgKSA6IHMuYm9keTtcbiAgICAgIGNvbnN0IGJvZHkgID0gZHJhZnQudHJpbSgpO1xuICAgICAgaWYgKCAhIGJvZHkgKSByZXR1cm47XG4gICAgICBjb25zdCBwYXJlbnRfaWQgPSBpc1Jvb3QgPyAwIDogcy5jb21wb3Npbmc7XG4gICAgICBzLnN1Ym1pdHRpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS8ke2hleWZhbS5mYW1TbHVnfS9jb21tZW50c2AsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ1gtV1AtTm9uY2UnOiAgIGhleWZhbS5ub25jZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7IHBvc3RfaWQsIHBhcmVudF9pZCwgYm9keSB9ICksXG4gICAgICAgIH0gKTtcbiAgICAgICAgaWYgKCAhIHIub2sgKSB0aHJvdyBuZXcgRXJyb3IoICdjb21tZW50LWZhaWxlZCcgKTtcbiAgICAgICAgaWYgKCBpc1Jvb3QgKSB7XG4gICAgICAgICAgaWYgKCB0YSApIHsgdGEudmFsdWUgPSAnJzsgYXV0b1NpemUoIHRhICk7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzLmJvZHkgICAgICA9ICcnO1xuICAgICAgICAgIHMuY29tcG9zaW5nID0gMDtcbiAgICAgICAgICBjbG9zZU9wZW5JbmxpbmVGb3JtcygpO1xuICAgICAgICB9XG4gICAgICAgIHN0b3JlKCAnaGV5ZmFtL2ZlZWQnICkuY2FsbGJhY2tzLnJlZnJlc2goIGhleWZhbSApO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgYWxlcnQoICdDb3VsZCBub3QgY29tbWVudC4gVHJ5IGFnYWluLicgKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHMuc3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59ICk7XG5cbmZ1bmN0aW9uIGNsb3NlT3BlbklubGluZUZvcm1zKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmhleWZhbS1jb21tZW50LWZvcm0tLWlubGluZS5pcy1vcGVuJyApXG4gICAgLmZvckVhY2goICggZWwgKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCAnaXMtb3BlbicgKSApO1xufVxuXG4vKipcbiAqIFJlc2l6ZSBhIHRleHRhcmVhIHRvIGZpdCBpdHMgY29udGVudCAodXAgdG8gYSBzb2Z0IGNhcCkuIFRoZSBjYXAga2VlcHNcbiAqIHJ1bmF3YXkgZXNzYXlzIGZyb20gcHVzaGluZyB0aGUgcmVzdCBvZiB0aGUgcGFnZSBvZmYtc2NyZWVuOyBzY3JvbGwga2lja3NcbiAqIGluIHBhc3QgaXQuXG4gKi9cbmNvbnN0IEFVVE9TSVpFX01BWCA9IDIwMDtcbmZ1bmN0aW9uIGF1dG9TaXplKCBlbCApIHtcbiAgaWYgKCAhIGVsIHx8IGVsLnRhZ05hbWUgIT09ICdURVhUQVJFQScgKSByZXR1cm47XG4gIGVsLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgZWwuc3R5bGUuaGVpZ2h0ID0gTWF0aC5taW4oIGVsLnNjcm9sbEhlaWdodCwgQVVUT1NJWkVfTUFYICkgKyAncHgnO1xuICBlbC5zdHlsZS5vdmVyZmxvd1kgPSBlbC5zY3JvbGxIZWlnaHQgPiBBVVRPU0laRV9NQVggPyAnYXV0bycgOiAnaGlkZGVuJztcbn1cbiIsICJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvaW50ZXJhY3Rpdml0eSc7XG5cbi8qKlxuICogUG9sbCB2b3Rpbmcgc3RvcmUuXG4gKlxuICogVGhlIHBvc3QtY2FyZCBwb2xsIHdpZGdldCBiaW5kcyBlYWNoIG9wdGlvbiBidXR0b24ncyBjbGljayB0b1xuICogYGhleWZhbS9wb2xsczo6YWN0aW9ucy52b3RlYC4gVGhlIGJ1dHRvbiBjYXJyaWVzIGBkYXRhLW9wdGlvbi1pbmRleGBcbiAqIGFuZCBpdHMgZW5jbG9zaW5nIGAuaGV5ZmFtLXBvc3QtY2FyZGAgY2FycmllcyBgZGF0YS1wb3N0LWlkYDsgd2UgcmVhZFxuICogdGhvc2UgdG8gaWRlbnRpZnkgdGhlIHRhcmdldCB3aXRob3V0IHBpcGluZyB0aGUgcG9zdCBpZCB0aHJvdWdoIGNvbnRleHQuXG4gKlxuICogQWZ0ZXIgYSBzdWNjZXNzZnVsIHZvdGUgd2UgdHJpZ2dlciBgaGV5ZmFtL2ZlZWQ6OmNhbGxiYWNrcy5yZWZyZXNoYCBzb1xuICogdGhlIHJlc3VsdCBiYXJzICsgdm90ZXIgY2hpcHMgdXBkYXRlIHdpdGhvdXQgd2FpdGluZyBmb3IgdGhlIDEwc1xuICogcG9sbGluZyBjeWNsZS5cbiAqL1xuc3RvcmUoICdoZXlmYW0vcG9sbHMnLCB7XG4gIGFjdGlvbnM6IHtcbiAgICAqdm90ZSggZSApIHtcbiAgICAgIGNvbnN0IGJ0biA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGlkeCA9IGJ0biA/IHBhcnNlSW50KCBidG4uZGF0YXNldC5vcHRpb25JbmRleCwgMTAgKSA6IC0xO1xuICAgICAgY29uc3QgY2FyZCA9IGJ0biA/IGJ0bi5jbG9zZXN0KCAnW2RhdGEtcG9zdC1pZF0nICkgOiBudWxsO1xuICAgICAgY29uc3QgcGlkID0gY2FyZCA/IHBhcnNlSW50KCBjYXJkLmRhdGFzZXQucG9zdElkLCAxMCApIDogMDtcbiAgICAgIGlmICggISBwaWQgfHwgTnVtYmVyLmlzTmFOKCBpZHggKSB8fCBpZHggPCAwICkgcmV0dXJuO1xuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICBjb25zdCBmZWVkICAgPSBzdG9yZSggJ2hleWZhbS9mZWVkJyApO1xuICAgICAgY29uc3QgcG9zdHMgID0gQXJyYXkuaXNBcnJheSggZmVlZC5zdGF0ZS5wb3N0cyApID8gZmVlZC5zdGF0ZS5wb3N0cyA6IG51bGw7XG4gICAgICBjb25zdCBwb3N0ICAgPSBwb3N0cyA/IHBvc3RzLmZpbmQoIHAgPT4gcC5pZCA9PT0gcGlkICkgOiBudWxsO1xuICAgICAgY29uc3QgcG9sbCAgID0gcG9zdD8ucG9sbDtcbiAgICAgIGlmICggISBwb2xsIHx8IHBvbGwuY2xvc2VkICkgcmV0dXJuO1xuICAgICAgaWYgKCBwb2xsLm15X3ZvdGUgPT09IGlkeCApIHJldHVybjsgLy8gY2xpY2tpbmcgeW91ciBleGlzdGluZyBwaWNrIFx1MjAxNCBuby1vcFxuXG4gICAgICAvLyBPcHRpbWlzdGljOiBzbmFwc2hvdCB0aGUga2V5cyB3ZSBtdXRhdGUgc28gd2UgY2FuIHJvbGwgYmFjayBvbiBlcnJvcixcbiAgICAgIC8vIHRoZW4gYXBwbHkgbG9jYWxseSBzbyB0aGUgYmFyIG1vdmVzIGJlZm9yZSB0aGUgbmV0d29yayByb3VuZCB0cmlwLlxuICAgICAgY29uc3Qgc25hcHNob3QgPSBzbmFwc2hvdFBvbGwoIHBvbGwgKTtcbiAgICAgIGNvbnN0IG1lID0ge1xuICAgICAgICB1c2VyX2lkOiAgICBoZXlmYW0udXNlcklkLFxuICAgICAgICBuYW1lOiAgICAgICBoZXlmYW0udXNlck5hbWUgfHwgJ1lvdScsXG4gICAgICAgIGF2YXRhcl91cmw6IGhleWZhbS51c2VyQXZhdGFyVXJsLFxuICAgICAgfTtcbiAgICAgIGFwcGx5Vm90ZSggcG9sbCwgaWR4LCBtZSApO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAkeyBoZXlmYW0uYXBpQmFzZSB9LyR7IGhleWZhbS5mYW1TbHVnIH0vcG9sbC12b3RlYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7IHBvc3RfaWQ6IHBpZCwgb3B0aW9uX2luZGV4OiBpZHggfSApLFxuICAgICAgICB9ICk7XG4gICAgICAgIGlmICggISByLm9rICkge1xuICAgICAgICAgIHJlc3RvcmVQb2xsKCBwb2xsLCBzbmFwc2hvdCApO1xuICAgICAgICAgIGNvbnN0IGJvZHkgPSB5aWVsZCByLmpzb24oKS5jYXRjaCggKCkgPT4gKCB7fSApICk7XG4gICAgICAgICAgaWYgKCBib2R5Py5lcnJvciA9PT0gJ2Nsb3NlZCcgKSB7XG4gICAgICAgICAgICBhbGVydCggJ1RoaXMgcG9sbCBoYXMgY2xvc2VkLicgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoICdDb3VsZCBub3Qgdm90ZS4gVHJ5IGFnYWluLicgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFB1bGwgdGhlIGZlZWQgaW4gdGhlIGJhY2tncm91bmQgc28gb3RoZXIgcGVvcGxlJ3Mgdm90ZXMgY2F0Y2ggdXA7XG4gICAgICAgIC8vIG91ciBvd24gY291bnQgaXMgYWxyZWFkeSBzaG93aW5nLlxuICAgICAgICBmZWVkLmNhbGxiYWNrcz8ucmVmcmVzaD8uKCBoZXlmYW0gKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIHJlc3RvcmVQb2xsKCBwb2xsLCBzbmFwc2hvdCApO1xuICAgICAgICBhbGVydCggJ0NvdWxkIG5vdCB2b3RlLiBUcnkgYWdhaW4uJyApO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59ICk7XG5cbi8qKlxuICogTXV0YXRlIGBwb2xsYCB0byByZWZsZWN0IGEgdm90ZSBvbiBgbmV3SWR4YC4gSGFuZGxlcyBib3RoIGZpcnN0IHZvdGVzXG4gKiAodG90YWwgZ3Jvd3MpIGFuZCByZS12b3RlcyAodG90YWwgc3RheXMsIHByZXZpb3VzIG9wdGlvbiBkZWNyZW1lbnRzKS5cbiAqIFBlcmNlbnRzICsgYmFyIHN0eWxlcyBhcmUgcmVjb21wdXRlZCBzbyB0aGUgVUkgbWF0Y2hlcyB3aGF0IHRoZSBzZXJ2ZXJcbiAqIHdpbGwgaGFuZCBiYWNrIG9uIHRoZSBuZXh0IHJlZnJlc2guXG4gKi9cbmZ1bmN0aW9uIGFwcGx5Vm90ZSggcG9sbCwgbmV3SWR4LCBtZSApIHtcbiAgY29uc3QgcHJldiA9IHBvbGwubXlfdm90ZTtcbiAgaWYgKCBwcmV2ID09PSBuZXdJZHggKSByZXR1cm47XG5cbiAgY29uc3Qgb3B0cyA9IHBvbGwub3B0aW9ucyB8fCBbXTtcbiAgaWYgKCBuZXdJZHggPCAwIHx8IG5ld0lkeCA+PSBvcHRzLmxlbmd0aCApIHJldHVybjtcblxuICBvcHRzWyBuZXdJZHggXS5jb3VudCArPSAxO1xuICBpZiAoIHByZXYgPj0gMCAmJiBwcmV2IDwgb3B0cy5sZW5ndGggKSB7XG4gICAgb3B0c1sgcHJldiBdLmNvdW50ID0gTWF0aC5tYXgoIDAsIG9wdHNbIHByZXYgXS5jb3VudCAtIDEgKTtcbiAgfSBlbHNlIHtcbiAgICBwb2xsLnRvdGFsX3ZvdGVzICs9IDE7XG4gIH1cblxuICAvLyBNb3ZlIG91ciBhdmF0YXIgYmV0d2VlbiB0aGUgcGVyLW9wdGlvbiB2b3RlciBzdHJpcHMuIE1hdGNoZXMgd2hhdCB0aGVcbiAgLy8gc2VydmVyIHdpbGwgaGFuZCBiYWNrIG9uIHRoZSBuZXh0IHJlZnJlc2gsIHNvIHRoZSBVSSBkb2Vzbid0IHJlZmxvdyBvbmNlXG4gIC8vIHRoZSByZXNwb25zZSBsYW5kcy5cbiAgaWYgKCBtZSAmJiBtZS51c2VyX2lkICkge1xuICAgIGZvciAoIGNvbnN0IG9wdCBvZiBvcHRzICkge1xuICAgICAgaWYgKCAhIEFycmF5LmlzQXJyYXkoIG9wdC52b3RlcnMgKSApIG9wdC52b3RlcnMgPSBbXTtcbiAgICB9XG4gICAgaWYgKCBwcmV2ID49IDAgJiYgcHJldiA8IG9wdHMubGVuZ3RoICkge1xuICAgICAgb3B0c1sgcHJldiBdLnZvdGVycyA9IG9wdHNbIHByZXYgXS52b3RlcnMuZmlsdGVyKCB2ID0+IHYudXNlcl9pZCAhPT0gbWUudXNlcl9pZCApO1xuICAgIH1cbiAgICBpZiAoICEgb3B0c1sgbmV3SWR4IF0udm90ZXJzLnNvbWUoIHYgPT4gdi51c2VyX2lkID09PSBtZS51c2VyX2lkICkgKSB7XG4gICAgICBvcHRzWyBuZXdJZHggXS52b3RlcnMucHVzaCgge1xuICAgICAgICB1c2VyX2lkOiAgICBtZS51c2VyX2lkLFxuICAgICAgICBuYW1lOiAgICAgICBtZS5uYW1lLFxuICAgICAgICBhdmF0YXJfdXJsOiBtZS5hdmF0YXJfdXJsLFxuICAgICAgfSApO1xuICAgIH1cbiAgfVxuXG4gIHBvbGwubXlfdm90ZSAgID0gbmV3SWR4O1xuICBwb2xsLmhhc192b3RlZCA9IHRydWU7XG5cbiAgY29uc3QgdG90YWwgPSBwb2xsLnRvdGFsX3ZvdGVzO1xuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBvcHRzLmxlbmd0aDsgaSsrICkge1xuICAgIG9wdHNbIGkgXS5pc19teV92b3RlID0gaSA9PT0gbmV3SWR4O1xuICAgIGNvbnN0IHBjdCA9IHRvdGFsID4gMCA/IE1hdGgucm91bmQoICggb3B0c1sgaSBdLmNvdW50IC8gdG90YWwgKSAqIDEwMCApIDogMDtcbiAgICBvcHRzWyBpIF0ucGVyY2VudCAgID0gcGN0O1xuICAgIG9wdHNbIGkgXS5iYXJfc3R5bGUgPSBgd2lkdGg6JHsgcGN0IH0lO2A7XG4gIH1cbn1cblxuLyoqIENhcHR1cmUganVzdCB0aGUgZmllbGRzIGFwcGx5Vm90ZSBtdXRhdGVzIFx1MjAxNCBgb3B0aW9uc2AgYXJlIGNsb25lZCBwZXItcm93LiAqL1xuZnVuY3Rpb24gc25hcHNob3RQb2xsKCBwb2xsICkge1xuICByZXR1cm4ge1xuICAgIG15X3ZvdGU6ICAgICBwb2xsLm15X3ZvdGUsXG4gICAgaGFzX3ZvdGVkOiAgIHBvbGwuaGFzX3ZvdGVkLFxuICAgIHRvdGFsX3ZvdGVzOiBwb2xsLnRvdGFsX3ZvdGVzLFxuICAgIG9wdGlvbnM6ICAgICBwb2xsLm9wdGlvbnMubWFwKCBvID0+ICgge1xuICAgICAgY291bnQ6ICAgICAgby5jb3VudCxcbiAgICAgIHBlcmNlbnQ6ICAgIG8ucGVyY2VudCxcbiAgICAgIGJhcl9zdHlsZTogIG8uYmFyX3N0eWxlLFxuICAgICAgaXNfbXlfdm90ZTogby5pc19teV92b3RlLFxuICAgICAgdm90ZXJzOiAgICAgQXJyYXkuaXNBcnJheSggby52b3RlcnMgKSA/IG8udm90ZXJzLnNsaWNlKCkgOiBbXSxcbiAgICB9ICkgKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzdG9yZVBvbGwoIHBvbGwsIHNuYXAgKSB7XG4gIHBvbGwubXlfdm90ZSAgICAgPSBzbmFwLm15X3ZvdGU7XG4gIHBvbGwuaGFzX3ZvdGVkICAgPSBzbmFwLmhhc192b3RlZDtcbiAgcG9sbC50b3RhbF92b3RlcyA9IHNuYXAudG90YWxfdm90ZXM7XG4gIGZvciAoIGxldCBpID0gMDsgaSA8IHNuYXAub3B0aW9ucy5sZW5ndGg7IGkrKyApIHtcbiAgICBjb25zdCBzID0gc25hcC5vcHRpb25zWyBpIF07XG4gICAgY29uc3QgbyA9IHBvbGwub3B0aW9uc1sgaSBdO1xuICAgIG8uY291bnQgICAgICA9IHMuY291bnQ7XG4gICAgby5wZXJjZW50ICAgID0gcy5wZXJjZW50O1xuICAgIG8uYmFyX3N0eWxlICA9IHMuYmFyX3N0eWxlO1xuICAgIG8uaXNfbXlfdm90ZSA9IHMuaXNfbXlfdm90ZTtcbiAgICBvLnZvdGVycyAgICAgPSBzLnZvdGVycy5zbGljZSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgc3RvcmUsIGdldENvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2ludGVyYWN0aXZpdHknO1xuaW1wb3J0IHsgY3VycmVudFBvc3RJZCB9IGZyb20gJy4uL2xpYi9kb20uanMnO1xuXG4vKipcbiAqIE9uZSBzdG9yZSwgdHdvIHBhZ2VzLiBPbiB0aGUgZmVlZCBwYWdlIGBzdGF0ZS5wb3N0c2AgaXMgdGhlIGZ1bGwgbGlzdDtcbiAqIG9uIHRoZSBzaW5nbGUgcGFnZSBpdCdzIGEgb25lLWVsZW1lbnQgYXJyYXkuIFRoZSBzZXJ2ZXIgcHJlLWRlY29yYXRlc1xuICogY29tbWVudHMgKERGUy1vcmRlcmVkLCB3aXRoIGRlcHRoL3BhcmVudF9uYW1lL2V0Yy4pLCBzbyB0aGUgY2xpZW50XG4gKiBuZXZlciBoYXMgdG8gZmxhdHRlbiBvciBzaGFwZSB0aGUgcGF5bG9hZC5cbiAqL1xuLy8gRG9uJ3QgZGVmaW5lIGBwb3N0c2AgLyBgaGFzUG9zdHNgIGluIGluaXRpYWwgc3RhdGUgXHUyMDE0IElBUEkncyBgZGVlcE1lcmdlYFxuLy8gcmVwbGFjZXMgYXJyYXlzIHJhdGhlciB0aGFuIG1lcmdpbmcsIHNvIGFuIGVtcHR5IGFycmF5IGhlcmUgd2lwZXMgdGhlXG4vLyBTU1ItaW5qZWN0ZWQgc3RhdGUuIFRoZSBkaXJlY3RpdmVzIGRlZ3JhZGUgZ3JhY2VmdWxseSB3aGVuIHRob3NlIGtleXNcbi8vIGFyZSBhYnNlbnQgKGBkYXRhLXdwLWVhY2hgIGJhaWxzIG9uIHVuZGVmaW5lZCBpdGVyYWJsZXMpLlxuY29uc3QgeyBzdGF0ZSB9ID0gc3RvcmUoICdoZXlmYW0vZmVlZCcsIHtcbiAgc3RhdGU6IHtcbiAgICBsYXN0RmV0Y2g6IG51bGwsXG4gICAgLy8gRGVsZXRlLWNvbmZpcm0gZGlhbG9nIHN0YXRlLlxuICAgIGRlbGV0ZU9wZW46ICAgZmFsc2UsXG4gICAgZGVsZXRlVGFyZ2V0SWQ6IDAsXG4gICAgZGVsZXRpbmc6ICAgICBmYWxzZSxcbiAgICBkZWxldGVFcnJvcjogICcnLFxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgdG9nZ2xlUG9zdE1lbnUoKSB7XG4gICAgICBjb25zdCBjdHggPSBnZXRDb250ZXh0KCk7XG4gICAgICBjb25zdCBpZCAgPSBjdHg/Lml0ZW0/LmlkO1xuICAgICAgaWYgKCAhIGlkIHx8ICEgQXJyYXkuaXNBcnJheSggc3RhdGUucG9zdHMgKSApIHJldHVybjtcbiAgICAgIGNvbnN0IHdpbGxPcGVuID0gISBjdHguaXRlbS5tZW51T3BlbjtcbiAgICAgIC8vIENsb3NlIGV2ZXJ5IG90aGVyIHBvc3QncyBtZW51OyBvbmx5IG9uZSBpcyBvcGVuIGF0IGEgdGltZS5cbiAgICAgIGZvciAoIGNvbnN0IHAgb2Ygc3RhdGUucG9zdHMgKSBwLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgICBjdHguaXRlbS5tZW51T3BlbiA9IHdpbGxPcGVuO1xuICAgIH0sXG4gICAgKmNvcHlQb3N0TGluaygpIHtcbiAgICAgIGNvbnN0IGN0eCA9IGdldENvbnRleHQoKTtcbiAgICAgIGNvbnN0IHVybCA9IGN0eD8uaXRlbT8ucGVybWFsaW5rO1xuICAgICAgaWYgKCBjdHg/Lml0ZW0gKSBjdHguaXRlbS5tZW51T3BlbiA9IGZhbHNlO1xuICAgICAgaWYgKCAhIHVybCApIHJldHVybjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCB1cmwgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIC8vIExhc3QtZGl0Y2ggZmFsbGJhY2s6IG9wZW4gdGhlIGxpbmsgc28gdGhlIHVzZXIgY2FuIGNvcHkgZnJvbSB0aGUgYWRkcmVzcyBiYXIuXG4gICAgICAgIHdpbmRvdy5wcm9tcHQoICdDb3B5IHRoaXMgbGluaycsIHVybCApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZWRpdFBvc3QoKSB7XG4gICAgICBjb25zdCBjdHggID0gZ2V0Q29udGV4dCgpO1xuICAgICAgY29uc3QgcG9zdCA9IGN0eD8uaXRlbTtcbiAgICAgIGlmICggcG9zdCApIHBvc3QubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgIGlmICggISBwb3N0ICkgcmV0dXJuO1xuICAgICAgc3RvcmUoICdoZXlmYW0vY29tcG9zZXInICkuYWN0aW9ucy5vcGVuRWRpdG9yKCBwb3N0ICk7XG4gICAgfSxcbiAgICBkZWxldGVQb3N0KCkge1xuICAgICAgY29uc3QgY3R4ID0gZ2V0Q29udGV4dCgpO1xuICAgICAgY29uc3QgaWQgID0gY3R4Py5pdGVtPy5pZDtcbiAgICAgIGlmICggY3R4Py5pdGVtICkgY3R4Lml0ZW0ubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgIGlmICggISBpZCApIHJldHVybjtcbiAgICAgIHN0YXRlLmRlbGV0ZVRhcmdldElkID0gaWQ7XG4gICAgICBzdGF0ZS5kZWxldGVFcnJvciAgICA9ICcnO1xuICAgICAgc3RhdGUuZGVsZXRlT3BlbiAgICAgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaGV5ZmFtLW1vZGFsLW9wZW4nICk7XG4gICAgfSxcbiAgICBjbG9zZURlbGV0ZUNvbmZpcm0oKSB7XG4gICAgICBpZiAoIHN0YXRlLmRlbGV0aW5nICkgcmV0dXJuO1xuICAgICAgc3RhdGUuZGVsZXRlT3BlbiAgICAgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmRlbGV0ZVRhcmdldElkID0gMDtcbiAgICAgIHN0YXRlLmRlbGV0ZUVycm9yICAgID0gJyc7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoZXlmYW0tbW9kYWwtb3BlbicgKTtcbiAgICB9LFxuICAgIG9uRGVsZXRlQmFja2Ryb3AoIGUgKSB7XG4gICAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdD8uY29udGFpbnMoICdoZXlmYW0tbW9kYWwnICkgKSB7XG4gICAgICAgIHN0b3JlKCAnaGV5ZmFtL2ZlZWQnICkuYWN0aW9ucy5jbG9zZURlbGV0ZUNvbmZpcm0oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgICpjb25maXJtRGVsZXRlKCkge1xuICAgICAgY29uc3QgaWQgPSBzdGF0ZS5kZWxldGVUYXJnZXRJZDtcbiAgICAgIGlmICggISBpZCB8fCBzdGF0ZS5kZWxldGluZyApIHJldHVybjtcbiAgICAgIHN0YXRlLmRlbGV0aW5nICAgID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmRlbGV0ZUVycm9yID0gJyc7XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCBgJHsgaGV5ZmFtLmFwaUJhc2UgfS8keyBoZXlmYW0uZmFtU2x1ZyB9L3Bvc3QvJHsgaWQgfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgICAgICB9ICk7XG4gICAgICAgIGlmICggISByLm9rICkgdGhyb3cgbmV3IEVycm9yKCAnZGVsZXRlLWZhaWxlZCcgKTtcblxuICAgICAgICAvLyBPcHRpbWlzdGljYWxseSBkcm9wIGZyb20gdGhlIGxvY2FsIGZlZWQgc28gdGhlIHBvc3QgZGlzYXBwZWFyc1xuICAgICAgICAvLyBpbW1lZGlhdGVseS4gVGhlIG5leHQgcmVmcmVzaCB3aWxsIHJlY29uY2lsZS5cbiAgICAgICAgaWYgKCBBcnJheS5pc0FycmF5KCBzdGF0ZS5wb3N0cyApICkge1xuICAgICAgICAgIHN0YXRlLnBvc3RzID0gc3RhdGUucG9zdHMuZmlsdGVyKCBwID0+IHAuaWQgIT09IGlkICk7XG4gICAgICAgICAgc3RhdGUuaGFzUG9zdHMgPSBzdGF0ZS5wb3N0cy5sZW5ndGggPiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuZGVsZXRlT3BlbiAgICAgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZGVsZXRlVGFyZ2V0SWQgPSAwO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdoZXlmYW0tbW9kYWwtb3BlbicgKTtcblxuICAgICAgICAvLyBPbiB0aGUgc2luZ2xlLXBvc3QgcGFnZSwgZmFsbCBiYWNrIHRvIHRoZSBmZWVkIHNpbmNlIHRoZSBwb3N0IGlzIGdvbmUuXG4gICAgICAgIGlmICggY3VycmVudFBvc3RJZCgpID09PSBpZCApIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvJHsgaGV5ZmFtLmZhbVNsdWcgfS9gO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3JlKCAnaGV5ZmFtL2ZlZWQnICkuY2FsbGJhY2tzPy5yZWZyZXNoPy4oIGhleWZhbSApO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgc3RhdGUuZGVsZXRlRXJyb3IgPSAnQ291bGQgbm90IGRlbGV0ZS4gVHJ5IGFnYWluLic7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzdGF0ZS5kZWxldGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgICpib290c3RyYXAoKSB7XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgIC8vIEluaXRpYWwgc3RhdGUgaXMgU1NSJ2QgYnkgUEhQLCBzbyBkb24ndCByZS1mZXRjaCBpbW1lZGlhdGVseSBcdTIwMTRcbiAgICAgIC8vIGp1bXAgc3RyYWlnaHQgdG8gdGhlIDEwcyBwb2xsaW5nIGxvb3AgZm9yIGxpdmUgdXBkYXRlcy5cbiAgICAgIHNldEludGVydmFsKCAoKSA9PiBzdG9yZSggJ2hleWZhbS9mZWVkJyApLmNhbGxiYWNrcy5yZWZyZXNoKCBoZXlmYW0gKSwgMTAwMDAgKTtcbiAgICAgIC8vIE91dHNpZGUtY2xpY2sgY2xvc2VzIGFueSBvcGVuIHBvc3QgbWVudS5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggZXYgKSA9PiB7XG4gICAgICAgIGlmICggISBBcnJheS5pc0FycmF5KCBzdGF0ZS5wb3N0cyApICkgcmV0dXJuO1xuICAgICAgICBpZiAoIGV2LnRhcmdldD8uY2xvc2VzdD8uKCAnLmhleWZhbS1tZW51JyApICkgcmV0dXJuO1xuICAgICAgICBmb3IgKCBjb25zdCBwIG9mIHN0YXRlLnBvc3RzICkgaWYgKCBwLm1lbnVPcGVuICkgcC5tZW51T3BlbiA9IGZhbHNlO1xuICAgICAgfSApO1xuICAgIH0sXG4gICAgKnJlZnJlc2goIGhleWZhbSApIHtcbiAgICAgIGlmICggISBoZXlmYW0uZmFtU2x1ZyApIHJldHVybjtcbiAgICAgIGNvbnN0IHBvc3RfaWQgPSBjdXJyZW50UG9zdElkKCk7XG4gICAgICBjb25zdCB1cmwgPSBwb3N0X2lkXG4gICAgICAgID8gYCR7aGV5ZmFtLmFwaUJhc2V9LyR7aGV5ZmFtLmZhbVNsdWd9L3Bvc3QvJHtwb3N0X2lkfWBcbiAgICAgICAgOiBgJHtoZXlmYW0uYXBpQmFzZX0vJHtoZXlmYW0uZmFtU2x1Z30vZmVlZGA7XG4gICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIHVybCwge1xuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICBoZWFkZXJzOiB7ICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgICB9ICk7XG4gICAgICBpZiAoICEgci5vayApIHJldHVybjtcbiAgICAgIGNvbnN0IGJvZHkgPSB5aWVsZCByLmpzb24oKTtcbiAgICAgIHN0YXRlLnBvc3RzICAgID0gcG9zdF9pZCA/ICggYm9keS5wb3N0ID8gWyBib2R5LnBvc3QgXSA6IFtdICkgOiAoIGJvZHkucG9zdHMgfHwgW10gKTtcbiAgICAgIHN0YXRlLmhhc1Bvc3RzID0gc3RhdGUucG9zdHMubGVuZ3RoID4gMDtcbiAgICAgIHN0YXRlLmxhc3RGZXRjaCA9IGJvZHkubm93O1xuICAgIH0sXG4gIH0sXG59ICk7XG5cbiIsICIvKiogUGFyc2UgYGJvZHkuY2xhc3NOYW1lYCBhbmQgcmV0dXJuIHRoZSBwb3N0IGlkIHdoZW4gb24gYSBzaW5ndWxhciBwb3N0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnRQb3N0SWRGcm9tQ2xhc3MoIGNsYXNzTmFtZSApIHtcbiAgY29uc3QgbSA9ICggY2xhc3NOYW1lIHx8ICcnICkubWF0Y2goIC9cXGJwb3N0aWQtKFxcZCspXFxiLyApO1xuICByZXR1cm4gbSA/IHBhcnNlSW50KCBtWyAxIF0sIDEwICkgOiAwO1xufVxuXG4vKiogQnJvd3Nlci1vbmx5IHdyYXBwZXIuIEtlZXAgRE9NIGFjY2VzcyBvdXQgb2YgdGhlIHRlc3RhYmxlIHN1cmZhY2UuICovXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudFBvc3RJZCgpIHtcbiAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgICA/IDBcbiAgICA6IGN1cnJlbnRQb3N0SWRGcm9tQ2xhc3MoIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICk7XG59XG4iLCAiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2ludGVyYWN0aXZpdHknO1xuXG4vLyBzdGF0ZS5mYW1zICsgc3RhdGUuaGFzRmFtcyBhcmUgc2VlZGVkIHNlcnZlci1zaWRlIHZpYSB3cF9pbnRlcmFjdGl2aXR5X3N0YXRlLlxuLy8gSU1QT1JUQU5UOiBkbyBOT1QgZGVmaW5lIGBmYW1zYCBvciBgaGFzRmFtc2AgaGVyZS4gSUFQSSdzIGRlZXBNZXJnZSByZXBsYWNlc1xuLy8gYXJyYXlzIHJhdGhlciB0aGFuIG1lcmdpbmcgdGhlbSwgd2hpY2ggd291bGQgd2lwZSB0aGUgU1NSIGRhdGEgb24gaHlkcmF0aW9uLlxuc3RvcmUoICdoZXlmYW0vbGFuZGluZycsIHtcbiAgc3RhdGU6IHt9LFxufSApO1xuIiwgImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9pbnRlcmFjdGl2aXR5JztcblxuaWYgKCAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yICYmICdQdXNoTWFuYWdlcicgaW4gd2luZG93ICkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCByZWdpc3RlciApO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gIGlmICggISBoZXlmYW0udXNlcklkIHx8ICEgaGV5ZmFtLnZhcGlkS2V5ICkgcmV0dXJuO1xuXG4gIGNvbnN0IHJlZyA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCAnL3N3LmpzJywgeyBzY29wZTogJy8nIH0gKTtcblxuICBsZXQgcGVybWlzc2lvbiA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO1xuICBpZiAoIHBlcm1pc3Npb24gPT09ICdkZWZhdWx0JyApIHtcbiAgICAvLyBEZWZlciB0aGUgcHJvbXB0IFx1MjAxNCBsZXQgdGhlIHVzZXIgb3B0IGluIHZpYSBhIGJ1dHRvbiBsYXRlci5cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCBwZXJtaXNzaW9uICE9PSAnZ3JhbnRlZCcgKSByZXR1cm47XG5cbiAgY29uc3Qgc3ViID0gYXdhaXQgcmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpXG4gICAgfHwgYXdhaXQgcmVnLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSgge1xuICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxuICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IHVybEJhc2U2NFRvVWludDhBcnJheSggaGV5ZmFtLnZhcGlkS2V5ICksXG4gICAgfSApO1xuXG4gIGF3YWl0IGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vcHVzaC9zdWJzY3JpYmVgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7XG4gICAgICBlbmRwb2ludDogc3ViLmVuZHBvaW50LFxuICAgICAgcDI1NmRoOiAgIGFycmF5QnVmZmVyVG9CYXNlNjQoIHN1Yi5nZXRLZXkoICdwMjU2ZGgnICkgKSxcbiAgICAgIGF1dGg6ICAgICBhcnJheUJ1ZmZlclRvQmFzZTY0KCBzdWIuZ2V0S2V5KCAnYXV0aCcgKSApLFxuICAgICAgZXhwaXJhdGlvbl90aW1lOiBzdWIuZXhwaXJhdGlvblRpbWUgfHwgbnVsbCxcbiAgICB9ICksXG4gIH0gKTtcbn1cblxuZnVuY3Rpb24gdXJsQmFzZTY0VG9VaW50OEFycmF5KCBiNjQgKSB7XG4gIGNvbnN0IHBhZGRpbmcgPSAnPScucmVwZWF0KCAoIDQgLSAoIGI2NC5sZW5ndGggJSA0ICkgKSAlIDQgKTtcbiAgY29uc3QgYmFzZTY0ICA9ICggYjY0ICsgcGFkZGluZyApLnJlcGxhY2UoIC8tL2csICcrJyApLnJlcGxhY2UoIC9fL2csICcvJyApO1xuICBjb25zdCByYXcgICAgID0gYXRvYiggYmFzZTY0ICk7XG4gIGNvbnN0IG91dCAgICAgPSBuZXcgVWludDhBcnJheSggcmF3Lmxlbmd0aCApO1xuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCByYXcubGVuZ3RoOyBpKysgKSBvdXRbIGkgXSA9IHJhdy5jaGFyQ29kZUF0KCBpICk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGFycmF5QnVmZmVyVG9CYXNlNjQoIGJ1ZmZlciApIHtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheSggYnVmZmVyICk7XG4gIGxldCBiaW4gPSAnJztcbiAgZm9yICggbGV0IGkgPSAwOyBpIDwgYnl0ZXMuYnl0ZUxlbmd0aDsgaSsrICkgYmluICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoIGJ5dGVzWyBpIF0gKTtcbiAgcmV0dXJuIGJ0b2EoIGJpbiApO1xufVxuIiwgImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9pbnRlcmFjdGl2aXR5JztcbmltcG9ydCB7IG5vcm1hbGl6ZVBob25lLCBwYXJzZVBob25lTGlzdCB9IGZyb20gJy4uL2xpYi9waG9uZS5qcyc7XG5pbXBvcnQgeyBzbHVnaWZ5IH0gZnJvbSAnLi4vbGliL3NsdWcuanMnO1xuXG5jb25zdCB7IHN0YXRlLCBhY3Rpb25zIH0gPSBzdG9yZSggJ2hleWZhbS9zaWdudXAnLCB7XG4gIHN0YXRlOiB7XG4gICAgc3RlcDogJ3Bob25lJyxcbiAgICBwaG9uZTogJycsIGNvZGU6ICcnLCBuYW1lOiAnJywgZmFtTmFtZTogJycsIGZhbVNsdWc6ICcnLFxuICAgIGludml0ZVRleHQ6ICcnLCBpbnZpdGVOb3RlOiAnJyxcbiAgICBwYXJzZWRQaG9uZXM6IFtdLFxuICAgIHBhcnNlZFBob25lc0VudHJpZXM6IFtdLFxuICAgIGludml0ZVJlc3VsdHM6IFtdLFxuICAgIGludml0ZVJlc3VsdHNFbnRyaWVzOiBbXSxcbiAgICBmYW1Vcmw6ICcnLFxuICAgIGVycm9yOiAnJywgYnVzeTogZmFsc2UsXG4gICAgdGl0bGU6ICdTdGFydCBhIGZhbScsXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgaGFzQ29udGFjdFBpY2tlcjogZmFsc2UsXG4gICAgLy8gSUFQSSBkaXJlY3RpdmVzIG9ubHkgcmVhY3QgdG8gZGlyZWN0IHByb3BlcnR5IGFjY2Vzcy4gUGxhaW4gZ2V0dGVyc1xuICAgIC8vIGNvbXB1dGVkIG9mZiBvdGhlciBzdGF0ZSBhcmVuJ3QgcGlja2VkIHVwIGF0IGh5ZHJhdGlvbiwgc28gd2Uga2VlcFxuICAgIC8vIHZpc2liaWxpdHkgZmxhZ3MgYXMgcGxhaW4gcmVhY3RpdmUgcHJvcHMgYW5kIHRvZ2dsZSB0aGVtIGluIHNldFN0ZXAoKS5cbiAgICBzdGVwMUhpZGRlbjogZmFsc2UsXG4gICAgc3RlcDJIaWRkZW46IHRydWUsXG4gICAgc3RlcDNIaWRkZW46IHRydWUsXG4gICAgc3RlcDRIaWRkZW46IHRydWUsXG4gICAgc3RlcHBlclN0ZXAxQ3VycmVudDogdHJ1ZSwgIHN0ZXBwZXJTdGVwMURvbmU6IGZhbHNlLFxuICAgIHN0ZXBwZXJTdGVwMkN1cnJlbnQ6IGZhbHNlLCBzdGVwcGVyU3RlcDJEb25lOiBmYWxzZSxcbiAgICBzdGVwcGVyU3RlcDNDdXJyZW50OiBmYWxzZSwgc3RlcHBlclN0ZXAzRG9uZTogZmFsc2UsXG4gICAgc3RlcHBlclN0ZXA0Q3VycmVudDogZmFsc2UsIHN0ZXBwZXJTdGVwNERvbmU6IGZhbHNlLFxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgdXBkYXRlUGhvbmUoIGUgKSAgICAgIHsgc3RhdGUucGhvbmUgPSBlLnRhcmdldC52YWx1ZTsgc3RhdGUuZXJyb3IgPSAnJzsgfSxcbiAgICB1cGRhdGVDb2RlKCBlICkgICAgICAgeyBzdGF0ZS5jb2RlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSggL1xcRC9nLCAnJyApOyBzdGF0ZS5lcnJvciA9ICcnOyB9LFxuICAgIHVwZGF0ZU5hbWUoIGUgKSAgICAgICB7IHN0YXRlLm5hbWUgPSBlLnRhcmdldC52YWx1ZTsgc3RhdGUuZXJyb3IgPSAnJzsgfSxcbiAgICB1cGRhdGVGYW1OYW1lKCBlICkge1xuICAgICAgc3RhdGUuZmFtTmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgLy8gQXV0by1zdWdnZXN0IHNsdWcgd2hpbGUgdGhlIHVzZXIgaXMgc3RpbGwgdHlwaW5nIHRoZSBuYW1lOyBzdG9wIG9uY2VcbiAgICAgIC8vIHRoZXkndmUgZWRpdGVkIHRoZSBzbHVnIHRoZW1zZWx2ZXMuXG4gICAgICBpZiAoICEgc3RhdGUuZmFtU2x1ZyB8fCBzdGF0ZS5mYW1TbHVnID09PSBzbHVnaWZ5KCBzdGF0ZS5mYW1OYW1lLnNsaWNlKCAwLCAtMSApICkgKSB7XG4gICAgICAgIHN0YXRlLmZhbVNsdWcgPSBzbHVnaWZ5KCBlLnRhcmdldC52YWx1ZSApO1xuICAgICAgfVxuICAgICAgc3RhdGUuZXJyb3IgPSAnJztcbiAgICB9LFxuICAgIHVwZGF0ZUZhbVNsdWcoIGUgKSAgICB7IHN0YXRlLmZhbVNsdWcgPSBzbHVnaWZ5KCBlLnRhcmdldC52YWx1ZSApOyBzdGF0ZS5lcnJvciA9ICcnOyB9LFxuICAgIHVwZGF0ZUludml0ZVRleHQoIGUgKSB7IHN0YXRlLmludml0ZVRleHQgPSBlLnRhcmdldC52YWx1ZTsgcmVwYXJzZVBob25lcygpOyB9LFxuICAgIHVwZGF0ZUludml0ZU5vdGUoIGUgKSB7IHN0YXRlLmludml0ZU5vdGUgPSBlLnRhcmdldC52YWx1ZS5zbGljZSggMCwgMTIwICk7IH0sXG4gICAgYmFja1RvUGhvbmUoKSAgICAgICAgIHsgc2V0U3RlcCggJ3Bob25lJyApOyBzdGF0ZS5jb2RlID0gJyc7IHN0YXRlLmVycm9yID0gJyc7IH0sXG5cbiAgICAqc3VibWl0UGhvbmUoIGUgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIHN0YXRlLmJ1c3kgKSByZXR1cm47XG4gICAgICBjb25zdCBwaG9uZSA9IG5vcm1hbGl6ZVBob25lKCBzdGF0ZS5waG9uZSApO1xuICAgICAgaWYgKCAhIHBob25lICkgeyBzdGF0ZS5lcnJvciA9ICdQaG9uZSBtdXN0IHN0YXJ0IHdpdGggKyBhbmQgY291bnRyeSBjb2RlIChlLmcuICsxNTU1NTU1MDEwMCkuJzsgcmV0dXJuOyB9XG4gICAgICBzdGF0ZS5waG9uZSA9IHBob25lO1xuICAgICAgc3RhdGUuYnVzeSA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vc2lnbnVwL3N0YXJ0YCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7IHBob25lIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBpZiAoICEgci5vayApIHRocm93IG5ldyBFcnJvciggJ3NlbmQtZmFpbGVkJyApO1xuICAgICAgICBzZXRTdGVwKCAnY29kZScgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7IHN0YXRlLmVycm9yID0gJ0NvdWxkIG5vdCBzZW5kIGNvZGUuIFRyeSBhZ2Fpbi4nOyB9XG4gICAgICBmaW5hbGx5IHsgc3RhdGUuYnVzeSA9IGZhbHNlOyB9XG4gICAgfSxcblxuICAgICpzdWJtaXRDb2RlKCBlICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCBzdGF0ZS5idXN5ICkgcmV0dXJuO1xuICAgICAgaWYgKCBzdGF0ZS5jb2RlLmxlbmd0aCAhPT0gNiApIHsgc3RhdGUuZXJyb3IgPSAnRW50ZXIgdGhlIDYtZGlnaXQgY29kZS4nOyByZXR1cm47IH1cbiAgICAgIC8vIFdlIGNhbid0IGFjdHVhbGx5IHZlcmlmeSB0aGUgY29kZSBoZXJlIFx1MjAxNCBzaWdudXAvdmVyaWZ5IGNyZWF0ZXMgdGhlIHVzZXJcbiAgICAgIC8vIGFuZCB0aGUgZmFtIGluIG9uZSBzaG90LCBzbyB3ZSBqdXN0IGFkdmFuY2UgdG8gdGhlIGZhbSBzdGVwIGFuZCBjb21iaW5lXG4gICAgICAvLyBldmVyeXRoaW5nIGluIHN1Ym1pdEZhbSgpIGJlbG93LlxuICAgICAgc2V0U3RlcCggJ2ZhbScgKTtcbiAgICB9LFxuXG4gICAgKnN1Ym1pdEZhbSggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICggc3RhdGUuYnVzeSApIHJldHVybjtcbiAgICAgIGlmICggISBzdGF0ZS5uYW1lLnRyaW0oKSApICAgIHsgc3RhdGUuZXJyb3IgPSAnRW50ZXIgeW91ciBuYW1lLic7IHJldHVybjsgfVxuICAgICAgaWYgKCAhIHN0YXRlLmZhbU5hbWUudHJpbSgpICkgeyBzdGF0ZS5lcnJvciA9ICdOYW1lIHlvdXIgZmFtLic7IHJldHVybjsgfVxuICAgICAgaWYgKCAhIC9eW2EtejAtOV1bYS16MC05LV17MSwzMH1bYS16MC05XSQvLnRlc3QoIHN0YXRlLmZhbVNsdWcgKSApIHtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSAnRmFtIFVSTDogMy0zMiBsZXR0ZXJzL251bWJlcnMvaHlwaGVucywgbm8gbGVhZGluZy90cmFpbGluZyBoeXBoZW4uJzsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3RhdGUuYnVzeSA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgICAgLy8gc2lnbnVwL3ZlcmlmeSBjcmVhdGVzIHRoZSB1c2VyLCBzZXRzIHRoZSBhdXRoIGNvb2tpZSwgQU5EIGNyZWF0ZXNcbiAgICAgICAgLy8gdGhlIGZhbSBpbiBvbmUgc2hvdCBcdTIwMTQgY29tYmluaW5nIGF2b2lkcyB0aGUgV1AgUkVTVCBub25jZSB2cyBuZXctXG4gICAgICAgIC8vIHNlc3Npb24gcmFjZSB0aGF0IHdvdWxkIG90aGVyd2lzZSByZWplY3QgdGhlIGZvbGxvdy11cCAvZmFtcyBjYWxsLlxuICAgICAgICBjb25zdCB2ID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9zaWdudXAvdmVyaWZ5YCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7XG4gICAgICAgICAgICBwaG9uZTogICAgICAgIHN0YXRlLnBob25lLFxuICAgICAgICAgICAgY29kZTogICAgICAgICBzdGF0ZS5jb2RlLFxuICAgICAgICAgICAgZGlzcGxheV9uYW1lOiBzdGF0ZS5uYW1lLFxuICAgICAgICAgICAgZmFtX25hbWU6ICAgICBzdGF0ZS5mYW1OYW1lLFxuICAgICAgICAgICAgZmFtX3NsdWc6ICAgICBzdGF0ZS5mYW1TbHVnLFxuICAgICAgICAgIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBjb25zdCBib2R5ID0geWllbGQgdi5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICBpZiAoICEgdi5vayB8fCAhIGJvZHkub2sgKSB7XG4gICAgICAgICAgaWYgKCBib2R5LmVycm9yID09PSAnYmFkX2NvZGUnICkge1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSAnV3JvbmcgY29kZS4gVHJ5IGFnYWluLic7XG4gICAgICAgICAgICBzZXRTdGVwKCAnY29kZScgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCBbICdzbHVnX3Rha2VuJywgJ2ludmFsaWRfc2x1ZycsICdyZXNlcnZlZF9zbHVnJyBdLmluY2x1ZGVzKCBib2R5LmVycm9yICkgKSB7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGJvZHkubWVzc2FnZSB8fCAnVGhhdCBmYW0gVVJMIGlzIHVuYXZhaWxhYmxlLic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYm9keS5tZXNzYWdlIHx8ICdDb3VsZCBub3QgdmVyaWZ5LiBUcnkgYWdhaW4uJztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhdGUuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgZnJlc2ggc2lnbnVwIGdhdmUgdXMgYSBuZXcgUkVTVCBub25jZTsgc3dhcCBpdCBpbiBzbyB0aGVcbiAgICAgICAgLy8gaW1tZWRpYXRlbHktZm9sbG93aW5nIGludml0ZSBQT1NUIGF1dGhlbnRpY2F0ZXMgYXMgdGhlIG5ldyB1c2VyLlxuICAgICAgICBpZiAoIGJvZHkubm9uY2UgKSB7XG4gICAgICAgICAgc3RvcmUoICdoZXlmYW0nICkuc3RhdGUubm9uY2UgPSBib2R5Lm5vbmNlO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmZhbVVybCA9IGJvZHkuZmFtX3VybCB8fCAnJztcbiAgICAgICAgc2V0U3RlcCggJ2ludml0ZScgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIHN0YXRlLmVycm9yID0gJ05ldHdvcmsgZXJyb3IuIFRyeSBhZ2Fpbi4nO1xuICAgICAgfSBmaW5hbGx5IHsgc3RhdGUuYnVzeSA9IGZhbHNlOyB9XG4gICAgfSxcblxuICAgICpwaWNrQ29udGFjdHMoKSB7XG4gICAgICBpZiAoICEgKCAnY29udGFjdHMnIGluIG5hdmlnYXRvciApIHx8ICEgKCAnQ29udGFjdHNNYW5hZ2VyJyBpbiB3aW5kb3cgKSApIHJldHVybjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBpY2tlZCA9IHlpZWxkIG5hdmlnYXRvci5jb250YWN0cy5zZWxlY3QoIFsgJ3RlbCcgXSwgeyBtdWx0aXBsZTogdHJ1ZSB9ICk7XG4gICAgICAgIGlmICggISBwaWNrZWQgfHwgISBwaWNrZWQubGVuZ3RoICkgcmV0dXJuO1xuICAgICAgICBjb25zdCBwaG9uZXMgPSBwaWNrZWQuZmxhdE1hcCggKCBjICkgPT4gYy50ZWwgfHwgW10gKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBzdGF0ZS5pbnZpdGVUZXh0LnRyaW0oKTtcbiAgICAgICAgc3RhdGUuaW52aXRlVGV4dCA9IGV4aXN0aW5nXG4gICAgICAgICAgPyBleGlzdGluZyArICdcXG4nICsgcGhvbmVzLmpvaW4oICdcXG4nIClcbiAgICAgICAgICA6IHBob25lcy5qb2luKCAnXFxuJyApO1xuICAgICAgICByZXBhcnNlUGhvbmVzKCk7XG4gICAgICB9IGNhdGNoICggZXJyICkgeyAvKiBjYW5jZWxsZWQgb3IgYmxvY2tlZCAqLyB9XG4gICAgfSxcblxuICAgICpzdWJtaXRJbnZpdGVzKCBlICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCBzdGF0ZS5idXN5ICkgcmV0dXJuO1xuICAgICAgY29uc3QgaGV5ZmFtICA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgY29uc3QgZmFtU2x1ZyA9IHN0YXRlLmZhbVNsdWc7XG4gICAgICBjb25zdCB2YWxpZCAgID0gc3RhdGUucGFyc2VkUGhvbmVzLmZpbHRlciggKCBwICkgPT4gcC52YWxpZCApLm1hcCggKCBwICkgPT4gcC5lMTY0ICk7XG4gICAgICBpZiAoICEgdmFsaWQubGVuZ3RoICkge1xuICAgICAgICAvLyBUcmVhdCBhbiBlbXB0eSBpbnZpdGUgbGlzdCB0aGUgc2FtZSBhcyBTa2lwIFx1MjAxNCBwcmVzZXJ2ZXMgdGhlIHJlZGlyZWN0XG4gICAgICAgIC8vIGFuZCB3cml0ZXMgdGhlIHNraXAgZmxhZyBzbyB0aGUgbnVkZ2UgYmFubmVyIGNhbiBkZWNpZGUgd2hhdCB0byBkby5cbiAgICAgICAgeWllbGQgYWN0aW9ucy5za2lwSW52aXRlcygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdGF0ZS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHIgPSB5aWVsZCBmZXRjaCggYCR7aGV5ZmFtLmFwaUJhc2V9LyR7ZmFtU2x1Z30vaW52aXRlc2AsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgcGhvbmVzOiB2YWxpZCwgbWVzc2FnZV9ub3RlOiBzdGF0ZS5pbnZpdGVOb3RlIHx8ICcnIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBjb25zdCBib2R5ID0geWllbGQgci5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICBpZiAoICEgci5vayApIHtcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IGJvZHkubWVzc2FnZSB8fCAnQ291bGQgbm90IHNlbmQgaW52aXRlcy4gVHJ5IGFnYWluLic7XG4gICAgICAgICAgc3RhdGUuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5pbnZpdGVSZXN1bHRzICAgICAgICA9IGJvZHkuaXNzdWVkIHx8IFtdO1xuICAgICAgICBzdGF0ZS5pbnZpdGVSZXN1bHRzRW50cmllcyA9IHN0YXRlLmludml0ZVJlc3VsdHMubWFwKCAoIHYsIGkgKSA9PiBbIGksIHYgXSApO1xuICAgICAgICBpZiAoIHN0YXRlLmZhbVVybCApIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHN0YXRlLmZhbVVybDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzdGF0ZS5lcnJvciA9ICdOZXR3b3JrIGVycm9yLiBUcnkgYWdhaW4uJztcbiAgICAgIH0gZmluYWxseSB7IHN0YXRlLmJ1c3kgPSBmYWxzZTsgfVxuICAgIH0sXG5cbiAgICAqc2tpcEludml0ZXMoKSB7XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vbWUvc2tpcC1pbnZpdGVzYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICAgICAgfSApO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHsgLyogbm90IGJsb2NraW5nICovIH1cbiAgICAgIGlmICggc3RhdGUuZmFtVXJsICkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHN0YXRlLmZhbVVybDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FjY291bnQnO1xuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgICppbml0KCkge1xuICAgICAgc3RhdGUuZGV2TW9kZSAgICAgICAgICA9ICEhIHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlLmRldk1vZGU7XG4gICAgICBzdGF0ZS5oYXNDb250YWN0UGlja2VyID0gKCAnY29udGFjdHMnIGluIG5hdmlnYXRvciApICYmICggJ0NvbnRhY3RzTWFuYWdlcicgaW4gd2luZG93ICk7XG5cbiAgICAgIC8vIFNTUiBkb2Vzbid0IHJlbmRlciBpcy1oaWRkZW4gb24gdGhlc2UgZm9ybXMuIElBUEkncyBoeWRyYXRpb24gc2tpcHNcbiAgICAgIC8vIHJlLWFwcGx5aW5nIGNsYXNzIGJpbmRpbmdzIHdob3NlIGluaXRpYWwgRE9NIHN0YXRlIG1hdGNoZXMgdGhlIHByb3h5LlxuICAgICAgLy8gVG9nZ2xlIGVhY2ggZmxhZyB0aHJvdWdoIGl0cyBvcHBvc2l0ZSB0byB0cmlwIHRoZSBwcm94eSdzIGNoYW5nZS1cbiAgICAgIC8vIGRldGVjdGlvbiwgdGhlbiBzZXRTdGVwKCkgcmUtYXNzZXJ0cyB0aGUgcmlnaHQgdmFsdWVzLlxuICAgICAgc3RhdGUuc3RlcDFIaWRkZW4gPSAhIHN0YXRlLnN0ZXAxSGlkZGVuO1xuICAgICAgc3RhdGUuc3RlcDJIaWRkZW4gPSAhIHN0YXRlLnN0ZXAySGlkZGVuO1xuICAgICAgc3RhdGUuc3RlcDNIaWRkZW4gPSAhIHN0YXRlLnN0ZXAzSGlkZGVuO1xuICAgICAgc3RhdGUuc3RlcDRIaWRkZW4gPSAhIHN0YXRlLnN0ZXA0SGlkZGVuO1xuICAgICAgc2V0U3RlcCggc3RhdGUuc3RlcCApO1xuXG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgIGlmICggaGV5ZmFtLnVzZXJJZCApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9tZS9mYW1zYCwge1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICAgICAgICB9ICk7XG4gICAgICAgICAgaWYgKCByLm9rICkge1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IHlpZWxkIHIuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgZmFtcyA9IGJvZHkuZmFtcyB8fCBbXTtcbiAgICAgICAgICAgIGlmICggZmFtcy5sZW5ndGggJiYgZmFtc1sgMCBdLnVybCApIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmYW1zWyAwIF0udXJsO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb2dnZWQgaW4gYnV0IG5vIGZhbXMgKHJhcmUgXHUyMDE0IGludml0ZSBwYXRoIG9yIGEgZm9ybWVyIG1lbWJlcikuXG4gICAgICAgICAgICAvLyBEcm9wIHRoZW0gYXQgdGhlIGZhbSBzdGVwIHNvIHRoZXkgY2FuIHNwaW4gb25lIHVwLlxuICAgICAgICAgICAgc2V0U3RlcCggJ2ZhbScgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7IC8qIGZhbGwgdGhyb3VnaCB0byBzdGVwIDEgKi8gfVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59ICk7XG5cbmZ1bmN0aW9uIHNldFN0ZXAoIG5leHQgKSB7XG4gIHN0YXRlLnN0ZXAgICAgICAgID0gbmV4dDtcbiAgc3RhdGUuc3RlcDFIaWRkZW4gPSBuZXh0ICE9PSAncGhvbmUnO1xuICBzdGF0ZS5zdGVwMkhpZGRlbiA9IG5leHQgIT09ICdjb2RlJztcbiAgc3RhdGUuc3RlcDNIaWRkZW4gPSBuZXh0ICE9PSAnZmFtJztcbiAgc3RhdGUuc3RlcDRIaWRkZW4gPSBuZXh0ICE9PSAnaW52aXRlJztcblxuICBjb25zdCBvcmRlciA9IHsgcGhvbmU6IDEsIGNvZGU6IDIsIGZhbTogMywgaW52aXRlOiA0IH07XG4gIGNvbnN0IG4gICAgID0gb3JkZXJbIG5leHQgXSB8fCAxO1xuICBmb3IgKCBsZXQgaSA9IDE7IGkgPD0gNDsgaSsrICkge1xuICAgIHN0YXRlWyBgc3RlcHBlclN0ZXAke2l9Q3VycmVudGAgXSA9IGkgPT09IG47XG4gICAgc3RhdGVbIGBzdGVwcGVyU3RlcCR7aX1Eb25lYCBdICAgID0gaSA8ICBuO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGFyc2VQaG9uZXMoKSB7XG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGhvbmVMaXN0KCBzdGF0ZS5pbnZpdGVUZXh0ICk7XG4gIHN0YXRlLnBhcnNlZFBob25lcyAgICAgICAgPSBwYXJzZWQ7XG4gIHN0YXRlLnBhcnNlZFBob25lc0VudHJpZXMgPSBwYXJzZWQubWFwKCAoIHYsIGkgKSA9PiBbIGksIHYgXSApO1xufVxuIiwgIi8qKlxuICogQ29lcmNlIGEgdXNlci10eXBlZCBwaG9uZSBzdHJpbmcgdG8gRS4xNjQgKGRpZ2l0cyB3aXRoIGxlYWRpbmcgKywgOC0xNiBjaGFycykuXG4gKiBSZXR1cm5zIG51bGwgd2hlbiB0aGUgaW5wdXQgY2Fubm90IGJlIGNvZXJjZWQgXHUyMDE0IGNhbGxlcnMgc2hvdWxkIHRyZWF0IG51bGxcbiAqIGFzIGEgdmFsaWRhdGlvbiBmYWlsdXJlIHJhdGhlciB0aGFuIHJldHJ5aW5nLlxuICpcbiAqIE1pcnJvcnMgdGhlIHNlcnZlci1zaWRlIHJ1bGUgaW4gUkVTVFxcUm91dGVzOjpub3JtYWxpemVfcGhvbmUoKS4gV2hlbiB5b3VcbiAqIGNoYW5nZSBvbmUsIGNoYW5nZSB0aGUgb3RoZXIgYW5kIHVwZGF0ZSBwaG9uZS50ZXN0LmpzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUGhvbmUoIHJhdyApIHtcbiAgY29uc3QgZGlnaXRzID0gKCByYXcgfHwgJycgKS5yZXBsYWNlKCAvW14wLTkrXS9nLCAnJyApO1xuICBpZiAoICEgZGlnaXRzLnN0YXJ0c1dpdGgoICcrJyApICkgcmV0dXJuIG51bGw7XG4gIGlmICggZGlnaXRzLmxlbmd0aCA8IDggfHwgZGlnaXRzLmxlbmd0aCA+IDE2ICkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBkaWdpdHM7XG59XG5cbi8qKlxuICogVG9sZXJhbnQgcGFyc2VyIGZvciBpbnZpdGUgcGhvbmUgbGlzdHMuIFNwbGl0cyBvbiBjb21tYSwgbmV3bGluZSwgc2VtaWNvbG9uLFxuICogb3Igd2hpdGVzcGFjZTsgZm9yIGVhY2ggY2FuZGlkYXRlLCBzdHJpcHMgZXZlcnl0aGluZyBleGNlcHQgZGlnaXRzIGFuZCBgK2AsXG4gKiB0aGVuIHJlLXZhbGlkYXRlcyBhcyBFLjE2NC4gUmV0dXJucyBvbmUgcm93IHBlciBjYW5kaWRhdGUgd2l0aCBgcmF3YCxcbiAqIGBlMTY0YCwgYW5kIGB2YWxpZGAgc28gdGhlIFVJIGNhbiBzaG93IGludmFsaWQgZW50cmllcyB3aXRoIGEgaGludC5cbiAqXG4gKiBEdXBsaWNhdGVzIGFmdGVyIHRoZSBmaXJzdCBvY2N1cnJlbmNlIGFyZSBmbGFnZ2VkIGludmFsaWQgc28gdGhlIHVzZXJcbiAqIG5vdGljZXMsIHJhdGhlciB0aGFuIHNpbGVudGx5IGRlLWR1cGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQaG9uZUxpc3QoIHJhdyApIHtcbiAgaWYgKCAhIHJhdyApIHJldHVybiBbXTtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IHJhdy5zcGxpdCggL1tcXHMsO10rLyApLmZpbHRlciggQm9vbGVhbiApO1xuICBjb25zdCBzZWVuID0gbmV3IFNldCgpO1xuICByZXR1cm4gY2FuZGlkYXRlcy5tYXAoICggYyApID0+IHtcbiAgICBjb25zdCBlMTY0ID0gbm9ybWFsaXplUGhvbmUoIGMgKTtcbiAgICBjb25zdCB2YWxpZCA9ICEhIGUxNjQgJiYgISBzZWVuLmhhcyggZTE2NCApO1xuICAgIGlmICggdmFsaWQgKSBzZWVuLmFkZCggZTE2NCApO1xuICAgIHJldHVybiB7IHJhdzogYywgZTE2NDogZTE2NCB8fCBjLCB2YWxpZCB9O1xuICB9ICk7XG59XG4iLCAiLyoqIE1hcCBhIGZhbSBkaXNwbGF5IG5hbWUgdG8gYSBsb3dlcmNhc2UsIGh5cGhlbmF0ZWQgY2FuZGlkYXRlIHNsdWcuICovXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2lmeSggcyApIHtcbiAgcmV0dXJuICggcyB8fCAnJyApLnRvTG93ZXJDYXNlKCkucmVwbGFjZSggL1teYS16MC05XSsvZywgJy0nICkucmVwbGFjZSggL14tK3wtKyQvZywgJycgKTtcbn1cblxuLyoqIFNhbWUgc2hhcGUgcnVsZSBhcyBQSFAgU2x1Z3M6OnZhbGlkYXRlKCkuICovXG5leHBvcnQgY29uc3QgU0xVR19SRUdFWCA9IC9eW2EtejAtOV1bYS16MC05LV17MSwzMH1bYS16MC05XSQvO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFNsdWcoIHMgKSB7XG4gIHJldHVybiBTTFVHX1JFR0VYLnRlc3QoIHMgfHwgJycgKTtcbn1cbiIsICJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvaW50ZXJhY3Rpdml0eSc7XG5pbXBvcnQgeyBub3JtYWxpemVQaG9uZSB9IGZyb20gJy4uL2xpYi9waG9uZS5qcyc7XG5cbmNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHN0b3JlKCAnaGV5ZmFtL2xvZ2luJywge1xuICBzdGF0ZToge1xuICAgIHN0YWdlOiAncGhvbmUnLFxuICAgIHBob25lOiAnJywgY29kZTogJycsXG4gICAgZXJyb3I6ICcnLCBidXN5OiBmYWxzZSxcbiAgICAvLyBJQVBJIGRpcmVjdGl2ZXMgb25seSByZWFjdCB0byBkaXJlY3QgcHJvcGVydHkgYWNjZXNzLiBQbGFpbiBnZXR0ZXJzXG4gICAgLy8gY29tcHV0ZWQgb2ZmIG90aGVyIHN0YXRlIGFyZW4ndCBwaWNrZWQgdXAgYXQgaHlkcmF0aW9uLCBzbyB3ZSBrZWVwXG4gICAgLy8gdmlzaWJpbGl0eSBmbGFncyBhcyBwbGFpbiByZWFjdGl2ZSBwcm9wcyBhbmQgdG9nZ2xlIHRoZW0gaW4gc2V0U3RhZ2UoKS5cbiAgICBwaG9uZUZvcm1IaWRkZW46IGZhbHNlLFxuICAgIGNvZGVGb3JtSGlkZGVuOiAgdHJ1ZSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIHVwZGF0ZVBob25lKCBlICkgeyBzdGF0ZS5waG9uZSA9IGUudGFyZ2V0LnZhbHVlOyBzdGF0ZS5lcnJvciA9ICcnOyB9LFxuICAgIHVwZGF0ZUNvZGUoIGUgKSB7IHN0YXRlLmNvZGUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKCAvXFxEL2csICcnICk7IHN0YXRlLmVycm9yID0gJyc7IH0sXG4gICAgYmFja1RvUGhvbmUoKSB7IHNldFN0YWdlKCAncGhvbmUnICk7IHN0YXRlLmNvZGUgPSAnJzsgc3RhdGUuZXJyb3IgPSAnJzsgfSxcbiAgICAqc3VibWl0UGhvbmUoIGUgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIHN0YXRlLmJ1c3kgKSByZXR1cm47XG4gICAgICBjb25zdCBwaG9uZSA9IG5vcm1hbGl6ZVBob25lKCBzdGF0ZS5waG9uZSApO1xuICAgICAgaWYgKCAhIHBob25lICkgeyBzdGF0ZS5lcnJvciA9ICdQaG9uZSBtdXN0IHN0YXJ0IHdpdGggKyBhbmQgY291bnRyeSBjb2RlIChlLmcuICsxNTU1NTU1MDEwMCkuJzsgcmV0dXJuOyB9XG4gICAgICBzdGF0ZS5waG9uZSA9IHBob25lO1xuICAgICAgc3RhdGUuYnVzeSA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vbG9naW4vc3RhcnRgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgcGhvbmUgfSApLFxuICAgICAgICB9ICk7XG4gICAgICAgIGlmICggISByLm9rICkgdGhyb3cgbmV3IEVycm9yKCAnc2VuZC1mYWlsZWQnICk7XG4gICAgICAgIHNldFN0YWdlKCAnY29kZScgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7IHN0YXRlLmVycm9yID0gJ0NvdWxkIG5vdCBzZW5kIGNvZGUuIFRyeSBhZ2Fpbi4nOyB9XG4gICAgICBmaW5hbGx5IHsgc3RhdGUuYnVzeSA9IGZhbHNlOyB9XG4gICAgfSxcbiAgICAqc3VibWl0Q29kZSggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICggc3RhdGUuYnVzeSApIHJldHVybjtcbiAgICAgIGlmICggc3RhdGUuY29kZS5sZW5ndGggIT09IDYgKSB7IHN0YXRlLmVycm9yID0gJ0VudGVyIHRoZSA2LWRpZ2l0IGNvZGUuJzsgcmV0dXJuOyB9XG4gICAgICBzdGF0ZS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgICBjb25zdCB2ID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9sb2dpbi92ZXJpZnlgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgcGhvbmU6IHN0YXRlLnBob25lLCBjb2RlOiBzdGF0ZS5jb2RlIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBpZiAoICEgdi5vayApIHtcbiAgICAgICAgICBjb25zdCBib2R5ID0geWllbGQgdi5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICAgIHN0YXRlLmVycm9yID0gYm9keS5lcnJvciA9PT0gJ2JhZF9jb2RlJyA/ICdXcm9uZyBjb2RlIG9yIHVua25vd24gcGhvbmUuIFRyeSBhZ2Fpbi4nIDogJ0NvdWxkIG5vdCB2ZXJpZnkuIFRyeSBhZ2Fpbi4nO1xuICAgICAgICAgIHN0YXRlLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9naW4vdmVyaWZ5IHJvdGF0ZXMgdGhlIG5vbmNlIChub3cgYXV0aGVudGljYXRlZCBhcyB0aGUgdXNlcikuXG4gICAgICAgIGNvbnN0IHZib2R5ID0geWllbGQgdi5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICBpZiAoIHZib2R5ICYmIHZib2R5Lm5vbmNlICkgaGV5ZmFtLm5vbmNlID0gdmJvZHkubm9uY2U7XG4gICAgICAgIC8vIEF1dGhlbnRpY2F0ZWQuIEZpbmQgdGhlIHVzZXIncyBmaXJzdCBmYW0sIGZhbGwgYmFjayB0byBsYW5kaW5nLlxuICAgICAgICBjb25zdCBmID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9tZS9mYW1zYCwge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgICAgICB9ICk7XG4gICAgICAgIGNvbnN0IGZib2R5ID0geWllbGQgZi5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICBjb25zdCBmYW1zID0gKCBmYm9keSAmJiBmYm9keS5mYW1zICkgfHwgW107XG4gICAgICAgIGlmICggZmFtcy5sZW5ndGggJiYgZmFtc1sgMCBdLnVybCApIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZhbXNbIDAgXS51cmw7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSAnTmV0d29yayBlcnJvci4gVHJ5IGFnYWluLic7XG4gICAgICAgIHN0YXRlLmJ1c3kgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBpbml0KCkge1xuICAgICAgLy8gU1NSIGRvZXNuJ3QgcmVuZGVyIHRoZSBpcy1oaWRkZW4gY2xhc3Mgb24gdGhlc2UgZm9ybXMuIElBUEkncyBoeWRyYXRpb25cbiAgICAgIC8vIHNraXBzIHJlLWFwcGx5aW5nIGNsYXNzIGJpbmRpbmdzIHdob3NlIGluaXRpYWwgRE9NIHN0YXRlIG1hdGNoZXMgdGhlXG4gICAgICAvLyBwcm94eS4gVG9nZ2xlIGVhY2ggZmxhZyB0aHJvdWdoIGl0cyBvcHBvc2l0ZSB0byB0cmlwIHRoZSBwcm94eSdzXG4gICAgICAvLyBjaGFuZ2UtZGV0ZWN0aW9uLCB0aGVuIHNldFN0YWdlKCkgcmUtYXNzZXJ0cyB0aGUgcmlnaHQgdmFsdWVzLlxuICAgICAgc3RhdGUucGhvbmVGb3JtSGlkZGVuID0gISBzdGF0ZS5waG9uZUZvcm1IaWRkZW47XG4gICAgICBzdGF0ZS5jb2RlRm9ybUhpZGRlbiAgPSAhIHN0YXRlLmNvZGVGb3JtSGlkZGVuO1xuICAgICAgc2V0U3RhZ2UoIHN0YXRlLnN0YWdlICk7XG4gICAgfSxcbiAgfSxcbn0gKTtcblxuZnVuY3Rpb24gc2V0U3RhZ2UoIG5leHQgKSB7XG4gIHN0YXRlLnN0YWdlICAgICAgICAgICA9IG5leHQ7XG4gIHN0YXRlLnBob25lRm9ybUhpZGRlbiA9IG5leHQgIT09ICdwaG9uZSc7XG4gIHN0YXRlLmNvZGVGb3JtSGlkZGVuICA9IG5leHQgIT09ICdjb2RlJztcbn1cblxuIiwgImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9pbnRlcmFjdGl2aXR5JztcblxuY29uc3QgeyBzdGF0ZSwgYWN0aW9ucyB9ID0gc3RvcmUoICdoZXlmYW0vaW52aXRlJywge1xuICBzdGF0ZToge1xuICAgIHN0YWdlOiAncGhvbmUnLFxuICAgIGNvZGU6ICcnLCAgICAgLy8gaW52aXRlIGNvZGUsIGZyb20gcXVlcnkgc3RyaW5nXG4gICAgcGhvbmU6ICcnLFxuICAgIHNtc0NvZGU6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGZhbU5hbWU6ICcnLCBpbnZpdGVyOiAnJywgcGhvbmVIaW50OiAnJyxcbiAgICBwcmV2aWV3TG9hZGVkOiBmYWxzZSwgcHJldmlld0Vycm9yOiAnJyxcbiAgICBlcnJvcjogJycsIGJ1c3k6IGZhbHNlLFxuICAgIGlzQXV0aGVkOiBmYWxzZSxcbiAgICAvLyBJQVBJIGRpcmVjdGl2ZXMgb25seSByZWFjdCB0byBkaXJlY3QgcHJvcGVydHkgYWNjZXNzLiBQbGFpbiBnZXR0ZXJzXG4gICAgLy8gY29tcHV0ZWQgb2ZmIG90aGVyIHN0YXRlIGFyZW4ndCBwaWNrZWQgdXAgYXQgaHlkcmF0aW9uLCBzbyB3ZSBrZWVwXG4gICAgLy8gdmlzaWJpbGl0eSBmbGFncyBhcyBwbGFpbiByZWFjdGl2ZSBwcm9wcyBhbmQgcmVjb21wdXRlIHRoZW0gd2hlbmV2ZXJcbiAgICAvLyB0aGUgaW5wdXRzIGNoYW5nZS4gcGhvbmVGb3JtSGlkZGVuIGRlcGVuZHMgb24gYm90aCBzdGFnZSBhbmRcbiAgICAvLyBwcmV2aWV3RXJyb3IgXHUyMDE0IGEgYnJva2VuIGludml0ZSBsaW5rIHNob3VsZCBrZWVwIHRoZSBmb3JtIGhpZGRlbi5cbiAgICBwaG9uZUZvcm1IaWRkZW46ICAgIGZhbHNlLFxuICAgIGNvZGVGb3JtSGlkZGVuOiAgICAgdHJ1ZSxcbiAgICBsb2dnZWRJbkZvcm1IaWRkZW46IHRydWUsXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICB1cGRhdGVQaG9uZSggZSApIHsgc3RhdGUucGhvbmUgPSBlLnRhcmdldC52YWx1ZTsgc3RhdGUuZXJyb3IgPSAnJzsgfSxcbiAgICB1cGRhdGVDb2RlKCBlICkgeyBzdGF0ZS5zbXNDb2RlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSggL1xcRC9nLCAnJyApOyBzdGF0ZS5lcnJvciA9ICcnOyB9LFxuICAgIHVwZGF0ZU5hbWUoIGUgKSB7IHN0YXRlLm5hbWUgPSBlLnRhcmdldC52YWx1ZTsgc3RhdGUuZXJyb3IgPSAnJzsgfSxcbiAgICBiYWNrVG9QaG9uZSgpIHsgc2V0U3RhZ2UoICdwaG9uZScgKTsgc3RhdGUuc21zQ29kZSA9ICcnOyBzdGF0ZS5lcnJvciA9ICcnOyB9LFxuICAgICpzdWJtaXRQaG9uZSggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICggc3RhdGUuYnVzeSApIHJldHVybjtcbiAgICAgIGNvbnN0IHBob25lID0gbm9ybWFsaXplUGhvbmUoIHN0YXRlLnBob25lICk7XG4gICAgICBpZiAoICEgcGhvbmUgKSB7IHN0YXRlLmVycm9yID0gJ1Bob25lIG11c3Qgc3RhcnQgd2l0aCArIGFuZCBjb3VudHJ5IGNvZGUgKGUuZy4gKzE1NTU1NTUwMTAwKS4nOyByZXR1cm47IH1cbiAgICAgIHN0YXRlLnBob25lID0gcGhvbmU7XG4gICAgICBzdGF0ZS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9zaWdudXAvc3RhcnRgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgcGhvbmUgfSApLFxuICAgICAgICB9ICk7XG4gICAgICAgIGlmICggISByLm9rICkgdGhyb3cgbmV3IEVycm9yKCAnc2VuZC1mYWlsZWQnICk7XG4gICAgICAgIHNldFN0YWdlKCAnY29kZScgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7IHN0YXRlLmVycm9yID0gJ0NvdWxkIG5vdCBzZW5kIGNvZGUuIFRyeSBhZ2Fpbi4nOyB9XG4gICAgICBmaW5hbGx5IHsgc3RhdGUuYnVzeSA9IGZhbHNlOyB9XG4gICAgfSxcbiAgICAqc3VibWl0Q29kZSggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICggc3RhdGUuYnVzeSApIHJldHVybjtcbiAgICAgIGlmICggc3RhdGUuc21zQ29kZS5sZW5ndGggIT09IDYgKSB7IHN0YXRlLmVycm9yID0gJ0VudGVyIHRoZSA2LWRpZ2l0IGNvZGUuJzsgcmV0dXJuOyB9XG4gICAgICBzdGF0ZS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS9pbnZpdGVzL2FjY2VwdGAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSgge1xuICAgICAgICAgICAgY29kZTogc3RhdGUuY29kZSxcbiAgICAgICAgICAgIHBob25lOiBzdGF0ZS5waG9uZSxcbiAgICAgICAgICAgIHNtc19jb2RlOiBzdGF0ZS5zbXNDb2RlLFxuICAgICAgICAgICAgZGlzcGxheV9uYW1lOiBzdGF0ZS5uYW1lLFxuICAgICAgICAgIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBjb25zdCBib2R5ID0geWllbGQgci5qc29uKCkuY2F0Y2goICgpID0+ICgge30gKSApO1xuICAgICAgICBpZiAoICEgci5vayApIHtcbiAgICAgICAgICBpZiAoIGJvZHkuZXJyb3IgPT09ICdiYWRfY29kZScgKSBzdGF0ZS5lcnJvciA9ICdXcm9uZyBjb2RlLiBUcnkgYWdhaW4uJztcbiAgICAgICAgICBlbHNlIGlmICggYm9keS5lcnJvciA9PT0gJ2ludmFsaWRfb3JfZXhwaXJlZCcgKSBzdGF0ZS5lcnJvciA9ICdUaGlzIGludml0ZSBpcyBubyBsb25nZXIgdmFsaWQuJztcbiAgICAgICAgICBlbHNlIGlmICggYm9keS5lcnJvciA9PT0gJ2xvY2tlZF9vdXQnICkgc3RhdGUuZXJyb3IgPSAnVG9vIG1hbnkgdHJpZXMuIFdhaXQgYSBiaXQuJztcbiAgICAgICAgICBlbHNlIHN0YXRlLmVycm9yID0gJ0NvdWxkIG5vdCBhY2NlcHQgaW52aXRlLiBUcnkgYWdhaW4uJztcbiAgICAgICAgICBzdGF0ZS5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYm9keS51cmw7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzdGF0ZS5lcnJvciA9ICdOZXR3b3JrIGVycm9yLiBUcnkgYWdhaW4uJztcbiAgICAgICAgc3RhdGUuYnVzeSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgKmpvaW5Bc0N1cnJlbnRVc2VyKCBlICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCBzdGF0ZS5idXN5ICkgcmV0dXJuO1xuICAgICAgc3RhdGUuYnVzeSA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vaW52aXRlcy9hY2NlcHRgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCB7IGNvZGU6IHN0YXRlLmNvZGUgfSApLFxuICAgICAgICB9ICk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB5aWVsZCByLmpzb24oKS5jYXRjaCggKCkgPT4gKCB7fSApICk7XG4gICAgICAgIGlmICggISByLm9rICkge1xuICAgICAgICAgIGlmICggYm9keS5lcnJvciA9PT0gJ2ludmFsaWRfb3JfZXhwaXJlZCcgKSAgICBzdGF0ZS5lcnJvciA9ICdUaGlzIGludml0ZSBpcyBubyBsb25nZXIgdmFsaWQuJztcbiAgICAgICAgICBlbHNlIGlmICggYm9keS5lcnJvciA9PT0gJ25vX3VzZXJfcGhvbmUnICkgICAgc3RhdGUuZXJyb3IgPSAnVGhpcyBpbnZpdGUgd2FzIHNlbnQgdG8gYSBkaWZmZXJlbnQgbnVtYmVyIHRoYW4gdGhlIG9uZSBvbiB5b3VyIGFjY291bnQuJztcbiAgICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmVycm9yID0gJ0NvdWxkIG5vdCBqb2luLiBUcnkgYWdhaW4uJztcbiAgICAgICAgICBzdGF0ZS5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYm9keS51cmw7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzdGF0ZS5lcnJvciA9ICdOZXR3b3JrIGVycm9yLiBUcnkgYWdhaW4uJztcbiAgICAgICAgc3RhdGUuYnVzeSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgICppbml0KCkge1xuICAgICAgLy8gU1NSIGRvZXNuJ3QgcmVuZGVyIHRoZSBpcy1oaWRkZW4gY2xhc3Mgb24gdGhlc2UgZm9ybXMuIElBUEkncyBoeWRyYXRpb25cbiAgICAgIC8vIHNraXBzIHJlLWFwcGx5aW5nIGNsYXNzIGJpbmRpbmdzIHdob3NlIGluaXRpYWwgRE9NIHN0YXRlIG1hdGNoZXMgdGhlXG4gICAgICAvLyBwcm94eS4gVG9nZ2xlIGVhY2ggZmxhZyB0aHJvdWdoIGl0cyBvcHBvc2l0ZSB0byB0cmlwIHRoZSBwcm94eSdzXG4gICAgICAvLyBjaGFuZ2UtZGV0ZWN0aW9uLCB0aGVuIHJlY29tcHV0ZVZpc2liaWxpdHkoKSByZS1hc3NlcnRzIHRoZSByaWdodCB2YWx1ZXMuXG4gICAgICBzdGF0ZS5waG9uZUZvcm1IaWRkZW4gICAgPSAhIHN0YXRlLnBob25lRm9ybUhpZGRlbjtcbiAgICAgIHN0YXRlLmNvZGVGb3JtSGlkZGVuICAgICA9ICEgc3RhdGUuY29kZUZvcm1IaWRkZW47XG4gICAgICBzdGF0ZS5sb2dnZWRJbkZvcm1IaWRkZW4gPSAhIHN0YXRlLmxvZ2dlZEluRm9ybUhpZGRlbjtcblxuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICBzdGF0ZS5pc0F1dGhlZCA9ICEhIGhleWZhbS51c2VySWQ7XG4gICAgICByZWNvbXB1dGVWaXNpYmlsaXR5KCk7XG5cbiAgICAgIC8vIFB1bGwgaW52aXRlIGNvZGUgZnJvbSB0aGUgVVJMLlxuICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyggd2luZG93LmxvY2F0aW9uLnNlYXJjaCApO1xuICAgICAgY29uc3QgY29kZSA9IHBhcmFtcy5nZXQoICdoZXlmYW1faW52aXRlX2NvZGUnICkgfHwgJyc7XG4gICAgICBpZiAoICEgY29kZSApIHtcbiAgICAgICAgc2V0UHJldmlld0Vycm9yKCAnTm8gaW52aXRlIGNvZGUgaW4gVVJMLiBDaGVjayB0aGUgbGluayB5b3VyIGludml0ZXIgc2VudCB5b3UuJyApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdGF0ZS5jb2RlID0gY29kZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKFxuICAgICAgICAgIGAke2hleWZhbS5hcGlCYXNlfS9pbnZpdGVzL3ByZXZpZXc/Y29kZT0ke2VuY29kZVVSSUNvbXBvbmVudCggY29kZSApfWAsXG4gICAgICAgICAgeyBjcmVkZW50aWFsczogJ2luY2x1ZGUnIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYm9keSA9IHlpZWxkIHIuanNvbigpLmNhdGNoKCAoKSA9PiAoIHt9ICkgKTtcbiAgICAgICAgaWYgKCAhIHIub2sgKSB7XG4gICAgICAgICAgaWYgKCBib2R5LmVycm9yID09PSAndXNlZCcgKSAgICBzZXRQcmV2aWV3RXJyb3IoICdUaGlzIGludml0ZSBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuJyApO1xuICAgICAgICAgIGVsc2UgaWYgKCBib2R5LmVycm9yID09PSAnZXhwaXJlZCcgKSBzZXRQcmV2aWV3RXJyb3IoICdUaGlzIGludml0ZSBoYXMgZXhwaXJlZC4nICk7XG4gICAgICAgICAgZWxzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXZpZXdFcnJvciggJ1RoaXMgaW52aXRlIGxpbmsgaXMgbm90IHZhbGlkLicgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuZmFtTmFtZSAgICAgICA9IGJvZHkuZmFtX25hbWU7XG4gICAgICAgIHN0YXRlLmludml0ZXIgICAgICAgPSBib2R5Lmludml0ZXI7XG4gICAgICAgIHN0YXRlLnBob25lSGludCAgICAgPSBib2R5LnBob25lX2hpbnQ7XG4gICAgICAgIHN0YXRlLnByZXZpZXdMb2FkZWQgPSB0cnVlO1xuICAgICAgICByZWNvbXB1dGVWaXNpYmlsaXR5KCk7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzZXRQcmV2aWV3RXJyb3IoICdDb3VsZCBub3QgbG9hZCBpbnZpdGUuIENoZWNrIHlvdXIgY29ubmVjdGlvbi4nICk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0gKTtcblxuZnVuY3Rpb24gcmVjb21wdXRlVmlzaWJpbGl0eSgpIHtcbiAgLy8gTG9nZ2VkIGluOiBza2lwIHRoZSBwaG9uZStTTVMgZGFuY2UgZW50aXJlbHkuIFNob3cgdGhlIG9uZS1idXR0b24gZm9ybVxuICAvLyBvbmNlIHRoZSBwcmV2aWV3IGxvYWRzIChzbyB3ZSBrbm93IHdoYXQgZmFtIHRoZXkncmUgam9pbmluZyk7IGhpZGUgaXRcbiAgLy8gaWYgcHJldmlldyBmYWlsZWQuXG4gIGlmICggc3RhdGUuaXNBdXRoZWQgKSB7XG4gICAgc3RhdGUucGhvbmVGb3JtSGlkZGVuICAgID0gdHJ1ZTtcbiAgICBzdGF0ZS5jb2RlRm9ybUhpZGRlbiAgICAgPSB0cnVlO1xuICAgIHN0YXRlLmxvZ2dlZEluRm9ybUhpZGRlbiA9ICEgc3RhdGUucHJldmlld0xvYWRlZCB8fCAhISBzdGF0ZS5wcmV2aWV3RXJyb3I7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN0YXRlLnBob25lRm9ybUhpZGRlbiAgICA9IHN0YXRlLnN0YWdlICE9PSAncGhvbmUnIHx8ICEhIHN0YXRlLnByZXZpZXdFcnJvcjtcbiAgc3RhdGUuY29kZUZvcm1IaWRkZW4gICAgID0gc3RhdGUuc3RhZ2UgIT09ICdjb2RlJztcbiAgc3RhdGUubG9nZ2VkSW5Gb3JtSGlkZGVuID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhZ2UoIG5leHQgKSB7XG4gIHN0YXRlLnN0YWdlID0gbmV4dDtcbiAgcmVjb21wdXRlVmlzaWJpbGl0eSgpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmV2aWV3RXJyb3IoIGVyciApIHtcbiAgc3RhdGUucHJldmlld0Vycm9yID0gZXJyO1xuICByZWNvbXB1dGVWaXNpYmlsaXR5KCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBob25lKCByYXcgKSB7XG4gIGNvbnN0IGRpZ2l0cyA9ICggcmF3IHx8ICcnICkucmVwbGFjZSggL1teMC05K10vZywgJycgKTtcbiAgaWYgKCAhIGRpZ2l0cy5zdGFydHNXaXRoKCAnKycgKSApIHJldHVybiBudWxsO1xuICBpZiAoIGRpZ2l0cy5sZW5ndGggPCA4IHx8IGRpZ2l0cy5sZW5ndGggPiAxNiApIHJldHVybiBudWxsO1xuICByZXR1cm4gZGlnaXRzO1xufVxuIiwgImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9pbnRlcmFjdGl2aXR5JztcbmltcG9ydCBDcm9wcGVyIGZyb20gJ2Nyb3BwZXJqcyc7XG5pbXBvcnQgJ2Nyb3BwZXJqcy9kaXN0L2Nyb3BwZXIuY3NzJztcblxubGV0IHByZWZzRGVib3VuY2UgPSBudWxsO1xuXG4vLyBIb2xkcyBub24tcmVhY3RpdmUgaW5zdGFuY2VzIChET00gc3RyZWFtcywgbGlicmFyeSBoYW5kbGVzKSBvdXRzaWRlIG9mIHN0YXRlXG4vLyBzbyBJQVBJJ3MgcHJveHkgZG9lc24ndCB0cnkgdG8gZGVlcC13YXRjaCB0aGVtLlxuY29uc3Qgc2lkZVRhYmxlID0ge1xuICBjYW1lcmFTdHJlYW06IG51bGwsXG4gIGNyb3BwZXI6IG51bGwsXG4gIHBlbmRpbmdPYmplY3RVcmw6IG51bGwsXG59O1xuXG5jb25zdCBpbml0aWFsUHVzaFBlcm1pc3Npb24gPSB0eXBlb2YgTm90aWZpY2F0aW9uICE9PSAndW5kZWZpbmVkJyA/IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uIDogJ2RlbmllZCc7XG5cbmNvbnN0IGlzTW9iaWxlRGV2aWNlID0gKCkgPT4gL01vYml8QW5kcm9pZHxpUGhvbmV8aVBhZC8udGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJyApO1xuXG5jb25zdCBlbXB0eUZhbSA9ICgpID0+ICgge1xuICBzbHVnOiAgICAgICAgICAgICAnJyxcbiAgbmFtZTogICAgICAgICAgICAgJycsXG4gIGJsb2dfaWQ6ICAgICAgICAgIDAsXG4gIHVybDogICAgICAgICAgICAgICcnLFxuICBwcmVmczogICAgICAgICAgICBkZWZhdWx0UHJlZnMoKSxcbiAgaW52aXRlVXJsOiAgICAgICAgJycsXG4gIGludml0ZVJlY2lwaWVudHM6ICcnLFxuICBpbnZpdGVOb3RlOiAgICAgICAnJyxcbiAgc2VuZGluZ0ludml0ZXM6ICAgZmFsc2UsXG4gIGludml0ZVN0YXR1czogICAgICcnLFxuICBxck9wZW46ICAgICAgICAgICBmYWxzZSxcbiAgcXJTdmc6ICAgICAgICAgICAgJycsXG59ICk7XG5cbmNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHN0b3JlKCAnaGV5ZmFtL2FjY291bnQnLCB7XG4gIHN0YXRlOiB7XG4gICAgZmFtOiBlbXB0eUZhbSgpLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgbG9hZEVycm9yOiAnJyxcbiAgICBwdXNoUGVybWlzc2lvbjogaW5pdGlhbFB1c2hQZXJtaXNzaW9uLFxuICAgIG1lOiB7IG5hbWU6ICcnLCBhdmF0YXJfdXJsOiAnJywgaGFzX3VwbG9hZGVkX2F2YXRhcjogZmFsc2UgfSxcbiAgICAvLyBOYXRpdmUgc2hhcmUgc2hlZXQgYXZhaWxhYmlsaXR5IFx1MjAxNCBzZXQgaW4gaW5pdCgpIHNvIGRpcmVjdGl2ZXMgY2FuIGhpZGVcbiAgICAvLyB0aGUgU2hhcmUgYnV0dG9uIG9uIGJyb3dzZXJzIHdpdGhvdXQgbmF2aWdhdG9yLnNoYXJlLlxuICAgIGNhblNoYXJlOiBmYWxzZSxcbiAgICAvLyBDYW1lcmEgKyBjcm9wIGZsb3cuXG4gICAgY2FtZXJhT3BlbjogICBmYWxzZSxcbiAgICBjYW1lcmFSZWFkeTogIGZhbHNlLFxuICAgIGNhbWVyYUVycm9yOiAgJycsXG4gICAgY3JvcE9wZW46ICAgICBmYWxzZSxcbiAgICBjcm9wU3JjOiAgICAgICcnLFxuICAgIHVwbG9hZGluZzogICAgZmFsc2UsXG4gICAgZ2V0IGxvZ291dFVybCgpIHtcbiAgICAgIHJldHVybiBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZS5sb2dvdXRVcmwgfHwgJy93cC1sb2dpbi5waHA/YWN0aW9uPWxvZ291dCc7XG4gICAgfSxcbiAgICBnZXQgbmV3RmFtVXJsKCkge1xuICAgICAgcmV0dXJuIHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlLm5ld0ZhbVVybCB8fCAnL3NpZ251cCc7XG4gICAgfSxcbiAgICAvLyBJQVBJIGRpcmVjdGl2ZXMgb25seSByZWFjdCB0byBkaXJlY3QgcHJvcGVydHkgYWNjZXNzLiBQbGFpbiBnZXR0ZXJzXG4gICAgLy8gY29tcHV0ZWQgb2ZmIG90aGVyIHN0YXRlIGFyZW4ndCBwaWNrZWQgdXAgYXQgaHlkcmF0aW9uLCBzbyB3ZSBrZWVwXG4gICAgLy8gdmlzaWJpbGl0eSBmbGFncyBhcyBwbGFpbiByZWFjdGl2ZSBwcm9wcyBhbmQgcmVjb21wdXRlIHRoZW0gd2hlbmV2ZXJcbiAgICAvLyBwdXNoUGVybWlzc2lvbiBjaGFuZ2VzLlxuICAgIHB1c2hOb3RFbmFibGVkOiAgIGluaXRpYWxQdXNoUGVybWlzc2lvbiAhPT0gJ2RlZmF1bHQnLFxuICAgIHB1c2hOb3RHcmFudGVkOiAgIGluaXRpYWxQdXNoUGVybWlzc2lvbiAhPT0gJ2dyYW50ZWQnLFxuICAgIHB1c2hOb3REZW5pZWQ6ICAgIGluaXRpYWxQdXNoUGVybWlzc2lvbiAhPT0gJ2RlbmllZCcsXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICAqdG9nZ2xlUHJlZiggZSApIHtcbiAgICAgIGNvbnN0IGV2ZW50ICAgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoICdkYXRhLWV2ZW50JyApO1xuICAgICAgY29uc3QgY2hhbm5lbCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSggJ2RhdGEtY2hhbm5lbCcgKTtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSAhISBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgaWYgKCAhIHN0YXRlLmZhbS5zbHVnICkgcmV0dXJuO1xuICAgICAgLy8gTXV0YXRlIHRoZSByZWFjdGl2ZSBwcm94eSBzbyB0aGUgY2hlY2tib3ggc3RheXMgaW4gc3luYy5cbiAgICAgIHN0YXRlLmZhbS5wcmVmc1sgZXZlbnQgXVsgY2hhbm5lbCBdID0gY2hlY2tlZDtcbiAgICAgIGlmICggcHJlZnNEZWJvdW5jZSApIGNsZWFyVGltZW91dCggcHJlZnNEZWJvdW5jZSApO1xuICAgICAgcHJlZnNEZWJvdW5jZSA9IHNldFRpbWVvdXQoIHNhdmVQcmVmcywgNTAwICk7XG4gICAgfSxcbiAgICAqcmVxdWVzdFB1c2goKSB7XG4gICAgICBpZiAoIHR5cGVvZiBOb3RpZmljYXRpb24gPT09ICd1bmRlZmluZWQnICkgcmV0dXJuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gICAgICAgIHN0YXRlLnB1c2hQZXJtaXNzaW9uID0gcmVzdWx0O1xuICAgICAgICByZWNvbXB1dGVWaXNpYmlsaXR5KCk7XG4gICAgICAgIGlmICggcmVzdWx0ID09PSAnZ3JhbnRlZCcgKSB7XG4gICAgICAgICAgLy8gUmVsb2FkIHRvIGxldCBwdXNoLXN1YnNjcmliZS5qcyByZWdpc3RlciBub3JtYWxseSBvbiBpdHMgd2luZG93LmxvYWQgaGFuZGxlci5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIC8vIGlnbm9yZVxuICAgICAgfVxuICAgIH0sXG4gICAgKm9uUGhvdG9DaG9zZW4oIGUgKSB7XG4gICAgICBjb25zdCBmaWxlID0gZT8udGFyZ2V0Py5maWxlcz8uWyAwIF07XG4gICAgICAvLyBDbGVhciB0aGUgaW5wdXQgc28gcmUtc2VsZWN0aW5nIHRoZSBzYW1lIGZpbGUgc3RpbGwgZmlyZXMgYGNoYW5nZWAuXG4gICAgICBpZiAoIGU/LnRhcmdldCApIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICBpZiAoIGZpbGUgKSBvcGVuQ3JvcCggZmlsZSApO1xuICAgIH0sXG4gICAgKnRha2VQaG90bygpIHtcbiAgICAgIC8vIE1vYmlsZTogZGVmZXIgdG8gdGhlIE9TIGNhbWVyYSBVSSB2aWEgdGhlIGNhcHR1cmUtYXR0cmlidXRlIGlucHV0LlxuICAgICAgaWYgKCBpc01vYmlsZURldmljZSgpICkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnW2RhdGEtY2FtZXJhLWlucHV0XScgKT8uY2xpY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gRGVza3RvcDogaW4tcGFnZSA8dmlkZW8+IHN0cmVhbS5cbiAgICAgIHN0YXRlLmNhbWVyYUVycm9yID0gJyc7XG4gICAgICBzdGF0ZS5jYW1lcmFSZWFkeSA9IGZhbHNlO1xuICAgICAgc3RhdGUuY2FtZXJhT3BlbiAgPSB0cnVlO1xuICAgICAgaWYgKCAhIG5hdmlnYXRvci5tZWRpYURldmljZXM/LmdldFVzZXJNZWRpYSApIHtcbiAgICAgICAgc3RhdGUuY2FtZXJhRXJyb3IgPSAnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY2FtZXJhIGNhcHR1cmUuJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0geWllbGQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoIHsgdmlkZW86IHsgZmFjaW5nTW9kZTogJ3VzZXInIH0gfSApO1xuICAgICAgICBzaWRlVGFibGUuY2FtZXJhU3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuaGV5ZmFtLWNhbWVyYV9fdmlkZW8nICk7XG4gICAgICAgIGlmICggdmlkZW8gKSB7XG4gICAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkZWRtZXRhZGF0YScsIHJlc29sdmUsIHsgb25jZTogdHJ1ZSB9ICkgKTtcbiAgICAgICAgICBzdGF0ZS5jYW1lcmFSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIHN0YXRlLmNhbWVyYUVycm9yID0gZXJyPy5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJ1xuICAgICAgICAgID8gJ0NhbWVyYSBwZXJtaXNzaW9uIHdhcyBkZW5pZWQuJ1xuICAgICAgICAgIDogJ0NvdWxkIG5vdCBhY2Nlc3MgdGhlIGNhbWVyYS4nO1xuICAgICAgfVxuICAgIH0sXG4gICAgKmNhcHR1cmVQaG90bygpIHtcbiAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5oZXlmYW0tY2FtZXJhX192aWRlbycgKTtcbiAgICAgIGlmICggISB2aWRlbyB8fCAhIHZpZGVvLnZpZGVvV2lkdGggKSByZXR1cm47XG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuICAgICAgY2FudmFzLndpZHRoICA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgICBjYW52YXMuZ2V0Q29udGV4dCggJzJkJyApLmRyYXdJbWFnZSggdmlkZW8sIDAsIDAgKTtcbiAgICAgIGNvbnN0IGJsb2IgPSB5aWVsZCBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiBjYW52YXMudG9CbG9iKCByZXNvbHZlLCAnaW1hZ2UvanBlZycsIDAuOTIgKSApO1xuICAgICAgc3RvcENhbWVyYSgpO1xuICAgICAgaWYgKCBibG9iICkgb3BlbkNyb3AoIGJsb2IgKTtcbiAgICB9LFxuICAgICpjbG9zZUNhbWVyYSgpIHtcbiAgICAgIHN0b3BDYW1lcmEoKTtcbiAgICB9LFxuICAgICpjbG9zZUNyb3AoKSB7XG4gICAgICBkZXN0cm95Q3JvcHBlcigpO1xuICAgIH0sXG4gICAgKnNhdmVDcm9wKCkge1xuICAgICAgaWYgKCAhIHNpZGVUYWJsZS5jcm9wcGVyICkgcmV0dXJuO1xuICAgICAgc3RhdGUudXBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHNpZGVUYWJsZS5jcm9wcGVyLmdldENyb3BwZWRDYW52YXMoIHtcbiAgICAgICAgd2lkdGg6ICA1MTIsXG4gICAgICAgIGhlaWdodDogNTEyLFxuICAgICAgICBpbWFnZVNtb290aGluZ1F1YWxpdHk6ICdoaWdoJyxcbiAgICAgIH0gKTtcbiAgICAgIGNvbnN0IGJsb2IgPSB5aWVsZCBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiBjYW52YXMudG9CbG9iKCByZXNvbHZlLCAnaW1hZ2UvanBlZycsIDAuOSApICk7XG4gICAgICBpZiAoICEgYmxvYiApIHsgc3RhdGUudXBsb2FkaW5nID0gZmFsc2U7IHJldHVybjsgfVxuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZmQuYXBwZW5kKCAncGhvdG8nLCBibG9iLCAnYXZhdGFyLmpwZycgKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHIgPSB5aWVsZCBmZXRjaCggYCR7IGhleWZhbS5hcGlCYXNlIH0vbWUvYXZhdGFyYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSwgYm9keTogZmQsXG4gICAgICAgIH0gKTtcbiAgICAgICAgaWYgKCAhIHIub2sgKSB0aHJvdyBuZXcgRXJyb3IoICdhdmF0YXItZmFpbGVkJyApO1xuICAgICAgICBjb25zdCBib2R5ID0geWllbGQgci5qc29uKCk7XG4gICAgICAgIHN0YXRlLm1lLmF2YXRhcl91cmwgICAgICAgICAgPSBib2R5LmF2YXRhcl91cmw7XG4gICAgICAgIHN0YXRlLm1lLmhhc191cGxvYWRlZF9hdmF0YXIgPSB0cnVlO1xuICAgICAgICBkZXN0cm95Q3JvcHBlcigpO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgYWxlcnQoICdDb3VsZCBub3QgdXBsb2FkIHBob3RvLiBUcnkgYWdhaW4uJyApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc3RhdGUudXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICAqb25GYW1OYW1lSW5wdXQoIGUgKSB7XG4gICAgICBzdGF0ZS5mYW0ubmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0sXG4gICAgKnNhdmVGYW1OYW1lKCBlICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCAhIHN0YXRlLmZhbS5zbHVnICkgcmV0dXJuO1xuICAgICAgY29uc3QgbmFtZSA9ICggc3RhdGUuZmFtLm5hbWUgfHwgJycgKS50cmltKCk7XG4gICAgICBpZiAoICEgbmFtZSApIHJldHVybjtcbiAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgciA9IHlpZWxkIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vJHtzdGF0ZS5mYW0uc2x1Z30vbmFtZWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgbmFtZSB9ICksXG4gICAgICAgIH0gKTtcbiAgICAgICAgaWYgKCAhIHIub2sgKSB0aHJvdyBuZXcgRXJyb3IoICdyZW5hbWUtZmFpbGVkJyApO1xuICAgICAgICBjb25zdCBib2R5ID0geWllbGQgci5qc29uKCk7XG4gICAgICAgIGlmICggYm9keSAmJiBib2R5Lm5hbWUgKSBzdGF0ZS5mYW0ubmFtZSA9IGJvZHkubmFtZTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIGFsZXJ0KCAnQ291bGQgbm90IHNhdmUgdGhlIGZhbWlseSBuYW1lLiBUcnkgYWdhaW4uJyApO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0QWxsKCBlICkge1xuICAgICAgaWYgKCBlPy50YXJnZXQ/LnNlbGVjdCApIGUudGFyZ2V0LnNlbGVjdCgpO1xuICAgIH0sXG4gICAgdXBkYXRlSW52aXRlUmVjaXBpZW50cyggZSApIHtcbiAgICAgIHN0YXRlLmZhbS5pbnZpdGVSZWNpcGllbnRzID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSxcbiAgICB1cGRhdGVJbnZpdGVOb3RlKCBlICkge1xuICAgICAgc3RhdGUuZmFtLmludml0ZU5vdGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9LFxuICAgICpjb3B5SW52aXRlTGluaygpIHtcbiAgICAgIGlmICggISBzdGF0ZS5mYW0uaW52aXRlVXJsICkgcmV0dXJuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgeWllbGQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoIHN0YXRlLmZhbS5pbnZpdGVVcmwgKTtcbiAgICAgICAgc3RhdGUuZmFtLmludml0ZVN0YXR1cyA9ICdMaW5rIGNvcGllZC4nO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7IGlmICggc3RhdGUuZmFtLmludml0ZVN0YXR1cyA9PT0gJ0xpbmsgY29waWVkLicgKSBzdGF0ZS5mYW0uaW52aXRlU3RhdHVzID0gJyc7IH0sIDI1MDAgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIHN0YXRlLmZhbS5pbnZpdGVTdGF0dXMgPSAnQ291bGQgbm90IGNvcHkuIExvbmctcHJlc3MgdGhlIGxpbmsgdG8gY29weSBtYW51YWxseS4nO1xuICAgICAgfVxuICAgIH0sXG4gICAgKnNoYXJlSW52aXRlTGluaygpIHtcbiAgICAgIGlmICggISBzdGF0ZS5mYW0uaW52aXRlVXJsIHx8ICEgbmF2aWdhdG9yLnNoYXJlICkgcmV0dXJuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgeWllbGQgbmF2aWdhdG9yLnNoYXJlKCB7IHRpdGxlOiBgSm9pbiAke3N0YXRlLmZhbS5uYW1lfSBvbiBIZXlGYW1gLCB1cmw6IHN0YXRlLmZhbS5pbnZpdGVVcmwgfSApO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgLy8gVXNlciBjYW5jZWxsZWQgb3Igc2hhcmUgZmFpbGVkIHNpbGVudGx5IFx1MjAxNCBubyBVSSBjaGFuZ2UuXG4gICAgICB9XG4gICAgfSxcbiAgICAqdG9nZ2xlUXIoIGUgKSB7XG4gICAgICBzdGF0ZS5mYW0ucXJPcGVuID0gISBzdGF0ZS5mYW0ucXJPcGVuO1xuICAgICAgaWYgKCBzdGF0ZS5mYW0ucXJPcGVuICYmICEgc3RhdGUuZmFtLnFyU3ZnICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgZGVmYXVsdDogUVJDb2RlIH0gPSB5aWVsZCBpbXBvcnQoICdxcmNvZGUtc3ZnJyApO1xuICAgICAgICAgIGNvbnN0IHFyID0gbmV3IFFSQ29kZSgge1xuICAgICAgICAgICAgY29udGVudDogc3RhdGUuZmFtLmludml0ZVVybCwgcGFkZGluZzogMiwgd2lkdGg6IDE5MiwgaGVpZ2h0OiAxOTIsXG4gICAgICAgICAgICBjb2xvcjogJyMxYTFmMTcnLCBiYWNrZ3JvdW5kOiAnI2Y0ZjZmMCcsIGVjbDogJ00nLCBqb2luOiB0cnVlLFxuICAgICAgICAgIH0gKTtcbiAgICAgICAgICBzdGF0ZS5mYW0ucXJTdmcgPSBxci5zdmcoKTtcbiAgICAgICAgICAvLyBSZWFjdGl2ZSBpbm5lckhUTUwgaXNuJ3QgYSB0aGluZyBpbiBJQVBJLCBzbyBwYWludCBtYW51YWxseS5cbiAgICAgICAgICBjb25zdCBob3N0ID0gZS50YXJnZXQuY2xvc2VzdCggJy5oZXlmYW0tYWNjb3VudF9fZmFtJyApPy5xdWVyeVNlbGVjdG9yKCAnLmhleWZhbS1hY2NvdW50X19pbnZpdGUtcXInICk7XG4gICAgICAgICAgaWYgKCBob3N0ICkgaG9zdC5pbm5lckhUTUwgPSBzdGF0ZS5mYW0ucXJTdmc7XG4gICAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgICAgc3RhdGUuZmFtLnFyT3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGFsZXJ0KCAnQ291bGQgbm90IHJlbmRlciB0aGUgUVIgY29kZS4nICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICpzZW5kSW52aXRlcyggZSApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICggISBzdGF0ZS5mYW0uc2x1ZyB8fCBzdGF0ZS5mYW0uc2VuZGluZ0ludml0ZXMgKSByZXR1cm47XG4gICAgICBjb25zdCByYXcgPSAoIHN0YXRlLmZhbS5pbnZpdGVSZWNpcGllbnRzIHx8ICcnICkuc3BsaXQoIC9bXFxuLF0rLyApLm1hcCggcyA9PiBzLnRyaW0oKSApLmZpbHRlciggQm9vbGVhbiApO1xuICAgICAgaWYgKCAhIHJhdy5sZW5ndGggKSB7XG4gICAgICAgIHN0YXRlLmZhbS5pbnZpdGVTdGF0dXMgPSAnQWRkIGF0IGxlYXN0IG9uZSBwaG9uZSBudW1iZXIgb3IgZW1haWwuJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3RhdGUuZmFtLnNlbmRpbmdJbnZpdGVzID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmZhbS5pbnZpdGVTdGF0dXMgICA9ICcnO1xuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS8ke3N0YXRlLmZhbS5zbHVnfS9pbnZpdGVzYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSggeyByZWNpcGllbnRzOiByYXcsIG1lc3NhZ2Vfbm90ZTogc3RhdGUuZmFtLmludml0ZU5vdGUgfHwgJycgfSApLFxuICAgICAgICB9ICk7XG4gICAgICAgIGlmICggISByLm9rICkgdGhyb3cgbmV3IEVycm9yKCAnaW52aXRlLWZhaWxlZCcgKTtcbiAgICAgICAgY29uc3QgYm9keSA9IHlpZWxkIHIuanNvbigpO1xuICAgICAgICBjb25zdCBzZW50ID0gKCBib2R5Lmlzc3VlZCB8fCBbXSApLmZpbHRlciggaSA9PiBpLnNlbnQgKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNraXBwZWQgPSAoIGJvZHkuc2tpcHBlZCB8fCBbXSApLmxlbmd0aDtcbiAgICAgICAgc3RhdGUuZmFtLmludml0ZVN0YXR1cyA9IGBTZW50ICR7c2VudH0keyBza2lwcGVkID8gYCAoJHtza2lwcGVkfSBza2lwcGVkIFx1MjAxNCBpbnZhbGlkKWAgOiAnJyB9LmA7XG4gICAgICAgIHN0YXRlLmZhbS5pbnZpdGVSZWNpcGllbnRzID0gJyc7XG4gICAgICAgIHN0YXRlLmZhbS5pbnZpdGVOb3RlICAgICAgID0gJyc7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzdGF0ZS5mYW0uaW52aXRlU3RhdHVzID0gJ0NvdWxkIG5vdCBzZW5kLiBUcnkgYWdhaW4uJztcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHN0YXRlLmZhbS5zZW5kaW5nSW52aXRlcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgKmNsZWFyQXZhdGFyKCkge1xuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAkeyBoZXlmYW0uYXBpQmFzZSB9L21lL2F2YXRhcmAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLCBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICAgICAgfSApO1xuICAgICAgICBpZiAoICEgci5vayApIHRocm93IG5ldyBFcnJvciggJ3Jlc2V0LWZhaWxlZCcgKTtcbiAgICAgICAgY29uc3QgYm9keSA9IHlpZWxkIHIuanNvbigpO1xuICAgICAgICBzdGF0ZS5tZS5hdmF0YXJfdXJsICAgICAgICAgID0gYm9keS5hdmF0YXJfdXJsO1xuICAgICAgICBzdGF0ZS5tZS5oYXNfdXBsb2FkZWRfYXZhdGFyID0gZmFsc2U7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBhbGVydCggJ0NvdWxkIG5vdCByZXNldC4gVHJ5IGFnYWluLicgKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICAqbG9hZE1lKCkge1xuICAgICAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gICAgICBpZiAoICEgaGV5ZmFtLnVzZXJJZCApIHJldHVybjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHIgPSB5aWVsZCBmZXRjaCggYCR7IGhleWZhbS5hcGlCYXNlIH0vbWVgLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgICAgIH0gKTtcbiAgICAgICAgaWYgKCAhIHIub2sgKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJvZHkgPSB5aWVsZCByLmpzb24oKTtcbiAgICAgICAgc3RhdGUubWUubmFtZSAgICAgICAgICAgICAgICA9IGJvZHkubmFtZSB8fCAnJztcbiAgICAgICAgc3RhdGUubWUuYXZhdGFyX3VybCAgICAgICAgICA9IGJvZHkuYXZhdGFyX3VybCB8fCAnJztcbiAgICAgICAgc3RhdGUubWUuaGFzX3VwbG9hZGVkX2F2YXRhciA9ICEhIGJvZHkuaGFzX3VwbG9hZGVkX2F2YXRhcjtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIC8vIGlnbm9yZTsgdGhlIHBhZ2Ugc3RpbGwgd29ya3Mgd2l0aG91dCB0aGUgYXZhdGFyIGJsb2NrXG4gICAgICB9XG4gICAgfSxcbiAgICAqaW5pdCgpIHtcbiAgICAgIC8vIFNTUiBkb2Vzbid0IHJlbmRlciB0aGUgaXMtaGlkZGVuIGNsYXNzIG9uIHRoZXNlIGVsZW1lbnRzLiBJQVBJJ3MgaHlkcmF0aW9uXG4gICAgICAvLyBza2lwcyByZS1hcHBseWluZyBjbGFzcyBiaW5kaW5ncyB3aG9zZSBpbml0aWFsIERPTSBzdGF0ZSBtYXRjaGVzIHRoZVxuICAgICAgLy8gcHJveHkuIFRvZ2dsZSBlYWNoIGZsYWcgdGhyb3VnaCBpdHMgb3Bwb3NpdGUgdG8gdHJpcCB0aGUgcHJveHknc1xuICAgICAgLy8gY2hhbmdlLWRldGVjdGlvbiwgdGhlbiByZWNvbXB1dGVWaXNpYmlsaXR5KCkgcmUtYXNzZXJ0cyB0aGUgcmlnaHQgdmFsdWVzLlxuICAgICAgc3RhdGUucHVzaE5vdEVuYWJsZWQgPSAhIHN0YXRlLnB1c2hOb3RFbmFibGVkO1xuICAgICAgc3RhdGUucHVzaE5vdEdyYW50ZWQgPSAhIHN0YXRlLnB1c2hOb3RHcmFudGVkO1xuICAgICAgc3RhdGUucHVzaE5vdERlbmllZCAgPSAhIHN0YXRlLnB1c2hOb3REZW5pZWQ7XG4gICAgICBzdGF0ZS5jYW5TaGFyZSAgICAgICA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3Iuc2hhcmUgPT09ICdmdW5jdGlvbic7XG4gICAgICByZWNvbXB1dGVWaXNpYmlsaXR5KCk7XG5cbiAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgaWYgKCAhIGhleWZhbS51c2VySWQgKSB7XG4gICAgICAgIC8vIE5vdCBsb2dnZWQgaW47IGJvdW5jZSB0byBsb2dpbi5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2x1ZyA9IGhleWZhbS5mYW1TbHVnO1xuICAgICAgaWYgKCAhIHNsdWcgKSB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgICA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5sb2FkRXJyb3IgPSAnVGhpcyBzZXR0aW5ncyBwYWdlIG11c3QgYmUgb3BlbmVkIGZyb20gYSBmYW1pbHkuJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfTtcbiAgICAgICAgY29uc3QgWyBmYW1zUmVzcCwgcHJlZnNSZXNwLCBsaW5rUmVzcCBdID0geWllbGQgUHJvbWlzZS5hbGwoIFtcbiAgICAgICAgICBmZXRjaCggYCR7aGV5ZmFtLmFwaUJhc2V9L21lL2ZhbXNgLCAgICAgICAgICAgeyBjcmVkZW50aWFsczogJ2luY2x1ZGUnLCBoZWFkZXJzIH0gKS5jYXRjaCggKCkgPT4gbnVsbCApLFxuICAgICAgICAgIGZldGNoKCBgJHtoZXlmYW0uYXBpQmFzZX0vJHtzbHVnfS9wcmVmc2AsICAgICB7IGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsIGhlYWRlcnMgfSApLmNhdGNoKCAoKSA9PiBudWxsICksXG4gICAgICAgICAgZmV0Y2goIGAke2hleWZhbS5hcGlCYXNlfS8ke3NsdWd9L2ludml0ZS1saW5rYCwgeyBjcmVkZW50aWFsczogJ2luY2x1ZGUnLCBoZWFkZXJzIH0gKS5jYXRjaCggKCkgPT4gbnVsbCApLFxuICAgICAgICBdICk7XG5cbiAgICAgICAgLy8gTG9vayB1cCB0aGUgY3VycmVudCBmYW0gaW4gdGhlIG1lbWJlcnNoaXAgbGlzdCBzbyB3ZSBnZXQgdGhlIG5hbWUgK1xuICAgICAgICAvLyBibG9nX2lkIHdpdGhvdXQgYSBwZXItZmFtIGVuZHBvaW50LiBJZiB0aGUgdXNlciBpc24ndCBhIG1lbWJlciwgZmFsbFxuICAgICAgICAvLyBiYWNrIHRvIGEgbWluaW1hbCByZWNvcmQgc28gdGhlIFVJIHN0aWxsIGJpbmRzLlxuICAgICAgICBsZXQgZmFtUmVjb3JkID0gbnVsbDtcbiAgICAgICAgaWYgKCBmYW1zUmVzcCAmJiBmYW1zUmVzcC5vayApIHtcbiAgICAgICAgICBjb25zdCBib2R5ID0geWllbGQgZmFtc1Jlc3AuanNvbigpO1xuICAgICAgICAgIGZhbVJlY29yZCA9ICggYm9keSAmJiBib2R5LmZhbXMgfHwgW10gKS5maW5kKCBmID0+IGYuc2x1ZyA9PT0gc2x1ZyApIHx8IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJlZnMgPSBkZWZhdWx0UHJlZnMoKTtcbiAgICAgICAgaWYgKCBwcmVmc1Jlc3AgJiYgcHJlZnNSZXNwLm9rICkge1xuICAgICAgICAgIGNvbnN0IHBiID0geWllbGQgcHJlZnNSZXNwLmpzb24oKTtcbiAgICAgICAgICBpZiAoIHBiICYmIHBiLnByZWZzICkgcHJlZnMgPSBwYi5wcmVmcztcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW52aXRlVXJsID0gJyc7XG4gICAgICAgIGlmICggbGlua1Jlc3AgJiYgbGlua1Jlc3Aub2sgKSB7XG4gICAgICAgICAgY29uc3QgbGIgPSB5aWVsZCBsaW5rUmVzcC5qc29uKCk7XG4gICAgICAgICAgaW52aXRlVXJsID0gbGI/LnVybCB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHN0YXRlLmZhbSwgZmFtUmVjb3JkIHx8IHsgc2x1ZywgbmFtZTogc2x1ZyB9LCB7IHByZWZzLCBpbnZpdGVVcmwgfSApO1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nICAgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUubG9hZEVycm9yID0gJ0NvdWxkIG5vdCBsb2FkIHlvdXIgc2V0dGluZ3MuIFRyeSByZWZyZXNoaW5nLic7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0gKTtcblxuZnVuY3Rpb24gcmVjb21wdXRlVmlzaWJpbGl0eSgpIHtcbiAgc3RhdGUucHVzaE5vdEVuYWJsZWQgPSBzdGF0ZS5wdXNoUGVybWlzc2lvbiAhPT0gJ2RlZmF1bHQnO1xuICBzdGF0ZS5wdXNoTm90R3JhbnRlZCA9IHN0YXRlLnB1c2hQZXJtaXNzaW9uICE9PSAnZ3JhbnRlZCc7XG4gIHN0YXRlLnB1c2hOb3REZW5pZWQgID0gc3RhdGUucHVzaFBlcm1pc3Npb24gIT09ICdkZW5pZWQnO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJlZnMoKSB7XG4gIHJldHVybiB7XG4gICAgcG9zdHM6ICAgICB7IHB1c2g6IHRydWUsIGVtYWlsOiB0cnVlLCAgc21zOiB0cnVlIH0sXG4gICAgY29tbWVudHM6ICB7IHB1c2g6IHRydWUsIGVtYWlsOiBmYWxzZSwgc21zOiBmYWxzZSB9LFxuICAgIHJlYWN0aW9uczogeyBwdXNoOiB0cnVlLCBlbWFpbDogZmFsc2UsIHNtczogZmFsc2UgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RvcENhbWVyYSgpIHtcbiAgc2lkZVRhYmxlLmNhbWVyYVN0cmVhbT8uZ2V0VHJhY2tzPy4oKS5mb3JFYWNoKCB0ID0+IHQuc3RvcCgpICk7XG4gIHNpZGVUYWJsZS5jYW1lcmFTdHJlYW0gPSBudWxsO1xuICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuaGV5ZmFtLWNhbWVyYV9fdmlkZW8nICk7XG4gIGlmICggdmlkZW8gKSB2aWRlby5zcmNPYmplY3QgPSBudWxsO1xuICBzdGF0ZS5jYW1lcmFPcGVuICA9IGZhbHNlO1xuICBzdGF0ZS5jYW1lcmFSZWFkeSA9IGZhbHNlO1xuICBzdGF0ZS5jYW1lcmFFcnJvciA9ICcnO1xufVxuXG5mdW5jdGlvbiBvcGVuQ3JvcCggZmlsZU9yQmxvYiApIHtcbiAgaWYgKCBzaWRlVGFibGUucGVuZGluZ09iamVjdFVybCApIFVSTC5yZXZva2VPYmplY3RVUkwoIHNpZGVUYWJsZS5wZW5kaW5nT2JqZWN0VXJsICk7XG4gIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGZpbGVPckJsb2IgKTtcbiAgc2lkZVRhYmxlLnBlbmRpbmdPYmplY3RVcmwgPSB1cmw7XG4gIHN0YXRlLmNyb3BTcmMgID0gdXJsO1xuICBzdGF0ZS5jcm9wT3BlbiA9IHRydWU7XG4gIC8vIENyb3BwZXJKUyBuZWVkcyB0aGUgPGltZz4gdG8gaGF2ZSBhIHNyYyBhbmQgYmUgaW4gdGhlIERPTS4gVGhlIGVsZW1lbnRcbiAgLy8gZXhpc3RzIGFscmVhZHkgKHRlbXBsYXRlIHJlbmRlcnMgdW5jb25kaXRpb25hbGx5OyB2aXNpYmlsaXR5IGlzIGNsYXNzLXRvZ2dsZWQpLFxuICAvLyBzbyB3YWl0IG9uZSBmcmFtZSBmb3IgdGhlIG5ldyBzcmMgdG8gc2V0dGxlLCB0aGVuIGluaXRpYWxpc2UuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuaGV5ZmFtLWNyb3BfX2ltYWdlJyApO1xuICAgIGlmICggISBpbWcgKSByZXR1cm47XG4gICAgc2lkZVRhYmxlLmNyb3BwZXI/LmRlc3Ryb3k/LigpO1xuICAgIHNpZGVUYWJsZS5jcm9wcGVyID0gbmV3IENyb3BwZXIoIGltZywge1xuICAgICAgYXNwZWN0UmF0aW86IDEsXG4gICAgICB2aWV3TW9kZTogICAgMSxcbiAgICAgIGF1dG9Dcm9wQXJlYTogMSxcbiAgICAgIGJhY2tncm91bmQ6ICBmYWxzZSxcbiAgICAgIGRyYWdNb2RlOiAgICAnbW92ZScsXG4gICAgICBndWlkZXM6ICAgICAgZmFsc2UsXG4gICAgICBjZW50ZXI6ICAgICAgZmFsc2UsXG4gICAgICBjcm9wQm94UmVzaXphYmxlOiB0cnVlLFxuICAgICAgdG9nZ2xlRHJhZ01vZGVPbkRibGNsaWNrOiBmYWxzZSxcbiAgICB9ICk7XG4gIH0gKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveUNyb3BwZXIoKSB7XG4gIHNpZGVUYWJsZS5jcm9wcGVyPy5kZXN0cm95Py4oKTtcbiAgc2lkZVRhYmxlLmNyb3BwZXIgPSBudWxsO1xuICBpZiAoIHNpZGVUYWJsZS5wZW5kaW5nT2JqZWN0VXJsICkge1xuICAgIFVSTC5yZXZva2VPYmplY3RVUkwoIHNpZGVUYWJsZS5wZW5kaW5nT2JqZWN0VXJsICk7XG4gICAgc2lkZVRhYmxlLnBlbmRpbmdPYmplY3RVcmwgPSBudWxsO1xuICB9XG4gIHN0YXRlLmNyb3BPcGVuID0gZmFsc2U7XG4gIHN0YXRlLmNyb3BTcmMgID0gJyc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmVQcmVmcygpIHtcbiAgY29uc3QgaGV5ZmFtID0gc3RvcmUoICdoZXlmYW0nICkuc3RhdGU7XG4gIGlmICggISBzdGF0ZS5mYW0uc2x1ZyApIHJldHVybjtcbiAgdHJ5IHtcbiAgICBhd2FpdCBmZXRjaCggYCR7aGV5ZmFtLmFwaUJhc2V9LyR7c3RhdGUuZmFtLnNsdWd9L3ByZWZzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdYLVdQLU5vbmNlJzogaGV5ZmFtLm5vbmNlIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSggeyBwcmVmczogc3RhdGUuZmFtLnByZWZzIH0gKSxcbiAgICB9ICk7XG4gIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgLy8gU2lsZW50IGZhaWx1cmUgXHUyMDE0IG5leHQgdG9nZ2xlIHdpbGwgcmV0cnkuXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvaW50ZXJhY3Rpdml0eSc7XG5cbmNvbnN0IFNFVkVOX0RBWVMgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuY29uc3QgeyBzdGF0ZSwgYWN0aW9ucyB9ID0gc3RvcmUoICdoZXlmYW0vbnVkZ2UnLCB7XG4gIHN0YXRlOiB7XG4gICAgdmlzaWJsZTogZmFsc2UsXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICAqZGlzbWlzcygpIHtcbiAgICAgIHN0YXRlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgICB5aWVsZCBmZXRjaCggYCR7aGV5ZmFtLmFwaUJhc2V9L21lL2Rpc21pc3MtbnVkZ2VgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogeyAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgICAgICB9ICk7XG4gICAgICB9IGNhdGNoICggZXJyICkgeyAvKiBub3QgYmxvY2tpbmcgKi8gfVxuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGluaXQoKSB7XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgIC8vIEFub255bW91cyB2aXNpdG9ycyBuZXZlciBzZWUgdGhlIG51ZGdlLlxuICAgICAgaWYgKCAhIGhleWZhbS51c2VySWQgKSAgICAgICAgICAgcmV0dXJuO1xuICAgICAgLy8gUGVyc2lzdGVudCBkaXNtaXNzYWwgXHUyMDE0IHNlcnZlciBhbHJlYWR5IGtub3dzIHRoZSB1c2VyIGNsb3NlZCBpdC5cbiAgICAgIGlmICggaGV5ZmFtLm51ZGdlRGlzbWlzc2VkQXQgKSAgIHJldHVybjtcbiAgICAgIC8vIE9ubHkgc2hvdyBpZiB0aGUgdXNlciBhY3R1YWxseSBjaG9zZSB0byBza2lwIGR1cmluZyBzaWdudXAuXG4gICAgICBpZiAoICEgaGV5ZmFtLmludml0ZXNTa2lwcGVkQXQgKSByZXR1cm47XG4gICAgICAvLyBUaW1lLWJveCB0aGUgbnVkZ2U6IGFmdGVyIDcgZGF5cyBmcm9tIG9uYm9hcmRpbmcsIHN0b3AgYnVnZ2luZyB0aGVtLlxuICAgICAgY29uc3Qgb25ib2FyZGVkID0gRGF0ZS5wYXJzZSggaGV5ZmFtLm9uYm9hcmRlZEF0ICk7XG4gICAgICBpZiAoICEgb25ib2FyZGVkICkgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgIGlmICggRGF0ZS5ub3coKSAtIG9uYm9hcmRlZCA+IFNFVkVOX0RBWVMgKSAgcmV0dXJuO1xuICAgICAgc3RhdGUudmlzaWJsZSA9IHRydWU7XG4gICAgfSxcbiAgfSxcbn0gKTtcbiIsICJpbXBvcnQgeyBzdG9yZSwgZ2V0Q29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvaW50ZXJhY3Rpdml0eSc7XG5cbmNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHN0b3JlKCAnaGV5ZmFtL2xpZ2h0Ym94Jywge1xuICBzdGF0ZToge1xuICAgIG9wZW46ICAgZmFsc2UsXG4gICAgaW1hZ2VzOiBbXSwgLy8gZnVsbC1yZXMgVVJMcyBmb3IgdGhlIGN1cnJlbnRseS1vcGVuZWQgcG9zdFxuICAgIGluZGV4OiAgMCxcbiAgICBnZXQgY3VycmVudCgpICAgIHsgcmV0dXJuIHN0YXRlLmltYWdlc1sgc3RhdGUuaW5kZXggXSB8fCBudWxsOyB9LFxuICAgIGdldCBjdXJyZW50VXJsKCkgeyByZXR1cm4gc3RhdGUuY3VycmVudD8udXJsIHx8ICcnOyB9LFxuICAgIGdldCBjdXJyZW50QWx0KCkgeyByZXR1cm4gc3RhdGUuY3VycmVudD8uYWx0IHx8ICcnOyB9LFxuICAgIGdldCBoYXNQcmV2KCkgICAgeyByZXR1cm4gc3RhdGUuaW5kZXggPiAwOyB9LFxuICAgIGdldCBoYXNOZXh0KCkgICAgeyByZXR1cm4gc3RhdGUuaW5kZXggPCBzdGF0ZS5pbWFnZXMubGVuZ3RoIC0gMTsgfSxcbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICByZXR1cm4gc3RhdGUuaW1hZ2VzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBgJHsgc3RhdGUuaW5kZXggKyAxIH0gLyAkeyBzdGF0ZS5pbWFnZXMubGVuZ3RoIH1gXG4gICAgICAgIDogJyc7XG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIG9wZW4oIGUgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjdHggICA9IGdldENvbnRleHQoKTtcbiAgICAgIC8vIGBjb250ZXh0Lml0ZW1gIGlzIHRoZSBwb3N0IChzZXQgYnkgZGF0YS13cC1lYWNoIGluIHRoZSBwb3N0LWNhcmQpLFxuICAgICAgLy8gYGNvbnRleHQucGhvdG9gIGlzIHRoZSBzcGVjaWZpYyBpbWFnZSBjbGlja2VkLlxuICAgICAgY29uc3QgcG9zdCAgPSBjdHg/Lml0ZW07XG4gICAgICBjb25zdCBwaG90byA9IGN0eD8ucGhvdG87XG4gICAgICBpZiAoICEgcG9zdCB8fCAhIHBob3RvICkgcmV0dXJuO1xuICAgICAgc3RhdGUuaW1hZ2VzID0gKCBwb3N0LmltYWdlcyB8fCBbXSApLm1hcCggaSA9PiAoIHsgaWQ6IGkuaWQsIHVybDogaS51cmwsIGFsdDogaS5hbHQgfSApICk7XG4gICAgICBzdGF0ZS5pbmRleCAgPSBzdGF0ZS5pbWFnZXMuZmluZEluZGV4KCBpID0+IGkuaWQgPT09IHBob3RvLmlkICk7XG4gICAgICBpZiAoIHN0YXRlLmluZGV4IDwgMCApIHN0YXRlLmluZGV4ID0gMDtcbiAgICAgIHN0YXRlLm9wZW4gPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaGV5ZmFtLWxpZ2h0Ym94LW9wZW4nICk7XG4gICAgfSxcbiAgICBjbG9zZSgpIHtcbiAgICAgIHN0YXRlLm9wZW4gPSBmYWxzZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggJ2hleWZhbS1saWdodGJveC1vcGVuJyApO1xuICAgIH0sXG4gICAgcHJldigpIHsgaWYgKCBzdGF0ZS5oYXNQcmV2ICkgc3RhdGUuaW5kZXgtLTsgfSxcbiAgICBuZXh0KCkgeyBpZiAoIHN0YXRlLmhhc05leHQgKSBzdGF0ZS5pbmRleCsrOyB9LFxuICAgIG9uQmFja2Ryb3AoIGUgKSB7XG4gICAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdD8uY29udGFpbnMoICdoZXlmYW0tbGlnaHRib3gnICkgKSB7XG4gICAgICAgIGFjdGlvbnMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uS2V5KCBlICkge1xuICAgICAgaWYgKCAhIHN0YXRlLm9wZW4gKSByZXR1cm47XG4gICAgICBpZiAoIGUua2V5ID09PSAnRXNjYXBlJyApICAgICBhY3Rpb25zLmNsb3NlKCk7XG4gICAgICBpZiAoIGUua2V5ID09PSAnQXJyb3dMZWZ0JyApICBhY3Rpb25zLnByZXYoKTtcbiAgICAgIGlmICggZS5rZXkgPT09ICdBcnJvd1JpZ2h0JyApIGFjdGlvbnMubmV4dCgpO1xuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIC8qKiBSdW4gb25jZSBhdCBoeWRyYXRpb246IGJpbmQgZ2xvYmFsIGtleSBoYW5kbGVyICsgc3dpcGUgaGFuZGxlcnMuICovXG4gICAgaW5pdCgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgYWN0aW9ucy5vbktleSApO1xuXG4gICAgICAvLyBUb3VjaCBzd2lwZTogc2ltcGxlIGhvcml6b250YWwgdGhyZXNob2xkLiBPbmx5IGFjdGl2ZSB3aGlsZSBvcGVuLlxuICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgZSA9PiB7XG4gICAgICAgIGlmICggISBzdGF0ZS5vcGVuICkgcmV0dXJuO1xuICAgICAgICB0b3VjaFN0YXJ0WCA9IGUudG91Y2hlc1sgMCBdPy5jbGllbnRYIHx8IDA7XG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgZSA9PiB7XG4gICAgICAgIGlmICggISBzdGF0ZS5vcGVuICkgcmV0dXJuO1xuICAgICAgICBjb25zdCBkeCA9ICggZS5jaGFuZ2VkVG91Y2hlc1sgMCBdPy5jbGllbnRYIHx8IDAgKSAtIHRvdWNoU3RhcnRYO1xuICAgICAgICBpZiAoIGR4ID4gIDYwICYmIHN0YXRlLmhhc1ByZXYgKSBhY3Rpb25zLnByZXYoKTtcbiAgICAgICAgaWYgKCBkeCA8IC02MCAmJiBzdGF0ZS5oYXNOZXh0ICkgYWN0aW9ucy5uZXh0KCk7XG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgIH0sXG4gIH0sXG59ICk7XG4iLCAiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2ludGVyYWN0aXZpdHknO1xuXG5jb25zdCB7IHN0YXRlLCBhY3Rpb25zIH0gPSBzdG9yZSggJ2hleWZhbS9kZXYnLCB7XG4gIHN0YXRlOiB7XG4gICAgb3BlbjogICAgZmFsc2UsXG4gICAgYnVzeTogICAgZmFsc2UsXG4gICAgbWVzc2FnZTogJycsXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICB0b2dnbGUoKSB7XG4gICAgICBzdGF0ZS5vcGVuID0gISBzdGF0ZS5vcGVuO1xuICAgIH0sXG4gICAgKnJlc2V0TWUoKSB7XG4gICAgICBjb25zdCBoZXlmYW0gPSBzdG9yZSggJ2hleWZhbScgKS5zdGF0ZTtcbiAgICAgIGlmICggISB3aW5kb3cuY29uZmlybSggXCJSZXNldCB5b3VyIGZhbXMgYW5kIHVudmVyaWZ5IHlvdXIgcGhvbmU/IFlvdSdsbCByZS1vbmJvYXJkIG9uIG5leHQgcGFnZSBsb2FkLlwiICkgKSByZXR1cm47XG4gICAgICBzdGF0ZS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHIgPSB5aWVsZCBmZXRjaCggYCR7IGhleWZhbS5hcGlCYXNlIH0vX2Rldi9yZXNldC1tZWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICAgICAgJ1BPU1QnLFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgaGVhZGVyczogICAgIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtV1AtTm9uY2UnOiBoZXlmYW0ubm9uY2UgfSxcbiAgICAgICAgICBib2R5OiAgICAgICAgSlNPTi5zdHJpbmdpZnkoIHsgZGVsZXRlX3VzZXI6IGZhbHNlIH0gKSxcbiAgICAgICAgfSApO1xuICAgICAgICBpZiAoICEgci5vayApIHRocm93IG5ldyBFcnJvciggeWllbGQgci50ZXh0KCkgKTtcbiAgICAgICAgc3RhdGUubWVzc2FnZSA9ICdSZXNldCBkb25lLiBSZWxvYWRpbmdcdTIwMjYnO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiBsb2NhdGlvbi5hc3NpZ24oICcvJyApLCA1MDAgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnIgKSB7XG4gICAgICAgIHN0YXRlLm1lc3NhZ2UgPSBgUmVzZXQgZmFpbGVkOiAkeyBlcnIubWVzc2FnZSB9YDtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHN0YXRlLmJ1c3kgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgICpzZWVkRGVtbygpIHtcbiAgICAgIGNvbnN0IGhleWZhbSA9IHN0b3JlKCAnaGV5ZmFtJyApLnN0YXRlO1xuICAgICAgc3RhdGUuYnVzeSA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByID0geWllbGQgZmV0Y2goIGAkeyBoZXlmYW0uYXBpQmFzZSB9L19kZXYvc2VlZC1kZW1vYCwge1xuICAgICAgICAgIG1ldGhvZDogICAgICAnUE9TVCcsXG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiAgICAgeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1XUC1Ob25jZSc6IGhleWZhbS5ub25jZSB9LFxuICAgICAgICAgIGJvZHk6ICAgICAgICBKU09OLnN0cmluZ2lmeSggeyByZXNldDogdHJ1ZSB9ICksXG4gICAgICAgIH0gKTtcbiAgICAgICAgY29uc3QgaiA9IHlpZWxkIHIuanNvbigpO1xuICAgICAgICBpZiAoICEgci5vayApIHRocm93IG5ldyBFcnJvciggaj8uZXJyb3IgfHwgJ3NlZWQgZmFpbGVkJyApO1xuICAgICAgICBzdGF0ZS5tZXNzYWdlID0gYFNlZWRlZCBcdTIxOTIgJHsgai5yZXN1bHQuZmFtX3VybCB9YDtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4gbG9jYXRpb24uYXNzaWduKCBqLnJlc3VsdC5mYW1fdXJsICksIDgwMCApO1xuICAgICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgc3RhdGUubWVzc2FnZSA9IGBTZWVkIGZhaWxlZDogJHsgZXJyLm1lc3NhZ2UgfWA7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzdGF0ZS5idXN5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIC0tLSBTdGF0ZSBzaW11bGF0b3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gVGhlc2UgZmxpcCBzdG9yZSBzdGF0ZSBkaXJlY3RseSBzbyB5b3UgY2FuIHJldmlldy9zY3JlZW5zaG90IGVhY2hcbiAgICAvLyB2aXN1YWwgc3RhdGUgd2l0aG91dCBkcml2aW5nIGl0IHRocm91Z2ggcmVhbCBpbnRlcmFjdGlvbnMuIElkZW1wb3RlbnRcbiAgICAvLyB0b2dnbGVzIHdoZXJlIGl0IG1ha2VzIHNlbnNlOyBcIlJlc2V0XCIgcHV0cyBldmVyeXRoaW5nIGJhY2sgdG8gZGVmYXVsdC5cbiAgICBzaW1OdWRnZSgpIHtcbiAgICAgIGNvbnN0IHMgPSBzdG9yZSggJ2hleWZhbS9udWRnZScgKS5zdGF0ZTtcbiAgICAgIHMudmlzaWJsZSA9ICEgcy52aXNpYmxlO1xuICAgIH0sXG4gICAgc2ltRWRpdG9yKCkge1xuICAgICAgLy8gT3BlbiB0aGUgZWRpdG9yIG9uIHRoZSBmaXJzdCBwb3N0IGluIHRoZSBmZWVkLCBvciBhIGZha2UgcG9zdCBpZiBlbXB0eS5cbiAgICAgIGNvbnN0IGZlZWQgPSBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlO1xuICAgICAgY29uc3QgcG9zdCA9IGZlZWQucG9zdHM/LlsgMCBdIHx8IHtcbiAgICAgICAgaWQ6IC0xLCBib2R5OiAnU2ltdWxhdGVkIHBvc3QgYm9keSBcdTIwMTQgZWRpdCBtZSB0byB0ZXN0IHRoZSBlZGl0b3IuJyxcbiAgICAgICAgaW1hZ2VzOiBbXSwgcG9sbDogbnVsbCxcbiAgICAgIH07XG4gICAgICBzdG9yZSggJ2hleWZhbS9jb21wb3NlcicgKS5hY3Rpb25zLm9wZW5FZGl0b3IoIHBvc3QgKTtcbiAgICB9LFxuICAgIHNpbURlbGV0ZSgpIHtcbiAgICAgIGNvbnN0IGZlZWQgPSBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlO1xuICAgICAgZmVlZC5kZWxldGVUYXJnZXRJZCA9IGZlZWQucG9zdHM/LlsgMCBdPy5pZCB8fCAtMTtcbiAgICAgIGZlZWQuZGVsZXRlRXJyb3IgICAgPSAnJztcbiAgICAgIGZlZWQuZGVsZXRpbmcgICAgICAgPSBmYWxzZTtcbiAgICAgIGZlZWQuZGVsZXRlT3BlbiAgICAgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaGV5ZmFtLW1vZGFsLW9wZW4nICk7XG4gICAgfSxcbiAgICBzaW1EZWxldGluZygpIHtcbiAgICAgIC8vIE9wZW4gdGhlIGNvbmZpcm0sIHRoZW4gZmxpcCBpbnRvIHRoZSBcImRlbGV0aW5nXCIgcGVuZGluZyBzdGF0ZS5cbiAgICAgIGFjdGlvbnMuc2ltRGVsZXRlKCk7XG4gICAgICBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlLmRlbGV0aW5nID0gdHJ1ZTtcbiAgICB9LFxuICAgIHNpbURlbGV0ZUVycm9yKCkge1xuICAgICAgYWN0aW9ucy5zaW1EZWxldGUoKTtcbiAgICAgIGNvbnN0IGZlZWQgPSBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlO1xuICAgICAgZmVlZC5kZWxldGluZyAgICA9IGZhbHNlO1xuICAgICAgZmVlZC5kZWxldGVFcnJvciA9ICdDb3VsZCBub3QgZGVsZXRlLiBUcnkgYWdhaW4uJztcbiAgICB9LFxuICAgIHNpbVBvbGxNb2RlKCkge1xuICAgICAgY29uc3QgYyA9IHN0b3JlKCAnaGV5ZmFtL2NvbXBvc2VyJyApLnN0YXRlO1xuICAgICAgYy5wb2xsTW9kZSA9ICEgYy5wb2xsTW9kZTtcbiAgICB9LFxuICAgIHNpbVNlbmRpbmcoKSB7XG4gICAgICBjb25zdCBjID0gc3RvcmUoICdoZXlmYW0vY29tcG9zZXInICkuc3RhdGU7XG4gICAgICBjLnN1Ym1pdHRpbmcgPSAhIGMuc3VibWl0dGluZztcbiAgICB9LFxuICAgIHNpbUNvbXBvc2VyRXJyb3IoKSB7XG4gICAgICBjb25zdCBjID0gc3RvcmUoICdoZXlmYW0vY29tcG9zZXInICkuc3RhdGU7XG4gICAgICBjLmVycm9yID0gYy5lcnJvciA/ICcnIDogJ0NvdWxkIG5vdCBwb3N0LiBUcnkgYWdhaW4uJztcbiAgICB9LFxuICAgIHNpbUVtcHR5RmVlZCgpIHtcbiAgICAgIGNvbnN0IGZlZWQgPSBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlO1xuICAgICAgaWYgKCBmZWVkLl9fc3Rhc2hlZFBvc3RzICkge1xuICAgICAgICBmZWVkLnBvc3RzICAgICAgICAgID0gZmVlZC5fX3N0YXNoZWRQb3N0cztcbiAgICAgICAgZmVlZC5oYXNQb3N0cyAgICAgICA9IGZlZWQucG9zdHMubGVuZ3RoID4gMDtcbiAgICAgICAgZmVlZC5fX3N0YXNoZWRQb3N0cyA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZWVkLl9fc3Rhc2hlZFBvc3RzID0gZmVlZC5wb3N0cztcbiAgICAgICAgZmVlZC5wb3N0cyAgICAgICAgICA9IFtdO1xuICAgICAgICBmZWVkLmhhc1Bvc3RzICAgICAgID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBzaW1SZXNldCgpIHtcbiAgICAgIGNvbnN0IGMgPSBzdG9yZSggJ2hleWZhbS9jb21wb3NlcicgKTtcbiAgICAgIGlmICggYy5zdGF0ZS5lZGl0b3JPcGVuICkgYy5hY3Rpb25zLmNsb3NlRWRpdG9yKCk7XG4gICAgICBjLnN0YXRlLnBvbGxNb2RlICAgPSBmYWxzZTtcbiAgICAgIGMuc3RhdGUuc3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgYy5zdGF0ZS5lcnJvciAgICAgID0gJyc7XG5cbiAgICAgIGNvbnN0IGYgPSBzdG9yZSggJ2hleWZhbS9mZWVkJyApLnN0YXRlO1xuICAgICAgZi5kZWxldGVPcGVuICAgICA9IGZhbHNlO1xuICAgICAgZi5kZWxldGVUYXJnZXRJZCA9IDA7XG4gICAgICBmLmRlbGV0aW5nICAgICAgID0gZmFsc2U7XG4gICAgICBmLmRlbGV0ZUVycm9yICAgID0gJyc7XG4gICAgICBpZiAoIGYuX19zdGFzaGVkUG9zdHMgKSB7XG4gICAgICAgIGYucG9zdHMgICAgICAgICAgPSBmLl9fc3Rhc2hlZFBvc3RzO1xuICAgICAgICBmLmhhc1Bvc3RzICAgICAgID0gZi5wb3N0cy5sZW5ndGggPiAwO1xuICAgICAgICBmLl9fc3Rhc2hlZFBvc3RzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggJ2hleWZhbS1tb2RhbC1vcGVuJyApO1xuXG4gICAgICBzdG9yZSggJ2hleWZhbS9udWRnZScgKS5zdGF0ZS52aXNpYmxlID0gZmFsc2U7XG4gICAgfSxcbiAgfSxcbn0gKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7OztBQUFBO0FBQUE7QUFVQSxLQUFDLFNBQVUsUUFBUSxTQUFTO0FBQzFCLGFBQU8sWUFBWSxZQUFZLE9BQU8sV0FBVyxjQUFjLE9BQU8sVUFBVSxRQUFRLElBQ3hGLE9BQU8sV0FBVyxjQUFjLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FDMUQsU0FBUyxPQUFPLGVBQWUsY0FBYyxhQUFhLFVBQVUsTUFBTSxPQUFPLFVBQVUsUUFBUTtBQUFBLElBQ3RHLEdBQUcsVUFBTyxXQUFZO0FBQUU7QUFFdEIsZUFBUyxRQUFRLEdBQUcsR0FBRztBQUNyQixZQUFJLElBQUksT0FBTyxLQUFLLENBQUM7QUFDckIsWUFBSSxPQUFPLHVCQUF1QjtBQUNoQyxjQUFJLElBQUksT0FBTyxzQkFBc0IsQ0FBQztBQUN0QyxnQkFBTSxJQUFJLEVBQUUsT0FBTyxTQUFVQSxJQUFHO0FBQzlCLG1CQUFPLE9BQU8seUJBQXlCLEdBQUdBLEVBQUMsRUFBRTtBQUFBLFVBQy9DLENBQUMsSUFBSSxFQUFFLEtBQUssTUFBTSxHQUFHLENBQUM7QUFBQSxRQUN4QjtBQUNBLGVBQU87QUFBQSxNQUNUO0FBQ0EsZUFBUyxlQUFlLEdBQUc7QUFDekIsaUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDekMsY0FBSSxJQUFJLFFBQVEsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQztBQUMvQyxjQUFJLElBQUksUUFBUSxPQUFPLENBQUMsR0FBRyxJQUFFLEVBQUUsUUFBUSxTQUFVQSxJQUFHO0FBQ2xELDRCQUFnQixHQUFHQSxJQUFHLEVBQUVBLEVBQUMsQ0FBQztBQUFBLFVBQzVCLENBQUMsSUFBSSxPQUFPLDRCQUE0QixPQUFPLGlCQUFpQixHQUFHLE9BQU8sMEJBQTBCLENBQUMsQ0FBQyxJQUFJLFFBQVEsT0FBTyxDQUFDLENBQUMsRUFBRSxRQUFRLFNBQVVBLElBQUc7QUFDaEosbUJBQU8sZUFBZSxHQUFHQSxJQUFHLE9BQU8seUJBQXlCLEdBQUdBLEVBQUMsQ0FBQztBQUFBLFVBQ25FLENBQUM7QUFBQSxRQUNIO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFDQSxlQUFTLGFBQWEsR0FBRyxHQUFHO0FBQzFCLFlBQUksWUFBWSxPQUFPLEtBQUssQ0FBQyxFQUFHLFFBQU87QUFDdkMsWUFBSSxJQUFJLEVBQUUsT0FBTyxXQUFXO0FBQzVCLFlBQUksV0FBVyxHQUFHO0FBQ2hCLGNBQUksSUFBSSxFQUFFLEtBQUssR0FBRyxLQUFLLFNBQVM7QUFDaEMsY0FBSSxZQUFZLE9BQU8sRUFBRyxRQUFPO0FBQ2pDLGdCQUFNLElBQUksVUFBVSw4Q0FBOEM7QUFBQSxRQUNwRTtBQUNBLGdCQUFRLGFBQWEsSUFBSSxTQUFTLFFBQVEsQ0FBQztBQUFBLE1BQzdDO0FBQ0EsZUFBUyxlQUFlLEdBQUc7QUFDekIsWUFBSSxJQUFJLGFBQWEsR0FBRyxRQUFRO0FBQ2hDLGVBQU8sWUFBWSxPQUFPLElBQUksSUFBSSxJQUFJO0FBQUEsTUFDeEM7QUFDQSxlQUFTLFFBQVEsR0FBRztBQUNsQjtBQUVBLGVBQU8sVUFBVSxjQUFjLE9BQU8sVUFBVSxZQUFZLE9BQU8sT0FBTyxXQUFXLFNBQVVDLElBQUc7QUFDaEcsaUJBQU8sT0FBT0E7QUFBQSxRQUNoQixJQUFJLFNBQVVBLElBQUc7QUFDZixpQkFBT0EsTUFBSyxjQUFjLE9BQU8sVUFBVUEsR0FBRSxnQkFBZ0IsVUFBVUEsT0FBTSxPQUFPLFlBQVksV0FBVyxPQUFPQTtBQUFBLFFBQ3BILEdBQUcsUUFBUSxDQUFDO0FBQUEsTUFDZDtBQUNBLGVBQVMsZ0JBQWdCLFVBQVUsYUFBYTtBQUM5QyxZQUFJLEVBQUUsb0JBQW9CLGNBQWM7QUFDdEMsZ0JBQU0sSUFBSSxVQUFVLG1DQUFtQztBQUFBLFFBQ3pEO0FBQUEsTUFDRjtBQUNBLGVBQVMsa0JBQWtCLFFBQVEsT0FBTztBQUN4QyxpQkFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxjQUFJLGFBQWEsTUFBTSxDQUFDO0FBQ3hCLHFCQUFXLGFBQWEsV0FBVyxjQUFjO0FBQ2pELHFCQUFXLGVBQWU7QUFDMUIsY0FBSSxXQUFXLFdBQVksWUFBVyxXQUFXO0FBQ2pELGlCQUFPLGVBQWUsUUFBUSxlQUFlLFdBQVcsR0FBRyxHQUFHLFVBQVU7QUFBQSxRQUMxRTtBQUFBLE1BQ0Y7QUFDQSxlQUFTLGFBQWEsYUFBYSxZQUFZLGFBQWE7QUFDMUQsWUFBSSxXQUFZLG1CQUFrQixZQUFZLFdBQVcsVUFBVTtBQUNuRSxZQUFJLFlBQWEsbUJBQWtCLGFBQWEsV0FBVztBQUMzRCxlQUFPLGVBQWUsYUFBYSxhQUFhO0FBQUEsVUFDOUMsVUFBVTtBQUFBLFFBQ1osQ0FBQztBQUNELGVBQU87QUFBQSxNQUNUO0FBQ0EsZUFBUyxnQkFBZ0IsS0FBSyxLQUFLLE9BQU87QUFDeEMsY0FBTSxlQUFlLEdBQUc7QUFDeEIsWUFBSSxPQUFPLEtBQUs7QUFDZCxpQkFBTyxlQUFlLEtBQUssS0FBSztBQUFBLFlBQzlCO0FBQUEsWUFDQSxZQUFZO0FBQUEsWUFDWixjQUFjO0FBQUEsWUFDZCxVQUFVO0FBQUEsVUFDWixDQUFDO0FBQUEsUUFDSCxPQUFPO0FBQ0wsY0FBSSxHQUFHLElBQUk7QUFBQSxRQUNiO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFDQSxlQUFTLG1CQUFtQixLQUFLO0FBQy9CLGVBQU8sbUJBQW1CLEdBQUcsS0FBSyxpQkFBaUIsR0FBRyxLQUFLLDRCQUE0QixHQUFHLEtBQUssbUJBQW1CO0FBQUEsTUFDcEg7QUFDQSxlQUFTLG1CQUFtQixLQUFLO0FBQy9CLFlBQUksTUFBTSxRQUFRLEdBQUcsRUFBRyxRQUFPLGtCQUFrQixHQUFHO0FBQUEsTUFDdEQ7QUFDQSxlQUFTLGlCQUFpQixNQUFNO0FBQzlCLFlBQUksT0FBTyxXQUFXLGVBQWUsS0FBSyxPQUFPLFFBQVEsS0FBSyxRQUFRLEtBQUssWUFBWSxLQUFLLEtBQU0sUUFBTyxNQUFNLEtBQUssSUFBSTtBQUFBLE1BQzFIO0FBQ0EsZUFBUyw0QkFBNEIsR0FBRyxRQUFRO0FBQzlDLFlBQUksQ0FBQyxFQUFHO0FBQ1IsWUFBSSxPQUFPLE1BQU0sU0FBVSxRQUFPLGtCQUFrQixHQUFHLE1BQU07QUFDN0QsWUFBSSxJQUFJLE9BQU8sVUFBVSxTQUFTLEtBQUssQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBQ3JELFlBQUksTUFBTSxZQUFZLEVBQUUsWUFBYSxLQUFJLEVBQUUsWUFBWTtBQUN2RCxZQUFJLE1BQU0sU0FBUyxNQUFNLE1BQU8sUUFBTyxNQUFNLEtBQUssQ0FBQztBQUNuRCxZQUFJLE1BQU0sZUFBZSwyQ0FBMkMsS0FBSyxDQUFDLEVBQUcsUUFBTyxrQkFBa0IsR0FBRyxNQUFNO0FBQUEsTUFDakg7QUFDQSxlQUFTLGtCQUFrQixLQUFLLEtBQUs7QUFDbkMsWUFBSSxPQUFPLFFBQVEsTUFBTSxJQUFJLE9BQVEsT0FBTSxJQUFJO0FBQy9DLGlCQUFTLElBQUksR0FBRyxPQUFPLElBQUksTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLElBQUssTUFBSyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ3BFLGVBQU87QUFBQSxNQUNUO0FBQ0EsZUFBUyxxQkFBcUI7QUFDNUIsY0FBTSxJQUFJLFVBQVUsc0lBQXNJO0FBQUEsTUFDNUo7QUFFQSxVQUFJLGFBQWEsT0FBTyxXQUFXLGVBQWUsT0FBTyxPQUFPLGFBQWE7QUFDN0UsVUFBSSxTQUFTLGFBQWEsU0FBUyxDQUFDO0FBQ3BDLFVBQUksa0JBQWtCLGNBQWMsT0FBTyxTQUFTLGtCQUFrQixrQkFBa0IsT0FBTyxTQUFTLGtCQUFrQjtBQUMxSCxVQUFJLG9CQUFvQixhQUFhLGtCQUFrQixTQUFTO0FBQ2hFLFVBQUksWUFBWTtBQUdoQixVQUFJLGFBQWE7QUFDakIsVUFBSSxjQUFjO0FBQ2xCLFVBQUksY0FBYztBQUNsQixVQUFJLGNBQWM7QUFDbEIsVUFBSSxjQUFjO0FBQ2xCLFVBQUksY0FBYztBQUNsQixVQUFJLGVBQWU7QUFDbkIsVUFBSSxlQUFlO0FBQ25CLFVBQUksb0JBQW9CO0FBQ3hCLFVBQUksb0JBQW9CO0FBQ3hCLFVBQUksb0JBQW9CO0FBQ3hCLFVBQUksb0JBQW9CO0FBR3hCLFVBQUksYUFBYSxHQUFHLE9BQU8sV0FBVyxPQUFPO0FBQzdDLFVBQUksaUJBQWlCLEdBQUcsT0FBTyxXQUFXLFdBQVc7QUFDckQsVUFBSSxlQUFlLEdBQUcsT0FBTyxXQUFXLFNBQVM7QUFDakQsVUFBSSxhQUFhLEdBQUcsT0FBTyxXQUFXLE9BQU87QUFDN0MsVUFBSSxrQkFBa0IsR0FBRyxPQUFPLFdBQVcsWUFBWTtBQUN2RCxVQUFJLGNBQWMsR0FBRyxPQUFPLFdBQVcsUUFBUTtBQUMvQyxVQUFJLGFBQWEsR0FBRyxPQUFPLFdBQVcsT0FBTztBQUc3QyxVQUFJLGNBQWMsR0FBRyxPQUFPLFdBQVcsUUFBUTtBQUMvQyxVQUFJLGVBQWUsR0FBRyxPQUFPLFdBQVcsU0FBUztBQUdqRCxVQUFJLGlCQUFpQjtBQUNyQixVQUFJLGlCQUFpQjtBQUNyQixVQUFJLGlCQUFpQjtBQUdyQixVQUFJLGFBQWE7QUFDakIsVUFBSSxpQkFBaUI7QUFDckIsVUFBSSxrQkFBa0I7QUFDdEIsVUFBSSxtQkFBbUI7QUFDdkIsVUFBSSxpQkFBaUI7QUFDckIsVUFBSSxvQkFBb0Isa0JBQWtCLGVBQWU7QUFDekQsVUFBSSxtQkFBbUIsa0JBQWtCLGNBQWM7QUFDdkQsVUFBSSxrQkFBa0Isa0JBQWtCLHlCQUF5QjtBQUNqRSxVQUFJLHFCQUFxQixvQkFBb0IsZ0JBQWdCO0FBQzdELFVBQUkscUJBQXFCLG9CQUFvQixnQkFBZ0I7QUFDN0QsVUFBSSxtQkFBbUIsb0JBQW9CLDRCQUE0QjtBQUN2RSxVQUFJLGNBQWM7QUFDbEIsVUFBSSxlQUFlO0FBQ25CLFVBQUksY0FBYztBQUNsQixVQUFJLGFBQWE7QUFHakIsVUFBSSxpQkFBaUI7QUFHckIsVUFBSSxpQkFBaUI7QUFDckIsVUFBSSxrQkFBa0I7QUFDdEIsVUFBSSx1QkFBdUI7QUFDM0IsVUFBSSxrQkFBa0I7QUFJdEIsVUFBSSxzQkFBc0I7QUFDMUIsVUFBSSx1QkFBdUI7QUFFM0IsVUFBSSxXQUFXO0FBQUE7QUFBQSxRQUViLFVBQVU7QUFBQTtBQUFBO0FBQUEsUUFJVixVQUFVO0FBQUE7QUFBQTtBQUFBLFFBSVYsb0JBQW9CO0FBQUE7QUFBQSxRQUVwQixhQUFhO0FBQUE7QUFBQSxRQUViLE1BQU07QUFBQTtBQUFBLFFBRU4sU0FBUztBQUFBO0FBQUEsUUFFVCxZQUFZO0FBQUE7QUFBQSxRQUVaLFNBQVM7QUFBQTtBQUFBLFFBRVQsa0JBQWtCO0FBQUE7QUFBQSxRQUVsQixrQkFBa0I7QUFBQTtBQUFBLFFBRWxCLE9BQU87QUFBQTtBQUFBLFFBRVAsUUFBUTtBQUFBO0FBQUEsUUFFUixRQUFRO0FBQUE7QUFBQSxRQUVSLFdBQVc7QUFBQTtBQUFBLFFBRVgsWUFBWTtBQUFBO0FBQUEsUUFFWixVQUFVO0FBQUE7QUFBQSxRQUVWLGNBQWM7QUFBQTtBQUFBLFFBRWQsU0FBUztBQUFBO0FBQUEsUUFFVCxXQUFXO0FBQUE7QUFBQSxRQUVYLFVBQVU7QUFBQTtBQUFBLFFBRVYsVUFBVTtBQUFBO0FBQUEsUUFFVixhQUFhO0FBQUE7QUFBQSxRQUViLGFBQWE7QUFBQTtBQUFBLFFBRWIsZ0JBQWdCO0FBQUE7QUFBQSxRQUVoQixnQkFBZ0I7QUFBQTtBQUFBLFFBRWhCLGtCQUFrQjtBQUFBO0FBQUEsUUFFbEIsMEJBQTBCO0FBQUE7QUFBQSxRQUUxQixnQkFBZ0I7QUFBQSxRQUNoQixpQkFBaUI7QUFBQSxRQUNqQixpQkFBaUI7QUFBQSxRQUNqQixrQkFBa0I7QUFBQSxRQUNsQixtQkFBbUI7QUFBQSxRQUNuQixvQkFBb0I7QUFBQTtBQUFBLFFBRXBCLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBRUEsVUFBSSxXQUFXO0FBS2YsVUFBSSxRQUFRLE9BQU8sU0FBUyxPQUFPO0FBT25DLGVBQVMsU0FBUyxPQUFPO0FBQ3ZCLGVBQU8sT0FBTyxVQUFVLFlBQVksQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNsRDtBQU9BLFVBQUksbUJBQW1CLFNBQVNDLGtCQUFpQixPQUFPO0FBQ3RELGVBQU8sUUFBUSxLQUFLLFFBQVE7QUFBQSxNQUM5QjtBQU9BLGVBQVMsWUFBWSxPQUFPO0FBQzFCLGVBQU8sT0FBTyxVQUFVO0FBQUEsTUFDMUI7QUFPQSxlQUFTLFNBQVMsT0FBTztBQUN2QixlQUFPLFFBQVEsS0FBSyxNQUFNLFlBQVksVUFBVTtBQUFBLE1BQ2xEO0FBQ0EsVUFBSSxpQkFBaUIsT0FBTyxVQUFVO0FBT3RDLGVBQVMsY0FBYyxPQUFPO0FBQzVCLFlBQUksQ0FBQyxTQUFTLEtBQUssR0FBRztBQUNwQixpQkFBTztBQUFBLFFBQ1Q7QUFDQSxZQUFJO0FBQ0YsY0FBSSxlQUFlLE1BQU07QUFDekIsY0FBSSxZQUFZLGFBQWE7QUFDN0IsaUJBQU8sZ0JBQWdCLGFBQWEsZUFBZSxLQUFLLFdBQVcsZUFBZTtBQUFBLFFBQ3BGLFNBQVMsT0FBTztBQUNkLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFPQSxlQUFTLFdBQVcsT0FBTztBQUN6QixlQUFPLE9BQU8sVUFBVTtBQUFBLE1BQzFCO0FBQ0EsVUFBSSxRQUFRLE1BQU0sVUFBVTtBQU81QixlQUFTLFFBQVEsT0FBTztBQUN0QixlQUFPLE1BQU0sT0FBTyxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sS0FBSyxLQUFLO0FBQUEsTUFDMUQ7QUFRQSxlQUFTLFFBQVEsTUFBTSxVQUFVO0FBQy9CLFlBQUksUUFBUSxXQUFXLFFBQVEsR0FBRztBQUNoQyxjQUFJLE1BQU0sUUFBUSxJQUFJLEtBQUssU0FBUyxLQUFLLE1BQU0sR0FBb0I7QUFDakUsb0JBQVEsSUFBSSxFQUFFLFFBQVEsU0FBVSxPQUFPLEtBQUs7QUFDMUMsdUJBQVMsS0FBSyxNQUFNLE9BQU8sS0FBSyxJQUFJO0FBQUEsWUFDdEMsQ0FBQztBQUFBLFVBQ0gsV0FBVyxTQUFTLElBQUksR0FBRztBQUN6QixtQkFBTyxLQUFLLElBQUksRUFBRSxRQUFRLFNBQVUsS0FBSztBQUN2Qyx1QkFBUyxLQUFLLE1BQU0sS0FBSyxHQUFHLEdBQUcsS0FBSyxJQUFJO0FBQUEsWUFDMUMsQ0FBQztBQUFBLFVBQ0g7QUFBQSxRQUNGO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFRQSxVQUFJQyxVQUFTLE9BQU8sVUFBVSxTQUFTQSxRQUFPLFFBQVE7QUFDcEQsaUJBQVMsT0FBTyxVQUFVLFFBQVEsT0FBTyxJQUFJLE1BQU0sT0FBTyxJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsT0FBTyxHQUFHLE9BQU8sTUFBTSxRQUFRO0FBQzFHLGVBQUssT0FBTyxDQUFDLElBQUksVUFBVSxJQUFJO0FBQUEsUUFDakM7QUFDQSxZQUFJLFNBQVMsTUFBTSxLQUFLLEtBQUssU0FBUyxHQUFHO0FBQ3ZDLGVBQUssUUFBUSxTQUFVLEtBQUs7QUFDMUIsZ0JBQUksU0FBUyxHQUFHLEdBQUc7QUFDakIscUJBQU8sS0FBSyxHQUFHLEVBQUUsUUFBUSxTQUFVLEtBQUs7QUFDdEMsdUJBQU8sR0FBRyxJQUFJLElBQUksR0FBRztBQUFBLGNBQ3ZCLENBQUM7QUFBQSxZQUNIO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQUNBLGVBQU87QUFBQSxNQUNUO0FBQ0EsVUFBSSxrQkFBa0I7QUFTdEIsZUFBUyx1QkFBdUIsT0FBTztBQUNyQyxZQUFJLFFBQVEsVUFBVSxTQUFTLEtBQUssVUFBVSxDQUFDLE1BQU0sU0FBWSxVQUFVLENBQUMsSUFBSTtBQUNoRixlQUFPLGdCQUFnQixLQUFLLEtBQUssSUFBSSxLQUFLLE1BQU0sUUFBUSxLQUFLLElBQUksUUFBUTtBQUFBLE1BQzNFO0FBQ0EsVUFBSSxnQkFBZ0I7QUFPcEIsZUFBUyxTQUFTLFNBQVMsUUFBUTtBQUNqQyxZQUFJLFFBQVEsUUFBUTtBQUNwQixnQkFBUSxRQUFRLFNBQVUsT0FBTyxVQUFVO0FBQ3pDLGNBQUksY0FBYyxLQUFLLFFBQVEsS0FBSyxTQUFTLEtBQUssR0FBRztBQUNuRCxvQkFBUSxHQUFHLE9BQU8sT0FBTyxJQUFJO0FBQUEsVUFDL0I7QUFDQSxnQkFBTSxRQUFRLElBQUk7QUFBQSxRQUNwQixDQUFDO0FBQUEsTUFDSDtBQVFBLGVBQVMsU0FBUyxTQUFTLE9BQU87QUFDaEMsZUFBTyxRQUFRLFlBQVksUUFBUSxVQUFVLFNBQVMsS0FBSyxJQUFJLFFBQVEsVUFBVSxRQUFRLEtBQUssSUFBSTtBQUFBLE1BQ3BHO0FBT0EsZUFBUyxTQUFTLFNBQVMsT0FBTztBQUNoQyxZQUFJLENBQUMsT0FBTztBQUNWO0FBQUEsUUFDRjtBQUNBLFlBQUksU0FBUyxRQUFRLE1BQU0sR0FBRztBQUM1QixrQkFBUSxTQUFTLFNBQVUsTUFBTTtBQUMvQixxQkFBUyxNQUFNLEtBQUs7QUFBQSxVQUN0QixDQUFDO0FBQ0Q7QUFBQSxRQUNGO0FBQ0EsWUFBSSxRQUFRLFdBQVc7QUFDckIsa0JBQVEsVUFBVSxJQUFJLEtBQUs7QUFDM0I7QUFBQSxRQUNGO0FBQ0EsWUFBSSxZQUFZLFFBQVEsVUFBVSxLQUFLO0FBQ3ZDLFlBQUksQ0FBQyxXQUFXO0FBQ2Qsa0JBQVEsWUFBWTtBQUFBLFFBQ3RCLFdBQVcsVUFBVSxRQUFRLEtBQUssSUFBSSxHQUFHO0FBQ3ZDLGtCQUFRLFlBQVksR0FBRyxPQUFPLFdBQVcsR0FBRyxFQUFFLE9BQU8sS0FBSztBQUFBLFFBQzVEO0FBQUEsTUFDRjtBQU9BLGVBQVMsWUFBWSxTQUFTLE9BQU87QUFDbkMsWUFBSSxDQUFDLE9BQU87QUFDVjtBQUFBLFFBQ0Y7QUFDQSxZQUFJLFNBQVMsUUFBUSxNQUFNLEdBQUc7QUFDNUIsa0JBQVEsU0FBUyxTQUFVLE1BQU07QUFDL0Isd0JBQVksTUFBTSxLQUFLO0FBQUEsVUFDekIsQ0FBQztBQUNEO0FBQUEsUUFDRjtBQUNBLFlBQUksUUFBUSxXQUFXO0FBQ3JCLGtCQUFRLFVBQVUsT0FBTyxLQUFLO0FBQzlCO0FBQUEsUUFDRjtBQUNBLFlBQUksUUFBUSxVQUFVLFFBQVEsS0FBSyxLQUFLLEdBQUc7QUFDekMsa0JBQVEsWUFBWSxRQUFRLFVBQVUsUUFBUSxPQUFPLEVBQUU7QUFBQSxRQUN6RDtBQUFBLE1BQ0Y7QUFRQSxlQUFTLFlBQVksU0FBUyxPQUFPLE9BQU87QUFDMUMsWUFBSSxDQUFDLE9BQU87QUFDVjtBQUFBLFFBQ0Y7QUFDQSxZQUFJLFNBQVMsUUFBUSxNQUFNLEdBQUc7QUFDNUIsa0JBQVEsU0FBUyxTQUFVLE1BQU07QUFDL0Isd0JBQVksTUFBTSxPQUFPLEtBQUs7QUFBQSxVQUNoQyxDQUFDO0FBQ0Q7QUFBQSxRQUNGO0FBR0EsWUFBSSxPQUFPO0FBQ1QsbUJBQVMsU0FBUyxLQUFLO0FBQUEsUUFDekIsT0FBTztBQUNMLHNCQUFZLFNBQVMsS0FBSztBQUFBLFFBQzVCO0FBQUEsTUFDRjtBQUNBLFVBQUksb0JBQW9CO0FBT3hCLGVBQVMsWUFBWSxPQUFPO0FBQzFCLGVBQU8sTUFBTSxRQUFRLG1CQUFtQixPQUFPLEVBQUUsWUFBWTtBQUFBLE1BQy9EO0FBUUEsZUFBUyxRQUFRLFNBQVMsTUFBTTtBQUM5QixZQUFJLFNBQVMsUUFBUSxJQUFJLENBQUMsR0FBRztBQUMzQixpQkFBTyxRQUFRLElBQUk7QUFBQSxRQUNyQjtBQUNBLFlBQUksUUFBUSxTQUFTO0FBQ25CLGlCQUFPLFFBQVEsUUFBUSxJQUFJO0FBQUEsUUFDN0I7QUFDQSxlQUFPLFFBQVEsYUFBYSxRQUFRLE9BQU8sWUFBWSxJQUFJLENBQUMsQ0FBQztBQUFBLE1BQy9EO0FBUUEsZUFBUyxRQUFRLFNBQVMsTUFBTSxNQUFNO0FBQ3BDLFlBQUksU0FBUyxJQUFJLEdBQUc7QUFDbEIsa0JBQVEsSUFBSSxJQUFJO0FBQUEsUUFDbEIsV0FBVyxRQUFRLFNBQVM7QUFDMUIsa0JBQVEsUUFBUSxJQUFJLElBQUk7QUFBQSxRQUMxQixPQUFPO0FBQ0wsa0JBQVEsYUFBYSxRQUFRLE9BQU8sWUFBWSxJQUFJLENBQUMsR0FBRyxJQUFJO0FBQUEsUUFDOUQ7QUFBQSxNQUNGO0FBT0EsZUFBUyxXQUFXLFNBQVMsTUFBTTtBQUNqQyxZQUFJLFNBQVMsUUFBUSxJQUFJLENBQUMsR0FBRztBQUMzQixjQUFJO0FBQ0YsbUJBQU8sUUFBUSxJQUFJO0FBQUEsVUFDckIsU0FBUyxPQUFPO0FBQ2Qsb0JBQVEsSUFBSSxJQUFJO0FBQUEsVUFDbEI7QUFBQSxRQUNGLFdBQVcsUUFBUSxTQUFTO0FBRTFCLGNBQUk7QUFDRixtQkFBTyxRQUFRLFFBQVEsSUFBSTtBQUFBLFVBQzdCLFNBQVMsT0FBTztBQUNkLG9CQUFRLFFBQVEsSUFBSSxJQUFJO0FBQUEsVUFDMUI7QUFBQSxRQUNGLE9BQU87QUFDTCxrQkFBUSxnQkFBZ0IsUUFBUSxPQUFPLFlBQVksSUFBSSxDQUFDLENBQUM7QUFBQSxRQUMzRDtBQUFBLE1BQ0Y7QUFDQSxVQUFJLGdCQUFnQjtBQUNwQixVQUFJLGlCQUFnQixXQUFZO0FBQzlCLFlBQUksWUFBWTtBQUNoQixZQUFJLFlBQVk7QUFDZCxjQUFJLE9BQU87QUFDWCxjQUFJLFdBQVcsU0FBU0MsWUFBVztBQUFBLFVBQUM7QUFDcEMsY0FBSSxVQUFVLE9BQU8sZUFBZSxDQUFDLEdBQUcsUUFBUTtBQUFBLFlBQzlDLEtBQUssU0FBU0MsT0FBTTtBQUNsQiwwQkFBWTtBQUNaLHFCQUFPO0FBQUEsWUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU1BLEtBQUssU0FBU0MsS0FBSSxPQUFPO0FBQ3ZCLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0YsQ0FBQztBQUNELGlCQUFPLGlCQUFpQixRQUFRLFVBQVUsT0FBTztBQUNqRCxpQkFBTyxvQkFBb0IsUUFBUSxVQUFVLE9BQU87QUFBQSxRQUN0RDtBQUNBLGVBQU87QUFBQSxNQUNULEdBQUU7QUFTRixlQUFTLGVBQWUsU0FBUyxNQUFNLFVBQVU7QUFDL0MsWUFBSSxVQUFVLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLFNBQVksVUFBVSxDQUFDLElBQUksQ0FBQztBQUNuRixZQUFJLFVBQVU7QUFDZCxhQUFLLEtBQUssRUFBRSxNQUFNLGFBQWEsRUFBRSxRQUFRLFNBQVUsT0FBTztBQUN4RCxjQUFJLENBQUMsZUFBZTtBQUNsQixnQkFBSSxZQUFZLFFBQVE7QUFDeEIsZ0JBQUksYUFBYSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssRUFBRSxRQUFRLEdBQUc7QUFDL0Qsd0JBQVUsVUFBVSxLQUFLLEVBQUUsUUFBUTtBQUNuQyxxQkFBTyxVQUFVLEtBQUssRUFBRSxRQUFRO0FBQ2hDLGtCQUFJLE9BQU8sS0FBSyxVQUFVLEtBQUssQ0FBQyxFQUFFLFdBQVcsR0FBRztBQUM5Qyx1QkFBTyxVQUFVLEtBQUs7QUFBQSxjQUN4QjtBQUNBLGtCQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUUsV0FBVyxHQUFHO0FBQ3ZDLHVCQUFPLFFBQVE7QUFBQSxjQUNqQjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQ0Esa0JBQVEsb0JBQW9CLE9BQU8sU0FBUyxPQUFPO0FBQUEsUUFDckQsQ0FBQztBQUFBLE1BQ0g7QUFTQSxlQUFTLFlBQVksU0FBUyxNQUFNLFVBQVU7QUFDNUMsWUFBSSxVQUFVLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLFNBQVksVUFBVSxDQUFDLElBQUksQ0FBQztBQUNuRixZQUFJLFdBQVc7QUFDZixhQUFLLEtBQUssRUFBRSxNQUFNLGFBQWEsRUFBRSxRQUFRLFNBQVUsT0FBTztBQUN4RCxjQUFJLFFBQVEsUUFBUSxDQUFDLGVBQWU7QUFDbEMsZ0JBQUkscUJBQXFCLFFBQVEsV0FDL0IsWUFBWSx1QkFBdUIsU0FBUyxDQUFDLElBQUk7QUFDbkQsdUJBQVcsU0FBUyxVQUFVO0FBQzVCLHFCQUFPLFVBQVUsS0FBSyxFQUFFLFFBQVE7QUFDaEMsc0JBQVEsb0JBQW9CLE9BQU8sVUFBVSxPQUFPO0FBQ3BELHVCQUFTLFFBQVEsVUFBVSxRQUFRLE9BQU8sSUFBSSxNQUFNLEtBQUssR0FBRyxRQUFRLEdBQUcsUUFBUSxPQUFPLFNBQVM7QUFDN0YscUJBQUssS0FBSyxJQUFJLFVBQVUsS0FBSztBQUFBLGNBQy9CO0FBQ0EsdUJBQVMsTUFBTSxTQUFTLElBQUk7QUFBQSxZQUM5QjtBQUNBLGdCQUFJLENBQUMsVUFBVSxLQUFLLEdBQUc7QUFDckIsd0JBQVUsS0FBSyxJQUFJLENBQUM7QUFBQSxZQUN0QjtBQUNBLGdCQUFJLFVBQVUsS0FBSyxFQUFFLFFBQVEsR0FBRztBQUM5QixzQkFBUSxvQkFBb0IsT0FBTyxVQUFVLEtBQUssRUFBRSxRQUFRLEdBQUcsT0FBTztBQUFBLFlBQ3hFO0FBQ0Esc0JBQVUsS0FBSyxFQUFFLFFBQVEsSUFBSTtBQUM3QixvQkFBUSxZQUFZO0FBQUEsVUFDdEI7QUFDQSxrQkFBUSxpQkFBaUIsT0FBTyxVQUFVLE9BQU87QUFBQSxRQUNuRCxDQUFDO0FBQUEsTUFDSDtBQVNBLGVBQVMsY0FBYyxTQUFTLE1BQU0sTUFBTTtBQUMxQyxZQUFJO0FBR0osWUFBSSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsR0FBRztBQUNoRCxrQkFBUSxJQUFJLFlBQVksTUFBTTtBQUFBLFlBQzVCLFFBQVE7QUFBQSxZQUNSLFNBQVM7QUFBQSxZQUNULFlBQVk7QUFBQSxVQUNkLENBQUM7QUFBQSxRQUNILE9BQU87QUFDTCxrQkFBUSxTQUFTLFlBQVksYUFBYTtBQUMxQyxnQkFBTSxnQkFBZ0IsTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUFBLFFBQzlDO0FBQ0EsZUFBTyxRQUFRLGNBQWMsS0FBSztBQUFBLE1BQ3BDO0FBT0EsZUFBUyxVQUFVLFNBQVM7QUFDMUIsWUFBSSxNQUFNLFFBQVEsc0JBQXNCO0FBQ3hDLGVBQU87QUFBQSxVQUNMLE1BQU0sSUFBSSxRQUFRLE9BQU8sY0FBYyxTQUFTLGdCQUFnQjtBQUFBLFVBQ2hFLEtBQUssSUFBSSxPQUFPLE9BQU8sY0FBYyxTQUFTLGdCQUFnQjtBQUFBLFFBQ2hFO0FBQUEsTUFDRjtBQUNBLFVBQUlDLFlBQVcsT0FBTztBQUN0QixVQUFJLGlCQUFpQjtBQU9yQixlQUFTLGlCQUFpQixLQUFLO0FBQzdCLFlBQUksUUFBUSxJQUFJLE1BQU0sY0FBYztBQUNwQyxlQUFPLFVBQVUsU0FBUyxNQUFNLENBQUMsTUFBTUEsVUFBUyxZQUFZLE1BQU0sQ0FBQyxNQUFNQSxVQUFTLFlBQVksTUFBTSxDQUFDLE1BQU1BLFVBQVM7QUFBQSxNQUN0SDtBQU9BLGVBQVMsYUFBYSxLQUFLO0FBQ3pCLFlBQUksWUFBWSxhQUFhLFFBQU8sb0JBQUksS0FBSyxHQUFFLFFBQVEsQ0FBQztBQUN4RCxlQUFPLE9BQU8sSUFBSSxRQUFRLEdBQUcsTUFBTSxLQUFLLE1BQU0sT0FBTztBQUFBLE1BQ3ZEO0FBT0EsZUFBUyxjQUFjLE1BQU07QUFDM0IsWUFBSSxTQUFTLEtBQUssUUFDaEIsU0FBUyxLQUFLLFFBQ2QsU0FBUyxLQUFLLFFBQ2QsYUFBYSxLQUFLLFlBQ2xCLGFBQWEsS0FBSztBQUNwQixZQUFJLFNBQVMsQ0FBQztBQUNkLFlBQUksU0FBUyxVQUFVLEtBQUssZUFBZSxHQUFHO0FBQzVDLGlCQUFPLEtBQUssY0FBYyxPQUFPLFlBQVksS0FBSyxDQUFDO0FBQUEsUUFDckQ7QUFDQSxZQUFJLFNBQVMsVUFBVSxLQUFLLGVBQWUsR0FBRztBQUM1QyxpQkFBTyxLQUFLLGNBQWMsT0FBTyxZQUFZLEtBQUssQ0FBQztBQUFBLFFBQ3JEO0FBR0EsWUFBSSxTQUFTLE1BQU0sS0FBSyxXQUFXLEdBQUc7QUFDcEMsaUJBQU8sS0FBSyxVQUFVLE9BQU8sUUFBUSxNQUFNLENBQUM7QUFBQSxRQUM5QztBQUNBLFlBQUksU0FBUyxNQUFNLEtBQUssV0FBVyxHQUFHO0FBQ3BDLGlCQUFPLEtBQUssVUFBVSxPQUFPLFFBQVEsR0FBRyxDQUFDO0FBQUEsUUFDM0M7QUFDQSxZQUFJLFNBQVMsTUFBTSxLQUFLLFdBQVcsR0FBRztBQUNwQyxpQkFBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLEdBQUcsQ0FBQztBQUFBLFFBQzNDO0FBQ0EsWUFBSSxZQUFZLE9BQU8sU0FBUyxPQUFPLEtBQUssR0FBRyxJQUFJO0FBQ25ELGVBQU87QUFBQSxVQUNMLGlCQUFpQjtBQUFBLFVBQ2pCLGFBQWE7QUFBQSxVQUNiO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFPQSxlQUFTLGdCQUFnQixVQUFVO0FBQ2pDLFlBQUksWUFBWSxlQUFlLENBQUMsR0FBRyxRQUFRO0FBQzNDLFlBQUksV0FBVztBQUNmLGdCQUFRLFVBQVUsU0FBVSxTQUFTLFdBQVc7QUFDOUMsaUJBQU8sVUFBVSxTQUFTO0FBQzFCLGtCQUFRLFdBQVcsU0FBVSxVQUFVO0FBQ3JDLGdCQUFJLEtBQUssS0FBSyxJQUFJLFFBQVEsU0FBUyxTQUFTLE1BQU07QUFDbEQsZ0JBQUksS0FBSyxLQUFLLElBQUksUUFBUSxTQUFTLFNBQVMsTUFBTTtBQUNsRCxnQkFBSSxLQUFLLEtBQUssSUFBSSxRQUFRLE9BQU8sU0FBUyxJQUFJO0FBQzlDLGdCQUFJLEtBQUssS0FBSyxJQUFJLFFBQVEsT0FBTyxTQUFTLElBQUk7QUFDOUMsZ0JBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssRUFBRTtBQUNwQyxnQkFBSSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxFQUFFO0FBQ3BDLGdCQUFJLFNBQVMsS0FBSyxNQUFNO0FBQ3hCLGdCQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLFFBQVEsR0FBRztBQUN4Qyx5QkFBVztBQUFBLFlBQ2I7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNILENBQUM7QUFDRCxlQUFPO0FBQUEsTUFDVDtBQVFBLGVBQVMsV0FBVyxPQUFPLFNBQVM7QUFDbEMsWUFBSSxRQUFRLE1BQU0sT0FDaEIsUUFBUSxNQUFNO0FBQ2hCLFlBQUksTUFBTTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFDQSxlQUFPLFVBQVUsTUFBTSxlQUFlO0FBQUEsVUFDcEMsUUFBUTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFFBQ1YsR0FBRyxHQUFHO0FBQUEsTUFDUjtBQU9BLGVBQVMsa0JBQWtCLFVBQVU7QUFDbkMsWUFBSSxRQUFRO0FBQ1osWUFBSSxRQUFRO0FBQ1osWUFBSSxRQUFRO0FBQ1osZ0JBQVEsVUFBVSxTQUFVLE9BQU87QUFDakMsY0FBSSxTQUFTLE1BQU0sUUFDakIsU0FBUyxNQUFNO0FBQ2pCLG1CQUFTO0FBQ1QsbUJBQVM7QUFDVCxtQkFBUztBQUFBLFFBQ1gsQ0FBQztBQUNELGlCQUFTO0FBQ1QsaUJBQVM7QUFDVCxlQUFPO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQVFBLGVBQVMsaUJBQWlCLE9BQU87QUFDL0IsWUFBSSxjQUFjLE1BQU0sYUFDdEIsU0FBUyxNQUFNLFFBQ2YsUUFBUSxNQUFNO0FBQ2hCLFlBQUksT0FBTyxVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsTUFBTSxTQUFZLFVBQVUsQ0FBQyxJQUFJO0FBQy9FLFlBQUksZUFBZSxpQkFBaUIsS0FBSztBQUN6QyxZQUFJLGdCQUFnQixpQkFBaUIsTUFBTTtBQUMzQyxZQUFJLGdCQUFnQixlQUFlO0FBQ2pDLGNBQUksZ0JBQWdCLFNBQVM7QUFDN0IsY0FBSSxTQUFTLGFBQWEsZ0JBQWdCLFNBQVMsU0FBUyxXQUFXLGdCQUFnQixPQUFPO0FBQzVGLHFCQUFTLFFBQVE7QUFBQSxVQUNuQixPQUFPO0FBQ0wsb0JBQVEsU0FBUztBQUFBLFVBQ25CO0FBQUEsUUFDRixXQUFXLGNBQWM7QUFDdkIsbUJBQVMsUUFBUTtBQUFBLFFBQ25CLFdBQVcsZUFBZTtBQUN4QixrQkFBUSxTQUFTO0FBQUEsUUFDbkI7QUFDQSxlQUFPO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQU9BLGVBQVMsZ0JBQWdCLE9BQU87QUFDOUIsWUFBSSxRQUFRLE1BQU0sT0FDaEIsU0FBUyxNQUFNLFFBQ2YsU0FBUyxNQUFNO0FBQ2pCLGlCQUFTLEtBQUssSUFBSSxNQUFNLElBQUk7QUFDNUIsWUFBSSxXQUFXLElBQUk7QUFDakIsaUJBQU87QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUNBLFlBQUksTUFBTSxTQUFTLEtBQUssS0FBSyxLQUFLO0FBQ2xDLFlBQUksU0FBUyxLQUFLLElBQUksR0FBRztBQUN6QixZQUFJLFNBQVMsS0FBSyxJQUFJLEdBQUc7QUFDekIsWUFBSSxXQUFXLFFBQVEsU0FBUyxTQUFTO0FBQ3pDLFlBQUksWUFBWSxRQUFRLFNBQVMsU0FBUztBQUMxQyxlQUFPLFNBQVMsS0FBSztBQUFBLFVBQ25CLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWLElBQUk7QUFBQSxVQUNGLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQVVBLGVBQVMsZ0JBQWdCLE9BQU8sT0FBTyxPQUFPLE9BQU87QUFDbkQsWUFBSSxtQkFBbUIsTUFBTSxhQUMzQixvQkFBb0IsTUFBTSxjQUMxQixxQkFBcUIsTUFBTSxlQUMzQixlQUFlLE1BQU0sUUFDckIsU0FBUyxpQkFBaUIsU0FBUyxJQUFJLGNBQ3ZDLGVBQWUsTUFBTSxRQUNyQixTQUFTLGlCQUFpQixTQUFTLElBQUksY0FDdkMsZUFBZSxNQUFNLFFBQ3JCLFNBQVMsaUJBQWlCLFNBQVMsSUFBSTtBQUN6QyxZQUFJLGNBQWMsTUFBTSxhQUN0QixlQUFlLE1BQU0sY0FDckIsZ0JBQWdCLE1BQU07QUFDeEIsWUFBSSxrQkFBa0IsTUFBTSxXQUMxQixZQUFZLG9CQUFvQixTQUFTLGdCQUFnQixpQkFDekQsd0JBQXdCLE1BQU0sdUJBQzlCLHdCQUF3QiwwQkFBMEIsU0FBUyxPQUFPLHVCQUNsRSx3QkFBd0IsTUFBTSx1QkFDOUIsd0JBQXdCLDBCQUEwQixTQUFTLFFBQVEsdUJBQ25FLGlCQUFpQixNQUFNLFVBQ3ZCLFdBQVcsbUJBQW1CLFNBQVMsV0FBVyxnQkFDbEQsa0JBQWtCLE1BQU0sV0FDeEIsWUFBWSxvQkFBb0IsU0FBUyxXQUFXLGlCQUNwRCxpQkFBaUIsTUFBTSxVQUN2QixXQUFXLG1CQUFtQixTQUFTLElBQUksZ0JBQzNDLGtCQUFrQixNQUFNLFdBQ3hCLFlBQVksb0JBQW9CLFNBQVMsSUFBSTtBQUMvQyxZQUFJLFNBQVMsU0FBUyxjQUFjLFFBQVE7QUFDNUMsWUFBSSxVQUFVLE9BQU8sV0FBVyxJQUFJO0FBQ3BDLFlBQUksV0FBVyxpQkFBaUI7QUFBQSxVQUM5QjtBQUFBLFVBQ0EsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1YsQ0FBQztBQUNELFlBQUksV0FBVyxpQkFBaUI7QUFBQSxVQUM5QjtBQUFBLFVBQ0EsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1YsR0FBRyxPQUFPO0FBQ1YsWUFBSSxRQUFRLEtBQUssSUFBSSxTQUFTLE9BQU8sS0FBSyxJQUFJLFNBQVMsT0FBTyxZQUFZLENBQUM7QUFDM0UsWUFBSSxTQUFTLEtBQUssSUFBSSxTQUFTLFFBQVEsS0FBSyxJQUFJLFNBQVMsUUFBUSxhQUFhLENBQUM7QUFJL0UsWUFBSSxlQUFlLGlCQUFpQjtBQUFBLFVBQ2xDLGFBQWE7QUFBQSxVQUNiLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWLENBQUM7QUFDRCxZQUFJLGVBQWUsaUJBQWlCO0FBQUEsVUFDbEMsYUFBYTtBQUFBLFVBQ2IsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1YsR0FBRyxPQUFPO0FBQ1YsWUFBSSxZQUFZLEtBQUssSUFBSSxhQUFhLE9BQU8sS0FBSyxJQUFJLGFBQWEsT0FBTyxpQkFBaUIsQ0FBQztBQUM1RixZQUFJLGFBQWEsS0FBSyxJQUFJLGFBQWEsUUFBUSxLQUFLLElBQUksYUFBYSxRQUFRLGtCQUFrQixDQUFDO0FBQ2hHLFlBQUksU0FBUyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsYUFBYSxHQUFHLFdBQVcsVUFBVTtBQUNwRSxlQUFPLFFBQVEsdUJBQXVCLEtBQUs7QUFDM0MsZUFBTyxTQUFTLHVCQUF1QixNQUFNO0FBQzdDLGdCQUFRLFlBQVk7QUFDcEIsZ0JBQVEsU0FBUyxHQUFHLEdBQUcsT0FBTyxNQUFNO0FBQ3BDLGdCQUFRLEtBQUs7QUFDYixnQkFBUSxVQUFVLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDdkMsZ0JBQVEsT0FBTyxTQUFTLEtBQUssS0FBSyxHQUFHO0FBQ3JDLGdCQUFRLE1BQU0sUUFBUSxNQUFNO0FBQzVCLGdCQUFRLHdCQUF3QjtBQUNoQyxnQkFBUSx3QkFBd0I7QUFDaEMsZ0JBQVEsVUFBVSxNQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxtQkFBbUIsT0FBTyxJQUFJLFNBQVUsT0FBTztBQUM3RixpQkFBTyxLQUFLLE1BQU0sdUJBQXVCLEtBQUssQ0FBQztBQUFBLFFBQ2pELENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDSixnQkFBUSxRQUFRO0FBQ2hCLGVBQU87QUFBQSxNQUNUO0FBQ0EsVUFBSSxlQUFlLE9BQU87QUFTMUIsZUFBUyxzQkFBc0IsVUFBVSxPQUFPLFFBQVE7QUFDdEQsWUFBSSxNQUFNO0FBQ1Ysa0JBQVU7QUFDVixpQkFBUyxJQUFJLE9BQU8sSUFBSSxRQUFRLEtBQUssR0FBRztBQUN0QyxpQkFBTyxhQUFhLFNBQVMsU0FBUyxDQUFDLENBQUM7QUFBQSxRQUMxQztBQUNBLGVBQU87QUFBQSxNQUNUO0FBQ0EsVUFBSSx1QkFBdUI7QUFPM0IsZUFBUyxxQkFBcUIsU0FBUztBQUNyQyxZQUFJLFNBQVMsUUFBUSxRQUFRLHNCQUFzQixFQUFFO0FBQ3JELFlBQUksU0FBUyxLQUFLLE1BQU07QUFDeEIsWUFBSSxjQUFjLElBQUksWUFBWSxPQUFPLE1BQU07QUFDL0MsWUFBSSxRQUFRLElBQUksV0FBVyxXQUFXO0FBQ3RDLGdCQUFRLE9BQU8sU0FBVSxPQUFPLEdBQUc7QUFDakMsZ0JBQU0sQ0FBQyxJQUFJLE9BQU8sV0FBVyxDQUFDO0FBQUEsUUFDaEMsQ0FBQztBQUNELGVBQU87QUFBQSxNQUNUO0FBUUEsZUFBUyxxQkFBcUIsYUFBYSxVQUFVO0FBQ25ELFlBQUksU0FBUyxDQUFDO0FBR2QsWUFBSSxZQUFZO0FBQ2hCLFlBQUksUUFBUSxJQUFJLFdBQVcsV0FBVztBQUN0QyxlQUFPLE1BQU0sU0FBUyxHQUFHO0FBR3ZCLGlCQUFPLEtBQUssYUFBYSxNQUFNLE1BQU0sUUFBUSxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzNFLGtCQUFRLE1BQU0sU0FBUyxTQUFTO0FBQUEsUUFDbEM7QUFDQSxlQUFPLFFBQVEsT0FBTyxVQUFVLFVBQVUsRUFBRSxPQUFPLEtBQUssT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUEsTUFDMUU7QUFPQSxlQUFTLHVCQUF1QixhQUFhO0FBQzNDLFlBQUksV0FBVyxJQUFJLFNBQVMsV0FBVztBQUN2QyxZQUFJO0FBR0osWUFBSTtBQUNGLGNBQUk7QUFDSixjQUFJO0FBQ0osY0FBSTtBQUdKLGNBQUksU0FBUyxTQUFTLENBQUMsTUFBTSxPQUFRLFNBQVMsU0FBUyxDQUFDLE1BQU0sS0FBTTtBQUNsRSxnQkFBSSxTQUFTLFNBQVM7QUFDdEIsZ0JBQUksU0FBUztBQUNiLG1CQUFPLFNBQVMsSUFBSSxRQUFRO0FBQzFCLGtCQUFJLFNBQVMsU0FBUyxNQUFNLE1BQU0sT0FBUSxTQUFTLFNBQVMsU0FBUyxDQUFDLE1BQU0sS0FBTTtBQUNoRiw0QkFBWTtBQUNaO0FBQUEsY0FDRjtBQUNBLHdCQUFVO0FBQUEsWUFDWjtBQUFBLFVBQ0Y7QUFDQSxjQUFJLFdBQVc7QUFDYixnQkFBSSxhQUFhLFlBQVk7QUFDN0IsZ0JBQUksYUFBYSxZQUFZO0FBQzdCLGdCQUFJLHNCQUFzQixVQUFVLFlBQVksQ0FBQyxNQUFNLFFBQVE7QUFDN0Qsa0JBQUksYUFBYSxTQUFTLFVBQVUsVUFBVTtBQUM5Qyw2QkFBZSxlQUFlO0FBQzlCLGtCQUFJLGdCQUFnQixlQUFlLE9BQXdCO0FBQ3pELG9CQUFJLFNBQVMsVUFBVSxhQUFhLEdBQUcsWUFBWSxNQUFNLElBQVE7QUFDL0Qsc0JBQUksaUJBQWlCLFNBQVMsVUFBVSxhQUFhLEdBQUcsWUFBWTtBQUNwRSxzQkFBSSxrQkFBa0IsR0FBWTtBQUNoQywrQkFBVyxhQUFhO0FBQUEsa0JBQzFCO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFDQSxjQUFJLFVBQVU7QUFDWixnQkFBSSxVQUFVLFNBQVMsVUFBVSxVQUFVLFlBQVk7QUFDdkQsZ0JBQUk7QUFDSixnQkFBSTtBQUNKLGlCQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsS0FBSyxHQUFHO0FBQy9CLHdCQUFVLFdBQVcsSUFBSSxLQUFLO0FBQzlCLGtCQUFJLFNBQVMsVUFBVSxTQUFTLFlBQVksTUFBTSxLQUEwQjtBQUUxRSwyQkFBVztBQUdYLDhCQUFjLFNBQVMsVUFBVSxTQUFTLFlBQVk7QUFHdEQseUJBQVMsVUFBVSxTQUFTLEdBQUcsWUFBWTtBQUMzQztBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0YsU0FBUyxPQUFPO0FBQ2Qsd0JBQWM7QUFBQSxRQUNoQjtBQUNBLGVBQU87QUFBQSxNQUNUO0FBT0EsZUFBUyxpQkFBaUIsYUFBYTtBQUNyQyxZQUFJLFNBQVM7QUFDYixZQUFJLFNBQVM7QUFDYixZQUFJLFNBQVM7QUFDYixnQkFBUSxhQUFhO0FBQUE7QUFBQSxVQUVuQixLQUFLO0FBQ0gscUJBQVM7QUFDVDtBQUFBO0FBQUEsVUFHRixLQUFLO0FBQ0gscUJBQVM7QUFDVDtBQUFBO0FBQUEsVUFHRixLQUFLO0FBQ0gscUJBQVM7QUFDVDtBQUFBO0FBQUEsVUFHRixLQUFLO0FBQ0gscUJBQVM7QUFDVCxxQkFBUztBQUNUO0FBQUE7QUFBQSxVQUdGLEtBQUs7QUFDSCxxQkFBUztBQUNUO0FBQUE7QUFBQSxVQUdGLEtBQUs7QUFDSCxxQkFBUztBQUNULHFCQUFTO0FBQ1Q7QUFBQTtBQUFBLFVBR0YsS0FBSztBQUNILHFCQUFTO0FBQ1Q7QUFBQSxRQUNKO0FBQ0EsZUFBTztBQUFBLFVBQ0w7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUEsVUFBSUMsVUFBUztBQUFBLFFBQ1gsUUFBUSxTQUFTQSxVQUFTO0FBQ3hCLGVBQUssY0FBYztBQUNuQixlQUFLLFdBQVc7QUFDaEIsZUFBSyxZQUFZO0FBQ2pCLGVBQUssYUFBYTtBQUNsQixjQUFJLEtBQUssU0FBUztBQUNoQixpQkFBSyxjQUFjO0FBQUEsVUFDckI7QUFBQSxRQUNGO0FBQUEsUUFDQSxlQUFlLFNBQVMsZ0JBQWdCO0FBQ3RDLGNBQUksVUFBVSxLQUFLLFNBQ2pCLFVBQVUsS0FBSyxTQUNmLFlBQVksS0FBSyxXQUNqQixVQUFVLEtBQUs7QUFDakIsY0FBSSxXQUFXLE9BQU8sUUFBUSxpQkFBaUI7QUFDL0MsY0FBSSxZQUFZLE9BQU8sUUFBUSxrQkFBa0I7QUFDakQsbUJBQVMsU0FBUyxZQUFZO0FBQzlCLHNCQUFZLFNBQVMsWUFBWTtBQUNqQyxjQUFJLGdCQUFnQjtBQUFBLFlBQ2xCLE9BQU8sS0FBSyxJQUFJLFVBQVUsYUFBYSxZQUFZLElBQUksV0FBVyxtQkFBbUI7QUFBQSxZQUNyRixRQUFRLEtBQUssSUFBSSxVQUFVLGNBQWMsYUFBYSxJQUFJLFlBQVksb0JBQW9CO0FBQUEsVUFDNUY7QUFDQSxlQUFLLGdCQUFnQjtBQUNyQixtQkFBUyxTQUFTO0FBQUEsWUFDaEIsT0FBTyxjQUFjO0FBQUEsWUFDckIsUUFBUSxjQUFjO0FBQUEsVUFDeEIsQ0FBQztBQUNELG1CQUFTLFNBQVMsWUFBWTtBQUM5QixzQkFBWSxTQUFTLFlBQVk7QUFBQSxRQUNuQztBQUFBO0FBQUEsUUFFQSxZQUFZLFNBQVMsYUFBYTtBQUNoQyxjQUFJLGdCQUFnQixLQUFLLGVBQ3ZCLFlBQVksS0FBSztBQUNuQixjQUFJLFdBQVcsS0FBSyxRQUFRO0FBQzVCLGNBQUksVUFBVSxLQUFLLElBQUksVUFBVSxNQUFNLElBQUksUUFBUTtBQUNuRCxjQUFJLGVBQWUsVUFBVSxVQUFVLGdCQUFnQixVQUFVO0FBQ2pFLGNBQUksZ0JBQWdCLFVBQVUsVUFBVSxlQUFlLFVBQVU7QUFDakUsY0FBSSxjQUFjLGVBQWU7QUFDakMsY0FBSSxjQUFjLGNBQWM7QUFDaEMsY0FBSSxlQUFlLGNBQWM7QUFDakMsY0FBSSxjQUFjLFNBQVMsY0FBYyxjQUFjLE9BQU87QUFDNUQsZ0JBQUksYUFBYSxHQUFHO0FBQ2xCLDRCQUFjLGNBQWMsU0FBUztBQUFBLFlBQ3ZDLE9BQU87QUFDTCw2QkFBZSxjQUFjLFFBQVE7QUFBQSxZQUN2QztBQUFBLFVBQ0YsV0FBVyxhQUFhLEdBQUc7QUFDekIsMkJBQWUsY0FBYyxRQUFRO0FBQUEsVUFDdkMsT0FBTztBQUNMLDBCQUFjLGNBQWMsU0FBUztBQUFBLFVBQ3ZDO0FBQ0EsY0FBSSxhQUFhO0FBQUEsWUFDZjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQSxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUNBLGVBQUssYUFBYTtBQUNsQixlQUFLLFVBQVUsYUFBYSxLQUFLLGFBQWE7QUFDOUMsZUFBSyxZQUFZLE1BQU0sSUFBSTtBQUMzQixxQkFBVyxRQUFRLEtBQUssSUFBSSxLQUFLLElBQUksV0FBVyxPQUFPLFdBQVcsUUFBUSxHQUFHLFdBQVcsUUFBUTtBQUNoRyxxQkFBVyxTQUFTLEtBQUssSUFBSSxLQUFLLElBQUksV0FBVyxRQUFRLFdBQVcsU0FBUyxHQUFHLFdBQVcsU0FBUztBQUNwRyxxQkFBVyxRQUFRLGNBQWMsUUFBUSxXQUFXLFNBQVM7QUFDN0QscUJBQVcsT0FBTyxjQUFjLFNBQVMsV0FBVyxVQUFVO0FBQzlELHFCQUFXLFVBQVUsV0FBVztBQUNoQyxxQkFBVyxTQUFTLFdBQVc7QUFDL0IsZUFBSyxvQkFBb0JMLFFBQU8sQ0FBQyxHQUFHLFVBQVU7QUFBQSxRQUNoRDtBQUFBLFFBQ0EsYUFBYSxTQUFTLFlBQVksYUFBYSxpQkFBaUI7QUFDOUQsY0FBSSxVQUFVLEtBQUssU0FDakIsZ0JBQWdCLEtBQUssZUFDckIsYUFBYSxLQUFLLFlBQ2xCLGNBQWMsS0FBSztBQUNyQixjQUFJLFdBQVcsUUFBUTtBQUN2QixjQUFJLGNBQWMsV0FBVztBQUM3QixjQUFJLFVBQVUsS0FBSyxXQUFXO0FBQzlCLGNBQUksYUFBYTtBQUNmLGdCQUFJLGlCQUFpQixPQUFPLFFBQVEsY0FBYyxLQUFLO0FBQ3ZELGdCQUFJLGtCQUFrQixPQUFPLFFBQVEsZUFBZSxLQUFLO0FBQ3pELGdCQUFJLFdBQVcsR0FBRztBQUNoQiwrQkFBaUIsS0FBSyxJQUFJLGdCQUFnQixjQUFjLEtBQUs7QUFDN0QsZ0NBQWtCLEtBQUssSUFBSSxpQkFBaUIsY0FBYyxNQUFNO0FBQ2hFLGtCQUFJLGFBQWEsR0FBRztBQUNsQixvQkFBSSxrQkFBa0IsY0FBYyxnQkFBZ0I7QUFDbEQsbUNBQWlCLGtCQUFrQjtBQUFBLGdCQUNyQyxPQUFPO0FBQ0wsb0NBQWtCLGlCQUFpQjtBQUFBLGdCQUNyQztBQUFBLGNBQ0Y7QUFBQSxZQUNGLFdBQVcsV0FBVyxHQUFHO0FBQ3ZCLGtCQUFJLGdCQUFnQjtBQUNsQixpQ0FBaUIsS0FBSyxJQUFJLGdCQUFnQixVQUFVLFlBQVksUUFBUSxDQUFDO0FBQUEsY0FDM0UsV0FBVyxpQkFBaUI7QUFDMUIsa0NBQWtCLEtBQUssSUFBSSxpQkFBaUIsVUFBVSxZQUFZLFNBQVMsQ0FBQztBQUFBLGNBQzlFLFdBQVcsU0FBUztBQUNsQixpQ0FBaUIsWUFBWTtBQUM3QixrQ0FBa0IsWUFBWTtBQUM5QixvQkFBSSxrQkFBa0IsY0FBYyxnQkFBZ0I7QUFDbEQsbUNBQWlCLGtCQUFrQjtBQUFBLGdCQUNyQyxPQUFPO0FBQ0wsb0NBQWtCLGlCQUFpQjtBQUFBLGdCQUNyQztBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQ0EsZ0JBQUksb0JBQW9CLGlCQUFpQjtBQUFBLGNBQ3ZDO0FBQUEsY0FDQSxPQUFPO0FBQUEsY0FDUCxRQUFRO0FBQUEsWUFDVixDQUFDO0FBQ0QsNkJBQWlCLGtCQUFrQjtBQUNuQyw4QkFBa0Isa0JBQWtCO0FBQ3BDLHVCQUFXLFdBQVc7QUFDdEIsdUJBQVcsWUFBWTtBQUN2Qix1QkFBVyxXQUFXO0FBQ3RCLHVCQUFXLFlBQVk7QUFBQSxVQUN6QjtBQUNBLGNBQUksaUJBQWlCO0FBQ25CLGdCQUFJLFlBQVksVUFBVSxJQUFJLElBQUk7QUFDaEMsa0JBQUksZ0JBQWdCLGNBQWMsUUFBUSxXQUFXO0FBQ3JELGtCQUFJLGVBQWUsY0FBYyxTQUFTLFdBQVc7QUFDckQseUJBQVcsVUFBVSxLQUFLLElBQUksR0FBRyxhQUFhO0FBQzlDLHlCQUFXLFNBQVMsS0FBSyxJQUFJLEdBQUcsWUFBWTtBQUM1Qyx5QkFBVyxVQUFVLEtBQUssSUFBSSxHQUFHLGFBQWE7QUFDOUMseUJBQVcsU0FBUyxLQUFLLElBQUksR0FBRyxZQUFZO0FBQzVDLGtCQUFJLFdBQVcsS0FBSyxTQUFTO0FBQzNCLDJCQUFXLFVBQVUsS0FBSyxJQUFJLFlBQVksTUFBTSxZQUFZLFFBQVEsWUFBWSxRQUFRLFdBQVcsTUFBTTtBQUN6RywyQkFBVyxTQUFTLEtBQUssSUFBSSxZQUFZLEtBQUssWUFBWSxPQUFPLFlBQVksU0FBUyxXQUFXLE9BQU87QUFDeEcsMkJBQVcsVUFBVSxZQUFZO0FBQ2pDLDJCQUFXLFNBQVMsWUFBWTtBQUNoQyxvQkFBSSxhQUFhLEdBQUc7QUFDbEIsc0JBQUksV0FBVyxTQUFTLGNBQWMsT0FBTztBQUMzQywrQkFBVyxVQUFVLEtBQUssSUFBSSxHQUFHLGFBQWE7QUFDOUMsK0JBQVcsVUFBVSxLQUFLLElBQUksR0FBRyxhQUFhO0FBQUEsa0JBQ2hEO0FBQ0Esc0JBQUksV0FBVyxVQUFVLGNBQWMsUUFBUTtBQUM3QywrQkFBVyxTQUFTLEtBQUssSUFBSSxHQUFHLFlBQVk7QUFDNUMsK0JBQVcsU0FBUyxLQUFLLElBQUksR0FBRyxZQUFZO0FBQUEsa0JBQzlDO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRixPQUFPO0FBQ0wseUJBQVcsVUFBVSxDQUFDLFdBQVc7QUFDakMseUJBQVcsU0FBUyxDQUFDLFdBQVc7QUFDaEMseUJBQVcsVUFBVSxjQUFjO0FBQ25DLHlCQUFXLFNBQVMsY0FBYztBQUFBLFlBQ3BDO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGNBQWMsU0FBUyxhQUFhLFNBQVMsYUFBYTtBQUN4RCxjQUFJLGFBQWEsS0FBSyxZQUNwQixZQUFZLEtBQUs7QUFDbkIsY0FBSSxhQUFhO0FBQ2YsZ0JBQUksbUJBQW1CLGdCQUFnQjtBQUFBLGNBQ25DLE9BQU8sVUFBVSxlQUFlLEtBQUssSUFBSSxVQUFVLFVBQVUsQ0FBQztBQUFBLGNBQzlELFFBQVEsVUFBVSxnQkFBZ0IsS0FBSyxJQUFJLFVBQVUsVUFBVSxDQUFDO0FBQUEsY0FDaEUsUUFBUSxVQUFVLFVBQVU7QUFBQSxZQUM5QixDQUFDLEdBQ0QsZUFBZSxpQkFBaUIsT0FDaEMsZ0JBQWdCLGlCQUFpQjtBQUNuQyxnQkFBSSxRQUFRLFdBQVcsU0FBUyxlQUFlLFdBQVc7QUFDMUQsZ0JBQUksU0FBUyxXQUFXLFVBQVUsZ0JBQWdCLFdBQVc7QUFDN0QsdUJBQVcsU0FBUyxRQUFRLFdBQVcsU0FBUztBQUNoRCx1QkFBVyxRQUFRLFNBQVMsV0FBVyxVQUFVO0FBQ2pELHVCQUFXLFFBQVE7QUFDbkIsdUJBQVcsU0FBUztBQUNwQix1QkFBVyxjQUFjLGVBQWU7QUFDeEMsdUJBQVcsZUFBZTtBQUMxQix1QkFBVyxnQkFBZ0I7QUFDM0IsaUJBQUssWUFBWSxNQUFNLEtBQUs7QUFBQSxVQUM5QjtBQUNBLGNBQUksV0FBVyxRQUFRLFdBQVcsWUFBWSxXQUFXLFFBQVEsV0FBVyxVQUFVO0FBQ3BGLHVCQUFXLE9BQU8sV0FBVztBQUFBLFVBQy9CO0FBQ0EsY0FBSSxXQUFXLFNBQVMsV0FBVyxhQUFhLFdBQVcsU0FBUyxXQUFXLFdBQVc7QUFDeEYsdUJBQVcsTUFBTSxXQUFXO0FBQUEsVUFDOUI7QUFDQSxxQkFBVyxRQUFRLEtBQUssSUFBSSxLQUFLLElBQUksV0FBVyxPQUFPLFdBQVcsUUFBUSxHQUFHLFdBQVcsUUFBUTtBQUNoRyxxQkFBVyxTQUFTLEtBQUssSUFBSSxLQUFLLElBQUksV0FBVyxRQUFRLFdBQVcsU0FBUyxHQUFHLFdBQVcsU0FBUztBQUNwRyxlQUFLLFlBQVksT0FBTyxJQUFJO0FBQzVCLHFCQUFXLE9BQU8sS0FBSyxJQUFJLEtBQUssSUFBSSxXQUFXLE1BQU0sV0FBVyxPQUFPLEdBQUcsV0FBVyxPQUFPO0FBQzVGLHFCQUFXLE1BQU0sS0FBSyxJQUFJLEtBQUssSUFBSSxXQUFXLEtBQUssV0FBVyxNQUFNLEdBQUcsV0FBVyxNQUFNO0FBQ3hGLHFCQUFXLFVBQVUsV0FBVztBQUNoQyxxQkFBVyxTQUFTLFdBQVc7QUFDL0IsbUJBQVMsS0FBSyxRQUFRQSxRQUFPO0FBQUEsWUFDM0IsT0FBTyxXQUFXO0FBQUEsWUFDbEIsUUFBUSxXQUFXO0FBQUEsVUFDckIsR0FBRyxjQUFjO0FBQUEsWUFDZixZQUFZLFdBQVc7QUFBQSxZQUN2QixZQUFZLFdBQVc7QUFBQSxVQUN6QixDQUFDLENBQUMsQ0FBQztBQUNILGVBQUssWUFBWSxPQUFPO0FBQ3hCLGNBQUksS0FBSyxXQUFXLEtBQUssU0FBUztBQUNoQyxpQkFBSyxhQUFhLE1BQU0sSUFBSTtBQUFBLFVBQzlCO0FBQUEsUUFDRjtBQUFBLFFBQ0EsYUFBYSxTQUFTLFlBQVksU0FBUztBQUN6QyxjQUFJLGFBQWEsS0FBSyxZQUNwQixZQUFZLEtBQUs7QUFDbkIsY0FBSSxRQUFRLFVBQVUsZ0JBQWdCLFdBQVcsUUFBUSxXQUFXO0FBQ3BFLGNBQUksU0FBUyxVQUFVLGlCQUFpQixXQUFXLFNBQVMsV0FBVztBQUN2RSxVQUFBQSxRQUFPLFdBQVc7QUFBQSxZQUNoQjtBQUFBLFlBQ0E7QUFBQSxZQUNBLE9BQU8sV0FBVyxRQUFRLFNBQVM7QUFBQSxZQUNuQyxNQUFNLFdBQVcsU0FBUyxVQUFVO0FBQUEsVUFDdEMsQ0FBQztBQUNELG1CQUFTLEtBQUssT0FBT0EsUUFBTztBQUFBLFlBQzFCLE9BQU8sVUFBVTtBQUFBLFlBQ2pCLFFBQVEsVUFBVTtBQUFBLFVBQ3BCLEdBQUcsY0FBY0EsUUFBTztBQUFBLFlBQ3RCLFlBQVksVUFBVTtBQUFBLFlBQ3RCLFlBQVksVUFBVTtBQUFBLFVBQ3hCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNmLGNBQUksU0FBUztBQUNYLGlCQUFLLE9BQU87QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLFFBQ0EsYUFBYSxTQUFTLGNBQWM7QUFDbEMsY0FBSSxVQUFVLEtBQUssU0FDakIsYUFBYSxLQUFLO0FBQ3BCLGNBQUksY0FBYyxRQUFRLGVBQWUsUUFBUTtBQUNqRCxjQUFJLGVBQWUsT0FBTyxRQUFRLFlBQVksS0FBSztBQUNuRCxjQUFJLGNBQWM7QUFBQSxZQUNoQixPQUFPLFdBQVc7QUFBQSxZQUNsQixRQUFRLFdBQVc7QUFBQSxVQUNyQjtBQUNBLGNBQUksYUFBYTtBQUNmLGdCQUFJLFdBQVcsU0FBUyxjQUFjLFdBQVcsT0FBTztBQUN0RCwwQkFBWSxTQUFTLFlBQVksUUFBUTtBQUFBLFlBQzNDLE9BQU87QUFDTCwwQkFBWSxRQUFRLFlBQVksU0FBUztBQUFBLFlBQzNDO0FBQUEsVUFDRjtBQUNBLGVBQUssY0FBYztBQUNuQixlQUFLLGFBQWEsTUFBTSxJQUFJO0FBRzVCLHNCQUFZLFFBQVEsS0FBSyxJQUFJLEtBQUssSUFBSSxZQUFZLE9BQU8sWUFBWSxRQUFRLEdBQUcsWUFBWSxRQUFRO0FBQ3BHLHNCQUFZLFNBQVMsS0FBSyxJQUFJLEtBQUssSUFBSSxZQUFZLFFBQVEsWUFBWSxTQUFTLEdBQUcsWUFBWSxTQUFTO0FBR3hHLHNCQUFZLFFBQVEsS0FBSyxJQUFJLFlBQVksVUFBVSxZQUFZLFFBQVEsWUFBWTtBQUNuRixzQkFBWSxTQUFTLEtBQUssSUFBSSxZQUFZLFdBQVcsWUFBWSxTQUFTLFlBQVk7QUFDdEYsc0JBQVksT0FBTyxXQUFXLFFBQVEsV0FBVyxRQUFRLFlBQVksU0FBUztBQUM5RSxzQkFBWSxNQUFNLFdBQVcsT0FBTyxXQUFXLFNBQVMsWUFBWSxVQUFVO0FBQzlFLHNCQUFZLFVBQVUsWUFBWTtBQUNsQyxzQkFBWSxTQUFTLFlBQVk7QUFDakMsZUFBSyxxQkFBcUJBLFFBQU8sQ0FBQyxHQUFHLFdBQVc7QUFBQSxRQUNsRDtBQUFBLFFBQ0EsY0FBYyxTQUFTLGFBQWEsYUFBYSxpQkFBaUI7QUFDaEUsY0FBSSxVQUFVLEtBQUssU0FDakIsZ0JBQWdCLEtBQUssZUFDckIsYUFBYSxLQUFLLFlBQ2xCLGNBQWMsS0FBSyxhQUNuQixVQUFVLEtBQUs7QUFDakIsY0FBSSxjQUFjLFFBQVE7QUFDMUIsY0FBSSxhQUFhO0FBQ2YsZ0JBQUksa0JBQWtCLE9BQU8sUUFBUSxlQUFlLEtBQUs7QUFDekQsZ0JBQUksbUJBQW1CLE9BQU8sUUFBUSxnQkFBZ0IsS0FBSztBQUMzRCxnQkFBSSxrQkFBa0IsVUFBVSxLQUFLLElBQUksY0FBYyxPQUFPLFdBQVcsT0FBTyxXQUFXLFFBQVEsV0FBVyxNQUFNLGNBQWMsUUFBUSxXQUFXLElBQUksSUFBSSxjQUFjO0FBQzNLLGdCQUFJLG1CQUFtQixVQUFVLEtBQUssSUFBSSxjQUFjLFFBQVEsV0FBVyxRQUFRLFdBQVcsU0FBUyxXQUFXLEtBQUssY0FBYyxTQUFTLFdBQVcsR0FBRyxJQUFJLGNBQWM7QUFHOUssOEJBQWtCLEtBQUssSUFBSSxpQkFBaUIsY0FBYyxLQUFLO0FBQy9ELCtCQUFtQixLQUFLLElBQUksa0JBQWtCLGNBQWMsTUFBTTtBQUNsRSxnQkFBSSxhQUFhO0FBQ2Ysa0JBQUksbUJBQW1CLGtCQUFrQjtBQUN2QyxvQkFBSSxtQkFBbUIsY0FBYyxpQkFBaUI7QUFDcEQscUNBQW1CLGtCQUFrQjtBQUFBLGdCQUN2QyxPQUFPO0FBQ0wsb0NBQWtCLG1CQUFtQjtBQUFBLGdCQUN2QztBQUFBLGNBQ0YsV0FBVyxpQkFBaUI7QUFDMUIsbUNBQW1CLGtCQUFrQjtBQUFBLGNBQ3ZDLFdBQVcsa0JBQWtCO0FBQzNCLGtDQUFrQixtQkFBbUI7QUFBQSxjQUN2QztBQUNBLGtCQUFJLG1CQUFtQixjQUFjLGlCQUFpQjtBQUNwRCxtQ0FBbUIsa0JBQWtCO0FBQUEsY0FDdkMsT0FBTztBQUNMLGtDQUFrQixtQkFBbUI7QUFBQSxjQUN2QztBQUFBLFlBQ0Y7QUFHQSx3QkFBWSxXQUFXLEtBQUssSUFBSSxpQkFBaUIsZUFBZTtBQUNoRSx3QkFBWSxZQUFZLEtBQUssSUFBSSxrQkFBa0IsZ0JBQWdCO0FBQ25FLHdCQUFZLFdBQVc7QUFDdkIsd0JBQVksWUFBWTtBQUFBLFVBQzFCO0FBQ0EsY0FBSSxpQkFBaUI7QUFDbkIsZ0JBQUksU0FBUztBQUNYLDBCQUFZLFVBQVUsS0FBSyxJQUFJLEdBQUcsV0FBVyxJQUFJO0FBQ2pELDBCQUFZLFNBQVMsS0FBSyxJQUFJLEdBQUcsV0FBVyxHQUFHO0FBQy9DLDBCQUFZLFVBQVUsS0FBSyxJQUFJLGNBQWMsT0FBTyxXQUFXLE9BQU8sV0FBVyxLQUFLLElBQUksWUFBWTtBQUN0RywwQkFBWSxTQUFTLEtBQUssSUFBSSxjQUFjLFFBQVEsV0FBVyxNQUFNLFdBQVcsTUFBTSxJQUFJLFlBQVk7QUFBQSxZQUN4RyxPQUFPO0FBQ0wsMEJBQVksVUFBVTtBQUN0QiwwQkFBWSxTQUFTO0FBQ3JCLDBCQUFZLFVBQVUsY0FBYyxRQUFRLFlBQVk7QUFDeEQsMEJBQVksU0FBUyxjQUFjLFNBQVMsWUFBWTtBQUFBLFlBQzFEO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGVBQWUsU0FBUyxnQkFBZ0I7QUFDdEMsY0FBSSxVQUFVLEtBQUssU0FDakIsZ0JBQWdCLEtBQUssZUFDckIsY0FBYyxLQUFLO0FBQ3JCLGNBQUksWUFBWSxRQUFRLFlBQVksWUFBWSxZQUFZLFFBQVEsWUFBWSxVQUFVO0FBQ3hGLHdCQUFZLE9BQU8sWUFBWTtBQUFBLFVBQ2pDO0FBQ0EsY0FBSSxZQUFZLFNBQVMsWUFBWSxhQUFhLFlBQVksU0FBUyxZQUFZLFdBQVc7QUFDNUYsd0JBQVksTUFBTSxZQUFZO0FBQUEsVUFDaEM7QUFDQSxzQkFBWSxRQUFRLEtBQUssSUFBSSxLQUFLLElBQUksWUFBWSxPQUFPLFlBQVksUUFBUSxHQUFHLFlBQVksUUFBUTtBQUNwRyxzQkFBWSxTQUFTLEtBQUssSUFBSSxLQUFLLElBQUksWUFBWSxRQUFRLFlBQVksU0FBUyxHQUFHLFlBQVksU0FBUztBQUN4RyxlQUFLLGFBQWEsT0FBTyxJQUFJO0FBQzdCLHNCQUFZLE9BQU8sS0FBSyxJQUFJLEtBQUssSUFBSSxZQUFZLE1BQU0sWUFBWSxPQUFPLEdBQUcsWUFBWSxPQUFPO0FBQ2hHLHNCQUFZLE1BQU0sS0FBSyxJQUFJLEtBQUssSUFBSSxZQUFZLEtBQUssWUFBWSxNQUFNLEdBQUcsWUFBWSxNQUFNO0FBQzVGLHNCQUFZLFVBQVUsWUFBWTtBQUNsQyxzQkFBWSxTQUFTLFlBQVk7QUFDakMsY0FBSSxRQUFRLFdBQVcsUUFBUSxnQkFBZ0I7QUFFN0Msb0JBQVEsS0FBSyxNQUFNLGFBQWEsWUFBWSxTQUFTLGNBQWMsU0FBUyxZQUFZLFVBQVUsY0FBYyxTQUFTLGNBQWMsVUFBVTtBQUFBLFVBQ25KO0FBQ0EsbUJBQVMsS0FBSyxTQUFTQSxRQUFPO0FBQUEsWUFDNUIsT0FBTyxZQUFZO0FBQUEsWUFDbkIsUUFBUSxZQUFZO0FBQUEsVUFDdEIsR0FBRyxjQUFjO0FBQUEsWUFDZixZQUFZLFlBQVk7QUFBQSxZQUN4QixZQUFZLFlBQVk7QUFBQSxVQUMxQixDQUFDLENBQUMsQ0FBQztBQUNILGNBQUksS0FBSyxXQUFXLEtBQUssU0FBUztBQUNoQyxpQkFBSyxZQUFZLE1BQU0sSUFBSTtBQUFBLFVBQzdCO0FBQ0EsY0FBSSxDQUFDLEtBQUssVUFBVTtBQUNsQixpQkFBSyxPQUFPO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFFBQVEsU0FBUyxTQUFTO0FBQ3hCLGVBQUssUUFBUTtBQUNiLHdCQUFjLEtBQUssU0FBUyxZQUFZLEtBQUssUUFBUSxDQUFDO0FBQUEsUUFDeEQ7QUFBQSxNQUNGO0FBRUEsVUFBSSxVQUFVO0FBQUEsUUFDWixhQUFhLFNBQVMsY0FBYztBQUNsQyxjQUFJLFVBQVUsS0FBSyxTQUNqQixjQUFjLEtBQUs7QUFDckIsY0FBSU0sV0FBVSxLQUFLLFFBQVE7QUFDM0IsY0FBSSxNQUFNLGNBQWMsS0FBSyxpQkFBaUIsS0FBSztBQUNuRCxjQUFJLE1BQU0sUUFBUSxPQUFPO0FBQ3pCLGNBQUksUUFBUSxTQUFTLGNBQWMsS0FBSztBQUN4QyxjQUFJLGFBQWE7QUFDZixrQkFBTSxjQUFjO0FBQUEsVUFDdEI7QUFDQSxnQkFBTSxNQUFNO0FBQ1osZ0JBQU0sTUFBTTtBQUNaLGVBQUssUUFBUSxZQUFZLEtBQUs7QUFDOUIsZUFBSyxlQUFlO0FBQ3BCLGNBQUksQ0FBQ0EsVUFBUztBQUNaO0FBQUEsVUFDRjtBQUNBLGNBQUksV0FBV0E7QUFDZixjQUFJLE9BQU9BLGFBQVksVUFBVTtBQUMvQix1QkFBVyxRQUFRLGNBQWMsaUJBQWlCQSxRQUFPO0FBQUEsVUFDM0QsV0FBV0EsU0FBUSxlQUFlO0FBQ2hDLHVCQUFXLENBQUNBLFFBQU87QUFBQSxVQUNyQjtBQUNBLGVBQUssV0FBVztBQUNoQixrQkFBUSxVQUFVLFNBQVUsSUFBSTtBQUM5QixnQkFBSSxNQUFNLFNBQVMsY0FBYyxLQUFLO0FBR3RDLG9CQUFRLElBQUksY0FBYztBQUFBLGNBQ3hCLE9BQU8sR0FBRztBQUFBLGNBQ1YsUUFBUSxHQUFHO0FBQUEsY0FDWCxNQUFNLEdBQUc7QUFBQSxZQUNYLENBQUM7QUFDRCxnQkFBSSxhQUFhO0FBQ2Ysa0JBQUksY0FBYztBQUFBLFlBQ3BCO0FBQ0EsZ0JBQUksTUFBTTtBQUNWLGdCQUFJLE1BQU07QUFRVixnQkFBSSxNQUFNLFVBQVU7QUFDcEIsZUFBRyxZQUFZO0FBQ2YsZUFBRyxZQUFZLEdBQUc7QUFBQSxVQUNwQixDQUFDO0FBQUEsUUFDSDtBQUFBLFFBQ0EsY0FBYyxTQUFTLGVBQWU7QUFDcEMsa0JBQVEsS0FBSyxVQUFVLFNBQVUsU0FBUztBQUN4QyxnQkFBSSxPQUFPLFFBQVEsU0FBUyxZQUFZO0FBQ3hDLHFCQUFTLFNBQVM7QUFBQSxjQUNoQixPQUFPLEtBQUs7QUFBQSxjQUNaLFFBQVEsS0FBSztBQUFBLFlBQ2YsQ0FBQztBQUNELG9CQUFRLFlBQVksS0FBSztBQUN6Qix1QkFBVyxTQUFTLFlBQVk7QUFBQSxVQUNsQyxDQUFDO0FBQUEsUUFDSDtBQUFBLFFBQ0EsU0FBUyxTQUFTQSxXQUFVO0FBQzFCLGNBQUksWUFBWSxLQUFLLFdBQ25CLGFBQWEsS0FBSyxZQUNsQixjQUFjLEtBQUs7QUFDckIsY0FBSSxlQUFlLFlBQVksT0FDN0IsZ0JBQWdCLFlBQVk7QUFDOUIsY0FBSSxRQUFRLFVBQVUsT0FDcEIsU0FBUyxVQUFVO0FBQ3JCLGNBQUksT0FBTyxZQUFZLE9BQU8sV0FBVyxPQUFPLFVBQVU7QUFDMUQsY0FBSSxNQUFNLFlBQVksTUFBTSxXQUFXLE1BQU0sVUFBVTtBQUN2RCxjQUFJLENBQUMsS0FBSyxXQUFXLEtBQUssVUFBVTtBQUNsQztBQUFBLFVBQ0Y7QUFDQSxtQkFBUyxLQUFLLGNBQWNOLFFBQU87QUFBQSxZQUNqQztBQUFBLFlBQ0E7QUFBQSxVQUNGLEdBQUcsY0FBY0EsUUFBTztBQUFBLFlBQ3RCLFlBQVksQ0FBQztBQUFBLFlBQ2IsWUFBWSxDQUFDO0FBQUEsVUFDZixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDZixrQkFBUSxLQUFLLFVBQVUsU0FBVSxTQUFTO0FBQ3hDLGdCQUFJLE9BQU8sUUFBUSxTQUFTLFlBQVk7QUFDeEMsZ0JBQUksZ0JBQWdCLEtBQUs7QUFDekIsZ0JBQUksaUJBQWlCLEtBQUs7QUFDMUIsZ0JBQUksV0FBVztBQUNmLGdCQUFJLFlBQVk7QUFDaEIsZ0JBQUksUUFBUTtBQUNaLGdCQUFJLGNBQWM7QUFDaEIsc0JBQVEsZ0JBQWdCO0FBQ3hCLDBCQUFZLGdCQUFnQjtBQUFBLFlBQzlCO0FBQ0EsZ0JBQUksaUJBQWlCLFlBQVksZ0JBQWdCO0FBQy9DLHNCQUFRLGlCQUFpQjtBQUN6Qix5QkFBVyxlQUFlO0FBQzFCLDBCQUFZO0FBQUEsWUFDZDtBQUNBLHFCQUFTLFNBQVM7QUFBQSxjQUNoQixPQUFPO0FBQUEsY0FDUCxRQUFRO0FBQUEsWUFDVixDQUFDO0FBQ0QscUJBQVMsUUFBUSxxQkFBcUIsS0FBSyxFQUFFLENBQUMsR0FBR0EsUUFBTztBQUFBLGNBQ3RELE9BQU8sUUFBUTtBQUFBLGNBQ2YsUUFBUSxTQUFTO0FBQUEsWUFDbkIsR0FBRyxjQUFjQSxRQUFPO0FBQUEsY0FDdEIsWUFBWSxDQUFDLE9BQU87QUFBQSxjQUNwQixZQUFZLENBQUMsTUFBTTtBQUFBLFlBQ3JCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUFBLFVBQ2pCLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUVBLFVBQUksU0FBUztBQUFBLFFBQ1gsTUFBTSxTQUFTLE9BQU87QUFDcEIsY0FBSSxVQUFVLEtBQUssU0FDakIsVUFBVSxLQUFLLFNBQ2YsVUFBVSxLQUFLO0FBQ2pCLGNBQUksV0FBVyxRQUFRLFNBQVMsR0FBRztBQUNqQyx3QkFBWSxTQUFTLGtCQUFrQixRQUFRLFNBQVM7QUFBQSxVQUMxRDtBQUNBLGNBQUksV0FBVyxRQUFRLFFBQVEsR0FBRztBQUNoQyx3QkFBWSxTQUFTLGlCQUFpQixRQUFRLFFBQVE7QUFBQSxVQUN4RDtBQUNBLGNBQUksV0FBVyxRQUFRLE9BQU8sR0FBRztBQUMvQix3QkFBWSxTQUFTLGdCQUFnQixRQUFRLE9BQU87QUFBQSxVQUN0RDtBQUNBLGNBQUksV0FBVyxRQUFRLElBQUksR0FBRztBQUM1Qix3QkFBWSxTQUFTLFlBQVksUUFBUSxJQUFJO0FBQUEsVUFDL0M7QUFDQSxjQUFJLFdBQVcsUUFBUSxJQUFJLEdBQUc7QUFDNUIsd0JBQVksU0FBUyxZQUFZLFFBQVEsSUFBSTtBQUFBLFVBQy9DO0FBQ0Esc0JBQVksU0FBUyxvQkFBb0IsS0FBSyxjQUFjLEtBQUssVUFBVSxLQUFLLElBQUksQ0FBQztBQUNyRixjQUFJLFFBQVEsWUFBWSxRQUFRLGFBQWE7QUFDM0Msd0JBQVksU0FBUyxhQUFhLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxJQUFJLEdBQUc7QUFBQSxjQUN0RSxTQUFTO0FBQUEsY0FDVCxTQUFTO0FBQUEsWUFDWCxDQUFDO0FBQUEsVUFDSDtBQUNBLGNBQUksUUFBUSwwQkFBMEI7QUFDcEMsd0JBQVksU0FBUyxnQkFBZ0IsS0FBSyxhQUFhLEtBQUssU0FBUyxLQUFLLElBQUksQ0FBQztBQUFBLFVBQ2pGO0FBQ0Esc0JBQVksUUFBUSxlQUFlLG9CQUFvQixLQUFLLGFBQWEsS0FBSyxTQUFTLEtBQUssSUFBSSxDQUFDO0FBQ2pHLHNCQUFZLFFBQVEsZUFBZSxrQkFBa0IsS0FBSyxZQUFZLEtBQUssUUFBUSxLQUFLLElBQUksQ0FBQztBQUM3RixjQUFJLFFBQVEsWUFBWTtBQUN0Qix3QkFBWSxRQUFRLGNBQWMsS0FBSyxXQUFXLEtBQUssT0FBTyxLQUFLLElBQUksQ0FBQztBQUFBLFVBQzFFO0FBQUEsUUFDRjtBQUFBLFFBQ0EsUUFBUSxTQUFTLFNBQVM7QUFDeEIsY0FBSSxVQUFVLEtBQUssU0FDakIsVUFBVSxLQUFLLFNBQ2YsVUFBVSxLQUFLO0FBQ2pCLGNBQUksV0FBVyxRQUFRLFNBQVMsR0FBRztBQUNqQywyQkFBZSxTQUFTLGtCQUFrQixRQUFRLFNBQVM7QUFBQSxVQUM3RDtBQUNBLGNBQUksV0FBVyxRQUFRLFFBQVEsR0FBRztBQUNoQywyQkFBZSxTQUFTLGlCQUFpQixRQUFRLFFBQVE7QUFBQSxVQUMzRDtBQUNBLGNBQUksV0FBVyxRQUFRLE9BQU8sR0FBRztBQUMvQiwyQkFBZSxTQUFTLGdCQUFnQixRQUFRLE9BQU87QUFBQSxVQUN6RDtBQUNBLGNBQUksV0FBVyxRQUFRLElBQUksR0FBRztBQUM1QiwyQkFBZSxTQUFTLFlBQVksUUFBUSxJQUFJO0FBQUEsVUFDbEQ7QUFDQSxjQUFJLFdBQVcsUUFBUSxJQUFJLEdBQUc7QUFDNUIsMkJBQWUsU0FBUyxZQUFZLFFBQVEsSUFBSTtBQUFBLFVBQ2xEO0FBQ0EseUJBQWUsU0FBUyxvQkFBb0IsS0FBSyxXQUFXO0FBQzVELGNBQUksUUFBUSxZQUFZLFFBQVEsYUFBYTtBQUMzQywyQkFBZSxTQUFTLGFBQWEsS0FBSyxTQUFTO0FBQUEsY0FDakQsU0FBUztBQUFBLGNBQ1QsU0FBUztBQUFBLFlBQ1gsQ0FBQztBQUFBLFVBQ0g7QUFDQSxjQUFJLFFBQVEsMEJBQTBCO0FBQ3BDLDJCQUFlLFNBQVMsZ0JBQWdCLEtBQUssVUFBVTtBQUFBLFVBQ3pEO0FBQ0EseUJBQWUsUUFBUSxlQUFlLG9CQUFvQixLQUFLLFVBQVU7QUFDekUseUJBQWUsUUFBUSxlQUFlLGtCQUFrQixLQUFLLFNBQVM7QUFDdEUsY0FBSSxRQUFRLFlBQVk7QUFDdEIsMkJBQWUsUUFBUSxjQUFjLEtBQUssUUFBUTtBQUFBLFVBQ3BEO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFFQSxVQUFJLFdBQVc7QUFBQSxRQUNiLFFBQVEsU0FBUyxTQUFTO0FBQ3hCLGNBQUksS0FBSyxVQUFVO0FBQ2pCO0FBQUEsVUFDRjtBQUNBLGNBQUksVUFBVSxLQUFLLFNBQ2pCLFlBQVksS0FBSyxXQUNqQixnQkFBZ0IsS0FBSztBQUN2QixjQUFJLFNBQVMsVUFBVSxjQUFjLGNBQWM7QUFDbkQsY0FBSSxTQUFTLFVBQVUsZUFBZSxjQUFjO0FBQ3BELGNBQUksUUFBUSxLQUFLLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxJQUFJLFNBQVMsQ0FBQyxJQUFJLFNBQVM7QUFHbkUsY0FBSSxVQUFVLEdBQUc7QUFDZixnQkFBSTtBQUNKLGdCQUFJO0FBQ0osZ0JBQUksUUFBUSxTQUFTO0FBQ25CLDJCQUFhLEtBQUssY0FBYztBQUNoQyw0QkFBYyxLQUFLLGVBQWU7QUFBQSxZQUNwQztBQUNBLGlCQUFLLE9BQU87QUFDWixnQkFBSSxRQUFRLFNBQVM7QUFDbkIsbUJBQUssY0FBYyxRQUFRLFlBQVksU0FBVSxHQUFHLEdBQUc7QUFDckQsMkJBQVcsQ0FBQyxJQUFJLElBQUk7QUFBQSxjQUN0QixDQUFDLENBQUM7QUFDRixtQkFBSyxlQUFlLFFBQVEsYUFBYSxTQUFVLEdBQUcsR0FBRztBQUN2RCw0QkFBWSxDQUFDLElBQUksSUFBSTtBQUFBLGNBQ3ZCLENBQUMsQ0FBQztBQUFBLFlBQ0o7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsVUFBVSxTQUFTLFdBQVc7QUFDNUIsY0FBSSxLQUFLLFlBQVksS0FBSyxRQUFRLGFBQWEsZ0JBQWdCO0FBQzdEO0FBQUEsVUFDRjtBQUNBLGVBQUssWUFBWSxTQUFTLEtBQUssU0FBUyxVQUFVLElBQUksaUJBQWlCLGNBQWM7QUFBQSxRQUN2RjtBQUFBLFFBQ0EsT0FBTyxTQUFTLE1BQU0sT0FBTztBQUMzQixjQUFJLFFBQVE7QUFDWixjQUFJLFFBQVEsT0FBTyxLQUFLLFFBQVEsY0FBYyxLQUFLO0FBQ25ELGNBQUksUUFBUTtBQUNaLGNBQUksS0FBSyxVQUFVO0FBQ2pCO0FBQUEsVUFDRjtBQUNBLGdCQUFNLGVBQWU7QUFHckIsY0FBSSxLQUFLLFVBQVU7QUFDakI7QUFBQSxVQUNGO0FBQ0EsZUFBSyxXQUFXO0FBQ2hCLHFCQUFXLFdBQVk7QUFDckIsa0JBQU0sV0FBVztBQUFBLFVBQ25CLEdBQUcsRUFBRTtBQUNMLGNBQUksTUFBTSxRQUFRO0FBQ2hCLG9CQUFRLE1BQU0sU0FBUyxJQUFJLElBQUk7QUFBQSxVQUNqQyxXQUFXLE1BQU0sWUFBWTtBQUMzQixvQkFBUSxDQUFDLE1BQU0sYUFBYTtBQUFBLFVBQzlCLFdBQVcsTUFBTSxRQUFRO0FBQ3ZCLG9CQUFRLE1BQU0sU0FBUyxJQUFJLElBQUk7QUFBQSxVQUNqQztBQUNBLGVBQUssS0FBSyxDQUFDLFFBQVEsT0FBTyxLQUFLO0FBQUEsUUFDakM7QUFBQSxRQUNBLFdBQVcsU0FBUyxVQUFVLE9BQU87QUFDbkMsY0FBSSxVQUFVLE1BQU0sU0FDbEIsU0FBUyxNQUFNO0FBQ2pCLGNBQUksS0FBSyxhQUdMLE1BQU0sU0FBUyxlQUFlLE1BQU0sU0FBUyxpQkFBaUIsTUFBTSxnQkFBZ0I7QUFBQSxXQUV4RixTQUFTLE9BQU8sS0FBSyxZQUFZLEtBQUssU0FBUyxNQUFNLEtBQUssV0FBVyxLQUdsRSxNQUFNLFVBQVU7QUFDakI7QUFBQSxVQUNGO0FBQ0EsY0FBSSxVQUFVLEtBQUssU0FDakIsV0FBVyxLQUFLO0FBQ2xCLGNBQUk7QUFDSixjQUFJLE1BQU0sZ0JBQWdCO0FBRXhCLG9CQUFRLE1BQU0sZ0JBQWdCLFNBQVUsT0FBTztBQUM3Qyx1QkFBUyxNQUFNLFVBQVUsSUFBSSxXQUFXLEtBQUs7QUFBQSxZQUMvQyxDQUFDO0FBQUEsVUFDSCxPQUFPO0FBRUwscUJBQVMsTUFBTSxhQUFhLENBQUMsSUFBSSxXQUFXLEtBQUs7QUFBQSxVQUNuRDtBQUNBLGNBQUksT0FBTyxLQUFLLFFBQVEsRUFBRSxTQUFTLEtBQUssUUFBUSxZQUFZLFFBQVEsYUFBYTtBQUMvRSxxQkFBUztBQUFBLFVBQ1gsT0FBTztBQUNMLHFCQUFTLFFBQVEsTUFBTSxRQUFRLFdBQVc7QUFBQSxVQUM1QztBQUNBLGNBQUksQ0FBQyxlQUFlLEtBQUssTUFBTSxHQUFHO0FBQ2hDO0FBQUEsVUFDRjtBQUNBLGNBQUksY0FBYyxLQUFLLFNBQVMsa0JBQWtCO0FBQUEsWUFDaEQsZUFBZTtBQUFBLFlBQ2Y7QUFBQSxVQUNGLENBQUMsTUFBTSxPQUFPO0FBQ1o7QUFBQSxVQUNGO0FBR0EsZ0JBQU0sZUFBZTtBQUNyQixlQUFLLFNBQVM7QUFDZCxlQUFLLFdBQVc7QUFDaEIsY0FBSSxXQUFXLGFBQWE7QUFDMUIsaUJBQUssV0FBVztBQUNoQixxQkFBUyxLQUFLLFNBQVMsV0FBVztBQUFBLFVBQ3BDO0FBQUEsUUFDRjtBQUFBLFFBQ0EsVUFBVSxTQUFTLFNBQVMsT0FBTztBQUNqQyxjQUFJLFNBQVMsS0FBSztBQUNsQixjQUFJLEtBQUssWUFBWSxDQUFDLFFBQVE7QUFDNUI7QUFBQSxVQUNGO0FBQ0EsY0FBSSxXQUFXLEtBQUs7QUFDcEIsZ0JBQU0sZUFBZTtBQUNyQixjQUFJLGNBQWMsS0FBSyxTQUFTLGlCQUFpQjtBQUFBLFlBQy9DLGVBQWU7QUFBQSxZQUNmO0FBQUEsVUFDRixDQUFDLE1BQU0sT0FBTztBQUNaO0FBQUEsVUFDRjtBQUNBLGNBQUksTUFBTSxnQkFBZ0I7QUFDeEIsb0JBQVEsTUFBTSxnQkFBZ0IsU0FBVSxPQUFPO0FBRTdDLGNBQUFBLFFBQU8sU0FBUyxNQUFNLFVBQVUsS0FBSyxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQztBQUFBLFlBQ2xFLENBQUM7QUFBQSxVQUNILE9BQU87QUFDTCxZQUFBQSxRQUFPLFNBQVMsTUFBTSxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQztBQUFBLFVBQ3RFO0FBQ0EsZUFBSyxPQUFPLEtBQUs7QUFBQSxRQUNuQjtBQUFBLFFBQ0EsU0FBUyxTQUFTLFFBQVEsT0FBTztBQUMvQixjQUFJLEtBQUssVUFBVTtBQUNqQjtBQUFBLFVBQ0Y7QUFDQSxjQUFJLFNBQVMsS0FBSyxRQUNoQixXQUFXLEtBQUs7QUFDbEIsY0FBSSxNQUFNLGdCQUFnQjtBQUN4QixvQkFBUSxNQUFNLGdCQUFnQixTQUFVLE9BQU87QUFDN0MscUJBQU8sU0FBUyxNQUFNLFVBQVU7QUFBQSxZQUNsQyxDQUFDO0FBQUEsVUFDSCxPQUFPO0FBQ0wsbUJBQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUFBLFVBQ3RDO0FBQ0EsY0FBSSxDQUFDLFFBQVE7QUFDWDtBQUFBLFVBQ0Y7QUFDQSxnQkFBTSxlQUFlO0FBQ3JCLGNBQUksQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFLFFBQVE7QUFDakMsaUJBQUssU0FBUztBQUFBLFVBQ2hCO0FBQ0EsY0FBSSxLQUFLLFVBQVU7QUFDakIsaUJBQUssV0FBVztBQUNoQix3QkFBWSxLQUFLLFNBQVMsYUFBYSxLQUFLLFdBQVcsS0FBSyxRQUFRLEtBQUs7QUFBQSxVQUMzRTtBQUNBLHdCQUFjLEtBQUssU0FBUyxnQkFBZ0I7QUFBQSxZQUMxQyxlQUFlO0FBQUEsWUFDZjtBQUFBLFVBQ0YsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBRUEsVUFBSSxTQUFTO0FBQUEsUUFDWCxRQUFRLFNBQVNPLFFBQU8sT0FBTztBQUM3QixjQUFJLFVBQVUsS0FBSyxTQUNqQixhQUFhLEtBQUssWUFDbEIsZ0JBQWdCLEtBQUssZUFDckIsY0FBYyxLQUFLLGFBQ25CLFdBQVcsS0FBSztBQUNsQixjQUFJLFNBQVMsS0FBSztBQUNsQixjQUFJLGNBQWMsUUFBUTtBQUMxQixjQUFJLE9BQU8sWUFBWSxNQUNyQixNQUFNLFlBQVksS0FDbEIsUUFBUSxZQUFZLE9BQ3BCLFNBQVMsWUFBWTtBQUN2QixjQUFJLFFBQVEsT0FBTztBQUNuQixjQUFJLFNBQVMsTUFBTTtBQUNuQixjQUFJLFVBQVU7QUFDZCxjQUFJLFNBQVM7QUFDYixjQUFJLFdBQVcsY0FBYztBQUM3QixjQUFJLFlBQVksY0FBYztBQUM5QixjQUFJLGFBQWE7QUFDakIsY0FBSTtBQUdKLGNBQUksQ0FBQyxlQUFlLE1BQU0sVUFBVTtBQUNsQywwQkFBYyxTQUFTLFNBQVMsUUFBUSxTQUFTO0FBQUEsVUFDbkQ7QUFDQSxjQUFJLEtBQUssU0FBUztBQUNoQixzQkFBVSxZQUFZO0FBQ3RCLHFCQUFTLFlBQVk7QUFDckIsdUJBQVcsVUFBVSxLQUFLLElBQUksY0FBYyxPQUFPLFdBQVcsT0FBTyxXQUFXLE9BQU8sV0FBVyxLQUFLO0FBQ3ZHLHdCQUFZLFNBQVMsS0FBSyxJQUFJLGNBQWMsUUFBUSxXQUFXLFFBQVEsV0FBVyxNQUFNLFdBQVcsTUFBTTtBQUFBLFVBQzNHO0FBQ0EsY0FBSSxVQUFVLFNBQVMsT0FBTyxLQUFLLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDL0MsY0FBSSxRQUFRO0FBQUEsWUFDVixHQUFHLFFBQVEsT0FBTyxRQUFRO0FBQUEsWUFDMUIsR0FBRyxRQUFRLE9BQU8sUUFBUTtBQUFBLFVBQzVCO0FBQ0EsY0FBSSxRQUFRLFNBQVNDLE9BQU0sTUFBTTtBQUMvQixvQkFBUSxNQUFNO0FBQUEsY0FDWixLQUFLO0FBQ0gsb0JBQUksUUFBUSxNQUFNLElBQUksVUFBVTtBQUM5Qix3QkFBTSxJQUFJLFdBQVc7QUFBQSxnQkFDdkI7QUFDQTtBQUFBLGNBQ0YsS0FBSztBQUNILG9CQUFJLE9BQU8sTUFBTSxJQUFJLFNBQVM7QUFDNUIsd0JBQU0sSUFBSSxVQUFVO0FBQUEsZ0JBQ3RCO0FBQ0E7QUFBQSxjQUNGLEtBQUs7QUFDSCxvQkFBSSxNQUFNLE1BQU0sSUFBSSxRQUFRO0FBQzFCLHdCQUFNLElBQUksU0FBUztBQUFBLGdCQUNyQjtBQUNBO0FBQUEsY0FDRixLQUFLO0FBQ0gsb0JBQUksU0FBUyxNQUFNLElBQUksV0FBVztBQUNoQyx3QkFBTSxJQUFJLFlBQVk7QUFBQSxnQkFDeEI7QUFDQTtBQUFBLFlBQ0o7QUFBQSxVQUNGO0FBQ0Esa0JBQVEsUUFBUTtBQUFBO0FBQUEsWUFFZCxLQUFLO0FBQ0gsc0JBQVEsTUFBTTtBQUNkLHFCQUFPLE1BQU07QUFDYjtBQUFBO0FBQUEsWUFHRixLQUFLO0FBQ0gsa0JBQUksTUFBTSxLQUFLLE1BQU0sU0FBUyxZQUFZLGdCQUFnQixPQUFPLFVBQVUsVUFBVSxhQUFhO0FBQ2hHLDZCQUFhO0FBQ2I7QUFBQSxjQUNGO0FBQ0Esb0JBQU0sV0FBVztBQUNqQix1QkFBUyxNQUFNO0FBQ2Ysa0JBQUksUUFBUSxHQUFHO0FBQ2IseUJBQVM7QUFDVCx3QkFBUSxDQUFDO0FBQ1Qsd0JBQVE7QUFBQSxjQUNWO0FBQ0Esa0JBQUksYUFBYTtBQUNmLHlCQUFTLFFBQVE7QUFDakIsd0JBQVEsWUFBWSxTQUFTLFVBQVU7QUFBQSxjQUN6QztBQUNBO0FBQUEsWUFDRixLQUFLO0FBQ0gsa0JBQUksTUFBTSxLQUFLLE1BQU0sT0FBTyxVQUFVLGdCQUFnQixRQUFRLFdBQVcsU0FBUyxZQUFZO0FBQzVGLDZCQUFhO0FBQ2I7QUFBQSxjQUNGO0FBQ0Esb0JBQU0sWUFBWTtBQUNsQix3QkFBVSxNQUFNO0FBQ2hCLHFCQUFPLE1BQU07QUFDYixrQkFBSSxTQUFTLEdBQUc7QUFDZCx5QkFBUztBQUNULHlCQUFTLENBQUM7QUFDVix1QkFBTztBQUFBLGNBQ1Q7QUFDQSxrQkFBSSxhQUFhO0FBQ2Ysd0JBQVEsU0FBUztBQUNqQix5QkFBUyxZQUFZLFFBQVEsU0FBUztBQUFBLGNBQ3hDO0FBQ0E7QUFBQSxZQUNGLEtBQUs7QUFDSCxrQkFBSSxNQUFNLEtBQUssTUFBTSxRQUFRLFdBQVcsZ0JBQWdCLE9BQU8sVUFBVSxVQUFVLGFBQWE7QUFDOUYsNkJBQWE7QUFDYjtBQUFBLGNBQ0Y7QUFDQSxvQkFBTSxXQUFXO0FBQ2pCLHVCQUFTLE1BQU07QUFDZixzQkFBUSxNQUFNO0FBQ2Qsa0JBQUksUUFBUSxHQUFHO0FBQ2IseUJBQVM7QUFDVCx3QkFBUSxDQUFDO0FBQ1Qsd0JBQVE7QUFBQSxjQUNWO0FBQ0Esa0JBQUksYUFBYTtBQUNmLHlCQUFTLFFBQVE7QUFDakIsd0JBQVEsWUFBWSxTQUFTLFVBQVU7QUFBQSxjQUN6QztBQUNBO0FBQUEsWUFDRixLQUFLO0FBQ0gsa0JBQUksTUFBTSxLQUFLLE1BQU0sVUFBVSxhQUFhLGdCQUFnQixRQUFRLFdBQVcsU0FBUyxZQUFZO0FBQ2xHLDZCQUFhO0FBQ2I7QUFBQSxjQUNGO0FBQ0Esb0JBQU0sWUFBWTtBQUNsQix3QkFBVSxNQUFNO0FBQ2hCLGtCQUFJLFNBQVMsR0FBRztBQUNkLHlCQUFTO0FBQ1QseUJBQVMsQ0FBQztBQUNWLHVCQUFPO0FBQUEsY0FDVDtBQUNBLGtCQUFJLGFBQWE7QUFDZix3QkFBUSxTQUFTO0FBQ2pCLHlCQUFTLFlBQVksUUFBUSxTQUFTO0FBQUEsY0FDeEM7QUFDQTtBQUFBLFlBQ0YsS0FBSztBQUNILGtCQUFJLGFBQWE7QUFDZixvQkFBSSxNQUFNLEtBQUssTUFBTSxPQUFPLFVBQVUsU0FBUyxXQUFXO0FBQ3hELCtCQUFhO0FBQ2I7QUFBQSxnQkFDRjtBQUNBLHNCQUFNLFlBQVk7QUFDbEIsMEJBQVUsTUFBTTtBQUNoQix1QkFBTyxNQUFNO0FBQ2Isd0JBQVEsU0FBUztBQUFBLGNBQ25CLE9BQU87QUFDTCxzQkFBTSxZQUFZO0FBQ2xCLHNCQUFNLFdBQVc7QUFDakIsb0JBQUksTUFBTSxLQUFLLEdBQUc7QUFDaEIsc0JBQUksUUFBUSxVQUFVO0FBQ3BCLDZCQUFTLE1BQU07QUFBQSxrQkFDakIsV0FBVyxNQUFNLEtBQUssS0FBSyxPQUFPLFFBQVE7QUFDeEMsaUNBQWE7QUFBQSxrQkFDZjtBQUFBLGdCQUNGLE9BQU87QUFDTCwyQkFBUyxNQUFNO0FBQUEsZ0JBQ2pCO0FBQ0Esb0JBQUksTUFBTSxLQUFLLEdBQUc7QUFDaEIsc0JBQUksTUFBTSxRQUFRO0FBQ2hCLDhCQUFVLE1BQU07QUFDaEIsMkJBQU8sTUFBTTtBQUFBLGtCQUNmO0FBQUEsZ0JBQ0YsT0FBTztBQUNMLDRCQUFVLE1BQU07QUFDaEIseUJBQU8sTUFBTTtBQUFBLGdCQUNmO0FBQUEsY0FDRjtBQUNBLGtCQUFJLFFBQVEsS0FBSyxTQUFTLEdBQUc7QUFDM0IseUJBQVM7QUFDVCx5QkFBUyxDQUFDO0FBQ1Ysd0JBQVEsQ0FBQztBQUNULHVCQUFPO0FBQ1Asd0JBQVE7QUFBQSxjQUNWLFdBQVcsUUFBUSxHQUFHO0FBQ3BCLHlCQUFTO0FBQ1Qsd0JBQVEsQ0FBQztBQUNULHdCQUFRO0FBQUEsY0FDVixXQUFXLFNBQVMsR0FBRztBQUNyQix5QkFBUztBQUNULHlCQUFTLENBQUM7QUFDVix1QkFBTztBQUFBLGNBQ1Q7QUFDQTtBQUFBLFlBQ0YsS0FBSztBQUNILGtCQUFJLGFBQWE7QUFDZixvQkFBSSxNQUFNLEtBQUssTUFBTSxPQUFPLFVBQVUsUUFBUSxVQUFVO0FBQ3RELCtCQUFhO0FBQ2I7QUFBQSxnQkFDRjtBQUNBLHNCQUFNLFlBQVk7QUFDbEIsMEJBQVUsTUFBTTtBQUNoQix1QkFBTyxNQUFNO0FBQ2Isd0JBQVEsU0FBUztBQUNqQix3QkFBUSxZQUFZLFFBQVE7QUFBQSxjQUM5QixPQUFPO0FBQ0wsc0JBQU0sWUFBWTtBQUNsQixzQkFBTSxXQUFXO0FBQ2pCLG9CQUFJLE1BQU0sS0FBSyxHQUFHO0FBQ2hCLHNCQUFJLE9BQU8sU0FBUztBQUNsQiw2QkFBUyxNQUFNO0FBQ2YsNEJBQVEsTUFBTTtBQUFBLGtCQUNoQixXQUFXLE1BQU0sS0FBSyxLQUFLLE9BQU8sUUFBUTtBQUN4QyxpQ0FBYTtBQUFBLGtCQUNmO0FBQUEsZ0JBQ0YsT0FBTztBQUNMLDJCQUFTLE1BQU07QUFDZiwwQkFBUSxNQUFNO0FBQUEsZ0JBQ2hCO0FBQ0Esb0JBQUksTUFBTSxLQUFLLEdBQUc7QUFDaEIsc0JBQUksTUFBTSxRQUFRO0FBQ2hCLDhCQUFVLE1BQU07QUFDaEIsMkJBQU8sTUFBTTtBQUFBLGtCQUNmO0FBQUEsZ0JBQ0YsT0FBTztBQUNMLDRCQUFVLE1BQU07QUFDaEIseUJBQU8sTUFBTTtBQUFBLGdCQUNmO0FBQUEsY0FDRjtBQUNBLGtCQUFJLFFBQVEsS0FBSyxTQUFTLEdBQUc7QUFDM0IseUJBQVM7QUFDVCx5QkFBUyxDQUFDO0FBQ1Ysd0JBQVEsQ0FBQztBQUNULHVCQUFPO0FBQ1Asd0JBQVE7QUFBQSxjQUNWLFdBQVcsUUFBUSxHQUFHO0FBQ3BCLHlCQUFTO0FBQ1Qsd0JBQVEsQ0FBQztBQUNULHdCQUFRO0FBQUEsY0FDVixXQUFXLFNBQVMsR0FBRztBQUNyQix5QkFBUztBQUNULHlCQUFTLENBQUM7QUFDVix1QkFBTztBQUFBLGNBQ1Q7QUFDQTtBQUFBLFlBQ0YsS0FBSztBQUNILGtCQUFJLGFBQWE7QUFDZixvQkFBSSxNQUFNLEtBQUssTUFBTSxRQUFRLFdBQVcsVUFBVSxZQUFZO0FBQzVELCtCQUFhO0FBQ2I7QUFBQSxnQkFDRjtBQUNBLHNCQUFNLFdBQVc7QUFDakIseUJBQVMsTUFBTTtBQUNmLHdCQUFRLE1BQU07QUFDZCx5QkFBUyxRQUFRO0FBQUEsY0FDbkIsT0FBTztBQUNMLHNCQUFNLFlBQVk7QUFDbEIsc0JBQU0sV0FBVztBQUNqQixvQkFBSSxNQUFNLEtBQUssR0FBRztBQUNoQixzQkFBSSxPQUFPLFNBQVM7QUFDbEIsNkJBQVMsTUFBTTtBQUNmLDRCQUFRLE1BQU07QUFBQSxrQkFDaEIsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVc7QUFDOUMsaUNBQWE7QUFBQSxrQkFDZjtBQUFBLGdCQUNGLE9BQU87QUFDTCwyQkFBUyxNQUFNO0FBQ2YsMEJBQVEsTUFBTTtBQUFBLGdCQUNoQjtBQUNBLG9CQUFJLE1BQU0sS0FBSyxHQUFHO0FBQ2hCLHNCQUFJLFNBQVMsV0FBVztBQUN0Qiw4QkFBVSxNQUFNO0FBQUEsa0JBQ2xCO0FBQUEsZ0JBQ0YsT0FBTztBQUNMLDRCQUFVLE1BQU07QUFBQSxnQkFDbEI7QUFBQSxjQUNGO0FBQ0Esa0JBQUksUUFBUSxLQUFLLFNBQVMsR0FBRztBQUMzQix5QkFBUztBQUNULHlCQUFTLENBQUM7QUFDVix3QkFBUSxDQUFDO0FBQ1QsdUJBQU87QUFDUCx3QkFBUTtBQUFBLGNBQ1YsV0FBVyxRQUFRLEdBQUc7QUFDcEIseUJBQVM7QUFDVCx3QkFBUSxDQUFDO0FBQ1Qsd0JBQVE7QUFBQSxjQUNWLFdBQVcsU0FBUyxHQUFHO0FBQ3JCLHlCQUFTO0FBQ1QseUJBQVMsQ0FBQztBQUNWLHVCQUFPO0FBQUEsY0FDVDtBQUNBO0FBQUEsWUFDRixLQUFLO0FBQ0gsa0JBQUksYUFBYTtBQUNmLG9CQUFJLE1BQU0sS0FBSyxNQUFNLFNBQVMsWUFBWSxVQUFVLFlBQVk7QUFDOUQsK0JBQWE7QUFDYjtBQUFBLGdCQUNGO0FBQ0Esc0JBQU0sV0FBVztBQUNqQix5QkFBUyxNQUFNO0FBQ2YseUJBQVMsUUFBUTtBQUFBLGNBQ25CLE9BQU87QUFDTCxzQkFBTSxZQUFZO0FBQ2xCLHNCQUFNLFdBQVc7QUFDakIsb0JBQUksTUFBTSxLQUFLLEdBQUc7QUFDaEIsc0JBQUksUUFBUSxVQUFVO0FBQ3BCLDZCQUFTLE1BQU07QUFBQSxrQkFDakIsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVc7QUFDOUMsaUNBQWE7QUFBQSxrQkFDZjtBQUFBLGdCQUNGLE9BQU87QUFDTCwyQkFBUyxNQUFNO0FBQUEsZ0JBQ2pCO0FBQ0Esb0JBQUksTUFBTSxLQUFLLEdBQUc7QUFDaEIsc0JBQUksU0FBUyxXQUFXO0FBQ3RCLDhCQUFVLE1BQU07QUFBQSxrQkFDbEI7QUFBQSxnQkFDRixPQUFPO0FBQ0wsNEJBQVUsTUFBTTtBQUFBLGdCQUNsQjtBQUFBLGNBQ0Y7QUFDQSxrQkFBSSxRQUFRLEtBQUssU0FBUyxHQUFHO0FBQzNCLHlCQUFTO0FBQ1QseUJBQVMsQ0FBQztBQUNWLHdCQUFRLENBQUM7QUFDVCx1QkFBTztBQUNQLHdCQUFRO0FBQUEsY0FDVixXQUFXLFFBQVEsR0FBRztBQUNwQix5QkFBUztBQUNULHdCQUFRLENBQUM7QUFDVCx3QkFBUTtBQUFBLGNBQ1YsV0FBVyxTQUFTLEdBQUc7QUFDckIseUJBQVM7QUFDVCx5QkFBUyxDQUFDO0FBQ1YsdUJBQU87QUFBQSxjQUNUO0FBQ0E7QUFBQTtBQUFBLFlBR0YsS0FBSztBQUNILG1CQUFLLEtBQUssTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMxQiwyQkFBYTtBQUNiO0FBQUE7QUFBQSxZQUdGLEtBQUs7QUFDSCxtQkFBSyxLQUFLLGdCQUFnQixRQUFRLEdBQUcsS0FBSztBQUMxQywyQkFBYTtBQUNiO0FBQUE7QUFBQSxZQUdGLEtBQUs7QUFDSCxrQkFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLE1BQU0sR0FBRztBQUN4Qiw2QkFBYTtBQUNiO0FBQUEsY0FDRjtBQUNBLHVCQUFTLFVBQVUsS0FBSyxPQUFPO0FBQy9CLHFCQUFPLFFBQVEsU0FBUyxPQUFPO0FBQy9CLG9CQUFNLFFBQVEsU0FBUyxPQUFPO0FBQzlCLHNCQUFRLFlBQVk7QUFDcEIsdUJBQVMsWUFBWTtBQUNyQixrQkFBSSxNQUFNLElBQUksR0FBRztBQUNmLHlCQUFTLE1BQU0sSUFBSSxJQUFJLG9CQUFvQjtBQUFBLGNBQzdDLFdBQVcsTUFBTSxJQUFJLEdBQUc7QUFDdEIsd0JBQVE7QUFDUix5QkFBUyxNQUFNLElBQUksSUFBSSxvQkFBb0I7QUFBQSxjQUM3QztBQUNBLGtCQUFJLE1BQU0sSUFBSSxHQUFHO0FBQ2YsdUJBQU87QUFBQSxjQUNUO0FBR0Esa0JBQUksQ0FBQyxLQUFLLFNBQVM7QUFDakIsNEJBQVksS0FBSyxTQUFTLFlBQVk7QUFDdEMscUJBQUssVUFBVTtBQUNmLG9CQUFJLEtBQUssU0FBUztBQUNoQix1QkFBSyxhQUFhLE1BQU0sSUFBSTtBQUFBLGdCQUM5QjtBQUFBLGNBQ0Y7QUFDQTtBQUFBLFVBQ0o7QUFDQSxjQUFJLFlBQVk7QUFDZCx3QkFBWSxRQUFRO0FBQ3BCLHdCQUFZLFNBQVM7QUFDckIsd0JBQVksT0FBTztBQUNuQix3QkFBWSxNQUFNO0FBQ2xCLGlCQUFLLFNBQVM7QUFDZCxpQkFBSyxjQUFjO0FBQUEsVUFDckI7QUFHQSxrQkFBUSxVQUFVLFNBQVUsR0FBRztBQUM3QixjQUFFLFNBQVMsRUFBRTtBQUNiLGNBQUUsU0FBUyxFQUFFO0FBQUEsVUFDZixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFFQSxVQUFJLFVBQVU7QUFBQTtBQUFBLFFBRVosTUFBTSxTQUFTLE9BQU87QUFDcEIsY0FBSSxLQUFLLFNBQVMsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxLQUFLLFVBQVU7QUFDakQsaUJBQUssVUFBVTtBQUNmLGlCQUFLLGFBQWEsTUFBTSxJQUFJO0FBQzVCLGdCQUFJLEtBQUssUUFBUSxPQUFPO0FBQ3RCLHVCQUFTLEtBQUssU0FBUyxXQUFXO0FBQUEsWUFDcEM7QUFDQSx3QkFBWSxLQUFLLFNBQVMsWUFBWTtBQUN0QyxpQkFBSyxlQUFlLEtBQUssa0JBQWtCO0FBQUEsVUFDN0M7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBLFFBRUEsT0FBTyxTQUFTLFFBQVE7QUFDdEIsY0FBSSxLQUFLLFNBQVMsQ0FBQyxLQUFLLFVBQVU7QUFDaEMsaUJBQUssWUFBWVIsUUFBTyxDQUFDLEdBQUcsS0FBSyxnQkFBZ0I7QUFDakQsaUJBQUssYUFBYUEsUUFBTyxDQUFDLEdBQUcsS0FBSyxpQkFBaUI7QUFDbkQsaUJBQUssY0FBY0EsUUFBTyxDQUFDLEdBQUcsS0FBSyxrQkFBa0I7QUFDckQsaUJBQUssYUFBYTtBQUNsQixnQkFBSSxLQUFLLFNBQVM7QUFDaEIsbUJBQUssY0FBYztBQUFBLFlBQ3JCO0FBQUEsVUFDRjtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBO0FBQUEsUUFFQSxPQUFPLFNBQVMsUUFBUTtBQUN0QixjQUFJLEtBQUssV0FBVyxDQUFDLEtBQUssVUFBVTtBQUNsQyxZQUFBQSxRQUFPLEtBQUssYUFBYTtBQUFBLGNBQ3ZCLE1BQU07QUFBQSxjQUNOLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLFFBQVE7QUFBQSxZQUNWLENBQUM7QUFDRCxpQkFBSyxVQUFVO0FBQ2YsaUJBQUssY0FBYztBQUNuQixpQkFBSyxZQUFZLE1BQU0sSUFBSTtBQUczQixpQkFBSyxhQUFhO0FBQ2xCLHdCQUFZLEtBQUssU0FBUyxXQUFXO0FBQ3JDLHFCQUFTLEtBQUssU0FBUyxZQUFZO0FBQUEsVUFDckM7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU9BLFNBQVMsU0FBUyxRQUFRLEtBQUs7QUFDN0IsY0FBSSxjQUFjLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLFNBQVksVUFBVSxDQUFDLElBQUk7QUFDdEYsY0FBSSxDQUFDLEtBQUssWUFBWSxLQUFLO0FBQ3pCLGdCQUFJLEtBQUssT0FBTztBQUNkLG1CQUFLLFFBQVEsTUFBTTtBQUFBLFlBQ3JCO0FBQ0EsZ0JBQUksYUFBYTtBQUNmLG1CQUFLLE1BQU07QUFDWCxtQkFBSyxNQUFNLE1BQU07QUFDakIsa0JBQUksS0FBSyxPQUFPO0FBQ2QscUJBQUssYUFBYSxNQUFNO0FBQ3hCLHdCQUFRLEtBQUssVUFBVSxTQUFVLFNBQVM7QUFDeEMsMEJBQVEscUJBQXFCLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTTtBQUFBLGdCQUMvQyxDQUFDO0FBQUEsY0FDSDtBQUFBLFlBQ0YsT0FBTztBQUNMLGtCQUFJLEtBQUssT0FBTztBQUNkLHFCQUFLLFdBQVc7QUFBQSxjQUNsQjtBQUNBLG1CQUFLLFFBQVEsT0FBTztBQUNwQixtQkFBSyxTQUFTO0FBQ2QsbUJBQUssS0FBSyxHQUFHO0FBQUEsWUFDZjtBQUFBLFVBQ0Y7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBLFFBRUEsUUFBUSxTQUFTLFNBQVM7QUFDeEIsY0FBSSxLQUFLLFNBQVMsS0FBSyxVQUFVO0FBQy9CLGlCQUFLLFdBQVc7QUFDaEIsd0JBQVksS0FBSyxTQUFTLGNBQWM7QUFBQSxVQUMxQztBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBO0FBQUEsUUFFQSxTQUFTLFNBQVMsVUFBVTtBQUMxQixjQUFJLEtBQUssU0FBUyxDQUFDLEtBQUssVUFBVTtBQUNoQyxpQkFBSyxXQUFXO0FBQ2hCLHFCQUFTLEtBQUssU0FBUyxjQUFjO0FBQUEsVUFDdkM7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS0EsU0FBUyxTQUFTLFVBQVU7QUFDMUIsY0FBSSxVQUFVLEtBQUs7QUFDbkIsY0FBSSxDQUFDLFFBQVEsU0FBUyxHQUFHO0FBQ3ZCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGtCQUFRLFNBQVMsSUFBSTtBQUNyQixjQUFJLEtBQUssU0FBUyxLQUFLLFVBQVU7QUFDL0Isb0JBQVEsTUFBTSxLQUFLO0FBQUEsVUFDckI7QUFDQSxlQUFLLFNBQVM7QUFDZCxpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU9BLE1BQU0sU0FBUyxLQUFLLFNBQVM7QUFDM0IsY0FBSSxVQUFVLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLFNBQVksVUFBVSxDQUFDLElBQUk7QUFDbEYsY0FBSSxtQkFBbUIsS0FBSyxZQUMxQixPQUFPLGlCQUFpQixNQUN4QixNQUFNLGlCQUFpQjtBQUN6QixpQkFBTyxLQUFLLE9BQU8sWUFBWSxPQUFPLElBQUksVUFBVSxPQUFPLE9BQU8sT0FBTyxHQUFHLFlBQVksT0FBTyxJQUFJLFVBQVUsTUFBTSxPQUFPLE9BQU8sQ0FBQztBQUFBLFFBQ3BJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFPQSxRQUFRLFNBQVMsT0FBTyxHQUFHO0FBQ3pCLGNBQUksSUFBSSxVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsTUFBTSxTQUFZLFVBQVUsQ0FBQyxJQUFJO0FBQzVFLGNBQUksYUFBYSxLQUFLO0FBQ3RCLGNBQUksVUFBVTtBQUNkLGNBQUksT0FBTyxDQUFDO0FBQ1osY0FBSSxPQUFPLENBQUM7QUFDWixjQUFJLEtBQUssU0FBUyxDQUFDLEtBQUssWUFBWSxLQUFLLFFBQVEsU0FBUztBQUN4RCxnQkFBSSxTQUFTLENBQUMsR0FBRztBQUNmLHlCQUFXLE9BQU87QUFDbEIsd0JBQVU7QUFBQSxZQUNaO0FBQ0EsZ0JBQUksU0FBUyxDQUFDLEdBQUc7QUFDZix5QkFBVyxNQUFNO0FBQ2pCLHdCQUFVO0FBQUEsWUFDWjtBQUNBLGdCQUFJLFNBQVM7QUFDWCxtQkFBSyxhQUFhLElBQUk7QUFBQSxZQUN4QjtBQUFBLFVBQ0Y7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU9BLE1BQU0sU0FBUyxLQUFLLE9BQU8sZ0JBQWdCO0FBQ3pDLGNBQUksYUFBYSxLQUFLO0FBQ3RCLGtCQUFRLE9BQU8sS0FBSztBQUNwQixjQUFJLFFBQVEsR0FBRztBQUNiLG9CQUFRLEtBQUssSUFBSTtBQUFBLFVBQ25CLE9BQU87QUFDTCxvQkFBUSxJQUFJO0FBQUEsVUFDZDtBQUNBLGlCQUFPLEtBQUssT0FBTyxXQUFXLFFBQVEsUUFBUSxXQUFXLGNBQWMsTUFBTSxjQUFjO0FBQUEsUUFDN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUUEsUUFBUSxTQUFTLE9BQU8sT0FBTyxPQUFPLGdCQUFnQjtBQUNwRCxjQUFJLFVBQVUsS0FBSyxTQUNqQixhQUFhLEtBQUs7QUFDcEIsY0FBSSxRQUFRLFdBQVcsT0FDckIsU0FBUyxXQUFXLFFBQ3BCLGVBQWUsV0FBVyxjQUMxQixnQkFBZ0IsV0FBVztBQUM3QixrQkFBUSxPQUFPLEtBQUs7QUFDcEIsY0FBSSxTQUFTLEtBQUssS0FBSyxTQUFTLENBQUMsS0FBSyxZQUFZLFFBQVEsVUFBVTtBQUNsRSxnQkFBSSxXQUFXLGVBQWU7QUFDOUIsZ0JBQUksWUFBWSxnQkFBZ0I7QUFDaEMsZ0JBQUksY0FBYyxLQUFLLFNBQVMsWUFBWTtBQUFBLGNBQzFDO0FBQUEsY0FDQSxVQUFVLFFBQVE7QUFBQSxjQUNsQixlQUFlO0FBQUEsWUFDakIsQ0FBQyxNQUFNLE9BQU87QUFDWixxQkFBTztBQUFBLFlBQ1Q7QUFDQSxnQkFBSSxnQkFBZ0I7QUFDbEIsa0JBQUksV0FBVyxLQUFLO0FBQ3BCLGtCQUFJLFNBQVMsVUFBVSxLQUFLLE9BQU87QUFDbkMsa0JBQUksU0FBUyxZQUFZLE9BQU8sS0FBSyxRQUFRLEVBQUUsU0FBUyxrQkFBa0IsUUFBUSxJQUFJO0FBQUEsZ0JBQ3BGLE9BQU8sZUFBZTtBQUFBLGdCQUN0QixPQUFPLGVBQWU7QUFBQSxjQUN4QjtBQUdBLHlCQUFXLFNBQVMsV0FBVyxXQUFXLE9BQU8sUUFBUSxPQUFPLE9BQU8sV0FBVyxRQUFRO0FBQzFGLHlCQUFXLFFBQVEsWUFBWSxZQUFZLE9BQU8sUUFBUSxPQUFPLE1BQU0sV0FBVyxPQUFPO0FBQUEsWUFDM0YsV0FBVyxjQUFjLEtBQUssS0FBSyxTQUFTLE1BQU0sQ0FBQyxLQUFLLFNBQVMsTUFBTSxDQUFDLEdBQUc7QUFDekUseUJBQVcsU0FBUyxXQUFXLFdBQVcsTUFBTSxJQUFJLFdBQVcsUUFBUTtBQUN2RSx5QkFBVyxRQUFRLFlBQVksWUFBWSxNQUFNLElBQUksV0FBVyxPQUFPO0FBQUEsWUFDekUsT0FBTztBQUVMLHlCQUFXLFNBQVMsV0FBVyxTQUFTO0FBQ3hDLHlCQUFXLFFBQVEsWUFBWSxVQUFVO0FBQUEsWUFDM0M7QUFDQSx1QkFBVyxRQUFRO0FBQ25CLHVCQUFXLFNBQVM7QUFDcEIsaUJBQUssYUFBYSxJQUFJO0FBQUEsVUFDeEI7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNQSxRQUFRLFNBQVMsT0FBTyxRQUFRO0FBQzlCLGlCQUFPLEtBQUssVUFBVSxLQUFLLFVBQVUsVUFBVSxLQUFLLE9BQU8sTUFBTSxDQUFDO0FBQUEsUUFDcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNQSxVQUFVLFNBQVMsU0FBUyxRQUFRO0FBQ2xDLG1CQUFTLE9BQU8sTUFBTTtBQUN0QixjQUFJLFNBQVMsTUFBTSxLQUFLLEtBQUssU0FBUyxDQUFDLEtBQUssWUFBWSxLQUFLLFFBQVEsV0FBVztBQUM5RSxpQkFBSyxVQUFVLFNBQVMsU0FBUztBQUNqQyxpQkFBSyxhQUFhLE1BQU0sSUFBSTtBQUFBLFVBQzlCO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTUEsUUFBUSxTQUFTLE9BQU8sU0FBUztBQUMvQixjQUFJLFNBQVMsS0FBSyxVQUFVO0FBQzVCLGlCQUFPLEtBQUssTUFBTSxTQUFTLFNBQVMsTUFBTSxJQUFJLFNBQVMsQ0FBQztBQUFBLFFBQzFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTUEsUUFBUSxTQUFTLE9BQU8sU0FBUztBQUMvQixjQUFJLFNBQVMsS0FBSyxVQUFVO0FBQzVCLGlCQUFPLEtBQUssTUFBTSxTQUFTLE1BQU0sSUFBSSxTQUFTLEdBQUcsT0FBTztBQUFBLFFBQzFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFPQSxPQUFPLFNBQVMsTUFBTSxRQUFRO0FBQzVCLGNBQUksU0FBUyxVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsTUFBTSxTQUFZLFVBQVUsQ0FBQyxJQUFJO0FBQ2pGLGNBQUksWUFBWSxLQUFLO0FBQ3JCLGNBQUksY0FBYztBQUNsQixtQkFBUyxPQUFPLE1BQU07QUFDdEIsbUJBQVMsT0FBTyxNQUFNO0FBQ3RCLGNBQUksS0FBSyxTQUFTLENBQUMsS0FBSyxZQUFZLEtBQUssUUFBUSxVQUFVO0FBQ3pELGdCQUFJLFNBQVMsTUFBTSxHQUFHO0FBQ3BCLHdCQUFVLFNBQVM7QUFDbkIsNEJBQWM7QUFBQSxZQUNoQjtBQUNBLGdCQUFJLFNBQVMsTUFBTSxHQUFHO0FBQ3BCLHdCQUFVLFNBQVM7QUFDbkIsNEJBQWM7QUFBQSxZQUNoQjtBQUNBLGdCQUFJLGFBQWE7QUFDZixtQkFBSyxhQUFhLE1BQU0sSUFBSTtBQUFBLFlBQzlCO0FBQUEsVUFDRjtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1BLFNBQVMsU0FBU1MsV0FBVTtBQUMxQixjQUFJLFVBQVUsVUFBVSxTQUFTLEtBQUssVUFBVSxDQUFDLE1BQU0sU0FBWSxVQUFVLENBQUMsSUFBSTtBQUNsRixjQUFJLFVBQVUsS0FBSyxTQUNqQixZQUFZLEtBQUssV0FDakIsYUFBYSxLQUFLLFlBQ2xCLGNBQWMsS0FBSztBQUNyQixjQUFJO0FBQ0osY0FBSSxLQUFLLFNBQVMsS0FBSyxTQUFTO0FBQzlCLG1CQUFPO0FBQUEsY0FDTCxHQUFHLFlBQVksT0FBTyxXQUFXO0FBQUEsY0FDakMsR0FBRyxZQUFZLE1BQU0sV0FBVztBQUFBLGNBQ2hDLE9BQU8sWUFBWTtBQUFBLGNBQ25CLFFBQVEsWUFBWTtBQUFBLFlBQ3RCO0FBQ0EsZ0JBQUksUUFBUSxVQUFVLFFBQVEsVUFBVTtBQUN4QyxvQkFBUSxNQUFNLFNBQVUsR0FBRyxHQUFHO0FBQzVCLG1CQUFLLENBQUMsSUFBSSxJQUFJO0FBQUEsWUFDaEIsQ0FBQztBQUNELGdCQUFJLFNBQVM7QUFHWCxrQkFBSSxTQUFTLEtBQUssTUFBTSxLQUFLLElBQUksS0FBSyxNQUFNO0FBQzVDLGtCQUFJLFFBQVEsS0FBSyxNQUFNLEtBQUssSUFBSSxLQUFLLEtBQUs7QUFDMUMsbUJBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxDQUFDO0FBQzFCLG1CQUFLLElBQUksS0FBSyxNQUFNLEtBQUssQ0FBQztBQUMxQixtQkFBSyxRQUFRLFFBQVEsS0FBSztBQUMxQixtQkFBSyxTQUFTLFNBQVMsS0FBSztBQUFBLFlBQzlCO0FBQUEsVUFDRixPQUFPO0FBQ0wsbUJBQU87QUFBQSxjQUNMLEdBQUc7QUFBQSxjQUNILEdBQUc7QUFBQSxjQUNILE9BQU87QUFBQSxjQUNQLFFBQVE7QUFBQSxZQUNWO0FBQUEsVUFDRjtBQUNBLGNBQUksUUFBUSxXQUFXO0FBQ3JCLGlCQUFLLFNBQVMsVUFBVSxVQUFVO0FBQUEsVUFDcEM7QUFDQSxjQUFJLFFBQVEsVUFBVTtBQUNwQixpQkFBSyxTQUFTLFVBQVUsVUFBVTtBQUNsQyxpQkFBSyxTQUFTLFVBQVUsVUFBVTtBQUFBLFVBQ3BDO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTUEsU0FBUyxTQUFTQyxTQUFRLE1BQU07QUFDOUIsY0FBSSxVQUFVLEtBQUssU0FDakIsWUFBWSxLQUFLLFdBQ2pCLGFBQWEsS0FBSztBQUNwQixjQUFJLGNBQWMsQ0FBQztBQUNuQixjQUFJLEtBQUssU0FBUyxDQUFDLEtBQUssWUFBWSxjQUFjLElBQUksR0FBRztBQUN2RCxnQkFBSSxjQUFjO0FBQ2xCLGdCQUFJLFFBQVEsV0FBVztBQUNyQixrQkFBSSxTQUFTLEtBQUssTUFBTSxLQUFLLEtBQUssV0FBVyxVQUFVLFFBQVE7QUFDN0QsMEJBQVUsU0FBUyxLQUFLO0FBQ3hCLDhCQUFjO0FBQUEsY0FDaEI7QUFBQSxZQUNGO0FBQ0EsZ0JBQUksUUFBUSxVQUFVO0FBQ3BCLGtCQUFJLFNBQVMsS0FBSyxNQUFNLEtBQUssS0FBSyxXQUFXLFVBQVUsUUFBUTtBQUM3RCwwQkFBVSxTQUFTLEtBQUs7QUFDeEIsOEJBQWM7QUFBQSxjQUNoQjtBQUNBLGtCQUFJLFNBQVMsS0FBSyxNQUFNLEtBQUssS0FBSyxXQUFXLFVBQVUsUUFBUTtBQUM3RCwwQkFBVSxTQUFTLEtBQUs7QUFDeEIsOEJBQWM7QUFBQSxjQUNoQjtBQUFBLFlBQ0Y7QUFDQSxnQkFBSSxhQUFhO0FBQ2YsbUJBQUssYUFBYSxNQUFNLElBQUk7QUFBQSxZQUM5QjtBQUNBLGdCQUFJLFFBQVEsVUFBVSxRQUFRLFVBQVU7QUFDeEMsZ0JBQUksU0FBUyxLQUFLLENBQUMsR0FBRztBQUNwQiwwQkFBWSxPQUFPLEtBQUssSUFBSSxRQUFRLFdBQVc7QUFBQSxZQUNqRDtBQUNBLGdCQUFJLFNBQVMsS0FBSyxDQUFDLEdBQUc7QUFDcEIsMEJBQVksTUFBTSxLQUFLLElBQUksUUFBUSxXQUFXO0FBQUEsWUFDaEQ7QUFDQSxnQkFBSSxTQUFTLEtBQUssS0FBSyxHQUFHO0FBQ3hCLDBCQUFZLFFBQVEsS0FBSyxRQUFRO0FBQUEsWUFDbkM7QUFDQSxnQkFBSSxTQUFTLEtBQUssTUFBTSxHQUFHO0FBQ3pCLDBCQUFZLFNBQVMsS0FBSyxTQUFTO0FBQUEsWUFDckM7QUFDQSxpQkFBSyxlQUFlLFdBQVc7QUFBQSxVQUNqQztBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFLQSxrQkFBa0IsU0FBUyxtQkFBbUI7QUFDNUMsaUJBQU8sS0FBSyxRQUFRVixRQUFPLENBQUMsR0FBRyxLQUFLLGFBQWEsSUFBSSxDQUFDO0FBQUEsUUFDeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS0EsY0FBYyxTQUFTLGVBQWU7QUFDcEMsaUJBQU8sS0FBSyxRQUFRQSxRQUFPLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxDQUFDO0FBQUEsUUFDcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS0EsZUFBZSxTQUFTLGdCQUFnQjtBQUN0QyxjQUFJLGFBQWEsS0FBSztBQUN0QixjQUFJLE9BQU8sQ0FBQztBQUNaLGNBQUksS0FBSyxPQUFPO0FBQ2Qsb0JBQVEsQ0FBQyxRQUFRLE9BQU8sU0FBUyxVQUFVLGdCQUFnQixlQUFlLEdBQUcsU0FBVSxHQUFHO0FBQ3hGLG1CQUFLLENBQUMsSUFBSSxXQUFXLENBQUM7QUFBQSxZQUN4QixDQUFDO0FBQUEsVUFDSDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1BLGVBQWUsU0FBUyxjQUFjLE1BQU07QUFDMUMsY0FBSSxhQUFhLEtBQUs7QUFDdEIsY0FBSSxjQUFjLFdBQVc7QUFDN0IsY0FBSSxLQUFLLFNBQVMsQ0FBQyxLQUFLLFlBQVksY0FBYyxJQUFJLEdBQUc7QUFDdkQsZ0JBQUksU0FBUyxLQUFLLElBQUksR0FBRztBQUN2Qix5QkFBVyxPQUFPLEtBQUs7QUFBQSxZQUN6QjtBQUNBLGdCQUFJLFNBQVMsS0FBSyxHQUFHLEdBQUc7QUFDdEIseUJBQVcsTUFBTSxLQUFLO0FBQUEsWUFDeEI7QUFDQSxnQkFBSSxTQUFTLEtBQUssS0FBSyxHQUFHO0FBQ3hCLHlCQUFXLFFBQVEsS0FBSztBQUN4Qix5QkFBVyxTQUFTLEtBQUssUUFBUTtBQUFBLFlBQ25DLFdBQVcsU0FBUyxLQUFLLE1BQU0sR0FBRztBQUNoQyx5QkFBVyxTQUFTLEtBQUs7QUFDekIseUJBQVcsUUFBUSxLQUFLLFNBQVM7QUFBQSxZQUNuQztBQUNBLGlCQUFLLGFBQWEsSUFBSTtBQUFBLFVBQ3hCO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUtBLGdCQUFnQixTQUFTLGlCQUFpQjtBQUN4QyxjQUFJLGNBQWMsS0FBSztBQUN2QixjQUFJO0FBQ0osY0FBSSxLQUFLLFNBQVMsS0FBSyxTQUFTO0FBQzlCLG1CQUFPO0FBQUEsY0FDTCxNQUFNLFlBQVk7QUFBQSxjQUNsQixLQUFLLFlBQVk7QUFBQSxjQUNqQixPQUFPLFlBQVk7QUFBQSxjQUNuQixRQUFRLFlBQVk7QUFBQSxZQUN0QjtBQUFBLFVBQ0Y7QUFDQSxpQkFBTyxRQUFRLENBQUM7QUFBQSxRQUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1BLGdCQUFnQixTQUFTLGVBQWUsTUFBTTtBQUM1QyxjQUFJLGNBQWMsS0FBSztBQUN2QixjQUFJLGNBQWMsS0FBSyxRQUFRO0FBQy9CLGNBQUk7QUFDSixjQUFJO0FBQ0osY0FBSSxLQUFLLFNBQVMsS0FBSyxXQUFXLENBQUMsS0FBSyxZQUFZLGNBQWMsSUFBSSxHQUFHO0FBQ3ZFLGdCQUFJLFNBQVMsS0FBSyxJQUFJLEdBQUc7QUFDdkIsMEJBQVksT0FBTyxLQUFLO0FBQUEsWUFDMUI7QUFDQSxnQkFBSSxTQUFTLEtBQUssR0FBRyxHQUFHO0FBQ3RCLDBCQUFZLE1BQU0sS0FBSztBQUFBLFlBQ3pCO0FBQ0EsZ0JBQUksU0FBUyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPO0FBQzVELDZCQUFlO0FBQ2YsMEJBQVksUUFBUSxLQUFLO0FBQUEsWUFDM0I7QUFDQSxnQkFBSSxTQUFTLEtBQUssTUFBTSxLQUFLLEtBQUssV0FBVyxZQUFZLFFBQVE7QUFDL0QsOEJBQWdCO0FBQ2hCLDBCQUFZLFNBQVMsS0FBSztBQUFBLFlBQzVCO0FBQ0EsZ0JBQUksYUFBYTtBQUNmLGtCQUFJLGNBQWM7QUFDaEIsNEJBQVksU0FBUyxZQUFZLFFBQVE7QUFBQSxjQUMzQyxXQUFXLGVBQWU7QUFDeEIsNEJBQVksUUFBUSxZQUFZLFNBQVM7QUFBQSxjQUMzQztBQUFBLFlBQ0Y7QUFDQSxpQkFBSyxjQUFjO0FBQUEsVUFDckI7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNQSxrQkFBa0IsU0FBUyxtQkFBbUI7QUFDNUMsY0FBSSxVQUFVLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLFNBQVksVUFBVSxDQUFDLElBQUksQ0FBQztBQUNuRixjQUFJLENBQUMsS0FBSyxTQUFTLENBQUMsT0FBTyxtQkFBbUI7QUFDNUMsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxhQUFhLEtBQUs7QUFDdEIsY0FBSSxTQUFTLGdCQUFnQixLQUFLLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTztBQUc1RSxjQUFJLENBQUMsS0FBSyxTQUFTO0FBQ2pCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksZ0JBQWdCLEtBQUssUUFBUSxRQUFRLE9BQU8sR0FDOUMsV0FBVyxjQUFjLEdBQ3pCLFdBQVcsY0FBYyxHQUN6QixlQUFlLGNBQWMsT0FDN0IsZ0JBQWdCLGNBQWM7QUFDaEMsY0FBSSxRQUFRLE9BQU8sUUFBUSxLQUFLLE1BQU0sV0FBVyxZQUFZO0FBQzdELGNBQUksVUFBVSxHQUFHO0FBQ2Ysd0JBQVk7QUFDWix3QkFBWTtBQUNaLDRCQUFnQjtBQUNoQiw2QkFBaUI7QUFBQSxVQUNuQjtBQUNBLGNBQUksY0FBYyxlQUFlO0FBQ2pDLGNBQUksV0FBVyxpQkFBaUI7QUFBQSxZQUM5QjtBQUFBLFlBQ0EsT0FBTyxRQUFRLFlBQVk7QUFBQSxZQUMzQixRQUFRLFFBQVEsYUFBYTtBQUFBLFVBQy9CLENBQUM7QUFDRCxjQUFJLFdBQVcsaUJBQWlCO0FBQUEsWUFDOUI7QUFBQSxZQUNBLE9BQU8sUUFBUSxZQUFZO0FBQUEsWUFDM0IsUUFBUSxRQUFRLGFBQWE7QUFBQSxVQUMvQixHQUFHLE9BQU87QUFDVixjQUFJLG9CQUFvQixpQkFBaUI7QUFBQSxZQUNyQztBQUFBLFlBQ0EsT0FBTyxRQUFRLFVBQVUsVUFBVSxJQUFJLE9BQU8sUUFBUTtBQUFBLFlBQ3RELFFBQVEsUUFBUSxXQUFXLFVBQVUsSUFBSSxPQUFPLFNBQVM7QUFBQSxVQUMzRCxDQUFDLEdBQ0QsUUFBUSxrQkFBa0IsT0FDMUIsU0FBUyxrQkFBa0I7QUFDN0Isa0JBQVEsS0FBSyxJQUFJLFNBQVMsT0FBTyxLQUFLLElBQUksU0FBUyxPQUFPLEtBQUssQ0FBQztBQUNoRSxtQkFBUyxLQUFLLElBQUksU0FBUyxRQUFRLEtBQUssSUFBSSxTQUFTLFFBQVEsTUFBTSxDQUFDO0FBQ3BFLGNBQUksU0FBUyxTQUFTLGNBQWMsUUFBUTtBQUM1QyxjQUFJLFVBQVUsT0FBTyxXQUFXLElBQUk7QUFDcEMsaUJBQU8sUUFBUSx1QkFBdUIsS0FBSztBQUMzQyxpQkFBTyxTQUFTLHVCQUF1QixNQUFNO0FBQzdDLGtCQUFRLFlBQVksUUFBUSxhQUFhO0FBQ3pDLGtCQUFRLFNBQVMsR0FBRyxHQUFHLE9BQU8sTUFBTTtBQUNwQyxjQUFJLHdCQUF3QixRQUFRLHVCQUNsQyx3QkFBd0IsMEJBQTBCLFNBQVMsT0FBTyx1QkFDbEUsd0JBQXdCLFFBQVE7QUFDbEMsa0JBQVEsd0JBQXdCO0FBQ2hDLGNBQUksdUJBQXVCO0FBQ3pCLG9CQUFRLHdCQUF3QjtBQUFBLFVBQ2xDO0FBR0EsY0FBSSxjQUFjLE9BQU87QUFDekIsY0FBSSxlQUFlLE9BQU87QUFHMUIsY0FBSSxPQUFPO0FBQ1gsY0FBSSxPQUFPO0FBQ1gsY0FBSTtBQUNKLGNBQUk7QUFHSixjQUFJO0FBQ0osY0FBSTtBQUNKLGNBQUk7QUFDSixjQUFJO0FBQ0osY0FBSSxRQUFRLENBQUMsZ0JBQWdCLE9BQU8sYUFBYTtBQUMvQyxtQkFBTztBQUNQLHVCQUFXO0FBQ1gsbUJBQU87QUFDUCx1QkFBVztBQUFBLFVBQ2IsV0FBVyxRQUFRLEdBQUc7QUFDcEIsbUJBQU8sQ0FBQztBQUNSLG1CQUFPO0FBQ1AsdUJBQVcsS0FBSyxJQUFJLGFBQWEsZUFBZSxJQUFJO0FBQ3BELHVCQUFXO0FBQUEsVUFDYixXQUFXLFFBQVEsYUFBYTtBQUM5QixtQkFBTztBQUNQLHVCQUFXLEtBQUssSUFBSSxjQUFjLGNBQWMsSUFBSTtBQUNwRCx1QkFBVztBQUFBLFVBQ2I7QUFDQSxjQUFJLFlBQVksS0FBSyxRQUFRLENBQUMsaUJBQWlCLE9BQU8sY0FBYztBQUNsRSxtQkFBTztBQUNQLHdCQUFZO0FBQ1osbUJBQU87QUFDUCx3QkFBWTtBQUFBLFVBQ2QsV0FBVyxRQUFRLEdBQUc7QUFDcEIsbUJBQU8sQ0FBQztBQUNSLG1CQUFPO0FBQ1Asd0JBQVksS0FBSyxJQUFJLGNBQWMsZ0JBQWdCLElBQUk7QUFDdkQsd0JBQVk7QUFBQSxVQUNkLFdBQVcsUUFBUSxjQUFjO0FBQy9CLG1CQUFPO0FBQ1Asd0JBQVksS0FBSyxJQUFJLGVBQWUsZUFBZSxJQUFJO0FBQ3ZELHdCQUFZO0FBQUEsVUFDZDtBQUNBLGNBQUksU0FBUyxDQUFDLE1BQU0sTUFBTSxVQUFVLFNBQVM7QUFHN0MsY0FBSSxXQUFXLEtBQUssWUFBWSxHQUFHO0FBQ2pDLGdCQUFJLFFBQVEsUUFBUTtBQUNwQixtQkFBTyxLQUFLLE9BQU8sT0FBTyxPQUFPLE9BQU8sV0FBVyxPQUFPLFlBQVksS0FBSztBQUFBLFVBQzdFO0FBSUEsa0JBQVEsVUFBVSxNQUFNLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxtQkFBbUIsT0FBTyxJQUFJLFNBQVUsT0FBTztBQUM5RixtQkFBTyxLQUFLLE1BQU0sdUJBQXVCLEtBQUssQ0FBQztBQUFBLFVBQ2pELENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDSixpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNQSxnQkFBZ0IsU0FBUyxlQUFlLGFBQWE7QUFDbkQsY0FBSSxVQUFVLEtBQUs7QUFDbkIsY0FBSSxDQUFDLEtBQUssWUFBWSxDQUFDLFlBQVksV0FBVyxHQUFHO0FBRS9DLG9CQUFRLGNBQWMsS0FBSyxJQUFJLEdBQUcsV0FBVyxLQUFLO0FBQ2xELGdCQUFJLEtBQUssT0FBTztBQUNkLG1CQUFLLFlBQVk7QUFDakIsa0JBQUksS0FBSyxTQUFTO0FBQ2hCLHFCQUFLLGNBQWM7QUFBQSxjQUNyQjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTUEsYUFBYSxTQUFTLFlBQVksTUFBTTtBQUN0QyxjQUFJLFVBQVUsS0FBSyxTQUNqQixVQUFVLEtBQUssU0FDZixPQUFPLEtBQUs7QUFDZCxjQUFJLEtBQUssU0FBUyxDQUFDLEtBQUssVUFBVTtBQUNoQyxnQkFBSSxZQUFZLFNBQVM7QUFDekIsZ0JBQUksVUFBVSxRQUFRLFdBQVcsU0FBUztBQUMxQyxtQkFBTyxhQUFhLFVBQVUsT0FBTztBQUNyQyxvQkFBUSxXQUFXO0FBQ25CLG9CQUFRLFNBQVMsYUFBYSxJQUFJO0FBQ2xDLHdCQUFZLFNBQVMsWUFBWSxTQUFTO0FBQzFDLHdCQUFZLFNBQVMsWUFBWSxPQUFPO0FBQ3hDLGdCQUFJLENBQUMsUUFBUSxnQkFBZ0I7QUFFM0Isc0JBQVEsTUFBTSxhQUFhLElBQUk7QUFDL0IsMEJBQVksTUFBTSxZQUFZLFNBQVM7QUFDdkMsMEJBQVksTUFBTSxZQUFZLE9BQU87QUFBQSxZQUN2QztBQUFBLFVBQ0Y7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBRUEsVUFBSSxpQkFBaUIsT0FBTztBQUM1QixVQUFJVyxXQUF1Qiw0QkFBWTtBQU1yQyxpQkFBU0EsU0FBUSxTQUFTO0FBQ3hCLGNBQUksVUFBVSxVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsTUFBTSxTQUFZLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDbkYsMEJBQWdCLE1BQU1BLFFBQU87QUFDN0IsY0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsS0FBSyxRQUFRLE9BQU8sR0FBRztBQUN0RCxrQkFBTSxJQUFJLE1BQU0sMEVBQTBFO0FBQUEsVUFDNUY7QUFDQSxlQUFLLFVBQVU7QUFDZixlQUFLLFVBQVVYLFFBQU8sQ0FBQyxHQUFHLFVBQVUsY0FBYyxPQUFPLEtBQUssT0FBTztBQUNyRSxlQUFLLFVBQVU7QUFDZixlQUFLLFdBQVc7QUFDaEIsZUFBSyxXQUFXLENBQUM7QUFDakIsZUFBSyxRQUFRO0FBQ2IsZUFBSyxZQUFZO0FBQ2pCLGVBQUssV0FBVztBQUNoQixlQUFLLFFBQVE7QUFDYixlQUFLLFNBQVM7QUFDZCxlQUFLLEtBQUs7QUFBQSxRQUNaO0FBQ0EsZUFBTyxhQUFhVyxVQUFTLENBQUM7QUFBQSxVQUM1QixLQUFLO0FBQUEsVUFDTCxPQUFPLFNBQVMsT0FBTztBQUNyQixnQkFBSSxVQUFVLEtBQUs7QUFDbkIsZ0JBQUksVUFBVSxRQUFRLFFBQVEsWUFBWTtBQUMxQyxnQkFBSTtBQUNKLGdCQUFJLFFBQVEsU0FBUyxHQUFHO0FBQ3RCO0FBQUEsWUFDRjtBQUNBLG9CQUFRLFNBQVMsSUFBSTtBQUNyQixnQkFBSSxZQUFZLE9BQU87QUFDckIsbUJBQUssUUFBUTtBQUdiLG9CQUFNLFFBQVEsYUFBYSxLQUFLLEtBQUs7QUFDckMsbUJBQUssY0FBYztBQUduQixrQkFBSSxDQUFDLEtBQUs7QUFDUjtBQUFBLGNBQ0Y7QUFHQSxvQkFBTSxRQUFRO0FBQUEsWUFDaEIsV0FBVyxZQUFZLFlBQVksT0FBTyxtQkFBbUI7QUFDM0Qsb0JBQU0sUUFBUSxVQUFVO0FBQUEsWUFDMUI7QUFDQSxpQkFBSyxLQUFLLEdBQUc7QUFBQSxVQUNmO0FBQUEsUUFDRixHQUFHO0FBQUEsVUFDRCxLQUFLO0FBQUEsVUFDTCxPQUFPLFNBQVMsS0FBSyxLQUFLO0FBQ3hCLGdCQUFJLFFBQVE7QUFDWixnQkFBSSxDQUFDLEtBQUs7QUFDUjtBQUFBLFlBQ0Y7QUFDQSxpQkFBSyxNQUFNO0FBQ1gsaUJBQUssWUFBWSxDQUFDO0FBQ2xCLGdCQUFJLFVBQVUsS0FBSyxTQUNqQixVQUFVLEtBQUs7QUFDakIsZ0JBQUksQ0FBQyxRQUFRLGFBQWEsQ0FBQyxRQUFRLFVBQVU7QUFDM0Msc0JBQVEsbUJBQW1CO0FBQUEsWUFDN0I7QUFHQSxnQkFBSSxDQUFDLFFBQVEsb0JBQW9CLENBQUMsT0FBTyxhQUFhO0FBQ3BELG1CQUFLLE1BQU07QUFDWDtBQUFBLFlBQ0Y7QUFHQSxnQkFBSSxnQkFBZ0IsS0FBSyxHQUFHLEdBQUc7QUFFN0Isa0JBQUkscUJBQXFCLEtBQUssR0FBRyxHQUFHO0FBQ2xDLHFCQUFLLEtBQUsscUJBQXFCLEdBQUcsQ0FBQztBQUFBLGNBQ3JDLE9BQU87QUFHTCxxQkFBSyxNQUFNO0FBQUEsY0FDYjtBQUNBO0FBQUEsWUFDRjtBQUlBLGdCQUFJLE1BQU0sSUFBSSxlQUFlO0FBQzdCLGdCQUFJLFFBQVEsS0FBSyxNQUFNLEtBQUssSUFBSTtBQUNoQyxpQkFBSyxZQUFZO0FBQ2pCLGlCQUFLLE1BQU07QUFNWCxnQkFBSSxVQUFVO0FBQ2QsZ0JBQUksVUFBVTtBQUNkLGdCQUFJLFlBQVk7QUFDaEIsZ0JBQUksYUFBYSxXQUFZO0FBRTNCLGtCQUFJLElBQUksa0JBQWtCLGNBQWMsTUFBTSxnQkFBZ0I7QUFDNUQsb0JBQUksTUFBTTtBQUFBLGNBQ1o7QUFBQSxZQUNGO0FBQ0EsZ0JBQUksU0FBUyxXQUFZO0FBQ3ZCLG9CQUFNLEtBQUssSUFBSSxRQUFRO0FBQUEsWUFDekI7QUFDQSxnQkFBSSxZQUFZLFdBQVk7QUFDMUIsb0JBQU0sWUFBWTtBQUNsQixvQkFBTSxNQUFNO0FBQUEsWUFDZDtBQUdBLGdCQUFJLFFBQVEsb0JBQW9CLGlCQUFpQixHQUFHLEtBQUssUUFBUSxhQUFhO0FBQzVFLG9CQUFNLGFBQWEsR0FBRztBQUFBLFlBQ3hCO0FBR0EsZ0JBQUksS0FBSyxPQUFPLEtBQUssSUFBSTtBQUN6QixnQkFBSSxlQUFlO0FBQ25CLGdCQUFJLGtCQUFrQixRQUFRLGdCQUFnQjtBQUM5QyxnQkFBSSxLQUFLO0FBQUEsVUFDWDtBQUFBLFFBQ0YsR0FBRztBQUFBLFVBQ0QsS0FBSztBQUFBLFVBQ0wsT0FBTyxTQUFTLEtBQUssYUFBYTtBQUNoQyxnQkFBSSxVQUFVLEtBQUssU0FDakIsWUFBWSxLQUFLO0FBSW5CLGdCQUFJLGNBQWMsdUJBQXVCLFdBQVc7QUFDcEQsZ0JBQUksU0FBUztBQUNiLGdCQUFJLFNBQVM7QUFDYixnQkFBSSxTQUFTO0FBQ2IsZ0JBQUksY0FBYyxHQUFHO0FBRW5CLG1CQUFLLE1BQU0scUJBQXFCLGFBQWEsY0FBYztBQUMzRCxrQkFBSSxvQkFBb0IsaUJBQWlCLFdBQVc7QUFDcEQsdUJBQVMsa0JBQWtCO0FBQzNCLHVCQUFTLGtCQUFrQjtBQUMzQix1QkFBUyxrQkFBa0I7QUFBQSxZQUM3QjtBQUNBLGdCQUFJLFFBQVEsV0FBVztBQUNyQix3QkFBVSxTQUFTO0FBQUEsWUFDckI7QUFDQSxnQkFBSSxRQUFRLFVBQVU7QUFDcEIsd0JBQVUsU0FBUztBQUNuQix3QkFBVSxTQUFTO0FBQUEsWUFDckI7QUFDQSxpQkFBSyxNQUFNO0FBQUEsVUFDYjtBQUFBLFFBQ0YsR0FBRztBQUFBLFVBQ0QsS0FBSztBQUFBLFVBQ0wsT0FBTyxTQUFTLFFBQVE7QUFDdEIsZ0JBQUksVUFBVSxLQUFLLFNBQ2pCLE1BQU0sS0FBSztBQUNiLGdCQUFJLGNBQWMsUUFBUTtBQUMxQixnQkFBSSxpQkFBaUI7QUFDckIsZ0JBQUksS0FBSyxRQUFRLG9CQUFvQixpQkFBaUIsR0FBRyxHQUFHO0FBQzFELGtCQUFJLENBQUMsYUFBYTtBQUNoQiw4QkFBYztBQUFBLGNBQ2hCO0FBR0EsK0JBQWlCLGFBQWEsR0FBRztBQUFBLFlBQ25DO0FBQ0EsaUJBQUssY0FBYztBQUNuQixpQkFBSyxpQkFBaUI7QUFDdEIsZ0JBQUksUUFBUSxTQUFTLGNBQWMsS0FBSztBQUN4QyxnQkFBSSxhQUFhO0FBQ2Ysb0JBQU0sY0FBYztBQUFBLFlBQ3RCO0FBQ0Esa0JBQU0sTUFBTSxrQkFBa0I7QUFDOUIsa0JBQU0sTUFBTSxRQUFRLE9BQU87QUFDM0IsaUJBQUssUUFBUTtBQUNiLGtCQUFNLFNBQVMsS0FBSyxNQUFNLEtBQUssSUFBSTtBQUNuQyxrQkFBTSxVQUFVLEtBQUssS0FBSyxLQUFLLElBQUk7QUFDbkMscUJBQVMsT0FBTyxVQUFVO0FBQzFCLG9CQUFRLFdBQVcsYUFBYSxPQUFPLFFBQVEsV0FBVztBQUFBLFVBQzVEO0FBQUEsUUFDRixHQUFHO0FBQUEsVUFDRCxLQUFLO0FBQUEsVUFDTCxPQUFPLFNBQVMsUUFBUTtBQUN0QixnQkFBSSxTQUFTO0FBQ2IsZ0JBQUksUUFBUSxLQUFLO0FBQ2pCLGtCQUFNLFNBQVM7QUFDZixrQkFBTSxVQUFVO0FBQ2hCLGlCQUFLLFNBQVM7QUFJZCxnQkFBSSxjQUFjLE9BQU8sYUFBYSxzQ0FBc0MsS0FBSyxPQUFPLFVBQVUsU0FBUztBQUMzRyxnQkFBSSxPQUFPLFNBQVNDLE1BQUssY0FBYyxlQUFlO0FBQ3BELGNBQUFaLFFBQU8sT0FBTyxXQUFXO0FBQUEsZ0JBQ3ZCO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQSxhQUFhLGVBQWU7QUFBQSxjQUM5QixDQUFDO0FBQ0QscUJBQU8sbUJBQW1CQSxRQUFPLENBQUMsR0FBRyxPQUFPLFNBQVM7QUFDckQscUJBQU8sU0FBUztBQUNoQixxQkFBTyxRQUFRO0FBQ2YscUJBQU8sTUFBTTtBQUFBLFlBQ2Y7QUFHQSxnQkFBSSxNQUFNLGdCQUFnQixDQUFDLGFBQWE7QUFDdEMsbUJBQUssTUFBTSxjQUFjLE1BQU0sYUFBYTtBQUM1QztBQUFBLFlBQ0Y7QUFDQSxnQkFBSSxjQUFjLFNBQVMsY0FBYyxLQUFLO0FBQzlDLGdCQUFJLE9BQU8sU0FBUyxRQUFRLFNBQVM7QUFDckMsaUJBQUssY0FBYztBQUNuQix3QkFBWSxTQUFTLFdBQVk7QUFDL0IsbUJBQUssWUFBWSxPQUFPLFlBQVksTUFBTTtBQUMxQyxrQkFBSSxDQUFDLGFBQWE7QUFDaEIscUJBQUssWUFBWSxXQUFXO0FBQUEsY0FDOUI7QUFBQSxZQUNGO0FBQ0Esd0JBQVksTUFBTSxNQUFNO0FBSXhCLGdCQUFJLENBQUMsYUFBYTtBQUNoQiwwQkFBWSxNQUFNLFVBQVU7QUFDNUIsbUJBQUssWUFBWSxXQUFXO0FBQUEsWUFDOUI7QUFBQSxVQUNGO0FBQUEsUUFDRixHQUFHO0FBQUEsVUFDRCxLQUFLO0FBQUEsVUFDTCxPQUFPLFNBQVMsT0FBTztBQUNyQixnQkFBSSxRQUFRLEtBQUs7QUFDakIsa0JBQU0sU0FBUztBQUNmLGtCQUFNLFVBQVU7QUFDaEIsa0JBQU0sV0FBVyxZQUFZLEtBQUs7QUFDbEMsaUJBQUssUUFBUTtBQUFBLFVBQ2Y7QUFBQSxRQUNGLEdBQUc7QUFBQSxVQUNELEtBQUs7QUFBQSxVQUNMLE9BQU8sU0FBUyxRQUFRO0FBQ3RCLGdCQUFJLENBQUMsS0FBSyxTQUFTLEtBQUssT0FBTztBQUM3QjtBQUFBLFlBQ0Y7QUFDQSxnQkFBSSxVQUFVLEtBQUssU0FDakIsVUFBVSxLQUFLLFNBQ2YsUUFBUSxLQUFLO0FBR2YsZ0JBQUksWUFBWSxRQUFRO0FBQ3hCLGdCQUFJLFdBQVcsU0FBUyxjQUFjLEtBQUs7QUFDM0MscUJBQVMsWUFBWTtBQUNyQixnQkFBSSxVQUFVLFNBQVMsY0FBYyxJQUFJLE9BQU8sV0FBVyxZQUFZLENBQUM7QUFDeEUsZ0JBQUksU0FBUyxRQUFRLGNBQWMsSUFBSSxPQUFPLFdBQVcsU0FBUyxDQUFDO0FBQ25FLGdCQUFJLFVBQVUsUUFBUSxjQUFjLElBQUksT0FBTyxXQUFXLFdBQVcsQ0FBQztBQUN0RSxnQkFBSSxVQUFVLFFBQVEsY0FBYyxJQUFJLE9BQU8sV0FBVyxXQUFXLENBQUM7QUFDdEUsZ0JBQUksT0FBTyxRQUFRLGNBQWMsSUFBSSxPQUFPLFdBQVcsT0FBTyxDQUFDO0FBQy9ELGlCQUFLLFlBQVk7QUFDakIsaUJBQUssVUFBVTtBQUNmLGlCQUFLLFNBQVM7QUFDZCxpQkFBSyxVQUFVO0FBQ2YsaUJBQUssVUFBVTtBQUNmLGlCQUFLLFVBQVUsUUFBUSxjQUFjLElBQUksT0FBTyxXQUFXLFdBQVcsQ0FBQztBQUN2RSxpQkFBSyxPQUFPO0FBQ1osbUJBQU8sWUFBWSxLQUFLO0FBR3hCLHFCQUFTLFNBQVMsWUFBWTtBQUc5QixzQkFBVSxhQUFhLFNBQVMsUUFBUSxXQUFXO0FBR25ELHdCQUFZLE9BQU8sVUFBVTtBQUM3QixpQkFBSyxZQUFZO0FBQ2pCLGlCQUFLLEtBQUs7QUFDVixvQkFBUSxxQkFBcUIsS0FBSyxJQUFJLEdBQUcsUUFBUSxrQkFBa0IsS0FBSztBQUN4RSxvQkFBUSxjQUFjLEtBQUssSUFBSSxHQUFHLFFBQVEsV0FBVyxLQUFLO0FBQzFELG9CQUFRLFdBQVcsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLFFBQVEsUUFBUSxDQUFDLENBQUMsS0FBSztBQUM3RSxxQkFBUyxTQUFTLFlBQVk7QUFDOUIsZ0JBQUksQ0FBQyxRQUFRLFFBQVE7QUFDbkIsdUJBQVMsUUFBUSx1QkFBdUIsR0FBRyxPQUFPLFdBQVcsU0FBUyxDQUFDLEdBQUcsWUFBWTtBQUFBLFlBQ3hGO0FBQ0EsZ0JBQUksQ0FBQyxRQUFRLFFBQVE7QUFDbkIsdUJBQVMsUUFBUSx1QkFBdUIsR0FBRyxPQUFPLFdBQVcsU0FBUyxDQUFDLEdBQUcsWUFBWTtBQUFBLFlBQ3hGO0FBQ0EsZ0JBQUksUUFBUSxZQUFZO0FBQ3RCLHVCQUFTLFNBQVMsR0FBRyxPQUFPLFdBQVcsS0FBSyxDQUFDO0FBQUEsWUFDL0M7QUFDQSxnQkFBSSxDQUFDLFFBQVEsV0FBVztBQUN0Qix1QkFBUyxNQUFNLGVBQWU7QUFBQSxZQUNoQztBQUNBLGdCQUFJLFFBQVEsZ0JBQWdCO0FBQzFCLHVCQUFTLE1BQU0sVUFBVTtBQUN6QixzQkFBUSxNQUFNLGFBQWEsVUFBVTtBQUFBLFlBQ3ZDO0FBQ0EsZ0JBQUksQ0FBQyxRQUFRLGtCQUFrQjtBQUM3Qix1QkFBUyxRQUFRLHVCQUF1QixHQUFHLE9BQU8sV0FBVyxPQUFPLENBQUMsR0FBRyxZQUFZO0FBQ3BGLHVCQUFTLFFBQVEsdUJBQXVCLEdBQUcsT0FBTyxXQUFXLFFBQVEsQ0FBQyxHQUFHLFlBQVk7QUFBQSxZQUN2RjtBQUNBLGlCQUFLLE9BQU87QUFDWixpQkFBSyxRQUFRO0FBQ2IsaUJBQUssWUFBWSxRQUFRLFFBQVE7QUFDakMsZ0JBQUksUUFBUSxVQUFVO0FBQ3BCLG1CQUFLLEtBQUs7QUFBQSxZQUNaO0FBQ0EsaUJBQUssUUFBUSxRQUFRLElBQUk7QUFDekIsZ0JBQUksV0FBVyxRQUFRLEtBQUssR0FBRztBQUM3QiwwQkFBWSxTQUFTLGFBQWEsUUFBUSxPQUFPO0FBQUEsZ0JBQy9DLE1BQU07QUFBQSxjQUNSLENBQUM7QUFBQSxZQUNIO0FBQ0EsMEJBQWMsU0FBUyxXQUFXO0FBQUEsVUFDcEM7QUFBQSxRQUNGLEdBQUc7QUFBQSxVQUNELEtBQUs7QUFBQSxVQUNMLE9BQU8sU0FBUyxVQUFVO0FBQ3hCLGdCQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2Y7QUFBQSxZQUNGO0FBQ0EsaUJBQUssUUFBUTtBQUNiLGlCQUFLLE9BQU87QUFDWixpQkFBSyxhQUFhO0FBQ2xCLGdCQUFJLGFBQWEsS0FBSyxRQUFRO0FBQzlCLGdCQUFJLFlBQVk7QUFDZCx5QkFBVyxZQUFZLEtBQUssT0FBTztBQUFBLFlBQ3JDO0FBQ0Esd0JBQVksS0FBSyxTQUFTLFlBQVk7QUFBQSxVQUN4QztBQUFBLFFBQ0YsR0FBRztBQUFBLFVBQ0QsS0FBSztBQUFBLFVBQ0wsT0FBTyxTQUFTLFdBQVc7QUFDekIsZ0JBQUksS0FBSyxPQUFPO0FBQ2QsbUJBQUssUUFBUTtBQUNiLG1CQUFLLFFBQVE7QUFDYixtQkFBSyxVQUFVO0FBQUEsWUFDakIsV0FBVyxLQUFLLFFBQVE7QUFDdEIsbUJBQUssWUFBWSxTQUFTO0FBQzFCLG1CQUFLLFNBQVM7QUFDZCxtQkFBSyxRQUFRO0FBQUEsWUFDZixXQUFXLEtBQUssV0FBVztBQUN6QixtQkFBSyxJQUFJLFVBQVU7QUFDbkIsbUJBQUssSUFBSSxNQUFNO0FBQUEsWUFDakIsV0FBVyxLQUFLLE9BQU87QUFDckIsbUJBQUssS0FBSztBQUFBLFlBQ1o7QUFBQSxVQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1GLENBQUMsR0FBRyxDQUFDO0FBQUEsVUFDSCxLQUFLO0FBQUEsVUFDTCxPQUFPLFNBQVMsYUFBYTtBQUMzQixtQkFBTyxVQUFVO0FBQ2pCLG1CQUFPVztBQUFBLFVBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTUYsR0FBRztBQUFBLFVBQ0QsS0FBSztBQUFBLFVBQ0wsT0FBTyxTQUFTLFlBQVksU0FBUztBQUNuQyxZQUFBWCxRQUFPLFVBQVUsY0FBYyxPQUFPLEtBQUssT0FBTztBQUFBLFVBQ3BEO0FBQUEsUUFDRixDQUFDLENBQUM7QUFBQSxNQUNKLEdBQUU7QUFDRixNQUFBQSxRQUFPVyxTQUFRLFdBQVdOLFNBQVEsU0FBUyxRQUFRLFVBQVUsUUFBUSxPQUFPO0FBRTVFLGFBQU9NO0FBQUEsSUFFVCxFQUFFO0FBQUE7QUFBQTs7O0FDeHNHRixTQUFTLE9BQU8sa0JBQWtCO0FBRWxDLE1BQU8saUJBQWlCO0FBQUEsRUFDdEIsU0FBUztBQUFBLElBQ1AsQ0FBQyxTQUFVLEdBQUk7QUFDYixZQUFNLElBQUksR0FBRyxRQUFRLFFBQVMsR0FBSTtBQUNsQyxVQUFLLENBQUUsS0FBSyxFQUFFLFdBQVcsWUFBWSxFQUFFLFdBQVcsRUFBRSxRQUFVO0FBQzlELFFBQUUsZUFBZTtBQUNqQixhQUFPLFNBQVMsT0FBTyxFQUFFO0FBQUEsSUFDM0I7QUFBQSxFQUNGO0FBQ0YsQ0FBRTs7O0FDWEYsU0FBUyxTQUFBRSxRQUFPLGNBQUFDLG1CQUFrQjs7O0FDQWxDLFNBQVMscUJBQXNCLEtBQUs7QUFDbEMsTUFBSSxPQUFPLFFBQVEsWUFBWSxDQUFDLEtBQUs7QUFDbkMsVUFBTSxJQUFJLE1BQU0sdUNBQXVDLEdBQUc7QUFBQSxFQUM1RDtBQUNGO0FBRUEsU0FBUyxhQUFjLFFBQVE7QUFDN0IsTUFBSSxPQUFPLFdBQVcsVUFBVTtBQUM5QixVQUFNLElBQUksTUFBTSw2QkFBNkIsTUFBTTtBQUFBLEVBQ3JEO0FBQ0Y7QUFFQSxJQUFNLHFCQUFxQjtBQUMzQixJQUFNLHFCQUFxQjtBQUMzQixJQUFNLGNBQWM7QUFDcEIsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxrQkFBa0I7QUFDeEIsSUFBTSxlQUFlO0FBQ3JCLElBQU0sZUFBZTtBQUNyQixJQUFNLGdCQUFnQjtBQUN0QixJQUFNLGNBQWM7QUFDcEIsSUFBTSxjQUFjO0FBQ3BCLElBQU0sY0FBYztBQUNwQixJQUFNLHdCQUF3QjtBQUM5QixJQUFNLFdBQVc7QUFDakIsSUFBTSxVQUFVO0FBQ2hCLElBQU0seUJBQXlCO0FBQy9CLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0saUJBQWlCO0FBQ3ZCLElBQU0scUJBQXFCO0FBQzNCLElBQU0scUJBQXFCO0FBRTNCLElBQU0sc0JBQXNCO0FBQzVCLElBQU0saUJBQWlCO0FBR3ZCLFNBQVMsT0FBUSxLQUFLLE1BQU07QUFDMUIsUUFBTUMsT0FBTSxvQkFBSSxJQUFJO0FBQ3BCLFFBQU0sTUFBTSxDQUFDO0FBQ2IsYUFBVyxRQUFRLEtBQUs7QUFDdEIsVUFBTSxNQUFNLEtBQUssSUFBSTtBQUNyQixRQUFJLENBQUNBLEtBQUksSUFBSSxHQUFHLEdBQUc7QUFDakIsTUFBQUEsS0FBSSxJQUFJLEdBQUc7QUFDWCxVQUFJLEtBQUssSUFBSTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBRUEsU0FBUyxVQUFXLFFBQVE7QUFDMUIsU0FBTyxPQUFPLFFBQVEsT0FBSyxFQUFFLE9BQU87QUFDdEM7QUFFQSxTQUFTLGlCQUFrQixJQUFJO0FBQzdCLFdBQVMsa0JBQW1CLE1BQU0sU0FBUyxTQUFTO0FBQ2xELFVBQU1DLFVBQVEsVUFDVixHQUFHLGtCQUFrQixNQUFNLEVBQUUsUUFBUSxDQUFDLElBQ3RDLEdBQUcsa0JBQWtCLElBQUk7QUFDN0IsUUFBSSxTQUFTO0FBQ1gsaUJBQVcsQ0FBQyxXQUFXLENBQUNDLFVBQVMsVUFBVSxDQUFDLEtBQUssT0FBTyxRQUFRLE9BQU8sR0FBRztBQUN4RSxRQUFBRCxRQUFNLFlBQVksV0FBV0MsVUFBUyxFQUFFLFdBQVcsQ0FBQztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUNBLFdBQU9EO0FBQUEsRUFDVDtBQUVBLG9CQUFrQixjQUFjO0FBQ2hDO0FBQUEsSUFBa0I7QUFBQTtBQUFBLElBQTJCO0FBQUEsSUFBZTtBQUFBLE1BQzFELENBQUMsWUFBWSxHQUFHO0FBQUEsUUFBQztBQUFBO0FBQUEsUUFBK0I7QUFBQSxNQUFJO0FBQUEsTUFDcEQsQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsYUFBYSxXQUFXLENBQUM7QUFBQSxNQUNwRCxDQUFDLGtCQUFrQixHQUFHO0FBQUEsUUFBQztBQUFBO0FBQUEsUUFBcUM7QUFBQSxNQUFJO0FBQUEsSUFDbEU7QUFBQSxFQUFDO0FBQ0Qsb0JBQWtCLGlCQUFpQixRQUFXO0FBQUEsSUFDNUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO0FBQUEsRUFDcEIsQ0FBQztBQUNIO0FBRUEsSUFBTSx3QkFBd0IsQ0FBQztBQUMvQixJQUFNLGdCQUFnQixDQUFDO0FBQ3ZCLElBQU0sbUJBQW1CLENBQUM7QUFFMUIsU0FBUyxzQkFBdUIsU0FBUyxRQUFRLEtBQUs7QUFHcEQsTUFBSSxVQUFVLE1BQU0sT0FBTyxJQUFJLEtBQUs7QUFFcEMsTUFBSSxZQUFZLE1BQU0sT0FBTyxJQUFJLE1BQU0sYUFBYSxDQUFDO0FBQ3JELE1BQUksWUFBWSxNQUFNLFFBQVEsSUFBSSxNQUFNO0FBQzFDO0FBRUEsZUFBZSxlQUFnQixRQUFRO0FBQ3JDLFFBQU0sS0FBSyxNQUFNLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUNoRCxVQUFNLE1BQU0sVUFBVSxLQUFLLFFBQVEsa0JBQWtCO0FBQ3JELDBCQUFzQixNQUFNLElBQUk7QUFDaEMsUUFBSSxrQkFBa0IsT0FBSztBQU16QixVQUFJLEVBQUUsYUFBYSxvQkFBb0I7QUFDckMseUJBQWlCLElBQUksTUFBTTtBQUFBLE1BQzdCO0FBQUEsSUFDRjtBQUNBLDBCQUFzQixTQUFTLFFBQVEsR0FBRztBQUFBLEVBQzVDLENBQUM7QUFJRCxLQUFHLFVBQVUsTUFBTSxjQUFjLE1BQU07QUFDdkMsU0FBTztBQUNUO0FBRUEsU0FBUyxhQUFjLFFBQVE7QUFDN0IsTUFBSSxDQUFDLGNBQWMsTUFBTSxHQUFHO0FBQzFCLGtCQUFjLE1BQU0sSUFBSSxlQUFlLE1BQU07QUFBQSxFQUMvQztBQUNBLFNBQU8sY0FBYyxNQUFNO0FBQzdCO0FBRUEsU0FBUyxVQUFXLElBQUksV0FBVyxxQkFBcUIsSUFBSTtBQUMxRCxTQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUd0QyxVQUFNLE1BQU0sR0FBRyxZQUFZLFdBQVcscUJBQXFCLEVBQUUsWUFBWSxVQUFVLENBQUM7QUFDcEYsVUFBTUEsVUFBUSxPQUFPLGNBQWMsV0FDL0IsSUFBSSxZQUFZLFNBQVMsSUFDekIsVUFBVSxJQUFJLFVBQVEsSUFBSSxZQUFZLElBQUksQ0FBQztBQUMvQyxRQUFJO0FBQ0osT0FBR0EsU0FBTyxLQUFLLENBQUMsV0FBVztBQUN6QixZQUFNO0FBQUEsSUFDUixDQUFDO0FBRUQsUUFBSSxhQUFhLE1BQU0sUUFBUSxHQUFHO0FBRWxDLFFBQUksVUFBVSxNQUFNLE9BQU8sSUFBSSxLQUFLO0FBQUEsRUFDdEMsQ0FBQztBQUNIO0FBRUEsU0FBUyxjQUFlLFFBQVE7QUFFOUIsUUFBTSxNQUFNLHNCQUFzQixNQUFNO0FBQ3hDLFFBQU0sS0FBSyxPQUFPLElBQUk7QUFDdEIsTUFBSSxJQUFJO0FBQ04sT0FBRyxNQUFNO0FBQ1QsVUFBTSxZQUFZLGlCQUFpQixNQUFNO0FBRXpDLFFBQUksV0FBVztBQUNiLGlCQUFXLFlBQVksV0FBVztBQUNoQyxpQkFBUztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFNBQU8sc0JBQXNCLE1BQU07QUFDbkMsU0FBTyxjQUFjLE1BQU07QUFDM0IsU0FBTyxpQkFBaUIsTUFBTTtBQUNoQztBQUVBLFNBQVMsZUFBZ0IsUUFBUTtBQUMvQixTQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUV0QyxrQkFBYyxNQUFNO0FBQ3BCLFVBQU0sTUFBTSxVQUFVLGVBQWUsTUFBTTtBQUMzQywwQkFBc0IsU0FBUyxRQUFRLEdBQUc7QUFBQSxFQUM1QyxDQUFDO0FBQ0g7QUFLQSxTQUFTLG1CQUFvQixRQUFRLFVBQVU7QUFDN0MsTUFBSSxZQUFZLGlCQUFpQixNQUFNO0FBQ3ZDLE1BQUksQ0FBQyxXQUFXO0FBQ2QsZ0JBQVksaUJBQWlCLE1BQU0sSUFBSSxDQUFDO0FBQUEsRUFDMUM7QUFDQSxZQUFVLEtBQUssUUFBUTtBQUN6QjtBQUtBLElBQU0scUJBQXFCLG9CQUFJLElBQUk7QUFBQSxFQUNqQztBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFBTztBQUFBLEVBQ25CO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFDbEI7QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFBQSxFQUNsQjtBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQ2xCO0FBQUEsRUFBTTtBQUFBLEVBQU87QUFBQSxFQUFNO0FBQUEsRUFDbkI7QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQU87QUFBQSxFQUNuQjtBQUFBLEVBQU87QUFBQSxFQUFNO0FBQUEsRUFBUTtBQUFBLEVBQ3JCO0FBQ0YsQ0FBQztBQUVELFNBQVMsY0FBZSxLQUFLO0FBQzNCLFNBQU8sSUFDSixNQUFNLFFBQVEsRUFDZCxJQUFJLFVBQVE7QUFDWCxRQUFJLENBQUMsS0FBSyxNQUFNLElBQUksS0FBSyxtQkFBbUIsSUFBSSxJQUFJLEdBQUc7QUFFckQsYUFBTyxLQUFLLFlBQVk7QUFBQSxJQUMxQjtBQUVBLFdBQU8sS0FDSixRQUFRLFdBQVcsRUFBRSxFQUNyQixRQUFRLE1BQU0sR0FBRyxFQUNqQixZQUFZO0FBQUEsRUFDakIsQ0FBQyxFQUFFLE9BQU8sT0FBTztBQUNyQjtBQUVBLElBQU0seUJBQXlCO0FBTy9CLFNBQVMsZ0JBQWlCLEtBQUs7QUFDN0IsU0FBTyxJQUNKLE9BQU8sT0FBTyxFQUNkLElBQUksT0FBSyxFQUFFLFlBQVksQ0FBQyxFQUN4QixPQUFPLE9BQUssRUFBRSxVQUFVLHNCQUFzQjtBQUNuRDtBQUdBLFNBQVMsbUJBQW9CLFdBQVc7QUFDdEMsUUFBTSxNQUFNLFVBQVUsSUFBSSxDQUFDLEVBQUUsWUFBWSxVQUFVLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxPQUFPLFFBQVEsTUFBTTtBQUM3RyxVQUFNLFNBQVMsQ0FBQyxHQUFHLElBQUk7QUFBQSxNQUNyQixnQkFBZ0I7QUFBQSxRQUNkLElBQUksY0FBYyxDQUFDLEdBQUcsSUFBSSxhQUFhLEVBQUUsS0FBSztBQUFBLFFBQzlDLElBQUksUUFBUSxDQUFDLEdBQUcsSUFBSSxhQUFhLEVBQUUsS0FBSztBQUFBLFFBQ3hDLEdBQUcsY0FBYyxVQUFVO0FBQUEsUUFDM0I7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNILENBQUMsRUFBRSxLQUFLO0FBQ1IsVUFBTUUsT0FBTTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFDQSxRQUFJLFVBQVU7QUFDWixNQUFBQSxLQUFJLFdBQVc7QUFBQSxJQUNqQjtBQUNBLFFBQUksWUFBWTtBQUNkLE1BQUFBLEtBQUksYUFBYTtBQUFBLElBQ25CO0FBQ0EsUUFBSSxPQUFPO0FBQ1QsTUFBQUEsS0FBSSxZQUFZLENBQUM7QUFDakIsTUFBQUEsS0FBSSxlQUFlLENBQUM7QUFDcEIsTUFBQUEsS0FBSSxlQUFlLENBQUM7QUFDcEIsaUJBQVcsRUFBRSxNQUFNLE9BQUFDLFFBQU8sU0FBQUMsU0FBUSxLQUFLLE9BQU87QUFDNUMsUUFBQUYsS0FBSSxVQUFVLEtBQUssSUFBSTtBQUN2QixRQUFBQSxLQUFJLGFBQWEsS0FBS0MsTUFBSztBQUMzQixRQUFBRCxLQUFJLGFBQWEsS0FBS0UsUUFBTztBQUFBLE1BQy9CO0FBQUEsSUFDRjtBQUNBLFdBQU9GO0FBQUEsRUFDVCxDQUFDO0FBQ0QsU0FBTztBQUNUO0FBSUEsU0FBUyxVQUFXRixTQUFPLFFBQVEsS0FBSyxJQUFJO0FBQzFDLEVBQUFBLFFBQU0sTUFBTSxFQUFFLEdBQUcsRUFBRSxZQUFZLE9BQU0sTUFBTSxHQUFHLEVBQUUsT0FBTyxNQUFNO0FBQy9EO0FBRUEsU0FBUyxPQUFRQSxTQUFPLEtBQUssSUFBSTtBQUMvQixZQUFVQSxTQUFPLE9BQU8sS0FBSyxFQUFFO0FBQ2pDO0FBRUEsU0FBUyxVQUFXQSxTQUFPLEtBQUssSUFBSTtBQUNsQyxZQUFVQSxTQUFPLFVBQVUsS0FBSyxFQUFFO0FBQ3BDO0FBRUEsU0FBUyxPQUFRLEtBQUs7QUFFcEIsTUFBSSxJQUFJLFFBQVE7QUFDZCxRQUFJLE9BQU87QUFBQSxFQUNiO0FBQ0Y7QUFHQSxTQUFTLE1BQU8sT0FBTyxNQUFNO0FBQzNCLE1BQUksVUFBVSxNQUFNLENBQUM7QUFDckIsV0FBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxVQUFNLE9BQU8sTUFBTSxDQUFDO0FBQ3BCLFFBQUksS0FBSyxPQUFPLElBQUksS0FBSyxJQUFJLEdBQUc7QUFDOUIsZ0JBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQUtBLFNBQVMsa0JBQW1CLFFBQVEsWUFBWTtBQUM5QyxRQUFNLGdCQUFnQixNQUFNLFFBQVEsT0FBSyxFQUFFLE1BQU07QUFDakQsUUFBTSxVQUFVLENBQUM7QUFDakIsYUFBVyxRQUFRLGVBQWU7QUFFaEMsUUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFTLE1BQU0sVUFBVSxPQUFLLFdBQVcsQ0FBQyxNQUFNLFdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHO0FBQzFGLGNBQVEsS0FBSyxJQUFJO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBRUEsZUFBZSxRQUFTLElBQUk7QUFDMUIsU0FBTyxDQUFFLE1BQU0sSUFBSSxJQUFJLGdCQUFnQixPQUFPO0FBQ2hEO0FBRUEsZUFBZSxRQUFTLElBQUksS0FBSyxNQUFNO0FBQ3JDLFFBQU0sQ0FBQyxTQUFTLE1BQU0sSUFBSSxNQUFNLFFBQVEsSUFBSSxDQUFDLFVBQVUsT0FBTyxFQUMzRCxJQUFJLFNBQU8sSUFBSSxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUMzQyxTQUFRLFlBQVksUUFBUSxXQUFXO0FBQ3pDO0FBRUEsZUFBZSxrQ0FBbUMsSUFBSSxXQUFXO0FBZS9ELFFBQU0sYUFBYTtBQUNuQixTQUFPLFVBQVUsSUFBSSxhQUFhLGVBQWUsQ0FBQyxZQUFZLEtBQUssT0FBTztBQUN4RSxRQUFJO0FBRUosVUFBTSxtQkFBbUIsTUFBTTtBQUM3QixpQkFBVyxPQUFPLFdBQVcsWUFBWSxXQUFXLFNBQVMsSUFBSSxHQUFHLFVBQVUsRUFBRSxZQUFZLE9BQUs7QUFDL0YsY0FBTSxVQUFVLEVBQUUsT0FBTztBQUN6QixtQkFBVyxVQUFVLFNBQVM7QUFDNUIsb0JBQVUsT0FBTztBQUNqQixjQUFJLFVBQVUsTUFBTSxHQUFHO0FBQ3JCLG1CQUFPLEdBQUcsTUFBTTtBQUFBLFVBQ2xCO0FBQUEsUUFDRjtBQUNBLFlBQUksUUFBUSxTQUFTLFlBQVk7QUFDL0IsaUJBQU8sR0FBRztBQUFBLFFBQ1o7QUFDQSx5QkFBaUI7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFDQSxxQkFBaUI7QUFBQSxFQUNuQixDQUFDO0FBQ0g7QUFFQSxlQUFlLFNBQVUsSUFBSSxXQUFXLEtBQUssTUFBTTtBQUNqRCxNQUFJO0FBQ0YsVUFBTSxrQkFBa0IsbUJBQW1CLFNBQVM7QUFDcEQsVUFBTSxVQUFVLElBQUksQ0FBQyxhQUFhLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksU0FBUyxHQUFHLFFBQVE7QUFDbkcsVUFBSTtBQUNKLFVBQUk7QUFDSixVQUFJLE9BQU87QUFFWCxlQUFTLGVBQWdCO0FBQ3ZCLFlBQUksRUFBRSxTQUFTLEdBQUc7QUFDaEIsb0JBQVU7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUVBLGVBQVMsWUFBYTtBQUNwQixZQUFJLFlBQVksUUFBUSxXQUFXLEtBQUs7QUFFdEM7QUFBQSxRQUNGO0FBRUEsbUJBQVcsTUFBTTtBQUVqQixtQkFBVyxRQUFRLGlCQUFpQjtBQUNsQyxxQkFBVyxJQUFJLElBQUk7QUFBQSxRQUNyQjtBQUNBLGtCQUFVLElBQUksTUFBTSxRQUFRO0FBQzVCLGtCQUFVLElBQUksS0FBSyxPQUFPO0FBQzFCLGVBQU8sR0FBRztBQUFBLE1BQ1o7QUFFQSxhQUFPLFdBQVcsVUFBVSxZQUFVO0FBQ3BDLGtCQUFVO0FBQ1YscUJBQWE7QUFBQSxNQUNmLENBQUM7QUFFRCxhQUFPLFdBQVcsU0FBUyxZQUFVO0FBQ25DLGlCQUFTO0FBQ1QscUJBQWE7QUFBQSxNQUNmLENBQUM7QUFBQSxJQUNILENBQUM7QUFBQSxFQUNILFVBQUU7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxlQUFlLGdCQUFpQixJQUFJLE9BQU87QUFDekMsU0FBTyxVQUFVLElBQUksYUFBYSxlQUFlLENBQUMsWUFBWSxLQUFLLE9BQU87QUFDeEUsVUFBTSxRQUFRLFlBQVksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxPQUFPLElBQUk7QUFDdkUsY0FBVSxXQUFXLE1BQU0scUJBQXFCLEdBQUcsT0FBTyxFQUFFO0FBQUEsRUFDOUQsQ0FBQztBQUNIO0FBRUEsZUFBZSxzQkFBdUIsSUFBSSxPQUFPO0FBQy9DLFFBQU0sU0FBUyxnQkFBZ0IsY0FBYyxLQUFLLENBQUM7QUFFbkQsTUFBSSxDQUFDLE9BQU8sUUFBUTtBQUNsQixXQUFPLENBQUM7QUFBQSxFQUNWO0FBRUEsU0FBTyxVQUFVLElBQUksYUFBYSxlQUFlLENBQUMsWUFBWSxLQUFLLE9BQU87QUFFeEUsVUFBTSxzQkFBc0IsQ0FBQztBQUU3QixVQUFNLFlBQVksTUFBTTtBQUN0QixVQUFJLG9CQUFvQixXQUFXLE9BQU8sUUFBUTtBQUNoRCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFFQSxVQUFNLFNBQVMsTUFBTTtBQUNuQixZQUFNLFVBQVUsa0JBQWtCLHFCQUFxQixPQUFLLEVBQUUsT0FBTztBQUNyRSxTQUFHLFFBQVEsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEtBQUssQ0FBQyxDQUFDO0FBQUEsSUFDdkQ7QUFFQSxhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUFLO0FBQ3RDLFlBQU0sUUFBUSxPQUFPLENBQUM7QUFDdEIsWUFBTSxRQUFRLE1BQU0sT0FBTyxTQUFTLElBQ2hDLFlBQVksTUFBTSxPQUFPLFFBQVEsVUFBVSxPQUFPLElBQUksSUFDdEQsWUFBWSxLQUFLLEtBQUs7QUFDMUIsZ0JBQVUsV0FBVyxNQUFNLFlBQVksR0FBRyxPQUFPLFlBQVU7QUFDekQsNEJBQW9CLEtBQUssTUFBTTtBQUMvQixrQkFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUlBLGVBQWUsb0JBQXFCLElBQUksV0FBVztBQUNqRCxRQUFNLFNBQVMsTUFBTSxzQkFBc0IsSUFBSSxTQUFTO0FBT3hELE1BQUksQ0FBQyxPQUFPLFFBQVE7QUFDbEIsVUFBTSxZQUFZLFFBQU8sRUFBRSxjQUFjLENBQUMsR0FBRyxTQUFTLFVBQVUsWUFBWSxDQUFDO0FBQzdFLFdBQVEsTUFBTSxrQ0FBa0MsSUFBSSxTQUFTLEtBQU07QUFBQSxFQUNyRTtBQUVBLFNBQU8sT0FBTyxPQUFPLE9BQUs7QUFDeEIsVUFBTSxtQkFBbUIsRUFBRSxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUFLLE9BQUtBLEdBQUUsWUFBWSxDQUFDO0FBQ3JFLFdBQU8sZ0JBQWdCLFNBQVMsVUFBVSxZQUFZLENBQUM7QUFBQSxFQUN6RCxDQUFDLEVBQUUsQ0FBQyxLQUFLO0FBQ1g7QUFFQSxlQUFlLGtCQUFtQixJQUFJLFNBQVM7QUFDN0MsU0FBTyxVQUFVLElBQUksYUFBYSxlQUFlLENBQUMsWUFBWSxLQUFLLE9BQ2pFLE9BQU8sWUFBWSxTQUFTLFlBQVU7QUFDcEMsUUFBSSxRQUFRO0FBQ1YsYUFBTyxHQUFHLE1BQU07QUFBQSxJQUNsQjtBQUNBLFdBQU8sV0FBVyxNQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQUMsWUFBVSxHQUFHQSxXQUFVLElBQUksQ0FBQztBQUFBLEVBQ3BGLENBQUMsQ0FDRjtBQUNIO0FBRUEsU0FBUyxJQUFLLElBQUksV0FBVyxLQUFLO0FBQ2hDLFNBQU8sVUFBVSxJQUFJLFdBQVcsZUFBZSxDQUFDTixTQUFPLEtBQUssT0FDMUQsT0FBT0EsU0FBTyxLQUFLLEVBQUUsQ0FDdEI7QUFDSDtBQUVBLFNBQVMsSUFBSyxJQUFJLFdBQVcsS0FBSyxPQUFPO0FBQ3ZDLFNBQU8sVUFBVSxJQUFJLFdBQVcsZ0JBQWdCLENBQUNBLFNBQU8sUUFBUTtBQUM5RCxJQUFBQSxRQUFNLElBQUksT0FBTyxHQUFHO0FBQ3BCLFdBQU8sR0FBRztBQUFBLEVBQ1osQ0FBQztBQUNIO0FBRUEsU0FBUyw0QkFBNkIsSUFBSSxTQUFTO0FBQ2pELFNBQU8sVUFBVSxJQUFJLGlCQUFpQixnQkFBZ0IsQ0FBQ0EsU0FBTyxRQUM1RCxPQUFPQSxTQUFPLFNBQVMsWUFBVTtBQUMvQixJQUFBQSxRQUFNLEtBQUssVUFBVSxLQUFLLEdBQUcsT0FBTztBQUNwQyxXQUFPLEdBQUc7QUFBQSxFQUNaLENBQUMsQ0FDRjtBQUNIO0FBRUEsU0FBUyxvQkFBcUIsSUFBSU8sbUJBQWtCLE9BQU87QUFDekQsTUFBSSxVQUFVLEdBQUc7QUFDZixXQUFPLENBQUM7QUFBQSxFQUNWO0FBQ0EsU0FBTyxVQUFVLElBQUksQ0FBQyxpQkFBaUIsV0FBVyxHQUFHLGVBQWUsQ0FBQyxDQUFDLGdCQUFnQixVQUFVLEdBQUcsS0FBSyxPQUFPO0FBQzdHLFVBQU0sVUFBVSxDQUFDO0FBQ2pCLG1CQUFlLE1BQU0sV0FBVyxFQUFFLFdBQVcsUUFBVyxNQUFNLEVBQUUsWUFBWSxPQUFLO0FBQy9FLFlBQU0sU0FBUyxFQUFFLE9BQU87QUFDeEIsVUFBSSxDQUFDLFFBQVE7QUFDWCxlQUFPLEdBQUcsT0FBTztBQUFBLE1BQ25CO0FBRUEsZUFBUyxVQUFXLFFBQVE7QUFDMUIsZ0JBQVEsS0FBSyxNQUFNO0FBQ25CLFlBQUksUUFBUSxXQUFXLE9BQU87QUFDNUIsaUJBQU8sR0FBRyxPQUFPO0FBQUEsUUFDbkI7QUFDQSxlQUFPLFNBQVM7QUFBQSxNQUNsQjtBQUVBLFlBQU0sZ0JBQWdCLE9BQU87QUFDN0IsWUFBTSxTQUFTQSxrQkFBaUIsT0FBTyxhQUFhO0FBQ3BELFVBQUksUUFBUTtBQUNWLGVBQU8sVUFBVSxNQUFNO0FBQUEsTUFDekI7QUFHQSxhQUFPLFlBQVksZUFBZSxXQUFTO0FBQ3pDLFlBQUksT0FBTztBQUNULGlCQUFPLFVBQVUsS0FBSztBQUFBLFFBQ3hCO0FBRUEsZUFBTyxTQUFTO0FBQUEsTUFDbEIsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUtBLElBQU0sY0FBYztBQUVwQixTQUFTLEtBQU0sS0FBSyxjQUFjO0FBQ2hDLFFBQU0sTUFBTSxvQkFBSSxJQUFJO0FBQ3BCLGFBQVcsUUFBUSxLQUFLO0FBQ3RCLFVBQU0sU0FBUyxhQUFhLElBQUk7QUFDaEMsZUFBVyxTQUFTLFFBQVE7QUFDMUIsVUFBSSxhQUFhO0FBQ2pCLGVBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsY0FBTSxPQUFPLE1BQU0sT0FBTyxDQUFDO0FBQzNCLFlBQUksVUFBVSxXQUFXLElBQUksSUFBSTtBQUNqQyxZQUFJLENBQUMsU0FBUztBQUNaLG9CQUFVLG9CQUFJLElBQUk7QUFDbEIscUJBQVcsSUFBSSxNQUFNLE9BQU87QUFBQSxRQUM5QjtBQUNBLHFCQUFhO0FBQUEsTUFDZjtBQUNBLFVBQUksZUFBZSxXQUFXLElBQUksV0FBVztBQUM3QyxVQUFJLENBQUMsY0FBYztBQUNqQix1QkFBZSxDQUFDO0FBQ2hCLG1CQUFXLElBQUksYUFBYSxZQUFZO0FBQUEsTUFDMUM7QUFDQSxtQkFBYSxLQUFLLElBQUk7QUFBQSxJQUN4QjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFNBQVMsQ0FBQyxPQUFPLFVBQVU7QUFDL0IsUUFBSSxhQUFhO0FBQ2pCLGFBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsWUFBTSxPQUFPLE1BQU0sT0FBTyxDQUFDO0FBQzNCLFlBQU0sVUFBVSxXQUFXLElBQUksSUFBSTtBQUNuQyxVQUFJLFNBQVM7QUFDWCxxQkFBYTtBQUFBLE1BQ2YsT0FBTztBQUNMLGVBQU8sQ0FBQztBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBRUEsUUFBSSxPQUFPO0FBQ1QsWUFBTUMsV0FBVSxXQUFXLElBQUksV0FBVztBQUMxQyxhQUFPQSxZQUFXLENBQUM7QUFBQSxJQUNyQjtBQUVBLFVBQU0sVUFBVSxDQUFDO0FBRWpCLFVBQU0sUUFBUSxDQUFDLFVBQVU7QUFDekIsV0FBTyxNQUFNLFFBQVE7QUFDbkIsWUFBTUMsY0FBYSxNQUFNLE1BQU07QUFDL0IsWUFBTSxxQkFBcUIsQ0FBQyxHQUFHQSxZQUFXLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDO0FBQ3hGLGlCQUFXLENBQUMsS0FBSyxLQUFLLEtBQUssb0JBQW9CO0FBQzdDLFlBQUksUUFBUSxhQUFhO0FBQ3ZCLGtCQUFRLEtBQUssR0FBRyxLQUFLO0FBQUEsUUFDdkIsT0FBTztBQUNMLGdCQUFNLEtBQUssS0FBSztBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUVBLFNBQU87QUFDVDtBQUVBLElBQU0saUJBQWlCO0FBQUEsRUFDckI7QUFBQSxFQUNBO0FBQ0Y7QUFFQSxTQUFTLG1CQUFvQixjQUFjO0FBQ3pDLFFBQU0sVUFBVSxnQkFBZ0IsTUFBTSxRQUFRLFlBQVk7QUFDMUQsUUFBTSxvQkFBb0IsV0FDeEIsYUFBYSxXQUNaLENBQUMsYUFBYSxDQUFDLEtBQUssZUFBZSxLQUFLLFNBQU8sRUFBRSxPQUFPLGFBQWEsQ0FBQyxFQUFFO0FBQzNFLE1BQUksQ0FBQyxXQUFXLG1CQUFtQjtBQUNqQyxVQUFNLElBQUksTUFBTSx1Q0FBdUM7QUFBQSxFQUN6RDtBQUNGO0FBRUEsU0FBUyxpQkFBa0IsY0FBYztBQUN2QyxxQkFBbUIsWUFBWTtBQUUvQixRQUFNLGFBQWEsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLFlBQVksSUFBSSxFQUFFLEtBQUssWUFBWSxJQUFJLEtBQUs7QUFLaEYsUUFBTSxNQUFNLGFBQWEsS0FBSyxVQUFVO0FBS3hDLFFBQU0sZ0JBQWdCLFdBQVM7QUFDN0IsVUFBTVYsT0FBTSxvQkFBSSxJQUFJO0FBQ3BCLFFBQUksTUFBTSxZQUFZO0FBQ3BCLGlCQUFXLGFBQWEsTUFBTSxZQUFZO0FBQ3hDLG1CQUFXLFNBQVMsY0FBYyxTQUFTLEdBQUc7QUFDNUMsVUFBQUEsS0FBSSxJQUFJLEtBQUs7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxXQUFPQTtBQUFBLEVBQ1Q7QUFDQSxRQUFNLGFBQWEsS0FBSyxjQUFjLGFBQWE7QUFDbkQsUUFBTSxxQkFBcUIsT0FBSyxXQUFXLEdBQUcsSUFBSTtBQUNsRCxRQUFNLGlCQUFpQixPQUFLLFdBQVcsR0FBRyxLQUFLO0FBSy9DLFFBQU0sU0FBUyxXQUFTO0FBQ3RCLFVBQU0sU0FBUyxjQUFjLEtBQUs7QUFDbEMsVUFBTSxzQkFBc0IsT0FBTyxJQUFJLENBQUMsT0FBTyxPQUM1QyxJQUFJLE9BQU8sU0FBUyxJQUFJLHFCQUFxQixnQkFBZ0IsS0FBSyxDQUNwRTtBQUNELFdBQU8sa0JBQWtCLHFCQUFxQixPQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssVUFBVTtBQUFBLEVBQzVFO0FBS0EsUUFBTSxtQkFBbUIsb0JBQUksSUFBSTtBQUNqQyxRQUFNLGNBQWMsb0JBQUksSUFBSTtBQUM1QixhQUFXLGVBQWUsY0FBYztBQUN0QyxnQkFBWSxJQUFJLFlBQVksS0FBSyxZQUFZLEdBQUcsV0FBVztBQUMzRCxlQUFXLGFBQWMsWUFBWSxjQUFjLENBQUMsR0FBSTtBQUN0RCx1QkFBaUIsSUFBSSxVQUFVLFlBQVksR0FBRyxXQUFXO0FBQUEsSUFDM0Q7QUFBQSxFQUNGO0FBRUEsUUFBTSxjQUFjLGVBQWEsaUJBQWlCLElBQUksVUFBVSxZQUFZLENBQUM7QUFDN0UsUUFBTSxTQUFTLFVBQVEsWUFBWSxJQUFJLEtBQUssWUFBWSxDQUFDO0FBRXpELFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTSx5QkFBeUIsT0FBTyxvQkFBb0I7QUFJMUQsU0FBUyxXQUFZLE9BQU87QUFDMUIsTUFBSSxDQUFDLE9BQU87QUFDVixXQUFPO0FBQUEsRUFDVDtBQUlBLE1BQUksd0JBQXdCO0FBQzFCLFlBQVEsZ0JBQWdCLEtBQUs7QUFBQSxFQUMvQjtBQUNBLFNBQU8sTUFBTTtBQUNiLE1BQUksTUFBTSxXQUFXO0FBQ25CLFVBQU0sTUFBTSxNQUFNLFVBQVU7QUFDNUIsVUFBTSxRQUFRLE1BQU0sR0FBRztBQUN2QixhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUM1QixZQUFNLE1BQU0sQ0FBQyxJQUFJO0FBQUEsUUFDZixNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQUEsUUFDdkIsU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUFBLFFBQzdCLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFDQSxXQUFPLE1BQU07QUFDYixXQUFPLE1BQU07QUFDYixXQUFPLE1BQU07QUFBQSxFQUNmO0FBQ0EsU0FBTztBQUNUO0FBRUEsU0FBUyxTQUFVLE1BQU07QUFDdkIsTUFBSSxDQUFDLE1BQU07QUFDVCxZQUFRLEtBQUsseUZBQXlGO0FBQUEsRUFDeEc7QUFDRjtBQUVBLElBQU0sZUFBZTtBQUFBLEVBQ25CO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBRUEsU0FBUyxnQkFBaUIsV0FBVztBQUNuQyxNQUFJLENBQUMsYUFDSCxDQUFDLE1BQU0sUUFBUSxTQUFTLEtBQ3hCLENBQUMsVUFBVSxDQUFDLEtBQ1gsT0FBTyxVQUFVLENBQUMsTUFBTSxZQUN6QixhQUFhLEtBQUssU0FBUSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUcsR0FBRztBQUNwRCxVQUFNLElBQUksTUFBTSxtQ0FBbUM7QUFBQSxFQUNyRDtBQUNGO0FBRUEsU0FBUyxhQUFjLFVBQVUsWUFBWTtBQUMzQyxNQUFJLEtBQUssTUFBTSxTQUFTLFNBQVMsR0FBRyxNQUFNLEdBQUc7QUFDM0MsVUFBTSxJQUFJLE1BQU0sc0JBQXNCLGFBQWEsUUFBUSxTQUFTLE1BQU07QUFBQSxFQUM1RTtBQUNGO0FBRUEsZUFBZSxRQUFTLFlBQVk7QUFDbEMsUUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLEVBQUUsUUFBUSxPQUFPLENBQUM7QUFDM0QsZUFBYSxVQUFVLFVBQVU7QUFDakMsUUFBTSxPQUFPLFNBQVMsUUFBUSxJQUFJLE1BQU07QUFDeEMsV0FBUyxJQUFJO0FBQ2IsU0FBTztBQUNUO0FBRUEsZUFBZSxlQUFnQixZQUFZO0FBQ3pDLFFBQU0sV0FBVyxNQUFNLE1BQU0sVUFBVTtBQUN2QyxlQUFhLFVBQVUsVUFBVTtBQUNqQyxRQUFNLE9BQU8sU0FBUyxRQUFRLElBQUksTUFBTTtBQUN4QyxXQUFTLElBQUk7QUFDYixRQUFNLFlBQVksTUFBTSxTQUFTLEtBQUs7QUFDdEMsa0JBQWdCLFNBQVM7QUFDekIsU0FBTyxDQUFDLE1BQU0sU0FBUztBQUN6QjtBQWlCQSxTQUFTLDBCQUEwQixRQUFRO0FBQ3ZDLE1BQUksU0FBUztBQUNiLE1BQUksUUFBUSxJQUFJLFdBQVcsTUFBTTtBQUNqQyxNQUFJLFNBQVMsTUFBTTtBQUNuQixNQUFJLElBQUk7QUFDUixTQUFPLEVBQUUsSUFBSSxRQUFRO0FBQ2pCLGNBQVUsT0FBTyxhQUFhLE1BQU0sQ0FBQyxDQUFDO0FBQUEsRUFDMUM7QUFDQSxTQUFPO0FBQ1g7QUFXQSxTQUFTLDBCQUEwQixRQUFRO0FBQ3ZDLE1BQUksU0FBUyxPQUFPO0FBQ3BCLE1BQUksTUFBTSxJQUFJLFlBQVksTUFBTTtBQUNoQyxNQUFJLE1BQU0sSUFBSSxXQUFXLEdBQUc7QUFDNUIsTUFBSSxJQUFJO0FBQ1IsU0FBTyxFQUFFLElBQUksUUFBUTtBQUNqQixRQUFJLENBQUMsSUFBSSxPQUFPLFdBQVcsQ0FBQztBQUFBLEVBQ2hDO0FBQ0EsU0FBTztBQUNYO0FBR0EsZUFBZSxhQUFjLFFBQVE7QUFDbkMsUUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNO0FBQ3RDLE1BQUksV0FBVywwQkFBMEIsUUFBUTtBQUdqRCxRQUFNLFlBQVksTUFBTSxPQUFPLE9BQU8sT0FBTyxTQUFTLFFBQVE7QUFDOUQsUUFBTSxlQUFlLDBCQUEwQixTQUFTO0FBQ3hELFFBQU0sTUFBTSxLQUFLLFlBQVk7QUFDN0IsU0FBTztBQUNUO0FBRUEsZUFBZSxrQkFBbUIsSUFBSSxZQUFZO0FBRWhELE1BQUk7QUFDSixNQUFJLE9BQU8sTUFBTSxRQUFRLFVBQVU7QUFDbkMsTUFBSSxDQUFDLE1BQU07QUFDVCxVQUFNLGNBQWMsTUFBTSxlQUFlLFVBQVU7QUFDbkQsV0FBTyxZQUFZLENBQUM7QUFDcEIsZ0JBQVksWUFBWSxDQUFDO0FBQ3pCLFFBQUksQ0FBQyxNQUFNO0FBQ1QsYUFBTyxNQUFNLGFBQWEsU0FBUztBQUFBLElBQ3JDO0FBQUEsRUFDRjtBQUNBLE1BQUksTUFBTSxRQUFRLElBQUksWUFBWSxJQUFJLEVBQUc7QUFBQSxPQUFPO0FBQzlDLFFBQUksQ0FBQyxXQUFXO0FBQ2QsWUFBTSxjQUFjLE1BQU0sZUFBZSxVQUFVO0FBQ25ELGtCQUFZLFlBQVksQ0FBQztBQUFBLElBQzNCO0FBQ0EsVUFBTSxTQUFTLElBQUksV0FBVyxZQUFZLElBQUk7QUFBQSxFQUNoRDtBQUNGO0FBRUEsZUFBZSxxQkFBc0IsSUFBSSxZQUFZO0FBQ25ELE1BQUksQ0FBQyxNQUFNLFNBQVMsSUFBSSxNQUFNLGVBQWUsVUFBVTtBQUN2RCxNQUFJLENBQUMsTUFBTTtBQUdULFdBQU8sTUFBTSxhQUFhLFNBQVM7QUFBQSxFQUNyQztBQUVBLFFBQU0sU0FBUyxJQUFJLFdBQVcsWUFBWSxJQUFJO0FBQ2hEO0FBRUEsZUFBZSxnQkFBaUIsSUFBSSxZQUFZO0FBQzlDLE1BQUk7QUFDRixVQUFNLGtCQUFrQixJQUFJLFVBQVU7QUFBQSxFQUN4QyxTQUFTLEtBQUs7QUFNWixRQUFJLElBQUksU0FBUyxxQkFBcUI7QUFDcEMsWUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFNLFdBQU4sTUFBZTtBQUFBLEVBQ2IsWUFBYSxFQUFFLGFBQWEscUJBQXFCLFNBQVMsZ0JBQWdCLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ2pHLFNBQUssYUFBYTtBQUNsQixTQUFLLFNBQVM7QUFDZCxTQUFLLFVBQVUsd0JBQXdCLEtBQUssTUFBTTtBQUNsRCxTQUFLLE1BQU07QUFDWCxTQUFLLGNBQWM7QUFDbkIsU0FBSyxVQUFVLGlCQUFpQixXQUFXO0FBRTNDLFNBQUssU0FBUyxLQUFLLE9BQU8sS0FBSyxJQUFJO0FBQ25DLFNBQUssU0FBUyxLQUFLLE1BQU07QUFBQSxFQUMzQjtBQUFBLEVBRUEsTUFBTSxRQUFTO0FBQ2IsVUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLGFBQWEsS0FBSyxPQUFPO0FBRXJELHVCQUFtQixLQUFLLFNBQVMsS0FBSyxNQUFNO0FBQzVDLFVBQU0sYUFBYSxLQUFLO0FBQ3hCLFVBQU0sUUFBUSxNQUFNLFFBQVEsRUFBRTtBQUU5QixRQUFJLE9BQU87QUFDVCxZQUFNLHFCQUFxQixJQUFJLFVBQVU7QUFBQSxJQUMzQyxPQUFPO0FBQ0wsV0FBSyxjQUFjLGdCQUFnQixJQUFJLFVBQVU7QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0sUUFBUztBQUNiLFVBQU0sYUFBYSxZQUFZO0FBQzdCLFVBQUksQ0FBQyxLQUFLLFFBQVE7QUFDaEIsYUFBSyxTQUFTLEtBQUssTUFBTTtBQUFBLE1BQzNCO0FBQ0EsYUFBTyxLQUFLO0FBQUEsSUFDZDtBQUNBLFVBQU0sV0FBVztBQUlqQixRQUFJLENBQUMsS0FBSyxLQUFLO0FBQ2IsWUFBTSxXQUFXO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNLGdCQUFpQixPQUFPO0FBQzVCLGlCQUFhLEtBQUs7QUFDbEIsVUFBTSxLQUFLLE1BQU07QUFDakIsV0FBTyxVQUFVLE1BQU0sZ0JBQWdCLEtBQUssS0FBSyxLQUFLLENBQUMsRUFBRSxJQUFJLFVBQVU7QUFBQSxFQUN6RTtBQUFBLEVBRUEsTUFBTSxzQkFBdUIsT0FBTztBQUNsQyx5QkFBcUIsS0FBSztBQUMxQixVQUFNLEtBQUssTUFBTTtBQUNqQixVQUFNLFVBQVUsS0FBSyxRQUFRLE9BQU8sS0FBSztBQUN6QyxVQUFNLFVBQVUsVUFBVSxNQUFNLHNCQUFzQixLQUFLLEtBQUssS0FBSyxDQUFDLEVBQUUsSUFBSSxVQUFVO0FBQ3RGLFdBQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILEdBQUc7QUFBQSxJQUNMO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSxvQkFBcUIsV0FBVztBQUNwQyx5QkFBcUIsU0FBUztBQUM5QixVQUFNLEtBQUssTUFBTTtBQUNqQixVQUFNLFNBQVMsS0FBSyxRQUFRLFlBQVksU0FBUztBQUNqRCxRQUFJLFFBQVE7QUFDVixhQUFPO0FBQUEsSUFDVDtBQUNBLFdBQU8sV0FBVyxNQUFNLG9CQUFvQixLQUFLLEtBQUssU0FBUyxDQUFDO0FBQUEsRUFDbEU7QUFBQSxFQUVBLE1BQU0sd0JBQXlCLGVBQWU7QUFDNUMseUJBQXFCLGFBQWE7QUFDbEMsVUFBTSxLQUFLLE1BQU07QUFDakIsVUFBTSxTQUFTLEtBQUssUUFBUSxPQUFPLGFBQWE7QUFDaEQsUUFBSSxRQUFRO0FBQ1YsYUFBTztBQUFBLElBQ1Q7QUFDQSxXQUFPLFdBQVcsTUFBTSxrQkFBa0IsS0FBSyxLQUFLLGFBQWEsQ0FBQztBQUFBLEVBQ3BFO0FBQUEsRUFFQSxNQUFNLHVCQUF3QjtBQUM1QixVQUFNLEtBQUssTUFBTTtBQUNqQixXQUFRLE1BQU0sSUFBSSxLQUFLLEtBQUssZ0JBQWdCLHNCQUFzQixLQUFNO0FBQUEsRUFDMUU7QUFBQSxFQUVBLE1BQU0scUJBQXNCLFVBQVU7QUFDcEMsaUJBQWEsUUFBUTtBQUNyQixVQUFNLEtBQUssTUFBTTtBQUNqQixXQUFPLElBQUksS0FBSyxLQUFLLGdCQUFnQix3QkFBd0IsUUFBUTtBQUFBLEVBQ3ZFO0FBQUEsRUFFQSxNQUFNLDRCQUE2QixlQUFlO0FBQ2hELHlCQUFxQixhQUFhO0FBQ2xDLFVBQU0sS0FBSyxNQUFNO0FBQ2pCLFdBQU8sNEJBQTRCLEtBQUssS0FBSyxhQUFhO0FBQUEsRUFDNUQ7QUFBQSxFQUVBLE1BQU0sb0JBQXFCLE9BQU87QUFDaEMsaUJBQWEsS0FBSztBQUNsQixVQUFNLEtBQUssTUFBTTtBQUNqQixZQUFRLE1BQU0sb0JBQW9CLEtBQUssS0FBSyxLQUFLLFNBQVMsS0FBSyxHQUFHLElBQUksVUFBVTtBQUFBLEVBQ2xGO0FBQUEsRUFFQSxJQUFJLFlBQWEsY0FBYztBQUM3QixTQUFLLFVBQVUsaUJBQWlCLFlBQVk7QUFBQSxFQUM5QztBQUFBLEVBRUEsSUFBSSxjQUFlO0FBQ2pCLFdBQU8sS0FBSyxRQUFRO0FBQUEsRUFDdEI7QUFBQSxFQUVBLE1BQU0sWUFBYTtBQUNqQixVQUFNLEtBQUssTUFBTTtBQUNqQixRQUFJO0FBQ0YsWUFBTSxLQUFLO0FBQUEsSUFDYixTQUFTLEtBQUs7QUFBQSxJQUE4QztBQUFBLEVBQzlEO0FBQUE7QUFBQSxFQUdBLFNBQVU7QUFLUixTQUFLLE1BQU0sS0FBSyxTQUFTLEtBQUssY0FBYztBQUFBLEVBQzlDO0FBQUEsRUFFQSxNQUFNLFFBQVM7QUFDYixVQUFNLEtBQUssVUFBVTtBQUNyQixVQUFNLGNBQWMsS0FBSyxPQUFPO0FBQUEsRUFDbEM7QUFBQSxFQUVBLE1BQU0sU0FBVTtBQUNkLFVBQU0sS0FBSyxVQUFVO0FBQ3JCLFVBQU0sZUFBZSxLQUFLLE9BQU87QUFBQSxFQUNuQztBQUNGOzs7QUN0K0JBLElBQU0sWUFBWTtBQUFBLEVBQ2hCLENBQUMsSUFBSSxVQUFLLFFBQVE7QUFBQSxFQUNsQixDQUFDLEdBQUcsYUFBTSxpQkFBaUI7QUFBQSxFQUMzQixDQUFDLEdBQUcsYUFBTSxhQUFhO0FBQUEsRUFDdkIsQ0FBQyxHQUFHLGFBQU0sZ0JBQWdCO0FBQUEsRUFDMUIsQ0FBQyxHQUFHLGFBQU0sWUFBWTtBQUFBLEVBQ3RCLENBQUMsR0FBRyxtQkFBTyxlQUFlO0FBQUEsRUFDMUIsQ0FBQyxHQUFHLFVBQUssWUFBWTtBQUFBLEVBQ3JCLENBQUMsR0FBRyxhQUFNLFNBQVM7QUFBQSxFQUNuQixDQUFDLEdBQUcsZ0JBQU0sU0FBUztBQUFBLEVBQ25CLENBQUMsR0FBRyxhQUFNLE9BQU87QUFDbkIsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxPQUFPLEVBQUUsSUFBSSxPQUFPLEtBQUssRUFBRTtBQUVsRCxJQUFNLFNBQVMsVUFBVSxNQUFNLENBQUM7QUFFaEMsSUFBTVcsMEJBQXlCO0FBQy9CLElBQU0saUJBQWlCO0FBR3ZCLElBQU0sTUFBTSxPQUFPLHdCQUF3QixhQUFhLHNCQUFzQjtBQUc5RSxTQUFTLE9BQVEsT0FBTztBQUN0QixTQUFPLE1BQU0sUUFBUSxTQUFTLFFBQVE7QUFDeEM7QUFXQSxJQUFNLHVCQUF1QjtBQUFBLEVBQzNCLGFBQU07QUFBQTtBQUFBLEVBQ04sYUFBTTtBQUFBO0FBQUEsRUFDTixhQUFNO0FBQUE7QUFBQSxFQUNOLGFBQU07QUFBQSxFQUNOLGFBQU07QUFBQTtBQUFBLEVBQ04sYUFBTTtBQUFBO0FBQUEsRUFDTixhQUFNO0FBQUEsRUFDTixhQUFNO0FBQUEsRUFDTiwrQkFBUztBQUFBLEVBQ1QsYUFBTTtBQUFBLEVBQ04sd0NBQVc7QUFBQSxFQUNYLGFBQU07QUFBQSxFQUNOLG1CQUFPO0FBQUEsRUFDUCxhQUFNO0FBQ1I7QUFFQSxJQUFNLGlDQUFpQztBQUN2QyxJQUFNLDBCQUEwQjtBQUNoQyxJQUFNLHNCQUFzQjtBQU01QixJQUFNLDJCQUEyQjtBQUFBLEVBQy9CO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBT0EsSUFBTSxjQUFjO0FBSXBCLElBQU0sMkJBQTJCLENBQUMsR0FBRyxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJO0FBUXBFLElBQU0saUJBQWlCLENBQUMsTUFBTSxVQUFVO0FBQ3RDLFFBQU0sU0FBUyxTQUFTLGNBQWMsUUFBUTtBQUM5QyxTQUFPLFFBQVEsT0FBTyxTQUFTO0FBRS9CLFFBQU0sTUFBTSxPQUFPLFdBQVcsTUFBTTtBQUFBO0FBQUE7QUFBQSxJQUdsQyxvQkFBb0I7QUFBQSxFQUN0QixDQUFDO0FBQ0QsTUFBSSxlQUFlO0FBQ25CLE1BQUksT0FBTyxTQUFTLFdBQVc7QUFDL0IsTUFBSSxZQUFZO0FBQ2hCLE1BQUksTUFBTSxNQUFNLElBQUk7QUFDcEIsTUFBSSxTQUFTLE1BQU0sR0FBRyxDQUFDO0FBRXZCLFNBQU8sSUFBSSxhQUFhLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRTtBQUN0QztBQUVBLElBQU0sa0JBQWtCLENBQUMsVUFBVSxhQUFhO0FBQzlDLFFBQU0sY0FBYyxDQUFDLEdBQUcsUUFBUSxFQUFFLEtBQUssR0FBRztBQUMxQyxRQUFNLGNBQWMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxLQUFLLEdBQUc7QUFJMUMsU0FBTyxnQkFBZ0IsZUFBZSxDQUFDLFlBQVksV0FBVyxRQUFRO0FBQ3hFO0FBRUEsU0FBUyx3QkFBeUIsTUFBTTtBQUd0QyxRQUFNLFdBQVcsZUFBZSxNQUFNLE1BQU07QUFDNUMsUUFBTSxXQUFXLGVBQWUsTUFBTSxNQUFNO0FBQzVDLFNBQU8sWUFBWSxZQUFZLGdCQUFnQixVQUFVLFFBQVE7QUFDbkU7QUFLQSxTQUFTLDZCQUE4QjtBQUNyQyxRQUFNLFVBQVUsT0FBTyxRQUFRLG9CQUFvQjtBQUNuRCxNQUFJO0FBRUYsZUFBVyxDQUFDLE9BQU8sT0FBTyxLQUFLLFNBQVM7QUFDdEMsVUFBSSx3QkFBd0IsS0FBSyxHQUFHO0FBQ2xDLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0YsU0FBUyxHQUFHO0FBQUEsRUFDWixVQUFFO0FBQUEsRUFDRjtBQUdBLFNBQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUNyQjtBQUdBLElBQUk7QUFDSixJQUFNLDBCQUEwQixNQUFNO0FBQ3BDLE1BQUksQ0FBQyxTQUFTO0FBSVosY0FBVSxJQUFJLFFBQVEsYUFDcEIsSUFBSSxNQUNGLFFBQVEsMkJBQTJCLENBQUMsQ0FDckMsQ0FDRjtBQUFBLEVBQ0g7QUFDQSxTQUFPO0FBQ1Q7QUFHQSxJQUFNLHFCQUFxQixvQkFBSSxJQUFJO0FBRW5DLElBQU0scUJBQXFCO0FBQzNCLElBQU0sb0JBQW9CO0FBQzFCLElBQU0sTUFBTTtBQUNaLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0sMkJBQTJCO0FBS2pDLFNBQVMsY0FBZSxLQUFLLFVBQVU7QUFDckMsTUFBSSxhQUFhLEdBQUc7QUFDbEIsV0FBTztBQUFBLEVBQ1Q7QUFDQSxRQUFNLFdBQVcsSUFBSSxRQUFRLEdBQUc7QUFDaEMsTUFBSSxhQUFhLElBQUk7QUFDbkIsV0FBTyxJQUFJLFVBQVUsR0FBRyxRQUFRLElBQzlCLE9BQU8sY0FBYyxrQkFBa0IsV0FBVyxDQUFDLElBQ25ELElBQUksVUFBVSxRQUFRO0FBQUEsRUFDMUI7QUFDQSxNQUFJLElBQUksU0FBUyxrQkFBa0IsR0FBRztBQUNwQyxVQUFNLElBQUksVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDO0FBQUEsRUFDdkM7QUFDQSxTQUFPLE1BQU0sb0JBQW9CLE9BQU8sY0FBYywyQkFBMkIsV0FBVyxDQUFDO0FBQy9GO0FBRUEsU0FBUyxLQUFNLE9BQU87QUFDcEIsUUFBTSxlQUFlO0FBQ3JCLFFBQU0sZ0JBQWdCO0FBQ3hCO0FBSUEsU0FBUyxxQkFBc0IsV0FBVyxLQUFLLEtBQUs7QUFDbEQsU0FBUSxZQUFZLEtBQUs7QUFDekIsTUFBSSxNQUFNLEdBQUc7QUFDWCxVQUFNLElBQUksU0FBUztBQUFBLEVBQ3JCLFdBQVcsT0FBTyxJQUFJLFFBQVE7QUFDNUIsVUFBTTtBQUFBLEVBQ1I7QUFDQSxTQUFPO0FBQ1Q7QUFHQSxTQUFTQyxRQUFRLEtBQUssTUFBTTtBQUMxQixRQUFNQyxPQUFNLG9CQUFJLElBQUk7QUFDcEIsUUFBTSxNQUFNLENBQUM7QUFDYixhQUFXLFFBQVEsS0FBSztBQUN0QixVQUFNLE1BQU0sS0FBSyxJQUFJO0FBQ3JCLFFBQUksQ0FBQ0EsS0FBSSxJQUFJLEdBQUcsR0FBRztBQUNqQixNQUFBQSxLQUFJLElBQUksR0FBRztBQUNYLFVBQUksS0FBSyxJQUFJO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUFLQSxTQUFTLHFCQUFzQixRQUFRLG1CQUFtQjtBQUN4RCxRQUFNLG1CQUFtQixXQUFTO0FBQ2hDLFVBQU0sTUFBTSxDQUFDO0FBQ2IsZUFBVyxRQUFRLE9BQU87QUFJeEIsVUFBSSxPQUFPLEtBQUssU0FBUyxZQUFZLEtBQUssV0FBVyxtQkFBbUI7QUFDdEUsWUFBSSxLQUFLLElBQUksSUFBSSxLQUFLO0FBQUEsTUFDeEI7QUFBQSxJQUNGO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFFQSxTQUFPLE9BQU8sSUFBSSxDQUFDLEVBQUUsU0FBUyxPQUFPLFlBQVksS0FBSyxNQUFNLFVBQVUsV0FBVyxPQUFPO0FBQUEsSUFDdEY7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsSUFBSSxXQUFXO0FBQUEsSUFDZixPQUFPLFNBQVMsaUJBQWlCLEtBQUs7QUFBQSxFQUN4QyxFQUFFO0FBQ0o7QUFHQSxJQUFNLE1BQU07QUFNWixJQUFJLDBCQUEwQixPQUFPLG1CQUFtQjtBQUV4RCxTQUFTLHFCQUFzQixNQUFNLGFBQWEsVUFBVTtBQUMxRCxNQUFJO0FBQ0osTUFBSSx5QkFBeUI7QUFDM0IscUJBQWlCLElBQUksZUFBZSxRQUFRO0FBQzVDLG1CQUFlLFFBQVEsSUFBSTtBQUFBLEVBQzdCLE9BQU87QUFDTCxRQUFJLFFBQVE7QUFBQSxFQUNkO0FBR0EsY0FBWSxpQkFBaUIsU0FBUyxNQUFNO0FBQzFDLFFBQUksZ0JBQWdCO0FBQ2xCLHFCQUFlLFdBQVc7QUFBQSxJQUM1QjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBR0EsU0FBUyxtQkFBb0IsTUFBTTtBQUdqQztBQUNFLFVBQU0sUUFBUSxTQUFTLFlBQVk7QUFDbkMsVUFBTSxXQUFXLEtBQUssVUFBVTtBQUNoQyxXQUFPLE1BQU0sc0JBQXNCLEVBQUU7QUFBQSxFQUN2QztBQUNGO0FBRUEsSUFBTSxpQkFBaUI7QUFFdkIsSUFBSTtBQUNKLElBQUk7QUFFSixTQUFTLCtCQUFnQyxTQUFTLFNBQVMsbUJBQW1CO0FBQzVFLFFBQU0sU0FBUyxtQkFBbUIsT0FBTztBQUV6QyxNQUFJLENBQUMsUUFBUTtBQUlYLFFBQUksQ0FBQyxjQUFjO0FBQ2pCLHFCQUFlLGtCQUFrQixVQUFVLElBQUk7QUFHL0MsWUFBTSxTQUFTLGlCQUFpQixpQkFBaUI7QUFFakQsaUJBQVcsUUFBUSxDQUFDLGVBQWUsZUFBZSxTQUFTLFVBQVUsYUFBYSxXQUFXLGVBQWUsaUJBQWlCLEdBQUc7QUFFOUgscUJBQWEsTUFBTSxZQUFZLE1BQU0sT0FBTyxpQkFBaUIsSUFBSSxHQUFHLFdBQVc7QUFBQSxNQUNqRjtBQUFBLElBQ0Y7QUFDQSxRQUFJO0FBQ0YsZUFBUyxLQUFLLFlBQVksWUFBWTtBQUN0QyxtQkFBYSxXQUFXLFlBQVk7QUFDcEMsYUFBTyxtQkFBbUIsWUFBWTtBQUFBLElBQ3hDLFVBQUU7QUFFQSxtQkFBYSxPQUFPO0FBQUEsSUFDdEI7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBU0EsU0FBUyxnQkFBaUIsa0JBQWtCLG1CQUFtQixnQkFBZ0I7QUFDN0UsTUFBSSxlQUFlO0FBQ25CLGFBQVcsU0FBUyxrQkFBa0I7QUFDcEMsVUFBTSxVQUFVLGVBQWUsS0FBSztBQUdwQyxRQUFJLENBQUMsU0FBUztBQUlaO0FBQUEsSUFDRjtBQUNBLFFBQUksT0FBTyx1QkFBdUIsYUFBYTtBQUM3QywyQkFBcUIsK0JBQStCLGdCQUFnQixtQkFBbUIsaUJBQWlCO0FBQUEsSUFDMUc7QUFDQSxVQUFNLGFBQWEsK0JBQStCLE1BQU0sU0FBUyxTQUFTLGlCQUFpQjtBQUszRixVQUFNLFlBQVksYUFBYSxNQUFNO0FBQ3JDLHVCQUFtQixJQUFJLE1BQU0sU0FBUyxTQUFTO0FBRS9DLFFBQUksQ0FBQyxXQUFXO0FBQ2QscUJBQWU7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUFJQSxTQUFTLEtBQU0sS0FBSztBQUNsQixTQUFPRCxRQUFPLEtBQUssT0FBSyxDQUFDO0FBQzNCO0FBT0EsU0FBUyx5QkFBMEIsU0FBUztBQUUxQyxNQUFJLFNBQVM7QUFDWCxZQUFRLFlBQVk7QUFBQSxFQUN0QjtBQUNGO0FBRUEsU0FBUyxXQUFZLE9BQU8sS0FBSyxNQUFNO0FBQ3JDLE1BQUksU0FBUyxNQUFNLElBQUksR0FBRztBQUMxQixNQUFJLENBQUMsUUFBUTtBQUNYLGFBQVMsS0FBSztBQUNkLFVBQU0sSUFBSSxLQUFLLE1BQU07QUFBQSxFQUN2QjtBQUNBLFNBQU87QUFDVDtBQUVBLFNBQVMsU0FBVSxPQUFPO0FBQ3hCLFNBQU8sS0FBSztBQUNkO0FBRUEsU0FBUyxjQUFlLFlBQVk7QUFDbEMsUUFBTSxXQUFXLFNBQVMsY0FBYyxVQUFVO0FBQ2xELFdBQVMsWUFBWTtBQUNyQixTQUFPO0FBQ1Q7QUFFQSxJQUFNLGFBQWEsb0JBQUksUUFBUTtBQUMvQixJQUFNLG9CQUFvQixvQkFBSSxRQUFRO0FBRXRDLElBQU0sZ0JBQWdCLHVCQUFPLFVBQVU7QUFHdkMsSUFBTSxxQkFBcUIscUJBQXFCLFFBQVE7QUFDeEQsU0FBUyxnQkFBaUIsWUFBWSxhQUFhO0FBRWpELE1BQUksb0JBQW9CO0FBQ3RCLGVBQVcsZ0JBQWdCLEdBQUcsV0FBVztBQUFBLEVBQzNDLE9BQU87QUFDTCxlQUFXLFlBQVk7QUFDdkIsZUFBVyxPQUFPLEdBQUcsV0FBVztBQUFBLEVBQ2xDO0FBQ0Y7QUFFQSxTQUFTLHVCQUF3QixZQUFZLGFBQWE7QUFDeEQsTUFBSSxXQUFXLFdBQVc7QUFDMUIsTUFBSSxtQkFBbUI7QUFFdkIsU0FBTyxVQUFVO0FBQ2YsVUFBTSxXQUFXLFlBQVksZ0JBQWdCO0FBRTdDLFFBQUksYUFBYSxVQUFVO0FBQ3pCLGFBQU87QUFBQSxJQUNUO0FBQ0EsZUFBVyxTQUFTO0FBQ3BCO0FBQUEsRUFDRjtBQUVBLFNBQU8scUJBQXFCLFlBQVk7QUFDMUM7QUFFQSxTQUFTLGNBQWUsYUFBYSxpQkFBaUI7QUFDcEQsUUFBTSxFQUFFLFdBQVcsSUFBSTtBQUN2QixNQUFJLEVBQUUsaUJBQWlCLElBQUk7QUFFM0IsTUFBSSxnQkFBZ0I7QUFFcEIsTUFBSSxrQkFBa0I7QUFDcEIsb0JBQWdCLHVCQUF1QixrQkFBa0IsV0FBVztBQUFBLEVBQ3RFLE9BQU87QUFDTCxvQkFBZ0I7QUFDaEIsb0JBQWdCLGFBQWE7QUFDN0Isb0JBQWdCLG1CQUFtQixtQkFBbUIsV0FBVztBQUFBLEVBQ25FO0FBRUEsTUFBSSxlQUFlO0FBQ2pCLG9CQUFnQixrQkFBa0IsV0FBVztBQUFBLEVBQy9DO0FBQ0Y7QUFFQSxTQUFTLE1BQU8sYUFBYSxrQkFBa0I7QUFDN0MsYUFBVyxtQkFBbUIsa0JBQWtCO0FBQzlDLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRixJQUFJO0FBRUosVUFBTSxhQUFhLFlBQVksZUFBZTtBQUU5QyxRQUFJLHNCQUFzQixZQUFZO0FBRXBDO0FBQUEsSUFDRjtBQUVBLG9CQUFnQixvQkFBb0I7QUFFcEMsUUFBSSxlQUFlO0FBQ2pCLFVBQUksZUFBZSxNQUFNO0FBRXZCLG1CQUFXLGdCQUFnQixhQUFhO0FBQUEsTUFDMUMsT0FBTztBQUVMLGNBQU0sV0FBVyxvQkFBb0IsU0FBUyxVQUFVLElBQUk7QUFDNUQsbUJBQVcsYUFBYSxlQUFlLFFBQVE7QUFBQSxNQUNqRDtBQUFBLElBQ0YsT0FBTztBQUNMLFVBQUk7QUFDSixVQUFJLE1BQU0sUUFBUSxVQUFVLEdBQUc7QUFDN0Isc0JBQWMsWUFBWSxlQUFlO0FBQUEsTUFDM0MsV0FBVyxzQkFBc0IsU0FBUztBQUN4QyxrQkFBVTtBQUNWLG1CQUFXLFlBQVksT0FBTztBQUFBLE1BQ2hDLE9BQU87QUFHTCxtQkFBVyxZQUFZLFNBQVMsVUFBVTtBQUFBLE1BQzVDO0FBQ0EsVUFBSSxTQUFTO0FBQ1gsd0JBQWdCLGFBQWE7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxTQUFTLE1BQU8sUUFBUTtBQUN0QixNQUFJLGFBQWE7QUFFakIsTUFBSSxZQUFZO0FBQ2hCLE1BQUksa0JBQWtCO0FBQ3RCLE1BQUksc0JBQXNCO0FBRTFCLFFBQU0scUJBQXFCLG9CQUFJLElBQUk7QUFDbkMsUUFBTSxpQkFBaUIsQ0FBQztBQUV4QixNQUFJLGlCQUFpQjtBQUNyQixXQUFTLElBQUksR0FBRyxNQUFNLE9BQU8sUUFBUSxJQUFJLEtBQUssS0FBSztBQUNqRCxVQUFNLFFBQVEsT0FBTyxDQUFDO0FBQ3RCLGtCQUFjLE1BQU0sTUFBTSxjQUFjO0FBRXhDLFFBQUksTUFBTSxNQUFNLEdBQUc7QUFDakI7QUFBQSxJQUNGO0FBRUEsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxZQUFNLE9BQU8sTUFBTSxPQUFPLENBQUM7QUFDM0IsY0FBUSxNQUFNO0FBQUEsUUFDWixLQUFLLEtBQUs7QUFDUixnQkFBTSxXQUFXLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbkMsY0FBSSxhQUFhLEtBQUs7QUFFcEIsMkJBQWUsSUFBSTtBQUFBLFVBQ3JCLE9BQU87QUFDTCx3QkFBWTtBQUNaLDJCQUFlLEtBQUssRUFBRSxtQkFBbUI7QUFBQSxVQUMzQztBQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsS0FBSyxLQUFLO0FBQ1Isc0JBQVk7QUFDWiw0QkFBa0I7QUFDbEI7QUFBQSxRQUNGO0FBQUEsUUFDQSxLQUFLLEtBQUs7QUFDUiw0QkFBa0I7QUFDbEI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFQSxVQUFNLGVBQWUsZUFBZSxlQUFlLFNBQVMsQ0FBQztBQUM3RCxVQUFNLFdBQVcsV0FBVyxvQkFBb0IsY0FBYyxNQUFNLENBQUMsQ0FBQztBQUV0RSxRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJLGlCQUFpQjtBQUVuQixZQUFNLG9CQUFvQixvQkFBb0IsS0FBSyxLQUFLO0FBQ3hELHNCQUFnQixrQkFBa0IsQ0FBQztBQUNuQywwQkFBb0Isa0JBQWtCLENBQUM7QUFDdkMsWUFBTSxxQkFBcUIsZ0JBQWdCLEtBQUssT0FBTyxJQUFJLENBQUMsQ0FBQztBQUM3RCwyQkFBcUIsbUJBQW1CLENBQUM7QUFHekMsbUJBQWEsV0FBVyxNQUFNLEdBQUcsS0FBSyxrQkFBa0IsQ0FBQyxFQUFFLE1BQU07QUFDakUsdUJBQWlCLG1CQUFtQixDQUFDLEVBQUU7QUFBQSxJQUN6QyxPQUFPO0FBQ0wsdUJBQWlCO0FBQUEsSUFDbkI7QUFFQSxVQUFNLFVBQVU7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLGlCQUFpQjtBQUFBLElBQ25CO0FBRUEsYUFBUyxLQUFLLE9BQU87QUFFckIsUUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUI7QUFFbEMsb0JBQWM7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFdBQVcsY0FBYyxVQUFVO0FBRXpDLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRjtBQUVBLFNBQVMsY0FBZSxVQUFVLFNBQVMsa0JBQWtCO0FBQzNELFdBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxRQUFRLEtBQUs7QUFDeEMsVUFBTSxVQUFVLFNBQVMsQ0FBQztBQUUxQixVQUFNLGFBQWEsUUFBUSxnQkFDdkIsVUFDQSxRQUFRO0FBRVosVUFBTSxrQkFBa0I7QUFBQSxNQUN0QjtBQUFBLE1BQ0E7QUFBQSxNQUNBLGtCQUFrQjtBQUFBLE1BQ2xCLG1CQUFtQjtBQUFBLElBQ3JCO0FBRUEscUJBQWlCLEtBQUssZUFBZTtBQUFBLEVBQ3ZDO0FBQ0Y7QUFFQSxTQUFTLHlCQUEwQixhQUFhLG9CQUFvQjtBQUNsRSxRQUFNLG1CQUFtQixDQUFDO0FBRTFCLE1BQUk7QUFDSixNQUFJLG1CQUFtQixTQUFTLE1BQU0sbUJBQW1CLG1CQUFtQixJQUFJLENBQUMsSUFBSTtBQUduRixrQkFBYyxrQkFBa0IsYUFBYSxnQkFBZ0I7QUFBQSxFQUMvRCxPQUFPO0FBRUwsVUFBTSxhQUFhLFNBQVMsaUJBQWlCLGFBQWEsV0FBVyxZQUFZO0FBRWpGLFFBQUksVUFBVTtBQUNkLFFBQUksZUFBZTtBQUNuQixPQUFHO0FBQ0QsWUFBTSxXQUFXLG1CQUFtQixJQUFJLEVBQUUsWUFBWTtBQUN0RCxVQUFJLFVBQVU7QUFDWixzQkFBYyxVQUFVLFNBQVMsZ0JBQWdCO0FBQUEsTUFDbkQ7QUFBQSxJQUNGLFNBQVUsVUFBVSxXQUFXLFNBQVM7QUFBQSxFQUMxQztBQUVBLFNBQU87QUFDVDtBQUVBLFNBQVMsVUFBVyxRQUFRO0FBRTFCLFFBQU0sRUFBRSxVQUFVLG1CQUFtQixJQUFJLFdBQVcsWUFBWSxRQUFRLE1BQU0sTUFBTSxNQUFNLENBQUM7QUFHM0YsUUFBTSxNQUFNLFNBQVMsVUFBVSxJQUFJLEVBQUUsUUFBUTtBQUM3QyxRQUFNLG1CQUFtQix5QkFBeUIsS0FBSyxrQkFBa0I7QUFFekUsU0FBTyxTQUFTLGtCQUFtQixhQUFhO0FBQzlDLFVBQU0sYUFBYSxnQkFBZ0I7QUFDbkMsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVBLFNBQVMsZ0JBQWlCRSxTQUFPO0FBQy9CLFFBQU0sZUFBZSxXQUFXLG1CQUFtQkEsU0FBTyxNQUFNLG9CQUFJLElBQUksQ0FBQztBQUN6RSxNQUFJLHNCQUFzQjtBQUUxQixXQUFTLEtBQU0sV0FBVyxhQUFhO0FBR3JDLFVBQU0sd0JBQXdCLFdBQVcsY0FBYyxRQUFRLE1BQU0sb0JBQUksSUFBSSxDQUFDO0FBQzlFLFVBQU0sb0JBQW9CLFdBQVcsdUJBQXVCLHFCQUFxQixNQUFNLFVBQVUsTUFBTSxDQUFDO0FBRXhHLFdBQU8sa0JBQWtCLFdBQVc7QUFBQSxFQUN0QztBQUVBLFdBQVMsSUFBSyxPQUFPLFVBQVUsYUFBYTtBQUMxQyxXQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sVUFBVTtBQUNoQyxZQUFNLG1CQUFtQjtBQUN6Qiw0QkFBc0IsWUFBWSxJQUFJO0FBQ3RDLFVBQUk7QUFDRixlQUFPLFNBQVMsTUFBTSxLQUFLO0FBQUEsTUFDN0IsVUFBRTtBQUNBLDhCQUFzQjtBQUFBLE1BQ3hCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUVBLFNBQU8sRUFBRSxLQUFLLEtBQUs7QUFDckI7QUFFQSxTQUFTLE9BQVEsV0FBV0EsU0FBTyxTQUFTLFFBQVFDLFVBQVMsTUFBTSxhQUFhLGVBQWUsYUFBYTtBQUMxRyxRQUFNLEVBQUUsZUFBZSxlQUFlLGdCQUFnQixJQUFJO0FBQzFELFFBQU0sRUFBRSxNQUFNLElBQUksSUFBSSxnQkFBZ0JELE9BQUs7QUFFM0MsV0FBUyxVQUFXLFFBQVEsWUFBWSxRQUFRO0FBQzlDLFdBQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxNQUFNO0FBQy9CLGFBQU8scUJBQXFCLGFBQWEsV0FBVyxVQUFVLG9CQUFvQixhQUFhLE1BQU1BLFFBQU0sbUJBQW1CLElBQUksaUJBQWlCLGNBQWMsT0FBT0EsUUFBTSxlQUFlLENBQUMsWUFBWSxjQUFjLEtBQUssQ0FBQyxZQUNwTixXQUNDLGNBQWMsTUFBTUEsUUFBTSxtQkFBbUIsWUFBWSxPQUN6RCxNQUFNLFVBQVUsS0FBSyxnQkFDeEIsU0FBUyxHQUFHLE1BQU0sSUFBSSxNQUFNLEVBQUUsRUFBRSxZQUFZLE1BQU0sVUFBVSxPQUFPLGtDQUFrQyxLQUFLLFVBQVUsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUN2SSxNQUFNLFVBQ0YsZ0JBQWdCLE9BQU9BLFFBQU0sZUFBZSxJQUM1QyxFQUNOO0FBQUEsSUFHRixHQUFHLFdBQVMsR0FBRyxNQUFNLElBQUksTUFBTSxFQUFFLEVBQUU7QUFBQSxFQUNyQztBQUVBLFFBQU0sVUFBVSxNQUFNO0FBQ3BCLFdBQU8sa0VBQWtFQSxRQUFNLEtBQUssV0FBVyxZQUFZQSxRQUFNLGVBQWUsRUFBRSx1TEFBdUxBLFFBQU0sS0FBSyxXQUFXLCtFQUErRSxDQUFDLEVBQUVBLFFBQU0sY0FBY0EsUUFBTSxjQUFjLE9BQU8sMEhBQTBIQSxRQUFNLHFCQUFxQixPQUFPQSxRQUFNLGtCQUFrQixLQUFLLElBQUksa0lBQWtJQSxRQUFNLEtBQUssV0FBVywwREFBMERBLFFBQU0sS0FBSyxpQkFBaUIsb0RBQW9EQSxRQUFNLHVDQUF1QyxhQUFhLEVBQUUsK0NBQStDQSxRQUFNLHlCQUF5QixlQUFlLEVBQUUsaUJBQWlCQSxRQUFNLG1CQUFtQixZQUFZQSxRQUFNLG1CQUFtQixvRkFBb0ZBLFFBQU0sc0JBQXNCLHlFQUF5RUEsUUFBTSxzQkFBc0IsRUFBRSxrRUFBa0VBLFFBQU0sS0FBSyxtQkFBbUIsOEZBQThGQSxRQUFNLHlCQUF5QixLQUFLLG1CQUFtQixpQ0FBaUNBLFFBQU0seUJBQXlCLElBQUksMkRBQTJELGlDQUFpQ0EsUUFBTSxLQUFLLGNBQWMscUNBQXFDQSxRQUFNLGNBQWMsa0JBQWtCLENBQUNBLFFBQU0sc0JBQXNCLHlMQUN0NEQsSUFBSUEsUUFBTSxXQUFXLENBQUMsVUFBVSxNQUFNO0FBQ3RDLGFBQU8seUJBQXlCLENBQUMsa0JBQWtCLE1BQU1BLFFBQU0saUJBQWlCLFdBQVcsRUFBRSxvQkFBb0IsTUFBTUEsUUFBTSxjQUFjLDBCQUEwQkEsUUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLGlCQUFpQkEsUUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLEtBQUssUUFBUTtBQUFBLElBQ2pQLEdBQUcsY0FBWSxRQUFRLENBQ25CLG1GQUFtRkEsUUFBTSxPQUFPLE1BQU0sc0JBQXNCQSxRQUFNLEtBQUssZUFBZSwrREFDbEosSUFBSUEsUUFBTSxRQUFRLENBQUMsVUFBVTtBQUMzQixhQUFPLGdFQUFnRSxNQUFNLEVBQUUsaUJBQWlCQSxRQUFNLEtBQUssV0FBVyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQ0EsUUFBTSxjQUFjQSxRQUFNLGFBQWEsT0FBTyxNQUFNLEVBQUUsWUFBWUEsUUFBTSxLQUFLLFdBQVcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLE1BQU0sRUFBRSxrQ0FBa0MsTUFBTSxLQUFLO0FBQUEsSUFDcFUsR0FBRyxXQUFTLE1BQU0sRUFBRSxDQUN0QjtBQUFBLEtBQXdIQSxRQUFNLFFBQVEsS0FBSyxLQUFNQSxRQUFNLG9CQUFvQixHQUFHLHVDQUF1Q0EsUUFBTSxVQUFVLEtBQUssTUFBTSxxQ0FBcUNBLFFBQU0sV0FBVyxFQUFFLHlEQUEwRCxDQUFDQSxRQUFNLGtCQUFrQkEsUUFBTSxVQUFXLFNBQVMsRUFBRSxXQUFXQSxRQUFNLGFBQWEsV0FBVyxVQUFVLGlCQUFpQkEsUUFBTSxhQUFhQSxRQUFNLEtBQUsscUJBQXFCQSxRQUFNLEtBQUssV0FBV0EsUUFBTSxhQUFhLElBQUksQ0FBQyxTQUFTQSxRQUFNLGFBQWEsT0FBTyxPQUFPQSxRQUFNLGFBQWEsRUFBRSxFQUFFLDBGQUN6bkIsSUFBSUEsUUFBTSw2QkFBNkIsQ0FBQyxtQkFBbUIsTUFBTTtBQUMvRCxhQUFPLGdDQUFnQyxDQUFDLHFCQUFxQkEsUUFBTSw0QkFBNEIsV0FBVyxLQUFLQSxRQUFNLDRCQUE0QixDQUFDLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSx3QkFDL0tBLFFBQU0sYUFDRkEsUUFBTSxLQUFLLHFCQUVYLGtCQUFrQixXQUNkLGtCQUFrQixXQUVsQkEsUUFBTSw0QkFBNEIsU0FBUyxJQUN2Q0EsUUFBTSxLQUFLLFdBQVcsU0FDdEJBLFFBQU0sS0FBSyxXQUFXQSxRQUFNLGFBQWEsSUFBSSxDQUczRCxnQ0FBZ0MsTUFBTSxLQUFLLENBQUNBLFFBQU0sY0FBY0EsUUFBTSxhQUFhLE9BQU8sS0FBSyxvQkFBb0IsRUFBRSxZQUFZLGVBQWUsS0FBSyxLQUFLLGtCQUFrQixPQUFPLFNBQVNBLFFBQU0sVUFBVSxDQUFDLEVBQUUsOENBQThDQSxRQUFNLGFBQWEsWUFBWSxNQUFNLGlDQUFpQyxDQUFDLFNBQVNBLFFBQU0sYUFBYSxtQkFBbUIsSUFBSSxLQUN6WDtBQUFBLFFBQVUsa0JBQWtCO0FBQUEsUUFBUUEsUUFBTTtBQUFBO0FBQUEsUUFBeUI7QUFBQSxNQUFLLENBQzFFO0FBQUEsSUFDRSxHQUFHLHVCQUFxQixrQkFBa0IsUUFBUSxDQUNwRCx5REFBeURBLFFBQU0sVUFBVSxTQUFTLEVBQUUsNkJBQTZCQSxRQUFNLEtBQUssY0FBYyxrQ0FDMUk7QUFBQSxNQUFVQSxRQUFNO0FBQUE7QUFBQSxNQUFtQztBQUFBO0FBQUEsTUFBb0I7QUFBQSxJQUFLLENBQzlFO0FBQUEsRUFDUjtBQUVBLFFBQU0sVUFBVSxRQUFRO0FBR3hCLFFBQU0sMEJBQTBCLENBQUMsZUFBZSxhQUFhO0FBQzNELGVBQVcsV0FBVyxVQUFVLGlCQUFpQixJQUFJLGFBQWEsR0FBRyxHQUFHO0FBQ3RFLGVBQVMsU0FBUyxRQUFRLGFBQWEsYUFBYSxDQUFDO0FBQUEsSUFDdkQ7QUFBQSxFQUNGO0FBRUEsTUFBSSxhQUFhO0FBQ2YsY0FBVSxZQUFZLE9BQU87QUFLN0IsZUFBVyxhQUFhLENBQUMsU0FBUyxZQUFZLFNBQVMsV0FBVyxPQUFPLEdBQUc7QUFDMUUsOEJBQXdCLFdBQVcsU0FBUyxJQUFJLENBQUMsU0FBUyxpQkFBaUI7QUFDekUsZ0JBQVEsaUJBQWlCLFdBQVcsT0FBTyxZQUFZLENBQUM7QUFBQSxNQUMxRCxDQUFDO0FBQUEsSUFDSDtBQUdBLDRCQUF3QixZQUFZLENBQUMsU0FBUyxRQUFRO0FBQ3BELFdBQUssR0FBRyxJQUFJO0FBQUEsSUFDZCxDQUFDO0FBR0QsZ0JBQVksaUJBQWlCLFNBQVMsTUFBTTtBQUMxQyxnQkFBVSxZQUFZLE9BQU87QUFBQSxJQUMvQixDQUFDO0FBQUEsRUFDSDtBQUdBLDBCQUF3QixlQUFlLENBQUMsU0FBUyxXQUFXO0FBQzFELFFBQUksZUFBZSxjQUFjLElBQUksTUFBTTtBQUMzQyxRQUFJLENBQUMsY0FBYztBQUNqQixvQkFBYyxJQUFJLFFBQVMsZUFBZSxvQkFBSSxRQUFRLENBQUU7QUFBQSxJQUMxRDtBQUdBLFFBQUksQ0FBQyxhQUFhLElBQUksT0FBTyxHQUFHO0FBQzlCLG1CQUFhLElBQUksT0FBTztBQUN4QixNQUFBQyxTQUFRLE1BQU0sRUFBRSxPQUFPO0FBQUEsSUFDekI7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUdBLElBQU0sS0FBSyxPQUFPLG1CQUFtQixhQUFhLGlCQUFpQixjQUFZLFFBQVEsUUFBUSxFQUFFLEtBQUssUUFBUTtBQUU5RyxTQUFTLFlBQWEsYUFBYTtBQUNqQyxNQUFJLFlBQVk7QUFDaEIsTUFBSTtBQUVKLFFBQU0sbUJBQW1CLG9CQUFJLElBQUk7QUFDakMsUUFBTSxpQkFBaUIsb0JBQUksSUFBSTtBQUUvQixNQUFJO0FBRUosUUFBTSxRQUFRLE1BQU07QUFDbEIsUUFBSSxXQUFXO0FBQ2I7QUFBQSxJQUNGO0FBQ0EsVUFBTSxpQkFBaUIsQ0FBQyxHQUFHLGNBQWM7QUFDekMsbUJBQWUsTUFBTTtBQUNyQixRQUFJO0FBQ0YsaUJBQVcsWUFBWSxnQkFBZ0I7QUFDckMsaUJBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRixVQUFFO0FBQ0EsZUFBUztBQUNULFVBQUksZUFBZSxNQUFNO0FBQ3ZCLGlCQUFTO0FBQ1QsV0FBRyxLQUFLO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsUUFBTUQsVUFBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHO0FBQUEsSUFDMUIsSUFBSyxRQUFRLE1BQU07QUFDakIsVUFBSSxpQkFBaUI7QUFDbkIsWUFBSSxZQUFZLGlCQUFpQixJQUFJLElBQUk7QUFDekMsWUFBSSxDQUFDLFdBQVc7QUFDZCxzQkFBWSxvQkFBSSxJQUFJO0FBQ3BCLDJCQUFpQixJQUFJLE1BQU0sU0FBUztBQUFBLFFBQ3RDO0FBQ0Esa0JBQVUsSUFBSSxlQUFlO0FBQUEsTUFDL0I7QUFDQSxhQUFPLE9BQU8sSUFBSTtBQUFBLElBQ3BCO0FBQUEsSUFDQSxJQUFLLFFBQVEsTUFBTSxVQUFVO0FBQzNCLFVBQUksT0FBTyxJQUFJLE1BQU0sVUFBVTtBQUM3QixlQUFPLElBQUksSUFBSTtBQUNmLGNBQU0sWUFBWSxpQkFBaUIsSUFBSSxJQUFJO0FBQzNDLFlBQUksV0FBVztBQUNiLHFCQUFXLFlBQVksV0FBVztBQUNoQywyQkFBZSxJQUFJLFFBQVE7QUFBQSxVQUM3QjtBQUNBLGNBQUksQ0FBQyxRQUFRO0FBQ1gscUJBQVM7QUFDVCxlQUFHLEtBQUs7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0YsQ0FBQztBQUVELFFBQU0sZUFBZSxDQUFDLGFBQWE7QUFDakMsVUFBTSxXQUFXLE1BQU07QUFDckIsWUFBTSxjQUFjO0FBQ3BCLHdCQUFrQjtBQUNsQixVQUFJO0FBQ0YsZUFBTyxTQUFTO0FBQUEsTUFDbEIsVUFBRTtBQUNBLDBCQUFrQjtBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUNBLFdBQU8sU0FBUztBQUFBLEVBQ2xCO0FBR0EsY0FBWSxpQkFBaUIsU0FBUyxNQUFNO0FBQzFDLGdCQUFZO0FBQUEsRUFDZCxDQUFDO0FBRUQsU0FBTztBQUFBLElBQ0wsT0FBQUE7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGO0FBR0EsU0FBUyx5QkFBMEIsTUFBTSxPQUFPLGNBQWM7QUFDNUQsTUFBSSxLQUFLLFdBQVcsTUFBTSxRQUFRO0FBQ2hDLFdBQU87QUFBQSxFQUNUO0FBQ0EsV0FBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxRQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHO0FBQ3BDLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQUVBLElBQU0sNEJBQTRCLG9CQUFJLFFBQVE7QUFFOUMsU0FBUywyQkFBNEIsTUFBTSxhQUFhLFVBQVU7QUFFaEU7QUFFRSxVQUFNLE9BQU8sS0FBSyxRQUFRLFdBQVc7QUFFckMsUUFBSSxXQUFXLDBCQUEwQixJQUFJLElBQUk7QUFDakQsUUFBSSxDQUFDLFVBQVU7QUFJYixpQkFBVyxJQUFJLHFCQUFxQixVQUFVO0FBQUEsUUFDNUM7QUFBQTtBQUFBLFFBRUEsWUFBWTtBQUFBO0FBQUEsUUFFWixXQUFXO0FBQUEsTUFDYixDQUFDO0FBR0QsZ0NBQTBCLElBQUksTUFBTSxRQUFRO0FBRzVDLGtCQUFZLGlCQUFpQixTQUFTLE1BQU07QUFDMUMsaUJBQVMsV0FBVztBQUFBLE1BQ3RCLENBQUM7QUFBQSxJQUNIO0FBRUEsYUFBUyxRQUFRLElBQUk7QUFBQSxFQUN2QjtBQUNGO0FBS0EsSUFBTSxjQUFjLENBQUM7QUFFckIsSUFBTSxFQUFFLE9BQU8sSUFBSTtBQUVuQixTQUFTLFdBQVksWUFBWSxPQUFPO0FBQ3RDLFFBQU0sT0FBTyxDQUFDO0FBQ2QsUUFBTSxrQkFBa0IsSUFBSSxnQkFBZ0I7QUFDNUMsUUFBTSxjQUFjLGdCQUFnQjtBQUNwQyxRQUFNLEVBQUUsT0FBQUEsU0FBTyxhQUFhLElBQUksWUFBWSxXQUFXO0FBQ3ZELFFBQU0sZ0JBQWdCLG9CQUFJLElBQUk7QUFHOUIsU0FBT0EsU0FBTztBQUFBLElBQ1osZUFBZTtBQUFBLElBQ2YsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLElBQ2IsdUJBQXVCO0FBQUEsSUFDdkIsY0FBYztBQUFBLEVBQ2hCLENBQUM7QUFHRCxTQUFPQSxTQUFPLEtBQUs7QUFHbkIsU0FBT0EsU0FBTztBQUFBLElBQ1osYUFBYTtBQUFBLElBQ2IsZUFBZSxDQUFDO0FBQUEsSUFDaEIsNkJBQTZCLENBQUM7QUFBQSxJQUM5QixlQUFlO0FBQUEsSUFDZixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWixrQkFBa0I7QUFBQSxJQUNsQixTQUFTO0FBQUEsSUFDVCx3QkFBd0I7QUFBQSxJQUN4QixzQ0FBc0M7QUFBQSxJQUN0QyxpQkFBaUI7QUFBQSxJQUNqQixnQkFBZ0I7QUFBQSxJQUNoQixvQkFBb0I7QUFBQSxJQUNwQixhQUFhO0FBQUEsSUFDYixxQkFBcUI7QUFBQSxJQUNyQixXQUFXLENBQUM7QUFBQSxJQUNaLGtCQUFrQixDQUFDO0FBQUEsSUFDbkIsdUJBQXVCO0FBQUEsSUFDdkIsWUFBWTtBQUFBLElBQ1osT0FBTztBQUFBLElBQ1AsbUJBQW1CO0FBQUEsSUFDbkI7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLElBQ2hCLG9CQUFvQjtBQUFBLEVBQ3RCLENBQUM7QUFLRCxlQUFhLE1BQU07QUFDakIsUUFBSUEsUUFBTSxpQkFBaUJBLFFBQU0sT0FBT0EsUUFBTSxpQkFBaUIsR0FBRztBQUNoRSxNQUFBQSxRQUFNLGVBQWVBLFFBQU0sT0FBT0EsUUFBTSxpQkFBaUI7QUFBQSxJQUMzRDtBQUFBLEVBQ0YsQ0FBQztBQU1ELFFBQU0sUUFBUSxRQUFNO0FBQ2xCLGVBQVcsZUFBZSxFQUFFLEVBQUUsTUFBTTtBQUFBLEVBQ3RDO0FBRUEsUUFBTSxpQkFBaUIsV0FBUyxXQUFXLGVBQWUsT0FBTyxNQUFNLEVBQUUsRUFBRTtBQUczRSxRQUFNLFlBQVksQ0FBQyxNQUFNLFdBQVc7QUFDbEMsU0FBSyxZQUFZLGNBQWMsSUFBSSxZQUFZLE1BQU07QUFBQSxNQUNuRDtBQUFBLE1BQ0EsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLElBQ1osQ0FBQyxDQUFDO0FBQUEsRUFDSjtBQU1BLFFBQU0scUJBQXFCLENBQUMsR0FBRyxNQUFNLEVBQUUsT0FBTyxFQUFFO0FBRWhELFFBQU0scUNBQXFDLENBQUMsR0FBRyxNQUFNO0FBQ25ELFVBQU0sRUFBRSxVQUFVLFdBQVcsUUFBUSxRQUFRLElBQUk7QUFDakQsVUFBTSxFQUFFLFVBQVUsV0FBVyxRQUFRLFFBQVEsSUFBSTtBQUVqRCxRQUFJLGNBQWMsV0FBVztBQUMzQixhQUFPO0FBQUEsSUFDVDtBQUVBLFdBQU8seUJBQXlCLFNBQVMsU0FBUyxrQkFBa0I7QUFBQSxFQUN0RTtBQU9BLFFBQU0sc0JBQXNCLENBQUMsY0FBYztBQUN6QyxRQUFJLENBQUMseUJBQXlCQSxRQUFNLGVBQWUsV0FBVyxrQkFBa0IsR0FBRztBQUNqRixNQUFBQSxRQUFNLGdCQUFnQjtBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUdBLFFBQU0sbUJBQW1CLENBQUMsa0JBQWtCO0FBQzFDLFFBQUlBLFFBQU0sZUFBZSxlQUFlO0FBQ3RDLE1BQUFBLFFBQU0sYUFBYTtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUdBLFFBQU0sb0NBQW9DLENBQUMsNEJBQTRCO0FBQ3JFLFFBQUksQ0FBQyx5QkFBeUJBLFFBQU0sNkJBQTZCLHlCQUF5QixrQ0FBa0MsR0FBRztBQUM3SCxNQUFBQSxRQUFNLDhCQUE4QjtBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUlBLFFBQU0sa0JBQWtCLENBQUMsT0FBTyxvQkFDN0IsbUJBQW1CLE1BQU0sU0FBUyxNQUFNLE1BQU0sZUFBZSxLQUFNLE1BQU07QUFHNUUsUUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLG9CQUM1QixLQUFLO0FBQUEsSUFDRixNQUFNLFFBQVEsZ0JBQWdCLE9BQU8sZUFBZTtBQUFBLElBQ3JELE1BQU07QUFBQSxJQUNOLEdBQUksTUFBTSxjQUFjO0FBQUEsRUFDMUIsRUFBRSxPQUFPLE9BQU8sQ0FBQyxFQUFFLEtBQUssSUFBSTtBQUc5QixRQUFNLGdCQUFnQixDQUFDLFVBQ3JCLE1BQU0sZUFBZSxNQUFNLGNBQWMsYUFBYSxLQUFLLElBQUk7QUFHakUsUUFBTSxVQUFVO0FBQUEsSUFDZDtBQUFBLElBQWU7QUFBQSxJQUFlO0FBQUEsRUFDaEM7QUFDQSxRQUFNLFNBQVM7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNBLFFBQU1DLFdBQVU7QUFBQSxJQUNkO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFFQSxNQUFJLGNBQWM7QUFDbEIsZUFBYSxNQUFNO0FBQ2pCLFdBQU8sWUFBWUQsU0FBTyxTQUFTLFFBQVFDLFVBQVMsTUFBTSxhQUFhLGVBQWUsV0FBVztBQUNqRyxrQkFBYztBQUFBLEVBQ2hCLENBQUM7QUFPRCxNQUFJLENBQUNELFFBQU0sY0FBYztBQUN2Qiw0QkFBd0IsRUFBRSxLQUFLLFdBQVM7QUFHdEMsVUFBSSxDQUFDLE9BQU87QUFDVixRQUFBQSxRQUFNLFVBQVVBLFFBQU0sS0FBSztBQUFBLE1BQzdCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQU1BLGVBQWEsTUFBTTtBQUVqQixtQkFBZSx3QkFBeUI7QUFDdEMsVUFBSSx3QkFBd0I7QUFDNUIsWUFBTSxnQkFBZ0IsV0FBVyxNQUFNO0FBQ3JDLGdDQUF3QjtBQUN4QixRQUFBQSxRQUFNLFVBQVVBLFFBQU0sS0FBSztBQUFBLE1BQzdCLEdBQUcsOEJBQThCO0FBQ2pDLFVBQUk7QUFDRixjQUFNQSxRQUFNLFNBQVMsTUFBTTtBQUMzQixRQUFBQSxRQUFNLGlCQUFpQjtBQUFBLE1BQ3pCLFNBQVMsS0FBSztBQUNaLGdCQUFRLE1BQU0sR0FBRztBQUNqQixRQUFBQSxRQUFNLFVBQVVBLFFBQU0sS0FBSztBQUFBLE1BQzdCLFVBQUU7QUFDQSxxQkFBYSxhQUFhO0FBQzFCLFlBQUksdUJBQXVCO0FBQ3pCLGtDQUF3QjtBQUN4QixVQUFBQSxRQUFNLFVBQVU7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUEsUUFBSUEsUUFBTSxVQUFVO0FBRWxCLDRCQUFzQjtBQUFBLElBQ3hCO0FBQUEsRUFDRixDQUFDO0FBTUQsZUFBYSxNQUFNO0FBQ2pCLElBQUFBLFFBQU0sY0FBYztBQUFBLHNCQUNGQSxRQUFNLE9BQU8sTUFBTTtBQUFBLDZCQUNaQSxRQUFNLGFBQWEsSUFBSSxDQUFDO0FBQUEseUJBQzVCLGNBQWM7QUFBQSxFQUNyQyxDQUFDO0FBTUQsZUFBYSxNQUFNO0FBQ2pCLFFBQUlBLFFBQU0sZUFBZUEsUUFBTSxVQUFVO0FBQ3ZDLHdCQUFrQjtBQUFBLElBQ3BCO0FBQUEsRUFDRixDQUFDO0FBRUQsZUFBYSxNQUFNO0FBQ2pCLFFBQUlBLFFBQU0sZUFBZUEsUUFBTSxZQUFZLFFBQVE7QUFDakQsVUFBSUEsUUFBTSxXQUFXLFdBQVc7QUFDOUIsUUFBQUEsUUFBTSxTQUFTO0FBQUEsTUFDakI7QUFBQSxJQUNGLFdBQVdBLFFBQU0sV0FBVyxRQUFRO0FBQ2xDLFVBQUlBLFFBQU0sbUJBQW1CO0FBRzNCLFFBQUFBLFFBQU07QUFBQSxNQUNSO0FBQ0EsTUFBQUEsUUFBTSxTQUFTO0FBQUEsSUFDakI7QUFBQSxFQUNGLENBQUM7QUFNRCxlQUFhLE1BQU07QUFDakIsbUJBQWUsMEJBQTJCO0FBQ3hDLFVBQUlBLFFBQU0sZ0JBQWdCO0FBQ3hCLFFBQUFBLFFBQU0sa0JBQWtCLE1BQU1BLFFBQU0sU0FBUyxxQkFBcUI7QUFBQSxNQUNwRTtBQUFBLElBQ0Y7QUFFZSw0QkFBd0I7QUFBQSxFQUN6QyxDQUFDO0FBRUQsZUFBYSxNQUFNO0FBQ2pCLElBQUFBLFFBQU0sWUFBWSxNQUFNLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsTUFBTSxjQUFjQSxRQUFNLGVBQWUsQ0FBQyxDQUFDO0FBQUEsRUFDcEcsQ0FBQztBQUVELGVBQWEsTUFBTTtBQUNqQixJQUFBQSxRQUFNLHFCQUFxQkEsUUFBTSxVQUFVQSxRQUFNLGVBQWU7QUFBQSxFQUNsRSxDQUFDO0FBRUQsZUFBYSxNQUFNO0FBQ2pCLElBQUFBLFFBQU0sc0JBQXNCQSxRQUFNLEtBQUssY0FBYyxRQUFRLGNBQWNBLFFBQU0sS0FBSyxVQUFVQSxRQUFNLGVBQWUsQ0FBQztBQUFBLEVBQ3hILENBQUM7QUFNRCxlQUFhLE1BQU07QUFDakIsbUJBQWUsOEJBQStCO0FBQzVDLFlBQU0sRUFBRSxTQUFTLElBQUlBO0FBQ3JCLFlBQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSx5QkFBeUIsSUFBSSxhQUMzRCxTQUFTLHdCQUF3QixPQUFPLENBQ3pDLENBQUMsR0FBRyxPQUFPLE9BQU87QUFDbkIsTUFBQUEsUUFBTSx3QkFBd0I7QUFBQSxJQUNoQztBQUVBLFFBQUlBLFFBQU0sZ0JBQWdCO0FBQ1Qsa0NBQTRCO0FBQUEsSUFDN0M7QUFBQSxFQUNGLENBQUM7QUFFRCxXQUFTLG9CQUFxQjtBQUc1QixVQUFNLEVBQUUsYUFBYSxTQUFTLElBQUlBO0FBQ2xDLFVBQU0sc0JBQXNCLGVBQWU7QUFDM0MsUUFBSSxTQUFTLGdCQUFnQixxQkFBcUI7QUFHaEQsZUFBUyxjQUFjO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBRUEsZUFBYSxNQUFNO0FBQ2pCLG1CQUFlLGtCQUFtQjtBQUNoQyx3QkFBa0I7QUFDbEIsWUFBTSxFQUFFLFVBQVUsdUJBQXVCLFdBQVcsSUFBSUE7QUFDeEQsWUFBTSxjQUFjLE1BQU0sU0FBUyxvQkFBb0IsVUFBVTtBQUNqRSxZQUFNLFlBQVksTUFBTSxnQkFBZ0JGLFFBQU87QUFBQSxRQUM3QyxHQUFHO0FBQUEsUUFDSCxHQUFHO0FBQUEsTUFDTCxHQUFHLE9BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSyxFQUFFLE1BQU0sR0FBRyxVQUFVLENBQUM7QUFDbkQsTUFBQUUsUUFBTSxtQkFBbUI7QUFBQSxJQUMzQjtBQUVBLFFBQUlBLFFBQU0sa0JBQWtCQSxRQUFNLHVCQUF1QjtBQUN4QyxzQkFBZ0I7QUFBQSxJQUNqQztBQUFBLEVBQ0YsQ0FBQztBQWFELFdBQVMsd0JBQXlCLE1BQU07QUFDdEMseUJBQXFCLE1BQU0sYUFBYSxNQUFNO0FBRTVDO0FBRUUsY0FBTSxRQUFRLGlCQUFpQixLQUFLLFdBQVc7QUFDL0MsY0FBTSxnQkFBZ0IsU0FBUyxNQUFNLGlCQUFpQixlQUFlLEdBQUcsRUFBRTtBQUMxRSxjQUFNLFdBQVcsTUFBTSxpQkFBaUIsV0FBVyxNQUFNO0FBR3pELFFBQUFBLFFBQU0sYUFBYTtBQUNuQixRQUFBQSxRQUFNLFFBQVE7QUFBQSxNQUNoQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFJQSxXQUFTLHFCQUFzQixNQUFNO0FBQ25DLCtCQUEyQixNQUFNLGFBQWEsQ0FBQyxZQUFZO0FBQ3pELGlCQUFXLEVBQUUsUUFBUSxlQUFlLEtBQUssU0FBUztBQUNoRCxlQUFPLFVBQVUsT0FBTyxZQUFZLGNBQWM7QUFBQSxNQUNwRDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFPQSxlQUFhLE1BQU07QUFDakIsbUJBQWUsZUFBZ0I7QUFDN0IsWUFBTSxFQUFFLFlBQVksY0FBYyxnQkFBZ0IsWUFBWSxJQUFJQTtBQUNsRSxVQUFJLENBQUMsZ0JBQWdCO0FBQ25CLFFBQUFBLFFBQU0sZ0JBQWdCLENBQUM7QUFDdkIsUUFBQUEsUUFBTSxhQUFhO0FBQUEsTUFDckIsV0FBVyxXQUFXLFVBQVVILHlCQUF3QjtBQUN0RCxjQUFNLFlBQVksTUFBTSx1QkFBdUIsVUFBVTtBQUN6RCxZQUFJRyxRQUFNLGVBQWUsWUFBWTtBQUNuQyw4QkFBb0IsU0FBUztBQUM3QiwyQkFBaUIsSUFBSTtBQUFBLFFBQ3ZCO0FBQUEsTUFDRixPQUFPO0FBQ0wsY0FBTSxFQUFFLElBQUksZUFBZSxJQUFJO0FBRS9CLFlBQUksbUJBQW1CLE1BQU8sZUFBZSxZQUFZLFFBQVM7QUFDaEUsZ0JBQU0sWUFBWSxNQUFNLGlCQUFpQixjQUFjO0FBQ3ZELGNBQUlBLFFBQU0sYUFBYSxPQUFPLGdCQUFnQjtBQUM1QyxnQ0FBb0IsU0FBUztBQUM3Qiw2QkFBaUIsS0FBSztBQUFBLFVBQ3hCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRWUsaUJBQWE7QUFBQSxFQUM5QixDQUFDO0FBRUQsUUFBTSxzQkFBc0IsTUFBTTtBQUNoQyxRQUFJLE1BQU0seUJBQXlCLEtBQUssZUFBZSxDQUFDO0FBQUEsRUFDMUQ7QUFLQSxlQUFhLE1BQU07QUFDakIsVUFBTSxFQUFFLGVBQWUsYUFBYSxJQUFJQTtBQUN4QyxVQUFNLG1CQUFtQixjQUN0QixPQUFPLFdBQVMsTUFBTSxPQUFPLEVBQzdCLE9BQU8sV0FBUyxPQUFPLEtBQUssS0FBSyxDQUFDLG1CQUFtQixJQUFJLE1BQU0sT0FBTyxDQUFDO0FBQzFFLFFBQUksQ0FBQyxnQkFBZ0IsaUJBQWlCLFFBQVE7QUFFNUMsMEJBQW9CLGFBQWE7QUFDakMsVUFBSSxNQUFNLHlCQUF5QixnQkFBZ0IsQ0FBQztBQUFBLElBQ3RELE9BQU87QUFDTCxZQUFNLFlBQVksZUFBZSxnQkFBZ0IsY0FBYyxPQUFPLGNBQWM7QUFDcEYsMEJBQW9CLFNBQVM7QUFFN0IsMEJBQW9CO0FBQUEsSUFDdEI7QUFBQSxFQUNGLENBQUM7QUFFRCxXQUFTLHlCQUEwQixrQkFBa0I7QUFDbkQsVUFBTSxlQUFlLGdCQUFnQixrQkFBa0IsS0FBSyxlQUFlLGNBQWM7QUFDekYsUUFBSSxjQUFjO0FBRWhCLDBCQUFvQjtBQUFBLElBQ3RCLE9BQU87QUFHTCxNQUFBQSxRQUFNLGdCQUFnQixDQUFDLEdBQUdBLFFBQU0sYUFBYTtBQUFBLElBQy9DO0FBQUEsRUFDRjtBQUVBLFdBQVMsZUFBZ0IsT0FBTztBQUM5QixXQUFPLENBQUMsTUFBTSxXQUFXLENBQUMsT0FBTyxLQUFLLEtBQUssbUJBQW1CLElBQUksTUFBTSxPQUFPO0FBQUEsRUFDakY7QUFFQSxpQkFBZSxzQkFBdUIsUUFBUTtBQUM1QyxVQUFNLG9CQUFvQkEsUUFBTSxnQkFBZ0IsTUFBTSx3QkFBd0I7QUFFOUUsV0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLFFBQVEsTUFBTSxDQUFDLFdBQVcsV0FBVyxpQkFBaUI7QUFBQSxFQUNoRjtBQUVBLGlCQUFlLGdCQUFpQixRQUFRO0FBQ3RDLFdBQU8scUJBQXFCLFFBQVFBLFFBQU0sZ0JBQWdCLE1BQU0sd0JBQXdCLENBQUM7QUFBQSxFQUMzRjtBQUVBLGlCQUFlLGlCQUFrQixPQUFPO0FBRXRDLFVBQU0sUUFBUSxVQUFVLEtBQUtBLFFBQU0sY0FBYyxNQUFNQSxRQUFNLFNBQVMsZ0JBQWdCLEtBQUs7QUFDM0YsV0FBTyxnQkFBZ0IsTUFBTSxzQkFBc0IsS0FBSyxDQUFDO0FBQUEsRUFDM0Q7QUFFQSxpQkFBZSx1QkFBd0IsT0FBTztBQUM1QyxXQUFPLGdCQUFnQixNQUFNLHNCQUFzQixNQUFNQSxRQUFNLFNBQVMsc0JBQXNCLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFDdkc7QUFFQSxlQUFhLE1BQU07QUFBQSxFQUNuQixDQUFDO0FBT0QsZUFBYSxNQUFNO0FBQ2pCLGFBQVMsdUNBQXdDO0FBQy9DLFlBQU0sRUFBRSxZQUFZLGNBQWMsSUFBSUE7QUFDdEMsVUFBSSxZQUFZO0FBQ2QsZUFBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLFVBQVU7QUFBQSxZQUNWLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFDQSxZQUFNLG9CQUFvQixvQkFBSSxJQUFJO0FBQ2xDLGlCQUFXLFNBQVMsZUFBZTtBQUNqQyxjQUFNLFdBQVcsTUFBTSxZQUFZO0FBQ25DLFlBQUksU0FBUyxrQkFBa0IsSUFBSSxRQUFRO0FBQzNDLFlBQUksQ0FBQyxRQUFRO0FBQ1gsbUJBQVMsQ0FBQztBQUNWLDRCQUFrQixJQUFJLFVBQVUsTUFBTTtBQUFBLFFBQ3hDO0FBQ0EsZUFBTyxLQUFLLEtBQUs7QUFBQSxNQUNuQjtBQUNBLGFBQU8sQ0FBQyxHQUFHLGtCQUFrQixRQUFRLENBQUMsRUFDbkMsSUFBSSxDQUFDLENBQUMsVUFBVSxNQUFNLE9BQU8sRUFBRSxVQUFVLE9BQU8sRUFBRSxFQUNsRCxLQUFLLENBQUMsR0FBRyxNQUFNQSxRQUFNLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7QUFBQSxJQUN2RTtBQUVBLFVBQU0sMEJBQTBCLHFDQUFxQztBQUNyRSxzQ0FBa0MsdUJBQXVCO0FBQUEsRUFDM0QsQ0FBQztBQU1ELGVBQWEsTUFBTTtBQUNqQixJQUFBQSxRQUFNLHFCQUFxQkEsUUFBTSxxQkFBcUIsTUFBTUEsUUFBTSxjQUFjQSxRQUFNLGdCQUFnQixFQUFFO0FBQUEsRUFDMUcsQ0FBQztBQU1ELGVBQWEsTUFBTTtBQUNqQixVQUFNLEVBQUUsY0FBYyxJQUFJQTtBQUMxQixRQUFJLE1BQU07QUFDUixNQUFBQSxRQUFNLGNBQWMsaUJBQWlCLElBQUksS0FBSztBQUM5QyxNQUFBQSxRQUFNLG1CQUFtQjtBQUFBLElBQzNCLENBQUM7QUFBQSxFQUNILENBQUM7QUFFRCxXQUFTLGdCQUFpQixPQUFPO0FBQy9CLFFBQUksQ0FBQ0EsUUFBTSxjQUFjLENBQUNBLFFBQU0sY0FBYyxRQUFRO0FBQ3BEO0FBQUEsSUFDRjtBQUVBLFVBQU0scUJBQXFCLENBQUMsYUFBYTtBQUN2QyxXQUFLLEtBQUs7QUFDVixNQUFBQSxRQUFNLG1CQUFtQixxQkFBcUIsVUFBVUEsUUFBTSxrQkFBa0JBLFFBQU0sYUFBYTtBQUFBLElBQ3JHO0FBRUEsWUFBUSxNQUFNLEtBQUs7QUFBQSxNQUNqQixLQUFLO0FBQ0gsZUFBTyxtQkFBbUIsS0FBSztBQUFBLE1BQ2pDLEtBQUs7QUFDSCxlQUFPLG1CQUFtQixJQUFJO0FBQUEsTUFDaEMsS0FBSztBQUNILFlBQUlBLFFBQU0scUJBQXFCLElBQUk7QUFFakMsVUFBQUEsUUFBTSxtQkFBbUI7QUFBQSxRQUMzQixPQUFPO0FBQ0wsZUFBSyxLQUFLO0FBQ1YsaUJBQU8sV0FBV0EsUUFBTSxjQUFjQSxRQUFNLGdCQUFnQixFQUFFLEVBQUU7QUFBQSxRQUNsRTtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBTUEsV0FBUyxXQUFZLE9BQU87QUFDMUIsVUFBTSxFQUFFLE9BQU8sSUFBSTtBQUNuQixVQUFNLGdCQUFnQixPQUFPLFFBQVEsYUFBYTtBQUVsRCxRQUFJLENBQUMsZUFBZTtBQUNsQjtBQUFBLElBQ0Y7QUFDQSxVQUFNLFVBQVUsU0FBUyxjQUFjLFFBQVEsU0FBUyxFQUFFO0FBQzFELFNBQUssY0FBYyxRQUFRO0FBQzNCLElBQUFBLFFBQU0sZ0JBQWdCO0FBQ3RCLElBQUFBLFFBQU0sYUFBYTtBQUNuQixJQUFBQSxRQUFNLG1CQUFtQjtBQUN6QixJQUFBQSxRQUFNLG9CQUFvQkEsUUFBTSxPQUFPLFVBQVUsT0FBSyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ3hFO0FBRUEsV0FBUyxhQUFjLE9BQU87QUFDNUIsVUFBTSxFQUFFLFFBQVEsSUFBSSxJQUFJO0FBRXhCLFVBQU0sVUFBVSxRQUFNO0FBQ3BCLFVBQUksSUFBSTtBQUNOLGFBQUssS0FBSztBQUNWLFdBQUcsTUFBTTtBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBRUEsWUFBUSxLQUFLO0FBQUEsTUFDWCxLQUFLO0FBQ0gsZUFBTyxRQUFRLE9BQU8sc0JBQXNCO0FBQUEsTUFDOUMsS0FBSztBQUNILGVBQU8sUUFBUSxPQUFPLGtCQUFrQjtBQUFBLE1BQzFDLEtBQUs7QUFDSCxlQUFPLFFBQVEsT0FBTyxjQUFjLGlCQUFpQjtBQUFBLE1BQ3ZELEtBQUs7QUFDSCxlQUFPLFFBQVEsT0FBTyxjQUFjLGdCQUFnQjtBQUFBLElBQ3hEO0FBQUEsRUFDRjtBQUVBLGlCQUFlLHVCQUF3QixlQUFlO0FBQ3BELFVBQU0sUUFBUSxNQUFNQSxRQUFNLFNBQVMsd0JBQXdCLGFBQWE7QUFDeEUsVUFBTSxlQUFlLENBQUMsR0FBR0EsUUFBTSxlQUFlLEdBQUdBLFFBQU0sZ0JBQWdCLEVBQ3BFLEtBQUssT0FBTSxFQUFFLE9BQU8sYUFBYztBQUNyQyxVQUFNLG1CQUFtQixhQUFhLFdBQVcsZ0JBQWdCLGNBQWNBLFFBQU0sZUFBZTtBQUNwRyxVQUFNQSxRQUFNLFNBQVMsNEJBQTRCLGFBQWE7QUFDOUQsV0FBTztBQUFBLE1BQ0w7QUFBQSxNQUNBLFVBQVVBLFFBQU07QUFBQSxNQUNoQixHQUFJLG9CQUFvQixFQUFFLFNBQVMsaUJBQWlCO0FBQUEsTUFDcEQsR0FBSSxhQUFhLFFBQVEsRUFBRSxNQUFNLGFBQWEsS0FBSztBQUFBLElBQ3JEO0FBQUEsRUFDRjtBQUtBLGlCQUFlLFdBQVksZUFBZTtBQUN4QyxVQUFNLG1CQUFtQix1QkFBdUIsYUFBYTtBQUU3RCxjQUFVLG9CQUFvQixnQkFBZ0I7QUFFOUMsY0FBVSxlQUFlLE1BQU0sZ0JBQWdCO0FBQUEsRUFDakQ7QUFFQSxXQUFTLGFBQWMsT0FBTztBQUM1QixVQUFNLEVBQUUsT0FBTyxJQUFJO0FBRW5CLFFBQUksQ0FBQyxPQUFPLFVBQVUsU0FBUyxPQUFPLEdBQUc7QUFFdkM7QUFBQSxJQUNGO0FBQ0EsU0FBSyxLQUFLO0FBQ1YsVUFBTSxLQUFLLE9BQU8sR0FBRyxVQUFVLENBQUM7QUFFakIsZUFBVyxFQUFFO0FBQUEsRUFDOUI7QUFNQSxXQUFTLGVBQWdCLFVBQVU7QUFDakMsSUFBQUEsUUFBTSxrQkFBa0I7QUFDeEIsSUFBQUEsUUFBTSx5QkFBeUI7QUFDL0IsVUFBTSxpQkFBaUI7QUFDdkIsY0FBVSxvQkFBb0IsRUFBRSxTQUFTLENBQUM7QUFDM0IsSUFBQUEsUUFBTSxTQUFTLHFCQUFxQixRQUFRO0FBQUEsRUFDN0Q7QUFFQSxXQUFTLHVCQUF3QixPQUFPO0FBQ3RDLFVBQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUk7QUFDM0IsVUFBTSxRQUFRLE1BQU0sR0FBRyxNQUFNLGdCQUFnQjtBQUU3QyxRQUFJLENBQUMsT0FBTztBQUNWO0FBQUEsSUFDRjtBQUNBLFNBQUssS0FBSztBQUNWLFVBQU0sV0FBVyxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDdEMsbUJBQWUsUUFBUTtBQUFBLEVBQ3pCO0FBRUEsV0FBUyxzQkFBdUIsT0FBTztBQUNyQyxJQUFBQSxRQUFNLHlCQUF5QixDQUFDQSxRQUFNO0FBQ3RDLElBQUFBLFFBQU0saUJBQWlCQSxRQUFNO0FBRTdCLFFBQUlBLFFBQU0sd0JBQXdCO0FBQ2hDLFdBQUssS0FBSztBQUNWLFVBQUksTUFBTSxNQUFNLGVBQWUsQ0FBQztBQUFBLElBQ2xDO0FBQUEsRUFDRjtBQUtBLGVBQWEsTUFBTTtBQUNqQixRQUFJQSxRQUFNLHdCQUF3QjtBQUNoQyxXQUFLLGlCQUFpQixpQkFBaUIsaUJBQWlCLE1BQU07QUFDNUQsUUFBQUEsUUFBTSx1Q0FBdUM7QUFBQSxNQUMvQyxHQUFHLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxJQUNuQixPQUFPO0FBQ0wsTUFBQUEsUUFBTSx1Q0FBdUM7QUFBQSxJQUMvQztBQUFBLEVBQ0YsQ0FBQztBQUVELFdBQVMseUJBQTBCLE9BQU87QUFHeEMsUUFBSSxDQUFDQSxRQUFNLHdCQUF3QjtBQUNqQztBQUFBLElBQ0Y7QUFDQSxVQUFNLHVCQUF1QixPQUFNLGlCQUFnQjtBQUNqRCxXQUFLLEtBQUs7QUFDVixNQUFBQSxRQUFNLGlCQUFpQjtBQUFBLElBQ3pCO0FBRUEsWUFBUSxNQUFNLEtBQUs7QUFBQSxNQUNqQixLQUFLO0FBQ0gsZUFBTyxxQkFBcUIscUJBQXFCLE1BQU1BLFFBQU0sZ0JBQWdCQSxRQUFNLFNBQVMsQ0FBQztBQUFBLE1BQy9GLEtBQUs7QUFDSCxlQUFPLHFCQUFxQixxQkFBcUIsT0FBT0EsUUFBTSxnQkFBZ0JBLFFBQU0sU0FBUyxDQUFDO0FBQUEsTUFDaEcsS0FBSztBQUNILGVBQU8scUJBQXFCLENBQUM7QUFBQSxNQUMvQixLQUFLO0FBQ0gsZUFBTyxxQkFBcUJBLFFBQU0sVUFBVSxTQUFTLENBQUM7QUFBQSxNQUN4RCxLQUFLO0FBR0gsYUFBSyxLQUFLO0FBQ1YsZUFBTyxlQUFlQSxRQUFNLGNBQWM7QUFBQSxNQUM1QyxLQUFLO0FBQ0gsYUFBSyxLQUFLO0FBQ1YsUUFBQUEsUUFBTSx5QkFBeUI7QUFDL0IsZUFBTyxNQUFNLGlCQUFpQjtBQUFBLElBQ2xDO0FBQUEsRUFDRjtBQUVBLFdBQVMsdUJBQXdCLE9BQU87QUFHdEMsUUFBSSxDQUFDQSxRQUFNLHdCQUF3QjtBQUNqQztBQUFBLElBQ0Y7QUFDQSxZQUFRLE1BQU0sS0FBSztBQUFBLE1BQ2pCLEtBQUs7QUFHSCxhQUFLLEtBQUs7QUFDVixlQUFPLGVBQWVBLFFBQU0sY0FBYztBQUFBLElBQzlDO0FBQUEsRUFDRjtBQUVBLGlCQUFlLDBCQUEyQixPQUFPO0FBRS9DLFVBQU0sRUFBRSxjQUFjLElBQUk7QUFHMUIsUUFBSSxDQUFDLGlCQUFpQixjQUFjLE9BQU8saUJBQWlCO0FBQzFELE1BQUFBLFFBQU0seUJBQXlCO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBRUEsV0FBUyxjQUFlLE9BQU87QUFDN0IsSUFBQUEsUUFBTSxnQkFBZ0IsTUFBTSxPQUFPO0FBQUEsRUFDckM7QUFFQSxTQUFPO0FBQUEsSUFDTCxLQUFNLFVBQVU7QUFDZCxhQUFPQSxTQUFPLFFBQVE7QUFBQSxJQUN4QjtBQUFBLElBQ0EsV0FBWTtBQUNWLHNCQUFnQixNQUFNO0FBQUEsSUFDeEI7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFNRSx1QkFBc0I7QUFDNUIsSUFBTUMsa0JBQWlCO0FBRXZCLElBQUksU0FBUztBQUFBLEVBQ1gsaUJBQWlCO0FBQUEsRUFDakIseUJBQXlCO0FBQUEsRUFDekIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsYUFBYTtBQUFBLEVBQ2IsbUJBQW1CO0FBQUEsRUFDbkIsYUFBYTtBQUFBLEVBQ2Isb0JBQW9CO0FBQUEsRUFDcEIscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLG1CQUFtQjtBQUFBLElBQ25CLGVBQWU7QUFBQSxJQUNmLGtCQUFrQjtBQUFBLElBQ2xCLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLElBQ2pCLFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxFQUNUO0FBQ0Y7QUFFQSxJQUFJLGFBQWE7QUFFakIsSUFBTSxRQUFRO0FBQUEsRUFDWjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjtBQUdBLElBQU0sZUFBZSw2QkFBNkIsV0FBVztBQUU3RCxJQUFNLGdCQUFOLGNBQTRCLFlBQVk7QUFBQSxFQUN0QyxZQUFhLE9BQU87QUFDbEIsVUFBTTtBQUNOLFNBQUssYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2xDLFVBQU0sUUFBUSxTQUFTLGNBQWMsT0FBTztBQUM1QyxVQUFNLGNBQWMsYUFBYTtBQUNqQyxTQUFLLFdBQVcsWUFBWSxLQUFLO0FBQ2pDLFNBQUssT0FBTztBQUFBO0FBQUEsTUFFVixRQUFRQTtBQUFBLE1BQ1IsWUFBWUQ7QUFBQSxNQUNaLGVBQWU7QUFBQSxNQUNmLHVCQUF1QjtBQUFBLE1BQ3ZCLGFBQWE7QUFBQSxNQUNiLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLEdBQUc7QUFBQSxJQUNMO0FBRUEsZUFBVyxRQUFRLE9BQU87QUFDeEIsVUFBSSxTQUFTLGNBQWMsT0FBTyxVQUFVLGVBQWUsS0FBSyxNQUFNLElBQUksR0FBRztBQUMzRSxhQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSTtBQUMzQixlQUFPLEtBQUssSUFBSTtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUNBLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxvQkFBcUI7QUFDbkIsMkJBQXVCLElBQUk7QUFHM0IsUUFBSSxDQUFDLEtBQUssTUFBTTtBQUNkLFdBQUssT0FBTyxXQUFXLEtBQUssWUFBWSxLQUFLLElBQUk7QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLHVCQUF3QjtBQUN0QiwyQkFBdUIsSUFBSTtBQUczQixPQUFHLE1BQU07QUFFUCxVQUFJLENBQUMsS0FBSyxlQUFlLEtBQUssTUFBTTtBQUNsQyxhQUFLLEtBQUssU0FBUztBQUNuQixhQUFLLE9BQU87QUFFWixjQUFNLEVBQUUsU0FBUyxJQUFJLEtBQUs7QUFDMUIsaUJBQVMsTUFBTSxFQUVaLE1BQU0sU0FBTyxRQUFRLE1BQU0sR0FBRyxDQUFDO0FBQUEsTUFDcEM7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFQSxXQUFXLHFCQUFzQjtBQUMvQixXQUFPLENBQUMsVUFBVSxlQUFlLG1CQUFtQixlQUFlO0FBQUEsRUFDckU7QUFBQSxFQUVBLHlCQUEwQixVQUFVLFVBQVUsVUFBVTtBQUN0RCxTQUFLO0FBQUE7QUFBQTtBQUFBLE1BR0gsU0FBUyxRQUFRLGFBQWEsQ0FBQyxHQUFHLE9BQU8sR0FBRyxZQUFZLENBQUM7QUFBQTtBQUFBLE1BRXpELGFBQWEsa0JBQWtCLFdBQVcsUUFBUSxJQUFJO0FBQUEsSUFDeEQ7QUFBQSxFQUNGO0FBQUEsRUFFQSxLQUFNLE1BQU0sVUFBVTtBQUNwQixTQUFLLEtBQUssSUFBSSxJQUFJO0FBQ2xCLFFBQUksS0FBSyxNQUFNO0FBQ2IsV0FBSyxLQUFLLEtBQUssRUFBRSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7QUFBQSxJQUNyQztBQUNBLFFBQUksQ0FBQyxVQUFVLFlBQVksRUFBRSxTQUFTLElBQUksR0FBRztBQUMzQyxXQUFLLFNBQVM7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFlBQWE7QUFDWCxVQUFNLEVBQUUsUUFBUSxZQUFZLFNBQVMsSUFBSSxLQUFLO0FBRTlDLFFBQUksQ0FBQyxZQUFZLFNBQVMsV0FBVyxVQUFVLFNBQVMsZUFBZSxZQUFZO0FBQ2pGLFdBQUssS0FBSyxZQUFZLElBQUksU0FBUyxFQUFFLFFBQVEsV0FBVyxDQUFDLENBQUM7QUFBQSxJQUM1RDtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUEsRUFJQSxXQUFZO0FBQ1YsT0FBRyxNQUNELEtBQUssVUFBVSxDQUNoQjtBQUFBLEVBQ0g7QUFDRjtBQUVBLElBQU0sY0FBYyxDQUFDO0FBRXJCLFdBQVcsUUFBUSxPQUFPO0FBQ3hCLGNBQVksSUFBSSxJQUFJO0FBQUEsSUFDbEIsTUFBTztBQUNMLFVBQUksU0FBUyxZQUFZO0FBR3ZCLGFBQUssVUFBVTtBQUFBLE1BQ2pCO0FBQ0EsYUFBTyxLQUFLLEtBQUssSUFBSTtBQUFBLElBQ3ZCO0FBQUEsSUFDQSxJQUFLLEtBQUs7QUFDUixVQUFJLFNBQVMsWUFBWTtBQUN2QixjQUFNLElBQUksTUFBTSx1QkFBdUI7QUFBQSxNQUN6QztBQUNBLFdBQUssS0FBSyxNQUFNLEdBQUc7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLE9BQU8saUJBQWlCLGNBQWMsV0FBVyxXQUFXO0FBSTVELFNBQVMsdUJBQXdCLFNBQVM7QUFFeEMsTUFBSSxFQUFFLG1CQUFtQixnQkFBZ0I7QUFDdkMsV0FBTyxlQUFlLFNBQVMsZUFBZSxJQUFJLFFBQVEsUUFBUSxZQUFZLENBQUMsRUFBRSxTQUFTO0FBQUEsRUFDNUY7QUFDRjtBQUdBLElBQUksQ0FBQyxlQUFlLElBQUksY0FBYyxHQUFHO0FBQ3ZDLGlCQUFlLE9BQU8sZ0JBQWdCLGFBQWE7QUFDckQ7OztBQy94RE8sSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxjQUFpQjtBQUM5QixJQUFNLGdCQUF3QjtBQU12QixTQUFTLFdBQVksTUFBTztBQUNqQyxNQUFLLENBQUUsS0FBTyxRQUFPO0FBQ3JCLE1BQUssZUFBZSxLQUFNLEtBQUssUUFBUSxFQUFHLEVBQUksUUFBTztBQUNyRCxTQUFPLGNBQWMsS0FBTSxLQUFLLFFBQVEsRUFBRztBQUM3QztBQU1PLFNBQVMsT0FBUSxNQUFPO0FBQzdCLE1BQUssQ0FBRSxLQUFPLFFBQU87QUFDckIsTUFBSyxZQUFZLEtBQU0sS0FBSyxRQUFRLEVBQUcsRUFBSSxRQUFPO0FBQ2xELFNBQU8sYUFBYSxLQUFNLEtBQUssUUFBUSxFQUFHO0FBQzVDOzs7QUg1QkEsSUFBTSxZQUFZO0FBQ2xCLElBQU0sWUFBWSxLQUFLLE9BQU87QUFFOUIsSUFBTSxjQUFjO0FBQ3BCLElBQU0sY0FBYztBQUNwQixJQUFJLGVBQWU7QUFDbkIsSUFBTSxZQUFZLENBQUUsaUJBQW1CLEVBQUUsSUFBSSxnQkFBZ0IsTUFBTSxJQUFJLE9BQU8sSUFBSSxZQUFZO0FBQzlGLElBQU0saUJBQWlCLE1BQU07QUFBQSxFQUMzQixVQUFXLFVBQVc7QUFBQSxFQUN0QixVQUFXLFVBQVc7QUFDeEI7QUFNQSxJQUFNLGlCQUFpQjtBQUFBLEVBQ3JCLEVBQUUsT0FBTyxJQUFNLE9BQU8sU0FBUyxPQUFPLEVBQUk7QUFBQSxFQUMxQyxFQUFFLE9BQU8sTUFBTSxPQUFPLFVBQVUsT0FBTyxFQUFHO0FBQUEsRUFDMUMsRUFBRSxPQUFPLE1BQU0sT0FBTyxXQUFXLE9BQU8sRUFBRTtBQUFBLEVBQzFDLEVBQUUsT0FBTyxNQUFNLE9BQU8sU0FBUyxPQUFPLEdBQUk7QUFBQSxFQUMxQyxFQUFFLE9BQU8sTUFBTSxPQUFPLFVBQVUsT0FBTyxJQUFJO0FBQzdDO0FBRUEsSUFBTSxhQUFhLE9BQVE7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixTQUFTLENBQUM7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLFlBQVksZUFBZTtBQUFBLEVBQzNCLGNBQWM7QUFDaEI7QUFFQSxJQUFNLEVBQUUsT0FBTyxRQUFRLElBQUlFLE9BQU8sbUJBQW1CO0FBQUEsRUFDbkQsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1OLFNBQVMsQ0FBQztBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osT0FBTztBQUFBO0FBQUE7QUFBQSxJQUdQLFVBQVU7QUFBQSxJQUNWLFlBQVksZUFBZTtBQUFBLElBQzNCLGNBQWM7QUFBQTtBQUFBLElBRWQsWUFBWTtBQUFBLElBQ1osZUFBZTtBQUFBO0FBQUE7QUFBQSxJQUdmLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUlQLGdCQUFnQixDQUFDO0FBQUEsSUFDakIsc0JBQXNCLENBQUM7QUFBQSxJQUN2QixJQUFJLFdBQVc7QUFBRSxhQUFPLE1BQU0sUUFBUSxTQUFTO0FBQUEsSUFBRztBQUFBLElBQ2xELElBQUksb0JBQW9CO0FBQUUsYUFBTyxNQUFNLGVBQWUsU0FBUztBQUFBLElBQUc7QUFBQSxJQUNsRSxJQUFJLFlBQVk7QUFDZCxVQUFLLE1BQU0sV0FBYSxRQUFPO0FBQy9CLFVBQUssTUFBTSxVQUFXO0FBRXBCLFlBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxHQUFLLFFBQU87QUFDdkMsZUFBTyxNQUFNLFdBQVcsT0FBUSxPQUFLLEVBQUUsS0FBSyxLQUFLLE1BQU0sRUFBRyxFQUFFLFVBQVU7QUFBQSxNQUN4RTtBQUVBLGFBQU8sTUFBTSxLQUFLLEtBQUssTUFBTSxNQUMzQixNQUFNLFFBQVEsS0FBTSxPQUFLLEVBQUUsV0FBVyxPQUFRLEtBQzlDLE1BQU0sZUFBZSxTQUFTO0FBQUEsSUFDbEM7QUFBQSxJQUNBLElBQUksYUFBYTtBQUNmLFlBQU0sSUFBSSxNQUFNLFFBQVE7QUFDeEIsYUFBTyxNQUFNLElBQUksZUFBZSxHQUFJLENBQUUsU0FBVSxNQUFNLElBQUksS0FBSyxHQUFJO0FBQUEsSUFDckU7QUFBQSxJQUNBLElBQUksa0JBQWtCO0FBQUUsYUFBTyxNQUFNLFdBQVcseUJBQW9CO0FBQUEsSUFBWTtBQUFBLElBQ2hGLElBQUksY0FBYztBQUNoQixVQUFLLE1BQU0sY0FBZ0IsUUFBTztBQUNsQyxhQUFPLE1BQU0sV0FBVyxjQUFjO0FBQUEsSUFDeEM7QUFBQSxJQUNBLElBQUksa0JBQWtCO0FBQUUsYUFBTyxNQUFNLFdBQVcsZ0JBQW1CO0FBQUEsSUFBa0I7QUFBQSxJQUNyRixJQUFJLGVBQWtCO0FBQUUsYUFBTyxNQUFNLFdBQVcsVUFBVTtBQUFBLElBQWE7QUFBQSxJQUN2RSxJQUFJLGVBQWtCO0FBQUUsYUFBTyxNQUFNLFdBQVcsVUFBVTtBQUFBLElBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU92RSxJQUFJLGdCQUFnQjtBQUNsQixhQUFPLGVBQWUsSUFBSyxRQUFPLEVBQUUsR0FBRyxHQUFHLGFBQWEsRUFBRSxVQUFVLE1BQU0sYUFBYSxFQUFJO0FBQUEsSUFDNUY7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxXQUFZLEdBQUk7QUFDZCxZQUFNLE9BQU8sRUFBRSxPQUFPO0FBQ3RCLGVBQVUsRUFBRSxNQUFPO0FBQUEsSUFDckI7QUFBQTtBQUFBLElBR0EsV0FBWSxHQUFJO0FBQ2QsWUFBTSxRQUFRLE1BQU0sS0FBTSxFQUFFLE9BQU8sU0FBUyxDQUFDLENBQUU7QUFDL0MsZUFBVSxLQUFNO0FBRWhCLFFBQUUsT0FBTyxRQUFRO0FBQUEsSUFDbkI7QUFBQTtBQUFBLElBR0EsV0FBWSxHQUFJO0FBQ2QsVUFBSyxFQUFFLGNBQWMsT0FBTyxTQUFVLE9BQVEsR0FBSTtBQUNoRCxVQUFFLGVBQWU7QUFDakIsVUFBRSxjQUFjLFVBQVUsSUFBSyxnQkFBaUI7QUFBQSxNQUNsRDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQWEsR0FBSTtBQUNmLFFBQUUsY0FBYyxVQUFVLE9BQVEsZ0JBQWlCO0FBQUEsSUFDckQ7QUFBQSxJQUNBLE9BQVEsR0FBSTtBQUNWLFFBQUUsZUFBZTtBQUNqQixRQUFFLGNBQWMsVUFBVSxPQUFRLGdCQUFpQjtBQUNuRCxZQUFNLFFBQVEsTUFBTSxLQUFNLEVBQUUsY0FBYyxTQUFTLENBQUMsQ0FBRTtBQUN0RCxlQUFVLEtBQU07QUFBQSxJQUNsQjtBQUFBO0FBQUEsSUFHQSxRQUFTLEdBQUk7QUFDWCxZQUFNLFFBQVEsTUFBTSxLQUFNLEVBQUUsZUFBZSxTQUFTLENBQUMsQ0FBRTtBQUN2RCxZQUFNLFFBQVEsTUFDWCxPQUFRLE9BQUssRUFBRSxTQUFTLE1BQU8sRUFDL0IsSUFBSyxPQUFLLEVBQUUsVUFBVSxDQUFFLEVBQ3hCLE9BQVEsT0FBUTtBQUNuQixVQUFLLE1BQU0sV0FBVyxFQUFJO0FBQzFCLFFBQUUsZUFBZTtBQUNqQixlQUFVLEtBQU07QUFBQSxJQUNsQjtBQUFBLElBRUEsYUFBYTtBQUNYLFlBQU0sTUFBTUMsWUFBVztBQUN2QixZQUFNLEtBQU0sS0FBSyxNQUFNO0FBQ3ZCLFVBQUssTUFBTSxLQUFPO0FBQ2xCLFlBQU0sTUFBTSxNQUFNLFFBQVEsVUFBVyxPQUFLLEVBQUUsT0FBTyxFQUFHO0FBQ3RELFVBQUssUUFBUSxHQUFLO0FBQ2xCLFlBQU0sVUFBVSxNQUFNLFFBQVMsR0FBSTtBQUNuQyxVQUFLLFFBQVEsV0FBYSxLQUFJLGdCQUFpQixRQUFRLFVBQVc7QUFDbEUsWUFBTSxRQUFRLE9BQVEsS0FBSyxDQUFFO0FBQUEsSUFDL0I7QUFBQSxJQUVBLGlCQUFpQjtBQUNmLFlBQU0sV0FBVyxDQUFFLE1BQU07QUFDekIsVUFBSyxNQUFNLFVBQVc7QUFHcEIsbUJBQVksS0FBSyxNQUFNLFNBQVU7QUFDL0IsY0FBSyxFQUFFLFdBQWEsS0FBSSxnQkFBaUIsRUFBRSxVQUFXO0FBQUEsUUFDeEQ7QUFDQSxjQUFNLFVBQVUsQ0FBQztBQUNqQixZQUFLLE1BQU0sV0FBVyxTQUFTLFlBQWMsT0FBTSxhQUFhLGVBQWU7QUFBQSxNQUNqRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFDVixVQUFLLE1BQU0sV0FBVyxVQUFVLFlBQWM7QUFDOUMsWUFBTSxJQUFJLE1BQU0sV0FBVyxTQUFTO0FBQ3BDLFlBQU0sV0FBVyxLQUFNLFVBQVcsVUFBVyxDQUFFLEVBQUcsQ0FBRTtBQUFBLElBQ3REO0FBQUEsSUFDQSxlQUFlO0FBQ2IsVUFBSyxNQUFNLFdBQVcsVUFBVSxZQUFjO0FBQzlDLFlBQU0sTUFBTUEsWUFBVztBQUN2QixZQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVcsT0FBSyxFQUFFLE9BQU8sS0FBSyxRQUFRLEVBQUc7QUFDdEUsVUFBSyxRQUFRLEdBQUs7QUFDbEIsWUFBTSxXQUFXLE9BQVEsS0FBSyxDQUFFO0FBQUEsSUFDbEM7QUFBQSxJQUNBLGFBQWMsR0FBSTtBQUNoQixZQUFNLE1BQU1BLFlBQVc7QUFDdkIsWUFBTSxNQUFNLE1BQU0sV0FBVyxLQUFNLE9BQUssRUFBRSxPQUFPLEtBQUssUUFBUSxFQUFHO0FBQ2pFLFVBQUssSUFBTSxLQUFJLE9BQU8sRUFBRSxPQUFPO0FBQUEsSUFDakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNQSxnQkFBaUIsR0FBSTtBQUNuQixZQUFNLE1BQU1BLFlBQVc7QUFDdkIsWUFBTSxNQUFNLE1BQU0sV0FBVyxLQUFNLE9BQUssRUFBRSxPQUFPLEtBQUssUUFBUSxFQUFHO0FBQ2pFLFVBQUssQ0FBRSxJQUFNO0FBQ2IsWUFBTSxNQUFNLEVBQUU7QUFDZCxVQUFLLGlCQUFrQixJQUFJLEVBQUcsR0FBSTtBQUFFLHlCQUFpQjtBQUFHO0FBQUEsTUFBUTtBQUNoRSxzQkFBaUIsS0FBSyxJQUFJLElBQUksQ0FBRSxVQUFXO0FBQUUsWUFBSSxRQUFRO0FBQUEsTUFBTyxDQUFFO0FBQUEsSUFDcEU7QUFBQSxJQUNBLG1CQUFtQjtBQUNqQixZQUFNLE1BQU1BLFlBQVc7QUFDdkIsWUFBTSxNQUFNLE1BQU0sV0FBVyxLQUFNLE9BQUssRUFBRSxPQUFPLEtBQUssUUFBUSxFQUFHO0FBQ2pFLFVBQUssSUFBTSxLQUFJLFFBQVE7QUFBQSxJQUN6QjtBQUFBLElBQ0EsaUJBQWtCLEdBQUk7QUFJcEIsWUFBTSxJQUFJLEVBQUUsZUFBZSxTQUFTLFNBQVM7QUFDN0MsWUFBTSxlQUFlO0FBQUEsSUFDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTUEsV0FBWSxNQUFPO0FBQ2pCLFVBQUssQ0FBRSxRQUFRLENBQUUsS0FBSyxHQUFLO0FBRzNCLFVBQUssQ0FBRSxNQUFNLFlBQWE7QUFDeEIsY0FBTSxRQUFRO0FBQUEsVUFDWixNQUFjLE1BQU07QUFBQSxVQUNwQixTQUFjLE1BQU07QUFBQSxVQUNwQixVQUFjLE1BQU07QUFBQSxVQUNwQixZQUFjLE1BQU07QUFBQSxVQUNwQixjQUFjLE1BQU07QUFBQSxRQUN0QjtBQUFBLE1BQ0Y7QUFFQSxZQUFNLE9BQWdCLEtBQUssUUFBUTtBQUNuQyxZQUFNLFVBQWdCLENBQUM7QUFDdkIsWUFBTSx1QkFBdUIsQ0FBQztBQUM5QixZQUFNLGtCQUFtQixLQUFLLFVBQVUsQ0FBQyxHQUFJLElBQUssUUFBTztBQUFBLFFBQ3ZELElBQUksRUFBRTtBQUFBLFFBQUksS0FBSyxFQUFFLGFBQWEsRUFBRTtBQUFBLFFBQUssS0FBSyxFQUFFLE9BQU87QUFBQSxNQUNyRCxFQUFJO0FBRUosVUFBSyxLQUFLLE1BQU87QUFDZixjQUFNLFdBQWE7QUFFbkIsY0FBTSxhQUFhLEtBQUssS0FBSyxRQUFRLElBQUssQ0FBRSxNQUFPO0FBQ2pELGdCQUFNLEtBQUs7QUFDWCxpQkFBTztBQUFBLFlBQ0w7QUFBQSxZQUNBLE1BQWEsRUFBRSxTQUFTO0FBQUEsWUFDeEIsT0FBYSxFQUFFLFNBQVM7QUFBQSxZQUN4QixhQUFhLFVBQVcsRUFBRSxRQUFRLENBQUU7QUFBQSxVQUN0QztBQUFBLFFBQ0YsQ0FBRTtBQUVGLGVBQVEsTUFBTSxXQUFXLFNBQVMsYUFBYztBQUM5QyxnQkFBTSxXQUFXLEtBQU0sVUFBVyxVQUFXLE1BQU0sV0FBVyxTQUFTLENBQUUsRUFBRyxDQUFFO0FBQUEsUUFDaEY7QUFJQSxjQUFNLGVBQWU7QUFBQSxNQUN2QixPQUFPO0FBQ0wsY0FBTSxXQUFlO0FBQ3JCLGNBQU0sYUFBZSxlQUFlO0FBQ3BDLGNBQU0sZUFBZTtBQUFBLE1BQ3ZCO0FBRUEsWUFBTSxnQkFBZ0IsS0FBSztBQUMzQixZQUFNLFFBQWdCO0FBQ3RCLFlBQU0sYUFBZ0I7QUFDdEIsZUFBUyxLQUFLLFVBQVUsSUFBSyxtQkFBb0I7QUFBQSxJQUNuRDtBQUFBLElBRUEsY0FBYztBQUVaLGlCQUFZLEtBQUssTUFBTSxTQUFVO0FBQy9CLFlBQUssRUFBRSxXQUFhLEtBQUksZ0JBQWlCLEVBQUUsVUFBVztBQUFBLE1BQ3hEO0FBR0EsWUFBTSxJQUFJLE1BQU07QUFDaEIsVUFBSyxHQUFJO0FBQ1AsY0FBTSxPQUFlLEVBQUU7QUFDdkIsY0FBTSxVQUFlLEVBQUU7QUFDdkIsY0FBTSxXQUFlLEVBQUU7QUFDdkIsY0FBTSxhQUFlLEVBQUU7QUFDdkIsY0FBTSxlQUFlLEVBQUU7QUFBQSxNQUN6QixPQUFPO0FBQ0wsZUFBTyxPQUFRLE9BQU8sV0FBVyxDQUFFO0FBQUEsTUFDckM7QUFDQSxZQUFNLFFBQXVCO0FBQzdCLFlBQU0sZ0JBQXVCO0FBQzdCLFlBQU0saUJBQXVCLENBQUM7QUFDOUIsWUFBTSx1QkFBdUIsQ0FBQztBQUM5QixZQUFNLFFBQXVCO0FBQzdCLFlBQU0sYUFBdUI7QUFDN0IsZUFBUyxLQUFLLFVBQVUsT0FBUSxtQkFBb0I7QUFBQSxJQUN0RDtBQUFBO0FBQUEsSUFHQSxzQkFBc0I7QUFDcEIsWUFBTSxNQUFNQSxZQUFXO0FBQ3ZCLFlBQU0sS0FBTSxLQUFLLE9BQU87QUFDeEIsVUFBSyxNQUFNLEtBQU87QUFDbEIsWUFBTSxNQUFNLE1BQU0sZUFBZSxVQUFXLE9BQUssRUFBRSxPQUFPLEVBQUc7QUFDN0QsVUFBSyxRQUFRLEdBQUs7QUFDbEIsWUFBTSxlQUFlLE9BQVEsS0FBSyxDQUFFO0FBQ3BDLFlBQU0scUJBQXFCLEtBQU0sRUFBRztBQUFBLElBQ3RDO0FBQUEsSUFFQSxpQkFBa0IsR0FBSTtBQUVwQixVQUFLLEVBQUUsT0FBTyxXQUFXLFNBQVUsY0FBZSxHQUFJO0FBQ3BELGdCQUFRLFlBQVk7QUFBQSxNQUN0QjtBQUFBLElBQ0Y7QUFBQSxJQUVBLENBQUMsT0FBUSxHQUFJO0FBQ1gsUUFBRSxlQUFlO0FBQ2pCLFVBQUssQ0FBRSxNQUFNLGFBQWEsTUFBTSxXQUFhO0FBQzdDLFlBQU0sYUFBYTtBQUNuQixZQUFNLFFBQWE7QUFDbkIsWUFBTSxTQUFZRCxPQUFPLFFBQVMsRUFBRTtBQUNwQyxZQUFNLFlBQVksTUFBTTtBQUV4QixZQUFNLEtBQUssSUFBSSxTQUFTO0FBQ3hCLFNBQUcsT0FBUSxRQUFRLE1BQU0sSUFBSztBQUU5QixVQUFLLE1BQU0sVUFBVztBQUdwQixjQUFNLE9BQU8sTUFBTSxXQUNoQixJQUFLLFFBQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxLQUFLLEdBQUcsUUFBUyxFQUFFLFNBQVMsSUFBSyxLQUFLLEVBQUUsRUFBSSxFQUN4RSxPQUFRLE9BQUssRUFBRSxVQUFVLEVBQUc7QUFDL0IsWUFBSyxLQUFLLFNBQVMsYUFBYztBQUMvQixnQkFBTSxRQUFhLHlCQUEwQixXQUFZO0FBQ3pELGdCQUFNLGFBQWE7QUFDbkI7QUFBQSxRQUNGO0FBQ0EsbUJBQVksS0FBSyxNQUFPO0FBQ3RCLGFBQUcsT0FBUSxrQkFBd0IsRUFBRSxLQUFNO0FBQzNDLGFBQUcsT0FBUSx3QkFBd0IsRUFBRSxLQUFNO0FBQUEsUUFDN0M7QUFDQSxjQUFNLFNBQVMsZUFBZSxLQUFNLE9BQUssRUFBRSxVQUFVLE1BQU0sWUFBYTtBQUN4RSxZQUFLLFVBQVUsT0FBTyxRQUFRLEdBQUk7QUFJaEMsZ0JBQU0sU0FBUyxJQUFJLEtBQU0sS0FBSyxJQUFJLElBQUksT0FBTyxRQUFRLE9BQU8sR0FBSztBQUNqRSxhQUFHLE9BQVEsa0JBQWtCLE9BQU8sWUFBWSxDQUFFO0FBQUEsUUFDcEQ7QUFBQSxNQUNGLE9BQU87QUFDTCxjQUFNLFFBQVEsTUFBTSxRQUFRLE9BQVEsT0FBSyxFQUFFLFdBQVcsT0FBUTtBQUM5RCxtQkFBWSxLQUFLLE1BQVEsSUFBRyxPQUFRLFlBQVksRUFBRSxNQUFNLEVBQUUsSUFBSztBQUFBLE1BQ2pFO0FBRUEsVUFBSyxXQUFZO0FBQ2YsbUJBQVksTUFBTSxNQUFNLHNCQUF1QjtBQUM3QyxhQUFHLE9BQVEsMkJBQTJCLE9BQVEsRUFBRyxDQUFFO0FBQUEsUUFDckQ7QUFBQSxNQUNGO0FBRUEsWUFBTSxNQUFNLFlBQ1IsR0FBSSxPQUFPLE9BQVEsSUFBSyxPQUFPLE9BQVEsU0FBVSxTQUFVLEtBQzNELEdBQUksT0FBTyxPQUFRLElBQUssT0FBTyxPQUFRO0FBRTNDLFVBQUk7QUFDRixjQUFNLElBQUksTUFBTSxNQUFPLEtBQUs7QUFBQSxVQUMxQixRQUFRO0FBQUEsVUFBUSxhQUFhO0FBQUEsVUFDN0IsU0FBUyxFQUFFLGNBQWMsT0FBTyxNQUFNO0FBQUEsVUFBRyxNQUFNO0FBQUEsUUFDakQsQ0FBRTtBQUNGLFlBQUssQ0FBRSxFQUFFLEdBQUssT0FBTSxJQUFJLE1BQU8sYUFBYztBQUc3QyxtQkFBWSxLQUFLLE1BQU0sU0FBVTtBQUMvQixjQUFLLEVBQUUsV0FBYSxLQUFJLGdCQUFpQixFQUFFLFVBQVc7QUFBQSxRQUN4RDtBQUNBLFlBQUssV0FBWTtBQUVmLGdCQUFNLFVBQVUsQ0FBQztBQUNqQixrQkFBUSxZQUFZO0FBQUEsUUFDdEIsT0FBTztBQUNMLGdCQUFNLE9BQWU7QUFDckIsbUJBQVUsU0FBUyxjQUFlLDJCQUE0QixDQUFFO0FBQ2hFLGdCQUFNLFVBQWUsQ0FBQztBQUN0QixnQkFBTSxXQUFlO0FBQ3JCLGdCQUFNLGFBQWUsZUFBZTtBQUNwQyxnQkFBTSxlQUFlO0FBQUEsUUFDdkI7QUFFQSxRQUFBQSxPQUFPLGFBQWMsRUFBRSxXQUFXLFVBQVcsTUFBTztBQUFBLE1BQ3RELFNBQVUsS0FBTTtBQUNkLGNBQU0sUUFBUSxZQUFZLCtCQUErQjtBQUFBLE1BQzNELFVBQUU7QUFDQSxjQUFNLGFBQWE7QUFBQSxNQUNyQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBRTtBQUdGLElBQU0sZUFBZTtBQUNyQixTQUFTLFNBQVUsSUFBSztBQUN0QixNQUFLLENBQUUsTUFBTSxHQUFHLFlBQVksV0FBYTtBQUN6QyxLQUFHLE1BQU0sU0FBUztBQUNsQixLQUFHLE1BQU0sU0FBUyxLQUFLLElBQUssR0FBRyxjQUFjLFlBQWEsSUFBSTtBQUM5RCxLQUFHLE1BQU0sWUFBWSxHQUFHLGVBQWUsZUFBZSxTQUFTO0FBQ2pFO0FBUUEsSUFBSSxjQUFxQjtBQUN6QixJQUFJLG1CQUFxQjtBQUN6QixJQUFJLHFCQUFxQjtBQUN6QixJQUFJLHNCQUFzQjtBQUUxQixTQUFTLGlCQUFpQjtBQUN4QixNQUFLLFlBQWMsUUFBTztBQUMxQixnQkFBYyxTQUFTLGNBQWUsY0FBZTtBQUNyRCxjQUFZLFVBQVUsSUFBSyxxQkFBc0I7QUFDakQsY0FBWSxNQUFNLFdBQVc7QUFDN0IsY0FBWSxNQUFNLFNBQVc7QUFDN0IsY0FBWSxNQUFNLFVBQVc7QUFDN0IsY0FBWSxpQkFBa0IsZUFBZSxDQUFFLE9BQVE7QUFDckQsUUFBSyxvQkFBc0IscUJBQXFCLEdBQUcsT0FBTyxPQUFRO0FBQ2xFLHFCQUFpQjtBQUFBLEVBQ25CLENBQUU7QUFDRixXQUFTLEtBQUssWUFBYSxXQUFZO0FBQ3ZDLFNBQU87QUFDVDtBQUVBLFNBQVMsaUJBQWtCLE9BQVE7QUFDakMsU0FBTyxlQUFlLFlBQVksTUFBTSxZQUFZLFVBQVUscUJBQXFCO0FBQ3JGO0FBRUEsU0FBUyxnQkFBaUIsS0FBSyxPQUFPLElBQUs7QUFDekMsUUFBTSxJQUFJLGVBQWU7QUFDekIscUJBQXNCO0FBQ3RCLHdCQUFzQjtBQUN0QixRQUFNLE9BQVMsSUFBSSxzQkFBc0I7QUFDekMsUUFBTSxJQUFTO0FBQ2YsUUFBTSxPQUFTLEtBQUssU0FBUyxJQUFJLEtBQUssT0FBTztBQUM3QyxRQUFNLE1BQVMsT0FBTyxLQUFLLFNBQVMsT0FBTyxVQUFVLElBQy9CLEtBQUssTUFBUyxPQUFPLFVBQVUsSUFBSTtBQUN6RCxRQUFNLE9BQVMsS0FBSyxJQUFLLEdBQUcsS0FBSyxJQUFLLEtBQUssT0FBTyxPQUFPLFNBQVMsT0FBTyxhQUFhLEdBQUksQ0FBRTtBQUM1RixJQUFFLE1BQU0sTUFBVSxHQUFJLEdBQUk7QUFDMUIsSUFBRSxNQUFNLE9BQVUsR0FBSSxJQUFLO0FBQzNCLElBQUUsTUFBTSxVQUFVO0FBQ2xCLE1BQUssbUJBQXFCLFVBQVMsb0JBQXFCLFNBQVMsa0JBQW1CO0FBQ3BGLHVCQUFxQixDQUFFLE9BQVE7QUFDN0IsUUFBSyxDQUFFLEVBQUUsU0FBVSxHQUFHLE1BQU8sS0FBSyxDQUFFLElBQUksU0FBVSxHQUFHLE1BQU8sRUFBSSxrQkFBaUI7QUFBQSxFQUNuRjtBQUNBLGFBQVksTUFBTSxTQUFTLGlCQUFrQixTQUFTLGtCQUFtQixHQUFHLENBQUU7QUFDaEY7QUFFQSxTQUFTLG1CQUFtQjtBQUMxQixNQUFLLFlBQWMsYUFBWSxNQUFNLFVBQVU7QUFDL0MscUJBQXNCO0FBQ3RCLHdCQUFzQjtBQUN0QixNQUFLLG9CQUFxQjtBQUN4QixhQUFTLG9CQUFxQixTQUFTLGtCQUFtQjtBQUMxRCx5QkFBcUI7QUFBQSxFQUN2QjtBQUNGO0FBRUEsZUFBZSxTQUFVLE9BQVE7QUFDL0IsUUFBTSxTQUFTQSxPQUFPLFFBQVMsRUFBRTtBQUNqQyxNQUFJLFVBQWEsTUFBTSxRQUFTLE1BQU0sUUFBUSxTQUFTLENBQUUsR0FBRyxNQUFNLEtBQU07QUFFeEUsYUFBWSxRQUFRLE9BQVE7QUFDMUIsUUFBSyxNQUFNLFFBQVEsVUFBVSxXQUFZO0FBQ3ZDLFlBQU0sUUFBUSxPQUFRLFNBQVU7QUFDaEM7QUFBQSxJQUNGO0FBQ0EsUUFBSyxDQUFFLFdBQVksSUFBSyxHQUFJO0FBQzFCLFlBQU0sUUFBUTtBQUNkO0FBQUEsSUFDRjtBQUNBLFFBQUssS0FBSyxPQUFPLFdBQVk7QUFDM0IsWUFBTSxRQUFRLEdBQUksS0FBSyxJQUFLO0FBQzVCO0FBQUEsSUFDRjtBQUVBLFVBQU0sT0FBcUIsT0FBUSxJQUFLO0FBQ3hDLFVBQU0scUJBQXFCLFFBQVEsQ0FBRSxPQUFPO0FBRTVDLFVBQU0sT0FBTztBQUFBLE1BQ1gsSUFBWTtBQUFBLE1BQ1o7QUFBQSxNQUNBLE1BQVksS0FBSztBQUFBLE1BQ2pCLFlBQVk7QUFBQSxNQUNaLFFBQVkscUJBQXFCLGVBQWU7QUFBQSxJQUNsRDtBQUlBLFFBQUk7QUFBRSxXQUFLLGFBQWEsSUFBSSxnQkFBaUIsSUFBSztBQUFBLElBQUcsUUFBUTtBQUFBLElBQUM7QUFDOUQsVUFBTSxRQUFRLEtBQU0sSUFBSztBQUV6QixRQUFLLG9CQUFxQjtBQUN4QixVQUFJO0FBQ0YsY0FBTSxFQUFFLFNBQVMsU0FBUyxJQUFJLE1BQU0sT0FBUSx3QkFBVztBQUN2RCxjQUFNLE9BQU8sTUFBTSxTQUFVLEVBQUUsTUFBTSxNQUFNLFFBQVEsY0FBYyxTQUFTLEtBQUssQ0FBRTtBQUNqRixjQUFNLE1BQU8sTUFBTSxRQUFTLElBQUssSUFBSSxLQUFNLENBQUUsSUFBSTtBQUNqRCxjQUFNLFlBQVksSUFBSTtBQUFBLFVBQ3BCLENBQUUsR0FBSTtBQUFBLFVBQ04sS0FBSyxLQUFLLFFBQVMsbUJBQW1CLE1BQU87QUFBQSxVQUM3QyxFQUFFLE1BQU0sYUFBYTtBQUFBLFFBQ3ZCO0FBQ0EsY0FBTSxRQUFRLE1BQU0sUUFBUSxLQUFNLE9BQUssRUFBRSxPQUFPLEtBQUssRUFBRztBQUN4RCxZQUFLLENBQUUsTUFBUTtBQUNmLFlBQUssTUFBTSxXQUFhLEtBQUksZ0JBQWlCLE1BQU0sVUFBVztBQUM5RCxjQUFNLE9BQWE7QUFDbkIsY0FBTSxPQUFhLFVBQVU7QUFDN0IsY0FBTSxhQUFhLElBQUksZ0JBQWlCLFNBQVU7QUFDbEQsY0FBTSxTQUFhO0FBQUEsTUFDckIsU0FBVSxLQUFNO0FBQ2QsY0FBTSxRQUFRLE1BQU0sUUFBUSxLQUFNLE9BQUssRUFBRSxPQUFPLEtBQUssRUFBRztBQUN4RCxZQUFLLE1BQVEsT0FBTSxTQUFTO0FBQzVCLGNBQU0sUUFBUTtBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FJdmdCQSxTQUFTLFNBQUFFLFFBQU8sY0FBQUMsbUJBQWtCO0FBR2xDLElBQUksV0FBb0I7QUFDeEIsSUFBSSxnQkFBb0I7QUFDeEIsSUFBSSxzQkFBc0I7QUFFMUJDLE9BQU8sb0JBQW9CO0FBQUEsRUFDekIsU0FBUztBQUFBLElBQ1AsQ0FBQyxPQUFRLEdBQUk7QUFDWCxZQUFNLFlBQVksR0FBRyxRQUFRLFFBQVMsV0FBWTtBQUNsRCxZQUFNLEtBQVksWUFBWSxTQUFVLFVBQVUsUUFBUSxJQUFJLEVBQUcsSUFBSTtBQUNyRSxZQUFNLFNBQVksV0FBVyxRQUFRLGNBQWM7QUFDbkQsWUFBTSxNQUFZQyxZQUFXO0FBQzdCLFlBQU0sUUFBWSxJQUFJLE9BQU87QUFDN0IsWUFBTSxPQUFZLENBQUMsQ0FBRSxJQUFJLE9BQU87QUFDaEMsVUFBSyxDQUFFLE1BQU0sQ0FBRSxNQUFRO0FBQ3ZCLFlBQU0sTUFBTyxRQUFRLElBQUksT0FBTyxJQUFLO0FBQUEsSUFDdkM7QUFBQSxJQUNBLFdBQVksR0FBSTtBQUNkLFlBQU0sTUFBWSxHQUFHLGlCQUFpQixHQUFHLFFBQVEsUUFBUyxRQUFTLEtBQUssR0FBRztBQUMzRSxZQUFNLFlBQVksR0FBRyxRQUFRLFFBQVMsV0FBWTtBQUNsRCxZQUFNLEtBQVksWUFBWSxTQUFVLFVBQVUsUUFBUSxJQUFJLEVBQUcsSUFBSTtBQUNyRSxZQUFNLFNBQVksV0FBVyxRQUFRLGNBQWM7QUFDbkQsVUFBSyxDQUFFLE1BQU0sQ0FBRSxJQUFNO0FBQ3JCLG1CQUFjLEtBQUssUUFBUSxFQUFHO0FBQUEsSUFDaEM7QUFBQSxFQUNGO0FBQ0YsQ0FBRTtBQUVGLFVBQVUsTUFBTyxhQUFhLFdBQVcsT0FBTyxTQUFTLE9BQVE7QUFDL0QsUUFBTSxTQUFTRCxPQUFPLFFBQVMsRUFBRTtBQUNqQyxRQUFNLE1BQU8sR0FBRyxPQUFPLE9BQU8sSUFBSSxPQUFPLE9BQU8sY0FBYztBQUFBLElBQzVELFFBQVEsU0FBUyxXQUFXO0FBQUEsSUFBUSxhQUFhO0FBQUEsSUFDakQsU0FBUyxFQUFFLGdCQUFnQixvQkFBb0IsY0FBYyxPQUFPLE1BQU07QUFBQSxJQUMxRSxNQUFNLEtBQUssVUFBVyxFQUFFLGFBQWEsV0FBVyxNQUFNLENBQUU7QUFBQSxFQUMxRCxDQUFFO0FBQ0YsTUFBSTtBQUFFLElBQUFBLE9BQU8sYUFBYyxFQUFFLFVBQVUsUUFBUyxNQUFPO0FBQUEsRUFBRyxTQUFVLEdBQUk7QUFBQSxFQUFDO0FBQzNFO0FBRUEsZUFBZSxZQUFhLGFBQWEsV0FBVyxPQUFRO0FBQzFELFFBQU0sU0FBU0EsT0FBTyxRQUFTLEVBQUU7QUFDakMsUUFBTSxNQUFPLEdBQUcsT0FBTyxPQUFPLElBQUksT0FBTyxPQUFPLGNBQWM7QUFBQSxJQUM1RCxRQUFRO0FBQUEsSUFBUSxhQUFhO0FBQUEsSUFDN0IsU0FBUyxFQUFFLGdCQUFnQixvQkFBb0IsY0FBYyxPQUFPLE1BQU07QUFBQSxJQUMxRSxNQUFNLEtBQUssVUFBVyxFQUFFLGFBQWEsV0FBVyxNQUFNLENBQUU7QUFBQSxFQUMxRCxDQUFFO0FBQ0YsTUFBSTtBQUFFLElBQUFBLE9BQU8sYUFBYyxFQUFFLFVBQVUsUUFBUyxNQUFPO0FBQUEsRUFBRyxTQUFVLEdBQUk7QUFBQSxFQUFDO0FBQzNFO0FBRUEsU0FBUyxZQUFZO0FBQ25CLE1BQUssU0FBVyxRQUFPO0FBQ3ZCLGFBQVcsU0FBUyxjQUFlLGNBQWU7QUFDbEQsV0FBUyxVQUFVLElBQUsscUJBQXNCO0FBQzlDLFdBQVMsTUFBTSxXQUFXO0FBQzFCLFdBQVMsTUFBTSxTQUFXO0FBQzFCLFdBQVMsTUFBTSxVQUFXO0FBQzFCLFdBQVMsaUJBQWtCLGVBQWUsQ0FBRSxPQUFRO0FBQ2xELFFBQUssZUFBZ0I7QUFDbkIsa0JBQWEsY0FBYyxhQUFhLGNBQWMsV0FBVyxHQUFHLE9BQU8sT0FBUTtBQUFBLElBQ3JGO0FBQ0EsZ0JBQVk7QUFBQSxFQUNkLENBQUU7QUFDRixXQUFTLEtBQUssWUFBYSxRQUFTO0FBQ3BDLFNBQU87QUFDVDtBQUVBLFNBQVMsYUFBYyxLQUFLLGFBQWEsV0FBWTtBQUNuRCxRQUFNLElBQUksVUFBVTtBQUNwQixrQkFBZ0IsRUFBRSxhQUFhLFVBQVU7QUFDekMsUUFBTSxPQUFlLElBQUksc0JBQXNCO0FBQy9DLFFBQU0sZUFBZTtBQUNyQixRQUFNLFlBQWUsS0FBSyxTQUFTLGVBQWUsS0FBSyxPQUFPO0FBQzlELFFBQU0sTUFBZSxZQUFZLEtBQUssU0FBUyxPQUFPLFVBQVUsSUFDL0IsS0FBSyxNQUFNLE9BQU8sVUFBVSxlQUFlO0FBQzVFLFFBQU0sT0FBZSxLQUFLLElBQUssR0FBRyxLQUFLLElBQUssS0FBSyxPQUFPLE9BQU8sU0FBUyxPQUFPLGFBQWEsR0FBSSxDQUFFO0FBQ2xHLElBQUUsTUFBTSxNQUFVLEdBQUcsR0FBRztBQUN4QixJQUFFLE1BQU0sT0FBVSxHQUFHLElBQUk7QUFDekIsSUFBRSxNQUFNLFVBQVU7QUFHbEIsTUFBSyxvQkFBc0IsVUFBUyxvQkFBcUIsU0FBUyxtQkFBb0I7QUFDdEYsd0JBQXNCLENBQUUsT0FBUTtBQUM5QixRQUFLLENBQUUsRUFBRSxTQUFVLEdBQUcsTUFBTyxLQUFLLENBQUUsSUFBSSxTQUFVLEdBQUcsTUFBTyxHQUFJO0FBQzlELGtCQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFDQSxhQUFZLE1BQU0sU0FBUyxpQkFBa0IsU0FBUyxtQkFBb0IsR0FBRyxDQUFFO0FBQ2pGO0FBRUEsU0FBUyxjQUFjO0FBQ3JCLE1BQUssU0FBVyxVQUFTLE1BQU0sVUFBVTtBQUN6QyxrQkFBZ0I7QUFDaEIsTUFBSyxxQkFBc0I7QUFDekIsYUFBUyxvQkFBcUIsU0FBUyxtQkFBb0I7QUFDM0QsMEJBQXNCO0FBQUEsRUFDeEI7QUFDRjs7O0FDakdBLFNBQVMsU0FBQUUsUUFBTyxjQUFBQyxtQkFBa0I7QUFVbENELE9BQU8sbUJBQW1CO0FBQUEsRUFDeEIsT0FBTztBQUFBLElBQ0wsV0FBWTtBQUFBO0FBQUEsSUFDWixNQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUNOLFlBQU0sTUFBTUMsWUFBWSxhQUFjO0FBQ3RDLFlBQU0sS0FBTSxLQUFLLFNBQVMsS0FBSyxTQUFVLElBQUksUUFBUSxJQUFJLEVBQUcsSUFBSTtBQUNoRSxVQUFLLENBQUUsR0FBSztBQUNaLFlBQU0sSUFBSUQsT0FBTyxpQkFBa0IsRUFBRTtBQUNyQywyQkFBcUI7QUFDckIsVUFBSyxFQUFFLGNBQWMsSUFBSztBQUN4QixVQUFFLFlBQVk7QUFDZDtBQUFBLE1BQ0Y7QUFDQSxRQUFFLFlBQVk7QUFDZCxRQUFFLE9BQVk7QUFDZCxZQUFNLE9BQU8sU0FBUyxjQUFlLG1DQUFtQyxFQUFFLGlDQUFrQztBQUM1RyxVQUFLLE1BQU87QUFDVixhQUFLLFVBQVUsSUFBSyxTQUFVO0FBQzlCLGFBQUssY0FBZSxVQUFXLEdBQUcsTUFBTTtBQUFBLE1BQzFDO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBWSxHQUFJO0FBQ2QsTUFBQUEsT0FBTyxpQkFBa0IsRUFBRSxNQUFNLE9BQU8sRUFBRSxPQUFPO0FBQ2pELE1BQUFFLFVBQVUsRUFBRSxNQUFPO0FBQUEsSUFDckI7QUFBQSxJQUNBLFNBQVUsR0FBSTtBQUNaLE1BQUFBLFVBQVUsRUFBRSxNQUFPO0FBQUEsSUFDckI7QUFBQSxJQUNBLENBQUMsT0FBUSxHQUFJO0FBQ1gsUUFBRSxlQUFlO0FBQ2pCLFlBQU0sT0FBVyxFQUFFO0FBQ25CLFlBQU0sV0FBVyxLQUFLLFFBQVMsMkJBQTRCO0FBQzNELFlBQU0sVUFBVyxXQUFXLFNBQVUsU0FBUyxRQUFRLElBQUksRUFBRyxJQUFJO0FBQ2xFLFVBQUssQ0FBRSxRQUFVO0FBQ2pCLFlBQU0sU0FBUyxLQUFLLFVBQVUsU0FBVSwyQkFBNEI7QUFDcEUsWUFBTSxLQUFTLEtBQUssY0FBZSxVQUFXO0FBQzlDLFlBQU0sSUFBU0YsT0FBTyxpQkFBa0IsRUFBRTtBQUMxQyxVQUFLLEVBQUUsV0FBYTtBQUNwQixZQUFNLFFBQVEsU0FBVyxJQUFJLFNBQVMsS0FBTyxFQUFFO0FBQy9DLFlBQU0sT0FBUSxNQUFNLEtBQUs7QUFDekIsVUFBSyxDQUFFLEtBQU87QUFDZCxZQUFNLFlBQVksU0FBUyxJQUFJLEVBQUU7QUFDakMsUUFBRSxhQUFhO0FBQ2YsWUFBTSxTQUFTQSxPQUFPLFFBQVMsRUFBRTtBQUNqQyxVQUFJO0FBQ0YsY0FBTSxJQUFJLE1BQU0sTUFBTyxHQUFHLE9BQU8sT0FBTyxJQUFJLE9BQU8sT0FBTyxhQUFhO0FBQUEsVUFDckUsUUFBUTtBQUFBLFVBQVEsYUFBYTtBQUFBLFVBQzdCLFNBQVM7QUFBQSxZQUNQLGdCQUFnQjtBQUFBLFlBQ2hCLGNBQWdCLE9BQU87QUFBQSxVQUN6QjtBQUFBLFVBQ0EsTUFBTSxLQUFLLFVBQVcsRUFBRSxTQUFTLFdBQVcsS0FBSyxDQUFFO0FBQUEsUUFDckQsQ0FBRTtBQUNGLFlBQUssQ0FBRSxFQUFFLEdBQUssT0FBTSxJQUFJLE1BQU8sZ0JBQWlCO0FBQ2hELFlBQUssUUFBUztBQUNaLGNBQUssSUFBSztBQUFFLGVBQUcsUUFBUTtBQUFJLFlBQUFFLFVBQVUsRUFBRztBQUFBLFVBQUc7QUFBQSxRQUM3QyxPQUFPO0FBQ0wsWUFBRSxPQUFZO0FBQ2QsWUFBRSxZQUFZO0FBQ2QsK0JBQXFCO0FBQUEsUUFDdkI7QUFDQSxRQUFBRixPQUFPLGFBQWMsRUFBRSxVQUFVLFFBQVMsTUFBTztBQUFBLE1BQ25ELFNBQVUsS0FBTTtBQUNkLGNBQU8sK0JBQWdDO0FBQUEsTUFDekMsVUFBRTtBQUNBLFVBQUUsYUFBYTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFFO0FBRUYsU0FBUyx1QkFBdUI7QUFDOUIsV0FBUyxpQkFBa0Isc0NBQXVDLEVBQy9ELFFBQVMsQ0FBRSxPQUFRLEdBQUcsVUFBVSxPQUFRLFNBQVUsQ0FBRTtBQUN6RDtBQU9BLElBQU1HLGdCQUFlO0FBQ3JCLFNBQVNELFVBQVUsSUFBSztBQUN0QixNQUFLLENBQUUsTUFBTSxHQUFHLFlBQVksV0FBYTtBQUN6QyxLQUFHLE1BQU0sU0FBUztBQUNsQixLQUFHLE1BQU0sU0FBUyxLQUFLLElBQUssR0FBRyxjQUFjQyxhQUFhLElBQUk7QUFDOUQsS0FBRyxNQUFNLFlBQVksR0FBRyxlQUFlQSxnQkFBZSxTQUFTO0FBQ2pFOzs7QUNyR0EsU0FBUyxTQUFBQyxjQUFhO0FBY3RCQSxPQUFPLGdCQUFnQjtBQUFBLEVBQ3JCLFNBQVM7QUFBQSxJQUNQLENBQUMsS0FBTSxHQUFJO0FBQ1QsWUFBTSxNQUFNLEVBQUU7QUFDZCxZQUFNLE1BQU0sTUFBTSxTQUFVLElBQUksUUFBUSxhQUFhLEVBQUcsSUFBSTtBQUM1RCxZQUFNLE9BQU8sTUFBTSxJQUFJLFFBQVMsZ0JBQWlCLElBQUk7QUFDckQsWUFBTSxNQUFNLE9BQU8sU0FBVSxLQUFLLFFBQVEsUUFBUSxFQUFHLElBQUk7QUFDekQsVUFBSyxDQUFFLE9BQU8sT0FBTyxNQUFPLEdBQUksS0FBSyxNQUFNLEVBQUk7QUFDL0MsWUFBTSxTQUFTQSxPQUFPLFFBQVMsRUFBRTtBQUNqQyxZQUFNLE9BQVNBLE9BQU8sYUFBYztBQUNwQyxZQUFNLFFBQVMsTUFBTSxRQUFTLEtBQUssTUFBTSxLQUFNLElBQUksS0FBSyxNQUFNLFFBQVE7QUFDdEUsWUFBTSxPQUFTLFFBQVEsTUFBTSxLQUFNLE9BQUssRUFBRSxPQUFPLEdBQUksSUFBSTtBQUN6RCxZQUFNLE9BQVMsTUFBTTtBQUNyQixVQUFLLENBQUUsUUFBUSxLQUFLLE9BQVM7QUFDN0IsVUFBSyxLQUFLLFlBQVksSUFBTTtBQUk1QixZQUFNLFdBQVcsYUFBYyxJQUFLO0FBQ3BDLFlBQU0sS0FBSztBQUFBLFFBQ1QsU0FBWSxPQUFPO0FBQUEsUUFDbkIsTUFBWSxPQUFPLFlBQVk7QUFBQSxRQUMvQixZQUFZLE9BQU87QUFBQSxNQUNyQjtBQUNBLGdCQUFXLE1BQU0sS0FBSyxFQUFHO0FBRXpCLFVBQUk7QUFDRixjQUFNLElBQUksTUFBTSxNQUFPLEdBQUksT0FBTyxPQUFRLElBQUssT0FBTyxPQUFRLGNBQWM7QUFBQSxVQUMxRSxRQUFRO0FBQUEsVUFDUixhQUFhO0FBQUEsVUFDYixTQUFTLEVBQUUsZ0JBQWdCLG9CQUFvQixjQUFjLE9BQU8sTUFBTTtBQUFBLFVBQzFFLE1BQU0sS0FBSyxVQUFXLEVBQUUsU0FBUyxLQUFLLGNBQWMsSUFBSSxDQUFFO0FBQUEsUUFDNUQsQ0FBRTtBQUNGLFlBQUssQ0FBRSxFQUFFLElBQUs7QUFDWixzQkFBYSxNQUFNLFFBQVM7QUFDNUIsZ0JBQU0sT0FBTyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU8sT0FBUSxDQUFDLEVBQUk7QUFDaEQsY0FBSyxNQUFNLFVBQVUsVUFBVztBQUM5QixrQkFBTyx1QkFBd0I7QUFBQSxVQUNqQyxPQUFPO0FBQ0wsa0JBQU8sNEJBQTZCO0FBQUEsVUFDdEM7QUFDQTtBQUFBLFFBQ0Y7QUFHQSxhQUFLLFdBQVcsVUFBVyxNQUFPO0FBQUEsTUFDcEMsU0FBVSxLQUFNO0FBQ2Qsb0JBQWEsTUFBTSxRQUFTO0FBQzVCLGNBQU8sNEJBQTZCO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUU7QUFRRixTQUFTLFVBQVcsTUFBTSxRQUFRLElBQUs7QUFDckMsUUFBTSxPQUFPLEtBQUs7QUFDbEIsTUFBSyxTQUFTLE9BQVM7QUFFdkIsUUFBTSxPQUFPLEtBQUssV0FBVyxDQUFDO0FBQzlCLE1BQUssU0FBUyxLQUFLLFVBQVUsS0FBSyxPQUFTO0FBRTNDLE9BQU0sTUFBTyxFQUFFLFNBQVM7QUFDeEIsTUFBSyxRQUFRLEtBQUssT0FBTyxLQUFLLFFBQVM7QUFDckMsU0FBTSxJQUFLLEVBQUUsUUFBUSxLQUFLLElBQUssR0FBRyxLQUFNLElBQUssRUFBRSxRQUFRLENBQUU7QUFBQSxFQUMzRCxPQUFPO0FBQ0wsU0FBSyxlQUFlO0FBQUEsRUFDdEI7QUFLQSxNQUFLLE1BQU0sR0FBRyxTQUFVO0FBQ3RCLGVBQVksT0FBTyxNQUFPO0FBQ3hCLFVBQUssQ0FBRSxNQUFNLFFBQVMsSUFBSSxNQUFPLEVBQUksS0FBSSxTQUFTLENBQUM7QUFBQSxJQUNyRDtBQUNBLFFBQUssUUFBUSxLQUFLLE9BQU8sS0FBSyxRQUFTO0FBQ3JDLFdBQU0sSUFBSyxFQUFFLFNBQVMsS0FBTSxJQUFLLEVBQUUsT0FBTyxPQUFRLE9BQUssRUFBRSxZQUFZLEdBQUcsT0FBUTtBQUFBLElBQ2xGO0FBQ0EsUUFBSyxDQUFFLEtBQU0sTUFBTyxFQUFFLE9BQU8sS0FBTSxPQUFLLEVBQUUsWUFBWSxHQUFHLE9BQVEsR0FBSTtBQUNuRSxXQUFNLE1BQU8sRUFBRSxPQUFPLEtBQU07QUFBQSxRQUMxQixTQUFZLEdBQUc7QUFBQSxRQUNmLE1BQVksR0FBRztBQUFBLFFBQ2YsWUFBWSxHQUFHO0FBQUEsTUFDakIsQ0FBRTtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBRUEsT0FBSyxVQUFZO0FBQ2pCLE9BQUssWUFBWTtBQUVqQixRQUFNLFFBQVEsS0FBSztBQUNuQixXQUFVLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFNO0FBQ3RDLFNBQU0sQ0FBRSxFQUFFLGFBQWEsTUFBTTtBQUM3QixVQUFNLE1BQU0sUUFBUSxJQUFJLEtBQUssTUFBUyxLQUFNLENBQUUsRUFBRSxRQUFRLFFBQVUsR0FBSSxJQUFJO0FBQzFFLFNBQU0sQ0FBRSxFQUFFLFVBQVk7QUFDdEIsU0FBTSxDQUFFLEVBQUUsWUFBWSxTQUFVLEdBQUk7QUFBQSxFQUN0QztBQUNGO0FBR0EsU0FBUyxhQUFjLE1BQU87QUFDNUIsU0FBTztBQUFBLElBQ0wsU0FBYSxLQUFLO0FBQUEsSUFDbEIsV0FBYSxLQUFLO0FBQUEsSUFDbEIsYUFBYSxLQUFLO0FBQUEsSUFDbEIsU0FBYSxLQUFLLFFBQVEsSUFBSyxRQUFPO0FBQUEsTUFDcEMsT0FBWSxFQUFFO0FBQUEsTUFDZCxTQUFZLEVBQUU7QUFBQSxNQUNkLFdBQVksRUFBRTtBQUFBLE1BQ2QsWUFBWSxFQUFFO0FBQUEsTUFDZCxRQUFZLE1BQU0sUUFBUyxFQUFFLE1BQU8sSUFBSSxFQUFFLE9BQU8sTUFBTSxJQUFJLENBQUM7QUFBQSxJQUM5RCxFQUFJO0FBQUEsRUFDTjtBQUNGO0FBRUEsU0FBUyxZQUFhLE1BQU0sTUFBTztBQUNqQyxPQUFLLFVBQWMsS0FBSztBQUN4QixPQUFLLFlBQWMsS0FBSztBQUN4QixPQUFLLGNBQWMsS0FBSztBQUN4QixXQUFVLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxRQUFRLEtBQU07QUFDOUMsVUFBTSxJQUFJLEtBQUssUUFBUyxDQUFFO0FBQzFCLFVBQU0sSUFBSSxLQUFLLFFBQVMsQ0FBRTtBQUMxQixNQUFFLFFBQWEsRUFBRTtBQUNqQixNQUFFLFVBQWEsRUFBRTtBQUNqQixNQUFFLFlBQWEsRUFBRTtBQUNqQixNQUFFLGFBQWEsRUFBRTtBQUNqQixNQUFFLFNBQWEsRUFBRSxPQUFPLE1BQU07QUFBQSxFQUNoQztBQUNGOzs7QUNwSkEsU0FBUyxTQUFBQyxRQUFPLGNBQUFDLG1CQUFrQjs7O0FDQzNCLFNBQVMsdUJBQXdCLFdBQVk7QUFDbEQsUUFBTSxLQUFNLGFBQWEsSUFBSyxNQUFPLGtCQUFtQjtBQUN4RCxTQUFPLElBQUksU0FBVSxFQUFHLENBQUUsR0FBRyxFQUFHLElBQUk7QUFDdEM7QUFHTyxTQUFTLGdCQUFnQjtBQUM5QixTQUFPLE9BQU8sYUFBYSxjQUN2QixJQUNBLHVCQUF3QixTQUFTLEtBQUssU0FBVTtBQUN0RDs7O0FERUEsSUFBTSxFQUFFLE9BQUFDLE9BQU0sSUFBSUMsT0FBTyxlQUFlO0FBQUEsRUFDdEMsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBO0FBQUEsSUFFWCxZQUFjO0FBQUEsSUFDZCxnQkFBZ0I7QUFBQSxJQUNoQixVQUFjO0FBQUEsSUFDZCxhQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGlCQUFpQjtBQUNmLFlBQU0sTUFBTUMsWUFBVztBQUN2QixZQUFNLEtBQU0sS0FBSyxNQUFNO0FBQ3ZCLFVBQUssQ0FBRSxNQUFNLENBQUUsTUFBTSxRQUFTRixPQUFNLEtBQU0sRUFBSTtBQUM5QyxZQUFNLFdBQVcsQ0FBRSxJQUFJLEtBQUs7QUFFNUIsaUJBQVksS0FBS0EsT0FBTSxNQUFRLEdBQUUsV0FBVztBQUM1QyxVQUFJLEtBQUssV0FBVztBQUFBLElBQ3RCO0FBQUEsSUFDQSxDQUFDLGVBQWU7QUFDZCxZQUFNLE1BQU1FLFlBQVc7QUFDdkIsWUFBTSxNQUFNLEtBQUssTUFBTTtBQUN2QixVQUFLLEtBQUssS0FBTyxLQUFJLEtBQUssV0FBVztBQUNyQyxVQUFLLENBQUUsSUFBTTtBQUNiLFVBQUk7QUFDRixjQUFNLFVBQVUsVUFBVSxVQUFXLEdBQUk7QUFBQSxNQUMzQyxTQUFVLEtBQU07QUFFZCxlQUFPLE9BQVEsa0JBQWtCLEdBQUk7QUFBQSxNQUN2QztBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFDVCxZQUFNLE1BQU9BLFlBQVc7QUFDeEIsWUFBTSxPQUFPLEtBQUs7QUFDbEIsVUFBSyxLQUFPLE1BQUssV0FBVztBQUM1QixVQUFLLENBQUUsS0FBTztBQUNkLE1BQUFELE9BQU8saUJBQWtCLEVBQUUsUUFBUSxXQUFZLElBQUs7QUFBQSxJQUN0RDtBQUFBLElBQ0EsYUFBYTtBQUNYLFlBQU0sTUFBTUMsWUFBVztBQUN2QixZQUFNLEtBQU0sS0FBSyxNQUFNO0FBQ3ZCLFVBQUssS0FBSyxLQUFPLEtBQUksS0FBSyxXQUFXO0FBQ3JDLFVBQUssQ0FBRSxHQUFLO0FBQ1osTUFBQUYsT0FBTSxpQkFBaUI7QUFDdkIsTUFBQUEsT0FBTSxjQUFpQjtBQUN2QixNQUFBQSxPQUFNLGFBQWlCO0FBQ3ZCLGVBQVMsS0FBSyxVQUFVLElBQUssbUJBQW9CO0FBQUEsSUFDbkQ7QUFBQSxJQUNBLHFCQUFxQjtBQUNuQixVQUFLQSxPQUFNLFNBQVc7QUFDdEIsTUFBQUEsT0FBTSxhQUFpQjtBQUN2QixNQUFBQSxPQUFNLGlCQUFpQjtBQUN2QixNQUFBQSxPQUFNLGNBQWlCO0FBQ3ZCLGVBQVMsS0FBSyxVQUFVLE9BQVEsbUJBQW9CO0FBQUEsSUFDdEQ7QUFBQSxJQUNBLGlCQUFrQixHQUFJO0FBQ3BCLFVBQUssRUFBRSxPQUFPLFdBQVcsU0FBVSxjQUFlLEdBQUk7QUFDcEQsUUFBQUMsT0FBTyxhQUFjLEVBQUUsUUFBUSxtQkFBbUI7QUFBQSxNQUNwRDtBQUFBLElBQ0Y7QUFBQSxJQUNBLENBQUMsZ0JBQWdCO0FBQ2YsWUFBTSxLQUFLRCxPQUFNO0FBQ2pCLFVBQUssQ0FBRSxNQUFNQSxPQUFNLFNBQVc7QUFDOUIsTUFBQUEsT0FBTSxXQUFjO0FBQ3BCLE1BQUFBLE9BQU0sY0FBYztBQUNwQixZQUFNLFNBQVNDLE9BQU8sUUFBUyxFQUFFO0FBRWpDLFVBQUk7QUFDRixjQUFNLElBQUksTUFBTSxNQUFPLEdBQUksT0FBTyxPQUFRLElBQUssT0FBTyxPQUFRLFNBQVUsRUFBRyxJQUFJO0FBQUEsVUFDN0UsUUFBUTtBQUFBLFVBQ1IsYUFBYTtBQUFBLFVBQ2IsU0FBUyxFQUFFLGNBQWMsT0FBTyxNQUFNO0FBQUEsUUFDeEMsQ0FBRTtBQUNGLFlBQUssQ0FBRSxFQUFFLEdBQUssT0FBTSxJQUFJLE1BQU8sZUFBZ0I7QUFJL0MsWUFBSyxNQUFNLFFBQVNELE9BQU0sS0FBTSxHQUFJO0FBQ2xDLFVBQUFBLE9BQU0sUUFBUUEsT0FBTSxNQUFNLE9BQVEsT0FBSyxFQUFFLE9BQU8sRUFBRztBQUNuRCxVQUFBQSxPQUFNLFdBQVdBLE9BQU0sTUFBTSxTQUFTO0FBQUEsUUFDeEM7QUFFQSxRQUFBQSxPQUFNLGFBQWlCO0FBQ3ZCLFFBQUFBLE9BQU0saUJBQWlCO0FBQ3ZCLGlCQUFTLEtBQUssVUFBVSxPQUFRLG1CQUFvQjtBQUdwRCxZQUFLLGNBQWMsTUFBTSxJQUFLO0FBQzVCLGlCQUFPLFNBQVMsT0FBTyxJQUFLLE9BQU8sT0FBUTtBQUMzQztBQUFBLFFBQ0Y7QUFFQSxRQUFBQyxPQUFPLGFBQWMsRUFBRSxXQUFXLFVBQVcsTUFBTztBQUFBLE1BQ3RELFNBQVUsS0FBTTtBQUNkLFFBQUFELE9BQU0sY0FBYztBQUFBLE1BQ3RCLFVBQUU7QUFDQSxRQUFBQSxPQUFNLFdBQVc7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxDQUFDLFlBQVk7QUFDWCxZQUFNLFNBQVNDLE9BQU8sUUFBUyxFQUFFO0FBR2pDLGtCQUFhLE1BQU1BLE9BQU8sYUFBYyxFQUFFLFVBQVUsUUFBUyxNQUFPLEdBQUcsR0FBTTtBQUU3RSxlQUFTLGlCQUFrQixTQUFTLENBQUUsT0FBUTtBQUM1QyxZQUFLLENBQUUsTUFBTSxRQUFTRCxPQUFNLEtBQU0sRUFBSTtBQUN0QyxZQUFLLEdBQUcsUUFBUSxVQUFXLGNBQWUsRUFBSTtBQUM5QyxtQkFBWSxLQUFLQSxPQUFNLE1BQVEsS0FBSyxFQUFFLFNBQVcsR0FBRSxXQUFXO0FBQUEsTUFDaEUsQ0FBRTtBQUFBLElBQ0o7QUFBQSxJQUNBLENBQUMsUUFBUyxRQUFTO0FBQ2pCLFVBQUssQ0FBRSxPQUFPLFFBQVU7QUFDeEIsWUFBTSxVQUFVLGNBQWM7QUFDOUIsWUFBTSxNQUFNLFVBQ1IsR0FBRyxPQUFPLE9BQU8sSUFBSSxPQUFPLE9BQU8sU0FBUyxPQUFPLEtBQ25ELEdBQUcsT0FBTyxPQUFPLElBQUksT0FBTyxPQUFPO0FBQ3ZDLFlBQU0sSUFBSSxNQUFNLE1BQU8sS0FBSztBQUFBLFFBQzFCLGFBQWE7QUFBQSxRQUNiLFNBQVMsRUFBRSxjQUFjLE9BQU8sTUFBTTtBQUFBLE1BQ3hDLENBQUU7QUFDRixVQUFLLENBQUUsRUFBRSxHQUFLO0FBQ2QsWUFBTSxPQUFPLE1BQU0sRUFBRSxLQUFLO0FBQzFCLE1BQUFBLE9BQU0sUUFBVyxVQUFZLEtBQUssT0FBTyxDQUFFLEtBQUssSUFBSyxJQUFJLENBQUMsSUFBUSxLQUFLLFNBQVMsQ0FBQztBQUNqRixNQUFBQSxPQUFNLFdBQVdBLE9BQU0sTUFBTSxTQUFTO0FBQ3RDLE1BQUFBLE9BQU0sWUFBWSxLQUFLO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQ0YsQ0FBRTs7O0FFL0lGLFNBQVMsU0FBQUcsY0FBYTtBQUt0QkEsT0FBTyxrQkFBa0I7QUFBQSxFQUN2QixPQUFPLENBQUM7QUFDVixDQUFFOzs7QUNQRixTQUFTLFNBQUFDLGNBQWE7QUFFdEIsSUFBSyxtQkFBbUIsYUFBYSxpQkFBaUIsUUFBUztBQUM3RCxTQUFPLGlCQUFrQixRQUFRLFFBQVM7QUFDNUM7QUFFQSxlQUFlLFdBQVc7QUFDeEIsUUFBTSxTQUFTQSxPQUFPLFFBQVMsRUFBRTtBQUNqQyxNQUFLLENBQUUsT0FBTyxVQUFVLENBQUUsT0FBTyxTQUFXO0FBRTVDLFFBQU0sTUFBTSxNQUFNLFVBQVUsY0FBYyxTQUFVLFVBQVUsRUFBRSxPQUFPLElBQUksQ0FBRTtBQUU3RSxNQUFJLGFBQWEsYUFBYTtBQUM5QixNQUFLLGVBQWUsV0FBWTtBQUU5QjtBQUFBLEVBQ0Y7QUFDQSxNQUFLLGVBQWUsVUFBWTtBQUVoQyxRQUFNLE1BQU0sTUFBTSxJQUFJLFlBQVksZ0JBQWdCLEtBQzdDLE1BQU0sSUFBSSxZQUFZLFVBQVc7QUFBQSxJQUNsQyxpQkFBaUI7QUFBQSxJQUNqQixzQkFBc0Isc0JBQXVCLE9BQU8sUUFBUztBQUFBLEVBQy9ELENBQUU7QUFFSixRQUFNLE1BQU8sR0FBRyxPQUFPLE9BQU8sbUJBQW1CO0FBQUEsSUFDL0MsUUFBUTtBQUFBLElBQVEsYUFBYTtBQUFBLElBQzdCLFNBQVMsRUFBRSxnQkFBZ0Isb0JBQW9CLGNBQWMsT0FBTyxNQUFNO0FBQUEsSUFDMUUsTUFBTSxLQUFLLFVBQVc7QUFBQSxNQUNwQixVQUFVLElBQUk7QUFBQSxNQUNkLFFBQVUsb0JBQXFCLElBQUksT0FBUSxRQUFTLENBQUU7QUFBQSxNQUN0RCxNQUFVLG9CQUFxQixJQUFJLE9BQVEsTUFBTyxDQUFFO0FBQUEsTUFDcEQsaUJBQWlCLElBQUksa0JBQWtCO0FBQUEsSUFDekMsQ0FBRTtBQUFBLEVBQ0osQ0FBRTtBQUNKO0FBRUEsU0FBUyxzQkFBdUIsS0FBTTtBQUNwQyxRQUFNLFVBQVUsSUFBSSxRQUFVLElBQU0sSUFBSSxTQUFTLEtBQVEsQ0FBRTtBQUMzRCxRQUFNLFVBQVksTUFBTSxTQUFVLFFBQVMsTUFBTSxHQUFJLEVBQUUsUUFBUyxNQUFNLEdBQUk7QUFDMUUsUUFBTSxNQUFVLEtBQU0sTUFBTztBQUM3QixRQUFNLE1BQVUsSUFBSSxXQUFZLElBQUksTUFBTztBQUMzQyxXQUFVLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxJQUFNLEtBQUssQ0FBRSxJQUFJLElBQUksV0FBWSxDQUFFO0FBQ3BFLFNBQU87QUFDVDtBQUVBLFNBQVMsb0JBQXFCLFFBQVM7QUFDckMsUUFBTSxRQUFRLElBQUksV0FBWSxNQUFPO0FBQ3JDLE1BQUksTUFBTTtBQUNWLFdBQVUsSUFBSSxHQUFHLElBQUksTUFBTSxZQUFZLElBQU0sUUFBTyxPQUFPLGFBQWMsTUFBTyxDQUFFLENBQUU7QUFDcEYsU0FBTyxLQUFNLEdBQUk7QUFDbkI7OztBQ25EQSxTQUFTLFNBQUFDLGNBQWE7OztBQ1FmLFNBQVMsZUFBZ0IsS0FBTTtBQUNwQyxRQUFNLFVBQVcsT0FBTyxJQUFLLFFBQVMsWUFBWSxFQUFHO0FBQ3JELE1BQUssQ0FBRSxPQUFPLFdBQVksR0FBSSxFQUFJLFFBQU87QUFDekMsTUFBSyxPQUFPLFNBQVMsS0FBSyxPQUFPLFNBQVMsR0FBSyxRQUFPO0FBQ3RELFNBQU87QUFDVDtBQVdPLFNBQVMsZUFBZ0IsS0FBTTtBQUNwQyxNQUFLLENBQUUsSUFBTSxRQUFPLENBQUM7QUFDckIsUUFBTSxhQUFhLElBQUksTUFBTyxTQUFVLEVBQUUsT0FBUSxPQUFRO0FBQzFELFFBQU0sT0FBTyxvQkFBSSxJQUFJO0FBQ3JCLFNBQU8sV0FBVyxJQUFLLENBQUUsTUFBTztBQUM5QixVQUFNLE9BQU8sZUFBZ0IsQ0FBRTtBQUMvQixVQUFNLFFBQVEsQ0FBQyxDQUFFLFFBQVEsQ0FBRSxLQUFLLElBQUssSUFBSztBQUMxQyxRQUFLLE1BQVEsTUFBSyxJQUFLLElBQUs7QUFDNUIsV0FBTyxFQUFFLEtBQUssR0FBRyxNQUFNLFFBQVEsR0FBRyxNQUFNO0FBQUEsRUFDMUMsQ0FBRTtBQUNKOzs7QUNqQ08sU0FBUyxRQUFTLEdBQUk7QUFDM0IsVUFBUyxLQUFLLElBQUssWUFBWSxFQUFFLFFBQVMsZUFBZSxHQUFJLEVBQUUsUUFBUyxZQUFZLEVBQUc7QUFDekY7OztBRkNBLElBQU0sRUFBRSxPQUFBQyxRQUFPLFNBQUFDLFNBQVEsSUFBSUMsT0FBTyxpQkFBaUI7QUFBQSxFQUNqRCxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFBSSxNQUFNO0FBQUEsSUFBSSxNQUFNO0FBQUEsSUFBSSxTQUFTO0FBQUEsSUFBSSxTQUFTO0FBQUEsSUFDckQsWUFBWTtBQUFBLElBQUksWUFBWTtBQUFBLElBQzVCLGNBQWMsQ0FBQztBQUFBLElBQ2YscUJBQXFCLENBQUM7QUFBQSxJQUN0QixlQUFlLENBQUM7QUFBQSxJQUNoQixzQkFBc0IsQ0FBQztBQUFBLElBQ3ZCLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUFJLE1BQU07QUFBQSxJQUNqQixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxrQkFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUlsQixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixxQkFBcUI7QUFBQSxJQUFPLGtCQUFrQjtBQUFBLElBQzlDLHFCQUFxQjtBQUFBLElBQU8sa0JBQWtCO0FBQUEsSUFDOUMscUJBQXFCO0FBQUEsSUFBTyxrQkFBa0I7QUFBQSxJQUM5QyxxQkFBcUI7QUFBQSxJQUFPLGtCQUFrQjtBQUFBLEVBQ2hEO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxZQUFhLEdBQVM7QUFBRSxNQUFBRixPQUFNLFFBQVEsRUFBRSxPQUFPO0FBQU8sTUFBQUEsT0FBTSxRQUFRO0FBQUEsSUFBSTtBQUFBLElBQ3hFLFdBQVksR0FBVTtBQUFFLE1BQUFBLE9BQU0sT0FBTyxFQUFFLE9BQU8sTUFBTSxRQUFTLE9BQU8sRUFBRztBQUFHLE1BQUFBLE9BQU0sUUFBUTtBQUFBLElBQUk7QUFBQSxJQUM1RixXQUFZLEdBQVU7QUFBRSxNQUFBQSxPQUFNLE9BQU8sRUFBRSxPQUFPO0FBQU8sTUFBQUEsT0FBTSxRQUFRO0FBQUEsSUFBSTtBQUFBLElBQ3ZFLGNBQWUsR0FBSTtBQUNqQixNQUFBQSxPQUFNLFVBQVUsRUFBRSxPQUFPO0FBR3pCLFVBQUssQ0FBRUEsT0FBTSxXQUFXQSxPQUFNLFlBQVksUUFBU0EsT0FBTSxRQUFRLE1BQU8sR0FBRyxFQUFHLENBQUUsR0FBSTtBQUNsRixRQUFBQSxPQUFNLFVBQVUsUUFBUyxFQUFFLE9BQU8sS0FBTTtBQUFBLE1BQzFDO0FBQ0EsTUFBQUEsT0FBTSxRQUFRO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGNBQWUsR0FBTztBQUFFLE1BQUFBLE9BQU0sVUFBVSxRQUFTLEVBQUUsT0FBTyxLQUFNO0FBQUcsTUFBQUEsT0FBTSxRQUFRO0FBQUEsSUFBSTtBQUFBLElBQ3JGLGlCQUFrQixHQUFJO0FBQUUsTUFBQUEsT0FBTSxhQUFhLEVBQUUsT0FBTztBQUFPLG9CQUFjO0FBQUEsSUFBRztBQUFBLElBQzVFLGlCQUFrQixHQUFJO0FBQUUsTUFBQUEsT0FBTSxhQUFhLEVBQUUsT0FBTyxNQUFNLE1BQU8sR0FBRyxHQUFJO0FBQUEsSUFBRztBQUFBLElBQzNFLGNBQXNCO0FBQUUsY0FBUyxPQUFRO0FBQUcsTUFBQUEsT0FBTSxPQUFPO0FBQUksTUFBQUEsT0FBTSxRQUFRO0FBQUEsSUFBSTtBQUFBLElBRS9FLENBQUMsWUFBYSxHQUFJO0FBQ2hCLFFBQUUsZUFBZTtBQUNqQixVQUFLQSxPQUFNLEtBQU87QUFDbEIsWUFBTSxRQUFRLGVBQWdCQSxPQUFNLEtBQU07QUFDMUMsVUFBSyxDQUFFLE9BQVE7QUFBRSxRQUFBQSxPQUFNLFFBQVE7QUFBaUU7QUFBQSxNQUFRO0FBQ3hHLE1BQUFBLE9BQU0sUUFBUTtBQUNkLE1BQUFBLE9BQU0sT0FBTztBQUNiLFVBQUk7QUFDRixjQUFNLFNBQVNFLE9BQU8sUUFBUyxFQUFFO0FBQ2pDLGNBQU0sSUFBSSxNQUFNLE1BQU8sR0FBRyxPQUFPLE9BQU8saUJBQWlCO0FBQUEsVUFDdkQsUUFBUTtBQUFBLFVBQVEsYUFBYTtBQUFBLFVBQzdCLFNBQVMsRUFBRSxnQkFBZ0IsbUJBQW1CO0FBQUEsVUFDOUMsTUFBTSxLQUFLLFVBQVcsRUFBRSxNQUFNLENBQUU7QUFBQSxRQUNsQyxDQUFFO0FBQ0YsWUFBSyxDQUFFLEVBQUUsR0FBSyxPQUFNLElBQUksTUFBTyxhQUFjO0FBQzdDLGdCQUFTLE1BQU87QUFBQSxNQUNsQixTQUFVLEtBQU07QUFBRSxRQUFBRixPQUFNLFFBQVE7QUFBQSxNQUFtQyxVQUNuRTtBQUFVLFFBQUFBLE9BQU0sT0FBTztBQUFBLE1BQU87QUFBQSxJQUNoQztBQUFBLElBRUEsQ0FBQyxXQUFZLEdBQUk7QUFDZixRQUFFLGVBQWU7QUFDakIsVUFBS0EsT0FBTSxLQUFPO0FBQ2xCLFVBQUtBLE9BQU0sS0FBSyxXQUFXLEdBQUk7QUFBRSxRQUFBQSxPQUFNLFFBQVE7QUFBMkI7QUFBQSxNQUFRO0FBSWxGLGNBQVMsS0FBTTtBQUFBLElBQ2pCO0FBQUEsSUFFQSxDQUFDLFVBQVcsR0FBSTtBQUNkLFFBQUUsZUFBZTtBQUNqQixVQUFLQSxPQUFNLEtBQU87QUFDbEIsVUFBSyxDQUFFQSxPQUFNLEtBQUssS0FBSyxHQUFPO0FBQUUsUUFBQUEsT0FBTSxRQUFRO0FBQW9CO0FBQUEsTUFBUTtBQUMxRSxVQUFLLENBQUVBLE9BQU0sUUFBUSxLQUFLLEdBQUk7QUFBRSxRQUFBQSxPQUFNLFFBQVE7QUFBa0I7QUFBQSxNQUFRO0FBQ3hFLFVBQUssQ0FBRSxvQ0FBb0MsS0FBTUEsT0FBTSxPQUFRLEdBQUk7QUFDakUsUUFBQUEsT0FBTSxRQUFRO0FBQXNFO0FBQUEsTUFDdEY7QUFDQSxNQUFBQSxPQUFNLE9BQU87QUFDYixVQUFJO0FBQ0YsY0FBTSxTQUFTRSxPQUFPLFFBQVMsRUFBRTtBQUlqQyxjQUFNLElBQUksTUFBTSxNQUFPLEdBQUcsT0FBTyxPQUFPLGtCQUFrQjtBQUFBLFVBQ3hELFFBQVE7QUFBQSxVQUFRLGFBQWE7QUFBQSxVQUM3QixTQUFTLEVBQUUsZ0JBQWdCLG1CQUFtQjtBQUFBLFVBQzlDLE1BQU0sS0FBSyxVQUFXO0FBQUEsWUFDcEIsT0FBY0YsT0FBTTtBQUFBLFlBQ3BCLE1BQWNBLE9BQU07QUFBQSxZQUNwQixjQUFjQSxPQUFNO0FBQUEsWUFDcEIsVUFBY0EsT0FBTTtBQUFBLFlBQ3BCLFVBQWNBLE9BQU07QUFBQSxVQUN0QixDQUFFO0FBQUEsUUFDSixDQUFFO0FBQ0YsY0FBTSxPQUFPLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTyxPQUFRLENBQUMsRUFBSTtBQUNoRCxZQUFLLENBQUUsRUFBRSxNQUFNLENBQUUsS0FBSyxJQUFLO0FBQ3pCLGNBQUssS0FBSyxVQUFVLFlBQWE7QUFDL0IsWUFBQUEsT0FBTSxRQUFRO0FBQ2Qsb0JBQVMsTUFBTztBQUFBLFVBQ2xCLFdBQVksQ0FBRSxjQUFjLGdCQUFnQixlQUFnQixFQUFFLFNBQVUsS0FBSyxLQUFNLEdBQUk7QUFDckYsWUFBQUEsT0FBTSxRQUFRLEtBQUssV0FBVztBQUFBLFVBQ2hDLE9BQU87QUFDTCxZQUFBQSxPQUFNLFFBQVEsS0FBSyxXQUFXO0FBQUEsVUFDaEM7QUFDQSxVQUFBQSxPQUFNLE9BQU87QUFDYjtBQUFBLFFBQ0Y7QUFHQSxZQUFLLEtBQUssT0FBUTtBQUNoQixVQUFBRSxPQUFPLFFBQVMsRUFBRSxNQUFNLFFBQVEsS0FBSztBQUFBLFFBQ3ZDO0FBQ0EsUUFBQUYsT0FBTSxTQUFTLEtBQUssV0FBVztBQUMvQixnQkFBUyxRQUFTO0FBQUEsTUFDcEIsU0FBVSxLQUFNO0FBQ2QsUUFBQUEsT0FBTSxRQUFRO0FBQUEsTUFDaEIsVUFBRTtBQUFVLFFBQUFBLE9BQU0sT0FBTztBQUFBLE1BQU87QUFBQSxJQUNsQztBQUFBLElBRUEsQ0FBQyxlQUFlO0FBQ2QsVUFBSyxFQUFJLGNBQWMsY0FBZSxFQUFJLHFCQUFxQixRQUFXO0FBQzFFLFVBQUk7QUFDRixjQUFNLFNBQVMsTUFBTSxVQUFVLFNBQVMsT0FBUSxDQUFFLEtBQU0sR0FBRyxFQUFFLFVBQVUsS0FBSyxDQUFFO0FBQzlFLFlBQUssQ0FBRSxVQUFVLENBQUUsT0FBTyxPQUFTO0FBQ25DLGNBQU0sU0FBUyxPQUFPLFFBQVMsQ0FBRSxNQUFPLEVBQUUsT0FBTyxDQUFDLENBQUU7QUFDcEQsY0FBTSxXQUFXQSxPQUFNLFdBQVcsS0FBSztBQUN2QyxRQUFBQSxPQUFNLGFBQWEsV0FDZixXQUFXLE9BQU8sT0FBTyxLQUFNLElBQUssSUFDcEMsT0FBTyxLQUFNLElBQUs7QUFDdEIsc0JBQWM7QUFBQSxNQUNoQixTQUFVLEtBQU07QUFBQSxNQUE2QjtBQUFBLElBQy9DO0FBQUEsSUFFQSxDQUFDLGNBQWUsR0FBSTtBQUNsQixRQUFFLGVBQWU7QUFDakIsVUFBS0EsT0FBTSxLQUFPO0FBQ2xCLFlBQU0sU0FBVUUsT0FBTyxRQUFTLEVBQUU7QUFDbEMsWUFBTSxVQUFVRixPQUFNO0FBQ3RCLFlBQU0sUUFBVUEsT0FBTSxhQUFhLE9BQVEsQ0FBRSxNQUFPLEVBQUUsS0FBTSxFQUFFLElBQUssQ0FBRSxNQUFPLEVBQUUsSUFBSztBQUNuRixVQUFLLENBQUUsTUFBTSxRQUFTO0FBR3BCLGNBQU1DLFNBQVEsWUFBWTtBQUMxQjtBQUFBLE1BQ0Y7QUFDQSxNQUFBRCxPQUFNLE9BQU87QUFDYixVQUFJO0FBQ0YsY0FBTSxJQUFJLE1BQU0sTUFBTyxHQUFHLE9BQU8sT0FBTyxJQUFJLE9BQU8sWUFBWTtBQUFBLFVBQzdELFFBQVE7QUFBQSxVQUFRLGFBQWE7QUFBQSxVQUM3QixTQUFTLEVBQUUsZ0JBQWdCLG9CQUFvQixjQUFjLE9BQU8sTUFBTTtBQUFBLFVBQzFFLE1BQU0sS0FBSyxVQUFXLEVBQUUsUUFBUSxPQUFPLGNBQWNBLE9BQU0sY0FBYyxHQUFHLENBQUU7QUFBQSxRQUNoRixDQUFFO0FBQ0YsY0FBTSxPQUFPLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTyxPQUFRLENBQUMsRUFBSTtBQUNoRCxZQUFLLENBQUUsRUFBRSxJQUFLO0FBQ1osVUFBQUEsT0FBTSxRQUFRLEtBQUssV0FBVztBQUM5QixVQUFBQSxPQUFNLE9BQU87QUFDYjtBQUFBLFFBQ0Y7QUFDQSxRQUFBQSxPQUFNLGdCQUF1QixLQUFLLFVBQVUsQ0FBQztBQUM3QyxRQUFBQSxPQUFNLHVCQUF1QkEsT0FBTSxjQUFjLElBQUssQ0FBRSxHQUFHLE1BQU8sQ0FBRSxHQUFHLENBQUUsQ0FBRTtBQUMzRSxZQUFLQSxPQUFNLFFBQVM7QUFDbEIsaUJBQU8sU0FBUyxPQUFPQSxPQUFNO0FBQzdCO0FBQUEsUUFDRjtBQUNBLGVBQU8sU0FBUyxPQUFPO0FBQUEsTUFDekIsU0FBVSxLQUFNO0FBQ2QsUUFBQUEsT0FBTSxRQUFRO0FBQUEsTUFDaEIsVUFBRTtBQUFVLFFBQUFBLE9BQU0sT0FBTztBQUFBLE1BQU87QUFBQSxJQUNsQztBQUFBLElBRUEsQ0FBQyxjQUFjO0FBQ2IsWUFBTSxTQUFTRSxPQUFPLFFBQVMsRUFBRTtBQUNqQyxVQUFJO0FBQ0YsY0FBTSxNQUFPLEdBQUcsT0FBTyxPQUFPLG9CQUFvQjtBQUFBLFVBQ2hELFFBQVE7QUFBQSxVQUFRLGFBQWE7QUFBQSxVQUM3QixTQUFTLEVBQUUsY0FBYyxPQUFPLE1BQU07QUFBQSxRQUN4QyxDQUFFO0FBQUEsTUFDSixTQUFVLEtBQU07QUFBQSxNQUFxQjtBQUNyQyxVQUFLRixPQUFNLFFBQVM7QUFDbEIsZUFBTyxTQUFTLE9BQU9BLE9BQU07QUFDN0I7QUFBQSxNQUNGO0FBQ0EsYUFBTyxTQUFTLE9BQU87QUFBQSxJQUN6QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULENBQUMsT0FBTztBQUNOLE1BQUFBLE9BQU0sVUFBbUIsQ0FBQyxDQUFFRSxPQUFPLFFBQVMsRUFBRSxNQUFNO0FBQ3BELE1BQUFGLE9BQU0sbUJBQXFCLGNBQWMsYUFBaUIscUJBQXFCO0FBTS9FLE1BQUFBLE9BQU0sY0FBYyxDQUFFQSxPQUFNO0FBQzVCLE1BQUFBLE9BQU0sY0FBYyxDQUFFQSxPQUFNO0FBQzVCLE1BQUFBLE9BQU0sY0FBYyxDQUFFQSxPQUFNO0FBQzVCLE1BQUFBLE9BQU0sY0FBYyxDQUFFQSxPQUFNO0FBQzVCLGNBQVNBLE9BQU0sSUFBSztBQUVwQixZQUFNLFNBQVNFLE9BQU8sUUFBUyxFQUFFO0FBQ2pDLFVBQUssT0FBTyxRQUFTO0FBQ25CLFlBQUk7QUFDRixnQkFBTSxJQUFJLE1BQU0sTUFBTyxHQUFHLE9BQU8sT0FBTyxZQUFZO0FBQUEsWUFDbEQsYUFBYTtBQUFBLFlBQ2IsU0FBUyxFQUFFLGNBQWMsT0FBTyxNQUFNO0FBQUEsVUFDeEMsQ0FBRTtBQUNGLGNBQUssRUFBRSxJQUFLO0FBQ1Ysa0JBQU0sT0FBTyxNQUFNLEVBQUUsS0FBSztBQUMxQixrQkFBTSxPQUFPLEtBQUssUUFBUSxDQUFDO0FBQzNCLGdCQUFLLEtBQUssVUFBVSxLQUFNLENBQUUsRUFBRSxLQUFNO0FBQ2xDLHFCQUFPLFNBQVMsT0FBTyxLQUFNLENBQUUsRUFBRTtBQUNqQztBQUFBLFlBQ0Y7QUFHQSxvQkFBUyxLQUFNO0FBQ2Y7QUFBQSxVQUNGO0FBQUEsUUFDRixTQUFVLEtBQU07QUFBQSxRQUErQjtBQUFBLE1BQ2pEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFFO0FBRUYsU0FBUyxRQUFTLE1BQU87QUFDdkIsRUFBQUYsT0FBTSxPQUFjO0FBQ3BCLEVBQUFBLE9BQU0sY0FBYyxTQUFTO0FBQzdCLEVBQUFBLE9BQU0sY0FBYyxTQUFTO0FBQzdCLEVBQUFBLE9BQU0sY0FBYyxTQUFTO0FBQzdCLEVBQUFBLE9BQU0sY0FBYyxTQUFTO0FBRTdCLFFBQU0sUUFBUSxFQUFFLE9BQU8sR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLFFBQVEsRUFBRTtBQUNyRCxRQUFNLElBQVEsTUFBTyxJQUFLLEtBQUs7QUFDL0IsV0FBVSxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQU07QUFDN0IsSUFBQUEsT0FBTyxjQUFjLENBQUMsU0FBVSxJQUFJLE1BQU07QUFDMUMsSUFBQUEsT0FBTyxjQUFjLENBQUMsTUFBTyxJQUFPLElBQUs7QUFBQSxFQUMzQztBQUNGO0FBRUEsU0FBUyxnQkFBZ0I7QUFDdkIsUUFBTSxTQUFTLGVBQWdCQSxPQUFNLFVBQVc7QUFDaEQsRUFBQUEsT0FBTSxlQUFzQjtBQUM1QixFQUFBQSxPQUFNLHNCQUFzQixPQUFPLElBQUssQ0FBRSxHQUFHLE1BQU8sQ0FBRSxHQUFHLENBQUUsQ0FBRTtBQUMvRDs7O0FHN1BBLFNBQVMsU0FBQUcsZUFBYTtBQUd0QixJQUFNLEVBQUUsT0FBQUMsUUFBTyxTQUFBQyxTQUFRLElBQUlDLFFBQU8sZ0JBQWdCO0FBQUEsRUFDaEQsT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQUksTUFBTTtBQUFBLElBQ2pCLE9BQU87QUFBQSxJQUFJLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUlqQixpQkFBaUI7QUFBQSxJQUNqQixnQkFBaUI7QUFBQSxFQUNuQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsWUFBYSxHQUFJO0FBQUUsTUFBQUYsT0FBTSxRQUFRLEVBQUUsT0FBTztBQUFPLE1BQUFBLE9BQU0sUUFBUTtBQUFBLElBQUk7QUFBQSxJQUNuRSxXQUFZLEdBQUk7QUFBRSxNQUFBQSxPQUFNLE9BQU8sRUFBRSxPQUFPLE1BQU0sUUFBUyxPQUFPLEVBQUc7QUFBRyxNQUFBQSxPQUFNLFFBQVE7QUFBQSxJQUFJO0FBQUEsSUFDdEYsY0FBYztBQUFFLGVBQVUsT0FBUTtBQUFHLE1BQUFBLE9BQU0sT0FBTztBQUFJLE1BQUFBLE9BQU0sUUFBUTtBQUFBLElBQUk7QUFBQSxJQUN4RSxDQUFDLFlBQWEsR0FBSTtBQUNoQixRQUFFLGVBQWU7QUFDakIsVUFBS0EsT0FBTSxLQUFPO0FBQ2xCLFlBQU0sUUFBUSxlQUFnQkEsT0FBTSxLQUFNO0FBQzFDLFVBQUssQ0FBRSxPQUFRO0FBQUUsUUFBQUEsT0FBTSxRQUFRO0FBQWlFO0FBQUEsTUFBUTtBQUN4RyxNQUFBQSxPQUFNLFFBQVE7QUFDZCxNQUFBQSxPQUFNLE9BQU87QUFDYixVQUFJO0FBQ0YsY0FBTSxTQUFTRSxRQUFPLFFBQVMsRUFBRTtBQUNqQyxjQUFNLElBQUksTUFBTSxNQUFPLEdBQUcsT0FBTyxPQUFPLGdCQUFnQjtBQUFBLFVBQ3RELFFBQVE7QUFBQSxVQUFRLGFBQWE7QUFBQSxVQUM3QixTQUFTLEVBQUUsZ0JBQWdCLG1CQUFtQjtBQUFBLFVBQzlDLE1BQU0sS0FBSyxVQUFXLEVBQUUsTUFBTSxDQUFFO0FBQUEsUUFDbEMsQ0FBRTtBQUNGLFlBQUssQ0FBRSxFQUFFLEdBQUssT0FBTSxJQUFJLE1BQU8sYUFBYztBQUM3QyxpQkFBVSxNQUFPO0FBQUEsTUFDbkIsU0FBVSxLQUFNO0FBQUUsUUFBQUYsT0FBTSxRQUFRO0FBQUEsTUFBbUMsVUFDbkU7QUFBVSxRQUFBQSxPQUFNLE9BQU87QUFBQSxNQUFPO0FBQUEsSUFDaEM7QUFBQSxJQUNBLENBQUMsV0FBWSxHQUFJO0FBQ2YsUUFBRSxlQUFlO0FBQ2pCLFVBQUtBLE9BQU0sS0FBTztBQUNsQixVQUFLQSxPQUFNLEtBQUssV0FBVyxHQUFJO0FBQUUsUUFBQUEsT0FBTSxRQUFRO0FBQTJCO0FBQUEsTUFBUTtBQUNsRixNQUFBQSxPQUFNLE9BQU87QUFDYixVQUFJO0FBQ0YsY0FBTSxTQUFTRSxRQUFPLFFBQVMsRUFBRTtBQUNqQyxjQUFNLElBQUksTUFBTSxNQUFPLEdBQUcsT0FBTyxPQUFPLGlCQUFpQjtBQUFBLFVBQ3ZELFFBQVE7QUFBQSxVQUFRLGFBQWE7QUFBQSxVQUM3QixTQUFTLEVBQUUsZ0JBQWdCLG1CQUFtQjtBQUFBLFVBQzlDLE1BQU0sS0FBSyxVQUFXLEVBQUUsT0FBT0YsT0FBTSxPQUFPLE1BQU1BLE9BQU0sS0FBSyxDQUFFO0FBQUEsUUFDakUsQ0FBRTtBQUNGLFlBQUssQ0FBRSxFQUFFLElBQUs7QUFDWixnQkFBTSxPQUFPLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTyxPQUFRLENBQUMsRUFBSTtBQUNoRCxVQUFBQSxPQUFNLFFBQVEsS0FBSyxVQUFVLGFBQWEsNENBQTRDO0FBQ3RGLFVBQUFBLE9BQU0sT0FBTztBQUNiO0FBQUEsUUFDRjtBQUVBLGNBQU0sUUFBUSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU8sT0FBUSxDQUFDLEVBQUk7QUFDakQsWUFBSyxTQUFTLE1BQU0sTUFBUSxRQUFPLFFBQVEsTUFBTTtBQUVqRCxjQUFNLElBQUksTUFBTSxNQUFPLEdBQUcsT0FBTyxPQUFPLFlBQVk7QUFBQSxVQUNsRCxRQUFRO0FBQUEsVUFBTyxhQUFhO0FBQUEsVUFDNUIsU0FBUyxFQUFFLGNBQWMsT0FBTyxNQUFNO0FBQUEsUUFDeEMsQ0FBRTtBQUNGLGNBQU0sUUFBUSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU8sT0FBUSxDQUFDLEVBQUk7QUFDakQsY0FBTSxPQUFTLFNBQVMsTUFBTSxRQUFVLENBQUM7QUFDekMsWUFBSyxLQUFLLFVBQVUsS0FBTSxDQUFFLEVBQUUsS0FBTTtBQUNsQyxpQkFBTyxTQUFTLE9BQU8sS0FBTSxDQUFFLEVBQUU7QUFDakM7QUFBQSxRQUNGO0FBQ0EsZUFBTyxTQUFTLE9BQU87QUFBQSxNQUN6QixTQUFVLEtBQU07QUFDZCxRQUFBQSxPQUFNLFFBQVE7QUFDZCxRQUFBQSxPQUFNLE9BQU87QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULE9BQU87QUFLTCxNQUFBQSxPQUFNLGtCQUFrQixDQUFFQSxPQUFNO0FBQ2hDLE1BQUFBLE9BQU0saUJBQWtCLENBQUVBLE9BQU07QUFDaEMsZUFBVUEsT0FBTSxLQUFNO0FBQUEsSUFDeEI7QUFBQSxFQUNGO0FBQ0YsQ0FBRTtBQUVGLFNBQVMsU0FBVSxNQUFPO0FBQ3hCLEVBQUFBLE9BQU0sUUFBa0I7QUFDeEIsRUFBQUEsT0FBTSxrQkFBa0IsU0FBUztBQUNqQyxFQUFBQSxPQUFNLGlCQUFrQixTQUFTO0FBQ25DOzs7QUM3RkEsU0FBUyxTQUFBRyxlQUFhO0FBRXRCLElBQU0sRUFBRSxPQUFBQyxRQUFPLFNBQUFDLFNBQVEsSUFBSUYsUUFBTyxpQkFBaUI7QUFBQSxFQUNqRCxPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUFJLFNBQVM7QUFBQSxJQUFJLFdBQVc7QUFBQSxJQUNyQyxlQUFlO0FBQUEsSUFBTyxjQUFjO0FBQUEsSUFDcEMsT0FBTztBQUFBLElBQUksTUFBTTtBQUFBLElBQ2pCLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNVixpQkFBb0I7QUFBQSxJQUNwQixnQkFBb0I7QUFBQSxJQUNwQixvQkFBb0I7QUFBQSxFQUN0QjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsWUFBYSxHQUFJO0FBQUUsTUFBQUMsT0FBTSxRQUFRLEVBQUUsT0FBTztBQUFPLE1BQUFBLE9BQU0sUUFBUTtBQUFBLElBQUk7QUFBQSxJQUNuRSxXQUFZLEdBQUk7QUFBRSxNQUFBQSxPQUFNLFVBQVUsRUFBRSxPQUFPLE1BQU0sUUFBUyxPQUFPLEVBQUc7QUFBRyxNQUFBQSxPQUFNLFFBQVE7QUFBQSxJQUFJO0FBQUEsSUFDekYsV0FBWSxHQUFJO0FBQUUsTUFBQUEsT0FBTSxPQUFPLEVBQUUsT0FBTztBQUFPLE1BQUFBLE9BQU0sUUFBUTtBQUFBLElBQUk7QUFBQSxJQUNqRSxjQUFjO0FBQUUsTUFBQUUsVUFBVSxPQUFRO0FBQUcsTUFBQUYsT0FBTSxVQUFVO0FBQUksTUFBQUEsT0FBTSxRQUFRO0FBQUEsSUFBSTtBQUFBLElBQzNFLENBQUMsWUFBYSxHQUFJO0FBQ2hCLFFBQUUsZUFBZTtBQUNqQixVQUFLQSxPQUFNLEtBQU87QUFDbEIsWUFBTSxRQUFRRyxnQkFBZ0JILE9BQU0sS0FBTTtBQUMxQyxVQUFLLENBQUUsT0FBUTtBQUFFLFFBQUFBLE9BQU0sUUFBUTtBQUFpRTtBQUFBLE1BQVE7QUFDeEcsTUFBQUEsT0FBTSxRQUFRO0FBQ2QsTUFBQUEsT0FBTSxPQUFPO0FBQ2IsVUFBSTtBQUNGLGNBQU0sU0FBU0QsUUFBTyxRQUFTLEVBQUU7QUFDakMsY0FBTSxJQUFJLE1BQU0sTUFBTyxHQUFHLE9BQU8sT0FBTyxpQkFBaUI7QUFBQSxVQUN2RCxRQUFRO0FBQUEsVUFBUSxhQUFhO0FBQUEsVUFDN0IsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUI7QUFBQSxVQUM5QyxNQUFNLEtBQUssVUFBVyxFQUFFLE1BQU0sQ0FBRTtBQUFBLFFBQ2xDLENBQUU7QUFDRixZQUFLLENBQUUsRUFBRSxHQUFLLE9BQU0sSUFBSSxNQUFPLGFBQWM7QUFDN0MsUUFBQUcsVUFBVSxNQUFPO0FBQUEsTUFDbkIsU0FBVSxLQUFNO0FBQUUsUUFBQUYsT0FBTSxRQUFRO0FBQUEsTUFBbUMsVUFDbkU7QUFBVSxRQUFBQSxPQUFNLE9BQU87QUFBQSxNQUFPO0FBQUEsSUFDaEM7QUFBQSxJQUNBLENBQUMsV0FBWSxHQUFJO0FBQ2YsUUFBRSxlQUFlO0FBQ2pCLFVBQUtBLE9BQU0sS0FBTztBQUNsQixVQUFLQSxPQUFNLFFBQVEsV0FBVyxHQUFJO0FBQUUsUUFBQUEsT0FBTSxRQUFRO0FBQTJCO0FBQUEsTUFBUTtBQUNyRixNQUFBQSxPQUFNLE9BQU87QUFDYixVQUFJO0FBQ0YsY0FBTSxTQUFTRCxRQUFPLFFBQVMsRUFBRTtBQUNqQyxjQUFNLElBQUksTUFBTSxNQUFPLEdBQUcsT0FBTyxPQUFPLG1CQUFtQjtBQUFBLFVBQ3pELFFBQVE7QUFBQSxVQUFRLGFBQWE7QUFBQSxVQUM3QixTQUFTLEVBQUUsZ0JBQWdCLG1CQUFtQjtBQUFBLFVBQzlDLE1BQU0sS0FBSyxVQUFXO0FBQUEsWUFDcEIsTUFBTUMsT0FBTTtBQUFBLFlBQ1osT0FBT0EsT0FBTTtBQUFBLFlBQ2IsVUFBVUEsT0FBTTtBQUFBLFlBQ2hCLGNBQWNBLE9BQU07QUFBQSxVQUN0QixDQUFFO0FBQUEsUUFDSixDQUFFO0FBQ0YsY0FBTSxPQUFPLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTyxPQUFRLENBQUMsRUFBSTtBQUNoRCxZQUFLLENBQUUsRUFBRSxJQUFLO0FBQ1osY0FBSyxLQUFLLFVBQVUsV0FBYSxDQUFBQSxPQUFNLFFBQVE7QUFBQSxtQkFDckMsS0FBSyxVQUFVLHFCQUF1QixDQUFBQSxPQUFNLFFBQVE7QUFBQSxtQkFDcEQsS0FBSyxVQUFVLGFBQWUsQ0FBQUEsT0FBTSxRQUFRO0FBQUEsY0FDakQsQ0FBQUEsT0FBTSxRQUFRO0FBQ25CLFVBQUFBLE9BQU0sT0FBTztBQUNiO0FBQUEsUUFDRjtBQUNBLGVBQU8sU0FBUyxPQUFPLEtBQUs7QUFBQSxNQUM5QixTQUFVLEtBQU07QUFDZCxRQUFBQSxPQUFNLFFBQVE7QUFDZCxRQUFBQSxPQUFNLE9BQU87QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxrQkFBbUIsR0FBSTtBQUN0QixRQUFFLGVBQWU7QUFDakIsVUFBS0EsT0FBTSxLQUFPO0FBQ2xCLE1BQUFBLE9BQU0sT0FBTztBQUNiLFVBQUk7QUFDRixjQUFNLFNBQVNELFFBQU8sUUFBUyxFQUFFO0FBQ2pDLGNBQU0sSUFBSSxNQUFNLE1BQU8sR0FBRyxPQUFPLE9BQU8sbUJBQW1CO0FBQUEsVUFDekQsUUFBUTtBQUFBLFVBQVEsYUFBYTtBQUFBLFVBQzdCLFNBQVMsRUFBRSxnQkFBZ0Isb0JBQW9CLGNBQWMsT0FBTyxNQUFNO0FBQUEsVUFDMUUsTUFBTSxLQUFLLFVBQVcsRUFBRSxNQUFNQyxPQUFNLEtBQUssQ0FBRTtBQUFBLFFBQzdDLENBQUU7QUFDRixjQUFNLE9BQU8sTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFPLE9BQVEsQ0FBQyxFQUFJO0FBQ2hELFlBQUssQ0FBRSxFQUFFLElBQUs7QUFDWixjQUFLLEtBQUssVUFBVSxxQkFBMEIsQ0FBQUEsT0FBTSxRQUFRO0FBQUEsbUJBQ2xELEtBQUssVUFBVSxnQkFBcUIsQ0FBQUEsT0FBTSxRQUFRO0FBQUEsY0FDYixDQUFBQSxPQUFNLFFBQVE7QUFDN0QsVUFBQUEsT0FBTSxPQUFPO0FBQ2I7QUFBQSxRQUNGO0FBQ0EsZUFBTyxTQUFTLE9BQU8sS0FBSztBQUFBLE1BQzlCLFNBQVUsS0FBTTtBQUNkLFFBQUFBLE9BQU0sUUFBUTtBQUNkLFFBQUFBLE9BQU0sT0FBTztBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsQ0FBQyxPQUFPO0FBS04sTUFBQUEsT0FBTSxrQkFBcUIsQ0FBRUEsT0FBTTtBQUNuQyxNQUFBQSxPQUFNLGlCQUFxQixDQUFFQSxPQUFNO0FBQ25DLE1BQUFBLE9BQU0scUJBQXFCLENBQUVBLE9BQU07QUFFbkMsWUFBTSxTQUFTRCxRQUFPLFFBQVMsRUFBRTtBQUNqQyxNQUFBQyxPQUFNLFdBQVcsQ0FBQyxDQUFFLE9BQU87QUFDM0IsMEJBQW9CO0FBR3BCLFlBQU0sU0FBUyxJQUFJLGdCQUFpQixPQUFPLFNBQVMsTUFBTztBQUMzRCxZQUFNLE9BQU8sT0FBTyxJQUFLLG9CQUFxQixLQUFLO0FBQ25ELFVBQUssQ0FBRSxNQUFPO0FBQ1osd0JBQWlCLDhEQUErRDtBQUNoRjtBQUFBLE1BQ0Y7QUFDQSxNQUFBQSxPQUFNLE9BQU87QUFFYixVQUFJO0FBQ0YsY0FBTSxJQUFJLE1BQU07QUFBQSxVQUNkLEdBQUcsT0FBTyxPQUFPLHlCQUF5QixtQkFBb0IsSUFBSyxDQUFDO0FBQUEsVUFDcEUsRUFBRSxhQUFhLFVBQVU7QUFBQSxRQUMzQjtBQUNBLGNBQU0sT0FBTyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU8sT0FBUSxDQUFDLEVBQUk7QUFDaEQsWUFBSyxDQUFFLEVBQUUsSUFBSztBQUNaLGNBQUssS0FBSyxVQUFVLE9BQVksaUJBQWlCLG9DQUFxQztBQUFBLG1CQUM1RSxLQUFLLFVBQVUsVUFBWSxpQkFBaUIsMEJBQTJCO0FBQUEsY0FDNUMsaUJBQWlCLGdDQUFpQztBQUN2RjtBQUFBLFFBQ0Y7QUFDQSxRQUFBQSxPQUFNLFVBQWdCLEtBQUs7QUFDM0IsUUFBQUEsT0FBTSxVQUFnQixLQUFLO0FBQzNCLFFBQUFBLE9BQU0sWUFBZ0IsS0FBSztBQUMzQixRQUFBQSxPQUFNLGdCQUFnQjtBQUN0Qiw0QkFBb0I7QUFBQSxNQUN0QixTQUFVLEtBQU07QUFDZCx3QkFBaUIsK0NBQWdEO0FBQUEsTUFDbkU7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUU7QUFFRixTQUFTLHNCQUFzQjtBQUk3QixNQUFLQSxPQUFNLFVBQVc7QUFDcEIsSUFBQUEsT0FBTSxrQkFBcUI7QUFDM0IsSUFBQUEsT0FBTSxpQkFBcUI7QUFDM0IsSUFBQUEsT0FBTSxxQkFBcUIsQ0FBRUEsT0FBTSxpQkFBaUIsQ0FBQyxDQUFFQSxPQUFNO0FBQzdEO0FBQUEsRUFDRjtBQUNBLEVBQUFBLE9BQU0sa0JBQXFCQSxPQUFNLFVBQVUsV0FBVyxDQUFDLENBQUVBLE9BQU07QUFDL0QsRUFBQUEsT0FBTSxpQkFBcUJBLE9BQU0sVUFBVTtBQUMzQyxFQUFBQSxPQUFNLHFCQUFxQjtBQUM3QjtBQUVBLFNBQVNFLFVBQVUsTUFBTztBQUN4QixFQUFBRixPQUFNLFFBQVE7QUFDZCxzQkFBb0I7QUFDdEI7QUFFQSxTQUFTLGdCQUFpQixLQUFNO0FBQzlCLEVBQUFBLE9BQU0sZUFBZTtBQUNyQixzQkFBb0I7QUFDdEI7QUFFQSxTQUFTRyxnQkFBZ0IsS0FBTTtBQUM3QixRQUFNLFVBQVcsT0FBTyxJQUFLLFFBQVMsWUFBWSxFQUFHO0FBQ3JELE1BQUssQ0FBRSxPQUFPLFdBQVksR0FBSSxFQUFJLFFBQU87QUFDekMsTUFBSyxPQUFPLFNBQVMsS0FBSyxPQUFPLFNBQVMsR0FBSyxRQUFPO0FBQ3RELFNBQU87QUFDVDs7O0FDcExBLHVCQUFvQjtBQURwQixTQUFTLFNBQUFDLGVBQWE7QUFJdEIsSUFBSSxnQkFBZ0I7QUFJcEIsSUFBTSxZQUFZO0FBQUEsRUFDaEIsY0FBYztBQUFBLEVBQ2QsU0FBUztBQUFBLEVBQ1Qsa0JBQWtCO0FBQ3BCO0FBRUEsSUFBTSx3QkFBd0IsT0FBTyxpQkFBaUIsY0FBYyxhQUFhLGFBQWE7QUFFOUYsSUFBTSxpQkFBaUIsTUFBTSwyQkFBMkIsS0FBTSxVQUFVLGFBQWEsRUFBRztBQUV4RixJQUFNLFdBQVcsT0FBUTtBQUFBLEVBQ3ZCLE1BQWtCO0FBQUEsRUFDbEIsTUFBa0I7QUFBQSxFQUNsQixTQUFrQjtBQUFBLEVBQ2xCLEtBQWtCO0FBQUEsRUFDbEIsT0FBa0IsYUFBYTtBQUFBLEVBQy9CLFdBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsWUFBa0I7QUFBQSxFQUNsQixnQkFBa0I7QUFBQSxFQUNsQixjQUFrQjtBQUFBLEVBQ2xCLFFBQWtCO0FBQUEsRUFDbEIsT0FBa0I7QUFDcEI7QUFFQSxJQUFNLEVBQUUsT0FBQUMsUUFBTyxTQUFBQyxTQUFRLElBQUlDLFFBQU8sa0JBQWtCO0FBQUEsRUFDbEQsT0FBTztBQUFBLElBQ0wsS0FBSyxTQUFTO0FBQUEsSUFDZCxTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsSUFDWCxnQkFBZ0I7QUFBQSxJQUNoQixJQUFJLEVBQUUsTUFBTSxJQUFJLFlBQVksSUFBSSxxQkFBcUIsTUFBTTtBQUFBO0FBQUE7QUFBQSxJQUczRCxVQUFVO0FBQUE7QUFBQSxJQUVWLFlBQWM7QUFBQSxJQUNkLGFBQWM7QUFBQSxJQUNkLGFBQWM7QUFBQSxJQUNkLFVBQWM7QUFBQSxJQUNkLFNBQWM7QUFBQSxJQUNkLFdBQWM7QUFBQSxJQUNkLElBQUksWUFBWTtBQUNkLGFBQU9BLFFBQU8sUUFBUyxFQUFFLE1BQU0sYUFBYTtBQUFBLElBQzlDO0FBQUEsSUFDQSxJQUFJLFlBQVk7QUFDZCxhQUFPQSxRQUFPLFFBQVMsRUFBRSxNQUFNLGFBQWE7QUFBQSxJQUM5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLQSxnQkFBa0IsMEJBQTBCO0FBQUEsSUFDNUMsZ0JBQWtCLDBCQUEwQjtBQUFBLElBQzVDLGVBQWtCLDBCQUEwQjtBQUFBLEVBQzlDO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxDQUFDLFdBQVksR0FBSTtBQUNmLFlBQU0sUUFBVSxFQUFFLE9BQU8sYUFBYyxZQUFhO0FBQ3BELFlBQU0sVUFBVSxFQUFFLE9BQU8sYUFBYyxjQUFlO0FBQ3RELFlBQU0sVUFBVSxDQUFDLENBQUUsRUFBRSxPQUFPO0FBQzVCLFVBQUssQ0FBRUYsT0FBTSxJQUFJLEtBQU87QUFFeEIsTUFBQUEsT0FBTSxJQUFJLE1BQU8sS0FBTSxFQUFHLE9BQVEsSUFBSTtBQUN0QyxVQUFLLGNBQWdCLGNBQWMsYUFBYztBQUNqRCxzQkFBZ0IsV0FBWSxXQUFXLEdBQUk7QUFBQSxJQUM3QztBQUFBLElBQ0EsQ0FBQyxjQUFjO0FBQ2IsVUFBSyxPQUFPLGlCQUFpQixZQUFjO0FBQzNDLFVBQUk7QUFDRixjQUFNLFNBQVMsTUFBTSxhQUFhLGtCQUFrQjtBQUNwRCxRQUFBQSxPQUFNLGlCQUFpQjtBQUN2QixRQUFBRyxxQkFBb0I7QUFDcEIsWUFBSyxXQUFXLFdBQVk7QUFFMUIsaUJBQU8sU0FBUyxPQUFPO0FBQUEsUUFDekI7QUFBQSxNQUNGLFNBQVUsS0FBTTtBQUFBLE1BRWhCO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxjQUFlLEdBQUk7QUFDbEIsWUFBTSxPQUFPLEdBQUcsUUFBUSxRQUFTLENBQUU7QUFFbkMsVUFBSyxHQUFHLE9BQVMsR0FBRSxPQUFPLFFBQVE7QUFDbEMsVUFBSyxLQUFPLFVBQVUsSUFBSztBQUFBLElBQzdCO0FBQUEsSUFDQSxDQUFDLFlBQVk7QUFFWCxVQUFLLGVBQWUsR0FBSTtBQUN0QixpQkFBUyxjQUFlLHFCQUFzQixHQUFHLE1BQU07QUFDdkQ7QUFBQSxNQUNGO0FBRUEsTUFBQUgsT0FBTSxjQUFjO0FBQ3BCLE1BQUFBLE9BQU0sY0FBYztBQUNwQixNQUFBQSxPQUFNLGFBQWM7QUFDcEIsVUFBSyxDQUFFLFVBQVUsY0FBYyxjQUFlO0FBQzVDLFFBQUFBLE9BQU0sY0FBYztBQUNwQjtBQUFBLE1BQ0Y7QUFDQSxVQUFJO0FBQ0YsY0FBTSxTQUFTLE1BQU0sVUFBVSxhQUFhLGFBQWMsRUFBRSxPQUFPLEVBQUUsWUFBWSxPQUFPLEVBQUUsQ0FBRTtBQUM1RixrQkFBVSxlQUFlO0FBQ3pCLGNBQU0sUUFBUSxTQUFTLGNBQWUsdUJBQXdCO0FBQzlELFlBQUssT0FBUTtBQUNYLGdCQUFNLFlBQVk7QUFDbEIsZ0JBQU0sSUFBSSxRQUFTLGFBQVcsTUFBTSxpQkFBa0Isa0JBQWtCLFNBQVMsRUFBRSxNQUFNLEtBQUssQ0FBRSxDQUFFO0FBQ2xHLFVBQUFBLE9BQU0sY0FBYztBQUFBLFFBQ3RCO0FBQUEsTUFDRixTQUFVLEtBQU07QUFDZCxRQUFBQSxPQUFNLGNBQWMsS0FBSyxTQUFTLG9CQUM5QixrQ0FDQTtBQUFBLE1BQ047QUFBQSxJQUNGO0FBQUEsSUFDQSxDQUFDLGVBQWU7QUFDZCxZQUFNLFFBQVEsU0FBUyxjQUFlLHVCQUF3QjtBQUM5RCxVQUFLLENBQUUsU0FBUyxDQUFFLE1BQU0sV0FBYTtBQUNyQyxZQUFNLFNBQVMsU0FBUyxjQUFlLFFBQVM7QUFDaEQsYUFBTyxRQUFTLE1BQU07QUFDdEIsYUFBTyxTQUFTLE1BQU07QUFDdEIsYUFBTyxXQUFZLElBQUssRUFBRSxVQUFXLE9BQU8sR0FBRyxDQUFFO0FBQ2pELFlBQU0sT0FBTyxNQUFNLElBQUksUUFBUyxhQUFXLE9BQU8sT0FBUSxTQUFTLGNBQWMsSUFBSyxDQUFFO0FBQ3hGLGlCQUFXO0FBQ1gsVUFBSyxLQUFPLFVBQVUsSUFBSztBQUFBLElBQzdCO0FBQUEsSUFDQSxDQUFDLGNBQWM7QUFDYixpQkFBVztBQUFBLElBQ2I7QUFBQSxJQUNBLENBQUMsWUFBWTtBQUNYLHFCQUFlO0FBQUEsSUFDakI7QUFBQSxJQUNBLENBQUMsV0FBVztBQUNWLFVBQUssQ0FBRSxVQUFVLFFBQVU7QUFDM0IsTUFBQUEsT0FBTSxZQUFZO0FBQ2xCLFlBQU0sU0FBUyxVQUFVLFFBQVEsaUJBQWtCO0FBQUEsUUFDakQsT0FBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsdUJBQXVCO0FBQUEsTUFDekIsQ0FBRTtBQUNGLFlBQU0sT0FBTyxNQUFNLElBQUksUUFBUyxhQUFXLE9BQU8sT0FBUSxTQUFTLGNBQWMsR0FBSSxDQUFFO0FBQ3ZGLFVBQUssQ0FBRSxNQUFPO0FBQUUsUUFBQUEsT0FBTSxZQUFZO0FBQU87QUFBQSxNQUFRO0FBQ2pELFlBQU0sU0FBU0UsUUFBTyxRQUFTLEVBQUU7QUFDakMsWUFBTSxLQUFLLElBQUksU0FBUztBQUN4QixTQUFHLE9BQVEsU0FBUyxNQUFNLFlBQWE7QUFDdkMsVUFBSTtBQUNGLGNBQU0sSUFBSSxNQUFNLE1BQU8sR0FBSSxPQUFPLE9BQVEsY0FBYztBQUFBLFVBQ3RELFFBQVE7QUFBQSxVQUFRLGFBQWE7QUFBQSxVQUM3QixTQUFTLEVBQUUsY0FBYyxPQUFPLE1BQU07QUFBQSxVQUFHLE1BQU07QUFBQSxRQUNqRCxDQUFFO0FBQ0YsWUFBSyxDQUFFLEVBQUUsR0FBSyxPQUFNLElBQUksTUFBTyxlQUFnQjtBQUMvQyxjQUFNLE9BQU8sTUFBTSxFQUFFLEtBQUs7QUFDMUIsUUFBQUYsT0FBTSxHQUFHLGFBQXNCLEtBQUs7QUFDcEMsUUFBQUEsT0FBTSxHQUFHLHNCQUFzQjtBQUMvQix1QkFBZTtBQUFBLE1BQ2pCLFNBQVUsS0FBTTtBQUNkLGNBQU8sb0NBQXFDO0FBQUEsTUFDOUMsVUFBRTtBQUNBLFFBQUFBLE9BQU0sWUFBWTtBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxlQUFnQixHQUFJO0FBQ25CLE1BQUFBLE9BQU0sSUFBSSxPQUFPLEVBQUUsT0FBTztBQUFBLElBQzVCO0FBQUEsSUFDQSxDQUFDLFlBQWEsR0FBSTtBQUNoQixRQUFFLGVBQWU7QUFDakIsVUFBSyxDQUFFQSxPQUFNLElBQUksS0FBTztBQUN4QixZQUFNLFFBQVNBLE9BQU0sSUFBSSxRQUFRLElBQUssS0FBSztBQUMzQyxVQUFLLENBQUUsS0FBTztBQUNkLFlBQU0sU0FBU0UsUUFBTyxRQUFTLEVBQUU7QUFDakMsVUFBSTtBQUNGLGNBQU0sSUFBSSxNQUFNLE1BQU8sR0FBRyxPQUFPLE9BQU8sSUFBSUYsT0FBTSxJQUFJLElBQUksU0FBUztBQUFBLFVBQ2pFLFFBQVE7QUFBQSxVQUFRLGFBQWE7QUFBQSxVQUM3QixTQUFTLEVBQUUsZ0JBQWdCLG9CQUFvQixjQUFjLE9BQU8sTUFBTTtBQUFBLFVBQzFFLE1BQU0sS0FBSyxVQUFXLEVBQUUsS0FBSyxDQUFFO0FBQUEsUUFDakMsQ0FBRTtBQUNGLFlBQUssQ0FBRSxFQUFFLEdBQUssT0FBTSxJQUFJLE1BQU8sZUFBZ0I7QUFDL0MsY0FBTSxPQUFPLE1BQU0sRUFBRSxLQUFLO0FBQzFCLFlBQUssUUFBUSxLQUFLLEtBQU8sQ0FBQUEsT0FBTSxJQUFJLE9BQU8sS0FBSztBQUFBLE1BQ2pELFNBQVUsS0FBTTtBQUNkLGNBQU8sNENBQTZDO0FBQUEsTUFDdEQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxVQUFXLEdBQUk7QUFDYixVQUFLLEdBQUcsUUFBUSxPQUFTLEdBQUUsT0FBTyxPQUFPO0FBQUEsSUFDM0M7QUFBQSxJQUNBLHVCQUF3QixHQUFJO0FBQzFCLE1BQUFBLE9BQU0sSUFBSSxtQkFBbUIsRUFBRSxPQUFPO0FBQUEsSUFDeEM7QUFBQSxJQUNBLGlCQUFrQixHQUFJO0FBQ3BCLE1BQUFBLE9BQU0sSUFBSSxhQUFhLEVBQUUsT0FBTztBQUFBLElBQ2xDO0FBQUEsSUFDQSxDQUFDLGlCQUFpQjtBQUNoQixVQUFLLENBQUVBLE9BQU0sSUFBSSxVQUFZO0FBQzdCLFVBQUk7QUFDRixjQUFNLFVBQVUsVUFBVSxVQUFXQSxPQUFNLElBQUksU0FBVTtBQUN6RCxRQUFBQSxPQUFNLElBQUksZUFBZTtBQUN6QixtQkFBWSxNQUFNO0FBQUUsY0FBS0EsT0FBTSxJQUFJLGlCQUFpQixlQUFpQixDQUFBQSxPQUFNLElBQUksZUFBZTtBQUFBLFFBQUksR0FBRyxJQUFLO0FBQUEsTUFDNUcsU0FBVSxLQUFNO0FBQ2QsUUFBQUEsT0FBTSxJQUFJLGVBQWU7QUFBQSxNQUMzQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLENBQUMsa0JBQWtCO0FBQ2pCLFVBQUssQ0FBRUEsT0FBTSxJQUFJLGFBQWEsQ0FBRSxVQUFVLE1BQVE7QUFDbEQsVUFBSTtBQUNGLGNBQU0sVUFBVSxNQUFPLEVBQUUsT0FBTyxRQUFRQSxPQUFNLElBQUksSUFBSSxjQUFjLEtBQUtBLE9BQU0sSUFBSSxVQUFVLENBQUU7QUFBQSxNQUNqRyxTQUFVLEtBQU07QUFBQSxNQUVoQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLENBQUMsU0FBVSxHQUFJO0FBQ2IsTUFBQUEsT0FBTSxJQUFJLFNBQVMsQ0FBRUEsT0FBTSxJQUFJO0FBQy9CLFVBQUtBLE9BQU0sSUFBSSxVQUFVLENBQUVBLE9BQU0sSUFBSSxPQUFRO0FBQzNDLFlBQUk7QUFDRixnQkFBTSxFQUFFLFNBQVMsT0FBTyxJQUFJLE1BQU0sT0FBUSxzQkFBYTtBQUN2RCxnQkFBTSxLQUFLLElBQUksT0FBUTtBQUFBLFlBQ3JCLFNBQVNBLE9BQU0sSUFBSTtBQUFBLFlBQVcsU0FBUztBQUFBLFlBQUcsT0FBTztBQUFBLFlBQUssUUFBUTtBQUFBLFlBQzlELE9BQU87QUFBQSxZQUFXLFlBQVk7QUFBQSxZQUFXLEtBQUs7QUFBQSxZQUFLLE1BQU07QUFBQSxVQUMzRCxDQUFFO0FBQ0YsVUFBQUEsT0FBTSxJQUFJLFFBQVEsR0FBRyxJQUFJO0FBRXpCLGdCQUFNLE9BQU8sRUFBRSxPQUFPLFFBQVMsc0JBQXVCLEdBQUcsY0FBZSw0QkFBNkI7QUFDckcsY0FBSyxLQUFPLE1BQUssWUFBWUEsT0FBTSxJQUFJO0FBQUEsUUFDekMsU0FBVSxLQUFNO0FBQ2QsVUFBQUEsT0FBTSxJQUFJLFNBQVM7QUFDbkIsZ0JBQU8sK0JBQWdDO0FBQUEsUUFDekM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxZQUFhLEdBQUk7QUFDaEIsUUFBRSxlQUFlO0FBQ2pCLFVBQUssQ0FBRUEsT0FBTSxJQUFJLFFBQVFBLE9BQU0sSUFBSSxlQUFpQjtBQUNwRCxZQUFNLE9BQVFBLE9BQU0sSUFBSSxvQkFBb0IsSUFBSyxNQUFPLFFBQVMsRUFBRSxJQUFLLE9BQUssRUFBRSxLQUFLLENBQUUsRUFBRSxPQUFRLE9BQVE7QUFDeEcsVUFBSyxDQUFFLElBQUksUUFBUztBQUNsQixRQUFBQSxPQUFNLElBQUksZUFBZTtBQUN6QjtBQUFBLE1BQ0Y7QUFDQSxNQUFBQSxPQUFNLElBQUksaUJBQWlCO0FBQzNCLE1BQUFBLE9BQU0sSUFBSSxlQUFpQjtBQUMzQixZQUFNLFNBQVNFLFFBQU8sUUFBUyxFQUFFO0FBQ2pDLFVBQUk7QUFDRixjQUFNLElBQUksTUFBTSxNQUFPLEdBQUcsT0FBTyxPQUFPLElBQUlGLE9BQU0sSUFBSSxJQUFJLFlBQVk7QUFBQSxVQUNwRSxRQUFRO0FBQUEsVUFBUSxhQUFhO0FBQUEsVUFDN0IsU0FBUyxFQUFFLGdCQUFnQixvQkFBb0IsY0FBYyxPQUFPLE1BQU07QUFBQSxVQUMxRSxNQUFNLEtBQUssVUFBVyxFQUFFLFlBQVksS0FBSyxjQUFjQSxPQUFNLElBQUksY0FBYyxHQUFHLENBQUU7QUFBQSxRQUN0RixDQUFFO0FBQ0YsWUFBSyxDQUFFLEVBQUUsR0FBSyxPQUFNLElBQUksTUFBTyxlQUFnQjtBQUMvQyxjQUFNLE9BQU8sTUFBTSxFQUFFLEtBQUs7QUFDMUIsY0FBTSxRQUFTLEtBQUssVUFBVSxDQUFDLEdBQUksT0FBUSxPQUFLLEVBQUUsSUFBSyxFQUFFO0FBQ3pELGNBQU0sV0FBWSxLQUFLLFdBQVcsQ0FBQyxHQUFJO0FBQ3ZDLFFBQUFBLE9BQU0sSUFBSSxlQUFlLFFBQVEsSUFBSSxHQUFJLFVBQVUsS0FBSyxPQUFPLDZCQUF3QixFQUFHO0FBQzFGLFFBQUFBLE9BQU0sSUFBSSxtQkFBbUI7QUFDN0IsUUFBQUEsT0FBTSxJQUFJLGFBQW1CO0FBQUEsTUFDL0IsU0FBVSxLQUFNO0FBQ2QsUUFBQUEsT0FBTSxJQUFJLGVBQWU7QUFBQSxNQUMzQixVQUFFO0FBQ0EsUUFBQUEsT0FBTSxJQUFJLGlCQUFpQjtBQUFBLE1BQzdCO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxjQUFjO0FBQ2IsWUFBTSxTQUFTRSxRQUFPLFFBQVMsRUFBRTtBQUNqQyxVQUFJO0FBQ0YsY0FBTSxJQUFJLE1BQU0sTUFBTyxHQUFJLE9BQU8sT0FBUSxjQUFjO0FBQUEsVUFDdEQsUUFBUTtBQUFBLFVBQVUsYUFBYTtBQUFBLFVBQy9CLFNBQVMsRUFBRSxjQUFjLE9BQU8sTUFBTTtBQUFBLFFBQ3hDLENBQUU7QUFDRixZQUFLLENBQUUsRUFBRSxHQUFLLE9BQU0sSUFBSSxNQUFPLGNBQWU7QUFDOUMsY0FBTSxPQUFPLE1BQU0sRUFBRSxLQUFLO0FBQzFCLFFBQUFGLE9BQU0sR0FBRyxhQUFzQixLQUFLO0FBQ3BDLFFBQUFBLE9BQU0sR0FBRyxzQkFBc0I7QUFBQSxNQUNqQyxTQUFVLEtBQU07QUFDZCxjQUFPLDZCQUE4QjtBQUFBLE1BQ3ZDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULENBQUMsU0FBUztBQUNSLFlBQU0sU0FBU0UsUUFBTyxRQUFTLEVBQUU7QUFDakMsVUFBSyxDQUFFLE9BQU8sT0FBUztBQUN2QixVQUFJO0FBQ0YsY0FBTSxJQUFJLE1BQU0sTUFBTyxHQUFJLE9BQU8sT0FBUSxPQUFPO0FBQUEsVUFDL0MsYUFBYTtBQUFBLFVBQ2IsU0FBUyxFQUFFLGNBQWMsT0FBTyxNQUFNO0FBQUEsUUFDeEMsQ0FBRTtBQUNGLFlBQUssQ0FBRSxFQUFFLEdBQUs7QUFDZCxjQUFNLE9BQU8sTUFBTSxFQUFFLEtBQUs7QUFDMUIsUUFBQUYsT0FBTSxHQUFHLE9BQXNCLEtBQUssUUFBUTtBQUM1QyxRQUFBQSxPQUFNLEdBQUcsYUFBc0IsS0FBSyxjQUFjO0FBQ2xELFFBQUFBLE9BQU0sR0FBRyxzQkFBc0IsQ0FBQyxDQUFFLEtBQUs7QUFBQSxNQUN6QyxTQUFVLEtBQU07QUFBQSxNQUVoQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLENBQUMsT0FBTztBQUtOLE1BQUFBLE9BQU0saUJBQWlCLENBQUVBLE9BQU07QUFDL0IsTUFBQUEsT0FBTSxpQkFBaUIsQ0FBRUEsT0FBTTtBQUMvQixNQUFBQSxPQUFNLGdCQUFpQixDQUFFQSxPQUFNO0FBQy9CLE1BQUFBLE9BQU0sV0FBaUIsT0FBTyxjQUFjLGVBQWUsT0FBTyxVQUFVLFVBQVU7QUFDdEYsTUFBQUcscUJBQW9CO0FBRXBCLFlBQU0sU0FBU0QsUUFBTyxRQUFTLEVBQUU7QUFDakMsVUFBSyxDQUFFLE9BQU8sUUFBUztBQUVyQixlQUFPLFNBQVMsT0FBTztBQUN2QjtBQUFBLE1BQ0Y7QUFDQSxZQUFNLE9BQU8sT0FBTztBQUNwQixVQUFLLENBQUUsTUFBTztBQUNaLFFBQUFGLE9BQU0sVUFBWTtBQUNsQixRQUFBQSxPQUFNLFlBQVk7QUFDbEI7QUFBQSxNQUNGO0FBQ0EsVUFBSTtBQUNGLGNBQU0sVUFBVSxFQUFFLGNBQWMsT0FBTyxNQUFNO0FBQzdDLGNBQU0sQ0FBRSxVQUFVLFdBQVcsUUFBUyxJQUFJLE1BQU0sUUFBUSxJQUFLO0FBQUEsVUFDM0QsTUFBTyxHQUFHLE9BQU8sT0FBTyxZQUFzQixFQUFFLGFBQWEsV0FBVyxRQUFRLENBQUUsRUFBRSxNQUFPLE1BQU0sSUFBSztBQUFBLFVBQ3RHLE1BQU8sR0FBRyxPQUFPLE9BQU8sSUFBSSxJQUFJLFVBQWMsRUFBRSxhQUFhLFdBQVcsUUFBUSxDQUFFLEVBQUUsTUFBTyxNQUFNLElBQUs7QUFBQSxVQUN0RyxNQUFPLEdBQUcsT0FBTyxPQUFPLElBQUksSUFBSSxnQkFBZ0IsRUFBRSxhQUFhLFdBQVcsUUFBUSxDQUFFLEVBQUUsTUFBTyxNQUFNLElBQUs7QUFBQSxRQUMxRyxDQUFFO0FBS0YsWUFBSSxZQUFZO0FBQ2hCLFlBQUssWUFBWSxTQUFTLElBQUs7QUFDN0IsZ0JBQU0sT0FBTyxNQUFNLFNBQVMsS0FBSztBQUNqQyx1QkFBYyxRQUFRLEtBQUssUUFBUSxDQUFDLEdBQUksS0FBTSxPQUFLLEVBQUUsU0FBUyxJQUFLLEtBQUs7QUFBQSxRQUMxRTtBQUVBLFlBQUksUUFBUSxhQUFhO0FBQ3pCLFlBQUssYUFBYSxVQUFVLElBQUs7QUFDL0IsZ0JBQU0sS0FBSyxNQUFNLFVBQVUsS0FBSztBQUNoQyxjQUFLLE1BQU0sR0FBRyxNQUFRLFNBQVEsR0FBRztBQUFBLFFBQ25DO0FBQ0EsWUFBSSxZQUFZO0FBQ2hCLFlBQUssWUFBWSxTQUFTLElBQUs7QUFDN0IsZ0JBQU0sS0FBSyxNQUFNLFNBQVMsS0FBSztBQUMvQixzQkFBWSxJQUFJLE9BQU87QUFBQSxRQUN6QjtBQUVBLGVBQU8sT0FBUUEsT0FBTSxLQUFLLGFBQWEsRUFBRSxNQUFNLE1BQU0sS0FBSyxHQUFHLEVBQUUsT0FBTyxVQUFVLENBQUU7QUFDbEYsUUFBQUEsT0FBTSxVQUFVO0FBQUEsTUFDbEIsU0FBVSxLQUFNO0FBQ2QsUUFBQUEsT0FBTSxVQUFZO0FBQ2xCLFFBQUFBLE9BQU0sWUFBWTtBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFFO0FBRUYsU0FBU0csdUJBQXNCO0FBQzdCLEVBQUFILE9BQU0saUJBQWlCQSxPQUFNLG1CQUFtQjtBQUNoRCxFQUFBQSxPQUFNLGlCQUFpQkEsT0FBTSxtQkFBbUI7QUFDaEQsRUFBQUEsT0FBTSxnQkFBaUJBLE9BQU0sbUJBQW1CO0FBQ2xEO0FBRUEsU0FBUyxlQUFlO0FBQ3RCLFNBQU87QUFBQSxJQUNMLE9BQVcsRUFBRSxNQUFNLE1BQU0sT0FBTyxNQUFPLEtBQUssS0FBSztBQUFBLElBQ2pELFVBQVcsRUFBRSxNQUFNLE1BQU0sT0FBTyxPQUFPLEtBQUssTUFBTTtBQUFBLElBQ2xELFdBQVcsRUFBRSxNQUFNLE1BQU0sT0FBTyxPQUFPLEtBQUssTUFBTTtBQUFBLEVBQ3BEO0FBQ0Y7QUFFQSxTQUFTLGFBQWE7QUFDcEIsWUFBVSxjQUFjLFlBQVksRUFBRSxRQUFTLE9BQUssRUFBRSxLQUFLLENBQUU7QUFDN0QsWUFBVSxlQUFlO0FBQ3pCLFFBQU0sUUFBUSxTQUFTLGNBQWUsdUJBQXdCO0FBQzlELE1BQUssTUFBUSxPQUFNLFlBQVk7QUFDL0IsRUFBQUEsT0FBTSxhQUFjO0FBQ3BCLEVBQUFBLE9BQU0sY0FBYztBQUNwQixFQUFBQSxPQUFNLGNBQWM7QUFDdEI7QUFFQSxTQUFTLFNBQVUsWUFBYTtBQUM5QixNQUFLLFVBQVUsaUJBQW1CLEtBQUksZ0JBQWlCLFVBQVUsZ0JBQWlCO0FBQ2xGLFFBQU0sTUFBTSxJQUFJLGdCQUFpQixVQUFXO0FBQzVDLFlBQVUsbUJBQW1CO0FBQzdCLEVBQUFBLE9BQU0sVUFBVztBQUNqQixFQUFBQSxPQUFNLFdBQVc7QUFJakIsd0JBQXVCLE1BQU07QUFDM0IsVUFBTSxNQUFNLFNBQVMsY0FBZSxxQkFBc0I7QUFDMUQsUUFBSyxDQUFFLElBQU07QUFDYixjQUFVLFNBQVMsVUFBVTtBQUM3QixjQUFVLFVBQVUsSUFBSSxpQkFBQUksUUFBUyxLQUFLO0FBQUEsTUFDcEMsYUFBYTtBQUFBLE1BQ2IsVUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLE1BQ2QsWUFBYTtBQUFBLE1BQ2IsVUFBYTtBQUFBLE1BQ2IsUUFBYTtBQUFBLE1BQ2IsUUFBYTtBQUFBLE1BQ2Isa0JBQWtCO0FBQUEsTUFDbEIsMEJBQTBCO0FBQUEsSUFDNUIsQ0FBRTtBQUFBLEVBQ0osQ0FBRTtBQUNKO0FBRUEsU0FBUyxpQkFBaUI7QUFDeEIsWUFBVSxTQUFTLFVBQVU7QUFDN0IsWUFBVSxVQUFVO0FBQ3BCLE1BQUssVUFBVSxrQkFBbUI7QUFDaEMsUUFBSSxnQkFBaUIsVUFBVSxnQkFBaUI7QUFDaEQsY0FBVSxtQkFBbUI7QUFBQSxFQUMvQjtBQUNBLEVBQUFKLE9BQU0sV0FBVztBQUNqQixFQUFBQSxPQUFNLFVBQVc7QUFDbkI7QUFFQSxlQUFlLFlBQVk7QUFDekIsUUFBTSxTQUFTRSxRQUFPLFFBQVMsRUFBRTtBQUNqQyxNQUFLLENBQUVGLE9BQU0sSUFBSSxLQUFPO0FBQ3hCLE1BQUk7QUFDRixVQUFNLE1BQU8sR0FBRyxPQUFPLE9BQU8sSUFBSUEsT0FBTSxJQUFJLElBQUksVUFBVTtBQUFBLE1BQ3hELFFBQVE7QUFBQSxNQUFRLGFBQWE7QUFBQSxNQUM3QixTQUFTLEVBQUUsZ0JBQWdCLG9CQUFvQixjQUFjLE9BQU8sTUFBTTtBQUFBLE1BQzFFLE1BQU0sS0FBSyxVQUFXLEVBQUUsT0FBT0EsT0FBTSxJQUFJLE1BQU0sQ0FBRTtBQUFBLElBQ25ELENBQUU7QUFBQSxFQUNKLFNBQVUsS0FBTTtBQUFBLEVBRWhCO0FBQ0Y7OztBQ3JiQSxTQUFTLFNBQUFLLGVBQWE7QUFFdEIsSUFBTSxhQUFhLElBQUksS0FBSyxLQUFLLEtBQUs7QUFFdEMsSUFBTSxFQUFFLE9BQUFDLFFBQU8sU0FBQUMsU0FBUSxJQUFJRixRQUFPLGdCQUFnQjtBQUFBLEVBQ2hELE9BQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxDQUFDLFVBQVU7QUFDVCxNQUFBQyxPQUFNLFVBQVU7QUFDaEIsVUFBSTtBQUNGLGNBQU0sU0FBU0QsUUFBTyxRQUFTLEVBQUU7QUFDakMsY0FBTSxNQUFPLEdBQUcsT0FBTyxPQUFPLHFCQUFxQjtBQUFBLFVBQ2pELFFBQVE7QUFBQSxVQUFRLGFBQWE7QUFBQSxVQUM3QixTQUFTLEVBQUUsY0FBYyxPQUFPLE1BQU07QUFBQSxRQUN4QyxDQUFFO0FBQUEsTUFDSixTQUFVLEtBQU07QUFBQSxNQUFxQjtBQUFBLElBQ3ZDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsT0FBTztBQUNMLFlBQU0sU0FBU0EsUUFBTyxRQUFTLEVBQUU7QUFFakMsVUFBSyxDQUFFLE9BQU8sT0FBbUI7QUFFakMsVUFBSyxPQUFPLGlCQUFxQjtBQUVqQyxVQUFLLENBQUUsT0FBTyxpQkFBbUI7QUFFakMsWUFBTSxZQUFZLEtBQUssTUFBTyxPQUFPLFdBQVk7QUFDakQsVUFBSyxDQUFFLFVBQXFDO0FBQzVDLFVBQUssS0FBSyxJQUFJLElBQUksWUFBWSxXQUFjO0FBQzVDLE1BQUFDLE9BQU0sVUFBVTtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUNGLENBQUU7OztBQ3BDRixTQUFTLFNBQUFFLFNBQU8sY0FBQUMsbUJBQWtCO0FBRWxDLElBQU0sRUFBRSxPQUFBQyxRQUFPLFNBQUFDLFNBQVEsSUFBSUgsUUFBTyxtQkFBbUI7QUFBQSxFQUNuRCxPQUFPO0FBQUEsSUFDTCxNQUFRO0FBQUEsSUFDUixRQUFRLENBQUM7QUFBQTtBQUFBLElBQ1QsT0FBUTtBQUFBLElBQ1IsSUFBSSxVQUFhO0FBQUUsYUFBT0UsT0FBTSxPQUFRQSxPQUFNLEtBQU0sS0FBSztBQUFBLElBQU07QUFBQSxJQUMvRCxJQUFJLGFBQWE7QUFBRSxhQUFPQSxPQUFNLFNBQVMsT0FBTztBQUFBLElBQUk7QUFBQSxJQUNwRCxJQUFJLGFBQWE7QUFBRSxhQUFPQSxPQUFNLFNBQVMsT0FBTztBQUFBLElBQUk7QUFBQSxJQUNwRCxJQUFJLFVBQWE7QUFBRSxhQUFPQSxPQUFNLFFBQVE7QUFBQSxJQUFHO0FBQUEsSUFDM0MsSUFBSSxVQUFhO0FBQUUsYUFBT0EsT0FBTSxRQUFRQSxPQUFNLE9BQU8sU0FBUztBQUFBLElBQUc7QUFBQSxJQUNqRSxJQUFJLFdBQVc7QUFDYixhQUFPQSxPQUFNLE9BQU8sU0FBUyxJQUN6QixHQUFJQSxPQUFNLFFBQVEsQ0FBRSxNQUFPQSxPQUFNLE9BQU8sTUFBTyxLQUMvQztBQUFBLElBQ047QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxLQUFNLEdBQUk7QUFDUixRQUFFLGVBQWU7QUFDakIsWUFBTSxNQUFRRCxZQUFXO0FBR3pCLFlBQU0sT0FBUSxLQUFLO0FBQ25CLFlBQU0sUUFBUSxLQUFLO0FBQ25CLFVBQUssQ0FBRSxRQUFRLENBQUUsTUFBUTtBQUN6QixNQUFBQyxPQUFNLFVBQVcsS0FBSyxVQUFVLENBQUMsR0FBSSxJQUFLLFFBQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUUsS0FBSyxLQUFLLEVBQUUsSUFBSSxFQUFJO0FBQ3hGLE1BQUFBLE9BQU0sUUFBU0EsT0FBTSxPQUFPLFVBQVcsT0FBSyxFQUFFLE9BQU8sTUFBTSxFQUFHO0FBQzlELFVBQUtBLE9BQU0sUUFBUSxFQUFJLENBQUFBLE9BQU0sUUFBUTtBQUNyQyxNQUFBQSxPQUFNLE9BQU87QUFDYixlQUFTLEtBQUssVUFBVSxJQUFLLHNCQUF1QjtBQUFBLElBQ3REO0FBQUEsSUFDQSxRQUFRO0FBQ04sTUFBQUEsT0FBTSxPQUFPO0FBQ2IsZUFBUyxLQUFLLFVBQVUsT0FBUSxzQkFBdUI7QUFBQSxJQUN6RDtBQUFBLElBQ0EsT0FBTztBQUFFLFVBQUtBLE9BQU0sUUFBVSxDQUFBQSxPQUFNO0FBQUEsSUFBUztBQUFBLElBQzdDLE9BQU87QUFBRSxVQUFLQSxPQUFNLFFBQVUsQ0FBQUEsT0FBTTtBQUFBLElBQVM7QUFBQSxJQUM3QyxXQUFZLEdBQUk7QUFDZCxVQUFLLEVBQUUsT0FBTyxXQUFXLFNBQVUsaUJBQWtCLEdBQUk7QUFDdkQsUUFBQUMsU0FBUSxNQUFNO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsSUFDQSxNQUFPLEdBQUk7QUFDVCxVQUFLLENBQUVELE9BQU0sS0FBTztBQUNwQixVQUFLLEVBQUUsUUFBUSxTQUFlLENBQUFDLFNBQVEsTUFBTTtBQUM1QyxVQUFLLEVBQUUsUUFBUSxZQUFlLENBQUFBLFNBQVEsS0FBSztBQUMzQyxVQUFLLEVBQUUsUUFBUSxhQUFlLENBQUFBLFNBQVEsS0FBSztBQUFBLElBQzdDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBO0FBQUEsSUFFVCxPQUFPO0FBQ0wsZUFBUyxpQkFBa0IsV0FBV0EsU0FBUSxLQUFNO0FBR3BELFVBQUksY0FBYztBQUNsQixlQUFTLGlCQUFrQixjQUFjLE9BQUs7QUFDNUMsWUFBSyxDQUFFRCxPQUFNLEtBQU87QUFDcEIsc0JBQWMsRUFBRSxRQUFTLENBQUUsR0FBRyxXQUFXO0FBQUEsTUFDM0MsR0FBRyxFQUFFLFNBQVMsS0FBSyxDQUFFO0FBQ3JCLGVBQVMsaUJBQWtCLFlBQVksT0FBSztBQUMxQyxZQUFLLENBQUVBLE9BQU0sS0FBTztBQUNwQixjQUFNLE1BQU8sRUFBRSxlQUFnQixDQUFFLEdBQUcsV0FBVyxLQUFNO0FBQ3JELFlBQUssS0FBTSxNQUFNQSxPQUFNLFFBQVUsQ0FBQUMsU0FBUSxLQUFLO0FBQzlDLFlBQUssS0FBSyxPQUFPRCxPQUFNLFFBQVUsQ0FBQUMsU0FBUSxLQUFLO0FBQUEsTUFDaEQsR0FBRyxFQUFFLFNBQVMsS0FBSyxDQUFFO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQ0YsQ0FBRTs7O0FDdEVGLFNBQVMsU0FBQUMsZUFBYTtBQUV0QixJQUFNLEVBQUUsT0FBQUMsUUFBTyxTQUFBQyxTQUFRLElBQUlGLFFBQU8sY0FBYztBQUFBLEVBQzlDLE9BQU87QUFBQSxJQUNMLE1BQVM7QUFBQSxJQUNULE1BQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxTQUFTO0FBQ1AsTUFBQUMsT0FBTSxPQUFPLENBQUVBLE9BQU07QUFBQSxJQUN2QjtBQUFBLElBQ0EsQ0FBQyxVQUFVO0FBQ1QsWUFBTSxTQUFTRCxRQUFPLFFBQVMsRUFBRTtBQUNqQyxVQUFLLENBQUUsT0FBTyxRQUFTLCtFQUFnRixFQUFJO0FBQzNHLE1BQUFDLE9BQU0sT0FBTztBQUNiLFVBQUk7QUFDRixjQUFNLElBQUksTUFBTSxNQUFPLEdBQUksT0FBTyxPQUFRLGtCQUFrQjtBQUFBLFVBQzFELFFBQWE7QUFBQSxVQUNiLGFBQWE7QUFBQSxVQUNiLFNBQWEsRUFBRSxnQkFBZ0Isb0JBQW9CLGNBQWMsT0FBTyxNQUFNO0FBQUEsVUFDOUUsTUFBYSxLQUFLLFVBQVcsRUFBRSxhQUFhLE1BQU0sQ0FBRTtBQUFBLFFBQ3RELENBQUU7QUFDRixZQUFLLENBQUUsRUFBRSxHQUFLLE9BQU0sSUFBSSxNQUFPLE1BQU0sRUFBRSxLQUFLLENBQUU7QUFDOUMsUUFBQUEsT0FBTSxVQUFVO0FBQ2hCLG1CQUFZLE1BQU0sU0FBUyxPQUFRLEdBQUksR0FBRyxHQUFJO0FBQUEsTUFDaEQsU0FBVSxLQUFNO0FBQ2QsUUFBQUEsT0FBTSxVQUFVLGlCQUFrQixJQUFJLE9BQVE7QUFBQSxNQUNoRCxVQUFFO0FBQ0EsUUFBQUEsT0FBTSxPQUFPO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxJQUNBLENBQUMsV0FBVztBQUNWLFlBQU0sU0FBU0QsUUFBTyxRQUFTLEVBQUU7QUFDakMsTUFBQUMsT0FBTSxPQUFPO0FBQ2IsVUFBSTtBQUNGLGNBQU0sSUFBSSxNQUFNLE1BQU8sR0FBSSxPQUFPLE9BQVEsbUJBQW1CO0FBQUEsVUFDM0QsUUFBYTtBQUFBLFVBQ2IsYUFBYTtBQUFBLFVBQ2IsU0FBYSxFQUFFLGdCQUFnQixvQkFBb0IsY0FBYyxPQUFPLE1BQU07QUFBQSxVQUM5RSxNQUFhLEtBQUssVUFBVyxFQUFFLE9BQU8sS0FBSyxDQUFFO0FBQUEsUUFDL0MsQ0FBRTtBQUNGLGNBQU0sSUFBSSxNQUFNLEVBQUUsS0FBSztBQUN2QixZQUFLLENBQUUsRUFBRSxHQUFLLE9BQU0sSUFBSSxNQUFPLEdBQUcsU0FBUyxhQUFjO0FBQ3pELFFBQUFBLE9BQU0sVUFBVSxpQkFBYSxFQUFFLE9BQU8sT0FBUTtBQUM5QyxtQkFBWSxNQUFNLFNBQVMsT0FBUSxFQUFFLE9BQU8sT0FBUSxHQUFHLEdBQUk7QUFBQSxNQUM3RCxTQUFVLEtBQU07QUFDZCxRQUFBQSxPQUFNLFVBQVUsZ0JBQWlCLElBQUksT0FBUTtBQUFBLE1BQy9DLFVBQUU7QUFDQSxRQUFBQSxPQUFNLE9BQU87QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNQSxXQUFXO0FBQ1QsWUFBTSxJQUFJRCxRQUFPLGNBQWUsRUFBRTtBQUNsQyxRQUFFLFVBQVUsQ0FBRSxFQUFFO0FBQUEsSUFDbEI7QUFBQSxJQUNBLFlBQVk7QUFFVixZQUFNLE9BQU9BLFFBQU8sYUFBYyxFQUFFO0FBQ3BDLFlBQU0sT0FBTyxLQUFLLFFBQVMsQ0FBRSxLQUFLO0FBQUEsUUFDaEMsSUFBSTtBQUFBLFFBQUksTUFBTTtBQUFBLFFBQ2QsUUFBUSxDQUFDO0FBQUEsUUFBRyxNQUFNO0FBQUEsTUFDcEI7QUFDQSxNQUFBQSxRQUFPLGlCQUFrQixFQUFFLFFBQVEsV0FBWSxJQUFLO0FBQUEsSUFDdEQ7QUFBQSxJQUNBLFlBQVk7QUFDVixZQUFNLE9BQU9BLFFBQU8sYUFBYyxFQUFFO0FBQ3BDLFdBQUssaUJBQWlCLEtBQUssUUFBUyxDQUFFLEdBQUcsTUFBTTtBQUMvQyxXQUFLLGNBQWlCO0FBQ3RCLFdBQUssV0FBaUI7QUFDdEIsV0FBSyxhQUFpQjtBQUN0QixlQUFTLEtBQUssVUFBVSxJQUFLLG1CQUFvQjtBQUFBLElBQ25EO0FBQUEsSUFDQSxjQUFjO0FBRVosTUFBQUUsU0FBUSxVQUFVO0FBQ2xCLE1BQUFGLFFBQU8sYUFBYyxFQUFFLE1BQU0sV0FBVztBQUFBLElBQzFDO0FBQUEsSUFDQSxpQkFBaUI7QUFDZixNQUFBRSxTQUFRLFVBQVU7QUFDbEIsWUFBTSxPQUFPRixRQUFPLGFBQWMsRUFBRTtBQUNwQyxXQUFLLFdBQWM7QUFDbkIsV0FBSyxjQUFjO0FBQUEsSUFDckI7QUFBQSxJQUNBLGNBQWM7QUFDWixZQUFNLElBQUlBLFFBQU8saUJBQWtCLEVBQUU7QUFDckMsUUFBRSxXQUFXLENBQUUsRUFBRTtBQUFBLElBQ25CO0FBQUEsSUFDQSxhQUFhO0FBQ1gsWUFBTSxJQUFJQSxRQUFPLGlCQUFrQixFQUFFO0FBQ3JDLFFBQUUsYUFBYSxDQUFFLEVBQUU7QUFBQSxJQUNyQjtBQUFBLElBQ0EsbUJBQW1CO0FBQ2pCLFlBQU0sSUFBSUEsUUFBTyxpQkFBa0IsRUFBRTtBQUNyQyxRQUFFLFFBQVEsRUFBRSxRQUFRLEtBQUs7QUFBQSxJQUMzQjtBQUFBLElBQ0EsZUFBZTtBQUNiLFlBQU0sT0FBT0EsUUFBTyxhQUFjLEVBQUU7QUFDcEMsVUFBSyxLQUFLLGdCQUFpQjtBQUN6QixhQUFLLFFBQWlCLEtBQUs7QUFDM0IsYUFBSyxXQUFpQixLQUFLLE1BQU0sU0FBUztBQUMxQyxhQUFLLGlCQUFpQjtBQUFBLE1BQ3hCLE9BQU87QUFDTCxhQUFLLGlCQUFpQixLQUFLO0FBQzNCLGFBQUssUUFBaUIsQ0FBQztBQUN2QixhQUFLLFdBQWlCO0FBQUEsTUFDeEI7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQ1QsWUFBTSxJQUFJQSxRQUFPLGlCQUFrQjtBQUNuQyxVQUFLLEVBQUUsTUFBTSxXQUFhLEdBQUUsUUFBUSxZQUFZO0FBQ2hELFFBQUUsTUFBTSxXQUFhO0FBQ3JCLFFBQUUsTUFBTSxhQUFhO0FBQ3JCLFFBQUUsTUFBTSxRQUFhO0FBRXJCLFlBQU0sSUFBSUEsUUFBTyxhQUFjLEVBQUU7QUFDakMsUUFBRSxhQUFpQjtBQUNuQixRQUFFLGlCQUFpQjtBQUNuQixRQUFFLFdBQWlCO0FBQ25CLFFBQUUsY0FBaUI7QUFDbkIsVUFBSyxFQUFFLGdCQUFpQjtBQUN0QixVQUFFLFFBQWlCLEVBQUU7QUFDckIsVUFBRSxXQUFpQixFQUFFLE1BQU0sU0FBUztBQUNwQyxVQUFFLGlCQUFpQjtBQUFBLE1BQ3JCO0FBQ0EsZUFBUyxLQUFLLFVBQVUsT0FBUSxtQkFBb0I7QUFFcEQsTUFBQUEsUUFBTyxjQUFlLEVBQUUsTUFBTSxVQUFVO0FBQUEsSUFDMUM7QUFBQSxFQUNGO0FBQ0YsQ0FBRTsiLAogICJuYW1lcyI6IFsiciIsICJvIiwgImlzUG9zaXRpdmVOdW1iZXIiLCAiYXNzaWduIiwgImxpc3RlbmVyIiwgImdldCIsICJzZXQiLCAibG9jYXRpb24iLCAicmVuZGVyIiwgInByZXZpZXciLCAiY2hhbmdlIiwgImNoZWNrIiwgImdldERhdGEiLCAic2V0RGF0YSIsICJDcm9wcGVyIiwgImRvbmUiLCAic3RvcmUiLCAiZ2V0Q29udGV4dCIsICJzZXQiLCAic3RvcmUiLCAia2V5UGF0aCIsICJyZXMiLCAiZW1vamkiLCAidmVyc2lvbiIsICJfIiwgInJlc3VsdCIsICJjdXN0b21FbW9qaUluZGV4IiwgInJlc3VsdHMiLCAiY3VycmVudE1hcCIsICJNSU5fU0VBUkNIX1RFWFRfTEVOR1RIIiwgInVuaXFCeSIsICJzZXQiLCAic3RhdGUiLCAiYWN0aW9ucyIsICJERUZBVUxUX0RBVEFfU09VUkNFIiwgIkRFRkFVTFRfTE9DQUxFIiwgInN0b3JlIiwgImdldENvbnRleHQiLCAic3RvcmUiLCAiZ2V0Q29udGV4dCIsICJzdG9yZSIsICJnZXRDb250ZXh0IiwgInN0b3JlIiwgImdldENvbnRleHQiLCAiYXV0b1NpemUiLCAiQVVUT1NJWkVfTUFYIiwgInN0b3JlIiwgInN0b3JlIiwgImdldENvbnRleHQiLCAic3RhdGUiLCAic3RvcmUiLCAiZ2V0Q29udGV4dCIsICJzdG9yZSIsICJzdG9yZSIsICJzdG9yZSIsICJzdGF0ZSIsICJhY3Rpb25zIiwgInN0b3JlIiwgInN0b3JlIiwgInN0YXRlIiwgImFjdGlvbnMiLCAic3RvcmUiLCAic3RvcmUiLCAic3RhdGUiLCAiYWN0aW9ucyIsICJzZXRTdGFnZSIsICJub3JtYWxpemVQaG9uZSIsICJzdG9yZSIsICJzdGF0ZSIsICJhY3Rpb25zIiwgInN0b3JlIiwgInJlY29tcHV0ZVZpc2liaWxpdHkiLCAiQ3JvcHBlciIsICJzdG9yZSIsICJzdGF0ZSIsICJhY3Rpb25zIiwgInN0b3JlIiwgImdldENvbnRleHQiLCAic3RhdGUiLCAiYWN0aW9ucyIsICJzdG9yZSIsICJzdGF0ZSIsICJhY3Rpb25zIl0KfQo=
