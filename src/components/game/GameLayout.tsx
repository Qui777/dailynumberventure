import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/game/GameLayout.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/game/GameLayout.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useState = __vite__cjsImport2_react["useState"];
import Navbar from "/src/components/Navbar.tsx?t=1744653378689";
import AnimatedTransition from "/src/components/AnimatedTransition.tsx";
import PaymentModal from "/src/components/PaymentModal.tsx";
import DailyNumberDisplay from "/src/components/game/DailyNumberDisplay.tsx";
import GameInstructions from "/src/components/game/GameInstructions.tsx";
import GameAction from "/src/components/game/GameAction.tsx";
import PlayerEntriesList from "/src/components/game/PlayerEntriesList.tsx";
import DailyNumberHistory from "/src/components/game/DailyNumberHistory.tsx";
import { RadioGroup, RadioGroupItem } from "/src/components/ui/radio-group.tsx";
import { Label } from "/src/components/ui/label.tsx";
const SAMPLE_PAST_NUMBERS = [
    {
        date: new Date(Date.now() - 86400000),
        number: 742
    },
    {
        date: new Date(Date.now() - 86400000 * 2),
        number: 128
    },
    {
        date: new Date(Date.now() - 86400000 * 3),
        number: 563
    },
    {
        date: new Date(Date.now() - 86400000 * 4),
        number: 294
    }
];
const GameLayout = ({ title, subtitle, children, gameProps, modalProps })=>{
    _s();
    const [isTimeUp, setIsTimeUp] = useState(false);
    const handleTimerComplete = ()=>{
        setIsTimeUp(true);
        gameProps.onTimerComplete();
    };
    const gameRanges = [
        {
            id: '1-100',
            name: '🔥 Easy Win',
            prize: '$100',
            color: 'text-[#4ADE80]'
        },
        {
            id: '1-500',
            name: '💎 Medium Challenge',
            prize: '$300',
            color: 'text-[#8B5CF6]'
        },
        {
            id: '1-1000',
            name: '🎲 Jackpot Mode',
            prize: '$1,000',
            color: 'text-[#F97316]'
        }
    ];
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ _jsxDEV(Navbar, {}, void 0, false, {
                fileName: "/dev-server/src/components/game/GameLayout.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(AnimatedTransition, {
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "container mx-auto px-4 pt-24 pb-12",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        className: "max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "text-center mb-8",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h1", {
                                        className: "text-3xl font-bold tracking-tight",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-muted-foreground mt-2",
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            !gameProps.isOwner && /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex justify-center mb-8",
                                children: /*#__PURE__*/ _jsxDEV(RadioGroup, {
                                    value: gameProps.selectedGameRange,
                                    onValueChange: gameProps.setSelectedGameRange,
                                    className: "flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4",
                                    children: gameRanges.map((range)=>/*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(RadioGroupItem, {
                                                    value: range.id,
                                                    id: `radio-${range.id}`
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                    htmlFor: `radio-${range.id}`,
                                                    className: `cursor-pointer ${gameProps.selectedGameRange === range.id ? range.color : ''}`,
                                                    children: range.name
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, range.id, true, {
                                            fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                            lineNumber: 96,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                                children: gameRanges.map((range)=>/*#__PURE__*/ _jsxDEV(DailyNumberDisplay, {
                                        dailyNumber: gameProps.dailyNumbers[range.id],
                                        customBallNumber: range.id === gameProps.selectedGameRange ? gameProps.customBallNumber : '',
                                        onCustomBallNumberChange: gameProps.onCustomBallNumberChange,
                                        isOwner: gameProps.isOwner,
                                        isTimeUp: isTimeUp,
                                        gameRange: range.id,
                                        isActiveGame: range.id === gameProps.selectedGameRange || gameProps.isOwner
                                    }, range.id, false, {
                                        fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(GameInstructions, {
                                        instructionSections: gameProps.instructionSections
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(GameAction, {
                                        guessNumber: gameProps.guessNumber,
                                        setGuessNumber: gameProps.setGuessNumber,
                                        attempts: gameProps.attempts,
                                        hasPaid: gameProps.hasPaid,
                                        isSubmitting: gameProps.isSubmitting,
                                        dailyAttemptUsed: gameProps.dailyAttemptUsed,
                                        endTime: gameProps.endTime,
                                        onTimerComplete: handleTimerComplete,
                                        onSubmitGuess: gameProps.onSubmitGuess,
                                        onResetGuess: gameProps.onResetGuess,
                                        isOwner: gameProps.isOwner,
                                        selectedGameRange: gameProps.selectedGameRange
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(PlayerEntriesList, {
                                entries: gameProps.playerEntries,
                                isOwner: gameProps.isOwner || false
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(DailyNumberHistory, {
                                pastNumbers: SAMPLE_PAST_NUMBERS,
                                todayNumber: gameProps.dailyNumber,
                                isTimeUp: isTimeUp
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/GameLayout.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            children
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/game/GameLayout.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/GameLayout.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/GameLayout.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(PaymentModal, {
                isOpen: modalProps.isOpen,
                onClose: modalProps.onClose,
                onPaymentComplete: modalProps.onPaymentComplete
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/GameLayout.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/game/GameLayout.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
};
_s(GameLayout, "sCOdoibeALLZ2+tQtSNqI2oUNc8=");
_c = GameLayout;
export default GameLayout;
var _c;
$RefreshReg$(_c, "GameLayout");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/game/GameLayout.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/game/GameLayout.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbWVMYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgQW5pbWF0ZWRUcmFuc2l0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9BbmltYXRlZFRyYW5zaXRpb24nO1xuaW1wb3J0IFBheW1lbnRNb2RhbCBmcm9tICdAL2NvbXBvbmVudHMvUGF5bWVudE1vZGFsJztcbmltcG9ydCBEYWlseU51bWJlckRpc3BsYXkgZnJvbSAnLi9EYWlseU51bWJlckRpc3BsYXknO1xuaW1wb3J0IEdhbWVJbnN0cnVjdGlvbnMgZnJvbSAnLi9HYW1lSW5zdHJ1Y3Rpb25zJztcbmltcG9ydCBHYW1lQWN0aW9uIGZyb20gJy4vR2FtZUFjdGlvbic7XG5pbXBvcnQgUGxheWVyRW50cmllc0xpc3QsIHsgUGxheWVyRW50cnkgfSBmcm9tICcuL1BsYXllckVudHJpZXNMaXN0JztcbmltcG9ydCBDb3VudGRvd25UaW1lciBmcm9tICdAL2NvbXBvbmVudHMvQ291bnRkb3duVGltZXInO1xuaW1wb3J0IERhaWx5TnVtYmVySGlzdG9yeSBmcm9tICcuL0RhaWx5TnVtYmVySGlzdG9yeSc7XG5pbXBvcnQgeyBSYWRpb0dyb3VwLCBSYWRpb0dyb3VwSXRlbSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9yYWRpby1ncm91cCc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9sYWJlbCc7XG5cbmludGVyZmFjZSBHYW1lTGF5b3V0UHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZ2FtZVByb3BzOiB7XG4gICAgZ3Vlc3NOdW1iZXI6IG51bWJlcjtcbiAgICBzZXRHdWVzc051bWJlcjogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgY3VzdG9tQmFsbE51bWJlcjogc3RyaW5nO1xuICAgIG9uQ3VzdG9tQmFsbE51bWJlckNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgZGFpbHlOdW1iZXI6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBkYWlseU51bWJlcnM6IFJlY29yZDxzdHJpbmcsIG51bWJlciB8IHVuZGVmaW5lZD47XG4gICAgYXR0ZW1wdHM6IG51bWJlcltdO1xuICAgIGhhc1BhaWQ6IGJvb2xlYW47XG4gICAgaXNTdWJtaXR0aW5nOiBib29sZWFuO1xuICAgIGRhaWx5QXR0ZW1wdFVzZWQ6IGJvb2xlYW47XG4gICAgZW5kVGltZTogRGF0ZTtcbiAgICBpbnN0cnVjdGlvblNlY3Rpb25zOiBBcnJheTx7dGl0bGU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZ30+O1xuICAgIG9uVGltZXJDb21wbGV0ZTogKCkgPT4gdm9pZDtcbiAgICBvblN1Ym1pdEd1ZXNzOiAoKSA9PiB2b2lkO1xuICAgIG9uUmVzZXRHdWVzczogKCkgPT4gdm9pZDtcbiAgICBpc093bmVyPzogYm9vbGVhbjtcbiAgICBwbGF5ZXJFbnRyaWVzOiBQbGF5ZXJFbnRyeVtdO1xuICAgIHNlbGVjdGVkR2FtZVJhbmdlOiBzdHJpbmc7XG4gICAgc2V0U2VsZWN0ZWRHYW1lUmFuZ2U6IChyYW5nZTogc3RyaW5nKSA9PiB2b2lkO1xuICB9O1xuICBtb2RhbFByb3BzOiB7XG4gICAgaXNPcGVuOiBib29sZWFuO1xuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gICAgb25QYXltZW50Q29tcGxldGU6IChwbGF5ZXJOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgZ2FtZVJhbmdlOiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IFNBTVBMRV9QQVNUX05VTUJFUlMgPSBbXG4gIHsgZGF0ZTogbmV3IERhdGUoRGF0ZS5ub3coKSAtIDg2NDAwMDAwKSwgbnVtYmVyOiA3NDIgfSwgLy8geWVzdGVyZGF5XG4gIHsgZGF0ZTogbmV3IERhdGUoRGF0ZS5ub3coKSAtIDg2NDAwMDAwICogMiksIG51bWJlcjogMTI4IH0sIC8vIDIgZGF5cyBhZ29cbiAgeyBkYXRlOiBuZXcgRGF0ZShEYXRlLm5vdygpIC0gODY0MDAwMDAgKiAzKSwgbnVtYmVyOiA1NjMgfSwgLy8gMyBkYXlzIGFnb1xuICB7IGRhdGU6IG5ldyBEYXRlKERhdGUubm93KCkgLSA4NjQwMDAwMCAqIDQpLCBudW1iZXI6IDI5NCB9LCAvLyA0IGRheXMgYWdvXG5dO1xuXG5jb25zdCBHYW1lTGF5b3V0OiBSZWFjdC5GQzxHYW1lTGF5b3V0UHJvcHM+ID0gKHsgXG4gIHRpdGxlLCBcbiAgc3VidGl0bGUsXG4gIGNoaWxkcmVuLFxuICBnYW1lUHJvcHMsXG4gIG1vZGFsUHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2lzVGltZVVwLCBzZXRJc1RpbWVVcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBjb25zdCBoYW5kbGVUaW1lckNvbXBsZXRlID0gKCkgPT4ge1xuICAgIHNldElzVGltZVVwKHRydWUpO1xuICAgIGdhbWVQcm9wcy5vblRpbWVyQ29tcGxldGUoKTtcbiAgfTtcblxuICBjb25zdCBnYW1lUmFuZ2VzID0gW1xuICAgIHsgaWQ6ICcxLTEwMCcsIG5hbWU6ICfwn5SlIEVhc3kgV2luJywgcHJpemU6ICckMTAwJywgY29sb3I6ICd0ZXh0LVsjNEFERTgwXScgfSxcbiAgICB7IGlkOiAnMS01MDAnLCBuYW1lOiAn8J+SjiBNZWRpdW0gQ2hhbGxlbmdlJywgcHJpemU6ICckMzAwJywgY29sb3I6ICd0ZXh0LVsjOEI1Q0Y2XScgfSxcbiAgICB7IGlkOiAnMS0xMDAwJywgbmFtZTogJ/CfjrIgSmFja3BvdCBNb2RlJywgcHJpemU6ICckMSwwMDAnLCBjb2xvcjogJ3RleHQtWyNGOTczMTZdJyB9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICBcbiAgICAgIDxBbmltYXRlZFRyYW5zaXRpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBwdC0yNCBwYi0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0XCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0yXCI+XG4gICAgICAgICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgeyFnYW1lUHJvcHMuaXNPd25lciAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi04XCI+XG4gICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Z2FtZVByb3BzLnNlbGVjdGVkR2FtZVJhbmdlfVxuICAgICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17Z2FtZVByb3BzLnNldFNlbGVjdGVkR2FtZVJhbmdlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTEgc206ZmxleC1yb3cgc206c3BhY2UteS0wIHNtOnNwYWNlLXgtNFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2dhbWVSYW5nZXMubWFwKChyYW5nZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cmFuZ2UuaWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwSXRlbSB2YWx1ZT17cmFuZ2UuaWR9IGlkPXtgcmFkaW8tJHtyYW5nZS5pZH1gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2ByYWRpby0ke3JhbmdlLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke2dhbWVQcm9wcy5zZWxlY3RlZEdhbWVSYW5nZSA9PT0gcmFuZ2UuaWQgPyByYW5nZS5jb2xvciA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JhbmdlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC02IG1iLThcIj5cbiAgICAgICAgICAgICAge2dhbWVSYW5nZXMubWFwKChyYW5nZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxEYWlseU51bWJlckRpc3BsYXkgXG4gICAgICAgICAgICAgICAgICBrZXk9e3JhbmdlLmlkfVxuICAgICAgICAgICAgICAgICAgZGFpbHlOdW1iZXI9e2dhbWVQcm9wcy5kYWlseU51bWJlcnNbcmFuZ2UuaWRdfVxuICAgICAgICAgICAgICAgICAgY3VzdG9tQmFsbE51bWJlcj17cmFuZ2UuaWQgPT09IGdhbWVQcm9wcy5zZWxlY3RlZEdhbWVSYW5nZSA/IGdhbWVQcm9wcy5jdXN0b21CYWxsTnVtYmVyIDogJyd9XG4gICAgICAgICAgICAgICAgICBvbkN1c3RvbUJhbGxOdW1iZXJDaGFuZ2U9e2dhbWVQcm9wcy5vbkN1c3RvbUJhbGxOdW1iZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBpc093bmVyPXtnYW1lUHJvcHMuaXNPd25lcn1cbiAgICAgICAgICAgICAgICAgIGlzVGltZVVwPXtpc1RpbWVVcH1cbiAgICAgICAgICAgICAgICAgIGdhbWVSYW5nZT17cmFuZ2UuaWR9XG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZUdhbWU9e3JhbmdlLmlkID09PSBnYW1lUHJvcHMuc2VsZWN0ZWRHYW1lUmFuZ2UgfHwgZ2FtZVByb3BzLmlzT3duZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICAgICAgICAgIDxHYW1lSW5zdHJ1Y3Rpb25zIGluc3RydWN0aW9uU2VjdGlvbnM9e2dhbWVQcm9wcy5pbnN0cnVjdGlvblNlY3Rpb25zfSAvPlxuICAgICAgICAgICAgICA8R2FtZUFjdGlvbiBcbiAgICAgICAgICAgICAgICBndWVzc051bWJlcj17Z2FtZVByb3BzLmd1ZXNzTnVtYmVyfVxuICAgICAgICAgICAgICAgIHNldEd1ZXNzTnVtYmVyPXtnYW1lUHJvcHMuc2V0R3Vlc3NOdW1iZXJ9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHM9e2dhbWVQcm9wcy5hdHRlbXB0c31cbiAgICAgICAgICAgICAgICBoYXNQYWlkPXtnYW1lUHJvcHMuaGFzUGFpZH1cbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc9e2dhbWVQcm9wcy5pc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgZGFpbHlBdHRlbXB0VXNlZD17Z2FtZVByb3BzLmRhaWx5QXR0ZW1wdFVzZWR9XG4gICAgICAgICAgICAgICAgZW5kVGltZT17Z2FtZVByb3BzLmVuZFRpbWV9XG4gICAgICAgICAgICAgICAgb25UaW1lckNvbXBsZXRlPXtoYW5kbGVUaW1lckNvbXBsZXRlfVxuICAgICAgICAgICAgICAgIG9uU3VibWl0R3Vlc3M9e2dhbWVQcm9wcy5vblN1Ym1pdEd1ZXNzfVxuICAgICAgICAgICAgICAgIG9uUmVzZXRHdWVzcz17Z2FtZVByb3BzLm9uUmVzZXRHdWVzc31cbiAgICAgICAgICAgICAgICBpc093bmVyPXtnYW1lUHJvcHMuaXNPd25lcn1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEdhbWVSYW5nZT17Z2FtZVByb3BzLnNlbGVjdGVkR2FtZVJhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxQbGF5ZXJFbnRyaWVzTGlzdCBcbiAgICAgICAgICAgICAgZW50cmllcz17Z2FtZVByb3BzLnBsYXllckVudHJpZXN9IFxuICAgICAgICAgICAgICBpc093bmVyPXtnYW1lUHJvcHMuaXNPd25lciB8fCBmYWxzZX0gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8RGFpbHlOdW1iZXJIaXN0b3J5XG4gICAgICAgICAgICAgIHBhc3ROdW1iZXJzPXtTQU1QTEVfUEFTVF9OVU1CRVJTfVxuICAgICAgICAgICAgICB0b2RheU51bWJlcj17Z2FtZVByb3BzLmRhaWx5TnVtYmVyfVxuICAgICAgICAgICAgICBpc1RpbWVVcD17aXNUaW1lVXB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbmltYXRlZFRyYW5zaXRpb24+XG4gICAgICBcbiAgICAgIDxQYXltZW50TW9kYWxcbiAgICAgICAgaXNPcGVuPXttb2RhbFByb3BzLmlzT3Blbn1cbiAgICAgICAgb25DbG9zZT17bW9kYWxQcm9wcy5vbkNsb3NlfVxuICAgICAgICBvblBheW1lbnRDb21wbGV0ZT17bW9kYWxQcm9wcy5vblBheW1lbnRDb21wbGV0ZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZiYXIiLCJBbmltYXRlZFRyYW5zaXRpb24iLCJQYXltZW50TW9kYWwiLCJEYWlseU51bWJlckRpc3BsYXkiLCJHYW1lSW5zdHJ1Y3Rpb25zIiwiR2FtZUFjdGlvbiIsIlBsYXllckVudHJpZXNMaXN0IiwiRGFpbHlOdW1iZXJIaXN0b3J5IiwiUmFkaW9Hcm91cCIsIlJhZGlvR3JvdXBJdGVtIiwiTGFiZWwiLCJTQU1QTEVfUEFTVF9OVU1CRVJTIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJudW1iZXIiLCJHYW1lTGF5b3V0IiwidGl0bGUiLCJzdWJ0aXRsZSIsImNoaWxkcmVuIiwiZ2FtZVByb3BzIiwibW9kYWxQcm9wcyIsImlzVGltZVVwIiwic2V0SXNUaW1lVXAiLCJoYW5kbGVUaW1lckNvbXBsZXRlIiwib25UaW1lckNvbXBsZXRlIiwiZ2FtZVJhbmdlcyIsImlkIiwibmFtZSIsInByaXplIiwiY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJpc093bmVyIiwidmFsdWUiLCJzZWxlY3RlZEdhbWVSYW5nZSIsIm9uVmFsdWVDaGFuZ2UiLCJzZXRTZWxlY3RlZEdhbWVSYW5nZSIsIm1hcCIsInJhbmdlIiwiaHRtbEZvciIsImRhaWx5TnVtYmVyIiwiZGFpbHlOdW1iZXJzIiwiY3VzdG9tQmFsbE51bWJlciIsIm9uQ3VzdG9tQmFsbE51bWJlckNoYW5nZSIsImdhbWVSYW5nZSIsImlzQWN0aXZlR2FtZSIsImluc3RydWN0aW9uU2VjdGlvbnMiLCJndWVzc051bWJlciIsInNldEd1ZXNzTnVtYmVyIiwiYXR0ZW1wdHMiLCJoYXNQYWlkIiwiaXNTdWJtaXR0aW5nIiwiZGFpbHlBdHRlbXB0VXNlZCIsImVuZFRpbWUiLCJvblN1Ym1pdEd1ZXNzIiwib25SZXNldEd1ZXNzIiwiZW50cmllcyIsInBsYXllckVudHJpZXMiLCJwYXN0TnVtYmVycyIsInRvZGF5TnVtYmVyIiwiaXNPcGVuIiwib25DbG9zZSIsIm9uUGF5bWVudENvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxRQUFRLFFBQVE7QUFDeEMsT0FBT0MsWUFBWSxzQkFBc0I7QUFDekMsT0FBT0Msd0JBQXdCLGtDQUFrQztBQUNqRSxPQUFPQyxrQkFBa0IsNEJBQTRCO0FBQ3JELE9BQU9DLHdCQUF3Qix1QkFBdUI7QUFDdEQsT0FBT0Msc0JBQXNCLHFCQUFxQjtBQUNsRCxPQUFPQyxnQkFBZ0IsZUFBZTtBQUN0QyxPQUFPQyx1QkFBd0Msc0JBQXNCO0FBRXJFLE9BQU9DLHdCQUF3Qix1QkFBdUI7QUFDdEQsU0FBU0MsVUFBVSxFQUFFQyxjQUFjLFFBQVEsOEJBQThCO0FBQ3pFLFNBQVNDLEtBQUssUUFBUSx3QkFBd0I7QUFtQzlDLE1BQU1DLHNCQUFzQjtJQUMxQjtRQUFFQyxNQUFNLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBSztRQUFXQyxRQUFRO0lBQUk7SUFDckQ7UUFBRUgsTUFBTSxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssV0FBVztRQUFJQyxRQUFRO0lBQUk7SUFDekQ7UUFBRUgsTUFBTSxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssV0FBVztRQUFJQyxRQUFRO0lBQUk7SUFDekQ7UUFBRUgsTUFBTSxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssV0FBVztRQUFJQyxRQUFRO0lBQUk7Q0FDMUQ7QUFFRCxNQUFNQyxhQUF3QyxDQUFDLEVBQzdDQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxTQUFTLEVBQ1RDLFVBQVUsRUFDWDs7SUFDQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR3hCLFNBQVM7SUFFekMsTUFBTXlCLHNCQUFzQjtRQUMxQkQsWUFBWTtRQUNaSCxVQUFVSyxlQUFlO0lBQzNCO0lBRUEsTUFBTUMsYUFBYTtRQUNqQjtZQUFFQyxJQUFJO1lBQVNDLE1BQU07WUFBZUMsT0FBTztZQUFRQyxPQUFPO1FBQWlCO1FBQzNFO1lBQUVILElBQUk7WUFBU0MsTUFBTTtZQUF1QkMsT0FBTztZQUFRQyxPQUFPO1FBQWlCO1FBQ25GO1lBQUVILElBQUk7WUFBVUMsTUFBTTtZQUFtQkMsT0FBTztZQUFVQyxPQUFPO1FBQWlCO0tBQ25GO0lBRUQscUJBQ0UsUUFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsUUFBQ2hDOzs7OzswQkFFRCxRQUFDQzswQkFDQyxjQUFBLFFBQUM4QjtvQkFBSUMsV0FBVTs4QkFDYixjQUFBLFFBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYixRQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsUUFBQ0M7d0NBQUdELFdBQVU7a0RBQXFDZjs7Ozs7O2tEQUNuRCxRQUFDaUI7d0NBQUVGLFdBQVU7a0RBQ1ZkOzs7Ozs7Ozs7Ozs7NEJBSUosQ0FBQ0UsVUFBVWUsT0FBTyxrQkFDakIsUUFBQ0o7Z0NBQUlDLFdBQVU7MENBQ2IsY0FBQSxRQUFDeEI7b0NBQ0M0QixPQUFPaEIsVUFBVWlCLGlCQUFpQjtvQ0FDbENDLGVBQWVsQixVQUFVbUIsb0JBQW9CO29DQUM3Q1AsV0FBVTs4Q0FFVE4sV0FBV2MsR0FBRyxDQUFDLENBQUNDLHNCQUNmLFFBQUNWOzRDQUFtQkMsV0FBVTs7OERBQzVCLFFBQUN2QjtvREFBZTJCLE9BQU9LLE1BQU1kLEVBQUU7b0RBQUVBLElBQUksQ0FBQyxNQUFNLEVBQUVjLE1BQU1kLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7OERBQ3hELFFBQUNqQjtvREFDQ2dDLFNBQVMsQ0FBQyxNQUFNLEVBQUVELE1BQU1kLEVBQUUsQ0FBQyxDQUFDO29EQUM1QkssV0FBVyxDQUFDLGVBQWUsRUFBRVosVUFBVWlCLGlCQUFpQixLQUFLSSxNQUFNZCxFQUFFLEdBQUdjLE1BQU1YLEtBQUssR0FBRyxHQUFHLENBQUM7OERBRXpGVyxNQUFNYixJQUFJOzs7Ozs7OzJDQU5MYSxNQUFNZCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7MENBYzFCLFFBQUNJO2dDQUFJQyxXQUFVOzBDQUNaTixXQUFXYyxHQUFHLENBQUMsQ0FBQ0Msc0JBQ2YsUUFBQ3RDO3dDQUVDd0MsYUFBYXZCLFVBQVV3QixZQUFZLENBQUNILE1BQU1kLEVBQUUsQ0FBQzt3Q0FDN0NrQixrQkFBa0JKLE1BQU1kLEVBQUUsS0FBS1AsVUFBVWlCLGlCQUFpQixHQUFHakIsVUFBVXlCLGdCQUFnQixHQUFHO3dDQUMxRkMsMEJBQTBCMUIsVUFBVTBCLHdCQUF3Qjt3Q0FDNURYLFNBQVNmLFVBQVVlLE9BQU87d0NBQzFCYixVQUFVQTt3Q0FDVnlCLFdBQVdOLE1BQU1kLEVBQUU7d0NBQ25CcUIsY0FBY1AsTUFBTWQsRUFBRSxLQUFLUCxVQUFVaUIsaUJBQWlCLElBQUlqQixVQUFVZSxPQUFPO3VDQVB0RU0sTUFBTWQsRUFBRTs7Ozs7Ozs7OzswQ0FZbkIsUUFBQ0k7Z0NBQUlDLFdBQVU7O2tEQUNiLFFBQUM1Qjt3Q0FBaUI2QyxxQkFBcUI3QixVQUFVNkIsbUJBQW1COzs7Ozs7a0RBQ3BFLFFBQUM1Qzt3Q0FDQzZDLGFBQWE5QixVQUFVOEIsV0FBVzt3Q0FDbENDLGdCQUFnQi9CLFVBQVUrQixjQUFjO3dDQUN4Q0MsVUFBVWhDLFVBQVVnQyxRQUFRO3dDQUM1QkMsU0FBU2pDLFVBQVVpQyxPQUFPO3dDQUMxQkMsY0FBY2xDLFVBQVVrQyxZQUFZO3dDQUNwQ0Msa0JBQWtCbkMsVUFBVW1DLGdCQUFnQjt3Q0FDNUNDLFNBQVNwQyxVQUFVb0MsT0FBTzt3Q0FDMUIvQixpQkFBaUJEO3dDQUNqQmlDLGVBQWVyQyxVQUFVcUMsYUFBYTt3Q0FDdENDLGNBQWN0QyxVQUFVc0MsWUFBWTt3Q0FDcEN2QixTQUFTZixVQUFVZSxPQUFPO3dDQUMxQkUsbUJBQW1CakIsVUFBVWlCLGlCQUFpQjs7Ozs7Ozs7Ozs7OzBDQUlsRCxRQUFDL0I7Z0NBQ0NxRCxTQUFTdkMsVUFBVXdDLGFBQWE7Z0NBQ2hDekIsU0FBU2YsVUFBVWUsT0FBTyxJQUFJOzs7Ozs7MENBR2hDLFFBQUM1QjtnQ0FDQ3NELGFBQWFsRDtnQ0FDYm1ELGFBQWExQyxVQUFVdUIsV0FBVztnQ0FDbENyQixVQUFVQTs7Ozs7OzRCQUdYSDs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS1AsUUFBQ2pCO2dCQUNDNkQsUUFBUTFDLFdBQVcwQyxNQUFNO2dCQUN6QkMsU0FBUzNDLFdBQVcyQyxPQUFPO2dCQUMzQkMsbUJBQW1CNUMsV0FBVzRDLGlCQUFpQjs7Ozs7Ozs7Ozs7O0FBSXZEO0dBaEhNakQ7S0FBQUE7QUFrSE4sZUFBZUEsV0FBVyJ9