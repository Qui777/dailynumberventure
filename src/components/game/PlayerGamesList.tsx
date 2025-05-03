import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/game/PlayerGamesList.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/game/PlayerGamesList.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "/src/components/ui/table.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { Dice4, Table as TableIcon, Calendar } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
const PlayerGamesList = ({ gameEntries, isLoading = false })=>{
    if (isLoading) {
        return /*#__PURE__*/ _jsxDEV(Card, {
            className: "glass-card mt-8",
            children: [
                /*#__PURE__*/ _jsxDEV(CardHeader, {
                    className: "pb-3",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ _jsxDEV(CardTitle, {
                                className: "text-lg font-medium",
                                children: "Game Numbers & Players"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary",
                                children: /*#__PURE__*/ _jsxDEV(Dice4, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV(CardContent, {
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        className: "animate-pulse space-y-4",
                        children: [
                            ...Array(3)
                        ].map((_, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                className: "h-16 bg-muted rounded-md"
                            }, i, false, {
                                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    if (gameEntries.length === 0) {
        return /*#__PURE__*/ _jsxDEV(Card, {
            className: "glass-card mt-8",
            children: [
                /*#__PURE__*/ _jsxDEV(CardHeader, {
                    className: "pb-3",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ _jsxDEV(CardTitle, {
                                className: "text-lg font-medium",
                                children: "Game Numbers & Players"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary",
                                children: /*#__PURE__*/ _jsxDEV(Dice4, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV(CardContent, {
                    children: /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-muted-foreground text-sm py-4 text-center",
                        children: "No game data available yet."
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ _jsxDEV(Card, {
        className: "glass-card mt-8",
        children: [
            /*#__PURE__*/ _jsxDEV(CardHeader, {
                className: "pb-3",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ _jsxDEV(CardTitle, {
                            className: "text-lg font-medium",
                            children: "Game Numbers & Players"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary",
                            children: /*#__PURE__*/ _jsxDEV(TableIcon, {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(CardContent, {
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ _jsxDEV(Table, {
                        children: [
                            /*#__PURE__*/ _jsxDEV(TableHeader, {
                                children: /*#__PURE__*/ _jsxDEV(TableRow, {
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(TableHead, {
                                            className: "w-[180px]",
                                            children: "Game Date"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(TableHead, {
                                            className: "w-[150px]",
                                            children: "Game Number"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(TableHead, {
                                            children: "Players"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(TableBody, {
                                children: gameEntries.map((entry, index)=>/*#__PURE__*/ _jsxDEV(TableRow, {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(TableCell, {
                                                className: "font-medium",
                                                children: /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(Calendar, {
                                                            className: "h-4 w-4 mr-2 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 23
                                                        }, this),
                                                        entry.date
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(TableCell, {
                                                children: /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "px-2 py-1 bg-primary/10 text-primary rounded-full",
                                                    children: entry.gameNumber
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(TableCell, {
                                                children: /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: entry.players.map((player)=>/*#__PURE__*/ _jsxDEV("span", {
                                                            className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground",
                                                            children: [
                                                                player.name,
                                                                " (",
                                                                player.number,
                                                                ")"
                                                            ]
                                                        }, player.id, true, {
                                                            fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/game/PlayerGamesList.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
_c = PlayerGamesList;
export default PlayerGamesList;
var _c;
$RefreshReg$(_c, "PlayerGamesList");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/game/PlayerGamesList.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/game/PlayerGamesList.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBsYXllckdhbWVzTGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgXG4gIFRhYmxlLCBcbiAgVGFibGVCb2R5LCBcbiAgVGFibGVDZWxsLCBcbiAgVGFibGVIZWFkLCBcbiAgVGFibGVIZWFkZXIsIFxuICBUYWJsZVJvdyBcbn0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3RhYmxlJztcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvY2FyZCc7XG5pbXBvcnQgeyBEaWNlNCwgVGFibGUgYXMgVGFibGVJY29uLCBDYWxlbmRhciB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBQbGF5ZXJFbnRyeSB9IGZyb20gJy4vUGxheWVyRW50cmllc0xpc3QnO1xuXG4vLyBJbnRlcmZhY2UgZm9yIGdyb3VwZWQgcGxheWVyIGVudHJpZXMgYnkgZ2FtZSBudW1iZXJcbmludGVyZmFjZSBHYW1lTnVtYmVyRW50cnkge1xuICBnYW1lTnVtYmVyOiBudW1iZXI7XG4gIGRhdGU6IHN0cmluZztcbiAgcGxheWVyczogUGxheWVyRW50cnlbXTtcbn1cblxuaW50ZXJmYWNlIFBsYXllckdhbWVzTGlzdFByb3BzIHtcbiAgZ2FtZUVudHJpZXM6IEdhbWVOdW1iZXJFbnRyeVtdO1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufVxuXG5jb25zdCBQbGF5ZXJHYW1lc0xpc3Q6IFJlYWN0LkZDPFBsYXllckdhbWVzTGlzdFByb3BzPiA9ICh7IFxuICBnYW1lRW50cmllcywgXG4gIGlzTG9hZGluZyA9IGZhbHNlIFxufSkgPT4ge1xuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImdsYXNzLWNhcmQgbXQtOFwiPlxuICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICBHYW1lIE51bWJlcnMgJiBQbGF5ZXJzXG4gICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC04IHctOCByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgPERpY2U0IGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1wdWxzZSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIHtbLi4uQXJyYXkoMyldLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiaC0xNiBiZy1tdXRlZCByb3VuZGVkLW1kXCIgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgICk7XG4gIH1cblxuICBpZiAoZ2FtZUVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImdsYXNzLWNhcmQgbXQtOFwiPlxuICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICBHYW1lIE51bWJlcnMgJiBQbGF5ZXJzXG4gICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC04IHctOCByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgPERpY2U0IGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtIHB5LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIE5vIGdhbWUgZGF0YSBhdmFpbGFibGUgeWV0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJnbGFzcy1jYXJkIG10LThcIj5cbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInBiLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIEdhbWUgTnVtYmVycyAmIFBsYXllcnNcbiAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtOCB3LTggcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICA8VGFibGVJY29uIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICA8VGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkIGNsYXNzTmFtZT1cInctWzE4MHB4XVwiPkdhbWUgRGF0ZTwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwidy1bMTUwcHhdXCI+R2FtZSBOdW1iZXI8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlBsYXllcnM8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICB7Z2FtZUVudHJpZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAge2VudHJ5LmRhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTEgYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnkgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2VudHJ5LmdhbWVOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtlbnRyeS5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMi41IHB5LTAuNSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LW1lZGl1bSBiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwbGF5ZXIubmFtZX0gKHtwbGF5ZXIubnVtYmVyfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJHYW1lc0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlRhYmxlSGVhZGVyIiwiVGFibGVSb3ciLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiRGljZTQiLCJUYWJsZUljb24iLCJDYWxlbmRhciIsIlBsYXllckdhbWVzTGlzdCIsImdhbWVFbnRyaWVzIiwiaXNMb2FkaW5nIiwiY2xhc3NOYW1lIiwiZGl2IiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsImxlbmd0aCIsInAiLCJlbnRyeSIsImluZGV4IiwiZGF0ZSIsInNwYW4iLCJnYW1lTnVtYmVyIiwicGxheWVycyIsInBsYXllciIsIm5hbWUiLCJudW1iZXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQ0VDLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxTQUFTLEVBQ1RDLFNBQVMsRUFDVEMsV0FBVyxFQUNYQyxRQUFRLFFBQ0gsd0JBQXdCO0FBQy9CLFNBQVNDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsUUFBUSx1QkFBdUI7QUFDaEYsU0FBU0MsS0FBSyxFQUFFVixTQUFTVyxTQUFTLEVBQUVDLFFBQVEsUUFBUSxlQUFlO0FBZW5FLE1BQU1DLGtCQUFrRCxDQUFDLEVBQ3ZEQyxXQUFXLEVBQ1hDLFlBQVksS0FBSyxFQUNsQjtJQUNDLElBQUlBLFdBQVc7UUFDYixxQkFDRSxRQUFDVDtZQUFLVSxXQUFVOzs4QkFDZCxRQUFDUjtvQkFBV1EsV0FBVTs4QkFDcEIsY0FBQSxRQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsUUFBQ1A7Z0NBQVVPLFdBQVU7MENBQXNCOzs7Ozs7MENBRzNDLFFBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLGNBQUEsUUFBQ047b0NBQU1NLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSXZCLFFBQUNUOzhCQUNDLGNBQUEsUUFBQ1U7d0JBQUlELFdBQVU7a0NBQ1o7K0JBQUlFLE1BQU07eUJBQUcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNyQixRQUFDSjtnQ0FBWUQsV0FBVTsrQkFBYks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU10QjtJQUVBLElBQUlQLFlBQVlRLE1BQU0sS0FBSyxHQUFHO1FBQzVCLHFCQUNFLFFBQUNoQjtZQUFLVSxXQUFVOzs4QkFDZCxRQUFDUjtvQkFBV1EsV0FBVTs4QkFDcEIsY0FBQSxRQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsUUFBQ1A7Z0NBQVVPLFdBQVU7MENBQXNCOzs7Ozs7MENBRzNDLFFBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLGNBQUEsUUFBQ047b0NBQU1NLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSXZCLFFBQUNUOzhCQUNDLGNBQUEsUUFBQ2dCO3dCQUFFUCxXQUFVO2tDQUFpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNdEU7SUFFQSxxQkFDRSxRQUFDVjtRQUFLVSxXQUFVOzswQkFDZCxRQUFDUjtnQkFBV1EsV0FBVTswQkFDcEIsY0FBQSxRQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsUUFBQ1A7NEJBQVVPLFdBQVU7c0NBQXNCOzs7Ozs7c0NBRzNDLFFBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLGNBQUEsUUFBQ0w7Z0NBQVVLLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTNCLFFBQUNUOzBCQUNDLGNBQUEsUUFBQ1U7b0JBQUlELFdBQVU7OEJBQ2IsY0FBQSxRQUFDaEI7OzBDQUNDLFFBQUNJOzBDQUNDLGNBQUEsUUFBQ0M7O3NEQUNDLFFBQUNGOzRDQUFVYSxXQUFVO3NEQUFZOzs7Ozs7c0RBQ2pDLFFBQUNiOzRDQUFVYSxXQUFVO3NEQUFZOzs7Ozs7c0RBQ2pDLFFBQUNiO3NEQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHZixRQUFDRjswQ0FDRWEsWUFBWUssR0FBRyxDQUFDLENBQUNLLE9BQU9DLHNCQUN2QixRQUFDcEI7OzBEQUNDLFFBQUNIO2dEQUFVYyxXQUFVOzBEQUNuQixjQUFBLFFBQUNDO29EQUFJRCxXQUFVOztzRUFDYixRQUFDSjs0REFBU0ksV0FBVTs7Ozs7O3dEQUNuQlEsTUFBTUUsSUFBSTs7Ozs7Ozs7Ozs7OzBEQUdmLFFBQUN4QjswREFDQyxjQUFBLFFBQUN5QjtvREFBS1gsV0FBVTs4REFDYlEsTUFBTUksVUFBVTs7Ozs7Ozs7Ozs7MERBR3JCLFFBQUMxQjswREFDQyxjQUFBLFFBQUNlO29EQUFJRCxXQUFVOzhEQUNaUSxNQUFNSyxPQUFPLENBQUNWLEdBQUcsQ0FBQyxDQUFDVyx1QkFDbEIsUUFBQ0g7NERBRUNYLFdBQVU7O2dFQUVUYyxPQUFPQyxJQUFJO2dFQUFDO2dFQUFHRCxPQUFPRSxNQUFNO2dFQUFDOzsyREFIekJGLE9BQU9HLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBaEJUUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQy9CO0tBMUdNWjtBQTRHTixlQUFlQSxnQkFBZ0IifQ==