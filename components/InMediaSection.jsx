import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mediaItems } from "../src/constant";
import defaulthumb from "../src/assets/blog1.jpeg";

// Custom Arrow components
const CustomPrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      left: "10px",
      zIndex: 1,
      color: "orange",
    }}
    onClick={onClick}
  />
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      right: "10px",
      zIndex: 1,
      color: "orange",
    }}
    onClick={onClick}
  />
);

// Slider settings
const sliderSettings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};

const InMediaSection = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Function to extract YouTube thumbnail from video URL
  const getYouTubeThumbnail = (url) => {
    const videoId = url?.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  return (
    <div className="py-12 relative bg-[linear-gradient(to_bottom,#EAEEFE,#e3cc70)] overflow-x-clip">
      <h2 className="text-center text-3xl font-bold mb-2">In Media</h2>
      <div className="flex justify-center mb-8">
        <div className="w-24 h-[3px] bg-orange-400"></div>
      </div>
      <p className="text-center mb-6">
        Check out our latest media mentions, videos, and blogs on resilience
        coaching and mental health.
      </p>

      {/* Video Slider */}
      <Slider {...sliderSettings}>
        {mediaItems
          .filter((item) => item.type === "video")
          .map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="p-4"
              style={{ maxWidth: "350px", margin: "auto" }}
            >
              <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                {isMounted ? (
                  <ReactPlayer
                    url={item.url}
                    playing={playingVideo === item.id}
                    width="100%"
                    height="200px"
                    controls
                    light={getYouTubeThumbnail(item.url)}
                    onClick={() => setPlayingVideo(item.id)}
                  />
                ) : (
                  <img
                    src={getYouTubeThumbnail(item.url)}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
      </Slider>

      {/* Blogs Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-6">Blogs</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {mediaItems
            .filter((item) => item.type === "blog")
            .map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="w-[350px] p-4"
                style={{ margin: "auto" }}
              >
                <div
                  className="relative bg-gradient-to-b from-[#f4f3f2] to-[#faf8f1] shadow-lg rounded-lg overflow-hidden cursor-pointer transition duration-300 hover:shadow-2xl"
                  style={{
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.thumbnail || defaulthumb}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-black">
                        {item.title}
                      </h3>
                      <p className="text-sm text-black">{item.description}</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InMediaSection;
