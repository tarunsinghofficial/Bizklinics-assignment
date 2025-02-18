import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import Instagram from "../../../public/assets/instagram.svg";
import Facebook from "../../../public/assets/facebook.svg";
import Twitter from "../../../public/assets/twitter.svg";

export default function TeamCard({
  personProfile,
  personName,
  personProfession,
  personFacebookUrl,
  personInstagramUrl,
  personTwitterUrl,
}) {
  return (
    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm shadow-lg rounded-2xl border-none">
      <CardContent className="flex flex-col items-center text-center p-0">
        <div className="w-full h-72 relative rounded-t-xl overflow-hidden">
          <Image
            src={personProfile}
            layout="fill"
            objectFit="cover"
            alt="person"
          />
        </div>
        <div className="px-4 py-6">
          <div className="flex flex-col items-center justify-center gap-2 mt-4">
            <h3 className="text-lg font-semibold text-chart-3">{personName}</h3>
            <p className="text-sm text-chart-6">{personProfession}</p>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href={personFacebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Facebook} width={24} height={24} alt="facebook" />
            </a>
            <a
              href={personInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Instagram} width={24} height={24} alt="instagram" />
            </a>
            <a
              href={personTwitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Twitter} width={24} height={24} alt="twitter" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
