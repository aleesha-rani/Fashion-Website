const Hero = () => {
  return (
    <div
      id="home"
      className="grid md:grid-cols-2 items-center gap-10 px-10 py-14 bg-[#f7f3ee]"
    >




      <div>
     <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black animate-heading">
  Discover <br /> Your Style <br /> Today!
</h1>

      <p className="mt-5 text-gray-600 text-lg animate-slideLeft">
  Explore the latest fashion trends and discover outfits
  that match your unique style perfectly.
</p>

        <button className="mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-pink-600 hover:scale-105 duration-300">
          BUY NOW
        </button>
      </div>





      <div>
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
          alt="Fashion Model"
          className="rounded-3xl w-full h-96 object-cover shadow-lg hover:scale-105 duration-500"
        />
      </div>

    </div>
  );
};

export default Hero;