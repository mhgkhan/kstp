import Footer from "@/components/Footer";
import { Signika_Font } from "./layout";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min:p-0 p-2">
        <section className="w-full bg-cyan-900">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center py-20">
              <h1 className={`text-5xl font-bold text-white ${Signika_Font.className}`}>WELCOME TO KSTP</h1>
              <h2 className={`text-4xl font-bold text-white ${Signika_Font.className}`}>KHYBER STUDENTS TESTING PORTAL</h2>
              <p className="text-lg my-3 text-center text-gray-200">
                KSTP (Khyber Students Testing Portal) is a comprehensive platform designed to help students test their skills and knowledge across various fields. It provides a wide range of challenges and exercises that are tailored to enhance problem-solving abilities and reinforce theoretical concepts. By engaging with KSTP, learners can prepare effectively for exams and real-world applications through practical exercises and assessments. The platform is user-friendly and offers detailed feedback, enabling students to identify their strengths and areas for improvement. Overall, KSTP serves as an invaluable resource for students aiming to excel in their academic and professional pursuits.
              </p>

              <div className="buttons-container mx-auto flex items-center flex-wrap justify-center gap-4 mt-5">
                <Link href={"/login"} className="p-4 w-auto rounded-md hover:bg-cyan-950 bg-cyan-800 text-yellow-500 font-bold"> Candidate Login </Link>
                <Link href={"/tests"} className="p-4 w-auto rounded-md hover:bg-cyan-950 bg-cyan-800 text-yellow-500 font-bold"> Open Tests </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white mt-5 my-3">
          <div className="container mx-auto">
           <div className="institutes-area py-5">
           <h2 className="text-4xl text-black font-bold">Institutes with us</h2>
            <p className="text-gray-600 text-lg my-3">
              Bellow are the institues that are working with us to provide the best testing experience to their students.
            </p>
           </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
