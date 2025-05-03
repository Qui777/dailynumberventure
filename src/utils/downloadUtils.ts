import __vite__cjsImport0_jszip from "/node_modules/.vite/deps/jszip.js?v=57c2cc69"; const JSZip = __vite__cjsImport0_jszip.__esModule ? __vite__cjsImport0_jszip.default : __vite__cjsImport0_jszip;
// Helper function to fetch file content
const fetchFileContent = async (path)=>{
    try {
        const response = await fetch(path);
        // If it's an image or binary file, return as blob
        const contentType = response.headers.get('content-type');
        if (contentType && (contentType.startsWith('image/') || contentType.startsWith('application/'))) {
            return await response.blob();
        }
        return await response.text();
    } catch (error) {
        console.error(`Failed to fetch ${path}:`, error);
        return `// Failed to fetch ${path}`;
    }
};
// Complete project structure
const PROJECT_FILES = {
    root: [
        'package.json',
        'tsconfig.json',
        'vite.config.ts',
        'tailwind.config.ts',
        'index.html',
        'netlify.toml',
        '.env.example',
        'README.md',
        'postcss.config.js',
        'components.json'
    ],
    src: [
        'main.tsx',
        'App.tsx',
        'index.css',
        'vite-env.d.ts'
    ],
    components: [
        'Navbar.tsx',
        'DownloadButton.tsx',
        'AnimatedTransition.tsx',
        'CountdownTimer.tsx',
        'FuturisticBall.tsx',
        'NumberInput.tsx',
        'PaymentModal.tsx',
        'ui/button.tsx',
        'ui/dropdown-menu.tsx',
        'ui/toast.tsx',
        'ui/card.tsx',
        'game/GameLayout.tsx',
        'game/GameContent.tsx',
        'game/GameInstructions.tsx',
        'game/GameAction.tsx',
        'game/DailyNumberDisplay.tsx',
        'game/DailyNumberHistory.tsx',
        'game/PlayerEntriesList.tsx',
        'game/PlayerGamesList.tsx',
        'leaderboard/Leaderboard.tsx',
        'streak/StreakProgress.tsx'
    ],
    pages: [
        'Index.tsx',
        'Game.tsx',
        'GameAdmin.tsx',
        'Login.tsx',
        'Register.tsx',
        'Results.tsx',
        'NotFound.tsx',
        'PaymentSuccess.tsx'
    ],
    utils: [
        'downloadUtils.ts',
        'dailyNumberUtils.ts',
        'emailUtils.ts',
        'paymentUtils.ts',
        'envUtils.ts',
        'stripeConfig.ts'
    ],
    context: [
        'GameContext.tsx'
    ],
    hooks: [
        'use-mobile.tsx',
        'use-toast.ts',
        'usePaymentHandler.ts'
    ],
    public: [
        'favicon.ico',
        'og-image.png',
        'placeholder.svg'
    ],
    server: [
        'index.js',
        'package.json',
        'setup.js',
        'setup-web.js'
    ]
};
export const downloadProjectAsZip = async ()=>{
    try {
        const zip = new JSZip();
        // Add root files
        for (const file of PROJECT_FILES.root){
            zip.file(file, await fetchFileContent(`/${file}`));
        }
        // Add src files
        const src = zip.folder("src");
        for (const file of PROJECT_FILES.src){
            src?.file(file, await fetchFileContent(`/src/${file}`));
        }
        // Add components
        const components = src?.folder("components");
        for (const file of PROJECT_FILES.components){
            if (file.includes('/')) {
                const [folder, filename] = file.split('/');
                const subFolder = components?.folder(folder);
                subFolder?.file(filename, await fetchFileContent(`/src/components/${file}`));
            } else {
                components?.file(file, await fetchFileContent(`/src/components/${file}`));
            }
        }
        // Add pages
        const pages = src?.folder("pages");
        for (const file of PROJECT_FILES.pages){
            pages?.file(file, await fetchFileContent(`/src/pages/${file}`));
        }
        // Add utils
        const utils = src?.folder("utils");
        for (const file of PROJECT_FILES.utils){
            utils?.file(file, await fetchFileContent(`/src/utils/${file}`));
        }
        // Add context
        const context = src?.folder("context");
        for (const file of PROJECT_FILES.context){
            context?.file(file, await fetchFileContent(`/src/context/${file}`));
        }
        // Add hooks
        const hooks = src?.folder("hooks");
        for (const file of PROJECT_FILES.hooks){
            hooks?.file(file, await fetchFileContent(`/src/hooks/${file}`));
        }
        // Add public files
        const public_folder = zip.folder("public");
        for (const file of PROJECT_FILES.public){
            const response = await fetch(`/public/${file}`);
            const blob = await response.blob();
            public_folder?.file(file, blob);
        }
        // Add server files
        const server = zip.folder("server");
        for (const file of PROJECT_FILES.server){
            server?.file(file, await fetchFileContent(`/server/${file}`));
        }
        // Generate and download the zip file
        const content = await zip.generateAsync({
            type: "blob"
        });
        const url = window.URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = "daily-number-quest-full.zip";
        document.body.appendChild(a);
        a.click();
        // Cleanup
        window.URL.revokeObjectURL(url);
        a.remove();
        return true;
    } catch (error) {
        console.error("Failed to download project:", error);
        return false;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkVXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSlNaaXAgZnJvbSAnanN6aXAnO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZmV0Y2ggZmlsZSBjb250ZW50XG5jb25zdCBmZXRjaEZpbGVDb250ZW50ID0gYXN5bmMgKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgQmxvYj4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocGF0aCk7XG4gICAgXG4gICAgLy8gSWYgaXQncyBhbiBpbWFnZSBvciBiaW5hcnkgZmlsZSwgcmV0dXJuIGFzIGJsb2JcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpIHx8IGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoJ2FwcGxpY2F0aW9uLycpKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggJHtwYXRofTpgLCBlcnJvcik7XG4gICAgcmV0dXJuIGAvLyBGYWlsZWQgdG8gZmV0Y2ggJHtwYXRofWA7XG4gIH1cbn07XG5cbi8vIENvbXBsZXRlIHByb2plY3Qgc3RydWN0dXJlXG5jb25zdCBQUk9KRUNUX0ZJTEVTID0ge1xuICByb290OiBbXG4gICAgJ3BhY2thZ2UuanNvbicsXG4gICAgJ3RzY29uZmlnLmpzb24nLFxuICAgICd2aXRlLmNvbmZpZy50cycsXG4gICAgJ3RhaWx3aW5kLmNvbmZpZy50cycsXG4gICAgJ2luZGV4Lmh0bWwnLFxuICAgICduZXRsaWZ5LnRvbWwnLFxuICAgICcuZW52LmV4YW1wbGUnLFxuICAgICdSRUFETUUubWQnLFxuICAgICdwb3N0Y3NzLmNvbmZpZy5qcycsXG4gICAgJ2NvbXBvbmVudHMuanNvbidcbiAgXSxcbiAgc3JjOiBbXG4gICAgJ21haW4udHN4JyxcbiAgICAnQXBwLnRzeCcsXG4gICAgJ2luZGV4LmNzcycsXG4gICAgJ3ZpdGUtZW52LmQudHMnXG4gIF0sXG4gIGNvbXBvbmVudHM6IFtcbiAgICAnTmF2YmFyLnRzeCcsXG4gICAgJ0Rvd25sb2FkQnV0dG9uLnRzeCcsXG4gICAgJ0FuaW1hdGVkVHJhbnNpdGlvbi50c3gnLFxuICAgICdDb3VudGRvd25UaW1lci50c3gnLFxuICAgICdGdXR1cmlzdGljQmFsbC50c3gnLFxuICAgICdOdW1iZXJJbnB1dC50c3gnLFxuICAgICdQYXltZW50TW9kYWwudHN4JyxcbiAgICAndWkvYnV0dG9uLnRzeCcsXG4gICAgJ3VpL2Ryb3Bkb3duLW1lbnUudHN4JyxcbiAgICAndWkvdG9hc3QudHN4JyxcbiAgICAndWkvY2FyZC50c3gnLFxuICAgICdnYW1lL0dhbWVMYXlvdXQudHN4JyxcbiAgICAnZ2FtZS9HYW1lQ29udGVudC50c3gnLFxuICAgICdnYW1lL0dhbWVJbnN0cnVjdGlvbnMudHN4JyxcbiAgICAnZ2FtZS9HYW1lQWN0aW9uLnRzeCcsXG4gICAgJ2dhbWUvRGFpbHlOdW1iZXJEaXNwbGF5LnRzeCcsXG4gICAgJ2dhbWUvRGFpbHlOdW1iZXJIaXN0b3J5LnRzeCcsXG4gICAgJ2dhbWUvUGxheWVyRW50cmllc0xpc3QudHN4JyxcbiAgICAnZ2FtZS9QbGF5ZXJHYW1lc0xpc3QudHN4JyxcbiAgICAnbGVhZGVyYm9hcmQvTGVhZGVyYm9hcmQudHN4JyxcbiAgICAnc3RyZWFrL1N0cmVha1Byb2dyZXNzLnRzeCdcbiAgXSxcbiAgcGFnZXM6IFtcbiAgICAnSW5kZXgudHN4JyxcbiAgICAnR2FtZS50c3gnLFxuICAgICdHYW1lQWRtaW4udHN4JyxcbiAgICAnTG9naW4udHN4JyxcbiAgICAnUmVnaXN0ZXIudHN4JyxcbiAgICAnUmVzdWx0cy50c3gnLFxuICAgICdOb3RGb3VuZC50c3gnLFxuICAgICdQYXltZW50U3VjY2Vzcy50c3gnXG4gIF0sXG4gIHV0aWxzOiBbXG4gICAgJ2Rvd25sb2FkVXRpbHMudHMnLFxuICAgICdkYWlseU51bWJlclV0aWxzLnRzJyxcbiAgICAnZW1haWxVdGlscy50cycsXG4gICAgJ3BheW1lbnRVdGlscy50cycsXG4gICAgJ2VudlV0aWxzLnRzJyxcbiAgICAnc3RyaXBlQ29uZmlnLnRzJ1xuICBdLFxuICBjb250ZXh0OiBbXG4gICAgJ0dhbWVDb250ZXh0LnRzeCdcbiAgXSxcbiAgaG9va3M6IFtcbiAgICAndXNlLW1vYmlsZS50c3gnLFxuICAgICd1c2UtdG9hc3QudHMnLFxuICAgICd1c2VQYXltZW50SGFuZGxlci50cydcbiAgXSxcbiAgcHVibGljOiBbXG4gICAgJ2Zhdmljb24uaWNvJyxcbiAgICAnb2ctaW1hZ2UucG5nJyxcbiAgICAncGxhY2Vob2xkZXIuc3ZnJ1xuICBdLFxuICBzZXJ2ZXI6IFtcbiAgICAnaW5kZXguanMnLFxuICAgICdwYWNrYWdlLmpzb24nLFxuICAgICdzZXR1cC5qcycsXG4gICAgJ3NldHVwLXdlYi5qcydcbiAgXVxufTtcblxuZXhwb3J0IGNvbnN0IGRvd25sb2FkUHJvamVjdEFzWmlwID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpO1xuICAgIFxuICAgIC8vIEFkZCByb290IGZpbGVzXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIFBST0pFQ1RfRklMRVMucm9vdCkge1xuICAgICAgemlwLmZpbGUoZmlsZSwgYXdhaXQgZmV0Y2hGaWxlQ29udGVudChgLyR7ZmlsZX1gKSk7XG4gICAgfVxuICAgIFxuICAgIC8vIEFkZCBzcmMgZmlsZXNcbiAgICBjb25zdCBzcmMgPSB6aXAuZm9sZGVyKFwic3JjXCIpO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBQUk9KRUNUX0ZJTEVTLnNyYykge1xuICAgICAgc3JjPy5maWxlKGZpbGUsIGF3YWl0IGZldGNoRmlsZUNvbnRlbnQoYC9zcmMvJHtmaWxlfWApKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQWRkIGNvbXBvbmVudHNcbiAgICBjb25zdCBjb21wb25lbnRzID0gc3JjPy5mb2xkZXIoXCJjb21wb25lbnRzXCIpO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBQUk9KRUNUX0ZJTEVTLmNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChmaWxlLmluY2x1ZGVzKCcvJykpIHtcbiAgICAgICAgY29uc3QgW2ZvbGRlciwgZmlsZW5hbWVdID0gZmlsZS5zcGxpdCgnLycpO1xuICAgICAgICBjb25zdCBzdWJGb2xkZXIgPSBjb21wb25lbnRzPy5mb2xkZXIoZm9sZGVyKTtcbiAgICAgICAgc3ViRm9sZGVyPy5maWxlKGZpbGVuYW1lLCBhd2FpdCBmZXRjaEZpbGVDb250ZW50KGAvc3JjL2NvbXBvbmVudHMvJHtmaWxlfWApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudHM/LmZpbGUoZmlsZSwgYXdhaXQgZmV0Y2hGaWxlQ29udGVudChgL3NyYy9jb21wb25lbnRzLyR7ZmlsZX1gKSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEFkZCBwYWdlc1xuICAgIGNvbnN0IHBhZ2VzID0gc3JjPy5mb2xkZXIoXCJwYWdlc1wiKTtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgUFJPSkVDVF9GSUxFUy5wYWdlcykge1xuICAgICAgcGFnZXM/LmZpbGUoZmlsZSwgYXdhaXQgZmV0Y2hGaWxlQ29udGVudChgL3NyYy9wYWdlcy8ke2ZpbGV9YCkpO1xuICAgIH1cbiAgICBcbiAgICAvLyBBZGQgdXRpbHNcbiAgICBjb25zdCB1dGlscyA9IHNyYz8uZm9sZGVyKFwidXRpbHNcIik7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIFBST0pFQ1RfRklMRVMudXRpbHMpIHtcbiAgICAgIHV0aWxzPy5maWxlKGZpbGUsIGF3YWl0IGZldGNoRmlsZUNvbnRlbnQoYC9zcmMvdXRpbHMvJHtmaWxlfWApKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQWRkIGNvbnRleHRcbiAgICBjb25zdCBjb250ZXh0ID0gc3JjPy5mb2xkZXIoXCJjb250ZXh0XCIpO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBQUk9KRUNUX0ZJTEVTLmNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQ/LmZpbGUoZmlsZSwgYXdhaXQgZmV0Y2hGaWxlQ29udGVudChgL3NyYy9jb250ZXh0LyR7ZmlsZX1gKSk7XG4gICAgfVxuICAgIFxuICAgIC8vIEFkZCBob29rc1xuICAgIGNvbnN0IGhvb2tzID0gc3JjPy5mb2xkZXIoXCJob29rc1wiKTtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgUFJPSkVDVF9GSUxFUy5ob29rcykge1xuICAgICAgaG9va3M/LmZpbGUoZmlsZSwgYXdhaXQgZmV0Y2hGaWxlQ29udGVudChgL3NyYy9ob29rcy8ke2ZpbGV9YCkpO1xuICAgIH1cbiAgICBcbiAgICAvLyBBZGQgcHVibGljIGZpbGVzXG4gICAgY29uc3QgcHVibGljX2ZvbGRlciA9IHppcC5mb2xkZXIoXCJwdWJsaWNcIik7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIFBST0pFQ1RfRklMRVMucHVibGljKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvcHVibGljLyR7ZmlsZX1gKTtcbiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgICBwdWJsaWNfZm9sZGVyPy5maWxlKGZpbGUsIGJsb2IpO1xuICAgIH1cbiAgICBcbiAgICAvLyBBZGQgc2VydmVyIGZpbGVzXG4gICAgY29uc3Qgc2VydmVyID0gemlwLmZvbGRlcihcInNlcnZlclwiKTtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgUFJPSkVDVF9GSUxFUy5zZXJ2ZXIpIHtcbiAgICAgIHNlcnZlcj8uZmlsZShmaWxlLCBhd2FpdCBmZXRjaEZpbGVDb250ZW50KGAvc2VydmVyLyR7ZmlsZX1gKSk7XG4gICAgfVxuICAgIFxuICAgIC8vIEdlbmVyYXRlIGFuZCBkb3dubG9hZCB0aGUgemlwIGZpbGVcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiBcImJsb2JcIiB9KTtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChjb250ZW50KTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9IHVybDtcbiAgICBhLmRvd25sb2FkID0gXCJkYWlseS1udW1iZXItcXVlc3QtZnVsbC56aXBcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgIGEuY2xpY2soKTtcbiAgICBcbiAgICAvLyBDbGVhbnVwXG4gICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICBhLnJlbW92ZSgpO1xuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZG93bmxvYWQgcHJvamVjdDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuIl0sIm5hbWVzIjpbIkpTWmlwIiwiZmV0Y2hGaWxlQ29udGVudCIsInBhdGgiLCJyZXNwb25zZSIsImZldGNoIiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwiZ2V0Iiwic3RhcnRzV2l0aCIsImJsb2IiLCJ0ZXh0IiwiZXJyb3IiLCJjb25zb2xlIiwiUFJPSkVDVF9GSUxFUyIsInJvb3QiLCJzcmMiLCJjb21wb25lbnRzIiwicGFnZXMiLCJ1dGlscyIsImNvbnRleHQiLCJob29rcyIsInB1YmxpYyIsInNlcnZlciIsImRvd25sb2FkUHJvamVjdEFzWmlwIiwiemlwIiwiZmlsZSIsImZvbGRlciIsImluY2x1ZGVzIiwiZmlsZW5hbWUiLCJzcGxpdCIsInN1YkZvbGRlciIsInB1YmxpY19mb2xkZXIiLCJjb250ZW50IiwiZ2VuZXJhdGVBc3luYyIsInR5cGUiLCJ1cmwiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUNBLE9BQU9BLFdBQVcsUUFBUTtBQUUxQix3Q0FBd0M7QUFDeEMsTUFBTUMsbUJBQW1CLE9BQU9DO0lBQzlCLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU1GO1FBRTdCLGtEQUFrRDtRQUNsRCxNQUFNRyxjQUFjRixTQUFTRyxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUN6QyxJQUFJRixlQUFnQkEsQ0FBQUEsWUFBWUcsVUFBVSxDQUFDLGFBQWFILFlBQVlHLFVBQVUsQ0FBQyxlQUFjLEdBQUk7WUFDL0YsT0FBTyxNQUFNTCxTQUFTTSxJQUFJO1FBQzVCO1FBRUEsT0FBTyxNQUFNTixTQUFTTyxJQUFJO0lBQzVCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRVQsS0FBSyxDQUFDLENBQUMsRUFBRVM7UUFDMUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFVCxLQUFLLENBQUM7SUFDckM7QUFDRjtBQUVBLDZCQUE2QjtBQUM3QixNQUFNVyxnQkFBZ0I7SUFDcEJDLE1BQU07UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0RDLEtBQUs7UUFDSDtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0RDLFlBQVk7UUFDVjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUNEQyxPQUFPO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7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