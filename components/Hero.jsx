import React, { useState, useEffect } from "react";
import { content } from "../src/constant";
import resi from "../src/assets/resi.jpeg";
import book from "../src/assets/book.jpeg";
import sign from "../src/assets/signup.jpeg";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useSelector } from "react-redux";
const Hero = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [blurText, setBlurText] = useState(false);

  const [showConfetti, setShowConfetti] = useState(true);

  const { width, height } = useWindowSize(); // Dynamic window size for Confetti
  const user = useSelector((state) => state.user); // Fetch user from Redux
  

  useEffect(() => {
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const defaultTitle = "Pathway to Productivity";
  const defaultDescription =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error modi fugit doloremque optio?";

  const { title, description } = hoveredImage
    ? content[hoveredImage]
    : { title: defaultTitle, description: defaultDescription };

  const handleHoverStart = (image) => {
    setBlurText(true);
    setTimeout(() => {
      setHoveredImage(image);
      setBlurText(false);
    }, 300);
  };

  return (
    <section className=" md:pt-5 md:pb-10 bg-[linear-gradient(to_bottom,#EAEEFE,#e3cc70)] overflow-x-clip">
      {/* Confetti and Welcome Message */}
      {user?.user?.firstName && showConfetti && (
        <Confetti width={width} height={height} numberOfPieces={300} />
      )}
      {user?.user?.firstName && (
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-blue-800">
            Welcome, {user?.user?.firstName}!
          </h2>
        </div>
      )}
      <div className="container mx-auto pt-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Text Content */}
          <div className="md:w-[478px] mb-56 ml-10">
            <h1
              className={`text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 transition-all duration-300 ${
                blurText ? "blur-sm opacity-50" : "blur-none opacity-100"
              }`}
            >
              {title}
            </h1>
            <p
              className={`text-xl text-[#010D3E] tracking-tight mt-6 transition-all duration-300 ${
                blurText ? "blur-sm opacity-50" : "blur-none opacity-100"
              }`}
            >
              {description}
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">
                Book a consultation now
              </button>
              <button className="btn btn-text hidden md:block">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Side - Stacked Images with Hover Effect */}
          <div className="-mt-28 md:mt-0 md:h-[648px] md:flex-1 relative mx-auto md:ml-20 items-center">
            <img
              src={resi}
              alt="Resilience Image"
              className={`md:absolute md:h-[300px] md:w-auto md:max-w-none md:top-0 md:left-80 rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out ${
                hoveredImage === "imageOne" ? "z-20 scale-110" : "z-10"
              }`}
              onMouseEnter={() => handleHoverStart("imageOne")}
              onMouseLeave={() => setHoveredImage(null)}
            />

            <img
              src={book}
              alt="Book Image"
              className={`md:absolute md:h-[300px] md:w-auto md:max-w-none md:top-40 md:left-60 rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out ${
                hoveredImage === "imageTwo" ? "z-20 scale-110" : "z-10"
              }`}
              onMouseEnter={() => handleHoverStart("imageTwo")}
              onMouseLeave={() => setHoveredImage(null)}
            />

            <img
              src={sign}
              alt="Sign Up Image"
              className={`md:absolute md:h-[300px] md:w-auto md:max-w-none md:top-10 md:left-100 rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out ${
                hoveredImage === "imageThree" ? "z-20 scale-110" : "z-10"
              }`}
              onMouseEnter={() => handleHoverStart("imageThree")}
              onMouseLeave={() => setHoveredImage(null)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
