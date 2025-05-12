import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">Secure Payment</h2>

        <PayPalScriptProvider options={{ "client-id": "ASNm-GmSDNshcCMrZrmefE5_t0i9pXycBwfofRKZ_DApG987TRhtzuluR6_gtu-q3wllmvq55710ALYw" }}>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            forceReRender={[amount]}
            fundingSource={undefined}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount.toString(),
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                alert(`Transaction completed by ${details.payer.name?.given_name}`);
                onClose();
              });
            }}
            onCancel={() => {
              alert('Payment cancelled');
              onClose();
            }}
            onError={(err) => {
              console.error('PayPal error:', err);
              alert('Payment failed');
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default PaymentModal;
















