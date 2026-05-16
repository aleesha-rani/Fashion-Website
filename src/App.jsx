// App.jsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Collection from "./components/Collection";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>



      <section id="Home">
        <Navbar />
        <Hero />
      </section>




      <section id="Products">
        <Products />
      </section>



      <section id="Collection">
        <Collection />
      </section>




      <section id="Reviews">
        <Reviews />
      </section>





      <section id="Contact">
        <Contact />
      </section>



      <section>
        <Footer />
      </section>

    </div>
  );
};

export default App;