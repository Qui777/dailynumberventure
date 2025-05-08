export function loadPayPalScript(clientId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.paypal) {
      resolve();
      return;
    }

    const existingScript = document.querySelector(`script[src*="paypal.com/sdk/js"]`);
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve());
      existingScript.addEventListener('error', (err) => reject(err));
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        resolve();
      } else {
        reject(new Error('PayPal SDK loaded but window.paypal is undefined'));
      }
    };
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });
}







