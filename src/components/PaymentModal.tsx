<PayPalScriptProvider options={{ "client-id": "ASNm-GmSDNshcCMrZrmefE5_t0i9pXycBwfofRKZ_DApG987TRhtzuluR6_gtu-q3wllmvq55710ALYw" }}>
  <PayPalButtons
    key={amount}
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

















