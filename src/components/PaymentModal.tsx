import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { createPayPalOrder, capturePayPalPayment } from '@/utils/paymentUtils';
import { showPaymentSuccessToast, showPaymentErrorToast } from '@/utils/paymentUtils';

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-bold mb-4">Complete Your Payment</h2>

        <div className="mt-4">
          <p className="mb-2">Username: {username}</p>
          <p className="mb-2">Email: {email}</p>
          <p className="mb-4">Range: {selectedRange[0]} - {selectedRange[1]}</p>

          <PayPalScriptProvider options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || '' }}>
            <PayPalButtons
              style={{ layout: 'vertical' }}
              createOrder={async () => {
                const orderId = await createPayPalOrder(amount);
                return orderId;
              }}
              onApprove={async (data) => {
                await capturePayPalPayment(data.orderID);
                showPaymentSuccessToast();
                onClose();
              }}
              onError={(err) => {
                console.error('PayPal Checkout Error:', err);
                showPaymentErrorToast();
              }}
            />
          </PayPalScriptProvider>
        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;

