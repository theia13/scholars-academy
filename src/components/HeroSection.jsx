import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const backgroundImages = ["/image1.jpg", "/image2.jpg"];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        key={currentImage}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 5, ease: "easeInOut" }} //
      ></motion.div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative flex flex-col justify-center items-center h-screen text-white w-full">
        <motion.h1
          className=" text-5xl lg:text-6xl font-serif font-bold text-center w-[40rem]"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Scholars Academy{" "}
        </motion.h1>

        <motion.p
          className="text-md lg:text-lg max-w-xl text-center mt-4"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          We nurture young minds by fostering knowledge, building strong
          character, and inspiring innovation. Our approach empowers students to
          think critically, explore creatively, and grow with confidence.
        </motion.p>

        <motion.div
          className="flex space-x-6 mt-6"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          <button className="border-2 text-white font-bold text-xl px-5 py-4 hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
          <button className="bg-[#B1040e] text-white font-bold text-xl px-5 py-4 hover:bg-red-700 transition duration-300">
            Apply Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
