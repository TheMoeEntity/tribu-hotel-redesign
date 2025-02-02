"use client";
import React from "react";
import { ButtonGroupProps, CarouselInternalState } from "react-multi-carousel";
import { ChevronRight, ChevronLeft, Ban } from "lucide-react";

interface CustomButtonGroupProps extends ButtonGroupProps {
  next?: () => void;
  previous?: () => void;
  carouselState?: CarouselInternalState;
}

const CustomSliderButtons: React.FC<CustomButtonGroupProps> = ({
  next,
  previous,
  carouselState,
}) => {
  if (!carouselState) {
    return null;
  }
  const { currentSlide, totalItems, slidesToShow } = carouselState;

  return (
    <div className="flex gap-5 w-full justify-end">
      <button
        onClick={() => previous?.()}
        disabled={currentSlide === 0}
        className={`bg-[#1E262B] ${currentSlide <= 0 ? "text-gray-700" : "text-white"} w-16 h-16 rounded-full flex justify-center items-center`}
      >
        <ChevronLeft className="inherit" size="30px" />
      </button>
      <button
        onClick={() => next?.()}
        disabled={currentSlide + slidesToShow >= totalItems}
        className="bg-[#1E262B] text-white w-16 h-16 rounded-full flex justify-center items-center"
      >
        {!(currentSlide + slidesToShow >= totalItems) ? (
          <ChevronRight className="text-white" size="30px" />
        ) : (
          <ChevronLeft size="20px" color="var(--main-alt)" />
        )}

        {/* <i
          className={`${currentSlide + slidesToShow >= totalItems ? "fas fa-ban text-[var(--main-alt)]" : "fas fa-angle-right"}`}
        ></i> */}
      </button>
    </div>
  );
};

export default CustomSliderButtons;
