const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
              price: 'price_1Jh0QUHYFBwsT1lpqGRfmNpA',
              quantity: 1,
            },
          ],
          payment_method_types: [
            'card',
            'bacs_debit',
          ],
          mode: 'payment',
          payment_intent_data: {
            setup_future_usage: 'off_session',
          },
          success_url: 'http://localhost:3000/paymentSuccess',
          cancel_url: 'http://localhost:3000/paymentSuccess',
        });
        res.redirect(303, session.url);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }
  
  