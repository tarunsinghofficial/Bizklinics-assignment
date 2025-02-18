import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { LineChart } from "lucide-react";
import Image from "next/image";

export default function FeatureCard({ tileImage, tileTitle, tileDescription }) {
  return (
    <Card className="w-full max-w-[15em] flex flex-col items-start shadow-lg p-3 rounded-md border-none">
      <CardHeader className="flex items-center justify-center">
        <Image
          src={tileImage}
          className="w-14 h-14 p-3 bg-chart-5 text-white flex items-center justify-center rounded-lg"
          width={10}
          height={10}
          alt="feature"
        />
      </CardHeader>
      <CardContent className="flex flex-col items-start space-y-5 text-left">
        <h3 className="font-semibold text-lg text-gray-900 mt-4">
          {tileTitle}
        </h3>
        <div className="w-10 h-1 bg-red-500 mt-2"></div>
      </CardContent>
      <CardFooter>
        <p className="text-gray-500 text-sm mt-2">{tileDescription}</p>
      </CardFooter>
    </Card>
  );
}
