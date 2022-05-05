import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session} refetchInterval={0}>
			<Component {...pageProps} />
		</SessionProvider>
	);
}
