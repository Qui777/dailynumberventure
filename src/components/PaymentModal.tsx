import React, { useEffect } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { loadPayPalScript } from '@/utils/paymentUtils';
import {
  showPaymentSuccessToast,
  showPaymentErrorToast,
} from '@/utils/paymentToastUtils';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  email: string;
  selectedRange: [number, number];
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  username,
  email,
  selectedRange,
}) => {
  if (!isOpen) return null;

  const amount = 5.0;

  useEffect(() => {
    loadPayPalScript(import.meta.env.VITE_PAYPAL_CLIENT_ID)
      .then(() => {
        console.log('✅ PayPal SDK loaded');
      })
      .catch((err) => {
        console.error('❌ PayPal failed to load:', err);
        showPaymentErrorToast(null);
      });
  }, []);

  const handleApprove = (data: any, actions: any) => {
    return actions.order.capture().then(() => {
      showPaymentSuccessToast(null);
      onClose();
    });
  };

  const handleError = (err: any) => {
    console.error('❌ Payment error:', err);
    showPaymentErrorToast(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Complete Payment</h2>
        <p className="mb-4">
          You’re entering the {selectedRange[0]}–{selectedRange[1]} game.
        </p>
        <div className="mb-4">
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount.toFixed(2),
                    },
                  },
                ],
              })
            }
            onApprove={handleApprove}
            onError={handleError}
          />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
