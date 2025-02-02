import { LucideProps } from "lucide-react";
import { StaticImageData } from "next/image";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface room {
  image: StaticImageData;
  name: string;
  price: number;
  guests: string;
  description: string;
  amenities: string[];
  others: {
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    label: string;
  }[];
}
