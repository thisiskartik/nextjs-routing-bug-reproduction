import Link from "next/link";

export default function HomePage() {
	return (
		<main>
			<p>Home Page</p>
			<Link href="/signup">Sign Up</Link>
		</main>
	);
}
