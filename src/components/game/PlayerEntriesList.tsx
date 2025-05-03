import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/game/PlayerEntriesList.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/game/PlayerEntriesList.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react;
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { Users, Award, Flame, Target, Gamepad, Dice1 } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
const PlayerEntriesList = ({ entries, isOwner })=>{
    // Function to render badges
    const renderBadges = (badges)=>{
        if (!badges || badges.length === 0) return null;
        return /*#__PURE__*/ _jsxDEV("div", {
            className: "flex",
            children: [
                badges.includes('leaderboard') && /*#__PURE__*/ _jsxDEV("div", {
                    className: "mr-1",
                    title: "Leaderboard Champion",
                    children: /*#__PURE__*/ _jsxDEV(Award, {
                        className: "h-4 w-4 text-yellow-500"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this),
                badges.includes('streak') && /*#__PURE__*/ _jsxDEV("div", {
                    className: "mr-1",
                    title: "Streak Warrior",
                    children: /*#__PURE__*/ _jsxDEV(Flame, {
                        className: "h-4 w-4 text-orange-500"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    };
    // Function to render game range icon
    const renderGameRangeIcon = (gameRange)=>{
        if (!gameRange) return null;
        switch(gameRange){
            case '1-100':
                return /*#__PURE__*/ _jsxDEV(Target, {
                    className: "h-4 w-4 text-green-500 mr-1",
                    "aria-label": "Easy Win (1-100)"
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                    lineNumber: 48,
                    columnNumber: 16
                }, this);
            case '1-500':
                return /*#__PURE__*/ _jsxDEV(Gamepad, {
                    className: "h-4 w-4 text-purple-500 mr-1",
                    "aria-label": "Medium Challenge (1-500)"
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                    lineNumber: 50,
                    columnNumber: 16
                }, this);
            case '1-1000':
                return /*#__PURE__*/ _jsxDEV(Dice1, {
                    className: "h-4 w-4 text-orange-500 mr-1",
                    "aria-label": "Jackpot Mode (1-1000)"
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                    lineNumber: 52,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    if (entries.length === 0) {
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
                                children: "Player Entries"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary",
                                children: /*#__PURE__*/ _jsxDEV(Users, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV(CardContent, {
                    children: /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-muted-foreground text-sm py-4 text-center",
                        children: isOwner ? "No player entries yet. Players will appear here after they make a payment." : "Be the first to enter the game!"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
            lineNumber: 60,
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
                            children: [
                                "Player Entries (",
                                entries.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary",
                            children: /*#__PURE__*/ _jsxDEV(Users, {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(CardContent, {
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ _jsxDEV("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ _jsxDEV("thead", {
                                children: /*#__PURE__*/ _jsxDEV("tr", {
                                    className: "border-b",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("th", {
                                            className: "px-4 py-2 text-left text-sm font-medium text-muted-foreground",
                                            children: "Player"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("th", {
                                            className: "px-4 py-2 text-left text-sm font-medium text-muted-foreground",
                                            children: "Game"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("th", {
                                            className: "px-4 py-2 text-left text-sm font-medium text-muted-foreground",
                                            children: "Number"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("th", {
                                            className: "px-4 py-2 text-center text-sm font-medium text-muted-foreground",
                                            children: "Streak"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("th", {
                                            className: "px-4 py-2 text-right text-sm font-medium text-muted-foreground",
                                            children: "Time"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("tbody", {
                                children: entries.map((entry)=>/*#__PURE__*/ _jsxDEV("tr", {
                                        className: "hover:bg-muted/30 transition-colors",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("td", {
                                                className: "px-4 py-3 text-sm font-medium",
                                                children: /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        entry.name,
                                                        renderBadges(entry.badges)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("td", {
                                                className: "px-4 py-3 text-sm",
                                                children: /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        renderGameRangeIcon(entry.gameRange),
                                                        entry.gameRange || 'Standard'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("td", {
                                                className: "px-4 py-3 text-sm",
                                                children: /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "px-2 py-1 bg-primary/10 text-primary rounded-full",
                                                    children: entry.number
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("td", {
                                                className: "px-4 py-3 text-sm text-center",
                                                children: entry.streak ? /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "flex items-center justify-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(Flame, {
                                                            className: "h-3.5 w-3.5 text-orange-500"
                                                        }, void 0, false, {
                                                            fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 25
                                                        }, this),
                                                        entry.streak
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 23
                                                }, this) : '-'
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("td", {
                                                className: "px-4 py-3 text-sm text-right text-muted-foreground",
                                                children: entry.timestamp.toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, entry.id, true, {
                                        fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/game/PlayerEntriesList.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
};
_c = PlayerEntriesList;
export default PlayerEntriesList;
var _c;
$RefreshReg$(_c, "PlayerEntriesList");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/game/PlayerEntriesList.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/game/PlayerEntriesList.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBsYXllckVudHJpZXNMaXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2NhcmQnO1xuaW1wb3J0IHsgVXNlcnMsIEF3YXJkLCBGbGFtZSwgVGFyZ2V0LCBHYW1lcGFkLCBEaWNlMSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICB0aW1lc3RhbXA6IERhdGU7XG4gIHN0cmVhaz86IG51bWJlcjtcbiAgYmFkZ2VzPzogc3RyaW5nW107IC8vIEJhZGdlIElEc1xuICBnYW1lUmFuZ2U/OiBzdHJpbmc7IC8vIEFkZGVkIGdhbWVSYW5nZSBwcm9wZXJ0eVxufVxuXG5pbnRlcmZhY2UgUGxheWVyRW50cmllc0xpc3RQcm9wcyB7XG4gIGVudHJpZXM6IFBsYXllckVudHJ5W107XG4gIGlzT3duZXI6IGJvb2xlYW47XG59XG5cbmNvbnN0IFBsYXllckVudHJpZXNMaXN0OiBSZWFjdC5GQzxQbGF5ZXJFbnRyaWVzTGlzdFByb3BzPiA9ICh7IGVudHJpZXMsIGlzT3duZXIgfSkgPT4ge1xuICAvLyBGdW5jdGlvbiB0byByZW5kZXIgYmFkZ2VzXG4gIGNvbnN0IHJlbmRlckJhZGdlcyA9IChiYWRnZXM/OiBzdHJpbmdbXSkgPT4ge1xuICAgIGlmICghYmFkZ2VzIHx8IGJhZGdlcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAge2JhZGdlcy5pbmNsdWRlcygnbGVhZGVyYm9hcmQnKSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xXCIgdGl0bGU9XCJMZWFkZXJib2FyZCBDaGFtcGlvblwiPlxuICAgICAgICAgICAgPEF3YXJkIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC15ZWxsb3ctNTAwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2JhZGdlcy5pbmNsdWRlcygnc3RyZWFrJykgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMVwiIHRpdGxlPVwiU3RyZWFrIFdhcnJpb3JcIj5cbiAgICAgICAgICAgIDxGbGFtZSBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtb3JhbmdlLTUwMFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHJlbmRlciBnYW1lIHJhbmdlIGljb25cbiAgY29uc3QgcmVuZGVyR2FtZVJhbmdlSWNvbiA9IChnYW1lUmFuZ2U/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIWdhbWVSYW5nZSkgcmV0dXJuIG51bGw7XG4gICAgXG4gICAgc3dpdGNoIChnYW1lUmFuZ2UpIHtcbiAgICAgIGNhc2UgJzEtMTAwJzpcbiAgICAgICAgcmV0dXJuIDxUYXJnZXQgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWdyZWVuLTUwMCBtci0xXCIgYXJpYS1sYWJlbD1cIkVhc3kgV2luICgxLTEwMClcIiAvPjtcbiAgICAgIGNhc2UgJzEtNTAwJzpcbiAgICAgICAgcmV0dXJuIDxHYW1lcGFkIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1wdXJwbGUtNTAwIG1yLTFcIiBhcmlhLWxhYmVsPVwiTWVkaXVtIENoYWxsZW5nZSAoMS01MDApXCIgLz47XG4gICAgICBjYXNlICcxLTEwMDAnOlxuICAgICAgICByZXR1cm4gPERpY2UxIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1vcmFuZ2UtNTAwIG1yLTFcIiBhcmlhLWxhYmVsPVwiSmFja3BvdCBNb2RlICgxLTEwMDApXCIgLz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImdsYXNzLWNhcmQgbXQtOFwiPlxuICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICBQbGF5ZXIgRW50cmllc1xuICAgICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtOCB3LTggcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgIDxVc2VycyBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbSBweS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICB7aXNPd25lciBcbiAgICAgICAgICAgICAgPyBcIk5vIHBsYXllciBlbnRyaWVzIHlldC4gUGxheWVycyB3aWxsIGFwcGVhciBoZXJlIGFmdGVyIHRoZXkgbWFrZSBhIHBheW1lbnQuXCJcbiAgICAgICAgICAgICAgOiBcIkJlIHRoZSBmaXJzdCB0byBlbnRlciB0aGUgZ2FtZSFcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiZ2xhc3MtY2FyZCBtdC04XCI+XG4gICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICBQbGF5ZXIgRW50cmllcyAoe2VudHJpZXMubGVuZ3RofSlcbiAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtOCB3LTggcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICA8VXNlcnMgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5QbGF5ZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+R2FtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5OdW1iZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5TdHJlYWs8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1yaWdodCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlRpbWU8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge2VudHJpZXMubWFwKChlbnRyeSkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2VudHJ5LmlkfSBjbGFzc05hbWU9XCJob3ZlcjpiZy1tdXRlZC8zMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZW50cnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyQmFkZ2VzKGVudHJ5LmJhZGdlcyl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3JlbmRlckdhbWVSYW5nZUljb24oZW50cnkuZ2FtZVJhbmdlKX1cbiAgICAgICAgICAgICAgICAgICAgICB7ZW50cnkuZ2FtZVJhbmdlIHx8ICdTdGFuZGFyZCd9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTEgYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnkgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2VudHJ5Lm51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1zbSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7ZW50cnkuc3RyZWFrID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxhbWUgY2xhc3NOYW1lPVwiaC0zLjUgdy0zLjUgdGV4dC1vcmFuZ2UtNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbnRyeS5zdHJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICctJ1xuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1zbSB0ZXh0LXJpZ2h0IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICB7ZW50cnkudGltZXN0YW1wLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckVudHJpZXNMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIlVzZXJzIiwiQXdhcmQiLCJGbGFtZSIsIlRhcmdldCIsIkdhbWVwYWQiLCJEaWNlMSIsIlBsYXllckVudHJpZXNMaXN0IiwiZW50cmllcyIsImlzT3duZXIiLCJyZW5kZXJCYWRnZXMiLCJiYWRnZXMiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsInRpdGxlIiwicmVuZGVyR2FtZVJhbmdlSWNvbiIsImdhbWVSYW5nZSIsImFyaWEtbGFiZWwiLCJwIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsImVudHJ5IiwidGQiLCJuYW1lIiwic3BhbiIsIm51bWJlciIsInN0cmVhayIsInRpbWVzdGFtcCIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsUUFBUSx1QkFBdUI7QUFD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