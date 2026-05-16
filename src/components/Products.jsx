const products = [
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
    title: "Women Blazer",
    price: "$40",
  },

  {
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
    title: "Luxury Dress",
    price: "$60",
  },

  {
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop",
    title: "Spring Collection",
    price: "$80",
  },

  {
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    title: "Fashion Style",
    price: "$30",
  },

  {
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop",
    title: "Modern Outfit",
    price: "$25",
  },
]

const Products = () => {
  return (
    <div className="px-10 py-10 bg-[#f7f3ee] grid md:grid-cols-5 gap-5">

      {products.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-3xl shadow-sm text-center"
        >

          <img
            src={item.image}
            alt=""
            className="rounded-2xl h-72 w-full object-cover"
          />

          <h2 className="mt-4 font-bold text-xl">
            {item.title}
          </h2>

          <p className="text-gray-500">
            {item.price}
          </p>

          <button className="mt-4 bg-[#d9c3a3] px-5 py-2 rounded-full">
            Shop Now
          </button>

        </div>
      ))}

    </div>
  )
}

export default Products