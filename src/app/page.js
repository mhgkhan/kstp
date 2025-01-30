import Footer from "@/components/Footer";
import { Signika_Font } from "./layout";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <article>
          <section className="w-full bg-cyan-900">
            <div className="container mx-auto flex md:flex-row-reverse flex-col items-start justify-between">
              <div className="md:p-0 p-2 flex md:flex-row-reverse flex-col items-start justify-between">
                <object data="Hero.svg" type="image/svg+xml" className="md:w-[40%] w-[80%] mx-auto"></object>
                <div className="flex flex-col md:text-left md:items-start justify-center md:py-20 py-2">
                  <h1 className={`md:text-5xl text-4xl font-bold text-white md:text-left text-center ${Signika_Font.className}`}>WELCOME TO KSTP</h1>
                  <h2 className={`md:text-4xl text-3xl font-bold text-white md:text-left text-center ${Signika_Font.className}`}>KHYBER STUDENTS TESTING PORTAL</h2>
                  <p className="md:text-lg text-sm my-3 md:text-justify text-center text-gray-200">
                    KSTP (Khyber Students Testing Portal) is a comprehensive platform designed to help students test their skills and knowledge across various fields. It provides a wide range of challenges and exercises that are tailored to enhance problem-solving abilities and reinforce theoretical concepts. By engaging with KSTP, learners can prepare effectively for exams and real-world applications through practical exercises and assessments.
                  </p>

                  <div className="buttons-container md:mx-0 mx-auto flex items-start flex-wrap justify-start gap-4 md:mt-5 mt-3">
                    <Link href={"/login"} className="md:p-4 p-3 w-auto rounded-md hover:bg-cyan-950 bg-cyan-800 text-yellow-500 font-bold"> Candidate Login </Link>
                    <Link href={"/tests"} className="md:p-4 p-3 w-auto rounded-md hover:bg-cyan-950 bg-cyan-800 text-yellow-500 font-bold"> Open Tests </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-white mt-5 my-3">
            <div className="container mx-auto sm:p-2">
              <div className="institutes-area py-5">
                <h2 className="md:text-4xl text-3xl text-black font-bold">Institutes with us</h2>
                <p className="text-gray-600 text-lg my-3">
                  Bellow are the institues that are working with us to provide the best testing experience to their students.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
