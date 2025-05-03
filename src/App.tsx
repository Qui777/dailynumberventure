import React from 'react';
import Index from './pages/Index';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const App = () => {
  return (
    <PayPalScriptProvider options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
      <Index />
    </PayPalScriptProvider>
  );
};

export default App;





  