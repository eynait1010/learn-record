// 执行过程(与com+com区别)：
// 1. 先通过__webpack_require__.r，给被引用模块加属性__esModule=true
// 2. es模块取值的时候，通过 get的形式（所以es返回的其实是引用）
(() => {
  var __webpack_modules__ = {
    "./src/title.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        num: () => num,
        default: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      const __WEBPACK_DEFAULT_EXPORT__ = "title";
      const num = 1;
    },
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();
  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
      }
      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
    };
  })();
  var __webpack_exports__ = {};
  (() => {
    let title = __webpack_require__("./src/title.js");
    console.log(title);
  })();
})();
