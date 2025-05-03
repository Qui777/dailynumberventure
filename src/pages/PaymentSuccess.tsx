import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PaymentSuccess.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/pages/PaymentSuccess.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useEffect = __vite__cjsImport2_react["useEffect"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=57c2cc69";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=57c2cc69";
import { Button } from "/src/components/ui/button.tsx";
import { Check, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
const PaymentSuccess = ()=>{
    _s();
    const navigate = useNavigate();
    useEffect(()=>{
        // Get stored player name from localStorage (set before PayPal redirect)
        const playerName = localStorage.getItem('tempPlayerName') || 'Player';
        const playerEmail = localStorage.getItem('tempPlayerEmail');
        // Show success message
        toast.success("Payment completed successfully!");
        // Clean up localStorage
        localStorage.removeItem('tempPlayerName');
        localStorage.removeItem('tempPlayerEmail');
        // Store the player name for the game
        localStorage.setItem('playerName', playerName);
    }, []);
    const handleContinue = ()=>{
        navigate('/game');
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg text-center",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "w-16 h-16 bg-green-500 mx-auto rounded-full flex items-center justify-center mb-6",
                    children: /*#__PURE__*/ _jsxDEV(Check, {
                        className: "w-8 h-8 text-white"
                    }, void 0, false, {
                        fileName: "/dev-server/src/pages/PaymentSuccess.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/PaymentSuccess.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("h1", {
                    className: "text-2xl font-bold text-white mb-2",
                    children: "Payment Successful!"
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/PaymentSuccess.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("p", {
                    className: "text-gray-300 mb-6",
                    children: "Thank you for your payment. You can now continue to play the Daily Number Game."
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/PaymentSuccess.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV(Button, {
                    onClick: handleContinue,
                    className: "w-full h-12 bg-green-500 hover:bg-green-600",
                    children: [
                        "Continue to Game ",
                        /*#__PURE__*/ _jsxDEV(ArrowRight, {
                            className: "ml-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "/dev-server/src/pages/PaymentSuccess.tsx",
                            lineNumber: 47,
                            columnNumber: 28
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/pages/PaymentSuccess.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/pages/PaymentSuccess.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/pages/PaymentSuccess.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
_s(PaymentSuccess, "0pNeyzXk/ByIxyERsdaIrG6js9s=", false, function() {
    return [
        useNavigate
    ];
});
_c = PaymentSuccess;
export default PaymentSuccess;
var _c;
$RefreshReg$(_c, "PaymentSuccess");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/pages/PaymentSuccess.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/pages/PaymentSuccess.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBheW1lbnRTdWNjZXNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdzb25uZXInO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XG5pbXBvcnQgeyBDaGVjaywgQXJyb3dSaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmNvbnN0IFBheW1lbnRTdWNjZXNzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBHZXQgc3RvcmVkIHBsYXllciBuYW1lIGZyb20gbG9jYWxTdG9yYWdlIChzZXQgYmVmb3JlIFBheVBhbCByZWRpcmVjdClcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RlbXBQbGF5ZXJOYW1lJykgfHwgJ1BsYXllcic7XG4gICAgY29uc3QgcGxheWVyRW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVtcFBsYXllckVtYWlsJyk7XG4gICAgXG4gICAgLy8gU2hvdyBzdWNjZXNzIG1lc3NhZ2VcbiAgICB0b2FzdC5zdWNjZXNzKFwiUGF5bWVudCBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICBcbiAgICAvLyBDbGVhbiB1cCBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGVtcFBsYXllck5hbWUnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGVtcFBsYXllckVtYWlsJyk7XG4gICAgXG4gICAgLy8gU3RvcmUgdGhlIHBsYXllciBuYW1lIGZvciB0aGUgZ2FtZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJOYW1lJywgcGxheWVyTmFtZSk7XG4gIH0sIFtdKTtcbiAgXG4gIGNvbnN0IGhhbmRsZUNvbnRpbnVlID0gKCkgPT4ge1xuICAgIG5hdmlnYXRlKCcvZ2FtZScpO1xuICB9O1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTkwMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdy1mdWxsIGJnLWdyYXktODAwIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBiZy1ncmVlbi01MDAgbXgtYXV0byByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNlwiPlxuICAgICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi0yXCI+UGF5bWVudCBTdWNjZXNzZnVsITwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgbWItNlwiPlxuICAgICAgICAgIFRoYW5rIHlvdSBmb3IgeW91ciBwYXltZW50LiBZb3UgY2FuIG5vdyBjb250aW51ZSB0byBwbGF5IHRoZSBEYWlseSBOdW1iZXIgR2FtZS5cbiAgICAgICAgPC9wPlxuICAgICAgICBcbiAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb250aW51ZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMiBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIENvbnRpbnVlIHRvIEdhbWUgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwibWwtMiBoLTQgdy00XCIgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRTdWNjZXNzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTmF2aWdhdGUiLCJ0b2FzdCIsIkJ1dHRvbiIsIkNoZWNrIiwiQXJyb3dSaWdodCIsIlBheW1lbnRTdWNjZXNzIiwibmF2aWdhdGUiLCJwbGF5ZXJOYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBsYXllckVtYWlsIiwic3VjY2VzcyIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiaGFuZGxlQ29udGludWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsT0FBT0EsU0FBU0MsU0FBUyxRQUFRLFFBQVE7QUFDekMsU0FBU0MsV0FBVyxRQUFRLG1CQUFtQjtBQUMvQyxTQUFTQyxLQUFLLFFBQVEsU0FBUztBQUMvQixTQUFTQyxNQUFNLFFBQVEseUJBQXlCO0FBQ2hELFNBQVNDLEtBQUssRUFBRUMsVUFBVSxRQUFRLGVBQWU7QUFFakQsTUFBTUMsaUJBQTJCOztJQUMvQixNQUFNQyxXQUFXTjtJQUVqQkQsVUFBVTtRQUNSLHdFQUF3RTtRQUN4RSxNQUFNUSxhQUFhQyxhQUFhQyxPQUFPLENBQUMscUJBQXFCO1FBQzdELE1BQU1DLGNBQWNGLGFBQWFDLE9BQU8sQ0FBQztRQUV6Qyx1QkFBdUI7UUFDdkJSLE1BQU1VLE9BQU8sQ0FBQztRQUVkLHdCQUF3QjtRQUN4QkgsYUFBYUksVUFBVSxDQUFDO1FBQ3hCSixhQUFhSSxVQUFVLENBQUM7UUFFeEIscUNBQXFDO1FBQ3JDSixhQUFhSyxPQUFPLENBQUMsY0FBY047SUFDckMsR0FBRyxFQUFFO0lBRUwsTUFBTU8saUJBQWlCO1FBQ3JCUixTQUFTO0lBQ1g7SUFFQSxxQkFDRSxRQUFDUztRQUFJQyxXQUFVO2tCQUNiLGNBQUEsUUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsUUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsY0FBQSxRQUFDYjt3QkFBTWEsV0FBVTs7Ozs7Ozs7Ozs7OEJBR25CLFFBQUNDO29CQUFHRCxXQUFVOzhCQUFxQzs7Ozs7OzhCQUNuRCxRQUFDRTtvQkFBRUYsV0FBVTs4QkFBcUI7Ozs7Ozs4QkFJbEMsUUFBQ2Q7b0JBQ0NpQixTQUFTTDtvQkFDVEUsV0FBVTs7d0JBQ1g7c0NBQ2tCLFFBQUNaOzRCQUFXWSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqRDtHQTVDTVg7O1FBQ2FMOzs7S0FEYks7QUE4Q04sZUFBZUEsZUFBZSJ9