
import Footer from "@/components/Footer";
import ProfileHeader from "@/components/hide/ProfileHeader";
import ProfileSidebar from "@/components/hide/ProfileSidebar";
import { Fragment } from "react";

export default function ProfileLayout({ children }) {
    return (
        <Fragment>
            <ProfileHeader />

            <main className="w-full flex items-center justify-between gap-2">
                <ProfileSidebar />
                <section className="main w-[80%]">{children}  </section>
            </main>

            <Footer />
        </Fragment>
    )
}