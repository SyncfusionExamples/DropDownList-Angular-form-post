"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
//enableProdMode(); //Uncomment for production
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .then(function (success) { return console.log('App bootstrapped'); })
    .catch(function (err) { console.error(err); debugger; });
//# sourceMappingURL=main.js.map