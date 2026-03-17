import Navbar from "./assets/components/Navbar/Navbar";
import Hero from "./assets/components/Hero/Hero";
import Features from "./assets/components/Features/Features";
import CTA from "./assets/components/CTA/CTA";
import Footer from "./assets/components/Footer/Footer";
import Attribution from "./assets/components/Attribution/Attribution";

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
      <Attribution />
    </>
  );
}

export default App;
