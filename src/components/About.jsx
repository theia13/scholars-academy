import { motion } from "framer-motion";
import SchoolBg from "../../public/SchoolBg.jpg";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideIn = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeIn}
            className="space-y-8"
          >
            <div>
              <motion.h1
                className="text-5xl font-semibold text-gray-900"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                Welcome to{" "}
                <span className="font-extrabold text-[#B1040E]">Scholars</span>
              </motion.h1>

              <motion.div
                className="mt-2 h-1 w-20 bg-[#B1040E]"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>

            <motion.p
              className="text-lg leading-relaxed text-gray-700"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              Founded with a vision to inspire excellence, Scholars Academy
              takes pride in fostering a dynamic learning environment where
              students achieve remarkable{" "}
              <span className="text-[#B1040E] font-semibold underline">
                academic success
              </span>
              . Our holistic approach balances rigorous academics with diverse
              co-curricular opportunities, shaping future leaders and innovative
              thinkers.
            </motion.p>

            <motion.blockquote
              className="text-lg italic text-gray-700 border-l-4 border-[#B1040E] pl-6 py-2 bg-white/50 rounded-r-lg shadow-md"
              variants={fadeIn}
              transition={{ delay: 0.6 }}
            >
              <p className="mb-4">
                "Despite facing challenges, our students have thrived in an
                engaging and supportive environment. They have built meaningful
                connections, developed essential skills, and discovered their
                true potential. Scholars Academy truly nurtures young minds for
                a brighter future."
              </p>
              <footer className="text-[#B1040E] font-medium">
                - Parent of Scholars Academy students
              </footer>
            </motion.blockquote>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
            transition={{ duration: 1 }}
            className="relative  lg:block  lg:pl-20 "
          >
            <div className="absolute -top-0 -right-20 lg:w-96 lg:h-96  bg-[#B1040E]/10 rounded-full blur-3xl " />
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "zoom", stiffness: 300 }}
            >
              <img
                src={SchoolBg}
                alt="Scholars Academy"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute -bottom-10 lg:-left-0 lg:w-40 lg:h-40 w-32 h-32 -left-5  bg-[#B1040E] rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
