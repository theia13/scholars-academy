import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Scholars Academy</h3>
            <p className="text-gray-400 leading-relaxed">
              Nurturing minds, building futures, and creating leaders of
              tomorrow through excellence in education.
            </p>
            <div className="flex space-x-4 pt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Gallery", "Academics", "Aadmissions", "About"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">info@scholars.edu</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <span className="text-gray-400">
                  123 Education Avenue
                  <br />
                  Knowledge City, ST 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">
                  Mon-Fri: 8:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-gray-400">
              Subscribe to our newsletter for updates and news.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-200"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Scholars Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
