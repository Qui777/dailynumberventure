import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/game/GameContent.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/game/GameContent.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react;
import { useGameContext } from "/src/context/GameContext.tsx";
import Leaderboard from "/src/components/leaderboard/Leaderboard.tsx";
import StreakProgress from "/src/components/streak/StreakProgress.tsx";
const GameContent = ()=>{
    _s();
    const { currentStreak, leaderboardEntries, isOwner } = useGameContext();
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-8",
        children: [
            !isOwner && /*#__PURE__*/ _jsxDEV(StreakProgress, {
                currentStreak: currentStreak
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/GameContent.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Leaderboard, {
                entries: leaderboardEntries
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/GameContent.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/game/GameContent.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_s(GameContent, "jYBBMWU43MqxIDUEE30YE2VBR6o=", false, function() {
    return [
        useGameContext
    ];
});
_c = GameContent;
export default GameContent;
var _c;
$RefreshReg$(_c, "GameContent");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/game/GameContent.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/game/GameContent.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbWVDb250ZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHYW1lQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9HYW1lQ29udGV4dCc7XG5pbXBvcnQgTGVhZGVyYm9hcmQgZnJvbSAnQC9jb21wb25lbnRzL2xlYWRlcmJvYXJkL0xlYWRlcmJvYXJkJztcbmltcG9ydCBTdHJlYWtQcm9ncmVzcyBmcm9tICdAL2NvbXBvbmVudHMvc3RyZWFrL1N0cmVha1Byb2dyZXNzJztcblxuY29uc3QgR2FtZUNvbnRlbnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IGN1cnJlbnRTdHJlYWssIGxlYWRlcmJvYXJkRW50cmllcywgaXNPd25lciB9ID0gdXNlR2FtZUNvbnRleHQoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XG4gICAgICB7IWlzT3duZXIgJiYgKFxuICAgICAgICA8U3RyZWFrUHJvZ3Jlc3MgY3VycmVudFN0cmVhaz17Y3VycmVudFN0cmVha30gLz5cbiAgICAgICl9XG4gICAgICA8TGVhZGVyYm9hcmQgZW50cmllcz17bGVhZGVyYm9hcmRFbnRyaWVzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRlbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VHYW1lQ29udGV4dCIsIkxlYWRlcmJvYXJkIiwiU3RyZWFrUHJvZ3Jlc3MiLCJHYW1lQ29udGVudCIsImN1cnJlbnRTdHJlYWsiLCJsZWFkZXJib2FyZEVudHJpZXMiLCJpc093bmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZW50cmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxjQUFjLFFBQVEsd0JBQXdCO0FBQ3ZELE9BQU9DLGlCQUFpQix1Q0FBdUM7QUFDL0QsT0FBT0Msb0JBQW9CLHFDQUFxQztBQUVoRSxNQUFNQyxjQUF3Qjs7SUFDNUIsTUFBTSxFQUFFQyxhQUFhLEVBQUVDLGtCQUFrQixFQUFFQyxPQUFPLEVBQUUsR0FBR047SUFFdkQscUJBQ0UsUUFBQ087UUFBSUMsV0FBVTs7WUFDWixDQUFDRix5QkFDQSxRQUFDSjtnQkFBZUUsZUFBZUE7Ozs7OzswQkFFakMsUUFBQ0g7Z0JBQVlRLFNBQVNKOzs7Ozs7Ozs7Ozs7QUFHNUI7R0FYTUY7O1FBQ21ESDs7O0tBRG5ERztBQWFOLGVBQWVBLFlBQVkifQ==