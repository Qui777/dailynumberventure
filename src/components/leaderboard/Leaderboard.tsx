import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/leaderboard/Leaderboard.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/leaderboard/Leaderboard.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/src/components/ui/tabs.tsx";
import { Trophy, Zap, Medal, Crown, Award } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
const Leaderboard = ({ entries })=>{
    return /*#__PURE__*/ _jsxDEV(Card, {
        className: "glass-card mt-8",
        children: [
            /*#__PURE__*/ _jsxDEV(CardHeader, {
                className: "pb-3",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ _jsxDEV(CardTitle, {
                                className: "text-lg font-medium",
                                children: "Monthly Leaderboard"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary",
                                children: /*#__PURE__*/ _jsxDEV(Trophy, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV(CardDescription, {
                        children: "Top players with the most correct guesses this month"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(CardContent, {
                children: /*#__PURE__*/ _jsxDEV(Tabs, {
                    defaultValue: "wins",
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ _jsxDEV(TabsList, {
                            className: "w-full grid grid-cols-2 mb-4",
                            children: [
                                /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                    value: "wins",
                                    children: "Most Wins"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                    value: "speed",
                                    children: "Fastest Guesses"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(TabsContent, {
                            value: "wins",
                            className: "space-y-4",
                            children: entries.length === 0 ? /*#__PURE__*/ _jsxDEV("p", {
                                className: "text-center text-muted-foreground py-4",
                                children: "No players on the leaderboard yet. Be the first to win!"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ _jsxDEV("div", {
                                className: "space-y-2",
                                children: entries.sort((a, b)=>b.totalWins - a.totalWins).slice(0, 10).map((entry, index)=>/*#__PURE__*/ _jsxDEV(LeaderboardRow, {
                                        entry: entry,
                                        rank: index + 1,
                                        metric: `${entry.totalWins} win${entry.totalWins !== 1 ? 's' : ''}`
                                    }, entry.id, false, {
                                        fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                        lineNumber: 47,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(TabsContent, {
                            value: "speed",
                            className: "space-y-4",
                            children: entries.length === 0 ? /*#__PURE__*/ _jsxDEV("p", {
                                className: "text-center text-muted-foreground py-4",
                                children: "No players on the leaderboard yet. Be the first to win!"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ _jsxDEV("div", {
                                className: "space-y-2",
                                children: entries.filter((entry)=>entry.fastestGuess !== undefined).sort((a, b)=>(a.fastestGuess || 0) - (b.fastestGuess || 0)).slice(0, 10).map((entry, index)=>/*#__PURE__*/ _jsxDEV(LeaderboardRow, {
                                        entry: entry,
                                        rank: index + 1,
                                        metric: `${entry.fastestGuess}s`
                                    }, entry.id, false, {
                                        fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                        lineNumber: 70,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = Leaderboard;
const LeaderboardRow = ({ entry, rank, metric })=>{
    // Different styling for top 3 ranks
    const getRankIcon = (rank)=>{
        switch(rank){
            case 1:
                return /*#__PURE__*/ _jsxDEV(Trophy, {
                    className: "h-5 w-5 text-yellow-500"
                }, void 0, false, {
                    fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                    lineNumber: 97,
                    columnNumber: 16
                }, this);
            case 2:
                return /*#__PURE__*/ _jsxDEV(Medal, {
                    className: "h-5 w-5 text-gray-400"
                }, void 0, false, {
                    fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                    lineNumber: 99,
                    columnNumber: 16
                }, this);
            case 3:
                return /*#__PURE__*/ _jsxDEV(Award, {
                    className: "h-5 w-5 text-amber-700"
                }, void 0, false, {
                    fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                    lineNumber: 101,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ _jsxDEV("span", {
                    className: "text-muted-foreground",
                    children: rank
                }, void 0, false, {
                    fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                    lineNumber: 103,
                    columnNumber: 16
                }, this);
        }
    };
    const getRowStyle = (rank)=>{
        switch(rank){
            case 1:
                return "bg-yellow-50 border-yellow-200";
            case 2:
                return "bg-gray-50 border-gray-200";
            case 3:
                return "bg-amber-50 border-amber-200";
            default:
                return "bg-card/50 border-border/50";
        }
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: `flex items-center p-3 rounded-lg border ${getRowStyle(rank)}`,
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "flex items-center justify-center h-8 w-8 rounded-full mr-3",
                children: getRankIcon(rank)
            }, void 0, false, {
                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "flex-1",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            className: "font-medium",
                            children: entry.name
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        entry.badges.length > 0 && /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex ml-2",
                            children: [
                                entry.badges.slice(0, 3).map((badge)=>/*#__PURE__*/ _jsxDEV("div", {
                                        className: "ml-1",
                                        title: badge.description,
                                        children: [
                                            badge.icon === 'crown' && /*#__PURE__*/ _jsxDEV(Crown, {
                                                className: "h-4 w-4 text-yellow-500"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                                lineNumber: 133,
                                                columnNumber: 46
                                            }, this),
                                            badge.icon === 'zap' && /*#__PURE__*/ _jsxDEV(Zap, {
                                                className: "h-4 w-4 text-blue-500"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                                lineNumber: 134,
                                                columnNumber: 44
                                            }, this),
                                            badge.icon === 'award' && /*#__PURE__*/ _jsxDEV(Award, {
                                                className: "h-4 w-4 text-purple-500"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                                lineNumber: 135,
                                                columnNumber: 46
                                            }, this)
                                        ]
                                    }, badge.id, true, {
                                        fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)),
                                entry.badges.length > 3 && /*#__PURE__*/ _jsxDEV("span", {
                                    className: "text-xs ml-1",
                                    children: [
                                        "+",
                                        entry.badges.length - 3
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                                    lineNumber: 138,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "text-right",
                children: /*#__PURE__*/ _jsxDEV("span", {
                    className: "font-medium",
                    children: metric
                }, void 0, false, {
                    fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/leaderboard/Leaderboard.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
};
_c1 = LeaderboardRow;
export default Leaderboard;
var _c, _c1;
$RefreshReg$(_c, "Leaderboard");
$RefreshReg$(_c1, "LeaderboardRow");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/leaderboard/Leaderboard.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/leaderboard/Leaderboard.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxlYWRlcmJvYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZERlc2NyaXB0aW9uLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvY2FyZCc7XG5pbXBvcnQgeyBUYWJzLCBUYWJzQ29udGVudCwgVGFic0xpc3QsIFRhYnNUcmlnZ2VyIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3RhYnMnO1xuaW1wb3J0IHsgTGVhZGVyYm9hcmRFbnRyeSB9IGZyb20gJ0AvdHlwZXMvcGxheWVyJztcbmltcG9ydCB7IFRyb3BoeSwgWmFwLCBNZWRhbCwgQ3Jvd24sIEF3YXJkIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIExlYWRlcmJvYXJkUHJvcHMge1xuICBlbnRyaWVzOiBMZWFkZXJib2FyZEVudHJ5W107XG59XG5cbmNvbnN0IExlYWRlcmJvYXJkOiBSZWFjdC5GQzxMZWFkZXJib2FyZFByb3BzPiA9ICh7IGVudHJpZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT1cImdsYXNzLWNhcmQgbXQtOFwiPlxuICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwicGItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgTW9udGhseSBMZWFkZXJib2FyZFxuICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC04IHctOCByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICAgIDxUcm9waHkgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPlxuICAgICAgICAgIFRvcCBwbGF5ZXJzIHdpdGggdGhlIG1vc3QgY29ycmVjdCBndWVzc2VzIHRoaXMgbW9udGhcbiAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICBcbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFRhYnMgZGVmYXVsdFZhbHVlPVwid2luc1wiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgIDxUYWJzTGlzdCBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMiBtYi00XCI+XG4gICAgICAgICAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCJ3aW5zXCI+TW9zdCBXaW5zPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICAgIDxUYWJzVHJpZ2dlciB2YWx1ZT1cInNwZWVkXCI+RmFzdGVzdCBHdWVzc2VzPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICA8L1RhYnNMaXN0PlxuICAgICAgICAgIFxuICAgICAgICAgIDxUYWJzQ29udGVudCB2YWx1ZT1cIndpbnNcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIHtlbnRyaWVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHB5LTRcIj5cbiAgICAgICAgICAgICAgICBObyBwbGF5ZXJzIG9uIHRoZSBsZWFkZXJib2FyZCB5ZXQuIEJlIHRoZSBmaXJzdCB0byB3aW4hXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAge2VudHJpZXNcbiAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnRvdGFsV2lucyAtIGEudG90YWxXaW5zKVxuICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIDEwKVxuICAgICAgICAgICAgICAgICAgLm1hcCgoZW50cnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMZWFkZXJib2FyZFJvdyBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VudHJ5LmlkfVxuICAgICAgICAgICAgICAgICAgICAgIGVudHJ5PXtlbnRyeX1cbiAgICAgICAgICAgICAgICAgICAgICByYW5rPXtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgbWV0cmljPXtgJHtlbnRyeS50b3RhbFdpbnN9IHdpbiR7ZW50cnkudG90YWxXaW5zICE9PSAxID8gJ3MnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cbiAgICAgICAgICBcbiAgICAgICAgICA8VGFic0NvbnRlbnQgdmFsdWU9XCJzcGVlZFwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAge2VudHJpZXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LW11dGVkLWZvcmVncm91bmQgcHktNFwiPlxuICAgICAgICAgICAgICAgIE5vIHBsYXllcnMgb24gdGhlIGxlYWRlcmJvYXJkIHlldC4gQmUgdGhlIGZpcnN0IHRvIHdpbiFcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICB7ZW50cmllc1xuICAgICAgICAgICAgICAgICAgLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5mYXN0ZXN0R3Vlc3MgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoYS5mYXN0ZXN0R3Vlc3MgfHwgMCkgLSAoYi5mYXN0ZXN0R3Vlc3MgfHwgMCkpXG4gICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgMTApXG4gICAgICAgICAgICAgICAgICAubWFwKChlbnRyeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExlYWRlcmJvYXJkUm93IFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZW50cnkuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgZW50cnk9e2VudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgIHJhbms9e2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgICAgICAgICBtZXRyaWM9e2Ake2VudHJ5LmZhc3Rlc3RHdWVzc31zYH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cbiAgICAgICAgPC9UYWJzPlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgTGVhZGVyYm9hcmRSb3dQcm9wcyB7XG4gIGVudHJ5OiBMZWFkZXJib2FyZEVudHJ5O1xuICByYW5rOiBudW1iZXI7XG4gIG1ldHJpYzogc3RyaW5nO1xufVxuXG5jb25zdCBMZWFkZXJib2FyZFJvdzogUmVhY3QuRkM8TGVhZGVyYm9hcmRSb3dQcm9wcz4gPSAoeyBlbnRyeSwgcmFuaywgbWV0cmljIH0pID0+IHtcbiAgLy8gRGlmZmVyZW50IHN0eWxpbmcgZm9yIHRvcCAzIHJhbmtzXG4gIGNvbnN0IGdldFJhbmtJY29uID0gKHJhbms6IG51bWJlcikgPT4ge1xuICAgIHN3aXRjaCAocmFuaykge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gPFRyb3BoeSBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQteWVsbG93LTUwMFwiIC8+O1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gPE1lZGFsIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiIC8+O1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gPEF3YXJkIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1hbWJlci03MDBcIiAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57cmFua308L3NwYW4+O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRSb3dTdHlsZSA9IChyYW5rOiBudW1iZXIpID0+IHtcbiAgICBzd2l0Y2ggKHJhbmspIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIFwiYmcteWVsbG93LTUwIGJvcmRlci15ZWxsb3ctMjAwXCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBcImJnLWdyYXktNTAgYm9yZGVyLWdyYXktMjAwXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcImJnLWFtYmVyLTUwIGJvcmRlci1hbWJlci0yMDBcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcImJnLWNhcmQvNTAgYm9yZGVyLWJvcmRlci81MFwiO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgcC0zIHJvdW5kZWQtbGcgYm9yZGVyICR7Z2V0Um93U3R5bGUocmFuayl9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtOCB3LTggcm91bmRlZC1mdWxsIG1yLTNcIj5cbiAgICAgICAge2dldFJhbmtJY29uKHJhbmspfVxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntlbnRyeS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICB7ZW50cnkuYmFkZ2VzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1sLTJcIj5cbiAgICAgICAgICAgICAge2VudHJ5LmJhZGdlcy5zbGljZSgwLCAzKS5tYXAoYmFkZ2UgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtiYWRnZS5pZH0gY2xhc3NOYW1lPVwibWwtMVwiIHRpdGxlPXtiYWRnZS5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgICB7YmFkZ2UuaWNvbiA9PT0gJ2Nyb3duJyAmJiA8Q3Jvd24gY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LXllbGxvdy01MDBcIiAvPn1cbiAgICAgICAgICAgICAgICAgIHtiYWRnZS5pY29uID09PSAnemFwJyAmJiA8WmFwIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1ibHVlLTUwMFwiIC8+fVxuICAgICAgICAgICAgICAgICAge2JhZGdlLmljb24gPT09ICdhd2FyZCcgJiYgPEF3YXJkIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1wdXJwbGUtNTAwXCIgLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICB7ZW50cnkuYmFkZ2VzLmxlbmd0aCA+IDMgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBtbC0xXCI+K3tlbnRyeS5iYWRnZXMubGVuZ3RoIC0gM308L3NwYW4+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e21ldHJpY308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRlcmJvYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIlRhYnMiLCJUYWJzQ29udGVudCIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJUcm9waHkiLCJaYXAiLCJNZWRhbCIsIkNyb3duIiwiQXdhcmQiLCJMZWFkZXJib2FyZCIsImVudHJpZXMiLCJjbGFzc05hbWUiLCJkaXYiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsImxlbmd0aCIsInAiLCJzb3J0IiwiYSIsImIiLCJ0b3RhbFdpbnMiLCJzbGljZSIsIm1hcCIsImVudHJ5IiwiaW5kZXgiLCJMZWFkZXJib2FyZFJvdyIsInJhbmsiLCJtZXRyaWMiLCJpZCIsImZpbHRlciIsImZhc3Rlc3RHdWVzcyIsInVuZGVmaW5lZCIsImdldFJhbmtJY29uIiwic3BhbiIsImdldFJvd1N0eWxlIiwibmFtZSIsImJhZGdlcyIsImJhZGdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsUUFBUSx1QkFBdUI7QUFDakcsU0FBU0MsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxRQUFRLHVCQUF1QjtBQUVoRixTQUFTQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssUUFBUSxlQUFlO0FBTWhFLE1BQU1DLGNBQTBDLENBQUMsRUFBRUMsT0FBTyxFQUFFO0lBQzFELHFCQUNF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