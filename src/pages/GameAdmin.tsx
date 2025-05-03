import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/GameAdmin.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/pages/GameAdmin.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useState = __vite__cjsImport2_react["useState"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=57c2cc69";
import { useGameContext } from "/src/context/GameContext.tsx";
import Navbar from "/src/components/Navbar.tsx?t=1744653378689";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import FuturisticBall from "/src/components/FuturisticBall.tsx";
import { Lock, Save, RotateCcw, LogOut } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=57c2cc69";
const GameAdmin = ()=>{
    _s();
    const navigate = useNavigate();
    const { isOwner, setCustomGameNumbers, customGameNumbers, midnightTonight } = useGameContext();
    // If user is not owner, redirect to home
    React.useEffect(()=>{
        if (!isOwner) {
            toast.error("You don't have permission to access this page");
            navigate('/');
        }
    }, [
        isOwner,
        navigate
    ]);
    const [localNumbers, setLocalNumbers] = useState({
        '1-100': customGameNumbers['1-100'] || '',
        '1-500': customGameNumbers['1-500'] || '',
        '1-1000': customGameNumbers['1-1000'] || ''
    });
    const handleNumberChange = (range, value)=>{
        // Only allow numeric input
        if (value === "" || /^\d+$/.test(value)) {
            setLocalNumbers((prev)=>({
                    ...prev,
                    [range]: value
                }));
        }
    };
    const handleSaveAll = ()=>{
        // Validate all numbers are within their respective ranges
        const rangeValues = {
            '1-100': {
                min: 1,
                max: 100
            },
            '1-500': {
                min: 1,
                max: 500
            },
            '1-1000': {
                min: 1,
                max: 1000
            }
        };
        // Validate each number is within its range
        let isValid = true;
        Object.entries(localNumbers).forEach(([range, value])=>{
            if (value === '') return; // Skip empty values
            const numValue = parseInt(value);
            const { min, max } = rangeValues[range];
            if (isNaN(numValue) || numValue < min || numValue > max) {
                toast.error(`Number for range ${range} must be between ${min} and ${max}`);
                isValid = false;
            }
        });
        if (!isValid) return;
        // Save numbers
        setCustomGameNumbers(localNumbers);
        toast.success("Today's numbers have been set successfully!");
    };
    const handleReset = (range)=>{
        setLocalNumbers((prev)=>({
                ...prev,
                [range]: ''
            }));
    };
    const handleLogout = ()=>{
        localStorage.removeItem('is_owner');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_email');
        toast.success('Successfully logged out from admin account');
        navigate('/', {
            replace: true
        });
    };
    const gameRangeDetails = {
        '1-100': {
            title: '🔥 Easy Win',
            prize: '$100',
            color: 'text-[#4ADE80]',
            bgColor: 'bg-gradient-to-b from-green-500/70 to-green-600/70'
        },
        '1-500': {
            title: '💎 Medium Challenge',
            prize: '$300',
            color: 'text-[#8B5CF6]',
            bgColor: 'bg-gradient-to-b from-purple-500/70 to-purple-600/70'
        },
        '1-1000': {
            title: '🎲 Jackpot Mode',
            prize: '$1,000',
            color: 'text-[#F97316]',
            bgColor: 'bg-gradient-to-b from-orange-500/70 to-orange-600/70'
        }
    };
    const formatTimeRemaining = ()=>{
        const now = new Date();
        const diff = midnightTonight.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
        return `${hours}h ${minutes}m`;
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen bg-background flex flex-col",
        children: [
            /*#__PURE__*/ _jsxDEV(Navbar, {}, void 0, false, {
                fileName: "/dev-server/src/pages/GameAdmin.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("main", {
                className: "flex-1 container max-w-6xl mx-auto pt-16 px-4 py-8",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h1", {
                                            className: "text-3xl font-bold tracking-tight",
                                            children: "Game Administration"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-muted-foreground mt-1",
                                            children: "Set today's numbers for all game ranges"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex flex-col sm:flex-row gap-3",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex items-center gap-2 bg-card p-2 rounded-md border",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Lock, {
                                                    className: "h-4 w-4 text-amber-500"
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "text-sm font-medium",
                                                    children: [
                                                        "Time remaining: ",
                                                        formatTimeRemaining()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Button, {
                                            variant: "destructive",
                                            size: "sm",
                                            onClick: handleLogout,
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(LogOut, {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                "Log Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: Object.entries(gameRangeDetails).map(([range, details])=>/*#__PURE__*/ _jsxDEV(Card, {
                                    className: "overflow-hidden border-t-4",
                                    style: {
                                        borderTopColor: details.color.replace('text-', '').replace('[#', '#').replace(']', '')
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(CardHeader, {
                                            className: `${details.bgColor} text-white`,
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(CardTitle, {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            children: range
                                                        }, void 0, false, {
                                                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            children: details.prize
                                                        }, void 0, false, {
                                                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(CardDescription, {
                                                    className: "text-white/80",
                                                    children: details.title
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(CardContent, {
                                            className: "pt-6 flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(FuturisticBall, {
                                                    customNumber: localNumbers[range],
                                                    onNumberChange: (value)=>handleNumberChange(range, value),
                                                    interactive: true,
                                                    revealed: true,
                                                    size: "lg"
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    className: "text-sm text-muted-foreground mt-3 text-center",
                                                    children: "Click on the ball to enter today's number"
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(CardFooter, {
                                            className: "flex justify-between",
                                            children: /*#__PURE__*/ _jsxDEV(Button, {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>handleReset(range),
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(RotateCcw, {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Reset"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, range, true, {
                                    fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex justify-end",
                            children: /*#__PURE__*/ _jsxDEV(Button, {
                                onClick: handleSaveAll,
                                className: "flex items-center gap-2",
                                size: "lg",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Save, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    "Save All Numbers"
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/pages/GameAdmin.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/dev-server/src/pages/GameAdmin.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/pages/GameAdmin.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/pages/GameAdmin.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/pages/GameAdmin.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
};
_s(GameAdmin, "omMItVuOkyENcC9w6mXBfbqzhWE=", false, function() {
    return [
        useNavigate,
        useGameContext
    ];
});
_c = GameAdmin;
export default GameAdmin;
var _c;
$RefreshReg$(_c, "GameAdmin");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/pages/GameAdmin.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/pages/GameAdmin.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbWVBZG1pbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlR2FtZUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHQvR2FtZUNvbnRleHQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkRGVzY3JpcHRpb24sIENhcmRGb290ZXIsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9jYXJkJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuaW1wb3J0IEZ1dHVyaXN0aWNCYWxsIGZyb20gJ0AvY29tcG9uZW50cy9GdXR1cmlzdGljQmFsbCc7XG5pbXBvcnQgeyBMb2NrLCBTYXZlLCBSb3RhdGVDY3csIExvZ091dCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3Nvbm5lcic7XG5cbmNvbnN0IEdhbWVBZG1pbiA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCB7IFxuICAgIGlzT3duZXIsIFxuICAgIHNldEN1c3RvbUdhbWVOdW1iZXJzLCBcbiAgICBjdXN0b21HYW1lTnVtYmVycywgXG4gICAgbWlkbmlnaHRUb25pZ2h0IFxuICB9ID0gdXNlR2FtZUNvbnRleHQoKTtcbiAgXG4gIC8vIElmIHVzZXIgaXMgbm90IG93bmVyLCByZWRpcmVjdCB0byBob21lXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc093bmVyKSB7XG4gICAgICB0b2FzdC5lcnJvcihcIllvdSBkb24ndCBoYXZlIHBlcm1pc3Npb24gdG8gYWNjZXNzIHRoaXMgcGFnZVwiKTtcbiAgICAgIG5hdmlnYXRlKCcvJyk7XG4gICAgfVxuICB9LCBbaXNPd25lciwgbmF2aWdhdGVdKTtcblxuICBjb25zdCBbbG9jYWxOdW1iZXJzLCBzZXRMb2NhbE51bWJlcnNdID0gdXNlU3RhdGUoe1xuICAgICcxLTEwMCc6IGN1c3RvbUdhbWVOdW1iZXJzWycxLTEwMCddIHx8ICcnLFxuICAgICcxLTUwMCc6IGN1c3RvbUdhbWVOdW1iZXJzWycxLTUwMCddIHx8ICcnLFxuICAgICcxLTEwMDAnOiBjdXN0b21HYW1lTnVtYmVyc1snMS0xMDAwJ10gfHwgJydcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlTnVtYmVyQ2hhbmdlID0gKHJhbmdlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAvLyBPbmx5IGFsbG93IG51bWVyaWMgaW5wdXRcbiAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgIHNldExvY2FsTnVtYmVycyhwcmV2ID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIFtyYW5nZV06IHZhbHVlXG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmVBbGwgPSAoKSA9PiB7XG4gICAgLy8gVmFsaWRhdGUgYWxsIG51bWJlcnMgYXJlIHdpdGhpbiB0aGVpciByZXNwZWN0aXZlIHJhbmdlc1xuICAgIGNvbnN0IHJhbmdlVmFsdWVzID0ge1xuICAgICAgJzEtMTAwJzogeyBtaW46IDEsIG1heDogMTAwIH0sXG4gICAgICAnMS01MDAnOiB7IG1pbjogMSwgbWF4OiA1MDAgfSxcbiAgICAgICcxLTEwMDAnOiB7IG1pbjogMSwgbWF4OiAxMDAwIH1cbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgZWFjaCBudW1iZXIgaXMgd2l0aGluIGl0cyByYW5nZVxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBPYmplY3QuZW50cmllcyhsb2NhbE51bWJlcnMpLmZvckVhY2goKFtyYW5nZSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnKSByZXR1cm47IC8vIFNraXAgZW1wdHkgdmFsdWVzXG4gICAgICBcbiAgICAgIGNvbnN0IG51bVZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgY29uc3QgeyBtaW4sIG1heCB9ID0gcmFuZ2VWYWx1ZXNbcmFuZ2UgYXMga2V5b2YgdHlwZW9mIHJhbmdlVmFsdWVzXTtcbiAgICAgIFxuICAgICAgaWYgKGlzTmFOKG51bVZhbHVlKSB8fCBudW1WYWx1ZSA8IG1pbiB8fCBudW1WYWx1ZSA+IG1heCkge1xuICAgICAgICB0b2FzdC5lcnJvcihgTnVtYmVyIGZvciByYW5nZSAke3JhbmdlfSBtdXN0IGJlIGJldHdlZW4gJHttaW59IGFuZCAke21heH1gKTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSByZXR1cm47XG5cbiAgICAvLyBTYXZlIG51bWJlcnNcbiAgICBzZXRDdXN0b21HYW1lTnVtYmVycyhsb2NhbE51bWJlcnMpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoXCJUb2RheSdzIG51bWJlcnMgaGF2ZSBiZWVuIHNldCBzdWNjZXNzZnVsbHkhXCIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKHJhbmdlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2NhbE51bWJlcnMocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtyYW5nZV06ICcnXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaXNfb3duZXInKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcl9uYW1lJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJfZW1haWwnKTtcbiAgICB0b2FzdC5zdWNjZXNzKCdTdWNjZXNzZnVsbHkgbG9nZ2VkIG91dCBmcm9tIGFkbWluIGFjY291bnQnKTtcbiAgICBuYXZpZ2F0ZSgnLycsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBnYW1lUmFuZ2VEZXRhaWxzID0ge1xuICAgICcxLTEwMCc6IHsgXG4gICAgICB0aXRsZTogJ/CflKUgRWFzeSBXaW4nLCBcbiAgICAgIHByaXplOiAnJDEwMCcsIFxuICAgICAgY29sb3I6ICd0ZXh0LVsjNEFERTgwXScsXG4gICAgICBiZ0NvbG9yOiAnYmctZ3JhZGllbnQtdG8tYiBmcm9tLWdyZWVuLTUwMC83MCB0by1ncmVlbi02MDAvNzAnXG4gICAgfSxcbiAgICAnMS01MDAnOiB7IFxuICAgICAgdGl0bGU6ICfwn5KOIE1lZGl1bSBDaGFsbGVuZ2UnLCBcbiAgICAgIHByaXplOiAnJDMwMCcsIFxuICAgICAgY29sb3I6ICd0ZXh0LVsjOEI1Q0Y2XScsXG4gICAgICBiZ0NvbG9yOiAnYmctZ3JhZGllbnQtdG8tYiBmcm9tLXB1cnBsZS01MDAvNzAgdG8tcHVycGxlLTYwMC83MCdcbiAgICB9LFxuICAgICcxLTEwMDAnOiB7IFxuICAgICAgdGl0bGU6ICfwn46yIEphY2twb3QgTW9kZScsIFxuICAgICAgcHJpemU6ICckMSwwMDAnLCBcbiAgICAgIGNvbG9yOiAndGV4dC1bI0Y5NzMxNl0nLFxuICAgICAgYmdDb2xvcjogJ2JnLWdyYWRpZW50LXRvLWIgZnJvbS1vcmFuZ2UtNTAwLzcwIHRvLW9yYW5nZS02MDAvNzAnXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZvcm1hdFRpbWVSZW1haW5pbmcgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkaWZmID0gbWlkbmlnaHRUb25pZ2h0LmdldFRpbWUoKSAtIG5vdy5nZXRUaW1lKCk7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGRpZmYgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgIHJldHVybiBgJHtob3Vyc31oICR7bWludXRlc31tYDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWJhY2tncm91bmQgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTEgY29udGFpbmVyIG1heC13LTZ4bCBteC1hdXRvIHB0LTE2IHB4LTQgcHktOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0XCI+R2FtZSBBZG1pbmlzdHJhdGlvbjwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgU2V0IHRvZGF5J3MgbnVtYmVycyBmb3IgYWxsIGdhbWUgcmFuZ2VzXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctY2FyZCBwLTIgcm91bmRlZC1tZCBib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8TG9jayBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtYW1iZXItNTAwXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+VGltZSByZW1haW5pbmc6IHtmb3JtYXRUaW1lUmVtYWluaW5nKCl9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExvZ091dCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICBMb2cgT3V0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZ2FtZVJhbmdlRGV0YWlscykubWFwKChbcmFuZ2UsIGRldGFpbHNdKSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkIGtleT17cmFuZ2V9IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBib3JkZXItdC00XCIgc3R5bGU9e3sgYm9yZGVyVG9wQ29sb3I6IGRldGFpbHMuY29sb3IucmVwbGFjZSgndGV4dC0nLCAnJykucmVwbGFjZSgnWyMnLCAnIycpLnJlcGxhY2UoJ10nLCAnJykgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPXtgJHtkZXRhaWxzLmJnQ29sb3J9IHRleHQtd2hpdGVgfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyYW5nZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntkZXRhaWxzLnByaXplfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzgwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwdC02IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8RnV0dXJpc3RpY0JhbGwgXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbU51bWJlcj17bG9jYWxOdW1iZXJzW3JhbmdlIGFzIGtleW9mIHR5cGVvZiBsb2NhbE51bWJlcnNdfVxuICAgICAgICAgICAgICAgICAgICBvbk51bWJlckNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVOdW1iZXJDaGFuZ2UocmFuZ2UsIHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHJldmVhbGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgb24gdGhlIGJhbGwgdG8gZW50ZXIgdG9kYXkncyBudW1iZXJcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiIFxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXNldChyYW5nZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFJvdGF0ZUNjdyBjbGFzc05hbWU9XCJoLTMgdy0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlQWxsfSBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U2F2ZSBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgU2F2ZSBBbGwgTnVtYmVyc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUFkbWluO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VOYXZpZ2F0ZSIsInVzZUdhbWVDb250ZXh0IiwiTmF2YmFyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2FyZEZvb3RlciIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJCdXR0b24iLCJGdXR1cmlzdGljQmFsbCIsIkxvY2siLCJTYXZlIiwiUm90YXRlQ2N3IiwiTG9nT3V0IiwidG9hc3QiLCJHYW1lQWRtaW4iLCJuYXZpZ2F0ZSIsImlzT3duZXIiLCJzZXRDdXN0b21HYW1lTnVtYmVycyIsImN1c3RvbUdhbWVOdW1iZXJzIiwibWlkbmlnaHRUb25pZ2h0IiwidXNlRWZmZWN0IiwiZXJyb3IiLCJsb2NhbE51bWJlcnMiLCJzZXRMb2NhbE51bWJlcnMiLCJoYW5kbGVOdW1iZXJDaGFuZ2UiLCJyYW5nZSIsInZhbHVlIiwidGVzdCIsInByZXYiLCJoYW5kbGVTYXZlQWxsIiwicmFuZ2VWYWx1ZXMiLCJtaW4iLCJtYXgiLCJpc1ZhbGlkIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJudW1WYWx1ZSIsInBhcnNlSW50IiwiaXNOYU4iLCJzdWNjZXNzIiwiaGFuZGxlUmVzZXQiLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicmVwbGFjZSIsImdhbWVSYW5nZURldGFpbHMiLCJ0aXRsZSIsInByaXplIiwiY29sb3IiLCJiZ0NvbG9yIiwiZm9ybWF0VGltZVJlbWFpbmluZyIsIm5vdyIsIkRhdGUiLCJkaWZmIiwiZ2V0VGltZSIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsInAiLCJzcGFuIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIiwibWFwIiwiZGV0YWlscyIsInN0eWxlIiwiYm9yZGVyVG9wQ29sb3IiLCJjdXN0b21OdW1iZXIiLCJvbk51bWJlckNoYW5nZSIsImludGVyYWN0aXZlIiwicmV2ZWFsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxTQUFTQyxRQUFRLFFBQVEsUUFBUTtBQUN4QyxTQUFTQyxXQUFXLFFBQVEsbUJBQW1CO0FBQy9DLFNBQVNDLGNBQWMsUUFBUSx3QkFBd0I7QUFDdkQsT0FBT0MsWUFBWSxzQkFBc0I7QUFDekMsU0FBU0MsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGVBQWUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsUUFBUSx1QkFBdUI7QUFDN0csU0FBU0MsTUFBTSxRQUFRLHlCQUF5QjtBQUNoRCxPQUFPQyxvQkFBb0IsOEJBQThCO0FBQ3pELFNBQVNDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sUUFBUSxlQUFlO0FBQzdELFNBQVNDLEtBQUssUUFBUSxTQUFTO0FBRS9CLE1BQU1DLFlBQVk7O0lBQ2hCLE1BQU1DLFdBQVdqQjtJQUNqQixNQUFNLEVBQ0prQixPQUFPLEVBQ1BDLG9CQUFvQixFQUNwQkMsaUJBQWlCLEVBQ2pCQyxlQUFlLEVBQ2hCLEdBQUdwQjtJQUVKLHlDQUF5QztJQUN6Q0gsTUFBTXdCLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQ0osU0FBUztZQUNaSCxNQUFNUSxLQUFLLENBQUM7WUFDWk4sU0FBUztRQUNYO0lBQ0YsR0FBRztRQUFDQztRQUFTRDtLQUFTO0lBRXRCLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUcxQixTQUFTO1FBQy9DLFNBQVNxQixpQkFBaUIsQ0FBQyxRQUFRLElBQUk7UUFDdkMsU0FBU0EsaUJBQWlCLENBQUMsUUFBUSxJQUFJO1FBQ3ZDLFVBQVVBLGlCQUFpQixDQUFDLFNBQVMsSUFBSTtJQUMzQztJQUVBLE1BQU1NLHFCQUFxQixDQUFDQyxPQUFlQztRQUN6QywyQkFBMkI7UUFDM0IsSUFBSUEsVUFBVSxN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