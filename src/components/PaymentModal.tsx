// Triggering redeploy with small update
import React, { useEffect } from 'react';
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
}) => {
  if (!isOpen) return null;

  const amount = '2.00';
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">Secure Payment</h2>
        <p className="mb-2">Name: {username}</p>
        <p className="mb-4">Email: {email}</p>

        <PayPalScriptProvider options={{ clientId }}>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: { value: amount },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order!.capture().then(() => {
                alert('✅ Payment successful!');
                onClose();
              });
            }}
            onError={(err) => {
              console.error('❌ Payment error:', err);
              alert('❌ Payment failed. Please try again.');
            }}
          />
        </PayPalScriptProvider>

        <button
          className="mt-4 text-sm text-gray-500 hover:underline"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;





