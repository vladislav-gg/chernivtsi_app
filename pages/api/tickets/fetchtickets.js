import data from "./data.json";

export function getTickets() {
	return data;
}

export default function handler(req, res) {
	if (req.method !== "GET") {
		res.setHeader("Allow", ["GET"]);
		res.status(405).json({ message: `Method ${req.method} is not allowed` });
	} else {
		const tickets = getTickets();
		res.status(200).json(tickets);
	}
}
