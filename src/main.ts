import './polyfills.ts';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';


if (environment.production) {
  enableProdMode();
}

/**
 * JIT compile.
 */

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

/**
 * AoT compile.
 * First run `./node_modules/.bin/ngc -p ./src/tsconfig-aot.json`
 * Note: unit test specs don't compile so remove these first
 * also delete aot directory and all shim and ngfactory files before running
 */

//import {platformBrowser} from '@angular/platform-browser';
//import {AppModuleNgFactory} from './aot/app/app.module.ngfactory';
//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
