import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/game/DailyNumberDisplay.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/game/DailyNumberDisplay.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useState = __vite__cjsImport2_react["useState"]; const useEffect = __vite__cjsImport2_react["useEffect"];
import FuturisticBall from "/src/components/FuturisticBall.tsx";
const DailyNumberDisplay = ({ dailyNumber, customBallNumber, onCustomBallNumberChange, isOwner = false, isTimeUp = false, gameRange = '1-1000', isActiveGame = true })=>{
    _s();
    const [showNumber, setShowNumber] = useState(false);
    const [revealComplete, setRevealComplete] = useState(false);
    // Only reveal the number if it's the owner setting it or if time is up
    const shouldRevealNumber = isOwner || isTimeUp && showNumber;
    // Calculate game title and prize based on range
    const getGameDetails = ()=>{
        switch(gameRange){
            case '1-100':
                return {
                    title: '🔥 Easy Win',
                    prize: '$100',
                    color: 'text-[#4ADE80]'
                };
            case '1-500':
                return {
                    title: '💎 Medium Challenge',
                    prize: '$300',
                    color: 'text-[#8B5CF6]'
                };
            case '1-1000':
            default:
                return {
                    title: '🎲 Jackpot Mode',
                    prize: '$1,000',
                    color: 'text-[#F97316]'
                };
        }
    };
    const gameDetails = getGameDetails();
    const ballSize = isOwner ? "lg" : "md"; // Smaller balls for the three-ball view
    // If time is up, show the number for a few seconds then hide it
    useEffect(()=>{
        if (isTimeUp && !isOwner && !revealComplete && isActiveGame) {
            setShowNumber(true);
            const timer = setTimeout(()=>{
                setShowNumber(false);
                setRevealComplete(true);
            }, 5000); // Show for 5 seconds
            return ()=>clearTimeout(timer);
        }
    }, [
        isTimeUp,
        isOwner,
        revealComplete,
        isActiveGame
    ]);
    return /*#__PURE__*/ _jsxDEV("div", {
        className: `flex flex-col items-center mb-6 gap-2 ${!isActiveGame && !isOwner ? 'opacity-70' : ''}`,
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ _jsxDEV("h2", {
                        className: "text-lg font-medium",
                        children: gameRange
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/game/DailyNumberDisplay.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: `text-sm ${gameDetails.color}`,
                        children: [
                            gameDetails.title,
                            " • Daily Prize: ",
                            gameDetails.prize
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/game/DailyNumberDisplay.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/game/DailyNumberDisplay.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(FuturisticBall, {
                number: shouldRevealNumber ? dailyNumber : undefined,
                customNumber: isOwner ? customBallNumber : undefined,
                onNumberChange: isOwner ? onCustomBallNumberChange : undefined,
                interactive: isOwner && isActiveGame,
                revealed: isOwner,
                size: ballSize,
                showQuestionMark: !shouldRevealNumber
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/DailyNumberDisplay.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            isOwner && isActiveGame && /*#__PURE__*/ _jsxDEV("p", {
                className: "text-xs text-muted-foreground",
                children: [
                    "Click to set ",
                    gameRange,
                    " number"
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/game/DailyNumberDisplay.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            !isOwner && !isTimeUp && isActiveGame && /*#__PURE__*/ _jsxDEV("p", {
                className: "text-xs text-muted-foreground animate-pulse",
                children: "Number will be revealed when time is up"
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/DailyNumberDisplay.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this),
            !isOwner && isTimeUp && showNumber && dailyNumber && isActiveGame && /*#__PURE__*/ _jsxDEV("p", {
                className: "text-xs font-medium text-primary animate-pulse",
                children: [
                    "Today's number is: ",
                    dailyNumber,
                    "!"
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/game/DailyNumberDisplay.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/game/DailyNumberDisplay.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
};
_s(DailyNumberDisplay, "nLlhNV0N7dcNQjjN/aiNpKiQJMU=");
_c = DailyNumberDisplay;
export default DailyNumberDisplay;
var _c;
$RefreshReg$(_c, "DailyNumberDisplay");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/game/DailyNumberDisplay.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/game/DailyNumberDisplay.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRhaWx5TnVtYmVyRGlzcGxheS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGdXR1cmlzdGljQmFsbCBmcm9tICdAL2NvbXBvbmVudHMvRnV0dXJpc3RpY0JhbGwnO1xuXG5pbnRlcmZhY2UgRGFpbHlOdW1iZXJEaXNwbGF5UHJvcHMge1xuICBkYWlseU51bWJlcjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjdXN0b21CYWxsTnVtYmVyOiBzdHJpbmc7XG4gIG9uQ3VzdG9tQmFsbE51bWJlckNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGlzT3duZXI/OiBib29sZWFuO1xuICBpc1RpbWVVcD86IGJvb2xlYW47XG4gIGdhbWVSYW5nZT86IHN0cmluZzsgLy8gR2FtZSByYW5nZSAoMS0xMDAsIDEtNTAwLCAxLTEwMDApXG4gIGlzQWN0aXZlR2FtZT86IGJvb2xlYW47IC8vIFdoZXRoZXIgdGhpcyBpcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGdhbWUgcmFuZ2Vcbn1cblxuY29uc3QgRGFpbHlOdW1iZXJEaXNwbGF5OiBSZWFjdC5GQzxEYWlseU51bWJlckRpc3BsYXlQcm9wcz4gPSAoe1xuICBkYWlseU51bWJlcixcbiAgY3VzdG9tQmFsbE51bWJlcixcbiAgb25DdXN0b21CYWxsTnVtYmVyQ2hhbmdlLFxuICBpc093bmVyID0gZmFsc2UsXG4gIGlzVGltZVVwID0gZmFsc2UsXG4gIGdhbWVSYW5nZSA9ICcxLTEwMDAnLCAvLyBEZWZhdWx0IHRvIGphY2twb3QgbW9kZVxuICBpc0FjdGl2ZUdhbWUgPSB0cnVlXG59KSA9PiB7XG4gIGNvbnN0IFtzaG93TnVtYmVyLCBzZXRTaG93TnVtYmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JldmVhbENvbXBsZXRlLCBzZXRSZXZlYWxDb21wbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICAvLyBPbmx5IHJldmVhbCB0aGUgbnVtYmVyIGlmIGl0J3MgdGhlIG93bmVyIHNldHRpbmcgaXQgb3IgaWYgdGltZSBpcyB1cFxuICBjb25zdCBzaG91bGRSZXZlYWxOdW1iZXIgPSBpc093bmVyIHx8IChpc1RpbWVVcCAmJiBzaG93TnVtYmVyKTtcblxuICAvLyBDYWxjdWxhdGUgZ2FtZSB0aXRsZSBhbmQgcHJpemUgYmFzZWQgb24gcmFuZ2VcbiAgY29uc3QgZ2V0R2FtZURldGFpbHMgPSAoKSA9PiB7XG4gICAgc3dpdGNoKGdhbWVSYW5nZSkge1xuICAgICAgY2FzZSAnMS0xMDAnOlxuICAgICAgICByZXR1cm4geyB0aXRsZTogJ/CflKUgRWFzeSBXaW4nLCBwcml6ZTogJyQxMDAnLCBjb2xvcjogJ3RleHQtWyM0QURFODBdJyB9O1xuICAgICAgY2FzZSAnMS01MDAnOlxuICAgICAgICByZXR1cm4geyB0aXRsZTogJ/Cfko4gTWVkaXVtIENoYWxsZW5nZScsIHByaXplOiAnJDMwMCcsIGNvbG9yOiAndGV4dC1bIzhCNUNGNl0nIH07XG4gICAgICBjYXNlICcxLTEwMDAnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHsgdGl0bGU6ICfwn46yIEphY2twb3QgTW9kZScsIHByaXplOiAnJDEsMDAwJywgY29sb3I6ICd0ZXh0LVsjRjk3MzE2XScgfTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2FtZURldGFpbHMgPSBnZXRHYW1lRGV0YWlscygpO1xuICBjb25zdCBiYWxsU2l6ZSA9IGlzT3duZXIgPyBcImxnXCIgOiBcIm1kXCI7IC8vIFNtYWxsZXIgYmFsbHMgZm9yIHRoZSB0aHJlZS1iYWxsIHZpZXdcblxuICAvLyBJZiB0aW1lIGlzIHVwLCBzaG93IHRoZSBudW1iZXIgZm9yIGEgZmV3IHNlY29uZHMgdGhlbiBoaWRlIGl0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzVGltZVVwICYmICFpc093bmVyICYmICFyZXZlYWxDb21wbGV0ZSAmJiBpc0FjdGl2ZUdhbWUpIHtcbiAgICAgIHNldFNob3dOdW1iZXIodHJ1ZSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFNob3dOdW1iZXIoZmFsc2UpO1xuICAgICAgICBzZXRSZXZlYWxDb21wbGV0ZSh0cnVlKTtcbiAgICAgIH0sIDUwMDApOyAvLyBTaG93IGZvciA1IHNlY29uZHNcbiAgICAgIFxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfVxuICB9LCBbaXNUaW1lVXAsIGlzT3duZXIsIHJldmVhbENvbXBsZXRlLCBpc0FjdGl2ZUdhbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWItNiBnYXAtMiAkeyFpc0FjdGl2ZUdhbWUgJiYgIWlzT3duZXIgPyAnb3BhY2l0eS03MCcgOiAnJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICB7Z2FtZVJhbmdlfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXNtICR7Z2FtZURldGFpbHMuY29sb3J9YH0+XG4gICAgICAgICAge2dhbWVEZXRhaWxzLnRpdGxlfSDigKIgRGFpbHkgUHJpemU6IHtnYW1lRGV0YWlscy5wcml6ZX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxGdXR1cmlzdGljQmFsbCBcbiAgICAgICAgbnVtYmVyPXtzaG91bGRSZXZlYWxOdW1iZXIgPyBkYWlseU51bWJlciA6IHVuZGVmaW5lZH1cbiAgICAgICAgY3VzdG9tTnVtYmVyPXtpc093bmVyID8gY3VzdG9tQmFsbE51bWJlciA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25OdW1iZXJDaGFuZ2U9e2lzT3duZXIgPyBvbkN1c3RvbUJhbGxOdW1iZXJDaGFuZ2UgOiB1bmRlZmluZWR9XG4gICAgICAgIGludGVyYWN0aXZlPXtpc093bmVyICYmIGlzQWN0aXZlR2FtZX1cbiAgICAgICAgcmV2ZWFsZWQ9e2lzT3duZXJ9XG4gICAgICAgIHNpemU9e2JhbGxTaXplfSBcbiAgICAgICAgc2hvd1F1ZXN0aW9uTWFyaz17IXNob3VsZFJldmVhbE51bWJlcn1cbiAgICAgIC8+XG4gICAgICBcbiAgICAgIHtpc093bmVyICYmIGlzQWN0aXZlR2FtZSAmJiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgQ2xpY2sgdG8gc2V0IHtnYW1lUmFuZ2V9IG51bWJlclxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgICAgXG4gICAgICB7IWlzT3duZXIgJiYgIWlzVGltZVVwICYmIGlzQWN0aXZlR2FtZSAmJiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGFuaW1hdGUtcHVsc2VcIj5cbiAgICAgICAgICBOdW1iZXIgd2lsbCBiZSByZXZlYWxlZCB3aGVuIHRpbWUgaXMgdXBcbiAgICAgICAgPC9wPlxuICAgICAgKX1cbiAgICAgIFxuICAgICAgeyFpc093bmVyICYmIGlzVGltZVVwICYmIHNob3dOdW1iZXIgJiYgZGFpbHlOdW1iZXIgJiYgaXNBY3RpdmVHYW1lICYmIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXByaW1hcnkgYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgIFRvZGF5J3MgbnVtYmVyIGlzOiB7ZGFpbHlOdW1iZXJ9IVxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFpbHlOdW1iZXJEaXNwbGF5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGdXR1cmlzdGljQmFsbCIsIkRhaWx5TnVtYmVyRGlzcGxheSIsImRhaWx5TnVtYmVyIiwiY3VzdG9tQmFsbE51bWJlciIsIm9uQ3VzdG9tQmFsbE51bWJlckNoYW5nZSIsImlzT3duZXIiLCJpc1RpbWVVcCIsImdhbWVSYW5nZSIsImlzQWN0aXZlR2FtZSIsInNob3dOdW1iZXIiLCJzZXRTaG93TnVtYmVyIiwicmV2ZWFsQ29tcGxldGUiLCJzZXRSZXZlYWxDb21wbGV0ZSIsInNob3VsZFJldmVhbE51bWJlciIsImdldEdhbWVEZXRhaWxzIiwidGl0bGUiLCJwcml6ZSIsImNvbG9yIiwiZ2FtZURldGFpbHMiLCJiYWxsU2l6ZSIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsIm51bWJlciIsInVuZGVmaW5lZCIsImN1c3RvbU51bWJlciIsIm9uTnVtYmVyQ2hhbmdlIiwiaW50ZXJhY3RpdmUiLCJyZXZlYWxlZCIsInNpemUiLCJzaG93UXVlc3Rpb25NYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxTQUFTLFFBQVEsUUFBUTtBQUNuRCxPQUFPQyxvQkFBb0IsOEJBQThCO0FBWXpELE1BQU1DLHFCQUF3RCxDQUFDLEVBQzdEQyxXQUFXLEVBQ1hDLGdCQUFnQixFQUNoQkMsd0JBQXdCLEVBQ3hCQyxVQUFVLEtBQUssRUFDZkMsV0FBVyxLQUFLLEVBQ2hCQyxZQUFZLFFBQVEsRUFDcEJDLGVBQWUsSUFBSSxFQUNwQjs7SUFDQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1osU0FBUztJQUM3QyxNQUFNLENBQUNhLGdCQUFnQkMsa0JBQWtCLEdBQUdkLFNBQVM7SUFFckQsdUVBQXVFO0lBQ3ZFLE1BQU1lLHFCQUFxQlIsV0FBWUMsWUFBWUc7SUFFbkQsZ0RBQWdEO0lBQ2hELE1BQU1LLGlCQUFpQjtRQUNyQixPQUFPUDtZQUNMLEtBQUs7Z0JBQ0gsT0FBTztvQkFBRVEsT0FBTztvQkFBZUMsT0FBTztvQkFBUUMsT0FBTztnQkFBaUI7WUFDeEUsS0FBSztnQkFDSCxPQUFPO29CQUFFRixPQUFPO29CQUF1QkMsT0FBTztvQkFBUUMsT0FBTztnQkFBaUI7WUFDaEYsS0FBSztZQUNMO2dCQUNFLE9BQU87b0JBQUVGLE9BQU87b0JBQW1CQyxPQUFPO29CQUFVQyxPQUFPO2dCQUFpQjtRQUNoRjtJQUNGO0lBRUEsTUFBTUMsY0FBY0o7SUFDcEIsTUFBTUssV0FBV2QsVUFBVSxPQUFPLE1BQU0sd0NBQXdDO0lBRWhGLGdFQUFnRTtJQUNoRU4sVUFBVTtRQUNSLElBQUlPLFlBQVksQ0FBQ0QsV0FBVyxDQUFDTSxrQkFBa0JILGNBQWM7WUFDM0RFLGNBQWM7WUFFZCxNQUFNVSxRQUFRQyxXQUFXO2dCQUN2QlgsY0FBYztnQkFDZEUsa0JBQWtCO1lBQ3BCLEdBQUcsT0FBTyxxQkFBcUI7WUFFL0IsT0FBTyxJQUFNVSxhQUFhRjtRQUM1QjtJQUNGLEdBQUc7UUFBQ2Q7UUFBVUQ7UUFBU007UUFBZ0JIO0tBQWE7SUFFcEQscUJBQ0UsUUFBQ2U7UUFBSUMsV0FBVyxDQUFDLHNDQUFzQyxFQUFFLENBQUNoQixnQkFBZ0IsQ0FBQ0gsVUFBVSxlQUFlLEdBQUcsQ0FBQzs7MEJBQ3RHLFFBQUNrQjtnQkFBSUMsV0FBVTs7a0NBQ2IsUUFBQ0M7d0JBQUdELFdBQVU7a0NBQ1hqQjs7Ozs7O2tDQUVILFFBQUNtQjt3QkFBRUYsV0FBVyxDQUFDLFFBQVEsRUFBRU4sWUFBWUQsS0FBSyxDQUFDLENBQUM7OzRCQUN6Q0MsWUFBWUgsS0FBSzs0QkFBQzs0QkFBaUJHLFlBQVlGLEtBQUs7Ozs7Ozs7Ozs7Ozs7MEJBSXpELFFBQUNoQjtnQkFDQzJCLFFBQVFkLHFCQUFxQlgsY0FBYzBCO2dCQUMzQ0MsY0FBY3hCLFVBQVVGLG1CQUFtQnlCO2dCQUMzQ0UsZ0JBQWdCekIsVUFBVUQsMkJBQTJCd0I7Z0JBQ3JERyxhQUFhMUIsV0FBV0c7Z0JBQ3hCd0IsVUFBVTNCO2dCQUNWNEIsTUFBTWQ7Z0JBQ05lLGtCQUFrQixDQUFDckI7Ozs7OztZQUdwQlIsV0FBV0csOEJBQ1YsUUFBQ2tCO2dCQUFFRixXQUFVOztvQkFBZ0M7b0JBQzdCakI7b0JBQVU7Ozs7Ozs7WUFJM0IsQ0FBQ0YsV0FBVyxDQUFDQyxZQUFZRSw4QkFDeEIsUUFBQ2tCO2dCQUFFRixXQUFVOzBCQUE4Qzs7Ozs7O1lBSzVELENBQUNuQixXQUFXQyxZQUFZRyxjQUFjUCxlQUFlTSw4QkFDcEQsUUFBQ2tCO2dCQUFFRixXQUFVOztvQkFBaUQ7b0JBQ3hDdEI7b0JBQVk7Ozs7Ozs7Ozs7Ozs7QUFLMUM7R0FyRk1EO0tBQUFBO0FBdUZOLGVBQWVBLG1CQUFtQiJ9