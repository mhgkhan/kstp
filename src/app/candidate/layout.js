import Footer from "@/components/Footer";
import ProfileHeader from "@/components/hide/ProfileHeader";
import CandidateProfileSidebar from "@/components/hide/CandidateProfileSidebar";
import { cookies } from "next/headers";
import { decrCandidateToken } from "@/utils/tokens/CandidateTokenProcesses";

export default async function ProfileLayout({ children }) {
    const candidateCookies = await cookies();
    const token = candidateCookies.get("CANDIDATEAUTHTOKEN");

    const decry = decrCandidateToken(token.value);
    // console.log(decry)


    return (
        <main className="min-h-screen">
            <ProfileHeader name={decry.name} />
            <div className="w-full h-full flex items-start justify-between gap-2l">
                <CandidateProfileSidebar />
                <section className="w-full h-full p-2">{children}  </section>
            </div>
            <Footer />
        </main>
    )
}