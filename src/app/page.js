import Footer from "@/components/Footer";
import { Signika_Font } from "./layout";
import Header from "@/components/Header";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <article>
          <section className="w-full bg-cyan-900">
            <div className="container mx-auto flex md:flex-row-reverse flex-col items-start justify-between">
              <div className="md:p-0 p-2 flex md:flex-row-reverse flex-col items-start justify-between">
                {/* <object role="banner" aria-labelledby="label" data="Hero.svg" type="image/svg+xml"  className="md:w-[45%] w-[70%] mx-auto"></object> */}
                <Image loading="lazy" role="banner" aria-labelledby="label"  src="/Hero.svg" alt="KSTP Landscape Image" width={300} height={300} className="md:w-[45%] w-[70%] mx-auto"  />
                <div className="flex flex-col md:text-left md:items-start justify-center md:py-20 py-2 md:w-[50%] w-[97%] md:mx-0 mx-auto">
                  <h1 role="heading" className={`md:text-5xl text-4xl font-bold text-white md:text-left text-center ${Signika_Font.className}`}>WELCOME TO KSTP</h1>
                  <h2 className={`md:text-4xl text-3xl font-bold text-white md:text-left text-center ${Signika_Font.className}`}>KHYBER STUDENTS TESTING PORTAL</h2>
                  <p role="definition" className="md:text-lg text-sm my-3 md:text-justify text-center text-gray-200">
                    Welcome to KSTP (Khyber Students Testing Portal), the ultimate platform for students to register and apply for tests conducted by various learning academies. Our website offers a seamless registration process, allowing students to easily sign up and participate in a wide range of tests designed to assess and enhance their skills and knowledge. Join KSTP today and take the first step towards achieving your academic and professional goals.</p>
                  <div className="buttons-container md:mx-0 mx-auto flex items-start flex-wrap justify-start gap-4 md:mt-5 mt-3">
                    <Link role="link" aria-label="Login Candidate Link" href={"/login"} className="md:p-4 p-3 w-auto rounded-md bg-cyan-950 text-white hover:bg-white hover:text-cyan-950 border border-1 border-cyan-600 hover:border-cyan-950 font-bold "> Candidate Login </Link>
                    <Link role="link" aria-label="Check Open tests link" href={"/tests"} className="md:p-4 p-3 w-auto rounded-md bg-cyan-950 text-white hover:bg-white hover:text-cyan-950 border border-1 border-cyan-600 hover:border-cyan-950 font-bold mx-1"> Opened Tests </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-white mt-5">
            <div className="container mx-auto sm:p-2">
              <div className="covered-area py-5 md:px-0 px-2">

              <SectionHeading heading={"Recently We Have Done!"} paragraph={"Explore our recent achievements and milestones. We have successfully conducted over 3000 tests, registered more than 100 institutes, and enrolled over 5000 candidates. Our platform continues to grow, providing valuable resources and opportunities for students and educational institutions alike."} />
                <div className="covered-list flex items-center justify-center gap-5 mt-3 flex-wrap">

                  {
                    Array.from([{ count: "3000+", title: "Tests Conducted" }, { count: "100+", title: "Institutes Registered" }, { count: "5000+", title: "Candidates Registered" }]).map((item, index) => <div key={index} className="group relative bg-white hover:bg-cyan-900 cursor-pointer hover:border hover:border-white horver:border-1 hover:text-white shadow-md rounded-md p-3 m-2 w-[300px]">
                      <h3 className="text-4xl italic text-center">{item.count}</h3>
                      <h4 className="text-2xl text-center font-bold my-3">{item.title}</h4>
                    </div>
                    )
                  }

                </div>


              </div>
            </div>
          </section>

          <section className="services w-full bg-white">
            <div className="container mx-auto">
              <div className="services-area md:px-0 px-2">
                <SectionHeading heading={"Our Services"} paragraph={"Explore our comprehensive range of services designed to support students and educational institutions. From online tests that enhance problem-solving skills to streamlined registration processes for institutes and candidates, we provide the tools needed to succeed in today's competitive environment."} />
                <div className="services-container flex items-center justify-center flex-wrap gap-5">
                  {
                    Array.from([{ title: "Online Tests", description: "We provide a platform for online tests to help students test their skills and knowledge across various fields. It provides a wide range of challenges and exercises that are tailored to enhance problem-solving abilities and reinforce theoretical concepts." }, { title: "Institute Registration", description: "We provide a platform for institutes to register and conduct tests for their students. It provides a wide range of challenges and exercises that are tailored to enhance problem-solving abilities and reinforce theoretical concepts." }, { title: "Candidate Registration", description: "We provide a platform for candidates to register and take tests. It provides a wide range of challenges and exercises that are tailored to enhance problem-solving abilities and reinforce theoretical concepts." }]).map((item, index) => <div key={index} className="group relative bg-white hover:bg-cyan-900 cursor-pointer hover:border hover:border-white horver:border-1 hover:text-white shadow-md rounded-md p-3 m-2 w-[300px]">
                      <h3 className="text-2xl text-center font-bold my-3">{item.title}</h3>
                      <p className="text-sm text-justify">{item.description}</p>
                    </div>
                    )
                  }
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
