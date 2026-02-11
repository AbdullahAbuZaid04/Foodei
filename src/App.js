import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import NewsletterSection from "./components/NewsletterSection/NewsletterSection";
import Footer from "./components/Footer/Footer";
import homeImg from "./assets/home-banner-image.png";
import aboutImg from "./assets/about-background-image.png";

function App() {
  return (
    <div>
      <Layout>
        <Navbar />
        <HeroSection
          title="Your Favourite Food Delivered Hot & Fresh"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis officia nulla ipsam consequuntur laudantium laborum iusto cupiditate, aperiam incidunt."
          buttonText="Order Now"
          contentImg={homeImg}
          imagePosition="right"
        />
        <HeroSection
          title="About Our Service"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis officia nulla ipsam consequuntur laudantium laborum iusto cupiditate, aperiam incidunt."
          buttonText="Learn More"
          contentImg={aboutImg}
          imagePosition="left"
        />
        <FeaturesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
