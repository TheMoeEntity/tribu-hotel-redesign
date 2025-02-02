import {
  BedDouble,
  Wifi,
  Tv,
  ShowerHead,
  Coffee,
  Utensils,
  Car,
  Dumbbell,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { LucideProps } from "lucide-react";
import deluxeRoom from "../../public/images/rooms/room5.jpg";
import executiveSuite from "../../public/images/rooms/room6.jpg";
import royalPenthouse from "../../public/images/rooms/1731506478_edbc75e2cbe498819a3f.jpg";
import oceanViewSuite from "../../public/images/rooms/1731504882_86bc470acc7cc58f6f0a.jpg";
import luxuryKing from "../../public/images/rooms/7aea0945.jpg";
import superiorQueen from "../../public/images/rooms/524e09de.jpg";
import familySuite from "../../public/images/rooms/room4.png";
import honeymoonSuite from "../../public/images/rooms/room3.jpg";
import presidentialSuite from "../../public/images/rooms/room.jpg";
import businessSuite from "../../public/images/rooms/room2.jpg";

export interface Room {
  image: StaticImageData;
  name: string;
  slug: string;
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

export const rooms: Room[] = [
  {
    image: deluxeRoom,
    slug: "deluxe-room",
    name: "Deluxe Room",
    price: 85_000,
    guests: "2 Adults",
    description:
      "A luxurious room with modern amenities and a comfortable king-size bed.",
    amenities: ["Free WiFi", "Smart TV", "Private Bathroom", "Room Service"],
    others: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: ShowerHead, label: "Private Bathroom" },
    ],
  },
  {
    image: executiveSuite,
    name: "Executive Suite",
    slug: "executive-suite",
    price: 120_000,
    guests: "2 Adults, 1 Child",
    description:
      "A spacious suite with an elegant living area and premium service.",
    amenities: ["Free WiFi", "Smart TV", "Minibar", "Balcony"],
    others: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Coffee, label: "Minibar" },
    ],
  },
  {
    image: royalPenthouse,
    name: "Royal Penthouse",
    slug: "royal-penthouse",
    price: 350_000,
    guests: "4 Adults",
    description:
      "An exclusive penthouse suite with breathtaking city views and top-tier luxury.",
    amenities: [
      "Private Jacuzzi",
      "Butler Service",
      "Smart TV",
      "VIP Lounge Access",
    ],
    others: [
      { icon: ShowerHead, label: "Jacuzzi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Utensils, label: "Butler Service" },
    ],
  },
  {
    image: oceanViewSuite,
    slug: "ocean-view-suite",
    name: "Ocean View Suite",
    price: 200_000,
    guests: "2 Adults",
    description:
      "A stunning suite with a private balcony and a mesmerizing ocean view.",
    amenities: ["Sea View", "Free WiFi", "Luxury Bathtub", "Room Service"],
    others: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: ShowerHead, label: "Luxury Bathtub" },
      { icon: Car, label: "Free Parking" },
    ],
  },
  {
    image: luxuryKing,
    name: "Luxury King Room",
    slug: "luxury-king-room",
    price: 95_000,
    guests: "2 Adults",
    description:
      "A comfortable and elegant room with a king-size bed and premium facilities.",
    amenities: ["Smart TV", "Private Balcony", "Room Service", "Free WiFi"],
    others: [
      { icon: Tv, label: "Smart TV" },
      { icon: Wifi, label: "Free WiFi" },
      { icon: ShowerHead, label: "Private Bathroom" },
    ],
  },
  {
    image: superiorQueen,
    name: "Superior Queen Room",
    slug: "superior-queen-room",
    price: 75_000,
    guests: "2 Adults",
    description:
      "A cozy room designed for comfort with a queen-size bed and modern decor.",
    amenities: ["Smart TV", "Minibar", "Free WiFi", "24/7 Room Service"],
    others: [
      { icon: Tv, label: "Smart TV" },
      { icon: Wifi, label: "Free WiFi" },
      { icon: Coffee, label: "Minibar" },
    ],
  },
  {
    image: familySuite,
    name: "Family Suite",
    slug: "family-suite",
    price: 180_000,
    guests: "4 Adults, 2 Children",
    description:
      "A spacious family-friendly suite with multiple rooms and amenities for all.",
    amenities: ["Smart TV", "Kids Play Area", "Dining Table", "Minibar"],
    others: [
      { icon: Tv, label: "Smart TV" },
      { icon: Utensils, label: "Dining Table" },
      { icon: Car, label: "Free Parking" },
    ],
  },
  {
    image: honeymoonSuite,
    name: "Honeymoon Suite",
    price: 250_000,
    guests: "2 Adults",
    slug: "honey-moon-room",
    description:
      "A romantic and luxurious suite designed for newlyweds with a breathtaking view.",
    amenities: [
      "Jacuzzi",
      "Candlelit Dinner",
      "Private Balcony",
      "Room Service",
    ],
    others: [
      { icon: ShowerHead, label: "Jacuzzi" },
      { icon: Utensils, label: "Candlelit Dinner" },
      { icon: Wifi, label: "Free WiFi" },
    ],
  },
  {
    image: presidentialSuite,
    slug: "presidential-suite",
    name: "Presidential Suite",
    price: 500_000,
    guests: "6 Adults",
    description:
      "A world-class suite offering luxury, privacy, and top-tier services for VIPs.",
    amenities: [
      "Private Pool",
      "Helipad Access",
      "Butler Service",
      "Private Bar",
    ],
    others: [
      { icon: Dumbbell, label: "Private Gym" },
      { icon: Car, label: "Private Chauffeur" },
      { icon: Utensils, label: "Butler Service" },
    ],
  },
  {
    image: businessSuite,
    slug: "business-suite",
    name: "Business Suite",
    price: 150_000,
    guests: "2 Adults",
    description:
      "A stylish and well-equipped suite designed for business travelers with workspace.",
    amenities: ["Free WiFi", "Workspace", "Conference Room Access", "Minibar"],
    others: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Coffee, label: "Minibar" },
    ],
  },
];
