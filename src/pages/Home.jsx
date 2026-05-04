import Hero from '../components/sections/Hero';
import ProductShowcase from '../components/sections/ProductShowcase';
import FeaturedExperience from '../components/sections/FeaturedExperience';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Services from '../components/sections/Services';
import Industries from '../components/sections/Industries';
import Solutions from '../components/sections/Solutions';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import TechStack from '../components/sections/TechStack';
import Process from '../components/sections/Process';
import FAQ from '../components/sections/FAQ';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <ProductShowcase />
      <FeaturedExperience />
      <About />
      <Services />
      <Industries />
      <Solutions />
      <WhyChooseUs />
      <TechStack />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
