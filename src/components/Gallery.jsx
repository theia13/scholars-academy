import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "./gallery-1.jpg",
    alt: "Extra curricular activities",
    title: "Beyond the Classroom",
    description:
      "Students engaging in diverse activities that foster creativity and teamwork",
    category: "Activities",
  },
  {
    src: "./gallery-2.jpg",
    alt: "Classroom Activities",
    title: "Interactive Learning",
    description: "Modern teaching methods that encourage active participation",
    category: "Academics",
  },
  {
    src: "./gallery-3.jpg",
    alt: "Computer Lab",
    title: "Digital Innovation",
    description:
      "State-of-the-art computer lab preparing students for the digital age",
    category: "Technology",
  },
  {
    src: "./gallery-4.jpeg",
    alt: "Science Experiments",
    title: "Hands-on Science",
    description: "Students conducting experiments in our advanced science labs",
    category: "Science",
  },
  {
    src: "./gallery-5.jpg",
    alt: "Cultural Activities",
    title: "Cultural Celebration",
    description: "Embracing diversity through cultural performances and events",
    category: "Culture",
  },
  {
    src: "./gallery-6.jpg",
    alt: "Outdoor Exploration",
    title: "Nature Connect",
    description:
      "Learning through outdoor activities and environmental awareness",
    category: "Outdoor",
  },
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6 md:px-12 mt-14">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Capturing Moments of Excellence
        </h2>
        <div className="h-1 w-24 bg-red-600 mx-auto" />
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Experience the vibrant life at Scholars Academy through our carefully
          curated gallery
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: hoveredIndex === index ? 0 : 20,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full mb-3">
                    {image.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
