import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/hooks/use-mobile.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/hooks/use-mobile.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport1_react);
const MOBILE_BREAKPOINT = 768;
export function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = React.useState(undefined);
    React.useEffect(()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener("change", onChange);
    }, []);
    return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/hooks/use-mobile.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/hooks/use-mobile.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZS1tb2JpbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IE1PQklMRV9CUkVBS1BPSU5UID0gNzY4XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc01vYmlsZSgpIHtcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHtNT0JJTEVfQlJFQUtQT0lOVCAtIDF9cHgpYClcbiAgICBjb25zdCBvbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHNldElzTW9iaWxlKHdpbmRvdy5pbm5lcldpZHRoIDwgTU9CSUxFX0JSRUFLUE9JTlQpXG4gICAgfVxuICAgIG1xbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIG9uQ2hhbmdlKVxuICAgIHNldElzTW9iaWxlKHdpbmRvdy5pbm5lcldpZHRoIDwgTU9CSUxFX0JSRUFLUE9JTlQpXG4gICAgcmV0dXJuICgpID0+IG1xbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIG9uQ2hhbmdlKVxuICB9LCBbXSlcblxuICByZXR1cm4gISFpc01vYmlsZVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTU9CSUxFX0JSRUFLUE9JTlQiLCJ1c2VJc01vYmlsZSIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsIm1xbCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJvbkNoYW5nZSIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWUEsV0FBVyxRQUFPO0FBRTlCLE1BQU1DLG9CQUFvQjtBQUUxQixPQUFPLFNBQVNDOztJQUNkLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSixNQUFNSyxRQUFRLENBQXNCQztJQUVwRU4sTUFBTU8sU0FBUyxDQUFDO1FBQ2QsTUFBTUMsTUFBTUMsT0FBT0MsVUFBVSxDQUFDLENBQUMsWUFBWSxFQUFFVCxvQkFBb0IsRUFBRSxHQUFHLENBQUM7UUFDdkUsTUFBTVUsV0FBVztZQUNmUCxZQUFZSyxPQUFPRyxVQUFVLEdBQUdYO1FBQ2xDO1FBQ0FPLElBQUlLLGdCQUFnQixDQUFDLFVBQVVGO1FBQy9CUCxZQUFZSyxPQUFPRyxVQUFVLEdBQUdYO1FBQ2hDLE9BQU8sSUFBTU8sSUFBSU0sbUJBQW1CLENBQUMsVUFBVUg7SUFDakQsR0FBRyxFQUFFO0lBRUwsT0FBTyxDQUFDLENBQUNSO0FBQ1g7R0FkZ0JEIn0=