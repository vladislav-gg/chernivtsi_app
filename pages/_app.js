import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";

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
