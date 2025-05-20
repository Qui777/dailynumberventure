import animate from "tailwindcss-animate";

export default {
    darkMode: [
        "class"
    ],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}"
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                sans: [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'sans-serif'
                ]
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-out': {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    }
                },
                'scale-in': {
                    '0%': {
                        transform: 'scale(0.95)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1'
                    }
                },
                'scale-out': {
                    from: {
                        transform: 'scale(1)',
                        opacity: '1'
                    },
                    to: {
                        transform: 'scale(0.95)',
                        opacity: '0'
                    }
                },
                'slide-in': {
                    '0%': {
                        transform: 'translateX(100%)'
                    },
                    '100%': {
                        transform: 'translateX(0)'
                    }
                },
                'slide-out': {
                    '0%': {
                        transform: 'translateX(0)'
                    },
                    '100%': {
                        transform: 'translateX(-100%)'
                    }
                },
                'pulse-light': {
                    '0%, 100%': {
                        opacity: '1'
                    },
                    '50%': {
                        opacity: '0.7'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
                    }
                },
                'number-spin': {
                    '0%': {
                        transform: 'translateY(100%)'
                    },
                    '100%': {
                        transform: 'translateY(-100%)'
                    }
                },
                'spin-slow': {
                    '0%': {
                        transform: 'rotate(0deg)'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.4s ease-out',
                'fade-out': 'fade-out 0.4s ease-out',
                'scale-in': 'scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                'scale-out': 'scale-out 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-in': 'slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-out': 'slide-out 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                'pulse-light': 'pulse-light 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'enter': 'fade-in 0.4s ease-out, scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                'exit': 'fade-out 0.4s ease-out, scale-out 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                'number-spin': 'number-spin 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                'spin-slow': 'spin-slow 20s linear infinite'
            },
            backdropFilter: {
                'none': 'none',
                'blur': 'blur(20px)'
            },
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
                'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
                'elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.03)'
            }
        }
    },
    plugins: [animate]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhaWx3aW5kLmNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhcmtNb2RlOiBbXCJjbGFzc1wiXSxcbiAgY29udGVudDogW1xuICAgIFwiLi9wYWdlcy8qKi8qLnt0cyx0c3h9XCIsXG4gICAgXCIuL2NvbXBvbmVudHMvKiovKi57dHMsdHN4fVwiLFxuICAgIFwiLi9hcHAvKiovKi57dHMsdHN4fVwiLFxuICAgIFwiLi9zcmMvKiovKi57dHMsdHN4fVwiLFxuICBdLFxuICBwcmVmaXg6IFwiXCIsXG4gIHRoZW1lOiB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICBjZW50ZXI6IHRydWUsXG4gICAgICBwYWRkaW5nOiAnMnJlbScsXG4gICAgICBzY3JlZW5zOiB7XG4gICAgICAgICdzbSc6ICc2NDBweCcsXG4gICAgICAgICdtZCc6ICc3NjhweCcsXG4gICAgICAgICdsZyc6ICcxMDI0cHgnLFxuICAgICAgICAneGwnOiAnMTI4MHB4JyxcbiAgICAgICAgJzJ4bCc6ICcxNDAwcHgnXG4gICAgICB9XG4gICAgfSxcbiAgICBleHRlbmQ6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgICAgc2FuczogWydJbnRlcicsICd1aS1zYW5zLXNlcmlmJywgJ3N5c3RlbS11aScsICctYXBwbGUtc3lzdGVtJywgJ0JsaW5rTWFjU3lzdGVtRm9udCcsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnSGVsdmV0aWNhIE5ldWUnLCAnQXJpYWwnLCAnc2Fucy1zZXJpZiddLFxuICAgICAgfSxcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBib3JkZXI6ICdoc2wodmFyKC0tYm9yZGVyKSknLFxuICAgICAgICBpbnB1dDogJ2hzbCh2YXIoLS1pbnB1dCkpJyxcbiAgICAgICAgcmluZzogJ2hzbCh2YXIoLS1yaW5nKSknLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnaHNsKHZhcigtLWJhY2tncm91bmQpKScsXG4gICAgICAgIGZvcmVncm91bmQ6ICdoc2wodmFyKC0tZm9yZWdyb3VuZCkpJyxcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgIERFRkFVTFQ6ICdoc2wodmFyKC0tcHJpbWFyeSkpJyxcbiAgICAgICAgICBmb3JlZ3JvdW5kOiAnaHNsKHZhcigtLXByaW1hcnktZm9yZWdyb3VuZCkpJ1xuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICBERUZBVUxUOiAnaHNsKHZhcigtLXNlY29uZGFyeSkpJyxcbiAgICAgICAgICBmb3JlZ3JvdW5kOiAnaHNsKHZhcigtLXNlY29uZGFyeS1mb3JlZ3JvdW5kKSknXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3RydWN0aXZlOiB7XG4gICAgICAgICAgREVGQVVMVDogJ2hzbCh2YXIoLS1kZXN0cnVjdGl2ZSkpJyxcbiAgICAgICAgICBmb3JlZ3JvdW5kOiAnaHNsKHZhcigtLWRlc3RydWN0aXZlLWZvcmVncm91bmQpKSdcbiAgICAgICAgfSxcbiAgICAgICAgbXV0ZWQ6IHtcbiAgICAgICAgICBERUZBVUxUOiAnaHNsKHZhcigtLW11dGVkKSknLFxuICAgICAgICAgIGZvcmVncm91bmQ6ICdoc2wodmFyKC0tbXV0ZWQtZm9yZWdyb3VuZCkpJ1xuICAgICAgICB9LFxuICAgICAgICBhY2NlbnQ6IHtcbiAgICAgICAgICBERUZBVUxUOiAnaHNsKHZhcigtLWFjY2VudCkpJyxcbiAgICAgICAgICBmb3JlZ3JvdW5kOiAnaHNsKHZhcigtLWFjY2VudC1mb3JlZ3JvdW5kKSknXG4gICAgICAgIH0sXG4gICAgICAgIHBvcG92ZXI6IHtcbiAgICAgICAgICBERUZBVUxUOiAnaHNsKHZhcigtLXBvcG92ZXIpKScsXG4gICAgICAgICAgZm9yZWdyb3VuZDogJ2hzbCh2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpKSdcbiAgICAgICAgfSxcbiAgICAgICAgY2FyZDoge1xuICAgICAgICAgIERFRkFVTFQ6ICdoc2wodmFyKC0tY2FyZCkpJyxcbiAgICAgICAgICBmb3JlZ3JvdW5kOiAnaHNsKHZhcigtLWNhcmQtZm9yZWdyb3VuZCkpJ1xuICAgICAgICB9LFxuICAgICAgICBzaWRlYmFyOiB7XG4gICAgICAgICAgREVGQVVMVDogJ2hzbCh2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpKScsXG4gICAgICAgICAgZm9yZWdyb3VuZDogJ2hzbCh2YXIoLS1zaWRlYmFyLWZvcmVncm91bmQpKScsXG4gICAgICAgICAgcHJpbWFyeTogJ2hzbCh2YXIoLS1zaWRlYmFyLXByaW1hcnkpKScsXG4gICAgICAgICAgJ3ByaW1hcnktZm9yZWdyb3VuZCc6ICdoc2wodmFyKC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQpKScsXG4gICAgICAgICAgYWNjZW50OiAnaHNsKHZhcigtLXNpZGViYXItYWNjZW50KSknLFxuICAgICAgICAgICdhY2NlbnQtZm9yZWdyb3VuZCc6ICdoc2wodmFyKC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCkpJyxcbiAgICAgICAgICBib3JkZXI6ICdoc2wodmFyKC0tc2lkZWJhci1ib3JkZXIpKScsXG4gICAgICAgICAgcmluZzogJ2hzbCh2YXIoLS1zaWRlYmFyLXJpbmcpKSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJvcmRlclJhZGl1czoge1xuICAgICAgICBsZzogJ3ZhcigtLXJhZGl1cyknLFxuICAgICAgICBtZDogJ2NhbGModmFyKC0tcmFkaXVzKSAtIDJweCknLFxuICAgICAgICBzbTogJ2NhbGModmFyKC0tcmFkaXVzKSAtIDRweCknXG4gICAgICB9LFxuICAgICAga2V5ZnJhbWVzOiB7XG4gICAgICAgICdhY2NvcmRpb24tZG93bic6IHtcbiAgICAgICAgICBmcm9tOiB7IGhlaWdodDogJzAnIH0sXG4gICAgICAgICAgdG86IHsgaGVpZ2h0OiAndmFyKC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0KScgfVxuICAgICAgICB9LFxuICAgICAgICAnYWNjb3JkaW9uLXVwJzoge1xuICAgICAgICAgIGZyb206IHsgaGVpZ2h0OiAndmFyKC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0KScgfSxcbiAgICAgICAgICB0bzogeyBoZWlnaHQ6ICcwJyB9XG4gICAgICAgIH0sXG4gICAgICAgICdmYWRlLWluJzoge1xuICAgICAgICAgICcwJSc6IHsgb3BhY2l0eTogJzAnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwcHgpJyB9LFxuICAgICAgICAgICcxMDAlJzogeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2ZhZGUtb3V0Jzoge1xuICAgICAgICAgICcwJSc6IHsgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9LFxuICAgICAgICAgICcxMDAlJzogeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTBweCknIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NjYWxlLWluJzoge1xuICAgICAgICAgICcwJSc6IHsgdHJhbnNmb3JtOiAnc2NhbGUoMC45NSknLCBvcGFjaXR5OiAnMCcgfSxcbiAgICAgICAgICAnMTAwJSc6IHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvcGFjaXR5OiAnMScgfVxuICAgICAgICB9LFxuICAgICAgICAnc2NhbGUtb3V0Jzoge1xuICAgICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvcGFjaXR5OiAnMScgfSxcbiAgICAgICAgICB0bzogeyB0cmFuc2Zvcm06ICdzY2FsZSgwLjk1KScsIG9wYWNpdHk6ICcwJyB9XG4gICAgICAgIH0sXG4gICAgICAgICdzbGlkZS1pbic6IHtcbiAgICAgICAgICAnMCUnOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgICAgICAgJzEwMCUnOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NsaWRlLW91dCc6IHtcbiAgICAgICAgICAnMCUnOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0sXG4gICAgICAgICAgJzEwMCUnOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyB9XG4gICAgICAgIH0sXG4gICAgICAgICdwdWxzZS1saWdodCc6IHtcbiAgICAgICAgICAnMCUsIDEwMCUnOiB7IG9wYWNpdHk6ICcxJyB9LFxuICAgICAgICAgICc1MCUnOiB7IG9wYWNpdHk6ICcwLjcnIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2Zsb2F0Jzoge1xuICAgICAgICAgICcwJSwgMTAwJSc6IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSxcbiAgICAgICAgICAnNTAlJzogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMHB4KScgfVxuICAgICAgICB9LFxuICAgICAgICAnbnVtYmVyLXNwaW4nOiB7XG4gICAgICAgICAgJzAlJzogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9LFxuICAgICAgICAgICcxMDAlJzogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScgfVxuICAgICAgICB9LFxuICAgICAgICAnc3Bpbi1zbG93Jzoge1xuICAgICAgICAgICcwJSc6IHsgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyB9LFxuICAgICAgICAgICcxMDAlJzogeyB0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKScgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAnYWNjb3JkaW9uLWRvd24nOiAnYWNjb3JkaW9uLWRvd24gMC4ycyBlYXNlLW91dCcsXG4gICAgICAgICdhY2NvcmRpb24tdXAnOiAnYWNjb3JkaW9uLXVwIDAuMnMgZWFzZS1vdXQnLFxuICAgICAgICAnZmFkZS1pbic6ICdmYWRlLWluIDAuNHMgZWFzZS1vdXQnLFxuICAgICAgICAnZmFkZS1vdXQnOiAnZmFkZS1vdXQgMC40cyBlYXNlLW91dCcsXG4gICAgICAgICdzY2FsZS1pbic6ICdzY2FsZS1pbiAwLjNzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpJyxcbiAgICAgICAgJ3NjYWxlLW91dCc6ICdzY2FsZS1vdXQgMC4zcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKScsXG4gICAgICAgICdzbGlkZS1pbic6ICdzbGlkZS1pbiAwLjRzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpJyxcbiAgICAgICAgJ3NsaWRlLW91dCc6ICdzbGlkZS1vdXQgMC40cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKScsXG4gICAgICAgICdwdWxzZS1saWdodCc6ICdwdWxzZS1saWdodCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZScsXG4gICAgICAgICdmbG9hdCc6ICdmbG9hdCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZScsXG4gICAgICAgICdlbnRlcic6ICdmYWRlLWluIDAuNHMgZWFzZS1vdXQsIHNjYWxlLWluIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSknLFxuICAgICAgICAnZXhpdCc6ICdmYWRlLW91dCAwLjRzIGVhc2Utb3V0LCBzY2FsZS1vdXQgMC4zcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKScsXG4gICAgICAgICdudW1iZXItc3Bpbic6ICdudW1iZXItc3BpbiAwLjVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpJyxcbiAgICAgICAgJ3NwaW4tc2xvdyc6ICdzcGluLXNsb3cgMjBzIGxpbmVhciBpbmZpbml0ZScsXG4gICAgICB9LFxuICAgICAgYmFja2Ryb3BGaWx0ZXI6IHtcbiAgICAgICAgJ25vbmUnOiAnbm9uZScsXG4gICAgICAgICdibHVyJzogJ2JsdXIoMjBweCknLFxuICAgICAgfSxcbiAgICAgIGJveFNoYWRvdzoge1xuICAgICAgICAnZ2xhc3MnOiAnMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSknLFxuICAgICAgICAnc3VidGxlJzogJzAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wMyknLFxuICAgICAgICAnZWxldmF0ZWQnOiAnMCAxMHB4IDMwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMDMpJyxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbcmVxdWlyZShcInRhaWx3aW5kY3NzLWFuaW1hdGVcIildLFxufSBzYXRpc2ZpZXMgQ29uZmlnO1xuIl0sIm5hbWVzIjpbImRhcmtNb2RlIiwiY29udGVudCIsInByZWZpeCIsInRoZW1lIiwiY29udGFpbmVyIiwiY2VudGVyIiwicGFkZGluZyIsInNjcmVlbnMiLCJleHRlbmQiLCJmb250RmFtaWx5Iiwic2FucyIsImNvbG9ycyIsImJvcmRlciIsImlucHV0IiwicmluZyIsImJhY2tncm91bmQiLCJmb3JlZ3JvdW5kIiwicHJpbWFyeSIsIkRFRkFVTFQiLCJzZWNvbmRhcnkiLCJkZXN0cnVjdGl2ZSIsIm11dGVkIiwiYWNjZW50IiwicG9wb3ZlciIsImNhcmQiLCJzaWRlYmFyIiwiYm9yZGVyUmFkaXVzIiwibGciLCJtZCIsInNtIiwia2V5ZnJhbWVzIiwiZnJvbSIsImhlaWdodCIsInRvIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsImFuaW1hdGlvbiIsImJhY2tkcm9wRmlsdGVyIiwiYm94U2hhZG93IiwicGx1Z2lucyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUVBLGVBQWU7SUFDYkEsVUFBVTtRQUFDO0tBQVE7SUFDbkJDLFNBQVM7UUFDUDtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0RDLFFBQVE7SUFDUkMsT0FBTztRQUNMQyxXQUFXO1lBQ1RDLFFBQVE7WUFDUkMsU0FBUztZQUNUQyxTQUFTO2dCQUNQLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixNQUFNO2dCQUNOLE1BQU07Z0JBQ04sT0FBTztZQUNUO1FBQ0Y7UUFDQUMsUUFB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