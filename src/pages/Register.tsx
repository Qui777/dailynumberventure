import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Register.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/dev-server/src/pages/Register.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=57c2cc69"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useState = __vite__cjsImport2_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=57c2cc69";
import { Input } from "/src/components/ui/input.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Label } from "/src/components/ui/label.tsx";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=57c2cc69";
import Navbar from "/src/components/Navbar.tsx?t=1744653378689";
import AnimatedTransition from "/src/components/AnimatedTransition.tsx";
import { sendSignupEmail } from "/src/utils/emailUtils.ts";
import { Eye, EyeOff } from "/node_modules/.vite/deps/lucide-react.js?v=57c2cc69";
const Register = ()=>{
    _s();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!name || !email || !password) {
            toast.error('Please fill in all fields');
            return;
        }
        if (password.length < 8 || !/\d/.test(password)) {
            toast.error('Password must be at least 8 characters and include a number');
            return;
        }
        setIsLoading(true);
        try {
            // Simulate API call
            setTimeout(()=>{
                // Save user info for demo purposes
                localStorage.setItem('user_name', name);
                localStorage.setItem('user_email', email);
                // Log email sending (no actual redirection)
                sendSignupEmail(name, email);
                setIsLoading(false);
                toast.success('Account created successfully');
                // Redirect to homepage immediately after successful registration
                navigate('/', {
                    replace: true
                });
            }, 1500);
        } catch (error) {
            setIsLoading(false);
            toast.error('Registration failed. Please try again.');
        }
    };
    const togglePasswordVisibility = ()=>{
        setShowPassword(!showPassword);
    };
    const handleTermsClick = (e)=>{
        e.preventDefault();
        toast.info("Terms of Service would open here");
    };
    const handlePrivacyClick = (e)=>{
        e.preventDefault();
        toast.info("Privacy Policy would open here");
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ _jsxDEV(Navbar, {}, void 0, false, {
                fileName: "/dev-server/src/pages/Register.tsx",
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
                                        children: "Create an account"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Register.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-muted-foreground mt-2",
                                        children: "Start playing Daily Number Quest today"
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Register.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/pages/Register.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "glass-card p-8",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Label, {
                                                        htmlFor: "name",
                                                        children: "Full Name"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Register.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Input, {
                                                        id: "name",
                                                        type: "text",
                                                        placeholder: "John Doe",
                                                        value: name,
                                                        onChange: (e)=>setName(e.target.value),
                                                        className: "h-11",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Register.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Register.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Label, {
                                                        htmlFor: "email",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Register.tsx",
                                                        lineNumber: 102,
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
                                                        fileName: "/dev-server/src/pages/Register.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Register.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Label, {
                                                        htmlFor: "password",
                                                        children: "Password"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Register.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Input, {
                                                                id: "password",
                                                                type: showPassword ? "text" : "password",
                                                                placeholder: "Create a secure password",
                                                                value: password,
                                                                onChange: (e)=>setPassword(e.target.value),
                                                                className: "h-11 pr-10",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Register.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("button", {
                                                                type: "button",
                                                                onClick: togglePasswordVisibility,
                                                                className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white",
                                                                children: showPassword ? /*#__PURE__*/ _jsxDEV(EyeOff, {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "/dev-server/src/pages/Register.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 39
                                                                }, this) : /*#__PURE__*/ _jsxDEV(Eye, {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "/dev-server/src/pages/Register.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 72
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "/dev-server/src/pages/Register.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/dev-server/src/pages/Register.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        className: "text-xs text-muted-foreground mt-1",
                                                        children: "Must be at least 8 characters and include a number"
                                                    }, void 0, false, {
                                                        fileName: "/dev-server/src/pages/Register.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/dev-server/src/pages/Register.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                type: "submit",
                                                className: "w-full h-11 button-shine",
                                                disabled: isLoading,
                                                children: isLoading ? 'Creating account...' : 'Create account'
                                            }, void 0, false, {
                                                fileName: "/dev-server/src/pages/Register.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/dev-server/src/pages/Register.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "mt-6",
                                        children: /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-xs text-center text-muted-foreground",
                                            children: [
                                                "By creating an account, you agree to our",
                                                ' ',
                                                /*#__PURE__*/ _jsxDEV("button", {
                                                    onClick: handleTermsClick,
                                                    className: "text-primary hover:underline",
                                                    children: "Terms of Service"
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/Register.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this),
                                                ' ',
                                                "and",
                                                ' ',
                                                /*#__PURE__*/ _jsxDEV("button", {
                                                    onClick: handlePrivacyClick,
                                                    className: "text-primary hover:underline",
                                                    children: "Privacy Policy"
                                                }, void 0, false, {
                                                    fileName: "/dev-server/src/pages/Register.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/dev-server/src/pages/Register.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/dev-server/src/pages/Register.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/dev-server/src/pages/Register.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "text-center mt-6",
                                children: /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        "Already have an account?",
                                        ' ',
                                        /*#__PURE__*/ _jsxDEV(Link, {
                                            to: "/login",
                                            className: "text-primary hover:underline font-medium",
                                            children: "Sign in"
                                        }, void 0, false, {
                                            fileName: "/dev-server/src/pages/Register.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/dev-server/src/pages/Register.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/dev-server/src/pages/Register.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/dev-server/src/pages/Register.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/dev-server/src/pages/Register.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/dev-server/src/pages/Register.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/dev-server/src/pages/Register.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
};
_s(Register, "IVGzuZON3sgrUS/MmVP8oaOUjko=", false, function() {
    return [
        useNavigate
    ];
});
_c = Register;
export default Register;
var _c;
$RefreshReg$(_c, "Register");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/dev-server/src/pages/Register.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/dev-server/src/pages/Register.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlZ2lzdGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9pbnB1dCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2xhYmVsJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAnc29ubmVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgQW5pbWF0ZWRUcmFuc2l0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9BbmltYXRlZFRyYW5zaXRpb24nO1xuaW1wb3J0IHsgc2VuZFNpZ251cEVtYWlsIH0gZnJvbSAnQC91dGlscy9lbWFpbFV0aWxzJztcbmltcG9ydCB7IEV5ZSwgRXllT2ZmIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgICAgdG9hc3QuZXJyb3IoJ1BsZWFzZSBmaWxsIGluIGFsbCBmaWVsZHMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDggfHwgIS9cXGQvLnRlc3QocGFzc3dvcmQpKSB7XG4gICAgICB0b2FzdC5lcnJvcignUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgYW5kIGluY2x1ZGUgYSBudW1iZXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAvLyBTaW11bGF0ZSBBUEkgY2FsbFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFNhdmUgdXNlciBpbmZvIGZvciBkZW1vIHB1cnBvc2VzXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyX25hbWUnLCBuYW1lKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJfZW1haWwnLCBlbWFpbCk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2cgZW1haWwgc2VuZGluZyAobm8gYWN0dWFsIHJlZGlyZWN0aW9uKVxuICAgICAgICBzZW5kU2lnbnVwRW1haWwobmFtZSwgZW1haWwpO1xuICAgICAgICBcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgdG9hc3Quc3VjY2VzcygnQWNjb3VudCBjcmVhdGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICBcbiAgICAgICAgLy8gUmVkaXJlY3QgdG8gaG9tZXBhZ2UgaW1tZWRpYXRlbHkgYWZ0ZXIgc3VjY2Vzc2Z1bCByZWdpc3RyYXRpb25cbiAgICAgICAgbmF2aWdhdGUoJy8nLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHRvYXN0LmVycm9yKCdSZWdpc3RyYXRpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRlcm1zQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2FzdC5pbmZvKFwiVGVybXMgb2YgU2VydmljZSB3b3VsZCBvcGVuIGhlcmVcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJpdmFjeUNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9hc3QuaW5mbyhcIlByaXZhY3kgUG9saWN5IHdvdWxkIG9wZW4gaGVyZVwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWJhY2tncm91bmRcIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIFxuICAgICAgPEFuaW1hdGVkVHJhbnNpdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB0LTI0IHBiLTEyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLVtjYWxjKDEwMHZoLTgwcHgpXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLThcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodFwiPkNyZWF0ZSBhbiBhY2NvdW50PC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTJcIj5cbiAgICAgICAgICAgICAgICBTdGFydCBwbGF5aW5nIERhaWx5IE51bWJlciBRdWVzdCB0b2RheVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzcy1jYXJkIHAtOFwiPlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJuYW1lXCI+RnVsbCBOYW1lPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9obiBEb2VcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMVwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVAZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTExXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIGEgc2VjdXJlIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMSBwci0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMyB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIHRleHQtd2hpdGUvNzAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gPEV5ZU9mZiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz4gOiA8RXllIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgTXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgYW5kIGluY2x1ZGUgYSBudW1iZXJcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTEgYnV0dG9uLXNoaW5lXCIgXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAnQ3JlYXRpbmcgYWNjb3VudC4uLicgOiAnQ3JlYXRlIGFjY291bnQnfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtY2VudGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgQnkgY3JlYXRpbmcgYW4gYWNjb3VudCwgeW91IGFncmVlIHRvIG91cnsnICd9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRlcm1zQ2xpY2t9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgVGVybXMgb2YgU2VydmljZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+eycgJ31cbiAgICAgICAgICAgICAgICAgIGFuZHsnICd9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVByaXZhY3lDbGlja30gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgICAgICBQcml2YWN5IFBvbGljeVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTZcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97JyAnfVxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGhvdmVyOnVuZGVybGluZSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbmltYXRlZFRyYW5zaXRpb24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZU5hdmlnYXRlIiwiSW5wdXQiLCJCdXR0b24iLCJMYWJlbCIsInRvYXN0IiwiTmF2YmFyIiwiQW5pbWF0ZWRUcmFuc2l0aW9uIiwic2VuZFNpZ251cEVtYWlsIiwiRXllIiwiRXllT2ZmIiwiUmVnaXN0ZXIiLCJuYXZpZ2F0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImxlbmd0aCIsInRlc3QiLCJzZXRUaW1lb3V0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN1Y2Nlc3MiLCJyZXBsYWNlIiwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5IiwiaGFuZGxlVGVybXNDbGljayIsImluZm8iLCJoYW5kbGVQcml2YWN5Q2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJodG1sRm9yIiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLE9BQU9BLFNBQVNDLFFBQVEsUUFBUSxRQUFRO0FBQ3hDLFNBQVNDLElBQUksRUFBRUMsV0FBVyxRQUFRLG1CQUFtQjtBQUNyRCxTQUFTQyxLQUFLLFFBQVEsd0JBQXdCO0FBQzlDLFNBQVNDLE1BQU0sUUFBUSx5QkFBeUI7QUFDaEQsU0FBU0MsS0FBSyxRQUFRLHdCQUF3QjtBQUM5QyxTQUFTQyxLQUFLLFFBQVEsU0FBUztBQUMvQixPQUFPQyxZQUFZLHNCQUFzQjtBQUN6QyxPQUFPQyx3QkFBd0Isa0NBQWtDO0FBQ2pFLFNBQVNDLGVBQWUsUUFBUSxxQkFBcUI7QUFDckQsU0FBU0MsR0FBRyxFQUFFQyxNQUFNLFFBQVEsZUFBZTtBQUUzQyxNQUFNQyxXQUFXOztJQUNmLE1BQU1DLFdBQVdYO0lBQ2pCLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHZixTQUFTO0lBQ2pDLE1BQU0sQ0FBQ2dCLE9BQU9DLFNBQVMsR0FBR2pCLFNBQVM7SUFDbkMsTUFBTSxDQUFDa0IsVUFBVUMsWUFBWSxHQUFHbkIsU0FBUztJQUN6QyxNQUFNLENBQUNvQixXQUFXQyxhQUFhLEdBQUdyQixTQUFTO0lBQzNDLE1BQU0sQ0FBQ3NCLGNBQWNDLGdCQUFnQixHQUFHdkIsU0FBUztJQUVqRCxNQUFNd0IsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJLENBQUNaLFFBQVEsQ0FBQ0UsU0FBUyxDQUFDRSxVQUFVO1lBQ2hDWixNQUFNcUIsS0FBSyxDQUFDO1lBQ1o7UUFDRjtRQUVBLElBQUlULFNBQVNVLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBS0MsSUFBSSxDQUFDWCxXQUFXO1lBQy9DWixNQUFNcUIsS0FBSyxDQUFDO1lBQ1o7UUFDRjtRQUVBTixhQUFhO1FBRWIsSUFBSTtZQUNGLG9CQUFvQjtZQUNwQlMsV0FBVztnQkFDVCxtQ0FB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