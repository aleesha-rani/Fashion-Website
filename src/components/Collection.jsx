const Collection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5 px-10 py-10 bg-[#f7f3ee]">

      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
        className="rounded-3xl h-full object-cover"
      />

      <div className="bg-white rounded-3xl flex flex-col justify-center items-center p-10 shadow-md">

        <h2 className="text-6xl font-bold text-[#c9a56d]">
          30%
        </h2>

        <p className="text-3xl font-bold mt-2">
          OFF
        </p>

        <p className="mt-3 text-gray-500">
          Spring Collection
        </p>

        <button className="mt-5 bg-black text-white px-6 py-3 rounded-full">
          SHOP NOW
        </button>

      </div>

      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
        className="rounded-3xl h-full object-cover"
      />

    </div>
  )
}

export default Collection