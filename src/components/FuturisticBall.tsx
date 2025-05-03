import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/FuturisticBall.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/FuturisticBall.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useEffect = __vite__cjsImport2_react["useEffect"]; const useState = __vite__cjsImport2_react["useState"]; const useRef = __vite__cjsImport2_react["useRef"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=57c2cc69";
import { cn } from "/src/lib/utils.ts";
const FuturisticBall = ({ number, className, size = 'lg', revealed = false, customNumber, onNumberChange, interactive = false, showQuestionMark = false })=>{
    _s();
    const [isHovering, setIsHovering] = useState(false);
    const [randomDigits, setRandomDigits] = useState([]);
    const [inputValue, setInputValue] = useState(customNumber?.toString() || '');
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);
    // Size classes for the ball
    const sizeClasses = {
        sm: 'w-16 h-16 text-lg',
        md: 'w-24 h-24 text-xl',
        lg: 'w-36 h-36 text-3xl',
        xl: 'w-48 h-48 text-4xl'
    };
    // Generate random flickering digits effect
    useEffect(()=>{
        if (!revealed && !customNumber && !showQuestionMark) {
            const interval = setInterval(()=>{
                const newDigits = Array(3).fill(0).map(()=>Math.floor(Math.random() * 10));
                setRandomDigits(newDigits);
            }, 150);
            return ()=>clearInterval(interval);
        }
    }, [
        revealed,
        customNumber,
        showQuestionMark
    ]);
    useEffect(()=>{
        if (customNumber !== undefined) {
            setInputValue(customNumber.toString());
        }
    }, [
        customNumber
    ]);
    // Focus input when editing starts
    useEffect(()=>{
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [
        isEditing
    ]);
    // Format number properly
    const displayNumber = customNumber !== undefined ? customNumber.toString() : number !== undefined ? number.toString().padStart(3, '0') : '???';
    // Display text logic with question mark support
    let displayText;
    if (showQuestionMark) {
        displayText = '?';
    } else if (customNumber !== undefined) {
        displayText = displayNumber;
    } else if (revealed) {
        displayText = number !== undefined ? number.toString().padStart(3, '0') : '???';
    } else if (randomDigits.length > 0) {
        displayText = randomDigits.join('');
    } else {
        displayText = '???';
    }
    const handleInputChange = (e)=>{
        const value = e.target.value;
        setInputValue(value);
        onNumberChange && onNumberChange(value);
    };
    const handleBallClick = ()=>{
        if (interactive) {
            setIsEditing(true);
        }
    };
    const handleInputBlur = ()=>{
        setIsEditing(false);
    };
    const handleInputKeyDown = (e)=>{
        if (e.key === 'Enter') {
            setIsEditing(false);
        }
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: cn('relative flex items-center justify-center', className),
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: cn('absolute rounded-full blur-xl opacity-40 bg-primary', sizeClasses[size], isHovering ? 'animate-pulse' : '')
            }, void 0, false, {
                fileName: "/dev-server/src/components/FuturisticBall.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(motion.div, {
                className: cn('relative flex items-center justify-center rounded-full number-card', 'bg-gradient-to-br from-primary/80 to-secondary/90 text-white font-bold', 'shadow-lg border border-white/20 backdrop-blur-sm z-10', sizeClasses[size], interactive && !isEditing ? 'cursor-pointer' : ''),
                initial: {
                    scale: 0.9,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20
                },
                onMouseEnter: ()=>setIsHovering(true),
                onMouseLeave: ()=>setIsHovering(false),
                onClick: handleBallClick,
                whileHover: {
                    scale: 1.05,
                    rotate: [
                        0,
                        2,
                        0,
                        -2,
                        0
                    ],
                    transition: {
                        scale: {
                            duration: 0.2
                        },
                        rotate: {
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut"
                        }
                    }
                },
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "relative flex items-center justify-center w-[90%] h-[90%] rounded-full bg-black/20 overflow-hidden",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "absolute w-[200%] h-[200%] animate-spin-slow opacity-20",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "absolute top-0 left-0 w-full h-full border-2 border-white rounded-full transform scale-50"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/FuturisticBall.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "absolute top-0 left-0 w-full h-full border-2 border-white rounded-full transform scale-75 rotate-45"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/FuturisticBall.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/dev-server/src/components/FuturisticBall.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        interactive && isEditing ? /*#__PURE__*/ _jsxDEV("input", {
                            ref: inputRef,
                            type: "text",
                            value: inputValue,
                            onChange: handleInputChange,
                            onBlur: handleInputBlur,
                            onKeyDown: handleInputKeyDown,
                            className: "w-3/4 bg-transparent text-center font-mono text-white focus:outline-none",
                            maxLength: 4
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/FuturisticBall.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ _jsxDEV(motion.div, {
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                type: 'spring',
                                stiffness: 500,
                                damping: 30
                            },
                            className: cn("font-mono tracking-wider", showQuestionMark && "text-5xl font-bold"),
                            children: displayText
                        }, displayText, false, {
                            fileName: "/dev-server/src/components/FuturisticBall.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/FuturisticBall.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/FuturisticBall.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(motion.div, {
                className: "absolute w-4 h-4 bg-primary/70 rounded-full -top-2 -right-1",
                animate: {
                    y: [
                        0,
                        -10,
                        0
                    ],
                    opacity: [
                        0.7,
                        1,
                        0.7
                    ]
                },
                transition: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "/dev-server/src/components/FuturisticBall.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(motion.div, {
                className: "absolute w-2 h-2 bg-white/70 rounded-full bottom-2 -left-1",
                animate: {
                    y: [
                        0,
                        8,
                        0
                    ],
                    opacity: [
                        0.5,
                        0.8,
                        0.5
                    ]
                },
                transition: {
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: 0.5
                }
            }, void 0, false, {
                fileName: "/dev-server/src/components/FuturisticBall.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/FuturisticBall.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
};
_s(FuturisticBall, "znth3r6BsbGs+ZB1Xkzz6i8Wg0Q=");
_c = FuturisticBall;
export default FuturisticBall;
var _c;
$RefreshReg$(_c, "FuturisticBall");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/FuturisticBall.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/FuturisticBall.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZ1dHVyaXN0aWNCYWxsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJztcblxuaW50ZXJmYWNlIEZ1dHVyaXN0aWNCYWxsUHJvcHMge1xuICBudW1iZXI/OiBudW1iZXI7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCc7XG4gIHJldmVhbGVkPzogYm9vbGVhbjtcbiAgY3VzdG9tTnVtYmVyPzogc3RyaW5nIHwgbnVtYmVyO1xuICBvbk51bWJlckNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBpbnRlcmFjdGl2ZT86IGJvb2xlYW47XG4gIHNob3dRdWVzdGlvbk1hcms/OiBib29sZWFuO1xufVxuXG5jb25zdCBGdXR1cmlzdGljQmFsbDogUmVhY3QuRkM8RnV0dXJpc3RpY0JhbGxQcm9wcz4gPSAoe1xuICBudW1iZXIsXG4gIGNsYXNzTmFtZSxcbiAgc2l6ZSA9ICdsZycsXG4gIHJldmVhbGVkID0gZmFsc2UsXG4gIGN1c3RvbU51bWJlcixcbiAgb25OdW1iZXJDaGFuZ2UsXG4gIGludGVyYWN0aXZlID0gZmFsc2UsXG4gIHNob3dRdWVzdGlvbk1hcmsgPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3QgW2lzSG92ZXJpbmcsIHNldElzSG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmFuZG9tRGlnaXRzLCBzZXRSYW5kb21EaWdpdHNdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihjdXN0b21OdW1iZXI/LnRvU3RyaW5nKCkgfHwgJycpO1xuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgXG4gIC8vIFNpemUgY2xhc3NlcyBmb3IgdGhlIGJhbGxcbiAgY29uc3Qgc2l6ZUNsYXNzZXMgPSB7XG4gICAgc206ICd3LTE2IGgtMTYgdGV4dC1sZycsXG4gICAgbWQ6ICd3LTI0IGgtMjQgdGV4dC14bCcsXG4gICAgbGc6ICd3LTM2IGgtMzYgdGV4dC0zeGwnLFxuICAgIHhsOiAndy00OCBoLTQ4IHRleHQtNHhsJyxcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSByYW5kb20gZmxpY2tlcmluZyBkaWdpdHMgZWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyZXZlYWxlZCAmJiAhY3VzdG9tTnVtYmVyICYmICFzaG93UXVlc3Rpb25NYXJrKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGlnaXRzID0gQXJyYXkoMykuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICAgICAgc2V0UmFuZG9tRGlnaXRzKG5ld0RpZ2l0cyk7XG4gICAgICB9LCAxNTApO1xuICAgICAgXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9LCBbcmV2ZWFsZWQsIGN1c3RvbU51bWJlciwgc2hvd1F1ZXN0aW9uTWFya10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1c3RvbU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRJbnB1dFZhbHVlKGN1c3RvbU51bWJlci50b1N0cmluZygpKTtcbiAgICB9XG4gIH0sIFtjdXN0b21OdW1iZXJdKTtcblxuICAvLyBGb2N1cyBpbnB1dCB3aGVuIGVkaXRpbmcgc3RhcnRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzRWRpdGluZyAmJiBpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbaXNFZGl0aW5nXSk7XG5cbiAgLy8gRm9ybWF0IG51bWJlciBwcm9wZXJseVxuICBjb25zdCBkaXNwbGF5TnVtYmVyID0gY3VzdG9tTnVtYmVyICE9PSB1bmRlZmluZWQgXG4gICAgPyBjdXN0b21OdW1iZXIudG9TdHJpbmcoKSBcbiAgICA6IG51bWJlciAhPT0gdW5kZWZpbmVkIFxuICAgICAgPyBudW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpIFxuICAgICAgOiAnPz8/JztcbiAgXG4gIC8vIERpc3BsYXkgdGV4dCBsb2dpYyB3aXRoIHF1ZXN0aW9uIG1hcmsgc3VwcG9ydFxuICBsZXQgZGlzcGxheVRleHQ7XG4gIFxuICBpZiAoc2hvd1F1ZXN0aW9uTWFyaykge1xuICAgIGRpc3BsYXlUZXh0ID0gJz8nO1xuICB9IGVsc2UgaWYgKGN1c3RvbU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGlzcGxheVRleHQgPSBkaXNwbGF5TnVtYmVyO1xuICB9IGVsc2UgaWYgKHJldmVhbGVkKSB7XG4gICAgZGlzcGxheVRleHQgPSAobnVtYmVyICE9PSB1bmRlZmluZWQgPyBudW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpIDogJz8/PycpO1xuICB9IGVsc2UgaWYgKHJhbmRvbURpZ2l0cy5sZW5ndGggPiAwKSB7XG4gICAgZGlzcGxheVRleHQgPSByYW5kb21EaWdpdHMuam9pbignJyk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheVRleHQgPSAnPz8/JztcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICBvbk51bWJlckNoYW5nZSAmJiBvbk51bWJlckNoYW5nZSh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFsbENsaWNrID0gKCkgPT4ge1xuICAgIGlmIChpbnRlcmFjdGl2ZSkge1xuICAgICAgc2V0SXNFZGl0aW5nKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dEJsdXIgPSAoKSA9PiB7XG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dEtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oJ3JlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJywgY2xhc3NOYW1lKX0+XG4gICAgICB7LyogT3V0ZXIgZ2xvdyBlZmZlY3QgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXG4gICAgICAgICdhYnNvbHV0ZSByb3VuZGVkLWZ1bGwgYmx1ci14bCBvcGFjaXR5LTQwIGJnLXByaW1hcnknLFxuICAgICAgICBzaXplQ2xhc3Nlc1tzaXplXSxcbiAgICAgICAgaXNIb3ZlcmluZyA/ICdhbmltYXRlLXB1bHNlJyA6ICcnXG4gICAgICApfSAvPlxuICAgICAgXG4gICAgICB7LyogTWFpbiBiYWxsICovfVxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAncmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIG51bWJlci1jYXJkJyxcbiAgICAgICAgICAnYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wcmltYXJ5LzgwIHRvLXNlY29uZGFyeS85MCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCcsXG4gICAgICAgICAgJ3NoYWRvdy1sZyBib3JkZXIgYm9yZGVyLXdoaXRlLzIwIGJhY2tkcm9wLWJsdXItc20gei0xMCcsXG4gICAgICAgICAgc2l6ZUNsYXNzZXNbc2l6ZV0sXG4gICAgICAgICAgaW50ZXJhY3RpdmUgJiYgIWlzRWRpdGluZyA/ICdjdXJzb3ItcG9pbnRlcicgOiAnJ1xuICAgICAgICApfVxuICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwLjksIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSwgb3BhY2l0eTogMSB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IFxuICAgICAgICAgIHR5cGU6ICdzcHJpbmcnLCBcbiAgICAgICAgICBzdGlmZm5lc3M6IDI2MCwgXG4gICAgICAgICAgZGFtcGluZzogMjAgXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmluZyh0cnVlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyaW5nKGZhbHNlKX1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQmFsbENsaWNrfVxuICAgICAgICB3aGlsZUhvdmVyPXt7IFxuICAgICAgICAgIHNjYWxlOiAxLjA1LFxuICAgICAgICAgIHJvdGF0ZTogWzAsIDIsIDAsIC0yLCAwXSxcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7IFxuICAgICAgICAgICAgc2NhbGU6IHsgZHVyYXRpb246IDAuMiB9LFxuICAgICAgICAgICAgcm90YXRlOiB7IHJlcGVhdDogSW5maW5pdHksIGR1cmF0aW9uOiAxLjUsIGVhc2U6IFwiZWFzZUluT3V0XCIgfVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgey8qIElubmVyIGNpcmNsZSB3aXRoIG51bWJlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LVs5MCVdIGgtWzkwJV0gcm91bmRlZC1mdWxsIGJnLWJsYWNrLzIwIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIHsvKiBBbmltYXRlZCByaW5ncyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctWzIwMCVdIGgtWzIwMCVdIGFuaW1hdGUtc3Bpbi1zbG93IG9wYWNpdHktMjBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHJvdW5kZWQtZnVsbCB0cmFuc2Zvcm0gc2NhbGUtNTBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHJvdW5kZWQtZnVsbCB0cmFuc2Zvcm0gc2NhbGUtNzUgcm90YXRlLTQ1XCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIE51bWJlciBkaXNwbGF5IG9yIGlucHV0ICovfVxuICAgICAgICAgIHtpbnRlcmFjdGl2ZSAmJiBpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVJbnB1dEtleURvd259XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMy80IGJnLXRyYW5zcGFyZW50IHRleHQtY2VudGVyIGZvbnQtbW9ubyB0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17NH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICBrZXk9e2Rpc3BsYXlUZXh0fVxuICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IDIwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6ICdzcHJpbmcnLCBzdGlmZm5lc3M6IDUwMCwgZGFtcGluZzogMzAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICBcImZvbnQtbW9ubyB0cmFja2luZy13aWRlclwiLFxuICAgICAgICAgICAgICAgIHNob3dRdWVzdGlvbk1hcmsgJiYgXCJ0ZXh0LTV4bCBmb250LWJvbGRcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGlzcGxheVRleHR9XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICBcbiAgICAgIHsvKiBEZWNvcmF0aXZlIGZsb2F0aW5nIGNpcmNsZXMgKi99XG4gICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy00IGgtNCBiZy1wcmltYXJ5LzcwIHJvdW5kZWQtZnVsbCAtdG9wLTIgLXJpZ2h0LTFcIlxuICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgeTogWzAsIC0xMCwgMF0sXG4gICAgICAgICAgb3BhY2l0eTogWzAuNywgMSwgMC43XVxuICAgICAgICB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICBkdXJhdGlvbjogMyxcbiAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctMiBoLTIgYmctd2hpdGUvNzAgcm91bmRlZC1mdWxsIGJvdHRvbS0yIC1sZWZ0LTFcIlxuICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgeTogWzAsIDgsIDBdLFxuICAgICAgICAgIG9wYWNpdHk6IFswLjUsIDAuOCwgMC41XVxuICAgICAgICB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICBkdXJhdGlvbjogMi41LFxuICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgZGVsYXk6IDAuNVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZ1dHVyaXN0aWNCYWxsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJtb3Rpb24iLCJjbiIsIkZ1dHVyaXN0aWNCYWxsIiwibnVtYmVyIiwiY2xhc3NOYW1lIiwic2l6ZSIsInJldmVhbGVkIiwiY3VzdG9tTnVtYmVyIiwib25OdW1iZXJDaGFuZ2UiLCJpbnRlcmFjdGl2ZSIsInNob3dRdWVzdGlvbk1hcmsiLCJpc0hvdmVyaW5nIiwic2V0SXNIb3ZlcmluZyIsInJhbmRvbURpZ2l0cyIsInNldFJhbmRvbURpZ2l0cyIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwidG9TdHJpbmciLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJpbnB1dFJlZiIsInNpemVDbGFzc2VzIiwic20iLCJtZCIsImxnIiwieGwiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibmV3RGlnaXRzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2xlYXJJbnRlcnZhbCIsInVuZGVmaW5lZCIsImN1cnJlbnQiLCJmb2N1cyIsImRpc3BsYXlOdW1iZXIiLCJwYWRTdGFydCIsImRpc3BsYXlUZXh0IiwibGVuZ3RoIiwiam9pbiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlQmFsbENsaWNrIiwiaGFuZGxlSW5wdXRCbHVyIiwiaGFuZGxlSW5wdXRLZXlEb3duIiwia2V5IiwiZGl2IiwiaW5pdGlhbCIsInNjYWxlIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIiwid2hpbGVIb3ZlciIsInJvdGF0ZSIsImR1cmF0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJlYXNlIiwiaW5wdXQiLCJyZWYiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uS2V5RG93biIsIm1heExlbmd0aCIsInkiLCJkZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLFFBQVEsUUFBUTtBQUMzRCxTQUFTQyxNQUFNLFFBQVEsZ0JBQWdCO0FBQ3ZDLFNBQVNDLEVBQUUsUUFBUSxjQUFjO0FBYWpDLE1BQU1DLGlCQUFnRCxDQUFDLEVBQ3JEQyxNQUFNLEVBQ05DLFNBQVMsRUFDVEMsT0FBTyxJQUFJLEVBQ1hDLFdBQVcsS0FBSyxFQUNoQkMsWUFBWSxFQUNaQyxjQUFjLEVBQ2RDLGNBQWMsS0FBSyxFQUNuQkMsbUJBQW1CLEtBQUssRUFDekI7O0lBQ0MsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdkLFNBQVM7SUFDN0MsTUFBTSxDQUFDZSxjQUFjQyxnQkFBZ0IsR0FBR2hCLFNBQW1CLEVBQUU7SUFDN0QsTUFBTSxDQUFDaUIsWUFBWUMsY0FBYyxHQUFHbEIsU0FBaUJT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