export default function LandingLayout({
	children,
	getStarted,
}: {
	children: React.ReactNode;
	getStarted: React.ReactNode;
}) {
	return (
		<>
			{children}
			{getStarted}
		</>
	);
}
