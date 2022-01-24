import Blog from "../components/Blog";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Mission />
      <Team />
      <Blog />
      <Footer />
    </main>
  );
}
