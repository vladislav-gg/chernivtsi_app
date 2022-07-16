import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { persistor, store } from "../src/app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SessionProvider session={session}>
					{Component.auth ? (
						<Auth>
							<Component {...pageProps} />
						</Auth>
					) : (
						<Component {...pageProps} />
					)}
				</SessionProvider>
			</PersistGate>
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
