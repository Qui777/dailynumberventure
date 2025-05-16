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

  const amount = '2.00'; // Set your price here
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">Secure Payment</h2>

        <PayPalScriptProvider options={{ 'client-id': clientId }}>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            forceReRender={[amount]}
            fundingSource={undefined}
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
                alert('Payment completed by ' + details.payer.name?.given_name);
                onClose(); // close the modal
              });
            }}
            onError={(err) => {
              console.error('PayPal Checkout Error:', err);
              alert('There was an error processing your payment.');
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default PaymentModal;


















