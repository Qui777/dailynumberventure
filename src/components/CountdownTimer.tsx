import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/CountdownTimer.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/CountdownTimer.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport1_react_jsxDevRuntime["Fragment"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useState = __vite__cjsImport2_react["useState"]; const useEffect = __vite__cjsImport2_react["useEffect"];
import { cn } from "/src/lib/utils.ts";
const CountdownTimer = ({ endTime, className, onComplete })=>{
    _s();
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isComplete, setIsComplete] = useState(false);
    useEffect(()=>{
        const calculateTimeLeft = ()=>{
            const difference = endTime.getTime() - new Date().getTime();
            if (difference <= 0) {
                setIsComplete(true);
                onComplete && onComplete();
                return {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
            }
            return {
                hours: Math.floor(difference / (1000 * 60 * 60)),
                minutes: Math.floor(difference / 1000 / 60 % 60),
                seconds: Math.floor(difference / 1000 % 60)
            };
        };
        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(()=>{
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return ()=>clearInterval(timer);
    }, [
        endTime,
        onComplete
    ]);
    // Format time with leading zeros
    const formatTime = (value)=>{
        return value.toString().padStart(2, '0');
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: cn("flex items-center justify-center gap-3", className),
        children: isComplete ? /*#__PURE__*/ _jsxDEV("div", {
            className: "text-center",
            children: /*#__PURE__*/ _jsxDEV("p", {
                className: "text-lg font-medium",
                children: "Time's up!"
            }, void 0, false, {
                fileName: "/dev-server/src/components/CountdownTimer.tsx",
                lineNumber: 63,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "/dev-server/src/components/CountdownTimer.tsx",
            lineNumber: 62,
            columnNumber: 9
        }, this) : /*#__PURE__*/ _jsxDEV(_Fragment, {
            children: [
                /*#__PURE__*/ _jsxDEV(TimeUnit, {
                    value: formatTime(timeLeft.hours),
                    label: "Hours"
                }, void 0, false, {
                    fileName: "/dev-server/src/components/CountdownTimer.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ _jsxDEV("span", {
                    className: "text-xl font-light text-foreground/50",
                    children: ":"
                }, void 0, false, {
                    fileName: "/dev-server/src/components/CountdownTimer.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ _jsxDEV(TimeUnit, {
                    value: formatTime(timeLeft.minutes),
                    label: "Minutes"
                }, void 0, false, {
                    fileName: "/dev-server/src/components/CountdownTimer.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ _jsxDEV("span", {
                    className: "text-xl font-light text-foreground/50",
                    children: ":"
                }, void 0, false, {
                    fileName: "/dev-server/src/components/CountdownTimer.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ _jsxDEV(TimeUnit, {
                    value: formatTime(timeLeft.seconds),
                    label: "Seconds"
                }, void 0, false, {
                    fileName: "/dev-server/src/components/CountdownTimer.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "/dev-server/src/components/CountdownTimer.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
};
_s(CountdownTimer, "edXQUCXj7ZoPQhr6d5daHsrHWCc=");
_c = CountdownTimer;
const TimeUnit = ({ value, label })=>{
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "w-16 h-16 flex items-center justify-center rounded-lg bg-white shadow-subtle mb-1",
                children: /*#__PURE__*/ _jsxDEV("span", {
                    className: "text-2xl font-semibold text-purple-600",
                    children: value
                }, void 0, false, {
                    fileName: "/dev-server/src/components/CountdownTimer.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/CountdownTimer.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("p", {
                className: "text-xs font-medium text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "/dev-server/src/components/CountdownTimer.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/CountdownTimer.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
};
_c1 = TimeUnit;
export default CountdownTimer;
var _c, _c1;
$RefreshReg$(_c, "CountdownTimer");
$RefreshReg$(_c1, "TimeUnit");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/CountdownTimer.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/CountdownTimer.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvdW50ZG93blRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XG5cbmludGVyZmFjZSBDb3VudGRvd25UaW1lclByb3BzIHtcbiAgZW5kVGltZTogRGF0ZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBvbkNvbXBsZXRlPzogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQ291bnRkb3duVGltZXI6IFJlYWN0LkZDPENvdW50ZG93blRpbWVyUHJvcHM+ID0gKHsgXG4gIGVuZFRpbWUsIFxuICBjbGFzc05hbWUsXG4gIG9uQ29tcGxldGVcbn0pID0+IHtcbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSh7XG4gICAgaG91cnM6IDAsXG4gICAgbWludXRlczogMCxcbiAgICBzZWNvbmRzOiAwXG4gIH0pO1xuICBcbiAgY29uc3QgW2lzQ29tcGxldGUsIHNldElzQ29tcGxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FsY3VsYXRlVGltZUxlZnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gZW5kVGltZS5nZXRUaW1lKCkgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIFxuICAgICAgaWYgKGRpZmZlcmVuY2UgPD0gMCkge1xuICAgICAgICBzZXRJc0NvbXBsZXRlKHRydWUpO1xuICAgICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyczogMCxcbiAgICAgICAgICBtaW51dGVzOiAwLFxuICAgICAgICAgIHNlY29uZHM6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaG91cnM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjApKSksXG4gICAgICAgIG1pbnV0ZXM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAxMDAwIC8gNjApICUgNjApLFxuICAgICAgICBzZWNvbmRzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCkgJSA2MClcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHNldFRpbWVMZWZ0KGNhbGN1bGF0ZVRpbWVMZWZ0KCkpO1xuICAgIFxuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VGltZUxlZnQoY2FsY3VsYXRlVGltZUxlZnQoKSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIH0sIFtlbmRUaW1lLCBvbkNvbXBsZXRlXSk7XG5cbiAgLy8gRm9ybWF0IHRpbWUgd2l0aCBsZWFkaW5nIHplcm9zXG4gIGNvbnN0IGZvcm1hdFRpbWUgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtM1wiLCBjbGFzc05hbWUpfT5cbiAgICAgIHtpc0NvbXBsZXRlID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlRpbWUncyB1cCE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8VGltZVVuaXQgdmFsdWU9e2Zvcm1hdFRpbWUodGltZUxlZnQuaG91cnMpfSBsYWJlbD1cIkhvdXJzXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbGlnaHQgdGV4dC1mb3JlZ3JvdW5kLzUwXCI+Ojwvc3Bhbj5cbiAgICAgICAgICA8VGltZVVuaXQgdmFsdWU9e2Zvcm1hdFRpbWUodGltZUxlZnQubWludXRlcyl9IGxhYmVsPVwiTWludXRlc1wiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWxpZ2h0IHRleHQtZm9yZWdyb3VuZC81MFwiPjo8L3NwYW4+XG4gICAgICAgICAgPFRpbWVVbml0IHZhbHVlPXtmb3JtYXRUaW1lKHRpbWVMZWZ0LnNlY29uZHMpfSBsYWJlbD1cIlNlY29uZHNcIiAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgVGltZVVuaXRQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmNvbnN0IFRpbWVVbml0OiBSZWFjdC5GQzxUaW1lVW5pdFByb3BzPiA9ICh7IHZhbHVlLCBsYWJlbCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBiZy13aGl0ZSBzaGFkb3ctc3VidGxlIG1iLTFcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXB1cnBsZS02MDBcIj57dmFsdWV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPntsYWJlbH08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY24iLCJDb3VudGRvd25UaW1lciIsImVuZFRpbWUiLCJjbGFzc05hbWUiLCJvbkNvbXBsZXRlIiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJpc0NvbXBsZXRlIiwic2V0SXNDb21wbGV0ZSIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiZGlmZmVyZW5jZSIsImdldFRpbWUiLCJEYXRlIiwiTWF0aCIsImZsb29yIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJmb3JtYXRUaW1lIiwidmFsdWUiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiZGl2IiwicCIsIlRpbWVVbml0IiwibGFiZWwiLCJzcGFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxTQUFTLFFBQVEsUUFBUTtBQUNuRCxTQUFTQyxFQUFFLFFBQVEsY0FBYztBQVFqQyxNQUFNQyxpQkFBZ0QsQ0FBQyxFQUNyREMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLFVBQVUsRUFDWDs7SUFDQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsU0FBUztRQUN2Q1MsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLFNBQVM7SUFDWDtJQUVBLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHYixTQUFTO0lBRTdDQyxVQUFVO1FBQ1IsTUFBTWEsb0JBQW9CO1lBQ3hCLE1BQU1DLGFBQWFYLFFBQVFZLE9BQU8sS0FBSyxJQUFJQyxPQUFPRCxPQUFPO1lBRXpELElBQUlELGNBQWMsR0FBRztnQkFDbkJGLGNBQWM7Z0JBQ2RQLGNBQWNBO2dCQUNkLE9BQU87b0JBQ0xHLE9BQU87b0JBQ1BDLFNBQVM7b0JBQ1RDLFNBQVM7Z0JBQ1g7WUFDRjtZQUVBLE9BQU87Z0JBQ0xGLE9BQU9TLEtBQUtDLEtBQUssQ0FBRUosYUFBYyxDQUFBLE9BQU8sS0FBSyxFQUFDO2dCQUM5Q0wsU0FBU1EsS0FBS0MsS0FBSyxDQUFDLEFBQUNKLGFBQWEsT0FBTyxLQUFNO2dCQUMvQ0osU0FBU08sS0FBS0MsS0FBSyxDQUFDLEFBQUNKLGFBQWEsT0FBUTtZQUM1QztRQUNGO1FBRUFQLFlBQVlNO1FBRVosTUFBTU0sUUFBUUMsWUFBWTtZQUN4QmIsWUFBWU07UUFDZCxHQUFHO1FBRUgsT0FBTyxJQUFNUSxjQUFjRjtJQUM3QixHQUFHO1FBQUNoQjtRQUFTRTtLQUFXO0lBRXhCLGlDQUFpQztJQUNqQyxNQUFNaUIsYUFBYSxDQUFDQztRQUNsQixPQUFPQSxNQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO0lBQ3RDO0lBRUEscUJBQ0UsUUFBQ0M7UUFBSXRCLFdBQVdILEdBQUcsMENBQTBDRztrQkFDMURPLDJCQUNDLFFBQUNlO1lBQUl0QixXQUFVO3NCQUNiLGNBQUEsUUFBQ3VCO2dCQUFFdkIsV0FBVTswQkFBc0I7Ozs7Ozs7Ozs7aUNBR3JDOzs4QkFDRSxRQUFDd0I7b0JBQVNMLE9BQU9ELFdBQVdoQixTQUFTRSxLQUFLO29CQUFHcUIsT0FBTTs7Ozs7OzhCQUNuRCxRQUFDQztvQkFBSzFCLFdBQVU7OEJBQXdDOzs7Ozs7OEJBQ3hELFFBQUN3QjtvQkFBU0wsT0FBT0QsV0FBV2hCLFNBQVNHLE9BQU87b0JBQUdvQixPQUFNOzs7Ozs7OEJBQ3JELFFBQUNDO29CQUFLMUIsV0FBVTs4QkFBd0M7Ozs7Ozs4QkFDeEQsUUFBQ3dCO29CQUFTTCxPQUFPRCxXQUFXaEIsU0FBU0ksT0FBTztvQkFBR21CLE9BQU07Ozs7Ozs7Ozs7Ozs7QUFLL0Q7R0FqRU0zQjtLQUFBQTtBQXdFTixNQUFNMEIsV0FBb0MsQ0FBQyxFQUFFTCxLQUFLLEVBQUVNLEtBQUssRUFBRTtJQUN6RCxxQkFDRSxRQUFDSDtRQUFJdEIsV0FBVTs7MEJBQ2IsUUFBQ3NCO2dCQUFJdEIsV0FBVTswQkFDYixjQUFBLFFBQUMwQjtvQkFBSzFCLFdBQVU7OEJBQTBDbUI7Ozs7Ozs7Ozs7OzBCQUU1RCxRQUFDSTtnQkFBRXZCLFdBQVU7MEJBQTZDeUI7Ozs7Ozs7Ozs7OztBQUdoRTtNQVRNRDtBQVdOLGVBQWUxQixlQUFlIn0=