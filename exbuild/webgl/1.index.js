(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: start, __wbindgen_string_new, __wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85, __wbg_bufferData_dc5899657e9f1803, __wbg_attachShader_0dd248f6ab98fcf2, __wbg_bindBuffer_1ceb83e9674e812a, __wbg_clear_f6b2dd48aeed2752, __wbg_clearColor_89f7819aa9f80129, __wbg_compileShader_28bdbafe4445d24b, __wbg_createBuffer_acedc3831832a280, __wbg_createProgram_7e2f44b7b74694d4, __wbg_createShader_64c474f1d1d0c1f8, __wbg_drawArrays_604abf0ccb310fe7, __wbg_enableVertexAttribArray_f29c8dde9c8c5cf5, __wbg_getProgramInfoLog_aacf06c959070653, __wbg_getProgramParameter_a89bf14502c109f7, __wbg_getShaderInfoLog_1eb885f2468e2429, __wbg_getShaderParameter_99510442d33c6589, __wbg_linkProgram_46a36cb158f10676, __wbg_shaderSource_700ae72fca39850d, __wbg_useProgram_d63a57db0571e803, __wbg_vertexAttribPointer_b4b829a4f5a3778e, __wbg_instanceof_Window_49f532f06a9786ee, __wbg_document_c0366b39e4f4c89a, __wbg_instanceof_HtmlCanvasElement_7bd3ee7838f11fc3, __wbg_getContext_3db9399e6dc524ff, __wbg_getElementById_15aef17a620252b4, __wbg_newnoargs_7c6bd521992b4022, __wbg_call_951bd0c6d815d6f1, __wbg_globalThis_513fb247e8e4e6d2, __wbg_self_6baf3a3aa7b63415, __wbg_window_63fc4027b66c265b, __wbg_global_b87245cd886d7113, __wbg_newwithbyteoffsetandlength_9428545f18592c34, __wbindgen_object_drop_ref, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbg_buffer_3f12a1c608c6d04e, __wbindgen_boolean_get, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"start\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bufferData_dc5899657e9f1803\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_bufferData_dc5899657e9f1803\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_attachShader_0dd248f6ab98fcf2\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_attachShader_0dd248f6ab98fcf2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bindBuffer_1ceb83e9674e812a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_bindBuffer_1ceb83e9674e812a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clear_f6b2dd48aeed2752\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_clear_f6b2dd48aeed2752\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clearColor_89f7819aa9f80129\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_clearColor_89f7819aa9f80129\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_compileShader_28bdbafe4445d24b\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_compileShader_28bdbafe4445d24b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createBuffer_acedc3831832a280\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createBuffer_acedc3831832a280\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createProgram_7e2f44b7b74694d4\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createProgram_7e2f44b7b74694d4\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createShader_64c474f1d1d0c1f8\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createShader_64c474f1d1d0c1f8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawArrays_604abf0ccb310fe7\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_drawArrays_604abf0ccb310fe7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_enableVertexAttribArray_f29c8dde9c8c5cf5\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_enableVertexAttribArray_f29c8dde9c8c5cf5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getProgramInfoLog_aacf06c959070653\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getProgramInfoLog_aacf06c959070653\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getProgramParameter_a89bf14502c109f7\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getProgramParameter_a89bf14502c109f7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getShaderInfoLog_1eb885f2468e2429\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getShaderInfoLog_1eb885f2468e2429\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getShaderParameter_99510442d33c6589\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getShaderParameter_99510442d33c6589\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_linkProgram_46a36cb158f10676\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_linkProgram_46a36cb158f10676\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_shaderSource_700ae72fca39850d\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_shaderSource_700ae72fca39850d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_useProgram_d63a57db0571e803\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_useProgram_d63a57db0571e803\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_vertexAttribPointer_b4b829a4f5a3778e\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_vertexAttribPointer_b4b829a4f5a3778e\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_49f532f06a9786ee\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_Window_49f532f06a9786ee\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_c0366b39e4f4c89a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_document_c0366b39e4f4c89a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_HtmlCanvasElement_7bd3ee7838f11fc3\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_HtmlCanvasElement_7bd3ee7838f11fc3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getContext_3db9399e6dc524ff\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getContext_3db9399e6dc524ff\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_15aef17a620252b4\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getElementById_15aef17a620252b4\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_7c6bd521992b4022\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newnoargs_7c6bd521992b4022\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_951bd0c6d815d6f1\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_951bd0c6d815d6f1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_513fb247e8e4e6d2\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_globalThis_513fb247e8e4e6d2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_6baf3a3aa7b63415\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_6baf3a3aa7b63415\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_63fc4027b66c265b\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_window_63fc4027b66c265b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_b87245cd886d7113\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_global_b87245cd886d7113\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithbyteoffsetandlength_9428545f18592c34\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newwithbyteoffsetandlength_9428545f18592c34\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_3f12a1c608c6d04e\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_buffer_3f12a1c608c6d04e\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_boolean_get\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_rethrow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_memory\"]; });\n\n\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/*! exports provided: start, __wbindgen_string_new, __wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85, __wbg_bufferData_dc5899657e9f1803, __wbg_attachShader_0dd248f6ab98fcf2, __wbg_bindBuffer_1ceb83e9674e812a, __wbg_clear_f6b2dd48aeed2752, __wbg_clearColor_89f7819aa9f80129, __wbg_compileShader_28bdbafe4445d24b, __wbg_createBuffer_acedc3831832a280, __wbg_createProgram_7e2f44b7b74694d4, __wbg_createShader_64c474f1d1d0c1f8, __wbg_drawArrays_604abf0ccb310fe7, __wbg_enableVertexAttribArray_f29c8dde9c8c5cf5, __wbg_getProgramInfoLog_aacf06c959070653, __wbg_getProgramParameter_a89bf14502c109f7, __wbg_getShaderInfoLog_1eb885f2468e2429, __wbg_getShaderParameter_99510442d33c6589, __wbg_linkProgram_46a36cb158f10676, __wbg_shaderSource_700ae72fca39850d, __wbg_useProgram_d63a57db0571e803, __wbg_vertexAttribPointer_b4b829a4f5a3778e, __wbg_instanceof_Window_49f532f06a9786ee, __wbg_document_c0366b39e4f4c89a, __wbg_instanceof_HtmlCanvasElement_7bd3ee7838f11fc3, __wbg_getContext_3db9399e6dc524ff, __wbg_getElementById_15aef17a620252b4, __wbg_newnoargs_7c6bd521992b4022, __wbg_call_951bd0c6d815d6f1, __wbg_globalThis_513fb247e8e4e6d2, __wbg_self_6baf3a3aa7b63415, __wbg_window_63fc4027b66c265b, __wbg_global_b87245cd886d7113, __wbg_newwithbyteoffsetandlength_9428545f18592c34, __wbindgen_object_drop_ref, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbg_buffer_3f12a1c608c6d04e, __wbindgen_boolean_get, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, module, TextEncoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85\", function() { return __wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bufferData_dc5899657e9f1803\", function() { return __wbg_bufferData_dc5899657e9f1803; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_attachShader_0dd248f6ab98fcf2\", function() { return __wbg_attachShader_0dd248f6ab98fcf2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bindBuffer_1ceb83e9674e812a\", function() { return __wbg_bindBuffer_1ceb83e9674e812a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clear_f6b2dd48aeed2752\", function() { return __wbg_clear_f6b2dd48aeed2752; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clearColor_89f7819aa9f80129\", function() { return __wbg_clearColor_89f7819aa9f80129; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_compileShader_28bdbafe4445d24b\", function() { return __wbg_compileShader_28bdbafe4445d24b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createBuffer_acedc3831832a280\", function() { return __wbg_createBuffer_acedc3831832a280; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createProgram_7e2f44b7b74694d4\", function() { return __wbg_createProgram_7e2f44b7b74694d4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createShader_64c474f1d1d0c1f8\", function() { return __wbg_createShader_64c474f1d1d0c1f8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawArrays_604abf0ccb310fe7\", function() { return __wbg_drawArrays_604abf0ccb310fe7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_enableVertexAttribArray_f29c8dde9c8c5cf5\", function() { return __wbg_enableVertexAttribArray_f29c8dde9c8c5cf5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getProgramInfoLog_aacf06c959070653\", function() { return __wbg_getProgramInfoLog_aacf06c959070653; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getProgramParameter_a89bf14502c109f7\", function() { return __wbg_getProgramParameter_a89bf14502c109f7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getShaderInfoLog_1eb885f2468e2429\", function() { return __wbg_getShaderInfoLog_1eb885f2468e2429; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getShaderParameter_99510442d33c6589\", function() { return __wbg_getShaderParameter_99510442d33c6589; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_linkProgram_46a36cb158f10676\", function() { return __wbg_linkProgram_46a36cb158f10676; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_shaderSource_700ae72fca39850d\", function() { return __wbg_shaderSource_700ae72fca39850d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_useProgram_d63a57db0571e803\", function() { return __wbg_useProgram_d63a57db0571e803; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_vertexAttribPointer_b4b829a4f5a3778e\", function() { return __wbg_vertexAttribPointer_b4b829a4f5a3778e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_49f532f06a9786ee\", function() { return __wbg_instanceof_Window_49f532f06a9786ee; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_c0366b39e4f4c89a\", function() { return __wbg_document_c0366b39e4f4c89a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_HtmlCanvasElement_7bd3ee7838f11fc3\", function() { return __wbg_instanceof_HtmlCanvasElement_7bd3ee7838f11fc3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getContext_3db9399e6dc524ff\", function() { return __wbg_getContext_3db9399e6dc524ff; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_15aef17a620252b4\", function() { return __wbg_getElementById_15aef17a620252b4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_7c6bd521992b4022\", function() { return __wbg_newnoargs_7c6bd521992b4022; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_951bd0c6d815d6f1\", function() { return __wbg_call_951bd0c6d815d6f1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_513fb247e8e4e6d2\", function() { return __wbg_globalThis_513fb247e8e4e6d2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_6baf3a3aa7b63415\", function() { return __wbg_self_6baf3a3aa7b63415; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_63fc4027b66c265b\", function() { return __wbg_window_63fc4027b66c265b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_b87245cd886d7113\", function() { return __wbg_global_b87245cd886d7113; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithbyteoffsetandlength_9428545f18592c34\", function() { return __wbg_newwithbyteoffsetandlength_9428545f18592c34; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_3f12a1c608c6d04e\", function() { return __wbg_buffer_3f12a1c608c6d04e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n/**\n*/\nfunction start() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"start\"]();\n}\n\nfunction logError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            let error = (function () {\n                try {\n                    return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n                } catch(_) {\n                    return \"<failed to stringify thrown value>\";\n                }\n            }());\n            console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n            throw e;\n        }\n    };\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85 = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof WebGLRenderingContext;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_bufferData_dc5899657e9f1803 = logError(function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);\n});\n\nconst __wbg_attachShader_0dd248f6ab98fcf2 = logError(function(arg0, arg1, arg2) {\n    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));\n});\n\nconst __wbg_bindBuffer_1ceb83e9674e812a = logError(function(arg0, arg1, arg2) {\n    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));\n});\n\nconst __wbg_clear_f6b2dd48aeed2752 = logError(function(arg0, arg1) {\n    getObject(arg0).clear(arg1 >>> 0);\n});\n\nconst __wbg_clearColor_89f7819aa9f80129 = logError(function(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).clearColor(arg1, arg2, arg3, arg4);\n});\n\nconst __wbg_compileShader_28bdbafe4445d24b = logError(function(arg0, arg1) {\n    getObject(arg0).compileShader(getObject(arg1));\n});\n\nconst __wbg_createBuffer_acedc3831832a280 = logError(function(arg0) {\n    var ret = getObject(arg0).createBuffer();\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_createProgram_7e2f44b7b74694d4 = logError(function(arg0) {\n    var ret = getObject(arg0).createProgram();\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_createShader_64c474f1d1d0c1f8 = logError(function(arg0, arg1) {\n    var ret = getObject(arg0).createShader(arg1 >>> 0);\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_drawArrays_604abf0ccb310fe7 = logError(function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);\n});\n\nconst __wbg_enableVertexAttribArray_f29c8dde9c8c5cf5 = logError(function(arg0, arg1) {\n    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);\n});\n\nconst __wbg_getProgramInfoLog_aacf06c959070653 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg1).getProgramInfoLog(getObject(arg2));\n    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n});\n\nconst __wbg_getProgramParameter_a89bf14502c109f7 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);\n    return addHeapObject(ret);\n});\n\nconst __wbg_getShaderInfoLog_1eb885f2468e2429 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg1).getShaderInfoLog(getObject(arg2));\n    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n});\n\nconst __wbg_getShaderParameter_99510442d33c6589 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);\n    return addHeapObject(ret);\n});\n\nconst __wbg_linkProgram_46a36cb158f10676 = logError(function(arg0, arg1) {\n    getObject(arg0).linkProgram(getObject(arg1));\n});\n\nconst __wbg_shaderSource_700ae72fca39850d = logError(function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));\n});\n\nconst __wbg_useProgram_d63a57db0571e803 = logError(function(arg0, arg1) {\n    getObject(arg0).useProgram(getObject(arg1));\n});\n\nconst __wbg_vertexAttribPointer_b4b829a4f5a3778e = logError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {\n    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);\n});\n\nconst __wbg_instanceof_Window_49f532f06a9786ee = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof Window;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_document_c0366b39e4f4c89a = logError(function(arg0) {\n    var ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_instanceof_HtmlCanvasElement_7bd3ee7838f11fc3 = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof HTMLCanvasElement;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_getContext_3db9399e6dc524ff = handleError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_getElementById_15aef17a620252b4 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_newnoargs_7c6bd521992b4022 = logError(function(arg0, arg1) {\n    var ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_call_951bd0c6d815d6f1 = handleError(function(arg0, arg1) {\n    var ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_globalThis_513fb247e8e4e6d2 = handleError(function() {\n    var ret = globalThis.globalThis;\n    return addHeapObject(ret);\n});\n\nconst __wbg_self_6baf3a3aa7b63415 = handleError(function() {\n    var ret = self.self;\n    return addHeapObject(ret);\n});\n\nconst __wbg_window_63fc4027b66c265b = handleError(function() {\n    var ret = window.window;\n    return addHeapObject(ret);\n});\n\nconst __wbg_global_b87245cd886d7113 = handleError(function() {\n    var ret = global.global;\n    return addHeapObject(ret);\n});\n\nconst __wbg_newwithbyteoffsetandlength_9428545f18592c34 = logError(function(arg0, arg1, arg2) {\n    var ret = new Float32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbg_buffer_3f12a1c608c6d04e = logError(function(arg0) {\n    var ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_boolean_get = function(arg0) {\n    const v = getObject(arg0);\n    var ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;\n    _assertNum(ret);\n    return ret;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\nconst __wbindgen_memory = function() {\n    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"];\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, start, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_exn_store, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);