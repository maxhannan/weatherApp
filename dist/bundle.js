/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.sass":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.sass ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Chivo:wght@300;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\n.searchBox {\\n  margin-right: 3%;\\n}\\n\\n#searchBar {\\n  color: white;\\n  font-size: 3vh;\\n  background: none;\\n  border: none;\\n  width: 0;\\n  transition: width 500ms ease-in-out;\\n}\\n#searchBar:focus {\\n  outline: none;\\n}\\n\\n#srchBtn {\\n  color: white;\\n  font-size: 3vh;\\n  background: none;\\n  border: none;\\n}\\n#srchBtn:active {\\n  color: white;\\n}\\n\\n.searchBox:hover > #searchBar {\\n  width: 200px;\\n  border: none;\\n  border-bottom: 2px solid white;\\n}\\n\\n@media screen and (max-width: 1000px) {\\n  #searchBar {\\n    width: 200px;\\n  }\\n}\\n#app {\\n  background-color: #1b1b1b;\\n  font-family: \\\"Chivo\\\";\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n}\\n\\nheader {\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n  width: 100vw;\\n  height: 10vh;\\n}\\n\\n.icon {\\n  margin: 0;\\n  margin-right: auto;\\n  margin-left: 3%;\\n  display: flex;\\n  font-size: 35px;\\n  align-items: center;\\n  animation: spin 7s linear 0s infinite;\\n  color: #ec6e4c;\\n}\\n\\nmain {\\n  width: 100vw;\\n  height: 90vh;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n#mainForecast, #infoHolder {\\n  width: 40%;\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: center;\\n  padding: 5%;\\n  color: white;\\n}\\n\\n#infoHolder {\\n  width: 60%;\\n}\\n\\nh2 {\\n  font-size: 5vh;\\n  animation: appear 500ms cubic-bezier(0.6, -0.19, 0.76, 1.4);\\n}\\nh2 #tempReadout {\\n  font-size: 10vh;\\n  animation: appear 750ms cubic-bezier(0.6, -0.19, 0.76, 1.4);\\n}\\nh2 #status {\\n  animation: appear 1000ms cubic-bezier(0.6, -0.19, 0.76, 1.4);\\n}\\n\\n#tempContainer {\\n  display: flex;\\n  align-items: center;\\n  font-size: 10vw;\\n  color: white;\\n  height: 150px;\\n}\\n\\n.dayForecast {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  height: 150px;\\n  width: 100%;\\n  color: white;\\n  animation: appear 1000ms cubic-bezier(0.6, -0.19, 0.76, 1.4);\\n}\\n\\n#sevenDay {\\n  width: 25%;\\n  font-size: 3.5vh;\\n}\\n\\n#sevenHiLo {\\n  width: 30%;\\n  font-size: 3.5vh;\\n}\\n\\n#descripW {\\n  color: #ec6e4c;\\n  width: 40%;\\n  font-size: 3.5vh;\\n}\\n\\n#sevenDay, #sevenHiLo, #sevenicon, #descripW {\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n#iconW {\\n  max-height: 50px;\\n}\\n\\n@keyframes appear {\\n  0% {\\n    opacity: 0;\\n    transform: scale(0);\\n  }\\n  100% {\\n    opacity: 1;\\n    transform: scale(1);\\n  }\\n}\\n@keyframes spin {\\n  0% {\\n    transform: rotate() 0;\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n@media screen and (max-width: 1000px) {\\n  main {\\n    flex-direction: column;\\n  }\\n\\n  #mainForecast {\\n    width: 100vw;\\n    height: 35vh;\\n    align-items: flex-start;\\n  }\\n  #mainForecast h2 {\\n    font-size: 30px;\\n  }\\n  #mainForecast #tempReadout {\\n    font-size: 90px;\\n  }\\n  #mainForecast #status {\\n    max-height: 110px;\\n  }\\n\\n  #infoHolder {\\n    width: 100vw;\\n    height: 65vh;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n\\n  #tempContainer {\\n    justify-content: center;\\n  }\\n\\n  .dayForecast {\\n    justify-content: center;\\n    width: 100%;\\n  }\\n\\n  #descripW {\\n    display: none;\\n  }\\n\\n  #sevenDay {\\n    font-size: 3vh;\\n    width: 8%;\\n  }\\n\\n  #sevenHiLo {\\n    margin: auto;\\n    display: flex;\\n    justify-content: center;\\n    font-size: 3vh;\\n    width: 100%;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherApp/./src/sass/styles.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weatherApp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/sass/styles.sass":
/*!******************************!*\
  !*** ./src/sass/styles.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.sass\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weatherApp/./src/sass/styles.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherApp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/geoCode.js":
/*!************************!*\
  !*** ./src/geoCode.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Google API Key\nconst apiKey = 'AIzaSyAzvI9cu1Zk8OegSCLn8Yv0BTagQSWDMFQ'\n// returns formatted address from search and lat/lng from search\nconst getName = async (address) => {\n  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`\n\n  const response = await fetch(url, { mode: 'cors' })\n  const data = await response.json()\n\n  return (data.results[0])\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getName);\n\n\n//# sourceURL=webpack://weatherApp/./src/geoCode.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/styles.sass */ \"./src/sass/styles.sass\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _weatherGetter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherGetter */ \"./src/weatherGetter.js\");\n/* harmony import */ var _viewControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewControl */ \"./src/viewControl.js\");\n\n\n\n\n\nconst srchBar = document.querySelector('#searchBar')\nconst srchBtn = document.querySelector('#srchBtn')\n\nconst handleSubmit = async (e) => {\n  e.preventDefault()\n  let data\n  srchBar.style.color = 'white'\n  try {\n    data = await (0,_weatherGetter__WEBPACK_IMPORTED_MODULE_2__.default)(srchBar.value)\n  } catch (error) {\n    srchBar.style.color = 'red'\n    console.log(error)\n    return\n  }\n  (0,_viewControl__WEBPACK_IMPORTED_MODULE_3__.default)(data)\n  srchBar.value = ''\n  console.log(data)\n}\n// inital pageLoad Function\nconst pageLoad = async () => {\n  const data = await (0,_weatherGetter__WEBPACK_IMPORTED_MODULE_2__.default)('Minneapolis')\n  ;(0,_viewControl__WEBPACK_IMPORTED_MODULE_3__.default)(data)\n}\npageLoad()\nsrchBtn.addEventListener('click', handleSubmit)\n\n\n//# sourceURL=webpack://weatherApp/./src/index.js?");

/***/ }),

/***/ "./src/viewControl.js":
/*!****************************!*\
  !*** ./src/viewControl.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forecastContainer = document.querySelector('#mainForecast')\nconst infoContainer = document.querySelector('#infoHolder')\n\nfunction sleep (ms) {\n  return new Promise(resolve => setTimeout(resolve, ms))\n}\n\nconst renderForecast = (weatherData) => {\n  const daily = weatherData.daily\n  forecastContainer.innerHTML = `\n  <div id=\"tempContainer\">\n    <h1 id = 'tempReadout'>${daily.tempF + '<span style = \"color: #ec6e4c\">°</span>f'}</h1>\n    <img id = 'status' src=${daily.iconSrc} alt=\"\" >\n  </div>\n  <h2 id = 'weatherDescrip' style ='color: #ec6e4c'>${daily.descrip}</h2>\n  <br>\n  <h2 id = 'location'>${daily.location}</h2>\n  `\n  renderSevenDayForecast(weatherData)\n}\n\nconst renderSevenDayForecast = async (weatherData) => {\n  infoContainer.innerHTML = ''\n  const sevenDays = weatherData.sevenDay\n  for (let i = 1; i < sevenDays.length; i++) {\n    const dayDisplay = document.createElement('div')\n    dayDisplay.className = 'dayForecast'\n    dayDisplay.innerHTML = `\n      <div id = 'sevenDay'>\n        <h3>${sevenDays[i].day}</h3> \n      </div>\n      <div id = 'sevenHiLo'>\n        <h3>${sevenDays[i].lowF}°f  /  ${sevenDays[i].highF}°f</h3>\n      </div>\n      <div id = 'descripW'>\n        <h3>${sevenDays[i].descrip}</h3>\n      </div>\n      <div id = 'sevenicon'>\n      <img id = 'iconW' src=${sevenDays[i].iconSrc}>\n      </div>\n    `\n    infoContainer.appendChild(dayDisplay)\n    await sleep(100)\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForecast);\n\n\n//# sourceURL=webpack://weatherApp/./src/viewControl.js?");

/***/ }),

/***/ "./src/weatherGetter.js":
/*!******************************!*\
  !*** ./src/weatherGetter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _geoCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geoCode */ \"./src/geoCode.js\");\n\n\nconst apiKey = '070d5b93cd86e7baa71b2a5bf2276467'\n\nconst oneCall = async (coords) => {\n  // calls weather api with lat & lng\n  const lon = coords.lng\n  const lat = coords.lat\n  const oneCallURL = `\n  https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`\n\n  const response = await fetch(oneCallURL, { mode: 'cors' })\n  const data = await response.json()\n  return data\n}\n\nconst getWeather = async (city) => {\n  // calls geocoding api and returns formatted address name &\n  // lat and lng for weather call\n  const nameData = await (0,_geoCode__WEBPACK_IMPORTED_MODULE_0__.default)(city)\n  const coords = nameData.geometry.location\n  const name = nameData.formatted_address\n  // calls weather api and retrieves data\n  const info = await oneCall(coords)\n  // calls formatting function which returns object of needed data\n  const finalAnswer = weatherFormatter(info, name)\n  // return final object\n  return finalAnswer\n}\n\nconst weatherFormatter = (info, placeName) => {\n  const current = info.current\n\n  const sevenDayForecast = info.daily.map(day => {\n    const dayinfo = {\n      day: weekDay[getDay(day.dt).getDay()],\n      highC: toCelsius(day.temp.max),\n      lowC: toCelsius(day.temp.min),\n      highF: toFahrenheit(day.temp.max),\n      lowF: toFahrenheit(day.temp.min),\n      descrip: day.weather[0].description,\n      iconSrc: getIconURL(day.weather[0].icon, false)\n    }\n    return dayinfo\n  })\n\n  const weatherData = {\n    daily: {\n      location: placeName,\n      time: getDay(current.dt),\n      timeStr: getDay(current.dt).toLocaleTimeString(),\n      day: weekDay[getDay(current.dt).getDay()],\n      tempC: toCelsius(current.temp),\n      tempF: toFahrenheit(current.temp),\n      wind: current.wind_speed,\n      windDir: current.wind_deg,\n      sunrise: getDay(current.sunrise).toLocaleTimeString(),\n      humidity: current.humidity,\n      descrip: current.weather[0].description,\n      iconSrc: getIconURL(current.weather[0].icon)\n    },\n    sevenDay: [...sevenDayForecast]\n  }\n  console.log(info)\n  return weatherData\n}\n\n// HELPER FUNCTIONS\nconst weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']\nconst toCelsius = (K) => Math.floor(K - 273.15)\nconst toFahrenheit = (K) => Math.floor(toCelsius(K) * (9 / 5) + 32)\nconst getDay = (date) => new Date(date * 1000) // converts unix timestamp to date\nconst getIconURL = (iconId, large = true) => { // retrieves appropiate icon url based on weather code from api\n  let url\n  if (large) {\n    url = `http://openweathermap.org/img/wn/${iconId}@4x.png`\n  } else {\n    url = `http://openweathermap.org/img/wn/${iconId}@2x.png`\n  }\n  return url\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n\n//# sourceURL=webpack://weatherApp/./src/weatherGetter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;