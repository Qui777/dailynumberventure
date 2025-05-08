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
  selectedRange,
}) => {
  if (!isOpen) return null;

  const amount = "2.00";
  const clientId = "YOUR-LIVE-CLIENT-ID"; // Replace with your actual live PayPal client ID

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">Pay with PayPal</h2>
        <p className="mb-2">Name: {username}</p>
        <p className="mb-2">Email: {email}</p>

        <div id="paypal-button-container">
          <PayPalScriptProvider options={{ 'client-id': clientId, currency: 'USD' }}>
            <PayPalButtons
              style={{ layout: 'vertical' }}
              forceReRender={[amount]}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{ amount: { value: amount } }],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(() => {
                  alert('✅ Payment successful!');
                  onClose();
                });
              }}
              onError={(err) => {
                console.error('❌ PayPal error:', err);
                alert('Something went wrong. Try again.');
              }}
            />
          </PayPalScriptProvider>
        </div>

        <button className="mt-4 text-sm text-gray-500" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;






