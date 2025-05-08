import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

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

  const amount = '2.00';
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">Secure Payment</h2>
        <PayPalScriptProvider options={{ clientId }}>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                // Redirect after success
                window.location.href = "https://www.dailynumberquest.com/success";
              });
            }}
            onCancel={() => {
              alert('Payment cancelled.');
            }}
            onError={(err) => {
              console.error('PayPal error', err);
              alert('An error occurred during payment.');
            }}
          />
        </PayPalScriptProvider>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:text-gray-800"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;




