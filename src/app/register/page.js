import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CandidateRegisterationForm from "@/components/ui/forms/CandidateRegisterationForm";

import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <main className="min-h-screen">
        <Header />
        <article>

          <section className="register-section w-full py-5">
            <div className="container mx-auto">
              <div className="register-area px-2 md:w-[50%] w-[95%] mx-auto bg-white shadow-md rounded-md p-5">
                <SectionHeading heading={"Register Candidate"} paragraph={"Add your valid credientials "} />
                <ul className="list-decimal px-10">
                    <li>Enter your valid CNIC number or Form-B number </li>
                    <li>Enter your full name as per DMC  </li>
                    <li>Enter password atleast 5 characters/digits/etc  </li>
                    <li>Retype Password  </li>
                    <li> Click on regiser </li>
                    <li> Warit for redirecting  </li>
                </ul>
                <div className="register-form">


                  <CandidateRegisterationForm />

                  <div className="my-3 w-full flex items-center justify-between flex-wrap-reverse gap-1">
                    <p>Already have an account <Link className="text-blue-600 hover:underline" href={"/login"}>Login</Link></p>
                    <p> Any Help ? <Link className="text-blue-600 hover:underline" href={"/contactus"}>Contact us</Link></p>
                  </div>

                </div>
              </div>
            </div>
          </section>

        </article>
        <Footer />
      </main>
    </>
  );
}
