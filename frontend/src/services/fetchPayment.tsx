import { env } from '../helpers/env';
import { item } from '../types/Post';

export const paymentApi = async (item: item) => {
  try {
    const res = await fetch(`${env.urlBase}/purchase/create-checkout-session`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
