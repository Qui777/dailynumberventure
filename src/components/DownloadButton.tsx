import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/DownloadButton.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/DownloadButton.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react;
import { Button } from "/src/components/ui/button.tsx";
import { Download } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
import { downloadProjectAsZip } from "/src/utils/downloadUtils.ts?t=1744653378689";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=57c2cc69";
const DownloadButton = ()=>{
    const handleDownload = async ()=>{
        toast.loading("Preparing download...", {
            id: "download-toast"
        });
        try {
            const success = await downloadProjectAsZip();
            if (success) {
                toast.success("Download started! Check your downloads folder.", {
                    id: "download-toast"
                });
            } else {
                toast.error("Failed to download. Please try again.", {
                    id: "download-toast"
                });
            }
        } catch (error) {
            console.error("Download error:", error);
            toast.error("Download error occurred. Please try again.", {
                id: "download-toast"
            });
        }
    };
    return /*#__PURE__*/ _jsxDEV(Button, {
        variant: "outline",
        size: "sm",
        onClick: handleDownload,
        className: "flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-medium",
        children: [
            /*#__PURE__*/ _jsxDEV(Download, {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/dev-server/src/components/DownloadButton.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("span", {
                children: "Download Project"
            }, void 0, false, {
                fileName: "/dev-server/src/components/DownloadButton.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/DownloadButton.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_c = DownloadButton;
export default DownloadButton;
var _c;
$RefreshReg$(_c, "DownloadButton");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/DownloadButton.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/DownloadButton.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRvd25sb2FkQnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IERvd25sb2FkIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IGRvd25sb2FkUHJvamVjdEFzWmlwIH0gZnJvbSAnQC91dGlscy9kb3dubG9hZFV0aWxzJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAnc29ubmVyJztcblxuY29uc3QgRG93bmxvYWRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRvYXN0LmxvYWRpbmcoXCJQcmVwYXJpbmcgZG93bmxvYWQuLi5cIiwgeyBpZDogXCJkb3dubG9hZC10b2FzdFwiIH0pO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgZG93bmxvYWRQcm9qZWN0QXNaaXAoKTtcbiAgICAgIFxuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkRvd25sb2FkIHN0YXJ0ZWQhIENoZWNrIHlvdXIgZG93bmxvYWRzIGZvbGRlci5cIiwgeyBpZDogXCJkb3dubG9hZC10b2FzdFwiIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gZG93bmxvYWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIsIHsgaWQ6IFwiZG93bmxvYWQtdG9hc3RcIiB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkRvd25sb2FkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICB0b2FzdC5lcnJvcihcIkRvd25sb2FkIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiLCB7IGlkOiBcImRvd25sb2FkLXRvYXN0XCIgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbiBcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCIgXG4gICAgICBzaXplPVwic21cIiBcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfVxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bVwiXG4gICAgPlxuICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgPHNwYW4+RG93bmxvYWQgUHJvamVjdDwvc3Bhbj5cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvd25sb2FkQnV0dG9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiRG93bmxvYWQiLCJkb3dubG9hZFByb2plY3RBc1ppcCIsInRvYXN0IiwiRG93bmxvYWRCdXR0b24iLCJoYW5kbGVEb3dubG9hZCIsImxvYWRpbmciLCJpZCIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzcGFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsTUFBTSxRQUFRLHlCQUF5QjtBQUNoRCxTQUFTQyxRQUFRLFFBQVEsZUFBZTtBQUN4QyxTQUFTQyxvQkFBb0IsUUFBUSx3QkFBd0I7QUFDN0QsU0FBU0MsS0FBSyxRQUFRLFNBQVM7QUFFL0IsTUFBTUMsaUJBQWlCO0lBQ3JCLE1BQU1DLGlCQUFpQjtRQUNyQkYsTUFBTUcsT0FBTyxDQUFDLHlCQUF5QjtZQUFFQyxJQUFJO1FBQWlCO1FBRTlELElBQUk7WUFDRixNQUFNQyxVQUFVLE1BQU1OO1lBRXRCLElBQUlNLFNBQVM7Z0JBQ1hMLE1BQU1LLE9BQU8sQ0FBQyxrREFBa0Q7b0JBQUVELElBQUk7Z0JBQWlCO1lBQ3pGLE9BQU87Z0JBQ0xKLE1BQU1NLEtBQUssQ0FBQyx5Q0FBeUM7b0JBQUVGLElBQUk7Z0JBQWlCO1lBQzlFO1FBQ0YsRUFBRSxPQUFPRSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxtQkFBbUJBO1lBQ2pDTixNQUFNTSxLQUFLLENBQUMsOENBQThDO2dCQUFFRixJQUFJO1lBQWlCO1FBQ25GO0lBQ0Y7SUFFQSxxQkFDRSxRQUFDUDtRQUNDVyxTQUFRO1FBQ1JDLE1BQUs7UUFDTEMsU0FBU1I7UUFDVFMsV0FBVTs7MEJBRVYsUUFBQ2I7Z0JBQVNhLFdBQVU7Ozs7OzswQkFDcEIsUUFBQ0M7MEJBQUs7Ozs7Ozs7Ozs7OztBQUdaO0tBN0JNWDtBQStCTixlQUFlQSxlQUFlIn0=