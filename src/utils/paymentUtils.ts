import { toast } from 'sonner';
import { Users } from 'lucide-react';
import React from 'react';

// Create success toast
export const showSuccessToast = () => {
  toast.success("Payment successful!");
};

// Create email confirmation toast
export const showEmailConfirmationToast = () => {
  toast.info('Check your email for payment confirmation');
};

// Create custom entry toast
export const showEntryToast = (playerName: string, gameRange: string, guessNumber: number, amount: number) => {
  toast.custom((t) => {
    if (!t) return null;

    const visible = typeof t === 'object' && t !== null && 'visible' in t 
      ? Boolean(t.visible) 
      : false;

    const animationClass = visible ? 'animate-enter' : 'animate-leave';

    return (
      <div className={`${animationClass} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                New Entry!
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {playerName} just entered the {gameRange} game with number #{guessNumber}
              </p>
              <p className="mt-1 text-xs text-primary font-medium">
                Entry fee: ${amount}.00
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }, {
    duration: 4000
  });
};

// Create error toast
export const showErrorToast = (message: string = "Payment failed. Please try again.") => {
  toast.error(message);
};

// Type-safe toast functions with translator
export const showPaymentSuccessToast = (t: ((key: string) => string) | null) => {
  const message = t?.('payment_success') ?? 'Payment successful!';
  toast.success(message);
};

export const showPaymentErrorToast = (t: ((key: string) => string) | null) => {
  const message = t?.('payment_error') ?? 'Payment failed!';
  toast.error(message);
};

