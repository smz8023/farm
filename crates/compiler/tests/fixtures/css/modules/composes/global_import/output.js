//index.js:
 (globalThis || window || self || global)['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'browser'};(function (modules, entryModule) {
            var cache = {};

            function dynamicRequire(id) {
              return Promise.resolve(require(id));
            }
          
            function require(id) {
              if (cache[id]) return cache[id].exports;
          
              var module = {
                id: id,
                exports: {}
              };
          
              modules[id](module, module.exports, require, dynamicRequire);
              cache[id] = module;
              return module.exports;
            }
          
            require(entryModule);
          })({"0b3bded0": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
console.log("runtime/index.js")(globalThis || window || self || global)["__farm_default_namespace__"].__farm_module_system__.setPlugins([]);

},}, "0b3bded0");(function (modules) {
            for (var key in modules) {
              modules[key].__farm_resource_pot__ = 'index_2544.js';
                (globalThis || window || self || global)['__farm_default_namespace__'].__farm_module_system__.register(key, modules[key]);
            }
        })({"95fe6ac5": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
"";
var _default = {
    "base": `farm-base action`
};

},
"b5d64806": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
var _indexcss = /*#__PURE__*/ _interop_require_default._(farmRequire("95fe6ac5"));
console.log(_indexcss.default.base);

},});(globalThis || window || self || global)['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources([]);(globalThis || window || self || global)['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || self || global)['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("b5d64806");

//index_bab8.css:
 .farm-base {
  font-size: 20px;
}
 .action {
  color: red;
}