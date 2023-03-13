import Head from "next/head";

export default function Header() {
	return (
		<Head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>

			<title>Advice Generator</title>
		</Head>
	);
}
