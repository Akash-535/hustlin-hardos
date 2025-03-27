import "./globals.css";

export const metadata = {
  title: "Hustlin Hardos",
  description:
    "Hustlin' Hardos is a collection of 9,999 NFT characters on the Ethereum Blockchain,",
  openGraph: {
    title: "Hustlin Hardos",
    description:
      "Hustlin' Hardos is a collection of 9,999 NFT characters on the Ethereum Blockchain,",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
        alt: "meta-img",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
