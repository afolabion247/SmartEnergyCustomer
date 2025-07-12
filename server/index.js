
import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';

const app = express();
const stripe = Stripe('sk_test_51Rc9052UXiuJnTqdvAzSekXjATshU9GZdWPlGacqjVPOr8I0k1tOv9SicXqRyRXDjzhQ2POONjCswLbc9X0Uzk3m00bLsa5g2I');

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { priceId } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));
