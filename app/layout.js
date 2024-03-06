import "./globals.css";

export const metadata = {
  title: "WDC n93_w3b",
  description: "Web Development Competition 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
