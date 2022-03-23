import { getSession } from "next-auth/client";

export default function Dashboard({ user }) {
	return (
		<div>
			<h1>Dashboard</h1>
			<p>Welcome {user.email}</p>
		</div>
	);
}

export async function getServerSideProps(ctx) {
	const session = await getSession(ctx);
	//if no session found(user hasn’t logged in)
	if (!session) {
		return {
			redirect: {
				destination: "/", //redirect user to homepage
				permanent: false,
			},
		};

		return {
			props: {
				user: session.user,
			},
		};
	}
}
