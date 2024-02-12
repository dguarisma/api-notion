"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/route";
exports.ids = ["app/api/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=%2FUsers%2Fdavidg%2FDocuments%2Fsf%2Fapi-banners%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdavidg%2FDocuments%2Fsf%2Fapi-banners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=%2FUsers%2Fdavidg%2FDocuments%2Fsf%2Fapi-banners%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdavidg%2FDocuments%2Fsf%2Fapi-banners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_davidg_Documents_sf_api_banners_app_api_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/route.js */ \"(rsc)/./app/api/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/route\",\n        pathname: \"/api\",\n        filename: \"route\",\n        bundlePath: \"app/api/route\"\n    },\n    resolvedPagePath: \"/Users/davidg/Documents/sf/api-banners/app/api/route.js\",\n    nextConfigOutput,\n    userland: _Users_davidg_Documents_sf_api_banners_app_api_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4xLjBfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGcm91dGUmcGFnZT0lMkZhcGklMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyb3V0ZS5qcyZhcHBEaXI9JTJGVXNlcnMlMkZkYXZpZGclMkZEb2N1bWVudHMlMkZzZiUyRmFwaS1iYW5uZXJzJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmRhdmlkZyUyRkRvY3VtZW50cyUyRnNmJTJGYXBpLWJhbm5lcnMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDTztBQUNwRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS8/ZTI5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZGF2aWRnL0RvY3VtZW50cy9zZi9hcGktYmFubmVycy9hcHAvYXBpL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9kYXZpZGcvRG9jdW1lbnRzL3NmL2FwaS1iYW5uZXJzL2FwcC9hcGkvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=%2FUsers%2Fdavidg%2FDocuments%2Fsf%2Fapi-banners%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdavidg%2FDocuments%2Fsf%2Fapi-banners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/route.js":
/*!**************************!*\
  !*** ./app/api/route.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"(rsc)/./node_modules/.pnpm/@notionhq+client@2.2.14/node_modules/@notionhq/client/build/src/index.js\");\n\nconst DATABASEID = \"3773dc283ad44a31a952537fd3834bba\";\nconst NOTION_TOKEN = \"secret_erhlpWpiRRUOdRPSC67GM2gjW0jgEHwX8LuI5hZpB0T\";\nasync function GET() {\n    try {\n        const notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n            auth: NOTION_TOKEN\n        });\n        const { results } = await notion.databases.query({\n            database_id: DATABASEID,\n            filter: {\n                \"property\": \"Status\",\n                \"select\": {\n                    \"equals\": \"Activo\"\n                }\n            }\n        });\n        const response = results.map(({ properties })=>({\n                categoryID: properties?.IdUrlBanners?.number || null,\n                PlatformBanner: properties?.PlatformBanner?.select?.name || null,\n                BannersType: properties?.BannersType?.select?.name || null,\n                url: properties?.Imagen.files?.map((archivo)=>archivo.file.url).join() || \"\",\n                order: properties?.Order?.number || null,\n                name: (properties.Name?.title || []).map((title)=>title.plain_text || null)?.join() || \"\"\n            })).sort((a, b)=>(a.order || 0) - (b.order || 0)) ?? [];\n        return Response.json(response);\n    } catch (error) {\n        if (error.code === _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.APIErrorCode.ObjectNotFound) {\n            console.error(error);\n        } else {\n            // Other error handling code\n            console.error(error);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVEO0FBRXZELE1BQU1FLGFBQWE7QUFDbkIsTUFBTUMsZUFBZTtBQUVkLGVBQWVDO0lBQ2xCLElBQUk7UUFDQSxNQUFNQyxTQUFTLElBQUlMLG9EQUFNQSxDQUFDO1lBQUVNLE1BQU1IO1FBQWE7UUFDL0MsTUFBTSxFQUFFSSxPQUFPLEVBQUUsR0FBRyxNQUFNRixPQUFPRyxTQUFTLENBQUNDLEtBQUssQ0FBQztZQUM3Q0MsYUFBYVI7WUFDYlMsUUFBUTtnQkFDSixZQUFZO2dCQUNaLFVBQVU7b0JBQ04sVUFBVTtnQkFDZDtZQUNKO1FBQ0o7UUFFQSxNQUFNQyxXQUFXTCxRQUFRTSxHQUFHLENBQUMsQ0FBQyxFQUFFQyxVQUFVLEVBQUUsR0FBTTtnQkFDOUNDLFlBQVlELFlBQVlFLGNBQWNDLFVBQVU7Z0JBQ2hEQyxnQkFBZ0JKLFlBQVlJLGdCQUFnQkMsUUFBUUMsUUFBUTtnQkFDNURDLGFBQWFQLFlBQVlPLGFBQWFGLFFBQVFDLFFBQVE7Z0JBQ3RERSxLQUFLUixZQUFZUyxPQUFPQyxPQUFPWCxJQUFJWSxDQUFBQSxVQUFXQSxRQUFRQyxJQUFJLENBQUNKLEdBQUcsRUFBRUssVUFBVTtnQkFDMUVDLE9BQU9kLFlBQVllLE9BQU9aLFVBQVU7Z0JBQ3BDRyxNQUFNLENBQUNOLFdBQVdnQixJQUFJLEVBQUVDLFNBQVMsRUFBRSxFQUFFbEIsR0FBRyxDQUFDa0IsQ0FBQUEsUUFBU0EsTUFBTUMsVUFBVSxJQUFJLE9BQU9MLFVBQVU7WUFDM0YsSUFBSU0sSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU0sQ0FBQ0QsRUFBRU4sS0FBSyxJQUFJLEtBQU1PLENBQUFBLEVBQUVQLEtBQUssSUFBSSxPQUFPLEVBQUU7UUFDekQsT0FBT1EsU0FBU0MsSUFBSSxDQUFDekI7SUFDekIsRUFBRSxPQUFPMEIsT0FBTztRQUNaLElBQUlBLE1BQU1DLElBQUksS0FBS3RDLDBEQUFZQSxDQUFDdUMsY0FBYyxFQUFFO1lBQzVDQyxRQUFRSCxLQUFLLENBQUNBO1FBQ2xCLE9BQU87WUFDSCw0QkFBNEI7WUFDNUJHLFFBQVFILEtBQUssQ0FBQ0E7UUFDbEI7SUFDSjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpLy4vYXBwL2FwaS9yb3V0ZS5qcz9iZGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCwgQVBJRXJyb3JDb2RlIH0gZnJvbSAnQG5vdGlvbmhxL2NsaWVudCdcblxuY29uc3QgREFUQUJBU0VJRCA9ICczNzczZGMyODNhZDQ0YTMxYTk1MjUzN2ZkMzgzNGJiYSc7XG5jb25zdCBOT1RJT05fVE9LRU4gPSAnc2VjcmV0X2VyaGxwV3BpUlJVT2RSUFNDNjdHTTJnalcwamdFSHdYOEx1STVoWnBCMFQnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5vdGlvbiA9IG5ldyBDbGllbnQoeyBhdXRoOiBOT1RJT05fVE9LRU4gfSlcbiAgICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGRhdGFiYXNlX2lkOiBEQVRBQkFTRUlELFxuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eVwiOiBcIlN0YXR1c1wiLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJlcXVhbHNcIjogXCJBY3Rpdm9cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXN1bHRzLm1hcCgoeyBwcm9wZXJ0aWVzIH0pID0+ICh7XG4gICAgICAgICAgICBjYXRlZ29yeUlEOiBwcm9wZXJ0aWVzPy5JZFVybEJhbm5lcnM/Lm51bWJlciB8fCBudWxsLFxuICAgICAgICAgICAgUGxhdGZvcm1CYW5uZXI6IHByb3BlcnRpZXM/LlBsYXRmb3JtQmFubmVyPy5zZWxlY3Q/Lm5hbWUgfHwgbnVsbCxcbiAgICAgICAgICAgIEJhbm5lcnNUeXBlOiBwcm9wZXJ0aWVzPy5CYW5uZXJzVHlwZT8uc2VsZWN0Py5uYW1lIHx8IG51bGwsXG4gICAgICAgICAgICB1cmw6IHByb3BlcnRpZXM/LkltYWdlbi5maWxlcz8ubWFwKGFyY2hpdm8gPT4gYXJjaGl2by5maWxlLnVybCkuam9pbigpIHx8ICcnLFxuICAgICAgICAgICAgb3JkZXI6IHByb3BlcnRpZXM/Lk9yZGVyPy5udW1iZXIgfHwgbnVsbCxcbiAgICAgICAgICAgIG5hbWU6IChwcm9wZXJ0aWVzLk5hbWU/LnRpdGxlIHx8IFtdKS5tYXAodGl0bGUgPT4gdGl0bGUucGxhaW5fdGV4dCB8fCBudWxsKT8uam9pbigpIHx8ICcnXG4gICAgICAgIH0pKS5zb3J0KChhLCBiKSA9PiAoYS5vcmRlciB8fCAwKSAtIChiLm9yZGVyIHx8IDApKSA/PyBbXVxuICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbihyZXNwb25zZSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gQVBJRXJyb3JDb2RlLk9iamVjdE5vdEZvdW5kKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT3RoZXIgZXJyb3IgaGFuZGxpbmcgY29kZVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJDbGllbnQiLCJBUElFcnJvckNvZGUiLCJEQVRBQkFTRUlEIiwiTk9USU9OX1RPS0VOIiwiR0VUIiwibm90aW9uIiwiYXV0aCIsInJlc3VsdHMiLCJkYXRhYmFzZXMiLCJxdWVyeSIsImRhdGFiYXNlX2lkIiwiZmlsdGVyIiwicmVzcG9uc2UiLCJtYXAiLCJwcm9wZXJ0aWVzIiwiY2F0ZWdvcnlJRCIsIklkVXJsQmFubmVycyIsIm51bWJlciIsIlBsYXRmb3JtQmFubmVyIiwic2VsZWN0IiwibmFtZSIsIkJhbm5lcnNUeXBlIiwidXJsIiwiSW1hZ2VuIiwiZmlsZXMiLCJhcmNoaXZvIiwiZmlsZSIsImpvaW4iLCJvcmRlciIsIk9yZGVyIiwiTmFtZSIsInRpdGxlIiwicGxhaW5fdGV4dCIsInNvcnQiLCJhIiwiYiIsIlJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiY29kZSIsIk9iamVjdE5vdEZvdW5kIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.1.0_react-dom@18.2.0_react@18.2.0","vendor-chunks/@notionhq+client@2.2.14","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/tr46@0.0.3","vendor-chunks/node-fetch@2.7.0","vendor-chunks/webidl-conversions@3.0.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=%2FUsers%2Fdavidg%2FDocuments%2Fsf%2Fapi-banners%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdavidg%2FDocuments%2Fsf%2Fapi-banners&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();