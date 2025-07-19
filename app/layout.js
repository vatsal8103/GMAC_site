import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {SessionWrapper} from "@/components/SessionWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GMAC-site",
  description: "This is a crowd funding plateform .",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}>
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[87vh]">
            {/* Remove bg-slate-950 from here */}
            <div className="relative h-full w-full">
              <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] text-white"></div>
            {children}
            </div>
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
