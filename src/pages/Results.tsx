import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Results.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/pages/Results.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useState = __vite__cjsImport2_react["useState"]; const useEffect = __vite__cjsImport2_react["useEffect"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=57c2cc69";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { Trophy, Users, CalendarDays, ArrowRight, Dice1, Target, Gamepad } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/src/components/ui/tabs.tsx";
import Navbar from "/src/components/Navbar.tsx?t=1744653378689";
import AnimatedTransition from "/src/components/AnimatedTransition.tsx";
import PlayerGamesList from "/src/components/game/PlayerGamesList.tsx";
const getGameRangeIcon = (range)=>{
    switch(range){
        case '1-100':
            return /*#__PURE__*/ _jsxDEV(Target, {
                className: "h-5 w-5 mr-2"
            }, void 0, false, {
                fileName: "/dev-server/src/pages/Results.tsx",
                lineNumber: 30,
                columnNumber: 14
            }, this);
        case '1-500':
            return /*#__PURE__*/ _jsxDEV(Gamepad, {
                className: "h-5 w-5 mr-2"
            }, void 0, false, {
                fileName: "/dev-server/src/pages/Results.tsx",
                lineNumber: 32,
                columnNumber: 14
            }, this);
        case '1-1000':
            return /*#__PURE__*/ _jsxDEV(Dice1, {
                className: "h-5 w-5 mr-2"
            }, void 0, false, {
                fileName: "/dev-server/src/pages/Results.tsx",
                lineNumber: 34,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ _jsxDEV(Trophy, {
                className: "h-5 w-5 mr-2"
            }, void 0, false, {
                fileName: "/dev-server/src/pages/Results.tsx",
                lineNumber: 36,
                columnNumber: 14
            }, this);
    }
};
const getGameRangeColor = (range)=>{
    switch(range){
        case '1-100':
            return "text-green-500";
        case '1-500':
            return "text-purple-500";
        case '1-1000':
            return "text-orange-500";
        default:
            return "text-primary";
    }
};
const renderWinnersTable = (winners, isLoading)=>{
    return isLoading ? /*#__PURE__*/ _jsxDEV("div", {
        className: "flex items-center justify-center py-10",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "animate-pulse space-y-4 w-full",
            children: [
                ...Array(5)
            ].map((_, i)=>/*#__PURE__*/ _jsxDEV("div", {
                    className: "h-16 bg-muted rounded-md"
                }, i, false, {
                    fileName: "/dev-server/src/pages/Results.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "/dev-server/src/pages/Results.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/pages/Results.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this) : /*#__PURE__*/ _jsxDEV("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ _jsxDEV("table", {
            className: "w-full",
            children: [
                /*#__PURE__*/ _jsxDEV("thead", {
                    children: /*#__PURE__*/ _jsxDEV("tr", {
                        className: "border-b",
                        children: [
                            /*#__PURE__*/ _jsxDEV("th", {
                                className: "px-4 py-3 text-left text-sm font-medium text-muted-foreground",
                                children: "Date"
                            }, void 0, false, {
                                fileName: "/dev-server/src/pages/Results.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("th", {
                                className: "px-4 py-3 text-left text-sm font-medium text-muted-foreground",
                                children: "Winner"
                            }, void 0, false, {
                                fileName: "/dev-server/src/pages/Results.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("th", {
                                className: "px-4 py-3 text-left text-sm font-medium text-muted-foreground",
                                children: "Game"
                            }, void 0, false, {
                                fileName: "/dev-server/src/pages/Results.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("th", {
                                className: "px-4 py-3 text-left text-sm font-medium text-muted-foreground",
                                children: "Number"
                            }, void 0, false, {
                                fileName: "/dev-server/src/pages/Results.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("th", {
                                className: "px-4 py-3 text-right text-sm font-medium text-muted-foreground",
                                children: "Prize"
                            }, void 0, false, {
                                fileName: "/dev-server/src/pages/Results.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/pages/Results.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/Results.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("tbody", {
                    children: winners.length > 0 ? winners.map((winner)=>/*#__PURE__*/ _jsxDEV("tr", {
                            className: "hover:bg-muted/30 transition-colors",
                            children: [
                                /*#__PURE__*/ _jsxDEV("td", {
                                    className: "px-4 py-4 text-sm",
                                    children: winner.date
                                }, void 0, false, {
                                    fileName: "/dev-server/src/pages/Results.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ _jsxDEV("td", {
                                    className: "px-4 py-4 text-sm font-medium",
                                    children: winner.name
                                }, void 0, false, {
                                    fileName: "/dev-server/src/pages/Results.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ _jsxDEV("td", {
                                    className: "px-4 py-4 text-sm",
                                    children: /*#__PURE__*/ _jsxDEV("div", {
                                        className: `flex items-center ${getGameRangeColor(winner.gameRange)}`,
                                        children: [
                                            winner.gameRange === '1-100' && /*#__PURE__*/ _jsxDEV(Target, {
                                                className: "h-4 w-4 mr-1"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 82,
                                                columnNumber: 54
                                            }, this),
                                            winner.gameRange === '1-500' && /*#__PURE__*/ _jsxDEV(Gamepad, {
                                                className: "h-4 w-4 mr-1"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 83,
                                                columnNumber: 54
                                            }, this),
                                            winner.gameRange === '1-1000' && /*#__PURE__*/ _jsxDEV(Dice1, {
                                                className: "h-4 w-4 mr-1"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 84,
                                                columnNumber: 55
                                            }, this),
                                            winner.gameRange
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/dev-server/src/pages/Results.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ _jsxDEV("td", {
                                    className: "px-4 py-4 text-sm",
                                    children: winner.winningNumber
                                }, void 0, false, {
                                    fileName: "/dev-server/src/pages/Results.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ _jsxDEV("td", {
                                    className: "px-4 py-4 text-sm text-right font-medium",
                                    children: winner.prize
                                }, void 0, false, {
                                    fileName: "/dev-server/src/pages/Results.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, winner.id, true, {
                            fileName: "/dev-server/src/pages/Results.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this)) : /*#__PURE__*/ _jsxDEV("tr", {
                        children: /*#__PURE__*/ _jsxDEV("td", {
                            colSpan: 5,
                            className: "px-4 py-8 text-center text-muted-foreground",
                            children: "No winners found for this category"
                        }, void 0, false, {
                            fileName: "/dev-server/src/pages/Results.tsx",
                            lineNumber: 94,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "/dev-server/src/pages/Results.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/Results.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/dev-server/src/pages/Results.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/pages/Results.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
const Results = ()=>{
    _s();
    const [pastWinners, setPastWinners] = useState([]);
    const [gameEntries, setGameEntries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isGameDataLoading, setIsGameDataLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("all");
    const todayResults = {
        '1-100': {
            number: 42,
            winner: "Linda Parker",
            prize: "$100.00"
        },
        '1-500': {
            number: 275,
            winner: "Robert Garcia",
            prize: "$300.00"
        },
        '1-1000': {
            number: 731,
            winner: "James Wilson",
            prize: "$1,000.00"
        }
    };
    useEffect(()=>{
        setTimeout(()=>{
            setPastWinners([
                {
                    id: 1,
                    name: "Sarah Johnson",
                    date: "June 12, 2025",
                    winningNumber: 27,
                    prize: "$100.00",
                    gameRange: '1-100'
                },
                {
                    id: 2,
                    name: "Michael Chen",
                    date: "June 11, 2025",
                    winningNumber: 128,
                    prize: "$300.00",
                    gameRange: '1-500'
                },
                {
                    id: 3,
                    name: "Alex Rodriguez",
                    date: "June 10, 2025",
                    winningNumber: 872,
                    prize: "$1,000.00",
                    gameRange: '1-1000'
                },
                {
                    id: 4,
                    name: "Emma Williams",
                    date: "June 9, 2025",
                    winningNumber: 76,
                    prize: "$100.00",
                    gameRange: '1-100'
                },
                {
                    id: 5,
                    name: "David Thompson",
                    date: "June 8, 2025",
                    winningNumber: 315,
                    prize: "$300.00",
                    gameRange: '1-500'
                },
                {
                    id: 6,
                    name: "James Wilson",
                    date: "June 7, 2025",
                    winningNumber: 731,
                    prize: "$1,000.00",
                    gameRange: '1-1000'
                },
                {
                    id: 7,
                    name: "Linda Parker",
                    date: "June 6, 2025",
                    winningNumber: 42,
                    prize: "$100.00",
                    gameRange: '1-100'
                },
                {
                    id: 8,
                    name: "Robert Garcia",
                    date: "June 5, 2025",
                    winningNumber: 275,
                    prize: "$300.00",
                    gameRange: '1-500'
                }
            ]);
            setIsLoading(false);
        }, 1500);
        setTimeout(()=>{
            setGameEntries([
                {
                    gameNumber: 731,
                    date: "June 12, 2025",
                    players: [
                        {
                            id: "p1",
                            name: "James Wilson",
                            number: 731,
                            timestamp: new Date(new Date().setHours(14, 32)),
                            streak: 3
                        },
                        {
                            id: "p2",
                            name: "Emily Davis",
                            number: 725,
                            timestamp: new Date(new Date().setHours(10, 15)),
                            streak: 1
                        },
                        {
                            id: "p3",
                            name: "Robert Miller",
                            number: 748,
                            timestamp: new Date(new Date().setHours(16, 45)),
                            streak: 5,
                            badges: [
                                'streak'
                            ]
                        }
                    ]
                },
                {
                    gameNumber: 427,
                    date: "June 11, 2025",
                    players: [
                        {
                            id: "p4",
                            name: "Sarah Johnson",
                            number: 427,
                            timestamp: new Date(new Date().setHours(9, 10)),
                            streak: 2
                        },
                        {
                            id: "p5",
                            name: "David Thompson",
                            number: 415,
                            timestamp: new Date(new Date().setHours(11, 25)),
                            streak: 4
                        },
                        {
                            id: "p6",
                            name: "Michael Chen",
                            number: 430,
                            timestamp: new Date(new Date().setHours(15, 30)),
                            streak: 1
                        }
                    ]
                },
                {
                    gameNumber: 128,
                    date: "June 10, 2025",
                    players: [
                        {
                            id: "p7",
                            name: "Michael Chen",
                            number: 128,
                            timestamp: new Date(new Date().setHours(10, 45)),
                            streak: 0
                        },
                        {
                            id: "p8",
                            name: "Jessica Lee",
                            number: 132,
                            timestamp: new Date(new Date().setHours(13, 20)),
                            streak: 2
                        },
                        {
                            id: "p9",
                            name: "Thomas Baker",
                            number: 125,
                            timestamp: new Date(new Date().setHours(17, 5)),
                            streak: 3
                        }
                    ]
                }
            ]);
            setIsGameDataLoading(false);
        }, 2000);
    }, []);
    const todayResult = {
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        winningNumber: 731,
        totalParticipants: 892,
        totalPrize: "$1,784.00",
        winner: "James Wilson",
        gameRange: "1-1000"
    };
    const filteredWinners = activeTab === "all" ? pastWinners : pastWinners.filter((winner)=>winner.gameRange === activeTab);
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ _jsxDEV(Navbar, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Results.tsx",
                lineNumber: 309,
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
                                        children: "Results & Winners"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-muted-foreground mt-2",
                                        children: "See today's winning number and past winners"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/pages/Results.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-10",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        className: "glass-card overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "bg-green-500 py-1 text-white text-center text-sm font-medium flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Target, {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 19
                                                    }, this),
                                                    " 1-100 Game"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 323,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(CardHeader, {
                                                className: "pb-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(CardTitle, {
                                                        className: "text-lg",
                                                        children: "Today's Winner"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(CardDescription, {
                                                        children: todayResult.date
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(CardContent, {
                                                className: "text-center pt-0",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-lg mb-3",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h2", {
                                                                className: "text-white text-sm mb-1",
                                                                children: "Winning Number"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-white text-4xl font-bold",
                                                                children: todayResults['1-100'].number
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "mb-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Winner"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "font-medium",
                                                                children: todayResults['1-100'].winner
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Prize"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "font-bold text-green-500",
                                                                children: todayResults['1-100'].prize
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 330,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        className: "glass-card overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "bg-purple-500 py-1 text-white text-center text-sm font-medium flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Gamepad, {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this),
                                                    " 1-500 Game"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(CardHeader, {
                                                className: "pb-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(CardTitle, {
                                                        className: "text-lg",
                                                        children: "Today's Winner"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(CardDescription, {
                                                        children: todayResult.date
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(CardContent, {
                                                className: "text-center pt-0",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-lg mb-3",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h2", {
                                                                className: "text-white text-sm mb-1",
                                                                children: "Winning Number"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-white text-4xl font-bold",
                                                                children: todayResults['1-500'].number
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "mb-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Winner"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "font-medium",
                                                                children: todayResults['1-500'].winner
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Prize"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "font-bold text-purple-500",
                                                                children: todayResults['1-500'].prize
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        className: "glass-card overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "bg-orange-500 py-1 text-white text-center text-sm font-medium flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Dice1, {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, this),
                                                    " 1-1000 Game"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 371,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(CardHeader, {
                                                className: "pb-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(CardTitle, {
                                                        className: "text-lg",
                                                        children: "Today's Winner"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(CardDescription, {
                                                        children: todayResult.date
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(CardContent, {
                                                className: "text-center pt-0",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-lg mb-3",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h2", {
                                                                className: "text-white text-sm mb-1",
                                                                children: "Winning Number"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-white text-4xl font-bold",
                                                                children: todayResults['1-1000'].number
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "mb-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Winner"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "font-medium text-black",
                                                                children: todayResults['1-1000'].winner
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Prize"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "font-bold text-orange-500",
                                                                children: todayResults['1-1000'].prize
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 370,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/pages/Results.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Card, {
                                className: "glass-card mb-10",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(CardHeader, {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(CardTitle, {
                                                children: "Today's Winner"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(CardDescription, {
                                                children: [
                                                    todayResult.date,
                                                    " - ",
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: getGameRangeColor(todayResult.gameRange),
                                                        children: [
                                                            getGameRangeIcon(todayResult.gameRange),
                                                            todayResult.gameRange,
                                                            " Game"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 40
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 396,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(CardContent, {
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex flex-col items-center p-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl text-white",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(Trophy, {
                                                            className: "h-10 w-10 mb-3"
                                                        }, void 0, false, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                                    className: "text-lg font-medium mb-1",
                                                                    children: "Winning Number"
                                                                }, void 0, false, {
                                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                                    lineNumber: 410,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-3xl font-bold",
                                                                    children: todayResult.winningNumber
                                                                }, void 0, false, {
                                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                                    lineNumber: 411,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex flex-col space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mr-4",
                                                                    children: /*#__PURE__*/ _jsxDEV(Users, {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                                        lineNumber: 418,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                                    lineNumber: 417,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                                            className: "text-base font-medium",
                                                                            children: "Participants"
                                                                        }, void 0, false, {
                                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                                            lineNumber: 421,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                                            className: "text-2xl font-semibold",
                                                                            children: todayResult.totalParticipants
                                                                        }, void 0, false, {
                                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                                            lineNumber: 422,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 mr-4",
                                                                    children: /*#__PURE__*/ _jsxDEV(Trophy, {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                                            className: "text-base font-medium",
                                                                            children: "Total Prize"
                                                                        }, void 0, false, {
                                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                                            lineNumber: 431,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                                            className: "text-2xl font-semibold",
                                                                            children: todayResult.totalPrize
                                                                        }, void 0, false, {
                                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                                            lineNumber: 432,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                                    lineNumber: 430,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex flex-col p-6 bg-blue-50 rounded-xl",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            className: "text-base font-medium text-blue-700 mb-2",
                                                            children: "Winner"
                                                        }, void 0, false, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            className: "text-2xl font-semibold mb-1 text-black",
                                                            children: todayResult.winner
                                                        }, void 0, false, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            className: "text-sm text-blue-700/70",
                                                            children: "Congratulations on guessing the correct number!"
                                                        }, void 0, false, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "mt-auto pt-4",
                                                            children: /*#__PURE__*/ _jsxDEV(Button, {
                                                                variant: "outline",
                                                                className: "w-full",
                                                                children: "See Winner Profile"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                                lineNumber: 444,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/pages/Results.tsx",
                                            lineNumber: 406,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 405,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(CardFooter, {
                                        className: "flex justify-center border-t pt-6",
                                        children: /*#__PURE__*/ _jsxDEV(Link, {
                                            to: "/game",
                                            children: /*#__PURE__*/ _jsxDEV(Button, {
                                                className: "button-shine",
                                                children: [
                                                    "Play Today's Game ",
                                                    /*#__PURE__*/ _jsxDEV(ArrowRight, {
                                                        className: "ml-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Results.tsx",
                                                lineNumber: 454,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/pages/Results.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/pages/Results.tsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(PlayerGamesList, {
                                gameEntries: gameEntries,
                                isLoading: isGameDataLoading
                            }, void 0, false, {
                                fileName: "/dev-server/src/pages/Results.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Card, {
                                className: "glass-card mt-8",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(CardHeader, {
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(CardTitle, {
                                                            children: "Past Winners"
                                                        }, void 0, false, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV(CardDescription, {
                                                            children: "See who won in previous days"
                                                        }, void 0, false, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600",
                                                    children: /*#__PURE__*/ _jsxDEV(CalendarDays, {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Results.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/pages/Results.tsx",
                                            lineNumber: 468,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(CardContent, {
                                        children: /*#__PURE__*/ _jsxDEV(Tabs, {
                                            defaultValue: "all",
                                            className: "mb-6",
                                            onValueChange: setActiveTab,
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(TabsList, {
                                                    className: "grid w-full grid-cols-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                                            value: "all",
                                                            className: "flex items-center justify-center",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(Trophy, {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " All Games"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                                            value: "1-100",
                                                            className: "flex items-center justify-center",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(Target, {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " 1-100"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                                            value: "1-500",
                                                            className: "flex items-center justify-center",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(Gamepad, {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " 1-500"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                                            value: "1-1000",
                                                            className: "flex items-center justify-center",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(Dice1, {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                                    lineNumber: 494,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " 1-1000"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/dev-server/src/pages/Results.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(TabsContent, {
                                                    value: "all",
                                                    className: "mt-4",
                                                    children: renderWinnersTable(filteredWinners, isLoading)
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(TabsContent, {
                                                    value: "1-100",
                                                    className: "mt-4",
                                                    children: renderWinnersTable(filteredWinners, isLoading)
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                    lineNumber: 502,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(TabsContent, {
                                                    value: "1-500",
                                                    className: "mt-4",
                                                    children: renderWinnersTable(filteredWinners, isLoading)
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(TabsContent, {
                                                    value: "1-1000",
                                                    className: "mt-4",
                                                    children: renderWinnersTable(filteredWinners, isLoading)
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/Results.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/pages/Results.tsx",
                                            lineNumber: 482,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(CardFooter, {
                                        className: "flex justify-center border-t pt-6",
                                        children: /*#__PURE__*/ _jsxDEV(Button, {
                                            variant: "outline",
                                            children: "View All Winners"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/pages/Results.tsx",
                                            lineNumber: 517,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Results.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/pages/Results.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/pages/Results.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/Results.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/pages/Results.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/pages/Results.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
};
_s(Results, "Alj8eOASRDh+49Iv2JlXcAP2idI=");
_c = Results;
export default Results;
var _c;
$RefreshReg$(_c, "Results");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/pages/Results.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/pages/Results.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlc3VsdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZERlc2NyaXB0aW9uLCBDYXJkRm9vdGVyLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvY2FyZCc7XG5pbXBvcnQgeyBUcm9waHksIFVzZXJzLCBDYWxlbmRhckRheXMsIEFycm93UmlnaHQsIERpY2UxLCBUYXJnZXQsIEdhbWVwYWQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgVGFicywgVGFic0NvbnRlbnQsIFRhYnNMaXN0LCBUYWJzVHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFic1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBBbmltYXRlZFRyYW5zaXRpb24gZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hdGVkVHJhbnNpdGlvbic7XG5pbXBvcnQgUGxheWVyR2FtZXNMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9nYW1lL1BsYXllckdhbWVzTGlzdCc7XG5pbXBvcnQgeyBQbGF5ZXJFbnRyeSB9IGZyb20gJ0AvY29tcG9uZW50cy9nYW1lL1BsYXllckVudHJpZXNMaXN0JztcblxuaW50ZXJmYWNlIFdpbm5lciB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICB3aW5uaW5nTnVtYmVyOiBudW1iZXI7XG4gIHByaXplOiBzdHJpbmc7XG4gIGdhbWVSYW5nZTogJzEtMTAwJyB8ICcxLTUwMCcgfCAnMS0xMDAwJztcbn1cblxuaW50ZXJmYWNlIEdhbWVOdW1iZXJFbnRyeSB7XG4gIGdhbWVOdW1iZXI6IG51bWJlcjtcbiAgZGF0ZTogc3RyaW5nO1xuICBwbGF5ZXJzOiBQbGF5ZXJFbnRyeVtdO1xufVxuXG5jb25zdCBnZXRHYW1lUmFuZ2VJY29uID0gKHJhbmdlOiBzdHJpbmcpID0+IHtcbiAgc3dpdGNoKHJhbmdlKSB7XG4gICAgY2FzZSAnMS0xMDAnOlxuICAgICAgcmV0dXJuIDxUYXJnZXQgY2xhc3NOYW1lPVwiaC01IHctNSBtci0yXCIgLz47XG4gICAgY2FzZSAnMS01MDAnOlxuICAgICAgcmV0dXJuIDxHYW1lcGFkIGNsYXNzTmFtZT1cImgtNSB3LTUgbXItMlwiIC8+O1xuICAgIGNhc2UgJzEtMTAwMCc6XG4gICAgICByZXR1cm4gPERpY2UxIGNsYXNzTmFtZT1cImgtNSB3LTUgbXItMlwiIC8+O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gPFRyb3BoeSBjbGFzc05hbWU9XCJoLTUgdy01IG1yLTJcIiAvPjtcbiAgfVxufTtcblxuY29uc3QgZ2V0R2FtZVJhbmdlQ29sb3IgPSAocmFuZ2U6IHN0cmluZykgPT4ge1xuICBzd2l0Y2gocmFuZ2UpIHtcbiAgICBjYXNlICcxLTEwMCc6XG4gICAgICByZXR1cm4gXCJ0ZXh0LWdyZWVuLTUwMFwiO1xuICAgIGNhc2UgJzEtNTAwJzpcbiAgICAgIHJldHVybiBcInRleHQtcHVycGxlLTUwMFwiO1xuICAgIGNhc2UgJzEtMTAwMCc6XG4gICAgICByZXR1cm4gXCJ0ZXh0LW9yYW5nZS01MDBcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwidGV4dC1wcmltYXJ5XCI7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlcldpbm5lcnNUYWJsZSA9ICh3aW5uZXJzOiBXaW5uZXJbXSwgaXNMb2FkaW5nOiBib29sZWFuKSA9PiB7XG4gIHJldHVybiBpc0xvYWRpbmcgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXB1bHNlIHNwYWNlLXktNCB3LWZ1bGxcIj5cbiAgICAgICAge1suLi5BcnJheSg1KV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImgtMTYgYmctbXV0ZWQgcm91bmRlZC1tZFwiIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5EYXRlPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+V2lubmVyPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+R2FtZTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zIHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPk51bWJlcjwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zIHRleHQtcmlnaHQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5Qcml6ZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt3aW5uZXJzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICB3aW5uZXJzLm1hcCgod2lubmVyKSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e3dpbm5lci5pZH0gY2xhc3NOYW1lPVwiaG92ZXI6YmctbXV0ZWQvMzAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS00IHRleHQtc21cIj57d2lubmVyLmRhdGV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS00IHRleHQtc20gZm9udC1tZWRpdW1cIj57d2lubmVyLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS00IHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgJHtnZXRHYW1lUmFuZ2VDb2xvcih3aW5uZXIuZ2FtZVJhbmdlKX1gfT5cbiAgICAgICAgICAgICAgICAgICAge3dpbm5lci5nYW1lUmFuZ2UgPT09ICcxLTEwMCcgJiYgPFRhcmdldCBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTFcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAge3dpbm5lci5nYW1lUmFuZ2UgPT09ICcxLTUwMCcgJiYgPEdhbWVwYWQgY2xhc3NOYW1lPVwiaC00IHctNCBtci0xXCIgLz59XG4gICAgICAgICAgICAgICAgICAgIHt3aW5uZXIuZ2FtZVJhbmdlID09PSAnMS0xMDAwJyAmJiA8RGljZTEgY2xhc3NOYW1lPVwiaC00IHctNCBtci0xXCIgLz59XG4gICAgICAgICAgICAgICAgICAgIHt3aW5uZXIuZ2FtZVJhbmdlfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS00IHRleHQtc21cIj57d2lubmVyLndpbm5pbmdOdW1iZXJ9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS00IHRleHQtc20gdGV4dC1yaWdodCBmb250LW1lZGl1bVwiPnt3aW5uZXIucHJpemV9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezV9IGNsYXNzTmFtZT1cInB4LTQgcHktOCB0ZXh0LWNlbnRlciB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICBObyB3aW5uZXJzIGZvdW5kIGZvciB0aGlzIGNhdGVnb3J5XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgUmVzdWx0cyA9ICgpID0+IHtcbiAgY29uc3QgW3Bhc3RXaW5uZXJzLCBzZXRQYXN0V2lubmVyc10gPSB1c2VTdGF0ZTxXaW5uZXJbXT4oW10pO1xuICBjb25zdCBbZ2FtZUVudHJpZXMsIHNldEdhbWVFbnRyaWVzXSA9IHVzZVN0YXRlPEdhbWVOdW1iZXJFbnRyeVtdPihbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzR2FtZURhdGFMb2FkaW5nLCBzZXRJc0dhbWVEYXRhTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJhbGxcIik7XG5cbiAgY29uc3QgdG9kYXlSZXN1bHRzID0ge1xuICAgICcxLTEwMCc6IHtcbiAgICAgIG51bWJlcjogNDIsXG4gICAgICB3aW5uZXI6IFwiTGluZGEgUGFya2VyXCIsXG4gICAgICBwcml6ZTogXCIkMTAwLjAwXCJcbiAgICB9LFxuICAgICcxLTUwMCc6IHtcbiAgICAgIG51bWJlcjogMjc1LFxuICAgICAgd2lubmVyOiBcIlJvYmVydCBHYXJjaWFcIixcbiAgICAgIHByaXplOiBcIiQzMDAuMDBcIlxuICAgIH0sXG4gICAgJzEtMTAwMCc6IHtcbiAgICAgIG51bWJlcjogNzMxLFxuICAgICAgd2lubmVyOiBcIkphbWVzIFdpbHNvblwiLFxuICAgICAgcHJpemU6IFwiJDEsMDAwLjAwXCJcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFBhc3RXaW5uZXJzKFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIG5hbWU6IFwiU2FyYWggSm9obnNvblwiLFxuICAgICAgICAgIGRhdGU6IFwiSnVuZSAxMiwgMjAyNVwiLFxuICAgICAgICAgIHdpbm5pbmdOdW1iZXI6IDI3LFxuICAgICAgICAgIHByaXplOiBcIiQxMDAuMDBcIixcbiAgICAgICAgICBnYW1lUmFuZ2U6ICcxLTEwMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIG5hbWU6IFwiTWljaGFlbCBDaGVuXCIsXG4gICAgICAgICAgZGF0ZTogXCJKdW5lIDExLCAyMDI1XCIsXG4gICAgICAgICAgd2lubmluZ051bWJlcjogMTI4LFxuICAgICAgICAgIHByaXplOiBcIiQzMDAuMDBcIixcbiAgICAgICAgICBnYW1lUmFuZ2U6ICcxLTUwMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIG5hbWU6IFwiQWxleCBSb2RyaWd1ZXpcIixcbiAgICAgICAgICBkYXRlOiBcIkp1bmUgMTAsIDIwMjVcIixcbiAgICAgICAgICB3aW5uaW5nTnVtYmVyOiA4NzIsXG4gICAgICAgICAgcHJpemU6IFwiJDEsMDAwLjAwXCIsXG4gICAgICAgICAgZ2FtZVJhbmdlOiAnMS0xMDAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgbmFtZTogXCJFbW1hIFdpbGxpYW1zXCIsXG4gICAgICAgICAgZGF0ZTogXCJKdW5lIDksIDIwMjVcIixcbiAgICAgICAgICB3aW5uaW5nTnVtYmVyOiA3NixcbiAgICAgICAgICBwcml6ZTogXCIkMTAwLjAwXCIsXG4gICAgICAgICAgZ2FtZVJhbmdlOiAnMS0xMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNSxcbiAgICAgICAgICBuYW1lOiBcIkRhdmlkIFRob21wc29uXCIsXG4gICAgICAgICAgZGF0ZTogXCJKdW5lIDgsIDIwMjVcIixcbiAgICAgICAgICB3aW5uaW5nTnVtYmVyOiAzMTUsXG4gICAgICAgICAgcHJpemU6IFwiJDMwMC4wMFwiLFxuICAgICAgICAgIGdhbWVSYW5nZTogJzEtNTAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgbmFtZTogXCJKYW1lcyBXaWxzb25cIixcbiAgICAgICAgICBkYXRlOiBcIkp1bmUgNywgMjAyNVwiLFxuICAgICAgICAgIHdpbm5pbmdOdW1iZXI6IDczMSxcbiAgICAgICAgICBwcml6ZTogXCIkMSwwMDAuMDBcIixcbiAgICAgICAgICBnYW1lUmFuZ2U6ICcxLTEwMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNyxcbiAgICAgICAgICBuYW1lOiBcIkxpbmRhIFBhcmtlclwiLFxuICAgICAgICAgIGRhdGU6IFwiSnVuZSA2LCAyMDI1XCIsXG4gICAgICAgICAgd2lubmluZ051bWJlcjogNDIsXG4gICAgICAgICAgcHJpemU6IFwiJDEwMC4wMFwiLFxuICAgICAgICAgIGdhbWVSYW5nZTogJzEtMTAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgbmFtZTogXCJSb2JlcnQgR2FyY2lhXCIsXG4gICAgICAgICAgZGF0ZTogXCJKdW5lIDUsIDIwMjVcIixcbiAgICAgICAgICB3aW5uaW5nTnVtYmVyOiAyNzUsXG4gICAgICAgICAgcHJpemU6IFwiJDMwMC4wMFwiLFxuICAgICAgICAgIGdhbWVSYW5nZTogJzEtNTAwJ1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSwgMTUwMCk7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRHYW1lRW50cmllcyhbXG4gICAgICAgIHtcbiAgICAgICAgICBnYW1lTnVtYmVyOiA3MzEsXG4gICAgICAgICAgZGF0ZTogXCJKdW5lIDEyLCAyMDI1XCIsXG4gICAgICAgICAgcGxheWVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogXCJwMVwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIkphbWVzIFdpbHNvblwiLFxuICAgICAgICAgICAgICBudW1iZXI6IDczMSxcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKDE0LCAzMikpLFxuICAgICAgICAgICAgICBzdHJlYWs6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiBcInAyXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiRW1pbHkgRGF2aXNcIixcbiAgICAgICAgICAgICAgbnVtYmVyOiA3MjUsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3VycygxMCwgMTUpKSxcbiAgICAgICAgICAgICAgc3RyZWFrOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogXCJwM1wiLFxuICAgICAgICAgICAgICBuYW1lOiBcIlJvYmVydCBNaWxsZXJcIixcbiAgICAgICAgICAgICAgbnVtYmVyOiA3NDgsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3VycygxNiwgNDUpKSxcbiAgICAgICAgICAgICAgc3RyZWFrOiA1LFxuICAgICAgICAgICAgICBiYWRnZXM6IFsnc3RyZWFrJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBnYW1lTnVtYmVyOiA0MjcsXG4gICAgICAgICAgZGF0ZTogXCJKdW5lIDExLCAyMDI1XCIsXG4gICAgICAgICAgcGxheWVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogXCJwNFwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIlNhcmFoIEpvaG5zb25cIixcbiAgICAgICAgICAgICAgbnVtYmVyOiA0MjcsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3Vycyg5LCAxMCkpLFxuICAgICAgICAgICAgICBzdHJlYWs6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiBcInA1XCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiRGF2aWQgVGhvbXBzb25cIixcbiAgICAgICAgICAgICAgbnVtYmVyOiA0MTUsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3VycygxMSwgMjUpKSxcbiAgICAgICAgICAgICAgc3RyZWFrOiA0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogXCJwNlwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIk1pY2hhZWwgQ2hlblwiLFxuICAgICAgICAgICAgICBudW1iZXI6IDQzMCxcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKDE1LCAzMCkpLFxuICAgICAgICAgICAgICBzdHJlYWs6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBnYW1lTnVtYmVyOiAxMjgsXG4gICAgICAgICAgZGF0ZTogXCJKdW5lIDEwLCAyMDI1XCIsXG4gICAgICAgICAgcGxheWVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogXCJwN1wiLFxuICAgICAgICAgICAgICBuYW1lOiBcIk1pY2hhZWwgQ2hlblwiLFxuICAgICAgICAgICAgICBudW1iZXI6IDEyOCxcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKDEwLCA0NSkpLFxuICAgICAgICAgICAgICBzdHJlYWs6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiBcInA4XCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiSmVzc2ljYSBMZWVcIixcbiAgICAgICAgICAgICAgbnVtYmVyOiAxMzIsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3VycygxMywgMjApKSxcbiAgICAgICAgICAgICAgc3RyZWFrOiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogXCJwOVwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIlRob21hcyBCYWtlclwiLFxuICAgICAgICAgICAgICBudW1iZXI6IDEyNSxcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKDE3LCA1KSksXG4gICAgICAgICAgICAgIHN0cmVhazogM1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXSk7XG4gICAgICBzZXRJc0dhbWVEYXRhTG9hZGluZyhmYWxzZSk7XG4gICAgfSwgMjAwMCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2RheVJlc3VsdCA9IHtcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7IFxuICAgICAgeWVhcjogJ251bWVyaWMnLCBcbiAgICAgIG1vbnRoOiAnbG9uZycsIFxuICAgICAgZGF5OiAnbnVtZXJpYycgXG4gICAgfSksXG4gICAgd2lubmluZ051bWJlcjogNzMxLFxuICAgIHRvdGFsUGFydGljaXBhbnRzOiA4OTIsXG4gICAgdG90YWxQcml6ZTogXCIkMSw3ODQuMDBcIixcbiAgICB3aW5uZXI6IFwiSmFtZXMgV2lsc29uXCIsXG4gICAgZ2FtZVJhbmdlOiBcIjEtMTAwMFwiIGFzIGNvbnN0XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyZWRXaW5uZXJzID0gYWN0aXZlVGFiID09PSBcImFsbFwiIFxuICAgID8gcGFzdFdpbm5lcnMgXG4gICAgOiBwYXN0V2lubmVycy5maWx0ZXIod2lubmVyID0+IHdpbm5lci5nYW1lUmFuZ2UgPT09IGFjdGl2ZVRhYik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICBcbiAgICAgIDxBbmltYXRlZFRyYW5zaXRpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBwdC0yNCBwYi0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0XCI+UmVzdWx0cyAmIFdpbm5lcnM8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMlwiPlxuICAgICAgICAgICAgICAgIFNlZSB0b2RheSdzIHdpbm5pbmcgbnVtYmVyIGFuZCBwYXN0IHdpbm5lcnNcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNCBtYi0xMFwiPlxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJnbGFzcy1jYXJkIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHB5LTEgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciB0ZXh0LXNtIGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VGFyZ2V0IGNsYXNzTmFtZT1cImgtNCB3LTQgbXItMVwiIC8+IDEtMTAwIEdhbWVcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtbGdcIj5Ub2RheSdzIFdpbm5lcjwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbj57dG9kYXlSZXN1bHQuZGF0ZX08L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi01MDAgdG8tZ3JlZW4tNjAwIHAtNCByb3VuZGVkLWxnIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zbSBtYi0xXCI+V2lubmluZyBOdW1iZXI8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtNHhsIGZvbnQtYm9sZFwiPnt0b2RheVJlc3VsdHNbJzEtMTAwJ10ubnVtYmVyfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+V2lubmVyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPnt0b2RheVJlc3VsdHNbJzEtMTAwJ10ud2lubmVyfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5Qcml6ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JlZW4tNTAwXCI+e3RvZGF5UmVzdWx0c1snMS0xMDAnXS5wcml6ZX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZ2xhc3MtY2FyZCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXB1cnBsZS01MDAgcHktMSB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHRleHQtc20gZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxHYW1lcGFkIGNsYXNzTmFtZT1cImgtNCB3LTQgbXItMVwiIC8+IDEtNTAwIEdhbWVcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtbGdcIj5Ub2RheSdzIFdpbm5lcjwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbj57dG9kYXlSZXN1bHQuZGF0ZX08L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wdXJwbGUtNTAwIHRvLXB1cnBsZS02MDAgcC00IHJvdW5kZWQtbGcgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNtIG1iLTFcIj5XaW5uaW5nIE51bWJlcjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC00eGwgZm9udC1ib2xkXCI+e3RvZGF5UmVzdWx0c1snMS01MDAnXS5udW1iZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5XaW5uZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e3RvZGF5UmVzdWx0c1snMS01MDAnXS53aW5uZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlByaXplPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1wdXJwbGUtNTAwXCI+e3RvZGF5UmVzdWx0c1snMS01MDAnXS5wcml6ZX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZ2xhc3MtY2FyZCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW9yYW5nZS01MDAgcHktMSB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHRleHQtc20gZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxEaWNlMSBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTFcIiAvPiAxLTEwMDAgR2FtZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInBiLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlRvZGF5J3MgV2lubmVyPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPnt0b2RheVJlc3VsdC5kYXRlfTwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLW9yYW5nZS01MDAgdG8tb3JhbmdlLTYwMCBwLTQgcm91bmRlZC1sZyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gbWItMVwiPldpbm5pbmcgTnVtYmVyPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTR4bCBmb250LWJvbGRcIj57dG9kYXlSZXN1bHRzWycxLTEwMDAnXS5udW1iZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5XaW5uZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYmxhY2tcIj57dG9kYXlSZXN1bHRzWycxLTEwMDAnXS53aW5uZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlByaXplPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1vcmFuZ2UtNTAwXCI+e3RvZGF5UmVzdWx0c1snMS0xMDAwJ10ucHJpemV9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImdsYXNzLWNhcmQgbWItMTBcIj5cbiAgICAgICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmRUaXRsZT5Ub2RheSdzIFdpbm5lcjwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICB7dG9kYXlSZXN1bHQuZGF0ZX0gLSA8c3BhbiBjbGFzc05hbWU9e2dldEdhbWVSYW5nZUNvbG9yKHRvZGF5UmVzdWx0LmdhbWVSYW5nZSl9PlxuICAgICAgICAgICAgICAgICAgICB7Z2V0R2FtZVJhbmdlSWNvbih0b2RheVJlc3VsdC5nYW1lUmFuZ2UpfXt0b2RheVJlc3VsdC5nYW1lUmFuZ2V9IEdhbWVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1hbWJlci01MDAgdG8tYW1iZXItNjAwIHJvdW5kZWQteGwgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJvcGh5IGNsYXNzTmFtZT1cImgtMTAgdy0xMCBtYi0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTFcIj5XaW5uaW5nIE51bWJlcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+e3RvZGF5UmVzdWx0Lndpbm5pbmdOdW1iZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTEwIHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeSBtci00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlcnMgY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5QYXJ0aWNpcGFudHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPnt0b2RheVJlc3VsdC50b3RhbFBhcnRpY2lwYW50c308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMTAgdy0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTYwMCBtci00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJvcGh5IGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+VG90YWwgUHJpemU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPnt0b2RheVJlc3VsdC50b3RhbFByaXplfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNiBiZy1ibHVlLTUwIHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWJsdWUtNzAwIG1iLTJcIj5XaW5uZXI8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTEgdGV4dC1ibGFja1wiPnt0b2RheVJlc3VsdC53aW5uZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS03MDAvNzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDb25ncmF0dWxhdGlvbnMgb24gZ3Vlc3NpbmcgdGhlIGNvcnJlY3QgbnVtYmVyIVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBwdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VlIFdpbm5lciBQcm9maWxlXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGJvcmRlci10IHB0LTZcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9nYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zaGluZVwiPlxuICAgICAgICAgICAgICAgICAgICBQbGF5IFRvZGF5J3MgR2FtZSA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJtbC0yIGgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICAgIDxQbGF5ZXJHYW1lc0xpc3QgXG4gICAgICAgICAgICAgIGdhbWVFbnRyaWVzPXtnYW1lRW50cmllc31cbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0dhbWVEYXRhTG9hZGluZ31cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImdsYXNzLWNhcmQgbXQtOFwiPlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5QYXN0IFdpbm5lcnM8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICBTZWUgd2hvIHdvbiBpbiBwcmV2aW91cyBkYXlzXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgYmctYmx1ZS0xMDAgdGV4dC1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJEYXlzIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8VGFicyBkZWZhdWx0VmFsdWU9XCJhbGxcIiBjbGFzc05hbWU9XCJtYi02XCIgb25WYWx1ZUNoYW5nZT17c2V0QWN0aXZlVGFifT5cbiAgICAgICAgICAgICAgICAgIDxUYWJzTGlzdCBjbGFzc05hbWU9XCJncmlkIHctZnVsbCBncmlkLWNvbHMtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCJhbGxcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcm9waHkgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz4gQWxsIEdhbWVzXG4gICAgICAgICAgICAgICAgICAgIDwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJzVHJpZ2dlciB2YWx1ZT1cIjEtMTAwXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFyZ2V0IGNsYXNzTmFtZT1cImgtNCB3LTQgbXItMlwiIC8+IDEtMTAwXG4gICAgICAgICAgICAgICAgICAgIDwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJzVHJpZ2dlciB2YWx1ZT1cIjEtNTAwXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8R2FtZXBhZCBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPiAxLTUwMFxuICAgICAgICAgICAgICAgICAgICA8L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCIxLTEwMDBcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxEaWNlMSBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPiAxLTEwMDBcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgIDwvVGFic0xpc3Q+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8VGFic0NvbnRlbnQgdmFsdWU9XCJhbGxcIiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJXaW5uZXJzVGFibGUoZmlsdGVyZWRXaW5uZXJzLCBpc0xvYWRpbmcpfVxuICAgICAgICAgICAgICAgICAgPC9UYWJzQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwiMS0xMDBcIiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJXaW5uZXJzVGFibGUoZmlsdGVyZWRXaW5uZXJzLCBpc0xvYWRpbmcpfVxuICAgICAgICAgICAgICAgICAgPC9UYWJzQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwiMS01MDBcIiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJXaW5uZXJzVGFibGUoZmlsdGVyZWRXaW5uZXJzLCBpc0xvYWRpbmcpfVxuICAgICAgICAgICAgICAgICAgPC9UYWJzQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwiMS0xMDAwXCIgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyV2lubmVyc1RhYmxlKGZpbHRlcmVkV2lubmVycywgaXNMb2FkaW5nKX1cbiAgICAgICAgICAgICAgICAgIDwvVGFic0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBib3JkZXItdCBwdC02XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgVmlldyBBbGwgV2lubmVyc1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbmltYXRlZFRyYW5zaXRpb24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2FyZEZvb3RlciIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJUcm9waHkiLCJVc2VycyIsIkNhbGVuZGFyRGF5cyIsIkFycm93UmlnaHQiLCJEaWNlMSIsIlRhcmdldCIsIkdhbWVwYWQiLCJUYWJzIiwiVGFic0NvbnRlbnQiLCJUYWJzTGlzdCIsIlRhYnNUcmlnZ2VyIiwiTmF2YmFyIiwiQW5pbWF0ZWRUcmFuc2l0aW9uIiwiUGxheWVyR2FtZXNMaXN0IiwiZ2V0R2FtZVJhbmdlSWNvbiIsInJhbmdlIiwiY2xhc3NOYW1lIiwiZ2V0R2FtZVJhbmdlQ29sb3IiLCJyZW5kZXJXaW5uZXJzVGFibGUiLCJ3aW5uZXJzIiwiaXNMb2FkaW5nIiwiZGl2IiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJsZW5ndGgiLCJ3aW5uZXIiLCJ0ZCIsImRhdGUiLCJuYW1lIiwiZ2FtZVJhbmdlIiwid2lubmluZ051bWJlciIsInByaXplIiwiaWQiLCJjb2xTcGFuIiwiUmVzdWx0cyIsInBhc3RXaW5uZXJzIiwic2V0UGFzdFdpbm5lcnMiLCJnYW1lRW50cmllcyIsInNldEdhbWVFbnRyaWVzIiwic2V0SXNMb2FkaW5nIiwiaXNHYW1lRGF0YUxvYWRpbmciLCJzZXRJc0dhbWVEYXRhTG9hZGluZyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInRvZGF5UmVzdWx0cyIsIm51bWJlciIsInNldFRpbWVvdXQiLCJnYW1lTnVtYmVyIiwicGxheWVycyIsInRpbWVzdGFtcCIsIkRhdGUiLCJzZXRIb3VycyIsInN0cmVhayIsImJhZGdlcyIsInRvZGF5UmVzdWx0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwidG90YWxQYXJ0aWNpcGFudHMiLCJ0b3RhbFByaXplIiwiZmlsdGVyZWRXaW5uZXJzIiwiZmlsdGVyIiwiaDEiLCJwIiwiaDIiLCJzcGFuIiwiaDMiLCJ2YXJpYW50IiwidG8iLCJkZWZhdWx0VmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxRQUFRLEVBQUVDLFNBQVMsUUFBUSxRQUFRO0FBQ25ELFNBQVNDLElBQUksUUFBUSxtQkFBbUI7QUFDeEMsU0FBU0MsTUFBTSxRQUFRLHlCQUF5QjtBQUNoRCxTQUFTQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxRQUFRLHVCQUF1QjtBQUM3RyxTQUFTQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLFFBQVEsZUFBZTtBQUMvRixTQUFTQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLFFBQVEsdUJBQXVCO0FBQ2hGLE9BQU9DLFlBQVksc0JBQXNCO0FBQ3pDLE9BQU9DLHdCQUF3QixrQ0FBa0M7QUFDakUsT0FBT0MscUJBQXFCLG9DQUFvQztBQWtCaEUsTUFBTUMsbUJBQW1CLENBQUNDO0lBQ3hCLE9BQU9BO1FBQ0wsS0FBSztZQUNILHFCQUFPLFFBQUNWO2dCQUFPVyxXQUFVOzs7Ozs7UUFDM0IsS0FBSztZQUNILHFCQUFPLFFBQUNWO2dCQUFRVSxXQUFVOzs7Ozs7UUFDNUIsS0FBSztZQUNILHFCQUFPLFFBQUNaO2dCQUFNWSxXQUFVOzs7Ozs7UUFDMUI7WUFDRSxxQkFBTyxRQUFDaEI7Z0JBQU9nQixXQUFVOzs7Ozs7SUFDN0I7QUFDRjtBQUVBLE1BQU1DLG9CQUFvQixDQUFDRjtJQUN6QixPQUFPQTtRQUNMLEtBQUs7WUFDSCxPQUFPO1FB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