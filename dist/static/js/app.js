webpackJsonp([53],{

/***/ "+IES":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAC4UlEQVRYR+2X7XETMRCGcxVAKkhSAaQCkgogFWBXQKgApwKSCkgqIKkAUwGhApwKCBWY97mRPHvrlc6+MzP+gWY0Pku63Uer/dA1B3vWmj3jORgFtFwu32lDn9Rfq9+rf2yaZjFmk4OBBHMmxd+ccmBOBfU8FGoM0CxZx+s+F9D8P5CODL/54SzxU9ZhfHAbfGRoTE7N0b1Sf1C//KdOnRyXKKKx85fpGae9lvKrwaYovFi0UCGKvJhHDeDEg6PKCwyBkn8Q0tkiNUMAQ6gvdmGtNSDBHCdnzTBP+o+yNxWFjwI63TmQYIDAMjlS7qRoovFfGgO01kblnyx4ZSEp/azBS6MxwzDGXF+jbFz3Leqbt0Acy5F5gTrFcflcU5L5ICDeGdUsEEdyq17zFa+MsM9pYSGgk1E0ejly6jONzzYAm2oNFf63gTgZG219eagEtjoe+d7cwF8ICMjBrZSHsNJ7dY6Eo/RgQEyxhoCs099ozAbG1mAlIHwJIBrPJTDmyNY5ur4LiM0MbiWgKO/UwFYAAirJJAKPNH1To42cOrpWZBltUVVHKJbg2aYK1jF2Zeubq4vMzUpQEZBPhOQir/ReQi8QKmUT/aDArlkwpjV3aQ25zN6TitEYARElb80OUExJYecvzHinVFTA8DGfMNsqEFkpAlqahX/0Yltk02Xsq5kLC2oBLNJ9GF1bOkCB0s5OkrIvRjrXDiyw1oK1fk3oSx6IY/lQUyhF1oJhIkxOjJxabQtLjQeyzvek3R/7bUkZFuEOTVvbpea9A0cGzGNrG/LFlfyTW5h1XanoAG1wTB5urk2f20ELNNFEr39I6a3W5SzugbaxTubopAALZMM9PC4kCGimn3zlWAFt+FEQHV8ncCwQ14g2xCPfyJIqQD5/1XzHz62sZIFs9BQzqftibS2UPgys/20D0zGABcolYyol+EmxmUhr85Dzq21hWP8sOYc8FC9oQ6Tu4p29A/oL8jtNNOuVjzQAAAAASUVORK5CYII="

/***/ }),

/***/ "+g8z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/6zp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration7/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var main = ({
  name: 'DvDecoration7',
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      defaultColor: ['#1dc1f5', '#1dc1f5'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1501382e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration7/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-decoration-7"},[_c('svg',{attrs:{"width":"21px","height":"20px"}},[_c('polyline',{attrs:{"stroke-width":"4","fill":"transparent","stroke":_vm.mergedColor[0],"points":"10, 0 19, 10 10, 20"}}),_vm._v(" "),_c('polyline',{attrs:{"stroke-width":"2","fill":"transparent","stroke":_vm.mergedColor[1],"points":"2, 0 11, 10 2, 20"}})]),_vm._v(" "),_vm._t("default"),_vm._v(" "),_c('svg',{attrs:{"width":"21px","height":"20px"}},[_c('polyline',{attrs:{"stroke-width":"4","fill":"transparent","stroke":_vm.mergedColor[0],"points":"11, 0 2, 10 11, 20"}}),_vm._v(" "),_c('polyline',{attrs:{"stroke-width":"2","fill":"transparent","stroke":_vm.mergedColor[1],"points":"19, 0 10, 10 19, 20"}})])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration7/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration7_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "/CRi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/Q7J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/conicalColumnChart/src/main.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvConicalColumnChart',
  mixins: [autoResize["a" /* default */]],
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ref: 'conical-column-chart',

      defaultConfig: {
        /**
         * @description Chart data
         * @type {Array<Object>}
         * @default data = []
         */
        data: [],
        /**
         * @description Chart img
         * @type {Array<String>}
         * @default img = []
         */
        img: [],
        /**
         * @description Chart font size
         * @type {Number}
         * @default fontSize = 12
         */
        fontSize: 12,
        /**
         * @description Img side length
         * @type {Number}
         * @default imgSideLength = 30
         */
        imgSideLength: 30,
        /**
         * @description Column color
         * @type {String}
         * @default columnColor = 'rgba(0, 194, 255, 0.4)'
         */
        columnColor: 'rgba(0, 194, 255, 0.4)',
        /**
         * @description Text color
         * @type {String}
         * @default textColor = '#fff'
         */
        textColor: '#fff',
        /**
         * @description Show value
         * @type {Boolean}
         * @default showValue = false
         */
        showValue: false
      },

      mergedConfig: null,

      column: []
    };
  },

  watch: {
    config: function config() {
      var calcData = this.calcData;


      calcData();
    }
  },
  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var calcData = this.calcData;


      calcData();
    },
    onResize: function onResize() {
      var calcData = this.calcData;


      calcData();
    },
    calcData: function calcData() {
      var mergeConfig = this.mergeConfig,
          initData = this.initData,
          calcSVGPath = this.calcSVGPath;


      mergeConfig();

      initData();

      calcSVGPath();
    },
    mergeConfig: function mergeConfig() {
      var defaultConfig = this.defaultConfig,
          config = this.config;


      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {});
    },
    initData: function initData() {
      var mergedConfig = this.mergedConfig;
      var data = mergedConfig.data;


      data = Object(plugin_util["deepClone"])(data, true);

      data.sort(function (_ref, _ref2) {
        var a = _ref.value;
        var b = _ref2.value;

        if (a > b) return -1;
        if (a < b) return 1;
        if (a === b) return 0;
      });

      var max = data[0] ? data[0].value : 10;

      data = data.map(function (item) {
        return extends_default()({}, item, {
          percent: item.value / max
        });
      });

      mergedConfig.data = data;
    },
    calcSVGPath: function calcSVGPath() {
      var mergedConfig = this.mergedConfig,
          width = this.width,
          height = this.height;
      var imgSideLength = mergedConfig.imgSideLength,
          fontSize = mergedConfig.fontSize,
          data = mergedConfig.data;


      var itemNum = data.length;
      var gap = width / (itemNum + 1);

      var useAbleHeight = height - imgSideLength - fontSize - 5;
      var svgBottom = height - fontSize - 5;

      this.column = data.map(function (item, i) {
        var percent = item.percent;


        var middleXPos = gap * (i + 1);
        var leftXPos = gap * i;
        var rightXpos = gap * (i + 2);

        var middleYPos = svgBottom - useAbleHeight * percent;
        var controlYPos = useAbleHeight * percent * 0.6 + middleYPos;

        var d = '\n          M' + leftXPos + ', ' + svgBottom + '\n          Q' + middleXPos + ', ' + controlYPos + ' ' + middleXPos + ',' + middleYPos + '\n          M' + middleXPos + ',' + middleYPos + '\n          Q' + middleXPos + ', ' + controlYPos + ' ' + rightXpos + ',' + svgBottom + '\n          L' + leftXPos + ', ' + svgBottom + '\n          Z\n        ';

        var textY = (svgBottom + middleYPos) / 2 + fontSize / 2;

        return extends_default()({}, item, {
          d: d,
          x: middleXPos,
          y: middleYPos,
          textY: textY
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-670b5627","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/conicalColumnChart/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-conical-column-chart"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},_vm._l((_vm.column),function(item,i){return _c('g',{key:i},[_c('path',{attrs:{"d":item.d,"fill":_vm.mergedConfig.columnColor}}),_vm._v(" "),_c('text',{style:(("fontSize:" + (_vm.mergedConfig.fontSize) + "px")),attrs:{"fill":_vm.mergedConfig.textColor,"x":item.x,"y":_vm.height - 4}},[_vm._v("\n        "+_vm._s(item.name)+"\n      ")]),_vm._v(" "),(_vm.mergedConfig.img.length)?_c('image',{attrs:{"xlink:href":_vm.mergedConfig.img[i % _vm.mergedConfig.img.length],"width":_vm.mergedConfig.imgSideLength,"height":_vm.mergedConfig.imgSideLength,"x":item.x - _vm.mergedConfig.imgSideLength / 2,"y":item.y - _vm.mergedConfig.imgSideLength}}):_vm._e(),_vm._v(" "),(_vm.mergedConfig.showValue)?_c('text',{style:(("fontSize:" + (_vm.mergedConfig.fontSize) + "px")),attrs:{"fill":_vm.mergedConfig.textColor,"x":item.x,"y":item.textY}},[_vm._v("\n        "+_vm._s(item.value)+"\n      ")]):_vm._e()])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/conicalColumnChart/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var conicalColumnChart_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "/rPO":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABd0lEQVRoge2ZUZGDMBRFkYAEJFTCSlgJOFgcsA4WB+CgOAAH1EHrAByc/SBMKX2EkjANdHJm8sM8LveGZPpIg8Dj8XwGQApU7J8GSMfGQ3XxaDRAGACZaycWZAHHnP2BJhAuhg634iJTs88Xdo4P4BofwDU+gGuMAwAJ916pAn40tRFwBq5qnIFoI+31AZhvN7IZ861Q20oh1mgbBQBOMw8YOE3qS01taaNtGiBZeEg8qe80tVcb7XcF0OIiwNolVGhqCxttowDqprWbWFpGHS428ejGBKhVWQ0kmtqIxzdRSOYNtc0C7AUfwDU+gGt8ANf4AK6RAkx/9ivN+GPh4AuIFzRsx5jbUv8u0SA0Wcp8ulLLlnLoCHU9vETLcxudb+1ugXtzCHwBNwORnP54Pt/O10vUSKuAPkgM/ArjMiMmff92wLfS23qYHz7z2n8JnTg7e0HN7Nye2bf5AfoPlumSuli93ndDv3mLQ5ofo5bUMc17PB/AP6nobb8wJMgOAAAAAElFTkSuQmCC"

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "0S16":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "11IE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "17FL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1BEG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration1/src/main.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvDecoration1',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    var pointSideLength = 2.5;

    return {
      ref: 'decoration-1',

      svgWH: [200, 50],

      svgScale: [1, 1],

      rowNum: 4,
      rowPoints: 20,

      pointSideLength: pointSideLength,
      halfPointSideLength: pointSideLength / 2,

      points: [],

      rects: [],

      defaultColor: ['#fff', '#0de7c2'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var calcSVGData = this.calcSVGData;


      calcSVGData();
    },
    calcSVGData: function calcSVGData() {
      var calcPointsPosition = this.calcPointsPosition,
          calcRectsPosition = this.calcRectsPosition,
          calcScale = this.calcScale;


      calcPointsPosition();

      calcRectsPosition();

      calcScale();
    },
    calcPointsPosition: function calcPointsPosition() {
      var svgWH = this.svgWH,
          rowNum = this.rowNum,
          rowPoints = this.rowPoints;

      var _svgWH = slicedToArray_default()(svgWH, 2),
          w = _svgWH[0],
          h = _svgWH[1];

      var horizontalGap = w / (rowPoints + 1);
      var verticalGap = h / (rowNum + 1);

      var points = new Array(rowNum).fill(0).map(function (foo, i) {
        return new Array(rowPoints).fill(0).map(function (foo, j) {
          return [horizontalGap * (j + 1), verticalGap * (i + 1)];
        });
      });

      this.points = points.reduce(function (all, item) {
        return [].concat(toConsumableArray_default()(all), toConsumableArray_default()(item));
      }, []);
    },
    calcRectsPosition: function calcRectsPosition() {
      var points = this.points,
          rowPoints = this.rowPoints;


      var rect1 = points[rowPoints * 2 - 1];
      var rect2 = points[rowPoints * 2 - 3];

      this.rects = [rect1, rect2];
    },
    calcScale: function calcScale() {
      var width = this.width,
          height = this.height,
          svgWH = this.svgWH;

      var _svgWH2 = slicedToArray_default()(svgWH, 2),
          w = _svgWH2[0],
          h = _svgWH2[1];

      this.svgScale = [width / w, height / h];
    },
    onResize: function onResize() {
      var calcSVGData = this.calcSVGData;


      calcSVGData();
    },
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-15ebcbe7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration1/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-1"},[_c('svg',{style:(("transform:scale(" + (_vm.svgScale[0]) + "," + (_vm.svgScale[1]) + ");")),attrs:{"width":((_vm.svgWH[0]) + "px"),"height":((_vm.svgWH[1]) + "px")}},[_vm._l((_vm.points),function(point,i){return [(Math.random() > 0.6)?_c('rect',{key:i,attrs:{"fill":_vm.mergedColor[0],"x":point[0] - _vm.halfPointSideLength,"y":point[1] - _vm.halfPointSideLength,"width":_vm.pointSideLength,"height":_vm.pointSideLength}},[(Math.random() > 0.6)?_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[0]) + ";transparent"),"dur":"1s","begin":Math.random() * 2,"repeatCount":"indefinite"}}):_vm._e()]):_vm._e()]}),_vm._v(" "),(_vm.rects[0])?_c('rect',{attrs:{"fill":_vm.mergedColor[1],"x":_vm.rects[0][0] - _vm.pointSideLength,"y":_vm.rects[0][1] - _vm.pointSideLength,"width":_vm.pointSideLength * 2,"height":_vm.pointSideLength * 2}},[_c('animate',{attrs:{"attributeName":"width","values":("0;" + (_vm.pointSideLength * 2)),"dur":"2s","repeatCount":"indefinite"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"height","values":("0;" + (_vm.pointSideLength * 2)),"dur":"2s","repeatCount":"indefinite"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"x","values":((_vm.rects[0][0]) + ";" + (_vm.rects[0][0] - _vm.pointSideLength)),"dur":"2s","repeatCount":"indefinite"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"y","values":((_vm.rects[0][1]) + ";" + (_vm.rects[0][1] - _vm.pointSideLength)),"dur":"2s","repeatCount":"indefinite"}})]):_vm._e(),_vm._v(" "),(_vm.rects[1])?_c('rect',{attrs:{"fill":_vm.mergedColor[1],"x":_vm.rects[1][0] - 40,"y":_vm.rects[1][1] - _vm.pointSideLength,"width":40,"height":_vm.pointSideLength * 2}},[_c('animate',{attrs:{"attributeName":"width","values":"0;40;0","dur":"2s","repeatCount":"indefinite"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"x","values":((_vm.rects[1][0]) + ";" + (_vm.rects[1][0] - 40) + ";" + (_vm.rects[1][0])),"dur":"2s","repeatCount":"indefinite"}})]):_vm._e()],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration1/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration1_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "1xxZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "46Ky":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/fullScreenContainer/src/main.vue
//
//
//
//
//
//
//
//



/* harmony default export */ var main = ({
  name: 'DvFullScreenContainer',
  mixins: [autoResize["a" /* default */]],
  data: function data() {
    return {
      ref: 'full-screen-container',
      allWidth: 0,
      scale: 0,
      datavRoot: '',
      ready: false
    };
  },

  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var initConfig = this.initConfig,
          setAppScale = this.setAppScale;


      initConfig();

      setAppScale();

      this.ready = true;
    },
    initConfig: function initConfig() {
      var dom = this.dom;
      var _screen = screen,
          width = _screen.width,
          height = _screen.height;


      this.allWidth = width;

      dom.style.width = width + 'px';
      dom.style.height = height + 'px';
    },
    setAppScale: function setAppScale() {
      var allWidth = this.allWidth,
          dom = this.dom;


      var currentWidth = document.body.clientWidth;

      dom.style.transform = 'scale(' + currentWidth / allWidth + ')';
    },
    onResize: function onResize() {
      var setAppScale = this.setAppScale;


      setAppScale();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8991c43c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/fullScreenContainer/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,attrs:{"id":"dv-full-screen-container"}},[(_vm.ready)?[_vm._t("default")]:_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/fullScreenContainer/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var fullScreenContainer_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "4LX4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4hvV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABjklEQVRYR+2YgXGCMBiFyQS2E9QNbDfACeoIjoATqBO0I3SEugEbqBOIG+AE+J4XaUJpQ0LI5U5y999xQP7/yyN5BEQSWROR8STxA1VV9QrV1ojFgOqVyJ0jtkKIg1pHU0jC7AcEaUv9pkI1gb7R4z0w0A5A9dNoAlWBYViuBNDzvW4MQAmAao4RqG1KuCq0Q7IMnQusxhTHn4iZjzlnA3RGwUJOPM2XADXF+S8HIPZ70byn4xw64z529t4wGA6yhrJRaCkVujQdlZTy0dlaxS9lbYBUdTRHBUyGix8+5HMFYm3OGcqdyvDBM/qQUcU+j8yY3OWGhwXaQq0cwWVOV5/8pV4IhVYoQohbM238ugJdkMtpG4sCVEZrEupJnuRGsFasKxD9hmbI/a+3BjBCnRB3uCA+NFdVaoNQR9hVoT6qUFW+Wo4IvkQ3CH7NtLYQQFaDGYFMcsWmEPdaPytOpcdqiO5DkSshnk9pqiUdlcs0Vd3UNA8sr/MtkNMO/v3ZYJl0kNvj/z80yLAtkl4BvNbAJd7ophIAAAAASUVORK5CYII="

/***/ }),

/***/ "5NCg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5o8e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox2/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvBorderBox2',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    return {
      ref: 'border-box-2',

      defaultColor: ['#fff', 'rgba(255, 255, 255, 0.6)'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-66f6c5e4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox2/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-2"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      7, 7 " + (_vm.width - 7) + ", 7 " + (_vm.width - 7) + ", " + (_vm.height - 7) + " 7, " + (_vm.height - 7) + "\n    ")}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("2, 2 " + (_vm.width - 2) + " ,2 " + (_vm.width - 2) + ", " + (_vm.height - 2) + " 2, " + (_vm.height - 2) + " 2, 2")}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[1],"points":("6, 6 " + (_vm.width - 6) + ", 6 " + (_vm.width - 6) + ", " + (_vm.height - 6) + " 6, " + (_vm.height - 6) + " 6, 6")}}),_vm._v(" "),_c('circle',{attrs:{"fill":_vm.mergedColor[0],"cx":"11","cy":"11","r":"1"}}),_vm._v(" "),_c('circle',{attrs:{"fill":_vm.mergedColor[0],"cx":_vm.width - 11,"cy":"11","r":"1"}}),_vm._v(" "),_c('circle',{attrs:{"fill":_vm.mergedColor[0],"cx":_vm.width - 11,"cy":_vm.height - 11,"r":"1"}}),_vm._v(" "),_c('circle',{attrs:{"fill":_vm.mergedColor[0],"cx":"11","cy":_vm.height - 11,"r":"1"}})]),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox2/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox2_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "7WLs":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACEElEQVRYhbWXbYGDMAyGJwEJSMDBzcHNyeFgc3A4GA5uDsABONgcDAfP/bjkCFkLZWzvP9omefPRkO52KwAcgDPQAB0jOln7Bj7X6EwxmonRO+m4i0y21fjJGe6BEtgDhTlXyFopZyyR47Ne2xDXQB459+AlkIuMTVFaNMSbq/HYe/pt9i2usufP92a/CFudeqTKL8pawtsEjMbQAHuj82JIxCNh2F7MWrnCsMeX0aMkupjxkxzoGT2vQ1pX4mwioQ6eQqHXai8WPK+NXCrB0tQEYivbBRTVJudBBIinYu9sVVbRIIu5fLcpBORsKho5n8v3XRUcZKF3YXo1ARjTq7VwsCHRPFVvJFC5gq9suDVHtzcSuLoaa204ihSFGwng0tzt3MZiVb+CgJXbTCBAKGOmP4QIbErBDImoPGMK+tVFSOJvNSJ7k71JEeq1S7qGJEw6xFMQvIbaiDoXnnfgsRHJQnIr3oBWdGsrHkIhq12OXom9szX5GWWMUVj6HT+D0jk24OuIsTD+B0heM5DUxkkddE+x6tXi+DFrWyJRGj1aV/3c9ckY+0DDdChdU5gt06G0kfUbS32Ev2uoJDoex+yKcLO6yZ4/35n9+bHcRcK+cM4EHiYz8rnIKP4H3VXgrzAHo6gDvoCPgKcfwJHpi2ogVnArSGQSWktkCYPIbHucBsgcRHHrUtTLWoW210T8AuOUY7HgBgRiAAAAAElFTkSuQmCC"

/***/ }),

/***/ "80xR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var lib_util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(lib_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox8/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var main = ({
  name: 'DvBorderBox8',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    dur: {
      type: Number,
      default: 3
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var id = Object(util["e" /* uuid */])();
    return {
      ref: 'border-box-8',
      path: 'border-box-8-path-' + id,
      gradient: 'border-box-8-gradient-' + id,
      mask: 'border-box-8-mask-' + id,

      defaultColor: ['#235fa7', '#4fd2dd'],

      mergedColor: []
    };
  },

  computed: {
    length: function length() {
      var width = this.width,
          height = this.height;


      return (width + height - 5) * 2;
    },
    pathD: function pathD() {
      var reverse = this.reverse,
          width = this.width,
          height = this.height;


      if (reverse) return 'M 2.5, 2.5 L 2.5, ' + (height - 2.5) + ' L ' + (width - 2.5) + ', ' + (height - 2.5) + ' L ' + (width - 2.5) + ', 2.5 L 2.5, 2.5';

      return 'M2.5, 2.5 L' + (width - 2.5) + ', 2.5 L' + (width - 2.5) + ', ' + (height - 2.5) + ' L2.5, ' + (height - 2.5) + ' L2.5, 2.5';
    }
  },
  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(lib_util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8bebf580","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox8/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-8"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('path',{attrs:{"id":_vm.path,"d":_vm.pathD,"fill":"transparent"}}),_vm._v(" "),_c('radialGradient',{attrs:{"id":_vm.gradient,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#fff","stop-opacity":"1"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"100%","stop-color":"#fff","stop-opacity":"0"}})],1),_vm._v(" "),_c('mask',{attrs:{"id":_vm.mask}},[_c('circle',{attrs:{"cx":"0","cy":"0","r":"150","fill":("url(#" + _vm.gradient + ")")}},[_c('animateMotion',{attrs:{"dur":(_vm.dur + "s"),"path":_vm.pathD,"rotate":"auto","repeatCount":"indefinite"}})],1)])],1),_vm._v(" "),_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("5, 5 " + (_vm.width - 5) + ", 5 " + (_vm.width - 5) + " " + (_vm.height - 5) + " 5, " + (_vm.height - 5))}}),_vm._v(" "),_c('use',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"1","xlink:href":("#" + _vm.path)}}),_vm._v(" "),_c('use',{attrs:{"stroke":_vm.mergedColor[1],"stroke-width":"3","xlink:href":("#" + _vm.path),"mask":("url(#" + _vm.mask + ")")}},[_c('animate',{attrs:{"attributeName":"stroke-dasharray","from":("0, " + _vm.length),"to":(_vm.length + ", 0"),"dur":(_vm.dur + "s"),"repeatCount":"indefinite"}})])]),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox8/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox8_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "8Eth":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACLUlEQVRYR+2Y8VHCMBSH6QTiBLKBbqBOIE4gTqBOIE4gTCBOoExg3UAmEDbQCervw4QradMmLXD8Qe7eAbkk78svyXsJSWfPSrJnPJ1ooCzLuprEqexM1jOffKc+lc1lX8ZmSZL8xEzaC1TjOMYHQBbQwnpB14AE0VfnOzNrZrzNYkHHUvHdOnKBsm0S+MYW0IrjAFSm0kGhun15UEgKTWUc7XsTVNdE27VCr3I4gEBxjsj+7S7hLoGe5GxoAQSEQs+bAvrUQKmMaE4uqyu3gpnkYFDpZZPH/phEaXIcYD6oX/aKAwPIctk2CXQpJ4CwF8hzzP7KcQDMhdqRTJdFbSthaNN0D5EMry2UcQbUjfG9BmOg3wD0KWPrmwLZ/u7eAIr7UF8Dz3MKfpj6Op7GCuUHdqG69iJmjjbKABlU2ipUqpRRBgiUibpLVQGxT46CpvXfiNM0bgOjvguN0Vvtp7xzyZ3q93kEEE1JCewdgl6TMhUQsW1Z3AtaaSRt4iWiz4OARj4g1p7ZxixbhO9CU0JFzx6IgkJUaNmG+nhs4yWi71quKwUyUETakHwV4bvQlKdQITSUvssC8lUbEPrOZKSYwiOy7qGYbkEpL4x3yez0K5JoU4W4OQ7KlCk9ZT4v5kU7aXH6OE2ArF6oPl/BfzYYtYhTWGhYAIQYM6pSJQ8XDOQsI1AD2YlnpgvVo2gwSNSSVSwlxxYwG/pZkkn+gha72aIVinUQ237vgP4Aqsv5JRfD04AAAAAASUVORK5CYII="

/***/ }),

/***/ "8slu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration8/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvDecoration8',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      ref: 'decoration-8',

      defaultColor: ['#3f96a5', '#3f96a5'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    xPos: function xPos(pos) {
      var reverse = this.reverse,
          width = this.width;


      if (!reverse) return pos;

      return width - pos;
    },
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4ea0ffd0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration8/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-8"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"2","fill":"transparent","points":((_vm.xPos(0)) + ", 0 " + (_vm.xPos(30)) + ", " + (_vm.height / 2))}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"2","fill":"transparent","points":((_vm.xPos(20)) + ", 0 " + (_vm.xPos(50)) + ", " + (_vm.height / 2) + " " + (_vm.xPos(_vm.width)) + ", " + (_vm.height / 2))}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[1],"fill":"transparent","stroke-width":"3","points":((_vm.xPos(0)) + ", " + (_vm.height - 3) + ", " + (_vm.xPos(200)) + ", " + (_vm.height - 3))}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration8/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration8_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "977A":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9Eed":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "AkUR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Hamburger/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Hamburger = ({
  name: 'hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5193bb88","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Hamburger/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('svg',{staticClass:"hamburger",class:{'is-active':_vm.isActive},attrs:{"t":"1492500959545","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1691","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"64","height":"64"},on:{"click":_vm.toggleClick}},[_c('path',{attrs:{"d":"M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z","p-id":"1692"}}),_vm._v(" "),_c('path',{attrs:{"d":"M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z","p-id":"1693"}}),_vm._v(" "),_c('path',{attrs:{"d":"M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z","p-id":"1694"}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Hamburger = (esExports);
// CONCATENATED MODULE: ./src/components/Hamburger/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("Alin")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5193bb88"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Hamburger,
  components_Hamburger,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Hamburger = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/components/Navbar.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Navbar = ({
  name: "Navbar",
  data: function data() {
    return {
      levelList: null,
      isShow: false
    };
  },

  components: {
    Hamburger: src_components_Hamburger
  },
  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(["sidebar", "name", "avatar", "roles", "sys_role", "system"])),
  watch: {
    $route: function $route() {
      this.getBreadcrumb();
    }
  },
  created: function created() {
    this.getBreadcrumb();
  },

  methods: {
    getBreadcrumb: function getBreadcrumb() {
      var _this = this;

      var matched = this.$route.matched;
      this.levelList = matched;

      this.request({
        url: "/apply/getApplyLogs",
        method: "get"
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          if (data.data.length > 0) {
            _this.isShow = true;
          }
        }
      });
    },
    toggleSideBar: function toggleSideBar() {
      this.$store.dispatch("toggleSideBar");
    },
    logout: function logout() {
      this.$store.dispatch("LogOut").then(function () {
        location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
      });
    },
    handleCommand: function handleCommand(system) {
      this.$store.dispatch("ChangeSystem", system).then(function () {
        location.href = "/";
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6017246e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/components/Navbar.vue
var Navbar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-menu',{staticClass:"navbar",attrs:{"mode":"horizontal"}},[_c('hamburger',{staticClass:"hamburger-container",attrs:{"toggleClick":_vm.toggleSideBar,"isActive":_vm.sidebar.opened}}),_vm._v(" "),_c('el-breadcrumb',{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}}),_vm._v(" "),_c('div',{staticClass:"right-menu"},[(_vm.sys_role == 1)?_c('span',[_c('router-link',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"applylink",attrs:{"to":"weekplanapply"}},[_c('i',{staticClass:"el-icon-message"})])],1):_vm._e(),_vm._v(" "),_c('el-dropdown',{staticClass:"avatar-container right-menu-item",attrs:{"trigger":"click"}},[_c('div',{staticClass:"avatar-wrapper"},[_c('a',{staticClass:"dapin",staticStyle:{"display":"none"},attrs:{"target":"_blank","href":"#/datav/"}},[_vm._v("大屏")]),_vm._v(" "),_c('span',[_vm._v("欢迎您，"+_vm._s(_vm.name))]),_vm._v(" "),_c('i',{staticClass:"el-icon-caret-bottom"})]),_vm._v(" "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('el-dropdown-item',[_c('span',{staticStyle:{"display":"block"},on:{"click":_vm.logout}},[_vm._v("退出登录")])])],1)],1)],1)],1)}
var Navbar_staticRenderFns = []
var Navbar_esExports = { render: Navbar_render, staticRenderFns: Navbar_staticRenderFns }
/* harmony default export */ var components_Navbar = (Navbar_esExports);
// CONCATENATED MODULE: ./src/views/layout/components/Navbar.vue
function Navbar_injectStyle (ssrContext) {
  __webpack_require__("0S16")
}
var Navbar_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Navbar___vue_template_functional__ = false
/* styles */
var Navbar___vue_styles__ = Navbar_injectStyle
/* scopeId */
var Navbar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Navbar___vue_module_identifier__ = null
var Navbar_Component = Navbar_normalizeComponent(
  Navbar,
  components_Navbar,
  Navbar___vue_template_functional__,
  Navbar___vue_styles__,
  Navbar___vue_scopeId__,
  Navbar___vue_module_identifier__
)

/* harmony default export */ var layout_components_Navbar = (Navbar_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/components/Sidebar/SidebarItem.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SidebarItem = ({
  name: "SidebarItem",
  data: function data() {
    return {
      isActive: false
    };
  },

  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    activeSel: function activeSel(event, url) {
      this.isActive = !this.isActive;
    },
    hasOneShowingChildren: function hasOneShowingChildren(children) {
      var showingChildren = children.filter(function (item) {
        return !item.hidden;
      });
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-09241157","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/components/Sidebar/SidebarItem.vue
var SidebarItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-menu-item menu-wrapper",attrs:{"id":"app-menu-items"}},[_vm._l((_vm.routes),function(item){return [(item.redirect=='monitor')?_c('router-link',{key:item.children[0].name,attrs:{"to":item.path+'/'+item.children[0].path},nativeOn:{"click":function($event){_vm.activeSel($event,item.path+'/'+item.children[0].path)}}},[_c('el-menu-item',{class:{'is_active':_vm.isActive},attrs:{"index":item.path+'/'+item.children[0].path,"id":'menu_'+item.children[0].path}},[_c('em',[_c('img',{attrs:{"src":__webpack_require__("EIVR")("./m_"+item.children[0].path+'.png')}})]),_vm._v(" "),(item.children[0].meta&&item.children[0].meta.title)?_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(item.children[0].meta.title))]):_vm._e()])],1):_vm._e()]})],2)}
var SidebarItem_staticRenderFns = []
var SidebarItem_esExports = { render: SidebarItem_render, staticRenderFns: SidebarItem_staticRenderFns }
/* harmony default export */ var Sidebar_SidebarItem = (SidebarItem_esExports);
// CONCATENATED MODULE: ./src/views/layout/components/Sidebar/SidebarItem.vue
function SidebarItem_injectStyle (ssrContext) {
  __webpack_require__("1xxZ")
}
var SidebarItem_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var SidebarItem___vue_template_functional__ = false
/* styles */
var SidebarItem___vue_styles__ = SidebarItem_injectStyle
/* scopeId */
var SidebarItem___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var SidebarItem___vue_module_identifier__ = null
var SidebarItem_Component = SidebarItem_normalizeComponent(
  SidebarItem,
  Sidebar_SidebarItem,
  SidebarItem___vue_template_functional__,
  SidebarItem___vue_styles__,
  SidebarItem___vue_scopeId__,
  SidebarItem___vue_module_identifier__
)

/* harmony default export */ var components_Sidebar_SidebarItem = (SidebarItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/components/Sidebar/index.vue

//
//
//
//
//
//
//



/* harmony default export */ var Sidebar = ({
  components: { SidebarItem: components_Sidebar_SidebarItem },
  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(["permission_routers", "sidebar"]), {
    isCollapse: function isCollapse() {
      return !this.sidebar.opened;
    }
  })
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1b36b65e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/components/Sidebar/index.vue
var Sidebar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-scrollbar',{attrs:{"wrapClass":"scrollbar-wrapper"}},[_c('el-menu',{staticClass:"app-menu",attrs:{"mode":"vertical","show-timeout":200,"default-active":_vm.$route.path,"collapse":_vm.isCollapse}},[_c('sidebar-item',{attrs:{"routes":_vm.permission_routers}})],1)],1)}
var Sidebar_staticRenderFns = []
var Sidebar_esExports = { render: Sidebar_render, staticRenderFns: Sidebar_staticRenderFns }
/* harmony default export */ var components_Sidebar = (Sidebar_esExports);
// CONCATENATED MODULE: ./src/views/layout/components/Sidebar/index.vue
function Sidebar_injectStyle (ssrContext) {
  __webpack_require__("YZEJ")
}
var Sidebar_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Sidebar___vue_template_functional__ = false
/* styles */
var Sidebar___vue_styles__ = Sidebar_injectStyle
/* scopeId */
var Sidebar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Sidebar___vue_module_identifier__ = null
var Sidebar_Component = Sidebar_normalizeComponent(
  Sidebar,
  components_Sidebar,
  Sidebar___vue_template_functional__,
  Sidebar___vue_styles__,
  Sidebar___vue_scopeId__,
  Sidebar___vue_module_identifier__
)

/* harmony default export */ var layout_components_Sidebar = (Sidebar_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/components/AppMain.vue
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AppMain = ({
    provide: function provide() {
        return {
            reload: this.reload
        };
    },
    data: function data() {
        return {
            isRouterAlive: true
        };
    },

    computed: {
        cachedViews: function cachedViews() {
            return this.$store.state.tagsView.cachedViews;
        },
        key: function key() {
            return this.$route.fullPath;
        }
    },
    methods: {
        reload: function reload() {
            var _this = this;

            this.isRouterAlive = false;
            this.$nextTick(function () {
                _this.isRouterAlive = true;
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e39b628c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/components/AppMain.vue
var AppMain_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(_vm.isRouterAlive)?_c('keep-alive',{attrs:{"include":_vm.cachedViews}},[_c('router-view',{key:_vm.key})],1):_vm._e()],1)],1)}
var AppMain_staticRenderFns = []
var AppMain_esExports = { render: AppMain_render, staticRenderFns: AppMain_staticRenderFns }
/* harmony default export */ var components_AppMain = (AppMain_esExports);
// CONCATENATED MODULE: ./src/views/layout/components/AppMain.vue
var AppMain_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var AppMain___vue_template_functional__ = false
/* styles */
var AppMain___vue_styles__ = null
/* scopeId */
var AppMain___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AppMain___vue_module_identifier__ = null
var AppMain_Component = AppMain_normalizeComponent(
  AppMain,
  components_AppMain,
  AppMain___vue_template_functional__,
  AppMain___vue_styles__,
  AppMain___vue_scopeId__,
  AppMain___vue_module_identifier__
)

/* harmony default export */ var layout_components_AppMain = (AppMain_Component.exports);

// CONCATENATED MODULE: ./src/views/layout/components/index.js



// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/Layout.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// import ResizeMixin from "./mixin/ResizeHandler";
/* harmony default export */ var Layout = ({
  data: function data() {
    return {
      msg: 0,
      noMenu: true
    };
  },

  components: {
    Navbar: layout_components_Navbar,
    Sidebar: layout_components_Sidebar,
    AppMain: layout_components_AppMain
  },
  // mixins: [ResizeMixin],
  computed: {
    sidebar: function sidebar() {
      return this.$store.state.app.sidebar;
    },
    device: function device() {
      return this.$store.state.app.device;
    },
    classObj: function classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  },
  mounted: function mounted() {
    this.isMenu();
  },

  methods: {
    isMenu: function isMenu() {
      var curpath = this.$route.path;
      console.log(curpath);
      // if (curpath == "/datav") {
      if (curpath.indexOf("datav") != -1) {
        this.noMenu = false;
      }
    },
    handleClickOutside: function handleClickOutside() {
      this.$store.dispatch("closeSideBar", { withoutAnimation: false });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0c8c4c69","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/Layout.vue
var Layout_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-wrapper",class:_vm.classObj},[(_vm.noMenu)?_c('div',{staticClass:"app-ishow"},[_c('sidebar',{staticClass:"sidebar-container"}),_vm._v(" "),_c('div',{staticClass:"main-container"},[_c('navbar',{attrs:{"msg":_vm.msg}}),_vm._v(" "),_c('app-main')],1)],1):_c('div',[_c('app-main')],1)])}
var Layout_staticRenderFns = []
var Layout_esExports = { render: Layout_render, staticRenderFns: Layout_staticRenderFns }
/* harmony default export */ var layout_Layout = (Layout_esExports);
// CONCATENATED MODULE: ./src/views/layout/Layout.vue
var Layout_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Layout___vue_template_functional__ = false
/* styles */
var Layout___vue_styles__ = null
/* scopeId */
var Layout___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Layout___vue_module_identifier__ = null
var Layout_Component = Layout_normalizeComponent(
  Layout,
  layout_Layout,
  Layout___vue_template_functional__,
  Layout___vue_styles__,
  Layout___vue_scopeId__,
  Layout___vue_module_identifier__
)

/* harmony default export */ var views_layout_Layout = __webpack_exports__["default"] = (Layout_Component.exports);


/***/ }),

/***/ "Alin":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "B/i6":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACWUlEQVRYR+1Xi1ECMRDlKkArACpQKhAqUCsQKlArECpQKhArUCoQKhA7gArECs73MpubJeQuuQNmcOYys8OR/eTlbT6bpHFiLTkxPI3/ByhN0wew+AwZJ0ky0owq3QQ62mWtSFeUlSBDCDxHgCsGwaBb9lV10YAwwBmML8ThF+Mv3UHx/1LAldW14deS2N+IvfEBc2e8VIAWcOp5AJExslVWx3Q/CYgN/M9jAKXKaAmnLgB9oO8assb/tgBsFuha0HVy/EzqfenP+jVKBNGAqOpCVpABhMCY0k/57eOXjFod7b8idHsBYp65ewiqDXmRARmUupGACuloR5usuRvEKtw15DKkYxz0uwYUorNmqGYoxEBIX68hxdBCDlZ28XDk5cyrx1tphA7GCZx5ZVRtvFpsBUEgcwE3dGurmJOaJYIpNao0KVNY2PU8/lP0PfpKkCKGeFd14bQqCwhgbuDzKuzkuZO9vgsqlLKyWFgBcAL21rf+t/jgxWwLNNtvShw9yCEBmRSDHabjbmsQKHSh58yS64k+ph0S0FhY+HFp5Y4qADSDmimOAjSUFMSkjmuCm4AF3FYTQEzZvS+QPgKKGDI1dQwSawMWaL8DCH1TxBr60mnSpM6kUMo4K+/rwAOUByBtuaB9LQ+UqdVjU1aGoDcEHoCFFZzc3WTjTPExg7yrwMbvGIDITgfCGtw+d2Im1NFnXShlMQG1zZhXQsGOcuPxtOayyJoLyL7BygLR9tyZjMP08D2X13bA0DD4tt8HmVwhXB89SBOyhswho7wr6aiAqkymBhRi7Q/tRko0/IT28wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "BNBy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox13/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvBorderBox13',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    return {
      ref: 'border-box-13',

      defaultColor: ['#6586ec', '#2cf7fe'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c2df6ffc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox13/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-13"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('path',{attrs:{"fill":_vm.backgroundColor,"stroke":_vm.mergedColor[0],"d":("\n        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10\n        L " + (_vm.width - 20) + " 10 L " + (_vm.width - 5) + " 25\n        L " + (_vm.width - 5) + " " + (_vm.height - 5) + " L 20 " + (_vm.height - 5) + "\n        L 5 " + (_vm.height - 20) + " L 5 20\n      ")}}),_vm._v(" "),_c('path',{attrs:{"fill":"transparent","stroke-width":"3","stroke-linecap":"round","stroke-dasharray":"10, 5","stroke":_vm.mergedColor[0],"d":"M 16 9 L 61 9"}}),_vm._v(" "),_c('path',{attrs:{"fill":"transparent","stroke":_vm.mergedColor[1],"d":"M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"}}),_vm._v(" "),_c('path',{attrs:{"fill":"transparent","stroke":_vm.mergedColor[1],"d":("M " + (_vm.width - 5) + " " + (_vm.height - 30) + " L " + (_vm.width - 5) + " " + (_vm.height - 5) + " L " + (_vm.width - 30) + " " + (_vm.height - 5))}})]),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox13/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox13_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "BvmP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration5/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var main = ({
  name: 'DvDecoration5',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    dur: {
      type: Number,
      default: 1.2
    }
  },
  data: function data() {
    return {
      ref: 'decoration-5',

      line1Points: '',
      line2Points: '',

      line1Length: 0,
      line2Length: 0,

      defaultColor: ['#3f96a5', '#3f96a5'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var calcSVGData = this.calcSVGData;


      calcSVGData();
    },
    calcSVGData: function calcSVGData() {
      var width = this.width,
          height = this.height;


      var line1Points = [[0, height * 0.2], [width * 0.18, height * 0.2], [width * 0.2, height * 0.4], [width * 0.25, height * 0.4], [width * 0.27, height * 0.6], [width * 0.72, height * 0.6], [width * 0.75, height * 0.4], [width * 0.8, height * 0.4], [width * 0.82, height * 0.2], [width, height * 0.2]];

      var line2Points = [[width * 0.3, height * 0.8], [width * 0.7, height * 0.8]];

      var line1Length = Object(util["getPolylineLength"])(line1Points);
      var line2Length = Object(util["getPolylineLength"])(line2Points);

      line1Points = line1Points.map(function (point) {
        return point.join(',');
      }).join(' ');
      line2Points = line2Points.map(function (point) {
        return point.join(',');
      }).join(' ');

      this.line1Points = line1Points;
      this.line2Points = line2Points;

      this.line1Length = line1Length;
      this.line2Length = line2Length;
    },
    onResize: function onResize() {
      var calcSVGData = this.calcSVGData;


      calcSVGData();
    },
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e54476e2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration5/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-5"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('polyline',{attrs:{"fill":"transparent","stroke":_vm.mergedColor[0],"stroke-width":"3","points":_vm.line1Points}},[_c('animate',{attrs:{"attributeName":"stroke-dasharray","attributeType":"XML","from":("0, " + (_vm.line1Length / 2) + ", 0, " + (_vm.line1Length / 2)),"to":("0, 0, " + _vm.line1Length + ", 0"),"dur":(_vm.dur + "s"),"begin":"0s","calcMode":"spline","keyTimes":"0;1","keySplines":"0.4,1,0.49,0.98","repeatCount":"indefinite"}})]),_vm._v(" "),_c('polyline',{attrs:{"fill":"transparent","stroke":_vm.mergedColor[1],"stroke-width":"2","points":_vm.line2Points}},[_c('animate',{attrs:{"attributeName":"stroke-dasharray","attributeType":"XML","from":("0, " + (_vm.line2Length / 2) + ", 0, " + (_vm.line2Length / 2)),"to":("0, 0, " + _vm.line2Length + ", 0"),"dur":(_vm.dur + "s"),"begin":"0s","calcMode":"spline","keyTimes":"0;1","keySplines":".4,1,.49,.98","repeatCount":"indefinite"}})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration5/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration5_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Bwl3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BySr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/scrollBoard/src/main.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvScrollBoard',
  mixins: [autoResize["a" /* default */]],
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ref: 'scroll-board',

      defaultConfig: {
        /**
         * @description Board header
         * @type {Array<String>}
         * @default header = []
         * @example header = ['column1', 'column2', 'column3']
         */
        header: [],
        /**
         * @description Board data
         * @type {Array<Array>}
         * @default data = []
         */
        data: [],
        /**
         * @description Row num
         * @type {Number}
         * @default rowNum = 5
         */
        rowNum: 5,
        /**
         * @description Header background color
         * @type {String}
         * @default headerBGC = '#00BAFF'
         */
        headerBGC: '#00BAFF',
        /**
         * @description Odd row background color
         * @type {String}
         * @default oddRowBGC = '#003B51'
         */
        oddRowBGC: '#003B51',
        /**
         * @description Even row background color
         * @type {String}
         * @default evenRowBGC = '#003B51'
         */
        evenRowBGC: '#0A2732',
        /**
         * @description Scroll wait time
         * @type {Number}
         * @default waitTime = 2000
         */
        waitTime: 2000,
        /**
         * @description Header height
         * @type {Number}
         * @default headerHeight = 35
         */
        headerHeight: 35,
        /**
         * @description Column width
         * @type {Array<Number>}
         * @default columnWidth = []
         */
        columnWidth: [],
        /**
         * @description Column align
         * @type {Array<String>}
         * @default align = []
         * @example align = ['left', 'center', 'right']
         */
        align: [],
        /**
         * @description Show index
         * @type {Boolean}
         * @default index = false
         */
        index: false,
        /**
         * @description index Header
         * @type {String}
         * @default indexHeader = '#'
         */
        indexHeader: '#',
        /**
         * @description Carousel type
         * @type {String}
         * @default carousel = 'single'
         * @example carousel = 'single' | 'page'
         */
        carousel: 'single',
        /**
         * @description Pause scroll when mouse hovered
         * @type {Boolean}
         * @default hoverPause = true
         * @example hoverPause = true | false
         */
        hoverPause: true
      },

      mergedConfig: null,

      header: [],

      rowsData: [],

      rows: [],

      widths: [],

      heights: [],

      avgHeight: 0,

      aligns: [],

      animationIndex: 0,

      animationHandler: '',

      updater: 0,

      needCalc: false
    };
  },

  watch: {
    config: function config() {
      var stopAnimation = this.stopAnimation,
          calcData = this.calcData;


      stopAnimation();

      this.animationIndex = 0;

      calcData();
    }
  },
  methods: {
    handleHover: function handleHover(enter, ri, ci, row, ceil) {
      var mergedConfig = this.mergedConfig,
          emitEvent = this.emitEvent,
          stopAnimation = this.stopAnimation,
          animation = this.animation;


      if (enter) emitEvent('mouseover', ri, ci, row, ceil);
      if (!mergedConfig.hoverPause) return;

      if (enter) {
        stopAnimation();
      } else {
        animation(true);
      }
    },
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var calcData = this.calcData;


      calcData();
    },
    onResize: function onResize() {
      var mergedConfig = this.mergedConfig,
          calcWidths = this.calcWidths,
          calcHeights = this.calcHeights;


      if (!mergedConfig) return;

      calcWidths();

      calcHeights();
    },
    calcData: function calcData() {
      var mergeConfig = this.mergeConfig,
          calcHeaderData = this.calcHeaderData,
          calcRowsData = this.calcRowsData;


      mergeConfig();

      calcHeaderData();

      calcRowsData();

      var calcWidths = this.calcWidths,
          calcHeights = this.calcHeights,
          calcAligns = this.calcAligns;


      calcWidths();

      calcHeights();

      calcAligns();

      var animation = this.animation;


      animation(true);
    },
    mergeConfig: function mergeConfig() {
      var config = this.config,
          defaultConfig = this.defaultConfig;


      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {});
    },
    calcHeaderData: function calcHeaderData() {
      var _mergedConfig = this.mergedConfig,
          header = _mergedConfig.header,
          index = _mergedConfig.index,
          indexHeader = _mergedConfig.indexHeader;


      if (!header.length) {
        this.header = [];

        return;
      }

      header = [].concat(toConsumableArray_default()(header));

      if (index) header.unshift(indexHeader);

      this.header = header;
    },
    calcRowsData: function calcRowsData() {
      var _mergedConfig2 = this.mergedConfig,
          data = _mergedConfig2.data,
          index = _mergedConfig2.index,
          headerBGC = _mergedConfig2.headerBGC,
          rowNum = _mergedConfig2.rowNum;


      if (index) {
        data = data.map(function (row, i) {
          row = [].concat(toConsumableArray_default()(row));

          var indexTag = '<span class="index" style="background-color: ' + headerBGC + ';">' + (i + 1) + '</span>';

          row.unshift(indexTag);

          return row;
        });
      }

      data = data.map(function (ceils, i) {
        return { ceils: ceils, rowIndex: i };
      });

      var rowLength = data.length;

      if (rowLength > rowNum && rowLength < 2 * rowNum) {
        data = [].concat(toConsumableArray_default()(data), toConsumableArray_default()(data));
      }

      data = data.map(function (d, i) {
        return extends_default()({}, d, { scroll: i });
      });

      this.rowsData = data;
      this.rows = data;
    },
    calcWidths: function calcWidths() {
      var width = this.width,
          mergedConfig = this.mergedConfig,
          rowsData = this.rowsData;
      var columnWidth = mergedConfig.columnWidth,
          header = mergedConfig.header;


      var usedWidth = columnWidth.reduce(function (all, w) {
        return all + w;
      }, 0);

      var columnNum = 0;
      if (rowsData[0]) {
        columnNum = rowsData[0].ceils.length;
      } else if (header.length) {
        columnNum = header.length;
      }

      var avgWidth = (width - usedWidth) / (columnNum - columnWidth.length);

      var widths = new Array(columnNum).fill(avgWidth);

      this.widths = Object(util["deepMerge"])(widths, columnWidth);
    },
    calcHeights: function calcHeights() {
      var onresize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var height = this.height,
          mergedConfig = this.mergedConfig,
          header = this.header;
      var headerHeight = mergedConfig.headerHeight,
          rowNum = mergedConfig.rowNum,
          data = mergedConfig.data;


      var allHeight = height;

      if (header.length) allHeight -= headerHeight;

      var avgHeight = allHeight / rowNum;

      this.avgHeight = avgHeight;

      if (!onresize) this.heights = new Array(data.length).fill(avgHeight);
    },
    calcAligns: function calcAligns() {
      var header = this.header,
          mergedConfig = this.mergedConfig;


      var columnNum = header.length;

      var aligns = new Array(columnNum).fill('left');

      var align = mergedConfig.align;


      this.aligns = Object(util["deepMerge"])(aligns, align);
    },
    animation: function animation() {
      var _this = this;

      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _heights;

        var needCalc, calcHeights, calcRowsData, avgHeight, animationIndex, mergedConfig, rowsData, animation, updater, waitTime, carousel, rowNum, rowLength, animationNum, rows, back;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                needCalc = _this.needCalc, calcHeights = _this.calcHeights, calcRowsData = _this.calcRowsData;


                if (needCalc) {
                  calcRowsData();
                  calcHeights();
                  _this.needCalc = false;
                }

                avgHeight = _this.avgHeight, animationIndex = _this.animationIndex, mergedConfig = _this.mergedConfig, rowsData = _this.rowsData, animation = _this.animation, updater = _this.updater;
                waitTime = mergedConfig.waitTime, carousel = mergedConfig.carousel, rowNum = mergedConfig.rowNum;
                rowLength = rowsData.length;

                if (!(rowNum >= rowLength)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt('return');

              case 7:
                if (!start) {
                  _context.next = 12;
                  break;
                }

                _context.next = 10;
                return new promise_default.a(function (resolve) {
                  return setTimeout(resolve, waitTime);
                });

              case 10:
                if (!(updater !== _this.updater)) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt('return');

              case 12:
                animationNum = carousel === 'single' ? 1 : rowNum;
                rows = rowsData.slice(animationIndex);

                rows.push.apply(rows, toConsumableArray_default()(rowsData.slice(0, animationIndex)));

                _this.rows = rows.slice(0, carousel === 'page' ? rowNum * 2 : rowNum + 1);
                _this.heights = new Array(rowLength).fill(avgHeight);

                _context.next = 19;
                return new promise_default.a(function (resolve) {
                  return setTimeout(resolve, 300);
                });

              case 19:
                if (!(updater !== _this.updater)) {
                  _context.next = 21;
                  break;
                }

                return _context.abrupt('return');

              case 21:

                (_heights = _this.heights).splice.apply(_heights, [0, animationNum].concat(toConsumableArray_default()(new Array(animationNum).fill(0))));

                animationIndex += animationNum;

                back = animationIndex - rowLength;

                if (back >= 0) animationIndex = back;

                _this.animationIndex = animationIndex;
                _this.animationHandler = setTimeout(animation, waitTime - 300);

              case 27:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    stopAnimation: function stopAnimation() {
      var animationHandler = this.animationHandler,
          updater = this.updater;


      this.updater = (updater + 1) % 999999;

      if (!animationHandler) return;

      clearTimeout(animationHandler);
    },
    emitEvent: function emitEvent(type, ri, ci, row, ceil) {
      var ceils = row.ceils,
          rowIndex = row.rowIndex;


      this.$emit(type, {
        row: ceils,
        ceil: ceil,
        rowIndex: rowIndex,
        columnIndex: ci
      });
    },
    updateRows: function updateRows(rows, animationIndex) {
      var mergedConfig = this.mergedConfig,
          animationHandler = this.animationHandler,
          animation = this.animation;


      this.mergedConfig = extends_default()({}, mergedConfig, {
        data: [].concat(toConsumableArray_default()(rows))
      });

      this.needCalc = true;

      if (typeof animationIndex === 'number') this.animationIndex = animationIndex;
      if (!animationHandler) animation(true);
    }
  },
  destroyed: function destroyed() {
    var stopAnimation = this.stopAnimation;


    stopAnimation();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9e5e54ec","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/scrollBoard/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-scroll-board"},[(_vm.header.length && _vm.mergedConfig)?_c('div',{staticClass:"header",style:(("background-color: " + (_vm.mergedConfig.headerBGC) + ";"))},_vm._l((_vm.header),function(headerItem,i){return _c('div',{key:("" + headerItem + i),staticClass:"header-item",style:(("\n        height: " + (_vm.mergedConfig.headerHeight) + "px;\n        line-height: " + (_vm.mergedConfig.headerHeight) + "px;\n        width: " + (_vm.widths[i]) + "px;\n      ")),attrs:{"align":_vm.aligns[i]},domProps:{"innerHTML":_vm._s(headerItem)}})})):_vm._e(),_vm._v(" "),(_vm.mergedConfig)?_c('div',{staticClass:"rows",style:(("height: " + (_vm.height - (_vm.header.length ? _vm.mergedConfig.headerHeight : 0)) + "px;"))},_vm._l((_vm.rows),function(row,ri){return _c('div',{key:("" + (row.toString()) + (row.scroll)),staticClass:"row-item",style:(("\n        height: " + (_vm.heights[ri]) + "px;\n        line-height: " + (_vm.heights[ri]) + "px;\n        background-color: " + (_vm.mergedConfig[row.rowIndex % 2 === 0 ? 'evenRowBGC' : 'oddRowBGC']) + ";\n      "))},_vm._l((row.ceils),function(ceil,ci){return _c('div',{key:("" + ceil + ri + ci),staticClass:"ceil",style:(("width: " + (_vm.widths[ci]) + "px;")),attrs:{"align":_vm.aligns[ci]},domProps:{"innerHTML":_vm._s(ceil)},on:{"click":function($event){_vm.emitEvent('click', ri, ci, row, ceil)},"mouseenter":function($event){_vm.handleHover(true, ri, ci, row, ceil)},"mouseleave":function($event){_vm.handleHover(false)}}})}))})):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollBoard/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var scrollBoard_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "DTqG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DgXS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox4/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvBorderBox4',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    reverse: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    return {
      ref: 'border-box-4',

      defaultColor: ['red', 'rgba(0,0,255,0.8)'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f6297a6c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox4/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-4"},[_c('svg',{class:("dv-border-svg-container " + (_vm.reverse && 'dv-reverse')),attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      " + (_vm.width - 15) + ", 22 170, 22 150, 7 40, 7 28, 21 32, 24\n      16, 42 16, " + (_vm.height - 32) + " 41, " + (_vm.height - 7) + " " + (_vm.width - 15) + ", " + (_vm.height - 7) + "\n    ")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb4-line-1",attrs:{"stroke":_vm.mergedColor[0],"points":("145, " + (_vm.height - 5) + " 40, " + (_vm.height - 5) + " 10, " + (_vm.height - 35) + "\n        10, 40 40, 5 150, 5 170, 20 " + (_vm.width - 15) + ", 20")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb4-line-2",attrs:{"stroke":_vm.mergedColor[1],"points":("245, " + (_vm.height - 1) + " 36, " + (_vm.height - 1) + " 14, " + (_vm.height - 23) + "\n        14, " + (_vm.height - 100))}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb4-line-3",attrs:{"stroke":_vm.mergedColor[0],"points":("7, " + (_vm.height - 40) + " 7, " + (_vm.height - 75))}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb4-line-4",attrs:{"stroke":_vm.mergedColor[0],"points":"28, 24 13, 41 13, 64"}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb4-line-5",attrs:{"stroke":_vm.mergedColor[0],"points":"5, 45 5, 140"}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb4-line-6",attrs:{"stroke":_vm.mergedColor[1],"points":"14, 75 14, 180"}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb4-line-7",attrs:{"stroke":_vm.mergedColor[1],"points":"55, 11 147, 11 167, 26 250, 26"}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb4-line-8",attrs:{"stroke":_vm.mergedColor[1],"points":"158, 5 173, 16"}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb4-line-9",attrs:{"stroke":_vm.mergedColor[0],"points":("200, 17 " + (_vm.width - 10) + ", 17")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb4-line-10",attrs:{"stroke":_vm.mergedColor[1],"points":("385, 17 " + (_vm.width - 10) + ", 17")}})]),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox4/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox4_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "EIVR":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./m_admin.png": "nf3M",
	"./m_apply.png": "+IES",
	"./m_apply_on.png": "TwrZ",
	"./m_dashboard.png": "ajDz",
	"./m_description.png": "XV6P",
	"./m_detault.png": "YrFG",
	"./m_device.png": "nZu5",
	"./m_dispatch.png": "QpWN",
	"./m_dispatch_on.png": "yvSC",
	"./m_location.png": "T9cL",
	"./m_message.png": "/rPO",
	"./m_monitor.png": "RsYl",
	"./m_plan.png": "B/i6",
	"./m_plan_on.png": "q1L4",
	"./m_progress.png": "dwkL",
	"./m_project.png": "hbpv",
	"./m_real_time.png": "7WLs",
	"./m_run_monitor.png": "RsIg",
	"./m_search.png": "ivFw",
	"./m_security.png": "8Eth",
	"./m_set.png": "Iu5b",
	"./m_weekplanappl.png": "4hvV"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "EIVR";

/***/ }),

/***/ "F5G8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HJfr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox10/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvBorderBox10',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    return {
      ref: 'border-box-10',

      border: ['left-top', 'right-top', 'left-bottom', 'right-bottom'],

      defaultColor: ['#1d48c4', '#d3e1f8'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4e5e28a1","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox10/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-10",style:(("box-shadow: inset 0 0 25px 3px " + (_vm.mergedColor[0])))},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      4, 0 " + (_vm.width - 4) + ", 0 " + _vm.width + ", 4 " + _vm.width + ", " + (_vm.height - 4) + " " + (_vm.width - 4) + ", " + _vm.height + "\n      4, " + _vm.height + " 0, " + (_vm.height - 4) + " 0, 4\n    ")}})]),_vm._v(" "),_vm._l((_vm.border),function(item){return _c('svg',{key:item,class:(item + " dv-border-svg-container"),attrs:{"width":"150px","height":"150px"}},[_c('polygon',{attrs:{"fill":_vm.mergedColor[1],"points":"40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"}})])}),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox10/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox10_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "HMS8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var lib_util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(lib_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/percentPond/src/main.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvPercentPond',
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    var id = Object(util["e" /* uuid */])();
    return {
      gradientId1: 'percent-pond-gradientId1-' + id,
      gradientId2: 'percent-pond-gradientId2-' + id,

      width: 0,
      height: 0,

      defaultConfig: {
        /**
         * @description Value
         * @type {Number}
         * @default value = 0
         */
        value: 0,
        /**
         * @description Colors (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default colors = ['#00BAFF', '#3DE7C9']
         * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: ['#3DE7C9', '#00BAFF'],
        /**
         * @description Border width
         * @type {Number}
         * @default borderWidth = 3
         */
        borderWidth: 3,
        /**
         * @description Gap between border and pond
         * @type {Number}
         * @default borderGap = 3
         */
        borderGap: 3,
        /**
         * @description Line dash
         * @type {Array<Number>}
         * @default lineDash = [5, 1]
         */
        lineDash: [5, 1],
        /**
         * @description Text color
         * @type {String}
         * @default textColor = '#fff'
         */
        textColor: '#fff',
        /**
         * @description Border radius
         * @type {Number}
         * @default borderRadius = 5
         */
        borderRadius: 5,
        /**
         * @description Local Gradient
         * @type {Boolean}
         * @default localGradient = false
         * @example localGradient = false | true
         */
        localGradient: false,
        /**
         * @description Formatter
         * @type {String}
         * @default formatter = '{value}%'
         */
        formatter: '{value}%'
      },

      mergedConfig: null
    };
  },

  computed: {
    rectWidth: function rectWidth() {
      var mergedConfig = this.mergedConfig,
          width = this.width;


      if (!mergedConfig) return 0;

      var borderWidth = mergedConfig.borderWidth;


      return width - borderWidth;
    },
    rectHeight: function rectHeight() {
      var mergedConfig = this.mergedConfig,
          height = this.height;


      if (!mergedConfig) return 0;

      var borderWidth = mergedConfig.borderWidth;


      return height - borderWidth;
    },
    points: function points() {
      var mergedConfig = this.mergedConfig,
          width = this.width,
          height = this.height;


      var halfHeight = height / 2;

      if (!mergedConfig) return '0, ' + halfHeight + ' 0, ' + halfHeight;

      var borderWidth = mergedConfig.borderWidth,
          borderGap = mergedConfig.borderGap,
          value = mergedConfig.value;


      var polylineLength = (width - (borderWidth + borderGap) * 2) / 100 * value;

      return '\n        ' + (borderWidth + borderGap) + ', ' + halfHeight + '\n        ' + (borderWidth + borderGap + polylineLength) + ', ' + (halfHeight + 0.001) + '\n      ';
    },
    polylineWidth: function polylineWidth() {
      var mergedConfig = this.mergedConfig,
          height = this.height;


      if (!mergedConfig) return 0;

      var borderWidth = mergedConfig.borderWidth,
          borderGap = mergedConfig.borderGap;


      return height - (borderWidth + borderGap) * 2;
    },
    linearGradient: function linearGradient() {
      var mergedConfig = this.mergedConfig;


      if (!mergedConfig) return [];

      var colors = mergedConfig.colors;


      var colorNum = colors.length;

      var colorOffsetGap = 100 / (colorNum - 1);

      return colors.map(function (c, i) {
        return [colorOffsetGap * i, c];
      });
    },
    polylineGradient: function polylineGradient() {
      var gradientId1 = this.gradientId1,
          gradientId2 = this.gradientId2,
          mergedConfig = this.mergedConfig;


      if (!mergedConfig) return gradientId2;

      if (mergedConfig.localGradient) return gradientId1;

      return gradientId2;
    },
    gradient2XPos: function gradient2XPos() {
      var mergedConfig = this.mergedConfig;


      if (!mergedConfig) return '100%';

      var value = mergedConfig.value;


      return 200 - value + '%';
    },
    details: function details() {
      var mergedConfig = this.mergedConfig;


      if (!mergedConfig) return '';

      var value = mergedConfig.value,
          formatter = mergedConfig.formatter;


      return formatter.replace('{value}', value);
    }
  },
  watch: {
    config: function config() {
      var mergeConfig = this.mergeConfig;


      mergeConfig();
    }
  },
  methods: {
    init: function init() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var initWH, config, mergeConfig;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                initWH = _this.initWH, config = _this.config, mergeConfig = _this.mergeConfig;
                _context.next = 3;
                return initWH();

              case 3:
                if (config) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return');

              case 5:

                mergeConfig();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    initWH: function initWH() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var $nextTick, $refs, _$refs$percentPond, clientWidth, clientHeight;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                $nextTick = _this2.$nextTick, $refs = _this2.$refs;
                _context2.next = 3;
                return $nextTick();

              case 3:
                _$refs$percentPond = $refs['percent-pond'], clientWidth = _$refs$percentPond.clientWidth, clientHeight = _$refs$percentPond.clientHeight;


                _this2.width = clientWidth;
                _this2.height = clientHeight;

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    mergeConfig: function mergeConfig() {
      var config = this.config,
          defaultConfig = this.defaultConfig;


      this.mergedConfig = Object(lib_util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {});
    }
  },
  mounted: function mounted() {
    var init = this.init;


    init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8edb3d8a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/percentPond/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"percent-pond",staticClass:"dv-percent-pond"},[_c('svg',[_c('defs',[_c('linearGradient',{attrs:{"id":_vm.gradientId1,"x1":"0%","y1":"0%","x2":"100%","y2":"0%"}},_vm._l((_vm.linearGradient),function(lc){return _c('stop',{key:lc[0],attrs:{"offset":((lc[0]) + "%"),"stop-color":lc[1]}})})),_vm._v(" "),_c('linearGradient',{attrs:{"id":_vm.gradientId2,"x1":"0%","y1":"0%","x2":_vm.gradient2XPos,"y2":"0%"}},_vm._l((_vm.linearGradient),function(lc){return _c('stop',{key:lc[0],attrs:{"offset":((lc[0]) + "%"),"stop-color":lc[1]}})}))],1),_vm._v(" "),_c('rect',{attrs:{"x":_vm.mergedConfig ? _vm.mergedConfig.borderWidth / 2 : '0',"y":_vm.mergedConfig ? _vm.mergedConfig.borderWidth / 2 : '0',"rx":_vm.mergedConfig ? _vm.mergedConfig.borderRadius : '0',"ry":_vm.mergedConfig ? _vm.mergedConfig.borderRadius : '0',"fill":"transparent","stroke-width":_vm.mergedConfig ? _vm.mergedConfig.borderWidth : '0',"stroke":("url(#" + _vm.gradientId1 + ")"),"width":_vm.rectWidth > 0 ? _vm.rectWidth : 0,"height":_vm.rectHeight > 0 ? _vm.rectHeight : 0}}),_vm._v(" "),_c('polyline',{attrs:{"stroke-width":_vm.polylineWidth,"stroke-dasharray":_vm.mergedConfig ? _vm.mergedConfig.lineDash.join(',') : '0',"stroke":("url(#" + _vm.polylineGradient + ")"),"points":_vm.points}}),_vm._v(" "),_c('text',{attrs:{"stroke":_vm.mergedConfig ? _vm.mergedConfig.textColor : '#fff',"fill":_vm.mergedConfig ? _vm.mergedConfig.textColor : '#fff',"x":_vm.width / 2,"y":_vm.height / 2}},[_vm._v("\n      "+_vm._s(_vm.details)+"\n    ")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/percentPond/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var percentPond_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "HX3G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var lib_util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(lib_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/color/lib/index.js
var lib = __webpack_require__("glc7");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration12/src/main.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var main = ({
  name: 'DvDecoration12',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * @description Scan animation dur
     */
    scanDur: {
      type: Number,
      default: 3
    },
    /**
     * @description Halo animation dur
     */
    haloDur: {
      type: Number,
      default: 2
    }
  },
  data: function data() {
    var id = Object(util["e" /* uuid */])();
    return {
      ref: 'decoration-12',
      gId: 'decoration-12-g-' + id,
      gradientId: 'decoration-12-gradient-' + id,

      defaultColor: ['#2783ce', '#2cf7fe'],

      mergedColor: [],

      pathD: [],

      pathColor: [],

      circleR: [],

      splitLinePoints: [],

      arcD: [],

      segment: 30,

      sectorAngle: Math.PI / 3,

      ringNum: 3,

      ringWidth: 1,

      showSplitLine: true
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  computed: {
    x: function x() {
      var width = this.width;


      return width / 2;
    },
    y: function y() {
      var height = this.height;


      return height / 2;
    }
  },
  methods: {
    init: function init() {
      var mergeColor = this.mergeColor,
          calcPathD = this.calcPathD,
          calcPathColor = this.calcPathColor,
          calcCircleR = this.calcCircleR,
          calcSplitLinePoints = this.calcSplitLinePoints,
          calcArcD = this.calcArcD;


      mergeColor();

      calcPathD();

      calcPathColor();

      calcCircleR();

      calcSplitLinePoints();

      calcArcD();
    },
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(lib_util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    },
    calcPathD: function calcPathD() {
      var x = this.x,
          y = this.y,
          width = this.width,
          segment = this.segment,
          sectorAngle = this.sectorAngle;


      var startAngle = -Math.PI / 2;
      var angleGap = sectorAngle / segment;
      var r = width / 4;
      var lastEndPoints = Object(plugin_util["getCircleRadianPoint"])(x, y, r, startAngle);

      this.pathD = new Array(segment).fill('').map(function (_, i) {
        var endPoints = Object(plugin_util["getCircleRadianPoint"])(x, y, r, startAngle - (i + 1) * angleGap).map(function (_) {
          return _.toFixed(5);
        });
        var d = 'M' + lastEndPoints.join(',') + ' A' + r + ', ' + r + ' 0 0 0 ' + endPoints.join(',');
        lastEndPoints = endPoints;

        return d;
      });
    },
    calcPathColor: function calcPathColor() {
      var _mergedColor = slicedToArray_default()(this.mergedColor, 1),
          color = _mergedColor[0],
          segment = this.segment;

      var colorGap = 100 / (segment - 1);

      this.pathColor = new Array(segment).fill(color).map(function (_, i) {
        return Object(lib["fade"])(color, 100 - i * colorGap);
      });
    },
    calcCircleR: function calcCircleR() {
      var segment = this.segment,
          ringNum = this.ringNum,
          width = this.width,
          ringWidth = this.ringWidth;


      var radiusGap = (width / 2 - ringWidth / 2) / ringNum;

      this.circleR = new Array(ringNum).fill(0).map(function (_, i) {
        return radiusGap * (i + 1);
      });
    },
    calcSplitLinePoints: function calcSplitLinePoints() {
      var x = this.x,
          y = this.y,
          width = this.width;


      var angleGap = Math.PI / 6;
      var r = width / 2;

      this.splitLinePoints = new Array(6).fill('').map(function (_, i) {
        var startAngle = angleGap * (i + 1);
        var endAngle = startAngle + Math.PI;
        var startPoint = Object(plugin_util["getCircleRadianPoint"])(x, y, r, startAngle);
        var endPoint = Object(plugin_util["getCircleRadianPoint"])(x, y, r, endAngle);

        return startPoint.join(',') + ' ' + endPoint.join(',');
      });
    },
    calcArcD: function calcArcD() {
      var x = this.x,
          y = this.y,
          width = this.width;


      var angleGap = Math.PI / 6;
      var r = width / 2 - 1;

      this.arcD = new Array(4).fill('').map(function (_, i) {
        var startAngle = angleGap * (3 * i + 1);
        var endAngle = startAngle + angleGap;
        var startPoint = Object(plugin_util["getCircleRadianPoint"])(x, y, r, startAngle);
        var endPoint = Object(plugin_util["getCircleRadianPoint"])(x, y, r, endAngle);

        return 'M' + startPoint.join(',') + ' A' + x + ', ' + y + ' 0 0 1 ' + endPoint.join(',');
      });
    },
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var init = this.init;


      init();
    },

    fade: lib["fade"]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-317eb43b","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration12/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-12"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('g',{attrs:{"id":_vm.gId}},_vm._l((_vm.pathD),function(d,i){return _c('path',{key:d,attrs:{"stroke":_vm.pathColor[i],"stroke-width":_vm.width / 2,"fill":"transparent","d":d}})})),_vm._v(" "),_c('radialGradient',{attrs:{"id":_vm.gradientId,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"transparent","stop-opacity":"1"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"100%","stop-color":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 30),"stop-opacity":"1"}})],1)],1),_vm._v(" "),_vm._l((_vm.circleR),function(r){return _c('circle',{key:r,attrs:{"r":r,"cx":_vm.x,"cy":_vm.y,"stroke":_vm.mergedColor[1],"stroke-width":0.5,"fill":"transparent"}})}),_vm._v(" "),_c('circle',{attrs:{"r":"1","cx":_vm.x,"cy":_vm.y,"stroke":"transparent","fill":("url(#" + _vm.gradientId + ")")}},[_c('animate',{attrs:{"attributeName":"r","values":("1;" + (_vm.width / 2)),"dur":(_vm.haloDur + "s"),"repeatCount":"indefinite"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"opacity","values":"1;0","dur":(_vm.haloDur + "s"),"repeatCount":"indefinite"}})]),_vm._v(" "),_c('circle',{attrs:{"r":"2","cx":_vm.x,"cy":_vm.y,"fill":_vm.mergedColor[1]}}),_vm._v(" "),(_vm.showSplitLine)?_c('g',_vm._l((_vm.splitLinePoints),function(p){return _c('polyline',{key:p,attrs:{"points":p,"stroke":_vm.mergedColor[1],"stroke-width":0.5,"opacity":"0.5"}})})):_vm._e(),_vm._v(" "),_vm._l((_vm.arcD),function(d){return _c('path',{key:d,attrs:{"d":d,"stroke":_vm.mergedColor[1],"stroke-width":"2","fill":"transparent"}})}),_vm._v(" "),_c('use',{attrs:{"xlink:href":("#" + _vm.gId)}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":("0, " + _vm.x + " " + _vm.y + ";360, " + _vm.x + " " + _vm.y),"dur":(_vm.scanDur + "s"),"repeatCount":"indefinite"}})],1)],2),_vm._v(" "),_c('div',{staticClass:"decoration-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration12/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration12_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "I/zu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IcnI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__("lbHh");
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);

// CONCATENATED MODULE: ./src/store/modules/app.js


var app = {
  state: {
    sidebar: {
      opened: !+js_cookie_default.a.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    language: js_cookie_default.a.get('language') || 'en'
  },
  mutations: {
    TOGGLE_SIDEBAR: function TOGGLE_SIDEBAR(state) {
      if (state.sidebar.opened) {
        js_cookie_default.a.set('sidebarStatus', 1);
      } else {
        js_cookie_default.a.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
    },
    CLOSE_SIDEBAR: function CLOSE_SIDEBAR(state, withoutAnimation) {
      js_cookie_default.a.set('sidebarStatus', 1);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
    TOGGLE_DEVICE: function TOGGLE_DEVICE(state, device) {
      state.device = device;
    },
    SET_LANGUAGE: function SET_LANGUAGE(state, language) {
      state.language = language;
      js_cookie_default.a.set('language', language);
    }
  },
  actions: {
    toggleSideBar: function toggleSideBar(_ref) {
      var commit = _ref.commit;

      commit('TOGGLE_SIDEBAR');
    },
    closeSideBar: function closeSideBar(_ref2, _ref3) {
      var commit = _ref2.commit;
      var withoutAnimation = _ref3.withoutAnimation;

      commit('CLOSE_SIDEBAR', withoutAnimation);
    },
    toggleDevice: function toggleDevice(_ref4, device) {
      var commit = _ref4.commit;

      commit('TOGGLE_DEVICE', device);
    },
    setLanguage: function setLanguage(_ref5, language) {
      var commit = _ref5.commit;

      commit('SET_LANGUAGE', language);
    }
  }
};

/* harmony default export */ var modules_app = (app);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./src/router/index.js
var router = __webpack_require__("YaEn");

// CONCATENATED MODULE: ./src/store/modules/permission.js


/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(function (role) {
      return route.meta.roles.indexOf(role) >= 0;
    });
  } else {
    return true;
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
// function filterAsyncRouter(asyncRouterMap, roles) {
//   const accessedRouters = asyncRouterMap.filter(route => {
//     if (hasPermission(roles, route)) {
//       if (route.children && route.children.length) {
//         route.children = filterAsyncRouter(route.children, roles)
//       }
//       return true
//     }
//     return false
//   })
//   return accessedRouters
// }
function mapAsyncRouter(map, routes) {
  var res = [];
  routes.forEach(function (route) {
    var tmp = {
      path: route.moduleUrl,
      component: map[route.moduleActionName],
      hidden: route.moduleHide === 1,
      meta: { title: route.moduleTitle, icon: route.moduleIcon }
    };
    if (route.children && route.children.length > 0) {
      tmp.children = route.children;
      tmp.children = mapAsyncRouter(map, tmp.children);
    }
    if (route.pid !== 0) {
      tmp.name = route.moduleName;
      tmp.meta.noCache = route.noCache === 0 ? false : true;
    }
    if (route.moduleUrl === '') {
      tmp.redirect = 'monitor';
    }
    res.push(tmp);
  });
  return res;
}

var permission = {
  state: {
    routers: router["b" /* constantRouterMap */],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: function SET_ROUTERS(state, routers) {
      state.addRouters = routers;
      state.routers = router["b" /* constantRouterMap */].concat(routers);
    }
  },
  actions: {
    GenerateRoutes: function GenerateRoutes(_ref, data) {
      var commit = _ref.commit;

      return new promise_default.a(function (resolve) {
        var access = data.access;

        var map = router["a" /* asyncRouterMap */];
        var accessedRouters = mapAsyncRouter(map, access);
        accessedRouters.push({ path: '*', redirect: '/404', hidden: true });
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      });
    }
  }
};

/* harmony default export */ var modules_permission = (permission);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./src/store/modules/tagsView.js





var tagsView = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEW: function ADD_VISITED_VIEW(state, view) {
      if (state.visitedViews.some(function (v) {
        return v.path === view.path;
      })) return;
      state.visitedViews.push(assign_default()({}, view, {
        title: view.meta.title || 'no-name'
      }));
    },
    ADD_CACHED_VIEW: function ADD_CACHED_VIEW(state, view) {
      if (state.cachedViews.includes(view.name)) return;
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name);
      }
    },

    DEL_VISITED_VIEW: function DEL_VISITED_VIEW(state, view) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(state.visitedViews.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = slicedToArray_default()(_ref, 2);

          var i = _ref2[0];
          var v = _ref2[1];

          if (v.path === view.path) {
            state.visitedViews.splice(i, 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    DEL_CACHED_VIEW: function DEL_CACHED_VIEW(state, view) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = get_iterator_default()(state.cachedViews), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var i = _step2.value;

          if (i === view.name) {
            var index = state.cachedViews.indexOf(i);
            state.cachedViews.splice(index, 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },

    DEL_OTHERS_VISITED_VIEWS: function DEL_OTHERS_VISITED_VIEWS(state, view) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = get_iterator_default()(state.visitedViews.entries()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _ref3 = _step3.value;

          var _ref4 = slicedToArray_default()(_ref3, 2);

          var i = _ref4[0];
          var v = _ref4[1];

          if (v.path === view.path) {
            state.visitedViews = state.visitedViews.slice(i, i + 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    },
    DEL_OTHERS_CACHED_VIEWS: function DEL_OTHERS_CACHED_VIEWS(state, view) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = get_iterator_default()(state.cachedViews), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var i = _step4.value;

          if (i === view.name) {
            var index = state.cachedViews.indexOf(i);
            state.cachedViews = state.cachedViews.slice(index, index + 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    },

    DEL_ALL_VISITED_VIEWS: function DEL_ALL_VISITED_VIEWS(state) {
      state.visitedViews = [];
    },
    DEL_ALL_CACHED_VIEWS: function DEL_ALL_CACHED_VIEWS(state) {
      state.cachedViews = [];
    },

    UPDATE_VISITED_VIEW: function UPDATE_VISITED_VIEW(state, view) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = get_iterator_default()(state.visitedViews), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var v = _step5.value;

          if (v.path === view.path) {
            v = assign_default()(v, view);
            break;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }

  },
  actions: {
    addView: function addView(_ref5, view) {
      var dispatch = _ref5.dispatch;

      dispatch('addVisitedView', view);
      dispatch('addCachedView', view);
    },
    addVisitedView: function addVisitedView(_ref6, view) {
      var commit = _ref6.commit;

      commit('ADD_VISITED_VIEW', view);
    },
    addCachedView: function addCachedView(_ref7, view) {
      var commit = _ref7.commit;

      commit('ADD_CACHED_VIEW', view);
    },
    delView: function delView(_ref8, view) {
      var dispatch = _ref8.dispatch,
          state = _ref8.state;

      return new promise_default.a(function (resolve) {
        dispatch('delVisitedView', view);
        dispatch('delCachedView', view);
        resolve({
          visitedViews: [].concat(toConsumableArray_default()(state.visitedViews)),
          cachedViews: [].concat(toConsumableArray_default()(state.cachedViews))
        });
      });
    },
    delVisitedView: function delVisitedView(_ref9, view) {
      var commit = _ref9.commit,
          state = _ref9.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_VISITED_VIEW', view);
        resolve([].concat(toConsumableArray_default()(state.visitedViews)));
      });
    },
    delCachedView: function delCachedView(_ref10, view) {
      var commit = _ref10.commit,
          state = _ref10.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_CACHED_VIEW', view);
        resolve([].concat(toConsumableArray_default()(state.cachedViews)));
      });
    },
    delOthersViews: function delOthersViews(_ref11, view) {
      var dispatch = _ref11.dispatch,
          state = _ref11.state;

      return new promise_default.a(function (resolve) {
        dispatch('delOthersVisitedViews', view);
        dispatch('delOthersCachedViews', view);
        resolve({
          visitedViews: [].concat(toConsumableArray_default()(state.visitedViews)),
          cachedViews: [].concat(toConsumableArray_default()(state.cachedViews))
        });
      });
    },
    delOthersVisitedViews: function delOthersVisitedViews(_ref12, view) {
      var commit = _ref12.commit,
          state = _ref12.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_OTHERS_VISITED_VIEWS', view);
        resolve([].concat(toConsumableArray_default()(state.visitedViews)));
      });
    },
    delOthersCachedViews: function delOthersCachedViews(_ref13, view) {
      var commit = _ref13.commit,
          state = _ref13.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_OTHERS_CACHED_VIEWS', view);
        resolve([].concat(toConsumableArray_default()(state.cachedViews)));
      });
    },
    delAllViews: function delAllViews(_ref14, view) {
      var dispatch = _ref14.dispatch,
          state = _ref14.state;

      return new promise_default.a(function (resolve) {
        dispatch('delAllVisitedViews', view);
        dispatch('delAllCachedViews', view);
        resolve({
          visitedViews: [].concat(toConsumableArray_default()(state.visitedViews)),
          cachedViews: [].concat(toConsumableArray_default()(state.cachedViews))
        });
      });
    },
    delAllVisitedViews: function delAllVisitedViews(_ref15) {
      var commit = _ref15.commit,
          state = _ref15.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_ALL_VISITED_VIEWS');
        resolve([].concat(toConsumableArray_default()(state.visitedViews)));
      });
    },
    delAllCachedViews: function delAllCachedViews(_ref16) {
      var commit = _ref16.commit,
          state = _ref16.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_ALL_CACHED_VIEWS');
        resolve([].concat(toConsumableArray_default()(state.cachedViews)));
      });
    },
    updateVisitedView: function updateVisitedView(_ref17, view) {
      var commit = _ref17.commit;

      commit('UPDATE_VISITED_VIEW', view);
    }
  }
};

/* harmony default export */ var modules_tagsView = (tagsView);
// EXTERNAL MODULE: ./src/api/login/login.js + 1 modules
var login = __webpack_require__("owW+");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./src/store/modules/user.js




var user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: Object(auth["b" /* getToken */])(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    sys_role: '',
    setting: {
      articlePlatform: []
    },
    system: Object(auth["a" /* getSystem */])() || 1
  },

  mutations: {
    SET_CODE: function SET_CODE(state, code) {
      state.code = code;
    },
    SET_TOKEN: function SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_INTRODUCTION: function SET_INTRODUCTION(state, introduction) {
      state.introduction = introduction;
    },
    SET_SETTING: function SET_SETTING(state, setting) {
      state.setting = setting;
    },
    SET_STATUS: function SET_STATUS(state, status) {
      state.status = status;
    },
    SET_NAME: function SET_NAME(state, name) {
      state.name = name;
    },
    SET_AVATAR: function SET_AVATAR(state, avatar) {
      state.avatar = avatar;
    },
    SET_ROLES: function SET_ROLES(state, roles) {
      state.roles = roles;
    },
    SET_SYS_ROLE: function SET_SYS_ROLE(state, sys_role) {
      state.sys_role = sys_role;
    },
    SET_SYSTEMS: function SET_SYSTEMS(state, system) {
      state.system = system;
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername: function LoginByUsername(_ref, userInfo) {
      var commit = _ref.commit;

      var username = userInfo.username.trim();
      return new promise_default.a(function (resolve, reject) {
        Object(login["b" /* loginByUsername */])(username, userInfo.password).then(function (response) {
          if (response.data.status) {
            var data = response.data.data;
            commit('SET_TOKEN', data.token);
            Object(auth["e" /* setToken */])(data.token);
            Object(auth["d" /* setSystem */])(1);
            resolve();
          } else {
            reject(error);
          }
        }).catch(function (error) {
          reject(error);
        });
      });
    },


    // 获取用户信息
    GetUserInfo: function GetUserInfo(_ref2) {
      var commit = _ref2.commit,
          state = _ref2.state;

      return new promise_default.a(function (resolve, reject) {
        Object(login["a" /* getUserInfo */])({ token: state.token, systemId: state.system }).then(function (response) {
          if (!response.data) {
            // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error');
          }
          var data = response.data;
          if (data.roles && data.roles.length > 0) {
            // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles);
          } else {
            reject('getInfo: roles must be a non-null array !');
          }
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_INTRODUCTION', data.introduction);
          commit('SET_SYS_ROLE', data.sys_role);
          resolve(response);
        }).catch(function (error) {
          reject(error);
        });
      });
    },


    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut: function LogOut(_ref3) {
      var commit = _ref3.commit,
          state = _ref3.state;

      return new promise_default.a(function (resolve, reject) {
        Object(login["c" /* logout */])(state.token).then(function () {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          Object(auth["c" /* removeToken */])();
          resolve();
        }).catch(function (error) {
          reject(error);
        });
      });
    },


    // 前端 登出
    FedLogOut: function FedLogOut(_ref4) {
      var commit = _ref4.commit;

      return new promise_default.a(function (resolve) {
        commit('SET_TOKEN', '');
        Object(auth["c" /* removeToken */])();
        resolve();
      });
    },


    // 动态修改权限
    ChangeRoles: function ChangeRoles(_ref5, role) {
      var commit = _ref5.commit;

      return new promise_default.a(function (resolve) {
        commit('SET_TOKEN', role);
        Object(auth["e" /* setToken */])(role);
        Object(login["a" /* getUserInfo */])(role).then(function (response) {
          var data = response.data;
          commit('SET_ROLES', data.roles);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_INTRODUCTION', data.introduction);
          commit('SET_SYS_ROLE', data.sys_role);
          resolve();
        });
      });
    },

    //切换系统动态改变权限
    ChangeSystem: function ChangeSystem(_ref6, system) {
      var commit = _ref6.commit,
          dispatch = _ref6.dispatch,
          state = _ref6.state;

      return new promise_default.a(function (resolve) {
        commit('SET_SYSTEMS', system);
        Object(auth["d" /* setSystem */])(system);
        Object(login["a" /* getUserInfo */])({ token: state.token, systemId: state.system }).then(function (response) {
          var data = response.data;
          commit('SET_ROLES', data.roles);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_INTRODUCTION', data.introduction);
          commit('SET_SYS_ROLE', data.sys_role);
          dispatch('GenerateRoutes', data); // 动态修改权限后 重绘侧边菜单
          resolve();
        });
      });
    }
  }
};

/* harmony default export */ var modules_user = (user);
// CONCATENATED MODULE: ./src/store/getters.js
var getters = {
  sidebar: function sidebar(state) {
    return state.app.sidebar;
  },
  language: function language(state) {
    return state.app.language;
  },
  device: function device(state) {
    return state.app.device;
  },
  visitedViews: function visitedViews(state) {
    return state.tagsView.visitedViews;
  },
  cachedViews: function cachedViews(state) {
    return state.tagsView.cachedViews;
  },
  token: function token(state) {
    return state.user.token;
  },
  avatar: function avatar(state) {
    return state.user.avatar;
  },
  name: function name(state) {
    return state.user.name;
  },
  introduction: function introduction(state) {
    return state.user.introduction;
  },
  status: function status(state) {
    return state.user.status;
  },
  roles: function roles(state) {
    return state.user.roles;
  },
  sys_role: function sys_role(state) {
    return state.user.sys_role;
  },
  system: function system(state) {
    return state.user.system;
  },
  setting: function setting(state) {
    return state.user.setting;
  },
  permission_routers: function permission_routers(state) {
    return state.permission.routers;
  },
  addRouters: function addRouters(state) {
    return state.permission.addRouters;
  }
};
/* harmony default export */ var store_getters = (getters);
// CONCATENATED MODULE: ./src/store/index.js








vue_esm["default"].use(vuex_esm["a" /* default */]);

var store = new vuex_esm["a" /* default */].Store({
  modules: {
    app: modules_app,
    permission: modules_permission,
    tagsView: modules_tagsView,
    user: modules_user
  },
  getters: store_getters
});

/* harmony default export */ var src_store = __webpack_exports__["a"] = (store);

/***/ }),

/***/ "In5b":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Iu5b":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABYElEQVRYhc2X7XGDMAyGGYERGIENYDPYIGwQNikbhA3CBrDB0x8WV9dgkG1a8t75Lkcs6ZWtL2eZAkABPIA3UB7sq2XPAyg0ujWGn/zGC8h39ubyn41nEhGgZB8z0ACVrEa+7cF7YloSSUg1XqcSAOoUAt0FBNpY4777j8FxHGCivZTfFSaNrkYDVJZzhU2g/wODZ+ht7+9CcVWgxaLLMKUzBgswyFoidbzXgBgDBTepBbSBOkbW7MDUca0X3rwOILHg9hOl8KKoHxpHtk6gK7uDgsCg0FN/JAHNFcwKAr62bKN1hXKl4FY43AnEVm4fvTvJnKHZMd4E6ngBZQZMgYIrZuBLlvb0XEwfUYrvbUZyf/e1YyFgDyQ14XVdgxbJf9yBxJNS/zeSHZC4bygVAveO5UIiCanGfXGwIEHFT9D62nD80wyTHW6Kjvgfp+5k1XPhK7nDlO2z5/kke1WGvwEHYNxzJQIC6gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "J1Kv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JYXt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JeZZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MDGh":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MFQN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MPgH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/set.js
var set = __webpack_require__("lHA8");
var set_default = /*#__PURE__*/__webpack_require__.n(set);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/array/from.js
var from = __webpack_require__("c/Tr");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/capsuleChart/src/main.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var main = ({
  name: 'DvCapsuleChart',
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      defaultConfig: {
        /**
         * @description Capsule chart data
         * @type {Array<Object>}
         * @default data = []
         * @example data = [{ name: 'foo1', value: 100 }, { name: 'foo2', value: 100 }]
         */
        data: [],
        /**
         * @description Colors (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default color = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']
         * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293'],
        /**
         * @description Chart unit
         * @type {String}
         * @default unit = ''
         */
        unit: '',
        /**
         * @description Show item value
         * @type {Boolean}
         * @default showValue = false
         */
        showValue: false
      },

      mergedConfig: null,

      capsuleLength: [],
      capsuleValue: [],
      labelData: [],
      labelDataLength: []
    };
  },

  watch: {
    config: function config() {
      var calcData = this.calcData;


      calcData();
    }
  },
  methods: {
    calcData: function calcData() {
      var mergeConfig = this.mergeConfig,
          calcCapsuleLengthAndLabelData = this.calcCapsuleLengthAndLabelData;


      mergeConfig();

      calcCapsuleLengthAndLabelData();
    },
    mergeConfig: function mergeConfig() {
      var config = this.config,
          defaultConfig = this.defaultConfig;


      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {});
    },
    calcCapsuleLengthAndLabelData: function calcCapsuleLengthAndLabelData() {
      var data = this.mergedConfig.data;


      if (!data.length) return;

      var capsuleValue = data.map(function (_ref) {
        var value = _ref.value;
        return value;
      });

      var maxValue = Math.max.apply(Math, toConsumableArray_default()(capsuleValue));

      this.capsuleValue = capsuleValue;

      this.capsuleLength = capsuleValue.map(function (v) {
        return maxValue ? v / maxValue : 0;
      });

      var oneFifth = maxValue / 5;

      var labelData = from_default()(new set_default.a(new Array(6).fill(0).map(function (v, i) {
        return Math.ceil(i * oneFifth);
      })));

      this.labelData = labelData;

      this.labelDataLength = from_default()(labelData).map(function (v) {
        return maxValue ? v / maxValue : 0;
      });
    }
  },
  mounted: function mounted() {
    var calcData = this.calcData;


    calcData();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4e662965","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/capsuleChart/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-capsule-chart"},[(_vm.mergedConfig)?[_c('div',{staticClass:"label-column"},[_vm._l((_vm.mergedConfig.data),function(item){return _c('div',{key:item.name},[_vm._v(_vm._s(item.name))])}),_vm._v(" "),_c('div',[_vm._v(" ")])],2),_vm._v(" "),_c('div',{staticClass:"capsule-container"},[_vm._l((_vm.capsuleLength),function(capsule,index){return _c('div',{key:index,staticClass:"capsule-item"},[_c('div',{staticClass:"capsule-item-column",style:(("width: " + (capsule * 100) + "%; background-color: " + (_vm.mergedConfig.colors[index % _vm.mergedConfig.colors.length]) + ";"))},[(_vm.mergedConfig.showValue)?_c('div',{staticClass:"capsule-item-value"},[_vm._v(_vm._s(_vm.capsuleValue[index]))]):_vm._e()])])}),_vm._v(" "),_c('div',{staticClass:"unit-label"},_vm._l((_vm.labelData),function(label,index){return _c('div',{key:label + index},[_vm._v(_vm._s(label))])}))],2),_vm._v(" "),(_vm.mergedConfig.unit)?_c('div',{staticClass:"unit-text"},[_vm._v(_vm._s(_vm.mergedConfig.unit))]):_vm._e()]:_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/capsuleChart/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var capsuleChart_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MU2+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var filters_namespaceObject = {};
__webpack_require__.d(filters_namespaceObject, "formatDate", function() { return formatDate; });
__webpack_require__.d(filters_namespaceObject, "formatGetDate", function() { return formatGetDate; });
__webpack_require__.d(filters_namespaceObject, "formatDateTamp", function() { return formatDateTamp; });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/babel-polyfill/lib/index.js
var lib = __webpack_require__("j1ja");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__("uMhA");
var normalize_default = /*#__PURE__*/__webpack_require__.n(normalize);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__("zL8q");
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/index.css
var theme_chalk = __webpack_require__("tvR6");
var theme_chalk_default = /*#__PURE__*/__webpack_require__.n(theme_chalk);

// EXTERNAL MODULE: ./src/assets/css/index.scss
var css = __webpack_require__("+g8z");
var css_default = /*#__PURE__*/__webpack_require__.n(css);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//

/* harmony default export */ var App = ({
  data: function data() {
    return {
      showLoading: false,
      reload: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.globalEvBus.$on("showLoading", function () {
      _this.showLoading = true;
    });
    this.globalEvBus.$on("hideLoading", function () {
      _this.showLoading = false;
    });
    this.globalEvBus.$on("reload", function () {
      _this.reload = false;
      _this.$nextTick(function () {
        _this.reload = true;
      });
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0e70eb98","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:(_vm.showLoading),expression:"showLoading",modifiers:{"fullscreen":true}}],attrs:{"id":"app","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.01)"}},[(_vm.reload)?_c('router-view'):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("PNHG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./src/router/index.js
var router = __webpack_require__("YaEn");

// EXTERNAL MODULE: ./src/store/index.js + 5 modules
var store = __webpack_require__("IcnI");

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__("Y81h");
var nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress_nprogress = __webpack_require__("UVIz");
var nprogress_nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress);

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./src/permission.js




 // progress bar
 // progress bar style
 // getToken from cookie

nprogress_default.a.configure({ showSpinner: false }); // NProgress Configuration

// permissiom judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true; // admin permission passed directly
  if (!permissionRoles) return true;
  return roles.some(function (role) {
    return permissionRoles.indexOf(role) >= 0;
  });
}

var whiteList = ['/login', '/authredirect', '/demo']; // no redirect whitelist

router["c" /* default */].beforeEach(function (to, from, next) {
  nprogress_default.a.start(); // start progress bar
  if (Object(auth["b" /* getToken */])()) {
    // determine if there has token
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' });
      nprogress_default.a.done(); // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store["a" /* default */].getters.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store["a" /* default */].dispatch('GetUserInfo').then(function (res) {
          // 拉取user_info
          var access = res.data.access; // note: roles must be a array! such as: ['editor','develop']
          var roles = res.data.roles; // note: roles must be a array! such as: ['editor','develop']
          store["a" /* default */].dispatch('GenerateRoutes', { access: access, roles: roles }).then(function () {
            // 根据roles权限生成可访问的路由表
            router["c" /* default */].addRoutes(store["a" /* default */].getters.addRouters); // 动态添加可访问路由表
            next(extends_default()({}, to, { replace: true })); // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          });
          // const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
          // store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
          //   router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
          //   next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          // })
        }).catch(function (err) {
          store["a" /* default */].dispatch('FedLogOut').then(function () {
            element_ui_common["Message"].error(err || 'Verification failed, please login again');
            next({ path: '/' });
          });
        });
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store["a" /* default */].getters.roles, to.meta.roles)) {
          next(); //
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true } });
        }
        // 可删 ↑
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
      nprogress_default.a.done(); // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
});
router["c" /* default */].afterEach(function () {
  nprogress_default.a.done(); // finish progress bar
});
// CONCATENATED MODULE: ./src/filters/index.js
//格式化时间
function formatDate(val) {
  if (typeof val === 'string') {
    val = val.replace(/-/g, '/');
  }
  var date = new Date(val);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  var day = date.getDate();
  day = day < 10 ? "0" + day : day;
  return year + "年" + month + "月" + day + "日";
}
//格式化时间
function formatGetDate(val) {
  if (typeof val === 'string') {
    val = val.replace(/-/g, '/');
  }
  var date = new Date(val);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  var day = date.getDate();
  day = day < 10 ? "0" + day : day;
  return year + "-" + month + "-" + day;
}
//格式化时间戳
function formatDateTamp(time, type) {
  var timestamp = time;
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return type == 'date' ? Y + M + D : Y + M + D + h + m + s;
}
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/define-properties.js
var define_properties = __webpack_require__("HSQo");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// CONCATENATED MODULE: ./src/utils/eventBus.js

var events = {};
var globalEvBus = {
  install: function install(Vue) {
    Vue.globalEvBus = createEvBus();
    define_properties_default()(Vue.prototype, {
      globalEvBus: {
        get: function get() {
          return createEvBus();
        }
      }
    });
  }
};
function createEvBus() {
  return {
    $on: function $on(type, callBack) {
      if (events[type]) {
        events[type].push(callBack);
        return;
      }
      events[type] = [callBack];
    },
    $onece: function $onece(type, callBack) {
      callBack.isOnce = true;
      this.on(type, callBack);
    },
    $emit: function $emit(type) {
      if (events[type]) {
        events[type].forEach(function (callBack, idx) {
          if (callBack.isOnce) {
            callBack();
            events[type].splice(idx, 1);
            return;
          }
          callBack();
        });
      }
    },
    $remove: function $remove(type, callBack) {
      if (!callBack) {
        events[type] = [];
        return;
      }
      for (var i = 0; i < events[type].length; i++) {
        if (events[type][i] === callBack) {
          events[type].splice(i, 1);
        }
      }
    }
  };
}
/* harmony default export */ var eventBus = (globalEvBus);
// CONCATENATED MODULE: ./src/authorityCode.js
var authorityCode = {
    zizhu: 1,
    kaidian: 2
};

/* harmony default export */ var src_authorityCode = (authorityCode);
// EXTERNAL MODULE: ./node_modules/default-passive-events/dist/index.js
var dist = __webpack_require__("EOXk");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/echarts/index.js
var echarts = __webpack_require__("XLwt");
var echarts_default = /*#__PURE__*/__webpack_require__.n(echarts);

// EXTERNAL MODULE: ./node_modules/vue-baidu-map/index.js
var vue_baidu_map = __webpack_require__("dAEq");
var vue_baidu_map_default = /*#__PURE__*/__webpack_require__.n(vue_baidu_map);

// EXTERNAL MODULE: ./node_modules/vue-print-nb/lib/tag-textarea.umd.min.js
var tag_textarea_umd_min = __webpack_require__("32DV");
var tag_textarea_umd_min_default = /*#__PURE__*/__webpack_require__.n(tag_textarea_umd_min);

// EXTERNAL MODULE: ./node_modules/video.js/dist/video.es.js + 3 modules
var video_es = __webpack_require__("63pp");

// EXTERNAL MODULE: ./node_modules/video.js/dist/video-js.css
var video_js = __webpack_require__("g3Gj");
var video_js_default = /*#__PURE__*/__webpack_require__.n(video_js);

// EXTERNAL MODULE: ./node_modules/vue-layer/lib/vue-layer.umd.min.js
var vue_layer_umd_min = __webpack_require__("SV4X");
var vue_layer_umd_min_default = /*#__PURE__*/__webpack_require__.n(vue_layer_umd_min);

// EXTERNAL MODULE: ./node_modules/vue-layer/lib/vue-layer.css
var vue_layer = __webpack_require__("/CRi");
var vue_layer_default = /*#__PURE__*/__webpack_require__.n(vue_layer);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/index.js + 38 modules
var data_view_lib = __webpack_require__("5wnc");

// CONCATENATED MODULE: ./src/main.js



 // A modern alternative to CSS resets


 // global css



 // permission control
 // global filters



// import echarts from 'echarts'

vue_esm["default"].prototype.$echarts = echarts_default.a;

// import BaiduMap

 //调用浏览器打印插件
vue_esm["default"].use(tag_textarea_umd_min_default.a);

// import Video
 //浏览器视频插件

vue_esm["default"].prototype.$video = video_es["a" /* default */];

// import layer;


vue_esm["default"].prototype.$layer = vue_layer_umd_min_default()(vue_esm["default"]);

// 
vue_esm["default"].use(element_ui_common_default.a, {
  size: 'medium'
});
vue_esm["default"].use(vue_baidu_map_default.a, {
  ak: 'FHrkORZnT5ZfiEWpGwCkOlw1BnsF7IWq'
});
vue_esm["default"].use(eventBus);
// Vue.use(VueQuillEditor)
// register global utility filters.
keys_default()(filters_namespaceObject).forEach(function (key) {
  vue_esm["default"].filter(key, filters_namespaceObject[key]);
});

vue_esm["default"].use(data_view_lib["a" /* default */]);
vue_esm["default"].config.productionTip = false;

new vue_esm["default"]({
  el: '#app',
  router: router["c" /* default */],
  store: store["a" /* default */],
  template: '<App/>',
  components: { App: src_App }
});

/***/ }),

/***/ "OmSs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Oo05":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PC80":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PNHG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QpWN":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABjklEQVRYR+2YgXGCMBiFyQS2E9QNbDfACeoIjoATqBO0I3SEugEbqBOIG+AE+J4XaUJpQ0LI5U5y999xQP7/yyN5BEQSWROR8STxA1VV9QrV1ojFgOqVyJ0jtkKIg1pHU0jC7AcEaUv9pkI1gb7R4z0w0A5A9dNoAlWBYViuBNDzvW4MQAmAao4RqG1KuCq0Q7IMnQusxhTHn4iZjzlnA3RGwUJOPM2XADXF+S8HIPZ70byn4xw64z529t4wGA6yhrJRaCkVujQdlZTy0dlaxS9lbYBUdTRHBUyGix8+5HMFYm3OGcqdyvDBM/qQUcU+j8yY3OWGhwXaQq0cwWVOV5/8pV4IhVYoQohbM238ugJdkMtpG4sCVEZrEupJnuRGsFasKxD9hmbI/a+3BjBCnRB3uCA+NFdVaoNQR9hVoT6qUFW+Wo4IvkQ3CH7NtLYQQFaDGYFMcsWmEPdaPytOpcdqiO5DkSshnk9pqiUdlcs0Vd3UNA8sr/MtkNMO/v3ZYJl0kNvj/z80yLAtkl4BvNbAJd7ophIAAAAASUVORK5CYII="

/***/ }),

/***/ "RFQG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var lib_util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(lib_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration6/src/main.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var main = ({
  name: 'DvDecoration6',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    var rectWidth = 7;

    return {
      ref: 'decoration-6',

      svgWH: [300, 35],

      svgScale: [1, 1],

      rowNum: 1,
      rowPoints: 40,

      rectWidth: rectWidth,
      halfRectWidth: rectWidth / 2,

      points: [],
      heights: [],
      minHeights: [],
      randoms: [],

      defaultColor: ['#7acaec', '#7acaec'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var calcSVGData = this.calcSVGData;


      calcSVGData();
    },
    calcSVGData: function calcSVGData() {
      var calcPointsPosition = this.calcPointsPosition,
          calcScale = this.calcScale;


      calcPointsPosition();

      calcScale();
    },
    calcPointsPosition: function calcPointsPosition() {
      var svgWH = this.svgWH,
          rowNum = this.rowNum,
          rowPoints = this.rowPoints;

      var _svgWH = slicedToArray_default()(svgWH, 2),
          w = _svgWH[0],
          h = _svgWH[1];

      var horizontalGap = w / (rowPoints + 1);
      var verticalGap = h / (rowNum + 1);

      var points = new Array(rowNum).fill(0).map(function (foo, i) {
        return new Array(rowPoints).fill(0).map(function (foo, j) {
          return [horizontalGap * (j + 1), verticalGap * (i + 1)];
        });
      });

      this.points = points.reduce(function (all, item) {
        return [].concat(toConsumableArray_default()(all), toConsumableArray_default()(item));
      }, []);
      var heights = this.heights = new Array(rowNum * rowPoints).fill(0).map(function (foo) {
        return Math.random() > 0.8 ? Object(util["d" /* randomExtend */])(0.7 * h, h) : Object(util["d" /* randomExtend */])(0.2 * h, 0.5 * h);
      });

      this.minHeights = new Array(rowNum * rowPoints).fill(0).map(function (foo, i) {
        return heights[i] * Math.random();
      });

      this.randoms = new Array(rowNum * rowPoints).fill(0).map(function (foo) {
        return Math.random() + 1.5;
      });
    },
    calcScale: function calcScale() {
      var width = this.width,
          height = this.height,
          svgWH = this.svgWH;

      var _svgWH2 = slicedToArray_default()(svgWH, 2),
          w = _svgWH2[0],
          h = _svgWH2[1];

      this.svgScale = [width / w, height / h];
    },
    onResize: function onResize() {
      var calcSVGData = this.calcSVGData;


      calcSVGData();
    },
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(lib_util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-468a8ee8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration6/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-6"},[_c('svg',{style:(("transform:scale(" + (_vm.svgScale[0]) + "," + (_vm.svgScale[1]) + ");")),attrs:{"width":((_vm.svgWH[0]) + "px"),"height":((_vm.svgWH[1]) + "px")}},[_vm._l((_vm.points),function(point,i){return [_c('rect',{key:i,attrs:{"fill":_vm.mergedColor[Math.random() > 0.5 ? 0 : 1],"x":point[0] - _vm.halfRectWidth,"y":point[1] - _vm.heights[i] / 2,"width":_vm.rectWidth,"height":_vm.heights[i]}},[_c('animate',{attrs:{"attributeName":"y","values":((point[1] - _vm.minHeights[i] / 2) + ";" + (point[1] - _vm.heights[i] / 2) + ";" + (point[1] - _vm.minHeights[i] / 2)),"dur":((_vm.randoms[i]) + "s"),"keyTimes":"0;0.5;1","calcMode":"spline","keySplines":"0.42,0,0.58,1;0.42,0,0.58,1","begin":"0s","repeatCount":"indefinite"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"height","values":((_vm.minHeights[i]) + ";" + (_vm.heights[i]) + ";" + (_vm.minHeights[i])),"dur":((_vm.randoms[i]) + "s"),"keyTimes":"0;0.5;1","calcMode":"spline","keySplines":"0.42,0,0.58,1;0.42,0,0.58,1","begin":"0s","repeatCount":"indefinite"}})])]})],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration6/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration6_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "RWIN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RsIg":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACAElEQVRYR+2XgU3DMBBFkwlgA7IBMAFhAtgAmIBuAGwAExAmgA1oJ6Bs0G4AE4T/QxzZVzu+pHJUKk6KKhpzfv7+Pl/zbMci3zGe7G8A1XV9CeVu8ZSJFJwj71Oe528y/4ZCgKkw6CoRiExLqJn9pQPUKvM6EYyZ5hxQVKwJCcQXZxMDLQDUWUMC1RPD/KqCCCm010DfWDUNW+C561N+CoUIU2KiJUFwWK7x8RyCSg3kwBiIPqhtgTjhQWC1PmWWMaXGAn1yG1oQlodjARXapi+MY60Jbt8YoAYG/8jk9MQhPmyomGd6oYYCOTCWJwwUT5HGwBKK99gF8w0BkspUFAgJbiyliphHrK3toKAyt7DZdi2QD8ZcupWB0pwizwEgGBVuQgO0xrgTyzNURnYAHVSszniAnK80QF1bEGlHaGxK77QQMQD5XgNESR+pEh42a0lDA5QUYIhCKww+mpQmy9ZQqOgMbk8Ov9zj796bOQHsA4A4bxOyQZMVOMH8TsqNoutr8glFQ6du9F8wx8yUFq9CYvsIxlMWC8Kbi5Yr1pQAdgDNvShj6x+K8N0cSc0PA6dhj61kv4CgRIEV+UqCKaBccKhq82ivNIqptqyF+UDC7kLUJLfG0C+nGigtUImE7wMh5HB2jfRbb6iAmEGYN5ZXvlebXQ00lGDs+H+gmHI/tl0PNGIDXogAAAAASUVORK5CYII="

/***/ }),

/***/ "RsYl":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACPUlEQVRYR+2XgVXCMBCG6QS6gW6gTmCdQJhANhAnEDbQDcoE4gTCBMIGsIFOUP8fc33XkECalD58z7zX15Imd1//u1xC1juxlp0YT+9vAJVl2Ydyj7jyIyk4h93XLMtmtv0dhQBTYNDDkUBss4Qa6c4akFHmrSMYcXMHKCq2bTYQX9x2DLQAUJUaNlDZMcyvKmg+hWKBNsbgRcwHtQU0hfNCx58wyMMhbryCQ58K9A1nfRvEVgZgXD1jXGeHVEsBWsF4DgNf4gSO6VTUmOPdRL27xjMXyl6oWCAXjKxKqsZGxzM4GDSBigGiQyqzVI5yPH/gekc/Kzvzh5X3HlettqCfSn36QhcDNMWkoTZoQvWMvoFsAegTyCf0vVjjC/x27gAxQMyZG0xcOxSqQqS2naMrRA6Gi450QrPvyrzjGIZmhTG8b5sJF0N73mbIxFYNCs7ohKHZ5hAac2gk0CEwnBQTMv1xhGKOzH1fbJRhHWKOeZWR+alAYqfAA48P1cozIEPcmbz5PmD9ri0gbZNqUYkqd0Jh2ghZE19BY/cptIaFqB07yLN70AZAl1U+6TGq2CXYbzx1AqCxD4h5wHxgbemi7eyPrkO+1JZjH/R5nqpqllMhK3yhq4aFURTlF9f+RXhkXuqKr8ck/1FE3jHEch5awFGeEuu/CwQluDRdJYEhk4LIqu0KGZf2OkS5IIUMDA9YB/clj9Od44sPLhSIecEjREqrnZGSgDjZSt6mYMHJHqRQU+8p4/+BDqn3A+3JBzQx4BepAAAAAElFTkSuQmCC"

/***/ }),

/***/ "SS1b":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "SvTU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox7/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvBorderBox7',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    return {
      ref: 'border-box-7',

      defaultColor: ['rgba(128,128,128,0.3)', 'rgba(128,128,128,0.5)'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-25b58eea","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox7/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-7",style:(("box-shadow: inset 0 0 40px " + (_vm.mergedColor[0]) + "; border: 1px solid " + (_vm.mergedColor[0]) + "; background-color: " + _vm.backgroundColor))},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polyline',{staticClass:"dv-bb7-line-width-2",attrs:{"stroke":_vm.mergedColor[0],"points":"0, 25 0, 0 25, 0"}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb7-line-width-2",attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 25) + ", 0 " + _vm.width + ", 0 " + _vm.width + ", 25")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb7-line-width-2",attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 25) + ", " + _vm.height + " " + _vm.width + ", " + _vm.height + " " + _vm.width + ", " + (_vm.height - 25))}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb7-line-width-2",attrs:{"stroke":_vm.mergedColor[0],"points":("0, " + (_vm.height - 25) + " 0, " + _vm.height + " 25, " + _vm.height)}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb7-line-width-5",attrs:{"stroke":_vm.mergedColor[1],"points":"0, 10 0, 0 10, 0"}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb7-line-width-5",attrs:{"stroke":_vm.mergedColor[1],"points":((_vm.width - 10) + ", 0 " + _vm.width + ", 0 " + _vm.width + ", 10")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb7-line-width-5",attrs:{"stroke":_vm.mergedColor[1],"points":((_vm.width - 10) + ", " + _vm.height + " " + _vm.width + ", " + _vm.height + " " + _vm.width + ", " + (_vm.height - 10))}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb7-line-width-5",attrs:{"stroke":_vm.mergedColor[1],"points":("0, " + (_vm.height - 10) + " 0, " + _vm.height + " 10, " + _vm.height)}})]),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox7/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox7_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "T9cL":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACOklEQVRYR82XjU3DMBCFmwmACegGwASECSgTECYAJqBMAExAOwEwAWUDNqBMQJkgvCfZKDT2/ThFqiUrVWOfv3s+3znVaMtatWU8oyKgtm0P4cgpeo3O37vBsRWe7+gL9Leqqvh0NRcQQM5hfYo+Nq6y5HiAzY3jbQoFRR6DGlbb3XEEOwMY1RObqhBgGlggzNDG7bwG1EwyJAJtEKbLcCFBZYEAU8PK61BZMvNPcgEvAX04gtfLzZg6AhS38U9LAkGdKUbdGFb5xJhn9GiYx3+Cvm+YewsgrmMC0tT5hhUe5/vUwnDoCv/fKVArzN9TgWCMHj4pxii3eISNMchUQIV/W2/LYIheXwpASakzSmlb/wAgqikCLfD2OAcEA2ruinPhHGPqS3CO5aXWgFqPAWVrR4ByOZjaMgnoBR4xxsztv4F6EmtkmwDi6TnILJQ8qhIUgFwhkNqyGRbgNSPXxFrUnWTIR3OEQKMFNQdI1Z1ZmbVIy0O8uLEWxstbysGecymFaGCJviOoRCgmNZ6gXgtJkclVgmG2H6/Xs1wt07YtQhCImTaqRVWoMJ9a620XJ+SALCppC0rvk+pkgfjCWNNKoXo1LBrSboxaXSsBEmuhWpcMxdYDpRZmFShsHwN16EXflL9MQJ2Y4umT0kFKLQZws37vyclqBgpQPM486lYowtRaEu3CuYCcUG4Y8dhLkRq+ZCWlimCKgRSlimEGAWWgBsEMBupAxS+HiSeAU2HhDmpPFiwZu3VAP9qP6yXvcyxnAAAAAElFTkSuQmCC"

/***/ }),

/***/ "TIfe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getToken;
/* harmony export (immutable) */ __webpack_exports__["e"] = setToken;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeToken;
/* unused harmony export setId */
/* unused harmony export getId */
/* unused harmony export setType */
/* unused harmony export getType */
/* unused harmony export setUserId */
/* unused harmony export getUserId */
/* unused harmony export removeUserId */
/* unused harmony export setCustomId */
/* unused harmony export getCustomId */
/* unused harmony export setFreeId */
/* unused harmony export getFreeId */
/* unused harmony export setRentalId */
/* unused harmony export getRentalId */
/* unused harmony export setCodeId */
/* unused harmony export getCodeId */
/* harmony export (immutable) */ __webpack_exports__["d"] = setSystem;
/* harmony export (immutable) */ __webpack_exports__["a"] = getSystem;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__("lbHh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);

var TokenKey = 'Admin-Token';
var ID = 'ID';
var ModuleType = 'ModuleType';
var UserId = 'UserId';
var CustomId = 'CustomId';
var FreeId = 'FreeId';
var RentalId = 'RentalId';
var QuestionId = 'QuestionId';
var CodeId = 'CodeId';
var System = 'System';
function getToken() {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(TokenKey);
}
function setToken(token) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(TokenKey, token);
}
function removeToken() {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.remove(TokenKey);
}
function setId(id) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(ID, id);
}
function getId() {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(ID);
}
function setType(type) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(ModuleType, type);
}
function getType() {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(ModuleType);
}
function setUserId(id) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(UserId, id);
}
function getUserId() {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(UserId);
}
function removeUserId() {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.remove(UserId);
}
function setCustomId(customId) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(CustomId, customId);
}
function getCustomId() {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(CustomId);
}
function setFreeId(freeId) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(FreeId, freeId);
}
function getFreeId() {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(FreeId);
}
function setRentalId(rentalId) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(RentalId, rentalId);
}
function getRentalId() {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(RentalId);
}
function setCodeId(codeId) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(CodeId, codeId);
}

function getCodeId() {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(CodeId);
}

function setSystem(system) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(System, system);
}
function getSystem() {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(System);
}

/***/ }),

/***/ "TwrZ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJOSURBVHja7JjNUdtAFMd/VBBTAaYC7IPPmDszgQpiKjBUELkCrAqwK8DM+B7nnIOdCpAqQKlAuTwxzy/7IRlp8CHvJO+stL99+38f65OyLDkmOzlaoOvpr0PevwG+AwNgBTwA2SEfWqejDwONgR9mLAOGQPEZQIl4x9oVsPkPJLrZmrHfMv4pGqpEnQAXwAtw37Wox+pYBkBPngtgDszaCvc6QK4osrYTzRRdAw0EplfjW4WEetYVUF/EWsHksthlxFPDLoB64pkqUpbABHgV0JAdFO4hoEeJEgzMPfBY45sPIvTWgDLgzIR07sg1PnuRd1oD6gOLiFaszVRayIDzLkQ9lmQXA7uTCv+mxs67TIwhMH08GzXnViBbBxoD3+RI+g6wjXgoM6JPTWC0BrQQoOrZB7aQHFRF10/ZTOtArrwTAtvrQgOF+Ey82AhoEAj1qqim4om5SRWoolt46uJMNlQbyCbC3LHoSgSMJM/EzMlkbCm/t6ZP+icaQ0Ar4KuaeyslZQ58CZQKH9jOkTCrKlALSN+L/qgiewM81yioLjCXnepj9QHZRe1OJsCT+j0UMDxgT5Esn8SA5sA0smBpjnPl6TSnkdq2V2p8QFp8uafl2EkP7YuYbYNG/31DvuL6qib7sq4uFRYodkyub135gOrqQ2dxC9TEO3spwAWkwz0PdIj6gqiB6lwKXLYEJi6gNxXizmwaAbL5q5GX1ukos0Blzb5Gl5YKyOqvqc3W6SixQFXJuBOdxO5jF0pnWleHWLFOR6fH/YfVsdjfAQAFBWHIuYLXbQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "UVIz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "UsbJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var lib_util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(lib_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/color/lib/index.js
var lib = __webpack_require__("glc7");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration9/src/main.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var main = ({
  name: 'DvDecoration9',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    dur: {
      type: Number,
      default: 3
    }
  },
  data: function data() {
    var id = Object(util["e" /* uuid */])();
    return {
      ref: 'decoration-9',

      polygonId: 'decoration-9-polygon-' + id,

      svgWH: [100, 100],

      svgScale: [1, 1],

      defaultColor: ['rgba(3, 166, 224, 0.8)', 'rgba(3, 166, 224, 0.5)'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var calcScale = this.calcScale;


      calcScale();
    },
    calcScale: function calcScale() {
      var width = this.width,
          height = this.height,
          svgWH = this.svgWH;

      var _svgWH = slicedToArray_default()(svgWH, 2),
          w = _svgWH[0],
          h = _svgWH[1];

      this.svgScale = [width / w, height / h];
    },
    onResize: function onResize() {
      var calcScale = this.calcScale;


      calcScale();
    },
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(lib_util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    },

    fade: lib["fade"]
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-320b6af0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration9/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-9"},[_c('svg',{style:(("transform:scale(" + (_vm.svgScale[0]) + "," + (_vm.svgScale[1]) + ");")),attrs:{"width":((_vm.svgWH[0]) + "px"),"height":((_vm.svgWH[1]) + "px")}},[_c('defs',[_c('polygon',{attrs:{"id":_vm.polygonId,"points":"15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5"}})]),_vm._v(" "),_c('circle',{attrs:{"cx":"50","cy":"50","r":"45","fill":"transparent","stroke":_vm.mergedColor[1],"stroke-width":"10","stroke-dasharray":"80, 100, 30, 100"}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":"0 50 50;360 50 50","dur":(_vm.dur + "s"),"repeatCount":"indefinite"}})],1),_vm._v(" "),_c('circle',{attrs:{"cx":"50","cy":"50","r":"45","fill":"transparent","stroke":_vm.mergedColor[0],"stroke-width":"6","stroke-dasharray":"50, 66, 100, 66"}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":"0 50 50;-360 50 50","dur":(_vm.dur + "s"),"repeatCount":"indefinite"}})],1),_vm._v(" "),_c('circle',{attrs:{"cx":"50","cy":"50","r":"38","fill":"transparent","stroke":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 30),"stroke-width":"1","stroke-dasharray":"5, 1"}}),_vm._v(" "),_vm._l((new Array(20).fill(0)),function(foo,i){return _c('use',{key:i,attrs:{"xlink:href":("#" + _vm.polygonId),"stroke":_vm.mergedColor[1],"fill":Math.random() > 0.4 ? 'transparent' : _vm.mergedColor[0]}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":"0 50 50;360 50 50","dur":(_vm.dur + "s"),"begin":((i * _vm.dur / 20) + "s"),"repeatCount":"indefinite"}})],1)}),_vm._v(" "),_c('circle',{attrs:{"cx":"50","cy":"50","r":"26","fill":"transparent","stroke":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 30),"stroke-width":"1","stroke-dasharray":"5, 1"}})],2),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration9/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration9_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Vyt+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration3/src/main.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvDecoration3',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    var pointSideLength = 7;

    return {
      ref: 'decoration-3',

      svgWH: [300, 35],

      svgScale: [1, 1],

      rowNum: 2,
      rowPoints: 25,

      pointSideLength: pointSideLength,
      halfPointSideLength: pointSideLength / 2,

      points: [],

      defaultColor: ['#7acaec', 'transparent'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var calcSVGData = this.calcSVGData;


      calcSVGData();
    },
    calcSVGData: function calcSVGData() {
      var calcPointsPosition = this.calcPointsPosition,
          calcScale = this.calcScale;


      calcPointsPosition();

      calcScale();
    },
    calcPointsPosition: function calcPointsPosition() {
      var svgWH = this.svgWH,
          rowNum = this.rowNum,
          rowPoints = this.rowPoints;

      var _svgWH = slicedToArray_default()(svgWH, 2),
          w = _svgWH[0],
          h = _svgWH[1];

      var horizontalGap = w / (rowPoints + 1);
      var verticalGap = h / (rowNum + 1);

      var points = new Array(rowNum).fill(0).map(function (foo, i) {
        return new Array(rowPoints).fill(0).map(function (foo, j) {
          return [horizontalGap * (j + 1), verticalGap * (i + 1)];
        });
      });

      this.points = points.reduce(function (all, item) {
        return [].concat(toConsumableArray_default()(all), toConsumableArray_default()(item));
      }, []);
    },
    calcScale: function calcScale() {
      var width = this.width,
          height = this.height,
          svgWH = this.svgWH;

      var _svgWH2 = slicedToArray_default()(svgWH, 2),
          w = _svgWH2[0],
          h = _svgWH2[1];

      this.svgScale = [width / w, height / h];
    },
    onResize: function onResize() {
      var calcSVGData = this.calcSVGData;


      calcSVGData();
    },
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-741597bc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration3/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-3"},[_c('svg',{style:(("transform:scale(" + (_vm.svgScale[0]) + "," + (_vm.svgScale[1]) + ");")),attrs:{"width":((_vm.svgWH[0]) + "px"),"height":((_vm.svgWH[1]) + "px")}},[_vm._l((_vm.points),function(point,i){return [_c('rect',{key:i,attrs:{"fill":_vm.mergedColor[0],"x":point[0] - _vm.halfPointSideLength,"y":point[1] - _vm.halfPointSideLength,"width":_vm.pointSideLength,"height":_vm.pointSideLength}},[(Math.random() > 0.6)?_c('animate',{attrs:{"attributeName":"fill","values":("" + (_vm.mergedColor.join(';'))),"dur":Math.random() + 1 + 's',"begin":Math.random() * 2,"repeatCount":"indefinite"}}):_vm._e()])]})],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration3/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration3_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "WO7A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/index.js
var lib = __webpack_require__("z0b2");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/components/digitalFlop/src/main.vue + 2 modules
var main = __webpack_require__("XMhG");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/activeRingChart/src/main.vue


//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var src_main = ({
  name: 'DvActiveRingChart',
  components: {
    dvDigitalFlop: main["a" /* default */]
  },
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      defaultConfig: {
        /**
         * @description Ring radius
         * @type {String|Number}
         * @default radius = '50%'
         * @example radius = '50%' | 100
         */
        radius: '50%',
        /**
         * @description Active ring radius
         * @type {String|Number}
         * @default activeRadius = '55%'
         * @example activeRadius = '55%' | 110
         */
        activeRadius: '55%',
        /**
         * @description Ring data
         * @type {Array<Object>}
         * @default data = [{ name: '', value: 0 }]
         */
        data: [{ name: '', value: 0 }],
        /**
         * @description Ring line width
         * @type {Number}
         * @default lineWidth = 20
         */
        lineWidth: 20,
        /**
         * @description Active time gap (ms)
         * @type {Number}
         * @default activeTimeGap = 3000
         */
        activeTimeGap: 3000,
        /**
         * @description Ring color (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default color = [Charts Default Color]
         * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        color: [],
        /**
         * @description Digital flop style
         * @type {Object}
         */
        digitalFlopStyle: {
          fontSize: 25,
          fill: '#fff'
        },
        /**
         * @description Digital flop toFixed
         * @type {Number}
         */
        digitalFlopToFixed: 0,
        /**
         * @description Digital flop unit
         * @type {String}
         */
        digitalFlopUnit: '',
        /**
         * @description CRender animationCurve
         * @type {String}
         * @default animationCurve = 'easeOutCubic'
         */
        animationCurve: 'easeOutCubic',
        /**
         * @description CRender animationFrame
         * @type {String}
         * @default animationFrame = 50
         */
        animationFrame: 50,
        /**
         * @description showOriginValue
         * @type {Boolean}
         * @default showOriginValue = false
         */
        showOriginValue: false
      },

      mergedConfig: null,

      chart: null,

      activeIndex: 0,

      animationHandler: ''
    };
  },

  computed: {
    digitalFlop: function digitalFlop() {
      var mergedConfig = this.mergedConfig,
          activeIndex = this.activeIndex;


      if (!mergedConfig) return {};

      var digitalFlopStyle = mergedConfig.digitalFlopStyle,
          digitalFlopToFixed = mergedConfig.digitalFlopToFixed,
          data = mergedConfig.data,
          showOriginValue = mergedConfig.showOriginValue,
          digitalFlopUnit = mergedConfig.digitalFlopUnit;


      var value = data.map(function (_ref) {
        var value = _ref.value;
        return value;
      });

      var displayValue = void 0;

      if (showOriginValue) {
        displayValue = value[activeIndex];
      } else {
        var sum = value.reduce(function (all, v) {
          return all + v;
        }, 0);

        var percent = parseFloat(value[activeIndex] / sum * 100) || 0;

        displayValue = percent;
      }

      return {
        content: showOriginValue ? '{nt}' + digitalFlopUnit : '{nt}' + (digitalFlopUnit || '%'),
        number: [displayValue],
        style: digitalFlopStyle,
        toFixed: digitalFlopToFixed
      };
    },
    ringName: function ringName() {
      var mergedConfig = this.mergedConfig,
          activeIndex = this.activeIndex;


      if (!mergedConfig) return '';

      return mergedConfig.data[activeIndex].name;
    },
    fontSize: function fontSize() {
      var mergedConfig = this.mergedConfig;


      if (!mergedConfig) return '';

      return 'font-size: ' + mergedConfig.digitalFlopStyle.fontSize + 'px;';
    }
  },
  watch: {
    config: function config() {
      var animationHandler = this.animationHandler,
          mergeConfig = this.mergeConfig,
          setRingOption = this.setRingOption;


      clearTimeout(animationHandler);

      this.activeIndex = 0;

      mergeConfig();

      setRingOption();
    }
  },
  methods: {
    init: function init() {
      var initChart = this.initChart,
          mergeConfig = this.mergeConfig,
          setRingOption = this.setRingOption;


      initChart();

      mergeConfig();

      setRingOption();
    },
    initChart: function initChart() {
      var $refs = this.$refs;


      this.chart = new lib_default.a($refs['active-ring-chart']);
    },
    mergeConfig: function mergeConfig() {
      var defaultConfig = this.defaultConfig,
          config = this.config;


      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {});
    },
    setRingOption: function setRingOption() {
      var getRingOption = this.getRingOption,
          chart = this.chart,
          ringAnimation = this.ringAnimation;


      var option = getRingOption();

      chart.setOption(option, true);

      ringAnimation();
    },
    getRingOption: function getRingOption() {
      var mergedConfig = this.mergedConfig,
          getRealRadius = this.getRealRadius;


      var radius = getRealRadius();

      mergedConfig.data.forEach(function (dataItem) {
        dataItem.radius = radius;
      });

      return {
        series: [extends_default()({
          type: 'pie'
        }, mergedConfig, {
          outsideLabel: {
            show: false
          }
        })],
        color: mergedConfig.color
      };
    },
    getRealRadius: function getRealRadius() {
      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var mergedConfig = this.mergedConfig,
          chart = this.chart;
      var radius = mergedConfig.radius,
          activeRadius = mergedConfig.activeRadius,
          lineWidth = mergedConfig.lineWidth;


      var maxRadius = Math.min.apply(Math, toConsumableArray_default()(chart.render.area)) / 2;

      var halfLineWidth = lineWidth / 2;

      var realRadius = active ? activeRadius : radius;

      if (typeof realRadius !== 'number') realRadius = parseInt(realRadius) / 100 * maxRadius;

      var insideRadius = realRadius - halfLineWidth;
      var outSideRadius = realRadius + halfLineWidth;

      return [insideRadius, outSideRadius];
    },
    ringAnimation: function ringAnimation() {
      var _this = this;

      var activeIndex = this.activeIndex,
          getRingOption = this.getRingOption,
          chart = this.chart,
          getRealRadius = this.getRealRadius;


      var radius = getRealRadius();
      var active = getRealRadius(true);

      var option = getRingOption();

      var data = option.series[0].data;


      data.forEach(function (dataItem, i) {
        if (i === activeIndex) {
          dataItem.radius = active;
        } else {
          dataItem.radius = radius;
        }
      });

      chart.setOption(option, true);

      var activeTimeGap = option.series[0].activeTimeGap;


      this.animationHandler = setTimeout(function (foo) {
        activeIndex += 1;

        if (activeIndex >= data.length) activeIndex = 0;

        _this.activeIndex = activeIndex;

        _this.ringAnimation();
      }, activeTimeGap);
    }
  },
  mounted: function mounted() {
    var init = this.init;


    init();
  },
  beforeDestroy: function beforeDestroy() {
    var animationHandler = this.animationHandler;


    clearTimeout(animationHandler);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c9304b30","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/activeRingChart/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-active-ring-chart"},[_c('div',{ref:"active-ring-chart",staticClass:"active-ring-chart-container"}),_vm._v(" "),_c('div',{staticClass:"active-ring-info"},[_c('dv-digital-flop',{attrs:{"config":_vm.digitalFlop}}),_vm._v(" "),_c('div',{staticClass:"active-ring-name",style:(_vm.fontSize)},[_vm._v(_vm._s(_vm.ringName))])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var activeRingChart_src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/activeRingChart/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  src_main,
  activeRingChart_src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_activeRingChart_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "WkBw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XMhG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/index.js
var lib = __webpack_require__("TzJp");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/extend/index.js
var extend = __webpack_require__("5/ib");
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/digitalFlop/src/main.vue

//
//
//
//
//
//









/* harmony default export */ var main = ({
  name: 'DvDigitalFlop',
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      renderer: null,

      defaultConfig: {
        /**
         * @description Number for digital flop
         * @type {Array<Number>}
         * @default number = []
         * @example number = [10]
         */
        number: [],
        /**
         * @description Content formatter
         * @type {String}
         * @default content = ''
         * @example content = '{nt}个'
         */
        content: '',
        /**
         * @description Number toFixed
         * @type {Number}
         * @default toFixed = 0
         */
        toFixed: 0,
        /**
         * @description Text align
         * @type {String}
         * @default textAlign = 'center'
         * @example textAlign = 'center' | 'left' | 'right'
         */
        textAlign: 'center',
        /**
         * @description rowGap
         * @type {Number}
         @default rowGap = 0
         */
        rowGap: 0,
        /**
         * @description Text style configuration
         * @type {Object} {CRender Class Style}
         */
        style: {
          fontSize: 30,
          fill: '#3de7c9'
        },
        /**
         * @description Number formatter
         * @type {Null|Function}
         */
        formatter: undefined,
        /**
         * @description CRender animationCurve
         * @type {String}
         * @default animationCurve = 'easeOutCubic'
         */
        animationCurve: 'easeOutCubic',
        /**
         * @description CRender animationFrame
         * @type {String}
         * @default animationFrame = 50
         */
        animationFrame: 50
      },

      mergedConfig: null,

      graph: null
    };
  },

  watch: {
    config: function config() {
      var update = this.update;


      update();
    }
  },
  methods: {
    init: function init() {
      var initRender = this.initRender,
          mergeConfig = this.mergeConfig,
          initGraph = this.initGraph;


      initRender();

      mergeConfig();

      initGraph();
    },
    initRender: function initRender() {
      var $refs = this.$refs;


      this.renderer = new lib_default.a($refs['digital-flop']);
    },
    mergeConfig: function mergeConfig() {
      var defaultConfig = this.defaultConfig,
          config = this.config;


      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {});
    },
    initGraph: function initGraph() {
      var getShape = this.getShape,
          getStyle = this.getStyle,
          renderer = this.renderer,
          mergedConfig = this.mergedConfig;
      var animationCurve = mergedConfig.animationCurve,
          animationFrame = mergedConfig.animationFrame;


      var shape = getShape();
      var style = getStyle();

      this.graph = renderer.add({
        name: 'numberText',
        animationCurve: animationCurve,
        animationFrame: animationFrame,
        shape: shape,
        style: style
      });
    },
    getShape: function getShape() {
      var _mergedConfig = this.mergedConfig,
          number = _mergedConfig.number,
          content = _mergedConfig.content,
          toFixed = _mergedConfig.toFixed,
          textAlign = _mergedConfig.textAlign,
          rowGap = _mergedConfig.rowGap,
          formatter = _mergedConfig.formatter;

      var _renderer$area = slicedToArray_default()(this.renderer.area, 2),
          w = _renderer$area[0],
          h = _renderer$area[1];

      var position = [w / 2, h / 2];

      if (textAlign === 'left') position[0] = 0;
      if (textAlign === 'right') position[0] = w;

      return {
        number: number,
        content: content,
        toFixed: toFixed,
        position: position,
        rowGap: rowGap,
        formatter: formatter
      };
    },
    getStyle: function getStyle() {
      var _mergedConfig2 = this.mergedConfig,
          style = _mergedConfig2.style,
          textAlign = _mergedConfig2.textAlign;


      return Object(util["deepMerge"])(style, {
        textAlign: textAlign,
        textBaseline: 'middle'
      });
    },
    update: function update() {
      var mergeConfig = this.mergeConfig,
          mergeShape = this.mergeShape,
          getShape = this.getShape,
          getStyle = this.getStyle,
          graph = this.graph,
          mergedConfig = this.mergedConfig;


      graph.animationEnd();

      mergeConfig();

      if (!graph) return;

      var animationCurve = mergedConfig.animationCurve,
          animationFrame = mergedConfig.animationFrame;


      var shape = getShape();
      var style = getStyle();

      mergeShape(graph, shape);

      graph.animationCurve = animationCurve;
      graph.animationFrame = animationFrame;

      graph.animation('style', style, true);
      graph.animation('shape', shape);
    },
    mergeShape: function mergeShape(graph, shape) {
      var cacheNum = graph.shape.number.length;
      var shapeNum = shape.number.length;

      if (cacheNum !== shapeNum) graph.shape.number = shape.number;
    }
  },
  mounted: function mounted() {
    var init = this.init;


    init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-49975492","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/digitalFlop/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-digital-flop"},[_c('canvas',{ref:"digital-flop"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/digitalFlop/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var digitalFlop_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "XV6P":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAA0klEQVRIie2WYQ2DMBBGK2ESkIAEHAwJlTAJSMDBcLA5AAfUATgYDt5+rCQdoaEtLG0WXsKfK5eXkvsuCCAHWtwZgFzsBeg8pDP9EeJQqljiF3CNId6DjCUeYok5xVHFCqhYXyyNPnN9Gh/xxYjaaNRlYFyli7hfNJm3LgLFheuNS92Q89lOM/dA8erntg3XYKkfRlJTHU3cATfguahPQI1fnGrdtyme+I6TMs5k4HClHydpaXgAmac0w/I/l9RwneL/E6vNt45nEkCJZbv8iBGQbwn2nk7/kZL+AAAAAElFTkSuQmCC"

/***/ }),

/***/ "YZEJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return constantRouterMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asyncRouterMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout__ = __webpack_require__("AkUR");




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var constantRouterMap = [{
  path: '/redirect',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout__["default"],
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: function component() {
      return __webpack_require__.e/* import() */(49).then(__webpack_require__.bind(null, "v86N"));
    }
  }]
}, {
  path: '/login',
  component: function component() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, "T+/8"));
  },
  hidden: true
}, {
  path: '/authredirect',
  component: function component() {
    return __webpack_require__.e/* import() */(50).then(__webpack_require__.bind(null, "+abo"));
  },
  hidden: true
}, {
  path: '/404',
  component: function component() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "AejC"));
  },
  hidden: true
}, {
  path: '/401',
  component: function component() {
    return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, "eRLo"));
  },
  hidden: true
}, {
  path: '/set',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout__["default"],
  hidden: true,
  children: [{
    path: '/set',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "bUWe"));
    }
  }, {
    path: '/speed',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(43)]).then(__webpack_require__.bind(null, "1rgo"));
    }
  }, {
    path: '/alerts',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, "MfR2"));
    }
  }, {
    path: '/bridge',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, "1dUF"));
    }
  }, {
    path: '/tunnel',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, "Yz66"));
    }
  }, {
    path: '/slope',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, "Dt0U"));
    }
  }, {
    path: '/process',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(46)]).then(__webpack_require__.bind(null, "Bx4V"));
    }
  }]
}, {
  path: '/search',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout__["default"],
  hidden: true,
  children: [{
    path: '/search',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "Rv23"));
    }
  }, {
    path: '/overspeed',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(47)]).then(__webpack_require__.bind(null, "Bkne"));
    }
  }, {
    path: '/demos',
    component: function component() {
      return __webpack_require__.e/* import() */(48).then(__webpack_require__.bind(null, "vXBZ"));
    }
  }]
}, {
  path: '/project',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout__["default"],
  hidden: true,
  children: [{
    path: '/project',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "KYsC"));
    }
  }, {
    path: '/schedule',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, "quMV"));
    }
  }, {
    path: '/chartdata',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, "V81q"));
    }
  }, {
    path: '/detaillist',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, "AJau"));
    }
  }]
}, {
  path: '/admin',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout__["default"],
  hidden: true,
  children: [{
    path: '/admin',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "x0vE"));
    }
  }, {
    path: '/departlist',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, "BQKP"));
    }
  }, {
    path: '/postlist',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, "0qre"));
    }
  }, {
    path: '/userlist',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, "lfKa"));
    }
  }]
}, {
  path: '/monitor',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout__["default"],
  hidden: true,
  children: [{
    path: '/monitor',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "lZYz"));
    }
  }, {
    path: '/monitor/indexmini',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, "N8bY"));
    }
  }]
}, {
  path: '/datav',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout__["default"],
  hidden: true,
  children: [{
    path: '/datav',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "6ngR"));
    }
  }, {
    path: '/datav/schedule',
    component: function component() {
      return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, "561s"));
    }
  }, {
    path: '/datav/diagram',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, "xmk4"));
    }
  }, {
    path: '/datav/diagrama',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, "fPwq"));
    }
  }, {
    path: '/datav/personnel',
    component: function component() {
      return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, "MK4H"));
    }
  }]
}, {
  path: '/demo',
  component: __WEBPACK_IMPORTED_MODULE_2__views_layout_Layout__["default"],
  hidden: true,
  meta: {
    keepAlive: false
  },
  children: [{
    path: '/demo',
    component: function component() {
      return __webpack_require__.e/* import() */(51).then(__webpack_require__.bind(null, "+RJ3"));
    }
  }]
}];


/* harmony default export */ __webpack_exports__["c"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  scrollBehavior: function scrollBehavior() {
    return { y: 0 };
  },
  routes: constantRouterMap
}));

//路由组件注册
var asyncRouterMap = {
  '/views/layout/Layout': function viewsLayoutLayout() {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "AkUR"));
  },
  '/views/monitor/index': function viewsMonitorIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "lZYz"));
  }, //行车监控
  '/views/dashboard/index': function viewsDashboardIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "ARoL"));
  }, //视频监控
  '/views/admin/index': function viewsAdminIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "x0vE"));
  }, //人员管理
  '/views/project/index': function viewsProjectIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "KYsC"));
  }, //工程进度
  '/views/run_monitor/index': function viewsRun_monitorIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, "WfHw"));
  }, //列车运行监控
  '/views/location/index': function viewsLocationIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, "Sp6l"));
  }, //定位管理
  '/views/real_time/index': function viewsReal_timeIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(38)]).then(__webpack_require__.bind(null, "2jNM"));
  }, //实时管理
  '/views/progress/index': function viewsProgressIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, "naN1"));
  }, //进度形象图
  '/views/security/index': function viewsSecurityIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, "h5Rs"));
  }, //安全管理
  '/views/dispatch/index': function viewsDispatchIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "FvKM"));
  }, //调度命令
  '/views/apply/index': function viewsApplyIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "43N1"));
  }, //施工请点
  '/views/plan/index': function viewsPlanIndex() {
    return __webpack_require__.e/* import() */(41).then(__webpack_require__.bind(null, "aJNJ"));
  }, //施工计划
  '/views/search/index': function viewsSearchIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "Rv23"));
  }, //查询统计
  '/views/description/index': function viewsDescriptionIndex() {
    return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, "ap+h"));
  }, //项目介绍
  '/views/set/index': function viewsSetIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "bUWe"));
  }, //设置
  '/views/back/index': function viewsBackIndex() {
    return __webpack_require__.e/* import() */(42).then(__webpack_require__.bind(null, "FKtP"));
  }, //返回
  '/views/apply/daychart': function viewsApplyDaychart() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, "wpBv"));
  }, //日班图表
  '/views/apply/conflictcheck': function viewsApplyConflictcheck() {
    return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, "JXxd"));
  }, //冲突检测
  '/views/apply/weekplan': function viewsApplyWeekplan() {
    return __webpack_require__.e/* import() */(44).then(__webpack_require__.bind(null, "mz+a"));
  }, //周计划
  '/views/apply/weekplanapply': function viewsApplyWeekplanapply() {
    return __webpack_require__.e/* import() */(39).then(__webpack_require__.bind(null, "qSqD"));
  }, //周计划l审核历史
  '/views/location/walldetector': function viewsLocationWalldetector() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, "RwO4"));
  }, //墙壁探测器
  '/views/location/cardetector': function viewsLocationCardetector() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(45)]).then(__webpack_require__.bind(null, "4nWN"));
  }, //车载探测器
  '/views/location/locationbind': function viewsLocationLocationbind() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, "6QbA"));
  }, //定位从设备
  '/views/location/device': function viewsLocationDevice() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, "ZFGK"));
  }, //机具
  '/views/message/index': function viewsMessageIndex() {
    return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, "Rf88"));
  }

};

/***/ }),

/***/ "YrFG":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABjklEQVRYR+2YgXGCMBiFyQS2E9QNbDfACeoIjoATqBO0I3SEugEbqBOIG+AE+J4XaUJpQ0LI5U5y999xQP7/yyN5BEQSWROR8STxA1VV9QrV1ojFgOqVyJ0jtkKIg1pHU0jC7AcEaUv9pkI1gb7R4z0w0A5A9dNoAlWBYViuBNDzvW4MQAmAao4RqG1KuCq0Q7IMnQusxhTHn4iZjzlnA3RGwUJOPM2XADXF+S8HIPZ70byn4xw64z529t4wGA6yhrJRaCkVujQdlZTy0dlaxS9lbYBUdTRHBUyGix8+5HMFYm3OGcqdyvDBM/qQUcU+j8yY3OWGhwXaQq0cwWVOV5/8pV4IhVYoQohbM238ugJdkMtpG4sCVEZrEupJnuRGsFasKxD9hmbI/a+3BjBCnRB3uCA+NFdVaoNQR9hVoT6qUFW+Wo4IvkQ3CH7NtLYQQFaDGYFMcsWmEPdaPytOpcdqiO5DkSshnk9pqiUdlcs0Vd3UNA8sr/MtkNMO/v3ZYJl0kNvj/z80yLAtkl4BvNbAJd7ophIAAAAASUVORK5CYII="

/***/ }),

/***/ "Zy5R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var lib_util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(lib_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/color/lib/index.js
var lib = __webpack_require__("glc7");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox12/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var main = ({
  name: 'DvBorderBox12',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    var id = Object(util["e" /* uuid */])();
    return {
      ref: 'border-box-12',
      filterId: 'borderr-box-12-filterId-' + id,

      defaultColor: ['#2e6099', '#7ce7fd'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(lib_util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    },

    fade: lib["fade"]
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4798707d","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox12/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-12"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('filter',{attrs:{"id":_vm.filterId,"height":"150%","width":"150%","x":"-25%","y":"-25%"}},[_c('feMorphology',{attrs:{"operator":"dilate","radius":"1","in":"SourceAlpha","result":"thicken"}}),_vm._v(" "),_c('feGaussianBlur',{attrs:{"in":"thicken","stdDeviation":"2","result":"blurred"}}),_vm._v(" "),_c('feFlood',{attrs:{"flood-color":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 70),"result":"glowColor"}},[_c('animate',{attrs:{"attributeName":"flood-color","values":("\n              " + (_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 70)) + ";\n              " + (_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 30)) + ";\n              " + (_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 70)) + ";\n            "),"dur":"3s","begin":"0s","repeatCount":"indefinite"}})]),_vm._v(" "),_c('feComposite',{attrs:{"in":"glowColor","in2":"blurred","operator":"in","result":"softGlowColored"}}),_vm._v(" "),_c('feMerge',[_c('feMergeNode',{attrs:{"in":"softGlowColored"}}),_vm._v(" "),_c('feMergeNode',{attrs:{"in":"SourceGraphic"}})],1)],1)]),_vm._v(" "),(_vm.width && _vm.height)?_c('path',{attrs:{"fill":_vm.backgroundColor,"stroke-width":"2","stroke":_vm.mergedColor[0],"d":("\n        M15 5 L " + (_vm.width - 15) + " 5 Q " + (_vm.width - 5) + " 5, " + (_vm.width - 5) + " 15\n        L " + (_vm.width - 5) + " " + (_vm.height - 15) + " Q " + (_vm.width - 5) + " " + (_vm.height - 5) + ", " + (_vm.width - 15) + " " + (_vm.height - 5) + "\n        L 15, " + (_vm.height - 5) + " Q 5 " + (_vm.height - 5) + " 5 " + (_vm.height - 15) + " L 5 15\n        Q 5 5 15 5\n      ")}}):_vm._e(),_vm._v(" "),_c('path',{attrs:{"stroke-width":"2","fill":"transparent","stroke-linecap":"round","filter":("url(#" + _vm.filterId + ")"),"stroke":_vm.mergedColor[1],"d":"M 20 5 L 15 5 Q 5 5 5 15 L 5 20"}}),_vm._v(" "),_c('path',{attrs:{"stroke-width":"2","fill":"transparent","stroke-linecap":"round","filter":("url(#" + _vm.filterId + ")"),"stroke":_vm.mergedColor[1],"d":("M " + (_vm.width - 20) + " 5 L " + (_vm.width - 15) + " 5 Q " + (_vm.width - 5) + " 5 " + (_vm.width - 5) + " 15 L " + (_vm.width - 5) + " 20")}}),_vm._v(" "),_c('path',{attrs:{"stroke-width":"2","fill":"transparent","stroke-linecap":"round","filter":("url(#" + _vm.filterId + ")"),"stroke":_vm.mergedColor[1],"d":("\n        M " + (_vm.width - 20) + " " + (_vm.height - 5) + " L " + (_vm.width - 15) + " " + (_vm.height - 5) + "\n        Q " + (_vm.width - 5) + " " + (_vm.height - 5) + " " + (_vm.width - 5) + " " + (_vm.height - 15) + "\n        L " + (_vm.width - 5) + " " + (_vm.height - 20) + "\n      ")}}),_vm._v(" "),_c('path',{attrs:{"stroke-width":"2","fill":"transparent","stroke-linecap":"round","filter":("url(#" + _vm.filterId + ")"),"stroke":_vm.mergedColor[1],"d":("\n        M 20 " + (_vm.height - 5) + " L 15 " + (_vm.height - 5) + "\n        Q 5 " + (_vm.height - 5) + " 5 " + (_vm.height - 15) + "\n        L 5 " + (_vm.height - 20) + "\n      ")}})]),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox12/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox12_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "aBM5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/color/lib/index.js
var lib = __webpack_require__("glc7");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration11/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var main = ({
  name: 'DvDecoration11',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      ref: 'decoration-11',

      defaultColor: ['#1a98fc', '#2cf7fe'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    },

    fade: lib["fade"]
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-84159a76","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration11/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-11"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 10),"stroke":_vm.mergedColor[1],"points":"20 10, 25 4, 55 4 60 10"}}),_vm._v(" "),_c('polygon',{attrs:{"fill":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 10),"stroke":_vm.mergedColor[1],"points":("20 " + (_vm.height - 10) + ", 25 " + (_vm.height - 4) + ", 55 " + (_vm.height - 4) + " 60 " + (_vm.height - 10))}}),_vm._v(" "),_c('polygon',{attrs:{"fill":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 10),"stroke":_vm.mergedColor[1],"points":((_vm.width - 20) + " 10, " + (_vm.width - 25) + " 4, " + (_vm.width - 55) + " 4 " + (_vm.width - 60) + " 10")}}),_vm._v(" "),_c('polygon',{attrs:{"fill":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 10),"stroke":_vm.mergedColor[1],"points":((_vm.width - 20) + " " + (_vm.height - 10) + ", " + (_vm.width - 25) + " " + (_vm.height - 4) + ", " + (_vm.width - 55) + " " + (_vm.height - 4) + " " + (_vm.width - 60) + " " + (_vm.height - 10))}}),_vm._v(" "),_c('polygon',{attrs:{"fill":_vm.fade(_vm.mergedColor[0] || _vm.defaultColor[0], 20),"stroke":_vm.mergedColor[0],"points":("\n        20 10, 5 " + (_vm.height / 2) + " 20 " + (_vm.height - 10) + "\n        " + (_vm.width - 20) + " " + (_vm.height - 10) + " " + (_vm.width - 5) + " " + (_vm.height / 2) + " " + (_vm.width - 20) + " 10\n      ")}}),_vm._v(" "),_c('polyline',{attrs:{"fill":"transparent","stroke":_vm.fade(_vm.mergedColor[0] || _vm.defaultColor[0], 70),"points":("25 18, 15 " + (_vm.height / 2) + " 25 " + (_vm.height - 18))}}),_vm._v(" "),_c('polyline',{attrs:{"fill":"transparent","stroke":_vm.fade(_vm.mergedColor[0] || _vm.defaultColor[0], 70),"points":((_vm.width - 25) + " 18, " + (_vm.width - 15) + " " + (_vm.height / 2) + " " + (_vm.width - 25) + " " + (_vm.height - 18))}})]),_vm._v(" "),_c('div',{staticClass:"decoration-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration11/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration11_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "abaV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "acHp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox3/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvBorderBox3',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    return {
      ref: 'border-box-3',

      defaultColor: ['#2862b7', '#2862b7'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3709c224","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox3/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-3"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      23, 23 " + (_vm.width - 24) + ", 23 " + (_vm.width - 24) + ", " + (_vm.height - 24) + " 23, " + (_vm.height - 24) + "\n    ")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb3-line1",attrs:{"stroke":_vm.mergedColor[0],"points":("4, 4 " + (_vm.width - 22) + " ,4 " + (_vm.width - 22) + ", " + (_vm.height - 22) + " 4, " + (_vm.height - 22) + " 4, 4")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb3-line2",attrs:{"stroke":_vm.mergedColor[1],"points":("10, 10 " + (_vm.width - 16) + ", 10 " + (_vm.width - 16) + ", " + (_vm.height - 16) + " 10, " + (_vm.height - 16) + " 10, 10")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb3-line2",attrs:{"stroke":_vm.mergedColor[1],"points":("16, 16 " + (_vm.width - 10) + ", 16 " + (_vm.width - 10) + ", " + (_vm.height - 10) + " 16, " + (_vm.height - 10) + " 16, 16")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb3-line2",attrs:{"stroke":_vm.mergedColor[1],"points":("22, 22 " + (_vm.width - 4) + ", 22 " + (_vm.width - 4) + ", " + (_vm.height - 4) + " 22, " + (_vm.height - 4) + " 22, 22")}})]),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox3/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox3_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ajDz":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAiCAYAAABMfblJAAACwklEQVRYR82X220TQRSG2QpInnnAroC4AjYVQCrAkXjHrgBTAfZ7JJwKCBWwqQCnApwHnkkqMP83OrOM13PZtUDKkUYbz7n8c64zqZ71oN1udyaxd1p8T+yL5kbrwb7XVVXxO0tVjiugqfgftUYlQ8bf6rsQ8HVKPgpoHn0JPOmJ14o1+mse8/gAUGC1hL9a6IYCIX9nEdnpeyFQwFvaAzSw78egmM5KADPZIQU/be88BG0BLYyAURTHEmFcyhY2fpsRigpQV1AhIBuvMkj34i21Gq9shyQFM62XWhhfa7FHRXvaSGfSAlo1UiQpcieHaSD+YHcBOKCfMzYuJbt2HsrI1k4Yk59gVDJvzeCoI4QuB7op1MBWMuPKTvwjcTKfE8JE4+doLYOXspfzdAIgofoQsXQvA6Me4Q5VaQM8TUVsBWAjjdcRQO8dhfC84J1nPwjwNOPlLYCp05yblaF9mdPbAMhEiNGpNskHs3QIfZIwafJ9uKebAxxLcnok4Fp6ftIcAKYantAwMZirQygXUpfDRtZiRbPS/kKLHPctmkcVzUmm8h1gqm+oTsI6JI8+f4QzNpPnAI5S8da+b2ZyUmp8bvyp7OVkx360pcJK7mYytJIhwou33fA+am8pmYXJpKr6VjK1B6yllOu3G/HnWoSZmUpUIPILj/AxuOGlyN2L4fWE4puMAixkGi13t4m4guoCEHLfBOYOEwJySozl7sTCeaJsnhy1AInOX0B+WAFx+r5tUDoA+T0T2NYLxh5R/8rTPc+SgOYpoEP6r+up60cfxpBZegiPJLywoiiFmfBRVDyE2xB2T5IFDIXt+VBr773WC+P90vdKi4dVU0roQdH0UejMXtfMffSyOcwZ+C+A9pBlcpDDLtHsfjDTW34IhHKEl1e4672QUv/M9Jk6pUi2b9knCej7sORFis/rbRlj/gGr/S9xqA/4zwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "bQSR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bX3P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var lib_util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(lib_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/index.js
var lib = __webpack_require__("TzJp");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/waterLevelPond/src/main.vue




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var main = ({
  name: 'DvWaterLevelPond',
  props: {
    config: Object,
    default: function _default() {
      return {};
    }
  },
  data: function data() {
    var id = Object(util["e" /* uuid */])();
    return {
      gradientId: 'water-level-pond-' + id,

      defaultConfig: {
        /**
         * @description Data
         * @type {Array<Number>}
         * @default data = []
         * @example data = [60, 40]
         */
        data: [],
        /**
         * @description Shape of wanter level pond
         * @type {String}
         * @default shape = 'rect'
         * @example shape = 'rect' | 'roundRect' | 'round'
         */
        shape: 'rect',
        /**
         * @description Water wave number
         * @type {Number}
         * @default waveNum = 3
         */
        waveNum: 3,
        /**
         * @description Water wave height (px)
         * @type {Number}
         * @default waveHeight = 40
         */
        waveHeight: 40,
        /**
         * @description Wave opacity
         * @type {Number}
         * @default waveOpacity = 0.4
         */
        waveOpacity: 0.4,
        /**
         * @description Colors (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default colors = ['#00BAFF', '#3DE7C9']
         * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: ['#3DE7C9', '#00BAFF'],
        /**
         * @description Formatter
         * @type {String}
         * @default formatter = '{value}%'
         */
        formatter: '{value}%'
      },

      mergedConfig: {},

      renderer: null,

      svgBorderGradient: [],

      details: '',

      waves: [],

      animation: false
    };
  },

  computed: {
    radius: function radius() {
      var shape = this.mergedConfig.shape;


      if (shape === 'round') return '50%';

      if (shape === 'rect') return '0';

      if (shape === 'roundRect') return '10px';

      return '0';
    },
    shape: function shape() {
      var shape = this.mergedConfig.shape;


      if (!shape) return 'rect';

      return shape;
    }
  },
  watch: {
    config: function config() {
      var calcData = this.calcData,
          renderer = this.renderer;


      renderer.delAllGraph();

      this.waves = [];

      setTimeout(calcData, 0);
    }
  },
  methods: {
    init: function init() {
      var initRender = this.initRender,
          config = this.config,
          calcData = this.calcData;


      initRender();

      if (!config) return;

      calcData();
    },
    initRender: function initRender() {
      var $refs = this.$refs;


      this.renderer = new lib_default.a($refs['water-pond-level']);
    },
    calcData: function calcData() {
      var mergeConfig = this.mergeConfig,
          calcSvgBorderGradient = this.calcSvgBorderGradient,
          calcDetails = this.calcDetails;


      mergeConfig();

      calcSvgBorderGradient();

      calcDetails();

      var addWave = this.addWave,
          animationWave = this.animationWave;


      addWave();

      animationWave();
    },
    mergeConfig: function mergeConfig() {
      var config = this.config,
          defaultConfig = this.defaultConfig;


      this.mergedConfig = Object(lib_util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config);
    },
    calcSvgBorderGradient: function calcSvgBorderGradient() {
      var colors = this.mergedConfig.colors;


      var colorNum = colors.length;

      var colorOffsetGap = 100 / (colorNum - 1);

      this.svgBorderGradient = colors.map(function (c, i) {
        return [colorOffsetGap * i, c];
      });
    },
    calcDetails: function calcDetails() {
      var _mergedConfig = this.mergedConfig,
          data = _mergedConfig.data,
          formatter = _mergedConfig.formatter;


      if (!data.length) {
        this.details = '';

        return;
      }

      var maxValue = Math.max.apply(Math, toConsumableArray_default()(data));

      this.details = formatter.replace('{value}', maxValue);
    },
    addWave: function addWave() {
      var renderer = this.renderer,
          getWaveShapes = this.getWaveShapes,
          getWaveStyle = this.getWaveStyle,
          drawed = this.drawed;


      var shapes = getWaveShapes();
      var style = getWaveStyle();

      this.waves = shapes.map(function (shape) {
        return renderer.add({
          name: 'smoothline',
          animationFrame: 300,
          shape: shape,
          style: style,
          drawed: drawed
        });
      });
    },
    getWaveShapes: function getWaveShapes() {
      var mergedConfig = this.mergedConfig,
          renderer = this.renderer,
          mergeOffset = this.mergeOffset;
      var waveNum = mergedConfig.waveNum,
          waveHeight = mergedConfig.waveHeight,
          data = mergedConfig.data;

      var _renderer$area = slicedToArray_default()(renderer.area, 2),
          w = _renderer$area[0],
          h = _renderer$area[1];

      var pointsNum = waveNum * 4 + 4;

      var pointXGap = w / waveNum / 2;

      return data.map(function (v) {
        var points = new Array(pointsNum).fill(0).map(function (foo, j) {
          var x = w - pointXGap * j;

          var startY = (1 - v / 100) * h;

          var y = j % 2 === 0 ? startY : startY - waveHeight;

          return [x, y];
        });

        points = points.map(function (p) {
          return mergeOffset(p, [pointXGap * 2, 0]);
        });

        return { points: points };
      });
    },
    mergeOffset: function mergeOffset(_ref, _ref2) {
      var _ref4 = slicedToArray_default()(_ref, 2),
          x = _ref4[0],
          y = _ref4[1];

      var _ref3 = slicedToArray_default()(_ref2, 2),
          ox = _ref3[0],
          oy = _ref3[1];

      return [x + ox, y + oy];
    },
    getWaveStyle: function getWaveStyle() {
      var renderer = this.renderer,
          mergedConfig = this.mergedConfig;


      var h = renderer.area[1];

      return {
        gradientColor: mergedConfig.colors,
        gradientType: 'linear',
        gradientParams: [0, 0, 0, h],
        gradientWith: 'fill',
        opacity: mergedConfig.waveOpacity,
        translate: [0, 0]
      };
    },
    drawed: function drawed(_ref5, _ref6) {
      var points = _ref5.shape.points;
      var ctx = _ref6.ctx,
          area = _ref6.area;

      var firstPoint = points[0];
      var lastPoint = points.slice(-1)[0];

      var h = area[1];

      ctx.lineTo(lastPoint[0], h);
      ctx.lineTo(firstPoint[0], h);

      ctx.closePath();

      ctx.fill();
    },
    animationWave: function animationWave() {
      var _this = this;

      var repeat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var waves, renderer, animation, w;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                waves = _this.waves, renderer = _this.renderer, animation = _this.animation;

                if (!animation) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt('return');

              case 3:

                _this.animation = true;

                w = renderer.area[0];


                waves.forEach(function (graph) {
                  graph.attr('style', { translate: [0, 0] });

                  graph.animation('style', {
                    translate: [w, 0]
                  }, true);
                });

                _context.next = 8;
                return renderer.launchAnimation();

              case 8:

                _this.animation = false;

                if (renderer.graphs.length) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt('return');

              case 11:

                _this.animationWave(repeat + 1);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },
  mounted: function mounted() {
    var init = this.init;


    init();
  },
  beforeDestroy: function beforeDestroy() {
    var renderer = this.renderer;


    renderer.delAllGraph();

    this.waves = [];
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2f5c662d","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/waterLevelPond/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-water-pond-level"},[(_vm.renderer)?_c('svg',[_c('defs',[_c('linearGradient',{attrs:{"id":_vm.gradientId,"x1":"0%","y1":"0%","x2":"0%","y2":"100%"}},_vm._l((_vm.svgBorderGradient),function(lc){return _c('stop',{key:lc[0],attrs:{"offset":lc[0],"stop-color":lc[1]}})}))],1),_vm._v(" "),(_vm.renderer)?_c('text',{attrs:{"stroke":("url(#" + _vm.gradientId + ")"),"fill":("url(#" + _vm.gradientId + ")"),"x":_vm.renderer.area[0] / 2 + 8,"y":_vm.renderer.area[1] / 2 + 8}},[_vm._v("\n      "+_vm._s(_vm.details)+"\n    ")]):_vm._e(),_vm._v(" "),(!_vm.shape || _vm.shape === 'round')?_c('ellipse',{attrs:{"cx":_vm.renderer.area[0] / 2 + 8,"cy":_vm.renderer.area[1] / 2 + 8,"rx":_vm.renderer.area[0] / 2 + 5,"ry":_vm.renderer.area[1] / 2 + 5,"stroke":("url(#" + _vm.gradientId + ")")}}):_c('rect',{attrs:{"x":"2","y":"2","rx":_vm.shape === 'roundRect' ? 10 : 0,"ry":_vm.shape === 'roundRect' ? 10 : 0,"width":_vm.renderer.area[0] + 12,"height":_vm.renderer.area[1] + 12,"stroke":("url(#" + _vm.gradientId + ")")}})]):_vm._e(),_vm._v(" "),_c('canvas',{ref:"water-pond-level",style:(("border-radius: " + _vm.radius + ";"))})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/waterLevelPond/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var waterLevelPond_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "bxTc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cEED":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cQII":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration4/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvDecoration4',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    reverse: {
      type: Boolean,
      default: false
    },
    dur: {
      type: Number,
      default: 3
    }
  },
  data: function data() {
    return {
      ref: 'decoration-4',

      defaultColor: ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6ca11c96","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration4/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-4"},[_c('div',{class:("container " + (_vm.reverse ? 'reverse' : 'normal')),style:(_vm.reverse ? ("width:" + _vm.width + "px;height:5px;animation-duration:" + _vm.dur + "s") : ("width:5px;height:" + _vm.height + "px;animation-duration:" + _vm.dur + "s"))},[_c('svg',{attrs:{"width":_vm.reverse ? _vm.width : 5,"height":_vm.reverse ? 5 : _vm.height}},[_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":_vm.reverse ? ("0, 2.5 " + _vm.width + ", 2.5") : ("2.5, 0 2.5, " + _vm.height)}}),_vm._v(" "),_c('polyline',{staticClass:"bold-line",attrs:{"stroke":_vm.mergedColor[1],"stroke-width":"3","stroke-dasharray":"20, 80","stroke-dashoffset":"-30","points":_vm.reverse ? ("0, 2.5 " + _vm.width + ", 2.5") : ("2.5, 0 2.5, " + _vm.height)}})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration4/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration4_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "cgqx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/scrollRankingBoard/src/main.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvScrollRankingBoard',
  mixins: [autoResize["a" /* default */]],
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ref: 'scroll-ranking-board',

      defaultConfig: {
        /**
         * @description Board data
         * @type {Array<Object>}
         * @default data = []
         */
        data: [],
        /**
         * @description Row num
         * @type {Number}
         * @default rowNum = 5
         */
        rowNum: 5,
        /**
         * @description Scroll wait time
         * @type {Number}
         * @default waitTime = 2000
         */
        waitTime: 2000,
        /**
         * @description Carousel type
         * @type {String}
         * @default carousel = 'single'
         * @example carousel = 'single' | 'page'
         */
        carousel: 'single',
        /**
         * @description Value unit
         * @type {String}
         * @default unit = ''
         * @example unit = 'ton'
         */
        unit: '',
        /**
         * @description Auto sort by value
         * @type {Boolean}
         * @default sort = true
         */
        sort: true,
        /**
         * @description Value formatter
         * @type {Function}
         * @default valueFormatter = null
         */
        valueFormatter: null
      },

      mergedConfig: null,

      rowsData: [],

      rows: [],

      heights: [],

      animationIndex: 0,

      animationHandler: '',

      updater: 0
    };
  },

  watch: {
    config: function config() {
      var stopAnimation = this.stopAnimation,
          calcData = this.calcData;


      stopAnimation();

      calcData();
    }
  },
  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var calcData = this.calcData;


      calcData();
    },
    onResize: function onResize() {
      var mergedConfig = this.mergedConfig,
          calcHeights = this.calcHeights;


      if (!mergedConfig) return;

      calcHeights(true);
    },
    calcData: function calcData() {
      var mergeConfig = this.mergeConfig,
          calcRowsData = this.calcRowsData;


      mergeConfig();

      calcRowsData();

      var calcHeights = this.calcHeights;


      calcHeights();

      var animation = this.animation;


      animation(true);
    },
    mergeConfig: function mergeConfig() {
      var config = this.config,
          defaultConfig = this.defaultConfig;


      this.mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {});
    },
    calcRowsData: function calcRowsData() {
      var _mergedConfig = this.mergedConfig,
          data = _mergedConfig.data,
          rowNum = _mergedConfig.rowNum,
          sort = _mergedConfig.sort;


      sort && data.sort(function (_ref, _ref2) {
        var a = _ref.value;
        var b = _ref2.value;

        if (a > b) return -1;
        if (a < b) return 1;
        if (a === b) return 0;
      });

      var value = data.map(function (_ref3) {
        var value = _ref3.value;
        return value;
      });

      var min = Math.min.apply(Math, toConsumableArray_default()(value)) || 0;

      // abs of min
      var minAbs = Math.abs(min);

      var max = Math.max.apply(Math, toConsumableArray_default()(value)) || 0;

      // abs of max
      var maxAbs = Math.abs(max);

      var total = max + minAbs;

      data = data.map(function (row, i) {
        return extends_default()({}, row, { ranking: i + 1, percent: (row.value + minAbs) / total * 100 });
      });

      var rowLength = data.length;

      if (rowLength > rowNum && rowLength < 2 * rowNum) {
        data = [].concat(toConsumableArray_default()(data), toConsumableArray_default()(data));
      }

      data = data.map(function (d, i) {
        return extends_default()({}, d, { scroll: i });
      });

      this.rowsData = data;
      this.rows = data;
    },
    calcHeights: function calcHeights() {
      var onresize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var height = this.height,
          mergedConfig = this.mergedConfig;
      var rowNum = mergedConfig.rowNum,
          data = mergedConfig.data;


      var avgHeight = height / rowNum;

      this.avgHeight = avgHeight;

      if (!onresize) this.heights = new Array(data.length).fill(avgHeight);
    },
    animation: function animation() {
      var _this = this;

      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _heights;

        var avgHeight, animationIndex, mergedConfig, rowsData, animation, updater, waitTime, carousel, rowNum, rowLength, animationNum, rows, back;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                avgHeight = _this.avgHeight, animationIndex = _this.animationIndex, mergedConfig = _this.mergedConfig, rowsData = _this.rowsData, animation = _this.animation, updater = _this.updater;
                waitTime = mergedConfig.waitTime, carousel = mergedConfig.carousel, rowNum = mergedConfig.rowNum;
                rowLength = rowsData.length;

                if (!(rowNum >= rowLength)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return');

              case 5:
                if (!start) {
                  _context.next = 10;
                  break;
                }

                _context.next = 8;
                return new promise_default.a(function (resolve) {
                  return setTimeout(resolve, waitTime);
                });

              case 8:
                if (!(updater !== _this.updater)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt('return');

              case 10:
                animationNum = carousel === 'single' ? 1 : rowNum;
                rows = rowsData.slice(animationIndex);

                rows.push.apply(rows, toConsumableArray_default()(rowsData.slice(0, animationIndex)));

                _this.rows = rows.slice(0, rowNum + 1);
                _this.heights = new Array(rowLength).fill(avgHeight);

                _context.next = 17;
                return new promise_default.a(function (resolve) {
                  return setTimeout(resolve, 300);
                });

              case 17:
                if (!(updater !== _this.updater)) {
                  _context.next = 19;
                  break;
                }

                return _context.abrupt('return');

              case 19:

                (_heights = _this.heights).splice.apply(_heights, [0, animationNum].concat(toConsumableArray_default()(new Array(animationNum).fill(0))));

                animationIndex += animationNum;

                back = animationIndex - rowLength;

                if (back >= 0) animationIndex = back;

                _this.animationIndex = animationIndex;
                _this.animationHandler = setTimeout(animation, waitTime - 300);

              case 25:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    stopAnimation: function stopAnimation() {
      var animationHandler = this.animationHandler,
          updater = this.updater;


      this.updater = (updater + 1) % 999999;

      if (!animationHandler) return;

      clearTimeout(animationHandler);
    }
  },
  destroyed: function destroyed() {
    var stopAnimation = this.stopAnimation;


    stopAnimation();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-252476f4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/scrollRankingBoard/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-scroll-ranking-board"},_vm._l((_vm.rows),function(item,i){return _c('div',{key:item.toString() + item.scroll,staticClass:"row-item",style:(("height: " + (_vm.heights[i]) + "px;"))},[_c('div',{staticClass:"ranking-info"},[_c('div',{staticClass:"rank"},[_vm._v("No."+_vm._s(item.ranking))]),_vm._v(" "),_c('div',{staticClass:"info-name",domProps:{"innerHTML":_vm._s(item.name)}}),_vm._v(" "),_c('div',{staticClass:"ranking-value"},[_vm._v(_vm._s(_vm.mergedConfig.valueFormatter ? _vm.mergedConfig.valueFormatter(item) : item.value + _vm.mergedConfig.unit))])]),_vm._v(" "),_c('div',{staticClass:"ranking-column"},[_c('div',{staticClass:"inside-column",style:(("width: " + (item.percent) + "%;"))},[_c('div',{staticClass:"shine"})])])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/scrollRankingBoard/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var scrollRankingBoard_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ctr7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "d5Tr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration2/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvDecoration2',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    reverse: {
      type: Boolean,
      default: false
    },
    dur: {
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      ref: 'decoration-2',

      x: 0,
      y: 0,

      w: 0,
      h: 0,

      defaultColor: ['#3faacb', '#fff'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    },
    reverse: function reverse() {
      var calcSVGData = this.calcSVGData;


      calcSVGData();
    }
  },
  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var calcSVGData = this.calcSVGData;


      calcSVGData();
    },
    calcSVGData: function calcSVGData() {
      var reverse = this.reverse,
          width = this.width,
          height = this.height;


      if (reverse) {
        this.w = 1;
        this.h = height;
        this.x = width / 2;
        this.y = 0;
      } else {
        this.w = width;
        this.h = 1;
        this.x = 0;
        this.y = height / 2;
      }
    },
    onResize: function onResize() {
      var calcSVGData = this.calcSVGData;


      calcSVGData();
    },
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-50692e75","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration2/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-2"},[_c('svg',{attrs:{"width":(_vm.width + "px"),"height":(_vm.height + "px")}},[_c('rect',{attrs:{"x":_vm.x,"y":_vm.y,"width":_vm.w,"height":_vm.h,"fill":_vm.mergedColor[0]}},[_c('animate',{attrs:{"attributeName":_vm.reverse ? 'height' : 'width',"from":"0","to":_vm.reverse ? _vm.height : _vm.width,"dur":(_vm.dur + "s"),"calcMode":"spline","keyTimes":"0;1","keySplines":".42,0,.58,1","repeatCount":"indefinite"}})]),_vm._v(" "),_c('rect',{attrs:{"x":_vm.x,"y":_vm.y,"width":"1","height":"1","fill":_vm.mergedColor[1]}},[_c('animate',{attrs:{"attributeName":_vm.reverse ? 'y' : 'x',"from":"0","to":_vm.reverse ? _vm.height : _vm.width,"dur":(_vm.dur + "s"),"calcMode":"spline","keyTimes":"0;1","keySplines":"0.42,0,0.58,1","repeatCount":"indefinite"}})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration2/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration2_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "dCKE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/loading/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var main = ({
  name: 'DvLoading'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0f990c0f","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/loading/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dv-loading"},[_c('svg',{attrs:{"width":"50px","height":"50px"}},[_c('circle',{attrs:{"cx":"25","cy":"25","r":"20","fill":"transparent","stroke-width":"3","stroke-dasharray":"31.415, 31.415","stroke":"#02bcfe","stroke-linecap":"round"}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":"0, 25 25;360, 25 25","dur":"1.5s","repeatCount":"indefinite"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"stroke","values":"#02bcfe;#3be6cb;#02bcfe","dur":"3s","repeatCount":"indefinite"}})],1),_vm._v(" "),_c('circle',{attrs:{"cx":"25","cy":"25","r":"10","fill":"transparent","stroke-width":"3","stroke-dasharray":"15.7, 15.7","stroke":"#3be6cb","stroke-linecap":"round"}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","values":"360, 25 25;0, 25 25","dur":"1.5s","repeatCount":"indefinite"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"stroke","values":"#3be6cb;#02bcfe;#3be6cb","dur":"3s","repeatCount":"indefinite"}})],1)]),_vm._v(" "),_c('div',{staticClass:"loading-tip"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/loading/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var loading_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "dwkL":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABVUlEQVRYR+2Y8RHBMBTGZQJMwAaMYANsUBPoCEyACbBBTUA3MEJtoBPU91zaayttKte85o/mziEh75cvL18eYuBYE47xDNwGSpLEg2JnZtU2QohLGrOgEIASZhgK9wbQmAvoikDZ6kuLneP9gfoAlAljW6E9Yu1UqmMzFui/90CuKRRhS+ihaiN0Uh7V5lCA8SXzSbtBxZXylFGnTDY2JsA88sHcdmqp0BTPEyaJXlCokGNlHzoCZMsEk4Y5AcpX5lBHV0drTh1iZeS2Rs2GU/dAuq1wTiEdcOPxuvLDrWOfM0YyR44W1RojB4Euxs9dJv2BrbaGQmHl5QqYLsqPAFBrW1dHjImfum2R41Sgzei1zSK/sTfZuDpUQvRAuvSg/MlqG82HqcAnI7aaQzpg1XiMpKYE/7ZyxehJ6qHJzAbfoVPpV/7ZYDBh619x/1dH60v+c8IP3/G2JQS1QfgAAAAASUVORK5CYII="

/***/ }),

/***/ "f2hL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fKJ/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox6/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvBorderBox6',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    return {
      ref: 'border-box-6',

      defaultColor: ['rgba(255, 255, 255, 0.35)', 'gray'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0efb3c44","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox6/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-6"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      9, 7 " + (_vm.width - 9) + ", 7 " + (_vm.width - 9) + ", " + (_vm.height - 7) + " 9, " + (_vm.height - 7) + "\n    ")}}),_vm._v(" "),_c('circle',{attrs:{"fill":_vm.mergedColor[1],"cx":"5","cy":"5","r":"2"}}),_vm._v(" "),_c('circle',{attrs:{"fill":_vm.mergedColor[1],"cx":_vm.width - 5,"cy":"5","r":"2"}}),_vm._v(" "),_c('circle',{attrs:{"fill":_vm.mergedColor[1],"cx":_vm.width - 5,"cy":_vm.height - 5,"r":"2"}}),_vm._v(" "),_c('circle',{attrs:{"fill":_vm.mergedColor[1],"cx":"5","cy":_vm.height - 5,"r":"2"}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("10, 4 " + (_vm.width - 10) + ", 4")}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("10, " + (_vm.height - 4) + " " + (_vm.width - 10) + ", " + (_vm.height - 4))}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("5, 70 5, " + (_vm.height - 70))}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 5) + ", 70 " + (_vm.width - 5) + ", " + (_vm.height - 70))}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":"3, 10, 3, 50"}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":"7, 30 7, 80"}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 3) + ", 10 " + (_vm.width - 3) + ", 50")}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 7) + ", 30 " + (_vm.width - 7) + ", 80")}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("3, " + (_vm.height - 10) + " 3, " + (_vm.height - 50))}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":("7, " + (_vm.height - 30) + " 7, " + (_vm.height - 80))}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 3) + ", " + (_vm.height - 10) + " " + (_vm.width - 3) + ", " + (_vm.height - 50))}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"points":((_vm.width - 7) + ", " + (_vm.height - 30) + " " + (_vm.width - 7) + ", " + (_vm.height - 80))}})]),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox6/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox6_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "fli6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "g3Gj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "g3jD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gUFK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hbpv":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABeUlEQVRYR+2XPzIEQRSHt29AlVRxBKkMgdQ6gc3IcAJugIhsSUjXDShVSugInMAmQjW+31b31pthdgzmz9Jd9apmdnpff+/Xr9+8cZ2WDdcyns70AyVJMo+qd9gCdo+tO+def0vp0goBtMPipwZgFaCbJoG2WfwsAuVtAVs2XQoBfEwwuz6gTfJrUCa/vpPUExUCKDEAtwCtRCB77P+HQkTZNYm5jwKPIQ+KTlklCuH0yb8axJFKzKaAck9KBNIeTcqDP6UQwSwRbx+bwU44LKrqqfFppa5KIfwesvpBIADow/oRKCpUkH8xh4pqWFQoq9A1pUadw2j8pA6pD97wflRR94zTLa7PTXld5vmDed7jWhV4iHUzrYv8HPm5zzxb/GqlVmlXZMNsk06Uc/x+ha1hl1iPOW9Zx3n3vteS/wH/E3RqjCu1n6joNbnOIaiLELgFemkAJgSunZjVjQWyTVmdCo3WCi9aC2Q/8OoGGh+c0h+KVZO2DugdTiOPNAiLOpQAAAAASUVORK5CYII="

/***/ }),

/***/ "hi57":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ivFw":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABiklEQVRIicWW4ZGDIBBGLSElpAQ6uHRw6eAowQ5MB5cOtIOzAy3BEuwg6eDdD3YnhIBiPL2dYVT82AcsLBTFRgZY0lZvxS2AfgLMOw4PwCdQAbU8v4DDZmDgAtwSvm5A9edgoPHajcBVOnKVb7VOZqVdDRbnamVCY4G7aGrguAocOLAzWuNpT8EsLQbraPtZcfEUklbgb4M1fudMsPGdrwGrmRyw30be76/YZeDT3uBBtDYTqnG9Bx1/BuP23EesSENdXF0mWBdXA5ynwEPqp0CP3nRF97AH9Q+G6e00AQXZQkDp1X3zmpcPuJyt1kp9NL7Z4GDK1TrgR56x/G1xW2uM/MsHewsn6kjqS55HWeFm4yWcS8EWF3MjkIvUGU9jAngdgy8F61HX8TiLK/nul8DfBedoQ/hV4OMeYMNjlKPUN1uDe2Tr4UarHbntAQa5UfrQvcBR+1dwKiEANIGzqQtcG2iTeRoY9U6lycAvlnhOjmnLhNYmtMcCd3RVO5fzXIw3s7nzeCsbfgGjuRlvPzSHgwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "jWDM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mwHJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/index.js
var lib = __webpack_require__("z0b2");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/charts/src/main.vue
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvCharts',
  mixins: [autoResize["a" /* default */]],
  props: {
    option: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    var id = Object(util["e" /* uuid */])();
    return {
      ref: 'charts-container-' + id,
      chartRef: 'chart-' + id,

      chart: null
    };
  },

  watch: {
    option: function option() {
      var chart = this.chart,
          option = this.option;


      if (!chart) return;

      if (!option) option = {};

      chart.setOption(option, true);
    }
  },
  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var initChart = this.initChart;


      initChart();
    },
    initChart: function initChart() {
      var $refs = this.$refs,
          chartRef = this.chartRef,
          option = this.option;


      var chart = this.chart = new lib_default.a($refs[chartRef]);

      if (!option) return;

      chart.setOption(option);
    },
    onResize: function onResize() {
      var chart = this.chart;


      if (!chart) return;

      chart.resize();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8268c5c6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/charts/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-charts-container"},[_c('div',{ref:_vm.chartRef,staticClass:"charts-canvas-container"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/charts/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var charts_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "n4z2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var lib_util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(lib_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox9/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var main = ({
  name: 'DvBorderBox9',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    var id = Object(util["e" /* uuid */])();
    return {
      ref: 'border-box-9',

      gradientId: 'border-box-9-gradient-' + id,
      maskId: 'border-box-9-mask-' + id,

      defaultColor: ['#11eefd', '#0078d2'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(lib_util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6beca4bb","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox9/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-9"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('linearGradient',{attrs:{"id":_vm.gradientId,"x1":"0%","y1":"0%","x2":"100%","y2":"100%"}},[_c('animate',{attrs:{"attributeName":"x1","values":"0%;100%;0%","dur":"10s","begin":"0s","repeatCount":"indefinite"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"x2","values":"100%;0%;100%","dur":"10s","begin":"0s","repeatCount":"indefinite"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0%","stop-color":_vm.mergedColor[0]}},[_c('animate',{attrs:{"attributeName":"stop-color","values":((_vm.mergedColor[0]) + ";" + (_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"dur":"10s","begin":"0s","repeatCount":"indefinite"}})]),_vm._v(" "),_c('stop',{attrs:{"offset":"100%","stop-color":_vm.mergedColor[1]}},[_c('animate',{attrs:{"attributeName":"stop-color","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0]) + ";" + (_vm.mergedColor[1])),"dur":"10s","begin":"0s","repeatCount":"indefinite"}})])],1),_vm._v(" "),_c('mask',{attrs:{"id":_vm.maskId}},[_c('polyline',{attrs:{"stroke":"#fff","stroke-width":"3","fill":"transparent","points":("8, " + (_vm.height * 0.4) + " 8, 3, " + (_vm.width * 0.4 + 7) + ", 3")}}),_vm._v(" "),_c('polyline',{attrs:{"fill":"#fff","points":("8, " + (_vm.height * 0.15) + " 8, 3, " + (_vm.width * 0.1 + 7) + ", 3\n            " + (_vm.width * 0.1) + ", 8 14, 8 14, " + (_vm.height * 0.15 - 7) + "\n          ")}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":"#fff","stroke-width":"3","fill":"transparent","points":((_vm.width * 0.5) + ", 3 " + (_vm.width - 3) + ", 3, " + (_vm.width - 3) + ", " + (_vm.height * 0.25))}}),_vm._v(" "),_c('polyline',{attrs:{"fill":"#fff","points":("\n            " + (_vm.width * 0.52) + ", 3 " + (_vm.width * 0.58) + ", 3\n            " + (_vm.width * 0.58 - 7) + ", 9 " + (_vm.width * 0.52 + 7) + ", 9\n          ")}}),_vm._v(" "),_c('polyline',{attrs:{"fill":"#fff","points":("\n            " + (_vm.width * 0.9) + ", 3 " + (_vm.width - 3) + ", 3 " + (_vm.width - 3) + ", " + (_vm.height * 0.1) + "\n            " + (_vm.width - 9) + ", " + (_vm.height * 0.1 - 7) + " " + (_vm.width - 9) + ", 9 " + (_vm.width * 0.9 + 7) + ", 9\n          ")}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":"#fff","stroke-width":"3","fill":"transparent","points":("8, " + (_vm.height * 0.5) + " 8, " + (_vm.height - 3) + " " + (_vm.width * 0.3 + 7) + ", " + (_vm.height - 3))}}),_vm._v(" "),_c('polyline',{attrs:{"fill":"#fff","points":("\n            8, " + (_vm.height * 0.55) + " 8, " + (_vm.height * 0.7) + "\n            2, " + (_vm.height * 0.7 - 7) + " 2, " + (_vm.height * 0.55 + 7) + "\n          ")}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":"#fff","stroke-width":"3","fill":"transparent","points":((_vm.width * 0.35) + ", " + (_vm.height - 3) + " " + (_vm.width - 3) + ", " + (_vm.height - 3) + " " + (_vm.width - 3) + ", " + (_vm.height * 0.35))}}),_vm._v(" "),_c('polyline',{attrs:{"fill":"#fff","points":("\n            " + (_vm.width * 0.92) + ", " + (_vm.height - 3) + " " + (_vm.width - 3) + ", " + (_vm.height - 3) + " " + (_vm.width - 3) + ", " + (_vm.height * 0.8) + "\n            " + (_vm.width - 9) + ", " + (_vm.height * 0.8 + 7) + " " + (_vm.width - 9) + ", " + (_vm.height - 9) + " " + (_vm.width * 0.92 + 7) + ", " + (_vm.height - 9) + "\n          ")}})])],1),_vm._v(" "),_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      15, 9 " + (_vm.width * 0.1 + 1) + ", 9 " + (_vm.width * 0.1 + 4) + ", 6 " + (_vm.width * 0.52 + 2) + ", 6\n      " + (_vm.width * 0.52 + 6) + ", 10 " + (_vm.width * 0.58 - 7) + ", 10 " + (_vm.width * 0.58 - 2) + ", 6\n      " + (_vm.width * 0.9 + 2) + ", 6 " + (_vm.width * 0.9 + 6) + ", 10 " + (_vm.width - 10) + ", 10 " + (_vm.width - 10) + ", " + (_vm.height * 0.1 - 6) + "\n      " + (_vm.width - 6) + ", " + (_vm.height * 0.1 - 1) + " " + (_vm.width - 6) + ", " + (_vm.height * 0.8 + 1) + " " + (_vm.width - 10) + ", " + (_vm.height * 0.8 + 6) + "\n      " + (_vm.width - 10) + ", " + (_vm.height - 10) + " " + (_vm.width * 0.92 + 7) + ", " + (_vm.height - 10) + "  " + (_vm.width * 0.92 + 2) + ", " + (_vm.height - 6) + "\n      11, " + (_vm.height - 6) + " 11, " + (_vm.height * 0.15 - 2) + " 15, " + (_vm.height * 0.15 - 7) + "\n    ")}}),_vm._v(" "),_c('rect',{attrs:{"x":"0","y":"0","width":_vm.width,"height":_vm.height,"fill":("url(#" + _vm.gradientId + ")"),"mask":("url(#" + _vm.maskId + ")")}})]),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox9/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox9_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "nHoh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var lib_util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(lib_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/color/lib/index.js
var lib = __webpack_require__("glc7");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox11/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var main = ({
  name: 'DvBorderBox11',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    titleWidth: {
      type: Number,
      default: 250
    },
    title: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    var id = Object(util["e" /* uuid */])();
    return {
      ref: 'border-box-11',
      filterId: 'border-box-11-filterId-' + id,

      defaultColor: ['#8aaafb', '#1f33a2'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(lib_util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    },

    fade: lib["fade"]
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2fa9c578","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox11/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-11"},[_c('svg',{staticClass:"dv-border-svg-container",attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('filter',{attrs:{"id":_vm.filterId,"height":"150%","width":"150%","x":"-25%","y":"-25%"}},[_c('feMorphology',{attrs:{"operator":"dilate","radius":"2","in":"SourceAlpha","result":"thicken"}}),_vm._v(" "),_c('feGaussianBlur',{attrs:{"in":"thicken","stdDeviation":"3","result":"blurred"}}),_vm._v(" "),_c('feFlood',{attrs:{"flood-color":_vm.mergedColor[1],"result":"glowColor"}}),_vm._v(" "),_c('feComposite',{attrs:{"in":"glowColor","in2":"blurred","operator":"in","result":"softGlowColored"}}),_vm._v(" "),_c('feMerge',[_c('feMergeNode',{attrs:{"in":"softGlowColored"}}),_vm._v(" "),_c('feMergeNode',{attrs:{"in":"SourceGraphic"}})],1)],1)]),_vm._v(" "),_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      20, 32 " + (_vm.width * 0.5 - _vm.titleWidth / 2) + ", 32 " + (_vm.width * 0.5 - _vm.titleWidth / 2 + 20) + ", 53\n      " + (_vm.width * 0.5 + _vm.titleWidth / 2 - 20) + ", 53 " + (_vm.width * 0.5 + _vm.titleWidth / 2) + ", 32\n      " + (_vm.width - 20) + ", 32 " + (_vm.width - 8) + ", 48 " + (_vm.width - 8) + ", " + (_vm.height - 25) + " " + (_vm.width - 20) + ", " + (_vm.height - 8) + "\n      20, " + (_vm.height - 8) + " 8, " + (_vm.height - 25) + " 8, 50\n    ")}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"filter":("url(#" + _vm.filterId + ")"),"points":("\n        " + ((_vm.width - _vm.titleWidth) / 2) + ", 30\n        20, 30 7, 50 7, " + (50 + (_vm.height - 167) / 2) + "\n        13, " + (55 + (_vm.height - 167) / 2) + " 13, " + (135 + (_vm.height - 167) / 2) + "\n        7, " + (140 + (_vm.height - 167) / 2) + " 7, " + (_vm.height - 27) + "\n        20, " + (_vm.height - 7) + " " + (_vm.width - 20) + ", " + (_vm.height - 7) + " " + (_vm.width - 7) + ", " + (_vm.height - 27) + "\n        " + (_vm.width - 7) + ", " + (140 + (_vm.height - 167) / 2) + " " + (_vm.width - 13) + ", " + (135 + (_vm.height - 167) / 2) + "\n        " + (_vm.width - 13) + ", " + (55 + (_vm.height - 167) / 2) + " " + (_vm.width - 7) + ", " + (50 + (_vm.height - 167) / 2) + "\n        " + (_vm.width - 7) + ", 50 " + (_vm.width - 20) + ", 30 " + ((_vm.width + _vm.titleWidth) / 2) + ", 30\n        " + ((_vm.width + _vm.titleWidth) / 2 - 20) + ", 7 " + ((_vm.width - _vm.titleWidth) / 2 + 20) + ", 7\n        " + ((_vm.width - _vm.titleWidth) / 2) + ", 30 " + ((_vm.width - _vm.titleWidth) / 2 + 20) + ", 52\n        " + ((_vm.width + _vm.titleWidth) / 2 - 20) + ", 52 " + ((_vm.width + _vm.titleWidth) / 2) + ", 30\n      ")}}),_vm._v(" "),_c('polygon',{attrs:{"stroke":_vm.mergedColor[0],"fill":"transparent","points":("\n        " + ((_vm.width + _vm.titleWidth) / 2 - 5) + ", 30 " + ((_vm.width + _vm.titleWidth) / 2 - 21) + ", 11\n        " + ((_vm.width + _vm.titleWidth) / 2 - 27) + ", 11 " + ((_vm.width + _vm.titleWidth) / 2 - 8) + ", 34\n      ")}}),_vm._v(" "),_c('polygon',{attrs:{"stroke":_vm.mergedColor[0],"fill":"transparent","points":("\n        " + ((_vm.width - _vm.titleWidth) / 2 + 5) + ", 30 " + ((_vm.width - _vm.titleWidth) / 2 + 22) + ", 49\n        " + ((_vm.width - _vm.titleWidth) / 2 + 28) + ", 49 " + ((_vm.width - _vm.titleWidth) / 2 + 8) + ", 26\n      ")}}),_vm._v(" "),_c('polygon',{attrs:{"stroke":_vm.mergedColor[0],"fill":_vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 30),"filter":("url(#" + _vm.filterId + ")"),"points":("\n        " + ((_vm.width + _vm.titleWidth) / 2 - 11) + ", 37 " + ((_vm.width + _vm.titleWidth) / 2 - 32) + ", 11\n        " + ((_vm.width - _vm.titleWidth) / 2 + 23) + ", 11 " + ((_vm.width - _vm.titleWidth) / 2 + 11) + ", 23\n        " + ((_vm.width - _vm.titleWidth) / 2 + 33) + ", 49 " + ((_vm.width + _vm.titleWidth) / 2 - 22) + ", 49\n      ")}}),_vm._v(" "),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"1","points":("\n        " + ((_vm.width - _vm.titleWidth) / 2 - 10) + ", 37 " + ((_vm.width - _vm.titleWidth) / 2 - 31) + ", 37\n        " + ((_vm.width - _vm.titleWidth) / 2 - 25) + ", 46 " + ((_vm.width - _vm.titleWidth) / 2 - 4) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"1;0.7;1","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_vm._v(" "),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"0.7","points":("\n        " + ((_vm.width - _vm.titleWidth) / 2 - 40) + ", 37 " + ((_vm.width - _vm.titleWidth) / 2 - 61) + ", 37\n        " + ((_vm.width - _vm.titleWidth) / 2 - 55) + ", 46 " + ((_vm.width - _vm.titleWidth) / 2 - 34) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"0.7;0.4;0.7","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_vm._v(" "),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"0.5","points":("\n        " + ((_vm.width - _vm.titleWidth) / 2 - 70) + ", 37 " + ((_vm.width - _vm.titleWidth) / 2 - 91) + ", 37\n        " + ((_vm.width - _vm.titleWidth) / 2 - 85) + ", 46 " + ((_vm.width - _vm.titleWidth) / 2 - 64) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"0.5;0.2;0.5","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_vm._v(" "),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"1","points":("\n        " + ((_vm.width + _vm.titleWidth) / 2 + 30) + ", 37 " + ((_vm.width + _vm.titleWidth) / 2 + 9) + ", 37\n        " + ((_vm.width + _vm.titleWidth) / 2 + 3) + ", 46 " + ((_vm.width + _vm.titleWidth) / 2 + 24) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"1;0.7;1","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_vm._v(" "),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"0.7","points":("\n        " + ((_vm.width + _vm.titleWidth) / 2 + 60) + ", 37 " + ((_vm.width + _vm.titleWidth) / 2 + 39) + ", 37\n        " + ((_vm.width + _vm.titleWidth) / 2 + 33) + ", 46 " + ((_vm.width + _vm.titleWidth) / 2 + 54) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"0.7;0.4;0.7","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_vm._v(" "),_c('polygon',{attrs:{"filter":("url(#" + _vm.filterId + ")"),"fill":_vm.mergedColor[0],"opacity":"0.5","points":("\n        " + ((_vm.width + _vm.titleWidth) / 2 + 90) + ", 37 " + ((_vm.width + _vm.titleWidth) / 2 + 69) + ", 37\n        " + ((_vm.width + _vm.titleWidth) / 2 + 63) + ", 46 " + ((_vm.width + _vm.titleWidth) / 2 + 84) + ", 46\n      ")}},[_c('animate',{attrs:{"attributeName":"opacity","values":"0.5;0.2;0.5","dur":"2s","begin":"0s","repeatCount":"indefinite"}})]),_vm._v(" "),_c('text',{staticClass:"dv-border-box-11-title",attrs:{"x":("" + (_vm.width / 2)),"y":"32","fill":"#fff","font-size":"18","text-anchor":"middle","dominant-baseline":"middle"}},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")]),_vm._v(" "),_c('polygon',{attrs:{"fill":_vm.mergedColor[0],"filter":("url(#" + _vm.filterId + ")"),"points":("\n        7, " + (53 + (_vm.height - 167) / 2) + " 11, " + (57 + (_vm.height - 167) / 2) + "\n        11, " + (133 + (_vm.height - 167) / 2) + " 7, " + (137 + (_vm.height - 167) / 2) + "\n      ")}}),_vm._v(" "),_c('polygon',{attrs:{"fill":_vm.mergedColor[0],"filter":("url(#" + _vm.filterId + ")"),"points":("\n        " + (_vm.width - 7) + ", " + (53 + (_vm.height - 167) / 2) + " " + (_vm.width - 11) + ", " + (57 + (_vm.height - 167) / 2) + "\n        " + (_vm.width - 11) + ", " + (133 + (_vm.height - 167) / 2) + " " + (_vm.width - 7) + ", " + (137 + (_vm.height - 167) / 2) + "\n      ")}})]),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox11/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox11_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "nZu5":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACOklEQVRYR82XjU3DMBCFmwmACegGwASECSgTECYAJqBMAExAOwEwAWUDNqBMQJkgvCfZKDT2/ThFqiUrVWOfv3s+3znVaMtatWU8oyKgtm0P4cgpeo3O37vBsRWe7+gL9Leqqvh0NRcQQM5hfYo+Nq6y5HiAzY3jbQoFRR6DGlbb3XEEOwMY1RObqhBgGlggzNDG7bwG1EwyJAJtEKbLcCFBZYEAU8PK61BZMvNPcgEvAX04gtfLzZg6AhS38U9LAkGdKUbdGFb5xJhn9GiYx3+Cvm+YewsgrmMC0tT5hhUe5/vUwnDoCv/fKVArzN9TgWCMHj4pxii3eISNMchUQIV/W2/LYIheXwpASakzSmlb/wAgqikCLfD2OAcEA2ruinPhHGPqS3CO5aXWgFqPAWVrR4ByOZjaMgnoBR4xxsztv4F6EmtkmwDi6TnILJQ8qhIUgFwhkNqyGRbgNSPXxFrUnWTIR3OEQKMFNQdI1Z1ZmbVIy0O8uLEWxstbysGecymFaGCJviOoRCgmNZ6gXgtJkclVgmG2H6/Xs1wt07YtQhCImTaqRVWoMJ9a620XJ+SALCppC0rvk+pkgfjCWNNKoXo1LBrSboxaXSsBEmuhWpcMxdYDpRZmFShsHwN16EXflL9MQJ2Y4umT0kFKLQZws37vyclqBgpQPM486lYowtRaEu3CuYCcUG4Y8dhLkRq+ZCWlimCKgRSlimEGAWWgBsEMBupAxS+HiSeAU2HhDmpPFiwZu3VAP9qP6yXvcyxnAAAAAElFTkSuQmCC"

/***/ }),

/***/ "nf3M":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACWklEQVRYR+2YjVHCMBiG6QTCBMoGMIEwgbhBnUCdQJhAnUDdACcQJhAmEDeACfB9eokXStO0pN5xHrnrHeXLz5P3+0kgaR1ZS46Mp3UCCnlkR6HtdptqwKOedmhgpH2t8ddJkszy8+SB6HgWuVjV4XMBDUJA26qzNdDv/wEtpQouzbcLfXF+gGK1FHqXf0cKcnz8oede70++RdUP221NqFpAbwJItRC7/zIZMS0BGsv24NhRE8gVmaR5yNqeHjZ4p4fEqQXE3As9ADEZruLd11iIttGTCsILTyejaO+vs+xba420yMIoiwtRxW4ISJTP4lB9ANrbZL4OxaT90Lgn1Xq+4rqSjYLoVbspIBtzuI4kKGso1LVK5Ts2BdQ3rkKBKiUg20ARtQ+IeCgckJuEPsRNm5jQ58+AOta81phOHaBnDSA9S5upU2OyxRzML6Exjr1T5DafQvjZWwidSUf6vDFAbIBgrtqII1y805qIoYUm7jtVvRKQxhReDpsAatnJBVX1+lI7qCn9gyIfm6I3k93Nphv1fZWtituo5hTFPXchrU+h0qDWwlTdK8c3c+KI98BBGzxaylxGUBddNzgK3AxkEdTkyMBGphHsvkZWTnzGJmLIHhnUIao0UKGGyzlC9jYcC2TvTUBwTakCY2FnAhrmyWOBsuImV7Hjy5AsBfaJxo/d72OA8rfKA3iyGKVA/rouBogYmBZkXF2wnetxDFBW+gUUc4cCPlPa7uLgH4pU55onvE857t1dH1AqA/Un+OvVASKgg/1L/LjUXJSMrJ3+/QhF/EmhkEI/UEU0NJBnfTQAAAAASUVORK5CYII="

/***/ }),

/***/ "oKBY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "owW+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/define-properties.js
var define_properties = __webpack_require__("HSQo");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__("zL8q");
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./src/store/index.js + 5 modules
var store = __webpack_require__("IcnI");

// CONCATENATED MODULE: ./src/utils/request.js






var host = window.location.host;
// host = 'http://' + host
host =  true ? 'http://' + host : 'http://10.100.103.204:10003/';
// host = process.env.NODE_ENV == 'production' ? 'http://' + host : 'http://subway.nething.com/'
var service = axios_default.a.create({
  baseURL: host, // api的base_url
  withCredentials: true,
  timeout: 100000 // request timeout
});
// 请求前进行统一处理
service.interceptors.request.use(function (config) {
  vue_esm["default"].globalEvBus.$emit('showLoading');
  return config;
}, function (error) {
  // 对请求错误做些什么
  return promise_default.a.reject(error);
});

// 请求后进行统一处理
service.interceptors.response.use(function (response) {
  vue_esm["default"].globalEvBus.$emit('hideLoading');
  if (response.data.status == 0 && response.data.msg == '校验失败，请重新登录') {
    store["a" /* default */].dispatch('FedLogOut').then(function () {
      location.reload(); // 为了重新实例化vue-router对象 避免bug
    });
  } else {
    if (response.data.status == 0 && response.data.msg != '') {
      Object(element_ui_common["Message"])({
        message: response.data.msg,
        type: 'error',
        duration: 3 * 1000
      });
    }
    return response;
  }
}, function (error) {
  vue_esm["default"].globalEvBus.$emit('hideLoading');
  Object(element_ui_common["Message"])({
    message: '请求超时，请重试！',
    type: 'error',
    duration: 3 * 1000
  });
  return promise_default.a.reject(error);
});
define_properties_default()(vue_esm["default"].prototype, {
  hostURL: {
    get: function get() {
      return host;
    }
  },
  request: {
    get: function get() {
      return service;
    }
  }
});
/* harmony default export */ var request = (service);
// CONCATENATED MODULE: ./src/api/login/login.js
/* harmony export (immutable) */ __webpack_exports__["b"] = loginByUsername;
/* harmony export (immutable) */ __webpack_exports__["c"] = logout;
/* harmony export (immutable) */ __webpack_exports__["a"] = getUserInfo;



function loginByUsername(username, password) {
  var data = {
    username: username,
    password: password
  };
  return request({
    url: '/login/login',
    method: 'post',
    data: data
  });
}

function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  });
}

function getUserInfo(data) {
  return request({
    url: '/login/userInfo',
    method: 'get',
    params: extends_default()({}, data)
  });
}

/***/ }),

/***/ "phTY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "q1L4":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHWSURBVHja7JjPUQIxFIc/KhArQCsAD3sG7s6IFSgVCBWIFchW4FqBMrN34OzBtQOowFgBXn47E5kEE3Adndl32WTekv2SvL80NpsNf0kaNVAM0PnNi+udEXAP3AETjy7VOFT3RfI0iQJaAN3y/R/SBQM1gbamH0DhWLijcazuBGhp/gaYEKDCAloCPcfCC41jdRPgVnMDHIcA2RZeAGfAM3ABrLXLBXC0Q9cCTj26rm2/sUDooyvgWh9oAnM9+4IudQCvAbqDgIw8ZKVdTq1Fja6hCNBN9ORQoEpDTg1UA9VANdAvAS0VWFFw7Cj17AWUWqF/HykUvdsCWQhuaNdWoUBvVjmxj3RUoPUcugwYlyVIKJCxkmusDICHrWTqOr0+YKq0ob42sJ3ZL5V8Ww6os6qAyivOgCuHR23XQ6UM8zTJqgC60ym8e1zcBzTL02QQCjSMsKFCJzT3AE2BG0+R3wgBWno8ZJf0PECZNue6zmAgtCsTEQCNDJoIqHWeJidV2NCjauiVw5tsqBnwZP8uT5PrKoCMuo2R1e6EyGmeJquq4lDZbvs8alvGwHRXHCp7qUNkqPyXfbPWWDYa3dsfIgPZVU8Zfq3Tm9jhxAtU/z/0H4A+BwAtLVLIpYwOcgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "rF/k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var lib_util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/flylineChart/src/main.vue




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var main = ({
  name: 'DvFlylineChart',
  mixins: [autoResize["a" /* default */]],
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    dev: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var id = Object(lib_util["e" /* uuid */])();
    return {
      ref: 'dv-flyline-chart',
      unique: Math.random(),
      maskId: 'flyline-mask-id-' + id,
      maskCircleId: 'mask-circle-id-' + id,
      gradientId: 'gradient-id-' + id,
      gradient2Id: 'gradient2-id-' + id,

      defaultConfig: {
        /**
         * @description Flyline chart center point
         * @type {Array<Number>}
         * @default centerPoint = [0, 0]
         */
        centerPoint: [0, 0],
        /**
         * @description Flyline start points
         * @type {Array<Array<Number>>}
         * @default points = []
         * @example points = [[10, 10], [100, 100]]
         */
        points: [],
        /**
         * @description Flyline width
         * @type {Number}
         * @default lineWidth = 1
         */
        lineWidth: 1,
        /**
         * @description Orbit color
         * @type {String}
         * @default orbitColor = 'rgba(103, 224, 227, .2)'
         */
        orbitColor: 'rgba(103, 224, 227, .2)',
        /**
         * @description Flyline color
         * @type {String}
         * @default orbitColor = '#ffde93'
         */
        flylineColor: '#ffde93',
        /**
         * @description K value
         * @type {Number}
         * @default k = -0.5
         * @example k = -1 ~ 1
         */
        k: -0.5,
        /**
         * @description Flyline curvature
         * @type {Number}
         * @default curvature = 5
         */
        curvature: 5,
        /**
         * @description Flyline radius
         * @type {Number}
         * @default flylineRadius = 100
         */
        flylineRadius: 100,
        /**
         * @description Flyline animation duration
         * @type {Array<Number>}
         * @default duration = [20, 30]
         */
        duration: [20, 30],
        /**
         * @description Relative points position
         * @type {Boolean}
         * @default relative = true
         */
        relative: true,
        /**
         * @description Back ground image url
         * @type {String}
         * @default bgImgUrl = ''
         * @example bgImgUrl = './img/bg.jpg'
         */
        bgImgUrl: '',
        /**
         * @description Text configuration
         * @type {Object}
         */
        text: {
          /**
           * @description Text offset
           * @type {Array<Number>}
           * @default offset = [0, 15]
           */
          offset: [0, 15],
          /**
           * @description Text color
           * @type {String}
           * @default color = '#ffdb5c'
           */
          color: '#ffdb5c',
          /**
           * @description Text font size
           * @type {Number}
           * @default fontSize = 12
           */
          fontSize: 12
        },
        /**
         * @description Halo configuration
         * @type {Object}
         */
        halo: {
          /**
           * @description Weather to show halo
           * @type {Boolean}
           * @default show = true
           * @example show = true | false
           */
          show: true,
          /**
           * @description Halo animation duration (10 = 1s)
           * @type {Number}
           * @default duration = 30
           */
          duration: 30,
          /**
           * @description Halo color
           * @type {String}
           * @default color = '#fb7293'
           */
          color: '#fb7293',
          /**
           * @description Halo max radius
           * @type {Number}
           * @default radius = 120
           */
          radius: 120
        },
        /**
         * @description Center point img configuration
         * @type {Object}
         */
        centerPointImg: {
          /**
           * @description Center point img width
           * @type {Number}
           * @default width = 40
           */
          width: 40,
          /**
           * @description Center point img height
           * @type {Number}
           * @default height = 40
           */
          height: 40,
          /**
           * @description Center point img url
           * @type {String}
           * @default url = ''
           */
          url: ''
        },
        /**
         * @description Points img configuration
         * @type {Object}
         * @default radius = 120
         */
        pointsImg: {
          /**
           * @description Points img width
           * @type {Number}
           * @default width = 15
           */
          width: 15,
          /**
           * @description Points img height
           * @type {Number}
           * @default height = 15
           */
          height: 15,
          /**
           * @description Points img url
           * @type {String}
           * @default url = ''
           */
          url: ''
        }
      },

      mergedConfig: null,

      paths: [],
      lengths: [],
      times: [],
      texts: []
    };
  },

  watch: {
    config: function config() {
      var calcData = this.calcData;


      calcData();
    }
  },
  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var calcData = this.calcData;


      calcData();
    },
    onResize: function onResize() {
      var calcData = this.calcData;


      calcData();
    },
    calcData: function calcData() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var mergeConfig, createFlylinePaths, calcLineLengths, calcTimes, calcTexts;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mergeConfig = _this.mergeConfig, createFlylinePaths = _this.createFlylinePaths, calcLineLengths = _this.calcLineLengths;


                mergeConfig();

                createFlylinePaths();

                _context.next = 5;
                return calcLineLengths();

              case 5:
                calcTimes = _this.calcTimes, calcTexts = _this.calcTexts;


                calcTimes();

                calcTexts();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    mergeConfig: function mergeConfig() {
      var config = this.config,
          defaultConfig = this.defaultConfig;


      var mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {});

      var points = mergedConfig.points;


      mergedConfig.points = points.map(function (item) {
        if (item instanceof Array) {
          return { position: item, text: '' };
        }

        return item;
      });

      this.mergedConfig = mergedConfig;
    },
    createFlylinePaths: function createFlylinePaths() {
      var getPath = this.getPath,
          mergedConfig = this.mergedConfig,
          width = this.width,
          height = this.height;
      var centerPoint = mergedConfig.centerPoint,
          points = mergedConfig.points,
          relative = mergedConfig.relative;


      points = points.map(function (_ref) {
        var position = _ref.position;
        return position;
      });

      if (relative) {
        centerPoint = [width * centerPoint[0], height * centerPoint[1]];
        points = points.map(function (_ref2) {
          var _ref3 = slicedToArray_default()(_ref2, 2),
              x = _ref3[0],
              y = _ref3[1];

          return [width * x, height * y];
        });
      }

      this.paths = points.map(function (point) {
        return getPath(centerPoint, point);
      });
    },
    getPath: function getPath(center, point) {
      var getControlPoint = this.getControlPoint;


      var controlPoint = getControlPoint(center, point);

      return [point, controlPoint, center];
    },
    getControlPoint: function getControlPoint(_ref4, _ref5) {
      var _ref7 = slicedToArray_default()(_ref4, 2),
          sx = _ref7[0],
          sy = _ref7[1];

      var _ref6 = slicedToArray_default()(_ref5, 2),
          ex = _ref6[0],
          ey = _ref6[1];

      var getKLinePointByx = this.getKLinePointByx,
          mergedConfig = this.mergedConfig;
      var curvature = mergedConfig.curvature,
          k = mergedConfig.k;
      var mx = (sx + ex) / 2,
          my = (sy + ey) / 2;


      var distance = Object(lib_util["b" /* getPointDistance */])([sx, sy], [ex, ey]);

      var targetLength = distance / curvature;
      var disDived = targetLength / 2;

      var dx = mx,
          dy = my;


      do {
        dx += disDived;
        dy = getKLinePointByx(k, [mx, my], dx)[1];
      } while (Object(lib_util["b" /* getPointDistance */])([mx, my], [dx, dy]) < targetLength);

      return [dx, dy];
    },
    getKLinePointByx: function getKLinePointByx(k, _ref8, x) {
      var _ref9 = slicedToArray_default()(_ref8, 2),
          lx = _ref9[0],
          ly = _ref9[1];

      var y = ly - k * lx + k * x;

      return [x, y];
    },
    calcLineLengths: function calcLineLengths() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var $nextTick, paths, $refs;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                $nextTick = _this2.$nextTick, paths = _this2.paths, $refs = _this2.$refs;
                _context2.next = 3;
                return $nextTick();

              case 3:

                _this2.lengths = paths.map(function (foo, i) {
                  return $refs['path' + i][0].getTotalLength();
                });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    calcTimes: function calcTimes() {
      var _mergedConfig = this.mergedConfig,
          duration = _mergedConfig.duration,
          points = _mergedConfig.points;


      this.times = points.map(function (foo) {
        return lib_util["d" /* randomExtend */].apply(undefined, toConsumableArray_default()(duration)) / 10;
      });
    },
    calcTexts: function calcTexts() {
      var points = this.mergedConfig.points;


      this.texts = points.map(function (_ref10) {
        var text = _ref10.text;
        return text;
      });
    },
    consoleClickPos: function consoleClickPos(_ref11) {
      var offsetX = _ref11.offsetX,
          offsetY = _ref11.offsetY;
      var width = this.width,
          height = this.height,
          dev = this.dev;


      if (!dev) return;

      var relativeX = (offsetX / width).toFixed(2);
      var relativeY = (offsetY / height).toFixed(2);

      console.warn('dv-flyline-chart DEV: \n Click Position is [' + offsetX + ', ' + offsetY + '] \n Relative Position is [' + relativeX + ', ' + relativeY + ']');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-67d026cf","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/flylineChart/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"dv-flyline-chart",staticClass:"dv-flyline-chart",style:(("background-image: url(" + (_vm.mergedConfig ? _vm.mergedConfig.bgImgUrl : '') + ")")),on:{"click":_vm.consoleClickPos}},[(_vm.mergedConfig)?_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('radialGradient',{attrs:{"id":_vm.gradientId,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#fff","stop-opacity":"1"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"100%","stop-color":"#fff","stop-opacity":"0"}})],1),_vm._v(" "),_c('radialGradient',{attrs:{"id":_vm.gradient2Id,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#fff","stop-opacity":"0"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"100%","stop-color":"#fff","stop-opacity":"1"}})],1),_vm._v(" "),(_vm.paths[0])?_c('circle',{attrs:{"id":("circle" + (_vm.paths[0].toString())),"cx":_vm.paths[0][2][0],"cy":_vm.paths[0][2][1]}},[_c('animate',{attrs:{"attributeName":"r","values":("1;" + (_vm.mergedConfig.halo.radius)),"dur":_vm.mergedConfig.halo.duration / 10 + 's',"repeatCount":"indefinite"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"opacity","values":"1;0","dur":_vm.mergedConfig.halo.duration / 10 + 's',"repeatCount":"indefinite"}})]):_vm._e()],1),_vm._v(" "),(_vm.paths[0])?_c('image',{attrs:{"xlink:href":_vm.mergedConfig.centerPointImg.url,"width":_vm.mergedConfig.centerPointImg.width,"height":_vm.mergedConfig.centerPointImg.height,"x":_vm.paths[0][2][0] - _vm.mergedConfig.centerPointImg.width / 2,"y":_vm.paths[0][2][1] - _vm.mergedConfig.centerPointImg.height / 2}}):_vm._e(),_vm._v(" "),_c('mask',{attrs:{"id":("maskhalo" + (_vm.paths[0].toString()))}},[(_vm.paths[0])?_c('use',{attrs:{"xlink:href":("#circle" + (_vm.paths[0].toString())),"fill":("url(#" + _vm.gradient2Id + ")")}}):_vm._e()]),_vm._v(" "),(_vm.paths[0] && _vm.mergedConfig.halo.show)?_c('use',{attrs:{"xlink:href":("#circle" + (_vm.paths[0].toString())),"fill":_vm.mergedConfig.halo.color,"mask":("url(#maskhalo" + (_vm.paths[0].toString()) + ")")}}):_vm._e(),_vm._v(" "),_vm._l((_vm.paths),function(path,i){return _c('g',{key:i},[_c('defs',[_c('path',{ref:("path" + i),refInFor:true,attrs:{"id":("path" + (path.toString())),"d":("M" + (path[0].toString()) + " Q" + (path[1].toString()) + " " + (path[2].toString())),"fill":"transparent"}})]),_vm._v(" "),_c('use',{attrs:{"xlink:href":("#path" + (path.toString())),"stroke-width":_vm.mergedConfig.lineWidth,"stroke":_vm.mergedConfig.orbitColor}}),_vm._v(" "),(_vm.lengths[i])?_c('use',{attrs:{"xlink:href":("#path" + (path.toString())),"stroke-width":_vm.mergedConfig.lineWidth,"stroke":_vm.mergedConfig.flylineColor,"mask":("url(#mask" + _vm.unique + (path.toString()) + ")")}},[_c('animate',{attrs:{"attributeName":"stroke-dasharray","from":("0, " + (_vm.lengths[i])),"to":((_vm.lengths[i]) + ", 0"),"dur":_vm.times[i] || 0,"repeatCount":"indefinite"}})]):_vm._e(),_vm._v(" "),_c('mask',{attrs:{"id":("mask" + _vm.unique + (path.toString()))}},[_c('circle',{attrs:{"cx":"0","cy":"0","r":_vm.mergedConfig.flylineRadius,"fill":("url(#" + _vm.gradientId + ")")}},[_c('animateMotion',{attrs:{"dur":_vm.times[i] || 0,"path":("M" + (path[0].toString()) + " Q" + (path[1].toString()) + " " + (path[2].toString())),"rotate":"auto","repeatCount":"indefinite"}})],1)]),_vm._v(" "),_c('image',{attrs:{"xlink:href":_vm.mergedConfig.pointsImg.url,"width":_vm.mergedConfig.pointsImg.width,"height":_vm.mergedConfig.pointsImg.height,"x":path[0][0] - _vm.mergedConfig.pointsImg.width / 2,"y":path[0][1] - _vm.mergedConfig.pointsImg.height / 2}}),_vm._v(" "),_c('text',{style:(("fontSize:" + (_vm.mergedConfig.text.fontSize) + "px;")),attrs:{"fill":_vm.mergedConfig.text.color,"x":path[0][0] + _vm.mergedConfig.text.offset[0],"y":path[0][1] + _vm.mergedConfig.text.offset[1]}},[_vm._v("\n        "+_vm._s(_vm.texts[i])+"\n      ")])])})],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChart/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var flylineChart_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "sSQA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uMhA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vA0W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var lib_util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(lib_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration10/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var main = ({
  name: 'DvDecoration10',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    var id = Object(util["e" /* uuid */])();
    return {
      ref: 'decoration-10',

      animationId1: 'd10ani1' + id,
      animationId2: 'd10ani2' + id,
      animationId3: 'd10ani3' + id,
      animationId4: 'd10ani4' + id,
      animationId5: 'd10ani5' + id,
      animationId6: 'd10ani6' + id,
      animationId7: 'd10ani7' + id,

      defaultColor: ['#00c2ff', 'rgba(0, 194, 255, 0.3)'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(lib_util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1347d10c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/decoration10/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-decoration-10"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('polyline',{attrs:{"stroke":_vm.mergedColor[1],"stroke-width":"2","points":("0, " + (_vm.height / 2) + " " + _vm.width + ", " + (_vm.height / 2))}}),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"2","points":("5, " + (_vm.height / 2) + " " + (_vm.width * 0.2 - 3) + ", " + (_vm.height / 2)),"stroke-dasharray":("0, " + (_vm.width * 0.2)),"fill":"freeze"}},[_c('animate',{attrs:{"id":_vm.animationId2,"attributeName":"stroke-dasharray","values":("0, " + (_vm.width * 0.2) + ";" + (_vm.width * 0.2) + ", 0;"),"dur":"3s","begin":(_vm.animationId1 + ".end"),"fill":"freeze"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"stroke-dasharray","values":((_vm.width * 0.2) + ", 0;0, " + (_vm.width * 0.2)),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})]),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"2","points":((_vm.width * 0.2 + 3) + ", " + (_vm.height / 2) + " " + (_vm.width * 0.8 - 3) + ", " + (_vm.height / 2)),"stroke-dasharray":("0, " + (_vm.width * 0.6))}},[_c('animate',{attrs:{"id":_vm.animationId4,"attributeName":"stroke-dasharray","values":("0, " + (_vm.width * 0.6) + ";" + (_vm.width * 0.6) + ", 0"),"dur":"3s","begin":(_vm.animationId3 + ".end + 1s"),"fill":"freeze"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"stroke-dasharray","values":((_vm.width * 0.6) + ", 0;0, " + (_vm.width * 0.6)),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})]),_vm._v(" "),_c('polyline',{attrs:{"stroke":_vm.mergedColor[0],"stroke-width":"2","points":((_vm.width * 0.8 + 3) + ", " + (_vm.height / 2) + " " + (_vm.width - 5) + ", " + (_vm.height / 2)),"stroke-dasharray":("0, " + (_vm.width * 0.2))}},[_c('animate',{attrs:{"id":_vm.animationId6,"attributeName":"stroke-dasharray","values":("0, " + (_vm.width * 0.2) + ";" + (_vm.width * 0.2) + ", 0"),"dur":"3s","begin":(_vm.animationId5 + ".end + 1s"),"fill":"freeze"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"stroke-dasharray","values":((_vm.width * 0.2) + ", 0;0, " + (_vm.width * 0.3)),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})]),_vm._v(" "),_c('circle',{attrs:{"cx":"2","cy":_vm.height / 2,"r":"2","fill":_vm.mergedColor[1]}},[_c('animate',{attrs:{"id":_vm.animationId1,"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"begin":("0s;" + _vm.animationId7 + ".end"),"dur":"0.3s","fill":"freeze"}})]),_vm._v(" "),_c('circle',{attrs:{"cx":_vm.width * 0.2,"cy":_vm.height / 2,"r":"2","fill":_vm.mergedColor[1]}},[_c('animate',{attrs:{"id":_vm.animationId3,"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"begin":(_vm.animationId2 + ".end"),"dur":"0.3s","fill":"freeze"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[1])),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})]),_vm._v(" "),_c('circle',{attrs:{"cx":_vm.width * 0.8,"cy":_vm.height / 2,"r":"2","fill":_vm.mergedColor[1]}},[_c('animate',{attrs:{"id":_vm.animationId5,"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"begin":(_vm.animationId4 + ".end"),"dur":"0.3s","fill":"freeze"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[1])),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})]),_vm._v(" "),_c('circle',{attrs:{"cx":_vm.width - 2,"cy":_vm.height / 2,"r":"2","fill":_vm.mergedColor[1]}},[_c('animate',{attrs:{"id":_vm.animationId7,"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"begin":(_vm.animationId6 + ".end"),"dur":"0.3s","fill":"freeze"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[1])),"dur":"0.01s","begin":(_vm.animationId7 + ".end"),"fill":"freeze"}})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/decoration10/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var decoration10_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "vQuI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vThT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox1/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvBorderBox1',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    return {
      ref: 'border-box-1',

      border: ['left-top', 'right-top', 'left-bottom', 'right-bottom'],

      defaultColor: ['#4fd2dd', '#235fa7'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a1217aae","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox1/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-1"},[_c('svg',{staticClass:"border",attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("10, 27 10, " + (_vm.height - 27) + " 13, " + (_vm.height - 24) + " 13, " + (_vm.height - 21) + " 24, " + (_vm.height - 11) + "\n    38, " + (_vm.height - 11) + " 41, " + (_vm.height - 8) + " 73, " + (_vm.height - 8) + " 75, " + (_vm.height - 10) + " 81, " + (_vm.height - 10) + "\n    85, " + (_vm.height - 6) + " " + (_vm.width - 85) + ", " + (_vm.height - 6) + " " + (_vm.width - 81) + ", " + (_vm.height - 10) + " " + (_vm.width - 75) + ", " + (_vm.height - 10) + "\n    " + (_vm.width - 73) + ", " + (_vm.height - 8) + " " + (_vm.width - 41) + ", " + (_vm.height - 8) + " " + (_vm.width - 38) + ", " + (_vm.height - 11) + "\n    " + (_vm.width - 24) + ", " + (_vm.height - 11) + " " + (_vm.width - 13) + ", " + (_vm.height - 21) + " " + (_vm.width - 13) + ", " + (_vm.height - 24) + "\n    " + (_vm.width - 10) + ", " + (_vm.height - 27) + " " + (_vm.width - 10) + ", 27 " + (_vm.width - 13) + ", 25 " + (_vm.width - 13) + ", 21\n    " + (_vm.width - 24) + ", 11 " + (_vm.width - 38) + ", 11 " + (_vm.width - 41) + ", 8 " + (_vm.width - 73) + ", 8 " + (_vm.width - 75) + ", 10\n    " + (_vm.width - 81) + ", 10 " + (_vm.width - 85) + ", 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24")}})]),_vm._v(" "),_vm._l((_vm.border),function(item){return _c('svg',{key:item,class:(item + " border"),attrs:{"width":"150px","height":"150px"}},[_c('polygon',{attrs:{"fill":_vm.mergedColor[0],"points":"6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"}},[_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[0]) + ";" + (_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0])),"dur":"0.5s","begin":"0s","repeatCount":"indefinite"}})]),_vm._v(" "),_c('polygon',{attrs:{"fill":_vm.mergedColor[1],"points":"27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"}},[_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[1]) + ";" + (_vm.mergedColor[0]) + ";" + (_vm.mergedColor[1])),"dur":"0.5s","begin":"0s","repeatCount":"indefinite"}})]),_vm._v(" "),_c('polygon',{attrs:{"fill":_vm.mergedColor[0],"points":"9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"}},[_c('animate',{attrs:{"attributeName":"fill","values":((_vm.mergedColor[0]) + ";" + (_vm.mergedColor[1]) + ";transparent"),"dur":"1s","begin":"0s","repeatCount":"indefinite"}})])])}),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox1/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox1_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "xF9X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox5/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var main = ({
  name: 'DvBorderBox5',
  mixins: [autoResize["a" /* default */]],
  props: {
    color: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    reverse: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data: function data() {
    return {
      ref: 'border-box-5',

      defaultColor: ['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.20)'],

      mergedColor: []
    };
  },

  watch: {
    color: function color() {
      var mergeColor = this.mergeColor;


      mergeColor();
    }
  },
  methods: {
    mergeColor: function mergeColor() {
      var color = this.color,
          defaultColor = this.defaultColor;


      this.mergedColor = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultColor, true), color || []);
    }
  },
  mounted: function mounted() {
    var mergeColor = this.mergeColor;


    mergeColor();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-19060efa","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/borderBox5/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-border-box-5"},[_c('svg',{class:("dv-border-svg-container  " + (_vm.reverse && 'dv-reverse')),attrs:{"width":_vm.width,"height":_vm.height}},[_c('polygon',{attrs:{"fill":_vm.backgroundColor,"points":("\n      10, 22 " + (_vm.width - 22) + ", 22 " + (_vm.width - 22) + ", " + (_vm.height - 86) + " " + (_vm.width - 84) + ", " + (_vm.height - 24) + " 10, " + (_vm.height - 24) + "\n    ")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb5-line-1",attrs:{"stroke":_vm.mergedColor[0],"points":("8, 5 " + (_vm.width - 5) + ", 5 " + (_vm.width - 5) + ", " + (_vm.height - 100) + "\n        " + (_vm.width - 100) + ", " + (_vm.height - 5) + " 8, " + (_vm.height - 5) + " 8, 5")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb5-line-2",attrs:{"stroke":_vm.mergedColor[1],"points":("3, 5 " + (_vm.width - 20) + ", 5 " + (_vm.width - 20) + ", " + (_vm.height - 60) + "\n        " + (_vm.width - 74) + ", " + (_vm.height - 5) + " 3, " + (_vm.height - 5) + " 3, 5")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb5-line-3",attrs:{"stroke":_vm.mergedColor[1],"points":("50, 13 " + (_vm.width - 35) + ", 13")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb5-line-4",attrs:{"stroke":_vm.mergedColor[1],"points":("15, 20 " + (_vm.width - 35) + ", 20")}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb5-line-5",attrs:{"stroke":_vm.mergedColor[1],"points":("15, " + (_vm.height - 20) + " " + (_vm.width - 110) + ", " + (_vm.height - 20))}}),_vm._v(" "),_c('polyline',{staticClass:"dv-bb5-line-6",attrs:{"stroke":_vm.mergedColor[1],"points":("15, " + (_vm.height - 13) + " " + (_vm.width - 110) + ", " + (_vm.height - 13))}})]),_vm._v(" "),_c('div',{staticClass:"border-box-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/borderBox5/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var borderBox5_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "yFI5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/charts/lib/util/index.js
var util = __webpack_require__("9A4f");
var util_default = /*#__PURE__*/__webpack_require__.n(util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/c-render/lib/plugin/util.js
var plugin_util = __webpack_require__("qf0b");
var plugin_util_default = /*#__PURE__*/__webpack_require__.n(plugin_util);

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/util/index.js
var lib_util = __webpack_require__("3e7c");

// EXTERNAL MODULE: ./node_modules/@jiaminghi/data-view/lib/mixin/autoResize.js
var autoResize = __webpack_require__("kN6d");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/@jiaminghi/data-view/lib/components/flylineChartEnhanced/src/main.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var main = ({
  name: 'DvFlylineChartEnhanced',
  mixins: [autoResize["a" /* default */]],
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    dev: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var id = Object(lib_util["e" /* uuid */])();
    return {
      ref: 'dv-flyline-chart-enhanced',
      unique: Math.random(),
      flylineGradientId: 'flyline-gradient-id-' + id,
      haloGradientId: 'halo-gradient-id-' + id,
      /**
       * @description Type Declaration
       * 
       * interface Halo {
       *    show?: boolean
       *    duration?: [number, number]
       *    color?: string
       *    radius?: number
       * }
       * 
       * interface Text {
       *    show?: boolean
       *    offset?: [number, number]
       *    color?: string
       *    fontSize?: number
       * }
       * 
       * interface Icon {
       *    show?: boolean
       *    src?: string
       *    width?: number
       *    height?: number
       * }
       * 
       * interface Point {
       *    name: string
       *    coordinate: [number, number]
       *    halo?: Halo
       *    text?: Text
       *    icon?: Icon
       * }
       * 
       * interface Line {
       *    width?: number
       *    color?: string
       *    orbitColor?: string
       *    duration?: [number, number]
       *    radius?: string
       * }
       * 
       * interface Flyline extends Line {
       *    source: string
       *    target: string
       * }
       * 
       * interface FlylineWithPath extends Flyline {
       *    d: string
       *    path: [[number, number], [number, number], [number, number]]
       *    key: string
       * }
       */
      defaultConfig: {
        /**
         * @description Flyline chart points
         * @type {Point[]}
         * @default points = []
         */
        points: [],
        /**
         * @description Lines
         * @type {Flyline[]}
         * @default lines = []
         */
        lines: [],
        /**
         * @description Global halo configuration
         * @type {Halo}
         */
        halo: {
          /**
           * @description Whether to show halo
           * @type {Boolean}
           * @default show = false
           */
          show: false,
          /**
           * @description Halo animation duration (1s = 10)
           * @type {[number, number]}
           */
          duration: [20, 30],
          /**
           * @description Halo color
           * @type {String}
           * @default color = '#fb7293'
           */
          color: '#fb7293',
          /**
           * @description Halo radius
           * @type {Number}
           * @default radius = 120
           */
          radius: 120
        },
        /**
         * @description Global text configuration
         * @type {Text}
         */
        text: {
          /**
           * @description Whether to show text
           * @type {Boolean}
           * @default show = false
           */
          show: false,
          /**
           * @description Text offset
           * @type {[number, number]}
           * @default offset = [0, 15]
           */
          offset: [0, 15],
          /**
           * @description Text color
           * @type {String}
           * @default color = '#ffdb5c'
           */
          color: '#ffdb5c',
          /**
           * @description Text font size
           * @type {Number}
           * @default fontSize = 12
           */
          fontSize: 12
        },
        /**
         * @description Global icon configuration
         * @type {Icon}
         */
        icon: {
          /**
           * @description Whether to show icon
           * @type {Boolean}
           * @default show = false
           */
          show: false,
          /**
           * @description Icon src
           * @type {String}
           * @default src = ''
           */
          src: '',
          /**
           * @description Icon width
           * @type {Number}
           * @default width = 15
           */
          width: 15,
          /**
           * @description Icon height
           * @type {Number}
           * @default width = 15
           */
          height: 15
        },
        /**
         * @description Global line configuration
         * @type {Line}
         */
        line: {
          /**
           * @description Line width
           * @type {Number}
           * @default width = 1
           */
          width: 1,
          /**
           * @description Flyline color
           * @type {String}
           * @default color = '#ffde93'
           */
          color: '#ffde93',
          /**
           * @description Orbit color
           * @type {String}
           * @default orbitColor = 'rgba(103, 224, 227, .2)'
           */
          orbitColor: 'rgba(103, 224, 227, .2)',
          /**
           * @description Flyline animation duration
           * @type {[number, number]}
           * @default duration = [20, 30]
           */
          duration: [20, 30],
          /**
           * @description Flyline radius
           * @type {Number}
           * @default radius = 100
           */
          radius: 100
        },
        /**
         * @description Back ground image url
         * @type {String}
         * @default bgImgSrc = ''
         */
        bgImgSrc: '',
        /**
         * @description K value
         * @type {Number}
         * @default k = -0.5
         * @example k = -1 ~ 1
         */
        k: -0.5,
        /**
         * @description Flyline curvature
         * @type {Number}
         * @default curvature = 5
         */
        curvature: 5,
        /**
         * @description Relative points position
         * @type {Boolean}
         * @default relative = true
         */
        relative: true
      },
      /**
       * @description Fly line data
       * @type {FlylineWithPath[]}
       * @default flylines = []
       */
      flylines: [],
      /**
       * @description Fly line lengths
       * @type {Number[]}
       * @default flylineLengths = []
       */
      flylineLengths: [],
      /**
       * @description Fly line points
       * @default flylinePoints = []
       */
      flylinePoints: [],

      mergedConfig: null
    };
  },

  watch: {
    config: function config() {
      var calcData = this.calcData;


      calcData();
    }
  },
  methods: {
    afterAutoResizeMixinInit: function afterAutoResizeMixinInit() {
      var calcData = this.calcData;


      calcData();
    },
    onResize: function onResize() {
      var calcData = this.calcData;


      calcData();
    },
    calcData: function calcData() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var mergeConfig, calcflylinePoints, calcLinePaths, calcLineLengths;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mergeConfig = _this.mergeConfig, calcflylinePoints = _this.calcflylinePoints, calcLinePaths = _this.calcLinePaths;


                mergeConfig();

                calcflylinePoints();

                calcLinePaths();

                calcLineLengths = _this.calcLineLengths;
                _context.next = 7;
                return calcLineLengths();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    mergeConfig: function mergeConfig() {
      var config = this.config,
          defaultConfig = this.defaultConfig;


      var mergedConfig = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(defaultConfig, true), config || {});

      var points = mergedConfig.points,
          lines = mergedConfig.lines,
          halo = mergedConfig.halo,
          text = mergedConfig.text,
          icon = mergedConfig.icon,
          line = mergedConfig.line;


      mergedConfig.points = points.map(function (item) {
        item.halo = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(halo, true), item.halo || {});
        item.text = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(text, true), item.text || {});
        item.icon = Object(util["deepMerge"])(Object(plugin_util["deepClone"])(icon, true), item.icon || {});

        return item;
      });

      mergedConfig.lines = lines.map(function (item) {
        return Object(util["deepMerge"])(Object(plugin_util["deepClone"])(line, true), item);
      });

      this.mergedConfig = mergedConfig;
    },
    calcflylinePoints: function calcflylinePoints() {
      var mergedConfig = this.mergedConfig,
          width = this.width,
          height = this.height;
      var relative = mergedConfig.relative,
          points = mergedConfig.points;


      this.flylinePoints = points.map(function (item, i) {
        var _item$coordinate = slicedToArray_default()(item.coordinate, 2),
            x = _item$coordinate[0],
            y = _item$coordinate[1],
            halo = item.halo,
            icon = item.icon,
            text = item.text;

        if (relative) item.coordinate = [x * width, y * height];

        item.halo.time = lib_util["d" /* randomExtend */].apply(undefined, toConsumableArray_default()(halo.duration)) / 10;

        var iw = icon.width,
            ih = icon.height;

        item.icon.x = item.coordinate[0] - iw / 2;
        item.icon.y = item.coordinate[1] - ih / 2;

        var _text$offset = slicedToArray_default()(text.offset, 2),
            ox = _text$offset[0],
            oy = _text$offset[1];

        item.text.x = item.coordinate[0] + ox;
        item.text.y = item.coordinate[1] + oy;

        item.key = '' + item.coordinate.toString() + i;

        return item;
      });
    },
    calcLinePaths: function calcLinePaths() {
      var getPath = this.getPath,
          mergedConfig = this.mergedConfig;
      var points = mergedConfig.points,
          lines = mergedConfig.lines;


      this.flylines = lines.map(function (item) {
        var source = item.source,
            target = item.target,
            duration = item.duration;


        var sourcePoint = points.find(function (_ref) {
          var name = _ref.name;
          return name === source;
        }).coordinate;
        var targetPoint = points.find(function (_ref2) {
          var name = _ref2.name;
          return name === target;
        }).coordinate;

        var path = getPath(sourcePoint, targetPoint).map(function (item) {
          return item.map(function (v) {
            return parseFloat(v.toFixed(10));
          });
        });
        var d = 'M' + path[0].toString() + ' Q' + path[1].toString() + ' ' + path[2].toString();
        var key = 'path' + path.toString();
        var time = lib_util["d" /* randomExtend */].apply(undefined, toConsumableArray_default()(duration)) / 10;

        return extends_default()({}, item, { path: path, key: key, d: d, time: time });
      });
    },
    getPath: function getPath(start, end) {
      var getControlPoint = this.getControlPoint;


      var controlPoint = getControlPoint(start, end);

      return [start, controlPoint, end];
    },
    getControlPoint: function getControlPoint(_ref3, _ref4) {
      var _ref6 = slicedToArray_default()(_ref3, 2),
          sx = _ref6[0],
          sy = _ref6[1];

      var _ref5 = slicedToArray_default()(_ref4, 2),
          ex = _ref5[0],
          ey = _ref5[1];

      var getKLinePointByx = this.getKLinePointByx,
          mergedConfig = this.mergedConfig;
      var curvature = mergedConfig.curvature,
          k = mergedConfig.k;
      var mx = (sx + ex) / 2,
          my = (sy + ey) / 2;


      var distance = Object(lib_util["b" /* getPointDistance */])([sx, sy], [ex, ey]);

      var targetLength = distance / curvature;
      var disDived = targetLength / 2;

      var dx = mx,
          dy = my;


      do {
        dx += disDived;
        dy = getKLinePointByx(k, [mx, my], dx)[1];
      } while (Object(lib_util["b" /* getPointDistance */])([mx, my], [dx, dy]) < targetLength);

      return [dx, dy];
    },
    getKLinePointByx: function getKLinePointByx(k, _ref7, x) {
      var _ref8 = slicedToArray_default()(_ref7, 2),
          lx = _ref8[0],
          ly = _ref8[1];

      var y = ly - k * lx + k * x;

      return [x, y];
    },
    calcLineLengths: function calcLineLengths() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var $nextTick, flylines, $refs;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                $nextTick = _this2.$nextTick, flylines = _this2.flylines, $refs = _this2.$refs;
                _context2.next = 3;
                return $nextTick();

              case 3:

                _this2.flylineLengths = flylines.map(function (_ref9) {
                  var key = _ref9.key;
                  return $refs[key][0].getTotalLength();
                });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    consoleClickPos: function consoleClickPos(_ref10) {
      var offsetX = _ref10.offsetX,
          offsetY = _ref10.offsetY;
      var width = this.width,
          height = this.height,
          dev = this.dev;


      if (!dev) return;

      var relativeX = (offsetX / width).toFixed(2);
      var relativeY = (offsetY / height).toFixed(2);

      console.warn('dv-flyline-chart-enhanced DEV: \n Click Position is [' + offsetX + ', ' + offsetY + '] \n Relative Position is [' + relativeX + ', ' + relativeY + ']');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6af69108","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/@jiaminghi/data-view/lib/components/flylineChartEnhanced/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.ref,staticClass:"dv-flyline-chart-enhanced",style:(("background-image: url(" + (_vm.mergedConfig ? _vm.mergedConfig.bgImgSrc : '') + ")")),on:{"click":_vm.consoleClickPos}},[(_vm.flylines.length)?_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('radialGradient',{attrs:{"id":_vm.flylineGradientId,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#fff","stop-opacity":"1"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"100%","stop-color":"#fff","stop-opacity":"0"}})],1),_vm._v(" "),_c('radialGradient',{attrs:{"id":_vm.haloGradientId,"cx":"50%","cy":"50%","r":"50%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#fff","stop-opacity":"0"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"100%","stop-color":"#fff","stop-opacity":"1"}})],1)],1),_vm._v(" "),_vm._l((_vm.flylinePoints),function(point){return _c('g',{key:point.key + Math.random()},[_c('defs',[(point.halo.show)?_c('circle',{attrs:{"id":("halo" + _vm.unique + (point.key)),"cx":point.coordinate[0],"cy":point.coordinate[1]}},[_c('animate',{attrs:{"attributeName":"r","values":("1;" + (point.halo.radius)),"dur":((point.halo.time) + "s"),"repeatCount":"indefinite"}}),_vm._v(" "),_c('animate',{attrs:{"attributeName":"opacity","values":"1;0","dur":((point.halo.time) + "s"),"repeatCount":"indefinite"}})]):_vm._e()]),_vm._v(" "),_c('mask',{attrs:{"id":("mask" + _vm.unique + (point.key))}},[(point.halo.show)?_c('use',{attrs:{"xlink:href":("#halo" + _vm.unique + (point.key)),"fill":("url(#" + _vm.haloGradientId + ")")}}):_vm._e()]),_vm._v(" "),(point.halo.show)?_c('use',{attrs:{"xlink:href":("#halo" + _vm.unique + (point.key)),"fill":point.halo.color,"mask":("url(#mask" + _vm.unique + (point.key) + ")")}}):_vm._e(),_vm._v(" "),(point.icon.show)?_c('image',{attrs:{"xlink:href":point.icon.src,"width":point.icon.width,"height":point.icon.height,"x":point.icon.x,"y":point.icon.y}}):_vm._e(),_vm._v(" "),(point.text.show)?_c('text',{style:(("fontSize:" + (point.text.fontSize) + "px;color:" + (point.text.color))),attrs:{"fill":point.text.color,"x":point.text.x,"y":point.text.y}},[_vm._v("\n        "+_vm._s(point.name)+"\n      ")]):_vm._e()])}),_vm._v(" "),_vm._l((_vm.flylines),function(line,i){return _c('g',{key:line.key + Math.random()},[_c('defs',[_c('path',{ref:line.key,refInFor:true,attrs:{"id":line.key,"d":line.d,"fill":"transparent"}})]),_vm._v(" "),_c('use',{attrs:{"xlink:href":("#" + (line.key)),"stroke-width":line.width,"stroke":line.orbitColor}}),_vm._v(" "),_c('mask',{attrs:{"id":("mask" + _vm.unique + (line.key))}},[_c('circle',{attrs:{"cx":"0","cy":"0","r":line.radius,"fill":("url(#" + _vm.flylineGradientId + ")")}},[_c('animateMotion',{attrs:{"dur":line.time,"path":line.d,"rotate":"auto","repeatCount":"indefinite"}})],1)]),_vm._v(" "),(_vm.flylineLengths[i])?_c('use',{attrs:{"xlink:href":("#" + (line.key)),"stroke-width":line.width,"stroke":line.color,"mask":("url(#mask" + _vm.unique + (line.key) + ")")}},[_c('animate',{attrs:{"attributeName":"stroke-dasharray","from":("0, " + (_vm.flylineLengths[i])),"to":((_vm.flylineLengths[i]) + ", 0"),"dur":line.time,"repeatCount":"indefinite"}})]):_vm._e()])})],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_main = (esExports);
// CONCATENATED MODULE: ./node_modules/@jiaminghi/data-view/lib/components/flylineChartEnhanced/src/main.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  main,
  src_main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var flylineChartEnhanced_src_main = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "yvSC":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAEzSURBVHja7JjPTcMwFIe/TNAwAdmA9OB7uCPREdiAMgHpBOANMkIreYDeORAmIN3AmSBcXqWoJFUbaicVfifLku1P78/Pz46apmFKFgWgc4Aenj8AUuAVWDg81wJbYAWURqteoBT49OyUudGq7ANaA4+egTZGq0Uf0BgJZY1WN1MCwmgVBSAXQBtgCVRABrwDd76BdgJgO3QpAYoB5yfA7RCgnSx2YVUb6hwPPcniGig7Ns6AZoCHikvk0PwAagm8jV1lRSups1D2Aei/Aa2kCUtE1WdjAr0IxN6ONn6nAtV/aGO3HXMpEMt43fbYqUCViKG9cMrEwHcLzkvI7g+89AvCdw5ZuVq+5BLNJWSh7AOQC6uNVvHVPBQn95TeK2ouDdjMVZhEp/Kjnw3hf+gagH4GADtUEMizOhJzAAAAAElFTkSuQmCC"

/***/ })

},["NHnr"]);