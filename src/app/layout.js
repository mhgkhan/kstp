import { Source_Sans_3, Signika } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500",]
})

export const Signika_Font = Signika({
  subsets: ["latin"],
  weight: ["600", "700"]
})



export const metadata = {
  title: "KSTP || KHYBER STUDENT TESTING PORTAL",
  description: "KSTP is a student testing portal for Khyber students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.className} antialiased`}>
        <Header />
        <main className="min-h-screen bg-gray-100">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
