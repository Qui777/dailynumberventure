import React, { useState } from 'react';
import PaymentModal from '@/components/PaymentModal';

const IndexPage: React.FC = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Daily Number Quest</h1>

      <button
        onClick={() => setIsPaymentOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Pay with PayPal
      </button>

      <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
    </div>
  );
};

export default IndexPage;



