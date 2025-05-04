export async function createPayPalOrder(amount: number) {
  try {
    const response = await fetch('/api/paypal/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();
    return data.orderID;
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    throw error;
  }
}

export async function capturePayPalPayment(orderID: string) {
  try {
    const response = await fetch('/api/paypal/capture-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderID }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error capturing PayPal payment:', error);
    throw error;
  }
}

