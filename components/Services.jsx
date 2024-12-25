import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { programmes } from "../src/constant";
import resi from "../src/assets/resi.jpeg";
import book from "../src/assets/book.jpeg";
import sign from "../src/assets/signup.jpeg";

const ServiceCard = ({ title, description, image }) => {
  return (
    <Tilt className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl sm:w-[300px] w-80 text-center hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Icon with circle border */}
      <div className="flex justify-center items-center mb-4">
        <motion.div
          className="w-20 h-20 rounded-full border-2 border-white flex justify-center items-center bg-white bg-opacity-20 shadow-lg"
          whileHover={{
            scale: [1, 1.1, 1.1, 1],
            rotate: [0, 10, -10, 0],
            borderRadius: ["50%", "50%", "50%", "50%"],
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: 0,
          }}
        >
          {/* Regular Image Component */}
          <img
            src={image}
            alt={title}
            width={56}
            height={56}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Title and description */}
      <div className="text-white">
        <h3 className="font-semibold text-[22px] mb-2">{title}</h3>
        <p className="text-gray-200 text-[14px]">{description}</p>
        <a
          href="#"
          className="text-white mt-4 inline-block border-b-2 border-transparent hover:border-white transition-colors duration-300"
        >
          READ MORE
        </a>
      </div>
    </Tilt>
  );
};

const Services = () => {
  return (
    <section className="text-center bg-[linear-gradient(to_bottom,#e3cc70,#EAEEFE)] overflow-x-clip">
      <h2 className="text-3xl font-bold text-gray-900 philosopher-bold">Most Popular Events</h2>
      <div className="w-20 h-1 bg-orange-400 mx-auto mt-2 mb-4 philosopher-regular"></div>
      <p className="max-w-2xl mx-auto">
        Check out the most in-demand events for your easy reference to book our
        services today!
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-8 w-3/4 mx-auto md:w-full">
        {programmes.map((programme, index) => (
          <ServiceCard
            key={programme.title}
            title={programme.title}
            description={programme.description}
            image={programme.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
