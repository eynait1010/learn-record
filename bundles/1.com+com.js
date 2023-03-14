// 执行过程：
// 1.从__webpack_module_cache__中获取，如果有就返回//TODO:为什么需要缓存？
// 2.__webpack_modules__中，根据module id(一般是模块文件到文件根目录的相对路径)，取出对应代码块
// 3. 放入__webpack_module_cache__缓存中并返回
(() => {
  var __webpack_modules__ = {
    "./src/title.js": (module) => {
      module.exports = "title";
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
  var __webpack_exports__ = {};
  (() => {
    let title = __webpack_require__("./src/title.js");
    console.log(title);
  })();
})();
