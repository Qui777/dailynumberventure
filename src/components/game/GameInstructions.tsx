import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/game/GameInstructions.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/game/GameInstructions.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
const GameInstructions = ({ instructionSections })=>{
    return /*#__PURE__*/ _jsxDEV(Card, {
        className: "md:col-span-1 glass-card",
        children: [
            /*#__PURE__*/ _jsxDEV(CardHeader, {
                children: [
                    /*#__PURE__*/ _jsxDEV(CardTitle, {
                        children: "How to Play"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/game/GameInstructions.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV(CardDescription, {
                        children: "Follow these steps to participate"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/game/GameInstructions.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/game/GameInstructions.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(CardContent, {
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "space-y-6",
                    children: instructionSections.map((section, index)=>/*#__PURE__*/ _jsxDEV("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/GameInstructions.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            className: "text-base font-medium",
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/game/GameInstructions.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: section.description
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/game/GameInstructions.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/components/game/GameInstructions.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "/dev-server/src/components/game/GameInstructions.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/GameInstructions.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/GameInstructions.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/game/GameInstructions.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
_c = GameInstructions;
export default GameInstructions;
var _c;
$RefreshReg$(_c, "GameInstructions");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/game/GameInstructions.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/game/GameInstructions.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbWVJbnN0cnVjdGlvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkRGVzY3JpcHRpb24sIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9jYXJkJztcblxuaW50ZXJmYWNlIEluc3RydWN0aW9uU2VjdGlvbiB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBHYW1lSW5zdHJ1Y3Rpb25zUHJvcHMge1xuICBpbnN0cnVjdGlvblNlY3Rpb25zOiBJbnN0cnVjdGlvblNlY3Rpb25bXTtcbn1cblxuY29uc3QgR2FtZUluc3RydWN0aW9uczogUmVhY3QuRkM8R2FtZUluc3RydWN0aW9uc1Byb3BzPiA9ICh7IGluc3RydWN0aW9uU2VjdGlvbnMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTEgZ2xhc3MtY2FyZFwiPlxuICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkVGl0bGU+SG93IHRvIFBsYXk8L0NhcmRUaXRsZT5cbiAgICAgICAgPENhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICBGb2xsb3cgdGhlc2Ugc3RlcHMgdG8gcGFydGljaXBhdGVcbiAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAge2luc3RydWN0aW9uU2VjdGlvbnMubWFwKChzZWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNCBmbGV4IGgtOCB3LTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bVwiPntzZWN0aW9uLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVJbnN0cnVjdGlvbnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiR2FtZUluc3RydWN0aW9ucyIsImluc3RydWN0aW9uU2VjdGlvbnMiLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJzZWN0aW9uIiwiaW5kZXgiLCJoMyIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGVBQWUsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLFFBQVEsdUJBQXVCO0FBV2pHLE1BQU1DLG1CQUFvRCxDQUFDLEVBQUVDLG1CQUFtQixFQUFFO0lBQ2hGLHFCQUNFLFFBQUNOO1FBQUtPLFdBQVU7OzBCQUNkLFFBQUNKOztrQ0FDQyxRQUFDQztrQ0FBVTs7Ozs7O2tDQUNYLFFBQUNGO2tDQUFnQjs7Ozs7Ozs7Ozs7OzBCQUluQixRQUFDRDswQkFDQyxjQUFBLFFBQUNPO29CQUFJRCxXQUFVOzhCQUNaRCxvQkFBb0JHLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDakMsUUFBQ0g7NEJBQWdCRCxXQUFVOzs4Q0FDekIsUUFBQ0M7b0NBQUlELFdBQVU7OENBQ1pJLFFBQVE7Ozs7Ozs4Q0FFWCxRQUFDSDs7c0RBQ0MsUUFBQ0k7NENBQUdMLFdBQVU7c0RBQXlCRyxRQUFRRyxLQUFLOzs7Ozs7c0RBQ3BELFFBQUNDOzRDQUFFUCxXQUFVO3NEQUNWRyxRQUFRSyxXQUFXOzs7Ozs7Ozs7Ozs7OzJCQVBoQko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCdEI7S0E1Qk1OO0FBOEJOLGVBQWVBLGlCQUFpQiJ9