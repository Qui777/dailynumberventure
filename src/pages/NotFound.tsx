import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/NotFound.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/pages/NotFound.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=57c2cc69";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const useEffect = __vite__cjsImport3_react["useEffect"];
const NotFound = ()=>{
    _s();
    const location = useLocation();
    useEffect(()=>{
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [
        location.pathname
    ]);
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ _jsxDEV("h1", {
                    className: "text-4xl font-bold mb-4",
                    children: "404"
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/NotFound.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("p", {
                    className: "text-xl text-gray-600 mb-4",
                    children: "Oops! Page not found"
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/NotFound.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("a", {
                    href: "/",
                    className: "text-blue-500 hover:text-blue-700 underline",
                    children: "Return to Home"
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/NotFound.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/pages/NotFound.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(NotFound, "BXcZrDMM76mmm4zA8/QV5UbMNXE=", false, function() {
    return [
        useLocation
    ];
});
_c = NotFound;
export default NotFound;
var _c;
$RefreshReg$(_c, "NotFound");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/pages/NotFound.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/pages/NotFound.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vdEZvdW5kLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjQwNCBFcnJvcjogVXNlciBhdHRlbXB0ZWQgdG8gYWNjZXNzIG5vbi1leGlzdGVudCByb3V0ZTpcIixcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgKTtcbiAgfSwgW2xvY2F0aW9uLnBhdGhuYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTEwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj40MDQ8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS02MDAgbWItNFwiPk9vcHMhIFBhZ2Ugbm90IGZvdW5kPC9wPlxuICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMCB1bmRlcmxpbmVcIj5cbiAgICAgICAgICBSZXR1cm4gdG8gSG9tZVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIl0sIm5hbWVzIjpbInVzZUxvY2F0aW9uIiwidXNlRWZmZWN0IiwiTm90Rm91bmQiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJlcnJvciIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiYSIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxXQUFXLFFBQVEsbUJBQW1CO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSxRQUFRO0FBRWxDLE1BQU1DLFdBQVc7O0lBQ2YsTUFBTUMsV0FBV0g7SUFFakJDLFVBQVU7UUFDUkcsUUFBUUMsS0FBSyxDQUNYLDJEQUNBRixTQUFTRyxRQUFRO0lBRXJCLEdBQUc7UUFBQ0gsU0FBU0csUUFBUTtLQUFDO0lBRXRCLHFCQUNFLFFBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsY0FBQSxRQUFDRDtZQUFJQyxXQUFVOzs4QkFDYixRQUFDQztvQkFBR0QsV0FBVTs4QkFBMEI7Ozs7Ozs4QkFDeEMsUUFBQ0U7b0JBQUVGLFdBQVU7OEJBQTZCOzs7Ozs7OEJBQzFDLFFBQUNHO29CQUFFQyxNQUFLO29CQUFJSixXQUFVOzhCQUE4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUU7R0FyQk1OOztRQUNhRjs7O0tBRGJFO0FBdUJOLGVBQWVBLFNBQVMifQ==