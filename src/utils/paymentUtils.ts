export async function createPayPalOrder(amount: number): Promise<string> {
  const response = await fetch('/api/paypal/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) {
    throw new Error('Failed to create PayPal order');
  }

  const data = await response.json();
  return data.orderID;
}

export async function capturePayPalPayment(orderID: string): Promise<any> {
  const response = await fetch('/api/paypal/capture-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ orderID }),
  });

  if (!response.ok) {
    throw new Error('Failed to capture PayPal payment');
  }

  return await response.json();
}


