import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/dropdown-menu.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/components/ui/dropdown-menu.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport2_react);
import * as DropdownMenuPrimitive from "/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=57c2cc69";
import { Check, ChevronRight, Circle } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
import { cn } from "/src/lib/utils.ts";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSubTrigger = /*#__PURE__*/ React.forwardRef(_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.SubTrigger, {
        ref: ref,
        className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ _jsxDEV(ChevronRight, {
                className: "ml-auto h-4 w-4"
            }, void 0, false, {
                fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this));
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ React.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.SubContent, {
        ref: ref,
        className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, this));
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = /*#__PURE__*/ React.forwardRef(_c4 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.Portal, {
        children: /*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.Content, {
            ref: ref,
            sideOffset: sideOffset,
            className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
            lineNumber: 62,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, this));
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = /*#__PURE__*/ React.forwardRef(_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.Item, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, this));
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ React.forwardRef(_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.CheckboxItem, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ _jsxDEV(Check, {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 107,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
                lineNumber: 106,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 97,
        columnNumber: 3
    }, this));
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ React.forwardRef(_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.RadioItem, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ _jsxDEV(Circle, {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 130,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
                lineNumber: 129,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, this));
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = /*#__PURE__*/ React.forwardRef(_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.Label, {
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 145,
        columnNumber: 3
    }, this));
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ React.forwardRef(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.Separator, {
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 161,
        columnNumber: 3
    }, this));
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ _jsxDEV("span", {
        className: cn("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup,  };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
$RefreshReg$(_c, "DropdownMenuSubTrigger$React.forwardRef");
$RefreshReg$(_c1, "DropdownMenuSubTrigger");
$RefreshReg$(_c2, "DropdownMenuSubContent$React.forwardRef");
$RefreshReg$(_c3, "DropdownMenuSubContent");
$RefreshReg$(_c4, "DropdownMenuContent$React.forwardRef");
$RefreshReg$(_c5, "DropdownMenuContent");
$RefreshReg$(_c6, "DropdownMenuItem$React.forwardRef");
$RefreshReg$(_c7, "DropdownMenuItem");
$RefreshReg$(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
$RefreshReg$(_c9, "DropdownMenuCheckboxItem");
$RefreshReg$(_c10, "DropdownMenuRadioItem$React.forwardRef");
$RefreshReg$(_c11, "DropdownMenuRadioItem");
$RefreshReg$(_c12, "DropdownMenuLabel$React.forwardRef");
$RefreshReg$(_c13, "DropdownMenuLabel");
$RefreshReg$(_c14, "DropdownMenuSeparator$React.forwardRef");
$RefreshReg$(_c15, "DropdownMenuSeparator");
$RefreshReg$(_c16, "DropdownMenuShortcut");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/components/ui/dropdown-menu.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/components/ui/dropdown-menu.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLW1lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBEcm9wZG93bk1lbnVQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51XCJcbmltcG9ydCB7IENoZWNrLCBDaGV2cm9uUmlnaHQsIENpcmNsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5cbmNvbnN0IERyb3Bkb3duTWVudSA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5Sb290XG5cbmNvbnN0IERyb3Bkb3duTWVudVRyaWdnZXIgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuVHJpZ2dlclxuXG5jb25zdCBEcm9wZG93bk1lbnVHcm91cCA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5Hcm91cFxuXG5jb25zdCBEcm9wZG93bk1lbnVQb3J0YWwgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuUG9ydGFsXG5cbmNvbnN0IERyb3Bkb3duTWVudVN1YiA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJcblxuY29uc3QgRHJvcGRvd25NZW51UmFkaW9Hcm91cCA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0dyb3VwXG5cbmNvbnN0IERyb3Bkb3duTWVudVN1YlRyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXI+ICYge1xuICAgIGluc2V0PzogYm9vbGVhblxuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZmxleCBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweC0yIHB5LTEuNSB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpiZy1hY2NlbnQgZGF0YS1bc3RhdGU9b3Blbl06YmctYWNjZW50XCIsXG4gICAgICBpbnNldCAmJiBcInBsLThcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwibWwtYXV0byBoLTQgdy00XCIgLz5cbiAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlcj5cbikpXG5Ecm9wZG93bk1lbnVTdWJUcmlnZ2VyLmRpc3BsYXlOYW1lID1cbiAgRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXIuZGlzcGxheU5hbWVcblxuY29uc3QgRHJvcGRvd25NZW51U3ViQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViQ29udGVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiei01MCBtaW4tdy1bOHJlbV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgcC0xIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdy1sZyBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTJcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcbkRyb3Bkb3duTWVudVN1YkNvbnRlbnQuZGlzcGxheU5hbWUgPVxuICBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViQ29udGVudC5kaXNwbGF5TmFtZVxuXG5jb25zdCBEcm9wZG93bk1lbnVDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5Db250ZW50PlxuPigoeyBjbGFzc05hbWUsIHNpZGVPZmZzZXQgPSA0LCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Db250ZW50XG4gICAgICByZWY9e3JlZn1cbiAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInotNTAgbWluLXctWzhyZW1dIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1wb3BvdmVyIHAtMSB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbWQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XG4pKVxuRHJvcGRvd25NZW51Q29udGVudC5kaXNwbGF5TmFtZSA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lXG5cbmNvbnN0IERyb3Bkb3duTWVudUl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW0+ICYge1xuICAgIGluc2V0PzogYm9vbGVhblxuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB4LTIgcHktMS41IHRleHQtc20gb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwXCIsXG4gICAgICBpbnNldCAmJiBcInBsLThcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcbkRyb3Bkb3duTWVudUl0ZW0uZGlzcGxheU5hbWUgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbS5kaXNwbGF5TmFtZVxuXG5jb25zdCBEcm9wZG93bk1lbnVDaGVja2JveEl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBjaGVja2VkLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB5LTEuNSBwbC04IHByLTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTBcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgZmxleCBoLTMuNSB3LTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICA8L3NwYW4+XG4gICAge2NoaWxkcmVufVxuICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+XG4pKVxuRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtLmRpc3BsYXlOYW1lID1cbiAgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbS5kaXNwbGF5TmFtZVxuXG5jb25zdCBEcm9wZG93bk1lbnVSYWRpb0l0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB5LTEuNSBwbC04IHByLTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTBcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0yIGZsZXggaC0zLjUgdy0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgICAgIDxDaXJjbGUgY2xhc3NOYW1lPVwiaC0yIHctMiBmaWxsLWN1cnJlbnRcIiAvPlxuICAgICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICA8L3NwYW4+XG4gICAge2NoaWxkcmVufVxuICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0+XG4pKVxuRHJvcGRvd25NZW51UmFkaW9JdGVtLmRpc3BsYXlOYW1lID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvSXRlbS5kaXNwbGF5TmFtZVxuXG5jb25zdCBEcm9wZG93bk1lbnVMYWJlbCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5MYWJlbD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsPiAmIHtcbiAgICBpbnNldD86IGJvb2xlYW5cbiAgfVxuPigoeyBjbGFzc05hbWUsIGluc2V0LCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5MYWJlbFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInB4LTIgcHktMS41IHRleHQtc20gZm9udC1zZW1pYm9sZFwiLFxuICAgICAgaW5zZXQgJiYgXCJwbC04XCIsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5Ecm9wZG93bk1lbnVMYWJlbC5kaXNwbGF5TmFtZSA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5MYWJlbC5kaXNwbGF5TmFtZVxuXG5jb25zdCBEcm9wZG93bk1lbnVTZXBhcmF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCItbXgtMSBteS0xIGgtcHggYmctbXV0ZWRcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuRHJvcGRvd25NZW51U2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvci5kaXNwbGF5TmFtZVxuXG5jb25zdCBEcm9wZG93bk1lbnVTaG9ydGN1dCA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxTcGFuRWxlbWVudD4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3NOYW1lPXtjbihcIm1sLWF1dG8gdGV4dC14cyB0cmFja2luZy13aWRlc3Qgb3BhY2l0eS02MFwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIClcbn1cbkRyb3Bkb3duTWVudVNob3J0Y3V0LmRpc3BsYXlOYW1lID0gXCJEcm9wZG93bk1lbnVTaG9ydGN1dFwiXG5cbmV4cG9ydCB7XG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25NZW51VHJpZ2dlcixcbiAgRHJvcGRvd25NZW51Q29udGVudCxcbiAgRHJvcGRvd25NZW51SXRlbSxcbiAgRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtLFxuICBEcm9wZG93bk1lbnVSYWRpb0l0ZW0sXG4gIERyb3Bkb3duTWVudUxhYmVsLFxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXG4gIERyb3Bkb3duTWVudVNob3J0Y3V0LFxuICBEcm9wZG93bk1lbnVHcm91cCxcbiAgRHJvcGRvd25NZW51UG9ydGFsLFxuICBEcm9wZG93bk1lbnVTdWIsXG4gIERyb3Bkb3duTWVudVN1YkNvbnRlbnQsXG4gIERyb3Bkb3duTWVudVN1YlRyaWdnZXIsXG4gIERyb3Bkb3duTWVudVJhZGlvR3JvdXAsXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEcm9wZG93bk1lbnVQcmltaXRpdmUiLCJDaGVjayIsIkNoZXZyb25SaWdodCIsIkNpcmNsZSIsImNuIiwiRHJvcGRvd25NZW51IiwiUm9vdCIsIkRyb3Bkb3duTWVudVRyaWdnZXIiLCJUcmlnZ2VyIiwiRHJvcGRvd25NZW51R3JvdXAiLCJHcm91cCIsIkRyb3Bkb3duTWVudVBvcnRhbCIsIlBvcnRhbCIsIkRyb3Bkb3duTWVudVN1YiIsIlN1YiIsIkRyb3Bkb3duTWVudVJhZGlvR3JvdXAiLCJSYWRpb0dyb3VwIiwiRHJvcGRvd25NZW51U3ViVHJpZ2dlciIsImZvcndhcmRSZWYiLCJjbGFzc05hbWUiLCJpbnNldCIsImNoaWxkcmVuIiwicHJvcHMiLCJyZWYiLCJTdWJUcmlnZ2VyIiwiZGlzcGxheU5hbWUiLCJEcm9wZG93bk1lbnVTdWJDb250ZW50IiwiU3ViQ29udGVudCIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJzaWRlT2Zmc2V0IiwiQ29udGVudCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJJdGVtIiwiRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtIiwiY2hlY2tlZCIsIkNoZWNrYm94SXRlbSIsInNwYW4iLCJJdGVtSW5kaWNhdG9yIiwiRHJvcGRvd25NZW51UmFkaW9JdGVtIiwiUmFkaW9JdGVtIiwiRHJvcGRvd25NZW51TGFiZWwiLCJMYWJlbCIsIkRyb3Bkb3duTWVudVNlcGFyYXRvciIsIlNlcGFyYXRvciIsIkRyb3Bkb3duTWVudVNob3J0Y3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZQSxXQUFXLFFBQU87QUFDOUIsWUFBWUMsMkJBQTJCLGdDQUErQjtBQUN0RSxTQUFTQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsTUFBTSxRQUFRLGVBQWM7QUFFMUQsU0FBU0MsRUFBRSxRQUFRLGNBQWE7QUFFaEMsTUFBTUMsZUFBZUwsc0JBQXNCTSxJQUFJO0FBRS9DLE1BQU1DLHNCQUFzQlAsc0JBQXNCUSxPQUFPO0FBRXpELE1BQU1DLG9CQUFvQlQsc0JBQXNCVSxLQUFLO0FBRXJELE1BQU1DLHFCQUFxQlgsc0JBQXNCWSxNQUFNO0FBRXZELE1BQU1DLGtCQUFrQmIsc0JBQXNCYyxHQUFHO0FBRWpELE1BQU1DLHlCQUF5QmYsc0JBQXNCZ0IsVUFBVTtBQUUvRCxNQUFNQyx1Q0FBeUJsQixNQUFNbUIsVUFBVSxNQUs3QyxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0MsT0FBTyxFQUFFQyxvQkFDM0MsUUFBQ3ZCLHNCQUFzQndCLFVBQVU7UUFDL0JELEtBQUtBO1FBQ0xKLFdBQVdmLEdBQ1Qsd0lBQ0FnQixTQUFTLFFBQ1REO1FBRUQsR0FBR0csS0FBSzs7WUFFUkQ7MEJBQ0QsUUFBQ25CO2dCQUFhaUIsV0FBVTs7Ozs7Ozs7Ozs7OztBQUc1QkYsdUJBQXVCUSxXQUFXLEdBQ2hDekIsc0JBQXNCd0IsVUFBVSxDQUFDQyxXQUFXO0FBRTlDLE1BQU1DLHVDQUF5QjNCLE1BQU1tQixVQUFVLE9BRzdDLENBQUMsRUFBRUMsU0FBUyxFQUFFLEdBQUdHLE9BQU8sRUFBRUMsb0JBQzFCLFFBQUN2QixzQkFB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