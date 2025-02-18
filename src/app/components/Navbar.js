"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto flex items-center justify-between w-full py-4 bg-transparent px-6">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold text-chart-3">Brandname</h1>
        <ul className="hidden md:flex items-center gap-6">
          {["Home", "Product", "Pricing", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="text-chart-6 font-semibold hover:text-chart-3"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Button
          variant="none"
          className="border-none bg-transparent text-chart-5 px-6 py-3"
        >
          Login
        </Button>
        <Button className="bg-chart-5 text-white px-6 py-3 rounded-md shadow-md hover:bg-chart-5/80 flex items-center gap-2">
          JOIN US <ArrowRight size={20} />
        </Button>
      </div>

      {/* Mobile button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile dropdown */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col items-start gap-6 p-6`}
      >
        <button className="self-end" onClick={() => setIsOpen(false)}>
          <X size={30} />
        </button>

        <ul className="flex flex-col items-start gap-4">
          {["Home", "Product", "Pricing", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="text-chart-6 font-semibold hover:text-chart-3"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          variant="none"
          className="border-none bg-transparent text-chart-5 px-6 py-3 w-full text-left"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Button>
        <Button
          className="bg-chart-5 text-white px-6 py-3 rounded-md shadow-md hover:bg-chart-5/80 w-full flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          JOIN US <ArrowRight size={20} />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
