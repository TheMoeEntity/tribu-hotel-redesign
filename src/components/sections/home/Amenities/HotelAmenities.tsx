import React from "react";
import {
  Users,
  Bell,
  Waves,
  Car,
  Wifi,
  UtensilsCrossed,
  Dumbbell,
  Briefcase,
  CableCarIcon as Elevator,
  Tv,
  FishIcon as Swimming,
  ShowerHead,
  Plane,
  Coffee,
  Scissors,
} from "lucide-react";

interface AmenityProps {
  icon: React.ReactNode;
  title: string;
}

const Amenity = ({ icon, title }: AmenityProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-3 text-[#C4A484]">
      {React.cloneElement(icon as React.ReactElement, {
        size: 32,
        strokeWidth: 1.5,
      })}
    </div>
    <h3 className="text-[#4A4A4A] text-xs font-medium leading-tight max-w-[120px]">
      {title}
    </h3>
  </div>
);

export default function HotelAmenities() {
  const amenities = [
    { icon: <Users />, title: "Family Rooms" },
    { icon: <Bell />, title: "24-Hour Front Desk" },
    { icon: <Waves />, title: "Spa Center" },
    { icon: <Car />, title: "Parking Space" },
    { icon: <Wifi />, title: "High Speed Wifi" },
    { icon: <UtensilsCrossed />, title: "Restaurant & Bar" },
    { icon: <Dumbbell />, title: "Fitness Center" },
    { icon: <Briefcase />, title: "Luggage Storage" },
    { icon: <Elevator />, title: "Lift" },
    { icon: <Tv />, title: "LED TV" },
    { icon: <Swimming />, title: "Swimming Pool" },
    { icon: <ShowerHead />, title: "Laundry & dry-cleaning" },
    { icon: <Plane />, title: "Airport Pickup & drop off" },
    { icon: <Coffee />, title: "Tea & Coffee Making facilities" },
    { icon: <Scissors />, title: "Hair Dryer" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
        {amenities.map((amenity, index) => (
          <Amenity key={index} {...amenity} />
        ))}
      </div>
    </>
  );
}
