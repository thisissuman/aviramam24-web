"use client";
import React from "react";
import { motion } from "framer-motion";
import { feesAndCharges } from "../src/constant"; // Adjust path as per your project structure

const FeesAndCharges = () => {
  return (
    <div className="py-12 bg-[linear-gradient(to_bottom,#EAEEFE,#e3cc70)] overflow-x-clip">
      {/* Heading Section */}
      <h2 className="text-center text-3xl font-bold mb-6">Our Pricing Plans</h2>
      <div className="flex justify-center mb-8">
        <div className="w-24 h-[3px] bg-orange-400"></div>
      </div>
      <p className="text-center mb-12">
        Choose from our affordable packages for resilience coaching.
      </p>

      {/* Pricing Cards */}
      <div className="flex justify-center gap-8 flex-wrap md:flex-nowrap w-3/4 mx-auto md:w-full">
        {feesAndCharges.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "10px 100px 60px rgba(255, 87, 34, 0.5)",
            }}
            className="relative border border-black rounded-lg shadow-lg w-80 p-6 transition-all duration-300 ease-in-out bg-white hover:bg-black text-black hover:text-white"
          >
            {/* Gradient Background Effect */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  "conic-gradient(from 180deg, red, orange, yellow, green, blue, indigo, violet, red)",
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative z-10 p-6">
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-center">
                {plan.title}
              </h3>
              {/* Price */}
              <p className="text-center text-4xl font-bold">{plan.price}</p>
              {/* Description */}
              <p className="text-center mt-4 text-sm">{plan.description}</p>
              {/* Features List */}
              <ul className="mt-6 mb-6 space-y-3 text-center">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-gray-600 hover:text-white transition-all"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              {/* Button */}
              <div className="text-center">
                <button className="px-4 py-2 bg-white text-black rounded transition-colors duration-300 hover:bg-orange-500 hover:text-white border border-orange-500">
                  {plan.buttonLabel}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeesAndCharges;
