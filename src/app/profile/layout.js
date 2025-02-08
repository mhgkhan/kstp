
import Footer from "@/components/Footer";
import ProfileHeader from "@/components/hide/ProfileHeader";
import ProfileSidebar from "@/components/hide/ProfileSidebar";

export default function ProfileLayout({ children }) {
    return (
        <main style={{height:"100vh !important"}}>
            <ProfileHeader />
            <div className="w-full h-full flex items-start justify-between gap-2l">
                <ProfileSidebar />
                <section className="w-full h-full p-2">{children}  </section>
            </div>
            <Footer />
        </main>
    )
}

