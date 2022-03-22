const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function CreateStripeSession(req, res) {
	const { item } = req.body;

	const transformedItem = {
		price_data: {
			currency: "gbp",
			product_data: {
				images: [item.image],
				name: item.name,
			},
			unit_amount: item.price * 100,
		},
		description: item.description,
		quantity: item.quantity,
	};

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		line_items: [transformedItem],
		mode: "payment",
		success_url: "https://chernivtsi-theatre.vercel.app/paymentSuccess",
		cancel_url: "https://chernivtsi-theatre.vercel.app/paymentSuccess",
	});

	res.json({ id: session.id });
}
