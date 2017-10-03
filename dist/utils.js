(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var utils = {
	  /**
	   * This function is anonymous, is executed immediately and
	   * the return value is assigned to URLParams!
	   * 
	   * @returns 
	   */
	  URLParams: function URLParams() {
	    var queryString = {};
	    var query = window.location.search.substring(1);
	    var vars = query.split("&");
	    for (var i = 0; i < vars.length; i++) {
	      var pair = vars[i].split("=");
	      // If first entry with this name
	      if (typeof queryString[pair[0]] === "undefined") {
	        queryString[pair[0]] = decodeURIComponent(pair[1]);
	        // If second entry with this name
	      } else if (typeof queryString[pair[0]] === "string") {
	        var arr = [queryString[pair[0]], decodeURIComponent(pair[1])];
	        queryString[pair[0]] = arr;
	        // If third or later entry with this name
	      } else {
	        queryString[pair[0]].push(decodeURIComponent(pair[1]));
	      }
	    }
	    return queryString;
	  },
	
	
	  /**
	   * 
	   * 
	   * @param {any} elem
	   * @param {any} className
	   * @returns
	   */
	  hasClass: function hasClass(elem, className) {
	    if (elem.classList) return elem.classList.contains(className);else return !!elem.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	  },
	
	
	  /**
	   * 
	   * 
	   * @param {any} elem
	   * @param {any} className
	   */
	  addClass: function addClass(elem, className) {
	    if (elem.classList) elem.classList.add(className);else if (!this.hasClass(elem, className)) elem.className += " " + className;
	  },
	
	
	  /**
	   * 
	   * 
	   * @param {any} elem
	   * @param {any} className
	   */
	  removeClass: function removeClass(elem, className) {
	    if (elem.classList) elem.classList.remove(className);else if (this.hasClass(elem, className)) {
	      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	      elem.className = elem.className.replace(reg, ' ');
	    }
	  },
	
	
	  /**
	   * 
	   * 
	   * @param {any} element
	   * @param {any} parentElement
	   */
	  setFocus: function setFocus(element, parentElement) {
	    var prevStyle = '';
	    var draggableElems = document.querySelectorAll('.draggable');
	    var canvas = document.getElementById('canvas');
	    for (var i = 0, len = draggableElems.length; i < len; i++) {
	      this.looseFocus(draggableElems[i], parentElement);
	      this.looseFocus(canvas, parentElement);
	    }
	    this.addClass(element, 'focus');
	  },
	
	
	  /**
	   * 
	   * 
	   * @param {any} element
	   * @param {any} parentElement
	   */
	  looseFocus: function looseFocus(element, parentElement) {
	    var prevStyle = '';
	    this.removeClass(elem, 'focus');
	  },
	
	
	  /**
	   * 
	   * 
	   * @param {any} HTML
	   */
	  str2DOMElement: function str2DOMElement(HTML) {
	    var frame = document.createElement('iframe');
	    frame.style.display = 'none';
	    document.body.appendChild(frame);
	    frame.contentDocument.open();
	    frame.contentDocument.write(HTML);
	    frame.contentDocument.close();
	    var element = frame.contentDocument.body.childNodes;
	    document.body.removeChild(frame);
	    return element;
	  }
	};
	
	exports.default = utils;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=utils.js.map