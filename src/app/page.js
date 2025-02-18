"use client";

import Image from "next/image";
import hero from "../../public/assets/hero-cover-1.png";
import { Button } from "@/components/ui/button";
import FeatureCard from "./components/FeatureCard";

import Telescope from "../../public/assets/telescope.svg";
import Blackboard from "../../public/assets/blackboard.svg";
import { ChevronRight } from "lucide-react";
import TeamCard from "./components/TeamCard";

import User1 from "../../public/assets/user-cover-1.png";
import User2 from "../../public/assets/user-cover-2.png";
import User3 from "../../public/assets/user-cover-3.png";
import User4 from "../../public/assets/user-cover-4.png";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("Subscribed successfully!");
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>
      <main className="flex flex-col w-full gap-6">
        {/*  Hero section */}
        <section className="min-h-screen bg-chart-1 flex flex-row items-center justify-center py-16 px-6 md:px-12 lg:px-24 relative">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center gap-3 text-center md:text-left">
              <span className="text-chart-5 text-md font-medium tracking-wide">
                Welcome
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-wide font-bold text-chart-3 mt-3">
                Best Learning <br className="hidden md:block" /> Opportunities
              </h1>
              <p className="text-chart-6 text-lg md:text-xl mt-4 tracking-wide">
                Our goal is to make online <br className="hidden md:block" />
                education work for everyone.
              </p>
              {/* Buttons */}
              <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
                <Button className="bg-chart-5 text-white px-9 py-4 md:py-6 rounded-md shadow-md hover:bg-chart-5/80 w-full md:w-auto">
                  Join Us
                </Button>
                <Button
                  variant="outline"
                  className="border-chart-5 bg-transparent text-chart-5 px-9 py-4 md:py-6 rounded-md hover:bg-chart-5/20 w-full md:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:absolute lg:absolute bottom-0 right-0">
              <Image
                src={hero}
                alt="Hero Image"
                width={2000}
                height={2000}
                className="object-cover w-full max-w-[400px] md:max-w-[500px] lg:max-w-[800px] xl:max-w-[1200px]"
              />
            </div>
          </div>
        </section>
        {/* Packages section */}
        <section className="bg-white flex flex-row items-center justify-center py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col justify-center items-start gap-6">
              <div className="w-40 h-2 bg-red-500 mt-2"></div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold text-chart-3 mt-3">
                Approdable Packages
              </h1>
              <p className="text-chart-6 text-lg mt-4 tracking-wide max-w-md">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
              <a
                href="#packages"
                className="flex justify-center items-center font-bold gap-[3px] text-chart-5 hover:cursor-pointer hover:gap-[5px] duration-200 transition-all"
              >
                Learn more{" "}
                <span>
                  {" "}
                  <ChevronRight size={30} />{" "}
                </span>
              </a>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row gap-6">
              <FeatureCard
                tileImage={Telescope}
                tileTitle="Expert instruction"
                tileDescription="The gradual accumulation of information about"
              />
              <FeatureCard
                tileImage={Blackboard}
                tileTitle="Certified Teacher"
                tileDescription="The gradual accumulation of information about"
              />
            </div>
          </div>
        </section>
        {/* Team section */}
        <section className="bg-white flex flex-col items-center justify-center py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col items-start mb-12">
              <span className="text-chart-5 text-md font-medium tracking-wide">
                Team
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-4xl tracking-wide font-bold text-chart-3 mt-3">
                Get Quality Education
              </h1>
              <p className="text-chart-6 text-lg mt-4 tracking-wide">
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <div className="w-full overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 w-max px-2">
                {[User1, User2, User3, User4, User1, User2, User3, User4].map(
                  (user, index) => (
                    <div key={index} className="flex-shrink-0 w-[300px]">
                      <TeamCard
                        personProfile={user}
                        personName="Julian Jameson"
                        personProfession="Profession"
                        personFacebookUrl="#"
                        personInstagramUrl="#"
                        personTwitterUrl="#"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter section */}
        <section className="bg-chart-1 flex flex-row items-center justify-center py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col justify-center items-center gap-20">
            <div className="flex flex-col justify-center items-center gap-2 text-center">
              <span className="text-chart-5 text-md font-medium tracking-wide">
                Newsletter
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-4xl tracking-wide font-bold text-chart-3 mt-3">
                Watch our Courses
              </h1>
              <p className="text-chart-6 text-lg mt-4 tracking-wide">
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row w-full lg:w-3/5 items-center">
              <Input
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-6 px-4 rounded-sm bg-chart-6/2"
              />
              <Button
                onClick={handleSubscribe}
                className="bg-chart-5 text-white px-9 py-6 rounded-sm shadow-md hover:bg-chart-5/80"
              >
                Subscribe
              </Button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
