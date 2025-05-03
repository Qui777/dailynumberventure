import React, { useState } from 'react';
import PaymentModal from '@/components/PaymentModal';

const Index = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selectedRange, setSelectedRange] = useState<[number, number]>([1, 100]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome to Daily Number Quest</h1>
      <p className="mb-4">Test your luck and intuition with today’s number!</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 border p-2 w-full"
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 border p-2 w-full"
      />

      <button
        onClick={() => setIsPaymentModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Start Game
      </button>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        username={username}
        email={email}
        selectedRange={selectedRange}
      />
    </div>
  );
};

export default Index;



