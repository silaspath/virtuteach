import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIRTUTEACH",
  description: "The micro teaching platform for teachers and students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
          <footer className="bg-slate-50 font-sans pt-4">
            <div className="DeveloperText w-full text-white flex pb-8">
              <Link
                href={"https://silaspath.com"}
                className="bg-slate-700 mx-auto rounded-lg p-2 text-sm"
              >
                Powered by <span className="font-semibold">Silas Path</span>
              </Link>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
