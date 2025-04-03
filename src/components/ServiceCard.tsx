
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PriceTag } from "./PriceTag";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  duration: string;
  price: number;
  note?: string;
}

export const ServiceCard = ({ icon, title, description, duration, price, note }: ServiceCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col border-gray-200 bg-white/90 backdrop-blur-sm rounded-xl group">
      <CardHeader className="pb-3">
        <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#5D9B89] to-[#3A6E5A] text-white transform transition-transform group-hover:scale-110 duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 relative inline-block pb-2">
          {title}
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#5D9B89] group-hover:w-full transition-all duration-300 rounded-full"></span>
        </h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-sm text-gray-600">
          <div className="flex justify-between mb-1">
            <span>Время:</span>
            <span className="font-medium">{duration}</span>
          </div>
          <div className="flex justify-between">
            <span>Стоимость:</span>
            <PriceTag price={price} />
          </div>
          {note && <p className="mt-2 text-xs text-gray-500">{note}</p>}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] hover:from-[#4A6D5C] hover:to-[#2D5542] text-white rounded-lg shadow-md shadow-[#5D9B89]/10 group-hover:shadow-lg group-hover:shadow-[#5D9B89]/20 transition-all duration-300">
          <a
            href="https://t.me/NeikaSparkBot"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            Записаться
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
