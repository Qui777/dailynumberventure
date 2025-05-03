import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/streak/StreakProgress.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/streak/StreakProgress.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react;
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Flame, Gift, Share2 } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=57c2cc69";
const StreakProgress = ({ currentStreak, showShareButton = true })=>{
    // Calculate rewards based on streak
    const freeGuess = currentStreak >= 3;
    const prizeMultiplier = currentStreak >= 7;
    const vipDrawEligible = currentStreak >= 30;
    // Calculate progress to next milestone
    const nextMilestone = currentStreak < 3 ? 3 : currentStreak < 7 ? 7 : currentStreak < 30 ? 30 : 30;
    const progress = Math.min(currentStreak / nextMilestone * 100, 100);
    // Function to handle social sharing
    const handleShare = ()=>{
        const shareText = `I'm on a ${currentStreak}-day streak on Daily Number Quest! Join me and see if you can beat the game.`;
        // Check if Web Share API is available
        if (navigator.share) {
            navigator.share({
                title: 'My Daily Number Quest Streak',
                text: shareText,
                url: window.location.origin
            }).then(()=>toast.success("Shared successfully!")).catch((error)=>{
                console.error('Error sharing:', error);
                toast.error("Couldn't share right now. Please try again.");
            });
        } else {
            // Fallback - copy to clipboard
            navigator.clipboard.writeText(shareText).then(()=>toast.success("Copied to clipboard! Paste it anywhere to share.")).catch(()=>toast.error("Couldn't copy to clipboard. Please try again."));
        }
    };
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
                                children: "Your Streak"
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center justify-center h-8 w-8 rounded-full bg-orange-100 text-orange-600",
                                children: /*#__PURE__*/ _jsxDEV(Flame, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV(CardDescription, {
                        children: [
                            "You've played ",
                            currentStreak,
                            " day",
                            currentStreak !== 1 ? 's' : '',
                            " in a row"
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(CardContent, {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        children: "Progress to next reward"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        className: "font-medium",
                                        children: [
                                            currentStreak,
                                            "/",
                                            nextMilestone,
                                            " days"
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "h-2.5 w-full bg-muted rounded-full overflow-hidden",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    className: "h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500",
                                    style: {
                                        width: `${progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h3", {
                                className: "text-sm font-medium flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Gift, {
                                        className: "h-4 w-4 mr-1.5"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    "Streak Rewards"
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: `flex items-center p-2.5 rounded-md ${freeGuess ? 'bg-green-50 text-green-700' : 'bg-muted/50 text-muted-foreground'}`,
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: `h-6 w-6 rounded-full flex items-center justify-center mr-2 ${freeGuess ? 'bg-green-100' : 'bg-muted'}`,
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: freeGuess ? 'font-medium' : '',
                                                children: "3-Day Streak: Free Bonus Guess"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            freeGuess && /*#__PURE__*/ _jsxDEV("span", {
                                                className: "ml-auto text-xs font-medium bg-green-200 px-2 py-0.5 rounded-full",
                                                children: "Unlocked"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                                lineNumber: 94,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: `flex items-center p-2.5 rounded-md ${prizeMultiplier ? 'bg-blue-50 text-blue-700' : 'bg-muted/50 text-muted-foreground'}`,
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: `h-6 w-6 rounded-full flex items-center justify-center mr-2 ${prizeMultiplier ? 'bg-blue-100' : 'bg-muted'}`,
                                                children: "7"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: prizeMultiplier ? 'font-medium' : '',
                                                children: "7-Day Streak: 2x Prize Multiplier"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            prizeMultiplier && /*#__PURE__*/ _jsxDEV("span", {
                                                className: "ml-auto text-xs font-medium bg-blue-200 px-2 py-0.5 rounded-full",
                                                children: "Unlocked"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                                lineNumber: 102,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: `flex items-center p-2.5 rounded-md ${vipDrawEligible ? 'bg-purple-50 text-purple-700' : 'bg-muted/50 text-muted-foreground'}`,
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: `h-6 w-6 rounded-full flex items-center justify-center mr-2 ${vipDrawEligible ? 'bg-purple-100' : 'bg-muted'}`,
                                                children: "30"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: vipDrawEligible ? 'font-medium' : '',
                                                children: "30-Day Streak: VIP Draw Entry ($500)"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            vipDrawEligible && /*#__PURE__*/ _jsxDEV("span", {
                                                className: "ml-auto text-xs font-medium bg-purple-200 px-2 py-0.5 rounded-full",
                                                children: "Unlocked"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                                lineNumber: 110,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            showShareButton && /*#__PURE__*/ _jsxDEV(CardFooter, {
                className: "flex justify-center border-t pt-4",
                children: /*#__PURE__*/ _jsxDEV(Button, {
                    variant: "outline",
                    className: "w-full gap-2",
                    onClick: handleShare,
                    children: [
                        /*#__PURE__*/ _jsxDEV(Share2, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this),
                        "Share Your Streak"
                    ]
                }, void 0, true, {
                    fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/streak/StreakProgress.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
_c = StreakProgress;
export default StreakProgress;
var _c;
$RefreshReg$(_c, "StreakProgress");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/streak/StreakProgress.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/streak/StreakProgress.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0cmVha1Byb2dyZXNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZERlc2NyaXB0aW9uLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUsIENhcmRGb290ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvY2FyZCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IEZsYW1lLCBDYWxlbmRhciwgR2lmdCwgU2hhcmUyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAnc29ubmVyJztcblxuaW50ZXJmYWNlIFN0cmVha1Byb2dyZXNzUHJvcHMge1xuICBjdXJyZW50U3RyZWFrOiBudW1iZXI7XG4gIHNob3dTaGFyZUJ1dHRvbj86IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0cmVha1Byb2dyZXNzOiBSZWFjdC5GQzxTdHJlYWtQcm9ncmVzc1Byb3BzPiA9ICh7IFxuICBjdXJyZW50U3RyZWFrLCBcbiAgc2hvd1NoYXJlQnV0dG9uID0gdHJ1ZSBcbn0pID0+IHtcbiAgLy8gQ2FsY3VsYXRlIHJld2FyZHMgYmFzZWQgb24gc3RyZWFrXG4gIGNvbnN0IGZyZWVHdWVzcyA9IGN1cnJlbnRTdHJlYWsgPj0gMztcbiAgY29uc3QgcHJpemVNdWx0aXBsaWVyID0gY3VycmVudFN0cmVhayA+PSA3O1xuICBjb25zdCB2aXBEcmF3RWxpZ2libGUgPSBjdXJyZW50U3RyZWFrID49IDMwO1xuICBcbiAgLy8gQ2FsY3VsYXRlIHByb2dyZXNzIHRvIG5leHQgbWlsZXN0b25lXG4gIGNvbnN0IG5leHRNaWxlc3RvbmUgPSBjdXJyZW50U3RyZWFrIDwgMyA/IDMgOiBjdXJyZW50U3RyZWFrIDwgNyA/IDcgOiBjdXJyZW50U3RyZWFrIDwgMzAgPyAzMCA6IDMwO1xuICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKChjdXJyZW50U3RyZWFrIC8gbmV4dE1pbGVzdG9uZSkgKiAxMDAsIDEwMCk7XG4gIFxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgc29jaWFsIHNoYXJpbmdcbiAgY29uc3QgaGFuZGxlU2hhcmUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hhcmVUZXh0ID0gYEknbSBvbiBhICR7Y3VycmVudFN0cmVha30tZGF5IHN0cmVhayBvbiBEYWlseSBOdW1iZXIgUXVlc3QhIEpvaW4gbWUgYW5kIHNlZSBpZiB5b3UgY2FuIGJlYXQgdGhlIGdhbWUuYDtcbiAgICBcbiAgICAvLyBDaGVjayBpZiBXZWIgU2hhcmUgQVBJIGlzIGF2YWlsYWJsZVxuICAgIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcbiAgICAgIG5hdmlnYXRvci5zaGFyZSh7XG4gICAgICAgIHRpdGxlOiAnTXkgRGFpbHkgTnVtYmVyIFF1ZXN0IFN0cmVhaycsXG4gICAgICAgIHRleHQ6IHNoYXJlVGV4dCxcbiAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJTaGFyZWQgc3VjY2Vzc2Z1bGx5IVwiKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2hhcmluZzonLCBlcnJvcik7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiQ291bGRuJ3Qgc2hhcmUgcmlnaHQgbm93LiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGYWxsYmFjayAtIGNvcHkgdG8gY2xpcGJvYXJkXG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzaGFyZVRleHQpXG4gICAgICAgIC50aGVuKCgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJDb3BpZWQgdG8gY2xpcGJvYXJkISBQYXN0ZSBpdCBhbnl3aGVyZSB0byBzaGFyZS5cIikpXG4gICAgICAgIC5jYXRjaCgoKSA9PiB0b2FzdC5lcnJvcihcIkNvdWxkbid0IGNvcHkgdG8gY2xpcGJvYXJkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiZ2xhc3MtY2FyZCBtdC04XCI+XG4gICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICBZb3VyIFN0cmVha1xuICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC04IHctOCByb3VuZGVkLWZ1bGwgYmctb3JhbmdlLTEwMCB0ZXh0LW9yYW5nZS02MDBcIj5cbiAgICAgICAgICAgIDxGbGFtZSBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgWW91J3ZlIHBsYXllZCB7Y3VycmVudFN0cmVha30gZGF5e2N1cnJlbnRTdHJlYWsgIT09IDEgPyAncycgOiAnJ30gaW4gYSByb3dcbiAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICBcbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgey8qIFByb2dyZXNzIGJhciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc21cIj5cbiAgICAgICAgICAgIDxzcGFuPlByb2dyZXNzIHRvIG5leHQgcmV3YXJkPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57Y3VycmVudFN0cmVha30ve25leHRNaWxlc3RvbmV9IGRheXM8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTIuNSB3LWZ1bGwgYmctbXV0ZWQgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1vcmFuZ2UtNTAwIHRvLXJlZC01MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgey8qIFJld2FyZHMgbGlzdCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPEdpZnQgY2xhc3NOYW1lPVwiaC00IHctNCBtci0xLjVcIiAvPlxuICAgICAgICAgICAgU3RyZWFrIFJld2FyZHNcbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBwLTIuNSByb3VuZGVkLW1kICR7ZnJlZUd1ZXNzID8gJ2JnLWdyZWVuLTUwIHRleHQtZ3JlZW4tNzAwJyA6ICdiZy1tdXRlZC81MCB0ZXh0LW11dGVkLWZvcmVncm91bmQnfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtNiB3LTYgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1yLTIgJHtmcmVlR3Vlc3MgPyAnYmctZ3JlZW4tMTAwJyA6ICdiZy1tdXRlZCd9YH0+XG4gICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtmcmVlR3Vlc3MgPyAnZm9udC1tZWRpdW0nIDogJyd9PjMtRGF5IFN0cmVhazogRnJlZSBCb251cyBHdWVzczwvc3Bhbj5cbiAgICAgICAgICAgICAge2ZyZWVHdWVzcyAmJiA8c3BhbiBjbGFzc05hbWU9XCJtbC1hdXRvIHRleHQteHMgZm9udC1tZWRpdW0gYmctZ3JlZW4tMjAwIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbFwiPlVubG9ja2VkPC9zcGFuPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHAtMi41IHJvdW5kZWQtbWQgJHtwcml6ZU11bHRpcGxpZXIgPyAnYmctYmx1ZS01MCB0ZXh0LWJsdWUtNzAwJyA6ICdiZy1tdXRlZC81MCB0ZXh0LW11dGVkLWZvcmVncm91bmQnfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtNiB3LTYgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1yLTIgJHtwcml6ZU11bHRpcGxpZXIgPyAnYmctYmx1ZS0xMDAnIDogJ2JnLW11dGVkJ31gfT5cbiAgICAgICAgICAgICAgICA3XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3ByaXplTXVsdGlwbGllciA/ICdmb250LW1lZGl1bScgOiAnJ30+Ny1EYXkgU3RyZWFrOiAyeCBQcml6ZSBNdWx0aXBsaWVyPC9zcGFuPlxuICAgICAgICAgICAgICB7cHJpemVNdWx0aXBsaWVyICYmIDxzcGFuIGNsYXNzTmFtZT1cIm1sLWF1dG8gdGV4dC14cyBmb250LW1lZGl1bSBiZy1ibHVlLTIwMCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGxcIj5VbmxvY2tlZDwvc3Bhbj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBwLTIuNSByb3VuZGVkLW1kICR7dmlwRHJhd0VsaWdpYmxlID8gJ2JnLXB1cnBsZS01MCB0ZXh0LXB1cnBsZS03MDAnIDogJ2JnLW11dGVkLzUwIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCd9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC02IHctNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXItMiAke3ZpcERyYXdFbGlnaWJsZSA/ICdiZy1wdXJwbGUtMTAwJyA6ICdiZy1tdXRlZCd9YH0+XG4gICAgICAgICAgICAgICAgMzBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dmlwRHJhd0VsaWdpYmxlID8gJ2ZvbnQtbWVkaXVtJyA6ICcnfT4zMC1EYXkgU3RyZWFrOiBWSVAgRHJhdyBFbnRyeSAoJDUwMCk8L3NwYW4+XG4gICAgICAgICAgICAgIHt2aXBEcmF3RWxpZ2libGUgJiYgPHNwYW4gY2xhc3NOYW1lPVwibWwtYXV0byB0ZXh0LXhzIGZvbnQtbWVkaXVtIGJnLXB1cnBsZS0yMDAgcHgtMiBweS0wLjUgcm91bmRlZC1mdWxsXCI+VW5sb2NrZWQ8L3NwYW4+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIFxuICAgICAge3Nob3dTaGFyZUJ1dHRvbiAmJiAoXG4gICAgICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgYm9yZGVyLXQgcHQtNFwiPlxuICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGdhcC0yXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNoYXJlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTaGFyZTIgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICBTaGFyZSBZb3VyIFN0cmVha1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICApfVxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmVha1Byb2dyZXNzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkNhcmRGb290ZXIiLCJCdXR0b24iLCJGbGFtZSIsIkdpZnQiLCJTaGFyZTIiLCJ0b2FzdCIsIlN0cmVha1Byb2dyZXNzIiwiY3VycmVudFN0cmVhayIsInNob3dTaGFyZUJ1dHRvbiIsImZyZWVHdWVzcyIsInByaXplTXVsdGlwbGllciIsInZpcERyYXdFbGlnaWJsZSIsIm5leHRNaWxlc3RvbmUiLCJwcm9ncmVzcyIsIk1hdGgiLCJtaW4iLCJoYW5kbGVTaGFyZSIsInNoYXJlVGV4dCIsIm5hdmlnYXRvciIsInNoYXJlIiwidGl0bGUiLCJ0ZXh0IiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJ0aGVuIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY2xhc3NOYW1lIiwiZGl2Iiwic3BhbiIsInN0eWxlIiwid2lkdGgiLCJoMyIsInZhcmlhbnQiLCJvbkNsaWNrIl0s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