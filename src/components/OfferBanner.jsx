import { motion } from "framer-motion";

const OfferBanner = () => {
  return (
    <div className="px-10 py-16 bg-[#f7f3ee]">

      <div className="bg-black rounded-[40px] grid md:grid-cols-2 items-center overflow-hidden">




        <div className="p-10">

          <p className="text-pink-500 font-semibold text-lg">
            Limited Time Offer
          </p>




          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h1 className="text-white text-5xl font-bold mt-4 leading-tight">
              Get 50% Off <br /> On New Fashion
            </h1>

            <p className="text-gray-300 mt-5 leading-7">
              Discover trendy outfits and upgrade your wardrobe
              with our latest collection today.
            </p>

          </motion.div>

          <button className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-full hover:scale-105 duration-300">
            Shop Now
          </button>

        </div>




        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
          alt="Fashion"
          className="h-full w-full object-cover"
        />

      </div>

    </div>
  );
};

export default OfferBanner;