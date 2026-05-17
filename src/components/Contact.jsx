// Contact.jsx

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="px-10 py-20 bg-[#f7f3ee] relative overflow-hidden">




      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="w-52 h-52 bg-pink-300 rounded-full absolute top-10 -left-10 opacity-20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="w-60 h-60 bg-pink-400 rounded-full absolute top-20 -right-10 opacity-20 blur-3xl"
      />



      <motion.div
        animate={{ rotate: 360, y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-20 text-pink-400 text-4xl"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ rotate: -360, y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-32 right-32 text-pink-500 text-3xl"
      >
        ✦
      </motion.div>

      <div className="text-center relative z-10">
        <p className="text-pink-600 font-semibold text-lg">Contact Us</p>

        <h1 className="text-5xl font-bold mt-3">
          Get In Touch
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We'd love to hear from you. Feel free to contact us
          anytime for fashion inquiries, orders, or support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-16 relative z-10">
        {/* LEFT SIDE */}
        <div className="bg-white p-10 rounded-[30px] shadow-md relative overflow-hidden">

          <motion.div
            animate={{ y: [0, -10, 0], rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-6 right-8 text-pink-400 text-2xl"
          >
            ✦
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-10 left-10 text-pink-500 text-xl"
          >
            ✦
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 right-16 text-pink-300 text-3xl"
          >
            ✦
          </motion.div>

          <h2 className="text-3xl font-bold mb-8">
            Contact Information
          </h2>

          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <div className="bg-pink-100 p-4 rounded-full">
                <FaPhoneAlt className="text-pink-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-gray-500">+92 305 4781911</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-pink-100 p-4 rounded-full">
                <FaEnvelope className="text-pink-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-gray-500">
                  aleesharani354@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-pink-100 p-4 rounded-full">
                <FaMapMarkerAlt className="text-pink-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-gray-500">
                  Sargodha, Punjab, Pakistan
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-10 rounded-[30px] shadow-md relative overflow-hidden">

          {/* RIGHT BOX STARS */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-8 left-8 text-pink-400 text-2xl"
          >
            ✦
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-12 right-10 text-pink-500 text-2xl"
          >
            ✦
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 text-pink-300 text-3xl"
          >
            ✦
          </motion.div>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-4 rounded-full outline-none focus:border-pink-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-4 rounded-full outline-none focus:border-pink-600"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 p-4 rounded-full outline-none focus:border-pink-600"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-4 rounded-[20px] outline-none focus:border-pink-600"
            ></textarea>

            <button className="bg-pink-600 text-white px-8 py-4 rounded-full hover:scale-105 duration-300">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;