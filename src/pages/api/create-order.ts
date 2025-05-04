export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
  
    const { amount } = req.body;
  
    const response = await fetch(`https://api-m.paypal.com/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64')}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: amount.toFixed(2),
            },
          },
        ],
      }),
    });
  
    const data = await response.json();
    res.status(200).json({ orderID: data.id });
  }
  