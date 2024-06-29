import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: "Tanish Portfolio",
	authors: {
		name: "Tanish Singhal",
	},

	description:
		"Based in India. I'm a Full Stack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Tanish Portfolio",
		description:
			"Based in India. I'm a Full Stack developer passionate about building a modern web application that users love.",
		url: "http://localhost:3000/",
		siteName: "Tanish Portfolio",
		images: [
      {
        url: "/Portfolio Photo.png",
        width: 800,
        height: 600,
        alt: "Tanish Singhal",
      },
    ],
		type: "website",
	},
	keywords: ["Full Stack Developer", "Tanish Singhal", "Web Development", "Portfolio", "React", "Node.js", "JavaScript", "CSS", "HTML", "dailywebcoding"],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
