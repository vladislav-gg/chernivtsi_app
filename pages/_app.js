import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { store } from "../src/app/store";
import { Provider } from "react-redux";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<Provider store={store}>
			<SessionProvider session={session}>
				{Component.auth ? (
					<Auth>
						<Component {...pageProps} />
					</Auth>
				) : (
					<Component {...pageProps} />
				)}
			</SessionProvider>
		</Provider>
	);
}

function Auth({ children }) {
	// if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
	const { status } = useSession({ required: true });

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	return children;
}
