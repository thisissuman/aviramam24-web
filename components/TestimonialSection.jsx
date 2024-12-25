import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { testimonials } from "../src/constant"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Single Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative p-7 md:m-2 bg-[#34220b] text-white rounded-lg shadow-md w-4/5 md:mt-10">
      <motion.div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <img
          src={testimonial.image} // Use string path for dynamic images
          alt={testimonial.name}
          className="w-20 h-20 rounded-full border-2 border-orange-600"
        />
        <div className="absolute -bottom-2 right-2 bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-xl">❝</span>
        </div>
      </motion.div>
      <p className="mt-8 text-center philosopher-regular">
        {testimonial.description}
      </p>
      <p className="mt-8 text-center font-bold philosopher-bold">
        {testimonial.name}
      </p>
    </div>
  );
};

// Main Testimonial Section Component
const TestimonialSection = () => {
  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    speed: 7000, // Adjust this for smooth continuous movement
    cssEase: "linear", // For continuous, smooth motion
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[linear-gradient(to_bottom,#e3cc70,#EAEEFE)] overflow-x-clip py-12 items-center">
      <h2 className="text-center mb-2 text-3xl font-bold text-gray-900 philosopher-bold">
        What Our Customers Say
      </h2>
      {/* Orange Line */}
      <div className="flex justify-center mb-8">
        <div className="w-24 h-[3px] bg-orange-400"></div>
      </div>
      <div className="relative overflow-hidden md:pt-10 md:flex">
        <Slider {...sliderSettings} className="w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
