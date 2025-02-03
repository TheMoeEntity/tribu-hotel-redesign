"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { sendReservation } from "@/actions/sendReservation";
import StyledFonts from "@/components/shared/StyledFonts";

export default function ReservationForm({ price }: { price: number }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Sending reservation...");

    try {
      const response = await sendReservation(data);
      if (response.success) {
        toast.success("Reservation sent successfully!", { id: toastId });
        reset();
      } else {
        toast.error("Failed to send reservation", { id: toastId });
      }
    } catch (error) {
      toast.error("An error occurred. Try again later.", { id: toastId });
    }
  };

  return (
    <div className="flex-1 w-full p-8 xl:p-16 border-black border">
      <div className="flex flex-col mb-10 xl:flex-row justify-between items-start md:items-center">
        {" "}
        <h2 className="text-4xl font-semibold mb-6">
          <StyledFonts
            fontFamily="Playfair Display"
            text="Reservation Form"
            color="black"
          />
        </h2>
        <p className="text-3xl text-[#C4A484] mb-4">
          <StyledFonts
            fontFamily="Playfair Display"
            text={`₦${price.toLocaleString()}/night`}
            color="inherit"
          />
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Check In</label>
            <input
              type="date"
              {...register("checkIn", {
                required: "Check-in date is required",
              })}
              className="w-full border-gray-400 bg-transparent border p-2 rounded"
            />
            {errors.checkIn && (
              <p className="text-red-500 text-sm">
                {String(errors.checkIn.message)}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Check Out
            </label>
            <input
              type="date"
              {...register("checkOut", {
                required: "Check-out date is required",
              })}
              className="w-full border-gray-400 bg-transparent border p-2 rounded"
            />
            {errors.checkOut && (
              <p className="text-red-500 text-sm">{`${errors.checkOut.message}`}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Guests</label>
            <select
              {...register("guests", {
                required: "Please select the number of guests",
              })}
              className="w-full border-gray-400 bg-transparent border p-2 rounded"
            >
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
            </select>
            {errors.guests && (
              <p className="text-red-500 text-sm">{`${errors.guests.message}`}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Children</label>
            <select
              {...register("children")}
              className="w-full border-gray-400 bg-transparent border p-2 rounded"
            >
              <option value="No Children">No Children</option>
              <option value="1 Child">1 Child</option>
              <option value="2 Children">2 Children</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            {...register("fullName", { required: "Full name is required" })}
            className="w-full border-gray-400 bg-transparent border p-2 rounded"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{`${errors.fullName.message}`}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border-gray-400 bg-transparent border p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{`${errors.email.message}`}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full border-gray-400 bg-transparent border p-2 rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{`${errors.phone.message}`}</p>
            )}
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="w-fit mx-auto bg-[#2A332E] text-white py-3 px-6 rounded hover:bg-[#364339] transition-colors"
          >
            MAKE RESERVATION
          </button>
        </div>
      </form>
    </div>
  );
}
