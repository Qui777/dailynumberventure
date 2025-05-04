export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
  
    const { orderID } = req.body;
  
    const response = await fetch(`https://api-m.paypal.com/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64')}`,
      },
    });
  
    const data = await response.json();
    res.status(200).json(data);
  }
  