import Stripe from "stripe";
import { parseCookies, setCookie } from "nookies";


export const getServerSideProps = async () => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  
    let paymentIntent;

    const { paymentIntentId } = await parseCookies(ctx);
  
    if (paymentIntentId) {
      paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
  
      return {
        props: {
          paymentIntent
        }
      };
    }
  
}

const CheckoutPage = props => (
    <pre>{JSON.stringify(props, null, 2)}</pre>
  );

export default CheckoutPage;
  