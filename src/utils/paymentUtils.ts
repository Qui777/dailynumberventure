export function loadPayPalScript(clientId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.paypal) {
      resolve();
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
    script.onerror = () => {
      reject(new Error('Failed to load PayPal SDK script'));
    };

    document.body.appendChild(script);
  });
}
export const loadPayPalScript = (clientId: string) => {
  return new Promise<void>((resolve, reject) => {
    if (window.paypal) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        resolve();
      } else {
        reject(new Error('PayPal SDK failed to initialize'));
      }
    };
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });
};





