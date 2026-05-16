const Footer = () => {
  return (
    <div className="bg-[#16141d] text-white px-10 py-14 mt-10">
      <div className="grid md:grid-cols-4 gap-8">

        <div>
          <h1 className="text-3xl font-bold">Fashion Store</h1>
          <p className="mt-3 text-gray-300 leading-7">
            Luxury ecommerce fashion shopping website.
          </p>
        </div>
           <div>
          <h2 className="font-bold text-xl">Links</h2>
          <p className="mt-3">Home</p>
          <p className="mt-2">Shop</p>
          <p className="mt-2">Collections</p>
          <p className="mt-2">Contact</p>
        </div>

           <div>
          <h2 className="font-bold text-xl">Help</h2>
          <p className="mt-3">Privacy Policy</p>
          <p className="mt-2">Terms & Conditions</p>
          <p className="mt-2">Support</p>
        </div>


         <div>
          <h2 className="font-bold text-xl">Social</h2>

          <div className="flex gap-4 mt-5 text-2xl">
            <span>●</span>
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Footer;