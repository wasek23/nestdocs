import { Inter as FontSans } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
});

export const metadata: Metadata = {
	title: 'NestDocs',
	description: 'Your go-to collaborative editor.'
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen font-sans antialiased',
					fontSans.variable
				)}
			>
				{children}
			</body>
		</html>
	);
};
export default RootLayout;