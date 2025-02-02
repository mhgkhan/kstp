import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/ui/forms/Input";
import SubmitButton from "@/components/ui/forms/SubmitButton";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { FaKey, FaUser } from "react-icons/fa";

export default function Login() {
  return (
    <>
      <main className="min-h-screen">
        <Header />
        <article>

          <section className="login-section w-full py-5">
            <div className="container mx-auto">
              <div className="login-area px-2 md:w-[50%] w-[95%] mx-auto bg-white shadow-md rounded-md p-5">
                <SectionHeading heading={"Login"} paragraph={"Welcome back to KSTP (Khyber Students Testing Portal)! Log in to access your account, register for tests, review results, and track your progress. Join thousands of students enhancing their skills and knowledge with KSTP. Log in now to continue your journey towards academic excellence."} />
                <div className="login-form">

                  <form className="my-1">
                    <Input Icon={FaUser} type={'text'} name={'cnic'} required={true} placeholder={'Enter CNIC/Form-B'} />
                    <Input Icon={FaKey} type={'password'} name={'password'} required={true} placeholder={'Password'} />
                    <SubmitButton loading={false} loadingText={'Logging..'} text={"Login"} key={1} />
                  </form>

                  <div className="my-3 w-full flex items-center justify-between flex-wrap-reverse gap-1">
                    <p>Not have an account <Link className="text-blue-600 hover:underline" href={"/"}>Signup</Link></p>
                    <Link className="text-blue-600 hover:underline" href={"/"}>Forget Password</Link>
                  </div>

                  <div className="or flex items-center justify-center gap-2 w-full">
                    <hr className="h-[2px] rounded-full bg-gray-400 w-full" />
                    OR
                    <hr className="h-[2px] rounded-full bg-gray-400 w-full" />
                  </div>

                  <Link href={'/'} className="p-3 block text-center text-lg text-white font-bold bg-cyan-950 w-full my-2 rounded-md hover:bg-cyan-700">Institute Login </Link>
                  {/* <Link href={'/'} className="p-3 block text-center text-lg text-white font-bold bg-cyan-950 w-full my-2 rounded-md hover:bg-cyan-700">Admin Login </Link> */}


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
