import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ওহীর সূচনা অধ্যায় - সহিহ বুখারি । iHadis.com",
  description: "ihadis.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            {/* favicon */}
            <link rel="icon" href="/icon/home-logo.ico"/>
            {/* iconify */}
            <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
        </head>
        <body className={inter.className}>{children}</body>
    </html>
  );
}
