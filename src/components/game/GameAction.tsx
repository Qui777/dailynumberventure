import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/game/GameAction.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/game/GameAction.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react;
import { Button } from "/src/components/ui/button.tsx";
import NumberInput from "/src/components/NumberInput.tsx";
import CountdownTimer from "/src/components/CountdownTimer.tsx";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { Loader2 } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
const GameAction = ({ guessNumber, setGuessNumber, attempts, hasPaid, isSubmitting, dailyAttemptUsed, endTime, onTimerComplete, onSubmitGuess, onResetGuess, isOwner = false, selectedGameRange })=>{
    // Get max value based on selected range
    const getMaxValue = ()=>{
        switch(selectedGameRange){
            case '1-100':
                return 100;
            case '1-500':
                return 500;
            case '1-1000':
            default:
                return 1000;
        }
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "col-span-2 md:col-span-1",
        children: /*#__PURE__*/ _jsxDEV(Card, {
            className: "h-full glass-card relative",
            children: [
                /*#__PURE__*/ _jsxDEV(CardHeader, {
                    children: /*#__PURE__*/ _jsxDEV(CardTitle, {
                        children: isOwner ? "Set Today's Number" : "Make Your Guess"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/game/GameAction.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/GameAction.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV(CardContent, {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                !isOwner && /*#__PURE__*/ _jsxDEV("label", {
                                    className: "text-sm font-medium",
                                    children: [
                                        "Your guess for today (1-",
                                        getMaxValue(),
                                        "):"
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/components/game/GameAction.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV(NumberInput, {
                                    value: guessNumber,
                                    onChange: setGuessNumber,
                                    min: 1,
                                    max: getMaxValue(),
                                    disabled: dailyAttemptUsed || isSubmitting || isOwner && hasPaid,
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/GameAction.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/game/GameAction.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        attempts.length > 0 && !isOwner && /*#__PURE__*/ _jsxDEV("div", {
                            className: "border rounded-md p-3 bg-muted/50",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "font-medium text-sm mb-2",
                                    children: "Your previous attempts:"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/GameAction.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: attempts.map((attempt, index)=>/*#__PURE__*/ _jsxDEV("span", {
                                            className: "px-2 py-1 bg-primary/10 rounded-md text-xs font-mono",
                                            children: attempt
                                        }, index, false, {
                                            fileName: "/dev-server/src/components/game/GameAction.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/GameAction.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/game/GameAction.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "border rounded-md p-3 bg-muted/30",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "text-sm font-medium mb-2",
                                    children: "Time Remaining:"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/GameAction.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV(CountdownTimer, {
                                    endTime: endTime,
                                    onComplete: onTimerComplete
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/GameAction.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/game/GameAction.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/game/GameAction.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV(CardFooter, {
                    className: "flex gap-2 pt-2",
                    children: [
                        /*#__PURE__*/ _jsxDEV(Button, {
                            onClick: onSubmitGuess,
                            disabled: dailyAttemptUsed || isSubmitting || isOwner && !hasPaid,
                            className: "w-full button-shine",
                            children: [
                                isSubmitting && /*#__PURE__*/ _jsxDEV(Loader2, {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/GameAction.tsx",
                                    lineNumber: 102,
                                    columnNumber: 30
                                }, this),
                                isOwner ? "Save Number" : hasPaid ? "Submit Guess" : "Pay to Play"
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/game/GameAction.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(Button, {
                            onClick: onResetGuess,
                            variant: "outline",
                            disabled: isSubmitting,
                            className: "w-full",
                            children: "Reset"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/game/GameAction.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/game/GameAction.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/components/game/GameAction.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/components/game/GameAction.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
};
_c = GameAction;
export default GameAction;
var _c;
$RefreshReg$(_c, "GameAction");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/game/GameAction.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/game/GameAction.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbWVBY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuaW1wb3J0IE51bWJlcklucHV0IGZyb20gJ0AvY29tcG9uZW50cy9OdW1iZXJJbnB1dCc7XG5pbXBvcnQgQ291bnRkb3duVGltZXIgZnJvbSAnQC9jb21wb25lbnRzL0NvdW50ZG93blRpbWVyJztcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkRm9vdGVyLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvY2FyZCc7XG5pbXBvcnQgeyBMb2FkZXIyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIEdhbWVBY3Rpb25Qcm9wcyB7XG4gIGd1ZXNzTnVtYmVyOiBudW1iZXI7XG4gIHNldEd1ZXNzTnVtYmVyOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZDtcbiAgYXR0ZW1wdHM6IG51bWJlcltdO1xuICBoYXNQYWlkOiBib29sZWFuO1xuICBpc1N1Ym1pdHRpbmc6IGJvb2xlYW47XG4gIGRhaWx5QXR0ZW1wdFVzZWQ6IGJvb2xlYW47XG4gIGVuZFRpbWU6IERhdGU7XG4gIG9uVGltZXJDb21wbGV0ZTogKCkgPT4gdm9pZDtcbiAgb25TdWJtaXRHdWVzczogKCkgPT4gdm9pZDtcbiAgb25SZXNldEd1ZXNzOiAoKSA9PiB2b2lkO1xuICBpc093bmVyPzogYm9vbGVhbjtcbiAgc2VsZWN0ZWRHYW1lUmFuZ2U6IHN0cmluZzsgLy8gQWRkIHRoaXMgcHJvcFxufVxuXG5jb25zdCBHYW1lQWN0aW9uOiBSZWFjdC5GQzxHYW1lQWN0aW9uUHJvcHM+ID0gKHtcbiAgZ3Vlc3NOdW1iZXIsXG4gIHNldEd1ZXNzTnVtYmVyLFxuICBhdHRlbXB0cyxcbiAgaGFzUGFpZCxcbiAgaXNTdWJtaXR0aW5nLFxuICBkYWlseUF0dGVtcHRVc2VkLFxuICBlbmRUaW1lLFxuICBvblRpbWVyQ29tcGxldGUsXG4gIG9uU3VibWl0R3Vlc3MsXG4gIG9uUmVzZXRHdWVzcyxcbiAgaXNPd25lciA9IGZhbHNlLFxuICBzZWxlY3RlZEdhbWVSYW5nZVxufSkgPT4ge1xuICAvLyBHZXQgbWF4IHZhbHVlIGJhc2VkIG9uIHNlbGVjdGVkIHJhbmdlXG4gIGNvbnN0IGdldE1heFZhbHVlID0gKCkgPT4ge1xuICAgIHN3aXRjaChzZWxlY3RlZEdhbWVSYW5nZSkge1xuICAgICAgY2FzZSAnMS0xMDAnOiByZXR1cm4gMTAwO1xuICAgICAgY2FzZSAnMS01MDAnOiByZXR1cm4gNTAwO1xuICAgICAgY2FzZSAnMS0xMDAwJzogXG4gICAgICBkZWZhdWx0OiByZXR1cm4gMTAwMDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbWQ6Y29sLXNwYW4tMVwiPlxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwiaC1mdWxsIGdsYXNzLWNhcmQgcmVsYXRpdmVcIj5cbiAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmRUaXRsZT5cbiAgICAgICAgICAgIHtpc093bmVyID8gXCJTZXQgVG9kYXkncyBOdW1iZXJcIiA6IFwiTWFrZSBZb3VyIEd1ZXNzXCJ9XG4gICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cblxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XG4gICAgICAgICAgICB7IWlzT3duZXIgJiYgKFxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIFlvdXIgZ3Vlc3MgZm9yIHRvZGF5ICgxLXtnZXRNYXhWYWx1ZSgpfSk6XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPE51bWJlcklucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtndWVzc051bWJlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEd1ZXNzTnVtYmVyfVxuICAgICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICAgIG1heD17Z2V0TWF4VmFsdWUoKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2RhaWx5QXR0ZW1wdFVzZWQgfHwgaXNTdWJtaXR0aW5nIHx8IChpc093bmVyICYmIGhhc1BhaWQpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHthdHRlbXB0cy5sZW5ndGggPiAwICYmICFpc093bmVyICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbWQgcC0zIGJnLW11dGVkLzUwXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXNtIG1iLTJcIj5Zb3VyIHByZXZpb3VzIGF0dGVtcHRzOjwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICB7YXR0ZW1wdHMubWFwKChhdHRlbXB0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicHgtMiBweS0xIGJnLXByaW1hcnkvMTAgcm91bmRlZC1tZCB0ZXh0LXhzIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICB7YXR0ZW1wdH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1tZCBwLTMgYmctbXV0ZWQvMzBcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTJcIj5UaW1lIFJlbWFpbmluZzo8L2gzPlxuICAgICAgICAgICAgPENvdW50ZG93blRpbWVyIFxuICAgICAgICAgICAgICBlbmRUaW1lPXtlbmRUaW1lfSBcbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17b25UaW1lckNvbXBsZXRlfSBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG5cbiAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBwdC0yXCI+XG4gICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0R3Vlc3N9IFxuICAgICAgICAgICAgZGlzYWJsZWQ9e2RhaWx5QXR0ZW1wdFVzZWQgfHwgaXNTdWJtaXR0aW5nIHx8IChpc093bmVyICYmICFoYXNQYWlkKX0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYnV0dG9uLXNoaW5lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNTdWJtaXR0aW5nICYmIDxMb2FkZXIyIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNCBhbmltYXRlLXNwaW5cIiAvPn1cbiAgICAgICAgICAgIHtpc093bmVyIFxuICAgICAgICAgICAgICA/IFwiU2F2ZSBOdW1iZXJcIiBcbiAgICAgICAgICAgICAgOiBoYXNQYWlkIFxuICAgICAgICAgICAgICAgID8gXCJTdWJtaXQgR3Vlc3NcIiBcbiAgICAgICAgICAgICAgICA6IFwiUGF5IHRvIFBsYXlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0R3Vlc3N9IFxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIiBcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZXNldFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQWN0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiTnVtYmVySW5wdXQiLCJDb3VudGRvd25UaW1lciIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRGb290ZXIiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiTG9hZGVyMiIsIkdhbWVBY3Rpb24iLCJndWVzc051bWJlciIsInNldEd1ZXNzTnVtYmVyIiwiYXR0ZW1wdHMiLCJoYXNQYWlkIiwiaXNTdWJtaXR0aW5nIiwiZGFpbHlBdHRlbXB0VXNlZCIsImVuZFRpbWUiLCJvblRpbWVyQ29tcGxldGUiLCJvblN1Ym1pdEd1ZXNzIiwib25SZXNldEd1ZXNzIiwiaXNPd25lciIsInNlbGVjdGVkR2FtZVJhbmdlIiwiZ2V0TWF4VmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJtaW4iLCJtYXgiLCJkaXNhYmxlZCIsImxlbmd0aCIsImgzIiwibWFwIiwiYXR0ZW1wdCIsImluZGV4Iiwic3BhbiIsIm9uQ29tcGxldGUiLCJvbkNsaWNrIiwidmFyaWFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLE1BQU0sUUFBUSx5QkFBeUI7QUFDaEQsT0FBT0MsaUJBQWlCLDJCQUEyQjtBQUNuRCxPQUFPQyxvQkFBb0IsOEJBQThCO0FBQ3pELFNBQVNDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxRQUFRLHVCQUF1QjtBQUM1RixTQUFTQyxPQUFPLFFBQVEsZUFBZTtBQWlCdkMsTUFBTUMsYUFBd0MsQ0FBQyxFQUM3Q0MsV0FBVyxFQUNYQyxjQUFjLEVBQ2RDLFFBQVEsRUFDUkMsT0FBTyxFQUNQQyxZQUFZLEVBQ1pDLGdCQUFnQixFQUNoQkMsT0FBTyxFQUNQQyxlQUFlLEVBQ2ZDLGFBQWEsRUFDYkMsWUFBWSxFQUNaQyxVQUFVLEtBQUssRUFDZkMsaUJBQWlCLEVBQ2xCO0lBQ0Msd0NBQXdDO0lBQ3hDLE1BQU1DLGNBQWM7UUFDbEIsT0FBT0Q7WUFDTCxLQUFLO2dCQUFTLE9BQU87WUFDckIsS0FBSztnQkFBUyxPQUFPO1lBQ3JCLEtBQUs7WUFDTDtnQkFBUyxPQUFPO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRSxRQUFDRTtRQUFJQyxXQUFVO2tCQUNiLGNBQUEsUUFBQ3JCO1lBQUtxQixXQUFVOzs4QkFDZCxRQUFDbEI7OEJBQ0MsY0FBQSxRQUFDQztrQ0FDRWEsVUFBVSx1QkFBdUI7Ozs7Ozs7Ozs7OzhCQUl0QyxRQUFDaEI7b0JBQVlvQixXQUFVOztzQ0FDckIsUUFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUNaLENBQUNKLHlCQUNBLFFBQUNLO29DQUFNRCxXQUFVOzt3Q0FBc0I7d0NBQ1pGO3dDQUFjOzs7Ozs7OzhDQUczQyxRQUFDckI7b0NBQ0N5QixPQUFPaEI7b0NBQ1BpQixVQUFVaEI7b0NBQ1ZpQixLQUFLO29DQUNMQyxLQUFLUDtvQ0FDTFEsVUFBVWYsb0JBQW9CRCxnQkFBaUJNLFdBQVdQO29DQUMxRFcsV0FBVTs7Ozs7Ozs7Ozs7O3dCQUliWixTQUFTbUIsTUFBTSxHQUFHLEtBQUssQ0FBQ1gseUJBQ3ZCLFFBQUNHOzRCQUFJQyxXQUFVOzs4Q0FDYixRQUFDUTtvQ0FBR1IsV0FBVTs4Q0FBMkI7Ozs7Ozs4Q0FDekMsUUFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1paLFNBQVNxQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLFFBQUNDOzRDQUFpQlosV0FBVTtzREFDekJVOzJDQURRQzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FRbkIsUUFBQ1o7NEJBQUlDLFdBQVU7OzhDQUNiLFFBQUNRO29DQUFHUixXQUFVOzhDQUEyQjs7Ozs7OzhDQUN6QyxRQUFDdEI7b0NBQ0NjLFNBQVNBO29DQUNUcUIsWUFBWXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS2xCLFFBQUNaO29CQUFXbUIsV0FBVTs7c0NBQ3BCLFFBQUN4Qjs0QkFDQ3NDLFNBQVNwQjs0QkFDVFksVUFBVWYsb0JBQW9CRCxnQkFBaUJNLFdBQVcsQ0FBQ1A7NEJBQzNEVyxXQUFVOztnQ0FFVFYsOEJBQWdCLFFBQUNOO29DQUFRZ0IsV0FBVTs7Ozs7O2dDQUNuQ0osVUFDRyxnQkFDQVAsVUFDRSxpQkFDQTs7Ozs7OztzQ0FHUixRQUFDYjs0QkFDQ3NDLFNBQVNuQjs0QkFDVG9CLFNBQVE7NEJBQ1JULFVBQVVoQjs0QkFDVlUsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtLQWxHTWY7QUFvR04sZUFBZUEsV0FBVyJ9