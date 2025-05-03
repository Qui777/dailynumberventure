import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Login.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/pages/Login.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useState = __vite__cjsImport2_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=57c2cc69";
import { Input } from "/src/components/ui/input.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Label } from "/src/components/ui/label.tsx";
import { Checkbox } from "/src/components/ui/checkbox.tsx";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=57c2cc69";
import Navbar from "/src/components/Navbar.tsx?t=1744653378689";
import AnimatedTransition from "/src/components/AnimatedTransition.tsx";
import { Shield } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
const Login = ()=>{
    _s();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isOwnerMode, setIsOwnerMode] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email || !password) {
            toast.error('Please fill in all fields');
            return;
        }
        setIsLoading(true);
        // Simulate API call
        setTimeout(()=>{
            setIsLoading(false);
            // Set owner flag in localStorage if owner mode is selected
            if (isOwnerMode) {
                localStorage.setItem('is_owner', 'true');
                toast.success('Logged in as Game Owner');
            } else {
                // Regular user login
                localStorage.removeItem('is_owner');
                toast.success('Logged in successfully');
            }
            // Store user info in localStorage
            localStorage.setItem('user_name', email.split('@')[0]);
            if (rememberMe) {
                localStorage.setItem('user_email', email);
            }
            // Redirect to appropriate page
            if (isOwnerMode) {
                navigate('/game-admin');
            } else {
                navigate('/');
            }
        }, 1500);
    };
    const handleForgotPassword = (e)=>{
        e.preventDefault();
        toast.info("Password reset functionality would be implemented here");
    };
    const toggleOwnerMode = ()=>{
        setIsOwnerMode(!isOwnerMode);
        if (!isOwnerMode) {
            toast.info("Switching to Owner login mode");
        }
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ _jsxDEV(Navbar, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Login.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(AnimatedTransition, {
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "container mx-auto px-4 pt-24 pb-12 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        className: "w-full max-w-md",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "text-center mb-8",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h1", {
                                        className: "text-3xl font-bold tracking-tight",
                                        children: "Welcome back"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Login.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-muted-foreground mt-2",
                                        children: "Sign in to your account to continue"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Login.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/pages/Login.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: `glass-card p-8 ${isOwnerMode ? 'border-2 border-amber-500' : ''}`,
                                children: [
                                    isOwnerMode && /*#__PURE__*/ _jsxDEV("div", {
                                        className: "mb-6 text-center bg-amber-500/10 rounded-md p-3 border border-amber-500/30",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex justify-center mb-2",
                                                children: /*#__PURE__*/ _jsxDEV(Shield, {
                                                    className: "h-6 w-6 text-amber-500"
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/Login.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/pages/Login.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                className: "text-amber-500 font-semibold text-lg mb-1",
                                                children: "Game Owner Login"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/pages/Login.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Access game administration features"
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/pages/Login.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/pages/Login.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Label, {
                                                        htmlFor: "email",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Login.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Input, {
                                                        id: "email",
                                                        type: "email",
                                                        placeholder: "name@example.com",
                                                        value: email,
                                                        onChange: (e)=>setEmail(e.target.value),
                                                        className: "h-11",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Login.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Login.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Label, {
                                                                htmlFor: "password",
                                                                children: "Password"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Login.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("button", {
                                                                onClick: handleForgotPassword,
                                                                className: "text-sm text-primary hover:underline",
                                                                children: "Forgot password?"
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Login.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Login.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Input, {
                                                        id: "password",
                                                        type: "password",
                                                        placeholder: "••••••••",
                                                        value: password,
                                                        onChange: (e)=>setPassword(e.target.value),
                                                        className: "h-11",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Login.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Login.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Checkbox, {
                                                        id: "remember",
                                                        checked: rememberMe,
                                                        onCheckedChange: (checked)=>{
                                                            if (typeof checked === 'boolean') {
                                                                setRememberMe(checked);
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Login.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Label, {
                                                        htmlFor: "remember",
                                                        className: "text-sm font-normal",
                                                        children: "Remember me for 30 days"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Login.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Login.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                type: "submit",
                                                className: `w-full h-11 button-shine ${isOwnerMode ? 'bg-amber-500 hover:bg-amber-600 text-black' : ''}`,
                                                disabled: isLoading,
                                                children: isLoading ? 'Signing in...' : isOwnerMode ? 'Sign in as Owner' : 'Sign in'
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/pages/Login.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/pages/Login.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "mt-6 pt-4 border-t",
                                        children: /*#__PURE__*/ _jsxDEV("button", {
                                            type: "button",
                                            onClick: toggleOwnerMode,
                                            className: "flex items-center justify-center w-full text-sm font-medium text-amber-500 hover:text-amber-600",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Shield, {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/Login.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this),
                                                isOwnerMode ? 'Switch to Regular Login' : 'Login as Game Owner'
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/pages/Login.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Login.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/pages/Login.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "text-center mt-6",
                                children: /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        "Don't have an account?",
                                        ' ',
                                        /*#__PURE__*/ _jsxDEV(Link, {
                                            to: "/register",
                                            className: "text-primary hover:underline font-medium",
                                            children: "Sign up"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/pages/Login.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/pages/Login.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/pages/Login.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/pages/Login.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/Login.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/pages/Login.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/pages/Login.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
};
_s(Login, "IO90iC1OFxjk9TxuHfhKEJ9X56o=", false, function() {
    return [
        useNavigate
    ];
});
_c = Login;
export default Login;
var _c;
$RefreshReg$(_c, "Login");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/pages/Login.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/pages/Login.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvZ2luLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9pbnB1dCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2xhYmVsJztcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2NoZWNrYm94JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAnc29ubmVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgQW5pbWF0ZWRUcmFuc2l0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9BbmltYXRlZFRyYW5zaXRpb24nO1xuaW1wb3J0IHsgU2hpZWxkIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVtZW1iZXJNZSwgc2V0UmVtZW1iZXJNZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc093bmVyTW9kZSwgc2V0SXNPd25lck1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgIHRvYXN0LmVycm9yKCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBcbiAgICAvLyBTaW11bGF0ZSBBUEkgY2FsbFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIFxuICAgICAgLy8gU2V0IG93bmVyIGZsYWcgaW4gbG9jYWxTdG9yYWdlIGlmIG93bmVyIG1vZGUgaXMgc2VsZWN0ZWRcbiAgICAgIGlmIChpc093bmVyTW9kZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNfb3duZXInLCAndHJ1ZScpO1xuICAgICAgICB0b2FzdC5zdWNjZXNzKCdMb2dnZWQgaW4gYXMgR2FtZSBPd25lcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVndWxhciB1c2VyIGxvZ2luXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpc19vd25lcicpO1xuICAgICAgICB0b2FzdC5zdWNjZXNzKCdMb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFN0b3JlIHVzZXIgaW5mbyBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyX25hbWUnLCBlbWFpbC5zcGxpdCgnQCcpWzBdKTtcbiAgICAgIGlmIChyZW1lbWJlck1lKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyX2VtYWlsJywgZW1haWwpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBSZWRpcmVjdCB0byBhcHByb3ByaWF0ZSBwYWdlXG4gICAgICBpZiAoaXNPd25lck1vZGUpIHtcbiAgICAgICAgbmF2aWdhdGUoJy9nYW1lLWFkbWluJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xuICAgICAgfVxuICAgIH0sIDE1MDApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZvcmdvdFBhc3N3b3JkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9hc3QuaW5mbyhcIlBhc3N3b3JkIHJlc2V0IGZ1bmN0aW9uYWxpdHkgd291bGQgYmUgaW1wbGVtZW50ZWQgaGVyZVwiKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVPd25lck1vZGUgPSAoKSA9PiB7XG4gICAgc2V0SXNPd25lck1vZGUoIWlzT3duZXJNb2RlKTtcbiAgICBpZiAoIWlzT3duZXJNb2RlKSB7XG4gICAgICB0b2FzdC5pbmZvKFwiU3dpdGNoaW5nIHRvIE93bmVyIGxvZ2luIG1vZGVcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmFja2dyb3VuZFwiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgXG4gICAgICA8QW5pbWF0ZWRUcmFuc2l0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHQtMjQgcGItMTIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtW2NhbGMoMTAwdmgtODBweCldXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0XCI+V2VsY29tZSBiYWNrPC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTJcIj5cbiAgICAgICAgICAgICAgICBTaWduIGluIHRvIHlvdXIgYWNjb3VudCB0byBjb250aW51ZVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BnbGFzcy1jYXJkIHAtOCAke2lzT3duZXJNb2RlID8gJ2JvcmRlci0yIGJvcmRlci1hbWJlci01MDAnIDogJyd9YH0+XG4gICAgICAgICAgICAgIHtpc093bmVyTW9kZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IHRleHQtY2VudGVyIGJnLWFtYmVyLTUwMC8xMCByb3VuZGVkLW1kIHAtMyBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8zMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNoaWVsZCBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtYW1iZXItNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYW1iZXItNTAwIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBtYi0xXCI+R2FtZSBPd25lciBMb2dpbjwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkFjY2VzcyBnYW1lIGFkbWluaXN0cmF0aW9uIGZlYXR1cmVzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZUBleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTFcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGb3Jnb3RQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtcHJpbWFyeSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTFcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxuICAgICAgICAgICAgICAgICAgICBpZD1cInJlbWVtYmVyXCIgXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3JlbWVtYmVyTWV9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWRDaGFuZ2U9eyhjaGVja2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGVja2VkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlbWVtYmVyTWUoY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwicmVtZW1iZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlbWVtYmVyIG1lIGZvciAzMCBkYXlzXG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC0xMSBidXR0b24tc2hpbmUgJHtpc093bmVyTW9kZSA/ICdiZy1hbWJlci01MDAgaG92ZXI6YmctYW1iZXItNjAwIHRleHQtYmxhY2snIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/ICdTaWduaW5nIGluLi4uJyA6IGlzT3duZXJNb2RlID8gJ1NpZ24gaW4gYXMgT3duZXInIDogJ1NpZ24gaW4nfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgcHQtNCBib3JkZXItdFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlT3duZXJNb2RlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1hbWJlci01MDAgaG92ZXI6dGV4dC1hbWJlci02MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTaGllbGQgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgIHtpc093bmVyTW9kZSA/ICdTd2l0Y2ggdG8gUmVndWxhciBMb2dpbicgOiAnTG9naW4gYXMgR2FtZSBPd25lcid9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNlwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD97JyAnfVxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGhvdmVyOnVuZGVybGluZSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbmltYXRlZFRyYW5zaXRpb24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZU5hdmlnYXRlIiwiSW5wdXQiLCJCdXR0b24iLCJMYWJlbCIsIkNoZWNrYm94IiwidG9hc3QiLCJOYXZiYXIiLCJBbmltYXRlZFRyYW5zaXRpb24iLCJTaGllbGQiLCJMb2dpbiIsIm5hdmlnYXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyZW1lbWJlck1lIiwic2V0UmVtZW1iZXJNZSIsImlzT3duZXJNb2RlIiwic2V0SXNPd25lck1vZGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsInNldFRpbWVvdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3VjY2VzcyIsInJlbW92ZUl0ZW0iLCJzcGxpdCIsImhhbmRsZUZvcmdvdFBhc3N3b3JkIiwiaW5mbyIsInRvZ2dsZU93bmVyTW9kZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImgzIiwiZm9ybSIsIm9uU3VibWl0IiwiaHRtbEZvciIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayIsImNoZWNrZWQiLCJvbkNoZWNrZWRDaGFuZ2UiLCJkaXNhYmxlZCIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsT0FBT0EsU0FBU0MsUUFBUSxRQUFRLFFBQVE7QUFDeEMsU0FBU0MsSUFBSSxFQUFFQyxXQUFXLFFBQVEsbUJBQW1CO0FBQ3JELFNBQVNDLEtBQUssUUFBUSx3QkFBd0I7QUFDOUMsU0FBU0MsTUFBTSxRQUFRLHlCQUF5QjtBQUNoRCxTQUFTQyxLQUFLLFFBQVEsd0JBQXdCO0FBQzlDLFNBQVNDLFFBQVEsUUFBUSwyQkFBMkI7QUFDcEQsU0FBU0MsS0FBSyxRQUFRLFNBQVM7QUFDL0IsT0FBT0MsWUFBWSxzQkFBc0I7QUFDekMsT0FBT0Msd0JBQXdCLGtDQUFrQztBQUNqRSxTQUFTQyxNQUFNLFFBQVEsZUFBZTtBQUV0QyxNQUFNQyxRQUFROztJQUNaLE1BQU1DLFdBQVdWO0lBQ2pCLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHZCxTQUFTO0lBQ25DLE1BQU0sQ0FBQ2UsVUFBVUMsWUFBWSxHQUFHaEIsU0FBUztJQUN6QyxNQUFNLENBQUNpQixXQUFXQyxhQUFhLEdBQUdsQixTQUFTO0lBQzNDLE1BQU0sQ0FBQ21CLFlBQVlDLGNBQWMsR0FBR3BCLFNBQVM7SUFDN0MsTUFBTSxDQUFDcUIsYUFBYUMsZUFBZSxHQUFH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