import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BookingForm() {
  const [checkInDate, setCheckInDate] = useState("2025-01-28");
  const [checkOutDate, setCheckOutDate] = useState("2025-01-29");
  const [guests, setGuests] = useState("2 Adults");
  const [roomType, setRoomType] = useState("Deluxe Room");

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
        {/* Check In Date */}
        <div className="relative">
          <label className="block text-left text-sm font-medium text-gray-500 mb-2">
            CHECK IN
          </label>
          <div className="relative">
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full px-4 py-2.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 appearance-none cursor-pointer"
            />
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Check Out Date */}
        <div className="relative">
          <label className="block text-left text-sm font-medium text-gray-500 mb-2">
            CHECK OUT
          </label>
          <div className="relative">
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="w-full px-4 py-2.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 appearance-none cursor-pointer"
            />
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Guest Selection */}
        <div className="relative">
          <label className="block text-left text-sm font-medium text-gray-500 mb-2">
            GUEST
          </label>
          <div className="relative">
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-4 py-2.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 appearance-none cursor-pointer"
            >
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
              <option value="3 Adults">3 Adults</option>
              <option value="4 Adults">4 Adults</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Room Selection */}
        <div className="relative">
          <label className="block text-left text-sm font-medium text-gray-500 mb-2">
            ROOM
          </label>
          <div className="relative">
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full px-4 py-2.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 appearance-none cursor-pointer"
            >
              <option value="Standard Room">Standard Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Suite">Suite</option>
              <option value="Executive Suite">Executive Suite</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Book Now Button */}
        <button
          className="w-full bg-[#3C4A3E] hover:bg-[#2C382E] text-white py-7 px-4 rounded-lg transition-colors duration-200 font-medium"
          onClick={() => {
            // Handle booking logic here
            console.log({
              checkInDate,
              checkOutDate,
              guests,
              roomType,
            });
          }}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
}
