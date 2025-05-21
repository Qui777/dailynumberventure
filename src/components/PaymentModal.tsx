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

  const amount = '2.00'; // Change this if needed
  const hardcodedClientId ="ASNm-GmSDNshcCMrZrmefE5_t0i9pXycBwfofRKZ_DApG987TRhtzuluR6_gtu-q3wllmvq55710ALYw"

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">Secure Payment</h2>
        <p className="mb-2">Name: {username}</p>
        <p className="mb-4">Email: {email}</p>

        <PayPalScriptProvider options={{ 'client-id': hardcodedClientId, currency: 'USD' }}>
          <PayPalButtons
            style={{ layout: 'vertical', color: 'blue', shape: 'pill', label: 'pay' }}
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
              return actions.order?.capture().then(() => {
                alert('Payment successful!');
                onClose();
              });
            }}
          />
        </PayPalScriptProvider>

        <button className="mt-4 text-sm text-blue-500" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;


































