const reviews = [
  {
    name: "Sophia",
    text: "Amazing quality and beautiful fashion collection!",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },

  {
    name: "Emma",
    text: "I love the modern style and fast delivery.",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },

  {
    name: "Olivia",
    text: "Best shopping experience ever. Highly recommended!",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
]

const Reviews = () => {
  return (
    <div className="px-10 py-16 bg-[#f7f3ee]">

      <h1 className="text-5xl font-bold text-center">
        Customer Reviews
      </h1>

      <p className="text-center text-gray-500 mt-4">
        What our customers say about us
      </p>



      <div className="grid md:grid-cols-3 gap-6 mt-14">

        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-sm hover:-translate-y-2 duration-300"
          >

            <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt="Customer"
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h2 className="font-bold text-xl">
                  {item.name}
                </h2>

                <p className="text-yellow-500">
                  ★★★★★
                </p>
              </div>

            </div>

            <p className="text-gray-500 mt-6 leading-7">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Reviews