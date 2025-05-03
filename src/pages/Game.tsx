import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Game.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/pages/Game.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useEffect = __vite__cjsImport2_react["useEffect"];
import GameLayout from "/src/components/game/GameLayout.tsx?t=1744653378689";
import GameContent from "/src/components/game/GameContent.tsx";
import { GameProvider, useGameContext } from "/src/context/GameContext.tsx";
const GameInner = ()=>{
    _s();
    const { guessNumber, setGuessNumber, customBallNumber, dailyNumber, dailyNumbers, attempts, hasPaid, setHasPaid, isSubmitting, dailyAttemptUsed, midnightTonight, instructionSections, playerEntries, isPaymentModalOpen, setIsPaymentModalOpen, handleCustomBallNumberChange, handleTimerComplete, handleSubmitGuess, handleResetGuess, handlePaymentComplete, isOwner, setPlayerName, selectedGameRange, setSelectedGameRange } = useGameContext();
    // Check if the user has already paid from localStorage
    useEffect(()=>{
        const username = localStorage.getItem('username');
        const gameRange = localStorage.getItem('gameRange');
        if (username) {
            setPlayerName(username);
            setHasPaid(true);
        }
        // Also load the previously selected game range
        if (gameRange) {
            setSelectedGameRange(gameRange);
        }
    }, [
        setHasPaid,
        setPlayerName,
        setSelectedGameRange
    ]);
    return /*#__PURE__*/ _jsxDEV(GameLayout, {
        title: "Today's Number Quest",
        subtitle: isOwner ? "Set today's secret numbers for all game modes" : "Guess the secret number in your chosen game mode",
        gameProps: {
            guessNumber,
            setGuessNumber,
            customBallNumber,
            onCustomBallNumberChange: handleCustomBallNumberChange,
            dailyNumber,
            dailyNumbers,
            attempts,
            hasPaid,
            isSubmitting,
            dailyAttemptUsed,
            endTime: midnightTonight,
            instructionSections,
            onTimerComplete: handleTimerComplete,
            onSubmitGuess: handleSubmitGuess,
            onResetGuess: handleResetGuess,
            isOwner,
            playerEntries,
            selectedGameRange,
            setSelectedGameRange
        },
        modalProps: {
            isOpen: isPaymentModalOpen,
            onClose: ()=>setIsPaymentModalOpen(false),
            onPaymentComplete: handlePaymentComplete,
            gameRange: selectedGameRange // Pass the selected game range to the modal
        },
        children: /*#__PURE__*/ _jsxDEV(GameContent, {}, void 0, false, {
            fileName: "/dev-server/src/pages/Game.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/pages/Game.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
};
_s(GameInner, "N2xD+m5HKi0rvULqifzsNdr1nYQ=", false, function() {
    return [
        useGameContext
    ];
});
_c = GameInner;
const Game = ()=>{
    return /*#__PURE__*/ _jsxDEV(GameProvider, {
        children: /*#__PURE__*/ _jsxDEV(GameInner, {}, void 0, false, {
            fileName: "/dev-server/src/pages/Game.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/pages/Game.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
};
_c1 = Game;
export default Game;
var _c, _c1;
$RefreshReg$(_c, "GameInner");
$RefreshReg$(_c1, "Game");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/pages/Game.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/pages/Game.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHYW1lTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9nYW1lL0dhbWVMYXlvdXQnO1xuaW1wb3J0IEdhbWVDb250ZW50IGZyb20gJ0AvY29tcG9uZW50cy9nYW1lL0dhbWVDb250ZW50JztcbmltcG9ydCB7IEdhbWVQcm92aWRlciwgdXNlR2FtZUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHQvR2FtZUNvbnRleHQnO1xuXG5jb25zdCBHYW1lSW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBndWVzc051bWJlcixcbiAgICBzZXRHdWVzc051bWJlcixcbiAgICBjdXN0b21CYWxsTnVtYmVyLFxuICAgIGRhaWx5TnVtYmVyLFxuICAgIGRhaWx5TnVtYmVycyxcbiAgICBhdHRlbXB0cyxcbiAgICBoYXNQYWlkLFxuICAgIHNldEhhc1BhaWQsXG4gICAgaXNTdWJtaXR0aW5nLFxuICAgIGRhaWx5QXR0ZW1wdFVzZWQsXG4gICAgbWlkbmlnaHRUb25pZ2h0LFxuICAgIGluc3RydWN0aW9uU2VjdGlvbnMsXG4gICAgcGxheWVyRW50cmllcyxcbiAgICBpc1BheW1lbnRNb2RhbE9wZW4sXG4gICAgc2V0SXNQYXltZW50TW9kYWxPcGVuLFxuICAgIGhhbmRsZUN1c3RvbUJhbGxOdW1iZXJDaGFuZ2UsXG4gICAgaGFuZGxlVGltZXJDb21wbGV0ZSxcbiAgICBoYW5kbGVTdWJtaXRHdWVzcyxcbiAgICBoYW5kbGVSZXNldEd1ZXNzLFxuICAgIGhhbmRsZVBheW1lbnRDb21wbGV0ZSxcbiAgICBpc093bmVyLFxuICAgIHNldFBsYXllck5hbWUsXG4gICAgc2VsZWN0ZWRHYW1lUmFuZ2UsXG4gICAgc2V0U2VsZWN0ZWRHYW1lUmFuZ2VcbiAgfSA9IHVzZUdhbWVDb250ZXh0KCk7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlIHVzZXIgaGFzIGFscmVhZHkgcGFpZCBmcm9tIGxvY2FsU3RvcmFnZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyk7XG4gICAgY29uc3QgZ2FtZVJhbmdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVSYW5nZScpO1xuICAgIFxuICAgIGlmICh1c2VybmFtZSkge1xuICAgICAgc2V0UGxheWVyTmFtZSh1c2VybmFtZSk7XG4gICAgICBzZXRIYXNQYWlkKHRydWUpO1xuICAgIH1cbiAgICBcbiAgICAvLyBBbHNvIGxvYWQgdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgZ2FtZSByYW5nZVxuICAgIGlmIChnYW1lUmFuZ2UpIHtcbiAgICAgIHNldFNlbGVjdGVkR2FtZVJhbmdlKGdhbWVSYW5nZSk7XG4gICAgfVxuICB9LCBbc2V0SGFzUGFpZCwgc2V0UGxheWVyTmFtZSwgc2V0U2VsZWN0ZWRHYW1lUmFuZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxHYW1lTGF5b3V0XG4gICAgICB0aXRsZT1cIlRvZGF5J3MgTnVtYmVyIFF1ZXN0XCJcbiAgICAgIHN1YnRpdGxlPXtpc093bmVyIFxuICAgICAgICA/IFwiU2V0IHRvZGF5J3Mgc2VjcmV0IG51bWJlcnMgZm9yIGFsbCBnYW1lIG1vZGVzXCIgXG4gICAgICAgIDogXCJHdWVzcyB0aGUgc2VjcmV0IG51bWJlciBpbiB5b3VyIGNob3NlbiBnYW1lIG1vZGVcIn1cbiAgICAgIGdhbWVQcm9wcz17e1xuICAgICAgICBndWVzc051bWJlcixcbiAgICAgICAgc2V0R3Vlc3NOdW1iZXIsXG4gICAgICAgIGN1c3RvbUJhbGxOdW1iZXIsXG4gICAgICAgIG9uQ3VzdG9tQmFsbE51bWJlckNoYW5nZTogaGFuZGxlQ3VzdG9tQmFsbE51bWJlckNoYW5nZSxcbiAgICAgICAgZGFpbHlOdW1iZXIsXG4gICAgICAgIGRhaWx5TnVtYmVycyxcbiAgICAgICAgYXR0ZW1wdHMsXG4gICAgICAgIGhhc1BhaWQsXG4gICAgICAgIGlzU3VibWl0dGluZyxcbiAgICAgICAgZGFpbHlBdHRlbXB0VXNlZCxcbiAgICAgICAgZW5kVGltZTogbWlkbmlnaHRUb25pZ2h0LFxuICAgICAgICBpbnN0cnVjdGlvblNlY3Rpb25zLFxuICAgICAgICBvblRpbWVyQ29tcGxldGU6IGhhbmRsZVRpbWVyQ29tcGxldGUsXG4gICAgICAgIG9uU3VibWl0R3Vlc3M6IGhhbmRsZVN1Ym1pdEd1ZXNzLFxuICAgICAgICBvblJlc2V0R3Vlc3M6IGhhbmRsZVJlc2V0R3Vlc3MsXG4gICAgICAgIGlzT3duZXIsXG4gICAgICAgIHBsYXllckVudHJpZXMsXG4gICAgICAgIHNlbGVjdGVkR2FtZVJhbmdlLFxuICAgICAgICBzZXRTZWxlY3RlZEdhbWVSYW5nZVxuICAgICAgfX1cbiAgICAgIG1vZGFsUHJvcHM9e3tcbiAgICAgICAgaXNPcGVuOiBpc1BheW1lbnRNb2RhbE9wZW4sXG4gICAgICAgIG9uQ2xvc2U6ICgpID0+IHNldElzUGF5bWVudE1vZGFsT3BlbihmYWxzZSksXG4gICAgICAgIG9uUGF5bWVudENvbXBsZXRlOiBoYW5kbGVQYXltZW50Q29tcGxldGUsXG4gICAgICAgIGdhbWVSYW5nZTogc2VsZWN0ZWRHYW1lUmFuZ2UgLy8gUGFzcyB0aGUgc2VsZWN0ZWQgZ2FtZSByYW5nZSB0byB0aGUgbW9kYWxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEdhbWVDb250ZW50IC8+XG4gICAgPC9HYW1lTGF5b3V0PlxuICApO1xufTtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R2FtZVByb3ZpZGVyPlxuICAgICAgPEdhbWVJbm5lciAvPlxuICAgIDwvR2FtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkdhbWVMYXlvdXQiLCJHYW1lQ29udGVudCIsIkdhbWVQcm92aWRlciIsInVzZUdhbWVDb250ZXh0IiwiR2FtZUlubmVyIiwiZ3Vlc3NOdW1iZXIiLCJzZXRHdWVzc051bWJlciIsImN1c3RvbUJhbGxOdW1iZXIiLCJkYWlseU51bWJlciIsImRhaWx5TnVtYmVycyIsImF0dGVtcHRzIiwiaGFzUGFpZCIsInNldEhhc1BhaWQiLCJpc1N1Ym1pdHRpbmciLCJkYWlseUF0dGVtcHRVc2VkIiwibWlkbmlnaHRUb25pZ2h0IiwiaW5zdHJ1Y3Rpb25TZWN0aW9ucyIsInBsYXllckVudHJpZXMiLCJpc1BheW1lbnRNb2RhbE9wZW4iLCJzZXRJc1BheW1lbnRNb2RhbE9wZW4iLCJoYW5kbGVDdXN0b21CYWxsTnVtYmVyQ2hhbmdlIiwiaGFuZGxlVGltZXJDb21wbGV0ZSIsImhhbmRsZVN1Ym1pdEd1ZXNzIiwiaGFuZGxlUmVzZXRHdWVzcyIsImhhbmRsZVBheW1lbnRDb21wbGV0ZSIsImlzT3duZXIiLCJzZXRQbGF5ZXJOYW1lIiwic2VsZWN0ZWRHYW1lUmFuZ2UiLCJzZXRTZWxlY3RlZEdhbWVSYW5nZSIsInVzZXJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdhbWVSYW5nZSIsInRpdGxlIiwic3VidGl0bGUiLCJnYW1lUHJvcHMiLCJvbkN1c3RvbUJhbGxOdW1iZXJDaGFuZ2UiLCJlbmRUaW1lIiwib25UaW1lckNvbXBsZXRlIiwib25TdWJtaXRHdWVzcyIsIm9uUmVzZXRHdWVzcyIsIm1vZGFsUHJvcHMiLCJpc09wZW4iLCJvbkNsb3NlIiwib25QYXltZW50Q29tcGxldGUiLCJHYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsT0FBT0EsU0FBU0MsU0FBUyxRQUFRLFFBQVE7QUFDekMsT0FBT0MsZ0JBQWdCLCtCQUErQjtBQUN0RCxPQUFPQyxpQkFBaUIsZ0NBQWdDO0FBQ3hELFNBQVNDLFlBQVksRUFBRUMsY0FBYyxRQUFRLHdCQUF3QjtBQUVyRSxNQUFNQyxZQUFZOztJQUNoQixNQUFNLEVBQ0pDLFdBQVcsRUFDWEMsY0FBYyxFQUNkQyxnQkFBZ0IsRUFDaEJDLFdBQVcsRUFDWEMsWUFBWSxFQUNaQyxRQUFRLEVBQ1JDLE9BQU8sRUFDUEMsVUFBVSxFQUNWQyxZQUFZLEVBQ1pDLGdCQUFnQixFQUNoQkMsZUFBZSxFQUNmQyxtQkFBbUIsRUFDbkJDLGFBQWEsRUFDYkMsa0JBQWtCLEVBQ2xCQyxxQkFBcUIsRUFDckJDLDRCQUE0QixFQUM1QkMsbUJBQW1CLEVBQ25CQyxpQkFBaUIsRUFDakJDLGdCQUFnQixFQUNoQkMscUJBQXFCLEVBQ3JCQyxPQUFPLEVBQ1BDLGFBQWEsRUFDYkMsaUJBQWlCLEVBQ2pCQyxvQkFBb0IsRUFDckIsR0FBR3pCO0lBRUosdURBQXVEO0lBQ3ZESixVQUFVO1FBQ1IsTUFBTThCLFdBQVdDLGFBQWFDLE9BQU8sQ0FBQztRQUN0QyxNQUFNQyxZQUFZRixhQUFhQyxPQUFPLENBQUM7UUFFdkMsSUFBSUYsVUFBVTtZQUNaSCxjQUFjRztZQUNkakIsV0FBVztRQUNiO1FBRUEsK0NBQStDO1FBQy9DLElBQUlvQixXQUFXO1lBQ2JKLHFCQUFxQkk7UUFDdkI7SUFDRixHQUFHO1FBQUNwQjtRQUFZYztRQUFlRTtLQUFxQjtJQUVwRCxxQkFDRSxRQUFDNUI7UUFDQ2lDLE9BQU07UUFDTkMsVUFBVVQsVUFDTixrREFDQTtRQUNKVSxXQUFXO1lBQ1Q5QjtZQUNBQztZQUNBQztZQUNBNkIsMEJBQTBCaEI7WUFDMUJaO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FFO1lBQ0FDO1lBQ0F1QixTQUFTdEI7WUFDVEM7WUFDQXNCLGlCQUFpQmpCO1lBQ2pCa0IsZUFBZWpCO1lBQ2ZrQixjQUFjakI7WUFDZEU7WUFDQVI7WUFDQVU7WUFDQUM7UUFDRjtRQUNBYSxZQUFZO1lBQ1ZDLFFBQVF4QjtZQUNSeUIsU0FBUyxJQUFNeEIsc0JBQXNCO1lBQ3JDeUIsbUJBQW1CcEI7WUFDbkJRLFdBQVdMLGtCQUFrQiw0Q0FBNEM7UUFDM0U7a0JBRUEsY0FBQSxRQUFDMUI7Ozs7Ozs7Ozs7QUFHUDtHQWpGTUc7O1FBMEJBRDs7O0tBMUJBQztBQW1GTixNQUFNeUMsT0FBTztJQUNYLHFCQUNFLFFBQUMzQztrQkFDQyxjQUFBLFFBQUNFOzs7Ozs7Ozs7O0FBR1A7TUFOTXlDO0FBUU4sZUFBZUEsS0FBSyJ9