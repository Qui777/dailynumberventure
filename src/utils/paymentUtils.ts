export async function createPayPalOrder(amount: number) {
  const response = await fetch('/api/paypal/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  });

  const data = await response.json();
  return data.orderID;
}

export async function capturePayPalPayment(orderID: string) {
  const response = await fetch('/api/paypal/capture-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderID }),
  });

  const data = await response.json();
  return data;
}



