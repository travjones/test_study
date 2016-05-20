/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ic = __webpack_require__(2);

	var _ic2 = _interopRequireDefault(_ic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(8);

	console.log("Yo, player!");

	(0, _ic2.default)();

	// webpack-dev-server --hot --inline
	// npm install --save director (when needed)

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ic;

	var _start = __webpack_require__(3);

	var _start2 = _interopRequireDefault(_start);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ic() {
	  var icHTML = "\n  <div class=\"task-container\">\n    <form>\n      <p>Check the checkbox below to indicate that you agree with the informed consent below.</p>\n      <input type=\"checkbox\" id=\"ic-check\"></input>\n      <label for=\"ic-check\">I Agree</label>\n    </form>\n    <h3>INTRODUCTION</h3>\n    <p>My name is David J. Cox (david.j.cox@ufl.edu). I am a graduate researcher at the University of Florida. You are invited to participate in our study! Please take whatever time you need to review this page about the study. The decision to join, or not to join, is up to you.</p>\n    <p>In this research study, we are evaluating how people make choices while viewing a service provider’s online information. Deciding which service provider to select for you and your family is an important and complex process that we are interested in studying. The things we learn from conducting this study can help service providers, researchers, and the community at large make better information about services for consumers.</p>\n\n    <h3>WHAT IS INVOLVED IN THE STUDY?</h3>\n    <p>If you decide to participate you will be asked to view and explore the content of hypothetical service provider websites. The service provider websites you will see in this study are hypothetical and do not represent any actual service providers. After viewing the hypothetical service provider websites, we will ask you to make some choices between different options. We think this will take you X minutes.</p>\n    <p>While you are participating in our study, we will be collecting data on some aspects of your behavior as a consumer accessing information online. This can include mouse clicks, how long you look at a certain page, choices you make, and responses to any questions we present to you. Your participation in our study is anonymous – we do not collect any identifying information from you except for the IP you accessed the study on and basic demographics you voluntarily provide to us. This information is stored in a secured data server accessible only to the researchers of this study (contact information below).</p>\n    <p>You can stop participating in our study at any time by closing your web browser. Stopping early will not cause you to lose any benefits; however, we may exclude incomplete data from our final analysis.</p>\n\n    <h3>RISKS</h3>\n    <p>Participating in this study involves the risk of loss of confidentiality. Any time research is conducted over the web, there is a small chance that information might be accessed by a third party. These risks, however, are considered minimal as we are not collecting any identifying information and any data we track is stored directly on our secure server.</p>\n\n    <h3>BENEFITS OF TAKING PART IN THE STUDY?</h3>\n    <p>We do not expect you to benefit personally from participating in this study. However, your responses can help us and other researchers benefit consumers of clinical services in the future.</p>\n\n    <h3>CONFIDENTIALITY</h3>\n    <p>We will take steps to protect any information we collect from you. These steps include encrypted data transfers, secured data servers maintained in our offices, and omission of any identifying information. Any information we present to other researchers will have any potentially identifying information removed (e.g., IP addresses, individual demographics). In some cases we may present direct quotes from you as illustrative data, but we will remove any potentially identifying information before doing so. We will also be aggregating much of the data we collect from you, making it difficult or impossible to detect your participation amongst that of the other participants.</p>\n\n    <h3>CONTACTS FOR QUESTIONS OR PROBLEMS</h3>\n    <p>Please contact us if you have questions about the study or if you encounter any problems, unexpected physical or psychological discomforts, any injuries, or think that something unusual or unexpected is happening.</p>\n\n    <p>Primary Investigator: David Cox (david.j.cox@ufl.edu) Co-Investigators: Travis Jones (tjones0@ufl.edu) and Triton Ong (ong2@ufl.edu) Research Supervisor: Jesse Dallery (dallery@ufl.edu)</p>\n\n    <h3>YOUR RIGHTS AS A RESEARCH PARTICIPANT</h3>\n    <p>The University of Florida IRB Office is located at the following address: Box 112250, University of Florida, Gainesville, FL 32611-2250.</p>\n  </div>\n  ";

	  var appcontainer = document.getElementById("app");
	  appcontainer.innerHTML = icHTML;
	  var icCheck = document.getElementById("ic-check");
	  icCheck.addEventListener('change', function () {
	    (0, _start2.default)();
	  });

	  icCheck.onchange;
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = start;

	var _sample = __webpack_require__(4);

	var _sample2 = _interopRequireDefault(_sample);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function start() {
	  console.log("From start.js!");

	  var startHTML = "\n    <div class=\"start-container u-full-width\">\n      <p>Paste instructions here.</p>\n      <div class=\"start-btn\" id=\"start-btn\"><span>Start<span></div>\n    </div>\n  ";

	  var appcontainer = document.getElementById("app");
	  appcontainer.innerHTML = startHTML;
	  var startBtn = document.getElementById("start-btn");

	  startBtn.addEventListener('click', function () {
	    (0, _sample2.default)();
	  });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sample;

	var _helper = __webpack_require__(5);

	var _pspa = __webpack_require__(6);

	var _pspa2 = _interopRequireDefault(_pspa);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// paths to stimuli gifs
	var stimuli = ["stimuli/1.gif", "stimuli/2.gif", "stimuli/3.gif", "stimuli/4.gif"];

	// randomize stimuli
	var stimSet = (0, _helper.shuffle)(stimuli);

	// app container
	var appcontainer = document.getElementById("app");

	function sample() {

	  // // temp
	  // pspa();

	  // setup task skeleton
	  var taskHTML = '\n  <div class="task-container">\n    <div class="u-full-width timer" id="timer"></div>\n    <div class="task-container u-full-width" id="sample-container"></div>\n  </div>';

	  appcontainer.innerHTML = taskHTML;

	  // elements
	  var timerEl = document.getElementById("timer");
	  var sampleContainer = document.getElementById("sample-container");

	  // timer init
	  var timer = 0;

	  // timer/stimulus presentation logic
	  var sampleTask = setInterval(function () {
	    timer++;
	    timerEl.innerHTML = timer;
	    console.log(timer);

	    switch (timer) {
	      case 1:
	        renderSample(0);
	        break;
	      case 15:
	        renderSample(1);
	        break;
	      case 30:
	        renderSample(2);
	        break;
	      case 45:
	        renderSample(3);
	        break;
	      case 60:
	        console.log("done with sample");
	        (0, _pspa2.default)();
	        clearInterval(sampleTask);
	        break;
	    }
	  }, 1000);
	}

	function renderSample(i) {
	  var stim = stimSet[i];
	  var stimulus = stim,
	      sampleHTML = '\n  <div class="task-container u-full-width" id="sample">\n    <img src="' + stimulus + '">\n  </div>\n  ';
	  var sampleContainer = document.getElementById("sample-container");
	  sampleContainer.innerHTML = sampleHTML;
	  console.log(stimulus);
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.shuffle = shuffle;
	function shuffle(arr) {
	    var i, j, temp;
	    for (i = arr.length - 1; i > 0; i--) {
	        j = Math.floor(Math.random() * (i + 1));
	        temp = arr[i];
	        arr[i] = arr[j];
	        arr[j] = temp;
	    }
	    return arr;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = pspa;

	var _helper = __webpack_require__(5);

	var _form = __webpack_require__(7);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// app container
	var appcontainer = document.getElementById("app");

	// data object to hold frequency of selection across stimuli
	var data = {};

	// array to hold src of each selection
	var choices = [];

	var trialCounter = 0;

	// timer init
	var timer = 0;

	var makingChoice = false;

	// stim pairs
	var stimpairs = [["stimuli/1.gif", "stimuli/2.gif"], ["stimuli/1.gif", "stimuli/3.gif"], ["stimuli/1.gif", "stimuli/4.gif"], ["stimuli/2.gif", "stimuli/3.gif"], ["stimuli/2.gif", "stimuli/4.gif"], ["stimuli/3.gif", "stimuli/4.gif"]];

	var temp = (0, _helper.shuffle)(stimpairs);
	var randstimpairs = [];

	for (var i = 0; i < stimpairs.length; i++) {
	  var t = (0, _helper.shuffle)(temp[i]);
	  randstimpairs.push(t);
	}

	console.log(randstimpairs);

	function pspa() {
	  // setup task skeleton
	  var taskHTML = '\n  <div class="task-container">\n    <div class="container timer" id="timer"></div>\n    <div id="sample-container" class="row"></div>\n    <div id="button-container" class="row">\n      <div class="six columns">\n        <button id="btnLeft" class="button-primary" disabled>^</button>\n      </div>\n      <div class="six columns">\n        <button id="btnRight" class="button-primary" disabled>^</button>\n      </div>\n    </div>\n  </div>\n  ';

	  appcontainer.innerHTML = taskHTML;

	  // elements
	  var timerEl = document.getElementById("timer");
	  var sampleContainer = document.getElementById("sample-container");
	  var leftBtn = document.getElementById("btnLeft");
	  var rightBtn = document.getElementById("btnRight");

	  // render first pair
	  renderPair(trialCounter);

	  var left = document.getElementById("left");
	  leftBtn.addEventListener("click", leftHandler);

	  var right = document.getElementById("right");
	  rightBtn.addEventListener("click", rightHandler);

	  // timer
	  var timerFunc = setInterval(function () {

	    if (timer === 2) {
	      makingChoice = true;
	      leftBtn.disabled = false;
	      rightBtn.disabled = false;
	      timerEl.innerHTML = "pick your favorite";
	      console.log("yo1!");
	    } else {
	      timer++;
	      timerEl.innerHTML = timer;
	      console.log(timer);
	    }
	  }, 1000);
	}

	function renderPair(i) {
	  var stim = randstimpairs[i];
	  var pair = stim,
	      pspaHTML = '\n    <div class="six columns">\n      <img src="' + pair[0] + '" id="left" class="pspa-stimulus">\n    </div>\n    <div class="six columns">\n      <img src="' + pair[1] + '" id="right" class="pspa-stimulus">\n    </div>';

	  var sampleContainer = document.getElementById("sample-container");
	  sampleContainer.innerHTML = pspaHTML;
	  console.log(pair);
	}

	function leftHandler() {
	  var left = document.getElementById("left");
	  var choice = left.getAttribute("src");
	  choices.push(choice);
	  nextTrial();
	}

	function rightHandler() {
	  var right = document.getElementById("right");
	  var choice = right.getAttribute("src");
	  choices.push(choice);
	  nextTrial();
	}

	function nextTrial() {
	  console.log(choices);
	  trialCounter++;

	  if (trialCounter > 5) {
	    postData();
	    (0, _form2.default)();
	    return;
	  }

	  makingChoice = false;
	  renderPair(trialCounter);
	  timer = 0;
	  var leftBtn = document.getElementById("btnLeft");
	  var rightBtn = document.getElementById("btnRight");
	  leftBtn.disabled = true;
	  rightBtn.disabled = true;
	}

	function postData() {
	  console.log("post: " + choices);
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = form;
	function form() {
	    var formHTML = "\n    <div class=\"container\">\n        <h2>Information</h2>\n        <form id=\"demo-form\" name=\"demo-form\">\n            <div class=\"row\">\n                <div class=\"six columns\">\n                    <label for=\"autism\">Do you have a child w/ autism spectrum disorder?</label>\n                    <input type=\"checkbox\" name=\"autism\" id=\"autism\">\n                </div>\n                <div class=\"six columns\">\n                    <label for=\"famaba\">Is anyone in your family receiving applied behavior analysis (ABA) services??</label>\n                    <input type=\"checkbox\" name=\"famaba\" id=\"famaba\">\n                </div>  \n            </div>\n            <div class=\"row\">\n                <div class=\"six columns\">\n                    <label for=\"age\">Age of individual receiving ABA services</label>\n                    <select class=\"u-full-width\" name=\"age\" id=\"age\">\n                        <option value=\"0\">N/A</option>\n                    </select>\n                </div>\n                <div class=\"six columns\">\n                    <label for=\"income\">What is your household income?</label>\n                    <select class=\"u-full-width\" name=\"inome\" id=\"income\">\n                        <option value=\"0\">$0</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"u-full-width\">\n                    <label for=\"education\">Highest level of education obtained in your household.</label>\n                    <select class=\"u-full-width\" name=\"education\" id=\"education\"></select>\n                </div>\n                <input class=\"button-primary\" type=\"submit\" value=\"Submit\">\n            </div>\n\n        </form>\n    </div>";
	    var appcontainer = document.getElementById("app");
	    appcontainer.innerHTML = formHTML;
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "* {\n}\n\nbody {\n  font-family: 'Open Sans';\n}\n\nbutton:disabled {\n  background-color: grey;\n}\n\nbutton:disabled:hover {\n  background-color: grey;\n}\n\n.app-container {\n  position: relative;\n  height: 100vh;\n}\n\n.start-btn {\n  background-color: #00B16A;\n  border-radius: 4px;\n  text-align: center;\n  height: 20vh;\n  width: 25vw;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.start-btn span {\n  color: white;\n  font-size: 4em;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.start-btn:hover {\n  background-color: #19b878;\n}\n\n.stop-container {\n  position: relative;\n  height: 100vh;\n}\n\n.stop-btn {\n  background-color: #c0392b;\n  border-radius: 4px;\n  text-align: center;\n  height: 20vh;\n  width: 25vw;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.stop-btn span {\n  color: white;\n  font-size: 4em;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.stop-btn:hover {\n  background-color: #c64c40;\n}\n\n.task-container {\n  text-align: center;\n  height: 100vh;\n  width: 100%;\n}\n\n.instructions {\n  padding-bottom: 1em;\n  font-size: 2em;\n  color: #7f8c8d;\n}\n\n.task-button {\n  background-color: #3e8cc0;\n  color: white !important;\n  height: 3em;\n  font-size: 2em;\n  font-weight: normal;\n}\n\n.task-button:hover {\n  background-color: #2980b9;\n  color: white !important;\n}\n\n.now-label {\n  font-size: 2em;\n}\n\n.after-label {\n  font-size: 2em;\n  color: #e74c3c;\n}\n\n.results-container {\n  text-align: center;\n  height: 100vh;\n  width: 100%;\n\n}\n\n.u-vert-align {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.timer {\n  font-size: 30px;\n  color: red;\n}\n\n.pspa-stimulus {\n  border: 2px solid black;\n}", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);