// paymentUtils.ts

export function loadPayPalScript(clientId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).paypal) {
      resolve();
      return;
    }

    const existingScript = document.getElementById('paypal-sdk');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve());
      return;
    }

    const script = document.createElement('script');
    script.id = 'paypal-sdk';
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.onload = () => {
      if ((window as any).paypal) {
        resolve();
      } else {
        reject(new Error('PayPal SDK loaded but window.paypal is undefined'));
      }
    };
    script.onerror = () => {
      reject(new Error('Failed to load PayPal SDK'));
    };
    document.body.appendChild(script);
  });
}

