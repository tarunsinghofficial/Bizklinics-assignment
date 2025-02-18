import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

import Instagram from "../../../public/assets/instagram.svg";
import Facebook from "../../../public/assets/facebook.svg";
import Twitter from "../../../public/assets/twitter.svg";
import Image from "next/image";

const Footer = () => {
  const footerSections = [
    {
      title: "Company Info",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Features",
      links: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      links: ["iOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ];

  return (
    <footer className="w-full bg-white py-8 px-4 space-y-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {footerSections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-bold text-chart-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href="#"
                    className="text-chart-6 hover:text-chart-6 text-sm font-semibold "
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-4">
          <h3 className="font-bold text-chart-3">Get In Touch</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-chart-5 flex-shrink-0" />
              <span className=" font-semibold text-sm text-chart-6">
                (480) 555-0103
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-chart-5 flex-shrink-0" />
              <span className=" font-semibold text-sm text-chart-6">
                4517 Washington Ave. Manchester, Kentucky 39495
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-chart-5 flex-shrink-0" />
              <span className="font-semibold text-sm text-chart-6">
                debra@exm.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-chart-6 mb-4 md:mb-0 font-semibold">
          Made With Love By Figmaland All Right Reserved
        </p>
        <div className="flex gap-5">
          <Link
            href="#"
            className="flex items-center gap-2 text-chart-5 hover:text-chart-3"
          >
            <Image src={Facebook} width={30} height={30} />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-chart-5 hover:text-chart-3"
          >
            <Image src={Instagram} width={30} height={30} />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-chart-5 hover:text-chart-3"
          >
            <Image src={Twitter} width={30} height={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
