import Navbar from "./assets/components/Navbar/Navbar";
import Hero from "./assets/components/Hero/Hero";
import Features from "./assets/components/Features/Features";
import CTA from "./assets/components/CTA/CTA";
import Footer from "./assets/components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
