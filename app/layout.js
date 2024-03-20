import "./globals.css";

export const metadata = {
  title: "vijay react",
  description: "this is the beginner website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
