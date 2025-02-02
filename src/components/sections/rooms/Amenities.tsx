import {
  Users,
  Bell,
  SpadeIcon as Spa,
  Car,
  Wifi,
  UtensilsCrossed,
  Dumbbell,
  Briefcase,
  CableCarIcon as Elevator,
  Tv,
  PocketIcon as Pool,
  Shirt,
  Plane,
  Coffee,
  ShowerHeadIcon as Hairdryer,
} from "lucide-react";

export default function AmenitiesGrid() {
  const topRowAmenities = [
    { icon: Users, label: "Family Rooms" },
    { icon: Bell, label: "24-Hour Front Desk" },
    { icon: Spa, label: "Spa Center" },
    { icon: Car, label: "Parking Space" },
    { icon: Wifi, label: "High Speed Wifi" },
    { icon: UtensilsCrossed, label: "Restaurant & Bar" },
    { icon: Dumbbell, label: "Fitness Center" },
    { icon: Briefcase, label: "Luggage Storage" },
    { icon: Elevator, label: "Lift" },
    { icon: Tv, label: "LED TV" },
  ];

  const bottomRowAmenities = [
    { icon: Pool, label: "Swimming Pool" },
    { icon: Shirt, label: "Laundry & dry-cleaning" },
    { icon: Plane, label: "Airport Pickup & drop off" },
    { icon: Coffee, label: "Tea & Coffee Making facilities" },
    { icon: Hairdryer, label: "Hair Dryer" },
  ];

  return (
    <div className="container mx-auto px-0 py-8">
      {/* Top row - 10 items */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 mb-12">
        {topRowAmenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            <amenity.icon
              className="h-8 w-8 text-[#C4A484]"
              strokeWidth={1.5}
            />
            <span className="text-sm text-gray-700 font-medium">
              {amenity.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom row - 5 items */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 place-items-center">
        {bottomRowAmenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            <amenity.icon
              className="h-8 w-8 text-[#C4A484]"
              strokeWidth={1.5}
            />
            <span className="text-sm text-gray-700 font-medium">
              {amenity.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
