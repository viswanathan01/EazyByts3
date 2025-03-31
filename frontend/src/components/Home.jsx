import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-200 to-blue-200 overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
            variants={itemVariants}
          >
            Host, Connect, Celebrate: Your Events, Our Platform!
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-6 max-w-lg mx-auto md:mx-0"
            variants={itemVariants}
          >
            Book and learn helpful tips from 1000+ mentors in world-class companies with our global community.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/events">
              <button className="cursor-pointer group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-lg hover:shadow-indigo-300">
                Explore Now
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section (Above text on mobile, right on desktop) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 mt-10 md:mt-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={assets.hero}
            alt="Hero"
            className="w-full max-w-sm md:max-w-md  "
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-24 h-24 bg-indigo-100 rounded-full opacity-50 -translate-x-10 -translate-y-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-50 translate-x-10 translate-y-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
    </section>
  );
};

export default HeroSection;
