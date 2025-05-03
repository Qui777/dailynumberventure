import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/game/DailyNumberHistory.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/game/DailyNumberHistory.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { ListChecks, CalendarDays } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
import { format } from "/node_modules/.vite/deps/date-fns.js?v=57c2cc69";
const DailyNumberHistory = ({ pastNumbers, todayNumber, isTimeUp })=>{
    // Ensure all dates are using 2025 as the year
    const currentYear = 2025;
    // Combine today's number with past numbers if time is up
    const allNumbers = isTimeUp && todayNumber ? [
        {
            date: new Date(),
            number: todayNumber
        },
        ...pastNumbers.map((entry)=>{
            // Create a new date with 2025 as the year but keep month and day
            const date = new Date(entry.date);
            date.setFullYear(currentYear);
            return {
                ...entry,
                date
            };
        })
    ] : pastNumbers.map((entry)=>{
        // Create a new date with 2025 as the year but keep month and day
        const date = new Date(entry.date);
        date.setFullYear(currentYear);
        return {
            ...entry,
            date
        };
    });
    return /*#__PURE__*/ _jsxDEV(Card, {
        className: "glass-card mt-8",
        children: [
            /*#__PURE__*/ _jsxDEV(CardHeader, {
                className: "pb-3",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ _jsxDEV(CardTitle, {
                                className: "text-lg font-medium",
                                children: "Daily Number History"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary",
                                children: /*#__PURE__*/ _jsxDEV(ListChecks, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV(CardDescription, {
                        children: "Record of previous daily numbers"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(CardContent, {
                children: allNumbers.length === 0 ? /*#__PURE__*/ _jsxDEV("p", {
                    className: "text-center text-muted-foreground py-4",
                    children: "No previous numbers to display yet."
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ _jsxDEV("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                    children: allNumbers.map((entry, index)=>/*#__PURE__*/ _jsxDEV("div", {
                            className: `p-3 rounded-lg border ${index === 0 && isTimeUp && todayNumber ? 'bg-primary/10 border-primary/20' : 'bg-card/50 border-border/50'}`,
                            children: /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "mr-3 p-2 bg-white rounded-full",
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            className: "h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold",
                                            children: entry.number
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                                            lineNumber: 70,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-sm font-medium",
                                                children: index === 0 && isTimeUp && todayNumber ? "Today's Number" : `Number on ${format(entry.date, 'MMM dd')}`
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                                                lineNumber: 75,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex items-center text-xs text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(CalendarDays, {
                                                        className: "h-3 w-3 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 23
                                                    }, this),
                                                    format(entry.date, 'EEEE, MMMM dd, yyyy')
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                                                lineNumber: 78,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                                lineNumber: 68,
                                columnNumber: 17
                            }, this)
                        }, index, false, {
                            fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                            lineNumber: 64,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/game/DailyNumberHistory.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
_c = DailyNumberHistory;
export default DailyNumberHistory;
var _c;
$RefreshReg$(_c, "DailyNumberHistory");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/game/DailyNumberHistory.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/game/DailyNumberHistory.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRhaWx5TnVtYmVySGlzdG9yeS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkRGVzY3JpcHRpb24sIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9jYXJkJztcbmltcG9ydCB7IExpc3RDaGVja3MsIENhbGVuZGFyRGF5cyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmludGVyZmFjZSBEYWlseU51bWJlckVudHJ5IHtcbiAgZGF0ZTogRGF0ZTtcbiAgbnVtYmVyOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBEYWlseU51bWJlckhpc3RvcnlQcm9wcyB7XG4gIHBhc3ROdW1iZXJzOiBEYWlseU51bWJlckVudHJ5W107XG4gIHRvZGF5TnVtYmVyPzogbnVtYmVyO1xuICBpc1RpbWVVcDogYm9vbGVhbjtcbn1cblxuY29uc3QgRGFpbHlOdW1iZXJIaXN0b3J5OiBSZWFjdC5GQzxEYWlseU51bWJlckhpc3RvcnlQcm9wcz4gPSAoeyBcbiAgcGFzdE51bWJlcnMsIFxuICB0b2RheU51bWJlcixcbiAgaXNUaW1lVXAgXG59KSA9PiB7XG4gIC8vIEVuc3VyZSBhbGwgZGF0ZXMgYXJlIHVzaW5nIDIwMjUgYXMgdGhlIHllYXJcbiAgY29uc3QgY3VycmVudFllYXIgPSAyMDI1O1xuICBcbiAgLy8gQ29tYmluZSB0b2RheSdzIG51bWJlciB3aXRoIHBhc3QgbnVtYmVycyBpZiB0aW1lIGlzIHVwXG4gIGNvbnN0IGFsbE51bWJlcnMgPSBpc1RpbWVVcCAmJiB0b2RheU51bWJlciBcbiAgICA/IFt7IGRhdGU6IG5ldyBEYXRlKCksIG51bWJlcjogdG9kYXlOdW1iZXIgfSwgLi4ucGFzdE51bWJlcnMubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGRhdGUgd2l0aCAyMDI1IGFzIHRoZSB5ZWFyIGJ1dCBrZWVwIG1vbnRoIGFuZCBkYXlcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGVudHJ5LmRhdGUpO1xuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKGN1cnJlbnRZZWFyKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZW50cnksIGRhdGUgfTtcbiAgICAgIH0pXVxuICAgIDogcGFzdE51bWJlcnMubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGRhdGUgd2l0aCAyMDI1IGFzIHRoZSB5ZWFyIGJ1dCBrZWVwIG1vbnRoIGFuZCBkYXlcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGVudHJ5LmRhdGUpO1xuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKGN1cnJlbnRZZWFyKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZW50cnksIGRhdGUgfTtcbiAgICAgIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiZ2xhc3MtY2FyZCBtdC04XCI+XG4gICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICBEYWlseSBOdW1iZXIgSGlzdG9yeVxuICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC04IHctOCByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICAgIDxMaXN0Q2hlY2tzIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICBSZWNvcmQgb2YgcHJldmlvdXMgZGFpbHkgbnVtYmVyc1xuICAgICAgICA8L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgIFxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICB7YWxsTnVtYmVycy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHB5LTRcIj5cbiAgICAgICAgICAgIE5vIHByZXZpb3VzIG51bWJlcnMgdG8gZGlzcGxheSB5ZXQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgICAge2FsbE51bWJlcnMubWFwKChlbnRyeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTMgcm91bmRlZC1sZyBib3JkZXIgJHtpbmRleCA9PT0gMCAmJiBpc1RpbWVVcCAmJiB0b2RheU51bWJlciA/ICdiZy1wcmltYXJ5LzEwIGJvcmRlci1wcmltYXJ5LzIwJyA6ICdiZy1jYXJkLzUwIGJvcmRlci1ib3JkZXIvNTAnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTMgcC0yIGJnLXdoaXRlIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOCB3LTggcm91bmRlZC1mdWxsIGJnLXB1cnBsZS02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZW50cnkubnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMCAmJiBpc1RpbWVVcCAmJiB0b2RheU51bWJlciA/IFwiVG9kYXkncyBOdW1iZXJcIiA6IGBOdW1iZXIgb24gJHtmb3JtYXQoZW50cnkuZGF0ZSwgJ01NTSBkZCcpfWB9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhckRheXMgY2xhc3NOYW1lPVwiaC0zIHctMyBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0KGVudHJ5LmRhdGUsICdFRUVFLCBNTU1NIGRkLCB5eXl5Jyl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhaWx5TnVtYmVySGlzdG9yeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJMaXN0Q2hlY2tzIiwiQ2FsZW5kYXJEYXlzIiwiZm9ybWF0IiwiRGFpbHlOdW1iZXJIaXN0b3J5IiwicGFzdE51bWJlcnMiLCJ0b2RheU51bWJlciIsImlzVGltZVVwIiwiY3VycmVudFllYXIiLCJhbGxOdW1iZXJzIiwiZGF0ZSIsIkRhdGUiLCJudW1iZXIiLCJtYXAiLCJlbnRyeSIsInNldEZ1bGxZZWFyIiwiY2xhc3NOYW1lIiwiZGl2IiwibGVuZ3RoIiwicCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGVBQWUsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLFFBQVEsdUJBQXVCO0FBQ2pHLFNBQVNDLFVBQVUsRUFBRUMsWUFBWSxRQUFRLGVBQWU7QUFDeEQsU0FBU0MsTUFBTSxRQUFRLFdBQVc7QUFhbEMsTUFBTUMscUJBQXdELENBQUMsRUFDN0RDLFdBQVcsRUFDWEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1Q7SUFDQyw4Q0FBOEM7SUFDOUMsTUFBTUMsY0FBYztJQUVwQix5REFBeUQ7SUFDekQsTUFBTUMsYUFBYUYsWUFBWUQsY0FDM0I7UUFBQztZQUFFSSxNQUFNLElBQUlDO1lBQVFDLFFBQVFOO1FBQVk7V0FBTUQsWUFBWVEsR0FBRyxDQUFDQyxDQUFBQTtZQUM3RCxpRUFBaUU7WUFDakUsTUFBTUosT0FBTyxJQUFJQyxLQUFLRyxNQUFNSixJQUFJO1lBQ2hDQSxLQUFLSyxXQUFXLENBQUNQO1lBQ2pCLE9BQU87Z0JBQUUsR0FBR00sS0FBSztnQkFBRUo7WUFBSztRQUMxQjtLQUFHLEdBQ0hMLFlBQVlRLEdBQUcsQ0FBQ0MsQ0FBQUE7UUFDZCxpRUFBaUU7UUFDakUsTUFBTUosT0FBTyxJQUFJQyxLQUFLRyxNQUFNSixJQUFJO1FBQ2hDQSxLQUFLSyxXQUFXLENBQUNQO1FBQ2pCLE9BQU87WUFBRSxHQUFHTSxLQUFLO1lBQUVKO1FBQUs7SUFDMUI7SUFFSixxQkFDRSxRQUFDZDtRQUFLb0IsV0FBVTs7MEJBQ2QsUUFBQ2pCO2dCQUFXaUIsV0FBVTs7a0NBQ3BCLFFBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYixRQUFDaEI7Z0NBQVVnQixXQUFVOzBDQUFzQjs7Ozs7OzBDQUczQyxRQUFDQztnQ0FBSUQsV0FBVTswQ0FDYixjQUFBLFFBQUNmO29DQUFXZSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHMUIsUUFBQ2xCO2tDQUFnQjs7Ozs7Ozs7Ozs7OzBCQUtuQixRQUFDRDswQkFDRVksV0FBV1MsTUFBTSxLQUFLLGtCQUNyQixRQUFDQztvQkFBRUgsV0FBVTs4QkFBeUM7Ozs7O3lDQUl0RCxRQUFDQztvQkFBSUQsV0FBVTs4QkFDWlAsV0FBV0ksR0FBRyxDQUFDLENBQUNDLE9BQU9NLHNCQUN0QixRQUFDSDs0QkFFQ0QsV0FBVyxDQUFDLHNCQUFzQixFQUFFSSxVQUFVLEtBQUtiLFlBQVlELGNBQWMsb0NBQW9DLDhCQUE4QixDQUFDO3NDQUVoSixjQUFBLFFBQUNXO2dDQUFJRCxXQUFVOztrREFDYixRQUFDQzt3Q0FBSUQsV0FBVTtrREFDYixjQUFBLFFBQUNDOzRDQUFJRCxXQUFVO3NEQUNaRixNQUFNRixNQUFNOzs7Ozs7Ozs7OztrREFHakIsUUFBQ0s7OzBEQUNDLFFBQUNFO2dEQUFFSCxXQUFVOzBEQUNWSSxVQUFVLEtBQUtiLFlBQVlELGNBQWMsbUJBQW1CLENBQUMsVUFBVSxFQUFFSCxPQUFPVyxNQUFNSixJQUFJLEVBQUUsVUFBVSxDQUFDOzs7Ozs7MERBRTFHLFFBQUNPO2dEQUFJRCxXQUFVOztrRUFDYixRQUFDZDt3REFBYWMsV0FBVTs7Ozs7O29EQUN2QmIsT0FBT1csTUFBTUosSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQWZyQlU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCckI7S0ExRU1oQjtBQTRFTixlQUFlQSxtQkFBbUIifQ==