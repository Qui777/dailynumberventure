import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=57c2cc69"; const useState = __vite__cjsImport0_react["useState"];
import { toast } from "/node_modules/.vite/deps/sonner.js?v=57c2cc69";
import { sendPaymentConfirmationEmail } from "/src/utils/emailUtils.ts";
export const usePaymentHandler = ({ onPaymentComplete, amount })=>{
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const [playerName, setPlayerName] = useState('');
    const [nameError, setNameError] = useState('');
    // For email notifications
    const [email, setEmail] = useState('');
    const resetForm = ()=>{
        setPlayerName('');
        setNameError('');
        setEmail('');
    };
    // This function will be called when the payment is successful
    const handlePayPalSuccess = (paymentDetails = null)=>{
        // Get stored info if available
        const storedName = localStorage.getItem('tempPlayerName') || playerName;
        const storedEmail = localStorage.getItem('tempPlayerEmail') || email;
        setIsProcessing(false);
        toast.success("Payment successful!");
        // Send payment confirmation email if we have an email
        if (storedEmail) {
            sendPaymentConfirmationEmail(storedName, storedEmail, amount, 'PayPal');
            toast.info('Check your email for payment confirmation');
        }
        // Store the player info in localStorage for game page
        localStorage.setItem('playerName', storedName);
        if (storedEmail) localStorage.setItem('playerEmail', storedEmail);
        // Clean up temporary storage
        localStorage.removeItem('tempPlayerName');
        localStorage.removeItem('tempPlayerEmail');
        onPaymentComplete(storedName);
        resetForm();
    };
    const handlePayPalError = (error)=>{
        console.error("Payment error:", error);
        setIsProcessing(false);
        toast.error("Payment failed. Please try again.");
    };
    const handlePayment = ()=>{
        // Validate name
        if (!playerName.trim()) {
            setNameError('Please enter your name');
            return;
        }
        // Validate email
        if (!email.trim()) {
            setNameError('Please enter your email address');
            return;
        }
        // Email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setNameError('Please enter a valid email address');
            return;
        }
        setIsProcessing(true);
        // Store the player info in localStorage (for when the user returns from payment)
        localStorage.setItem('tempPlayerName', playerName);
        localStorage.setItem('tempPlayerEmail', email);
    };
    return {
        isProcessing,
        paymentMethod,
        playerName,
        nameError,
        email,
        setPaymentMethod,
        setPlayerName,
        setNameError,
        setEmail,
        resetForm,
        handlePayment,
        handlePayPalSuccess,
        handlePayPalError,
        setIsProcessing
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZVBheW1lbnRIYW5kbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3Nvbm5lcic7XG5pbXBvcnQgeyBzZW5kUGF5bWVudENvbmZpcm1hdGlvbkVtYWlsIH0gZnJvbSAnQC91dGlscy9lbWFpbFV0aWxzJztcblxuaW50ZXJmYWNlIFVzZVBheW1lbnRIYW5kbGVyUHJvcHMge1xuICBvblBheW1lbnRDb21wbGV0ZTogKHBsYXllck5hbWU6IHN0cmluZykgPT4gdm9pZDtcbiAgYW1vdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQYXltZW50SGFuZGxlciA9ICh7IG9uUGF5bWVudENvbXBsZXRlLCBhbW91bnQgfTogVXNlUGF5bWVudEhhbmRsZXJQcm9wcykgPT4ge1xuICBjb25zdCBbaXNQcm9jZXNzaW5nLCBzZXRJc1Byb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGF5bWVudE1ldGhvZCwgc2V0UGF5bWVudE1ldGhvZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdwYXlwYWwnKTtcbiAgY29uc3QgW3BsYXllck5hbWUsIHNldFBsYXllck5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbmFtZUVycm9yLCBzZXROYW1lRXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBcbiAgLy8gRm9yIGVtYWlsIG5vdGlmaWNhdGlvbnNcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIFxuICBjb25zdCByZXNldEZvcm0gPSAoKSA9PiB7XG4gICAgc2V0UGxheWVyTmFtZSgnJyk7XG4gICAgc2V0TmFtZUVycm9yKCcnKTtcbiAgICBzZXRFbWFpbCgnJyk7XG4gIH07XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBwYXltZW50IGlzIHN1Y2Nlc3NmdWxcbiAgY29uc3QgaGFuZGxlUGF5UGFsU3VjY2VzcyA9IChwYXltZW50RGV0YWlsczogYW55ID0gbnVsbCkgPT4ge1xuICAgIC8vIEdldCBzdG9yZWQgaW5mbyBpZiBhdmFpbGFibGVcbiAgICBjb25zdCBzdG9yZWROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RlbXBQbGF5ZXJOYW1lJykgfHwgcGxheWVyTmFtZTtcbiAgICBjb25zdCBzdG9yZWRFbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZW1wUGxheWVyRW1haWwnKSB8fCBlbWFpbDtcbiAgICBcbiAgICBzZXRJc1Byb2Nlc3NpbmcoZmFsc2UpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoXCJQYXltZW50IHN1Y2Nlc3NmdWwhXCIpO1xuICAgIFxuICAgIC8vIFNlbmQgcGF5bWVudCBjb25maXJtYXRpb24gZW1haWwgaWYgd2UgaGF2ZSBhbiBlbWFpbFxuICAgIGlmIChzdG9yZWRFbWFpbCkge1xuICAgICAgc2VuZFBheW1lbnRDb25maXJtYXRpb25FbWFpbChzdG9yZWROYW1lLCBzdG9yZWRFbWFpbCwgYW1vdW50LCAnUGF5UGFsJyk7XG4gICAgICB0b2FzdC5pbmZvKCdDaGVjayB5b3VyIGVtYWlsIGZvciBwYXltZW50IGNvbmZpcm1hdGlvbicpO1xuICAgIH1cbiAgICBcbiAgICAvLyBTdG9yZSB0aGUgcGxheWVyIGluZm8gaW4gbG9jYWxTdG9yYWdlIGZvciBnYW1lIHBhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyTmFtZScsIHN0b3JlZE5hbWUpO1xuICAgIGlmIChzdG9yZWRFbWFpbCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllckVtYWlsJywgc3RvcmVkRW1haWwpO1xuICAgIFxuICAgIC8vIENsZWFuIHVwIHRlbXBvcmFyeSBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RlbXBQbGF5ZXJOYW1lJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RlbXBQbGF5ZXJFbWFpbCcpO1xuICAgIFxuICAgIG9uUGF5bWVudENvbXBsZXRlKHN0b3JlZE5hbWUpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBheVBhbEVycm9yID0gKGVycm9yOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFwiUGF5bWVudCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHNldElzUHJvY2Vzc2luZyhmYWxzZSk7XG4gICAgdG9hc3QuZXJyb3IoXCJQYXltZW50IGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGF5bWVudCA9ICgpID0+IHtcbiAgICAvLyBWYWxpZGF0ZSBuYW1lXG4gICAgaWYgKCFwbGF5ZXJOYW1lLnRyaW0oKSkge1xuICAgICAgc2V0TmFtZUVycm9yKCdQbGVhc2UgZW50ZXIgeW91ciBuYW1lJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZW1haWxcbiAgICBpZiAoIWVtYWlsLnRyaW0oKSkge1xuICAgICAgc2V0TmFtZUVycm9yKCdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIEVtYWlsIHZhbGlkYXRpb24gdXNpbmcgcmVnZXhcbiAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XG4gICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICBzZXROYW1lRXJyb3IoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRJc1Byb2Nlc3NpbmcodHJ1ZSk7XG4gICAgXG4gICAgLy8gU3RvcmUgdGhlIHBsYXllciBpbmZvIGluIGxvY2FsU3RvcmFnZSAoZm9yIHdoZW4gdGhlIHVzZXIgcmV0dXJucyBmcm9tIHBheW1lbnQpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBQbGF5ZXJOYW1lJywgcGxheWVyTmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBQbGF5ZXJFbWFpbCcsIGVtYWlsKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzUHJvY2Vzc2luZyxcbiAgICBwYXltZW50TWV0aG9kLFxuICAgIHBsYXllck5hbWUsXG4gICAgbmFtZUVycm9yLFxuICAgIGVtYWlsLFxuICAgIHNldFBheW1lbnRNZXRob2QsXG4gICAgc2V0UGxheWVyTmFtZSxcbiAgICBzZXROYW1lRXJyb3IsXG4gICAgc2V0RW1haWwsXG4gICAgcmVzZXRGb3JtLFxuICAgIGhhbmRsZVBheW1lbnQsXG4gICAgaGFuZGxlUGF5UGFsU3VjY2VzcyxcbiAgICBoYW5kbGVQYXlQYWxFcnJvcixcbiAgICBzZXRJc1Byb2Nlc3NpbmdcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ0b2FzdCIsInNlbmRQYXltZW50Q29uZmlybWF0aW9uRW1haWwiLCJ1c2VQYXltZW50SGFuZGxlciIsIm9uUGF5bWVudENvbXBsZXRlIiwiYW1vdW50IiwiaXNQcm9jZXNzaW5nIiwic2V0SXNQcm9jZXNzaW5nIiwicGF5bWVudE1ldGhvZCIsInNldFBheW1lbnRNZXRob2QiLCJwbGF5ZXJOYW1lIiwic2V0UGxheWVyTmFtZSIsIm5hbWVFcnJvciIsInNldE5hbWVFcnJvciIsImVtYWlsIiwic2V0RW1haWwiLCJyZXNldEZvcm0iLCJoYW5kbGVQYXlQYWxTdWNjZXNzIiwicGF5bWVudERldGFpbHMiLCJzdG9yZWROYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZEVtYWlsIiwic3VjY2VzcyIsImluZm8iLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImhhbmRsZVBheVBhbEVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlUGF5bWVudCIsInRyaW0iLCJlbWFpbFJlZ2V4IiwidGVzdCJdLCJtYXBwaW5ncyI6IkFBQ0EsU0FBU0EsUUFBUSxRQUFRLFFBQVE7QUFDakMsU0FBU0MsS0FBSyxRQUFRLFNBQVM7QUFDL0IsU0FBU0MsNEJBQTRCLFFBQVEscUJBQXFCO0FBT2xFLE9BQU8sTUFBTUMsb0JBQW9CLENBQUMsRUFBRUMsaUJBQWlCLEVBQUVDLE1BQU0sRUFBMEI7SUFDckYsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1AsU0FBUztJQUNqRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCxTQUFpQjtJQUMzRCxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsU0FBUztJQUM3QyxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsU0FBUztJQUUzQywwQkFBMEI7SUFDMUIsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdmLFNBQVM7SUFFbkMsTUFBTWdCLFlBQVk7UUFDaEJMLGNBQWM7UUFDZEUsYUFBYTtRQUNiRSxTQUFTO0lBQ1g7SUFFQSw4REFBOEQ7SUFDOUQsTUFBTUUsc0JBQXNCLENBQUNDLGlCQUFzQixJQUFJO1FBQ3JELCtCQUErQjtRQUMvQixNQUFNQyxhQUFhQyxhQUFhQyxPQUFPLENBQUMscUJBQXFCWDtRQUM3RCxNQUFNWSxjQUFjRixhQUFhQyxPQUFPLENBQUMsc0JBQXNCUDtRQUUvRFAsZ0JBQWdCO1FBQ2hCTixNQUFNc0IsT0FBTyxDQUFDO1FBRWQsc0RBQXNEO1FBQ3RELElBQUlELGFBQWE7WUFDZnBCLDZCQUE2QmlCLFlBQVlHLGFBQWFqQixRQUFRO1lBQzlESixNQUFNdUIsSUFBSSxDQUFDO1FBQ2I7UUFFQSxzREFBc0Q7UUFDdERKLGFBQWFLLE9BQU8sQ0FBQyxjQUFjTjtRQUNuQyxJQUFJRyxhQUFhRixhQUFhSyxPQUFPLENBQUMsZUFBZUg7UUFFckQsNkJBQTZCO1FBQzdCRixhQUFhTSxVQUFVLENBQUM7UUFDeEJOLGFBQWFNLFVBQVUsQ0FBQztRQUV4QnRCLGtCQUFrQmU7UUFDbEJIO0lBQ0Y7SUFFQSxNQUFNVyxvQkFBb0IsQ0FBQ0M7UUFDekJDLFFBQVFELEtBQUssQ0FBQyxrQkFBa0JBO1FBQ2hDckIsZ0JBQWdCO1FBQ2hCTixNQUFNMkIsS0FBSyxDQUFDO0lBQ2Q7SUFFQSxNQUFNRSxnQkFBZ0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQ3BCLFdBQVdxQixJQUFJLElBQUk7WUFDdEJsQixhQUFhO1lBQ2I7UUFDRjtRQUVBLGlCQUFpQjtRQUNqQixJQUFJLENBQUNDLE1BQU1pQixJQUFJLElBQUk7WUFDakJsQixhQUFhO1lBQ2I7UUFDRjtRQUVBLCtCQUErQjtRQUMvQixNQUFNbUIsYUFBYTtRQUNuQixJQUFJLENBQUNBLFdBQVdDLElBQUksQ0FBQ25CLFFBQVE7WUFDM0JELGFBQWE7WUFDYjtRQUNGO1FBRUFOLGdCQUFnQjtRQUVoQixpRkFBaUY7UUFDakZhLGFBQWFLLE9BQU8sQ0FBQyxrQkFBa0JmO1FBQ3ZDVSxhQUFhSyxPQUFPLENBQUMsbUJBQW1CWDtJQUMxQztJQUVBLE9BQU87UUFDTFI7UUFDQUU7UUFDQUU7UUFDQUU7UUFDQUU7UUFDQUw7UUFDQUU7UUFDQUU7UUFDQUU7UUFDQUM7UUFDQWM7UUFDQWI7UUFDQVU7UUFDQXBCO0lBQ0Y7QUFDRixFQUFFIn0=