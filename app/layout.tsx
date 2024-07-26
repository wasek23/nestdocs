import { Inter as FontSans } from 'next/font/google';
import { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

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
	return <ClerkProvider
		appearance={{
			baseTheme: dark,
			variables: {
				colorPrimary: '#3371ff',
				fontSize: '16px',
			}
		}}>
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
	</ClerkProvider>;
};
export default RootLayout;