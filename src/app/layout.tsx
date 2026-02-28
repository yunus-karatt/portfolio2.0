import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yunus Karatt | Lead Frontend Developer",
  description: "Portfolio of Yunus Karatt, a Lead Frontend Developer specializing in the MERN stack with extensive experience in enterprise cloud platforms and web3.",
  keywords: ["Frontend Developer", "Lead Developer", "MERN Stack", "React", "Next.js", "Portfolio", "Software Engineering", "Yunus Karatt"],
  authors: [{ name: "Yunus Karatt" }],
  openGraph: {
    title: "Yunus | Lead Frontend Developer",
    description: "Portfolio of Yunus, a Lead Frontend Developer specializing in the MERN stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <footer className="py-20 border-t border-border/40 bg-muted/20">
              <div className="container mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-black tracking-tighter">CONNECT.</h3>
                  <div className="flex flex-col gap-3 text-muted-foreground">
                    <a href="tel:9995868047" className="hover:text-foreground transition-colors">+91 9995868047</a>
                    <a href="mailto:karattyunus@gmail.com" className="hover:text-foreground transition-colors">karattyunus@gmail.com</a>
                  </div>
                </div>
                <div className="space-y-6 md:text-right">
                  <h3 className="text-2xl font-black tracking-tighter">SOCIALS.</h3>
                  <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    <Link href="https://github.com/yunus-karatt" target="_blank" className="hover:text-foreground transition-all underline decoration-transparent hover:decoration-primary/50 underline-offset-8">GitHub</Link>
                    <Link href="https://www.linkedin.com/in/yunus-karatt/" target="_blank" className="hover:text-foreground transition-all underline decoration-transparent hover:decoration-primary/50 underline-offset-8">LinkedIn</Link>
                    <Link href="https://x.com/yyas404" target="_blank" className="hover:text-foreground transition-all underline decoration-transparent hover:decoration-primary/50 underline-offset-8">X / Twitter</Link>
                    <Link href="https://leetcode.com/u/Yunus_Karatt/" target="_blank" className="hover:text-foreground transition-all underline decoration-transparent hover:decoration-primary/50 underline-offset-8">LeetCode</Link>
                  </div>
                </div>
              </div>
              <div className="container mx-auto px-8 md:px-12 mt-20 pt-8 border-t border-border/40 text-muted-foreground text-[10px] font-bold uppercase tracking-[0.3em] flex justify-between items-center">
                <span>© {new Date().getFullYear()} Yunus Karatt</span>
                <span className="opacity-50">Crafted with Precision.</span>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
