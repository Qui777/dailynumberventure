import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/context/GameContext.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/context/GameContext.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$(), _s1 = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const createContext = __vite__cjsImport2_react["createContext"]; const useContext = __vite__cjsImport2_react["useContext"]; const useState = __vite__cjsImport2_react["useState"]; const useEffect = __vite__cjsImport2_react["useEffect"];
import { toast } from "/node_modules/.vite/deps/sonner.js?v=57c2cc69";
import { getDailyNumber, getDailyNumberForRange, setCustomDailyNumberForRange, setAllCustomDailyNumbers } from "/src/utils/dailyNumberUtils.ts";
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=57c2cc69";
const GameContext = /*#__PURE__*/ createContext(undefined);
export const useGameContext = ()=>{
    _s();
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGameContext must be used within a GameProvider');
    }
    return context;
};
_s(useGameContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
export const GameProvider = ({ children })=>{
    _s1();
    const [guessNumber, setGuessNumber] = useState(500);
    const [customBallNumber, setCustomBallNumber] = useState("");
    const [customGameNumbers, setCustomGameNumbers] = useState({
        '1-100': '',
        '1-500': '',
        '1-1000': ''
    });
    const [attempts, setAttempts] = useState([]);
    const [hasPaid, setHasPaid] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [dailyAttemptUsed, setDailyAttemptUsed] = useState(false);
    const [dailyNumber, setDailyNumber] = useState(undefined);
    const [dailyNumbers, setDailyNumbers] = useState({
        '1-100': undefined,
        '1-500': undefined,
        '1-1000': undefined
    });
    const [playerEntries, setPlayerEntries] = useState([]);
    const [playerName, setPlayerName] = useState("");
    const [currentStreak, setCurrentStreak] = useState(0);
    const [leaderboardEntries, setLeaderboardEntries] = useState([]);
    const [selectedGameRange, setSelectedGameRange] = useState("1-1000");
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const navigate = useNavigate();
    const [isOwner, setIsOwner] = useState(false);
    const midnightTonight = new Date();
    midnightTonight.setHours(23, 59, 59, 999);
    useEffect(()=>{
        const ownerStatus = localStorage.getItem('is_owner') === 'true';
        setIsOwner(ownerStatus);
        if (ownerStatus) {
            console.log('Logged in as Game Owner');
        }
    }, []);
    useEffect(()=>{
        if (isOwner) {
            const savedNumbers = {
                '1-100': customGameNumbers['1-100'] ? parseInt(customGameNumbers['1-100']) : undefined,
                '1-500': customGameNumbers['1-500'] ? parseInt(customGameNumbers['1-500']) : undefined,
                '1-1000': customGameNumbers['1-1000'] ? parseInt(customGameNumbers['1-1000']) : undefined
            };
            setDailyNumbers(savedNumbers);
            setDailyNumber(savedNumbers[selectedGameRange]);
        } else {
            const numbers = {
                '1-100': getDailyNumberForRange('1-100', 1, 100),
                '1-500': getDailyNumberForRange('1-500', 1, 500),
                '1-1000': getDailyNumber()
            };
            setDailyNumbers(numbers);
            setDailyNumber(numbers[selectedGameRange]);
            console.log("Today's numbers (not visible to players):", numbers);
        }
    }, [
        isOwner,
        customGameNumbers,
        selectedGameRange
    ]);
    useEffect(()=>{
        setDailyNumber(dailyNumbers[selectedGameRange]);
        if (selectedGameRange === '1-100') {
            setGuessNumber((prev)=>Math.min(prev, 100));
        } else if (selectedGameRange === '1-500') {
            setGuessNumber((prev)=>Math.min(prev, 500));
        }
        if (isOwner) {
            setCustomBallNumber(customGameNumbers[selectedGameRange] || '');
        }
    }, [
        selectedGameRange,
        dailyNumbers,
        isOwner,
        customGameNumbers
    ]);
    useEffect(()=>{
        const mockEntries = [
            {
                id: '1',
                name: 'Alex Smith',
                number: 325,
                timestamp: new Date(Date.now() - 1000 * 60 * 30),
                streak: 7,
                badges: [
                    'streak'
                ],
                gameRange: '1-500'
            },
            {
                id: '2',
                name: 'Jamie Garcia',
                number: 776,
                timestamp: new Date(Date.now() - 1000 * 60 * 45),
                streak: 3,
                badges: [],
                gameRange: '1-1000'
            },
            {
                id: '3',
                name: 'Taylor Wong',
                number: 128,
                timestamp: new Date(Date.now() - 1000 * 60 * 60),
                streak: 1,
                badges: [],
                gameRange: '1-100'
            }
        ];
        setPlayerEntries(mockEntries);
        const mockLeaderboard = [
            {
                id: '1',
                name: 'Alex Smith',
                totalWins: 12,
                fastestGuess: 45,
                badges: [
                    {
                        id: '1',
                        name: 'Champion',
                        icon: 'crown',
                        description: 'Top player of the month'
                    }
                ]
            },
            {
                id: '2',
                name: 'Jordan Lee',
                totalWins: 10,
                fastestGuess: 62,
                badges: [
                    {
                        id: '2',
                        name: 'Streak Master',
                        icon: 'zap',
                        description: '30-day streak achieved'
                    }
                ]
            },
            {
                id: '3',
                name: 'Taylor Wong',
                totalWins: 8,
                fastestGuess: 78,
                badges: []
            },
            {
                id: '4',
                name: 'Jamie Garcia',
                totalWins: 7,
                fastestGuess: 55,
                badges: [
                    {
                        id: '3',
                        name: 'Quick Guesser',
                        icon: 'award',
                        description: 'Fast guessing badge'
                    }
                ]
            },
            {
                id: '5',
                name: 'Riley Johnson',
                totalWins: 6,
                fastestGuess: 92,
                badges: []
            }
        ];
        setLeaderboardEntries(mockLeaderboard);
        if (!isOwner) {
            setCurrentStreak(5);
        }
    }, [
        isOwner
    ]);
    const handlePaymentComplete = (name)=>{
        setIsPaymentModalOpen(false);
        setHasPaid(true);
        setPlayerName(name);
        toast.success("Payment successful! You can now make your guess.");
        setCurrentStreak((prev)=>prev + 1);
        localStorage.setItem('username', name);
        localStorage.setItem('gameRange', selectedGameRange);
        const newEntry = {
            id: Date.now().toString(),
            name: name,
            number: 0,
            timestamp: new Date(),
            streak: currentStreak + 1,
            badges: currentStreak + 1 >= 7 ? [
                'streak'
            ] : [],
            gameRange: selectedGameRange
        };
        setPlayerEntries((prev)=>[
                ...prev,
                newEntry
            ]);
    };
    const saveAllCustomNumbers = ()=>{
        const numbersToSave = {};
        if (customGameNumbers['1-100'] && !isNaN(parseInt(customGameNumbers['1-100']))) {
            numbersToSave['1-100'] = parseInt(customGameNumbers['1-100']);
        }
        if (customGameNumbers['1-500'] && !isNaN(parseInt(customGameNumbers['1-500']))) {
            numbersToSave['1-500'] = parseInt(customGameNumbers['1-500']);
        }
        if (customGameNumbers['1-1000'] && !isNaN(parseInt(customGameNumbers['1-1000']))) {
            numbersToSave['1-1000'] = parseInt(customGameNumbers['1-1000']);
        }
        setAllCustomDailyNumbers(numbersToSave);
        const newDailyNumbers = {
            ...dailyNumbers
        };
        Object.keys(numbersToSave).forEach((key)=>{
            newDailyNumbers[key] = numbersToSave[key];
        });
        setDailyNumbers(newDailyNumbers);
        toast.success("All game numbers have been set successfully!");
    };
    const handleSubmitGuess = ()=>{
        if (isOwner) {
            if (customBallNumber) {
                const numberValue = parseInt(customBallNumber);
                setCustomGameNumbers((prev)=>({
                        ...prev,
                        [selectedGameRange]: customBallNumber
                    }));
                setDailyNumber(numberValue);
                setDailyNumbers((prev)=>({
                        ...prev,
                        [selectedGameRange]: numberValue
                    }));
                setCustomDailyNumberForRange(selectedGameRange, numberValue);
                toast.success(`Today's number for ${selectedGameRange} has been set to ${numberValue}!`);
            } else {
                toast.error("Please enter a number first.");
            }
        } else {
            if (!hasPaid) {
                setIsPaymentModalOpen(true);
                return;
            }
            setIsSubmitting(true);
            setTimeout(()=>{
                setIsSubmitting(false);
                setAttempts((prev)=>[
                        ...prev,
                        guessNumber
                    ]);
                setDailyAttemptUsed(true);
                const existingEntryIndex = playerEntries.findIndex((entry)=>entry.name === playerName && entry.number === 0);
                if (existingEntryIndex >= 0) {
                    const updatedEntries = [
                        ...playerEntries
                    ];
                    updatedEntries[existingEntryIndex] = {
                        ...updatedEntries[existingEntryIndex],
                        number: guessNumber,
                        timestamp: new Date()
                    };
                    setPlayerEntries(updatedEntries);
                } else {
                    const newEntry = {
                        id: Date.now().toString(),
                        name: playerName || "Guest Player",
                        number: guessNumber,
                        timestamp: new Date(),
                        streak: currentStreak,
                        badges: currentStreak >= 7 ? [
                            'streak'
                        ] : [],
                        gameRange: selectedGameRange
                    };
                    setPlayerEntries((prev)=>[
                            ...prev,
                            newEntry
                        ]);
                }
                if (dailyNumber && guessNumber === dailyNumber) {
                    toast.success("Congratulations! You guessed the correct number!");
                    setTimeout(()=>{
                        navigate('/results');
                    }, 2000);
                } else {
                    toast.success("Your guess has been submitted successfully!");
                    if (dailyNumber && Math.abs(guessNumber - dailyNumber) <= 10) {
                        toast.info("You're very close to the correct number!");
                    } else if (dailyNumber && guessNumber > dailyNumber) {
                        toast.info("Your guess is higher than the secret number.");
                    } else if (dailyNumber && guessNumber < dailyNumber) {
                        toast.info("Your guess is lower than the secret number.");
                    }
                }
            }, 1500);
        }
    };
    const handleResetGuess = ()=>{
        if (isOwner) {
            setCustomBallNumber("");
            setCustomGameNumbers((prev)=>({
                    ...prev,
                    [selectedGameRange]: ""
                }));
            setDailyNumbers((prev)=>({
                    ...prev,
                    [selectedGameRange]: undefined
                }));
            if (selectedGameRange === '1-1000') {
                setDailyNumber(undefined);
            }
        } else {
            if (selectedGameRange === '1-100') {
                setGuessNumber(50);
            } else if (selectedGameRange === '1-500') {
                setGuessNumber(250);
            } else {
                setGuessNumber(500);
            }
        }
    };
    const handleCustomBallNumberChange = (value)=>{
        if (value === "" || /^\d+$/.test(value)) {
            const numValue = value === "" ? 0 : parseInt(value);
            const max = selectedGameRange === '1-100' ? 100 : selectedGameRange === '1-500' ? 500 : 1000;
            if (value === "" || numValue >= 1 && numValue <= max) {
                setCustomBallNumber(value);
            }
        }
    };
    const handleTimerComplete = ()=>{
        toast.info("Today's game has ended. Come back tomorrow for a new challenge!");
        setDailyAttemptUsed(true);
        setTimeout(()=>{
            navigate('/results');
        }, 2000);
    };
    const instructionSections = [
        {
            title: isOwner ? "Set Today's Number" : "Make Your Guess",
            description: isOwner ? "Enter a number between 1 and 1,000 for today's challenge." : "Choose a number between 1 and 1,000. Be strategic with your selection!"
        },
        {
            title: "Submit Before Midnight",
            description: isOwner ? "The number must be set before the countdown ends." : "All guesses must be submitted before the countdown ends."
        },
        {
            title: isOwner ? "Wait For Players" : "Check Results Tomorrow",
            description: isOwner ? "Players will submit their guesses until midnight." : "Come back tomorrow to see if you've won the prize!"
        }
    ];
    const value = {
        guessNumber,
        setGuessNumber,
        customBallNumber,
        setCustomBallNumber,
        customGameNumbers,
        setCustomGameNumbers,
        attempts,
        setAttempts,
        hasPaid,
        setHasPaid,
        isPaymentModalOpen,
        setIsPaymentModalOpen,
        isSubmitting,
        setIsSubmitting,
        dailyAttemptUsed,
        setDailyAttemptUsed,
        dailyNumber,
        setDailyNumber,
        dailyNumbers,
        setDailyNumbers,
        playerEntries,
        setPlayerEntries,
        playerName,
        setPlayerName,
        currentStreak,
        setCurrentStreak,
        leaderboardEntries,
        isOwner,
        handleSubmitGuess,
        handleResetGuess,
        handlePaymentComplete,
        handleCustomBallNumberChange,
        handleTimerComplete,
        instructionSections,
        midnightTonight,
        selectedGameRange,
        setSelectedGameRange,
        saveAllCustomNumbers,
        showPaymentModal,
        setShowPaymentModal
    };
    return /*#__PURE__*/ _jsxDEV(GameContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "/dev-server/src/context/GameContext.tsx",
        lineNumber: 473,
        columnNumber: 10
    }, this);
};
_s1(GameProvider, "E/uD2c6LRaHjdBoWNlTsELZy79c=", false, function() {
    return [
        useNavigate
    ];
});
_c = GameProvider;
var _c;
$RefreshReg$(_c, "GameProvider");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/context/GameContext.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/context/GameContext.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbWVDb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAnc29ubmVyJztcbmltcG9ydCB7IFxuICBnZXREYWlseU51bWJlciwgXG4gIHNldEN1c3RvbURhaWx5TnVtYmVyLCBcbiAgZ2V0RGFpbHlOdW1iZXJGb3JSYW5nZSwgXG4gIHNldEN1c3RvbURhaWx5TnVtYmVyRm9yUmFuZ2UsIFxuICBnZXRBbGxEYWlseU51bWJlcnMsXG4gIHNldEFsbEN1c3RvbURhaWx5TnVtYmVyc1xufSBmcm9tICdAL3V0aWxzL2RhaWx5TnVtYmVyVXRpbHMnO1xuaW1wb3J0IHsgUGxheWVyRW50cnkgfSBmcm9tICdAL2NvbXBvbmVudHMvZ2FtZS9QbGF5ZXJFbnRyaWVzTGlzdCc7XG5pbXBvcnQgeyBMZWFkZXJib2FyZEVudHJ5IH0gZnJvbSAnQC90eXBlcy9wbGF5ZXInO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW50ZXJmYWNlIEdhbWVDb250ZXh0UHJvcHMge1xuICBndWVzc051bWJlcjogbnVtYmVyO1xuICBzZXRHdWVzc051bWJlcjogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG4gIGN1c3RvbUJhbGxOdW1iZXI6IHN0cmluZztcbiAgc2V0Q3VzdG9tQmFsbE51bWJlcjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGN1c3RvbUdhbWVOdW1iZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBzZXRDdXN0b21HYW1lTnVtYmVyczogKG51bWJlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID0+IHZvaWQ7XG4gIGF0dGVtcHRzOiBudW1iZXJbXTtcbiAgc2V0QXR0ZW1wdHM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcltdPj47XG4gIGhhc1BhaWQ6IGJvb2xlYW47XG4gIHNldEhhc1BhaWQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcbiAgaXNQYXltZW50TW9kYWxPcGVuOiBib29sZWFuO1xuICBzZXRJc1BheW1lbnRNb2RhbE9wZW46IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcbiAgaXNTdWJtaXR0aW5nOiBib29sZWFuO1xuICBzZXRJc1N1Ym1pdHRpbmc6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcbiAgZGFpbHlBdHRlbXB0VXNlZDogYm9vbGVhbjtcbiAgc2V0RGFpbHlBdHRlbXB0VXNlZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xuICBkYWlseU51bWJlcjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBzZXREYWlseU51bWJlcjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyIHwgdW5kZWZpbmVkPj47XG4gIGRhaWx5TnVtYmVyczogUmVjb3JkPHN0cmluZywgbnVtYmVyIHwgdW5kZWZpbmVkPjtcbiAgc2V0RGFpbHlOdW1iZXJzOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxSZWNvcmQ8c3RyaW5nLCBudW1iZXIgfCB1bmRlZmluZWQ+Pj47XG4gIHBsYXllckVudHJpZXM6IFBsYXllckVudHJ5W107XG4gIHNldFBsYXllckVudHJpZXM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFBsYXllckVudHJ5W10+PjtcbiAgcGxheWVyTmFtZTogc3RyaW5nO1xuICBzZXRQbGF5ZXJOYW1lOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgY3VycmVudFN0cmVhazogbnVtYmVyO1xuICBzZXRDdXJyZW50U3RyZWFrOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcbiAgbGVhZGVyYm9hcmRFbnRyaWVzOiBMZWFkZXJib2FyZEVudHJ5W107XG4gIGlzT3duZXI6IGJvb2xlYW47XG4gIGhhbmRsZVN1Ym1pdEd1ZXNzOiAoKSA9PiB2b2lkO1xuICBoYW5kbGVSZXNldEd1ZXNzOiAoKSA9PiB2b2lkO1xuICBoYW5kbGVQYXltZW50Q29tcGxldGU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGhhbmRsZUN1c3RvbUJhbGxOdW1iZXJDaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBoYW5kbGVUaW1lckNvbXBsZXRlOiAoKSA9PiB2b2lkO1xuICBpbnN0cnVjdGlvblNlY3Rpb25zOiBBcnJheTx7dGl0bGU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZ30+O1xuICBtaWRuaWdodFRvbmlnaHQ6IERhdGU7XG4gIHNlbGVjdGVkR2FtZVJhbmdlOiBzdHJpbmc7XG4gIHNldFNlbGVjdGVkR2FtZVJhbmdlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgc2F2ZUFsbEN1c3RvbU51bWJlcnM6ICgpID0+IHZvaWQ7XG4gIHNob3dQYXltZW50TW9kYWw/OiBib29sZWFuO1xuICBzZXRTaG93UGF5bWVudE1vZGFsPzogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5jb25zdCBHYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8R2FtZUNvbnRleHRQcm9wcyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IHVzZUdhbWVDb250ZXh0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChHYW1lQ29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlR2FtZUNvbnRleHQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEdhbWVQcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuZXhwb3J0IGNvbnN0IEdhbWVQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZ3Vlc3NOdW1iZXIsIHNldEd1ZXNzTnVtYmVyXSA9IHVzZVN0YXRlKDUwMCk7XG4gIGNvbnN0IFtjdXN0b21CYWxsTnVtYmVyLCBzZXRDdXN0b21CYWxsTnVtYmVyXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtjdXN0b21HYW1lTnVtYmVycywgc2V0Q3VzdG9tR2FtZU51bWJlcnNdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oe1xuICAgICcxLTEwMCc6ICcnLFxuICAgICcxLTUwMCc6ICcnLFxuICAgICcxLTEwMDAnOiAnJ1xuICB9KTtcbiAgY29uc3QgW2F0dGVtcHRzLCBzZXRBdHRlbXB0c10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xuICBjb25zdCBbaGFzUGFpZCwgc2V0SGFzUGFpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1BheW1lbnRNb2RhbE9wZW4sIHNldElzUGF5bWVudE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYWlseUF0dGVtcHRVc2VkLCBzZXREYWlseUF0dGVtcHRVc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RhaWx5TnVtYmVyLCBzZXREYWlseU51bWJlcl0gPSB1c2VTdGF0ZTxudW1iZXIgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtkYWlseU51bWJlcnMsIHNldERhaWx5TnVtYmVyc10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBudW1iZXIgfCB1bmRlZmluZWQ+Pih7XG4gICAgJzEtMTAwJzogdW5kZWZpbmVkLFxuICAgICcxLTUwMCc6IHVuZGVmaW5lZCxcbiAgICAnMS0xMDAwJzogdW5kZWZpbmVkXG4gIH0pO1xuICBjb25zdCBbcGxheWVyRW50cmllcywgc2V0UGxheWVyRW50cmllc10gPSB1c2VTdGF0ZTxQbGF5ZXJFbnRyeVtdPihbXSk7XG4gIGNvbnN0IFtwbGF5ZXJOYW1lLCBzZXRQbGF5ZXJOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtjdXJyZW50U3RyZWFrLCBzZXRDdXJyZW50U3RyZWFrXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtsZWFkZXJib2FyZEVudHJpZXMsIHNldExlYWRlcmJvYXJkRW50cmllc10gPSB1c2VTdGF0ZTxMZWFkZXJib2FyZEVudHJ5W10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkR2FtZVJhbmdlLCBzZXRTZWxlY3RlZEdhbWVSYW5nZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiMS0xMDAwXCIpO1xuICBjb25zdCBbc2hvd1BheW1lbnRNb2RhbCwgc2V0U2hvd1BheW1lbnRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgXG4gIGNvbnN0IFtpc093bmVyLCBzZXRJc093bmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IG1pZG5pZ2h0VG9uaWdodCA9IG5ldyBEYXRlKCk7XG4gIG1pZG5pZ2h0VG9uaWdodC5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb3duZXJTdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNfb3duZXInKSA9PT0gJ3RydWUnO1xuICAgIHNldElzT3duZXIob3duZXJTdGF0dXMpO1xuICAgIFxuICAgIGlmIChvd25lclN0YXR1cykge1xuICAgICAgY29uc29sZS5sb2coJ0xvZ2dlZCBpbiBhcyBHYW1lIE93bmVyJyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNPd25lcikge1xuICAgICAgY29uc3Qgc2F2ZWROdW1iZXJzID0ge1xuICAgICAgICAnMS0xMDAnOiBjdXN0b21HYW1lTnVtYmVyc1snMS0xMDAnXSA/IHBhcnNlSW50KGN1c3RvbUdhbWVOdW1iZXJzWycxLTEwMCddKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgJzEtNTAwJzogY3VzdG9tR2FtZU51bWJlcnNbJzEtNTAwJ10gPyBwYXJzZUludChjdXN0b21HYW1lTnVtYmVyc1snMS01MDAnXSkgOiB1bmRlZmluZWQsXG4gICAgICAgICcxLTEwMDAnOiBjdXN0b21HYW1lTnVtYmVyc1snMS0xMDAwJ10gPyBwYXJzZUludChjdXN0b21HYW1lTnVtYmVyc1snMS0xMDAwJ10pIDogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgXG4gICAgICBzZXREYWlseU51bWJlcnMoc2F2ZWROdW1iZXJzKTtcbiAgICAgIHNldERhaWx5TnVtYmVyKHNhdmVkTnVtYmVyc1tzZWxlY3RlZEdhbWVSYW5nZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBudW1iZXJzID0ge1xuICAgICAgICAnMS0xMDAnOiBnZXREYWlseU51bWJlckZvclJhbmdlKCcxLTEwMCcsIDEsIDEwMCksXG4gICAgICAgICcxLTUwMCc6IGdldERhaWx5TnVtYmVyRm9yUmFuZ2UoJzEtNTAwJywgMSwgNTAwKSxcbiAgICAgICAgJzEtMTAwMCc6IGdldERhaWx5TnVtYmVyKClcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHNldERhaWx5TnVtYmVycyhudW1iZXJzKTtcbiAgICAgIHNldERhaWx5TnVtYmVyKG51bWJlcnNbc2VsZWN0ZWRHYW1lUmFuZ2VdKTtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coXCJUb2RheSdzIG51bWJlcnMgKG5vdCB2aXNpYmxlIHRvIHBsYXllcnMpOlwiLCBudW1iZXJzKTtcbiAgICB9XG4gIH0sIFtpc093bmVyLCBjdXN0b21HYW1lTnVtYmVycywgc2VsZWN0ZWRHYW1lUmFuZ2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERhaWx5TnVtYmVyKGRhaWx5TnVtYmVyc1tzZWxlY3RlZEdhbWVSYW5nZV0pO1xuICAgIFxuICAgIGlmIChzZWxlY3RlZEdhbWVSYW5nZSA9PT0gJzEtMTAwJykge1xuICAgICAgc2V0R3Vlc3NOdW1iZXIocHJldiA9PiBNYXRoLm1pbihwcmV2LCAxMDApKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkR2FtZVJhbmdlID09PSAnMS01MDAnKSB7XG4gICAgICBzZXRHdWVzc051bWJlcihwcmV2ID0+IE1hdGgubWluKHByZXYsIDUwMCkpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoaXNPd25lcikge1xuICAgICAgc2V0Q3VzdG9tQmFsbE51bWJlcihjdXN0b21HYW1lTnVtYmVyc1tzZWxlY3RlZEdhbWVSYW5nZV0gfHwgJycpO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkR2FtZVJhbmdlLCBkYWlseU51bWJlcnMsIGlzT3duZXIsIGN1c3RvbUdhbWVOdW1iZXJzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb2NrRW50cmllczogUGxheWVyRW50cnlbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgbmFtZTogJ0FsZXggU21pdGgnLFxuICAgICAgICBudW1iZXI6IDMyNSxcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpIC0gMTAwMCAqIDYwICogMzApLFxuICAgICAgICBzdHJlYWs6IDcsXG4gICAgICAgIGJhZGdlczogWydzdHJlYWsnXSxcbiAgICAgICAgZ2FtZVJhbmdlOiAnMS01MDAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzInLFxuICAgICAgICBuYW1lOiAnSmFtaWUgR2FyY2lhJyxcbiAgICAgICAgbnVtYmVyOiA3NzYsXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoRGF0ZS5ub3coKSAtIDEwMDAgKiA2MCAqIDQ1KSxcbiAgICAgICAgc3RyZWFrOiAzLFxuICAgICAgICBiYWRnZXM6IFtdLFxuICAgICAgICBnYW1lUmFuZ2U6ICcxLTEwMDAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzMnLFxuICAgICAgICBuYW1lOiAnVGF5bG9yIFdvbmcnLFxuICAgICAgICBudW1iZXI6IDEyOCxcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpIC0gMTAwMCAqIDYwICogNjApLFxuICAgICAgICBzdHJlYWs6IDEsXG4gICAgICAgIGJhZGdlczogW10sXG4gICAgICAgIGdhbWVSYW5nZTogJzEtMTAwJ1xuICAgICAgfVxuICAgIF07XG4gICAgXG4gICAgc2V0UGxheWVyRW50cmllcyhtb2NrRW50cmllcyk7XG5cbiAgICBjb25zdCBtb2NrTGVhZGVyYm9hcmQ6IExlYWRlcmJvYXJkRW50cnlbXSA9IFtcbiAgICAgIHsgXG4gICAgICAgIGlkOiAnMScsIFxuICAgICAgICBuYW1lOiAnQWxleCBTbWl0aCcsIFxuICAgICAgICB0b3RhbFdpbnM6IDEyLCBcbiAgICAgICAgZmFzdGVzdEd1ZXNzOiA0NSxcbiAgICAgICAgYmFkZ2VzOiBbXG4gICAgICAgICAgeyBpZDogJzEnLCBuYW1lOiAnQ2hhbXBpb24nLCBpY29uOiAnY3Jvd24nLCBkZXNjcmlwdGlvbjogJ1RvcCBwbGF5ZXIgb2YgdGhlIG1vbnRoJyB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJzInLCBcbiAgICAgICAgbmFtZTogJ0pvcmRhbiBMZWUnLCBcbiAgICAgICAgdG90YWxXaW5zOiAxMCwgXG4gICAgICAgIGZhc3Rlc3RHdWVzczogNjIsXG4gICAgICAgIGJhZGdlczogW1xuICAgICAgICAgIHsgaWQ6ICcyJywgbmFtZTogJ1N0cmVhayBNYXN0ZXInLCBpY29uOiAnemFwJywgZGVzY3JpcHRpb246ICczMC1kYXkgc3RyZWFrIGFjaGlldmVkJyB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJzMnLCBcbiAgICAgICAgbmFtZTogJ1RheWxvciBXb25nJywgXG4gICAgICAgIHRvdGFsV2luczogOCwgXG4gICAgICAgIGZhc3Rlc3RHdWVzczogNzgsXG4gICAgICAgIGJhZGdlczogW11cbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJzQnLCBcbiAgICAgICAgbmFtZTogJ0phbWllIEdhcmNpYScsIFxuICAgICAgICB0b3RhbFdpbnM6IDcsIFxuICAgICAgICBmYXN0ZXN0R3Vlc3M6IDU1LFxuICAgICAgICBiYWRnZXM6IFtcbiAgICAgICAgICB7IGlkOiAnMycsIG5hbWU6ICdRdWljayBHdWVzc2VyJywgaWNvbjogJ2F3YXJkJywgZGVzY3JpcHRpb246ICdGYXN0IGd1ZXNzaW5nIGJhZGdlJyB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJzUnLCBcbiAgICAgICAgbmFtZTogJ1JpbGV5IEpvaG5zb24nLCBcbiAgICAgICAgdG90YWxXaW5zOiA2LCBcbiAgICAgICAgZmFzdGVzdEd1ZXNzOiA5MixcbiAgICAgICAgYmFkZ2VzOiBbXVxuICAgICAgfSxcbiAgICBdO1xuICAgIFxuICAgIHNldExlYWRlcmJvYXJkRW50cmllcyhtb2NrTGVhZGVyYm9hcmQpO1xuXG4gICAgaWYgKCFpc093bmVyKSB7XG4gICAgICBzZXRDdXJyZW50U3RyZWFrKDUpO1xuICAgIH1cbiAgfSwgW2lzT3duZXJdKTtcblxuICBjb25zdCBoYW5kbGVQYXltZW50Q29tcGxldGUgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0SXNQYXltZW50TW9kYWxPcGVuKGZhbHNlKTtcbiAgICBzZXRIYXNQYWlkKHRydWUpO1xuICAgIHNldFBsYXllck5hbWUobmFtZSk7XG4gICAgdG9hc3Quc3VjY2VzcyhcIlBheW1lbnQgc3VjY2Vzc2Z1bCEgWW91IGNhbiBub3cgbWFrZSB5b3VyIGd1ZXNzLlwiKTtcbiAgICBcbiAgICBzZXRDdXJyZW50U3RyZWFrKHByZXYgPT4gcHJldiArIDEpO1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIG5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lUmFuZ2UnLCBzZWxlY3RlZEdhbWVSYW5nZSk7XG4gICAgXG4gICAgY29uc3QgbmV3RW50cnk6IFBsYXllckVudHJ5ID0ge1xuICAgICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBudW1iZXI6IDAsXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAgICBzdHJlYWs6IGN1cnJlbnRTdHJlYWsgKyAxLFxuICAgICAgYmFkZ2VzOiAoY3VycmVudFN0cmVhayArIDEpID49IDcgPyBbJ3N0cmVhayddIDogW10sXG4gICAgICBnYW1lUmFuZ2U6IHNlbGVjdGVkR2FtZVJhbmdlXG4gICAgfTtcbiAgICBcbiAgICBzZXRQbGF5ZXJFbnRyaWVzKHByZXYgPT4gWy4uLnByZXYsIG5ld0VudHJ5XSk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZUFsbEN1c3RvbU51bWJlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgbnVtYmVyc1RvU2F2ZTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuICAgIFxuICAgIGlmIChjdXN0b21HYW1lTnVtYmVyc1snMS0xMDAnXSAmJiAhaXNOYU4ocGFyc2VJbnQoY3VzdG9tR2FtZU51bWJlcnNbJzEtMTAwJ10pKSkge1xuICAgICAgbnVtYmVyc1RvU2F2ZVsnMS0xMDAnXSA9IHBhcnNlSW50KGN1c3RvbUdhbWVOdW1iZXJzWycxLTEwMCddKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGN1c3RvbUdhbWVOdW1iZXJzWycxLTUwMCddICYmICFpc05hTihwYXJzZUludChjdXN0b21HYW1lTnVtYmVyc1snMS01MDAnXSkpKSB7XG4gICAgICBudW1iZXJzVG9TYXZlWycxLTUwMCddID0gcGFyc2VJbnQoY3VzdG9tR2FtZU51bWJlcnNbJzEtNTAwJ10pO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY3VzdG9tR2FtZU51bWJlcnNbJzEtMTAwMCddICYmICFpc05hTihwYXJzZUludChjdXN0b21HYW1lTnVtYmVyc1snMS0xMDAwJ10pKSkge1xuICAgICAgbnVtYmVyc1RvU2F2ZVsnMS0xMDAwJ10gPSBwYXJzZUludChjdXN0b21HYW1lTnVtYmVyc1snMS0xMDAwJ10pO1xuICAgIH1cbiAgICBcbiAgICBzZXRBbGxDdXN0b21EYWlseU51bWJlcnMobnVtYmVyc1RvU2F2ZSk7XG4gICAgXG4gICAgY29uc3QgbmV3RGFpbHlOdW1iZXJzID0gey4uLmRhaWx5TnVtYmVyc307XG4gICAgT2JqZWN0LmtleXMobnVtYmVyc1RvU2F2ZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbmV3RGFpbHlOdW1iZXJzW2tleV0gPSBudW1iZXJzVG9TYXZlW2tleV07XG4gICAgfSk7XG4gICAgc2V0RGFpbHlOdW1iZXJzKG5ld0RhaWx5TnVtYmVycyk7XG4gICAgXG4gICAgdG9hc3Quc3VjY2VzcyhcIkFsbCBnYW1lIG51bWJlcnMgaGF2ZSBiZWVuIHNldCBzdWNjZXNzZnVsbHkhXCIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEd1ZXNzID0gKCkgPT4ge1xuICAgIGlmIChpc093bmVyKSB7XG4gICAgICBpZiAoY3VzdG9tQmFsbE51bWJlcikge1xuICAgICAgICBjb25zdCBudW1iZXJWYWx1ZSA9IHBhcnNlSW50KGN1c3RvbUJhbGxOdW1iZXIpO1xuICAgICAgICBzZXRDdXN0b21HYW1lTnVtYmVycyhwcmV2ID0+ICh7XG4gICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICBbc2VsZWN0ZWRHYW1lUmFuZ2VdOiBjdXN0b21CYWxsTnVtYmVyXG4gICAgICAgIH0pKTtcbiAgICAgICAgXG4gICAgICAgIHNldERhaWx5TnVtYmVyKG51bWJlclZhbHVlKTtcbiAgICAgICAgc2V0RGFpbHlOdW1iZXJzKHByZXYgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgIFtzZWxlY3RlZEdhbWVSYW5nZV06IG51bWJlclZhbHVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgXG4gICAgICAgIHNldEN1c3RvbURhaWx5TnVtYmVyRm9yUmFuZ2Uoc2VsZWN0ZWRHYW1lUmFuZ2UsIG51bWJlclZhbHVlKTtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgVG9kYXkncyBudW1iZXIgZm9yICR7c2VsZWN0ZWRHYW1lUmFuZ2V9IGhhcyBiZWVuIHNldCB0byAke251bWJlclZhbHVlfSFgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiUGxlYXNlIGVudGVyIGEgbnVtYmVyIGZpcnN0LlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFoYXNQYWlkKSB7XG4gICAgICAgIHNldElzUGF5bWVudE1vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRBdHRlbXB0cyhwcmV2ID0+IFsuLi5wcmV2LCBndWVzc051bWJlcl0pO1xuICAgICAgICBzZXREYWlseUF0dGVtcHRVc2VkKHRydWUpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZXhpc3RpbmdFbnRyeUluZGV4ID0gcGxheWVyRW50cmllcy5maW5kSW5kZXgoXG4gICAgICAgICAgZW50cnkgPT4gZW50cnkubmFtZSA9PT0gcGxheWVyTmFtZSAmJiBlbnRyeS5udW1iZXIgPT09IDBcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChleGlzdGluZ0VudHJ5SW5kZXggPj0gMCkge1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRFbnRyaWVzID0gWy4uLnBsYXllckVudHJpZXNdO1xuICAgICAgICAgIHVwZGF0ZWRFbnRyaWVzW2V4aXN0aW5nRW50cnlJbmRleF0gPSB7XG4gICAgICAgICAgICAuLi51cGRhdGVkRW50cmllc1tleGlzdGluZ0VudHJ5SW5kZXhdLFxuICAgICAgICAgICAgbnVtYmVyOiBndWVzc051bWJlcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKVxuICAgICAgICAgIH07XG4gICAgICAgICAgc2V0UGxheWVyRW50cmllcyh1cGRhdGVkRW50cmllcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3RW50cnk6IFBsYXllckVudHJ5ID0ge1xuICAgICAgICAgICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG5hbWU6IHBsYXllck5hbWUgfHwgXCJHdWVzdCBQbGF5ZXJcIixcbiAgICAgICAgICAgIG51bWJlcjogZ3Vlc3NOdW1iZXIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBzdHJlYWs6IGN1cnJlbnRTdHJlYWssXG4gICAgICAgICAgICBiYWRnZXM6IGN1cnJlbnRTdHJlYWsgPj0gNyA/IFsnc3RyZWFrJ10gOiBbXSxcbiAgICAgICAgICAgIGdhbWVSYW5nZTogc2VsZWN0ZWRHYW1lUmFuZ2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIFxuICAgICAgICAgIHNldFBsYXllckVudHJpZXMocHJldiA9PiBbLi4ucHJldiwgbmV3RW50cnldKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGRhaWx5TnVtYmVyICYmIGd1ZXNzTnVtYmVyID09PSBkYWlseU51bWJlcikge1xuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJDb25ncmF0dWxhdGlvbnMhIFlvdSBndWVzc2VkIHRoZSBjb3JyZWN0IG51bWJlciFcIik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBuYXZpZ2F0ZSgnL3Jlc3VsdHMnKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiWW91ciBndWVzcyBoYXMgYmVlbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoZGFpbHlOdW1iZXIgJiYgTWF0aC5hYnMoZ3Vlc3NOdW1iZXIgLSBkYWlseU51bWJlcikgPD0gMTApIHtcbiAgICAgICAgICAgIHRvYXN0LmluZm8oXCJZb3UncmUgdmVyeSBjbG9zZSB0byB0aGUgY29ycmVjdCBudW1iZXIhXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGFpbHlOdW1iZXIgJiYgZ3Vlc3NOdW1iZXIgPiBkYWlseU51bWJlcikge1xuICAgICAgICAgICAgdG9hc3QuaW5mbyhcIllvdXIgZ3Vlc3MgaXMgaGlnaGVyIHRoYW4gdGhlIHNlY3JldCBudW1iZXIuXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGFpbHlOdW1iZXIgJiYgZ3Vlc3NOdW1iZXIgPCBkYWlseU51bWJlcikge1xuICAgICAgICAgICAgdG9hc3QuaW5mbyhcIllvdXIgZ3Vlc3MgaXMgbG93ZXIgdGhhbiB0aGUgc2VjcmV0IG51bWJlci5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAxNTAwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzZXRHdWVzcyA9ICgpID0+IHtcbiAgICBpZiAoaXNPd25lcikge1xuICAgICAgc2V0Q3VzdG9tQmFsbE51bWJlcihcIlwiKTtcbiAgICAgIHNldEN1c3RvbUdhbWVOdW1iZXJzKHByZXYgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgW3NlbGVjdGVkR2FtZVJhbmdlXTogXCJcIlxuICAgICAgfSkpO1xuICAgICAgXG4gICAgICBzZXREYWlseU51bWJlcnMocHJldiA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBbc2VsZWN0ZWRHYW1lUmFuZ2VdOiB1bmRlZmluZWRcbiAgICAgIH0pKTtcbiAgICAgIFxuICAgICAgaWYgKHNlbGVjdGVkR2FtZVJhbmdlID09PSAnMS0xMDAwJykge1xuICAgICAgICBzZXREYWlseU51bWJlcih1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2VsZWN0ZWRHYW1lUmFuZ2UgPT09ICcxLTEwMCcpIHtcbiAgICAgICAgc2V0R3Vlc3NOdW1iZXIoNTApO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEdhbWVSYW5nZSA9PT0gJzEtNTAwJykge1xuICAgICAgICBzZXRHdWVzc051bWJlcigyNTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0R3Vlc3NOdW1iZXIoNTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ3VzdG9tQmFsbE51bWJlckNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IC9eXFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICBjb25zdCBudW1WYWx1ZSA9IHZhbHVlID09PSBcIlwiID8gMCA6IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgIFxuICAgICAgY29uc3QgbWF4ID0gc2VsZWN0ZWRHYW1lUmFuZ2UgPT09ICcxLTEwMCcgPyAxMDAgOiBcbiAgICAgICAgICAgICAgICAgc2VsZWN0ZWRHYW1lUmFuZ2UgPT09ICcxLTUwMCcgPyA1MDAgOiAxMDAwO1xuICAgICAgXG4gICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgKG51bVZhbHVlID49IDEgJiYgbnVtVmFsdWUgPD0gbWF4KSkge1xuICAgICAgICBzZXRDdXN0b21CYWxsTnVtYmVyKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGltZXJDb21wbGV0ZSA9ICgpID0+IHtcbiAgICB0b2FzdC5pbmZvKFwiVG9kYXkncyBnYW1lIGhhcyBlbmRlZC4gQ29tZSBiYWNrIHRvbW9ycm93IGZvciBhIG5ldyBjaGFsbGVuZ2UhXCIpO1xuICAgIHNldERhaWx5QXR0ZW1wdFVzZWQodHJ1ZSk7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBuYXZpZ2F0ZSgnL3Jlc3VsdHMnKTtcbiAgICB9LCAyMDAwKTtcbiAgfTtcblxuICBjb25zdCBpbnN0cnVjdGlvblNlY3Rpb25zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBpc093bmVyID8gXCJTZXQgVG9kYXkncyBOdW1iZXJcIiA6IFwiTWFrZSBZb3VyIEd1ZXNzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogaXNPd25lciBcbiAgICAgICAgPyBcIkVudGVyIGEgbnVtYmVyIGJldHdlZW4gMSBhbmQgMSwwMDAgZm9yIHRvZGF5J3MgY2hhbGxlbmdlLlwiXG4gICAgICAgIDogXCJDaG9vc2UgYSBudW1iZXIgYmV0d2VlbiAxIGFuZCAxLDAwMC4gQmUgc3RyYXRlZ2ljIHdpdGggeW91ciBzZWxlY3Rpb24hXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlN1Ym1pdCBCZWZvcmUgTWlkbmlnaHRcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBpc093bmVyXG4gICAgICAgID8gXCJUaGUgbnVtYmVyIG11c3QgYmUgc2V0IGJlZm9yZSB0aGUgY291bnRkb3duIGVuZHMuXCJcbiAgICAgICAgOiBcIkFsbCBndWVzc2VzIG11c3QgYmUgc3VibWl0dGVkIGJlZm9yZSB0aGUgY291bnRkb3duIGVuZHMuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBpc093bmVyID8gXCJXYWl0IEZvciBQbGF5ZXJzXCIgOiBcIkNoZWNrIFJlc3VsdHMgVG9tb3Jyb3dcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBpc093bmVyXG4gICAgICAgID8gXCJQbGF5ZXJzIHdpbGwgc3VibWl0IHRoZWlyIGd1ZXNzZXMgdW50aWwgbWlkbmlnaHQuXCJcbiAgICAgICAgOiBcIkNvbWUgYmFjayB0b21vcnJvdyB0byBzZWUgaWYgeW91J3ZlIHdvbiB0aGUgcHJpemUhXCJcbiAgICB9XG4gIF07XG5cbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgZ3Vlc3NOdW1iZXIsXG4gICAgc2V0R3Vlc3NOdW1iZXIsXG4gICAgY3VzdG9tQmFsbE51bWJlcixcbiAgICBzZXRDdXN0b21CYWxsTnVtYmVyLFxuICAgIGN1c3RvbUdhbWVOdW1iZXJzLFxuICAgIHNldEN1c3RvbUdhbWVOdW1iZXJzLFxuICAgIGF0dGVtcHRzLFxuICAgIHNldEF0dGVtcHRzLFxuICAgIGhhc1BhaWQsXG4gICAgc2V0SGFzUGFpZCxcbiAgICBpc1BheW1lbnRNb2RhbE9wZW4sXG4gICAgc2V0SXNQYXltZW50TW9kYWxPcGVuLFxuICAgIGlzU3VibWl0dGluZyxcbiAgICBzZXRJc1N1Ym1pdHRpbmcsXG4gICAgZGFpbHlBdHRlbXB0VXNlZCxcbiAgICBzZXREYWlseUF0dGVtcHRVc2VkLFxuICAgIGRhaWx5TnVtYmVyLFxuICAgIHNldERhaWx5TnVtYmVyLFxuICAgIGRhaWx5TnVtYmVycyxcbiAgICBzZXREYWlseU51bWJlcnMsXG4gICAgcGxheWVyRW50cmllcyxcbiAgICBzZXRQbGF5ZXJFbnRyaWVzLFxuICAgIHBsYXllck5hbWUsXG4gICAgc2V0UGxheWVyTmFtZSxcbiAgICBjdXJyZW50U3RyZWFrLFxuICAgIHNldEN1cnJlbnRTdHJlYWssXG4gICAgbGVhZGVyYm9hcmRFbnRyaWVzLFxuICAgIGlzT3duZXIsXG4gICAgaGFuZGxlU3VibWl0R3Vlc3MsXG4gICAgaGFuZGxlUmVzZXRHdWVzcyxcbiAgICBoYW5kbGVQYXltZW50Q29tcGxldGUsXG4gICAgaGFuZGxlQ3VzdG9tQmFsbE51bWJlckNoYW5nZSxcbiAgICBoYW5kbGVUaW1lckNvbXBsZXRlLFxuICAgIGluc3RydWN0aW9uU2VjdGlvbnMsXG4gICAgbWlkbmlnaHRUb25pZ2h0LFxuICAgIHNlbGVjdGVkR2FtZVJhbmdlLFxuICAgIHNldFNlbGVjdGVkR2FtZVJhbmdlLFxuICAgIHNhdmVBbGxDdXN0b21OdW1iZXJzLFxuICAgIHNob3dQYXltZW50TW9kYWwsXG4gICAgc2V0U2hvd1BheW1lbnRNb2RhbFxuICB9O1xuXG4gIHJldHVybiA8R2FtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9HYW1lQ29udGV4dC5Qcm92aWRlcj47XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRvYXN0IiwiZ2V0RGFpbHlOdW1iZXIiLCJnZXREYWlseU51bWJlckZvclJhbmdlIiwic2V0Q3VzdG9tRGFpbHlOdW1iZXJGb3JSYW5nZSIsInNldEFsbEN1c3RvbURhaWx5TnVtYmVycyIsInVzZU5hdmlnYXRlIiwiR2FtZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VHYW1lQ29udGV4dCIsImNvbnRleHQiLCJFcnJvciIsIkdhbWVQcm92aWRlciIsImNoaWxkcmVuIiwiZ3Vlc3NOdW1iZXIiLCJzZXRHdWVzc051bWJlciIsImN1c3RvbUJhbGxOdW1iZXIiLCJzZXRDdXN0b21CYWxsTnVtYmVyIiwiY3VzdG9tR2FtZU51bWJlcnMiLCJzZXRDdXN0b21HYW1lTnVtYmVycyIsImF0dGVtcHRzIiwic2V0QXR0ZW1wdHMiLCJoYXNQYWlkIiwic2V0SGFzUGFpZCIsImlzUGF5bWVudE1vZGFsT3BlbiIsInNldElzUGF5bWVudE1vZGFsT3BlbiIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImRhaWx5QXR0ZW1wdFVzZWQiLCJzZXREYWlseUF0dGVtcHRVc2VkIiwiZGFpbHlOdW1iZXIiLCJzZXREYWlseU51bWJlciIsImRhaWx5TnVtYmVycyIsInNldERhaWx5TnVtYmVycyIsInBsYXllckVudHJpZXMiLCJzZXRQbGF5ZXJFbnRyaWVzIiwicGxheWVyTmFtZSIsInNldFBsYXllck5hbWUiLCJjdXJyZW50U3RyZWFrIiwic2V0Q3VycmVudFN0cmVhayIsImxlYWRlcmJvYXJkRW50cmllcyIsInNldExlYWRlcmJvYXJkRW50cmllcyIsInNlbGVjdGVkR2FtZVJhbmdlIiwic2V0U2VsZWN0ZWRHYW1lUmFuZ2UiLCJzaG93UGF5bWVudE1vZGFsIiwic2V0U2hvd1BheW1lbnRNb2RhbCIsIm5hdmlnYXRlIiwiaXNPd25lciIsInNldElzT3duZXIiLCJtaWRuaWdodFRvbmlnaHQiLCJEYXRlIiwic2V0SG91cnMiLCJvd25lclN0YXR1cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwic2F2ZWROdW1iZXJzIiwicGFyc2VJbnQiLCJudW1iZXJzIiwicHJldiIsIk1hdGgiLCJtaW4iLCJtb2NrRW50cmllcyIsImlkIiwibmFtZSIsIm51bWJlciIsInRpbWVzdGFtcCIsIm5vdyIsInN0cmVhayIsImJhZGdlcyIsImdhbWVSYW5nZSIsIm1vY2tMZWFkZXJib2FyZCIsInRvdGFsV2lucyIsImZhc3Rlc3RHdWVzcyIsImljb24iLCJkZXNjcmlwdGlvbiIsImhhbmRsZVBheW1lbnRDb21wbGV0ZSIsInN1Y2Nlc3MiLCJzZXRJdGVtIiwibmV3RW50cnkiLCJ0b1N0cmluZyIsInNhdmVBbGxDdXN0b21OdW1iZXJzIiwibnVtYmVyc1RvU2F2ZSIsImlzTmFOIiwibmV3RGFpbHlOdW1iZXJzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJoYW5kbGVTdWJtaXRHdWVzcyIsIm51bWJlclZhbHVlIiwiZXJyb3IiLCJzZXRUaW1lb3V0IiwiZXhpc3RpbmdFbnRyeUluZGV4IiwiZmluZEluZGV4IiwiZW50cnkiLCJ1cGRhdGVkRW50cmllcyIsImFicyIsImluZm8iLCJoYW5kbGVSZXNldEd1ZXNzIiwiaGFuZGxlQ3VzdG9tQmFsbE51bWJlckNoYW5nZSIsInZhbHVlIiwidGVzdCIsIm51bVZhbHVlIiwibWF4IiwiaGFuZGxlVGltZXJDb21wbGV0ZSIsImluc3RydWN0aW9uU2VjdGlvbnMiLCJ0aXRsZSIsIlByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsYUFBYSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMs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