import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/NumberInput.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/NumberInput.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useState = __vite__cjsImport2_react["useState"]; const useRef = __vite__cjsImport2_react["useRef"]; const useEffect = __vite__cjsImport2_react["useEffect"];
import { Button } from "/src/components/ui/button.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { cn } from "/src/lib/utils.ts";
import { ChevronUp, ChevronDown } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
const NumberInput = ({ value, onChange, min = 1, max = 1000, step = 1, className, disabled = false })=>{
    _s();
    const [localValue, setLocalValue] = useState(value.toString());
    const [animating, setAnimating] = useState(false);
    const inputRef = useRef(null);
    useEffect(()=>{
        setLocalValue(value.toString());
    }, [
        value
    ]);
    const handleInputChange = (e)=>{
        const newValue = e.target.value;
        // Allow empty input for typing convenience
        if (newValue === '') {
            setLocalValue('');
            return;
        }
        // Only allow numeric input
        if (!/^\d*$/.test(newValue)) {
            return;
        }
        setLocalValue(newValue);
        const numValue = parseInt(newValue, 10);
        if (!isNaN(numValue)) {
            const clampedValue = Math.min(Math.max(numValue, min), max);
            if (numValue !== clampedValue) {
                setLocalValue(clampedValue.toString());
            }
            onChange(clampedValue);
        }
    };
    const handleBlur = ()=>{
        const numValue = parseInt(localValue, 10);
        if (isNaN(numValue) || localValue === '') {
            const defaultValue = min;
            setLocalValue(defaultValue.toString());
            onChange(defaultValue);
        } else {
            const clampedValue = Math.min(Math.max(numValue, min), max);
            setLocalValue(clampedValue.toString());
            onChange(clampedValue);
        }
    };
    const incrementValue = ()=>{
        if (disabled) return;
        setAnimating(true);
        setTimeout(()=>setAnimating(false), 300);
        const currentValue = parseInt(localValue, 10) || min;
        const newValue = Math.min(currentValue + step, max);
        setLocalValue(newValue.toString());
        onChange(newValue);
    };
    const decrementValue = ()=>{
        if (disabled) return;
        setAnimating(true);
        setTimeout(()=>setAnimating(false), 300);
        const currentValue = parseInt(localValue, 10) || min;
        const newValue = Math.max(currentValue - step, min);
        setLocalValue(newValue.toString());
        onChange(newValue);
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: cn("flex flex-col items-center", className),
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: cn("relative flex items-center", animating && "animate-scale-in"),
                children: [
                    /*#__PURE__*/ _jsxDEV(Button, {
                        variant: "outline",
                        size: "icon",
                        onClick: decrementValue,
                        disabled: disabled || value <= min,
                        className: "rounded-l-lg rounded-r-none border-r-0 h-14 w-14 shadow-subtle",
                        children: /*#__PURE__*/ _jsxDEV(ChevronDown, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/NumberInput.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/NumberInput.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV(Input, {
                        ref: inputRef,
                        type: "text",
                        inputMode: "numeric",
                        value: localValue,
                        onChange: handleInputChange,
                        onBlur: handleBlur,
                        disabled: disabled,
                        className: "h-14 text-center text-xl font-medium border-x-0 rounded-none shadow-none focus-visible:ring-0 w-28"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/NumberInput.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV(Button, {
                        variant: "outline",
                        size: "icon",
                        onClick: incrementValue,
                        disabled: disabled || value >= max,
                        className: "rounded-r-lg rounded-l-none border-l-0 h-14 w-14 shadow-subtle",
                        children: /*#__PURE__*/ _jsxDEV(ChevronUp, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/NumberInput.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/NumberInput.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/NumberInput.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "w-full mt-2 flex justify-between px-1 text-xs text-muted-foreground",
                children: [
                    /*#__PURE__*/ _jsxDEV("span", {
                        children: [
                            "Min: ",
                            min
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/NumberInput.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("span", {
                        children: [
                            "Max: ",
                            max
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/NumberInput.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/NumberInput.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/NumberInput.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
};
_s(NumberInput, "TpgJccFyLABw7tpPbN+7C8zbIUk=");
_c = NumberInput;
export default NumberInput;
var _c;
$RefreshReg$(_c, "NumberInput");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/NumberInput.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/NumberInput.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk51bWJlcklucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2lucHV0JztcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuaW1wb3J0IHsgQ2hldnJvblVwLCBDaGV2cm9uRG93biB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBOdW1iZXJJbnB1dFByb3BzIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbiAgc3RlcD86IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IE51bWJlcklucHV0OiBSZWFjdC5GQzxOdW1iZXJJbnB1dFByb3BzPiA9ICh7XG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgbWluID0gMSxcbiAgbWF4ID0gMTAwMCxcbiAgc3RlcCA9IDEsXG4gIGNsYXNzTmFtZSxcbiAgZGlzYWJsZWQgPSBmYWxzZVxufSkgPT4ge1xuICBjb25zdCBbbG9jYWxWYWx1ZSwgc2V0TG9jYWxWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZS50b1N0cmluZygpKTtcbiAgY29uc3QgW2FuaW1hdGluZywgc2V0QW5pbWF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2NhbFZhbHVlKHZhbHVlLnRvU3RyaW5nKCkpO1xuICB9LCBbdmFsdWVdKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgXG4gICAgLy8gQWxsb3cgZW1wdHkgaW5wdXQgZm9yIHR5cGluZyBjb252ZW5pZW5jZVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gJycpIHtcbiAgICAgIHNldExvY2FsVmFsdWUoJycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBPbmx5IGFsbG93IG51bWVyaWMgaW5wdXRcbiAgICBpZiAoIS9eXFxkKiQvLnRlc3QobmV3VmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHNldExvY2FsVmFsdWUobmV3VmFsdWUpO1xuICAgIFxuICAgIGNvbnN0IG51bVZhbHVlID0gcGFyc2VJbnQobmV3VmFsdWUsIDEwKTtcbiAgICBpZiAoIWlzTmFOKG51bVZhbHVlKSkge1xuICAgICAgY29uc3QgY2xhbXBlZFZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgobnVtVmFsdWUsIG1pbiksIG1heCk7XG4gICAgICBpZiAobnVtVmFsdWUgIT09IGNsYW1wZWRWYWx1ZSkge1xuICAgICAgICBzZXRMb2NhbFZhbHVlKGNsYW1wZWRWYWx1ZS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICAgIG9uQ2hhbmdlKGNsYW1wZWRWYWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbnVtVmFsdWUgPSBwYXJzZUludChsb2NhbFZhbHVlLCAxMCk7XG4gICAgaWYgKGlzTmFOKG51bVZhbHVlKSB8fCBsb2NhbFZhbHVlID09PSAnJykge1xuICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gbWluO1xuICAgICAgc2V0TG9jYWxWYWx1ZShkZWZhdWx0VmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICBvbkNoYW5nZShkZWZhdWx0VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjbGFtcGVkVmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heChudW1WYWx1ZSwgbWluKSwgbWF4KTtcbiAgICAgIHNldExvY2FsVmFsdWUoY2xhbXBlZFZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgb25DaGFuZ2UoY2xhbXBlZFZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW5jcmVtZW50VmFsdWUgPSAoKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG4gICAgXG4gICAgc2V0QW5pbWF0aW5nKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QW5pbWF0aW5nKGZhbHNlKSwgMzAwKTtcbiAgICBcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBwYXJzZUludChsb2NhbFZhbHVlLCAxMCkgfHwgbWluO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gTWF0aC5taW4oY3VycmVudFZhbHVlICsgc3RlcCwgbWF4KTtcbiAgICBzZXRMb2NhbFZhbHVlKG5ld1ZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBkZWNyZW1lbnRWYWx1ZSA9ICgpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICBcbiAgICBzZXRBbmltYXRpbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRBbmltYXRpbmcoZmFsc2UpLCAzMDApO1xuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KGxvY2FsVmFsdWUsIDEwKSB8fCBtaW47XG4gICAgY29uc3QgbmV3VmFsdWUgPSBNYXRoLm1heChjdXJyZW50VmFsdWUgLSBzdGVwLCBtaW4pO1xuICAgIHNldExvY2FsVmFsdWUobmV3VmFsdWUudG9TdHJpbmcoKSk7XG4gICAgb25DaGFuZ2UobmV3VmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiwgY2xhc3NOYW1lKX0+XG4gICAgICA8ZGl2IFxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICBhbmltYXRpbmcgJiYgXCJhbmltYXRlLXNjYWxlLWluXCJcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgb25DbGljaz17ZGVjcmVtZW50VmFsdWV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IHZhbHVlIDw9IG1pbn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWwtbGcgcm91bmRlZC1yLW5vbmUgYm9yZGVyLXItMCBoLTE0IHctMTQgc2hhZG93LXN1YnRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICBcbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaW5wdXRNb2RlPVwibnVtZXJpY1wiXG4gICAgICAgICAgdmFsdWU9e2xvY2FsVmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNCB0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtbWVkaXVtIGJvcmRlci14LTAgcm91bmRlZC1ub25lIHNoYWRvdy1ub25lIGZvY3VzLXZpc2libGU6cmluZy0wIHctMjhcIlxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgb25DbGljaz17aW5jcmVtZW50VmFsdWV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IHZhbHVlID49IG1heH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXItbGcgcm91bmRlZC1sLW5vbmUgYm9yZGVyLWwtMCBoLTE0IHctMTQgc2hhZG93LXN1YnRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Q2hldnJvblVwIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC0yIGZsZXgganVzdGlmeS1iZXR3ZWVuIHB4LTEgdGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgPHNwYW4+TWluOiB7bWlufTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+TWF4OiB7bWF4fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5wdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIklucHV0IiwiY24iLCJDaGV2cm9uVXAiLCJDaGV2cm9uRG93biIsIk51bWJlcklucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsIm1pbiIsIm1heCIsInN0ZXAiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwidG9TdHJpbmciLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJpbnB1dFJlZiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5ld1ZhbHVlIiwidGFyZ2V0IiwidGVzdCIsIm51bVZhbHVlIiwicGFyc2VJbnQiLCJpc05hTiIsImNsYW1wZWRWYWx1ZSIsIk1hdGgiLCJoYW5kbGVCbHVyIiwiZGVmYXVsdFZhbHVlIiwiaW5jcmVtZW50VmFsdWUiLCJzZXRUaW1lb3V0IiwiY3VycmVudFZhbHVlIiwiZGVjcmVtZW50VmFsdWUiLCJkaXYiLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siLCJyZWYiLCJ0eXBlIiwiaW5wdXRNb2RlIiwib25CbHVyIiwic3BhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLE9BQU9BLFNBQVNDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxTQUFTLFFBQVEsUUFBUTtBQUMzRCxTQUFTQyxNQUFNLFFBQVEseUJBQXlCO0FBQ2hELFNBQVNDLEtBQUssUUFBUSx3QkFBd0I7QUFDOUMsU0FBU0MsRUFBRSxRQUFRLGNBQWM7QUFDakMsU0FBU0MsU0FBUyxFQUFFQyxXQUFXLFFBQVEsZUFBZTtBQVl0RCxNQUFNQyxjQUEwQyxDQUFDLEVBQy9DQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsTUFBTSxDQUFDLEVBQ1BDLE1BQU0sSUFBSSxFQUNWQyxPQUFPLENBQUMsRUFDUkMsU0FBUyxFQUNUQyxXQUFXLEtBQUssRUFDakI7O0lBQ0MsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdqQixTQUFTUyxNQUFNUyxRQUFRO0lBQzNELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHcEIsU0FBUztJQUMzQyxNQUFNcUIsV0FBV3BCLE9BQXlCO0lBRTFDQyxVQUFVO1FBQ1JlLGNBQWNSLE1BQU1TLFFBQVE7SUFDOUIsR0FBRztRQUFDVDtLQUFNO0lBRVYsTUFBTWEsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU1DLFdBQVdELEVBQUVFLE1BQU0sQ0FBQ2hCLEtBQUs7UUFFL0IsMkNBQTJDO1FBQzNDLElBQUllLGFBQWEsSUFBSTtZQUNuQlAsY0FBYztZQUNkO1FBQ0Y7UUFFQSwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLFFBQVFTLElBQUksQ0FBQ0YsV0FBVztZQUMzQjtRQUNGO1FBRUFQLGNBQWNPO1FBRWQsTUFBTUcsV0FBV0MsU0FBU0osVUFBVTtRQUNwQyxJQUFJLENBQUNLLE1BQU1GLFdBQVc7WUFDcEIsTUFBTUcsZUFBZUMsS0FBS3BCLEdBQUcsQ0FBQ29CLEtBQUtuQixHQUFHLENBQUNlLFVBQVVoQixNQUFNQztZQUN2RCxJQUFJZSxhQUFhRyxjQUFjO2dCQUM3QmIsY0FBY2EsYUFBYVosUUFBUTtZQUNyQztZQUNBUixTQUFTb0I7UUFDWDtJQUNGO0lBRUEsTUFBTUUsYUFBYTtRQUNqQixNQUFNTCxXQUFXQyxTQUFTWixZQUFZO1FBQ3RDLElBQUlhLE1BQU1GLGFBQWFYLGVBQWUsSUFBSTtZQUN4QyxNQUFNaUIsZUFBZXRCO1lBQ3JCTSxjQUFjZ0IsYUFBYWYsUUFBUTtZQUNuQ1IsU0FBU3VCO1FBQ1gsT0FBTztZQUNMLE1BQU1ILGVBQWVDLEtBQUtwQixHQUFHLENBQUNvQixLQUFLbkIsR0FBRyxDQUFDZSxVQUFVaEIsTUFBTUM7WUFDdkRLLGNBQWNhLGFBQWFaLFFBQVE7WUFDbkNSLFNBQVNvQjtRQUNYO0lBQ0Y7SUFFQSxNQUFNSSxpQkFBaUI7UUFDckIsSUFBSW5CLFVBQVU7UUFFZEssYUFBYTtRQUNiZSxXQUFXLElBQU1mLGFBQWEsUUFBUTtRQUV0QyxNQUFNZ0IsZUFBZVIsU0FBU1osWUFBWSxPQUFPTDtRQUNqRCxNQUFNYSxXQUFXTyxLQUFLcEIsR0FBRyxDQUFDeUIsZUFBZXZCLE1BQU1EO1FBQy9DSyxjQUFjTyxTQUFTTixRQUFRO1FBQy9CUixTQUFTYztJQUNYO0lBRUEsTUFBTWEsaUJBQWlCO1FBQ3JCLElBQUl0QixVQUFVO1FBRWRLLGFBQWE7UUFDYmUsV0FBVyxJQUFNZixhQUFhLFFBQVE7UUFFdEMsTUFBTWdCLGVBQWVSLFNBQVNaLFlBQVksT0FBT0w7UUFDakQsTUFBTWEsV0FBV08sS0FBS25CLEdBQUcsQ0FBQ3dCLGVBQWV2QixNQUFNRjtRQUMvQ00sY0FBY08sU0FBU04sUUFBUTtRQUMvQlIsU0FBU2M7SUFDWDtJQUVBLHFCQUNFLFFBQUNjO1FBQUl4QixXQUFXVCxHQUFHLDhCQUE4QlM7OzBCQUMvQyxRQUFDd0I7Z0JBQ0N4QixXQUFXVCxHQUNULDhCQUNBYyxhQUFhOztrQ0FHZixRQUFDaEI7d0JBQ0NvQyxTQUFRO3dCQUNSQyxNQUFLO3dCQUNMQyxTQUFTSjt3QkFDVHRCLFVBQVVBLFlBQVlOLFNBQVNFO3dCQUMvQkcsV0FBVTtrQ0FFVixjQUFBLFFBQUNQOzRCQUFZTyxXQUFVOzs7Ozs7Ozs7OztrQ0FHekIsUUFBQ1Y7d0JBQ0NzQyxLQUFLckI7d0JBQ0xzQixNQUFLO3dCQUNMQyxXQUFVO3dCQUNWbkMsT0FBT087d0JBQ1BOLFVBQVVZO3dCQUNWdUIsUUFBUWI7d0JBQ1JqQixVQUFVQTt3QkFDVkQsV0FBVTs7Ozs7O2tDQUdaLFFBQUNYO3dCQUNDb0MsU0FBUTt3QkFDUkMsTUFBSzt3QkFDTEMsU0FBU1A7d0JBQ1RuQixVQUFVQSxZQUFZTixTQUFTRzt3QkFDL0JFLFdBQVU7a0NBRVYsY0FBQSxRQUFDUjs0QkFBVVEsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXpCLFFBQUN3QjtnQkFBSXhCLFdBQVU7O2tDQUNiLFFBQUNnQzs7NEJBQUs7NEJBQU1uQzs7Ozs7OztrQ0FDWixRQUFDbUM7OzRCQUFLOzRCQUFNbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEI7R0E5SE1KO0tBQUFBO0FBZ0lOLGVBQWVBLFlBQVkifQ==