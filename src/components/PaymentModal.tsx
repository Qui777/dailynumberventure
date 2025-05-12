import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

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

  const amount = "2.00"; // Example price

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Pay with PayPal</h2>

        <PayPalScriptProvider
          options={{
            clientId: "ASNm-GmSDNshcCMrZrmefE5_t0i9pXycBwfofRKZ_DApG987TRzul...",
            currency: "USD",
          }}
        >
          <PayPalButtons
            style={{ layout: "vertical" }}
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
                alert("Payment successful! Thank you, " + details.payer.name?.given_name);
                onClose();
              });
            }}
            onError={(err) => {
              console.error("PayPal Error", err);
              alert("Payment failed. Please try again.");
            }}
          />
        </PayPalScriptProvider>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;










