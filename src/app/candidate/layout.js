import { sourceSans3 } from "../layout";


export default async function CandidateLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${sourceSans3.className} antialiased`}>
                <main className="min-h-screen bg-gray-100">
                    <div className="container mx-auto">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}
