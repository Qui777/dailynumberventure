import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false, "VITE_PAYPAL_CLIENT_ID": "sb"};// Environment utility functions
// Safely get environment variables with fallbacks
export const getEnv = (key, fallback = '')=>{
    const value = import.meta.env[`VITE_${key}`];
    return value !== undefined ? String(value) : fallback;
};
// Check if we're in development or production mode
export const isDev = ()=>{
    return import.meta.env.DEV === true;
};
// Get API base URL
export const getApiUrl = ()=>{
    return isDev() ? 'http://localhost:3000/api' : '/api';
};
// Get PayPal client ID with improved fallback
export const getPayPalClientId = ()=>{
    const clientId = getEnv('PAYPAL_CLIENT_ID');
    console.log("PayPal Client ID:", clientId ? "Found in environment" : "Using sandbox mode");
    // Fallback to sandbox if no client ID is provided
    return clientId || 'sb';
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudlV0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gRW52aXJvbm1lbnQgdXRpbGl0eSBmdW5jdGlvbnNcblxuLy8gU2FmZWx5IGdldCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgd2l0aCBmYWxsYmFja3NcbmV4cG9ydCBjb25zdCBnZXRFbnYgPSAoa2V5OiBzdHJpbmcsIGZhbGxiYWNrOiBzdHJpbmcgPSAnJyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHZhbHVlID0gaW1wb3J0Lm1ldGEuZW52W2BWSVRFXyR7a2V5fWBdO1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IFN0cmluZyh2YWx1ZSkgOiBmYWxsYmFjaztcbn07XG5cbi8vIENoZWNrIGlmIHdlJ3JlIGluIGRldmVsb3BtZW50IG9yIHByb2R1Y3Rpb24gbW9kZVxuZXhwb3J0IGNvbnN0IGlzRGV2ID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaW1wb3J0Lm1ldGEuZW52LkRFViA9PT0gdHJ1ZTtcbn07XG5cbi8vIEdldCBBUEkgYmFzZSBVUkxcbmV4cG9ydCBjb25zdCBnZXRBcGlVcmwgPSAoKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGlzRGV2KClcbiAgICA/ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJ1xuICAgIDogJy9hcGknO1xufTtcblxuLy8gR2V0IFBheVBhbCBjbGllbnQgSUQgd2l0aCBpbXByb3ZlZCBmYWxsYmFja1xuZXhwb3J0IGNvbnN0IGdldFBheVBhbENsaWVudElkID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGNsaWVudElkID0gZ2V0RW52KCdQQVlQQUxfQ0xJRU5UX0lEJyk7XG4gIGNvbnNvbGUubG9nKFwiUGF5UGFsIENsaWVudCBJRDpcIiwgY2xpZW50SWQgPyBcIkZvdW5kIGluIGVudmlyb25tZW50XCIgOiBcIlVzaW5nIHNhbmRib3ggbW9kZVwiKTtcbiAgXG4gIC8vIEZhbGxiYWNrIHRvIHNhbmRib3ggaWYgbm8gY2xpZW50IElEIGlzIHByb3ZpZGVkXG4gIHJldHVybiBjbGllbnRJZCB8fCAnc2InOyBcbn07XG4iXSwibmFtZXMiOlsiZ2V0RW52Iiwia2V5IiwiZmFsbGJhY2siLCJ2YWx1ZSIsImVudiIsInVuZGVmaW5lZCIsIlN0cmluZyIsImlzRGV2IiwiREVWIiwiZ2V0QXBpVXJsIiwiZ2V0UGF5UGFsQ2xpZW50SWQiLCJjbGllbnRJZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUNBLGdDQUFnQztBQUVoQyxrREFBa0Q7QUFDbEQsT0FBTyxNQUFNQSxTQUFTLENBQUNDLEtBQWFDLFdBQW1CLEVBQUU7SUFDdkQsTUFBTUMsUUFBUSxZQUFZQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUVILElBQUksQ0FBQyxDQUFDO0lBQzVDLE9BQU9FLFVBQVVFLFlBQVlDLE9BQU9ILFNBQVNEO0FBQy9DLEVBQUU7QUFFRixtREFBbUQ7QUFDbkQsT0FBTyxNQUFNSyxRQUFRO0lBQ25CLE9BQU8sWUFBWUgsR0FBRyxDQUFDSSxHQUFHLEtBQUs7QUFDakMsRUFBRTtBQUVGLG1CQUFtQjtBQUNuQixPQUFPLE1BQU1DLFlBQVk7SUFDdkIsT0FBT0YsVUFDSCw4QkFDQTtBQUNOLEVBQUU7QUFFRiw4Q0FBOEM7QUFDOUMsT0FBTyxNQUFNRyxvQkFBb0I7SUFDL0IsTUFBTUMsV0FBV1gsT0FBTztJQUN4QlksUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkYsV0FBVyx5QkFBeUI7SUFFckUsa0RBQWtEO0lBQ2xELE9BQU9BLFlBQVk7QUFDckIsRUFBRSJ9