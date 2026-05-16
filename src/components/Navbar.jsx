// Navbar.jsx

const Navbar = () => {
  return (
    <div className="bg-white px-10 py-5 flex justify-between items-center shadow-sm sticky top-0 z-50">

      <h1 className="text-5xl font-extrabold text-pink-600 cursor-pointer hover:scale-110 duration-300">
        Clothing
      </h1>

      <ul className="hidden md:flex gap-8 font-semibold text-sm">

        <li>
          <a href="#Home" className="hover:text-pink-600 duration-300">
            HOME
          </a>
        </li>

        <li>
          <a href="#Products" className="hover:text-pink-600 duration-300">
            PRODUCTS
          </a>
        </li>

        <li>
          <a href="#Collection" className="hover:text-pink-600 duration-300">
            COLLECTION
          </a>
        </li>

        <li>
          <a href="#Reviews" className="hover:text-pink-600 duration-300">
            REVIEWS
          </a>
        </li>

        <li>
          <a href="#Contact" className="hover:text-pink-600 duration-300">
            CONTACT
          </a>
        </li>

      </ul>

      <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-pink-600 hover:scale-105 duration-300">
        SHOP NOW
      </button>

    </div>
  );
};

export default Navbar;