import Footer from "@/components/Footer";
import { Signika_Font } from "../layout";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Login() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <article>

            <section className="login-section w-full py-5">
              <div className="container mx-auto">
                <div className="login-area px-2 md:w-[70%] w-[95%] mx-auto bg-white shadow-md rounded-md p-5">  
                <SectionHeading heading={"Login"} paragraph={"Welcome back to KSTP (Khyber Students Testing Portal)! Log in to access your account, register for tests, review results, and track your progress. Join thousands of students enhancing their skills and knowledge with KSTP. Log in now to continue your journey towards academic excellence."} />
                    <div className="login-form">


                    </div>
                </div>
              </div>
            </section>

        </article>
      </main>
      <Footer />
    </>
  );
}
